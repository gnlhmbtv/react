
import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <Navbar title="Navbar"/>
      <User name="Kamran" age="15" surname="Ismayilov"/> 
      <User name="Kamran" age="15" surname="Ismayilov"/> 
      <User name="Kamran" age="15" surname="Ismayilov"/> 
    </div>
  );
}

export default App;
