import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export const DatabasePromoteReadReplicaInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/databases/{databaseId}/promote-read-replica",
    }),
  );
export type DatabasePromoteReadReplicaInput =
  typeof DatabasePromoteReadReplicaInput.Type;

// Output Schema
export const DatabasePromoteReadReplicaOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DatabasePromoteReadReplicaOutput =
  typeof DatabasePromoteReadReplicaOutput.Type;

// The operation
/**
 * Promote Read-Only Replica
 *
 * Promote a read-only replica node to its own primary Managed Database.
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 */
export const databasePromoteReadReplica = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DatabasePromoteReadReplicaInput,
    outputSchema: DatabasePromoteReadReplicaOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
