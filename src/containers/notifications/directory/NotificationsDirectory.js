import React from 'react';
import { Row, Col } from 'antd';

import { withTranslation } from 'react-i18next';

import NotifItem from '../notif-item/NotificationItem';

class Directory extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    const {t} = this.props;
    const notifications = [
      {
        title: t("notif.scheduled.title"),
        imageUrl: '/scheduled.png',
        id: 1,
        content: t("notif.scheduled.content"),
        state: false,
        linkUrl: 'scheduled'
      },
      {
        title: t("notif.abandoned.title"),
        imageUrl: '/abandoned.png',
        id: 2,
        content: t("notif.abandoned.content"),
        state: true,
        linkUrl: 'abandoned'
      },
      {
        title: t("notif.shipping.title"),
        imageUrl: '/shipping.png',
        id: 3,
        content:t("notif.shipping.content"),
        state: false,
        linkUrl: 'shipping'
      },
      {
        title: t("notif.welcome.title"),
        imageUrl: '/welcome.png',
        id: 4,
        content: t("notif.shipping.content"),
        state: false,
        linkUrl: 'welcome'
      },
      {
        title: t("notif.backinstock.title"),
        imageUrl: '/backinstock.png',
        id: 5,
        content: t("notif.backinstock.content"),
        state: false,
        linkUrl: 'backinstock'
      }
    ]  
      return (
        <Row gutter={[24, 24]} style={{ padding: "20px" }}>
          <Col span={24}>
            <h1 style={{ fontSize: "x-large", margin: "10px 0 0 0" }}>
              Notifications
            </h1>
          </Col>
          {notifications.map(({ id, ...otherSectionProps }) => (
            <Col key={id} xs={23} sm={22} md={12} lg={12} xl={8}>
              <NotifItem {...otherSectionProps} />
            </Col>
          ))}
        </Row>
      );
    }
}

export default withTranslation()(Directory);