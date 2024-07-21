import React from "react";
import { Route, Switch } from "wouter";
import "./styles/App.css";

import Home from "./pages/Home.jsx";
import GameSelection from "./pages/GameSelection.jsx";
import Game1 from './pages/Game1.jsx';
import Game2 from './pages/Game2.jsx';
import Game3 from './pages/Game3.jsx';
import ThankYou from './pages/ThankYou.jsx';

function App() {

    return <div className={'app'}>
        <Switch>
            <Route path={"/"}>
                <Home/>
            </Route>

            <Route path={"/games"}>
                <GameSelection/>
            </Route>

            <Route path={"/games/game1"}>
                <Game1/>
            </Route>

            <Route path={"/games/game2"}>
                <Game2/>
            </Route>

            <Route path={"/games/game3"}>
                <Game3/>
            </Route>

            <Route path={"/thankyou"}>
                <ThankYou/>
            </Route>
            <Route>
                Page Not Found!
            </Route>
        </Switch>


    </div>;
}

export default App;
