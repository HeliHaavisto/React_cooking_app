import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
