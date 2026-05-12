import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ListReplicationsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  registryId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/registry/{registryId}/replications" }));
export type ListReplicationsInput = typeof ListReplicationsInput.Type;

// Output Schema
export const ListReplicationsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    replications: Schema.optional(
      Schema.Array(
        Schema.Struct({
          region: Schema.optional(Schema.String),
          namespace: Schema.optional(Schema.String),
          urn: Schema.optional(Schema.String),
        }),
      ),
    ),
    meta: Schema.optional(
      Schema.Struct({
        total: Schema.optional(Schema.Number),
        links: Schema.optional(
          Schema.Struct({
            next: Schema.optional(Schema.String),
            prev: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  },
);
export type ListReplicationsOutput = typeof ListReplicationsOutput.Type;

// The operation
/**
 * List Replication Policies
 *
 * List All Replication Policies in a Container Registry Subscription
 *
 * @param registryId - The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries).
 */
export const listReplications = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListReplicationsInput,
  outputSchema: ListReplicationsOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
