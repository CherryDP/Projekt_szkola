import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Polski from './components/Przedmioty/Polski'; 
import Angielski from './components/Przedmioty/Angielski'; 
import Biologia from './components/Przedmioty/Biologia'; 
import Geografia from './components/Przedmioty/Geografia'; 
import Historia from './components/Przedmioty/Historia'; 
import Hiszpanski from './components/Przedmioty/Hiszpanski'; 
import Matematyka from './components/Przedmioty/Matematyka'; 
import Muzyka from './components/Przedmioty/Muzyka'; 
import Niemiecki from './components/Przedmioty/Niemiecki'; 
import Plastyka from './components/Przedmioty/Plastyka'; 
import Rosyjski from './components/Przedmioty/Rosyjski'; 
import Wf from './components/Przedmioty/Wf'; 
import Wos from './components/Przedmioty/Wos'; 

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/polski" component={Polski} /> 
        <Route path="/angielski" component={Angielski} /> 
        <Route path="/biologia" component={Biologia} /> 
        <Route path="/geografia" component={Geografia} /> 
        <Route path="/historia" component={Historia} /> 
        <Route path="/hiszpanski" component={Hiszpanski} /> 
        <Route path="/matematyka" component={Matematyka} /> 
        <Route path="/muzyka" component={Muzyka} />
        <Route path="/niemiecki" component={Niemiecki} />
        <Route path="/plastyka" component={Plastyka} />
        <Route path="/rosyjski" component={Rosyjski} />
        <Route path="/wf" component={Wf} />
        <Route path="/wos" component={Wos} />
         
        
      </Switch>
    </Router>
  );
}

export default App;