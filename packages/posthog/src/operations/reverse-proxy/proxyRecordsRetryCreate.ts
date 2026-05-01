import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ProxyRecordsRetryCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/organizations/{organization_id}/proxy_records/{id}/retry/",
    }),
  );
export type ProxyRecordsRetryCreateInput =
  typeof ProxyRecordsRetryCreateInput.Type;

// Output Schema
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
  });
export type ProxyRecordsRetryCreateOutput =
  typeof ProxyRecordsRetryCreateOutput.Type;

// The operation
/**
 * Retry provisioning a failed reverse proxy. Only available for proxies in 'erroring' or 'timed_out' status. Resets the proxy to 'waiting' status and restarts the provisioning workflow.
 *
 * @param id - A UUID string identifying this proxy record.
 */
export const proxyRecordsRetryCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProxyRecordsRetryCreateInput,
    outputSchema: ProxyRecordsRetryCreateOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
