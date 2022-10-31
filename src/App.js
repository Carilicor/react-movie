import Header from './components/Header';
import './App.css';
import MovieList from './components/MovieList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
      {/* we will change this */}
      <Footer />
    </div>
  );
}

export default App;
