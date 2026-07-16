import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ProxyRecordsDestroyInput {
  id: string;
  organization_id: string;
}
export const ProxyRecordsDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/organizations/{organization_id}/proxy_records/{id}/",
    }),
  ) as unknown as Schema.Codec<ProxyRecordsDestroyInput>;

// Output Schema
export type ProxyRecordsDestroyOutput = void;
export const ProxyRecordsDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ProxyRecordsDestroyOutput>;

// The operation
/**
 * Delete a reverse proxy. For proxies in 'waiting', 'erroring', or 'timed_out' status, the record is deleted immediately. For active proxies, a deletion workflow is started to clean up the provisioned infrastructure.
 *
 * @param id - A UUID string identifying this proxy record.
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const proxyRecordsDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProxyRecordsDestroyInput,
  outputSchema: ProxyRecordsDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
