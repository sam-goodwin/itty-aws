import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface WebVitalsRetrieveInput {
  project_id: string;
  pathname: string;
}
export const WebVitalsRetrieveInput = /*@__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  pathname: Schema.String,
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/web_vitals/" }),
) as unknown as Schema.Codec<WebVitalsRetrieveInput>;

// Output Schema
export type WebVitalsRetrieveOutput = Record<string, unknown>;
export const WebVitalsRetrieveOutput =
  /*@__PURE__*/ Schema.Record(
    Schema.String,
    Schema.Unknown,
  ) as unknown as Schema.Codec<WebVitalsRetrieveOutput>;

// The operation
/**
 * Get web vitals for a specific pathname.
 * Toolbar accesses this via OAuth (handled by TeamAndOrgViewSetMixin.get_authenticators).
 *
 * @param pathname - Filter web vitals by pathname
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const webVitalsRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebVitalsRetrieveInput,
  outputSchema: WebVitalsRetrieveOutput,
}));
