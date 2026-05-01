import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
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
  );
export type LegalDocumentsCreateInput = typeof LegalDocumentsCreateInput.Type;

// Output Schema
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
  });
export type LegalDocumentsCreateOutput = typeof LegalDocumentsCreateOutput.Type;

// The operation
export const legalDocumentsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LegalDocumentsCreateInput,
    outputSchema: LegalDocumentsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
