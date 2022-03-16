import { Link } from "react-router-dom";
const links = [
  {
    title: "Home",
    link: "/",
    id: "header-link-home",
  },
  {
    title: "About",
    link: "/about",
    id: "header-link-about",
  },
  {
    title: "Movies",
    link: "/movies",
    id: "header-link-movies",
  },
  //   add the other link as well
];
export const Navbar = () => {
  return (
    <div>
      {links.map((e) => (
        <Link to={e.link}>{e.title}</Link>
      ))}
    </div>
  );

  //map through the link ad display it in header
};
