
import * as NetworkConfig from '../configs/networkConfigs'

export default class Auth {
 

  constructor() {
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  } 

  readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)===' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }
  handleAuthenticationSlash = async (slash_token, newInstall = false) => {
    let authResult = {
        access_token : '',
        id_token: '',
        expiresIn: '',
        slash_access_token: slash_token
    }
    this.setSession(authResult);
    localStorage.setItem("user_id", "user-id");
  
    this.handlePostAuthenticationContextCalls()


    if(newInstall === true){
      // do something related to affiliate
    }
    window.location.replace('/')
  }

  handlePostAuthenticationContextCalls = () => {
    //There is no code written for context calls
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('slash_access_token', authResult.slash_access_token);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  logout = async() => {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('slash_access_token');
    window.location.href = NetworkConfig.backend_custom_logout_url
  }

  getSlashToken() {
    return localStorage.getItem('slash_access_token')
  }
  isAuthenticated() {
    // Check whether the current time is past the 
    // access token's expiry time
    return !(this.getSlashToken() === null || this.getSlashToken() === '' || this.getSlashToken() === undefined)
  }
}
