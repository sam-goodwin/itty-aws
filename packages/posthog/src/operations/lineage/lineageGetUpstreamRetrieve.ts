import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const LineageGetUpstreamRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/lineage/get_upstream/",
    }),
  );
export type LineageGetUpstreamRetrieveInput =
  typeof LineageGetUpstreamRetrieveInput.Type;

// Output Schema
export const LineageGetUpstreamRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LineageGetUpstreamRetrieveOutput =
  typeof LineageGetUpstreamRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const lineageGetUpstreamRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LineageGetUpstreamRetrieveInput,
    outputSchema: LineageGetUpstreamRetrieveOutput,
  }),
);
