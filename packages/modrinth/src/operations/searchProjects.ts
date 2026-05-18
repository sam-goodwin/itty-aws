import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const SearchProjectsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  query: Schema.optional(Schema.String),
  facets: Schema.optional(Schema.String),
  index: Schema.optional(
    Schema.Literals(["relevance", "downloads", "follows", "newest", "updated"]),
  ),
  offset: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "GET", path: "/search" }));
export type SearchProjectsInput = typeof SearchProjectsInput.Type;

// Output Schema
export const SearchProjectsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  hits: Schema.Array(
    Schema.Struct({
      project_id: Schema.String,
      author: Schema.String,
      display_categories: Schema.optional(Schema.Array(Schema.String)),
      versions: Schema.Array(Schema.String),
      follows: Schema.Number,
      date_created: Schema.String,
      date_modified: Schema.String,
      latest_version: Schema.optional(Schema.String),
      license: Schema.String,
      gallery: Schema.optional(Schema.Array(Schema.String)),
      featured_gallery: Schema.optional(Schema.NullOr(Schema.String)),
    }),
  ),
  offset: Schema.Number,
  limit: Schema.Number,
  total_hits: Schema.Number,
});
export type SearchProjectsOutput = typeof SearchProjectsOutput.Type;

// The operation
/**
 * Search projects
 *
 * @param query - The query to search for
 * @param facets - Facets are an essential concept for understanding how to filter out results.

These are the most commonly used facet types:
- `project_type`
- `categories` (loaders are lumped in with categories in search)
- `versions`
- `client_side`
- `server_side`
- `open_source`

Several others are also available for use, though these should not be used outside very specific use cases.
- `title`
- `author`
- `follows`
- `project_id`
- `license`
- `downloads`
- `color`
- `created_timestamp` (uses Unix timestamp)
- `modified_timestamp` (uses Unix timestamp)
- `date_created` (uses ISO-8601 timestamp)
- `date_modified` (uses ISO-8601 timestamp)

In order to then use these facets, you need a value to filter by, as well as an operation to perform on this value.
The most common operation is `:` (same as `=`), though you can also use `!=`, `>=`, `>`, `<=`, and `<`.
Join together the type, operation, and value, and you've got your string.
```
{type} {operation} {value}
```

Examples:
```
categories = adventure
versions != 1.20.1
downloads <= 100
```

You then join these strings together in arrays to signal `AND` and `OR` operators.

##### OR
All elements in a single array are considered to be joined by OR statements.
For example, the search `[["versions:1.16.5", "versions:1.17.1"]]` translates to `Projects that support 1.16.5 OR 1.17.1`.

##### AND
Separate arrays are considered to be joined by AND statements.
For example, the search `[["versions:1.16.5"], ["project_type:modpack"]]` translates to `Projects that support 1.16.5 AND are modpacks`.

 * @param index - The sorting method used for sorting search results
 * @param offset - The offset into the search. Skips this number of results
 * @param limit - The number of results returned by the search
 */
export const searchProjects = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SearchProjectsInput,
  outputSchema: SearchProjectsOutput,
  errors: [BadRequest] as const,
}));
