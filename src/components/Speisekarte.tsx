import { Frame, List, Modal } from "@react95/core";
import { Progman21 } from "@react95/icons";

type Props = {
  onClose: () => void;
};

const Speisekarte = ({ onClose }: Props) => {
  return (
    <Modal
      icon={<Progman21 variant="32x32_1" />}
      title="Speisekarte"
      closeModal={onClose}
      defaultPosition={{
        x: 0,
        y: 0,
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
        <iframe
          title="Speisekarte"
          src="https://boheme-boulette.de/wp-content/uploads/2022/07/BouletteKarte-7-22.pdf#toolbar=0&navpanes=0"
          style={{ height: "400px", width: "100%" }}
        />
      </Frame>
    </Modal>
  );
};

export default Speisekarte;
