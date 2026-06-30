import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ProxyRecordsRetryCreateInput {
  id: string;
  organization_id: string;
}
export const ProxyRecordsRetryCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/organizations/{organization_id}/proxy_records/{id}/retry/",
    }),
  ) as unknown as Schema.Codec<ProxyRecordsRetryCreateInput>;

// Output Schema
export interface ProxyRecordsRetryCreateOutput {
  id?: string;
  domain?: string;
  target_cname?: string;
  status?:
    | "waiting"
    | "issuing"
    | "valid"
    | "warning"
    | "erroring"
    | "deleting"
    | "timed_out";
  message?: string | null;
  created_at?: string;
  updated_at?: string;
  created_by?: number;
}
export const ProxyRecordsRetryCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    target_cname: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals([
        "waiting",
        "issuing",
        "valid",
        "warning",
        "erroring",
        "deleting",
        "timed_out",
      ]),
    ),
    message: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    created_by: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<ProxyRecordsRetryCreateOutput>;

// The operation
/**
 * Retry provisioning a failed reverse proxy. Only available for proxies in 'erroring' or 'timed_out' status. Resets the proxy to 'waiting' status and restarts the provisioning workflow.
 *
 * @param id - A UUID string identifying this proxy record.
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const proxyRecordsRetryCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProxyRecordsRetryCreateInput,
    outputSchema: ProxyRecordsRetryCreateOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
