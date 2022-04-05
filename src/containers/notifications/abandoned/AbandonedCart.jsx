import React from 'react'
import { withTranslation } from 'react-i18next';
import { Card, Tabs,Button,Row,Col,Select,Progress,List,Timeline} from 'antd';
//import {ResponsiveContainer} from 'recharts';
import {Link} from "react-router-dom"
import { Switch,Radio } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import {useState,useEffect} from 'react';
import { ClockCircleOutlined,DeleteOutlined ,EditOutlined,ThunderboltOutlined } from '@ant-design/icons';
import { AddReminderIcon } from '../../../assets/CountIcons';
import AbandonedNotifications from './abandonedNotifications/AbandonedNotifications';


const { Option } = Select;

function AbandonedCart()
{
    const { TabPane } = Tabs;
    function callback(key) {
        console.log(key);
      }
    //   temporary values for notification
    const initialValues = {
        
        Title: "Thanks for joining us",
        targetLink: `asd`,
        message: "Buy them now before they get out of stock",
        buttonName: "Shop now",
        buttonLink: `sds`,
        buttons: [
            { name: 'initialValues.buttonName', link: 'initialValues.buttonLink '},
          ],
      };
    //   SWITCHING OS VIEWS
      const [osVal,setOs] =useState("mac")
      function onChangeOs(e){
        // DIFFERENT PADDING FOR SMALLER MAC NOTIFICATIONS
        if(e.target.value==='mac')
        {setPadding('100px')}
        else
        {setPadding('230px')}
        setOs(e.target.value);
          
      };
      useEffect(() => {
        setReminder({remindex:1,rems:[<ReminderCard reminderNo={1}/>]})
      }, [osVal])
      // padding state for different os views
      const [rempadding,setPadding]=useState('100px')

    // reminder card  
    const RemCard= (props) =>{
        return(
            <Timeline.Item style={{'paddingTop':`${rempadding}`,paddingBottom:'150px'}} dot={
                            <Link to='/notifications/abandoned'>
                                <Card title={<Row gutter={100} style={{'fontWeight':'500','fontSize':'24px',cursor:'pointer'}}> <Col span={2}>REMINDER {props.reminderNo}</Col><Col offset={10} span={5}><EditOutlined align='right'/></Col></Row>} className='home-card' justify='center' align='middle' style={{'width':'500px'}}>
                                    <Row style={{'fontSize':'16px','fontWeight':'500'}}>Preview</Row>
                                    <Row>
                                        {osVal=="mac" && <AbandonedNotifications mac {...initialValues}/>}
                                        {osVal=="windows8" && <AbandonedNotifications windows8 {...initialValues}/>}
                                        {osVal=="windows10" && <AbandonedNotifications windows10 {...initialValues}/>}
                                        {osVal=="android" && <AbandonedNotifications android {...initialValues}/>}
                                    </Row>
                                </Card>
                            </Link>
            } ></Timeline.Item>
        )
    }

    // time to wait before reminder card
    const WaitRem= (props) => {
        function handleChange(value) {
            console.log(value);
          }
        return(
            <Timeline.Item style={{'paddingTop':`${rempadding}`,paddingBottom:'100px','width':'500px'}} dot={
                <Row>
                <Col span={23}>
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
                    </Card>
                </Col>
                <Col span={1}>
                    {/* remove below 2 comments if dont want delete for 1st reminder */}
                    {/* {props.reminderNo>1 && */}    
                    <DeleteOutlined onClick={()=>setReminder(prevState=>
                    {
                        let arr=prevState.rems.slice(0,-1)
                        return({remindex:prevState.remindex-1,
                        rems:arr
                    })
                    })}
                    
                    style={{fontSize:'32px',cursor:"pointer",'padding':'20px','paddingTop':'30px'}}/>
                    {/* } */}
                </Col>
                </Row>
                }
                >
            </Timeline.Item>
        )
    }

    // reminder and wait timer bundled together
    const ReminderCard = (props) =>{
        return(
            <>
            <WaitRem reminderNo={props.reminderNo}/>
            <RemCard reminderNo={props.reminderNo}/>
            </>
        )
    }
    // initial state set to 1 reminder
    const [reminderState,setReminder]=useState({remindex:1,rems:[<ReminderCard reminderNo={1}/>]})
    
    return(
        <Card className='home-card' title={<div style={{'fontWeight':"500",'fontSize':'32px'}}>Abandoned Cart Recovery</div>}>
       
        <Tabs size='large' defaultActiveKey="1" onChange={callback}>
            <TabPane tab={<div style={{'fontSize':'24px'}}>Flow</div>} key="1">
                <Card className='home-card'>
                    <Row gutter={130}>
                        <Col align='left'>
                            <Card className='home-card'>
                                    <Radio.Group onChange={onChangeOs} value={osVal}  optionType="button" buttonStyle="solid" >
                                        <Radio.Button value="mac">
                                            <div>
                                            Mac OS
                                            </div>
                                        </Radio.Button>
                                        <Radio.Button value="android">
                                            <div>
                                            Android
                                            </div>
                                        </Radio.Button>
                                        <Radio.Button value="windows10">
                                            <div >
                                            Windows
                                            </div>
                                        </Radio.Button>

                                    </Radio.Group>
                                        </Card>
                        </Col>
                        {/* MAIN FLOW */}
                        <Col>
                            <Timeline style={{'padding-left':'200px','paddingTop':'50px','width':'400px'}}>
                                {/* TRIGGER CARD */}
                                <Timeline.Item dot={
                                    <Card className='home-card' justify='center' align='middle'>   
                                    <Row style={{'fontSize':'16px','fontWeight':'500'}}><ThunderboltOutlined style={{'fontSize':'20px','paddingTop':'5px',paddingRight:'5px'}}/>Trigger
                                    </Row>
                                    <Row style={{'fontSize':'12px','color':'#626262'}}>When customer adds a product to the cart</Row>
                                </Card>
                                } style={{'paddingTop':'200px'}}></Timeline.Item>
                                
                                {/* *******THE REMINDERS BEING MAPPED FROM STATE********** */}
                                {
                                    reminderState.rems.map((item,i)=>
                                        {return(
                                            <div key ={i}>
                                                {item}
                                            </div>
                                                )
                                        }
                                    )
                                }

                                {/* ADD REMINDER BUTTON */}
                                <Timeline.Item dot ={<AddReminderIcon style={{fontSize:'150px',cursor:"pointer" ,'height':'200px'}} 
                                                    onClick={()=>setReminder(prevState=>{
                                                                return(
                                                                        {
                                                                            remindex:prevState.remindex+1,
                                                                            rems:[...prevState.rems,<ReminderCard reminderNo={reminderState.remindex+1}/>]
                                                                        }
                                                                    )
                                                                })
                                                            }/>
                                                    }>
                                </Timeline.Item>
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
            {/* TAB 2 ABANDONED CART REPORT */}
            <TabPane tab={<div style={{'fontSize':'24px'}}>Report</div>} key="2">
                <CartReport/>
            </TabPane>
        </Tabs>
          
        </Card>
    )
}

export default withTranslation()(AbandonedCart);

// CART REPORT
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