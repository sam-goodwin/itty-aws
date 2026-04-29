import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DirectoryUsersControllerFindInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/directory_users/{id}" }));
export type DirectoryUsersControllerFindInput =
  typeof DirectoryUsersControllerFindInput.Type;

// Output Schema
export const DirectoryUsersControllerFindOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    directory_id: Schema.String,
    organization_id: Schema.String,
    idp_id: Schema.String,
    email: Schema.NullOr(Schema.String),
    first_name: Schema.optional(Schema.NullOr(Schema.String)),
    last_name: Schema.optional(Schema.NullOr(Schema.String)),
    emails: Schema.optional(
      Schema.Array(
        Schema.Struct({
          primary: Schema.optional(Schema.Boolean),
          type: Schema.optional(Schema.String),
          value: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
    job_title: Schema.optional(Schema.NullOr(Schema.String)),
    username: Schema.optional(Schema.NullOr(Schema.String)),
    state: Schema.Literals(["active", "suspended", "inactive"]),
    raw_attributes: Schema.Record(Schema.String, Schema.Unknown),
    custom_attributes: Schema.Record(Schema.String, Schema.Unknown),
    role: Schema.optional(
      Schema.Struct({
        slug: Schema.String,
      }),
    ),
    roles: Schema.optional(
      Schema.Array(
        Schema.Struct({
          slug: Schema.String,
        }),
      ),
    ),
    created_at: Schema.String,
    updated_at: Schema.String,
    groups: Schema.Array(
      Schema.Struct({
        object: Schema.String,
        id: Schema.String,
        idp_id: Schema.String,
        directory_id: Schema.String,
        organization_id: Schema.String,
        name: Schema.String,
        raw_attributes: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
  });
export type DirectoryUsersControllerFindOutput =
  typeof DirectoryUsersControllerFindOutput.Type;

// The operation
/**
 * Get a Directory User
 *
 * Get the details of an existing Directory User.
 *
 * @param id - Unique identifier for the Directory User.
 */
export const DirectoryUsersControllerFind =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DirectoryUsersControllerFindInput,
    outputSchema: DirectoryUsersControllerFindOutput,
    errors: [Forbidden, NotFound] as const,
  }));
