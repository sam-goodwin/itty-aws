import * as Schema from "effect/Schema";
import { LicenseSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

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
export type CreateOrgOutput = typeof CreateOrgOutput.Type;

// The operation
export const createOrg = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateOrgInput,
  outputSchema: CreateOrgOutput,
}));
