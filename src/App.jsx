import _Layout from "./layout/_Layout"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <_Layout/>
      <ToastContainer position="top-right" className={"text-sm"} />
    </>
  )
}

export default App