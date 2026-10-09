import * as Effect from "effect/Effect";
import * as Option from "effect/Option";
import * as Data from "effect/Data";
import * as Redact from "effect/Redacted";

//#region lib/config.js
var ConfigMissing = class extends Data.TaggedError("ConfigError") {};
const CONFIG_PROVIDER_KEY = "effect/ConfigProvider";
const fromEnv = (name) => globalThis.process?.env?.[name];
const lookup = (name) => Effect.flatMap(Effect.context(), (context) => {
	const provider = context.mapUnsafe.get(CONFIG_PROVIDER_KEY);
	if (!provider) return Effect.succeed(fromEnv(name));
	return provider.load([name]).pipe(Effect.map((node) => node?._tag === "Value" ? node.value : void 0), Effect.orElseSucceed(() => void 0));
});
const required = (name) => Effect.flatMap(lookup(name), (value) => value === void 0 ? Effect.fail(new ConfigMissing({
	name,
	message: `Expected ${name} to be set`
})) : Effect.succeed(value));
const String = (name) => required(name);
const Redacted = (name) => Effect.map(required(name), Redact.make);
const option = (self) => Effect.catch(Effect.map(self, Option.some), () => Effect.succeed(Option.none()));
const withDefault = (value) => (self) => Effect.catch(self, () => Effect.succeed(value));
const orElse = (that) => (self) => Effect.catch(self, () => that());
const map = (f) => (self) => Effect.map(self, f);
const all = (readers) => Effect.all(readers);

//#endregion
export { ConfigMissing, Redacted, String, all, map, option, orElse, withDefault };