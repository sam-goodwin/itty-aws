import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { Effect } from "effect";
import { runEffect, testRunId } from "./test";
import { AppsCreate } from "../src/operations/AppsCreate";
import { AppsShow } from "../src/operations/AppsShow";
import { AppsDelete } from "../src/operations/AppsDelete";
import { AppsList } from "../src/operations/AppsList";
import { AppCreateDeployToken } from "../src/operations/AppCreateDeployToken";
import { BadRequest, Forbidden, NotFound } from "../src/errors";

const appName = `distilled-fly-apps-${testRunId}`;

describe("Apps", () => {
  // Clean up before and after
  beforeAll(async () => {
    await runEffect(AppsDelete({ app_name: appName }).pipe(Effect.ignore));
  }, 30_000);

  afterAll(async () => {
    await runEffect(AppsDelete({ app_name: appName }).pipe(Effect.ignore));
  }, 30_000);

  describe("AppsCreate", () => {
    it("happy path - creates an app", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "alchemy-test", name: appName });
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent org", async () => {
      await runEffect(
        AppsCreate({ org_slug: "nonexistent-org-zzzzz" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      );
    }, 30_000);

    it("error - BadRequest when no org_slug provided", async () => {
      await runEffect(
        AppsCreate({ name: `test-no-org-${testRunId}` }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(BadRequest);
            expect(e._tag).toBe("BadRequest");
          }),
        ),
      );
    }, 30_000);
  });

  describe("AppsShow", () => {
    it("happy path - shows the created app", async () => {
      await runEffect(
        Effect.gen(function* () {
          const app = yield* AppsShow({ app_name: appName });
          expect(app.name).toBe(appName);
          expect(app.status).toBeDefined();
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        AppsShow({ app_name: "distilled-nonexistent-app-zzzzz" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      );
    }, 30_000);
  });

  describe("AppsList", () => {
    it("error - Forbidden for unauthorized org slug", async () => {
      await runEffect(
        AppsList({ org_slug: "personal" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(Forbidden);
            expect(e._tag).toBe("Forbidden");
          }),
        ),
      );
    }, 30_000);
  });

  describe("AppCreateDeployToken", () => {
    it("happy path - creates a deploy token for existing app", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* AppCreateDeployToken({
            app_name: appName,
            expiry: "1h",
          });
          expect(result.token).toBeDefined();
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        AppCreateDeployToken({ app_name: "distilled-nonexistent-app-zzzzz" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      );
    }, 30_000);
  });

  describe("AppsDelete", () => {
    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        AppsDelete({ app_name: "distilled-nonexistent-app-zzzzz" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      );
    }, 30_000);
  });
});
