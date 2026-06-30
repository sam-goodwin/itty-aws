import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface PostV1ScmInstallationsInstallIntentsInput {
  provider: "github";
  workspaceId: string;
}
export const PostV1ScmInstallationsInstallIntentsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider: Schema.Literals(["github"]),
    workspaceId: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/v1/scm-installations/install-intents" }),
  ) as unknown as Schema.Codec<PostV1ScmInstallationsInstallIntentsInput>;

// Output Schema
export interface PostV1ScmInstallationsInstallIntentsOutput {
  data: {
    type: string;
    provider: "github";
    workspaceId: string;
    installUrl: string;
  };
}
export const PostV1ScmInstallationsInstallIntentsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Struct({
      type: Schema.String,
      provider: Schema.Literals(["github"]),
      workspaceId: Schema.String,
      installUrl: Schema.String,
    }),
  }) as unknown as Schema.Codec<PostV1ScmInstallationsInstallIntentsOutput>;

// The operation
/**
 * Create an SCM App installation intent
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Creates an installation intent for the given workspace and returns a provider-specific URL that the user opens to install the SCM app. Currently only `github` is supported.
 */
export const postV1ScmInstallationsInstallIntents =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostV1ScmInstallationsInstallIntentsInput,
    outputSchema: PostV1ScmInstallationsInstallIntentsOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }));
