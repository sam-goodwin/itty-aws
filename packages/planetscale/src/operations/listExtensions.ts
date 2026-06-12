import * as Schema from "effect/Schema";
import { PostgresClusterExtensionSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListExtensionsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  branch: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/organizations/{organization}/databases/{database}/branches/{branch}/extensions",
  }),
);
export type ListExtensionsInput = typeof ListExtensionsInput.Type;

// Output Schema
export const ListExtensionsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => PostgresClusterExtensionSchema),
);
export type ListExtensionsOutput = typeof ListExtensionsOutput.Type;

// The operation
/**
 * List cluster extensions
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 */
export const listExtensions = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListExtensionsInput,
  outputSchema: ListExtensionsOutput,
  errors: [Forbidden, NotFound] as const,
}));
