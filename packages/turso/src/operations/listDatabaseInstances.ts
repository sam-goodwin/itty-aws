import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface ListDatabaseInstancesInput {
  organizationSlug: string;
  databaseName: string;
}
export const ListDatabaseInstancesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationSlug: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/organizations/{organizationSlug}/databases/{databaseName}/instances",
    }),
  ) as unknown as Schema.Codec<ListDatabaseInstancesInput>;

// Output Schema
export interface ListDatabaseInstancesOutput {
  instances?: {
    uuid?: string;
    name?: string;
    type?: "primary" | "replica";
    region?: string;
    hostname?: string;
  }[];
}
export const ListDatabaseInstancesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instances: Schema.optional(
      Schema.Array(
        Schema.Struct({
          uuid: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.Literals(["primary", "replica"])),
          region: Schema.optional(Schema.String),
          hostname: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ListDatabaseInstancesOutput>;

// The operation
/**
 * List Database Instances
 *
 * Returns a list of instances of a database. Instances are the individual primary or replica databases in each region defined by the group.
 *
 * @param organizationSlug - The slug of the organization or user account.
 * @param databaseName - The name of the database.
 */
export const listDatabaseInstances = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListDatabaseInstancesInput,
    outputSchema: ListDatabaseInstancesOutput,
    errors: [NotFound] as const,
  }),
);
