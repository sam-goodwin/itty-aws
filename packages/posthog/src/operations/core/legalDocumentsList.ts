import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LegalDocumentsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/organizations/{organization_id}/legal_documents/",
    }),
  );
export type LegalDocumentsListInput = typeof LegalDocumentsListInput.Type;

// Output Schema
export const LegalDocumentsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        document_type: Schema.String,
        company_name: Schema.String,
        representative_email: Schema.String,
        status: Schema.String,
        created_by: Schema.NullOr(
          Schema.Struct({
            first_name: Schema.String,
            email: Schema.String,
          }),
        ),
        created_at: Schema.String,
      }),
    ),
  });
export type LegalDocumentsListOutput = typeof LegalDocumentsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 */
export const legalDocumentsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LegalDocumentsListInput,
  outputSchema: LegalDocumentsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
