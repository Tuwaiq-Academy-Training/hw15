import { Posts } from './component/Posts';
import './App.css';
import { Navbar } from './component/Navbar';
import { useEffect } from 'react';

function didChange(){
  console.log('didChange');
}



export default function App() {
  useEffect(didChange,[]);

  return <>
  {/* <div className="container">
    <div className="button">add me</div>
  </div> */}
  <div className='spacer'>
  <Navbar />  <Posts />
  </div>
  </>;
}

