import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, IonList,IonItem,IonSelect,IonSelectOption, IonLabel, IonGrid, IonRow, IonCol } from '@ionic/react';
import { add } from 'ionicons/icons';
import { useState } from 'react';
import { useParams } from 'react-router';
// import ListeAssurance from '../components/ListeAssurance';
import NewVehicule from '../components/NewVehicule';
// import Assurance from '../pages/Assurance';
import './Page.css';

const Home: React.FC = () => {
  function setselect(event: any) {
    const mois = event;
      console.log(mois);
      let url = "http://localhost:8102/ListAssurance?id="+mois;
      window.location.href = url;
  }
  // let url 
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>avion</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonList>
        <IonItem>
            <IonSelect interface="popover" placeholder="expiration" onIonChange={(e:any)=>setselect(e.target.value)}>
                <IonSelectOption value="1">1 mois</IonSelectOption>
                <IonSelectOption value="2">3 mois</IonSelectOption>
            </IonSelect>
        </IonItem>
      </IonList>
      {/* <ListeAssurance /> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;