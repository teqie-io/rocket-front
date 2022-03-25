import React from "react"
import {Card} from "antd"
import "./Home.scss";
import { Row, Col } from 'antd';
import { IndiaIcon,CanadaIcon,UkraineIcon } from "../../assets/flagIcons";

export default class TopLocations extends React.Component{
    render()
        {
            const locations=[
             {
                id: 1,
                icon: <UkraineIcon/>,
                country: "Ukraine",
                percentage: 33,
            
              },
              {
                
                id: 2,
                icon: <IndiaIcon/>,
                country: "India",
                percentage: 34,
                
              },
              {
                
                id: 3,
                icon:<CanadaIcon/>,
                country: "Canada",
                percentage: 33,
               
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
                    <Col span={4} style={{'font-size':'25px'}}>{item.icon}</Col>
                    <Col span={12} style={{'paddingTop':'5px'}} >{item.country}</Col>
                    <Col span={8} className="home-perc" >{item.percentage}%</Col>          
                </Row>
                <hr/>
         </div>
       ))}
      </Card>

        )
    }
}