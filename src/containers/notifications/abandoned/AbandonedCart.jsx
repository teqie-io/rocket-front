import React from 'react'
import { withTranslation } from 'react-i18next';
import { Card, Tabs,Button,Row,Col,Select,Progress} from 'antd';
import {ResponsiveContainer} from 'recharts';
import {Link} from "react-router-dom"
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

const { Option } = Select;

function AbandonedCart()
{
    const { TabPane } = Tabs;
    function callback(key) {
        console.log(key);
      }

    return(
        <Card title={<div style={{'fontWeight':"500",'fontSize':'32px'}}>Abandoned Cart Recovery</div>}>
       
        <Tabs size='large' defaultActiveKey="2" onChange={callback}>
            <TabPane tab="Flow" key="1">
                <Card>
                    <Button>
                        <Link to='/notifications/abandoned'>TO EDIT</Link> 
                    </Button> 
                    
                    <Row span={12}>
                        <Col span={18}>
                            Content of Tab Pane 1
                        </Col>
                        <Switch size='30px' style={{'height':'30px','width':'60px'}}
                        checkedChildren={<CheckOutlined style={{'fontSize':'15px'}}  />}
                        unCheckedChildren={<CloseOutlined style={{'fontSize':'15px'}} />}
                        defaultChecked
                        />
                    </Row>
                </Card>
            </TabPane>
            <TabPane tab="Report" key="2">
                <CartReport/>
            </TabPane>
        </Tabs>
          
        </Card>
    )
}

export default withTranslation()(AbandonedCart);


const CartReport = () => {
    function handleChange(value) {
        console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
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
    return(
        <Card>
            {/* In queue and revenue */}
            <Col span={6}>
                <Card className='home-card'>
                    <Row gutter={70}>
                        <Col span={12}>
                            <Row align="middle">
                                <Col align="middle" span={24}><h2 className="count-text">3</h2></Col>                      
                            </Row>
                            <Row>
                                <Col  align="middle" span={24}>In queue</Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row gutter={20} align="middle">
                            <Col align="middle" span={24}><h2 className="count-text">2k</h2></Col>                      
                            </Row>
                            <Row>
                                <Col align="middle" span={24}>Revenue</Col>
                            </Row>
                        </Col>
                     </Row>
                </Card>
            </Col>
            
            <Row gutter={70} align='middle' justify='center' style={{'padding-top':'20px'}}>
                {/* Status */}
                <Col span={12}>
                    <Card className='home-card'>
                        <h2>
                            Status
                        </h2>
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
                        <div style={{'padding-top':'20px'}}>
                            {
                                statusinfo.map(item =>{
                                    return(
                                        <Row gutter={70} style={{'padding-top':'10px'}}>
                                            <Col span={3}>{item.info}</Col>
                                            <Col align='left' span={21}>
                                                <Progress percent={item.percentage} status="active" />
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
                        <h2 style={{'textAlign':'center'}}>
                            Abandoned Cart Recovery Rates
                        </h2> 
                        <div style={{'textAlign':'center','paddingTop':'15px','height':'220px'}}>
                            {/* <div style={{'padding-left':'130px'}}>
                            <ResponsiveContainer width="60%"> */}
                            <Progress type="dashboard"
                            percent={82.3}
                            format={percent => <div >
                                                <Row  justify='center' style={{'fontSize':'32px','fontWeight':'500'}}>{percent}%</Row>
                                                <Row style={{'padding-top':'15px','fontSize':'24px'}} justify='center'>Conversion Rate</Row>
                                              </div>}
                            width={300}
                            gapDegree={145}
                            />
                                {/* </ResponsiveContainer>
                            </div> */}
                        </div>
                    </Card>
                </Col>
           
            </Row>
            {/* Sales */}
            <Col span={24} style={{'paddingTop':'30px'}} >
                <Card title={<h2>Sales of 10 days</h2>} className='home-card' >
                
                </Card>
            </Col>
        </Card>

    )
}