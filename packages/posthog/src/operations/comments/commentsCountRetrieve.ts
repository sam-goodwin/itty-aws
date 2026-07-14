import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface CommentsCountRetrieveInput {
  project_id: string;
}
export const CommentsCountRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/comments/count/",
    }),
  ) as unknown as Schema.Codec<CommentsCountRetrieveInput>;

// Output Schema
export type CommentsCountRetrieveOutput = void;
export const CommentsCountRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CommentsCountRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const commentsCountRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: CommentsCountRetrieveInput,
  outputSchema: CommentsCountRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
