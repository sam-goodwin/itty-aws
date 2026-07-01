import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface DomainsDestroyInput {
  id: string;
  organization_id: string;
}
export const DomainsDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  organization_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/organizations/{organization_id}/domains/{id}/",
  }),
) as unknown as Schema.Codec<DomainsDestroyInput>;

// Output Schema
export type DomainsDestroyOutput = void;
export const DomainsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DomainsDestroyOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this domain.
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const domainsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DomainsDestroyInput,
  outputSchema: DomainsDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
