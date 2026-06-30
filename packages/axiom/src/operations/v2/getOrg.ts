import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export interface GetOrgInput {
  id: string;
}
export const GetOrgInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v2/orgs/{id}" }),
) as unknown as Schema.Codec<GetOrgInput>;

// Output Schema
export interface GetOrgOutput {
  defaultEdgeDeployment?: string;
  firstFailedPayment?: string;
  id: string;
  lastUsageSync: string;
  license: {
    apiRateLimitPerSecond?: number;
    billingPeriodEnd?: string;
    billingPeriodStart?: string;
    defaultEdgeDeployment?: string;
    edgeDeployments?: ReadonlyArray<string>;
    expiresAt?: string | null;
    features?: Record<string, boolean>;
    id: string;
    issuedAt?: string;
    issuedTo?: string;
    issuer?: string;
    maxAuditWindowSeconds?: number;
    maxDatasets?: number;
    maxEndpoints?: number;
    maxFields?: number;
    maxMonitors?: number;
    maxQueryWindowSeconds?: number;
    maxUsers?: number;
    monthlyIngestGb?: number;
    monthlyQueryGbHours?: number;
    storageAllowanceGB?: number;
    tier:
      | "personal"
      | "teamMonthlyAws"
      | "axiomCloud"
      | "teamPlus"
      | "enterprise"
      | "comped"
      | "accelerator";
    validFrom?: string;
    withAuths?: ReadonlyArray<string>;
  };
  metaCreated?: string;
  metaModified?: string;
  metaVersion?: string;
  name: string;
  paymentStatus: "na" | "failed" | "success" | "blocked";
  plan:
    | "personal"
    | "teamMonthlyAws"
    | "axiomCloud"
    | "teamPlus"
    | "enterprise"
    | "comped"
    | "accelerator";
  planCreated: string;
  primaryEmail: string;
  role?: string;
}
export const GetOrgOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  defaultEdgeDeployment: Schema.optional(Schema.String),
  firstFailedPayment: Schema.optional(Schema.String),
  id: Schema.String,
  lastUsageSync: Schema.String,
  license: Schema.Struct({
    apiRateLimitPerSecond: Schema.optional(Schema.Number),
    billingPeriodEnd: Schema.optional(Schema.String),
    billingPeriodStart: Schema.optional(Schema.String),
    defaultEdgeDeployment: Schema.optional(Schema.String),
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
    storageAllowanceGB: Schema.optional(Schema.Number),
    tier: Schema.Literals([
      "personal",
      "teamMonthlyAws",
      "axiomCloud",
      "teamPlus",
      "enterprise",
      "comped",
      "accelerator",
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
    "teamMonthlyAws",
    "axiomCloud",
    "teamPlus",
    "enterprise",
    "comped",
    "accelerator",
  ]),
  planCreated: Schema.String,
  primaryEmail: Schema.String,
  role: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<GetOrgOutput>;

// The operation
export const getOrg = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetOrgInput,
  outputSchema: GetOrgOutput,
  errors: [NotFound] as const,
}));
