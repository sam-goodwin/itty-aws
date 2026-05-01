import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ProxyRecordsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/organizations/{organization_id}/proxy_records/{id}/",
    }),
  );
export type ProxyRecordsRetrieveInput = typeof ProxyRecordsRetrieveInput.Type;

// Output Schema
export const ProxyRecordsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    domain: Schema.String,
    target_cname: Schema.String,
    status: Schema.Literals([
      "waiting",
      "issuing",
      "valid",
      "warning",
      "erroring",
      "deleting",
      "timed_out",
    ]),
    message: Schema.NullOr(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
    created_by: Schema.Number,
  });
export type ProxyRecordsRetrieveOutput = typeof ProxyRecordsRetrieveOutput.Type;

// The operation
/**
 * Get details of a specific reverse proxy by ID. Returns the full configuration including domain, CNAME target, and current provisioning status.
 *
 * @param id - A UUID string identifying this proxy record.
 */
export const proxyRecordsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProxyRecordsRetrieveInput,
    outputSchema: ProxyRecordsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
