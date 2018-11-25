import { Component, Vue } from 'vue-property-decorator';
import { UserService } from '@/Services/UserService';
import {
    State,
    Getter,
    Action,
    Mutation,
    namespace
  } from 'vuex-class';

@Component({
    components: {
    },
  })
export default class Login extends Vue {
    userName: string = 'zjgslongbo';
    phoneNumber: string = '13429192832';
    @Mutation showLoader: any;
    @Mutation hideLoader: any;
    
      
    userLogin() {
        console.log(this.errors);
        console.log(this.$validator);
        
        
        this.$validator.validateAll().then(result => {
            //this.$validator.localize('ja');
            console.log(this.$validator);
            if(result) {
                console.log('yes, it is true');
            } else {
                console.log('not all valid');
            }
        });
        
        if(this.userName == 'zjgslongbo' && this.phoneNumber == '13429192832') {
            this.showLoader();
            var self = this;
            UserService.UserLogin(this.userName, this.phoneNumber);
            
            if(this.$route.query.redirect) {
                console.log(this.$route.query.redirect);
                this.$router.push({path: this.$route.query.redirect});
            } else {
                this.$router.push('profile'); 
            }

            console.log(UserService.User());
            setTimeout(() => {
                self.hideLoader();
            }, 2000);

        } else {
            //alert('incorrect username and phone number');
        }
    }

    created() {
        this.$validator.extend('truthy', {
            getMessage: (field: any) => 'The ' + field + ' value is not truthy.',
            validate: (value: any) => {
                return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value);
            }
          });
    }
}