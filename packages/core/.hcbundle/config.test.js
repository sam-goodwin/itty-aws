import { Redacted as Redacted$1, String, all, option, orElse, withDefault } from "./config.js";
import { r as describe, s as test } from "./_chunks/dist-BEWZN_3D.js";
import { t as globalExpect } from "./_chunks/test.DNmyFkvJ-DbMz8hZU.js";
import * as Effect from "effect/Effect";
import * as Option from "effect/Option";
import * as Redacted from "effect/Redacted";
import * as ConfigProvider from "effect/ConfigProvider";

//#region lib/config.test.js
const withEnv = (env) => Effect.provideService(ConfigProvider.ConfigProvider, ConfigProvider.fromEnv({ env }));
describe("core/config", () => {
	test("reads from a provided ConfigProvider", async () => {
		const program = all({
			token: Redacted$1("TOKEN"),
			url: String("URL").pipe(withDefault("https://default")),
			region: String("A").pipe(orElse(() => String("B"))),
			project: option(String("PROJECT"))
		});
		const out = await Effect.runPromise(program.pipe(withEnv({
			TOKEN: "t",
			B: "eu"
		})));
		globalExpect(Redacted.value(out.token)).toBe("t");
		globalExpect(out.url).toBe("https://default");
		globalExpect(out.region).toBe("eu");
		globalExpect(Option.isNone(out.project)).toBe(true);
	});
	test("a missing required value fails with tag ConfigError", async () => {
		const exit = await Effect.runPromise(Effect.result(String("NOPE_NOT_SET").pipe(withEnv({}))));
		globalExpect(exit._tag).toBe("Failure");
	});
	test("falls back to process.env without a provider", async () => {
		process.env.DISTILLED_CONFIG_TEST = "yes";
		globalExpect(await Effect.runPromise(String("DISTILLED_CONFIG_TEST"))).toBe("yes");
	});
});

//#endregion