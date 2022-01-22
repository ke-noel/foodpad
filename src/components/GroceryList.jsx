import React from "react";
import { Card } from "react-bootstrap"
import GroceryItem from "./GroceryItem";

const listItems = (items) => {
    return (
        items.map((item) => <GroceryItem key={item} item={item} />)
    )
}
class GroceryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: ["avocado", "chicken"] }
    }
    //Helper funcs go here
    componentDidMount() {
    }


    render() {
        return (
            <div>
                <Card>
                    <Card.Title>
                        Your Groceries
                    </Card.Title>
                    <Card.Body>
                        <ul>
                            {listItems(this.state.items)}
                        </ul>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default GroceryList