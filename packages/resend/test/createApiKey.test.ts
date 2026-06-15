import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createApiKey } from "../src/operations/createApiKey";
import { deleteApiKey } from "../src/operations/deleteApiKey";
import { runEffect, testRunId } from "./setup";

describe("createApiKey", () => {
  it("creates an API key with default permissions", async () => {
    const name = `distilled-resend-createApiKey-${testRunId}`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createApiKey({ name });
        createdId = created.id;
        return created;
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId
              ? deleteApiKey({ api_key_id: createdId }).pipe(Effect.ignore)
              : Effect.void,
          ),
        ),
      ),
    );

    expect(result).toBeDefined();
    expect(typeof result.id).toBe("string");
    expect(typeof result.token).toBe("string");
  });

  it("creates an API key with sending_access permission", async () => {
    const name = `distilled-resend-createApiKey-sending-${testRunId}`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createApiKey({
          name,
          permission: "sending_access",
        });
        createdId = created.id;
        return created;
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId
              ? deleteApiKey({ api_key_id: createdId }).pipe(Effect.ignore)
              : Effect.void,
          ),
        ),
      ),
    );

    expect(result).toBeDefined();
    expect(typeof result.id).toBe("string");
    expect(typeof result.token).toBe("string");
  });

  it("fails with UnprocessableEntity for an invalid domain_id", async () => {
    const error = await runEffect(
      createApiKey({
        name: `distilled-resend-createApiKey-bad-${testRunId}`,
        permission: "sending_access",
        domain_id: "00000000-0000-4000-8000-000000000000",
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("UnprocessableEntity");
  });
});
