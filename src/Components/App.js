import Header from "./Header.js";
import Form from "./Form.js";
import Item from "./Item.js";
import Footer from "./Footer.js";

import { useGlobalContext } from "../GlobalContext/Context";

function App() {
  const { themeState } = useGlobalContext();

  return (
    <div className={`body ${themeState ? " dark" : " bright"}`}>
      <div className="app">
        <Header />
        <Form />
        <Item />
        <Footer />
      </div>
    </div>
  );
}

export default App;
