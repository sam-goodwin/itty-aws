import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ApisGetApiInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  apiId: Schema.String,
}).pipe(T.Http({ method: "POST", path: "/v2/apis.getApi" }));
export type ApisGetApiInput = typeof ApisGetApiInput.Type;

// Output Schema
export const ApisGetApiOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  meta: Schema.Struct({
    requestId: Schema.String,
  }),
  data: Schema.Struct({
    id: Schema.String,
    name: Schema.String,
  }),
});
export type ApisGetApiOutput = typeof ApisGetApiOutput.Type;

// The operation
/**
 * Get API namespace
 *
 * Retrieve basic information about an API namespace including its ID and name.
 * Use this to verify an API exists before performing operations, get the human-readable name when you only have the API ID, or confirm access to a specific namespace. For detailed key information, use the `listKeys` endpoint instead.
 * **Required Permissions**
 * Your root key must have one of the following permissions:
 * - `api.*.read_api` (to read any API)
 * - `api.<api_id>.read_api` (to read a specific API)
 */
export const apisGetApi = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApisGetApiInput,
  outputSchema: ApisGetApiOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
