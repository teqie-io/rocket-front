import React from "react";
import { Link, withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Menu,Layout } from 'antd';
import { Button } from 'antd';
import './sidebar.styles.scss'
import {PremiumIcon} from '../../assets/CountIcons'; 
const { Sider } = Layout;


class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        const {t} = this.props;
        const path = this.props.location.pathname;
        if(path=='/notifications/editabandoned' || path == '/notifications/editnotification')
         return null;
        return (
        <Sider width={250} className='customsider' theme="dark"
            breakpoint="lg"
            collapsedWidth="0"
        >
            <Link to='/'>
            <img src={require('./PushMagnetInvert.png').default} alt='brand' height='auto' width='100%' className='logo'></img>
            </Link>

            <Menu  style={{'paddingTop':'200px'}} 
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}            
                className='custom-menu top'
            >              
                <Menu.Item key="1" className="customclass"><Link to='/'>{t("sidebar.home")}</Link></Menu.Item>
                <Menu.Item key="2" className="customclass"><Link to='/notifications'>{t("sidebar.notifications")}</Link></Menu.Item>
                <Menu.Item key="3" className="customclass"><Link to='/configurations'>{t("sidebar.configurations")}</Link></Menu.Item>
                <Menu.Item key="4" className="customclass"><Link to='/subscribers'>{t("sidebar.subscribers")}</Link></Menu.Item>          
            </Menu>

            <PremiumIcon className="premiumimg"/>

                <Button type="primary" className='custombutton'>
                   <Link to='/premium'>{t("sidebar.premium")}</Link> 
                </Button>          

            <Menu
                theme="dark"
                mode="inline"
                className='custom-menu bottom'
            >
                <Menu.Divider />
                <Menu.Item key="1"><Link to='/rateus'>{t("sidebar.rateus")}</Link></Menu.Item>
                <Menu.Item key="2"><Link to='/help'>{t("sidebar.help")}</Link></Menu.Item>
                <Menu.Item key="3"><Link to='/settings'>{t("sidebar.setting")}</Link></Menu.Item>
            </Menu>
        </Sider>
        );
        } 
}
export default withTranslation()(withRouter(Sidebar))
