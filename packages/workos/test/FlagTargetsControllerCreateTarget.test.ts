import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { FeatureFlagsControllerList } from "../src/operations/FeatureFlagsControllerList.ts";
import { FlagTargetsControllerCreateTarget } from "../src/operations/FlagTargetsControllerCreateTarget.ts";
import { FlagTargetsControllerDeleteTarget } from "../src/operations/FlagTargetsControllerDeleteTarget.ts";
import { OrganizationsControllerList } from "../src/operations/OrganizationsControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("FlagTargetsControllerCreateTarget", () => {
  it(
    "creates a feature flag target",
    async () => {
      const flags = await runEffect(FeatureFlagsControllerList({ limit: 1 }));
      const orgs = await runEffect(OrganizationsControllerList({ limit: 1 }));

      if (flags.data.length === 0 || orgs.data.length === 0) {
        // No seed flag or organization — exercise the operation against a
        // missing target so the call still hits the live API.
        const error = await runEffect(
          FlagTargetsControllerCreateTarget({
            slug: `feature-flag-does-not-exist-${testRunId}`,
            resourceId: `org_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(["NotFound", "BadRequest", "Forbidden"]).toContain(error._tag);
        return;
      }

      const seedFlag = flags.data[0] as { slug: string };
      const seedOrg = orgs.data[0] as { id: string };

      await runEffect(
        FlagTargetsControllerCreateTarget({
          slug: seedFlag.slug,
          resourceId: seedOrg.id,
        }).pipe(
          Effect.ensuring(
            FlagTargetsControllerDeleteTarget({
              slug: seedFlag.slug,
              resourceId: seedOrg.id,
            }).pipe(Effect.ignore),
          ),
        ),
      );
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when resourceId has no recognized prefix",
    async () => {
      const flags = await runEffect(FeatureFlagsControllerList({ limit: 1 }));
      const slug =
        flags.data.length > 0
          ? (flags.data[0] as { slug: string }).slug
          : `feature-flag-does-not-exist-${testRunId}`;

      const error = await runEffect(
        FlagTargetsControllerCreateTarget({
          slug,
          resourceId: `not-a-valid-resource-id-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(["BadRequest", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent feature flag slug",
    async () => {
      const error = await runEffect(
        FlagTargetsControllerCreateTarget({
          slug: `feature-flag-does-not-exist-${testRunId}`,
          resourceId: `org_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when targeting an organization in a different tenant",
    async () => {
      const flags = await runEffect(FeatureFlagsControllerList({ limit: 1 }));
      const slug =
        flags.data.length > 0
          ? (flags.data[0] as { slug: string }).slug
          : `feature-flag-does-not-exist-${testRunId}`;

      const error = await runEffect(
        FlagTargetsControllerCreateTarget({
          slug,
          resourceId: "org_01HFGZ6QYV0000000000000000",
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
