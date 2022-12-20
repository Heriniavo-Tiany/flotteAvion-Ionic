import { IonCard, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import GetData from "./GetData";

interface InfoVehiculeProps{
    id: string;
}

const InfoVehicule : React.FC<InfoVehiculeProps> = ({id}) => {
    let url = "http://localhost:8080/infoVehicule?id="+id;
    
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

export default InfoVehicule;