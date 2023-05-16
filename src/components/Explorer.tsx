import { Frame, List, Modal } from "@react95/core";
import { WindowsExplorer } from "@react95/icons";
import bicycle from "../assets/gifs/bicycle.gif";
import cool_dog from "../assets/gifs/cool-doge.gif";

type Props = {
  onClose: () => void;
};

const Explorer = ({ onClose }: Props) => {
  return (
    <Modal
      icon={<WindowsExplorer variant="16x16_4" />}
      title="HG09i Explorer"
      closeModal={onClose}
      width="400"
      defaultPosition={{
        x: -50,
        y: 20,
      }}
      menu={[
        {
          name: "Datei",
          list: (
            <List>
              <List.Item onClick={onClose}>Schliessen</List.Item>
            </List>
          ),
        },
      ]}
    >
      <h1>HG09i Klassentreffen</h1>
      <Frame
        bg="white"
        boxShadow="in"
        padding="1rem"
        style={{
          height: "400px",
          overflowY: "scroll",
        }}
      >
        <p>
          Willkommen auf der Info Seite fuer das HG09i Klassentreffen 2023. Hier
          halten wir euch auf dem neuesten Stand.{" "}
          <img src={cool_dog} style={{ height: "1rem" }} alt="Cool doge" />
        </p>
        <h2>
          Save the Date: <u>19. August 2023</u>
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <img
            src={bicycle}
            style={{
              height: "7rem",
              marginBottom: "-1rem",
              marginTop: "-2rem",
            }}
            alt="Bicycle"
          />
        </div>
        <h3>☀️ Das haben wir geplant:</h3>
        <ul>
          <li>
            Treffen in Muenster am fruehen Nachmittag (gegen 13 Uhr am Hbf)
          </li>
          <li>
            Gemuetliche Fahrradtour rund um Muenster mit vielen Pausen, Spielen
            und Ueberaschungen
          </li>
          <li>
            Wir werden verschiedene Fahrraeder organisieren (Tandem, Lastenrad,
            ...), damit auch alle mitfahren koennen.
          </li>
          <li>
            Unsere Lehrer:innen sind mit dabei, teilweise aber erst Abends
          </li>
          <li>
            Gemeinsames Abendessen im{" "}
            <a href="https://boheme-boulette.de/">Bohème Boulette</a>
          </li>
          <li>Geschichten von früher erzaehlen</li>
        </ul>
        <h3>💸 Preis pro Person: 70€</h3>
        <p>
          Im Preis enthalten sind die Fahrraeder, Snacks + Getraenke waehrend
          der Radtour, Abendessen und Getraenke im Bohème Boulette, Briefporto
          sowie die Domain dieser Website.
        </p>
        <h3>❓ Wie geht es weiter?</h3>
        <p>
          Markiert euch den Termin im Kalender. In unserer WhatsApp Gruppe
          werden wir euch bitten, den Betrag zu ueberweisen. Sobald wir das Geld
          haben, ist euer Platz sicher.
        </p>
      </Frame>
    </Modal>
  );
};

export default Explorer;
