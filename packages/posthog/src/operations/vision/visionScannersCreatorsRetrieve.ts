import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const VisionScannersCreatorsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/vision/scanners/creators/",
    }),
  );
export type VisionScannersCreatorsRetrieveInput =
  typeof VisionScannersCreatorsRetrieveInput.Type;

// Output Schema
export const VisionScannersCreatorsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
    ),
  });
export type VisionScannersCreatorsRetrieveOutput =
  typeof VisionScannersCreatorsRetrieveOutput.Type;

// The operation
/**
 * Distinct creators across the team's scanners — feeds the `Created by` filter dropdown.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visionScannersCreatorsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VisionScannersCreatorsRetrieveInput,
    outputSchema: VisionScannersCreatorsRetrieveOutput,
  }));
