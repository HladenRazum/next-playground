'use client'

import React, { useEffect } from 'react'
import axiosInstance from './src/axios.interceptor'

const Test = () => {
  useEffect(() => {
    async function getData() {
      const request = await axiosInstance.get(
        'http://localhost:3000/api/v1/cms/terms-and-conditions'
      )
      console.log(request.data)
    }

    getData()
  }, [])

  return <div>Test</div>
}

export default Test
