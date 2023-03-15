import React, { Component } from 'react'
import axios from 'axios'
import Layout from './components/layouts/Layout'
import Page from './components/pages/Page'
import { handleIntersectionObserver } from './assets/js/lib/handleIntersectionObserver'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            site: null,
            page: null
        }

        this.path = window.location.pathname;
        this.query = window.location.search;
    }

    componentDidMount() {
        /* Get site globals */
        axios.get("/site.json").then((response) => {
            const site = response.data;
            this.setState({ site });
        }).catch((error) => {
            console.error(error.message);
        });

        /* Get singles */
        axios.get(this.path + '.json' + this.query).then((response) => {
            const page = response.data;
            this.setState({ page });
        }).catch((error) => {
            console.error(error.message);
        });

        setTimeout(() => {
            // handleScroll()
            handleIntersectionObserver()
        }, [1000])
    }

    render() {
        return(
            <Layout site={this.state.site}>
                <Page page={this.state.page}/>
            </Layout>
        )
    }
}