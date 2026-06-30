import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface TasksSlackThreadContextRetrieveInput {
  project_id: string;
  url: string;
}
export const TasksSlackThreadContextRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    url: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/tasks/slack_thread_context/",
    }),
  ) as unknown as Schema.Codec<TasksSlackThreadContextRetrieveInput>;

// Output Schema
export interface TasksSlackThreadContextRetrieveOutput {
  thread: {
    url: string;
    channel: string;
    thread_ts: string;
    slack_workspace_id: string | null;
    mentioning_slack_user_id: string | null;
  };
  task: {
    id: string;
    team_id: number;
    title: string;
    repository: string | null;
    origin_product: string;
    created_at: string;
    url: string;
  } | null;
  runs: {
    id: string;
    status: string;
    created_at: string;
    completed_at: string | null;
    sandbox_url: string | null;
    pr_url: string | null;
    error_message: string | null;
    task_processing_workflow_id: string;
    task_processing_workflow_url: string | null;
    mention_workflow_id: string | null;
    mention_workflow_url: string | null;
    task_view_url: string;
    log_url: string | null;
    repo_research: {
      task_id: string;
      run_id: string;
      status: string | null;
      task_processing_workflow_id: string;
      task_processing_workflow_url: string | null;
      sandbox_url: string | null;
      task_view_url: string;
      log_url: string | null;
    } | null;
  }[];
}
export const TasksSlackThreadContextRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    thread: Schema.Struct({
      url: Schema.String,
      channel: Schema.String,
      thread_ts: Schema.String,
      slack_workspace_id: Schema.NullOr(Schema.String),
      mentioning_slack_user_id: Schema.NullOr(Schema.String),
    }),
    task: Schema.NullOr(
      Schema.Struct({
        id: Schema.String,
        team_id: Schema.Number,
        title: Schema.String,
        repository: Schema.NullOr(Schema.String),
        origin_product: Schema.String,
        created_at: Schema.String,
        url: Schema.String,
      }),
    ),
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
        repo_research: Schema.NullOr(
          Schema.Struct({
            task_id: Schema.String,
            run_id: Schema.String,
            status: Schema.NullOr(Schema.String),
            task_processing_workflow_id: Schema.String,
            task_processing_workflow_url: Schema.NullOr(Schema.String),
            sandbox_url: Schema.NullOr(Schema.String),
            task_view_url: Schema.String,
            log_url: Schema.NullOr(Schema.String),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<TasksSlackThreadContextRetrieveOutput>;

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
