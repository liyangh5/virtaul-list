import './App.css';
import React, { lazy, Suspense } from 'react';
import { Spin } from 'antd';
// import {Home} from './componment/home/index';
// import {News} from './componment/news/index';
// import {Profile} from './componment/profile/index';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';
// import 'antd/dist/antd.css'
// import PubSub from 'pubsub-js';

const Home = lazy(() => { 
 return import('./componment/home/index')

})
const App = () => {
  return (
    <Suspense fallback={<Spin/>}>
       <Home />
    </Suspense>
  )
}


export default App;
