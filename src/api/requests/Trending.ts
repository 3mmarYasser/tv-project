import AbstractAxios from "../ConfigAxios";
import ConfigRequests from "../ConfigRequests";

const Trending = async () :Promise<any>=>{
    try{
        return await AbstractAxios.get(ConfigRequests.fetchTrending);
    }catch (err:any){
        throw new Error(err)
    }
}
export default Trending;