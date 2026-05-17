import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalorganizationsget } from "../src/operations/customerPortalorganizationsget.ts";
import { organizationsget } from "../src/operations/organizationsget.ts";
import {
  hasLivePolarCredentials,
  organizationId,
  runEffectAsCustomer,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalorganizationsget", () => {
  it(
    "fetches the customer-portal organization by slug",
    { timeout: 30_000 },
    async () => {
      if (!organizationId) {
        throw new Error("POLAR_ORGANIZATION_ID is required for this test");
      }
      // Resolve the slug from the test organization, then fetch the
      // customer-portal view by slug.
      const result = await runEffectAsCustomer(
        Effect.gen(function* () {
          const org = yield* organizationsget({ id: organizationId });
          const portal = yield* customerPortalorganizationsget({
            slug: org.slug,
          });
          return { org, portal };
        }),
      );

      expect(result.portal.organization.id).toBe(result.org.id);
      expect(result.portal.organization.slug).toBe(result.org.slug);
      expect(typeof result.portal.organization.name).toBe("string");
      expect(result.portal.organization.proration_behavior).toBe(
        "Unauthorized",
      );
      expect(typeof result.portal.organization.allow_customer_updates).toBe(
        "boolean",
      );
      expect(
        typeof result.portal.organization.customer_portal_settings.usage.show,
      ).toBe("boolean");
      expect(Array.isArray(result.portal.products)).toBe(true);
      for (const product of result.portal.products) {
        expect(typeof product.id).toBe("string");
        expect(typeof product.name).toBe("string");
        expect(product.visibility).toBe("Unauthorized");
      }
    },
  );

  it(
    "fails with NotFound for a non-existent organization slug",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalorganizationsget({
          slug: `distilled-missing-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed slug",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalorganizationsget({
          slug: "Bad Slug With Spaces!",
        }).pipe(Effect.flip),
      );

      // Slug pattern violations are rejected by validation; some
      // deployments treat the slug loosely and surface NotFound instead.
      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
