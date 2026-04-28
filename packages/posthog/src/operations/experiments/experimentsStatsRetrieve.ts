import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const ExperimentsStatsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/experiments/stats/",
    }),
  );
export type ExperimentsStatsRetrieveInput =
  typeof ExperimentsStatsRetrieveInput.Type;

// Output Schema
export const ExperimentsStatsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ExperimentsStatsRetrieveOutput =
  typeof ExperimentsStatsRetrieveOutput.Type;

// The operation
/**
 * Mixin for ViewSets to handle ApprovalRequired exceptions from decorated serializers.
 * This mixin intercepts ApprovalRequired exceptions raised by the @approval_gate decorator
 * on serializer methods and converts them into proper HTTP 409 Conflict responses with
 * change request details.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const experimentsStatsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ExperimentsStatsRetrieveInput,
    outputSchema: ExperimentsStatsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
