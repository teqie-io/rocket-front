import React from 'react';
import { withTranslation } from 'react-i18next';
import { Card, 
         Tabs, 
         Row, 
         Col, 
         Timeline,
         Select,
        } from 'antd';
import { Switch} from 'antd';
import { CloseOutlined, 
         CheckOutlined, 
         ClockCircleOutlined, 
         DeleteOutlined ,
         EditOutlined
        } from '@ant-design/icons';
import {ThunderboltOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import Remainders from './Remainders/remainders';
import { useState, useEffect } from 'react';
import { AddReminderIcon } from '../../../assets/CountIcons';
import image1 from './Rectangle 55.png';
import image2 from './Rectangle 56.png';


const { Option } = Select;

function Welcome() {

    const { TabPane } = Tabs;
    function callback(key) {
        console.log(key);
    };

    const RemCard= (props) =>{
        return(
            <Timeline.Item style={{'paddingTop':'250px','paddingBottom':'150px'}} dot={
                // Add edit welcome link below
                <Link to='/notifications/editwelcome'>
                    <Card title={
                        <Row gutter={100} style={{'fontWeight':'500','fontSize':'24px','cursor':'pointer'}}> 
                            <Col span={2}>REMINDER {props.reminderNo}</Col>
                            <Col offset={10} span={5}>
                                <EditOutlined align='right'/>
                            </Col>
                        </Row>} 
                        className='home-card' justify='center' align='middle' margin='none' padding='none'
                        style={{'width':'500px'}}>
                            <Row style={{'fontSize':'16px','fontWeight':'500', 'paddingBottom':'20px','margin':'0px'}}>Preview</Row>
                            <Remainders {...props}/>
                    </Card>
                </Link>
            }></Timeline.Item>
        )
    }
    
    // time to wait before reminder card
    const WaitRem= (props) => {
        function handleChange(value) {
            //edit state's reminder time
            console.log(value); 
            let tmp = reminderState
            tmp[props.reminderNo-1].waitFor=value.value
            setReminder(tmp)
            console.log(reminderState)
            }
            return(
                <Timeline.Item style={{'paddingTop':'250px','paddingBottom':'100px','width':'500px'}} dot={
                    <Row>
                    <Col span={23}>
                        <Card className='home-card' style={{'width':'300px'}}> 
                            <Row>
                            <Col span={12} style={{'paddingTop':'10px'}}>
                                <ClockCircleOutlined/> Wait for
                            </Col>
                            <Col span={12}>
                            <Select
                                    labelInValue
                                    defaultValue={{ value: props.waitFor }}
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
                        <DeleteOutlined onClick={()=>setReminder(prevState=>
                        {
                            let arr=prevState.slice(0,-1)
                            return(arr)
                        })}
                        
                        style={{fontSize:'32px',cursor:"pointer",'padding':'20px','paddingTop':'30px'}}/>
                    </Col>
                    </Row>
                    }
                    >
                </Timeline.Item>
            )
        }

        function addRem()
    {
       setReminder((prevState)=>{
            let arr= prevState
            let index =prevState.length
            //default card added
            arr.push(
                {
                    reminderNo:index+1,
                    waitFor:'60',
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
            )
            console.log(reminderState)//to be sent to api
            return(arr)
            })
            setRefresh(refresh+1)//to re-render on adding reminder..tried putting the reminderState in the dependency array itself , but didnt work  
    }

    const [refresh,setRefresh] =useState(1) //to re-render on adding reminder..tried putting the reminderState in the dependency array itself , but didnt work
     
    //useEffect to re-render on changing os view
     useEffect(() => {

     }, [refresh])
    
        // initial state to be taken from api
        const [reminderState,setReminder]= useState ([{
            reminderNo:1,
            waitFor:'30',
            Title: "Thanks for Joining us",
            message: "Enjoy 50% off on your purchase",
            buttonName: "Buy now",
            link: "Chrome . Myntrashopping.com . 13:10 PM",
            image: image1,
          },
          {
            reminderNo:2,
            waitFor:'30',
            Title: "Thanks for Joining us",
            message: "Buy the shoes in your cart before you lose it!",
            buttonName: "Buy now",
            link: "Chrome . Myntrashopping.com . 13:10 PM",
            image: image2,
          }
        ])

    return (
      <div>
          <Card className='home-card' title={<div style={{'fontWeight':"500",'fontSize':'32px'}}>Welcome Notification</div>}>
            <Tabs size='large' defaultActiveKey="1" onChange={callback}>
              <TabPane tab={<div style={{'fontSize':'24px'}}>Flow</div>} key="1">
                <Card className='home-card' style={{'paddingLeft':'25%'}}>
                    <Row gutter={130}>
                        <Col>
                            <Timeline style={{'paddingLeft':'200px','paddingTop':'50px','width':'400px'}}>
                                {/* TRIGGER CARD */}
                                <Timeline.Item dot={
                                    <Card className='home-card' justify='center' align='middle'>   
                                        <Row style={{'fontSize':'16px','fontWeight':'500'}}>
                                            <ThunderboltOutlined style={{'fontSize':'20px','paddingTop':'5px','paddingRight':'5px'}}/>Trigger
                                        </Row>
                                        <Row style={{'fontSize':'12px','color':'#626262'}}>
                                        When a new visitor subscribes
                                        </Row>
                                    </Card>
                                } style={{'paddingTop':'200px'}}>
                                </Timeline.Item>
                                {/* REMAINDER CARDS */}
                                {
                                    reminderState.map((item,i)=>
                                        {return(
                                            <div key ={i}>
                                                <WaitRem {...item}/>
                                                <RemCard {...item}/>
                                            </div>
                                            )
                                        }
                                    )
                                }
                                <Timeline.Item dot ={<AddReminderIcon style={{fontSize:'150px',cursor:"pointer" ,'height':'200px'}} 
                                                    onClick={addRem}
                                                            />
                                                    }>
                                </Timeline.Item>
                            </Timeline>
                        </Col>
                        <Col style={{'paddingTop':'25px', 'position': 'absolute', 'paddingLeft':'65%'}}>
                        <Switch size='30px' style={{'height':'30px','width':'60px'}}
                        checkedChildren={<CheckOutlined style={{'fontSize':'15px'}}  />}
                        unCheckedChildren={<CloseOutlined style={{'fontSize':'15px'}} />}
                        defaultChecked
                        />
                        </Col>
                    </Row>
                </Card>
              </TabPane>
              <TabPane tab={<div style={{'fontSize':'24px'}}>Report</div>} key="2"></TabPane>
            </Tabs>
          </Card>
      </div>
    )
}

export default withTranslation()(Welcome);
