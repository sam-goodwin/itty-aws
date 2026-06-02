import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListDeployOperationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    number: Schema.Number.pipe(T.PathParam()),
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    page: Schema.optional(Schema.Number),
    per_page: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/databases/{database}/deploy-requests/{number}/operations",
    }),
  );
export type ListDeployOperationsInput = typeof ListDeployOperationsInput.Type;

// Output Schema
export const ListDeployOperationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.String,
    current_page: Schema.Number,
    next_page: Schema.NullOr(Schema.Number),
    next_page_url: Schema.NullOr(Schema.String),
    prev_page: Schema.NullOr(Schema.Number),
    prev_page_url: Schema.NullOr(Schema.String),
    data: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        state: Schema.Literals([
          "pending",
          "queued",
          "in_progress",
          "complete",
          "cancelled",
          "error",
        ]),
        keyspace_name: Schema.String,
        table_name: Schema.String,
        operation_name: Schema.String,
        eta_seconds: Schema.NullOr(Schema.Number),
        progress_percentage: Schema.NullOr(Schema.Number),
        deploy_error_docs_url: Schema.NullOr(Schema.String),
        ddl_statement: Schema.String,
        syntax_highlighted_ddl: Schema.String,
        created_at: Schema.String,
        updated_at: Schema.String,
        throttled_at: Schema.NullOr(Schema.String),
        can_drop_data: Schema.Boolean,
        table_locked: Schema.Boolean,
        table_recently_used: Schema.Boolean,
        table_recently_used_at: Schema.NullOr(Schema.String),
        removed_foreign_key_names: Schema.NullOr(Schema.Array(Schema.String)),
        deploy_errors: Schema.NullOr(Schema.String),
      }),
    ),
  });
export type ListDeployOperationsOutput = typeof ListDeployOperationsOutput.Type;

// The operation
/**
 * List deploy operations
 *
 * List deploy operations for a deploy request
 *
 * @param number - The number of the deploy request
 * @param organization - The name of the deploy request's organization
 * @param database - The name of the deploy request's database
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const listDeployOperations =
  /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
    inputSchema: ListDeployOperationsInput,
    outputSchema: ListDeployOperationsOutput,
    errors: [Forbidden, NotFound] as const,
    pagination: {
      mode: "page",
      inputToken: "page",
      outputToken: "next_page",
      items: "data",
    },
  }));
