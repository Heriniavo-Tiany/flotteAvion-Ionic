
import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from './ExploreContainer';

interface loginProps{
  idAvion : string;
}

const Login: React.FC<loginProps> = ({idAvion}) => {
    // const [username, setUserName]= useState();
    // const [password, setPassword]= useState();

    const username = "maphie@gmail.com";
    const password = "maphie";

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Log In</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
       <IonInput placeholder='maphie@gmail.com' value='maphie@gmail.com'></IonInput>
       <IonInput placeholder='maphie' value='maphie' type='password'></IonInput>
       <IonButton 
        href={`verif/${username}/${password}/${idAvion}`}>Log in</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
