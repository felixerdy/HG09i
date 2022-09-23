import { Dropdown, List, Modal } from "@react95/core";
import { Settings } from "@react95/icons";
import { AGENTS } from "@react95/clippy";
import { useContext } from "react";
import { ClippyAgentContext } from "../App";

type Props = {
  onClose: () => void;
};

const SettingsModal = ({ onClose }: Props) => {
  const { agent, changeAgent } = useContext(ClippyAgentContext);

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
      </div>
    </Modal>
  );
};

export default SettingsModal;
