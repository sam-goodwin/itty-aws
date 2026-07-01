import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DeleteTerminalReadersReaderInput {
  reader: string;
}
export const DeleteTerminalReadersReaderInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reader: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/terminal/readers/{reader}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<DeleteTerminalReadersReaderInput>;

// Output Schema
export interface DeleteTerminalReadersReaderOutput {
  deleted: true;
  device_type:
    | "bbpos_chipper2x"
    | "bbpos_wisepad3"
    | "bbpos_wisepos_e"
    | "mobile_phone_reader"
    | "simulated_stripe_s700"
    | "simulated_stripe_s710"
    | "simulated_verifone_m425"
    | "simulated_verifone_p630"
    | "simulated_verifone_ux700"
    | "simulated_verifone_v660p"
    | "simulated_wisepos_e"
    | "stripe_m2"
    | "stripe_s700"
    | "stripe_s710"
    | "verifone_P400"
    | "verifone_m425"
    | "verifone_p630"
    | "verifone_ux700"
    | "verifone_v660p";
  id: string;
  object: "terminal.reader";
  serial_number: string;
}
export const DeleteTerminalReadersReaderOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deleted: Schema.Literals([true]),
    device_type: Schema.Literals([
      "bbpos_chipper2x",
      "bbpos_wisepad3",
      "bbpos_wisepos_e",
      "mobile_phone_reader",
      "simulated_stripe_s700",
      "simulated_stripe_s710",
      "simulated_verifone_m425",
      "simulated_verifone_p630",
      "simulated_verifone_ux700",
      "simulated_verifone_v660p",
      "simulated_wisepos_e",
      "stripe_m2",
      "stripe_s700",
      "stripe_s710",
      "verifone_P400",
      "verifone_m425",
      "verifone_p630",
      "verifone_ux700",
      "verifone_v660p",
    ]),
    id: Schema.String,
    object: Schema.Literals(["terminal.reader"]),
    serial_number: Schema.String,
  }) as unknown as Schema.Codec<DeleteTerminalReadersReaderOutput>;

// The operation
/**
 * Delete a Reader
 *
 * <p>Deletes a <code>Reader</code> object.</p>
 */
export const DeleteTerminalReadersReader = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteTerminalReadersReaderInput,
    outputSchema: DeleteTerminalReadersReaderOutput,
  }),
);
