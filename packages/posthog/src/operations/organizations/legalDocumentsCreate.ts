import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface LegalDocumentsCreateInput {
  organization_id: string;
  document_type?: "BAA" | "DPA";
  company_name?: string;
  company_address?: string;
  representative_email?: string;
}
export const LegalDocumentsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    document_type: Schema.optional(Schema.Literals(["BAA", "DPA"])),
    company_name: Schema.optional(Schema.String),
    company_address: Schema.optional(Schema.String),
    representative_email: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/organizations/{organization_id}/legal_documents/",
    }),
  ) as unknown as Schema.Codec<LegalDocumentsCreateInput>;

// Output Schema
export interface LegalDocumentsCreateOutput {
  id?: string;
  document_type?: string;
  company_name?: string;
  representative_email?: string;
  status?: string;
  created_by?: { first_name?: string; email?: string } | null;
  created_at?: string;
}
export const LegalDocumentsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    document_type: Schema.optional(Schema.String),
    company_name: Schema.optional(Schema.String),
    representative_email: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          first_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
        }),
      ),
    ),
    created_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LegalDocumentsCreateOutput>;

// The operation
/**
 *
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const legalDocumentsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LegalDocumentsCreateInput,
    outputSchema: LegalDocumentsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
