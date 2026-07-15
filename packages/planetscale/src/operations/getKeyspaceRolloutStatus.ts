import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetKeyspaceRolloutStatusInput {
  organization: string;
  database: string;
  branch: string;
  keyspace: string;
}
export const GetKeyspaceRolloutStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
    keyspace: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/databases/{database}/branches/{branch}/keyspaces/{keyspace}/rollout-status",
    }),
  ) as unknown as Schema.Codec<GetKeyspaceRolloutStatusInput>;

// Output Schema
export interface GetKeyspaceRolloutStatusOutput {
  name: string;
  state: string;
  shards: ReadonlyArray<{
    name: string;
    last_rollout_started_at: string;
    last_rollout_finished_at: string;
    state: string;
  }>;
}
export const GetKeyspaceRolloutStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    state: Schema.String,
    shards: Schema.Array(
      Schema.Struct({
        name: Schema.String,
        last_rollout_started_at: Schema.String,
        last_rollout_finished_at: Schema.String,
        state: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<GetKeyspaceRolloutStatusOutput>;

// The operation
/**
 * Get keyspace rollout status
 *
 * @param organization - The name of the organization the branch belongs to
 * @param database - The name of the database the branch belongs to
 * @param branch - The name of the branch
 * @param keyspace - The name of the keyspace
 */
export const getKeyspaceRolloutStatus = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetKeyspaceRolloutStatusInput,
    outputSchema: GetKeyspaceRolloutStatusOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
