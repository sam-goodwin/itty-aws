import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ActionsDestroyInput {
  id: number;
  project_id: string;
  format?: "csv" | "json";
}
export const ActionsDestroyInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.Number.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
  format: Schema.optional(Schema.Literals(["csv", "json"])),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/projects/{project_id}/actions/{id}/",
  }),
) as unknown as Schema.Codec<ActionsDestroyInput>;

// Output Schema
export type ActionsDestroyOutput = void;
export const ActionsDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ActionsDestroyOutput>;

// The operation
/**
 * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
 *
 * @param id - A unique integer value identifying this action.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const actionsDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: ActionsDestroyInput,
  outputSchema: ActionsDestroyOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
