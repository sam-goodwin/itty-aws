import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetBareMetalsUpgradesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    baremetalId: Schema.String.pipe(T.PathParam()),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/bare-metals/{baremetalId}/upgrades" }),
  );
export type GetBareMetalsUpgradesInput = typeof GetBareMetalsUpgradesInput.Type;

// Output Schema
export const GetBareMetalsUpgradesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    upgrades: Schema.optional(
      Schema.Struct({
        applications: Schema.optional(Schema.Array(Schema.Unknown)),
        os: Schema.optional(Schema.Array(Schema.Unknown)),
      }),
    ),
  });
export type GetBareMetalsUpgradesOutput =
  typeof GetBareMetalsUpgradesOutput.Type;

// The operation
/**
 * Get Available Bare Metal Upgrades
 *
 * Get available upgrades for a Bare Metal
 *
 * @param baremetalId - The [Bare Metal id](#operation/list-baremetals).
 * @param type - Filter upgrade by type:

- all (applications, plans)
- applications
- os
 */
export const getBareMetalsUpgrades = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetBareMetalsUpgradesInput,
    outputSchema: GetBareMetalsUpgradesOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
