import { appInstance } from "../configs/networkConfigs";


export const getShopDetails = async () => {
  
  const result = await appInstance.get("/shop");
  localStorage.setItem("shop_details", JSON.stringify(result.data));
  return result;
};


