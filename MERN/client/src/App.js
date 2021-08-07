import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/form/Form';
import Posts from './components/posts/Posts';
function App() {
  return (
    <div className="App">
      <div className="container">
         <div className="row">
           <div className="col-lg-12 mt-4 mb-4">
             <h2>MERN STACK</h2>
           </div>
           <div className="col-lg-8">
             <Posts/>
           </div>
           <div className="col-lg-4">
             <Form/>
           </div>
         </div>
      </div>
    </div>
  );
}

export default App;
