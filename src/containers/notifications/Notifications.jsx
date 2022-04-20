import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import Directory from "./directory/NotificationsDirectory";
import Abandoned from "./abandoned/Abandoned";
import AbandonedCart from "./abandoned/AbandonedCart";
import Scheduled from "./scheduled/Scheduled";

import "./notificationsDirectory.styles.scss";
import EditNotification from "./scheduled/EditNotification";

class Notifications extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <>
        <Switch>
          <Route
            exact
            path={`${match.path}`}
            render={() => <Directory style={{ width: "100%" }} />}
          />
          <Route
             exact path={`${match.path}/cartrecovery`}
            render={() => <AbandonedCart />}
          />
          <Route
             exact path={`${match.path}/scheduled`}
            render={() => <Scheduled />}
          />
          <Route
            exact path={`${match.path}/editabandoned`}
            render={() => <Abandoned />}
          />
          <Route
            exact path={`${match.path}/editnotification`}
            render={() => <EditNotification />}
          />
          
        </Switch>
      </>
    );
  }
}

export default withRouter(Notifications);
