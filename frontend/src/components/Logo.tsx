import logo from "../assets/logo.png";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

const Logo = ({ variant = "light", className = "h-9" }: LogoProps) => {
  return (
    <img
      src={logo}
      alt="Vroomly logo"
      className={`w-auto object-contain ${
        variant === "dark" ? "brightness-0 invert" : ""
      } ${className}`}
    />
  );
};

export default Logo;
