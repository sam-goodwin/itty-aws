import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { organizationAccessTokenscreate } from "../src/operations/organizationAccessTokenscreate.ts";
import { organizationAccessTokensdelete } from "../src/operations/organizationAccessTokensdelete.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("organizationAccessTokensdelete", () => {
  it("deletes an organization access token", { timeout: 30_000 }, async () => {
    const created = await runEffect(
      organizationAccessTokenscreate({
        comment: `distilled-polar-oat-${testRunId}-delete`,
        scopes: ["organization_access_tokens:read"],
      }),
    );
    const tokenId = created.organization_access_token.id;

    const result = await runEffect(
      organizationAccessTokensdelete({ id: tokenId }),
    );

    // Delete returns 204 No Content; the SDK maps this to void.
    expect(result).toBeUndefined();
  });

  it(
    "fails with UnprocessableEntity for a malformed token ID",
    { timeout: 30_000 },
    async () => {
      // Polar validates `id` as a UUID; a non-UUID string is rejected with a
      // typed UnprocessableEntity from the validation layer.
      const error = await runEffect(
        organizationAccessTokensdelete({ id: "not-a-valid-uuid" }).pipe(
          Effect.flip,
        ),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
