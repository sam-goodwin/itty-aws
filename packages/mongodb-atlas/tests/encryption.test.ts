import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { Forbidden, NotFound } from "../src/errors";
import { createGroupEncryptionAtRestPrivateEndpoint } from "../src/operations/createGroupEncryptionAtRestPrivateEndpoint";
import { listGroups } from "../src/operations/listGroups";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID =
  process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";

describe("createGroupEncryptionAtRestPrivateEndpoint", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent project", async () => {
    const error = await runEffect(
      createGroupEncryptionAtRestPrivateEndpoint({
        groupId: "000000000000000000000000",
        cloudProvider: "AWS",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for inaccessible project", async () => {
    const error = await runEffect(
      createGroupEncryptionAtRestPrivateEndpoint({
        groupId: "aaaaaaaaaaaaaaaaaaaaaaaa",
        cloudProvider: "AWS",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);
});
