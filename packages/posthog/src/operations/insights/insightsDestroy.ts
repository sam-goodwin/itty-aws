import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface InsightsDestroyInput {
  id: string;
  project_id: string;
  format?: "csv" | "json";
}
export const InsightsDestroyInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
  format: Schema.optional(Schema.Literals(["csv", "json"])),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/projects/{project_id}/insights/{id}/",
  }),
) as unknown as Schema.Codec<InsightsDestroyInput>;

// Output Schema
export type InsightsDestroyOutput = void;
export const InsightsDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<InsightsDestroyOutput>;

// The operation
/**
 * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
 *
 * @param id - Numeric primary key or 8-character `short_id` (for example `AaVQ8Ijw`) identifying the insight.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const insightsDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: InsightsDestroyInput,
  outputSchema: InsightsDestroyOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
