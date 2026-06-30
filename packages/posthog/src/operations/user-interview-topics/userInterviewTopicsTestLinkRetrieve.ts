import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const UserInterviewTopicsTestLinkRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/user_interview_topics/{id}/test_link/",
    }),
  );
export type UserInterviewTopicsTestLinkRetrieveInput =
  typeof UserInterviewTopicsTestLinkRetrieveInput.Type;

// Output Schema
export const UserInterviewTopicsTestLinkRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interview_url: Schema.String,
    latest_test_interview: Schema.Unknown,
  });
export type UserInterviewTopicsTestLinkRetrieveOutput =
  typeof UserInterviewTopicsTestLinkRetrieveOutput.Type;

// The operation
/**
 * Return the calling user's personal dogfood interview link for this topic, plus the latest test interview they have recorded against it. Lazily get-or-creates a per-caller IntervieweeContext + enabled SharingConfiguration the first time it's called, then returns the same stable URL on subsequent calls. The caller's identifier is intentionally not added to the topic's targeting arrays — each user dogfoods under their own row, so test calls never mint a public share token on someone else's behalf.
 *
 * @param id - A UUID string identifying this user interview topic.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const userInterviewTopicsTestLinkRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserInterviewTopicsTestLinkRetrieveInput,
    outputSchema: UserInterviewTopicsTestLinkRetrieveOutput,
  }));
