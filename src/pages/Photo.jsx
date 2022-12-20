import {IonList} from "@ionic/core/components";
import {IonGrid, IonRow, IonCol, IonImg} from '@ionic/react';

import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader, IonIcon,
    IonItem,
    IonLabel,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {useParams} from "react-router";
import './Photo.css';
import {serverIP} from "../config";


// import image1 from '../../img/1.jpg';

const images = [];
for (let i = 1; i <= 7; i++) {
    const image = require(`../../img/${i}.jpg`);
    images.push({
        src: image,
        id: i
    });
}




const Info = () => {
    function btnClicked(src) {
        const id = new URL(window.location.href).searchParams.get("id");
        fetch(serverIP + 'changeImg/' + id+ '/'+src)
            .then(response => response.json())
            .then(data => console.log(id))
            .catch(error => console.error(error));
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Photo</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle>Changer de photo</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonGrid>
                    <IonRow>

                        {images.map((image) => (
                            <IonCol size={`6`} key={image.src} onClick={() => btnClicked(image.id)}>
                                <IonImg src={image.src} className="image" width="100%" height="100%"/>
                            </IonCol>
                        ))}
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>

    );
};

export default Info;