import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Profile extends Vue {

  userLogout() {
    localStorage.removeItem('token');
    this.$router.push('login');
  }
}