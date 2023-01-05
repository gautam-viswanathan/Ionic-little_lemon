import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage,
  IonMenuButton,
  IonButtons,
  IonContent,
  IonButton,
  IonIcon,
  useIonRouter,
  IonItem,
  IonTab,
  IonTabButton,
  IonLabel,
  IonBadge,
  IonGrid,
  IonRow,
  IonCol,
  IonListHeader,
  IonList,
  IonImg,
} from "@ionic/react";
import "../components/Menu.css";
import { calendar, person, card, cash, personCircle, peopleCircleOutline, trailSignSharp, settingsSharp } from "ionicons/icons";
import { useHistory } from "react-router";
import restauranfood from ".../public/assets/icons_assets/restaunfood.jpg";
const Menu: React.FC = () => {
  const history = useIonRouter();
  return (
    <>
      <IonListHeader className="header" id="main-content">
        <IonHeader>
          <IonToolbar className="toolbar-place">
            <IonTitle slot="start">
              <IonItem lines="none">
                <IonImg src="../../assets/icons_assets/Logo.svg"></IonImg>
              </IonItem>
            </IonTitle>
            <IonButtons slot="start">
              <IonItem lines="none" routerLink="/tab1">
                <IonTabButton>
                  <IonLabel>Home</IonLabel>
                </IonTabButton>
              </IonItem>
            </IonButtons>
            <IonButtons slot="start">
              <IonItem lines="none">
                <IonTabButton>
                  <IonLabel>About</IonLabel>
                </IonTabButton>
              </IonItem>
            </IonButtons>
            <IonButtons slot="start">
              <IonItem lines="none">
                <IonTabButton>
                  <IonLabel>Menu</IonLabel>
                </IonTabButton>
              </IonItem>
            </IonButtons>
            <IonButtons slot="start">
              <IonItem lines="none">
                <IonTabButton>
                  <IonLabel>Reservations</IonLabel>
                </IonTabButton>
              </IonItem>
            </IonButtons>
            <IonButtons slot="start">
              <IonItem lines="none">
                <IonTabButton>
                  <IonLabel>Order Online</IonLabel>
                </IonTabButton>
              </IonItem>
            </IonButtons>
            <IonButtons slot="start">
              <IonItem lines="none">
                <IonTabButton>
                  <IonLabel>Login</IonLabel>
                </IonTabButton>
              </IonItem>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
      </IonListHeader>
    </>
  );
};
export default Menu;
