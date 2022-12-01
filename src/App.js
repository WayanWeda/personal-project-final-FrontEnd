//import logo from './logo.svg';
import './App.css';
import Header from './components/molecules/Header/index';
import Footer from './components/molecules/Footer/index';
import Content from './components/Pages/content';

function App() {
  return (
    <div>
      <div className="page">
        <Header></Header>
        <Content></Content>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
