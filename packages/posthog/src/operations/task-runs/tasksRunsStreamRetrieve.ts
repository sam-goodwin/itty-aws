import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface TasksRunsStreamRetrieveInput {
  id: string;
  project_id: string;
  task_id: string;
  start?: string;
}
export const TasksRunsStreamRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    task_id: Schema.String.pipe(T.PathParam()),
    start: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/tasks/{task_id}/runs/{id}/stream/",
    }),
  ) as unknown as Schema.Codec<TasksRunsStreamRetrieveInput>;

// Output Schema
export type TasksRunsStreamRetrieveOutput = void;
export const TasksRunsStreamRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<TasksRunsStreamRetrieveOutput>;

// The operation
/**
 * Server-Sent Events stream of task run events. Events carry an `id:` line (a Redis stream id) usable as a resume cursor.
 * The server caps each connection at 900 seconds: it emits `event: end` with `data: {"type": "rotated"}` and closes. This does NOT mean the run finished — reconnect with the `Last-Event-ID` header set to the last received event id to resume without gaps or duplicates. Only treat the stream as complete when the run itself reaches a terminal status.
 * `?start=latest` consumers must also carry `Last-Event-ID` across reconnects: reconnecting without it re-resolves to the then-current latest event, silently skipping anything published while disconnected.
 * **SDK consumers**: do not call the generated fetch wrapper for this path — it will buffer the entire stream. Use the URL builder (`getTasksRunsStreamRetrieveUrl`) with a streaming `fetch`/`EventSource`-style consumer and the `Last-Event-ID` header instead.
 *
 * @param Last-Event-ID - Resume cursor: the `id:` of the last event received on a previous connection. Events strictly after it are delivered.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param start - Set to `latest` to skip the event backlog and only receive events published after connecting.
 */
export const tasksRunsStreamRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: TasksRunsStreamRetrieveInput,
  outputSchema: TasksRunsStreamRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
