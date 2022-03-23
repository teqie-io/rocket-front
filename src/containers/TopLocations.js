import React from "react"
import {Card} from "antd"
import "./TopLocations.scss";
import { Row, Col } from 'antd';

export default class TopLocations extends React.Component{
    render()
        {
            const locations=[
             {
                id: 1,
                content: "Hey d this",
                amount: "Rs 250",
                value1: '24',
                value2: '24'
              },
              {
                
                id: 2,
                content: "Priys this ",
                amount: "Rs 250",
                value1: '23',
                value2: '24'
              },
              {
                
                id: 3,
                content:"Hey dont mi",
                amount: "Rs 250",
                value1: '24',
                value2: '24'
              },
              {
                id: 4,
                content:"Hey donis",
                amount: "Rs 250",
                value1: '25',
                value2: '24'
              },
              {
                id: 5,
                content:"Hey  this",
                state: false,
                amount: "Rs 350",
                value1: '26',
                value2: '24'
              },
        ];
        return(
            
     <Card title={<div className="content1">Top Locations</div>}
      style={{background:"#0D83DD"}}
      bodyStyle={{background:"white"}}>
       {locations.map(item => (
         <div>
                <Row>
                    <Col span={7}>{item.content}</Col>
                    <Col span={6} >{item.amount}</Col>
                    <Col span={5} >{item.value1}</Col>
                    <Col span={5} >{item.value2}</Col>
                </Row>
                <hr/>
         </div>
       ))}
      </Card>

        )
    }
}