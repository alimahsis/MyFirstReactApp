import React from "react";
import { Card, Button } from "react-bootstrap";

function index(props) {
    const app = props.value;
    return (
        <Card>
            <Card.Img variant="top" src={`http://s.anardoni.com/${app.photos.icon.path}`} />
            <Card.Body>
                <Card.Title>{app.name}</Card.Title>
                <Card.Subtitle style={{ height: "50px" }}>{app.content.subtitle}</Card.Subtitle>
                <Button variant="primary" href={`http://anardoni.com/ios/app/${app.id}`}>
                    دانلود
                </Button>
            </Card.Body>
        </Card>
    );
}

export default index;
