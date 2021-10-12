import CardGrid from './components/CardGrid';
import Header from './components/Header';

// Main App Functionality
function App() {
  return (
    <div className="flex flex-col justify-center w-full font-montserrat">
      <Header />
      <CardGrid />
    </div>
  );
}

export default App;
