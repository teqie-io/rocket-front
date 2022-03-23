import React from "react";
import { withTranslation } from 'react-i18next';

import RecentNotifications from "./RecentNotifications";

class Home extends React.Component {
  render() {
    const {t} = this.props;
    
    return (
      <div>
        <h1>Dashboard</h1>
        <RecentNotifications/>
    </div>
    );
  }
}

export default withTranslation()(Home);
