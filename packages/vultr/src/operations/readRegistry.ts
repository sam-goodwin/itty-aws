import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const ReadRegistryInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  registryId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/registry/{registryId}" }));
export type ReadRegistryInput = typeof ReadRegistryInput.Type;

// Output Schema
export const ReadRegistryOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  urn: Schema.optional(Schema.String),
  storage: Schema.optional(
    Schema.Struct({
      used: Schema.optional(
        Schema.Struct({
          bytes: Schema.optional(Schema.Unknown),
          mb: Schema.optional(Schema.Unknown),
          gb: Schema.optional(Schema.Unknown),
          tb: Schema.optional(Schema.Unknown),
          updated_at: Schema.optional(Schema.String),
        }),
      ),
      allowed: Schema.optional(
        Schema.Struct({
          bytes: Schema.optional(Schema.Unknown),
          mb: Schema.optional(Schema.Unknown),
          gb: Schema.optional(Schema.Unknown),
          tb: Schema.optional(Schema.Unknown),
          updated_at: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
  date_created: Schema.optional(Schema.String),
  public: Schema.optional(Schema.Boolean),
  root_user: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.Number),
      username: Schema.optional(Schema.String),
      password: Schema.optional(SensitiveString),
      root: Schema.optional(Schema.Boolean),
      added_at: Schema.optional(Schema.String),
      updated_at: Schema.optional(Schema.String),
    }),
  ),
  metadata: Schema.optional(
    Schema.Struct({
      region: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          name: Schema.optional(Schema.String),
          urn: Schema.optional(Schema.String),
          base_url: Schema.optional(Schema.String),
          public: Schema.optional(Schema.Boolean),
          added_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
          data_center: Schema.optional(Schema.Unknown),
        }),
      ),
      subscription: Schema.optional(
        Schema.Struct({
          billing: Schema.optional(
            Schema.Struct({
              monthly_price: Schema.optional(Schema.Unknown),
              pending_charges: Schema.optional(Schema.Unknown),
            }),
          ),
        }),
      ),
    }),
  ),
});
export type ReadRegistryOutput = typeof ReadRegistryOutput.Type;

// The operation
/**
 * Read Container Registry
 *
 * Get a single Container Registry Subscription
 *
 * @param registryId - The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries).
 */
export const readRegistry = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReadRegistryInput,
  outputSchema: ReadRegistryOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
