import React from "react"
import {Card} from "antd"
import "./Home.scss";
import { Row, Col } from 'antd';
import { SubscriberIcon,ImpressionsIcon,SentMailIcon } from "../../assets/CountIcons";

export default class TotalCounts extends React.Component{
    render()
        {
            const locations=[
             {
                id: 1,
                icon: <SubscriberIcon/>,
                countof: "Total Subscibers",
                amount: '24',
            
              },
              {
                
                id: 2,
                icon: <SentMailIcon/>,
                countof: "Notifications",
                amount: '12',
                
              },
              {
                
                id: 3,
                icon:" ",
                countof: "Revenue Generated",
                amount: '$33',
               
              },
              {
                
                id: 4,
                icon:<ImpressionsIcon/>,
                countof: "Impressions",
                amount: '33',
               
              },

           
        ];
        return(
     
            <Row gutter={25}>
            {
                locations.map(item => (       
                     
                                    <Col key={item.id} span={6} xs={23} sm={22} md={12} lg={12} xl={6}>
                                      <Card className="home-card"> 
                                      <Row gutter={20} align="middle">
                                        <Col align="right" span={12}><h2 className="count-text">{item.amount}</h2></Col>
                                        <Col align="left" span={12} style={{fontSize:"24px"}}><h2>{item.icon}</h2></Col>
                                      </Row>
                                      <Row>
                                        <Col span={24}>{item.countof}</Col>
                                      </Row>
                                      
                                      </Card>
                                    </Col> 
                    
                    )
                )
            }
            </Row>
    

        )
    }
}