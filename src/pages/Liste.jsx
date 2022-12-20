import { IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonTitle, IonToolbar,IonButtons,IonMenuButton, IonItem, IonText } from "@ionic/react";
import { car } from 'ionicons/icons';
import GetData from "../components/GetData";
import List from "../components/List";
// import listeVehicules from '../json/listeVehicules.json';


const Liste = () =>{
    let url ="http://flotteavion-ws-production.up.railway.app/avions";
    return(
        <IonPage>
             <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Liste Avion</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <List url = {url}/>
            </IonContent>

        </IonPage>
    );
};

export default Liste;