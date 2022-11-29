import { Dropdown, List, Modal } from "@react95/core";
import { Settings } from "@react95/icons";
import { AGENTS } from "@react95/clippy";
import { useContext } from "react";
import { ClippyAgentContext } from "../App";
import { Theme, themeAtom } from "../store/themeStore";
import { useAtom } from "jotai";

type Props = {
  onClose: () => void;
};

const themes: Theme[] = [
  "win95",
  "counterStrike",
  "bee",
  "pamelaAnderson",
  "azureOrange",
  "olive",
  "vaporTeal",
  "matrix",
  "vermillion",
  "tooSexy",
  "ninjaTurtles",
  "tokyoDark",
  "molecule",
  "travel",
  "theSixtiesUSA",
  "candy",
  "modernDark",
  "storm",
  "millenium",
  "spruce",
  "slate",
  "rose",
  "rainyDay",
  "plum",
  "marine",
  "maple",
  "lilac",
  "blackAndWhite",
  "highContrast",
  "eggplant",
  "brick",
  "water",
  "coldGray",
  "lilacRoseDark",
  "violetDark",
];

const SettingsModal = ({ onClose }: Props) => {
  const { agent, changeAgent } = useContext(ClippyAgentContext);

  const [theme, setTheme] = useAtom(themeAtom);

  return (
    <Modal
      icon={<Settings variant="16x16_4" />}
      title="Einstellungen"
      closeModal={onClose}
      width="300"
      height="200"
      defaultPosition={{
        x: 50,
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
      <div>
        <span style={{ fontWeight: "bold" }}>Agent</span>
        <Dropdown
          options={Object.keys(AGENTS)}
          defaultValue={AGENTS[Object.values(AGENTS).indexOf(agent)]}
          onChange={(e) => {
            if (changeAgent) {
              changeAgent((e.target as any).value);
            }
          }}
        ></Dropdown>
        <span style={{ fontWeight: "bold" }}>Theme</span>
        <Dropdown
          options={themes}
          defaultValue={theme}
          onChange={(e) => {
            setTheme((e.target as any).value as Theme);
          }}
        ></Dropdown>
        <hr />
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          Weitere Einstellungen
        </a>
        <br />
        <br />
        <a
          href="https://umami-eta-one.vercel.app/share/j7UL15aK/HG09i"
          rel="noreferrer"
          target="_blank"
        >
          Analytics
        </a>
        <br />
        <br />
        <a
          href="https://github.com/felixerdy/HG09i"
          rel="noreferrer"
          target="_blank"
        >
          Link zum Repo
        </a>
      </div>
    </Modal>
  );
};

export default SettingsModal;
