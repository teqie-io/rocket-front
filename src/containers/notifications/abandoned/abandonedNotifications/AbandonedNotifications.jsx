import React from "react";
import { Card, Row, Col } from "antd";
import "./AbandonedNotifications.scss";

class AbandonedNotifications extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {
      Title,
      targetLink,
      message,
      buttons,
      android,
      windows8,
      windows10,
      mac,
    } = this.props;
    return (
      <Card
        className={
          android
            ? "android"
            : windows8
            ? "windows8"
            : windows10
            ? "windows10"
            : mac
            ? "mac"
            : ""
        }
      >
        <Row gutter={10} style={mac ? "" : { marginBottom: "10px" }}>
          <Col span={mac ? 3 : 4}>
            <img
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              style={{ objectFit: "contain", width: "100%" }}
            />
          </Col>
          <Col span={mac ? 18 : 19} className="body">
            <p className="title">{Title}</p>
            <div>
              <p className="message">{message}</p>
            </div>
            <p className="target">{`${targetLink} · via Microsoft Edge`}</p>
          </Col>
          {mac ? (
            <Col span={3}>
              <img width="100%" src="/tempimg.png" alt={Title}></img>
            </Col>
          ) : null}
        </Row>
        {mac ? null : <img width="100%" src="/tempimg.png" alt={Title}></img>}
        {android ? (
          <div style={{ height: "32px" }}></div>
        ) : windows8 ? (
          <div style={{ height: "40px" }}></div>
        ) : null}
        {mac ? null : (
          <Row justify={buttons.length==3 ? "space-between" : "space-around"} className="button-container">
            {buttons.map(({ name, link }, i) => (
              <Col flex="auto" key={i} className="a-container">
                <a href={link}>{name}</a>
              </Col>
            ))}
          </Row>
        )}
      </Card>
    );
  }
}

export default AbandonedNotifications;
