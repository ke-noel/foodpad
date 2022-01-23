import React from "react";
import { Card, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import GroceryItem from "./GroceryItem";

import './GroceryList.css'
class GroceryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: ["avocado", "chicken"], inputValue: "" }
    }
    //Helper funcs go here
    componentDidMount() {
    }

    handleAddClick() {
        let newItems = [this.state.inputValue]
        newItems = newItems.concat(this.state.items)
        this.setState({ items: newItems, inputValue: "" })
    }

    handleAddEnter(event) {
        if (event.key === 'Enter') {
            this.handleAddClick();
        }
    }

    render() {
        return (
            <div className="GroceryList">
                <div className='add-item-box'>
                    <Row>
                        <Col>
                        </Col>
                        <Col>
                            <input value={this.state.inputValue} onChange={(event) => this.setState({ inputValue: event.target.value })} onKeyDown={(event) => this.handleAddEnter(event)} className='add-item-input' placeholder='Add an item...' />
                        </Col>
                        <Col>
                            <FontAwesomeIcon icon={faPlus} onClick={() => this.handleAddClick()} />
                        </Col>
                    </Row>
                </div>
                <Card className="groceries">
                    <Card.Body>
                        {this.state.items.map((item) => <GroceryItem key={item} item={item} />)}
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default GroceryList