import { ThemeContext } from "../context/ThemeContext"
import { useContext } from "react"
import ThemeToggle from "../components/ThemeToggle"
import DockButton from "./DockButton";
import SvgIcon from "./SvgIcon";
import Github from "../assets/icons/github.svg?react";
import Linkedin from "../assets/icons/linkedin.svg?react";
import Mail from "../assets/icons/mail.svg?react";

const Dock = ({ ...props }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="dock" {...props} >
            <img
                src={theme === "dark" ? "logo.svg" : "logo-dark.svg"}
                height="24"
                width="24"
                alt="Logo"
                style={{
                    padding: "0.5rem",
                }}
            />
            <DockButton data-tooltip-content="Github" >
                <SvgIcon icon={Github} target="_blank" to="https://github.com/malay77patra" />
            </DockButton>
            <DockButton data-tooltip-content="Linkedin">
                <SvgIcon icon={Linkedin} target="_blank" to="https://www.linkedin.com/in/malaypatra/" />
            </DockButton>
            <DockButton data-tooltip-content="Mail">
                <SvgIcon icon={Mail} target="_blank" to="mailto:malay88patra@gmail.com" />
            </DockButton>
            <DockButton data-tooltip-content="Theme" onClick={toggleTheme}>
                <ThemeToggle theme={theme} />
            </DockButton>
        </div>
    );
};

export default Dock;
