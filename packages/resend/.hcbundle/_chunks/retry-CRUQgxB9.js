import * as Context from "effect/Context";
import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import { pipe } from "effect/Function";
import "effect/Layer";
import * as Option from "effect/Option";
import * as Ref from "effect/Ref";
import * as Schedule from "effect/Schedule";
import { n as isTransientError, t as isThrottling } from "./category-CZ2ByNto.js";

//#region lib/retry.js
const jittered = Schedule.addDelay(() => Effect.succeed(Duration.millis(Math.random() * 50)));
const capped = (max) =>
  Schedule.modifyDelay(({ duration }) =>
    Effect.succeed(Duration.isGreaterThan(duration, max) ? max : duration),
  );
const DEFAULT_SERVER_RETRY_HINT_CAP_MS = 6e4;
const ENV_SERVER_RETRY_HINT_CAP_MS = "DISTILLED_SERVER_RETRY_HINT_CAP_MS";
const ServerRetryHintCapMs = Context.Service("@distilled.cloud/core/ServerRetryHintCapMs");
const readServerRetryHintCapMsFromEnv = () =>
  parseCapMs(globalThis.process?.env?.[ENV_SERVER_RETRY_HINT_CAP_MS]);
const parseCapMs = (raw) => {
  if (raw === void 0 || raw === "") return DEFAULT_SERVER_RETRY_HINT_CAP_MS;
  const n = Number(raw);
  return Number.isFinite(n) && n >= 0 ? Math.trunc(n) : DEFAULT_SERVER_RETRY_HINT_CAP_MS;
};
const CONFIG_PROVIDER_KEY = "effect/ConfigProvider";
const resolveServerRetryHintCapMs = () =>
  Effect.gen(function* () {
    const fromLayer = yield* Effect.serviceOption(ServerRetryHintCapMs);
    if (Option.isSome(fromLayer)) {
      const n = fromLayer.value;
      if (Number.isFinite(n) && n >= 0) return Math.trunc(n);
    }
    const provider = (yield* Effect.context()).mapUnsafe.get(CONFIG_PROVIDER_KEY);
    if (!provider) return readServerRetryHintCapMsFromEnv();
    const node = yield* provider
      .load([ENV_SERVER_RETRY_HINT_CAP_MS])
      .pipe(Effect.orElseSucceed(() => void 0));
    return parseCapMs(node?._tag === "Value" ? node.value : void 0);
  });
const serverHintMillis = (error, capMs) => {
  const hint = error?.retryAfter;
  if (!Duration.isDuration(hint)) return void 0;
  return Math.min(Duration.toMillis(hint), capMs);
};
const honorServerHint = (lastError, baseline) =>
  Schedule.modifyDelay(
    Effect.fnUntraced(function* ({ duration }) {
      const capMs = yield* resolveServerRetryHintCapMs();
      const error = yield* Ref.get(lastError);
      const hint = serverHintMillis(error, capMs);
      if (hint !== void 0) return hint;
      const adjusted = baseline ? baseline(duration, error) : duration;
      return Duration.toMillis(adjusted);
    }),
  );
const makeDefault = (lastError) => ({
  while: (error) => isTransientError(error),
  schedule: Schedule.max([
    pipe(
      Schedule.exponential(250, 2),
      capped(Duration.seconds(5)),
      honorServerHint(lastError, (duration, error) => {
        if (isThrottling(error) && Duration.toMillis(duration) < 500) return Duration.millis(500);
        return duration;
      }),
      jittered,
    ),
    Schedule.recurs(8),
  ]),
});
const throttlingFactory = (lastError) => ({
  while: (error) => isThrottling(error),
  schedule: pipe(
    Schedule.exponential(1e3, 2),
    capped(Duration.seconds(5)),
    honorServerHint(lastError),
    jittered,
  ),
});
const throttlingOptions = {
  while: (error) => isThrottling(error),
  schedule: pipe(Schedule.exponential(1e3, 2), capped(Duration.seconds(5)), jittered),
};
const transientFactory = (lastError) => ({
  while: isTransientError,
  schedule: pipe(
    Schedule.exponential(1e3, 2),
    capped(Duration.seconds(5)),
    honorServerHint(lastError),
    jittered,
  ),
});
const transientOptions = {
  while: isTransientError,
  schedule: pipe(Schedule.exponential(1e3, 2), capped(Duration.seconds(5)), jittered),
};

//#endregion
export {
  throttlingOptions as a,
  throttlingFactory as i,
  jittered as n,
  transientFactory as o,
  makeDefault as r,
  transientOptions as s,
  capped as t,
};
