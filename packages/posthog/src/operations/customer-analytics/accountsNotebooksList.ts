import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AccountsNotebooksListInput {
  account_id: string;
  project_id: string;
  limit?: number;
  offset?: number;
  ordering?: "-created_at" | "-created_by" | "created_at" | "created_by";
  search?: string;
}
export const AccountsNotebooksListInput =
  /*@__PURE__*/ Schema.Struct({
    account_id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    ordering: Schema.optional(
      Schema.Literals([
        "-created_at",
        "-created_by",
        "created_at",
        "created_by",
      ]),
    ),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/accounts/{account_id}/notebooks/",
    }),
  ) as unknown as Schema.Codec<AccountsNotebooksListInput>;

// Output Schema
export interface AccountsNotebooksListOutput {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
    id: string;
    short_id: string;
    title?: string | null;
    content?: unknown;
    text_content?: string | null;
    created_at: string;
    created_by: {
      id?: number;
      uuid?: string;
      distinct_id?: string | null;
      first_name?: string;
      last_name?: string;
      email?: string;
      is_email_verified?: boolean | null;
      hedgehog_config?: Record<string, unknown> | null;
      role_at_organization?:
        | "engineering"
        | "data"
        | "product"
        | "founder"
        | "leadership"
        | "marketing"
        | "sales"
        | "other"
        | ""
        | null;
    };
    last_modified_at: string;
    last_modified_by: {
      id?: number;
      uuid?: string;
      distinct_id?: string | null;
      first_name?: string;
      last_name?: string;
      email?: string;
      is_email_verified?: boolean | null;
      hedgehog_config?: Record<string, unknown> | null;
      role_at_organization?:
        | "engineering"
        | "data"
        | "product"
        | "founder"
        | "leadership"
        | "marketing"
        | "sales"
        | "other"
        | ""
        | null;
    };
  }[];
}
export const AccountsNotebooksListOutput =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        short_id: Schema.String,
        title: Schema.optional(Schema.NullOr(Schema.String)),
        content: Schema.optional(Schema.Unknown),
        text_content: Schema.optional(Schema.NullOr(Schema.String)),
        created_at: Schema.String,
        created_by: Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(
            Schema.NullOr(
              Schema.Union([
                Schema.Literals([
                  "engineering",
                  "data",
                  "product",
                  "founder",
                  "leadership",
                  "marketing",
                  "sales",
                  "other",
                ]),
                Schema.Literals([""]),
              ]),
            ),
          ),
        }),
        last_modified_at: Schema.String,
        last_modified_by: Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(
            Schema.NullOr(
              Schema.Union([
                Schema.Literals([
                  "engineering",
                  "data",
                  "product",
                  "founder",
                  "leadership",
                  "marketing",
                  "sales",
                  "other",
                ]),
                Schema.Literals([""]),
              ]),
            ),
          ),
        }),
      }),
    ),
  }) as unknown as Schema.Codec<AccountsNotebooksListOutput>;

// The operation
/**
 *
 * @param account_id - UUID of the parent account.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param ordering - Sort by creation date or author. Defaults to '-created_at'.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Full-text search across notebook title and content.
 */
export const accountsNotebooksList = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsNotebooksListInput,
  outputSchema: AccountsNotebooksListOutput,
}));
