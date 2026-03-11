import Header from "./components/Header";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <div className="container py-4">
        <div className="row g-3">
          <aside className="col-12 col-lg-3 col-xl-2">
            <SideBar />
          </aside>
          <main className="col-12 col-lg-9 col-xl-10">
            <Card />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
