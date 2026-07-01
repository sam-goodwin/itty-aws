import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface DirectoryUsersControllerListInput {
  before?: string;
  after?: string;
  limit?: number;
  order?: string;
  directory?: string;
  group?: string;
  idp_id?: string;
  email?: string;
}
export const DirectoryUsersControllerListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.String),
    directory: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
    idp_id: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/directory_users" }),
  ) as unknown as Schema.Codec<DirectoryUsersControllerListInput>;

// Output Schema
export interface DirectoryUsersControllerListOutput {
  object?: string;
  data?: ReadonlyArray<{
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
  }>;
  list_metadata?: { before: string | null; after: string | null };
}
export const DirectoryUsersControllerListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
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
        }),
      ),
    ),
    list_metadata: Schema.optional(
      Schema.Struct({
        before: Schema.NullOr(Schema.String),
        after: Schema.NullOr(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<DirectoryUsersControllerListOutput>;

// The operation
/**
 * List Directory Users
 *
 * Get a list of all of existing Directory Users matching the criteria specified.
 *
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `before="obj_123"` to fetch a new batch of objects before `"obj_123"`.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `after="obj_123"` to fetch a new batch of objects after `"obj_123"`.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time. Supported values are `"asc"` (ascending), `"desc"` (descending), and `"normal"` (descending with reversed cursor semantics where `before` fetches older records and `after` fetches newer records).
 * @param directory - Unique identifier of the WorkOS Directory. This value can be obtained from the WorkOS dashboard or from the WorkOS API.
 * @param group - Unique identifier of the WorkOS Directory Group. This value can be obtained from the WorkOS API.
 * @param idp_id - Filter Directory Users by the identity provider's unique identifier (`idp_id`). Requires the `directory` parameter to also be provided.
 * @param email - Filter Directory Users by their primary email address. Requires the `directory` parameter to also be provided.
 */
export const DirectoryUsersControllerList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DirectoryUsersControllerListInput,
    outputSchema: DirectoryUsersControllerListOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }));
