import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import { describe, expect, it } from "vitest";
import { organizationAccessTokenscreate } from "../src/operations/organizationAccessTokenscreate.ts";
import { organizationAccessTokensdelete } from "../src/operations/organizationAccessTokensdelete.ts";
import { organizationAccessTokenslist } from "../src/operations/organizationAccessTokenslist.ts";
import { organizationAccessTokensupdate } from "../src/operations/organizationAccessTokensupdate.ts";
import {
  hasLivePolarCredentials,
  organizationId,
  runEffect,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("Organization Access Tokens", () => {
  it(
    "creates, lists, updates, and deletes an organization access token",
    { timeout: 60_000 },
    async () => {
      const comment = `distilled-polar-oat-${testRunId}`;
      const updatedComment = `${comment}-updated`;

      const result = await runEffect(
        Effect.gen(function* () {
          const created = yield* organizationAccessTokenscreate({
            organization_id: organizationId,
            comment,
            scopes: ["organizations:read"],
          });

          return yield* Effect.gen(function* () {
            const listed = yield* organizationAccessTokenslist({
              organization_id: organizationId,
              limit: 100,
            });
            const updated = yield* organizationAccessTokensupdate({
              id: created.organization_access_token.id,
              comment: updatedComment,
              scopes: ["organizations:read"],
            });
            const deleted = yield* organizationAccessTokensdelete({
              id: created.organization_access_token.id,
            });

            return { created, listed, updated, deleted };
          }).pipe(
            Effect.ensuring(
              organizationAccessTokensdelete({
                id: created.organization_access_token.id,
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );

      expect(result.created.organization_access_token.id).toBeTruthy();
      expect(result.created.organization_access_token.comment).toBe(comment);
      expect(Redacted.isRedacted(result.created.token)).toBe(true);
      expect(
        result.listed.items.some(
          (token) =>
            token.id === result.created.organization_access_token.id &&
            token.comment === comment,
        ),
      ).toBe(true);
      expect(result.updated.comment).toBe(updatedComment);
      expect(result.updated.scopes).toEqual(["organizations:read"]);
      expect(result.deleted).toBeUndefined();
    },
  );

  it(
    "fails with NotFound for a missing organization access token",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        organizationAccessTokensdelete({
          id: "00000000-0000-4000-8000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
  );
});
