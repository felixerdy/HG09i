import styled from "styled-components";
import { List, Modal, TaskBar } from "@react95/core";

import logo from "../assets/logo.png";
import { User3, Wangimg128, WindowsExplorer } from "@react95/icons";
import { useState } from "react";
import Umfrage from "../components/Umfrage";
import Explorer from "../components/Explorer";
import WarningAlert from "../components/WarningAlert";

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

  const [warningAlert, setWarningAlert] = useState(false);

  return (
    <Centered>
      {explorer && <Explorer onClose={() => setExplorer(false)} />}
      {umfrage && <Umfrage onClose={() => setUmfrage(false)} />}

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
              Gallery
            </List.Item>
            <List.Item
              icon={<User3 variant="32x32_4" />}
              onClick={() => setUmfrage(true)}
            >
              BWL
            </List.Item>
          </List>
        }
      />
    </Centered>
  );
}

export default IndexPage;
