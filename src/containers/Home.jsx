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
import { Redirect ,useHistory } from "react-router-dom";
function Home(){
    const history=useHistory()
    return (
      <Card className="home-card" style={{'height':'100%'}}>
        <Row>
          <button onClick={()=>history.push("/login")}>PRess</button>
        </Row>
        <Row align="top">
          <Col span={17} align="middle" xs={23} sm={22} md={12} lg={12} xl={15}>
              <Row style={{padding: "15px"}}><Col span={24}><SubscriberGrowth/></Col></Row>
              <Row style={{padding: "15px"}}><Col span={24}><TotalCounts/></Col></Row>
              <Row style={{padding: "15px"}}><Col span={24}><RecentNotifications/></Col></Row>
          </Col>


          <Col span={7} align='middle' xs={23} sm={22} md={12} lg={12} xl={8}>
              <Row style={{padding: "15px"}}><Col span={24}><TopLocations/></Col></Row>
              <Row style={{padding: "15px"}}><Col span={24}><TopPlatforms/></Col></Row>
              <Row style={{padding: "15px"}}><Col span={24}><TopBrowsers/></Col></Row>
          </Col>
        </Row>
    </Card>
    );
  
}

export default withTranslation()(Home);
