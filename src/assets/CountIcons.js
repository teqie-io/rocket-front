import React from "react";
import Icon from '@ant-design/icons';

import { ReactComponent as SubscriberSVG } from './subscriber.svg'; 
import { ReactComponent as SentMailSVG } from './sentmail.svg'; 
import { ReactComponent as ImpressionsSVG } from './impressions.svg';
import { ReactComponent as ChatSVG } from './chat.svg'; 


export const SubscriberIcon = (props) => <Icon component={SubscriberSVG} {...props} />;
export const SentMailIcon = (props) => <Icon component={SentMailSVG} {...props} />;
export const ImpressionsIcon = (props) => <Icon component={ImpressionsSVG} {...props} />;
export const ChatIcon = (props) => <Icon component={ChatSVG} {...props} />;