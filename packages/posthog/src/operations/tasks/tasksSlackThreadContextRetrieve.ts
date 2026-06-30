import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const TasksSlackThreadContextRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    url: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/tasks/slack_thread_context/",
    }),
  );
export type TasksSlackThreadContextRetrieveInput =
  typeof TasksSlackThreadContextRetrieveInput.Type;

// Output Schema
export const TasksSlackThreadContextRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    thread: Schema.Struct({
      url: Schema.String,
      channel: Schema.String,
      thread_ts: Schema.String,
      slack_workspace_id: Schema.NullOr(Schema.String),
      mentioning_slack_user_id: Schema.NullOr(Schema.String),
    }),
    task: Schema.Unknown,
    runs: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        status: Schema.String,
        created_at: Schema.String,
        completed_at: Schema.NullOr(Schema.String),
        sandbox_url: Schema.NullOr(Schema.String),
        pr_url: Schema.NullOr(Schema.String),
        error_message: Schema.NullOr(Schema.String),
        task_processing_workflow_id: Schema.String,
        task_processing_workflow_url: Schema.NullOr(Schema.String),
        mention_workflow_id: Schema.NullOr(Schema.String),
        mention_workflow_url: Schema.NullOr(Schema.String),
        task_view_url: Schema.String,
        log_url: Schema.NullOr(Schema.String),
        repo_research: Schema.Unknown,
      }),
    ),
  });
export type TasksSlackThreadContextRetrieveOutput =
  typeof TasksSlackThreadContextRetrieveOutput.Type;

// The operation
/**
 * Resolve a Slack thread to its task, runs, and Temporal workflows
 *
 * PostHog-internal debug tool. Resolves a Slack permalink to the linked task, its runs, the task-processing and mention-dispatch Temporal workflow ids/URLs, and presigned log URLs.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param url - Full Slack permalink to any message in the thread (e.g. https://posthog.slack.com/archives/C…/p1779956938619299). Replies inside the thread are accepted too — the `thread_ts` query param (when present) takes precedence over the in-path message ts.
 */
export const tasksSlackThreadContextRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TasksSlackThreadContextRetrieveInput,
    outputSchema: TasksSlackThreadContextRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
