import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './components/MainPage';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;