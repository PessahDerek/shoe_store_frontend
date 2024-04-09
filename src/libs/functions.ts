import {AxiosError} from "axios";


export const commarise = (value: number) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export const getErr = (error: Error | AxiosError) => error instanceof AxiosError ?
    error.response?.statusText : error.message
