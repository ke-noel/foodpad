import React from "react";
import { Row, Col } from "react-bootstrap"

const ingredients = require("./ingredients.json")

class GroceryItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { bestBy: new Date() }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        console.log(this.props.item)
        return (
            <div className="GroceryItem">
                <li key={this.props.item}>
                    <Row>
                        <Col>
                            {this.props.item}
                        </Col>
                        <Col>
                            {ingredients[this.props.item].fridge}
                        </Col>
                    </Row>
                </li>
            </div>
        )
    }
}

export default GroceryItem