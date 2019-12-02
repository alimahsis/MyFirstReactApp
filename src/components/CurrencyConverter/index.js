import React, { Component } from "react";
import TempInput from "./TempInput";

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      convertTo: "",
      value: 0,
      currency: 12000
    };
  }

  handleChange = e => {
    const convertTo = e.target.id === "dolar" ? "toman" : "dolar";
    this.setState({
      convertTo: convertTo,
      value: this.uncommafy(e.target.value) || 0
    });
  };

  handleChangeCurrency = e => {
    this.setState({
      currency: this.uncommafy(e.target.value) || 0
    });
  };

  convertCurrency(convertTo, value) {
    // let value = this.uncommafy(value);
    // let convertTo = this.uncommafy(convertTo);
    return (
      (convertTo === "dolar"
        ? value / this.state.currency
        : value * this.state.currency) || 0
    );
  }

  commafy(num) {
    var str = num.toString().split(".");
    str[0] = str[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    return str.join(".");
  }

  uncommafy(str) {
    return parseFloat(str.replace(/,/g, ""));
  }

  render() {
    const { value, convertTo } = this.state;

    var dolar =
      convertTo === "dolar" ? this.convertCurrency("dolar", value) : value;
    var toman =
      convertTo === "toman" ? this.convertCurrency("toman", value) : value;
    var currency = this.state.currency;

    toman = this.commafy(toman);
    dolar = this.commafy(dolar);
    currency = this.commafy(currency);

    if (toman == Infinity) throw new Error("مقدار ورودی بسیار زیاد است");

    return (
      <>
        <div className="row" style={{ direction: "ltr" }}>
          <div className="col-md">
            <TempInput
              id="dolar"
              type="دلار"
              placeholder="مقدار به دلار"
              value={dolar}
              onChange={this.handleChange}
              autoFocus
            ></TempInput>
          </div>
          <div className="col-md">
            <TempInput
              id="fee"
              type="فی"
              placeholder="قیمت هر دلار"
              value={currency}
              onChange={this.handleChangeCurrency}
              // disabled="disabled"
            ></TempInput>
          </div>
          <div className="col-md">
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
