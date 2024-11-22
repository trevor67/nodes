
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StudentList from './components/StudentList';
import CourseDetails from './components/CourseDetails';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/students" component={StudentList} />
        <Route path="/courses" component={CourseDetails} />
        <Route path="/" exact>
          <h1>Welcome to Kakaires ICT Solutions</h1>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;