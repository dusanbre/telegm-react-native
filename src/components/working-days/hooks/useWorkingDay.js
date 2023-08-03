import { useQuery } from '@tanstack/react-query'

import { axiosInstance, withAuthorization } from '../../../axios/axioInstance'
import queryKeys from '../../../react-query/queryKeys'

const getWorkingDay = async (date, params) => {
  const axiosRsp = await axiosInstance(withAuthorization({
    url: `/working-days/${date}`,
    method: 'GET',
    params
  }))
  return axiosRsp.data
}

export const useWorkingDay = (date, params) => {
  const queryConfig = { placeholderData: { data: null, included: [] } }
  return useQuery([queryKeys.workingDays, date], () => getWorkingDay(date, params), queryConfig)
}

export default { useWorkingDay }
