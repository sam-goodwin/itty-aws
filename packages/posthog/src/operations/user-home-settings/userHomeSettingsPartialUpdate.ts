import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const UserHomeSettingsPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.String.pipe(T.PathParam()),
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
    homepage: Schema.optional(Schema.Unknown),
  }).pipe(T.Http({ method: "PATCH", path: "/api/user_home_settings/{uuid}/" }));
export type UserHomeSettingsPartialUpdateInput =
  typeof UserHomeSettingsPartialUpdateInput.Type;

// Output Schema
export const UserHomeSettingsPartialUpdateOutput =
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
    homepage: Schema.optional(Schema.Unknown),
  });
export type UserHomeSettingsPartialUpdateOutput =
  typeof UserHomeSettingsPartialUpdateOutput.Type;

// The operation
/**
 * Update the authenticated user's pinned sidebar tabs and/or homepage for the current team. Pass `@me` as the UUID. Send `tabs` to replace the pinned tab list, `homepage` to set the home destination (any PostHog URL — dashboard, insight, search results, scene). Either field may be omitted to leave it unchanged; sending `homepage: null` or `{}` clears the homepage.
 */
export const userHomeSettingsPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserHomeSettingsPartialUpdateInput,
    outputSchema: UserHomeSettingsPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
