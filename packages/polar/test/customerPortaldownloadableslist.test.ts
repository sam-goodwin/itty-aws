import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortaldownloadableslist } from "../src/operations/customerPortaldownloadableslist.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortaldownloadableslist", () => {
  it(
    "lists downloadables for the authenticated customer",
    { timeout: 30_000 },
    async () => {
      const result = await runEffectAsCustomer(
        customerPortaldownloadableslist({ limit: 100 }),
      );

      expect(Array.isArray(result.items)).toBe(true);
      expect(typeof result.pagination.total_count).toBe("number");
      expect(typeof result.pagination.max_page).toBe("number");
      for (const item of result.items) {
        expect(typeof item.id).toBe("string");
        expect(typeof item.benefit_id).toBe("string");
        expect(typeof item.file.id).toBe("string");
        expect(typeof item.file.name).toBe("string");
        expect(typeof item.file.mime_type).toBe("string");
        expect(typeof item.file.size).toBe("number");
        expect(typeof item.file.download.url).toBe("string");
        expect(typeof item.file.download.expires_at).toBe("string");
        expect(item.file.service).toBe("Unauthorized");
      }
    },
  );

  it(
    "rejects an out-of-range limit with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortaldownloadableslist({ limit: 1000 }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "rejects a malformed benefit_id filter with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortaldownloadableslist({ benefit_id: "not-a-uuid" }).pipe(
          Effect.flip,
        ),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
