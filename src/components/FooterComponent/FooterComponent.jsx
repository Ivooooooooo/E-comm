import "./FooterComponent.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const Footer = () => {
    return (
      <footer>
        <p>Basado en el "e-commerce" creado para anteriores cursos</p>
        <ButtonComponent label="Ir" description="Ir al sitio" backgroundColor="#646cff" href="https://ivooooooooo.github.io/E-commerce/"/>
      </footer>
    );
  };
  
  export default Footer;