import './App.css';

// import Loading from "./components/loading/Loading";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Comment1 from './components/comment/comment1/Comment1';

function App() {
  return (
    <div className="main">
      {/* <Loading /> */}
      <Header />
      <Comment1 />
      <Footer />
    </div>
  );
}

export default App;
