import axios from 'axios';
import * as TokenHelper from "../helpers/TokenHelper"

console.log("ENV===", process.env.REACT_APP_ENV)
const isDev = process.env.REACT_APP_ENV !== 'production'

export const appUrl = isDev? "https://axe.jauntour.com" : "https://app.<to_be_defined>"


export const backend_login_url = isDev ? "https://axe.jauntour.com": "https://axe.jauntour.com"
export const backend_logout_url = isDev ? "https://axe.jauntour.com/logout": "https://axe.jauntour.com/logout"
export const backend_custom_logout_url = isDev ? "https://axe.jauntour.com/custom_logout": "https://axe.jauntour.com/custom_logout"

export const shopifyAppstoreUrl = isDev? "https://axe.jauntour.com": "https://apps.shopify.com/<to_be-defined>"
export const image_upload_url = isDev? "https://axe.jauntour.com/image/upload/": "https://axe.jauntour.com/image/upload/"
export const appInstance = axios.create(
  {
    baseURL: appUrl,
    timeout: 5000,
    headers: {
      Authorization: {
        toString () {
          return `Bearer ${TokenHelper.generateUserToken()}`
        }
      }
    }
  }
)

export const defaultImageUrl = "https://img.icons8.com/cute-clipart/128/000000/picture.png"