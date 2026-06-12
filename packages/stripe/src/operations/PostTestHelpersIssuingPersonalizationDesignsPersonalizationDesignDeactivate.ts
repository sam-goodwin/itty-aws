import * as Schema from "effect/Schema";
import {
  issuing_personalization_design_preferencesSchema,
  issuing_personalization_design_rejection_reasonsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignDeactivateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    personalization_design: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/test_helpers/issuing/personalization_designs/{personalization_design}/deactivate",
      contentType: "form-urlencoded",
    }),
  );
export type PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignDeactivateInput =
  typeof PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignDeactivateInput.Type;

// Output Schema
export const PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignDeactivateOutput =
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
export type PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignDeactivateOutput =
  typeof PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignDeactivateOutput.Type;

// The operation
/**
 * Deactivate a testmode personalization design
 *
 * <p>Updates the <code>status</code> of the specified testmode personalization design object to <code>inactive</code>.</p>
 */
export const PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignDeactivate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignDeactivateInput,
    outputSchema:
      PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignDeactivateOutput,
  }));
