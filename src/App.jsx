import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
// import "./App.css"

function App() {

  return (
    <div className="container mt-10 min-[600px]:mx-auto ">
      <Header />
      <div className="mt-10 sm:flex">
        <Formulario/>
        <ListadoPacientes/>
      </div>
    </div>
  )
}

export default App
