import React from "react";
import { Card } from "antd";
import "./remainders.scss";
import { ChromeIcon } from '../../../../assets/BrowserIcons';

class Remainders extends React.Component {

  render() {
    const {
      Title,
      message,
      buttonName,
      link,
      image,
    } = this.props;
    return (
      <Card style={{'padding':'0px','margin':'0px','width':'100%','box-shadow': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px','alignContents':'left'}}>
        <div className="body_rem">
          <p className="link_rem"><ChromeIcon/> {link}</p>
          <p className="title_rem">{Title}</p>
          <div>
            <p className="message_rem"> {message} </p>
          </div>
          <button className="button_rem" style={{'color':'white', 'marginTop':'20px', 'padding':'2% 9%'}}>
            {buttonName}
          </button>
        </div>
        <div style={{'padding':'0px','margin':'0px'}}>
          <img
            className="image_rem"
            src={image}
            alt="image1"
          />
        </div>
      </Card>
    );
  }
}

export default Remainders;
