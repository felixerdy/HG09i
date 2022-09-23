import styled from "styled-components";
import { List, TaskBar } from "@react95/core";

import logo from "../assets/logo.png";
import { CdMusic, User3, Wangimg128, WindowsExplorer } from "@react95/icons";
import { useState } from "react";
import Umfrage from "../components/Umfrage";
import Explorer from "../components/Explorer";
import WarningAlert from "../components/WarningAlert";
import Winamp from "../components/Winamp";

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

  const [warningAlert, setWarningAlert] = useState(false);

  return (
    <Centered>
      {explorer && <Explorer onClose={() => setExplorer(false)} />}
      {umfrage && <Umfrage onClose={() => setUmfrage(false)} />}
      {winamp && <Winamp onClose={() => setWinamp(false)} />}

      {warningAlert && <WarningAlert onClose={() => setWarningAlert(false)} />}

      <img src={logo} alt="Windows 95 logo" style={{ width: 200 }} />
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
          </List>
        }
      />
    </Centered>
  );
}

export default IndexPage;
