import { describe, expect } from "vitest";
import * as Effect from "effect/Effect";
import { test, getAccountId, testRunId } from "./test.ts";
import * as ZeroTrust from "~/services/zero-trust";

const accountId = () => getAccountId();

const tunnelName = (suffix: string) =>
  `distilled-cf-tunnel-${suffix}-${testRunId}`;

// Base64 secret with at least 32 bytes
const tunnelSecret = (seed: string): string => {
  const bytes = Buffer.alloc(32);
  for (let i = 0; i < 32; i++)
    bytes[i] = (seed.charCodeAt(i % seed.length) + i) & 0xff;
  return bytes.toString("base64");
};

const NONEXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("ZeroTrust > Tunnel", () => {
  test("error - TunnelNotFound for getTunnelCloudflared with non-existent id", () =>
    ZeroTrust.getTunnelCloudflared({
      accountId: accountId(),
      tunnelId: NONEXISTENT_UUID,
    }).pipe(
      Effect.flip,
      Effect.map((e: any) => {
        expect(e._tag).toBe("TunnelNotFound");
        expect(e.code).toBe(1002);
      }),
    ));

  test("error - TunnelConfigurationNotFound for getTunnelCloudflaredConfiguration with non-existent id", () =>
    ZeroTrust.getTunnelCloudflaredConfiguration({
      accountId: accountId(),
      tunnelId: NONEXISTENT_UUID,
    }).pipe(
      Effect.flip,
      Effect.map((e: any) => {
        expect(e._tag).toBe("TunnelConfigurationNotFound");
        expect(e.code).toBe(1055);
      }),
    ));

  test("error - TunnelTokenNotFound for getTunnelCloudflaredToken with non-existent id", () =>
    ZeroTrust.getTunnelCloudflaredToken({
      accountId: accountId(),
      tunnelId: NONEXISTENT_UUID,
    }).pipe(
      Effect.flip,
      Effect.map((e: any) => {
        expect(e._tag).toBe("TunnelTokenNotFound");
        expect(e.code).toBe(1054);
      }),
    ));

  test("error - DuplicateTunnelName for createTunnelCloudflared with conflicting name", () =>
    Effect.gen(function* () {
      const name = tunnelName("dup");
      const secret = tunnelSecret(name);

      const created = yield* ZeroTrust.createTunnelCloudflared({
        accountId: accountId(),
        name,
        configSrc: "cloudflare",
        tunnelSecret: secret,
      });

      try {
        const err: any = yield* ZeroTrust.createTunnelCloudflared({
          accountId: accountId(),
          name,
          configSrc: "cloudflare",
          tunnelSecret: secret,
        }).pipe(Effect.flip);

        expect(err._tag).toBe("DuplicateTunnelName");
        expect(err.code).toBe(1013);
      } finally {
        if (created.id) {
          yield* ZeroTrust.deleteTunnelCloudflared({
            accountId: accountId(),
            tunnelId: created.id,
          }).pipe(Effect.catch(() => Effect.void));
        }
      }
    }));
});
