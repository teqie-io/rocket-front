import React from 'react'
import { withTranslation } from 'react-i18next';
import { Card, Tabs,Row,Col,Select,Progress,List,Timeline, Input} from 'antd';
//import {ResponsiveContainer} from 'recharts';
import {Link} from "react-router-dom"
import {EditOutlined} from '@ant-design/icons';

import {useState,useEffect} from 'react';


function Scheduled()
{
    const { TabPane } = Tabs;

    const [activeTab,setActiveTab]=useState('3')
    function callback(key) {
        console.log(key);
        if(key==2)
        setRenderNewReminder(true)
        else
        setRenderNewReminder(false)

        setActiveTab(key)
      }
    const [renderNewReminder,setRenderNewReminder] =useState(false)
    const sentnotifications = [
        {
            title:'Grab the offer now, 10% Off',
            subscribers:'All Subscribers',
            date:'9 days ago',
            campaignID:'360742',
            impressions:3,
            clicks:10,
            ctr:20,
            revenue:'2k'
        },
        {
            title:'Grab the offer now, 10% Off',
            subscribers:'All Subscribers',
            date:'9 days ago',
            campaignID:'360742',
            impressions:3,
            clicks:10,
            ctr:20,
            revenue:'2k'
        },
        {
            title:'Grab the offer now, 10% Off',
            subscribers:'All Subscribers',
            date:'9 days ago',
            campaignID:'360742',
            impressions:3,
            clicks:10,
            ctr:20,
            revenue:'2k'
        },
        {
            title:'Grab the offer now, 10% Off',
            subscribers:'All Subscribers',
            date:'9 days ago',
            campaignID:'360742',
            impressions:3,
            clicks:10,
            ctr:20,
            revenue:'2k'
        },
        {
            title:'Grab the offer now, 10% Off',
            subscribers:'All Subscribers',
            date:'9 days ago',
            campaignID:'360742',
            impressions:3,
            clicks:10,
            ctr:20,
            revenue:'2k'
        },
        {
            title:'Grab the offer now, 10% Off',
            subscribers:'All Subscribers',
            date:'9 days ago',
            campaignID:'360742',
            impressions:3,
            clicks:10,
            ctr:20,
            revenue:'2k'
        },
        {
            title:'Grab the offer now, 10% Off',
            subscribers:'All Subscribers',
            date:'9 days ago',
            campaignID:'360742',
            impressions:3,
            clicks:10,
            ctr:20,
            revenue:'2k'
        },
    ]
    const schedulednotifications=[
        {
            title:'Grab the offer now, 10% Off',
            subscribers:'All Subscribers',
            date:'9 days ago',
            campaignID:'360742',
            time:'6 : 00 PM',
            date:'24th March',
            isActive:true
        },
        {
            title:'Grab the offer now, 10% Off',
            subscribers:'All Subscribers',
            date:'9 days ago',
            campaignID:'360742',
            time:'6 : 00 PM',
            date:'24th March',
            isActive:false
        },
        {
            title:'Grab the offer now, 10% Off',
            subscribers:'All Subscribers',
            date:'9 days ago',
            campaignID:'360742',
            time:'6 : 00 PM',
            date:'24th March',
            isActive:true
        },
    ]

    function colorswitcher(index)
    {
        if(index%2===0)
        {return('#F8F9FA')}
        else
        {return('')}
    }
    return(
        <Card className='home-card'>
            <Row>
                <Col>
                    <div style={{'fontWeight':"500",'fontSize':'32px'}}>
                        Scheduled Notifications
                    </div>   
                </Col>
                { renderNewReminder &&
                    <Col offset={12}>
                    {/* <Link to='/notifications/scheduled/newschedule'> */}
                        <button style={{background:'#36A900',color:'white',border:'0',height:'72px',width:'264px',fontSize:'30px',borderRadius:'12px',cursor:'pointer'}}
                        onClick={()=>
                        {setActiveTab('3')
                        setRenderNewReminder(false)}}>
                            New Schedule
                        </button>
                    {/* </Link> */}
                </Col>}
            </Row>
       
        <Tabs size='large' activeKey={activeTab} defaultActiveKey="2" onChange={callback}>
            {/* TAB 1 Sent */}
            <TabPane tab={<div style={{'fontSize':'24px'}}>Sent</div>} key="1">
                <List style={{'paddingTop':'0px'}}>
                            {
                            sentnotifications.map((item,index) => (
                                <List.Item key={item.campaignID} style={{'paddingTop':'20px',background:`${colorswitcher(index)}`}}> 
                                            <Col span={8} style={{padding:'20px','paddingLeft':'40px'}}>
                                               <Row style={{'fontSize':'24px'}}>{item.title}</Row>
                                               <Row style={{'fontSize':'15px'}}>{item.subscribers} | {item.date} | Campaign ID:{item.campaignID}</Row> 
                                            </Col>
                                            <Col span={4}>
                                                <Row justify='center' style={{'fontSize':'16px'}}>Impressions</Row>
                                                <Row justify='center' className='prem-blue-text' style={{'fontSize':'24px'}}>{item.impressions}</Row>
                                            </Col>
                                            <Col span={4}>
                                                <Row justify='center' style={{'fontSize':'16px'}}>Clicks</Row>
                                                <Row justify='center' className='prem-blue-text' style={{'fontSize':'24px'}}>{item.clicks}</Row>
                                            </Col>
                                            <Col span={4}>
                                                <Row justify='center' style={{'fontSize':'16px'}}>CTR</Row>
                                                <Row justify='center' className='prem-blue-text' style={{'fontSize':'24px'}}>{item.ctr}</Row>
                                            </Col>
                                            <Col span={4}>
                                                <Row justify='center' style={{'fontSize':'16px'}}>Revenue</Row>
                                                <Row justify='center' className='prem-blue-text' style={{'fontSize':'24px'}}>{item.revenue}</Row>
                                            </Col>
                                </List.Item>
                            ))}
                    </List>
            </TabPane>
            {/* TAB 2 Scheduled */}
            <TabPane tab={<div style={{'fontSize':'24px'}}>Scheduled</div>} key="2">
                <List style={{'paddingTop':'0px'}}>
                            {
                            schedulednotifications.map((item,index) => (
                                <List.Item key={item.campaignID} style={{'paddingTop':'20px',background:`${colorswitcher(index)}`}}> 
                                            <Col span={8} style={{padding:'20px','paddingLeft':'40px'}}>
                                               <Row style={{'fontSize':'24px'}}>{item.title}</Row>
                                               <Row style={{'fontSize':'15px'}}>{item.subscribers} | {item.date} | Campaign ID:{item.campaignID}</Row> 
                                            </Col>
                                            <Col span={4}>
                                                <Row justify='center' style={{'fontSize':'16px'}}>Time</Row>
                                                <Row justify='center' className='prem-blue-text' style={{'fontSize':'18px'}}>{item.time}</Row>
                                            </Col>
                                            <Col span={4}>
                                                <Row justify='center' style={{'fontSize':'16px'}}>Date</Row>
                                                <Row justify='center' className='prem-blue-text' style={{'fontSize':'18px'}}>{item.date}</Row>
                                            </Col>
                                            <Col span={4}>
                                                <Row justify='center' style={{'fontSize':'16px'}}>Status</Row>
                                                <Row justify='center' className='prem-blue-text'  style={{'fontSize':'18px',color:'#01A308'}}>
                                                    {item.isActive && `Active`}
                                                    {item.isActive || `Inactive`}
                                                </Row>
                                            </Col>
                                            <Col span={4}>
                                                <Row justify='center' style={{'fontSize':'24px',cursor:'pointer'}}><EditOutlined/></Row>                                            </Col>
                                </List.Item>
                            ))}
                    </List>
            </TabPane>
            {/* TAB 3 NEW SCHEDULE when clicked new schedule button */}
            <TabPane key="3">
                <Card title={<div>Notification Setup</div>}>
                    <Row>
                        <Col>Title</Col>
                        <Col><Input/></Col>
                    </Row>
                    <Row>
                        <Col>Date</Col>
                        <Col><Input/></Col>
                    </Row>
                    <Row>
                        <Col>Time</Col>
                        <Col><Input/></Col>
                    </Row>
                    <Row>
                        <Col><button>Cancel</button></Col>
                        <Col><button>Edit Notification</button></Col>
                    </Row>
                </Card>
            </TabPane>
        </Tabs>
          
        </Card>
      )

}

export default withTranslation()(Scheduled);