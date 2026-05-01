import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LegalDocumentsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/organizations/{organization_id}/legal_documents/{id}/",
    }),
  );
export type LegalDocumentsRetrieveInput =
  typeof LegalDocumentsRetrieveInput.Type;

// Output Schema
export const LegalDocumentsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type LegalDocumentsRetrieveOutput =
  typeof LegalDocumentsRetrieveOutput.Type;

// The operation
export const legalDocumentsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LegalDocumentsRetrieveInput,
    outputSchema: LegalDocumentsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
