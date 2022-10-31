import styled from "styled-components";
import { List, TaskBar } from "@react95/core";

import logo from "../assets/logo.png";
import {
  CdMusic,
  Settings,
  User3,
  Wangimg128,
  WindowsExplorer,
  Winmine1,
} from "@react95/icons";
import { useContext, useState } from "react";
import Umfrage from "../components/Umfrage";
import Explorer from "../components/Explorer";
import WarningAlert from "../components/WarningAlert";
import Winamp from "../components/Winamp";
import SettingsModal from "../components/Settings";
import { ClippyProvider, AGENTS } from "@react95/clippy";
import { ClippyAgentContext } from "../App";
import Minesweeper from "../components/Minesweeper";

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

function IndexPage() {
  const [explorer, setExplorer] = useState(true);
  const [umfrage, setUmfrage] = useState(false);
  const [winamp, setWinamp] = useState(false);
  const [settings, setSettings] = useState(false);
  const [minesweeper, setMinesweeper] = useState(false);

  const [warningAlert, setWarningAlert] = useState(false);

  const { agent } = useContext(ClippyAgentContext);

  return (
    <ClippyProvider agentName={AGENTS[agent!]}>
      <Centered>
        {explorer && <Explorer onClose={() => setExplorer(false)} />}
        {umfrage && <Umfrage onClose={() => setUmfrage(false)} />}
        {winamp && <Winamp onClose={() => setWinamp(false)} />}
        {settings && <SettingsModal onClose={() => setSettings(false)} />}
        {minesweeper && <Minesweeper onClose={() => setMinesweeper(false)} />}

        {warningAlert && (
          <WarningAlert onClose={() => setWarningAlert(false)} />
        )}

        <img
          src={logo}
          alt="Windows 95 logo"
          style={{ width: 200, userSelect: "none" }}
          draggable={false}
        />
        <TaskBar
          list={
            <List>
              <List.Item
                icon={<WindowsExplorer variant="32x32_4" />}
                onClick={() => setExplorer(true)}
              >
                HG09i Explorer
              </List.Item>
              <List.Item
                icon={<Wangimg128 variant="32x32_4" />}
                onClick={() => setWarningAlert(true)}
              >
                Galerie
              </List.Item>
              <List.Item
                icon={<User3 variant="32x32_4" />}
                onClick={() => setUmfrage(true)}
              >
                Umfrage
              </List.Item>
              <List.Item
                icon={<CdMusic variant="32x32_4" />}
                onClick={() => setWinamp(true)}
              >
                Musik
              </List.Item>
              <List.Item
                icon={<Settings variant="32x32_4" />}
                onClick={() => setSettings(true)}
              >
                Einstellungen
              </List.Item>
              <List.Item
                icon={<Winmine1 variant="32x32_4" />}
                onClick={() => setMinesweeper(true)}
              >
                Minesweeper
              </List.Item>
            </List>
          }
        />
      </Centered>
    </ClippyProvider>
  );
}

export default IndexPage;
