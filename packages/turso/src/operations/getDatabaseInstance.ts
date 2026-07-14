import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface GetDatabaseInstanceInput {
  organizationSlug: string;
  databaseName: string;
  instanceName: string;
}
export const GetDatabaseInstanceInput =
  /*@__PURE__*/ Schema.Struct({
    organizationSlug: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/organizations/{organizationSlug}/databases/{databaseName}/instances/{instanceName}",
    }),
  ) as unknown as Schema.Codec<GetDatabaseInstanceInput>;

// Output Schema
export interface GetDatabaseInstanceOutput {
  instance?: {
    uuid?: string;
    name?: string;
    type?: "primary" | "replica";
    region?: string;
    hostname?: string;
  };
}
export const GetDatabaseInstanceOutput =
  /*@__PURE__*/ Schema.Struct({
    instance: Schema.optional(
      Schema.Struct({
        uuid: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["primary", "replica"])),
        region: Schema.optional(Schema.String),
        hostname: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<GetDatabaseInstanceOutput>;

// The operation
/**
 * Retrieve Database Instance
 *
 * Return the individual database instance by name.
 *
 * @param organizationSlug - The slug of the organization or user account.
 * @param databaseName - The name of the database.
 * @param instanceName - The name of the instance (location code).
 */
export const getDatabaseInstance = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetDatabaseInstanceInput,
  outputSchema: GetDatabaseInstanceOutput,
  errors: [NotFound] as const,
}));
