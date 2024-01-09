import "./App.css";
import { LinkButton } from "./components/LinkButton";
import { Lists } from "./components/Lists";

function App() {
  return (
    <div>
      <h2>Polymorphism</h2>
      <section>
        <h4>Polymorphism for anchors</h4>
        <LinkButton href="/home">Home</LinkButton>
        <LinkButton href="/home">About</LinkButton>
        <LinkButton onClick={() => console.log("button")}>Go to</LinkButton>
      </section>
      <section>
        <h4>Polymorphism for lists</h4>
        <Lists as="ul">
          <li>Item 1</li>
          <li>Item 2</li>
        </Lists>
        <Lists as="ol">
          <li>Iphone</li>
          <li>Samsung</li>
        </Lists>
      </section>
    </div>
  );
}

export default App;
