import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ModalComp from "./plugins/modals";

createApp(App).use(ModalComp).mount("#app");
