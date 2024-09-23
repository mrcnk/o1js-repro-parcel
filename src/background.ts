import { runtime } from "webextension-polyfill";
import { Field } from "o1js";

runtime.onConnect.addListener(async () => {
  console.log(Field.from(5));
});
