import React from "react";
import { withTranslation } from 'react-i18next';
import SubscirberGrowth from "./SubscriberGrowth"
import RecentNotifications from "./RecentNotifications";
import TopLocations from "./TopLocations";
import TotalCounts from "./TotalCounts";
import TopBrowsers from "./TopBrowsers"
import TopPlatforms from "./TopPlatforms"
import { Row, Col } from 'antd';
import {Card} from "antd"
class Home extends React.Component {
  render() {
    const {t} = this.props;
    
    return (
      <Card className="home-card">
       
        <Row align="middle" style={{padding: "20px"}}>
          <Col span={17} style={{padding: "10px"}}><SubscirberGrowth/></Col>
          <Col span={7} style={{padding: "10px"}}><TopLocations/></Col>
        </Row>
        <Row align="middle" style={{padding: "20px"}}>
          <Col span={17} style={{padding: "10px"}}><TotalCounts/></Col>
          <Col span={7} style={{padding: "10px"}}><TopPlatforms/></Col>
        </Row>
        <Row align="top" style={{padding: "20px"}}>
          <Col span={17} style={{padding: "10px"}}><RecentNotifications/></Col>
          <Col span={7} style={{padding: "10px"}}><TopBrowsers/></Col>
        </Row>
    </Card>
    );
  }
}

export default withTranslation()(Home);
