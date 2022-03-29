import React from "react"
import {Card} from "antd"
import "./Home.scss";
import { Row, Col } from 'antd';
import { List} from 'antd';

export default class RecentNotifications extends React.Component{
    render(){
        const notifications =[{
      
            id: 1,
            content: "Hey don't miss this",
            amount: "Rs 250",
            value1: '24',
            value2: '24'
          },
          {
            
            id: 2,
            content: "Priya don't miss this ",
            amount: "Rs 250",
            value1: '23',
            value2: '24'
          },
          {
            
            id: 3,
            content:"Hey don't miss this",
            amount: "Rs 250",
            value1: '24',
            value2: '24'
          },
          {
            id: 4,
            content:"Hey don't miss this",
            amount: "Rs 250",
            value1: '25',
            value2: '24'
          },
          {
            id: 5,
            content:"Hey don't miss this",
            state: false,
            amount: "Rs 350",
            value1: '26',
            value2: '24'
          },
       
          
        ]
        return(
      <Card title={<div className="home-title">Recent notifications</div>} 
      style={{background:"#0D83DD"}}
      bodyStyle={{background:"white"}}
      className="home-card"
      bordered={false}
      >
      
        <List>
          {notifications.map(item => (
            <List.Item style={{'padding-top':'10px'}}>  
                        <Col span={6} style={{'fontSize':'16px'}}>{item.content}</Col>
                        <Col span={6}  style={{'fontSize':'18px'}} >{item.amount}</Col>
                        <Col span={6}  style={{'fontSize':'18px'}} >{item.value1}</Col>
                        <Col span={6}  style={{'fontSize':'18px'}} >{item.value2}</Col> 
            </List.Item>
          ))}
        </List>
      </Card>
        )
    }
}