// import logo from './logo.svg';
// import './App.css';
import 'antd/dist/antd.css';
import Routes from "./route/Routes";
import Main from './Context/Main';
import { UserProvider } from './Context/userContext';

function App() {
  return (
    <>
      <Routes />
      {/* <UserProvider>
        <Main />
      </UserProvider> */}
    </>
  );
}

export default App;
