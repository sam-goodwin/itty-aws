import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface DeleteV1DomainsByDomainIdInput {
  domainId: string;
}
export const DeleteV1DomainsByDomainIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domainId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/domains/{domainId}" }),
  ) as unknown as Schema.Codec<DeleteV1DomainsByDomainIdInput>;

// Output Schema
export type DeleteV1DomainsByDomainIdOutput = void;
export const DeleteV1DomainsByDomainIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteV1DomainsByDomainIdOutput>;

// The operation
/**
 * Delete a custom domain
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Removes a custom domain binding. Authorization is derived from the parent compute service's workspace.
 */
export const deleteV1DomainsByDomainId = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteV1DomainsByDomainIdInput,
    outputSchema: DeleteV1DomainsByDomainIdOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
