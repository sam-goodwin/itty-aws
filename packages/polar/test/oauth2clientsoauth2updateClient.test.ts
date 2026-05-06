import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { oauth2clientsoauth2createClient } from "../src/operations/oauth2clientsoauth2createClient.ts";
import { oauth2clientsoauth2deleteClient } from "../src/operations/oauth2clientsoauth2deleteClient.ts";
import { oauth2clientsoauth2updateClient } from "../src/operations/oauth2clientsoauth2updateClient.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("oauth2clientsoauth2updateClient", () => {
  it("updates an OAuth2 client's metadata", { timeout: 60_000 }, async () => {
    const initialName = `distilled-oauth2-update-${testRunId}`;
    const updatedName = `distilled-oauth2-update-${testRunId}-renamed`;
    const initialRedirect = `https://distilled.example.com/oauth/callback/${testRunId}`;
    const updatedRedirect = `https://distilled.example.com/oauth/callback/${testRunId}/v2`;

    const result = await runEffect(
      Effect.gen(function* () {
        const clientIdRef = yield* Ref.make<string | null>(null);
        return yield* Effect.gen(function* () {
          const created = yield* oauth2clientsoauth2createClient({
            client_name: initialName,
            redirect_uris: [initialRedirect],
            grant_types: ["authorization_code", "refresh_token"],
            response_types: ["code"],
            scope: "openid profile email",
            token_endpoint_auth_method: "client_secret_post",
          });
          yield* Ref.set(clientIdRef, created.client_id);
          const updated = yield* oauth2clientsoauth2updateClient({
            client_id: created.client_id,
            client_name: updatedName,
            redirect_uris: [updatedRedirect],
            grant_types: ["authorization_code", "refresh_token"],
            response_types: ["code"],
            scope: "openid profile email",
            token_endpoint_auth_method: "client_secret_post",
          });
          return { created, updated };
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

    expect(result.updated.client_id).toBe(result.created.client_id);
    expect(result.updated.client_name).toBe(updatedName);
    expect(result.updated.redirect_uris).toContain(updatedRedirect);
    expect(result.updated.redirect_uris).not.toContain(initialRedirect);
  });

  it(
    "rejects an OAuth2 client update with malformed redirect URIs",
    { timeout: 60_000 },
    async () => {
      const initialName = `distilled-oauth2-update-bad-${testRunId}`;
      const initialRedirect = `https://distilled.example.com/oauth/callback/${testRunId}`;

      const error = await runEffect(
        Effect.gen(function* () {
          const clientIdRef = yield* Ref.make<string | null>(null);
          return yield* Effect.gen(function* () {
            const created = yield* oauth2clientsoauth2createClient({
              client_name: initialName,
              redirect_uris: [initialRedirect],
              grant_types: ["authorization_code", "refresh_token"],
              response_types: ["code"],
              scope: "openid profile email",
              token_endpoint_auth_method: "client_secret_post",
            });
            yield* Ref.set(clientIdRef, created.client_id);
            return yield* oauth2clientsoauth2updateClient({
              client_id: created.client_id,
              client_name: initialName,
              redirect_uris: ["not-a-valid-url"],
              grant_types: ["authorization_code"],
              response_types: ["code"],
            }).pipe(Effect.flip);
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

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
