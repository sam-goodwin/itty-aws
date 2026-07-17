import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LineageGetUpstreamRetrieveInput {
  project_id: string;
}
export const LineageGetUpstreamRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/lineage/get_upstream/",
    }),
  ) as unknown as Schema.Codec<LineageGetUpstreamRetrieveInput>;

// Output Schema
export type LineageGetUpstreamRetrieveOutput = void;
export const LineageGetUpstreamRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<LineageGetUpstreamRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const lineageGetUpstreamRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: LineageGetUpstreamRetrieveInput,
  outputSchema: LineageGetUpstreamRetrieveOutput,
}));
