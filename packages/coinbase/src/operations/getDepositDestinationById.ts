import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetDepositDestinationByIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    depositDestinationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v2/deposit-destinations/{depositDestinationId}",
    }),
  );
export type GetDepositDestinationByIdInput =
  typeof GetDepositDestinationByIdInput.Type;

// Output Schema
export const GetDepositDestinationByIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type GetDepositDestinationByIdOutput =
  typeof GetDepositDestinationByIdOutput.Type;

// The operation
/**
 * Get deposit destination
 *
 * Get a specific deposit destination by its ID.
 *
 * @param depositDestinationId - The ID of the deposit address to retrieve.
 */
export const getDepositDestinationById = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetDepositDestinationByIdInput,
    outputSchema: GetDepositDestinationByIdOutput,
  }),
);
