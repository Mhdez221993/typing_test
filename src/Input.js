import { useDispatch, useSelector } from "react-redux"
import getResult from "./getResult"
import { setInput, setStarted, setWordCounter } from "./testSlice"

export default function TestArea() {
  const {input, text, started} = useSelector(state => state.test)

  const dispatch = useDispatch()

  function handleInput(e) {
    if (!started) {
      dispatch(setStarted(true))
    }

    dispatch(setInput(e.target.value))

    dispatch(setWordCounter(getResult({input, text})))
  }

  return (
    <div>
      <textarea value={input} onChange={handleInput}></textarea>
    </div>
  )
}