import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetInvoiceRenderingTemplatesTemplateInput {
  template: string;
  expand?: string;
  version?: number;
}
export const GetInvoiceRenderingTemplatesTemplateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    template: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/invoice_rendering_templates/{template}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetInvoiceRenderingTemplatesTemplateInput>;

// Output Schema
export interface GetInvoiceRenderingTemplatesTemplateOutput {
  created: number;
  id: string;
  livemode: boolean;
  metadata: Record<string, string> | null;
  nickname: string | null;
  object: "invoice_rendering_template";
  status: "active" | "archived";
  version: number;
}
export const GetInvoiceRenderingTemplatesTemplateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.Number,
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    nickname: Schema.NullOr(Schema.String),
    object: Schema.Literals(["invoice_rendering_template"]),
    status: Schema.Literals(["active", "archived"]),
    version: Schema.Number,
  }) as unknown as Schema.Codec<GetInvoiceRenderingTemplatesTemplateOutput>;

// The operation
/**
 * Retrieve an invoice rendering template
 *
 * <p>Retrieves an invoice rendering template with the given ID. It by default returns the latest version of the template. Optionally, specify a version to see previous versions.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetInvoiceRenderingTemplatesTemplate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetInvoiceRenderingTemplatesTemplateInput,
    outputSchema: GetInvoiceRenderingTemplatesTemplateOutput,
  }));
