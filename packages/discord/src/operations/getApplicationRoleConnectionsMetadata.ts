import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetApplicationRoleConnectionsMetadataInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/applications/{application_id}/role-connections/metadata",
    }),
  );
export type GetApplicationRoleConnectionsMetadataInput =
  typeof GetApplicationRoleConnectionsMetadataInput.Type;

// Output Schema
export const GetApplicationRoleConnectionsMetadataOutput =
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
export type GetApplicationRoleConnectionsMetadataOutput =
  typeof GetApplicationRoleConnectionsMetadataOutput.Type;

// The operation
export const getApplicationRoleConnectionsMetadata =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetApplicationRoleConnectionsMetadataInput,
    outputSchema: GetApplicationRoleConnectionsMetadataOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
