import BlogList from "./components/BlogList/BlogList";
import "./index.css";

const App = () => {
  return (
    <>
      <div className="flex justify-center min-h-screen bg-gray-100 p-10">
        <div className="container">
          <BlogList/>
        </div>
      </div>
    </>
  );
};

export default App;
