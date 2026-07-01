import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface SessionGroupSummariesDestroyInput {
  id: string;
  project_id: string;
}
export const SessionGroupSummariesDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/session_group_summaries/{id}/",
    }),
  ) as unknown as Schema.Codec<SessionGroupSummariesDestroyInput>;

// Output Schema
export type SessionGroupSummariesDestroyOutput = void;
export const SessionGroupSummariesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SessionGroupSummariesDestroyOutput>;

// The operation
/**
 * API for retrieving and managing stored group session summaries.
 *
 * @param id - A UUID string identifying this session group summary.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sessionGroupSummariesDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SessionGroupSummariesDestroyInput,
    outputSchema: SessionGroupSummariesDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
