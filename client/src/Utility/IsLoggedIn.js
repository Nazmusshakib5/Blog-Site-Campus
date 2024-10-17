
import Cookies from "js-cookie";

class ValidationHelper{
    static IsEmail(value){
        let EmailRegX=/\S+@\S+\.\S+/
        return EmailRegX.test(value)
    }
    static IsLogin (){
        return  !!Cookies.get("token");
    }
}
export default ValidationHelper