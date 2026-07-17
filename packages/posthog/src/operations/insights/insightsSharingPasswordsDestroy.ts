import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface InsightsSharingPasswordsDestroyInput {
  insight_id: number;
  password_id: string;
  project_id: string;
}
export const InsightsSharingPasswordsDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    insight_id: Schema.Number.pipe(T.PathParam()),
    password_id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/insights/{insight_id}/sharing/passwords/{password_id}/",
    }),
  ) as unknown as Schema.Codec<InsightsSharingPasswordsDestroyInput>;

// Output Schema
export type InsightsSharingPasswordsDestroyOutput = void;
export const InsightsSharingPasswordsDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<InsightsSharingPasswordsDestroyOutput>;

// The operation
/**
 * Delete a password from the sharing configuration.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const insightsSharingPasswordsDestroy =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: InsightsSharingPasswordsDestroyInput,
    outputSchema: InsightsSharingPasswordsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
