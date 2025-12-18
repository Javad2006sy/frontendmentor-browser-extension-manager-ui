import Logo from "../assets/images/logo.svg";
import sunIcon from "../assets/images/icon-sun.svg";
import moonIcon from "../assets/images/icon-moon.svg";

const Header = ({ theme, onThemeToggle }) => {
	const themeIcon = theme === "light" ? moonIcon : sunIcon;

	return (
		<header>
			<img src={Logo} alt="Logo" />

			<button onClick={onThemeToggle}>
				<img src={themeIcon} alt="Theme Icon" />
			</button>
		</header>
	);
};

export default Header;
