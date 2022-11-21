import React, { useState } from 'react';



function App() {

  const [item, setitem] = useState(" ");

  const [lists, setList] = useState([]);

  function handlechange(event) {

    let value = event.target.value;

    setitem(value)


  }

  function Change() {


    setList((previ) => {
      return [...previ, item];
    });

    setitem('');

  }




  return (
    <>
      <div className='container'>
        <div className='heading'>
          <h1>To do list</h1>
        </div>
        <input type='text' value={item} onChange={handlechange} ></input>
        <span>
          <button type='submit' onClick={Change}>Add</button>
        </span>
        <ul>

          {lists.map((list) => {
            return <li>{list}</li>
          })}

        </ul>

      </div>
    </>
  );
}

export default App;
