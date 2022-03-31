import React from "react";
import {EnFlagIcon, NlFlagIcon} from "../assets/flagIcons";
import { Menu, Dropdown} from 'antd';

class FlagDropDown extends React.Component {
    constructor(props) {
        super(props);
    }
    iconRender = () => {
        switch(this.props.currentLan){
            case "en":
            return <EnFlagIcon/>;
            case "nl":
            return <NlFlagIcon />;
            default: return <h1>No project match</h1>;
        }
    }
    render(){
        return(
            <Dropdown.Button style={{'marginLeft': '-15px'}} overlay={
                <Menu>
                    <Menu.Item key="1" icon={<EnFlagIcon />} onClick={()=>this.props.onLanguageChange("en")}>
                    en
                    </Menu.Item>
                    <Menu.Item key="2" icon={<NlFlagIcon />} onClick={()=>this.props.onLanguageChange("nl")}>
                    nl
                    </Menu.Item>
                </Menu>
            } 
            icon={this.iconRender()}       
            trigger={["click"]}> 
            </Dropdown.Button>            
        )
    }
}
export default FlagDropDown;