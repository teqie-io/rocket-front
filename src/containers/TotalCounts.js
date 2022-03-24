import React from "react"
import {Card} from "antd"
import "./Home.scss";
import { Row, Col } from 'antd';
import { NlFlagIcon } from "../assets/flagIcons";

export default class TopLocations extends React.Component{
    render()
        {
            const locations=[
             {
                id: 1,
                icon: <NlFlagIcon/>,
                country: "Total Subs",
                percentage: '33',
            
              },
              {
                
                id: 2,
                icon: <NlFlagIcon/>,
                country: "notifications",
                percentage: '34',
                
              },
              {
                
                id: 3,
                icon:<NlFlagIcon/>,
                country: "Revenue",
                percentage: '33',
               
              },
              {
                
                id: 4,
                icon:<NlFlagIcon/>,
                country: "Impressions",
                percentage: '33',
               
              },

           
        ];
        return(
            
     <Card 
        style={{background:"#0D83DD"}}
        bodyStyle={{background:"white"}}
        //className="location-item"
      >
            <Row gutter={100}>
            {
                locations.map(item => (       
                     
                                    <Col span={6}>
                                      <Card className="home-card"> 
                                      <Row gutter={16}>
                                      <Col span={6}>{item.icon}</Col>
                                      <Col span={18}>{item.country}</Col>
                                      </Row>
                                      <Row>
                                        <Col offset={10}>{item.percentage}</Col>
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