import { useDispatch, useSelector } from "react-redux"
import { setFinished } from "./testSlice"

export default function Result() {
  const {wordCounter} = useSelector(state => state.test)

  const dispatch = useDispatch()

  return (
    <div>
      <div className="result">
        <p className="result-p">Words per minute {wordCounter[0]}</p>
        <p className="result-p">Correct words {wordCounter[1]}</p>
        <p className="result-p">Accuracy {wordCounter[2]}%</p>
      </div>
      <br />
      <button onClick={() => dispatch(setFinished(false))} className="restart">Restart</button>
    </div>
  )
}