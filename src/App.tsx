import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';
import Assurance from './pages/Assurance';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Liste from './pages/Liste';
import Info from './pages/Info';
import Log from './pages/Log';
import Tage from './pages/Tage';
import Photo from "./pages/Photo";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/page/Accueil" />
            </Route>

            <Route path="/page/photo" exact={true}>
              <Photo />
            </Route>

            <Route path="/liste" exact={true}>
              <Liste />
            </Route>

            <Route path="/login/:id" exact={true}>
              <Log />
            </Route>

            <Route path="/info/:id" exact={true}>
              <Info />
            </Route>

            <Route path="/verif/:user/:pwd/:id" exact={true}>
              <Tage />
            </Route>
            <Route path="/Assurance" exact={true}>
              <Assurance />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
