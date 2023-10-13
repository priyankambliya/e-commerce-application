import { toast } from "react-toastify"

const errorHandler = (error) => {
    const values = Object.values(error)
    return toast.error(values[0])
}

const successMessageHandler = message => {
    return toast.success(message)
}

export {
    errorHandler,
    successMessageHandler
}