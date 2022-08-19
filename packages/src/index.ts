import { App } from "vue";
import WButton from "./Button";
// 组件列表
const components = [WButton];
// 使用所有组件
const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
export { WButton, install };
export default { install };
