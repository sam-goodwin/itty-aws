import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface ListDatabasePostgresCidrsInput {
  organization: string;
  database: string;
  page?: number;
  per_page?: number;
}
export const ListDatabasePostgresCidrsInput =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    page: Schema.optional(Schema.Number),
    per_page: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/databases/{database}/cidrs",
    }),
  ) as unknown as Schema.Codec<ListDatabasePostgresCidrsInput>;

// Output Schema
export interface ListDatabasePostgresCidrsOutput {
  type: string;
  current_page: number;
  next_page: number | null;
  next_page_url: string | null;
  prev_page: number | null;
  prev_page_url: string | null;
  data: ReadonlyArray<{
    id: string;
    schema: string;
    role: string;
    cidrs: ReadonlyArray<string>;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    actor: { id: string; display_name: string; avatar_url: string };
  }>;
}
export const ListDatabasePostgresCidrsOutput =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.String,
    current_page: Schema.Number,
    next_page: Schema.NullOr(Schema.Number),
    next_page_url: Schema.NullOr(Schema.String),
    prev_page: Schema.NullOr(Schema.Number),
    prev_page_url: Schema.NullOr(Schema.String),
    data: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        schema: Schema.String,
        role: Schema.String,
        cidrs: Schema.Array(Schema.String),
        created_at: Schema.String,
        updated_at: Schema.String,
        deleted_at: Schema.NullOr(Schema.String),
        actor: Schema.Struct({
          id: Schema.String,
          display_name: Schema.String,
          avatar_url: Schema.String,
        }),
      }),
    ),
  }) as unknown as Schema.Codec<ListDatabasePostgresCidrsOutput>;

// The operation
/**
 * List IP restriction entries
 *
 * @param organization - The name of the organization the database belongs to
 * @param database - The name of the database
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const listDatabasePostgresCidrs =
  /*@__PURE__*/ API.makePaginated(() => ({
    inputSchema: ListDatabasePostgresCidrsInput,
    outputSchema: ListDatabasePostgresCidrsOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
    pagination: {
      mode: "page",
      inputToken: "page",
      outputToken: "next_page",
      items: "data",
    },
  }));
