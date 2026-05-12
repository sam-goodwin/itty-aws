import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListApplicationsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  per_page: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/applications" }));
export type ListApplicationsInput = typeof ListApplicationsInput.Type;

// Output Schema
export const ListApplicationsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    applications: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          name: Schema.optional(Schema.String),
          short_name: Schema.optional(Schema.String),
          deploy_name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          vendor: Schema.optional(Schema.String),
          image_id: Schema.optional(Schema.String),
        }),
      ),
    ),
    meta: Schema.optional(
      Schema.Struct({
        total: Schema.optional(Schema.Number),
        links: Schema.optional(
          Schema.Struct({
            next: Schema.optional(Schema.String),
            prev: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  },
);
export type ListApplicationsOutput = typeof ListApplicationsOutput.Type;

// The operation
/**
 * List Applications
 *
 * Get a list of all available Applications.
 *
 * @param type - Filter the results by type.

|   | Type | Description |
| - | ------ | ------------- |
|   | all | All available application types |
|   | marketplace | Marketplace applications |
|   | one-click | Vultr One-Click applications |
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listApplications = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListApplicationsInput,
  outputSchema: ListApplicationsOutput,
}));
