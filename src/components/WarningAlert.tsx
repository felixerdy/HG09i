import { Alert } from "@react95/core";

type Props = {
  onClose: () => void;
};

const WarningAlert = ({ onClose }: Props) => {
  return (
    <Alert
      title="HG09i System"
      type={"warning"}
      message="Diese Funktion wird noch nicht unterstützt."
      closeAlert={onClose}
      hasSound={true}
      buttons={[{ value: "OK", onClick: onClose }]}
    />
  );
};

export default WarningAlert;
