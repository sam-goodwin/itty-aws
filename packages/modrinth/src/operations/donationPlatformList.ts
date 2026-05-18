import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const DonationPlatformListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/tag/donation_platform" }),
  );
export type DonationPlatformListInput = typeof DonationPlatformListInput.Type;

// Output Schema
export const DonationPlatformListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      short: Schema.String,
      name: Schema.String,
    }),
  );
export type DonationPlatformListOutput = typeof DonationPlatformListOutput.Type;

// The operation
/**
 * Get a list of donation platforms
 *
 * Gets an array of donation platforms and information about them
 */
export const donationPlatformList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DonationPlatformListInput,
    outputSchema: DonationPlatformListOutput,
  }),
);
