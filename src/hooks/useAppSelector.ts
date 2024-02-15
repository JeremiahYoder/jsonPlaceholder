import { useSelector } from "react-redux"
import type { RootState } from '../store'

const useAppSelector = (arg: any): any => {
    return useSelector<RootState>(arg)
}

export default useAppSelector;