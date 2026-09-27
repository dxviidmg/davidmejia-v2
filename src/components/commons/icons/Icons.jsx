import * as Icons from "react-icons/si";
import { BsFillGearFill, BsCashCoin } from "react-icons/bs";

// Case- and space-insensitive lookup, so "MySQL" or "Mercado Pago" resolve to SiMysql / SiMercadopago
const normalize = (name) => name.toLowerCase().replace(/[\s.]/g, "");
const ICONS_BY_KEY = Object.fromEntries(Object.entries(Icons).map(([key, Icon]) => [normalize(key), Icon]));
const ALIASES = { sihtml: "SiHtml5", sicss: "SiCss3" };

// Brand colors by technology name: [on light backgrounds, on dark backgrounds].
// Light: the original brand color (dark brands like Django keep their real tone), darkened only
// where it would wash out on white. Dark: the brand's lighter official variant so it reads on black.
// All pairs keep at least 3:1 against #FFFFFF and #0A0A0A. Monochrome brands inherit the text color.
const BRAND_COLORS = {
  python: ["#3776AB", "#4B8BBE"], matplotlib: ["#3776AB", "#4B8BBE"], django: ["#092E20", "#44B78B"],
  djangorestframework: ["#A30000", "#FF5A5A"], react: ["#087EA4", "#61DAFB"], javascript: ["#9E8400", "#F7DF1E"],
  typescript: ["#3178C6", "#5A9BE6"], html: ["#E34F26", "#F16529"], css: ["#1572B6", "#33A9DC"],
  bootstrap: ["#7952B3", "#A47AF0"], mui: ["#007FFF", "#3399FF"], chartjs: ["#E0445F", "#FF6384"],
  postgresql: ["#336791", "#6E9FE0"], mysql: ["#00758F", "#F29111"], mongodb: ["#3E8E41", "#47A248"],
  redis: ["#DC382D", "#FF5A4E"], celery: ["#37814A", "#A9CC54"], pandas: ["#150458", "#E70488"],
  numpy: ["#013243", "#4DABCF"], jupyter: ["#DA5B0B", "#F37626"], dataiku: ["#1F8C88", "#2AB1AC"],
  rasa: ["#5A17EE", "#8C5BFF"], aws: ["#C45F00", "#FF9900"], awsec2: ["#C45F00", "#FF9900"],
  awss3: ["#C45F00", "#FF9900"], gcp: ["#1A73E8", "#4285F4"], gcpvm: ["#1A73E8", "#4285F4"],
  heroku: ["#430098", "#9E7CC1"], render: ["#0F8A68", "#46E3B7"], linux: ["#1B1B1B", "#FCC624"],
  git: ["#E0411F", "#F05032"], gitlab: ["#E24329", "#FC6D26"], bitbucket: ["#0052CC", "#4C9AFF"],
  jira: ["#0052CC", "#4C9AFF"], postman: ["#E0521F", "#FF6C37"], playwright: ["#1F8A26", "#2EAD33"],
  selenium: ["#2E7D1F", "#43B02A"], stripe: ["#635BFF", "#8F89FF"], mercadopago: ["#0A7FBF", "#00B1EA"],
  payu: ["#6E8A00", "#A6C307"], nequi: ["#C40074", "#FF3FA4"], efecty: ["#957A00", "#FFD100"],
};

export const brandColor = (techName, onDark = false) => {
  const pair = techName && BRAND_COLORS[normalize(techName)];
  return pair ? pair[onDark ? 1 : 0] : undefined;
};

export const GetCustomIcon = ({ name, color }) => {
  let Icon = name && (ICONS_BY_KEY[normalize(name)] || Icons[ALIASES[normalize(name)]]);
  if (name==='SiAPIREST' || name==='SiRest'){
    Icon = BsFillGearFill
  }
  if (name==='BsCashCoin'){
    Icon = BsCashCoin
  }
  if (!Icon) {
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
