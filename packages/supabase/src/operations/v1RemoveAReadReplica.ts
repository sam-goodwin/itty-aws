import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1RemoveAReadReplicaInput {
  ref: string;
  database_identifier: string;
}
export const V1RemoveAReadReplicaInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    database_identifier: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/v1/projects/{ref}/read-replicas/remove" }),
  ) as unknown as Schema.Codec<V1RemoveAReadReplicaInput>;

// Output Schema
export type V1RemoveAReadReplicaOutput = void;
export const V1RemoveAReadReplicaOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<V1RemoveAReadReplicaOutput>;

// The operation
/**
 * [Beta] Remove a read replica
 *
 * @param ref - Project ref
 */
export const v1RemoveAReadReplica = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1RemoveAReadReplicaInput,
    outputSchema: V1RemoveAReadReplicaOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);
