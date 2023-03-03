import './App.css';

// import Loading from "./components/loading/Loading";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Comment1 from './components/comment/comment1/Comment1';
import Card1 from "./components/card/card1/Card1";
import Card12 from "./components/card/card2/Card1";

function App() {
  return (
    <div className="main">
      {/* <Loading /> */}
      <Header />
      <Comment1 />
      <Card1 />
      <Comment1 />
      <Card12 />
      <Footer />
    </div>
  );
}

export default App;
