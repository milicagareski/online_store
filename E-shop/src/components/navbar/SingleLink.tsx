import { Link } from "react-router-dom";
interface LinkProps {
  url: string;
  title: string;
  hideNav: () => void;
}

export default function SingleLink({ url, title, hideNav }: LinkProps) {
  return (
    <>
      <li className="nav_list_item" onClick={hideNav}>
        <Link to={url}>{title}</Link>
      </li>
    </>
  );
}
