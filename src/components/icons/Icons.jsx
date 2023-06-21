import * as Icons from "react-icons/si";

export const CustomIcon = ({ name, color }) => {
  let Icon = Icons[name];
  if (!Icon || name === undefined) {
    Icon = Icons["SiConventionalcommits"];
  }
  return <Icon style={{ color: color }}/>;
};