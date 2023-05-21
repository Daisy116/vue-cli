import { createApp } from 'vue'
import App from './App.vue'
import App2 from './App2.vue'
import App3 from './AppPropsTest.vue'
import App4 from './AppEmitTest.vue'
import App5 from './AppCourseList.vue'
import router from './router'

// 透過載入css檔案，將css設定塞入網頁！
import "@/assets/css/reset.css";

// 透過載入js檔案，使用裡面的函式來產生千分位符號！
import {numPrice} from "@/lib/tools.js"

// App2為練習拆分組件components
createApp(App).use(router).mount('#app');

// App2為練習拆分組件components
// createApp(App2).use(router).mount('#app');

// App3為練習子組件之間傳遞資料
// createApp(App3).use(router).mount('#app');

// App4為練習子組件傳遞資料給父層
// createApp(App4).use(router).mount('#app');

// App5為用課程列表的例子，練習傳遞資料
// createApp(App5).use(router).mount('#app');


// const app = createApp(App4);

// app.directive('focus', {
//     // mounted括號裡的el，是他會回傳掛載好的DOM元素！
//     mounted(el){
//         el.focus();
//     },
// });
// app.directive('price', {
//     mounted(el, binding) {
//         let p = numPrice(binding.value);
//         el.innerText = p;
//     },
//     updated(el, binding) {
//         let p = numPrice(binding.value);
//         el.innerText = p;
//     },
// });

// app.mount('#app');