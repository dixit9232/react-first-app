import { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const switchStatus = isOn ? "on" : "off";
  const switchColor = { backgroundColor: isOn ? "green" : "" };

  return (
    <div
      className="toggle-switch"
      style={switchColor}
      onClick={handleToggleSwitch}
    >
      <div className={`switch-button ${switchStatus}`}>{switchStatus}</div>
    </div>
  );
};
