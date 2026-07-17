import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface LegalDocumentsRetrieveInput {
  id: string;
  organization_id: string;
}
export const LegalDocumentsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/organizations/{organization_id}/legal_documents/{id}/",
    }),
  ) as unknown as Schema.Codec<LegalDocumentsRetrieveInput>;

// Output Schema
export interface LegalDocumentsRetrieveOutput {
  id?: string;
  document_type?: string;
  company_name?: string;
  representative_email?: string;
  status?: string;
  created_by?: { first_name?: string; email?: string } | null;
  created_at?: string;
}
export const LegalDocumentsRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<LegalDocumentsRetrieveOutput>;

// The operation
/**
 *
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const legalDocumentsRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: LegalDocumentsRetrieveInput,
  outputSchema: LegalDocumentsRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
