import './App.css';
import Girlbook from './Girlbook.jpg'
import Flowers from './Flowers.jpg'
import Note from './Note';

function App() {
  return (
    <div className="App">
     <div className='Container'>
        <img className='Image'src={Girlbook} width='200px' alt='girl'/>
     </div>
    <div className='Container'>
      <h1>Schedule your day</h1>
    </div>
    <Note />
    
    </div>
  );
}

export default App;
