export const moduleA = {
    namespaced: true,
    state: { 
      count: 0,
      sysUser: {},
      sysCode: { aaa: '111', bbb: "222"}
     },
    mutations: {
      increment (state: any) {
        // `state` is the local module state
        state.count++
      },
      setSysUser(state: any, user: any) {
        state.sysUser = user;
        state.count++;
      },
      setSysCode(state: any, code: any) {
        state.sysCode = code;
      }
    },
    getters: {
      doubleCount (state: any) {
        return state.count * 2
      }
    },
    actions: {
      userLoad(context: any, code: any) {
        context.commit("setSysUser", code);
      },
      codeLoad({ commit }, code: any) {
        commit("setSysCode", code);
      }
    }
  }
