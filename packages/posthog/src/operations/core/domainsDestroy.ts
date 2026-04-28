import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const DomainsDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  organization_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/organizations/{organization_id}/domains/{id}/",
  }),
);
export type DomainsDestroyInput = typeof DomainsDestroyInput.Type;

// Output Schema
export const DomainsDestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DomainsDestroyOutput = typeof DomainsDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this domain.
 */
export const domainsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DomainsDestroyInput,
  outputSchema: DomainsDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
