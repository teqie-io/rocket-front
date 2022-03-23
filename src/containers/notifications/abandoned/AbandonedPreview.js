import React from "react";
import { Row, Col } from "antd";

import AbandonedNotifications from "./abandonedNotifications/AbandonedNotifications";

class AbandonedPreview extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Row justify="center">
          <Col
            xs={22}
            sm={12}
            style={{
              borderRight: "solid 1.3px #AAAAAA",
              borderBottom: "solid 1.3px #AAAAAA",
              padding: "20px",
            }}
          >
            <h3
              style={{
                display: "block",
                width: "85%",
                margin: "0 auto 10px auto",
              }}
            >
              Android
            </h3>
            <Row style={{ height: "100%" }} align="top" justify="center">
              <AbandonedNotifications android {...this.props} />
            </Row>
          </Col>
          <Col
            xs={22}
            sm={12}
            style={{
              borderBottom: "solid 1.3px #AAAAAA",
              padding: "20px",
            }}
          >
            <h3 style={{ margin: "0 auto 10px auto" }}>Windows 10</h3>
            <AbandonedNotifications windows10 {...this.props} />
          </Col>
        </Row>
        <Row justify="center">
          <Col
            xs={22}
            sm={12}
            style={{
              borderRight: "solid 1.3px #AAAAAA",
              padding: "20px",
            }}
          >
            <h3
              style={{
                display: "block",
                width: "85%",
                margin: "0 auto 10px auto",
              }}
            >
              Mac OS
            </h3>
            <Row style={{ height: "100%" }} align="top" justify="center">
              <AbandonedNotifications mac {...this.props} />
            </Row>
          </Col>
          <Col
            xs={22}
            sm={12}
            style={{
              padding: "20px",
            }}
          >
            <h3 style={{ margin: "0 auto 10px auto" }}>Windows 8 and older</h3>
            <AbandonedNotifications windows8 {...this.props} />
          </Col>
        </Row>
      </>
    );
  }
}

export default AbandonedPreview;
