
import * as React from 'react';
import Auth from '../auth/Auth';
import * as qs from 'qs'
import { Spin } from 'antd';

export default class Authenticator extends React.Component{
     
    render(){
      const style = {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
      }
      const auth = new Auth();
      let query_parameters = qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
      let newInstall = false
      if(query_parameters.new_installation){
        newInstall = true
      }
      
      auth.handleAuthenticationSlash(this.props.match.params.slash, newInstall)
      return (
        <Spin tip="Loading..."
         >
        <div style={{height:"600px"}}>Autheticating</div>
        </Spin>
      );

    }
}
