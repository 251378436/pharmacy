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
    userName: string = 'test';
    phoneNumber: string = '13429193333';
    @Mutation showLoader: any;
    @Mutation hideLoader: any;
    
      
    userLogin() {
        this.$validator.validateAll().then(result => {
            
            if(result) {
                if(this.userName == 'test' && this.phoneNumber == '13429193333') {
                    this.showLoader();
                    var self = this;
                    UserService.UserLogin(this.userName, this.phoneNumber);
                    
                    if(this.$route.query.redirect) {
                        this.$router.push({path: this.$route.query.redirect});
                    } else {
                        this.$router.push('profile'); 
                    }
        
                    setTimeout(() => {
                        self.hideLoader();
                    }, 1000);
        
                } else {
                    this.$dialog.alert('不正确的用户名或者密码', {okText: '继续'});
                }
            } else {
                this.$dialog.alert('不正确的用户名或者密码', {okText: '继续'});
            }
        });
        
        
    }

    created() {
        this.$validator.extend('truthy', {
            getMessage: (field: any) => field + ' 不能超过10个字符.',
            validate: (value: any) => {
                return value.length <= 10;
            }
          });
    }
}