import { Modal } from "@react95/core";
import { User3 } from "@react95/icons";
import confetti from "canvas-confetti";
import { useClippy } from "@react95/clippy";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

type Props = {
  onClose: () => void;
};

const Umfrage = ({ onClose }: Props) => {
  const { clippy } = useClippy();
  const history = useHistory();

  useEffect(() => {
    if (clippy) clippy.play("Thinking");
  }, []);

  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
  };

  const fire = (particleRatio: number, opts: confetti.Options) => {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  };

  const realisticLook = (opts?: confetti.Options) => {
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  return (
    <Modal
      icon={<User3 variant="32x32_1" />}
      title="Umfrage"
      closeModal={onClose}
      width="300"
      height="150"
      buttons={[
        {
          value: "Ja",
          onClick: () => {
            clippy.stop();
            clippy.play("GoodBye");
            history.push("/error");
          },
        },
        {
          value: "Nein",
          onClick: () => {
            clippy.stop();
            clippy.play("Congratulate");
            realisticLook();
            onClose();
          },
        },
      ]}
    >
      <h3>Haette ich BWL studieren sollen?</h3>
    </Modal>
  );
};

export default Umfrage;
