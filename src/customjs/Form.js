import React, { Component } from "react";



class Form extends Component {
    constructor(props) {
        super(props);

        this.state = { value: '' };

    }

    handleChange(event) {

        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {

        event.preventDefault();

        this.props.history.push({
            pathname: '/',
            search: '?',
            state: { detail: this.state.value }
        })
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    Name:
              <input type="text" onChange={this.handleChange.bind(this)} />
                </label>
                <button>submit</button>
            </form>
        );
    }
}

export default Form;