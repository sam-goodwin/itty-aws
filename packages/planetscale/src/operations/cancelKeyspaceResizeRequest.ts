import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface CancelKeyspaceResizeRequestInput {
  organization: string;
  database: string;
  branch: string;
  keyspace: string;
}
export const CancelKeyspaceResizeRequestInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
    keyspace: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/organizations/{organization}/databases/{database}/branches/{branch}/keyspaces/{keyspace}/resizes",
    }),
  ) as unknown as Schema.Codec<CancelKeyspaceResizeRequestInput>;

// Output Schema
export type CancelKeyspaceResizeRequestOutput = void;
export const CancelKeyspaceResizeRequestOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CancelKeyspaceResizeRequestOutput>;

// The operation
/**
 * Cancel a queued keyspace resize request
 *
 * Cancels a queued resize of a branch keyspace.
 *
 * @param organization - The name of the organization the branch belongs to
 * @param database - The name of the database the branch belongs to
 * @param branch - The name of the branch
 * @param keyspace - The name of the keyspace
 */
export const cancelKeyspaceResizeRequest = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CancelKeyspaceResizeRequestInput,
    outputSchema: CancelKeyspaceResizeRequestOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
