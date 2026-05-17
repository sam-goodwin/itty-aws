import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { oauth2clientsoauth2createClient } from "../src/operations/oauth2clientsoauth2createClient.ts";
import { oauth2clientsoauth2deleteClient } from "../src/operations/oauth2clientsoauth2deleteClient.ts";
import { oauth2clientsoauth2getClient } from "../src/operations/oauth2clientsoauth2getClient.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("oauth2clientsoauth2getClient", () => {
  it("fetches an OAuth2 client by client_id", { timeout: 60_000 }, async () => {
    const clientName = `distilled-oauth2-get-${testRunId}`;
    const redirectUri = `https://distilled.example.com/oauth/callback/${testRunId}`;

    const result = await runEffect(
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
          const fetched = yield* oauth2clientsoauth2getClient({
            client_id: created.client_id,
          });
          return { created, fetched };
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

    expect(result.fetched.client_id).toBe(result.created.client_id);
    expect(result.fetched.client_name).toBe(clientName);
    expect(result.fetched.redirect_uris).toContain(redirectUri);
  });

  it(
    "rejects an OAuth2 client lookup with a malformed client_id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        oauth2clientsoauth2getClient({
          client_id: `polar_ci_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
