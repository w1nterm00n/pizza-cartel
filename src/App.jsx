import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './features/counter/counterSlice';
import './App.css';
import { changeTheme } from './features/theme/themeSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <>
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={() => dispatch(decrement())}
        >
          −
        </button>
        <button
          type="button"
          className="counter"
          onClick={() => dispatch(reset())}
        >
          Count is {count}
        </button>
        <button
          type="button"
          className="counter"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        Theme is {theme}
        <button
          type="button"
          className="theme"
          onClick={() => dispatch(changeTheme())}
        >
          CHANGE THEME
        </button>
      </section>
    </>
  );
}

export default App;
