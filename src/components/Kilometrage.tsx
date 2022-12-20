import { IonList, IonText } from "@ionic/react";
import GetData from "./GetData";

interface KilometrageProps{
    id: string;
}

const Kilometrage : React.FC<KilometrageProps> = ({id}) =>{
    let url = "http://localhost:8080/infokilometrage?id="+id;
    const {data, refetch} = GetData(url);
    if(!data){
        return <h1>Loading ...</h1>;
    }else{
    return(
        <>
            { data.map((item: any) =>{
                return(
                    <>
                    <IonList>
                        <IonText>Kilometrage du {item["date"]}</IonText>
                    </IonList>
                    <IonList>
                        <IonText>Debut {item["debut"]} km/h</IonText>
                    </IonList>
                    <IonList>
                        <IonText>Debut {item["fin"]}km/h</IonText>
                    </IonList>
                    </>
                );
            })}
        </>
    );
        }
}
export default Kilometrage;