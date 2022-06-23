import Cart from "./components/Cart";
import Loading from "./UI/Loading";
import { useSelector } from 'react-redux';


function App() {
  const loading = useSelector(state => state.get.loading)
  return (
    <>
      {loading && <Loading />}
      {/* <Loading /> */}
      <Cart />
    </>
  );
}

export default App;
