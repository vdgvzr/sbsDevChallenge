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
                    $projectImage = $row->image->one();
                    $projects[] = [
                        'projectTitle' => $row->title,
                        'projectImage' => $projectImage ? $projectImage->getUrl() : null,
                        'url' => $row->url
                    ];
                }
                $matrixBlocks[] = [
                    'projectsPanel' => [
                        'projects' => $projects,
                    ]
                ];
                break;
            case 'contactCta':
                $matrixBlocks[] = [
                    'contactCta' => [
                        'cta' => $block->cta,
                        'ctaUrl' => $block->ctaUrl
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
            case 'productscarousel':
                $products = [];
                foreach ($block->products as $row){
                    $productImage = $row->image->one();
                    $products[] = [
                        'productTitle' => $row->title,
                        'productImage' => $productImage ? $productImage->getUrl() : null,
                        'url' => $row->url
                    ];
                }
                $matrixBlocks[] = [
                    'productscarousel' => [
                        'heading' => $block->heading,
                        'products' => $products
                    ]
                ];
                break;
            case 'testimonialscarousel':
                $testimonials = [];
                foreach ($block->testimonials as $row){
                    $testimonialLogo = $row->logo->one();
                    $testimonials[] = [
                        'testimonialTitle' => $row->title,
                        'rating' => $row->rating,
                        'testimonialLogo' => $testimonialLogo ? $testimonialLogo->getUrl() : null,
                        'testimonial' => $row->redactor->getRawContent(),
                        'client' => $row->client,
                        'url' => $row->url
                    ];
                }
                $matrixBlocks[] = [
                    'testimonialscarousel' => [
                        'heading' => $block->heading,
                        'testimonials' => $testimonials
                    ]
                ];
                break;
            case 'ctaPanel':
                $button = [];
                foreach ($block->ctaButton as $row){
                    $button[] = [
                        'buttonText' => $row->buttonText,
                        'buttonUrl' => [
                            'linkUrl' => $row->buttonUrl->linkUrl,
                            'external' => $row->buttonUrl->external,
                        ]
                    ];
                }
                $matrixBlocks[] = [
                    'ctaPanel' => [
                        'heading' => $block->heading,
                        'button' => $button
                    ]
                ];
                break;
            case 'textWithImagePanel':
                $linkCta = [];
                $textArr = [];
                foreach ($block->linkCta as $row){
                    $linkCta[] = [
                        'linkText' => $row->linkText,
                        'linkUrl' => $row->linkUrl,
                        'external' => $row->external,
                    ];
                }
                foreach ($block->text as $row){
                    $textArr[] = [
                        'redactor' => $row->redactor->getRawContent(),
                    ];
                }
                $image = $block->image->one();
                $matrixBlocks[] = [
                    'textWithImagePanel' => [
                        'heading' => $block->heading,
                        'linkCta' => $linkCta,
                        'text' => $textArr,
                        'image' => $image ? $image->getUrl() : null,
                    ]
                ];
                break;
            case 'partnerPanel':
                $logos = [];
                foreach ($block->partnerLogos->all() as $row){
                    $logos[] = [
                        'logo' => $row->getUrl(),
                    ];
                }
                $matrixBlocks[] = [
                    'partnerPanel' => [
                        'heading' => $block->heading,
                        'logos' => $logos
                    ]
                ];
                break;
            case 'promisePanel':
                $promises = [];
                foreach ($block->promise as $row){
                    $promiseLogo = $row->logo->one();
                    $promises[] = [
                        'promiseHeading' => $row->promiseHeading,
                        'promiseLogo' => $promiseLogo ? $promiseLogo->getUrl() : null,
                    ];
                }
                $button = [];
                foreach ($block->ctaButton as $row){
                    $button[] = [
                        'buttonText' => $row->buttonText,
                        'buttonUrl' => [
                            'linkUrl' => $row->buttonUrl->linkUrl,
                            'external' => $row->buttonUrl->external,
                        ]
                    ];
                }
                $matrixBlocks[] = [
                    'promisePanel' => [
                        'heading' => $block->heading,
                        'text' => $block->text,
                        'promises' => $promises,
                        'ctaButton' => $button,
                    ]
                ];
                break;
            case 'contactPanel':
                $linkCta = [];
                foreach ($block->linkcta as $row){
                    $linkCta[] = [
                        'linkText' => $row->linkText,
                        'linkUrl' => $row->linkUrl,
                        'external' => $row->external,
                    ];
                }
                $matrixBlocks[] = [
                    'contactPanel' => [
                        'heading' => $block->heading,
                        'text' => $block->text,
                        'linkCta' => $linkCta,
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
                    $logo = $entry->siteLogo->one();
                    return [
                        'pages' => $pageData,
                        'footerText' => $entry->footerText,
                        'logo' => $logo ? $logo->getUrl() : null,
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