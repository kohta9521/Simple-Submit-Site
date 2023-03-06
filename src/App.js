import './App.css';

// import Loading from "./components/loading/Loading";
import Header from "./components/header/Header";
import Comment1 from './components/comment/comment1/Comment1';
import Comment2 from './components/comment/comment2/Comment2';
import Comment3 from './components/comment/comment3/Comment3';
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="main">
      {/* <Loading /> */}
      <Header />
      <Comment1 />
      <Comment2 />
      <Comment3 />
      <Footer />
    </div>
  );
}

export default App;
