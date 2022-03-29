import React from "react"
import { Row, Col } from 'antd';
import {Card} from "antd"
import  './premium.scss'
import { ChatIcon } from "../assets/CountIcons";
import { Radio } from 'antd';
import {useState} from 'react';

export default function Premium()
{
    const [optionVal,setState] =useState('monthly')
    function onChange2(e){
        console.log(e.target.value);
        setState(e.target.value);
      };
    return(
        <Card bordered={false} className="premium-pick" >
            <Row justify="center" >
                <div>
                    <Row>
                        <Col span={24} align='middle'><div style={{'fontSize':'36px','fontWeight':'500','padding-bottom':'20px'}}>Pick a plan</div></Col>
                    </Row>
                    <Row>
                        <Radio.Group onChange={onChange2} value={optionVal}  optionType="button" buttonStyle="solid" >
                            <Radio.Button value="monthly" style={{'height':'58px','width':'172px','border-top-left-radius':'12px','border-bottom-left-radius':'12px'}} >
                                <div className='plan-btn'>
                                   Monthly
                                </div>
                            </Radio.Button>
                            <Radio.Button  value="yearly"  style={{'height':'58px','width':'172px','border-top-right-radius':'12px','border-bottom-right-radius':'12px'}}>
                                <div  className='plan-btn'>
                                    Yearly
                                </div>
                            </Radio.Button>
                        </Radio.Group>
                    </Row>
                    <Row >
                        <Col span={24} align='middle' style={{'padding-top':'20px',color:'#0D83DD','font-weight':' 500','font-size': '18px'}}>
                            <a>Have a coupon code?</a>
                        </Col> 
                    </Row>
                </div>
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
                    Your plan here.
                    </Card>
                </Col>
                <Col span={3} >
                    <ChatIcon onClick={()=>console.log("chat clicked")} style={{fontSize:'100px',cursor:"pointer"}}/>
                </Col>
            </Row>
        </Card>
    )
}

const Basic=()=>{
    return(
        <Card 
        className="prem-card"
        bodyStyle={{ padding:'0'}}>
        <div>
            <Row>
                <Col span={24}>
                    <div className="prem-title">
                        Basic
                    </div>
                </Col>
            </Row>
            <Row style={{'padding':'5px'}}>
                <Col span={24} align='middle' className="prem-blue-text">Free</Col>
                <Col span={24} align='middle'>Lifetime</Col>
            </Row>
            <Row style={{'padding':'5px','background':'#F3FBFF'}}>
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
            <Row style={{'padding':'15px'}}>
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
            <div className="prem-title" style={{'color':'white'}}>
                Business
            </div>
        } 
        className="prem-card"
        style={{background:"#0D83DD"}}
        bodyStyle={{background:"white",padding:'0'}}>
        <div>
            <Row style={{'padding':'15px'}}>
                <Col span={24} align='middle' className="prem-blue-text">30$</Col>
                <Col span={24} align='middle'>only $30/mo on annual plan</Col>
            </Row>
            <Row style={{'padding':'5px','background':'#F3FBFF'}}>
                <Col span={24} align='middle' className="prem-blue-text">500</Col>
                <Col span={24} align='middle'>Impressions per month</Col>
            </Row>
            <Row style={{'padding':'15px'}}> 
                <Col span={24} offset={4}>
                    <ul className="ul1">
                        <li>All Basic Features </li>
                        <li style={{'color':'#0D83DD','font-weight':'500'}}>Abandoned Cart Automation</li>
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
        <Card
        className="prem-card"
        bodyStyle={{ padding:'0'}}>
        <div>
            <Row>
                <Col span={24}>
                    <div className="prem-title">
                        Enterprise
                    </div>
                </Col>
            </Row>
            <Row style={{'padding':'10px'}}>
                <Col span={24} align='middle' className="prem-blue-text">Get in touch with us</Col>
             
            </Row>
            <Row style={{'padding':'15px'}}> 
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
                    <button className="prem-button">Contact us</button>
                </Col>
            </Row>
        </div>
        </Card>
    )   
}