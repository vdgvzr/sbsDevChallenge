import React from 'react'
import Home from './singles/Home'

const Page = ({ page }) => {
    if (page) {
        switch (page?.meta?.type) {
            case 'page':
                switch (page.title) {
                    case 'Home':
                        return <Home page={page} />
                }
            default:
                console.error('Unknown content type.')
        }
    }
    return (
        <>
        </>
    )
}

export default Page