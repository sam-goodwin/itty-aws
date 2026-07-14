import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface HogFlowsUserBlastRadiusCreateInput {
  project_id: string;
  filters?: Record<string, unknown>;
  group_type_index?: number | null;
}
export const HogFlowsUserBlastRadiusCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    filters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    group_type_index: Schema.optional(Schema.NullOr(Schema.Number)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/hog_flows/user_blast_radius/",
    }),
  ) as unknown as Schema.Codec<HogFlowsUserBlastRadiusCreateInput>;

// Output Schema
export interface HogFlowsUserBlastRadiusCreateOutput {
  affected?: number;
  total?: number;
  limit?: number;
}
export const HogFlowsUserBlastRadiusCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    affected: Schema.optional(Schema.Number),
    total: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<HogFlowsUserBlastRadiusCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const hogFlowsUserBlastRadiusCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: HogFlowsUserBlastRadiusCreateInput,
    outputSchema: HogFlowsUserBlastRadiusCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
