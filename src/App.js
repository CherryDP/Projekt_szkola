import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Polski from './components/Przedmioty/Polski'; 
import Angielski from './components/Przedmioty/Angielski'; 
import Matematyka from './components/Przedmioty/Matematyka'; 


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/polski" component={Polski} /> 
        <Route path="/angielski" component={Angielski} /> 
        <Route path="/matematyka" component={Matematyka} />         
      </Switch>
    </Router>
  );
}

export default App;