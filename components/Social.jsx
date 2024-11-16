import Link from "next/link";
import { FaGithub , FaLinkedin, FaYoutube} from "react-icons/fa";
import Clarity from '@microsoft/clarity';
const socials = [
  { icon: <FaGithub />, path: "dee" },
  { icon: <FaLinkedin />, path: "gg" },
  { icon: <FaYoutube />, path: "aa" },
];
const Social = ({ containerStyles, iconStyles }) => {
  // const projectId = "ozjgblsi0g"
  // Clarity.init(projectId);
  // Clarity.identify("user-id", "deep"); // only custom-id is required
  // Clarity.setTag("Social", "Social");
  // Clarity.consent()
  // Clarity.upgrade("reason");
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
