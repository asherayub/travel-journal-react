import Navbar from "./components/Navbar";
import Card from "./components/Card";
import locations from "./data";
function App() {
  const renderCards = locations.map((location) => {
    return (
      <Card
        key={location.id}
        img={location.image}
        country={location.country}
        name={location.name}
        fromDate={location.date.from}
        toDate={location.date.to}
        description={location.descreption}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <div className="main-content">{renderCards}</div>
    </div>
  );
}

export default App;
