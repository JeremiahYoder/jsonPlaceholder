import { useDispatch } from "react-redux"
import type { AppDispatch } from '../store'

const useAppDispatch = (): AppDispatch => {
    return useDispatch()
}

export default useAppDispatch;