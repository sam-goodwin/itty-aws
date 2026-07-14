import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetTerminalConfigurationsConfigurationInput {
  configuration: string;
  expand?: string;
}
export const GetTerminalConfigurationsConfigurationInput =
  /*@__PURE__*/ Schema.Struct({
    configuration: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/terminal/configurations/{configuration}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetTerminalConfigurationsConfigurationInput>;

// Output Schema
export type GetTerminalConfigurationsConfigurationOutput = unknown;
export const GetTerminalConfigurationsConfigurationOutput =
  /*@__PURE__*/ Schema.Unknown as unknown as Schema.Codec<GetTerminalConfigurationsConfigurationOutput>;

// The operation
/**
 * Retrieve a Configuration
 *
 * <p>Retrieves a <code>Configuration</code> object.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetTerminalConfigurationsConfiguration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetTerminalConfigurationsConfigurationInput,
    outputSchema: GetTerminalConfigurationsConfigurationOutput,
  }));
