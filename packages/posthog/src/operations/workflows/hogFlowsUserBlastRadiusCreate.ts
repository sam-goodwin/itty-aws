import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const HogFlowsUserBlastRadiusCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    filters: Schema.Record(Schema.String, Schema.Unknown),
    group_type_index: Schema.optional(Schema.NullOr(Schema.Number)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/hog_flows/user_blast_radius/",
    }),
  );
export type HogFlowsUserBlastRadiusCreateInput =
  typeof HogFlowsUserBlastRadiusCreateInput.Type;

// Output Schema
export const HogFlowsUserBlastRadiusCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    affected: Schema.Number,
    total: Schema.Number,
  });
export type HogFlowsUserBlastRadiusCreateOutput =
  typeof HogFlowsUserBlastRadiusCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const hogFlowsUserBlastRadiusCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HogFlowsUserBlastRadiusCreateInput,
    outputSchema: HogFlowsUserBlastRadiusCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
