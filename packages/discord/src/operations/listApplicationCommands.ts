import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListApplicationCommandsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    with_localizations: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({ method: "GET", path: "/applications/{application_id}/commands" }),
  );
export type ListApplicationCommandsInput =
  typeof ListApplicationCommandsInput.Type;

// Output Schema
export const ListApplicationCommandsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.String,
      application_id: Schema.String,
      version: Schema.String,
      default_member_permissions: Schema.NullOr(Schema.String),
      type: Schema.Unknown,
      name: Schema.String,
      name_localized: Schema.optional(Schema.String),
      name_localizations: Schema.optional(
        Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
      ),
      description: Schema.String,
      description_localized: Schema.optional(Schema.String),
      description_localizations: Schema.optional(
        Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
      ),
      guild_id: Schema.optional(Schema.String),
      dm_permission: Schema.optional(Schema.Boolean),
      contexts: Schema.optional(Schema.NullOr(Schema.Array(Schema.Unknown))),
      integration_types: Schema.optional(Schema.Array(Schema.Unknown)),
      options: Schema.optional(Schema.Array(Schema.Unknown)),
      nsfw: Schema.optional(Schema.Boolean),
    }),
  );
export type ListApplicationCommandsOutput =
  typeof ListApplicationCommandsOutput.Type;

// The operation
export const listApplicationCommands = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListApplicationCommandsInput,
    outputSchema: ListApplicationCommandsOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
