import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { organizationAccessTokenscreate } from "../src/operations/organizationAccessTokenscreate.ts";
import { organizationAccessTokensdelete } from "../src/operations/organizationAccessTokensdelete.ts";
import { organizationAccessTokensupdate } from "../src/operations/organizationAccessTokensupdate.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("organizationAccessTokensupdate", () => {
  it(
    "updates the comment of an organization access token",
    { timeout: 30_000 },
    async () => {
      const originalComment = `distilled-polar-oat-${testRunId}-orig`;
      const newComment = `distilled-polar-oat-${testRunId}-updated`;

      const created = await runEffect(
        organizationAccessTokenscreate({
          comment: originalComment,
          scopes: ["organization_access_tokens:read"],
        }),
      );
      const tokenId = created.organization_access_token.id;

      await runEffect(
        organizationAccessTokensupdate({
          id: tokenId,
          comment: newComment,
        }).pipe(
          Effect.tap((updated) =>
            Effect.sync(() => {
              expect(updated.id).toBe(tokenId);
              expect(updated.comment).toBe(newComment);
              expect(typeof updated.organization_id).toBe("string");
              expect(typeof updated.created_at).toBe("string");
              expect(Array.isArray(updated.scopes)).toBe(true);
            }),
          ),
          Effect.ensuring(
            organizationAccessTokensdelete({ id: tokenId }).pipe(Effect.ignore),
          ),
        ),
      );
    },
  );

  it(
    "fails with UnprocessableEntity when scopes contains an invalid value",
    { timeout: 30_000 },
    async () => {
      const created = await runEffect(
        organizationAccessTokenscreate({
          comment: `distilled-polar-oat-${testRunId}-bad-scope`,
          scopes: ["organization_access_tokens:read"],
        }),
      );
      const tokenId = created.organization_access_token.id;

      // Polar restricts scopes to a fixed enum; a non-existent scope value is
      // rejected with a typed UnprocessableEntity from the validation layer.
      const error = await runEffect(
        organizationAccessTokensupdate({
          id: tokenId,
          // @ts-expect-error — intentionally invalid scope value
          scopes: ["not-a-real-scope"],
        }).pipe(
          Effect.flip,
          Effect.ensuring(
            organizationAccessTokensdelete({ id: tokenId }).pipe(Effect.ignore),
          ),
        ),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed token ID",
    { timeout: 30_000 },
    async () => {
      // Polar validates `id` as a UUID; a non-UUID string is rejected with a
      // typed UnprocessableEntity from the validation layer.
      const error = await runEffect(
        organizationAccessTokensupdate({
          id: "not-a-valid-uuid",
          comment: `distilled-polar-oat-${testRunId}-bad-id`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
