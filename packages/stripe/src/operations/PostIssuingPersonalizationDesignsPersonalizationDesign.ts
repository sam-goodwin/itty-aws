import * as Schema from "effect/Schema";
import {
  issuing_personalization_design_preferencesSchema,
  issuing_personalization_design_rejection_reasonsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostIssuingPersonalizationDesignsPersonalizationDesignInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    personalization_design: Schema.String.pipe(T.PathParam()),
    card_logo: Schema.optional(Schema.Unknown),
    carrier_text: Schema.optional(Schema.Unknown),
    expand: Schema.optional(Schema.Array(Schema.String)),
    lookup_key: Schema.optional(Schema.Unknown),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.Unknown),
    physical_bundle: Schema.optional(Schema.String),
    preferences: Schema.optional(
      Schema.Struct({
        is_default: Schema.Boolean,
      }),
    ),
    transfer_lookup_key: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/issuing/personalization_designs/{personalization_design}",
      contentType: "form-urlencoded",
    }),
  );
export type PostIssuingPersonalizationDesignsPersonalizationDesignInput =
  typeof PostIssuingPersonalizationDesignsPersonalizationDesignInput.Type;

// Output Schema
export const PostIssuingPersonalizationDesignsPersonalizationDesignOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    card_logo: Schema.Unknown,
    carrier_text: Schema.Unknown,
    created: Schema.Number,
    id: Schema.String,
    livemode: Schema.Boolean,
    lookup_key: Schema.NullOr(Schema.String),
    metadata: Schema.Record(Schema.String, Schema.String),
    name: Schema.NullOr(Schema.String),
    object: Schema.Literals(["issuing.personalization_design"]),
    physical_bundle: Schema.Unknown,
    preferences: Schema.suspend(
      () => issuing_personalization_design_preferencesSchema,
    ),
    rejection_reasons: Schema.suspend(
      () => issuing_personalization_design_rejection_reasonsSchema,
    ),
    status: Schema.Literals(["active", "inactive", "rejected", "review"]),
  });
export type PostIssuingPersonalizationDesignsPersonalizationDesignOutput =
  typeof PostIssuingPersonalizationDesignsPersonalizationDesignOutput.Type;

// The operation
/**
 * Update a personalization design
 *
 * <p>Updates a card personalization object.</p>
 */
export const PostIssuingPersonalizationDesignsPersonalizationDesign =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostIssuingPersonalizationDesignsPersonalizationDesignInput,
    outputSchema: PostIssuingPersonalizationDesignsPersonalizationDesignOutput,
  }));
