import * as Schema from "effect/Schema";
import { PostgresClusterParameterSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListParametersInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  branch: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/organizations/{organization}/databases/{database}/branches/{branch}/parameters",
  }),
);
export type ListParametersInput = typeof ListParametersInput.Type;

// Output Schema
export const ListParametersOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => PostgresClusterParameterSchema),
);
export type ListParametersOutput = typeof ListParametersOutput.Type;

// The operation
/**
 * List cluster parameters
 *
 * Returns the parameters for a branch. To update the parameters, use the "Upsert a change request" endpoint.
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 */
export const listParameters = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListParametersInput,
  outputSchema: ListParametersOutput,
  errors: [Forbidden, NotFound] as const,
}));
