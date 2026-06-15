import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDomain } from "../src/operations/createDomain";
import { deleteDomain } from "../src/operations/deleteDomain";
import { verifyDomain } from "../src/operations/verifyDomain";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_DOMAIN_ID = "00000000-0000-4000-8000-000000000000";

describe("verifyDomain", () => {
  it("triggers verification on an existing domain", async () => {
    const name = `distilled-resend-verifyDomain-${testRunId}.example.com`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createDomain({ name });
        createdId = created.id;
        expect(typeof createdId).toBe("string");
        return yield* verifyDomain({ domain_id: createdId as string });
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId
              ? deleteDomain({ domain_id: createdId }).pipe(Effect.ignore)
              : Effect.void,
          ),
        ),
      ),
    );

    expect(result).toBeDefined();
    expect(result.id).toBe(createdId);
  });

  it("fails with NotFound for a non-existent domain id", async () => {
    const error = await runEffect(
      verifyDomain({ domain_id: NON_EXISTENT_DOMAIN_ID }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });
});
