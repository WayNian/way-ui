import WButton from "./Button.vue";
import { App } from "vue";

WButton.install = (app: App) => {
  app.component(WButton.name, WButton);
};
export default WButton;
