import { Button, Frame, Input, List, Modal, ProgressBar } from "@react95/core";
import { Wangimg128, Winmine1 } from "@react95/icons";
import { ChangeEvent, useEffect, useState } from "react";
import hash from "../lib/hash";

type Props = {
  onClose: () => void;
};

const MIN_IMAGE_INDEX = 1;
const MAX_IMAGE_INDEX = 19;

const Gallery = ({ onClose }: Props) => {
  const [index, setIndex] = useState(MIN_IMAGE_INDEX);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (loading) {
      setError(false);
      const timeout = setTimeout(() => {
        const rand = Math.ceil(Math.random() * 10) + 1;
        setProgress(progress + rand);
      }, Math.ceil(Math.random() * 200) + 1);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [loading, progress]);

  useEffect(() => {
    if (progress >= 100) {
      setProgress(0);
      setLoading(false);
      setAuthenticated(true);
    }
  });

  const handleAuth = () => {
    if (hash(password.toLowerCase()) === 1134120573) {
      setLoading(true);
    } else {
      setError(true);
    }
  };

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
      {!authenticated && (
        <>
          <h2>Sicherheitsfrage</h2>
          <h3>Wofuer steht das "i" in HG09i?</h3>
          <Input
            type="password"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <div style={{ height: "1rem" }} />
          {error && (
            <>
              <p style={{ color: "red" }}>Falsches Passwort</p>
            </>
          )}
          <Button onClick={handleAuth}>Ok</Button>
        </>
      )}
      {loading && <ProgressBar percent={progress} />}
      {authenticated && (
        <>
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
              Zurueck
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
        </>
      )}
    </Modal>
  );
};

export default Gallery;
