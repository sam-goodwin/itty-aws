import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DismissSchemaRecommendationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    number: Schema.Number.pipe(T.PathParam()),
    reason: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/organizations/{organization}/databases/{database}/schema-recommendations/{number}/dismiss",
    }),
  );
export type DismissSchemaRecommendationInput =
  typeof DismissSchemaRecommendationInput.Type;

// Output Schema
export const DismissSchemaRecommendationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    html_url: Schema.String,
    title: Schema.String,
    table_name: Schema.String,
    keyspace: Schema.String,
    ddl_statement: Schema.String,
    number: Schema.Number,
    state: Schema.Literals(["open", "applied", "dismissed", "stale"]),
    recommendation_type: Schema.Literals([
      "unused_table",
      "unused_index",
      "duplicate_index",
      "sequence_overflow",
      "sequence_overflow_foreign_key",
      "new_index",
      "encoding_upgrade",
      "bloated_table",
      "bloated_index",
    ]),
    created_at: Schema.String,
    updated_at: Schema.String,
    applied_at: Schema.NullOr(Schema.String),
    dismissed_at: Schema.NullOr(Schema.String),
    closed_by_deploy_request: Schema.NullOr(
      Schema.Struct({
        id: Schema.String,
        branch_id: Schema.String,
        number: Schema.Number,
      }),
    ),
    dismissed_by: Schema.NullOr(
      Schema.Struct({
        id: Schema.String,
        display_name: Schema.String,
        avatar_url: Schema.String,
      }),
    ),
  });
export type DismissSchemaRecommendationOutput =
  typeof DismissSchemaRecommendationOutput.Type;

// The operation
/**
 * Dismiss a schema recommendation
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param number - Schema recommendation sequence number. Example: `42`.
 * @param reason - The reason for dismissing the recommendation (max 500 characters)
 */
export const dismissSchemaRecommendation = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DismissSchemaRecommendationInput,
    outputSchema: DismissSchemaRecommendationOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
