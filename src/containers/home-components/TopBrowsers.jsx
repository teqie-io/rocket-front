import React from "react"
import {Card} from "antd"
import "./Home.scss";
import { Row, Col } from 'antd';
import { ChromeIcon,SafariIcon,FirefoxIcon } from "../../assets/BrowserIcons";

export default class TopBrowsers extends React.Component{
    render()
        {
            const locations=[
             {
                id: 1,
                icon: <ChromeIcon/>,
                browser: "Chrome",
                percentage: 60,
            
              },
              {
                
                id: 2,
                icon: <SafariIcon/>,
                browser: "Safari",
                percentage: 35,
                
              },
              {
                
                id: 3,
                icon:<FirefoxIcon/>,
                browser: "Firefox",
                percentage: 15,
               
              },

           
        ];
        return(
            
     <Card title={
                  <div className="home-title"> 
                      <Row>
                        <Col span={12}>Top Browsers</Col>
                        <Col align="middle" span={12}>CTR</Col>
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
                    <Col align="middle" span={7} style={{'fontSize':'25px'}}>{item.icon}</Col>
                    <Col align="left" span={7} style={{'paddingTop':'5px'}} >{item.browser}</Col>
                    <Col align="middle" span={10} className="home-perc" >{item.percentage}%</Col>
                    
                </Row>
                <hr/>
         </div>
       ))}
      </Card>

        )
    }
}