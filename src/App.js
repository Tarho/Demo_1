import './App.css';
import images from './images.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={images} alt="images" width="500" height="500" />
        <p>
         Welcome to my page
        </p>
        {/*https://www.youtube.com/watch?v=p5fnHWznTBQ&t=2496s*/}
        <a href="https://www.facebook.com/vux.1309">Click here to view my info</a>
          <h2>This is my song. Let's enjoy it.</h2>
          <iframe width="500" height="500" src="https://www.youtube.com/embed/MoN9ql6Yymw"/>
      </header>
    </div>
  );
}

export default App;
