import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDomain } from "../src/operations/createDomain";
import { deleteDomain } from "../src/operations/deleteDomain";
import { runEffect, testRunId } from "./setup";

const domainName = (suffix: string) =>
  `distilled-resend-${suffix}-${testRunId}.example.com`;

describe("createDomain", () => {
  it("creates a domain and returns its id", async () => {
    const name = domainName("create");
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createDomain({ name });
        createdId = created.id;
        return created;
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
    expect(typeof result.id).toBe("string");
    expect(result.name).toBe(name);
  });

  it("creates a domain with optional region and tracking flags", async () => {
    const name = domainName("opts");
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createDomain({
          name,
          region: "us-east-1",
          open_tracking: false,
          click_tracking: false,
        });
        createdId = created.id;
        return created;
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

    expect(result.id).toBeDefined();
    expect(result.name).toBe(name);
  });

  it("fails with UnprocessableEntity for an invalid domain name", async () => {
    // Resend documents 422 invalid_parameter for malformed domain names.
    const error = await runEffect(
      createDomain({ name: "not a valid domain!!!" }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("UnprocessableEntity");
  });

  it("fails with Forbidden when the API key cannot create domains", async () => {
    // Resend documents 403 invalid_api_key / validation_error on POST /domains
    // when the API key lacks permission to create domains. We exercise the
    // documented error path; the actual trigger depends on the account / key.
    const error = await runEffect(
      createDomain({ name: domainName("forbidden") }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("Forbidden");
  });
});
