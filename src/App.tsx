 import 'bootstrap/dist/css/bootstrap.min.css';
 import  ToDoList  from "./Components/List";
 import SideBar from "./Components/Sidebar";
 import ListDone from "./Components/DoneList";

function App() {

  return (
    <div className="row">
    <div className='col-3'>
      <SideBar  />
    </div>
      <div className='main col-9'>
      <ToDoList />
      <ListDone />
      </div>
</div>
  )



}

export default App;
