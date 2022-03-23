import React from "react";
import { postNotificationDetails } from "../../../adaptors/AbandonedAdaptor";
import { Row, Col } from "antd";
import AbandonedForm from "./AbandonedForm";
import AbandonedPreview from "./AbandonedPreview";

//const domain = JSON.parse(localStorage.getItem("shop_details")).shop_info
//  .domain;

const domain ="awdawdwadwadwad"

const initialValues = {
  Title: "Thanks for joining us",
  targetLink: `https://${domain}/cart`,
  message: "Buy them now before they get out of stock",
  buttonName: "Shop now",
  buttonLink: `https://${domain}/cart`,
};

class Abandoned extends React.Component {
  constructor() {
    super();
    this.state = Object.assign(
      {
        buttons: [
          { name: initialValues.buttonName, link: initialValues.buttonLink },
        ],
      },
      initialValues
    );
  }

  onValuesChange = (values) => {
    if (values.button) return;
    else this.setState(values);
  };

  onTick = (buttonObj) => {
    console.log(buttonObj);
    if (!buttonObj) {
      buttonObj = { name: this.state.buttonName, link: this.state.buttonLink };
      this.setState({
        buttons: [(this.state.buttons[0] = buttonObj)],
      });
    } else {
      const isDuplicate = (data, obj) =>
        data.some((el) =>
          Object.entries(obj).every(([key, value]) => value === el[key])
        );
      if (!isDuplicate(this.state.buttons, buttonObj)) {
        this.setState({
          buttons: [...this.state.buttons, buttonObj],
        });
      }
    }
  };

  onDelete = (index) => {
    console.log(index);
    let x;
    if (index === null) {
      x = 0;
      this.setState({ buttonName: "", buttonLink: "" });
    } else x = this.state.buttons.indexOf(index);
    console.log(x);
    const list = this.state.buttons;
    list.splice(x, 1);
    this.setState({ buttons: list });
  };

  onSubmit = async () => {
    const details = this.state;
    delete details.buttonLink;
    delete details.buttonName;
    console.log(JSON.stringify(details));
    const notifDeatils = await postNotificationDetails(details);
    console.log(notifDeatils);
  };

  render() {
    console.log(this.state);
    return (
      <Row type="flex">
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={9}
          style={{ padding: 0, minHeight: "calc(100vh - 62px)" }}
        >
          <div
            style={{
              background: "#F8F9FA",
              borderRight: "solid 1.3px #AAAAAA",
              borderTop: "solid 1.3px #AAAAAA",
              padding: "20px",
              height: "100%",
            }}
          >
            <AbandonedForm
              onValuesChange={this.onValuesChange}
              onTick={this.onTick}
              onDelete={this.onDelete}
              onSubmit={this.onSubmit}
              initialValues={initialValues}
              buttons={this.state.buttons}
            />
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={15}
          style={{ minHeight: "calc(100vh - 62px)" }}
        >
          <AbandonedPreview
            {...this.state}
            style={{
              height: "100%",
            }}
          />
        </Col>
      </Row>
    );
  }
}

export default Abandoned;
