'use client'

import { useDispatch, useSelector } from 'react-redux'
import {
  increment,
  decrement,
  selectCount,
  incrementByAmount,
} from './store/slices/counter.slice'

export default function Counter() {
  const dispatch = useDispatch()
  const counterValue = useSelector(selectCount)

  return (
    <div>
      <h2 className='bg-red-700 p-2 mx-auto mb-4 text-5xl max-w-min text-red-200'>
        {counterValue}
      </h2>

      <button
        className='border border-indigo-600 p-2 rounded'
        onClick={() => dispatch(increment())}
      >
        + Increment
      </button>
      <button
        className='border border-indigo-600 p-2 rounded'
        onClick={() => dispatch(decrement())}
      >
        - Decrement
      </button>

      <hr />
      <button
        className='bg-orange-200 border border-indigo-600 p-2 rounded'
        onClick={() => dispatch(incrementByAmount(6))}
      >
        + Increment By 6
      </button>
    </div>
  )
}
