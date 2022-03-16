import { ALERT_CALL } from './ActionTypes'

export const error_call = () =>{
    return dispatch=>{
        dispatch({
            type:ALERT_CALL,
            payload:false
        })
    }
}