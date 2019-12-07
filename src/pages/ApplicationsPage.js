import React, { Component } from "react";
import axios from "axios";
import AppCard from "../components/AppCard";
import { Row, Col } from "react-bootstrap";

class AplicationsPage extends Component {
    state = {
        apps: null
    };

    componentDidMount() {
        axios
            .get(
                "https://a.anardoni.com/packs/dzVxvUe?population=_applications"
            )
            .then(res => {
                this.setState({ apps: res.data._applications });
            })
            .catch(err => {
                throw new Error("ارور در دریافت اطلاعات از سرور");
            });
    }

    renderApps = apps => {
        return apps.map(app => (
            <Col xs="3" style={{ marginBottom: "30px" }}>
                <AppCard value={app} key={app.id}></AppCard>
            </Col>
        ));
    };

    render() {
        const { apps } = this.state;
        return (
            <Row
                className="text-right"
                style={{ marginTop: "30px", direction: "rtl" }}
            >
                {apps ? this.renderApps(apps) : "loading..."}
            </Row>
        );
    }
}

export default AplicationsPage;
