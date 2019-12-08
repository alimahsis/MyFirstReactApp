import React, { Component } from "react";
import Counters from "./Counters";
import Navbar from "./Navbar";

class Index extends Component {
    state = {
        counters: [
            { id: 1, title: "product one", value: 2 },
            { id: 2, title: "product two", value: 1 },
            { id: 3, title: "product three", value: 0 },
            { id: 4, title: "product four", value: 1 },
            { id: 5, title: "product five", value: 2 }
        ]
    };

    componentDidUpdate() {
        localStorage.setItem("cart", JSON.stringify(this.state));
    }

    componentDidMount() {
        this.setState(JSON.parse(localStorage.getItem("cart")));
    }

    handleDelete = counterId => {
        this.setState({ counters: this.state.counters.filter(c => c.id !== counterId) });
    };

    handleIncrement = counterId => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counterId);
        counters[index].value++;
        this.setState({ counters });
    };

    handleDecrement = counterId => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counterId);
        if (counters[index].value > 0) {
            counters[index].value--;
            this.setState({ counters });
        } else {
            throw new Error("تعداد کالا نمی تواند از صفر کمتر شود");
        }
    };

    handleInsert = (title, value) => {
        const counters = [...this.state.counters];
        counters.push({
            id: counters.length !== 0 ? counters[counters.length - 1].id + 1 : 1,
            title: title,
            value: value
        });
        this.setState({ counters });
    };

    handleChangeTitle = (counterId, title) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counterId);
        counters[index].title = title;
        this.setState({ counters });
    };

    render() {
        return (
            <React.Fragment>
                <Navbar
                    totalProduct={this.state.counters.filter(p => p.value > 0).length}
                    onInsert={this.handleInsert}
                ></Navbar>
                <Counters
                    counters={this.state.counters}
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onChangeTitle={this.handleChangeTitle}
                ></Counters>
            </React.Fragment>
        );
    }
}

export default Index;
