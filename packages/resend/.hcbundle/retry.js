import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  a as throttlingOptions,
  i as throttlingFactory,
  n as jittered,
  o as transientFactory,
  r as makeDefault,
  s as transientOptions,
  t as capped,
} from "./_chunks/retry-CRUQgxB9.js";
import { t as __exportAll } from "./_chunks/rolldown-runtime-w6R9maHv.js";

//#region ../resend/lib/retry.js
var retry_exports = /* @__PURE__ */ __exportAll({
  Retry: () => Retry,
  capped: () => capped,
  jittered: () => jittered,
  makeDefault: () => makeDefault,
  none: () => none,
  policy: () => policy,
  throttling: () => throttling,
  throttlingFactory: () => throttlingFactory,
  throttlingOptions: () => throttlingOptions,
  transient: () => transient,
  transientFactory: () => transientFactory,
  transientOptions: () => transientOptions,
});
var Retry = class extends Context.Service()("ResendRetry") {};
const policy = (optionsOrFactory) => Effect.provide(Layer.succeed(Retry, optionsOrFactory));
const none = Effect.provide(Layer.succeed(Retry, { while: () => false }));
const throttling = policy(throttlingFactory);
const transient = policy(transientFactory);

//#endregion
export {
  Retry,
  capped,
  jittered,
  makeDefault,
  none,
  policy,
  retry_exports as t,
  throttling,
  throttlingFactory,
  throttlingOptions,
  transient,
  transientFactory,
  transientOptions,
};
