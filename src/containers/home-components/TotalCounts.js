import React from "react"
import {Card} from "antd"
import "./Home.scss";
import { Row, Col } from 'antd';
import { SubscriberIcon,ImpressionsIcon,SentMailIcon } from "../../assets/CountIcons";

export default class TopLocations extends React.Component{
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
            
     <Card 
        style={{background:"#0D83DD"}}
        bodyStyle={{background:"white"}}
        className="home-card"
      >
            <Row gutter={85}>
            {
                locations.map(item => (       
                     
                                    <Col span={6}>
                                      <Card className="home-card"> 
                                      <Row gutter={20} align="middle">
                                      <Col span={12}><h2 className="count-text">{item.amount}</h2></Col>
                                      <Col span={12} style={{fontSize:"24px"}}><h2>{item.icon}</h2></Col>
                                      </Row>
                                      <Row>
                                        <Col>{item.countof}</Col>
                                      </Row>
                                      
                                      </Card>
                                    </Col> 
                    
                    )
                )
            }
            </Row>
      </Card>

        )
    }
}