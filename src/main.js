import Vue from 'vue'
import App from './App.vue'
import ACFunCommon from './ACFunCommon.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import Vuex from 'vuex'

Vue.config.productionTip = false
import VImageInput from 'vuetify-image-input/a-la-carte';
import VueClipboard from 'vue-clipboard2'

Vue.component("v-image-input", VImageInput);
VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)
Vue.use(Vuex)


Vue.prototype.$version = "0.2.27"
Vue.prototype.$ACFunCommon = ACFunCommon

const store = new Vuex.Store({
  state: {
    config: {
      isLogin: false,
    },
    ACFunCommon: {
      userName: "",
      userId: "",
      acfunCookies: [],
      acfunDid: [],
      acfunST: "",
    },
    roomInfo: {
      isLive: false,
      onlineCount: 0,
      watchingList: [],
      billList: [],
      managerList: [],
      blockList: [],
      danmakuList: [],
      liveId: "",
    },
    TTSInfo: {
      isTTS: false,
      TTSList: [],
      TTSspeed: 6,
      TTSpitch: 6,
      TTSvolume: 6,
      TTSperson: 0,
      TTSgift: true,
      TTSLang: {
        onComment: "%s 说 %v",
        onGift: "感谢 %s 送的 %n 个 %v",
        onJoin: "欢迎 %s 来到直播间",
        onFollow: "感谢 %s 的关注",
        onJoinClub: "感谢 %s 加入守护团",
      },
    },
    liveInfo: {
      isLive: false,
      useGifCover: false,
      liveCover: null,
      liveCoverGif: null,
      liveCoverGifFile: null,
      liveTitle: "",
      liveCategoryId: 0,
      liveConcreteId: 0,
      liveStreamName: "",
      liveStreamPhotoKey: "",
      liveStreamUrl: "",
      liveStreamKey: "",
      liveId: "",
      transcodeInfoList: [],
      cacheCovers: [],
    },
    obsInfo: {
      obsPort: 4444,
      obsPass: "",
      obsEnabled: false,
      obsStopStreamingAfterClose: false,
    },
    summaryInfo: {
      liveId: "",
      diamond: 0,
      gift: 0,
      glodBanana: 0,
      watchCount: 0,
      likeCount: 0,
      liveDurationMs: "00:00:00",
    },
    logList: [],
    snackbar: {
      text: "(/=-=)/",
      show: false,
    },
  },
  mutations: {
    addLog(state, content) {
      state.logList.unshift({
        logTime: Date.now(),
        logContent: content,
      })
    }
  }
})


new Vue({
  store: store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
