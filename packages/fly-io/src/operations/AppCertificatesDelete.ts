import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface AppCertificatesDeleteInput {
  app_name: string;
  hostname: string;
}
export const AppCertificatesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    app_name: Schema.String.pipe(T.PathParam()),
    hostname: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apps/{app_name}/certificates/{hostname}",
    }),
  ) as unknown as Schema.Codec<AppCertificatesDeleteInput>;

// Output Schema
export type AppCertificatesDeleteOutput = void;
export const AppCertificatesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AppCertificatesDeleteOutput>;

// The operation
/**
 * Remove certificate
 *
 * @param app_name - Fly App Name
 * @param hostname - Certificate Hostname
 */
export const AppCertificatesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AppCertificatesDeleteInput,
  outputSchema: AppCertificatesDeleteOutput,
  errors: [Forbidden, NotFound] as const,
}));
