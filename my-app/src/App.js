
import { useState, useEffect } from 'react';
import './App.css';


const App = () => {
  const [counter, setCounter] = useState(0);


  useEffect(() => {
    alert('You have changed the counter to ' + counter)
  }, [counter]);
  /*
  useEffect(() => {
    setCounter(100);
  }, []);
  */
  //accepts a callback function as the first paramete r

  return (
    <div className="App">
       <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
       <h1>{counter}</h1>
       <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}
/*<h1>Hello, {isNameShowing ? name : 'someone'}!</h1> 

<h1>Hello, {2 + 2}!</h1>
     {name ? (
       <>
       <h1>{name}</h1>
       </>
     ) : (
       <>
       <h1>test</h1>
       <h2>There is no name</h2>
       </>
     )}
     

      Person component:

      const Person = (props) => {
  return (
    <> 
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}




     
     <Person 
      name ='John' 
      lastName='Doe' 
      age={25}
    />
     <Person name='Ellie' lastName='Doe' age={24}/>*/
export default App;
