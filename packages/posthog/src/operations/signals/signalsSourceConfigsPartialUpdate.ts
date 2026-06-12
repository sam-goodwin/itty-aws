import * as Schema from "effect/Schema";
import {
  SignalSourceConfigSourceTypeEnumSchema,
  SourceProductEnumSchema,
} from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SignalsSourceConfigsPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    source_product: Schema.optional(
      Schema.suspend(() => SourceProductEnumSchema),
    ),
    source_type: Schema.optional(
      Schema.suspend(() => SignalSourceConfigSourceTypeEnumSchema),
    ),
    enabled: Schema.optional(Schema.Boolean),
    config: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    status: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/signals/source_configs/{id}/",
    }),
  );
export type SignalsSourceConfigsPartialUpdateInput =
  typeof SignalsSourceConfigsPartialUpdateInput.Type;

// Output Schema
export const SignalsSourceConfigsPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    source_product: Schema.optional(
      Schema.suspend(() => SourceProductEnumSchema),
    ),
    source_type: Schema.optional(
      Schema.suspend(() => SignalSourceConfigSourceTypeEnumSchema),
    ),
    enabled: Schema.optional(Schema.Boolean),
    config: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    status: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type SignalsSourceConfigsPartialUpdateOutput =
  typeof SignalsSourceConfigsPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this signal source config.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsSourceConfigsPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SignalsSourceConfigsPartialUpdateInput,
    outputSchema: SignalsSourceConfigsPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
