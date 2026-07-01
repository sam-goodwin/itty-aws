import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface AuthorizationPermissionsControllerListInput {
  before?: string;
  after?: string;
  limit?: number;
  order?: string;
}
export const AuthorizationPermissionsControllerListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/authorization/permissions" }),
  ) as unknown as Schema.Codec<AuthorizationPermissionsControllerListInput>;

// Output Schema
export interface AuthorizationPermissionsControllerListOutput {
  object?: string;
  data?: {
    object?: string;
    id?: string;
    slug?: string;
    name?: string;
    description?: string | null;
    system?: boolean;
    resource_type_slug?: string;
    created_at?: string;
    updated_at?: string;
  }[];
  list_metadata?: { before: string | null; after: string | null };
}
export const AuthorizationPermissionsControllerListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          object: Schema.optional(Schema.String),
          id: Schema.optional(Schema.String),
          slug: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          description: Schema.optional(Schema.NullOr(Schema.String)),
          system: Schema.optional(Schema.Boolean),
          resource_type_slug: Schema.optional(Schema.String),
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
        }),
      ),
    ),
    list_metadata: Schema.optional(
      Schema.Struct({
        before: Schema.NullOr(Schema.String),
        after: Schema.NullOr(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<AuthorizationPermissionsControllerListOutput>;

// The operation
/**
 * List permissions
 *
 * Get a list of all permissions in your WorkOS environment.
 *
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `before="obj_123"` to fetch a new batch of objects before `"obj_123"`.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `after="obj_123"` to fetch a new batch of objects after `"obj_123"`.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time. Supported values are `"asc"` (ascending), `"desc"` (descending), and `"normal"` (descending with reversed cursor semantics where `before` fetches older records and `after` fetches newer records).
 */
export const AuthorizationPermissionsControllerList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationPermissionsControllerListInput,
    outputSchema: AuthorizationPermissionsControllerListOutput,
    errors: [NotFound] as const,
  }));
