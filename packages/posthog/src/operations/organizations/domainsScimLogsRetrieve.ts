import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface DomainsScimLogsRetrieveInput {
  id: string;
  organization_id: string;
}
export const DomainsScimLogsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/organizations/{organization_id}/domains/{id}/scim/logs/",
    }),
  ) as unknown as Schema.Codec<DomainsScimLogsRetrieveInput>;

// Output Schema
export type DomainsScimLogsRetrieveOutput = void;
export const DomainsScimLogsRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DomainsScimLogsRetrieveOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this domain.
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const domainsScimLogsRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: DomainsScimLogsRetrieveInput,
  outputSchema: DomainsScimLogsRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
