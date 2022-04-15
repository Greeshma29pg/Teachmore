import './App.css';
import SignUp from './SignUp';
import Login from './Login';
import Users from './Users';
import Owner from './Owner';
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
        </Routes>
      </div>
    </Router>

  );
}

export default App;
