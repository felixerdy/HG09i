import { Button, Frame, List, Modal } from "@react95/core";
import { Wangimg128, Winmine1 } from "@react95/icons";
import { useState } from "react";

type Props = {
  onClose: () => void;
};

const MIN_IMAGE_INDEX = 1;
const MAX_IMAGE_INDEX = 19;

const Gallery = ({ onClose }: Props) => {
  const [index, setIndex] = useState(MIN_IMAGE_INDEX);

  const nextImage = () => {
    if (index === MAX_IMAGE_INDEX) {
      return;
    }
    setIndex(index + 1);
  };

  const prevImage = () => {
    if (index === MIN_IMAGE_INDEX) {
      return;
    }
    setIndex(index - 1);
  };

  return (
    <Modal
      icon={<Wangimg128 variant="16x16_4" />}
      title="Galerie"
      closeModal={onClose}
      width="400"
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
      <div
        style={{
          display: "flex",
          marginBottom: "1rem",
        }}
      >
        <Button
          onClick={prevImage}
          disabled={index === MIN_IMAGE_INDEX}
          style={{
            marginRight: "1rem",
          }}
        >
          Zurück
        </Button>
        <Button onClick={nextImage} disabled={index === MAX_IMAGE_INDEX}>
          Weiter
        </Button>
      </div>

      <Frame
        boxShadow="in"
        bg="white"
        style={{ width: "100%", height: "100%" }}
        padding={4}
      >
        <img
          alt="HG09i Bild"
          src={require(`../assets/images/${index}.jpg`)}
          style={{ width: "100%", height: "100%" }}
        />
      </Frame>
    </Modal>
  );
};

export default Gallery;
