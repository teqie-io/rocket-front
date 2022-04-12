import React from 'react'
import {Row,Col,Card,Select,Checkbox,Input} from 'antd'
import { useState,setState } from 'react'

const { Option } = Select;

export default function ConfigOptins()
{
    function handleChange(value) {
        console.log(value);
      }
    const [customPrompt,setPrompt] =useState(true)
    function onChange(e) {
        setPrompt(e.target.checked)
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
                        <Checkbox onChange={onChange}><h1>Show a custom confirmation prompt</h1></Checkbox>
                        <Row style={{color: '#626262',fontSize:'14px',paddingRight:'10px'}}>
                            Give your store visitors more context with a customizable opt-in dialog.
                        </Row>
                    </Card>
                </Col>
            </Row>
            {customPrompt &&
            <Row>
                <Card bordered={false}>
                    <Col span={16}>
                        <h1>Title</h1>
                        <Input placeholder="Title" className='configtext' /> 
                    </Col>  
                    <Col span={16}>
                        <h1>Description</h1>
                        <Input placeholder="Description" className='configtext' /> 
                    </Col>  

                    <Row style={{'padding':'20px'}} gutter={50}>
                        <Card  title={<div className='prem-blue-text'> Button - Allow</div>}>
                            <Row>
                                <Col span={12}>
                                    <h1>Title</h1>
                                    <Input placeholder="Allow" className='configtext' /> 
                                </Col> 
                            </Row>
                            <Row gutter={50}>
                                <Col span={12}>
                                    <h1>Background Color</h1>
                                    <Input placeholder="#272727" className='configtext'/>   
                                </Col>
                                <Col span={12}>
                                    <h1>Text Color</h1>
                                    <Input placeholder="#AAAAAA" className='configtext' />   
                                </Col>
                            </Row>
                        </Card>
                        <Card  title={<div className='prem-blue-text'> Button - Later</div>}>
                            <Row>
                                <Col span={12}>
                                    <h1>Title</h1>
                                    <Input placeholder="Later" className='configtext' /> 
                                </Col> 
                            </Row>
                            <Row gutter={50}>
                                <Col span={12}>
                                    <h1>Background Color</h1>
                                    <Input placeholder="#272727" className='configtext'/>   
                                </Col>
                                <Col span={12}>
                                    <h1>Text Color</h1>
                                    <Input placeholder="#AAAAAA" className='configtext' />   
                                </Col>
                            </Row>
                        </Card>
                    </Row>

                </Card>
            </Row>}
                
            </Card>
        </Card>
    )
}
