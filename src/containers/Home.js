import React from "react";
import { withTranslation } from 'react-i18next';
import RecentNotifications from "./RecentNotifications";
import TopLocations from "./TopLocations";
import { Row, Col } from 'antd';

class Home extends React.Component {
  render() {
    const {t} = this.props;
    
    return (
      <div>
        <h1>Dashboard</h1>
        <Row style={{padding: "20px"}}>
        <Col span={17} style={{padding: "10px"}}>to be replaced with the chart</Col><Col span={7} style={{padding: "10px"}}><TopLocations/></Col>
        </Row>
        <Row style={{padding: "20px"}}>
        <Col span={17} style={{padding: "10px"}}>to be replaced with counts</Col><Col span={7} style={{padding: "10px"}}>Top Platforms</Col>
        </Row>
        <Row style={{padding: "20px"}}>
        <Col span={17} style={{padding: "10px"}}><RecentNotifications/></Col><Col span={7} style={{padding: "10px"}}>Top Browsers</Col>
        </Row>
    </div>
    );
  }
}

export default withTranslation()(Home);
