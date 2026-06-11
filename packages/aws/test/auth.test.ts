import { NodeServices } from "@effect/platform-node";
import { describe, expect, it } from "@effect/vitest";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import * as Auth from "../src/auth.ts";

const platform = Layer.mergeAll(NodeServices.layer, FetchHttpClient.layer);

/**
 * Run an effect against a throwaway `~/.aws/config` fixture by pointing `HOME`
 * (and `USERPROFILE`) at a temp dir. Both the profile parse and the sso-session
 * lookup read from the home dir, so this keeps `loadProfile` fully hermetic — no
 * real AWS config or network. Restores the prior env afterward.
 */
const withAwsConfig = <A, E, R>(
  config: string,
  effect: Effect.Effect<A, E, R>,
): Effect.Effect<A, E, R> =>
  Effect.acquireUseRelease(
    Effect.sync(() => {
      const home = mkdtempSync(join(tmpdir(), "distilled-aws-auth-"));
      mkdirSync(join(home, ".aws"), { recursive: true });
      writeFileSync(join(home, ".aws", "config"), config);
      const prev = {
        HOME: process.env.HOME,
        USERPROFILE: process.env.USERPROFILE,
      };
      process.env.HOME = home;
      process.env.USERPROFILE = home;
      return prev;
    }),
    () => effect,
    (prev) =>
      Effect.sync(() => {
        for (const key of ["HOME", "USERPROFILE"] as const) {
          if (prev[key] === undefined) delete process.env[key];
          else process.env[key] = prev[key];
        }
      }),
  );

describe("Auth.loadProfile", () => {
  it.effect(
    "resolves a legacy inline-SSO profile (sso_start_url, no sso_session)",
    () =>
      withAwsConfig(
        [
          "[profile legacy-sso]",
          "sso_start_url = https://example.awsapps.com/start",
          "sso_region = us-east-1",
          "sso_account_id = 123456789012",
          "sso_role_name = AdministratorAccess",
          "region = us-east-1",
          "",
        ].join("\n"),
        Effect.gen(function* () {
          const profile = yield* Auth.loadProfile("legacy-sso");
          expect(profile.sso_account_id).toBe("123456789012");
          expect(profile.sso_start_url).toBe(
            "https://example.awsapps.com/start",
          );
          expect(profile.sso_role_name).toBe("AdministratorAccess");
        }).pipe(Effect.provide(platform)),
      ),
  );

  it.effect("still resolves a modern sso-session profile", () =>
    withAwsConfig(
      [
        "[profile modern-sso]",
        "sso_session = my-session",
        "sso_account_id = 123456789012",
        "sso_role_name = AdministratorAccess",
        "region = us-east-1",
        "",
        "[sso-session my-session]",
        "sso_start_url = https://example.awsapps.com/start",
        "sso_region = us-east-1",
        "",
      ].join("\n"),
      Effect.gen(function* () {
        const profile = yield* Auth.loadProfile("modern-sso");
        // sso_start_url / sso_region are merged in from the [sso-session] section.
        expect(profile.sso_start_url).toBe("https://example.awsapps.com/start");
        expect(profile.sso_region).toBe("us-east-1");
        expect(profile.sso_account_id).toBe("123456789012");
      }).pipe(Effect.provide(platform)),
    ),
  );

  it.effect("returns ProfileNotFound for a non-SSO profile", () =>
    withAwsConfig(
      ["[profile plain]", "region = us-east-1", ""].join("\n"),
      Effect.gen(function* () {
        const error = yield* Effect.flip(Auth.loadProfile("plain"));
        expect(error._tag).toBe("Alchemy::AWS::ProfileNotFound");
      }).pipe(Effect.provide(platform)),
    ),
  );
});
