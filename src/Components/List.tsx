

import { useState } from 'react';

function ToDoList () {

    const array = ['Cras justo odio', 'Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac', 'Vestibulum at eros'];
    const [items, setItems] = useState(array);
    const [done, setDone] = useState(new Array(array.length).fill(false));

    function handleOnClick(index : number) {
        const updated = [...done];
        updated[index] = !updated[index];
        setDone(updated);

        console.log( `${items[index]} is ${updated[index] ? 'done ✅' : 'not done ❌'}`);

    }

    return (
<div className='container mt-5 col-9'>
    <h2 className='ml-2 text-primary'>To-Do List</h2>
<ul className="list-group text-danger">
  {array.map((item, index) => (
    <li key={index}
     className="list-group-item text-success" onClick={ () => handleOnClick(index)}>
        {done[index] ? '✅' : '⬜️'}&nbsp;{item}
        </li>
  ))}
</ul>
</div>


    )

}

export default ToDoList;

{/* <li className="list-group-item text-danger">Cras justo odio</li>
  <li className="list-group-item">Dapibus ac facilisis in</li>
  <li className="list-group-item">Morbi leo risus</li>
  <li className="list-group-item">Porta ac consectetur ac</li>
  <li className="list-group-item">Vestibulum at eros</li> */}