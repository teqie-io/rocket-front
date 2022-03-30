import React from 'react'
import { withTranslation } from 'react-i18next';
import { Card, Tabs,Button } from 'antd';
import {Link} from "react-router-dom"


function AbandonedCart()
{
    const { TabPane } = Tabs;
    function callback(key) {
        console.log(key);
      }
    return(
        <Card title="Abandoned Cart Recovery">
        <Button>
            <Link to='/notifications/abandoned'>EDIT</Link> 
        </Button> 
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Flow" key="1">
            Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Report" key="2">
            Content of Tab Pane 2
            </TabPane>
        </Tabs>
          
        </Card>
    )
}

export default withTranslation()(AbandonedCart);