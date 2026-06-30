import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const ProxyRecordsDiagnoseCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/organizations/{organization_id}/proxy_records/{id}/diagnose/",
    }),
  );
export type ProxyRecordsDiagnoseCreateInput =
  typeof ProxyRecordsDiagnoseCreateInput.Type;

// Output Schema
export const ProxyRecordsDiagnoseCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ran_at: Schema.String,
    summary: Schema.Struct({
      status: Schema.Literals(["healthy", "warn", "fail"]),
      primary_issue: Schema.NullOr(Schema.String),
      next_action: Schema.NullOr(Schema.String),
    }),
    checks: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        status: Schema.Literals(["passed", "warned", "failed", "skipped"]),
        detail: Schema.String,
        remediation: Schema.optional(Schema.Unknown),
      }),
    ),
  });
export type ProxyRecordsDiagnoseCreateOutput =
  typeof ProxyRecordsDiagnoseCreateOutput.Type;

// The operation
/**
 * Run a deep diagnostic on a reverse proxy. Inspects DNS CNAME alignment, the certificate provider's hostname state, CAA records walked up the customer's DNS tree, HTTP-01 challenge reachability, a live event probe, and certificate expiry. Returns a structured report with each check's status and concrete remediation steps (e.g. exact DNS records to add). Use this to debug why a proxy is stuck or erroring.
 *
 * @param id - A UUID string identifying this proxy record.
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const proxyRecordsDiagnoseCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProxyRecordsDiagnoseCreateInput,
    outputSchema: ProxyRecordsDiagnoseCreateOutput,
  }),
);
