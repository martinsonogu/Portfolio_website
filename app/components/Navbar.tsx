import { BsFillMoonStarsFill } from "react-icons/bs";
type Props = {};

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";
  return (
    <nav className={`py-10 mb-12 ${flexBetween}`}>
      <h1 className="text-xl">ONOGU</h1>
      <ul className="flex items-center">
        <li className="text-2xl cursor-pointer ">
          <BsFillMoonStarsFill />
        </li>
        <li>
          <a
            className=" bg-gradient-to-r from-cyan-400 to-teal-400  text-white px-4 py-2 rounded-md ml-8"
            href="#"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
