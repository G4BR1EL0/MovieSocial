import ApiConsumer from "../../Util/ApiConsumer";
import {getUserAction, loginAction, loginActionError} from "../Actions/loginActions";

const apiLogin = (email, password) => {
    return async (dispatch) => {
        try {
            let results = await ApiConsumer.login(email, password);
            if(results){
                if(results.error){
                    dispatch(loginActionError(results.error)) 
                    return;
                }
                if(results.token){ 
                    dispatch(loginAction(results.token));
                    dispatch(getUserAction(results.user));
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