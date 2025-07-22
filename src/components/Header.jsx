import "./Styles.css";
import headerLogo from "../images/more/logo1.png";

const Header = () => {
  return (
    <div className="w-full h-14 header-bg flex justify-center items-center gap-2">
      <div>
        <img className="w-9" src={headerLogo} alt="" />
      </div>
      <div>
        <h2 className="text-3xl text-[#998f6f] title">Porcelain Teapot</h2>
      </div>
    </div>
  );
};

export default Header;
