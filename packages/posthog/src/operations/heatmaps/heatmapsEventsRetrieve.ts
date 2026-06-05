import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const HeatmapsEventsRetrieveInput = /*@__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/projects/{project_id}/heatmaps/events/",
  }),
);
export type HeatmapsEventsRetrieveInput =
  typeof HeatmapsEventsRetrieveInput.Type;

// Output Schema
export const HeatmapsEventsRetrieveOutput = Schema.Void;
export type HeatmapsEventsRetrieveOutput =
  typeof HeatmapsEventsRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const heatmapsEventsRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: HeatmapsEventsRetrieveInput,
  outputSchema: HeatmapsEventsRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
