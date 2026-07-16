import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface LegalDocumentsDownloadRetrieveInput {
  id: string;
  organization_id: string;
}
export const LegalDocumentsDownloadRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/organizations/{organization_id}/legal_documents/{id}/download/",
    }),
  ) as unknown as Schema.Codec<LegalDocumentsDownloadRetrieveInput>;

// Output Schema
export type LegalDocumentsDownloadRetrieveOutput = void;
export const LegalDocumentsDownloadRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<LegalDocumentsDownloadRetrieveOutput>;

// The operation
/**
 * Short-lived redirect to the signed PDF in object storage. 404 while the
 * envelope is still out for signature (or if the upload hasn't completed
 * yet). The underlying presigned URL expires in ~60s; clients should hit
 * this endpoint each time they want to view the PDF rather than caching.
 *
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const legalDocumentsDownloadRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LegalDocumentsDownloadRetrieveInput,
    outputSchema: LegalDocumentsDownloadRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
