import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DeleteTerminalLocationsLocationInput {
  location: string;
}
export const DeleteTerminalLocationsLocationInput =
  /*@__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/terminal/locations/{location}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<DeleteTerminalLocationsLocationInput>;

// Output Schema
export interface DeleteTerminalLocationsLocationOutput {
  deleted: true;
  id: string;
  object: "terminal.location";
}
export const DeleteTerminalLocationsLocationOutput =
  /*@__PURE__*/ Schema.Struct({
    deleted: Schema.Literals([true]),
    id: Schema.String,
    object: Schema.Literals(["terminal.location"]),
  }) as unknown as Schema.Codec<DeleteTerminalLocationsLocationOutput>;

// The operation
/**
 * Delete a Location
 *
 * <p>Deletes a <code>Location</code> object.</p>
 */
export const DeleteTerminalLocationsLocation =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeleteTerminalLocationsLocationInput,
    outputSchema: DeleteTerminalLocationsLocationOutput,
  }));
