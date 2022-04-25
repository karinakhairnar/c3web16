import "./App.css";
import { AuthContextProvider } from "./Components/context/AuthContext";

import Mainroutes from "./Components/Routes/MainRoutes";
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Mainroutes />
      </AuthContextProvider>
    </div>
  );
}
export default App;
