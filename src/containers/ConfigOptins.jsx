import React from 'react'
import {Row,Col,Card,Select} from 'antd'
import { useState,setState } from 'react'

const { Option } = Select;

export default function ConfigOptins()
{
    function handleChange(value) {
        console.log(value);
      }
      
    return(
        <Card title={<h2>Subscriber Prompt</h2>}>
            <Card title={
                <div className="home-title" style={{'fontSize':'24px'}}> 
                Browser Prompt    
                </div>
                    }
            style={{background:"#0D83DD",borderColor:'#0D83DD'}}
            bodyStyle={{background:"white",padding:0}}
            className="home-card"
            >

            <Col span={14} style={{padding:'20px'}}>Only show the native browser prompt to opt-in your store visitors.</Col> 

            {/* Timing Setup */}
            <Row style={{paddingTop:'20px'}}>
                <Col span={14}>
                    <Card title={<div style={{'color':'#0D83DD',fontSize:'24px'}}>Timing Setup</div>}
                    style={{background:"rgba(13, 131, 221, 0.25)"}}
                    bodyStyle={{background:"white"}}
                    bordered={false}
                    >
                        <Row style={{color: '#626262',fontSize:'14px',paddingRight:'10px'}}>Set a timer according to when you want the browser prompt to be shown</Row>
                        <Row>
                            <Col span={12}>
                                <Card title="Desktop">
                                    <Row>
                                        <Col style={{color: '#626262',fontSize:'14px',paddingRight:'10px'}}>Show after</Col>
                                        <Select size='medium'
                                        labelInValue
                                        defaultValue={{ value: '5' }}
                                        style={{ width: 150 }}
                                        onChange={handleChange}
                                        >
                                            <Option value="5">5 seconds</Option>
                                            <Option value="20">20 seconds</Option>
                                            <Option value="30">30 seconds</Option>
                                        </Select>
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card title="Mobile"
                                >
                                    <Row>
                                        <Col style={{color: '#626262',fontSize:'14px',paddingRight:'10px'}}>Show after</Col>
                                        <Select size='medium'
                                        labelInValue
                                        defaultValue={{ value: '5' }}
                                        style={{ width: 150 }}
                                        onChange={handleChange}
                                        >
                                            <Option value="5">5 seconds</Option>
                                            <Option value="20">20 seconds</Option>
                                            <Option value="30">30 seconds</Option>
                                        </Select>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Card>    
                </Col>
            </Row>  

            {/* Intermediate custom prompt option     */}
            <Row>
                <Col span={14}>
                    <Card title={<div style={{'color':'#0D83DD',fontSize:'24px'}}>Intermediate custom prompt option</div>}
                    style={{background:"rgba(13, 131, 221, 0.25)"}}
                    bodyStyle={{background:"white"}}
                    bordered={false}
                    >
                    </Card>
                </Col>
            </Row>
                
            </Card>
        </Card>
    )
}
