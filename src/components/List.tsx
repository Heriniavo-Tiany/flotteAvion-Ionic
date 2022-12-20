import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { car } from "ionicons/icons";
import GetData from "./GetData";

interface listProps{
    url: string;
}

const List : React.FC<listProps> = ({url}) =>{

        const {data, refetch} = GetData(url);

    if(!data){
        return <h1>Loading ...</h1>;
    } else{
        
        return (

            <>
 
                    {data.map((item: { [x: string]: any; }) => {
                        let url= "/login/"+item["id"];
                        return(
                            <IonItem href={url} detail={true}>
                                <IonLabel>
                                    <IonIcon icon={car} slot="start"></IonIcon>
                                    
                                    <IonText className="ion-padding">{item["number"]}</IonText>
                                </IonLabel>
                            </IonItem>
                        );
                    }
                    )

                    }
        </>
        );
        }
}
export default List;