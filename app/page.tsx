'use client'

import { Provider } from 'react-redux'
import store from './store/store'
import Counter from './Counter'

export default function Home() {
  return (
    <Provider store={store}>
      <main className='flex bg-indigo-100 text-xl text-indigo-800 min-h-screen flex-col items-center justify-between p-24'>
        <Counter />
      </main>
    </Provider>
  )
}
