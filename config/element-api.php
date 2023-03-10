<?php

use craft\elements\Entry;
use craft\elements\GlobalSet;
use craft\helpers\UrlHelper;
use craft\helpers\ArrayHelper;
use craft\models\Section;

function transformHomepageHeader(Entry $entry){
    $matrixBlocks = [];
    $blocks = $entry->homepageHeader->all();
    foreach ($blocks as $block) {
        switch ($block->type->handle) {
            case 'headerContent':
                $backgroundImage = $block->backgroundImage->one();
                $matrixBlocks[] = [
                    'headerContent' => [
                        'headerText' => $block->headerText,
                        'backgroundImage' => $backgroundImage ? $backgroundImage->getUrl() : null,
                        'backgroundImageOpacity' => $block->backgroundImageOpacity->value,
                        'subHeader' => $block->subHeader,
                    ]
                ];
                break;
            case 'projectsPanel':
                $projects = [];
                foreach ($block->projects as $row){
                    $projectImage = $row->projectImage->one();
                    $projects[] = [
                        'projectTitle' => $row->projectTitle,
                        'projectImage' => $projectImage ? $projectImage->getUrl() : null,
                    ];
                }
                $matrixBlocks[] = [
                    'projectsPanel' => [
                        'projects' => $projects,
                    ]
                ];
                break;
        }
    }
    return $matrixBlocks;
}

function transformContentMain(Entry $entry){
    $matrixBlocks = [];
    $blocks = $entry->contentMain->all();
    foreach ($blocks as $block) {
        switch ($block->type->handle) {
            case 'introtextpanel':
                $matrixBlocks[] = [
                    'introtextpanel' => [
                        'introText' => $block->introText,
                        'subHeader' => $block->subHeader,
                    ]
                ];
                break;
        }
    }
    return $matrixBlocks;
}

$pageData = [];

return [
    'endpoints' => [
        /** 
         * Globals
         */
        
        // Site settings
        // =========================================================================
        'site.json' => function() {
            return[
                'elementType' => 'craft\elements\GlobalSet',
                'criteria' => ['handle' => 'siteSettings'],
                'transformer' => function(GlobalSet $entry) {
                    $singleSections = ArrayHelper::where(\Craft::$app->sections->getAllSections(), 
                    'type', Section::TYPE_SINGLE);

                    $singles = Entry::find()
                        ->sectionId(ArrayHelper::getColumn($singleSections, 'id'))
                        ->all();

                    
                    foreach ($singles as $page) {
                        $pageData[] = [
                            'title' => $page->title,
                            'url' => $page->url,
                            'slug' => $page->slug,
                            'jsonUrl' => UrlHelper::url("{$page->slug}.json")
                        ];
                    }

                    return [
                        'pages' => $pageData,
                        'footerText' => $entry->footerText,
                    ];
                },
                'pretty' => true,
                'one' => true,
                'meta' => [
                    'type' => 'sitedata'
                ],
            ];
        },
        /** 
         * Singles
         */
        
        // Home
        // =========================================================================
        '<_:home\.json|\.json>'  => function() {
            return[
                'elementType' => 'craft\elements\Entry',
                'criteria' => ['slug' => 'home'],
                'transformer' => function(Entry $entry) {
                    return [
                        'title' => $entry->title,
                        'homepageHeader' => transformHomepageHeader($entry),
                        'contentMain' => transformContentMain($entry),
                    ];
                },
                'pretty' => true,
                'one' => true,
                'meta' => [
                    'type' => 'page'
                ],
            ];
        },
    ]
];