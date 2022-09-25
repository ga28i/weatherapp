
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailedForecast from "./pages/detailedForecast";
import Home from './pages/home';
import Header from './components/header/header';

function App() {




  const homeContainerStyle = {
    backgroundImage: "url(icons/background.jpg)",
    backgroundRepeat: "no-repeat, repeat",
    backgroundSize: "cover",
  };


  return (
    <div className="container" style={homeContainerStyle}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/detailed-forecast" element={<DetailedForecast/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
