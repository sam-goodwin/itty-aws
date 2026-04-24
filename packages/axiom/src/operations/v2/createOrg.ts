import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";

// Input Schema
export const CreateOrgInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  edgeDeployment: Schema.optional(Schema.String),
  name: Schema.String,
}).pipe(T.Http({ method: "POST", path: "/v2/orgs" }));
export type CreateOrgInput = typeof CreateOrgInput.Type;

// Output Schema
export const CreateOrgOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  defaultEdgeDeployment: Schema.optional(Schema.String),
  defaultRegion: Schema.optional(Schema.String),
  firstFailedPayment: Schema.optional(Schema.String),
  id: Schema.String,
  lastUsageSync: Schema.String,
  license: Schema.Struct({
    apiRateLimitPerSecond: Schema.optional(Schema.Number),
    billingPeriodEnd: Schema.optional(Schema.String),
    billingPeriodStart: Schema.optional(Schema.String),
    defaultEdgeDeployment: Schema.optional(Schema.String),
    defaultRegion: Schema.optional(Schema.String),
    edgeDeployments: Schema.optional(Schema.Array(Schema.String)),
    expiresAt: Schema.optional(Schema.NullOr(Schema.String)),
    features: Schema.optional(Schema.Record(Schema.String, Schema.Boolean)),
    id: Schema.String,
    issuedAt: Schema.optional(Schema.String),
    issuedTo: Schema.optional(Schema.String),
    issuer: Schema.optional(Schema.String),
    maxAuditWindowSeconds: Schema.optional(Schema.Number),
    maxDatasets: Schema.optional(Schema.Number),
    maxEndpoints: Schema.optional(Schema.Number),
    maxFields: Schema.optional(Schema.Number),
    maxMonitors: Schema.optional(Schema.Number),
    maxQueryWindowSeconds: Schema.optional(Schema.Number),
    maxUsers: Schema.optional(Schema.Number),
    monthlyIngestGb: Schema.optional(Schema.Number),
    monthlyQueryGbHours: Schema.optional(Schema.Number),
    regions: Schema.optional(Schema.Array(Schema.String)),
    storageAllowanceGB: Schema.optional(Schema.Number),
    tier: Schema.Literals([
      "personal",
      "basicDirect",
      "teamMonthlyDirect",
      "teamMonthlyAws",
      "axiomCloud",
      "teamPlus",
      "enterprise",
      "comped",
    ]),
    validFrom: Schema.optional(Schema.String),
    withAuths: Schema.optional(Schema.Array(Schema.String)),
  }),
  metaCreated: Schema.optional(Schema.String),
  metaModified: Schema.optional(Schema.String),
  metaVersion: Schema.optional(Schema.String),
  name: Schema.String,
  paymentStatus: Schema.Literals(["na", "failed", "success", "blocked"]),
  plan: Schema.Literals([
    "personal",
    "basicDirect",
    "teamMonthlyDirect",
    "teamMonthlyAws",
    "axiomCloud",
    "teamPlus",
    "enterprise",
    "comped",
  ]),
  planCreated: Schema.String,
  primaryEmail: Schema.String,
  role: Schema.optional(Schema.String),
});
export type CreateOrgOutput = typeof CreateOrgOutput.Type;

// The operation
export const createOrg = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateOrgInput,
  outputSchema: CreateOrgOutput,
}));
