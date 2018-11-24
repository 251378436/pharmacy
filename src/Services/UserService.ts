export class UserService {
    static IsLogin() {
        if(localStorage.getItem("token")) {
            return true;
        } else {
            return false;
        }
    }

    static UserLogin(userName: string, phoneNumber: string) {
        console.log('user logged in!');
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiempnc2xvbmdibyIsInBob25lTnVtYmVyIjoiMTM0MjkxOTI4MzIiLCJyb2xlIjoiYWRtaW4ifQ.-DBohmKM66ApYP-c575Ap1yWQDAI76EbFsIUaxwltqk');
    }

    static User() {
        if(UserService.IsLogin()) {
            return "yes";
        } else {
            return "no";
        }
    }
}