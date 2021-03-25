
import './App.css';
import UsersTable from "./components/usersTable";
import UserForm from "./components/form";
import {useSelector} from "react-redux";
import Pagination from "./components/pagination";

function App() {
    const isVisibleForm = useSelector(state=> state.userForm.isVisibleForm);
  return (
    <div className="App">
        <UsersTable/>
       {isVisibleForm && <UserForm/>}
       <Pagination/>
    </div>
  );
}

export default App;
