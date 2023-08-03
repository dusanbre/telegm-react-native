import { useQuery } from '@tanstack/react-query'

import { axiosInstance, withAuthorization } from '../../../axios/axioInstance'
import queryKeys from '../../../react-query/queryKeys'

const getWorkLocation = async (id, params) => {
  const axiosRsp = await axiosInstance(withAuthorization({
    url: `/locations/${id}`,
    method: 'GET',
    params
  }))
  return axiosRsp.data
}

export const useWorkLocation = (id, params) => {
  const queryConfig = { placeholderData: { data: null, included: [] } }
  return useQuery([queryKeys.workLocations, id], () => getWorkLocation(id, params), queryConfig)
}

export default { useWorkLocation }
