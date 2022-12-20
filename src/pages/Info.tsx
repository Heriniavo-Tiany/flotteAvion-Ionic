import { IonList } from "@ionic/core/components";
import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useParams } from "react-router";
import InfoAvion from "../components/InfoAvion";
import Kilometrage from "../components/Kilometrage";


const Info: React.FC = () =>{
    const { id } = useParams<{id: string;}>();
    return(
       <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Infos Avion</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <InfoAvion id={id}/>
                <Kilometrage id={id}/>
            </IonContent>

       </IonPage>
  
    );
};

export default Info;