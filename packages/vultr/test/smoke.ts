/**
 * Smoke test: exercises the Vultr SDK end-to-end against the live API.
 *
 * Run with:
 *   VULTR_API_KEY=<key> bun run packages/vultr/test/smoke.ts
 *
 * Covers:
 *   - credentials resolution via CredentialsFromEnv
 *   - HTTP client wiring via FetchHttpClient
 *   - Bearer auth header
 *   - parameter encoding (query string for listPlans?type=...)
 *   - response decoding (typed output schemas)
 *   - error matching (404 → NotFound via getInstance with bogus id)
 *   - paginated-ish list operations (current page only)
 *
 * Exits 0 on success. Logs each call result for visual confirmation.
 */
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";

import { CredentialsFromEnv } from "../src/credentials.ts";
import * as Errors from "../src/errors.ts";
import {
  getInstance,
  listDatabasePlans,
  listDatabases,
  listInstances,
  listPlans,
} from "../src/operations/index.ts";

const TestLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

const log = (label: string, data: unknown) =>
  Effect.sync(() => {
    console.log(`\n── ${label} ──`);
    console.log(JSON.stringify(data, null, 2));
  });

const program = Effect.gen(function* () {
  // 1. List shared-CPU plans (read-only, no resources created).
  const { plans = [] } = yield* listPlans({ type: "vc2" });
  yield* log("listPlans({ type: 'vc2' })", {
    count: plans.length,
    sample: plans.slice(0, 2).map((p) => ({
      id: p.id,
      vcpu_count: p.vcpu_count,
      ram_mb: p.ram,
      monthly_cost_usd: p.monthly_cost,
    })),
  });

  // 2. List instances on this account.
  const { instances = [] } = yield* listInstances({});
  yield* log("listInstances({})", {
    count: instances.length,
    sample: instances.slice(0, 3).map((i) => ({
      id: i.id,
      label: i.label,
      status: i.status,
      region: i.region,
      plan: i.plan,
    })),
  });

  // 3. List Postgres-capable managed-database plans.
  const { plans: dbPlans = [] } = yield* listDatabasePlans({ engine: "pg" });
  yield* log("listDatabasePlans({ engine: 'pg' })", {
    count: dbPlans.length,
    cheapest: dbPlans
      .filter((p) => p.supported_engines?.pg)
      .sort(
        (a, b) => (a.monthly_cost ?? Infinity) - (b.monthly_cost ?? Infinity),
      )
      .slice(0, 3)
      .map((p) => ({
        id: p.id,
        ram_mb: p.ram,
        disk_gb: p.disk,
        max_pg_connections: p.max_connections?.pg,
        monthly_cost_usd: p.monthly_cost,
      })),
  });

  // 4. List managed-database clusters on this account.
  const { databases = [] } = yield* listDatabases({});
  yield* log("listDatabases({})", {
    count: databases.length,
    sample: databases.slice(0, 3).map((d) => ({
      id: d.id,
      label: d.label,
      engine: d.database_engine,
      status: d.status,
    })),
  });

  // 5. Error path: getInstance with a bogus ID should fail with a typed error.
  const errorProbe = yield* getInstance({
    instanceId: "00000000-0000-0000-0000-000000000000",
  }).pipe(
    Effect.match({
      onSuccess: () => ({ ok: false, surprise: "bogus ID returned success" }),
      onFailure: (err) => ({
        ok: true,
        errorTag: (err as { _tag?: string })._tag,
        isNotFound: err instanceof Errors.NotFound,
        message: (err as { message?: string }).message,
      }),
    }),
  );
  yield* log("getInstance({ bogus id })", errorProbe);

  return { ok: true };
});

Effect.runPromiseExit(program.pipe(Effect.provide(TestLayer))).then((exit) => {
  if (exit._tag === "Success") {
    console.log("\n✅ smoke test passed");
    process.exit(0);
  }
  console.error("\n── FAILED ──");
  console.error(JSON.stringify(exit.cause, null, 2));
  process.exit(1);
});
