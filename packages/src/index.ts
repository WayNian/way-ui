import { App } from "vue";
import Button from "./Button";
// 组件列表
const components = [Button];
// 使用所有组件
const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
export { Button, install };
export default { install };
