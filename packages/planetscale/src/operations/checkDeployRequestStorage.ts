import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface CheckDeployRequestStorageInput {
  organization: string;
  database: string;
  number: number;
}
export const CheckDeployRequestStorageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    number: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/databases/{database}/deploy-requests/{number}/storage-check",
    }),
  ) as unknown as Schema.Codec<CheckDeployRequestStorageInput>;

// Output Schema
export interface CheckDeployRequestStorageOutput {
  enough_storage: boolean;
  upgradeable: boolean;
  storage_bytes_needed: number;
  storage_report: Record<
    string,
    Record<
      string,
      {
        used?: number;
        capacity?: number;
        remaining?: number;
        percentage_used?: number;
        storage_needed?: number;
        has_enough?: boolean;
      }
    >
  >;
}
export const CheckDeployRequestStorageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enough_storage: Schema.Boolean,
    upgradeable: Schema.Boolean,
    storage_bytes_needed: Schema.Number,
    storage_report: Schema.Record(
      Schema.String,
      Schema.Record(
        Schema.String,
        Schema.Struct({
          used: Schema.optional(Schema.Number),
          capacity: Schema.optional(Schema.Number),
          remaining: Schema.optional(Schema.Number),
          percentage_used: Schema.optional(Schema.Number),
          storage_needed: Schema.optional(Schema.Number),
          has_enough: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<CheckDeployRequestStorageOutput>;

// The operation
/**
 * Check deploy request storage
 *
 * Checks whether the deploy request's target branch cluster has enough storage to safely deploy the schema changes.
 *
 * @param organization - The name of the deploy request's organization
 * @param database - The name of the deploy request's database
 * @param number - The number of the deploy request
 */
export const checkDeployRequestStorage = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CheckDeployRequestStorageInput,
    outputSchema: CheckDeployRequestStorageOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
