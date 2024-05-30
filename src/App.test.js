import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";


function App() {
  // return (
  //   <BrowserRouter>
  //     <div className="App">
  //       <Header />
  //       <Switch>
  //         <Route exact path="/">
  //           <DayList />
  //         </Route>
  //         <Route path="/day/:day">
  //           <Day />
  //         </Route>
  //         <Route path="/create_word">
  //           <CreateWord />
  //         </Route>
  //         <Route path="/create_day">
  //           <CreateDay />
  //         </Route>
  //         <Route>
  //           <EmptyPage />
  //         </Route>
  //       </Switch>
  //     </div>
  //   </BrowserRouter>
  // );

  function showName() {
    console.log('aaaaaaaaaaa.....')
  }

  function showText(e) {
    console.log(e.target.value);
  }

  return <div className="App">
    <Welcome/>
    <Hello age={10}/>
    <Hello age={20}/>
    <Hello age={30}/>        
    <button onClick={showName}>name</button>
    <input type="text" onChange={showText} />

  </div>
}

export default App;
