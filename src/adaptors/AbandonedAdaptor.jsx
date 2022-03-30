import { appInstance } from "../configs/networkConfigs";
import * as Logger from "../logger/Logger";

export const postNotificationDetails = async (details) => {
    try{  
        const resp = await appInstance.post("https://run.mocky.io/v3/b0cf3d5f-6515-4084-9b5e-40d562fbdbf9", details);
        return resp.data;    
    } catch (err) {
        Logger.logError(err);
      }

};


