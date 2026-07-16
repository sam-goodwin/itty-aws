import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ScheduledChangesDestroyInput {
  id: number;
  project_id: string;
}
export const ScheduledChangesDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/scheduled_changes/{id}/",
    }),
  ) as unknown as Schema.Codec<ScheduledChangesDestroyInput>;

// Output Schema
export type ScheduledChangesDestroyOutput = void;
export const ScheduledChangesDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ScheduledChangesDestroyOutput>;

// The operation
/**
 * Create, read, update and delete scheduled changes.
 *
 * @param id - A unique integer value identifying this scheduled change.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const scheduledChangesDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: ScheduledChangesDestroyInput,
  outputSchema: ScheduledChangesDestroyOutput,
}));
