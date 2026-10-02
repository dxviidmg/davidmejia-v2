import {
  SiAmazonaws, SiBitbucket, SiBootstrap, SiCelery, SiChartdotjs, SiConventionalcommits, SiCss3, SiDataiku, SiDjango,
  SiFiles, SiGit, SiGithub, SiGitlab, SiGooglecloud, SiHeroku, SiHtml5, SiJavascript, SiJira, SiJupyter, SiLinux,
  SiMercadopago, SiMongodb, SiMui, SiMysql, SiNumpy, SiPandas, SiPlaywright, SiPostgresql, SiPostman, SiPython,
  SiRasa, SiReact, SiRedis, SiRender, SiSelenium, SiSocketdotio, SiStripe, SiTypescript, SiVercel,
  SiTailwindcss, SiDocker, SiGithubactions, SiFastapi,
} from "react-icons/si";
import { BsCashCoin, BsFillGearFill } from "react-icons/bs";
import { MdAutoAwesome } from "react-icons/md";
import { normalize } from "../../../utils/text";

// Every technology shown on the site: its icon and brand colors [on light backgrounds, on dark backgrounds].
// Importing icons one by one keeps the bundle small (the full Simple Icons set is ~2,400 icons).
// Light: the original brand color, darkened only where it would wash out on white. Dark: the brand's lighter
// official variant so it reads on black. All pairs keep at least 3:1 against #FFFFFF and #0A0A0A.
// Monochrome or generic entries have no colors and inherit the text color.
const TECH = {
  python: { icon: SiPython, colors: ["#3776AB", "#4B8BBE"] },
  matplotlib: { icon: SiPython, colors: ["#3776AB", "#4B8BBE"] },
  django: { icon: SiDjango, colors: ["#092E20", "#44B78B"] },
  djangorestframework: { icon: SiDjango, colors: ["#A30000", "#FF5A5A"] },
  react: { icon: SiReact, colors: ["#087EA4", "#61DAFB"] },
  javascript: { icon: SiJavascript, colors: ["#9E8400", "#F7DF1E"] },
  typescript: { icon: SiTypescript, colors: ["#3178C6", "#5A9BE6"] },
  html: { icon: SiHtml5, colors: ["#E34F26", "#F16529"] },
  css: { icon: SiCss3, colors: ["#1572B6", "#33A9DC"] },
  bootstrap: { icon: SiBootstrap, colors: ["#7952B3", "#A47AF0"] },
  mui: { icon: SiMui, colors: ["#007FFF", "#3399FF"] },
  chartjs: { icon: SiChartdotjs, colors: ["#E0445F", "#FF6384"] },
  postgresql: { icon: SiPostgresql, colors: ["#336791", "#6E9FE0"] },
  mysql: { icon: SiMysql, colors: ["#00758F", "#F29111"] },
  mongodb: { icon: SiMongodb, colors: ["#3E8E41", "#47A248"] },
  redis: { icon: SiRedis, colors: ["#DC382D", "#FF5A4E"] },
  celery: { icon: SiCelery, colors: ["#37814A", "#A9CC54"] },
  pandas: { icon: SiPandas, colors: ["#150458", "#E70488"] },
  numpy: { icon: SiNumpy, colors: ["#013243", "#4DABCF"] },
  jupyter: { icon: SiJupyter, colors: ["#DA5B0B", "#F37626"] },
  dataiku: { icon: SiDataiku, colors: ["#1F8C88", "#2AB1AC"] },
  rasa: { icon: SiRasa, colors: ["#5A17EE", "#8C5BFF"] },
  aws: { icon: SiAmazonaws, colors: ["#C45F00", "#FF9900"] },
  awsec2: { icon: SiAmazonaws, colors: ["#C45F00", "#FF9900"] },
  awss3: { icon: SiAmazonaws, colors: ["#C45F00", "#FF9900"] },
  gcp: { icon: SiGooglecloud, colors: ["#1A73E8", "#4285F4"] },
  gcpvm: { icon: SiGooglecloud, colors: ["#1A73E8", "#4285F4"] },
  heroku: { icon: SiHeroku, colors: ["#430098", "#9E7CC1"] },
  render: { icon: SiRender, colors: ["#0F8A68", "#46E3B7"] },
  vercel: { icon: SiVercel },
  linux: { icon: SiLinux, colors: ["#1B1B1B", "#FCC624"] },
  git: { icon: SiGit, colors: ["#E0411F", "#F05032"] },
  github: { icon: SiGithub },
  gitlab: { icon: SiGitlab, colors: ["#E24329", "#FC6D26"] },
  bitbucket: { icon: SiBitbucket, colors: ["#0052CC", "#4C9AFF"] },
  jira: { icon: SiJira, colors: ["#0052CC", "#4C9AFF"] },
  postman: { icon: SiPostman, colors: ["#E0521F", "#FF6C37"] },
  playwright: { icon: SiPlaywright, colors: ["#1F8A26", "#2EAD33"] },
  selenium: { icon: SiSelenium, colors: ["#2E7D1F", "#43B02A"] },
  stripe: { icon: SiStripe, colors: ["#635BFF", "#8F89FF"] },
  mercadopago: { icon: SiMercadopago, colors: ["#0A7FBF", "#00B1EA"] },
  payu: { icon: BsCashCoin, colors: ["#6E8A00", "#A6C307"] },
  nequi: { icon: BsCashCoin, colors: ["#C40074", "#FF3FA4"] },
  efecty: { icon: BsCashCoin, colors: ["#957A00", "#FFD100"] },
  restapis: { icon: BsFillGearFill },
  apirest: { icon: BsFillGearFill },
  websockets: { icon: SiSocketdotio, colors: ["#010101", "#FFFFFF"] },
  sftp: { icon: SiFiles },
  webhooks: { icon: SiSocketdotio, colors: ["#6366F1", "#818CF8"] },
  fastapi: { icon: SiFastapi, colors: ["#009688", "#26D07C"] },
  tailwind: { icon: SiTailwindcss, colors: ["#0F766E", "#14B8A6"] },
  tailwindcss: { icon: SiTailwindcss, colors: ["#0F766E", "#14B8A6"] },
  docker: { icon: SiDocker, colors: ["#2496ED", "#5DADE2"] },
  cicd: { icon: MdAutoAwesome, colors: ["#7C3AED", "#A78BFA"] },
  githubactions: { icon: SiGithubactions },
  kiro: { icon: BsFillGearFill, colors: ["#2D3748", "#718096"] },
  claudecode: { icon: SiConventionalcommits, colors: ["#1B1C1D", "#666"] },
};

const FALLBACK = { icon: SiConventionalcommits };

// <TechIcon name="PostgreSQL" onDark /> — `onDark` picks the color variant for black/grey backgrounds
export const TechIcon = ({ name, onDark = false }) => {
  const { icon: Icon, colors } = TECH[normalize(name)] || FALLBACK;
  return <Icon style={colors ? { color: colors[onDark ? 1 : 0] } : undefined} />;
};
