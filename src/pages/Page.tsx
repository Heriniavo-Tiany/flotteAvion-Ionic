import { IonButton, IonButtons, IonContent, IonFabButton, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { add } from 'ionicons/icons';
import { useState } from 'react';
import { useParams } from 'react-router';
import NewAvion from '../components/NewAvion';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [model, setModel] = useState<string>('')
  const [numero, setNum] = useState<string>('')


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle >{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonLabel>
            <h2>Ajouter Avion</h2>
        </IonLabel>
        <IonList>
          <IonItem>
            <IonInput placeholder='Model' value={model} onIonChange={(e: any) => setModel(e.target.value)} ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput placeholder='Numero' value={numero} onIonChange={(y: any) => setNum(y.target.value)} ></IonInput>
          </IonItem>
          <NewAvion modele={model} numero={numero}/>
        </IonList>
      
        {/* <ExploreContainer name={name} /> */}
      </IonContent>
    </IonPage>
  );
};

export default Page;
