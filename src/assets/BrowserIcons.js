import React from "react";
import Icon from '@ant-design/icons';

import { ReactComponent as chm } from '../assets/chrome.svg'; 
import { ReactComponent as saf } from '../assets/safari.svg';
import { ReactComponent as ukn } from '../assets/firefox.svg';


export const ChromeIcon = (props) => <Icon component={chm} {...props} />;
export const SafariIcon = (props) => <Icon component={saf} {...props} />;
export const FirefoxIcon = (props) => <Icon component={ukn} {...props} />;