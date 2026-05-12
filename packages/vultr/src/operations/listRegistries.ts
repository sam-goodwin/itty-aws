import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const ListRegistriesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/registries" }));
export type ListRegistriesInput = typeof ListRegistriesInput.Type;

// Output Schema
export const ListRegistriesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  registries: Schema.optional(
    Schema.Array(
      Schema.Struct({
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
});
export type ListRegistriesOutput = typeof ListRegistriesOutput.Type;

// The operation
/**
 * List Container Registries
 *
 * List All Container Registry Subscriptions for this account
 */
export const listRegistries = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListRegistriesInput,
  outputSchema: ListRegistriesOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
