import React from 'react';
import Day from "./component/Day";
import DayList from "./component/DayList";
import DayList2 from "./component/DayList2";
import Header from "./component/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";
import Hello from "./component/Hello";
import Count from "./component/Count";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* <Hello>aaaaaaaaaaaaaaaaaa</Hello> */}
        <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/hello">
            <Hello age={10}/>
          </Route>
          <Route path="/count">
            <Count />
          </Route>
          <Route path="/daylist2">
            <DayList2 />
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route>
          <Route path="/create_word">
            <CreateWord />
          </Route>
          <Route path="/create_day">
            <CreateDay />
          </Route>
          <Route>
            <EmptyPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
