import React from "react"
import { Row, Col } from 'antd';
import {Card} from "antd"
import  './premium.scss'
import TopLocations from "./home-components/TopLocations";
import RecentNotifications from "./home-components/RecentNotifications";
import TotalCounts from "./home-components/TotalCounts";

export default function Premium()
{
    return(
        <Card className="premium-pick" >
            <Row justify="center" style={{padding:'30px'}}>
                <Card>
                    <Row><h2>Pick a plan</h2></Row>
                    <Row><button>year/month</button></Row>
                </Card>
            </Row>

            <Row justify="center" gutter={50} align="bottom" style={{padding:'30px'}}>
                <Col span={8}><TopLocations/></Col>
                <Col span={8}><RecentNotifications/></Col>
                <Col span={8}><TopLocations/></Col>
            </Row>

            <Row justify="center">
                <Card title={<div className="prem-title">Current Plan</div>}
                style={{background:"#0D83DD"}}
                bodyStyle={{background:"#BDDCF3"}}
                className="prem-card">
                ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                </Card>
            </Row>
        </Card>
    )
}