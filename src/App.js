import './App.css';
import SignUp from './SignUp';
import Login from './Login';
import Users from './Users';
import Owner from './Owner';
import Courses from './Courses';
import Collection from './Collection';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (


    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={[<Login />]} />
          <Route path="/signup" element={[<SignUp />]} />
          <Route path="/users" element={[<Users />]} />
          <Route path="/owner" element={[<Owner />]} />
          <Route path="/courses" element={[<Courses />]} />
          <Route path="/collection" element={[<Collection />]} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
