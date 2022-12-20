import { IonPage } from "@ionic/react";
import { useParams } from "react-router";
import Login from "../components/Login";

const Log = () => {
    const { id } = useParams<{id: string;}>();
    return(
        <IonPage>
            <Login idAvion={id}/>
        </IonPage>
    );
}

export default Log;