import React, { useEffect } from "react";
import { InputGroup, FormControl } from "react-bootstrap";

function TempInput(props) {
    useEffect(() => {
        if (props.ref) props.ref.current.focus();
    }, []);

    const { id, type, placeholder, value, disabled, onChange } = props;
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
                    autoFocus={props.autoFocus}
                />
            </InputGroup>
        </>
    );
}

export default TempInput;
