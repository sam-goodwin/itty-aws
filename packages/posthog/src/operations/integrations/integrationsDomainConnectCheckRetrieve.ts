import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface IntegrationsDomainConnectCheckRetrieveInput {
  project_id: string;
}
export const IntegrationsDomainConnectCheckRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/integrations/domain-connect/check/",
    }),
  ) as unknown as Schema.Codec<IntegrationsDomainConnectCheckRetrieveInput>;

// Output Schema
export type IntegrationsDomainConnectCheckRetrieveOutput = void;
export const IntegrationsDomainConnectCheckRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationsDomainConnectCheckRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsDomainConnectCheckRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsDomainConnectCheckRetrieveInput,
    outputSchema: IntegrationsDomainConnectCheckRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
