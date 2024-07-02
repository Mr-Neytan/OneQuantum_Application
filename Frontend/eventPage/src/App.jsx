import Navigation_Bar from './Components/navbar/Navigation_Bar'
import Jumbotron from './Components/jumbotron_folder/Jumbotron'
import About from './Components/about_folder/About'
import Speakers from './Components/speakers_folder/Speakers'
import Schedule from './Components/schedule_folder/Schedule'
import "./App.css"

function App() {
  
  return (
    <>
      <div className='workshop-container'>
      <Navigation_Bar></Navigation_Bar>
      <Jumbotron></Jumbotron>
      <About></About>
      <Speakers></Speakers>
      <Schedule></Schedule>
      </div>
    </>
  )
}

export default App
