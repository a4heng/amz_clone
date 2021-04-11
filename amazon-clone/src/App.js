import './App.css';
import Header from './Header'
import Home from './Home';

function App() {
  return (
    // Bem convention
    <div className="app">
      {/* <h1>Hello World!</h1> */}
      {/** Header */}
      <Header />
      {/** Home */}
      <Home />
    </div>
  );
}

export default App;
