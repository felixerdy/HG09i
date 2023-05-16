import { Frame, List, Modal } from "@react95/core";
import {
  Mapi32501,
  Mapi32801,
  Mapi32IconAttach,
  WindowsExplorer,
} from "@react95/icons";
import map from "../assets/images/map.jpg";

type Props = {
  onClose: () => void;
};

const Map = ({ onClose }: Props) => {
  return (
    <Modal
      icon={<Mapi32801 variant="16x16_4" />}
      title="Karte"
      closeModal={onClose}
      defaultPosition={{
        x: 200,
        y: 100,
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
      <Frame bg="white" boxShadow="in">
        <img src={map} style={{ height: "100%" }} alt="Karte" />
      </Frame>
    </Modal>
  );
};

export default Map;
