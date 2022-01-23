import React from "react";
import { Row, Col, Card, Modal } from "react-bootstrap"
import Countdown from 'react-countdown'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import './GroceryItem.css'

import mealdbService from '../services/mealdbService'

const ingredients = require("./ingredients.json")

class GroceryItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { bestBy: new Date(), show: false, recipe: "" }
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    strToSec(str) {
        if (str.includes("m")) {
            return this.monthsToSec(str.substr(0, 1))
        }
        if (str.includes("w")) {
            return this.weeksToSec(str.substr(0, 1))
        }
        if (str.includes("d")) {
            return this.daysToSec(str.substr(0, 1))
        }
    }

    monthsToSec(months) {
        return parseInt(months) * 2600000000
    }

    weeksToSec(weeks) {
        return parseInt(weeks) * 604800000
    }

    daysToSec(days) {
        return parseInt(days) * 86400000
    }

    handleClose() {
        this.setState({ show: false })
    }

    handleOpen() {
        this.setState({ show: true })
    }

    render() {
        const item = ingredients[this.props.item]
        return (
            <div className="GroceryItem" key={this.props.item}>
                <Card className="rounded-pill">
                    <Card.Body>
                        <Row>
                            <Col>
                                <FontAwesomeIcon icon={faTimes} />
                            </Col>
                            <Col className="col-5" style={{ justifyContent: 'left' }} onClick={() => { this.setState({ show: true }) }}>
                                {item.ingredient}
                            </Col>
                            <Col className="col-2" style={{ justifyContent: 'right' }}>
                                <Countdown date={Date.now() + this.strToSec(item.fridge)} renderer={({ days }) => { return <span>{days}</span> }} />
                            </Col>
                            <Col>
                                <p>Day(s)</p>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                <Modal show={this.state.show} onHide={() => { this.setState({ show: false }) }}>
                    <Modal.Header closeButton>
                        <Modal.Title>{item.recipe.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {item.recipe.desc}
                        <ul>
                            {item.recipe.steps.map((step) => <li>{step}</li>)}
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default GroceryItem