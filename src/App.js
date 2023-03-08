import './App.css';

// import Loading from "./components/loading/Loading";
import Header from "./components/header/Header";
import Comment1 from './components/comment/comment1/Comment1';
import Card1 from "./components/card/card1/Card1";
import Comment2 from './components/comment/comment2/Comment2';
import Card2 from './components/card/card2/Card2';
import Comment3 from './components/comment/comment3/Comment3';
import Comment4 from './components/comment/comment4/Comment4';
import Comment5 from './components/comment/comment5/Comment5';
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="main">
      {/* <Loading /> */}
      <Header />
      <Comment1 />
      <Card1 />
      <Comment2 />
      <Card2 />
      <Comment3 />
      <Comment4 />
      <Comment5 />
      <Footer />
    </div>
  );
}

export default App;
