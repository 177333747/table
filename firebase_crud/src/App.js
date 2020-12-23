
import './App.css';
import Contacts from "./components/Contacts";
// import UploadImage from './components/UploadImage'

function App() {
  return (
   <div className="row">
     <div className="col-md-8 offset md-2">
        <Contacts></Contacts>
        {/* <UploadImage /> */}
     </div>
   </div>
  );
}

export default App;
