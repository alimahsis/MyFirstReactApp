import React, { Component } from "react";
import TempInput from "./TempInput";

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      convertTo: "",
      value: 0
    };
  }

  handleChange = e => {
    const convertTo = e.target.id === "dolar" ? "toman" : "dolar";
    this.setState({ convertTo: convertTo, value: e.target.value });
  };

  convertCurrency(convertTo, value) {
    return convertTo === "dolar" ? value / 12000 : value * 12000;
  }

  render() {
    const { value, convertTo } = this.state,
      dolar =
        convertTo === "dolar" ? this.convertCurrency("dolar", value) : value,
      toman =
        convertTo === "toman" ? this.convertCurrency("toman", value) : value;

    return (
      <>
        <div className="row" style={{ direction: "ltr" }}>
          <div className="col-sm">
            <TempInput
              id="dolar"
              type="$"
              placeholder="مقدار به دلار"
              value={dolar}
              onChange={this.handleChange}
            ></TempInput>
          </div>
          <div className="col-sm">
            <TempInput
              id="toman"
              type="تومان"
              placeholder="مقدار به تومان"
              value={toman}
              onChange={this.handleChange}
            ></TempInput>
          </div>
        </div>
      </>
    );
  }
}

export default index;
