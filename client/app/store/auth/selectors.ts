import { useAppSelector } from '../hooks'

const useToken = () => useAppSelector(({ auth: { token } }) => token)

export { useToken }
