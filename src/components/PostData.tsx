import { useEffect, useState } from "react";
import axios from "axios";
function PostData(url: any){
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        setLoading(true);
        axios
            .post(url)
            .then((response) => {
                setData(response.data);
                console.log(data);
            })
            .catch((err) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url] );

    const refetch = () => {
        setLoading(true);
        axios
            .post(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() =>{
                setLoading(false);
            });
    };
    return { data, loading, error, refetch};
}
export default PostData;