import { Switch, Route } from 'react-router-dom';

import Home from "../Home";
import New from "../New";
import Error from "../Error";


const Main = () => {

  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/new" component={New}/>
        <Route component={Error} />
      </Switch>
    </main>
  )
};

export default Main;
