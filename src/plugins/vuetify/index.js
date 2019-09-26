import Vue from 'vue';
import Vuetify from 'vuetify';
import zhHans from 'vuetify/es5/locale/zh-Hans';
import '@mdi/font/css/materialdesignicons.css';

import 'vuetify/src/styles/main.sass';

Vue.use(Vuetify);

// Vuetify 升级 2X 版本这样写
export default new Vuetify({
    icons: {
        iconfont: 'mdi',
    },
    theme: {
        themes: {
            light: {
                primary: '#1890ff'
            },
        },
    },
    lang: {
        locales: { zhHans },
        current: 'zhHans'
    }
});
