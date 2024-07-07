import "./ButtonComponent.css";

const ButtonComponent = ({
  label = "Nombre default",
  description = "Desc default",
  backgroundColor = "#c30010",
  href = "#",
}) => {
  return ( 
    <a href={href} title={description} style={{backgroundColor}} className="buttonLink">
      {label}
    </a>
  );
};

export default ButtonComponent;
