import "./bootstrap";
import { createApp } from "vue";
import { registerGlobalComponents } from "./global-components";
import "../css/app.css";

const app = createApp({});

registerGlobalComponents(app);

app.mount("#app");