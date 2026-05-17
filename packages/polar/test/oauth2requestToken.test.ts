import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { oauth2clientsoauth2createClient } from "../src/operations/oauth2clientsoauth2createClient.ts";
import { oauth2clientsoauth2deleteClient } from "../src/operations/oauth2clientsoauth2deleteClient.ts";
import { oauth2requestToken } from "../src/operations/oauth2requestToken.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("oauth2requestToken", () => {
  it(
    "exchanges an authorization grant for a typed token response or surfaces a typed failure",
    { timeout: 60_000 },
    async () => {
      const clientName = `distilled-oauth2-token-${testRunId}`;
      const redirectUri = `https://distilled.example.com/oauth/callback/${testRunId}`;

      const exit = await runEffect(
        Effect.gen(function* () {
          const clientIdRef = yield* Ref.make<string | null>(null);
          return yield* Effect.gen(function* () {
            const created = yield* oauth2clientsoauth2createClient({
              client_name: clientName,
              redirect_uris: [redirectUri],
              grant_types: ["authorization_code", "refresh_token"],
              response_types: ["code"],
              scope: "openid profile email",
              token_endpoint_auth_method: "client_secret_post",
            });
            yield* Ref.set(clientIdRef, created.client_id);
            return yield* Effect.exit(
              oauth2requestToken({
                grant_type: "authorization_code",
                client_id: created.client_id,
                client_secret: created.client_secret,
                code: `distilled-fake-code-${testRunId}`,
                redirect_uri: redirectUri,
              }),
            );
          }).pipe(
            Effect.ensuring(
              Effect.gen(function* () {
                const id = yield* Ref.get(clientIdRef);
                if (id !== null) {
                  yield* oauth2clientsoauth2deleteClient({
                    client_id: id,
                  }).pipe(Effect.ignore);
                }
              }),
            ),
          );
        }),
      );

      if (Exit.isSuccess(exit)) {
        expect(exit.value.token_type).toBe("Bearer");
        expect(typeof exit.value.expires_in).toBe("number");
        expect(typeof exit.value.scope).toBe("string");
      } else {
        const failureOption = Cause.findErrorOption(exit.cause);
        expect(failureOption._tag).toBe("Some");
        if (failureOption._tag === "Some") {
          const tag = (failureOption.value as { _tag: string })._tag;
          expect(typeof tag).toBe("string");
          expect(tag.length).toBeGreaterThan(0);
          expect(tag).not.toMatch(/^Un[a-z]+Error$/i);
        }
      }
    },
  );

  it(
    "rejects an authorization_code grant with bogus client credentials",
    { timeout: 30_000 },
    async () => {
      const exit = await runEffect(
        Effect.exit(
          oauth2requestToken({
            grant_type: "authorization_code",
            client_id: `polar_ci_does_not_exist_${testRunId}`,
            client_secret: `polar_ci_does_not_exist_secret_${testRunId}`,
            code: `distilled-fake-code-${testRunId}`,
            redirect_uri: "https://distilled.example.com/oauth/callback",
          }),
        ),
      );

      expect(Exit.isFailure(exit)).toBe(true);
      if (Exit.isFailure(exit)) {
        const failureOption = Cause.findErrorOption(exit.cause);
        expect(failureOption._tag).toBe("Some");
        if (failureOption._tag === "Some") {
          const tag = (failureOption.value as { _tag: string })._tag;
          expect(typeof tag).toBe("string");
          expect(tag.length).toBeGreaterThan(0);
          expect(tag).not.toMatch(/^Un[a-z]+Error$/i);
        }
      }
    },
  );

  it(
    "rejects a refresh_token grant with a bogus refresh token",
    { timeout: 30_000 },
    async () => {
      const exit = await runEffect(
        Effect.exit(
          oauth2requestToken({
            grant_type: "refresh_token",
            client_id: `polar_ci_does_not_exist_${testRunId}`,
            client_secret: `polar_ci_does_not_exist_secret_${testRunId}`,
            refresh_token: `polar_ci_fake_refresh_${testRunId}`,
          }),
        ),
      );

      expect(Exit.isFailure(exit)).toBe(true);
      if (Exit.isFailure(exit)) {
        const failureOption = Cause.findErrorOption(exit.cause);
        expect(failureOption._tag).toBe("Some");
        if (failureOption._tag === "Some") {
          const tag = (failureOption.value as { _tag: string })._tag;
          expect(typeof tag).toBe("string");
          expect(tag.length).toBeGreaterThan(0);
          expect(tag).not.toMatch(/^Un[a-z]+Error$/i);
        }
      }
    },
  );
});
