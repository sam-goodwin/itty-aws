import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DomainsScimLogsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/organizations/{organization_id}/domains/{id}/scim/logs/",
    }),
  );
export type DomainsScimLogsRetrieveInput =
  typeof DomainsScimLogsRetrieveInput.Type;

// Output Schema
export const DomainsScimLogsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DomainsScimLogsRetrieveOutput =
  typeof DomainsScimLogsRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this domain.
 */
export const domainsScimLogsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DomainsScimLogsRetrieveInput,
    outputSchema: DomainsScimLogsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
