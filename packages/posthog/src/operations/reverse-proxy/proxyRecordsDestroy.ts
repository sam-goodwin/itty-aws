import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ProxyRecordsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/organizations/{organization_id}/proxy_records/{id}/",
    }),
  );
export type ProxyRecordsDestroyInput = typeof ProxyRecordsDestroyInput.Type;

// Output Schema
export const ProxyRecordsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ProxyRecordsDestroyOutput = typeof ProxyRecordsDestroyOutput.Type;

// The operation
/**
 * Delete a reverse proxy. For proxies in 'waiting', 'erroring', or 'timed_out' status, the record is deleted immediately. For active proxies, a deletion workflow is started to clean up the provisioned infrastructure.
 *
 * @param id - A UUID string identifying this proxy record.
 */
export const proxyRecordsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProxyRecordsDestroyInput,
  outputSchema: ProxyRecordsDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
