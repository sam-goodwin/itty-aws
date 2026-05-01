import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const UserHomeSettingsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/api/user_home_settings/{uuid}/" }));
export type UserHomeSettingsRetrieveInput =
  typeof UserHomeSettingsRetrieveInput.Type;

// Output Schema
export const UserHomeSettingsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tabs: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          pathname: Schema.optional(Schema.String),
          search: Schema.optional(Schema.String),
          hash: Schema.optional(Schema.String),
          title: Schema.optional(Schema.String),
          customTitle: Schema.optional(Schema.NullOr(Schema.String)),
          iconType: Schema.optional(Schema.String),
          sceneId: Schema.optional(Schema.NullOr(Schema.String)),
          sceneKey: Schema.optional(Schema.NullOr(Schema.String)),
          sceneParams: Schema.optional(Schema.Unknown),
          pinned: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
    homepage: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          pathname: Schema.optional(Schema.String),
          search: Schema.optional(Schema.String),
          hash: Schema.optional(Schema.String),
          title: Schema.optional(Schema.String),
          customTitle: Schema.optional(Schema.NullOr(Schema.String)),
          iconType: Schema.optional(Schema.String),
          sceneId: Schema.optional(Schema.NullOr(Schema.String)),
          sceneKey: Schema.optional(Schema.NullOr(Schema.String)),
          sceneParams: Schema.optional(Schema.Unknown),
          pinned: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
  });
export type UserHomeSettingsRetrieveOutput =
  typeof UserHomeSettingsRetrieveOutput.Type;

// The operation
export const userHomeSettingsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UserHomeSettingsRetrieveInput,
    outputSchema: UserHomeSettingsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
