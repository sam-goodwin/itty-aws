import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface CancelBouncerResizeRequestInput {
  organization: string;
  database: string;
  branch: string;
  bouncer: string;
}
export const CancelBouncerResizeRequestInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
    bouncer: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/organizations/{organization}/databases/{database}/branches/{branch}/bouncers/{bouncer}/resizes",
    }),
  ) as unknown as Schema.Codec<CancelBouncerResizeRequestInput>;

// Output Schema
export type CancelBouncerResizeRequestOutput = void;
export const CancelBouncerResizeRequestOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CancelBouncerResizeRequestOutput>;

// The operation
/**
 * Cancel a resize request
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 * @param bouncer - The name of the bouncer
 */
export const cancelBouncerResizeRequest = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CancelBouncerResizeRequestInput,
    outputSchema: CancelBouncerResizeRequestOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
