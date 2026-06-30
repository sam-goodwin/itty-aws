import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingSymbolSetsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    order_by: Schema.optional(
      Schema.Literals([
        "created_at",
        "-created_at",
        "ref",
        "-ref",
        "last_used",
        "-last_used",
      ]),
    ),
    ref: Schema.optional(Schema.String),
    search: Schema.optional(Schema.String),
    status: Schema.optional(Schema.Literals(["all", "valid", "invalid"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/symbol_sets/",
    }),
  );
export type ErrorTrackingSymbolSetsListInput =
  typeof ErrorTrackingSymbolSetsListInput.Type;

// Output Schema
export const ErrorTrackingSymbolSetsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          ref: Schema.optional(Schema.String),
          team_id: Schema.optional(Schema.Number),
          created_at: Schema.optional(Schema.String),
          last_used: Schema.optional(Schema.NullOr(Schema.String)),
          failure_reason: Schema.optional(Schema.NullOr(Schema.String)),
          has_uploaded_file: Schema.optional(Schema.Boolean),
          release: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
  });
export type ErrorTrackingSymbolSetsListOutput =
  typeof ErrorTrackingSymbolSetsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param order_by - Sort order for symbol sets. Prefix with `-` for descending order.

* `created_at` - created_at
* `-created_at` - -created_at
* `ref` - ref
* `-ref` - -ref
* `last_used` - last_used
* `-last_used` - -last_used
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param ref - Exact symbol set reference to filter by.
 * @param search - Case-insensitive substring search across reference, release version, release project, and release commit SHA.
 * @param status - Upload status filter: `valid` has an uploaded file, `invalid` is missing a file, `all` returns both.

* `all` - all
* `valid` - valid
* `invalid` - invalid
 */
export const errorTrackingSymbolSetsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ErrorTrackingSymbolSetsListInput,
    outputSchema: ErrorTrackingSymbolSetsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
