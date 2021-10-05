import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

import About from './components/About/About';
import PlaceOrder from './components/SignUp/SignUp';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import SingelCourse from './components/SingleCourse/SingelCourse';
import SignUp from './components/SignUp/SignUp';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/singlecourse">
            <SingelCourse></SingelCourse>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>


    </div>
  );
}

export default App;
