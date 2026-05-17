import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { oauth2clientsoauth2createClient } from "../src/operations/oauth2clientsoauth2createClient.ts";
import { oauth2clientsoauth2deleteClient } from "../src/operations/oauth2clientsoauth2deleteClient.ts";
import { oauth2introspectToken } from "../src/operations/oauth2introspectToken.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("oauth2introspectToken", () => {
  it(
    "introspects a token from a registered client (RFC 7662)",
    { timeout: 60_000 },
    async () => {
      const clientName = `distilled-oauth2-introspect-${testRunId}`;
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
              oauth2introspectToken({
                token: `distilled-fake-token-${testRunId}`,
                token_type_hint: "access_token",
                client_id: created.client_id,
                client_secret: created.client_secret,
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
        expect(typeof exit.value.active).toBe("boolean");
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
    "rejects an introspect request with bogus client credentials",
    { timeout: 30_000 },
    async () => {
      const exit = await runEffect(
        Effect.exit(
          oauth2introspectToken({
            token: `distilled-fake-token-${testRunId}`,
            token_type_hint: "access_token",
            client_id: `polar_ci_does_not_exist_${testRunId}`,
            client_secret: `polar_ci_does_not_exist_secret_${testRunId}`,
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
    "rejects an introspect request missing client credentials",
    { timeout: 30_000 },
    async () => {
      const exit = await runEffect(
        Effect.exit(
          oauth2introspectToken({
            token: `distilled-fake-token-${testRunId}`,
            client_id: "",
            client_secret: "",
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
