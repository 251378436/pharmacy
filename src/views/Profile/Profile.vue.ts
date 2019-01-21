import { Component, Vue } from 'vue-property-decorator';
import jwt_decode from 'jwt-decode';

@Component({
  components: {
  },
})
export default class Profile extends Vue {

  userLogout() {
    localStorage.removeItem('token');
    this.$router.push('login');
  }

  // decodeToken() {
  //   var token = localStorage.getItem('token');
  //   console.log(token);
  //   var decoded = jwt_decode(token);
  //   console.log(decoded);
  // }
  // Add a test commite with Visual studio 2017 and Visual studio code
    // Test whether visual studio and visual studio code is the same
}