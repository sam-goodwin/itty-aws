import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface VisionScannersCreatorsRetrieveInput {
  project_id: string;
}
export const VisionScannersCreatorsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/vision/scanners/creators/",
    }),
  ) as unknown as Schema.Codec<VisionScannersCreatorsRetrieveInput>;

// Output Schema
export interface VisionScannersCreatorsRetrieveOutput {
  creators: {
    id?: number;
    uuid?: string;
    distinct_id?: string | null;
    first_name?: string;
    last_name?: string;
    email?: string;
    is_email_verified?: boolean | null;
    hedgehog_config?: Record<string, unknown> | null;
    role_at_organization?:
      | "engineering"
      | "data"
      | "product"
      | "founder"
      | "leadership"
      | "marketing"
      | "sales"
      | "other"
      | ""
      | null;
  }[];
}
export const VisionScannersCreatorsRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    creators: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        role_at_organization: Schema.optional(
          Schema.NullOr(
            Schema.Union([
              Schema.Literals([
                "engineering",
                "data",
                "product",
                "founder",
                "leadership",
                "marketing",
                "sales",
                "other",
              ]),
              Schema.Literals([""]),
            ]),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<VisionScannersCreatorsRetrieveOutput>;

// The operation
/**
 * Distinct creators across the team's scanners — feeds the `Created by` filter dropdown.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visionScannersCreatorsRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VisionScannersCreatorsRetrieveInput,
    outputSchema: VisionScannersCreatorsRetrieveOutput,
  }));
