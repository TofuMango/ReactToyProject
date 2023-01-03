import './App.css';
import Hello from "./component/Hello";
import Welcome from "./component/welcome";

function App() {
    const name = "dubu";
    const snslab = {name: "snslab", url: "http://snslab.cu.ac.kr"}
    return (
    <div className="App">
        <h1 style={{color : "blue", backgroundColor : "gray"}}>hello, {snslab.name}.{snslab.url}</h1>
        <a href={snslab.name}>{snslab.url}</a>
        <Hello/>
        <Hello/>
        <Hello/>
        <Welcome/>
    </div>
  );
}



export default App;
