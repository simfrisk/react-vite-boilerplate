import { Route, BrowserRouter, Routes } from "react-router"
import { Header } from "./components/Header"
import { Movies } from "./pages/Movies"
import { About } from "./pages/About"


export const App = () => {
  return (
    <>
      <Header></Header>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
