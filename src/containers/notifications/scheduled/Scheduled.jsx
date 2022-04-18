import React from 'react'
import { withTranslation } from 'react-i18next';
import { Card, Tabs,Row,Col,Select,Progress,List,Timeline} from 'antd';
//import {ResponsiveContainer} from 'recharts';
import {Link} from "react-router-dom"

import {useState,useEffect} from 'react';


function Scheduled()
{
    const { TabPane } = Tabs;
    function callback(key) {
        console.log(key);
      }
      return(
        <Card className='home-card' title={<div style={{'fontWeight':"500",'fontSize':'32px'}}>Scheduled Notifications</div>}>
       
        <Tabs size='large' defaultActiveKey="1" onChange={callback}>
            {/* TAB 1 Sent */}
            <TabPane tab={<div style={{'fontSize':'24px'}}>Sent</div>} key="1">
                sent
            </TabPane>
            {/* TAB 2 Scheduled */}
            <TabPane tab={<div style={{'fontSize':'24px'}}>Scheduled</div>} key="2">
               scheduled
            </TabPane>
        </Tabs>
          
        </Card>
      )

}

export default withTranslation()(Scheduled);