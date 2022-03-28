import React from "react"
import { Row, Col } from 'antd';
import {Card} from "antd"
import  './premium.scss'
import { ChatIcon } from "../assets/CountIcons";
import { Radio } from 'antd';
import {useState} from 'react';

export default function Premium()
{
    const plantypes = [
        { label: 'MONTHLY', value: 'monthly' },
        { label: 'Yearly', value: 'yearly' },
      ];
    const [optionval,setState] =useState('monthly')
    function onChange2(e){
        console.log(e.target.value);
        setState(e.target.value);
      };
    return(
        <Card className="premium-pick" >
            <Row justify="center" style={{padding:'30px'}}>
                <Card bordered={false}>
                    <Row>
                        <Col span={24} align='middle'><div style={{'fontSize':'36px','padding-bottom':'20px'}}>Pick a plan</div></Col>
                    </Row>
                    <Row>
                    <Radio.Group size="large" options={plantypes} onChange={onChange2} value={optionval}  optionType="button" buttonStyle="solid" />
                    </Row>
                </Card>
            </Row>

            <Row justify="center" gutter={50} align="bottom" style={{padding:'30px'}}>
                <Col span={8}><Basic/></Col>
                <Col span={8}><Basic/></Col>
                <Col span={8}><Basic/></Col>
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

const Basic=()=>{
    return(
        <Card title={
            <h2 style={{'text-align':'center'}}>
                Basic
            </h2>
        } 
        className="prem-card"
        bodyStyle={{ padding:'0'}}>
        <div>
            <Row style={{'padding':'10px'}}>
                <Col span={24} align='middle'>Free</Col>
                <Col span={24} align='middle'>Lifetime</Col>
            </Row>
            <Row style={{'padding':'10px','background':'#F3FBFF'}}>
                <Col span={24} align='middle'>500</Col>
                <Col span={24} align='middle'>Impressions per month</Col>
            </Row>
            <Row style={{'padding':'20px'}}> 
                <Col span={24} offset={4}>
                    <ul className="ul1">
                        <li>Unlimited Subscribers</li>
                        <li>Send & Schedule Campaigns</li>
                        <li>Back-In-Stock Automation</li>
                        <li>Price Drop Automation</li>
                        <li>Basic Reports</li>
                        <li>Chat Support</li>
                    </ul>
                </Col>
            </Row>
            <Row style={{'padding':'20px'}}>
                <Col span={24} align='middle'>
                    <button className="prem-button">Start Trial</button>
                </Col>
            </Row>
        </div>
        </Card>
    )   
}