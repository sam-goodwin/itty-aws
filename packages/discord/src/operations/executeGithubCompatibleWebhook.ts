import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ExecuteGithubCompatibleWebhookInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webhook_id: Schema.String.pipe(T.PathParam()),
    webhook_token: Schema.String.pipe(T.PathParam()),
    wait: Schema.optional(Schema.Boolean),
    thread_id: Schema.optional(Schema.String),
    action: Schema.optional(Schema.NullOr(Schema.String)),
    ref: Schema.optional(Schema.NullOr(Schema.String)),
    ref_type: Schema.optional(Schema.NullOr(Schema.String)),
    comment: Schema.optional(Schema.Unknown),
    issue: Schema.optional(Schema.Unknown),
    pull_request: Schema.optional(Schema.Unknown),
    repository: Schema.optional(Schema.Unknown),
    forkee: Schema.optional(Schema.Unknown),
    sender: Schema.Struct({
      id: Schema.Number,
      login: Schema.String,
      html_url: Schema.String,
      avatar_url: Schema.String,
    }),
    member: Schema.optional(Schema.Unknown),
    release: Schema.optional(Schema.Unknown),
    head_commit: Schema.optional(Schema.Unknown),
    commits: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.Struct({
            id: Schema.String,
            url: Schema.String,
            message: Schema.String,
            author: Schema.Struct({
              username: Schema.optional(Schema.NullOr(Schema.String)),
              name: Schema.String,
            }),
          }),
        ),
      ),
    ),
    forced: Schema.optional(Schema.NullOr(Schema.Boolean)),
    compare: Schema.optional(Schema.NullOr(Schema.String)),
    review: Schema.optional(Schema.Unknown),
    check_run: Schema.optional(Schema.Unknown),
    check_suite: Schema.optional(Schema.Unknown),
    discussion: Schema.optional(Schema.Unknown),
    answer: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/webhooks/{webhook_id}/{webhook_token}/github",
    }),
  );
export type ExecuteGithubCompatibleWebhookInput =
  typeof ExecuteGithubCompatibleWebhookInput.Type;

// Output Schema
export const ExecuteGithubCompatibleWebhookOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ExecuteGithubCompatibleWebhookOutput =
  typeof ExecuteGithubCompatibleWebhookOutput.Type;

// The operation
export const executeGithubCompatibleWebhook =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExecuteGithubCompatibleWebhookInput,
    outputSchema: ExecuteGithubCompatibleWebhookOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
