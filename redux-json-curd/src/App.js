import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomeCom from './components/HomeCom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Adduser from './components/Adduser';
import EditCom from './components/EditCom';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomeCom}/>
        <Route path="/adduser" exact component={Adduser}/>
        <Route path="/edituser/:id" exact component={EditCom}/>
      </Switch>
    </div>
  );
}

export default App;
