import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import WayUI from "way-ui";

const app = createApp(App);
app.use(WayUI);
app.mount("#app");
