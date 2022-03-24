import React from "react";
import { withTranslation } from 'react-i18next';
import RecentNotifications from "./RecentNotifications";
import TopLocations from "./TopLocations";
import TotalCounts from "./TotalCounts"
import { Row, Col } from 'antd';
import {Card} from "antd"
class Home extends React.Component {
  render() {
    const {t} = this.props;
    
    return (
      <Card className="home-card">
       
        <Row style={{padding: "20px"}}>
          <Col span={17} style={{padding: "10px"}}>to be replaced with the chart</Col>
          <Col span={7} style={{padding: "10px"}}><TopLocations/></Col>
        </Row>
        <Row align="middle" style={{padding: "20px"}}>
          <Col span={17} style={{padding: "10px"}}><TotalCounts/></Col>
          <Col span={7} style={{padding: "10px"}}>Top Platforms<TopLocations/></Col>
        </Row>
        <Row style={{padding: "20px"}}>
          <Col span={17} style={{padding: "10px"}}><RecentNotifications/></Col>
          <Col span={7} style={{padding: "10px"}}>Top Browsers<TopLocations/></Col>
        </Row>
    </Card>
    );
  }
}

export default withTranslation()(Home);
