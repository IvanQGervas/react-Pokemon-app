import { Switch, Route } from 'react-router-dom';

import Home from "../Home";
import New from "../New";
import Details from "../Details";
import Error from "../Error";


const Main = () => {

  return (
    <main className="main">
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/new" component={New} exact/>
        <Route path="/pokemon/:pokemon" component={Details} exact/>
        <Route component={Error} />
      </Switch>
    </main>
  )
};

export default Main;
