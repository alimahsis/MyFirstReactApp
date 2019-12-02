import React, { Component } from "react";
import { InputGroup, FormControl } from "react-bootstrap";

class TempInput extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    if (this.props.ref) this.props.ref.current.focus();
  }

  render() {
    const { id, type, placeholder, value, disabled, onChange } = this.props;
    return (
      <>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id={`tempInput${id}`}>{type}</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            id={id}
            placeholder={placeholder}
            value={value === 0 ? "" : value}
            aria-label={type}
            onChange={onChange}
            disabled={disabled}
            aria-describedby={`tempInput${id}`}
            autoFocus={this.props.autoFocus}
          />
        </InputGroup>
      </>
    );
  }
}

export default TempInput;
