import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
         <Route />
      </Route>
    </Routes>
  )
}

export default App