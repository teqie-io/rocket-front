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
    const [optionVal,setState] =useState('monthly')
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
                        <Radio.Group size="large" options={plantypes} onChange={onChange2} value={optionVal}  optionType="button" buttonStyle="solid" />
                    </Row>
                </Card>
            </Row>

            <Row justify="center" gutter={80} align="bottom" style={{padding:'30px'}}>
                <Col span={8}> <Basic/>      </Col>
                <Col span={8}> <Business/>      </Col>
                <Col span={8}> <Enterprise/> </Col>
                <Col style={{padding:'30px'}}>**All plans come with unlimited subscribers</Col>
            </Row>

            <Row justify="center" align="middle" gutter={30}>
                <Col span={19} offset={2}>
                <Card title={<div className="prem-title" style={{'color':'white'}}>Current Plan</div>}
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
            <div className="prem-title">
                Basic
            </div>
        } 
        className="prem-card"
        bodyStyle={{ padding:'0'}}>
        <div>
            <Row style={{'padding':'20px'}}>
                <Col span={24} align='middle' className="prem-blue-text">Free</Col>
                <Col span={24} align='middle'>Lifetime</Col>
            </Row>
            <Row style={{'padding':'10px','background':'#F3FBFF'}}>
                <Col span={24} align='middle' className="prem-blue-text">500</Col>
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

const Business= () =>{
    return(
        <Card title={
            <div className="prem-title" style={{'color':'white','padding-top':'15px','padding-bottom':'15px'}}>
                Business
            </div>
        } 
        className="prem-card"
        style={{background:"#0D83DD"}}
        bodyStyle={{background:"white",padding:'0'}}>
        <div>
            <Row style={{'padding':'35px'}}>
                <Col span={24} align='middle' className="prem-blue-text">30$</Col>
                <Col span={24} align='middle'>only $30/mo on annual plan</Col>
            </Row>
            <Row style={{'padding':'10px','background':'#F3FBFF'}}>
                <Col span={24} align='middle' className="prem-blue-text">500</Col>
                <Col span={24} align='middle'>Impressions per month</Col>
            </Row>
            <Row style={{'padding':'20px'}}> 
                <Col span={24} offset={4}>
                    <ul className="ul1">
                        <li>All Basic Features </li>
                        <li>Abandoned Cart Automation</li>
                        <li>Shipping Notification</li>
                        <li>Hero Image Support</li>
                        <li>Subscriber Details</li>
                        <li>Subscriber Import And Export</li>
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

const Enterprise = () =>{
    return(
        <Card title={
            <div className="prem-title">
                Enterprise
            </div>
        } 
        className="prem-card"
        bodyStyle={{ padding:'0'}}>
        <div>
            <Row style={{'padding':'23px'}}>
                <Col span={24} align='middle' className="prem-blue-text">Get in touch with us</Col>
             
            </Row>
            <Row style={{'padding':'20px'}}> 
                <Col span={24} offset={4}>
                    <ul className="ul1">
                        <li>All Business Features </li>
                        <li>Segmentation</li>
                        <li>Flash Sale</li>
                        <li>Smart Delivery</li>
                        <li>Browse Abandonment</li>
                        <li>Strategy Manager</li>
                        <li>Integration Engineer</li>
                        <li>Custom buttons</li>
                        <li>Phone Support</li>
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