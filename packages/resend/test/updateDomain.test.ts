import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDomain } from "../src/operations/createDomain";
import { deleteDomain } from "../src/operations/deleteDomain";
import { updateDomain } from "../src/operations/updateDomain";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_DOMAIN_ID = "00000000-0000-4000-8000-000000000000";

describe("updateDomain", () => {
  it("updates tracking flags on a domain", async () => {
    const name = `distilled-resend-updateDomain-${testRunId}.example.com`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createDomain({
          name,
          open_tracking: false,
          click_tracking: false,
        });
        createdId = created.id;
        expect(typeof createdId).toBe("string");

        return yield* updateDomain({
          domain_id: createdId as string,
          open_tracking: true,
          click_tracking: true,
        });
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
      updateDomain({
        domain_id: NON_EXISTENT_DOMAIN_ID,
        open_tracking: true,
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });

  it("fails with UnprocessableEntity for an invalid tls value", async () => {
    const name = `distilled-resend-updateDomain-422-${testRunId}.example.com`;
    let createdId: string | undefined;

    const error = await runEffect(
      Effect.gen(function* () {
        const created = yield* createDomain({ name });
        createdId = created.id;
        // Resend documents 422 invalid_parameter for semantically invalid
        // fields. `tls` must be "opportunistic" or "enforced" — any other
        // value is rejected.
        return yield* updateDomain({
          domain_id: createdId as string,
          tls: "not-a-real-tls-mode",
        }).pipe(Effect.flip);
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

    expect(error._tag).toBe("UnprocessableEntity");
  });
});
