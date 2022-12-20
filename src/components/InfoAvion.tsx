import { IonCard, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import GetData from "./GetData";

interface InfoAvionProps{
    id: string;
}

const InfoAvion : React.FC<InfoAvionProps> = ({id}) => {
    let url = "http://flotteavion-ws-production.up.railway.app/avions?"+id;
    
    const {data, refetch} = GetData(url);
    // const {data, refetch} = GetData(url2);
    console.log(url);
    if(!data){
        return <h1>Loading ...</h1>;
    }else{

    return (
        <>
            <IonItem>
                <IonTitle>Matricule : {data[0]["number"]}</IonTitle>
                    
            </IonItem>
        </>
  

    );
            }
};

export default InfoAvion;