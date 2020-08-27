import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TopNav, BottomNav } from './components/Navs';
import HomeRoute from './routes/HomeRoute';
import AboutRoute from './routes/AboutRoute';
import InfoRoute from './routes/InfoRoute';
import MenuRoute from './routes/MenuRoute';

function App() {
  return (
    <div>
      <TopNav />
      <Switch>
        <Route exact path='/' component={HomeRoute} />
        <Route path='/about' component={AboutRoute} />
        <Route path='/info' component={InfoRoute} />
        <Route path='/menu' component={MenuRoute} />
      </Switch>
      <BottomNav />
    </div>
  );
}

export default App;
