import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ListRegistryPlansInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/registry/plan/list" }));
export type ListRegistryPlansInput = typeof ListRegistryPlansInput.Type;

// Output Schema
export const ListRegistryPlansOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    plans: Schema.optional(
      Schema.Struct({
        start_up: Schema.optional(
          Schema.Struct({
            vanity_name: Schema.optional(Schema.String),
            max_storage_mb: Schema.optional(Schema.Number),
            monthly_price: Schema.optional(Schema.Number),
          }),
        ),
        business: Schema.optional(
          Schema.Struct({
            vanity_name: Schema.optional(Schema.String),
            max_storage_mb: Schema.optional(Schema.Number),
            monthly_price: Schema.optional(Schema.Number),
          }),
        ),
        premium: Schema.optional(
          Schema.Struct({
            vanity_name: Schema.optional(Schema.String),
            max_storage_mb: Schema.optional(Schema.Number),
            monthly_price: Schema.optional(Schema.Number),
          }),
        ),
        enterprise: Schema.optional(
          Schema.Struct({
            vanity_name: Schema.optional(Schema.String),
            max_storage_mb: Schema.optional(Schema.Number),
            monthly_price: Schema.optional(Schema.Number),
          }),
        ),
      }),
    ),
  });
export type ListRegistryPlansOutput = typeof ListRegistryPlansOutput.Type;

// The operation
/**
 * List Registry Plans
 *
 * List All Plans to help choose which one is the best fit for your Container Registry
 */
export const listRegistryPlans = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListRegistryPlansInput,
  outputSchema: ListRegistryPlansOutput,
  errors: [UnprocessableEntity] as const,
}));
