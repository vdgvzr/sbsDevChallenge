import React, { Component } from 'react'
import axios from 'axios'
import Layout from './components/layouts/Layout'
import Page from './components/pages/Page'
import { handleIntersectionObserver } from './assets/js/lib/handleIntersectionObserver'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            error: null,
            site: null,
            page: null
        }

        this.path = window.location.pathname;
        this.query = window.location.search;
        this.baseUrl = process.env.REACT_APP_SITE_URL
        this.endpoints = [
            '/site.json',
            this.path + '.json' + this.query
        ]
    }

    async componentDidMount() {
        let token = localStorage.getItem("token")
        axios.defaults.headers.common['Authorization'] = token

        axios.all(this.endpoints.map((endpoint) => axios.get(this.baseUrl + endpoint))).then(
            axios.spread(({data: site}, {data: page}) => {
                this.setState({ site, page })
            })
        )
        .then(
            this.setState({ loading: false })
        )
        .catch((error) => {
            console.error(error.message)
            this.setState({ error: error.message })
        })

        setTimeout(() => {
            handleIntersectionObserver()
        }, [1000])
    }

    render() {
        return(
            <Layout site={this.state.site} error={this.state.error}>
                <Page page={this.state.page} loading={this.state.loading}/>
            </Layout>
        )
    }
}
