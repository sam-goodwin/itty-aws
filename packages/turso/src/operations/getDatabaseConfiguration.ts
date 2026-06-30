import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface GetDatabaseConfigurationInput {
  organizationSlug: string;
  databaseName: string;
}
export const GetDatabaseConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationSlug: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/organizations/{organizationSlug}/databases/{databaseName}/configuration",
    }),
  ) as unknown as Schema.Codec<GetDatabaseConfigurationInput>;

// Output Schema
export interface GetDatabaseConfigurationOutput {
  size_limit?: string;
  allow_attach?: boolean;
  block_reads?: boolean;
  block_writes?: boolean;
  delete_protection?: boolean;
  allowed_ips?: string[];
  allowed_aws_vpc_ids?: string[];
}
export const GetDatabaseConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    size_limit: Schema.optional(Schema.String),
    allow_attach: Schema.optional(Schema.Boolean),
    block_reads: Schema.optional(Schema.Boolean),
    block_writes: Schema.optional(Schema.Boolean),
    delete_protection: Schema.optional(Schema.Boolean),
    allowed_ips: Schema.optional(Schema.Array(Schema.String)),
    allowed_aws_vpc_ids: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<GetDatabaseConfigurationOutput>;

// The operation
/**
 * Retrieve Database Configuration
 *
 * Retrieve an individual database configuration belonging to the organization or user.
 *
 * @param organizationSlug - The slug of the organization or user account.
 * @param databaseName - The name of the database.
 */
export const getDatabaseConfiguration = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetDatabaseConfigurationInput,
    outputSchema: GetDatabaseConfigurationOutput,
    errors: [NotFound] as const,
  }),
);
