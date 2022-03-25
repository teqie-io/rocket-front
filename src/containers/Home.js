import React from "react";
import { withTranslation } from 'react-i18next';
import SubscirberGrowth from "./home-components/SubscriberGrowth"
import RecentNotifications from "./home-components/RecentNotifications";
import TopLocations from "./home-components/TopLocations";
import TotalCounts from "./home-components/TotalCounts";
import TopBrowsers from "./home-components/TopBrowsers"
import TopPlatforms from "./home-components/TopPlatforms"
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
        {/* Trying to take less space by arranging in components in 2 columns instead of 3 rows but ruins the styling
        <Row>
          <Col span={17} align="middle">
              <Row style={{padding: "20px"}}><SubscirberGrowth/></Row>
              <Row style={{padding: "20px"}}><TotalCounts/></Row>
              <Row style={{padding: "20px"}}><RecentNotifications/></Row>
          </Col>


          <Col span={7}>
          <Row style={{padding: "20px"}}><TopLocations/></Row>
          <Row style={{padding: "20px"}}><TopPlatforms/></Row>
          <Row style={{padding: "20px"}}><TopBrowsers/></Row>
          </Col>
        </Row> */}
    </Card>
    );
  }
}

export default withTranslation()(Home);
