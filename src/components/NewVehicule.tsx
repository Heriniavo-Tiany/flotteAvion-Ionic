import { IonButton, IonRouterContext } from '@ionic/react';
import { useContext } from 'react';
import './NewVehicule.css';

interface VehiculeProps {
  modele: string;
  numero: string;
}
const save = (modele : string, numero:string) => {
    console.log(modele);
    console.log(numero);
}
const NewVehicule : React.FC<VehiculeProps> = ({modele, numero}) =>{
    
    return (
        <IonButton className="ion-padding" onClick={() => save(modele,numero)}>Ajouter</IonButton>
    );
};

export default NewVehicule;