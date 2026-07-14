import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetOrganizationUsageInput {
  organizationSlug: string;
}
export const GetOrganizationUsageInput =
  /*@__PURE__*/ Schema.Struct({
    organizationSlug: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/organizations/{organizationSlug}/usage",
    }),
  ) as unknown as Schema.Codec<GetOrganizationUsageInput>;

// Output Schema
export interface GetOrganizationUsageOutput {
  organization?: {
    uuid?: string;
    usage?: {
      rows_read?: number;
      rows_written?: number;
      databases?: number;
      locations?: number;
      storage_bytes?: number;
      groups?: number;
      bytes_synced?: number;
    };
    databases?: {
      uuid?: string;
      instances?: {
        uuid?: string;
        usage?: {
          rows_read?: number;
          rows_written?: number;
          storage_bytes?: number;
          bytes_synced?: number;
        };
      }[];
      total?: {
        rows_read?: number;
        rows_written?: number;
        storage_bytes?: number;
        bytes_synced?: number;
      };
    }[];
  };
}
export const GetOrganizationUsageOutput =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.optional(
      Schema.Struct({
        uuid: Schema.optional(Schema.String),
        usage: Schema.optional(
          Schema.Struct({
            rows_read: Schema.optional(Schema.Number),
            rows_written: Schema.optional(Schema.Number),
            databases: Schema.optional(Schema.Number),
            locations: Schema.optional(Schema.Number),
            storage_bytes: Schema.optional(Schema.Number),
            groups: Schema.optional(Schema.Number),
            bytes_synced: Schema.optional(Schema.Number),
          }),
        ),
        databases: Schema.optional(
          Schema.Array(
            Schema.Struct({
              uuid: Schema.optional(Schema.String),
              instances: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    uuid: Schema.optional(Schema.String),
                    usage: Schema.optional(
                      Schema.Struct({
                        rows_read: Schema.optional(Schema.Number),
                        rows_written: Schema.optional(Schema.Number),
                        storage_bytes: Schema.optional(Schema.Number),
                        bytes_synced: Schema.optional(Schema.Number),
                      }),
                    ),
                  }),
                ),
              ),
              total: Schema.optional(
                Schema.Struct({
                  rows_read: Schema.optional(Schema.Number),
                  rows_written: Schema.optional(Schema.Number),
                  storage_bytes: Schema.optional(Schema.Number),
                  bytes_synced: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<GetOrganizationUsageOutput>;

// The operation
/**
 * Organization Usage
 *
 * Fetch current billing cycle usage for an organization.
 *
 * @param organizationSlug - The slug of the organization or user account.
 */
export const getOrganizationUsage = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetOrganizationUsageInput,
  outputSchema: GetOrganizationUsageOutput,
}));
