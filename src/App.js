import "./app.css";
import Header from "./components/Header";
import Homepage from "./pages/HomePage";

function App() {
  return (
    <div className="app">
      <section className="section-1">
        <Header />
        <Homepage />
      </section>
    </div>
  );
}

export default App;
