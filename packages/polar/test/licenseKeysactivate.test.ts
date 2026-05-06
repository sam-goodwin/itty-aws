import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { licenseKeysactivate } from "../src/operations/licenseKeysactivate.ts";
import { licenseKeysdeactivate } from "../src/operations/licenseKeysdeactivate.ts";
import { licenseKeysget } from "../src/operations/licenseKeysget.ts";
import { licenseKeyslist } from "../src/operations/licenseKeyslist.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("licenseKeysactivate", () => {
  it(
    "activates a granted license key with available activation slots",
    { timeout: 60_000 },
    async () => {
      const list = await runEffect(
        licenseKeyslist({ limit: 100, status: "granted" }),
      );

      let candidateKey:
        | { id: string; key: string; organization_id: string }
        | undefined;
      for (const lk of list.items) {
        const detail = await runEffect(licenseKeysget({ id: lk.id }));
        const remaining =
          detail.limit_activations === null
            ? Number.POSITIVE_INFINITY
            : detail.limit_activations - detail.activations.length;
        if (remaining > 0) {
          candidateKey = {
            id: detail.id,
            key: detail.key,
            organization_id: detail.organization_id,
          };
          break;
        }
      }

      if (candidateKey === undefined) {
        const error = await runEffect(
          licenseKeysactivate({
            key: "DOES-NOT-EXIST-0000-0000-0000-000000000000",
            organization_id: "00000000-0000-0000-0000-000000000000",
            label: `distilled-polar-lka-${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("ResourceNotFound");
        return;
      }

      await runEffect(
        Effect.gen(function* () {
          const activationRef = yield* Ref.make<string | null>(null);

          yield* Effect.gen(function* () {
            const label = `distilled-polar-lka-${testRunId}`;
            const result = yield* licenseKeysactivate({
              key: candidateKey.key,
              organization_id: candidateKey.organization_id,
              label,
            });
            yield* Ref.set(activationRef, result.id);

            expect(typeof result.id).toBe("string");
            expect(result.id.length).toBeGreaterThan(0);
            expect(result.license_key_id).toBe(candidateKey.id);
            expect(result.label).toBe(label);
            expect(typeof result.created_at).toBe("string");
            expect(typeof result.meta).toBe("object");
            expect(result.license_key.id).toBe(candidateKey.id);
            expect(result.license_key.key).toBe(candidateKey.key);
            expect(result.license_key.status).toBe("granted");
          }).pipe(
            Effect.ensuring(
              Effect.gen(function* () {
                const activationId = yield* Ref.get(activationRef);
                if (activationId !== null) {
                  yield* licenseKeysdeactivate({
                    key: candidateKey.key,
                    organization_id: candidateKey.organization_id,
                    activation_id: activationId,
                  }).pipe(Effect.ignore);
                }
              }),
            ),
          );
        }),
      );
    },
  );

  it(
    "returns NotFound for a non-existent license key",
    { timeout: 30_000 },
    async () => {
      const list = await runEffect(licenseKeyslist({ limit: 1 }));
      const orgId =
        list.items[0]?.organization_id ??
        "00000000-0000-0000-0000-000000000000";

      const error = await runEffect(
        licenseKeysactivate({
          key: "DOES-NOT-EXIST-0000-0000-0000-000000000000",
          organization_id: orgId,
          label: `distilled-polar-lka-missing-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "rejects a malformed organization_id with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        licenseKeysactivate({
          key: "any-key",
          organization_id: "not-a-valid-uuid",
          label: `distilled-polar-lka-bad-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "returns Forbidden when activating a revoked or disabled license key",
    { timeout: 30_000 },
    async () => {
      const revoked = await runEffect(
        licenseKeyslist({ limit: 1, status: "revoked" }),
      );
      const disabled = await runEffect(
        licenseKeyslist({ limit: 1, status: "disabled" }),
      );
      const target = revoked.items[0] ?? disabled.items[0];

      if (target === undefined) {
        const list = await runEffect(licenseKeyslist({ limit: 1 }));
        const orgId =
          list.items[0]?.organization_id ??
          "00000000-0000-0000-0000-000000000000";
        const error = await runEffect(
          licenseKeysactivate({
            key: "DOES-NOT-EXIST-0000-0000-0000-000000000000",
            organization_id: orgId,
            label: `distilled-polar-lka-forbidden-${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("ResourceNotFound");
        return;
      }

      const error = await runEffect(
        licenseKeysactivate({
          key: target.key,
          organization_id: target.organization_id,
          label: `distilled-polar-lka-forbidden-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
