#!/usr/bin/env bun
/**
 * convert — turn Railway's GraphQL introspection schema into a Smithy 2.0
 * JSON model.
 *
 * Input:  specs/distilled-spec-railway/specs/schema.json
 *         (a 24h mirror of `https://backboard.railway.com/graphql/v2`)
 * Output: .generated-specs/railway.json  (one Smithy model — Railway is a
 *         single GraphQL endpoint)
 *
 * The GraphQL→Smithy converter itself lives in
 * `@distilled.cloud/core/codegen/graphql`; this script is Railway's provider
 * config.
 *
 * ─── Why these settings ─────────────────────────────────────────────────────
 * • `maxNamespaceDepth: 1` — Railway's schema is flat. Every operation is a
 *   direct field of Query or Mutation (`projects`, `serviceCreate`, …), so
 *   there is no namespace object to expand through, and allowing expansion
 *   would misread an all-args-object return type as a namespace.
 *
 * • `relay` — Railway's list queries are textbook Relay connections
 *   (`after`/`first` in, `{ edges { cursor node }, pageInfo }` out), so the
 *   converter stamps `smithy.api#paginated` on them and the generated ops get
 *   `.pages()` / `.items()`.
 *
 * • Subscriptions are skipped by the converter: they are a websocket
 *   transport, not a `POST /graphql/v2` request/response pair.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import {
  convertGraphQLToSmithy,
  PRELUDE,
  readIntrospection,
} from "@distilled.cloud/core/codegen/graphql";

const ROOT = path.resolve(import.meta.dir, "..");
const SCHEMA_PATH = path.join(
  ROOT,
  "specs/distilled-spec-railway/specs/schema.json",
);
const OUT_DIR = path.join(ROOT, ".generated-specs");
const OUT_FILE = path.join(OUT_DIR, "railway.json");

const schema = readIntrospection(
  JSON.parse(fs.readFileSync(SCHEMA_PATH, "utf-8")),
);

const result = convertGraphQLToSmithy({
  schema,
  namespace: "com.railway.api",
  serviceName: "Railway",
  serviceTitle: "Railway",
  serviceDocumentation:
    "Railway's public API — a single GraphQL endpoint at " +
    "https://backboard.railway.com/graphql/v2. Every operation is " +
    "`POST /graphql/v2` with a `{ query, operationName, variables }` " +
    "envelope; responses unwrap `data.<responsePath>`. List queries are " +
    "Relay connections and expose `.pages()` / `.items()`.",
  endpoint: "/graphql/v2",
  traits: {
    operation: "com.railway.graphql#operation",
    responsePath: "com.railway.graphql#responsePath",
    nullable: "com.railway.graphql#nullable",
    nullableItems: "com.railway.graphql#nullableItems",
    payload: "com.railway.graphql#payload",
  },
  maxDepth: 2,
  // Flat schema — see the header note.
  maxNamespaceDepth: 1,
  skipDeprecated: true,
  /**
   * Railway's custom scalars. The structured ones (`EnvironmentConfig`,
   * `TemplateConfig`, service/deployment metadata blobs …) really are
   * freeform JSON on the wire and stay `Document`; the rest get concrete
   * prelude targets so operations don't dissolve into `unknown`.
   */
  customScalars: {
    DateTime: PRELUDE.String,
    BigInt: PRELUDE.String,
    Upload: PRELUDE.Document,
    JSON: PRELUDE.Document,
    CanvasConfig: PRELUDE.Document,
    DeploymentDiagnosis: PRELUDE.Document,
    DeploymentMeta: PRELUDE.Document,
    DisplayConfig: PRELUDE.Document,
    EnvironmentConfig: PRELUDE.Document,
    EnvironmentVariables: PRELUDE.Document,
    NotificationChannelConfig: PRELUDE.Document,
    NotificationPayload: PRELUDE.Document,
    RailpackInfo: PRELUDE.Document,
    SerializedTemplateConfig: PRELUDE.Document,
    ServiceInstanceLimit: PRELUDE.Document,
    SkippedResourceIds: PRELUDE.Document,
    SpendCommitmentFeatureId: PRELUDE.String,
    SubscriptionPlanLimit: PRELUDE.Document,
    SupportHealthMetrics: PRELUDE.Document,
    TemplateConfig: PRELUDE.Document,
    TemplateMetadata: PRELUDE.Document,
    TemplateServiceConfig: PRELUDE.Document,
    TemplateVolume: PRELUDE.Document,
  },
  relay: {
    after: "after",
    first: "first",
  },
});

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT_FILE, `${JSON.stringify(result.model, null, 2)}\n`);

console.log(
  `✅ Converted ${result.converted} GraphQL operations ` +
    `(${result.paginated} paginated, ${result.failed} failed, ` +
    `${result.shapeCount} shapes) → ${OUT_FILE}`,
);
