import React, {useContext, useState} from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import './App.scss';
import "./style/dark.scss"
import {Home, List, Login, New, Single} from "pages";
import {productInputs, userInputs} from "data/fornSource";
import {DarkModeContext} from "./context/darkModeContext";


function App() {
    const [dark, setDark] = useState(false)

    const  {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? 'app dark' : 'app'}>
    <Routes>
        <Route path="/" >
            <Route index element={<Home/>} />
            <Route path="login" element={<Login/>} />x

            <Route path="users">
                <Route index element={<List/>} />
                <Route path=":userId" element={<Single/>} />
                <Route path="new" element={<New inputs={userInputs}/>} />
            </Route>


            <Route path="products">
                <Route index element={<List/>} />
                <Route path=":productId" element={<Single/>} />
                <Route path="new" element={<New inputs={productInputs}/>} />
            </Route>


        </Route>
    </Routes>
    </div>
  );
}

export default App;
