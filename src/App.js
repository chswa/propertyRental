import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import PropertyDetails from './pages/PropertyDetails'
import Booking from './pages/Booking'
import Checkout from './pages/Checkout'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/property/:id" component={PropertyDetails} />
        <Route path="/booking" component={Booking} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  )
}

export default App

 
