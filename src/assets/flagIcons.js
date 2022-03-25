import React from "react";
import Icon from '@ant-design/icons';

import { ReactComponent as EnFlagSVG } from '../assets/united-states.svg'; 
import { ReactComponent as NlFlagSVG } from '../assets/netherlands.svg';
import { ReactComponent as UkraineSVG } from '../assets/ukraine.svg';
import { ReactComponent as IndiaSVG } from '../assets/india.svg';
import { ReactComponent as CanadaSVG } from '../assets/canada.svg'; 

export const EnFlagIcon = (props) => <Icon component={EnFlagSVG} {...props} />;
export const NlFlagIcon = (props) => <Icon component={NlFlagSVG} {...props} />;
export const UkraineIcon = (props) => <Icon component={UkraineSVG} {...props} />;
export const IndiaIcon = (props) => <Icon component={IndiaSVG} {...props} />;
export const CanadaIcon = (props) => <Icon component={CanadaSVG} {...props} />;


