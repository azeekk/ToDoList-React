 import 'bootstrap/dist/css/bootstrap.min.css';
 import  ToDoList  from "./Components/List";
 import SideBar from "./Components/Sidebar";
 import ListDone from "./Components/DoneList";

function App() {

  return (
    <>
    <div className='aside'>
<SideBar  />
</div>
<div className='main col-9'>
<ToDoList />
<ListDone />
</div>
</>
  )



}

export default App;
