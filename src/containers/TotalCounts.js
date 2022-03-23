import React from "react"
import {Card} from "antd"
import "./TopLocations.scss";
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
            
     <Card 
        style={{background:"#0D83DD"}}
        bodyStyle={{background:"white"}}
        //className="location-item"
      >
            <Row gutter={100}>
            {
                locations.map(item => (         
                                    <Col span={8}>
                                    {item.icon}
                                    {item.country}
                                    {item.percentage}
                                    </Col> 
                    )
                )
            }
            </Row>
      </Card>

        )
    }
}