import React from "react";

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
        return (
            <div className="GroceryItem">

            </div>
        )
    }
}

export default GroceryItem