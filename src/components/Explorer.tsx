import { Frame, List, Modal } from "@react95/core";
import { WindowsExplorer } from "@react95/icons";
import party_seal from "../assets/gifs/party_seal.gif";
import cool_dog from "../assets/gifs/cool-doge.gif";
import meow_party from "../assets/gifs/meow_party.gif";

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
      <Frame bg="white" boxShadow="in" padding="1rem">
        <div>
          <img src={party_seal} style={{ height: "1rem" }} alt="Party Seal" />
          <img src={party_seal} style={{ height: "1rem" }} alt="Party Seal" />
          <img src={party_seal} style={{ height: "1rem" }} alt="Party Seal" />
          <img src={party_seal} style={{ height: "1rem" }} alt="Party Seal" />
          <img src={party_seal} style={{ height: "1rem" }} alt="Party Seal" />
          <img src={party_seal} style={{ height: "1rem" }} alt="Party Seal" />
          <img src={party_seal} style={{ height: "1rem" }} alt="Party Seal" />
          <img src={party_seal} style={{ height: "1rem" }} alt="Party Seal" />
          <img src={party_seal} style={{ height: "1rem" }} alt="Party Seal" />
          <img src={party_seal} style={{ height: "1rem" }} alt="Party Seal" />
          <img src={party_seal} style={{ height: "1rem" }} alt="Party Seal" />
          <img src={party_seal} style={{ height: "1rem" }} alt="Party Seal" />
          <img src={party_seal} style={{ height: "1rem" }} alt="Party Seal" />
          <img src={party_seal} style={{ height: "1rem" }} alt="Party Seal" />
        </div>
        <p>
          Willkommen auf der Info Seite für das HG09i Klassentreffen 2023. Hier
          halten wir euch auf dem neuesten Stand.{" "}
          <img src={cool_dog} style={{ height: "1rem" }} alt="Cool doge" />
        </p>
        <h2>
          Vorlaeufiges Datum: <u>19. August 2023</u>
        </h2>
        <p>
          Wir planen das Event in Q3 2023, rund um Mitte / Ende August 2023.
          Aenderungen bitte vorbehalten.
        </p>
        <h3>Rahmendaten / Auswertung der Umfrage</h3>
        <ul>
          <li>
            Aktion tagsuesber (Start am fruehen Nachmittag) und Abend, keine
            Uebernachtung
          </li>
          <li>NRW / Muensterland / noerdliches Ruhrgebiet</li>
          <li>Kleine Aktion, Fokus auf geilen Abend</li>
          <li>Q3 (Juli/August/September)</li>
          <li>Lehrer:innen werden eingeladen</li>
        </ul>
      </Frame>
    </Modal>
  );
};

export default Explorer;
