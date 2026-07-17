import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export interface ListSkusInput {
  envelope?: boolean;
  includeCount?: boolean;
  itemsPerPage?: number;
  pageNum?: number;
  pretty?: boolean;
}
export const ListSkusInput = /*@__PURE__*/ Schema.Struct({
  envelope: Schema.optional(Schema.Boolean),
  includeCount: Schema.optional(Schema.Boolean),
  itemsPerPage: Schema.optional(Schema.Number),
  pageNum: Schema.optional(Schema.Number),
  pretty: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({ method: "GET", path: "/api/atlas/v2/skus" }),
) as unknown as Schema.Codec<ListSkusInput>;

// Output Schema
export type ListSkusOutput = void;
export const ListSkusOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ListSkusOutput>;

// The operation
/**
 * Return All Stock Keeping Units
 *
 * Returns all available SKUs (Stock Keeping Units) that can appear on MongoDB invoices. SKUs represent different products and services offered by MongoDB.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param includeCount - Flag that indicates whether the response returns the total number of items (`totalCount`) in the response.
 * @param itemsPerPage - Number of items that the response returns per page.
 * @param pageNum - Number of the page that displays the current set of the total objects that the response returns.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 */
export const listSkus = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListSkusInput,
  outputSchema: ListSkusOutput,
  errors: [Forbidden] as const,
}));
