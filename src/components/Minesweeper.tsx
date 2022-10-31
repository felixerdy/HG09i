import { List, Modal } from "@react95/core";
import { Winmine1 } from "@react95/icons";

type Props = {
  onClose: () => void;
};

const Minesweeper = ({ onClose }: Props) => {
  return (
    <Modal
      icon={<Winmine1 variant="16x16_4" />}
      title="Minesweeper"
      closeModal={onClose}
      width="200"
      height="300"
      defaultPosition={{
        x: -50,
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
      <iframe
        title="Minesweeper"
        style={{ height: "100%" }}
        src="https://minesweeper.win/winmine.html"
      />
    </Modal>
  );
};

export default Minesweeper;
