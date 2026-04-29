import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ProductToursListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  search: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/product_tours/" }),
);
export type ProductToursListInput = typeof ProductToursListInput.Type;

// Output Schema
export const ProductToursListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        description: Schema.optional(Schema.String),
        internal_targeting_flag: Schema.Struct({
          id: Schema.Number,
          team_id: Schema.Number,
          name: Schema.optional(Schema.String),
          key: Schema.String,
          filters: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          deleted: Schema.optional(Schema.Boolean),
          active: Schema.optional(Schema.Boolean),
          ensure_experience_continuity: Schema.optional(
            Schema.NullOr(Schema.Boolean),
          ),
          has_encrypted_payloads: Schema.optional(
            Schema.NullOr(Schema.Boolean),
          ),
          version: Schema.optional(Schema.NullOr(Schema.Number)),
          evaluation_runtime: Schema.optional(Schema.Unknown),
          bucketing_identifier: Schema.optional(Schema.Unknown),
          evaluation_contexts: Schema.Array(Schema.String),
        }),
        linked_flag: Schema.Struct({
          id: Schema.Number,
          team_id: Schema.Number,
          name: Schema.optional(Schema.String),
          key: Schema.String,
          filters: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          deleted: Schema.optional(Schema.Boolean),
          active: Schema.optional(Schema.Boolean),
          ensure_experience_continuity: Schema.optional(
            Schema.NullOr(Schema.Boolean),
          ),
          has_encrypted_payloads: Schema.optional(
            Schema.NullOr(Schema.Boolean),
          ),
          version: Schema.optional(Schema.NullOr(Schema.Number)),
          evaluation_runtime: Schema.optional(Schema.Unknown),
          bucketing_identifier: Schema.optional(Schema.Unknown),
          evaluation_contexts: Schema.Array(Schema.String),
        }),
        targeting_flag_filters: Schema.NullOr(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        content: Schema.optional(Schema.Unknown),
        draft_content: Schema.NullOr(Schema.Unknown),
        has_draft: Schema.Boolean,
        auto_launch: Schema.optional(Schema.Boolean),
        start_date: Schema.optional(Schema.NullOr(Schema.String)),
        end_date: Schema.optional(Schema.NullOr(Schema.String)),
        created_at: Schema.String,
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
        updated_at: Schema.String,
        archived: Schema.optional(Schema.Boolean),
      }),
    ),
  },
);
export type ProductToursListOutput = typeof ProductToursListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - A search term.
 */
export const productToursList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProductToursListInput,
  outputSchema: ProductToursListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
