import { Component, Vue } from 'vue-property-decorator';
import { UserService } from '@/Services/UserService';

@Component({
    components: {
    },
  })
export default class Login extends Vue {
    userName: string = 'zjgslongbo';
    phoneNumber: string = '13429192832';

    userLogin() {
        if(this.userName == 'zjgslongbo' && this.phoneNumber == '13429192832') {
            UserService.UserLogin(this.userName, this.phoneNumber);
            
            if(this.$route.query.redirect) {
                console.log(this.$route.query.redirect);
                this.$router.push({path: this.$route.query.redirect});
            } else {
                this.$router.push('profile'); 
            }

            console.log(UserService.User());

        } else {
            alert('incorrect username and phone number');
        }
    }
}