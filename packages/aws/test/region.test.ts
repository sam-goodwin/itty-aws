import { describe, expect, it } from "@effect/vitest";
import * as ConfigProvider from "effect/ConfigProvider";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import * as Region from "../src/region.ts";

/**
 * `Region` is an override, not a requirement — generated operations don't
 * list it in their context, so `resolve` has to answer for every combination
 * of provided/absent service and set/unset environment.
 *
 * The environment is supplied through a ConfigProvider rather than by
 * mutating `process.env`: the default provider doesn't re-read the
 * environment per call, so env mutation leaks between cases.
 */
const withEnv = (env: Record<string, string>) =>
  Effect.provideService(
    ConfigProvider.ConfigProvider,
    ConfigProvider.fromUnknown(env),
  );

describe("Region.resolve", () => {
  it.effect("prefers a provided Region over the environment", () =>
    Region.resolve.pipe(
      Effect.provideService(Region.Region, Effect.succeed("eu-west-2")),
      withEnv({ AWS_REGION: "us-east-1" }),
      Effect.map((region) => {
        expect(region).toBe("eu-west-2");
      }),
    ),
  );

  it.effect("falls back to AWS_REGION when nothing provides Region", () =>
    Region.resolve.pipe(
      withEnv({ AWS_REGION: "ap-southeast-2" }),
      Effect.map((region) => {
        expect(region).toBe("ap-southeast-2");
      }),
    ),
  );

  it.effect("falls back to AWS_DEFAULT_REGION when AWS_REGION is unset", () =>
    Region.resolve.pipe(
      withEnv({ AWS_DEFAULT_REGION: "sa-east-1" }),
      Effect.map((region) => {
        expect(region).toBe("sa-east-1");
      }),
    ),
  );

  it.effect(
    "dies, rather than failing, with no region configured anywhere",
    () =>
      Region.resolve.pipe(
        withEnv({}),
        Effect.exit,
        Effect.map((exit) => {
          // A defect, not an error: keeping it out of the error channel is what
          // lets every generated operation drop Region from its requirements.
          expect(Exit.isFailure(exit)).toBe(true);
          expect(String(exit)).toContain("No AWS region configured");
        }),
      ),
  );
});
