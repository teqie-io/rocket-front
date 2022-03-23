import React from "react"
import {Card} from "antd"
import "./RecentNotifications.scss";
import { Row, Col } from 'antd';

export default class RecentNotifications extends React.Component{
    render(){
        const notifications =[{
      
            id: 1,
            content: "Hey dont miss this",
            amount: "Rs 250",
            value1: '24',
            value2: '24'
          },
          {
            
            id: 2,
            content: "Priya dont miss this ",
            amount: "Rs 250",
            value1: '23',
            value2: '24'
          },
          {
            
            id: 3,
            content:"Hey dont miss this",
            amount: "Rs 250",
            value1: '24',
            value2: '24'
          },
          {
            id: 4,
            content:"Hey dont miss this",
            amount: "Rs 250",
            value1: '25',
            value2: '24'
          },
          {
            id: 5,
            content:"Hey dont miss this",
            state: false,
            amount: "Rs 350",
            value1: '26',
            value2: '24'
          },
       
          
        ]
        return(
      <Card title={<div className="content1">Recent notifications</div>} 
      style={{background:"#0D83DD"}}
      bodyStyle={{background:"white"}}
      className="recent-noti"
      >
       {notifications.map(item => (
         <div>
                <Row>
                    <Col span={10}>{item.content}</Col>
                    <Col span={7} >{item.amount}</Col>
                    <Col span={4} >{item.value1}</Col>
                    <Col span={3} >{item.value2}</Col>
                </Row>
                <hr/>
         </div>
       ))}
      </Card>
        )
    }
}