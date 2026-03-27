import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { runEffect, FAKE_REF, getExistingProject } from "./setup";
import { v1GetAuthServiceConfig } from "../src/operations/v1GetAuthServiceConfig";
import { v1GetPostgrestServiceConfig } from "../src/operations/v1GetPostgrestServiceConfig";
import { v1GetSslEnforcementConfig } from "../src/operations/v1GetSslEnforcementConfig";
import { v1GetNetworkRestrictions } from "../src/operations/v1GetNetworkRestrictions";
import { v1GetVanitySubdomainConfig } from "../src/operations/v1GetVanitySubdomainConfig";
import { v1GetPgsodiumConfig } from "../src/operations/v1GetPgsodiumConfig";
import { v1GetHostnameConfig } from "../src/operations/v1GetHostnameConfig";
import { v1GetStorageConfig } from "../src/operations/v1GetStorageConfig";
import { v1GetPoolerConfig } from "../src/operations/v1GetPoolerConfig";
import { v1GetPostgresConfig } from "../src/operations/v1GetPostgresConfig";
import { v1GetRealtimeConfig } from "../src/operations/v1GetRealtimeConfig";
import { v1GenerateTypescriptTypes } from "../src/operations/v1GenerateTypescriptTypes";
import { v1GetLegacySigningKey } from "../src/operations/v1GetLegacySigningKey";
import { v1GetProjectSigningKeys } from "../src/operations/v1GetProjectSigningKeys";
import { v1GetProjectSigningKey } from "../src/operations/v1GetProjectSigningKey";
import { v1GetProjectLegacyApiKeys } from "../src/operations/v1GetProjectLegacyApiKeys";
import { v1GetJitAccessConfig } from "../src/operations/v1GetJitAccessConfig";
import { v1GetJitAccess } from "../src/operations/v1GetJitAccess";
import { v1ListJitAccess } from "../src/operations/v1ListJitAccess";
import { v1ListAllNetworkBans } from "../src/operations/v1ListAllNetworkBans";

const FAKE_SIGNING_KEY_ID = "00000000-0000-0000-0000-000000000000";

describe("Project Configuration", () => {
  // ============================================================================
  // v1GetAuthServiceConfig
  // ============================================================================
  describe("v1GetAuthServiceConfig", () => {
    it("happy path - gets auth config", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetAuthServiceConfig({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetAuthServiceConfig({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetPostgrestServiceConfig
  // ============================================================================
  describe("v1GetPostgrestServiceConfig", () => {
    it("happy path - gets postgrest config", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetPostgrestServiceConfig({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetPostgrestServiceConfig({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetSslEnforcementConfig
  // ============================================================================
  describe("v1GetSslEnforcementConfig", () => {
    it("happy path - gets SSL enforcement config", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetSslEnforcementConfig({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetSslEnforcementConfig({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetNetworkRestrictions
  // ============================================================================
  describe("v1GetNetworkRestrictions", () => {
    it("happy path - gets network restrictions", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetNetworkRestrictions({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetNetworkRestrictions({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetVanitySubdomainConfig
  // ============================================================================
  describe("v1GetVanitySubdomainConfig", () => {
    it("happy path - gets vanity subdomain config", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetVanitySubdomainConfig({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetVanitySubdomainConfig({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetPgsodiumConfig
  // ============================================================================
  describe("v1GetPgsodiumConfig", () => {
    it("happy path - gets pgsodium config", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetPgsodiumConfig({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetPgsodiumConfig({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetHostnameConfig
  // ============================================================================
  describe("v1GetHostnameConfig", () => {
    it("happy path - gets hostname config", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetHostnameConfig({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetHostnameConfig({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetStorageConfig
  // ============================================================================
  describe("v1GetStorageConfig", () => {
    it("happy path - gets storage config", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetStorageConfig({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetStorageConfig({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetPoolerConfig
  // ============================================================================
  describe("v1GetPoolerConfig", () => {
    it("happy path - gets pooler config", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetPoolerConfig({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetPoolerConfig({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetPostgresConfig
  // ============================================================================
  describe("v1GetPostgresConfig", () => {
    it("happy path - gets postgres config", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetPostgresConfig({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetPostgresConfig({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetRealtimeConfig
  // ============================================================================
  describe("v1GetRealtimeConfig", () => {
    it("happy path - gets realtime config", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetRealtimeConfig({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetRealtimeConfig({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GenerateTypescriptTypes
  // ============================================================================
  describe("v1GenerateTypescriptTypes", () => {
    it("happy path - generates typescript types", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GenerateTypescriptTypes({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GenerateTypescriptTypes({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetLegacySigningKey
  // ============================================================================
  describe("v1GetLegacySigningKey", () => {
    it("happy path - gets legacy signing key", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetLegacySigningKey({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetLegacySigningKey({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetProjectSigningKeys
  // ============================================================================
  describe("v1GetProjectSigningKeys", () => {
    it("happy path - gets project signing keys", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetProjectSigningKeys({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetProjectSigningKeys({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetProjectSigningKey
  // ============================================================================
  describe("v1GetProjectSigningKey", () => {
    it("error - NotFound for non-existent signing key", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      await runEffect(
        v1GetProjectSigningKey({ ref: proj.ref, id: FAKE_SIGNING_KEY_ID }).pipe(
          Effect.flip,
          Effect.map((e) => {
            const tag = (e as any)._tag;
            expect(["NotFound", "BadRequest"]).toContain(tag);
          }),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetProjectLegacyApiKeys
  // ============================================================================
  describe("v1GetProjectLegacyApiKeys", () => {
    it("happy path - gets legacy API keys", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetProjectLegacyApiKeys({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetProjectLegacyApiKeys({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetJitAccessConfig
  // ============================================================================
  describe("v1GetJitAccessConfig", () => {
    it("happy path - gets JIT access config", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetJitAccessConfig({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetJitAccessConfig({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetJitAccess
  // ============================================================================
  describe("v1GetJitAccess", () => {
    it("happy path - gets JIT access", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetJitAccess({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetJitAccess({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1ListJitAccess
  // ============================================================================
  describe("v1ListJitAccess", () => {
    it("happy path - lists JIT access", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1ListJitAccess({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1ListJitAccess({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1ListAllNetworkBans
  // ============================================================================
  describe("v1ListAllNetworkBans", () => {
    it("happy path - lists network bans", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1ListAllNetworkBans({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1ListAllNetworkBans({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });
});
