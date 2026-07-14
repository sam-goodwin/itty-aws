import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListPublicRegionsInput {
  page?: number;
  per_page?: number;
}
export const ListPublicRegionsInput = /*@__PURE__*/ Schema.Struct({
  page: Schema.optional(Schema.Number),
  per_page: Schema.optional(Schema.Number),
}).pipe(
  T.Http({ method: "GET", path: "/regions" }),
) as unknown as Schema.Codec<ListPublicRegionsInput>;

// Output Schema
export interface ListPublicRegionsOutput {
  type: string;
  current_page: number;
  next_page: number | null;
  next_page_url: string | null;
  prev_page: number | null;
  prev_page_url: string | null;
  data: {
    id: string;
    provider: string;
    enabled: boolean;
    public_ip_addresses: string[];
    display_name: string;
    location: string;
    slug: string;
  }[];
}
export const ListPublicRegionsOutput =
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
        provider: Schema.String,
        enabled: Schema.Boolean,
        public_ip_addresses: Schema.Array(Schema.String),
        display_name: Schema.String,
        location: Schema.String,
        slug: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<ListPublicRegionsOutput>;

// The operation
/**
 * List public regions
 *
 * Endpoint is available without authentication.
 *
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const listPublicRegions = /*@__PURE__*/ API.makePaginated(() => ({
  inputSchema: ListPublicRegionsInput,
  outputSchema: ListPublicRegionsOutput,
  errors: [Forbidden, NotFound] as const,
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "next_page",
    items: "data",
  },
}));
