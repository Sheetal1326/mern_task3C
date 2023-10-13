import './App.css';
import ColorPicker from './components/color';

function App() {
  return (
    <div>
      <ColorPicker colorArray = {["turquoise", "blue", "yellow", "cyan", "orange", "purple", "black","red", "maroon","pink", "green", "coral", "lightskyblue", "brown", "orangered", "teal", "gold"]}/>
    </div>
  );
}

export default App;