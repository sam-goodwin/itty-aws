import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDomain } from "../src/operations/createDomain";
import { deleteDomain } from "../src/operations/deleteDomain";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_DOMAIN_ID = "00000000-0000-4000-8000-000000000000";

describe("deleteDomain", () => {
  it("deletes a domain", async () => {
    const name = `distilled-resend-deleteDomain-${testRunId}.example.com`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createDomain({ name });
        createdId = created.id;
        expect(typeof createdId).toBe("string");
        return yield* deleteDomain({ domain_id: createdId as string });
      }).pipe(
        Effect.ensuring(
          // Defensive cleanup if the in-body delete never ran (e.g. the create
          // succeeded but an earlier assertion threw). The expected case is
          // that the domain has already been removed and this is a no-op.
          Effect.suspend(() =>
            createdId
              ? deleteDomain({ domain_id: createdId }).pipe(Effect.ignore)
              : Effect.void,
          ),
        ),
      ),
    );

    expect(result).toBeDefined();
    expect(result.deleted).toBe(true);
  });

  it("fails with NotFound for a non-existent domain id", async () => {
    const error = await runEffect(
      deleteDomain({ domain_id: NON_EXISTENT_DOMAIN_ID }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });
});
