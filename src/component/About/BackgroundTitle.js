import React, { Component } from 'react'
import { Container } from "reactstrap";

export default class BackgroundTitle extends Component {
    render() {
        return (
            <section className={"about-title-area"} style={{ backgroundImage: "url(" + this.props.Background + ")" }}>
                <Container>
                    <h1>{this.props.Title}</h1>
                </Container>
            </section>
        )
    }
}
