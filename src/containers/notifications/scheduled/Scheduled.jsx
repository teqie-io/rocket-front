import React from 'react'
import { withTranslation } from 'react-i18next';
import { Card, Tabs,Row,Col,Select,Progress,List,Timeline, Input,DatePicker,TimePicker} from 'antd';
//import {ResponsiveContainer} from 'recharts';
import {Link} from "react-router-dom"
import {EditOutlined} from '@ant-design/icons';
import moment from 'moment';
import {useState,useEffect} from 'react';
import AbandonedNotifications from '../abandoned/abandonedNotifications/AbandonedNotifications';

function Scheduled()
{
    const { TabPane } = Tabs;

    const [activeTab,setActiveTab]=useState('4')
    function changeTab(key) {
        console.log(key);
        if(key==2)
        setRenderNewReminder(true)
        else
        setRenderNewReminder(false)

        setActiveTab(key)
      }
    //   const RemCard= (props) =>{
    //     return(
    //         <Timeline.Item style={{'paddingTop':`${rempadding}`,paddingBottom:'150px'}} dot={
    //                         <Link to='/notifications/editabandoned'>
    //                             <Card title={<Row gutter={100} style={{'fontWeight':'500','fontSize':'24px',cursor:'pointer'}}> <Col span={2}>REMINDER {props.reminderNo}</Col><Col offset={10} span={5}><EditOutlined align='right'/></Col></Row>} className='home-card' justify='center' align='middle' style={{'width':'500px'}}>
    //                                 <Row style={{'fontSize':'16px','fontWeight':'500'}}>Preview</Row>
    //                                 <Row>
    //                                     {osVal==="mac" && <AbandonedNotifications mac {...props}/>}
    //                                     {osVal==="windows8" && <AbandonedNotifications windows8 {...props}/>}
    //                                     {osVal==="windows10" && <AbandonedNotifications windows10 {...props}/>}
    //                                     {osVal==="android" && <AbandonedNotifications android {...props}/>}
    //                                 </Row>
    //                             </Card>
    //                         </Link>
    //         } >
    //         </Timeline.Item>
    //     )
    //      }
    const initialValues=
        
            {
                reminderNo:3,
                waitFor:'120',
                Title: "Hello, customer",
                targetLink: `asd`,
                message: "Buy them now before they get out of stock",
                buttonName: "Shop now",
                buttonLink: `sds`,
                buttons: [
                    { name: 'button 1', link: 'asd'},
                    { name: 'button the second', link: 'asds'},
                  ],
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
    function onChangeDate(date, dateString) {
        console.log(date, dateString);
      }
    function onChangeTime(time, timeString) {
        console.log(time, timeString);
      }
    return(
        <Card className='home-card'>
            <Row>
                <Col>
                    <div style={{'fontWeight':"500",'fontSize':'32px'}}>
                        Scheduled Notifications
                    </div>   
                </Col>
                {renderNewReminder &&
                    <Col offset={12}>
                        <button style={{background:'#36A900',color:'white',border:'0',height:'72px',width:'264px',fontSize:'30px',borderRadius:'12px',cursor:'pointer'}}
                        onClick={()=>
                        {setActiveTab('3')
                        setRenderNewReminder(false)}}>
                            New Schedule
                        </button>
                    </Col>
                }
            </Row>
       
        <Tabs size='large' activeKey={activeTab} defaultActiveKey="2" onChange={changeTab}>
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
                                                <Row justify='center' style={{'fontSize':'24px',cursor:'pointer'}}>
                                                    <Link to='/notifications/editnotification'>
                                                        <EditOutlined/>
                                                    </Link>
                                                </Row>     
                                            </Col>
                                </List.Item>
                            ))}
                    </List>
            </TabPane>
            {/* TAB 3 NEW SCHEDULE when clicked new schedule button */}
            <TabPane key="3">
                <Card title={<div style={{'fontSize':'24px'}}>Notification Setup</div>} className='home-card'>
                    <div style={{padding:'50px','paddingLeft':'30px'}}>
                        <Row gutter={30} style={{'padding':'20px'}}>
                            <Col style={{'fontSize':'24px'}}>Title</Col>
                            <Col ><Input className='configtext'/></Col>
                        </Row>
                        <Row gutter={30} style={{'padding':'20px'}}>
                            <Col style={{'fontSize':'24px'}}>Date</Col>
                            <Col><DatePicker size='large' onChange={onChangeDate} className='configtext' /></Col>
                        </Row>
                        <Row gutter={30} style={{'padding':'20px'}}>
                            <Col style={{'fontSize':'24px'}}>Time</Col>
                            <Col>
                            <TimePicker size='large' onChange={onChangeTime} className='configtext' use12Hours format="h:mm a" />
                            </Col>
                        </Row>
                    </div>
                    <Row gutter={100} style={{'padding':'20px'}}>
                        <Col span={12}>
                            <button onClick={()=>
                                            {setActiveTab('2')
                                            setRenderNewReminder(true)}
                                            }
                                    style={{'background':'#AAAAAA'}} className='prem-button'>
                                Cancel
                            </button>
                        </Col>
                        <Col span={12}>      
                            <button onClick={()=>setActiveTab('4')} style={{'background':'#36A900'}} className='prem-button'>Edit Notification</button>
                        </Col>
                    </Row>
                </Card>
            </TabPane>
            {/* TAB 4 NEW SCHEDULE PREVIEW */}
            <TabPane key="4">
                <Col align='middle' span={24}>
                <Timeline style={{'paddingLeft':'300px','paddingTop':'100px','width':'700px'}}>
                                {/* TRIGGER CARD */}
                    <Timeline.Item style={{'paddingTop':'200px','paddingBottom':'150px'}} dot={
                                    <Card className='home-card' justify='center' align='middle'>   
                                        <Row style={{'fontSize':'16px','fontWeight':'500'}}>
                                            Trigger
                                        </Row>
                                        <Row style={{'fontSize':'12px','color':'#626262'}}>
                                            When customer adds a product to the cart
                                        </Row>
                                    </Card>
                                } >
                    </Timeline.Item>
                    
                    <Timeline.Item style={{'paddingTop':'230',paddingBottom:'230px'}} dot={
                            <Link to='/notifications/editabandoned'>
                                <Card title={<Row gutter={100} style={{'fontWeight':'500','fontSize':'24px',cursor:'pointer'}}> <Col span={2}>Notification</Col><Col offset={10} span={5}><EditOutlined align='right'/></Col></Row>} className='home-card' justify='center' align='middle' style={{'width':'500px'}}>
                                    <Row style={{'fontSize':'16px','fontWeight':'500'}}>Preview</Row>
                                    <Row>
                                        <AbandonedNotifications android {...initialValues}/>
                                    </Row>
                                </Card>
                            </Link>
                    } >
                    </Timeline.Item>
                </Timeline>
                </Col>                
            </TabPane>
                            
        </Tabs>
          
        </Card>
      )

}

export default withTranslation()(Scheduled);