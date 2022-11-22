import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import TestArea from "./Input";
import Result from "./Result";
import { setFinished, updataTimer } from "./testSlice";
import Text from "./Text";

function App() {
  const {started, timer, finished} = useSelector(state => state.test)
  const dispatch = useDispatch()

  useEffect(() => {
    if(!started) return

    const interval = setInterval(() => {
      if (timer === 0) {
        dispatch(setFinished(true))
        return
      }

      dispatch(updataTimer())

    }, 1000)

    return () => clearInterval(interval)
  }, [started, timer, dispatch])

  return (
    <div className="App">
        <h1>Speed Typing Test</h1>

        {
          !finished &&
          <div>
            <div className="timer"><p>{timer}</p></div>
            <Text />
            <TestArea />
          </div>
        }

        {
          finished &&
          <Result />
        }
    </div>
  );
}

export default App;
