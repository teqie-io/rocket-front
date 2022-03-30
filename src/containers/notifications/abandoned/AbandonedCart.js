import React from 'react'
import { withTranslation } from 'react-i18next';
import { Card, Tabs,Button,Row,Col } from 'antd';
import {Link} from "react-router-dom"
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

function AbandonedCart()
{
    const { TabPane } = Tabs;
    function callback(key) {
        console.log(key);
      }
    return(
        <Card title={<div style={{'fontWeight':"500",'fontSize':'32px'}}>Abandoned Cart Recovery</div>}>
       
        <Tabs size='large' defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Flow" key="1">
                <Card>
                    <Button>
                        <Link to='/notifications/abandoned'>TO EDIT</Link> 
                    </Button> 
                    
                    <Row span={12}><Col span={18}> Content of Tab Pane 1</Col>

                    <Switch size='30px' style={{'height':'30px','width':'60px'}}
                    checkedChildren={<CheckOutlined style={{'fontSize':'15px'}}  />}
                    unCheckedChildren={<CloseOutlined style={{'fontSize':'15px'}} />}
                    defaultChecked
                    /></Row>
                </Card>
            </TabPane>
            <TabPane tab="Report" key="2">
            Content of Tab Pane 2
            </TabPane>
        </Tabs>
          
        </Card>
    )
}

export default withTranslation()(AbandonedCart);