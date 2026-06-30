import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface CreateSessionSummariesIndividuallyInput {
  project_id: string;
  session_ids?: string[];
  focus_area?: string;
}
export const CreateSessionSummariesIndividuallyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    session_ids: Schema.optional(Schema.Array(Schema.String)),
    focus_area: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/session_summaries/create_session_summaries_individually/",
    }),
  ) as unknown as Schema.Codec<CreateSessionSummariesIndividuallyInput>;

// Output Schema
export interface CreateSessionSummariesIndividuallyOutput {
  session_ids?: string[];
  focus_area?: string;
}
export const CreateSessionSummariesIndividuallyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session_ids: Schema.optional(Schema.Array(Schema.String)),
    focus_area: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CreateSessionSummariesIndividuallyOutput>;

// The operation
/**
 * Generate AI individual summary for each session, without grouping.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const createSessionSummariesIndividually =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateSessionSummariesIndividuallyInput,
    outputSchema: CreateSessionSummariesIndividuallyOutput,
  }));
