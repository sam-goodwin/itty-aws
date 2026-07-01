import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface DirectoryUsersControllerFindInput {
  id: string;
}
export const DirectoryUsersControllerFindInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/directory_users/{id}" }),
  ) as unknown as Schema.Codec<DirectoryUsersControllerFindInput>;

// Output Schema
export interface DirectoryUsersControllerFindOutput {
  object?: string;
  id?: string;
  directory_id?: string;
  organization_id?: string;
  idp_id?: string;
  email?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  name?: string | null;
  emails?: ReadonlyArray<{
    primary?: boolean;
    type?: string;
    value?: string | null;
  }>;
  job_title?: string | null;
  username?: string | null;
  state?: "active" | "suspended" | "inactive";
  raw_attributes?: Record<string, unknown>;
  custom_attributes?: Record<string, unknown>;
  role?: { slug?: string };
  roles?: ReadonlyArray<{ slug?: string }>;
  created_at?: string;
  updated_at?: string;
  groups?: ReadonlyArray<{
    object?: string;
    id?: string;
    idp_id?: string;
    directory_id?: string;
    organization_id?: string;
    name?: string;
    raw_attributes?: Record<string, unknown>;
    created_at?: string;
    updated_at?: string;
  }>;
}
export const DirectoryUsersControllerFindOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    directory_id: Schema.optional(Schema.String),
    organization_id: Schema.optional(Schema.String),
    idp_id: Schema.optional(Schema.String),
    email: Schema.optional(Schema.NullOr(Schema.String)),
    first_name: Schema.optional(Schema.NullOr(Schema.String)),
    last_name: Schema.optional(Schema.NullOr(Schema.String)),
    name: Schema.optional(Schema.NullOr(Schema.String)),
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
    state: Schema.optional(
      Schema.Literals(["active", "suspended", "inactive"]),
    ),
    raw_attributes: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    custom_attributes: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    role: Schema.optional(
      Schema.Struct({
        slug: Schema.optional(Schema.String),
      }),
    ),
    roles: Schema.optional(
      Schema.Array(
        Schema.Struct({
          slug: Schema.optional(Schema.String),
        }),
      ),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    groups: Schema.optional(
      Schema.Array(
        Schema.Struct({
          object: Schema.optional(Schema.String),
          id: Schema.optional(Schema.String),
          idp_id: Schema.optional(Schema.String),
          directory_id: Schema.optional(Schema.String),
          organization_id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          raw_attributes: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<DirectoryUsersControllerFindOutput>;

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
