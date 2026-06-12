import * as Schema from "effect/Schema";
import { LicenseSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const GetOrgInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v2/orgs/{id}" }));
export type GetOrgInput = typeof GetOrgInput.Type;

// Output Schema
export const GetOrgOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  defaultEdgeDeployment: Schema.optional(Schema.String),
  defaultRegion: Schema.optional(Schema.String),
  firstFailedPayment: Schema.optional(Schema.String),
  id: Schema.String,
  lastUsageSync: Schema.String,
  license: Schema.suspend(() => LicenseSchema),
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
export type GetOrgOutput = typeof GetOrgOutput.Type;

// The operation
export const getOrg = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetOrgInput,
  outputSchema: GetOrgOutput,
  errors: [NotFound] as const,
}));
