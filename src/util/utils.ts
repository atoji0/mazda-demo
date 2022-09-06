import { Modal } from "ant-design-vue";
import { h } from "vue";

export const errorDialog = (messages: string[]) => {
  let vnode: any = [];

  messages.forEach((message) => {
    vnode.push(message);
    vnode.push(h("br"));
  });

  Modal.error({
    title: "Error",
    content: h("p", vnode),
    width: "500px",
  });
};
