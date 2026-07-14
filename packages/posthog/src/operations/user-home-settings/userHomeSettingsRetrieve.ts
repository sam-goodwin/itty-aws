import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface UserHomeSettingsRetrieveInput {
  uuid: string;
}
export const UserHomeSettingsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    uuid: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/api/user_home_settings/{uuid}/" }),
  ) as unknown as Schema.Codec<UserHomeSettingsRetrieveInput>;

// Output Schema
export interface UserHomeSettingsRetrieveOutput {
  tabs?: {
    id?: string;
    pathname?: string;
    search?: string;
    hash?: string;
    title?: string;
    customTitle?: string | null;
    iconType?: string;
    sceneId?: string | null;
    sceneKey?: string | null;
    sceneParams?: unknown;
    pinned?: boolean;
  }[];
  homepage?: {
    id?: string;
    pathname?: string;
    search?: string;
    hash?: string;
    title?: string;
    customTitle?: string | null;
    iconType?: string;
    sceneId?: string | null;
    sceneKey?: string | null;
    sceneParams?: unknown;
    pinned?: boolean;
  } | null;
}
export const UserHomeSettingsRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<UserHomeSettingsRetrieveOutput>;

// The operation
/**
 * Get the authenticated user's pinned sidebar tabs and configured homepage for the current team. Pass `@me` as the UUID.
 */
export const userHomeSettingsRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: UserHomeSettingsRetrieveInput,
  outputSchema: UserHomeSettingsRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
