import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ElementsStatsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/elements/stats/",
    }),
  );
export type ElementsStatsRetrieveInput = typeof ElementsStatsRetrieveInput.Type;

// Output Schema
export const ElementsStatsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ElementsStatsRetrieveOutput =
  typeof ElementsStatsRetrieveOutput.Type;

// The operation
/**
 * The original version of this API always and only returned $autocapture elements
 * If no include query parameter is sent this remains true.
 * Now, you can pass a combination of include query parameters to get different types of elements
 * Currently only $autocapture and $rageclick and $dead_click are supported
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const elementsStatsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ElementsStatsRetrieveInput,
    outputSchema: ElementsStatsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
