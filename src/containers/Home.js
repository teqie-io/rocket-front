import React from "react";
import { withTranslation } from 'react-i18next';
import {Card} from "antd"
import "./Home.scss";
import { Row, Col } from 'antd';

class Home extends React.Component {
  render() {
    const {t} = this.props;
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
    }]
    return (
      <div>
        <h1>Recent Notifications</h1>
      <Card title="Recent Notifications" className="notif-itm" 
      style={{background:"#0D83DD"}}
      bodyStyle={{background:"white"}}
      
      >
        
       
       {notifications.map(item => (
         <div>
          <Row >
          <Col span={7}>{item.content}</Col>
          <Col span={6} >{item.amount}</Col>
          <Col span={5} >{item.value1}</Col>
          <Col span={5} >{item.value2}</Col>
          </Row>
         <hr/>
         </div>
       ))}
      </Card>
    </div>
    );
  }
}

export default withTranslation()(Home);
