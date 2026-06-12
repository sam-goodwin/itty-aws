import * as Schema from "effect/Schema";
import {
  ApplicationTypeSchema,
  PaginationSchema,
  ProjectListItemSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListProjectsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cursor: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  search: Schema.optional(Schema.String),
  org_id: Schema.optional(Schema.String),
  timeout: Schema.optional(Schema.Number),
  recoverable: Schema.optional(Schema.Boolean),
}).pipe(T.Http({ method: "GET", path: "/projects" }));
export type ListProjectsInput = typeof ListProjectsInput.Type;

// Output Schema
export const ListProjectsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  projects: Schema.Array(Schema.suspend(() => ProjectListItemSchema)),
  unavailable_project_ids: Schema.optional(Schema.Array(Schema.String)),
  pagination: Schema.optional(Schema.suspend(() => PaginationSchema)),
  applications: Schema.Record(
    Schema.String,
    Schema.Array(Schema.suspend(() => ApplicationTypeSchema)),
  ),
  integrations: Schema.Record(
    Schema.String,
    Schema.Array(Schema.suspend(() => ApplicationTypeSchema)),
  ),
});
export type ListProjectsOutput = typeof ListProjectsOutput.Type;

// The operation
/**
 * List projects
 *
 * Retrieves a list of projects for an organization.
 * You may need to specify an org_id parameter depending on your API key type.
 * For more information, see [Manage projects](https://neon.tech/docs/manage/projects/).
 *
 * @param cursor - Specify the cursor value from the previous response to retrieve the next batch of projects.
 * @param limit - Specify a value from 1 to 400 to limit number of projects in the response.
 * @param search - Search by project `name` or `id`. You can specify partial `name` or `id` values to filter results.
 * @param org_id - Search for projects by `org_id`.
 * @param timeout - Specify an explicit timeout in milliseconds to limit response delay.
After timing out, the incomplete list of project data fetched so far will be returned.
Projects still being fetched when the timeout occurred are listed in the "unavailable" attribute of the response.
If not specified, an implicit implementation defined timeout is chosen with the same behaviour as above

 * @param recoverable - Show only deleted projects within the recovery window.

 */
export const listProjects = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(
  () => ({
    inputSchema: ListProjectsInput,
    outputSchema: ListProjectsOutput,
    pagination: {
      mode: "cursor",
      inputToken: "cursor",
      outputToken: "pagination.cursor",
      items: "projects",
    },
  }),
);
