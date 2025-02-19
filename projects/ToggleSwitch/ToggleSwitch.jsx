import { useState } from "react";
import style from "./ToggleSwitch.module.css";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const switchStatus = isOn ? style.on : style.off;
  const switchColor = { backgroundColor: isOn ? "green" : "" };

  return (
    <div
      className={style["toggle-switch"]}
      style={switchColor}
      onClick={handleToggleSwitch}
    >
      <div className={`${style['switch-button']} ${switchStatus}`}>{isOn?"on":'off'}</div>
    </div>
  );
};
