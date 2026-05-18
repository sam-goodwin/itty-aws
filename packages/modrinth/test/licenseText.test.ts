import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest } from "../src/errors.ts";
import { licenseText } from "../src/operations/licenseText.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("licenseText", () => {
  it("returns the title and body for a well-known SPDX license id", async () => {
    // GET /tag/license/{id} is a public read endpoint. The MIT license
    // is one of the canonical SPDX identifiers Modrinth ships with;
    // both `title` and `body` are documented as optional but in
    // practice are populated for recognized licenses.
    const license = await runEffect(licenseText({ id: "mit" }));

    if (license.title !== undefined) {
      expect(typeof license.title).toBe("string");
      expect(license.title.length).toBeGreaterThan(0);
    }
    if (license.body !== undefined) {
      expect(typeof license.body).toBe("string");
      expect(license.body.length).toBeGreaterThan(0);
    }
    // At least one of the two fields must be populated for a real
    // recognized license.
    expect(license.title !== undefined || license.body !== undefined).toBe(
      true,
    );
  });

  it("returns BadRequest for a license id that is not recognized", async () => {
    // Modrinth validates the license id against its known SPDX list and
    // returns `400 invalid_input` for ids it does not recognize. A
    // run-scoped id guarantees the lookup misses.
    const id = `distilled-no-such-license-${testRunId}`;
    const error = await runEffect(licenseText({ id }).pipe(Effect.flip));

    expect(error._tag).toBe("BadRequest");
    expect(error).toBeInstanceOf(BadRequest);
  });
});
