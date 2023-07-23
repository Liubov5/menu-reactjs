
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './store';
import { MenuWrapper } from './Components/Menu/MenuWrapper';

function App() {
 
  return (
    <Provider store={store}>
      <MenuWrapper/>     
    </Provider>
  );
}

export default App;
