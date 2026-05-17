import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateApplicationRoleConnectionsMetadataInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/applications/{application_id}/role-connections/metadata",
    }),
  );
export type UpdateApplicationRoleConnectionsMetadataInput =
  typeof UpdateApplicationRoleConnectionsMetadataInput.Type;

// Output Schema
export const UpdateApplicationRoleConnectionsMetadataOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      type: Schema.Unknown,
      key: Schema.String,
      name: Schema.String,
      name_localizations: Schema.optional(
        Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
      ),
      description: Schema.String,
      description_localizations: Schema.optional(
        Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
      ),
    }),
  );
export type UpdateApplicationRoleConnectionsMetadataOutput =
  typeof UpdateApplicationRoleConnectionsMetadataOutput.Type;

// The operation
export const updateApplicationRoleConnectionsMetadata =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UpdateApplicationRoleConnectionsMetadataInput,
    outputSchema: UpdateApplicationRoleConnectionsMetadataOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
