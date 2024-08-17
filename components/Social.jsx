import Link from "next/link";
import { FaGithub , FaLinkedin, FaYoutube} from "react-icons/fa";
const socials = [
  { icon: <FaGithub />, path: "dee" },
  { icon: <FaLinkedin />, path: "gg" },
  { icon: <FaYoutube />, path: "aa" },
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
