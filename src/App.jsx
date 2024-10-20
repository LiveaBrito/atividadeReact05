import Estudante from './components/Estudante'
import './App.css'

function App() {

  return (
    <>
      <Estudante estudanteAutenticado={true}/>
      <Estudante estudanteAutenticado={false}/>
    </>
  )
}

export default App
