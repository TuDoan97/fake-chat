import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;

              return <Route key={index} path={route.path} element={<Page />} />;
            })}
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
