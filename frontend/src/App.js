import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Header from './components/general/Header';
import Footer from './components/general/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-5'>
        <Container>
        <Route path='/login' component={Login}  exact/>
          {/* /api/mentors */}
          {/* <Route path='/' component={TaskScreen}  exact/>
          <Route path='/mentors' component={MentorsScreen}  exact/>
          <Route path='/login' component={Login}  exact/>
          <Route path='/register' component={Register}  exact/> */}
        </Container>
      </main>
      <Footer />     
    </Router>
  );
}

export default App;
