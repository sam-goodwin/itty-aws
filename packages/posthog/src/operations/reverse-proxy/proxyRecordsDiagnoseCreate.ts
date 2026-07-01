import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ProxyRecordsDiagnoseCreateInput {
  id: string;
  organization_id: string;
}
export const ProxyRecordsDiagnoseCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/organizations/{organization_id}/proxy_records/{id}/diagnose/",
    }),
  ) as unknown as Schema.Codec<ProxyRecordsDiagnoseCreateInput>;

// Output Schema
export interface ProxyRecordsDiagnoseCreateOutput {
  ran_at: string;
  summary: {
    status: "healthy" | "warn" | "fail";
    primary_issue: string | null;
    next_action: string | null;
  };
  checks: {
    id: string;
    name: string;
    status: "passed" | "warned" | "failed" | "skipped";
    detail: string;
    remediation?: {
      type: "dns" | "config" | "wait" | "retry";
      summary: string;
      records: { name: string; type: string; value: string }[];
    } | null;
  }[];
}
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
        remediation: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              type: Schema.Literals(["dns", "config", "wait", "retry"]),
              summary: Schema.String,
              records: Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  type: Schema.String,
                  value: Schema.String,
                }),
              ),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ProxyRecordsDiagnoseCreateOutput>;

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
