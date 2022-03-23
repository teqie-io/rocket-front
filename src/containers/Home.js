import React from "react";
import { withTranslation } from 'react-i18next';

class Home extends React.Component {
  render() {
    const {t} = this.props;
    return <div>{t('home')}</div>;
  }
}

export default withTranslation()(Home);
