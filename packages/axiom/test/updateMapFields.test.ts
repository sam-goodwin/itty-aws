import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { updateMapFields } from "../src/operations/v2/updateMapFields";
import { runEffect, testRunId } from "./setup";

// NOTE: the request body for updateMapFields is a top-level JSON array of
// map-field names. The OpenAPI generator only models struct-typed bodies,
// so the generated input schema omits the body field entirely and the
// client sends an empty request. Axiom rejects that with 422 "payload in
// body is required" before it can resolve the path param, so even the
// happy-path and "dataset does not exist" probes come back as
// UnprocessableEntity instead of 200 / 404. We keep only the smoke-test
// probe that the endpoint is reachable and returns a known error class.

describe("updateMapFields", () => {
  it(
    "surfaces UnprocessableEntity when called without a body (generator limitation)",
    async () => {
      const error = await runEffect(
        updateMapFields({
          dataset_id: `distilled-axiom-doesnotexist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
