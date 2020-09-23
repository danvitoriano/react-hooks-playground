import React from "react";
import Button from "../components/Button";

export default class Effect extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        document.title = `Você clicou ${this.state.count} vezes`;
    }
    componentDidUpdate() {
        document.title = `Você clicou ${this.state.count} vezes`;
    }

    render() {
        return (
            <div>
                <p>Você clicou {this.state.count} vezes</p>
                <Button onClick={() => this.setState({ count: this.state.count + 1 })}>Click me</Button>
            </div>
        );
    }
}
