import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getShopDetails } from "../adaptors/ShopAdaptor";
import "../App.css";
import { withTranslation, Trans } from 'react-i18next'

import Home from "./Home";
import Notifications from "./notifications/Notifications";
import Premium from "./Premium";

import * as Logger from "../logger/Logger";
import { Button, Dropdown, Layout } from "antd";
import { DownOutlined } from "@ant-design/icons";
import DropdownMenu from "../components/dropdown/dropdown.component";
import Sidebar from "../components/sidebar/sidebar";
import LoadingOverlay from "../components/LoadingOverlay"
import FlagDropDown from "../components/flag"

const { Header, Footer, Content } = Layout;

const initialState = {
  lang: "en",
  shop: {
    id: null,
    name: "",
  },
  loggedInStatus: false,
  isLoading: true,
};

class Main extends React.Component {
  constructor() { 
    super();
    this.state = initialState;
  }
  
  onLanguageChange = (ln) => 
  {
    this.setState({
      lang: ln
    })
    this.props.i18n.changeLanguage(ln);
    return ln;
  }
  

  loadUser = (data) =>
    this.setState({
      shop: {
        id: data.shop_info.id,
        name: data.shop_info.name,
      },
    });

  async componentDidMount() {
    try {
      var shop = await getShopDetails();
      if (shop.status === 200) {
        this.loadUser(shop.data);
        this.setState({ loggedInStatus: true });
      }
    } catch (err) {
      Logger.logError(err);
      this.setState({ loggedInStatus: false });
    }
    this.setState({isLoading:false})
  }

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <LoadingOverlay loading={this.state.isLoading} />
        ) : (
          ""
        )}
        <Layout style={{ maxWidth: "100vw", minHeight: "100vh" }}>
          <Sidebar />
          <Layout style={{ maxWidth: "100vw", minHeight: "100vh"}}>
            <Header
              style={{ background: "white", height: "50px", padding: "5px" }}
              className="header"
            >
              <Dropdown
                overlay={DropdownMenu}
                trigger={["click"]}
                className="dropdown"
              >
                <Button>
                  {" "}
                  {this.state.shop.name} <DownOutlined />
                </Button>
              </Dropdown>
              <FlagDropDown
                onLanguageChange={this.onLanguageChange}
                currentLan={this.state.lang}
              />
            </Header>

            <Content
              className="site-layout-background"
              style={{
                margin: "12px",
                borderRadius: "3px",
              }}
            >
              <Switch>
                {/*<Route exact path="/" render={() => <Premium />} /> to be commented out later*/}
                <Route path="/premium" render={() => <Premium />} /> 
                <Route path="/notifications" render={() => <Notifications />} />
                <Route exact path="/" render={() => <Home />} />
              </Switch>
            </Content>

          </Layout>
        </Layout>
        <Layout>
                    <Footer>Footer</Footer>
                    </Layout>

      </>
    );
  }
}

export default withTranslation()(Main);
