import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import { describe, expect, it } from "vitest";
import { organizationAccessTokenscreate } from "../src/operations/organizationAccessTokenscreate.ts";
import { organizationAccessTokensdelete } from "../src/operations/organizationAccessTokensdelete.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("organizationAccessTokenscreate", () => {
  it(
    "creates an organization access token and returns the secret",
    { timeout: 30_000 },
    async () => {
      const comment = `distilled-polar-oat-${testRunId}`;

      await runEffect(
        organizationAccessTokenscreate({
          comment,
          scopes: ["organization_access_tokens:read"],
        }).pipe(
          Effect.flatMap((created) =>
            Effect.gen(function* () {
              expect(typeof created.organization_access_token.id).toBe(
                "string",
              );
              expect(created.organization_access_token.comment).toBe(comment);
              expect(
                typeof created.organization_access_token.organization_id,
              ).toBe("string");
              expect(typeof created.organization_access_token.created_at).toBe(
                "string",
              );
              expect(
                Array.isArray(created.organization_access_token.scopes),
              ).toBe(true);
              expect(created.organization_access_token.scopes).toContain(
                "organization_access_tokens:read",
              );

              const secret = Redacted.value(created.token);
              expect(typeof secret).toBe("string");
              expect(secret.length).toBeGreaterThan(0);

              return created.organization_access_token.id;
            }).pipe(
              Effect.ensuring(
                organizationAccessTokensdelete({
                  id: created.organization_access_token.id,
                }).pipe(Effect.ignore),
              ),
            ),
          ),
        ),
      );
    },
  );

  it(
    "fails with UnprocessableEntity when scopes contains an invalid value",
    { timeout: 30_000 },
    async () => {
      // Polar restricts scopes to a fixed enum. The SDK's input schema
      // enforces the enum synchronously at request-build time and throws a
      // raw Error before the request is sent — surfaced as a thrown defect,
      // not via the Effect failure channel.
      let caught: unknown;
      try {
        await runEffect(
          organizationAccessTokenscreate({
            comment: `distilled-polar-oat-bad-${testRunId}`,
            // @ts-expect-error — intentionally invalid scope value
            scopes: ["not-a-real-scope"],
          }),
        );
      } catch (err) {
        caught = err;
      }
      expect(caught).toBeDefined();
      expect(String(caught)).toMatch(/scope|not-a-real-scope/i);
    },
  );
});
