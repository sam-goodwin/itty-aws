import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface DirectoryGroupsControllerListInput {
  before?: string;
  after?: string;
  limit?: number;
  order?: string;
  directory?: string;
  user?: string;
}
export const DirectoryGroupsControllerListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.String),
    directory: Schema.optional(Schema.String),
    user: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/directory_groups" }),
  ) as unknown as Schema.Codec<DirectoryGroupsControllerListInput>;

// Output Schema
export interface DirectoryGroupsControllerListOutput {
  object?: string;
  data?: {
    object?: string;
    id?: string;
    idp_id?: string;
    directory_id?: string;
    organization_id?: string;
    name?: string;
    raw_attributes?: Record<string, unknown>;
    created_at?: string;
    updated_at?: string;
  }[];
  list_metadata?: { before: string | null; after: string | null };
}
export const DirectoryGroupsControllerListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    data: Schema.optional(
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
    list_metadata: Schema.optional(
      Schema.Struct({
        before: Schema.NullOr(Schema.String),
        after: Schema.NullOr(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<DirectoryGroupsControllerListOutput>;

// The operation
/**
 * List Directory Groups
 *
 * Get a list of all of existing directory groups matching the criteria specified.
 *
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `before="obj_123"` to fetch a new batch of objects before `"obj_123"`.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `after="obj_123"` to fetch a new batch of objects after `"obj_123"`.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time. Supported values are `"asc"` (ascending), `"desc"` (descending), and `"normal"` (descending with reversed cursor semantics where `before` fetches older records and `after` fetches newer records).
 * @param directory - Unique identifier of the WorkOS Directory. This value can be obtained from the WorkOS dashboard or from the WorkOS API.
 * @param user - Unique identifier of the WorkOS Directory User. This value can be obtained from the WorkOS API.
 */
export const DirectoryGroupsControllerList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DirectoryGroupsControllerListInput,
    outputSchema: DirectoryGroupsControllerListOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }));
