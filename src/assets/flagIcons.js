import React from "react";
import Icon from '@ant-design/icons';

import { ReactComponent as EnFlagSVG } from '../assets/united-states.svg'; 
import { ReactComponent as NlFlagSVG } from '../assets/netherlands.svg'; 

export const EnFlagIcon = (props) => <Icon component={EnFlagSVG} {...props} />;
export const NlFlagIcon = (props) => <Icon component={NlFlagSVG} {...props} />;


