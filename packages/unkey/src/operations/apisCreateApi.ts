import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export const ApisCreateApiInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
}).pipe(T.Http({ method: "POST", path: "/v2/apis.createApi" }));
export type ApisCreateApiInput = typeof ApisCreateApiInput.Type;

// Output Schema
export const ApisCreateApiOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  meta: Schema.Struct({
    requestId: Schema.String,
  }),
  data: Schema.Struct({
    apiId: Schema.String,
  }),
});
export type ApisCreateApiOutput = typeof ApisCreateApiOutput.Type;

// The operation
/**
 * Create API namespace
 *
 * Create an API namespace for organizing keys by environment, service, or product.
 * Use this to separate production from development keys, isolate different services, or manage multiple products. Each API gets a unique identifier and dedicated infrastructure for secure key operations.
 * **Important**: API names must be unique within your workspace and cannot be changed after creation.
 * **Required Permissions**
 * Your root key must have one of the following permissions:
 * - `api.*.create_api` (to create APIs in any workspace)
 */
export const apisCreateApi = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApisCreateApiInput,
  outputSchema: ApisCreateApiOutput,
  errors: [BadRequest, Forbidden] as const,
}));
