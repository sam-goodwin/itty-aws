import * as Schema from "effect/Schema";
import { PaginationSchema, ProjectListItemSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListSharedProjectsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cursor: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    search: Schema.optional(Schema.String),
    timeout: Schema.optional(Schema.Number),
  }).pipe(T.Http({ method: "GET", path: "/projects/shared" }));
export type ListSharedProjectsInput = typeof ListSharedProjectsInput.Type;

// Output Schema
export const ListSharedProjectsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projects: Schema.Array(Schema.suspend(() => ProjectListItemSchema)),
    unavailable_project_ids: Schema.optional(Schema.Array(Schema.String)),
    pagination: Schema.optional(Schema.suspend(() => PaginationSchema)),
  });
export type ListSharedProjectsOutput = typeof ListSharedProjectsOutput.Type;

// The operation
/**
 * List shared projects
 *
 * Retrieves a list of projects shared with your Neon account.
 * For more information, see [Manage projects](https://neon.tech/docs/manage/projects/).
 *
 * @param cursor - Specify the cursor value from the previous response to get the next batch of projects.
 * @param limit - Specify a value from 1 to 400 to limit number of projects in the response.
 * @param search - Search query by name or id.
 * @param timeout - Specify an explicit timeout in milliseconds to limit response delay.
After timing out, the incomplete list of project data fetched so far will be returned.
Projects still being fetched when the timeout occurred are listed in the "unavailable" attribute of the response.
If not specified, an implicit implementation defined timeout is chosen with the same behaviour as above

 */
export const listSharedProjects = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(
  () => ({
    inputSchema: ListSharedProjectsInput,
    outputSchema: ListSharedProjectsOutput,
    pagination: {
      mode: "cursor",
      inputToken: "cursor",
      outputToken: "pagination.cursor",
      items: "projects",
    },
  }),
);
