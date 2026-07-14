import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface LegalDocumentsListInput {
  organization_id: string;
  limit?: number;
  offset?: number;
}
export const LegalDocumentsListInput =
  /*@__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/organizations/{organization_id}/legal_documents/",
    }),
  ) as unknown as Schema.Codec<LegalDocumentsListInput>;

// Output Schema
export interface LegalDocumentsListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: string;
    document_type?: string;
    company_name?: string;
    representative_email?: string;
    status?: string;
    created_by?: { first_name?: string; email?: string } | null;
    created_at?: string;
  }[];
}
export const LegalDocumentsListOutput =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
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
        }),
      ),
    ),
  }) as unknown as Schema.Codec<LegalDocumentsListOutput>;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const legalDocumentsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: LegalDocumentsListInput,
  outputSchema: LegalDocumentsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
