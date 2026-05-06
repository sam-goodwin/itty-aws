import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { oauth2clientsoauth2createClient } from "../src/operations/oauth2clientsoauth2createClient.ts";
import { oauth2clientsoauth2deleteClient } from "../src/operations/oauth2clientsoauth2deleteClient.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("oauth2clientsoauth2createClient", () => {
  it("creates an OAuth2 client", { timeout: 60_000 }, async () => {
    const clientName = `distilled-oauth2-create-${testRunId}`;
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
          return created;
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

    expect(result.client_id).toBeTruthy();
    expect(result.client_name).toBe(clientName);
    expect(result.redirect_uris).toContain(redirectUri);
    expect(result.grant_types).toContain("authorization_code");
  });

  it(
    "rejects an OAuth2 client with malformed redirect URIs",
    { timeout: 30_000 },
    async () => {
      const clientName = `distilled-oauth2-create-bad-${testRunId}`;

      const error = await runEffect(
        oauth2clientsoauth2createClient({
          client_name: clientName,
          redirect_uris: ["not-a-valid-url"],
          grant_types: ["authorization_code"],
          response_types: ["code"],
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
