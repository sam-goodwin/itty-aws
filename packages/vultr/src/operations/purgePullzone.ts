import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const PurgePullzoneInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pullzoneId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/cdns/pull-zones/{pullzoneId}/purge" }));
export type PurgePullzoneInput = typeof PurgePullzoneInput.Type;

// Output Schema
export const PurgePullzoneOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PurgePullzoneOutput = typeof PurgePullzoneOutput.Type;

// The operation
/**
 * Purge CDN Pull Zone
 *
 * Clears cached content on server proxies so that visitors can get the latest page versions.
 * **Note:** This action may only be performed once every six hours.
 * **Note:** This action may take a few extra seconds to complete.
 *
 * @param pullzoneId - The [Pull Zone ID](#operation/list-pullzones).
 */
export const purgePullzone = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PurgePullzoneInput,
  outputSchema: PurgePullzoneOutput,
  errors: [BadRequest, NotFound] as const,
}));
