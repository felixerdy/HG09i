import { useEffect, useRef, useState } from "react";
import Webamp from "webamp";

type Props = {
  onClose: () => void;
};

const Winamp = ({ onClose }: Props) => {
  const ref = useRef(null);
  const [webamp, setWebamp] = useState<Webamp>();

  useEffect(() => {
    if (ref.current) {
      const webamp = new Webamp({
        initialTracks: [
          {
            url: require("./../assets/music/parallel.mp3"),
            metaData: {
              artist: "Celo & Abdi",
              title: "PARALLELEN ft. Haftbefehl (prod. by m3)",
            },
          },
          {
            url: require("./../assets/music/robot-unicorn.mp3"),
            metaData: {
              artist: "Erasure",
              title: "Always",
            },
          },
        ],
      });
      webamp.renderWhenReady(ref.current);
      webamp.onClose(onClose);
      setWebamp(webamp);
    }

    return webamp?.close();
  }, [onClose]);
  return <div ref={ref}></div>;
};

export default Winamp;
