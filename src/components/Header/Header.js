import Logo from "../../assets/Logo/BrainFlix-logo.svg";
import Search from "../../assets/Icons/search.svg";
import Upload from "../../assets/Icons/upload.svg";
import "./Header.scss";

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="brainflix logo"></img>
      <form className="header__form" onSubmit={props.defaultPrevent}>
        <div className="header__searchWrapper">
          <input
            className="header__search"
            type="search"
            placeholder="Search"></input>
          <img
            className="header__searchImg"
            src={Search}
            alt="brainflix seaerch icon"></img>
        </div>
        <div className="header__form-bottom">
          <button className="header__button" type="sutmit">
            <img
              className="header__uploadImg"
              src={Upload}
              alt="brainflix seaerch icon"></img>
            UPLOAD
          </button>
          <div className="header__mohan"></div>
        </div>
      </form>
    </header>
  );
}
export default Header;
