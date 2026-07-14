import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface UserInterviewTopicsSendInvitesCreateInput {
  id: string;
  project_id: string;
  subject?: string;
  reply_to?: string;
  send_async?: boolean;
}
export const UserInterviewTopicsSendInvitesCreateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    subject: Schema.optional(Schema.String),
    reply_to: Schema.optional(Schema.String),
    send_async: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/user_interview_topics/{id}/send_invites/",
    }),
  ) as unknown as Schema.Codec<UserInterviewTopicsSendInvitesCreateInput>;

// Output Schema
export interface UserInterviewTopicsSendInvitesCreateOutput {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
    interviewee_identifier: string;
    email?: string | null;
    interview_url: string;
    sent: boolean;
    reason?: string;
  }[];
}
export const UserInterviewTopicsSendInvitesCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        interviewee_identifier: Schema.String,
        email: Schema.optional(Schema.NullOr(Schema.String)),
        interview_url: Schema.String,
        sent: Schema.Boolean,
        reason: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<UserInterviewTopicsSendInvitesCreateOutput>;

// The operation
/**
 * Generate (if needed) and email a personalized public interview link to every targeted interviewee on this topic whose identifier is an email address. Distinct-ID-only interviewees are skipped and surfaced in the response. Each invite is keyed on the underlying SharingConfiguration so re-runs after token rotation produce a fresh send.
 *
 * @param id - A UUID string identifying this user interview topic.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const userInterviewTopicsSendInvitesCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: UserInterviewTopicsSendInvitesCreateInput,
    outputSchema: UserInterviewTopicsSendInvitesCreateOutput,
  }));
