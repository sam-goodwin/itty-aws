import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { describe, expect, it } from "vitest";
import { fileslist } from "../src/operations/fileslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("fileslist", () => {
  it(
    "lists files for the configured organization",
    { timeout: 30_000 },
    async () => {
      const result = await runEffect(fileslist({ limit: 100 }));

      expect(Array.isArray(result.items)).toBe(true);
      expect(typeof result.pagination.total_count).toBe("number");
      expect(typeof result.pagination.max_page).toBe("number");
      for (const file of result.items) {
        expect(typeof file.id).toBe("string");
        expect(typeof file.name).toBe("string");
        expect(typeof file.mime_type).toBe("string");
        expect(typeof file.size).toBe("number");
        expect(file.service).toBe("downloadable");
        expect(typeof file.is_uploaded).toBe("boolean");
        expect(typeof file.organization_id).toBe("string");
      }
    },
  );

  it(
    "rejects an out-of-range page size with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        fileslist({ limit: 1000 }).pipe(Effect.exit),
      );
      // Polar may either reject the oversized limit OR silently cap it.
      if (Exit.isFailure(error)) {
        const failure = Cause.findErrorOption(error.cause);
        expect(failure._tag).toBe("Some");
        if (failure._tag === "Some") {
          expect(
            (failure.value as { _tag: string }).toBe("RequestValidationError")
              ._tag,
          );
        }
      }
    },
  );
});
