import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export interface TasksPresenceCreateInput {
  id: string;
  project_id: string;
  device_id: string;
}
export const TasksPresenceCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    device_id: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/tasks/{id}/presence/",
    }),
  ) as unknown as Schema.Codec<TasksPresenceCreateInput>;

// Output Schema
export type TasksPresenceCreateOutput = void;
export const TasksPresenceCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TasksPresenceCreateOutput>;

// The operation
/**
 * Beacon presence for a device watching this task
 *
 * Idempotent upsert: marks the calling user + `device_id` as actively watching this task for the next ~60 seconds. While at least one device for the user has a non-expired presence row for this task, the push fanout will skip ALL of that user's other registered devices for task notifications — the contract is 'if any device is demonstrably watching, suppress the others'. Clients call this every ~30s while the task screen is foregrounded. `device_id` is the UUID of the caller's UserPushToken row.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tasksPresenceCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TasksPresenceCreateInput,
  outputSchema: TasksPresenceCreateOutput,
  errors: [NotFound] as const,
}));
