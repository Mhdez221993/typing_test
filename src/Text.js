import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTextAsync } from "./testSlice"

export default function Text() {
  const {text, input} = useSelector(state => state.test)

  const dispatch = useDispatch()

  useEffect(() => {
    if (text.length < 1) {
      dispatch(setTextAsync())
    }
  })


  return (
    <div className="text">
      <p>
        {
          text.split('').map((char, i) => {
            let color
            if (i < input.split('').length) {
              color = char === input.split('')[i] ? 'green' : 'red'
            }

            return <span style={{backgroundColor: color}} key={i}>{char}</span>
          })
        }
      </p>
    </div>
  )
}