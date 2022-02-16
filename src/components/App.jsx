import "../styles/index.scss";
import Recipes from "./Recipes";
import image from "../images/29093880_180400312758202_3062336683052630016_n.jpg";
import imageSvg from "../images/check-svg.svg";
import Whatever from "./Whatever";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Hai, React</h1>
        </section>
        <img src={image} alt="people" width={250} />
        <img src={imageSvg} alt="people" width={250} />
        <Recipes />
        <Whatever />
      </main>
    </>
  );
};

export default App;
