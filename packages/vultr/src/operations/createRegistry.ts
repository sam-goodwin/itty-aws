import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const CreateRegistryInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  public: Schema.Boolean,
  region: Schema.String,
  plan: Schema.String,
}).pipe(T.Http({ method: "POST", path: "/registry" }));
export type CreateRegistryInput = typeof CreateRegistryInput.Type;

// Output Schema
export const CreateRegistryOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  urn: Schema.optional(Schema.String),
  storage: Schema.optional(
    Schema.Struct({
      used: Schema.optional(
        Schema.Struct({
          bytes: Schema.optional(Schema.Number),
          mb: Schema.optional(Schema.Number),
          gb: Schema.optional(Schema.Number),
          tb: Schema.optional(Schema.Number),
          updated_at: Schema.optional(Schema.String),
        }),
      ),
      allowed: Schema.optional(
        Schema.Struct({
          bytes: Schema.optional(Schema.Number),
          mb: Schema.optional(Schema.Number),
          gb: Schema.optional(Schema.Number),
          tb: Schema.optional(Schema.Number),
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
              monthly_price: Schema.optional(Schema.Number),
              pending_charges: Schema.optional(Schema.Number),
            }),
          ),
          plan: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
});
export type CreateRegistryOutput = typeof CreateRegistryOutput.Type;

// The operation
/**
 * Create Container Registry
 *
 * Create a new Container Registry Subscription
 */
export const createRegistry = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateRegistryInput,
  outputSchema: CreateRegistryOutput,
  errors: [UnprocessableEntity] as const,
}));
