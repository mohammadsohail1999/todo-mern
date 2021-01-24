import React from "react";

import { HomeScreen } from "./screens/HomeScreen";
import AddTitleScreen from "./screens/AddTitleScreen";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import AddToDosScreen from "./screens/AddToDosScreen";
import Modal from "./components/Modal";

const App = () => {

  




  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
       

        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/addTitle" exact component={AddTitleScreen} />

          <Route path="/:id" exact component={AddToDosScreen} />
          <Route path="/delete/:id" exact component={Modal}/>
        
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
