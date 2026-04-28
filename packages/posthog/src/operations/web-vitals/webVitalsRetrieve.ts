import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const WebVitalsRetrieveInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    project_id: Schema.String.pipe(T.PathParam()),
    pathname: Schema.String,
  },
).pipe(
  T.Http({ method: "GET", path: "/api/environments/{project_id}/web_vitals/" }),
);
export type WebVitalsRetrieveInput = typeof WebVitalsRetrieveInput.Type;

// Output Schema
export const WebVitalsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(Schema.String, Schema.Unknown);
export type WebVitalsRetrieveOutput = typeof WebVitalsRetrieveOutput.Type;

// The operation
/**
 * Get web vitals for a specific pathname.
 * Toolbar accesses this via OAuth (handled by TeamAndOrgViewSetMixin.get_authenticators).
 *
 * @param pathname - Filter web vitals by pathname
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const webVitalsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WebVitalsRetrieveInput,
  outputSchema: WebVitalsRetrieveOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
