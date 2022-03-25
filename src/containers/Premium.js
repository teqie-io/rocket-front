import React from "react"
import { Row, Col } from 'antd';
import {Card} from "antd"
import  './premium.scss'
import { ChatIcon } from "../assets/CountIcons";
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
                <Col style={{padding:'30px'}}>**All plans come with unlimited subscribers</Col>
            </Row>

            <Row justify="center" align="middle" gutter={30}>
                <Col span={19} offset={2}>
                <Card title={<div className="prem-title">Current Plan</div>}
                style={{background:"#0D83DD"}}
                bodyStyle={{background:"#BDDCF3"}}
                className="prem-card">
                   plan here
                </Card>
                </Col>
                <Col span={3} ><ChatIcon onClick={()=>console.log("chat clicked")} style={{fontSize:'100px',cursor:"pointer"}}/></Col>
            </Row>
        </Card>
    )
}