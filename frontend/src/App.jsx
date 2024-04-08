/* eslint-disable import/extensions */
import { Outlet } from "react-router-dom";
import Header from "./components/Navigation/Header/Header";
import Footer from "./components/Navigation/Footer/Footer";

function App() {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
