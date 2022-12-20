import { IonButton, IonButtons, IonContent, IonFabButton, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { add } from 'ionicons/icons';
import { useState } from 'react';
import { useParams } from 'react-router';
import NewVehicule from '../components/NewAvion';
import Verif from '../components/Verif';
import './Page.css';

const Tage: React.FC = () => {

  const { user } = useParams<{ user: string; }>();
  const { pwd } = useParams<{ pwd: string; }>();
  const { idAvion } = useParams<{ idAvion: string; }>();  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <Verif user={user} pwd={pwd} idavion={idAvion}/>
      </IonContent>
    </IonPage>
  );
};

export default Tage;
