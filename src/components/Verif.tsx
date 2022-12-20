import { IonItem, IonText } from "@ionic/react";
import GetData from "./GetData";
import PostData from "./PostData";

interface Verifprops{
    user: string;
    pwd: string;
    idavion: string;
}

const Verif : React.FC<Verifprops> =({user,pwd,idavion}) =>{
    let url = "http://flotteavion-ws-production.up.railway.app/users?email="+user+"&pwd="+pwd;
    const {data, refetch} = GetData(url);
    if(!data){
        return <h1>Loading ... </h1>
    }else{
    
    return(
        <IonItem>
            {data.map((item: any)=>{
                <IonText>{item["id"]}</IonText>
            })}
        </IonItem>
    );
        }
}
export default Verif;