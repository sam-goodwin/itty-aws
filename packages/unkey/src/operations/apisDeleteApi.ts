import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  PreconditionFailed,
} from "../errors.ts";

// Input Schema
export const ApisDeleteApiInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  apiId: Schema.String,
}).pipe(T.Http({ method: "POST", path: "/v2/apis.deleteApi" }));
export type ApisDeleteApiInput = typeof ApisDeleteApiInput.Type;

// Output Schema
export const ApisDeleteApiOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  meta: Schema.Struct({
    requestId: Schema.String,
  }),
  data: Schema.Unknown,
});
export type ApisDeleteApiOutput = typeof ApisDeleteApiOutput.Type;

// The operation
/**
 * Delete API namespace
 *
 * Permanently delete an API namespace and immediately invalidate all associated keys.
 * Use this for cleaning up development environments, retiring deprecated services, or removing unused resources.
 * All keys in the namespace are immediately marked as deleted and will fail verification with `code=NOT_FOUND`.
 * **Important**: This operation is immediate and permanent. Verify you have the correct API ID before deletion.
 * If delete protection is enabled, disable it first through the dashboard or API configuration.
 * **Required Permissions**
 * Your root key must have one of the following permissions:
 * - `api.*.delete_api` (to delete any API)
 * - `api.<api_id>.delete_api` (to delete a specific API)
 */
export const apisDeleteApi = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApisDeleteApiInput,
  outputSchema: ApisDeleteApiOutput,
  errors: [BadRequest, Forbidden, NotFound, PreconditionFailed] as const,
}));
