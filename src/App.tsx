import './App.css'
import GymCard from './components/GymCard'
import NavBar from './components/NavBar'
import { getMockGymData } from './mocks/mockGymData'
import type GymType from './types/GymType'

function App() {

  const gymDataArray: GymType[] = getMockGymData().data.gyms.nodes;

  console.log(gymDataArray)
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        {
          gymDataArray.map((gym, key) => {
            return (
              <GymCard gymDatum={gym} key={key} />
            )
          })
        }
      </main>
    </>
  )
}

export default App
