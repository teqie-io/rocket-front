import React from "react";
import { withRouter } from "react-router-dom"; //higher order compoent takes a component as an argument and turns in a modified component
import "./NotificationItem.styles.scss";
import { Trans } from 'react-i18next'
import { Card } from "antd";

class NotifItem extends React.Component{
  constructor(props)
  {
    super(props);
    
  }
  render(){
    const {title,imageUrl,content,state,linkUrl,match,history} = this.props;
    return (
        <Card
          title={title}
          className="notif-item"
          onClick={() => history.push(`${match.url}/${linkUrl}`)}
        >
          <div className="body">
            <img className="notif-img" src={ require(`${imageUrl}`).default } alt={title}></img>
            <p className="content">{content}</p>
          </div>
          <div style={{ height: "25px" }}></div>
          <div className={`${state ? "active" : "inactive"} state`}>
            {state ? <Trans i18nKey="notif.state.active">ACTIVE</Trans> : <Trans i18nKey="notif.state.inactive">INACTIVE</Trans>}
          </div>
        </Card>
    );
  }
}

export default withRouter(NotifItem);
