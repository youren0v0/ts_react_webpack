import * as React from "react";
import { hot } from 'react-hot-loader/root';
import { Button } from "antd";
import { Hello } from "./components/Hello";
// import  Demo  from "./views/demo/demo";
// import { Demo2 } from "./views/demo/demo2";
// import styles from './app.less';
import { observable } from "mobx";
import { observer } from "mobx-react";
import 'antd/dist/antd.css';
import './app.less';
import { Router, Redirect, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import lazyLoad from './utils/lazyLoad';
export interface Props { }
let history = createBrowserHistory();
history.location = Object.assign(history.location, {
  query: '',
  addQuery: () => {
    return ''
  },
  replaceQuery: () => {
    return ''
  },
  removeQuery: () => {
    return ''
  }
});
//const MyDemo = lazyLoad(() => import('./views/demo/demo'));
const Demo = lazyLoad(() => import('./views/demo/demo'));
const Demo2 = lazyLoad(() => import('./views/demo/demo2'));
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
@observer
class App extends React.Component<Props, {}> {
  render() {
    return <div className={'text'}>
          {/* <Button>btn</Button> */}
      {/* todo, antd 引入，编译有WARNING */}

      <Hello compiler="TypeScript" framework="React" />
   
      <Router history={history}>
           <Switch>
        <Route exact path="/" component={Demo} />
        {/* <Route exact path="/" component={lazyLoad(Demo)} /> */}
        <Route path="/demo2" component={Demo2} />
        {/* <Route component={Demo} /> */}
      </Switch>
        {/* <div>
          <Route path="/" component={Demo2} />
          <Route path="/v/demo" component={Demo} />
                  <Route
                exact
                path={`/home`}
                render={() => (
                  <Redirect to={`/home`} />
                )}
              />
        </div>
 */}

      </Router>
    </div>;
  }
}
export default hot(App);
