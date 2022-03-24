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
                platforms: "Asus",
                percentage: 60,
            
              },
              {
                
                id: 2,
                icon: <NlFlagIcon/>,
                platforms: "Apple",
                percentage: 25,
                
              },
              {
                
                id: 3,
                icon:<NlFlagIcon/>,
                platforms: "Samsung",
                percentage: 15,
               
              },

           
        ];
        return(
            
     <Card title={
                  <div className="home-title"> 
                      <Row>
                        <Col span={8}>Top Platforms</Col>
                        <Col span={8}>CTR</Col>
                      </Row>
                    </div>
                    }
        style={{background:"#0D83DD"}}
        bodyStyle={{background:"white"}}
        className="home-card"
      >
    <Row>
                <Col span={12}>
                {locations.map(item => (
                    <div>
                        
                            
                                <Row>
                                    <Col span={4}>{item.icon}</Col>
                                    <Col span={12} >{item.platforms}</Col>
                                    <Col span={8} >{item.percentage}%</Col>    
                                </Row>
                                <hr/>
                            
                            
                    </div>
                ))}


                </Col>
                <Col span={12}>
                piechart
                </Col>
    </Row>
      </Card>

        )
    }
}