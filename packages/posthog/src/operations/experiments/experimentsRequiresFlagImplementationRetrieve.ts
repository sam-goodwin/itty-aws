import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const ExperimentsRequiresFlagImplementationRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/experiments/requires_flag_implementation/",
    }),
  );
export type ExperimentsRequiresFlagImplementationRetrieveInput =
  typeof ExperimentsRequiresFlagImplementationRetrieveInput.Type;

// Output Schema
export const ExperimentsRequiresFlagImplementationRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ExperimentsRequiresFlagImplementationRetrieveOutput =
  typeof ExperimentsRequiresFlagImplementationRetrieveOutput.Type;

// The operation
/**
 * Mixin for ViewSets to handle ApprovalRequired exceptions from decorated serializers.
 * This mixin intercepts ApprovalRequired exceptions raised by the @approval_gate decorator
 * on serializer methods and converts them into proper HTTP 409 Conflict responses with
 * change request details.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const experimentsRequiresFlagImplementationRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExperimentsRequiresFlagImplementationRetrieveInput,
    outputSchema: ExperimentsRequiresFlagImplementationRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
