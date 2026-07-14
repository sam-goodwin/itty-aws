import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListDeployRequestReviewsInput {
  organization: string;
  database: string;
  number: number;
  page?: number;
  per_page?: number;
}
export const ListDeployRequestReviewsInput =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    number: Schema.Number.pipe(T.PathParam()),
    page: Schema.optional(Schema.Number),
    per_page: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/databases/{database}/deploy-requests/{number}/reviews",
    }),
  ) as unknown as Schema.Codec<ListDeployRequestReviewsInput>;

// Output Schema
export interface ListDeployRequestReviewsOutput {
  type: string;
  current_page: number;
  next_page: number | null;
  next_page_url: string | null;
  prev_page: number | null;
  prev_page_url: string | null;
  data: {
    id: string;
    body: string;
    html_body: string;
    state: "commented" | "approved";
    created_at: string;
    updated_at: string;
    actor: { id: string; display_name: string; avatar_url: string };
  }[];
}
export const ListDeployRequestReviewsOutput =
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
        body: Schema.String,
        html_body: Schema.String,
        state: Schema.Literals(["commented", "approved"]),
        created_at: Schema.String,
        updated_at: Schema.String,
        actor: Schema.Struct({
          id: Schema.String,
          display_name: Schema.String,
          avatar_url: Schema.String,
        }),
      }),
    ),
  }) as unknown as Schema.Codec<ListDeployRequestReviewsOutput>;

// The operation
/**
 * List deploy request reviews
 *
 * @param organization - The name of the organization the deploy request belongs to
 * @param database - The name of the database the deploy request belongs to
 * @param number - The number of the deploy request
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const listDeployRequestReviews =
  /*@__PURE__*/ API.makePaginated(() => ({
    inputSchema: ListDeployRequestReviewsInput,
    outputSchema: ListDeployRequestReviewsOutput,
    errors: [Forbidden, NotFound] as const,
    pagination: {
      mode: "page",
      inputToken: "page",
      outputToken: "next_page",
      items: "data",
    },
  }));
