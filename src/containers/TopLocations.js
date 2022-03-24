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
                country: "Ukraine",
                percentage: '33',
            
              },
              {
                
                id: 2,
                icon: <NlFlagIcon/>,
                country: "India",
                percentage: '34',
                
              },
              {
                
                id: 3,
                icon:<NlFlagIcon/>,
                country: "Canada",
                percentage: '33',
               
              },

           
        ];
        return(
            
     <Card title={
                  <div className="home-title"> 
                      <Row>
                        <Col span={16}>Top Locations</Col>
                        <Col span={8}>CTR</Col>
                      </Row>
                    </div>
                    }
        style={{background:"#0D83DD"}}
        bodyStyle={{background:"white"}}
        className="home-card"
      >
       {locations.map(item => (
         <div>
                <Row>
                    <Col span={4}>{item.icon}</Col>
                    <Col span={12} >{item.country}</Col>
                    <Col span={8} >{item.percentage}</Col>
                    
                </Row>
                <hr/>
         </div>
       ))}
      </Card>

        )
    }
}