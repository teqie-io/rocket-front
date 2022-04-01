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
                        <Col span={12}>Top Locations</Col>
                        <Col align="middle" span={12}>CTR</Col>
                      </Row>
                    </div>
                    }
        style={{background:"#0D83DD"}}
        bodyStyle={{background:"white"}}
        className="home-card"
        bordered={false}
      >
       {locations.map(item => (
         <div>
                <Row >
                    <Col align="middle" span={7} style={{'fontSize':'25px'}}>{item.icon}</Col>
                    <Col align="left" span={7} style={{'paddingTop':'5px'}} >{item.country}</Col>
                    <Col align="middle" span={10} className="home-perc" >{item.percentage}%</Col>          
                </Row>
                <hr/>
         </div>
       ))}
      </Card>

        )
    }
}