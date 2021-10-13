import CardGrid from './components/CardGrid';
import Header from './components/Header';

// Main App Functionality
function App() {
  return (
    <div className="flex flex-col h-screen w-screen bg-lotr-main bg-cover font-montserrat">
      <Header />
      <CardGrid />
    </div>
  );
}

export default App;
