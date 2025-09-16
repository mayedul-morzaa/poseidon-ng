import { environment } from "src/environments/environment";

export class Common {
    
    public static getApiBaseUrl(){
        return environment.apiUrl;
    }
}