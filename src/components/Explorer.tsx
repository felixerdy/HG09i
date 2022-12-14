import { Frame, List, Modal } from "@react95/core";
import { WindowsExplorer } from "@react95/icons";
import party_seal from "../assets/gifs/party_seal.gif";
import christmas_parrot from "../assets/gifs/christmas_parrot.gif";
import cool_dog from "../assets/gifs/cool-doge.gif";
import meow_party from "../assets/gifs/meow_party.gif";

type Props = {
  onClose: () => void;
};

function Party({ num = 14 }: { num?: number }) {
  const now = new Date();
  let emoji = party_seal;

  // christmas_parrot on nikolaus
  if (now.getMonth() === 11 && now.getDate() === 6) {
    emoji = christmas_parrot;
  }
  return (
    <div>
      {new Array(14).fill(
        <img
          src={emoji}
          style={{
            height: "1rem",
          }}
          alt="Party Seal"
        />
      )}
    </div>
  );
}

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
        <Party></Party>
        <p>
          Willkommen auf der Info Seite fuer das HG09i Klassentreffen 2023. Hier
          halten wir euch auf dem neuesten Stand.{" "}
          <img src={cool_dog} style={{ height: "1rem" }} alt="Cool doge" />
        </p>
        <h2>
          Save the Date: <u>19. August 2023</u>
        </h2>
        <p>
          Wir planen das Event am 19. August 2023 in Muenster. Aenderungen bitte
          vorbehalten.
        </p>
        <h3>Rahmendaten / Auswertung der Umfrage</h3>
        <ul>
          <li>
            Aktion tagsuesber (Start am fruehen Nachmittag) und Abend, keine
            Uebernachtung
          </li>
          <li>Muenster</li>
          <li>Kleine Aktion, Fokus auf geilen Abend</li>
          <li>19. August 2023</li>
          <li>
            Lehrer:innen werden eingeladen (Harnack, Bittner, Siebert,
            Kretschmar, Levenig)
          </li>
          <li>Fuer Essen und Getraenke wird gesorgt sein</li>
          <li>Preis pro Person: 80€ (ggf. mit freiwilligen Solibeitrag)</li>
        </ul>
      </Frame>
    </Modal>
  );
};

export default Explorer;
