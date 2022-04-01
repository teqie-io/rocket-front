import React from 'react'
import { withTranslation } from 'react-i18next';
import { Card, Tabs,Button,Row,Col,Select,Progress,List,Timeline} from 'antd';
import {ResponsiveContainer} from 'recharts';
import {Link} from "react-router-dom"
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { useState } from 'react/cjs/react.production.min';
import { ClockCircleOutlined } from '@ant-design/icons';
const { Option } = Select;

function AbandonedCart()
{
    const { TabPane } = Tabs;
    function callback(key) {
        console.log(key);
      }
      const TmpCard= () =>{
        return(
            <Timeline.Item dot={
                            <Link to='/notifications/abandoned'>
                                <Card title={<h2>REMINDER 1</h2>} className='home-card' justify='center' align='middle' style={{'width':'500px'}}>
                                    <Row style={{'fontSize':'16px','fontWeight':'500'}}>Preview</Row>
                                    <Row style={{'fontSize':'12px','color':'#626262'}}>When customer adds a product to the cart</Row>
                                </Card>
                            </Link>
            } style={{'paddingTop':'200px',cursor:'pointer'}}></Timeline.Item>
        )
    }
    const WaitRem= () => {
        function handleChange(value) {
            console.log(value);
          }
        return(
            <Timeline.Item style={{'paddingTop':'200px'}} dot={
                <Card className='home-card' style={{'width':'300px'}}> 
                    <Row>
                    <Col span={12} style={{'paddingTop':'10px'}}><ClockCircleOutlined/> Wait for</Col>
                    <Col span={12}>
                    <Select
                            labelInValue
                            defaultValue={{ value: '30' }}
                            size="large"
                            onChange={handleChange}
                            >
                                <Option value='30'>30 minutes</Option>
                                <Option value='60'>1 hour</Option>
                                <Option value='120'>2 hours</Option>
                            </Select>
                    </Col>
                    </Row>
                </Card>}>
                
            </Timeline.Item>
        )
    }
    const ReminderCard = () =>{
        return(
            <>
            <WaitRem/>
            <TmpCard/>
            </>
        )
    }
    return(
        <Card title={<div style={{'fontWeight':"500",'fontSize':'32px'}}>Abandoned Cart Recovery</div>}>
       
        <Tabs size='large' defaultActiveKey="1" onChange={callback}>
            <TabPane tab={<div style={{'fontSize':'24px'}}>Flow</div>} key="1">
                <Card>
                    <Button>
                        <Link to='/notifications/abandoned'>TO EDIT</Link> 
                    </Button> 
                    
                    <Row justify='center' gutter={60}>
                        <Col>
                            <Card>OS</Card>
                        </Col>
                        <Col>
                            <Timeline pending={<button className='plan-btn'>ADD REMINDER</button>}  style={{'padding':'100px','width':'400px'}}>
                                <Timeline.Item dot={
                                    <Card className='home-card' justify='center' align='middle'>
                                    <Row style={{'fontSize':'16px','fontWeight':'500'}}>Trigger</Row>
                                    <Row style={{'fontSize':'12px','color':'#626262'}}>When customer adds a product to the cart</Row>
                                </Card>
                                } style={{'paddingTop':'200px'}}></Timeline.Item>
                                
                                <ReminderCard/>
                                <ReminderCard/>
                            </Timeline>
                        </Col>
                        <Col style={{'paddingTop':'25px'}}>
                        <Switch size='30px' style={{'height':'30px','width':'60px'}}
                        checkedChildren={<CheckOutlined style={{'fontSize':'15px'}}  />}
                        unCheckedChildren={<CloseOutlined style={{'fontSize':'15px'}} />}
                        defaultChecked
                        />
                        </Col>
                    </Row>
                </Card>
            </TabPane>
            <TabPane tab={<div style={{'fontSize':'24px'}}>Report</div>} key="2">
                <CartReport/>
            </TabPane>
        </Tabs>
          
        </Card>
    )
}

export default withTranslation()(AbandonedCart);


const CartReport = () => {
    function handleChange(value) {
        console.log(value);
      }
      const statusinfo=[
        {
           id: 1,
           info:'Sent',
           percentage: 33,
         },
         {
           id: 2,
           info:'Delivered',
           percentage: 40 
         },
         {
           id: 3,
           info:'Open',
           percentage: 50
         },
         {
           
           id: 4,
           info:'Clicks',
           percentage: 80
         }
   ];
   const salesreport=[
        {
            product:'T-Shirt',
            buyer:'Amit Sharma',
            date:'9 days ago',
            campaignID:360742,
            platform:'Android',
            revenue:'Rs 250'
        },
        {
            product:'Jeans',
            buyer:'Amit',
            date:'9 days ago',
            campaignID:360732,
            platform:'Apple',
            revenue:'Rs 250'
        },
        {
            product:'Jacket',
            buyer:'Sharma',
            date:'12 days ago',
            campaignID:360741,
            platform:'Android',
            revenue:'Rs 250'
        },
        {
            product:'T-Shirt',
            buyer:'Amit Sharma',
            date:'9 days ago',
            campaignID:360749,
            platform:'Android',
            revenue:'Rs 250'
        },
        {
            product:'T-Shirt',
            buyer:'Amit Sharma',
            date:'9 days ago',
            campaignID:360749,
            platform:'Android',
            revenue:'Rs 250'
        },
        {
            product:'T-Shirt',
            buyer:'Amit Sharma',
            date:'9 days ago',
            campaignID:360749,
            platform:'Android',
            revenue:'Rs 250'
        },
        
    ]
    function colorswitcher(index)
    {
        if(index%2==0)
        {return('#F8F9FA')}
        else
        {return('')}
    }
    return(
        <Card>
            {/* In queue and revenue */}
            <Col span={6}>
                <Card className='home-card' style={{'background':'#F8F9FA'}}>
                    <Row gutter={70}>
                        <Col span={12}>
                            <Row align="middle">
                                <Col align="middle" span={24}><div className="count-text">3</div></Col>                      
                            </Row>
                            <Row>
                                <Col  align="middle" span={24}>In Queue</Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row gutter={20} align="middle">
                            <Col align="middle" span={24}><div className="count-text">2k</div></Col>                      
                            </Row>
                            <Row>
                                <Col align="middle" span={24}>Revenue</Col>
                            </Row>
                        </Col>
                     </Row>
                </Card>
            </Col>
            
            <Row gutter={70} align='middle' justify='center' style={{'paddingTop':'20px'}}>
                {/* Status */}
                <Col span={12}>
                    <Card className='home-card'>
                        <div style={{'fontSize':'24px','paddingBottom':'15px'}}>
                            Status
                        </div>
                        <Select size='large'
                        labelInValue
                        defaultValue={{ value: 'weekly' }}
                        style={{ width: 200 }}
                        onChange={handleChange}
                        >
                            <Option value="weekly">By week</Option>
                            <Option value="monthly">By month</Option>
                            <Option value="yearly">By year</Option>
                        </Select>
                        <div style={{'paddingTop':'20px'}}>
                            {
                                statusinfo.map(item =>{
                                    return(
                                        <Row gutter={70} style={{'paddingTop':'10px'}}>
                                            <Col span={3}>{item.info}</Col>
                                            <Col align='left' span={21}>
                                                <Progress percent={item.percentage} status="active" /> {/*  strokeColor={'red'} to change color */}
                                            </Col>
                                        </Row>
                                    )
                                })
                            }
                        </div>
                    </Card>    
                </Col>
                {/* Recovery Rates */}
                <Col span={12}>
                    <Card className='home-card'>
                        <div style={{'textAlign':'center',fontSize:'24px'}}>
                            Abandoned Cart Recovery Rates
                        </div> 
                        <div style={{'textAlign':'center','paddingTop':'15px','height':'220px'}}>
                            {/* <div style={{'paddingLeft':'130px'}}>
                            <ResponsiveContainer width="60%"> */}
                            <Progress type="dashboard"
                            percent={82.3}
                            format={percent => <div>
                                                    <Row  justify='center' style={{'fontSize':'32px','fontWeight':'500'}}>
                                                        {percent}%
                                                    </Row>
                                                    <Row style={{'paddingTop':'15px','fontSize':'24px'}} justify='center'>
                                                        Conversion Rate
                                                    </Row>
                                                </div>}
                            width={300}
                            gapDegree={145}
                            strokeWidth={8}
                            />
                                {/* </ResponsiveContainer>
                            </div> */}
                        </div>
                    </Card>
                </Col>               
            </Row>
            
            {/* Sales */}
            <Col span={24} style={{'paddingTop':'30px'}} >
                <Card title={<div style={{'fontSize':'24px'}}>Sales of 10 days</div>} className='home-card' bodyStyle={{'paddingRight':'10px', 'paddingLeft':'10px'}} style={{'background':''}}>
                    <List style={{'paddingTop':'0px'}}>
                            {
                            salesreport.map((item,index) => (
                                <List.Item style={{'paddingTop':'20px',background:`${colorswitcher(index)}`}}> 
                                            <Col span={12} style={{padding:'10px','paddingLeft':'30px'}}>
                                               <Row style={{'fontSize':'24px'}}>{item.product}</Row>
                                               <Row style={{'fontSize':'15px'}}>{item.buyer} | {item.date} | Campaign ID:{item.campaignID}</Row> 
                                            </Col>
                                            <Col span={6}>
                                                <Row justify='center' style={{'fontSize':'16px'}}>Platform</Row>
                                                <Row justify='center' className='prem-blue-text' style={{'fontSize':'24px'}}>{item.platform}</Row>
                                            </Col>
                                            <Col span={6}>
                                                <Row justify='center' style={{'fontSize':'16px'}}>Revenue</Row>
                                                <Row justify='center' className='prem-blue-text' style={{'fontSize':'24px'}}>{item.revenue}</Row>
                                            </Col>
                                </List.Item>
                            ))}
                    </List>
                </Card>
            </Col>
        </Card>

    )
}