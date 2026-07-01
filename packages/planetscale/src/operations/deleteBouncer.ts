import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface DeleteBouncerInput {
  organization: string;
  database: string;
  branch: string;
  bouncer: string;
}
export const DeleteBouncerInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  branch: Schema.String.pipe(T.PathParam()),
  bouncer: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/organizations/{organization}/databases/{database}/branches/{branch}/bouncers/{bouncer}",
  }),
) as unknown as Schema.Codec<DeleteBouncerInput>;

// Output Schema
export type DeleteBouncerOutput = void;
export const DeleteBouncerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteBouncerOutput>;

// The operation
/**
 * Delete a bouncer
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 * @param bouncer - The name of the bouncer
 */
export const deleteBouncer = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteBouncerInput,
  outputSchema: DeleteBouncerOutput,
  errors: [Forbidden, NotFound] as const,
}));
