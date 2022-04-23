import AbstractAxios from "../AbstractAxios";
import AbstractRequests from "../AbstractRequests";

const Trending = async () :Promise<any>=>{
    try{
        return await AbstractAxios.get(AbstractRequests.fetchTrending);
    }catch (err:any){
        throw new Error(err)
    }
}
export default Trending;