import React from "react";
import { withTranslation } from 'react-i18next';
import SubscriberGrowth from "./home-components/SubscriberGrowth"
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
      <Card className="home-card" style={{'height':'100%'}}>
        {/* <Row align="middle">
          <Col span={17} style={{'padding-right': "10px"}}><SubscriberGrowth/></Col>
          <Col span={7} style={{padding: "10px"}}><TopLocations/></Col>
        </Row>
        <Row align="middle" >
          <Col span={17} style={{'padding-right': "10px"}}><TotalCounts/></Col>
          <Col span={7} style={{padding: "10px"}}><TopPlatforms/></Col>
        </Row>
        <Row align="top">
          <Col span={17} style={{'padding-right': "10px"}}><RecentNotifications/></Col>
          <Col span={7} style={{'padding': "10px"}}><TopBrowsers/></Col>
        </Row> */}
        {/* Trying to take less space by arranging in components in 2 columns instead of 3 rows but ruins the styling */}
        <Row>
          <Col span={17} align="middle">
              <Row style={{padding: "20px"}}><Col span={24}><SubscriberGrowth/></Col></Row>
              <Row style={{padding: "20px"}}><Col span={24}><TotalCounts/></Col></Row>
              <Row style={{padding: "20px"}}><Col span={24}><RecentNotifications/></Col></Row>
          </Col>


          <Col span={7} align='right'>
              <Row style={{padding: "20px"}}><Col span={24}><TopLocations/></Col></Row>
              <Row style={{padding: "20px"}}><Col span={24}><TopPlatforms/></Col></Row>
              <Row style={{padding: "20px"}}><Col span={24}><TopBrowsers/></Col></Row>
          </Col>
        </Row>
    </Card>
    );
  }
}

export default withTranslation()(Home);
