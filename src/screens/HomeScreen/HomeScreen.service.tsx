import  {useEffect , useState} from "react"
import Trending from "../../api/requests/Trending";
import {BannerResponse, TVShow} from "../../interfaces";

const GetTrending = ():BannerResponse=>{
    const [data, setData] = useState<TVShow[] | []>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [err ,setErr] = useState<string>("");
    useEffect(()=>{
        (async ():Promise<void>=>{
            setLoading(true)
            await Trending().then(
                (r:any)=>{
                    setData(r.data.results);
                    setLoading(false);
                },
                (e)=>{
                    setErr(e.massege);
                    setLoading(false)
                }
            )
        })();
    },[])
    return {
        loading,
        data,
        err
    }
}
export {GetTrending}
