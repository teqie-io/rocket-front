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
        <Row align="top">
          <Col span={17} align="middle">
              <Row style={{padding: "15px"}}><Col span={24}><SubscriberGrowth/></Col></Row>
              <Row style={{padding: "15px"}}><Col span={24}><TotalCounts/></Col></Row>
              <Row style={{padding: "15px"}}><Col span={24}><RecentNotifications/></Col></Row>
          </Col>


          <Col span={7} align='middle'>
              <Row style={{padding: "15px"}}><Col span={24}><TopLocations/></Col></Row>
              <Row style={{padding: "15px"}}><Col span={24}><TopPlatforms/></Col></Row>
              <Row style={{padding: "15px"}}><Col span={24}><TopBrowsers/></Col></Row>
          </Col>
        </Row>
    </Card>
    );
  }
}

export default withTranslation()(Home);
