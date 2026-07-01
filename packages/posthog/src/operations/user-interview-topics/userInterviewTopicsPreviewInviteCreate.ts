import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface UserInterviewTopicsPreviewInviteCreateInput {
  id: string;
  project_id: string;
  interviewee_identifier?: string;
}
export const UserInterviewTopicsPreviewInviteCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    interviewee_identifier: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/user_interview_topics/{id}/preview_invite/",
    }),
  ) as unknown as Schema.Codec<UserInterviewTopicsPreviewInviteCreateInput>;

// Output Schema
export interface UserInterviewTopicsPreviewInviteCreateOutput {
  interviewee_identifier: string;
  user_name: string;
  email: string | null;
  subject: string;
  html: string;
  interview_url: string;
  emailable: boolean;
  is_preview_link: boolean;
}
export const UserInterviewTopicsPreviewInviteCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interviewee_identifier: Schema.String,
    user_name: Schema.String,
    email: Schema.NullOr(Schema.String),
    subject: Schema.String,
    html: Schema.String,
    interview_url: Schema.String,
    emailable: Schema.Boolean,
    is_preview_link: Schema.Boolean,
  }) as unknown as Schema.Codec<UserInterviewTopicsPreviewInviteCreateOutput>;

// The operation
/**
 * Render the invite email exactly as a specific targeted interviewee would receive it — personalized subject and body — without sending anything and without creating or reading any share links. Pass `interviewee_identifier` to preview for a particular person, or omit it to preview for the first targeted interviewee. The body always shows an illustrative placeholder link (`is_preview_link: true`), never a live interview URL.
 *
 * @param id - A UUID string identifying this user interview topic.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const userInterviewTopicsPreviewInviteCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserInterviewTopicsPreviewInviteCreateInput,
    outputSchema: UserInterviewTopicsPreviewInviteCreateOutput,
  }));
