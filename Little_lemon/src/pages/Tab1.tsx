import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonContent,
  IonHeader,
  IonPage,
  IonCardTitle,
  IonToolbar,
  IonButton,
  IonCardContent,
  IonImg,
  IonFooter,
  IonTitle,
  IonIcon,
} from "@ionic/react";
import { arrowForwardCircle } from "ionicons/icons";
import "./Tab1.css";
import Menu from "../components/Menu";

const Tab1: React.FC = () => {
  return (
    <>
      <Menu />
      <IonContent>
        <IonCard className="bg-color">
          <IonCardHeader className="header-place">
            <IonCardTitle>
              <h1 className="header-color">Little Lemon</h1>
            </IonCardTitle>
            <IonCardSubtitle className="subheader-color">
              <h3>Chicago</h3>
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent className="placing">
            <p className="para-place">
              We are a family owned
              <br /> Mediterranean restraunt,
              <br /> focused on traditional
              <br /> recipes served with a modern
              <br /> twist
            </p>

            <IonImg src="../../assets/icons_assets/restauranfood.jpg" className="image-place" />
          </IonCardContent>
          <IonButton className="btn-place">Reserve a Table</IonButton>
        </IonCard>
        <IonCard className="bg-week-spl">
          <IonCardHeader className="week-spl">
            <IonCardTitle>
              <h1 className="header-col">This week Specials!</h1>
            </IonCardTitle>
            <IonButton className="week-spl-btn">Online Order</IonButton>
          </IonCardHeader>
          <IonCardContent className="card-place">
            <IonCard>
              <IonCardContent className="card-content-color">
                <IonImg src="../../assets/icons_assets/greek salad.jpg" className="week-spl-img" />
                <IonCardHeader>
                  <IonCardTitle>
                    <h2 className="card-content-text">Greeksalad</h2>
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>
                    <h6>
                      The famous greek salad of
                      <br /> crispy lettuce,peppers,olives
                      <br /> and our Chicago style feta
                      <br />
                      cheese garnished with crunchy
                      <br /> garlic and rosemary croutons
                    </h6>
                  </p>
                  <p>
                    <b>Order a delivery</b>
                    <IonIcon icon={arrowForwardCircle}></IonIcon>
                  </p>
                </IonCardContent>
              </IonCardContent>
            </IonCard>
            <IonCard>
              <IonCardContent className="card-content-color">
                <IonImg src="../../assets/icons_assets/bruchetta.svg" className="week-spl-img" />
                <IonCardHeader>
                  <IonCardTitle>
                    <h2 className="card-content-text">Bruchetta</h2>
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>
                    <h6>
                      Our Bruchetta is made from
                      <br />
                      grilled bread that has been
                      <br />
                      smeared with garlic and
                      <br />
                      seasoned with salt and olive
                      <br />
                      oil
                    </h6>
                  </p>
                  <p>
                    <b>Order a delivery</b>

                    <IonIcon icon={arrowForwardCircle}></IonIcon>
                  </p>
                </IonCardContent>
              </IonCardContent>
            </IonCard>
            <IonCard>
              <IonCardContent className="card-content-color">
                <IonImg src="../../assets/icons_assets/lemon dessert.jpg" className="week-spl-img" />
                <IonCardHeader>
                  <IonCardTitle>
                    <h4 className="card-content-text">Lemon Dessert</h4>
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>
                    <h6>
                      This comes straight from
                      <br />
                      grandma's recipe book, every
                      <br />
                      last ingridient has been
                      <br />
                      sourced and is authentic
                      <br />
                      as can be imaginied.
                    </h6>
                  </p>
                  <p>
                    <b>Order a delivery</b>
                    <IonIcon icon={arrowForwardCircle}></IonIcon>
                  </p>
                </IonCardContent>
              </IonCardContent>
            </IonCard>
          </IonCardContent>
        </IonCard>
        <IonCard className="color-testimonial">
          <IonCardHeader className="testimonial-title">
            <IonCardTitle className="color-testimonial">
              <h1>Testimonials</h1>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="placing">
            <IonCard className="color-testimonial">
              <IonCardContent>
                <IonImg src="../../assets/images/lady.jpeg" className="testimonial-img"></IonImg>
                <IonCardHeader>
                  <IonCardTitle>
                    <h4 className="card-content-text">Some Lady</h4>
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>
                    <h4>
                      Said a lot of good things
                      <br /> about this place
                    </h4>
                  </p>
                </IonCardContent>
              </IonCardContent>
            </IonCard>
            <IonCard className="color-testimonial">
              <IonCardContent>
                <IonImg src="../../assets/images/man_chinki.jpeg" className="testimonial-img"></IonImg>
                <IonCardHeader>
                  <IonCardTitle>
                    <h4 className="card-content-text">Some Guy</h4>
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>
                    <h4>
                      Said a lot of good things
                      <br /> about this place
                    </h4>
                  </p>
                </IonCardContent>
              </IonCardContent>
            </IonCard>
            <IonCard className="card-content-color">
              <IonCardContent>
                <IonImg src="../../assets/images/lady_takla.jpeg" className="testimonial-img"></IonImg>
                <IonCardHeader>
                  <IonCardTitle>
                    <h4 className="card-content-text">Some Girl</h4>
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>
                    <h4>
                      Said a lot of good things
                      <br /> about this place
                    </h4>
                  </p>
                </IonCardContent>
              </IonCardContent>
            </IonCard>
            <IonCard className="card-content-color">
              <IonCardContent>
                <IonImg src="../../assets/images/man_afro.jpeg" className="testimonial-img"></IonImg>
                <IonCardHeader>
                  <IonCardTitle>
                    <h4 className="card-content-text">Some Dude</h4>
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>
                    <h4>
                      Said a lot of good things
                      <br /> about this place
                    </h4>
                  </p>
                </IonCardContent>
              </IonCardContent>
            </IonCard>
          </IonCardContent>
        </IonCard>
        <IonFooter>
          <IonToolbar>
            <IonTitle>Footer</IonTitle>
          </IonToolbar>
        </IonFooter>
      </IonContent>
    </>
  );
};

export default Tab1;
