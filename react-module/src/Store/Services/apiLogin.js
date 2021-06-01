import ApiConsumer from "../../Util/ApiConsumer";
import {getUserAction, loginAction, loginActionError} from "../Actions/loginActions";

const apiLogin = (email, password) => {
    return async (dispatch) => {
        try {
            let results = await ApiConsumer.login(email, password);
            console.log(results)
            if(results){
                if(results.error){
                    dispatch(loginActionError(results.error)) 
                    return;
                }
                if(results.token){ 
                    dispatch(loginAction(results.token));
                    let user = await ApiConsumer.getUser(results.token);
                    if(user) dispatch(getUserAction(user.respuesta))
                }
                return;
            }
            dispatch(loginActionError("Failed to fetch"));
        } catch (error) {
            dispatch(loginActionError(error))   
        }
    }
}

export default apiLogin;