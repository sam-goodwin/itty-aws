import * as Schema from "effect/Schema";
import { GroupSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const RemoveLocationFromGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationSlug: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/organizations/{organizationSlug}/groups/{groupName}/locations/{location}",
    }),
  );
export type RemoveLocationFromGroupInput =
  typeof RemoveLocationFromGroupInput.Type;

// Output Schema
export const RemoveLocationFromGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group: Schema.optional(Schema.suspend(() => GroupSchema)),
  });
export type RemoveLocationFromGroupOutput =
  typeof RemoveLocationFromGroupOutput.Type;

// The operation
/**
 * Remove Location from Group
 *
 * Removes a location from the specified group.
 *
 * @param organizationSlug - The slug of the organization or user account.
 * @param groupName - The name of the group.
 * @param location - The location code to remove from the group.
 */
export const removeLocationFromGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RemoveLocationFromGroupInput,
    outputSchema: RemoveLocationFromGroupOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
