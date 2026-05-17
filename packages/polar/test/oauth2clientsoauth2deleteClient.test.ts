import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { oauth2clientsoauth2createClient } from "../src/operations/oauth2clientsoauth2createClient.ts";
import { oauth2clientsoauth2deleteClient } from "../src/operations/oauth2clientsoauth2deleteClient.ts";
import { oauth2clientsoauth2getClient } from "../src/operations/oauth2clientsoauth2getClient.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("oauth2clientsoauth2deleteClient", () => {
  it("deletes an OAuth2 client", { timeout: 60_000 }, async () => {
    const clientName = `distilled-oauth2-delete-${testRunId}`;
    const redirectUri = `https://distilled.example.com/oauth/callback/${testRunId}`;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* oauth2clientsoauth2createClient({
          client_name: clientName,
          redirect_uris: [redirectUri],
          grant_types: ["authorization_code", "refresh_token"],
          response_types: ["code"],
          scope: "openid profile email",
          token_endpoint_auth_method: "client_secret_post",
        });
        yield* oauth2clientsoauth2deleteClient({
          client_id: created.client_id,
        });
        const lookupTag = yield* oauth2clientsoauth2getClient({
          client_id: created.client_id,
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e._tag),
            onSuccess: () => Effect.succeed("ok"),
          }),
        );
        return { created, lookupTag };
      }),
    );

    expect(result.created.client_id).toBeTruthy();
    expect(result.lookupTag).not.toBe("ok");
  });

  it(
    "rejects an OAuth2 client deletion with a malformed client_id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        oauth2clientsoauth2deleteClient({
          client_id: `polar_ci_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
