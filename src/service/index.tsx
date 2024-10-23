/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
// import { getToken, setSessionDtls } from 'utils'
import { API_HOST_URL, HTTP_STATUS } from 'utils/constants'

const axiosClient = axios.create({
  baseURL: API_HOST_URL,
})

axiosClient.interceptors.request.use(
  async (config) => {
    const token = '' //getToken()
    if (!config?.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/json'
      config.headers['content-disposition'] = 'attachment;'
    }

    if (config?.params?.hasFileUpload) {
      config.headers['Content-Type'] = 'multipart/form-data'
      delete config.params.hasFileUpload
    } else {
      config.headers['Content-Type'] = 'application/json'
      config.headers['content-disposition'] = 'attachment;'
    }

    if (config?.params?.baseUrl) {
      config.baseURL = config?.params?.baseUrl
    }
    config.headers['Access-Control-Allow-Headers'] =
      'Origin, Content-Type, X-Auth-Token'
    config.headers['Access-Control-Allow-Origin'] = '*'

    config.headers['Authorization'] = token ? `Bearer ${token}` : ''
    return config
  },
  (error: any) => Promise.reject(error)
)

axiosClient.interceptors.response.use(
  function (response: AxiosResponse<any, any>) {
    response.headers['Content-Type'] = 'application/zip'
    response.headers['content-disposition'] = 'attachment; filename=rfp.zip '
    return responseHandler(response)
  },
  function (error: {
    response: { status: number }
    message: string | string[]
  }) {
    if (error.response) {
      if (error.response.status === 401 || error.response.status === 403) {
        // setSessionDtls({ hasAuth: false })
        window.location.href = '/'
      }
    } else if (error.message.includes('timeout')) {
      return Promise.reject(null)
    } else {
    }
    return Promise.reject(error)
  }
)

export function GET(URL: any, config: AxiosRequestConfig<any> | undefined) {
  return axiosClient.get(`${URL}`, config).then((response: any) => response)
}

export function POST(
  URL: any,
  payload: any,
  config: AxiosRequestConfig<any> | undefined
) {
  return axiosClient
    .post(`${URL}`, payload, config)
    .then((response: any) => response)
}

export function PATCH(
  URL: any,
  payload: any,
  config: AxiosRequestConfig<any> | undefined
) {
  return axiosClient
    .patch(`/${URL}`, payload, config)
    .then((response: any) => response)
}

export function PUT(
  URL: any,
  payload: any,
  config: AxiosRequestConfig<any> | undefined
) {
  return axiosClient
    .put(`/${URL}`, payload, config)
    .then((response: any) => response)
}

export function DELETE(URL: any, params: any) {
  return axiosClient
    .delete(`/${URL}`, { data: params })
    .then((response: any) => response)
}

const responseHandler = (res: AxiosResponse<any, any>) => {
  if (HTTP_STATUS.OK !== res.status) {
    throw new Error('Network error')
  }
  if (res.status >= 400) {
    return Promise.reject(res.data)
  }

  return res
}

export default {
  GET,
  PUT,
  POST,
  DELETE,
}
