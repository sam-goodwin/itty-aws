import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LegalDocumentsDownloadRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/organizations/{organization_id}/legal_documents/{id}/download/",
    }),
  );
export type LegalDocumentsDownloadRetrieveInput =
  typeof LegalDocumentsDownloadRetrieveInput.Type;

// Output Schema
export const LegalDocumentsDownloadRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LegalDocumentsDownloadRetrieveOutput =
  typeof LegalDocumentsDownloadRetrieveOutput.Type;

// The operation
/**
 * Short-lived redirect to the signed PDF in object storage. 404 while the
 * envelope is still out for signature (or if the upload hasn't completed
 * yet). The underlying presigned URL expires in ~60s; clients should hit
 * this endpoint each time they want to view the PDF rather than caching.
 */
export const legalDocumentsDownloadRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LegalDocumentsDownloadRetrieveInput,
    outputSchema: LegalDocumentsDownloadRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
