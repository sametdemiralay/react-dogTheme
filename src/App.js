import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Route, Switch } from "react-router-dom";
import {Navbar} from './contents/Navigation/Navbar'

import { Home } from "./contents/AnaSayfa/index";
import { KopekList } from "./contents/KopekTurleri/KopekList";
import { Contacts } from "./contents/Iletisim/Contacts";

function App() {
 return (
  <div>
   <CssBaseline />
   <Navbar/>
   <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/kopekList" component={KopekList} />
    <Route path="/iletisim" component={Contacts} />
   </Switch>
  </div>
 );
}

export default App;
