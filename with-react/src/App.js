import './App.css';
import Todo from './components/Todo';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React"></Todo>
      <Todo text="Learn Angular"></Todo>
      <Todo text="Workout"></Todo>
      {/* <Modal></Modal>
      <Backdrop></Backdrop> */}
    </div>
  );
}

export default App;
