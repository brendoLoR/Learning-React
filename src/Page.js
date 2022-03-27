import React, { Component } from "react";
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"

export default class Page extends Component {
    constructor(props) {
        super(props)
        this.state = { color: props.color }
    }

    render() {
        return (
            <div className="body-content">
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }

}