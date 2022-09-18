import { Frame, List, Modal } from "@react95/core";
import { WindowsExplorer } from "@react95/icons";

type Props = {
  onClose: () => void;
};

const Umfrage = ({ onClose }: Props) => {
  return (
    <Modal
      icon={<WindowsExplorer variant="16x16_4" />}
      title="HG09i Explorer"
      closeModal={onClose}
      width="300"
      height="200"
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
      <Frame bg="white" boxShadow="in" padding="0px 5px">
        <p>
          Willkommen auf der Info Seite für das HG09i Klassentreffen 2023. Hier
          halten wir euch auf dem neuesten Stand.
        </p>
        <p>Weitere Informationen folgen in Kuerze</p>
      </Frame>
    </Modal>
  );
};

export default Umfrage;
