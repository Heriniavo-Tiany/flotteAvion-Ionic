import { IonButton, IonRouterContext } from '@ionic/react';
import { useContext } from 'react';
import './NewVehicule.css';

interface AvionProps {
  modele: string;
  numero: string;
}
const save = (modele : string, numero:string) => {
    console.log(modele);
    console.log(numero);
}
const NewAvion : React.FC<AvionProps> = ({modele, numero}) =>{
    
    return (
        <IonButton className="ion-padding" onClick={() => save(modele,numero)}>Ajouter</IonButton>
    );
};

export default NewAvion;