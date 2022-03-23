import Auth from "../auth/Auth"


export const generateUserToken = () => {
  let token = new Auth().getSlashToken()
  return token
}