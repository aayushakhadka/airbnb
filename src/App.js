import logo from './logo.svg';
import './App.css';
import { Nav } from './components/Nav';
import { Photos } from './components/Photos';
import { Amenties } from './components/Amenties';
import { Calender } from './components/Calender';
import { Card } from './components/Card';
import { Detail } from './components/Detail';

function App() {
  return (
    <div>
     <Nav/>
     <div className=' flex flex-col mx-auto w-[80%] justify-center font-display'>
     <Photos/>

     <div className='flex  '>
<div className='flex flex-col'>
     <Detail/>
     <Amenties/>
     <Calender/>
     </div>
     <Card/>

     </div>
     </div>
    </div>
  );
}

export default App;
