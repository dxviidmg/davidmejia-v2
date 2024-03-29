import * as Icons from "react-icons/si";
import { BsFillGearFill } from "react-icons/bs";


export const GetCustomIcon = ({ name, color }) => {
  let Icon = Icons[name];
  if (name==='SiRest'){
    Icon = BsFillGearFill
  }
  if (!Icon || name === undefined) {
    Icon = Icons["SiConventionalcommits"];
  }
  return <Icon style={{ color: color }}/>;
};

export const GetCustomIconAndName = ({ name, icon, color }) => {
  return (
    <span style={{fontSize: "14px"}}>
      <GetCustomIcon name={icon? icon: "Si"+ name} color={color}/> {name}
    </span>
  )
}