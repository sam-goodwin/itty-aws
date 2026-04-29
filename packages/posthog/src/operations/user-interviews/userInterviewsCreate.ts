import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const UserInterviewsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
    created_by: Schema.Struct({
      id: Schema.Number,
      uuid: Schema.String,
      distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
      first_name: Schema.optional(Schema.String),
      last_name: Schema.optional(Schema.String),
      email: Schema.String,
      is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
      hedgehog_config: Schema.NullOr(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      role_at_organization: Schema.optional(Schema.Unknown),
    }),
    created_at: Schema.String,
    interviewee_emails: Schema.optional(Schema.Array(Schema.String)),
    transcript: Schema.String,
    summary: Schema.optional(Schema.String),
    audio: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/user_interviews/",
    }),
  );
export type UserInterviewsCreateInput = typeof UserInterviewsCreateInput.Type;

// Output Schema
export const UserInterviewsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    created_by: Schema.Struct({
      id: Schema.Number,
      uuid: Schema.String,
      distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
      first_name: Schema.optional(Schema.String),
      last_name: Schema.optional(Schema.String),
      email: Schema.String,
      is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
      hedgehog_config: Schema.NullOr(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      role_at_organization: Schema.optional(Schema.Unknown),
    }),
    created_at: Schema.String,
    interviewee_emails: Schema.optional(Schema.Array(Schema.String)),
    transcript: Schema.String,
    summary: Schema.optional(Schema.String),
    audio: Schema.String,
  });
export type UserInterviewsCreateOutput = typeof UserInterviewsCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const userInterviewsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UserInterviewsCreateInput,
    outputSchema: UserInterviewsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
