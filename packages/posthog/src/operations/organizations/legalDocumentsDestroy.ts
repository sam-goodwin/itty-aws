import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface LegalDocumentsDestroyInput {
  id: string;
  organization_id: string;
}
export const LegalDocumentsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/organizations/{organization_id}/legal_documents/{id}/",
    }),
  ) as unknown as Schema.Codec<LegalDocumentsDestroyInput>;

// Output Schema
export type LegalDocumentsDestroyOutput = void;
export const LegalDocumentsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<LegalDocumentsDestroyOutput>;

// The operation
/**
 * Delete an unsigned legal document. The PandaDoc envelope is voided
 * first so the original signer can no longer complete it; only if that
 * succeeds is the row removed, freeing the unique-per-org-per-type
 * constraint so a fresh document can be generated.
 * Returns 503 if the PandaDoc void fails — the row stays in that case
 * and the frontend should prompt the user to retry. Returns 403 for
 * signed documents (legal artifacts; staff can still delete signed
 * rows from Django admin).
 *
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const legalDocumentsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LegalDocumentsDestroyInput,
    outputSchema: LegalDocumentsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
