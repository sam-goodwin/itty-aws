import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { PlatformGetDomain } from "../src/operations/platform/PlatformGetDomain";
import { PlatformListDomains } from "../src/operations/platform/PlatformListDomains";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_DOMAIN = `dmn_does_not_exist_${testRunId}`;
const FOREIGN_DOMAIN = `dmn_foreign_workspace_${testRunId}`;

const pickDomain = Effect.gen(function* () {
  const domains = yield* PlatformListDomains({});
  const domain = domains.data[0];
  if (!domain) {
    return yield* Effect.die(
      new Error(
        "PlatformListDomains returned no domains - cannot test PlatformGetDomain",
      ),
    );
  }
  return domain;
});

describe("PlatformGetDomain", () => {
  it("fetches a domain by id and returns the full envelope", async () => {
    await runEffect(
      Effect.gen(function* () {
        const picked = yield* pickDomain;

        const result = yield* PlatformGetDomain({
          domainIDOrName: picked.id,
        });

        expect(result.object).toBe("domain");
        expect(result.id).toBe(picked.id);
        expect(typeof result.name).toBe("string");
        expect(typeof result.frontend_api_url).toBe("string");
        expect(result.application.object).toBe("application");
        expect(typeof result.application.id).toBe("string");
        expect(["production", "development"]).toContain(
          result.instance.environment_type,
        );
      }),
    );
  });

  it("returns NotFound for a domain id that does not exist", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformGetDomain({
          domainIDOrName: NON_EXISTENT_DOMAIN,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("NotFound");
      }),
    );
  });

  it("returns Forbidden when fetching a domain that belongs to another workspace", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformGetDomain({
          domainIDOrName: FOREIGN_DOMAIN,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });
});
