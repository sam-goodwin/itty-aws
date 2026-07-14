import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetQuotesQuotePdfInput {
  quote: string;
  expand?: string;
}
export const GetQuotesQuotePdfInput = /*@__PURE__*/ Schema.Struct({
  quote: Schema.String.pipe(T.PathParam()),
  expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/quotes/{quote}/pdf",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<GetQuotesQuotePdfInput>;

// Output Schema
export type GetQuotesQuotePdfOutput = void;
export const GetQuotesQuotePdfOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<GetQuotesQuotePdfOutput>;

// The operation
/**
 * Download quote PDF
 *
 * <p>Download the PDF for a finalized quote. Explanation for special handling can be found <a href="https://docs.stripe.com/quotes/overview#quote_pdf">here</a></p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetQuotesQuotePdf = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetQuotesQuotePdfInput,
  outputSchema: GetQuotesQuotePdfOutput,
}));
