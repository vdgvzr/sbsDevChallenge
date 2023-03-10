import React, { Component } from 'react'
import axios from 'axios'

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
            console.log(response.data);
            const site = response.data;
            this.setState({ site });
        }).catch((error) => {
            console.error(error.message);
        });

        /* Get singles */
        axios.get(this.path + '.json' + this.query).then((response) => {
            console.log(response.data);
            const page = response.data;
            this.setState({ page });
        }).catch((error) => {
            console.error(error.message);
        });
    }

    render() {
        return(
            <div>
                Hello World!
            </div>
        )
    }
}