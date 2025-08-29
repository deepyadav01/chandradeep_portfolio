import Link from "next/link";
import { FaGithub , FaLinkedin, FaYoutube} from "react-icons/fa";
// import Clarity from '@microsoft/clarity';
const socials = [
  { icon: <FaGithub />, path: "https://github.com/deepyadav01" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/chandradeep-yadav-045582128/" },
  // { icon: <FaYoutube />, path: "aa" },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map(({ icon, path }, index) => (
        <Link key={index} href={path} className = {iconStyles} target="_blank" rel="noopener noreferrer">
          {icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
