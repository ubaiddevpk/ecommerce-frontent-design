import { FaChevronRight } from "react-icons/fa";

const Breadcrumb = () => {
  const links = ["Home", "Clothings", "Men's wear", "Summer clothing"];

  return (
    <nav className="text-sm text-gray-500 flex flex-wrap items-center gap-1 mt-4 ml-10 w-[95%] ">
      {links.map((link, index) => (
        <span key={index} className="flex items-center gap-1">
          {index !== 0 && <FaChevronRight className="text-xs mt-[1px]" />}
          <span className="hover:underline cursor-pointer">{link}</span>
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
