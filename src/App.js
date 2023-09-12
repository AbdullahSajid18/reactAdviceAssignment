import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setMyCounter] = useState(1);
   
  const advices = [
    'Lets Learn Mern Stack ',
    'Start With HTML , CSS , JS' ,
    'Then Learn React',
    'Learn Backend and Database',
    'Stay disciplined and keep practicing',
    'Congratulations! Now U can Earn Money🥳'
  ];

  function NextHandler() {
    if (counter < advices.length) {
      setMyCounter(counter + 1);
    }
  }
  function PreviousHandler() {
    if (counter > 1) {
      setMyCounter(counter - 1);
    }
  }

  return (
    <>
      <div className='container'>
      <div id='num' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4rem', marginTop: '20px' }}>
        {Array.from([1, 2, 3, 4, 5, 6], (x) => (
          <div style={{ backgroundColor: counter >= x ? 'blue' : 'black', padding: '30px', borderRadius: '50%', height: '30px',width:'30px', display: 'flex', alignItems: 'center',justifyContent:'center',color:'silver',fontWeight:'bold',textShadow:'0px 0px 10px silver' }}>
            {
              x
            }
          </div>
        ))}
      </div>
      <p style={{ textAlign: 'center', marginTop: '40px',backgroundColor:'grey' ,  color: 'white', fontWeight:'600',width:'100%',padding:'10px',borderRadius:'10px', }}>
        {
          advices[counter - 1]
        }
      </p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px', gap: '4rem' }}>
        {Array.from(['Previous', 'Next'], (x) => (
          <button onClick={x === 'Previous' ? PreviousHandler : NextHandler} style={{ padding: '7px', width: '100px', borderRadius: '10px', border: '2px solid #111', backgroundColor: 'black', color: 'white' }}>
            {
              x
            }
          </button>
        ))}
      </div>
      </div>
    </>
  );
}

export default App;
