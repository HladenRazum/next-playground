import axios, { AxiosInstance } from 'axios'
import CryptoJS from 'crypto-js'

export const getHashHeader = () => {
  const tokenExpiration = 30 * 60 * 1000 //30 min

  const expiry = Date.now() + tokenExpiration
  const expiryInSeconds = Math.round(expiry / 1000)
  const SECRET = process.env.NEXT_PUBLIC_SHARED_KEY

  if (!SECRET) {
    throw new Error('Secret key is required')
  }

  const md5 = CryptoJS.MD5(SECRET).toString(CryptoJS.enc.Base64)
  const hash = md5.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
  return { hash, expiry: expiryInSeconds }
}

const axiosInstance: AxiosInstance = axios.create()

const baseHeaders = {
  'Content-Type': 'application/json',
}

axiosInstance.defaults.headers.common = baseHeaders

axiosInstance.interceptors.request.use((config) => {
  config.headers = config.headers || {}
  config.headers['X-Platform-Lang'] = 'en'

  const { hash, expiry } = getHashHeader()

  config.headers['X-Platform-Auth'] = hash
  config.headers['X-Platform-Exp'] = expiry

  return config
})

export default axiosInstance
