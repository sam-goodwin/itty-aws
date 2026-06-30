/**
 * Cloudflare PAGES API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service pages
 */

import * as Schema from "@distilled.cloud/core/schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";
import { UploadableSchema } from "../schemas.ts";

// =============================================================================
// Errors
// =============================================================================

export class ActiveProductionDeployment extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ActiveProductionDeployment>()(
    "ActiveProductionDeployment",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 8000034 }],
) {}

export class DeploymentNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<DeploymentNotFound>()("DeploymentNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 8000009 }],
) {}

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class PagesDomainAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<PagesDomainAlreadyExists>()(
    "PagesDomainAlreadyExists",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 8000018 }],
) {}

export class PagesDomainNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<PagesDomainNotFound>()("PagesDomainNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 8000021 }],
) {}

export class ProjectAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ProjectAlreadyExists>()("ProjectAlreadyExists", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 8000002 }],
) {}

export class ProjectNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ProjectNotFound>()("ProjectNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 8000007 }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface BuildConfig {
  /** The classifying tag for analytics. */
  webAnalyticsTag: string | null;
  /** The auth token for analytics. */
  webAnalyticsToken: string | null;
  /** Enable build caching for the project. */
  buildCaching?: boolean | null;
  /** Command used to build project. */
  buildCommand?: string | null;
  /** Assets output directory of the build. */
  destinationDir?: string | null;
  /** Directory to run the command. */
  rootDir?: string | null;
}
const BuildConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    webAnalyticsTag: Schema.Union([Schema.String, Schema.Null]),
    webAnalyticsToken: Schema.Union([Schema.String, Schema.Null]),
    buildCaching: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    buildCommand: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    destinationDir: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    rootDir: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      webAnalyticsTag: "web_analytics_tag",
      webAnalyticsToken: "web_analytics_token",
      buildCaching: "build_caching",
      buildCommand: "build_command",
      destinationDir: "destination_dir",
      rootDir: "root_dir",
    }),
  ),
) as unknown as Schema.Codec<BuildConfig>;

interface Metadata {
  /** Where the trigger happened. */
  branch: string;
  /** Whether the deployment trigger commit was dirty. */
  commitDirty: boolean;
  /** Hash of the deployment trigger commit. */
  commitHash: string;
  /** Message of the deployment trigger commit. */
  commitMessage: string;
}
const Metadata = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    branch: Schema.String,
    commitDirty: Schema.Boolean,
    commitHash: Schema.String,
    commitMessage: Schema.String,
  }).pipe(
    Schema.encodeKeys({
      branch: "branch",
      commitDirty: "commit_dirty",
      commitHash: "commit_hash",
      commitMessage: "commit_message",
    }),
  ),
) as unknown as Schema.Codec<Metadata>;

interface DeploymentTrigger {
  /** Additional info about the trigger. */
  metadata: {
    branch: string;
    commitDirty: boolean;
    commitHash: string;
    commitMessage: string;
  };
  /** What caused the deployment. */
  type: "github:push" | "ad_hoc" | "deploy_hook" | (string & {});
}
const DeploymentTrigger = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    metadata: Metadata,
    type: Schema.Union([
      Schema.Literals(["github:push", "ad_hoc", "deploy_hook"]),
      Schema.String,
    ]),
  }),
) as unknown as Schema.Codec<DeploymentTrigger>;

interface Stage {
  /** When the stage ended. */
  endedOn: string | null;
  /** The current build stage. */
  name:
    | "queued"
    | "initialize"
    | "clone_repo"
    | "build"
    | "deploy"
    | (string & {});
  /** When the stage started. */
  startedOn: string | null;
  /** State of the current stage. */
  status:
    | "success"
    | "idle"
    | "active"
    | "failure"
    | "canceled"
    | (string & {});
}
const Stage = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    endedOn: Schema.Union([Schema.String, Schema.Null]),
    name: Schema.Union([
      Schema.Literals([
        "queued",
        "initialize",
        "clone_repo",
        "build",
        "deploy",
      ]),
      Schema.String,
    ]),
    startedOn: Schema.Union([Schema.String, Schema.Null]),
    status: Schema.Union([
      Schema.Literals(["success", "idle", "active", "failure", "canceled"]),
      Schema.String,
    ]),
  }).pipe(
    Schema.encodeKeys({
      endedOn: "ended_on",
      name: "name",
      startedOn: "started_on",
      status: "status",
    }),
  ),
) as unknown as Schema.Codec<Stage>;

interface Config {
  /** @deprecated Use `production_deployments_enabled` and `preview_deployment_setting` for more granular control. */
  deploymentsEnabled: boolean;
  /** The owner of the repository. */
  owner: string;
  /** The owner ID of the repository. */
  ownerId: string;
  /** A list of paths that should be excluded from triggering a preview deployment. Wildcard syntax (` `) is supported. */
  pathExcludes: string[];
  /** A list of paths that should be watched to trigger a preview deployment. Wildcard syntax (` `) is supported. */
  pathIncludes: string[];
  /** Whether to enable PR comments. */
  prCommentsEnabled: boolean;
  /** A list of branches that should not trigger a preview deployment. Wildcard syntax (` `) is supported. Must be used with `preview_deployment_setting` set to `custom`. */
  previewBranchExcludes: string[];
  /** A list of branches that should trigger a preview deployment. Wildcard syntax (` `) is supported. Must be used with `preview_deployment_setting` set to `custom`. */
  previewBranchIncludes: string[];
  /** Controls whether commits to preview branches trigger a preview deployment. */
  previewDeploymentSetting: "all" | "none" | "custom" | (string & {});
  /** The production branch of the repository. */
  productionBranch: string;
  /** Whether to trigger a production deployment on commits to the production branch. */
  productionDeploymentsEnabled: boolean;
  /** The ID of the repository. */
  repoId: string;
  /** The name of the repository. */
  repoName: string;
}
const Config = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    deploymentsEnabled: Schema.Boolean,
    owner: Schema.String,
    ownerId: Schema.String,
    pathExcludes: Schema.Array(Schema.String),
    pathIncludes: Schema.Array(Schema.String),
    prCommentsEnabled: Schema.Boolean,
    previewBranchExcludes: Schema.Array(Schema.String),
    previewBranchIncludes: Schema.Array(Schema.String),
    previewDeploymentSetting: Schema.Union([
      Schema.Literals(["all", "none", "custom"]),
      Schema.String,
    ]),
    productionBranch: Schema.String,
    productionDeploymentsEnabled: Schema.Boolean,
    repoId: Schema.String,
    repoName: Schema.String,
  }).pipe(
    Schema.encodeKeys({
      deploymentsEnabled: "deployments_enabled",
      owner: "owner",
      ownerId: "owner_id",
      pathExcludes: "path_excludes",
      pathIncludes: "path_includes",
      prCommentsEnabled: "pr_comments_enabled",
      previewBranchExcludes: "preview_branch_excludes",
      previewBranchIncludes: "preview_branch_includes",
      previewDeploymentSetting: "preview_deployment_setting",
      productionBranch: "production_branch",
      productionDeploymentsEnabled: "production_deployments_enabled",
      repoId: "repo_id",
      repoName: "repo_name",
    }),
  ),
) as unknown as Schema.Codec<Config>;

interface Source {
  config: {
    deploymentsEnabled: boolean;
    owner: string;
    ownerId: string;
    pathExcludes: string[];
    pathIncludes: string[];
    prCommentsEnabled: boolean;
    previewBranchExcludes: string[];
    previewBranchIncludes: string[];
    previewDeploymentSetting: "all" | "none" | "custom" | (string & {});
    productionBranch: string;
    productionDeploymentsEnabled: boolean;
    repoId: string;
    repoName: string;
  };
  /** The source control management provider. */
  type: "github" | "gitlab" | (string & {});
}
const Source = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    config: Config,
    type: Schema.Union([Schema.Literals(["github", "gitlab"]), Schema.String]),
  }),
) as unknown as Schema.Codec<Source>;

interface Deployment {
  /** Id of the deployment. */
  id: string;
  /** A list of alias URLs pointing to this deployment. */
  aliases: string[] | null;
  /** Configs for the project build process. */
  buildConfig: {
    webAnalyticsTag: string | null;
    webAnalyticsToken: string | null;
    buildCaching?: boolean | null;
    buildCommand?: string | null;
    destinationDir?: string | null;
    rootDir?: string | null;
  };
  /** When the deployment was created. */
  createdOn: string;
  /** Info about what caused the deployment. */
  deploymentTrigger: {
    metadata: {
      branch: string;
      commitDirty: boolean;
      commitHash: string;
      commitMessage: string;
    };
    type: "github:push" | "ad_hoc" | "deploy_hook" | (string & {});
  };
  /** Environment variables used for builds and Pages Functions. */
  envVars: Record<string, unknown> | null;
  /** Type of deploy. */
  environment: "preview" | "production" | (string & {});
  /** If the deployment has been skipped. */
  isSkipped: boolean;
  /** The status of the deployment. */
  latestStage: {
    endedOn: string | null;
    name:
      | "queued"
      | "initialize"
      | "clone_repo"
      | "build"
      | "deploy"
      | (string & {});
    startedOn: string | null;
    status:
      | "success"
      | "idle"
      | "active"
      | "failure"
      | "canceled"
      | (string & {});
  };
  /** When the deployment was last modified. */
  modifiedOn: string;
  /** Id of the project. */
  projectId: string;
  /** Name of the project. */
  projectName: string;
  /** Short Id (8 character) of the deployment. */
  shortId: string;
  /** Configs for the project source control. */
  source?: {
    config: {
      deploymentsEnabled: boolean;
      owner: string;
      ownerId: string;
      pathExcludes: string[];
      pathIncludes: string[];
      prCommentsEnabled: boolean;
      previewBranchExcludes: string[];
      previewBranchIncludes: string[];
      previewDeploymentSetting: "all" | "none" | "custom" | (string & {});
      productionBranch: string;
      productionDeploymentsEnabled: boolean;
      repoId: string;
      repoName: string;
    };
    type: "github" | "gitlab" | (string & {});
  } | null;
  /** List of past stages. */
  stages: {
    endedOn: string | null;
    name:
      | "queued"
      | "initialize"
      | "clone_repo"
      | "build"
      | "deploy"
      | (string & {});
    startedOn: string | null;
    status:
      | "success"
      | "idle"
      | "active"
      | "failure"
      | "canceled"
      | (string & {});
  }[];
  /** The live URL to view this deployment. */
  url: string;
  /** Whether the deployment uses functions. */
  usesFunctions?: boolean | null;
}
const Deployment = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    aliases: Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    buildConfig: BuildConfig,
    createdOn: Schema.String,
    deploymentTrigger: DeploymentTrigger,
    envVars: Schema.Union([
      Schema.Record(Schema.String, Schema.Unknown),
      Schema.Null,
    ]),
    environment: Schema.Union([
      Schema.Literals(["preview", "production"]),
      Schema.String,
    ]),
    isSkipped: Schema.Boolean,
    latestStage: Stage,
    modifiedOn: Schema.String,
    projectId: Schema.String,
    projectName: Schema.String,
    shortId: Schema.String,
    source: Schema.optional(Schema.Union([Source, Schema.Null])),
    stages: Schema.Array(Stage),
    url: Schema.String,
    usesFunctions: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      aliases: "aliases",
      buildConfig: "build_config",
      createdOn: "created_on",
      deploymentTrigger: "deployment_trigger",
      envVars: "env_vars",
      environment: "environment",
      isSkipped: "is_skipped",
      latestStage: "latest_stage",
      modifiedOn: "modified_on",
      projectId: "project_id",
      projectName: "project_name",
      shortId: "short_id",
      source: "source",
      stages: "stages",
      url: "url",
      usesFunctions: "uses_functions",
    }),
  ),
) as unknown as Schema.Codec<Deployment>;

interface Limits {
  /** CPU time limit in milliseconds. */
  cpuMs: number;
}
const Limits = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    cpuMs: Schema.Number,
  }).pipe(Schema.encodeKeys({ cpuMs: "cpu_ms" })),
) as unknown as Schema.Codec<Limits>;

interface Placement {
  /** Placement mode. */
  mode: string;
}
const Placement = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    mode: Schema.String,
  }),
) as unknown as Schema.Codec<Placement>;

interface Preview {
  /** Whether to always use the latest compatibility date for Pages Functions. */
  alwaysUseLatestCompatibilityDate: boolean;
  /** The major version of the build image to use for Pages Functions. */
  buildImageMajorVersion: number;
  /** Compatibility date used for Pages Functions. */
  compatibilityDate: string;
  /** Compatibility flags used for Pages Functions. */
  compatibilityFlags: string[];
  /** Environment variables used for builds and Pages Functions. */
  envVars: Record<string, unknown> | null;
  /** Whether to fail open when the deployment config cannot be applied. */
  failOpen: boolean;
  /** @deprecated All new projects now use the Standard usage model. */
  usageModel: "standard" | "bundled" | "unbound" | (string & {});
  /** Constellation bindings used for Pages Functions. */
  aiBindings?: Record<string, unknown> | null;
  /** Analytics Engine bindings used for Pages Functions. */
  analyticsEngineDatasets?: Record<string, unknown> | null;
  /** Browser bindings used for Pages Functions. */
  browsers?: Record<string, unknown> | null;
  /** D1 databases used for Pages Functions. */
  d1Databases?: Record<string, unknown> | null;
  /** Durable Object namespaces used for Pages Functions. */
  durableObjectNamespaces?: Record<string, unknown> | null;
  /** Hyperdrive bindings used for Pages Functions. */
  hyperdriveBindings?: Record<string, unknown> | null;
  /** KV namespaces used for Pages Functions. */
  kvNamespaces?: Record<string, unknown> | null;
  /** Limits for Pages Functions. */
  limits?: { cpuMs: number } | null;
  /** mTLS bindings used for Pages Functions. */
  mtlsCertificates?: Record<string, unknown> | null;
  /** Placement setting used for Pages Functions. */
  placement?: { mode: string } | null;
  /** Queue Producer bindings used for Pages Functions. */
  queueProducers?: Record<string, unknown> | null;
  /** R2 buckets used for Pages Functions. */
  r2Buckets?: Record<string, unknown> | null;
  /** Services used for Pages Functions. */
  services?: Record<string, unknown> | null;
  /** Vectorize bindings used for Pages Functions. */
  vectorizeBindings?: Record<string, unknown> | null;
  /** Hash of the Wrangler configuration used for the deployment. */
  wranglerConfigHash?: string | null;
}
const Preview = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    alwaysUseLatestCompatibilityDate: Schema.Boolean,
    buildImageMajorVersion: Schema.Number,
    compatibilityDate: Schema.String,
    compatibilityFlags: Schema.Array(Schema.String),
    envVars: Schema.Union([
      Schema.Record(Schema.String, Schema.Unknown),
      Schema.Null,
    ]),
    failOpen: Schema.Boolean,
    usageModel: Schema.Union([
      Schema.Literals(["standard", "bundled", "unbound"]),
      Schema.String,
    ]),
    aiBindings: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    analyticsEngineDatasets: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    browsers: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    d1Databases: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    durableObjectNamespaces: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    hyperdriveBindings: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    kvNamespaces: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    limits: Schema.optional(Schema.Union([Limits, Schema.Null])),
    mtlsCertificates: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    placement: Schema.optional(Schema.Union([Placement, Schema.Null])),
    queueProducers: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    r2Buckets: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    services: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    vectorizeBindings: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    wranglerConfigHash: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      alwaysUseLatestCompatibilityDate: "always_use_latest_compatibility_date",
      buildImageMajorVersion: "build_image_major_version",
      compatibilityDate: "compatibility_date",
      compatibilityFlags: "compatibility_flags",
      envVars: "env_vars",
      failOpen: "fail_open",
      usageModel: "usage_model",
      aiBindings: "ai_bindings",
      analyticsEngineDatasets: "analytics_engine_datasets",
      browsers: "browsers",
      d1Databases: "d1_databases",
      durableObjectNamespaces: "durable_object_namespaces",
      hyperdriveBindings: "hyperdrive_bindings",
      kvNamespaces: "kv_namespaces",
      limits: "limits",
      mtlsCertificates: "mtls_certificates",
      placement: "placement",
      queueProducers: "queue_producers",
      r2Buckets: "r2_buckets",
      services: "services",
      vectorizeBindings: "vectorize_bindings",
      wranglerConfigHash: "wrangler_config_hash",
    }),
  ),
) as unknown as Schema.Codec<Preview>;

interface DeploymentConfigs {
  /** Configs for preview deploys. */
  preview?: {
    alwaysUseLatestCompatibilityDate: boolean;
    buildImageMajorVersion: number;
    compatibilityDate: string;
    compatibilityFlags: string[];
    envVars: Record<string, unknown> | null;
    failOpen: boolean;
    usageModel: "standard" | "bundled" | "unbound" | (string & {});
    aiBindings?: Record<string, unknown> | null;
    analyticsEngineDatasets?: Record<string, unknown> | null;
    browsers?: Record<string, unknown> | null;
    d1Databases?: Record<string, unknown> | null;
    durableObjectNamespaces?: Record<string, unknown> | null;
    hyperdriveBindings?: Record<string, unknown> | null;
    kvNamespaces?: Record<string, unknown> | null;
    limits?: { cpuMs: number } | null;
    mtlsCertificates?: Record<string, unknown> | null;
    placement?: { mode: string } | null;
    queueProducers?: Record<string, unknown> | null;
    r2Buckets?: Record<string, unknown> | null;
    services?: Record<string, unknown> | null;
    vectorizeBindings?: Record<string, unknown> | null;
    wranglerConfigHash?: string | null;
  } | null;
  /** Configs for production deploys. */
  production?: {
    alwaysUseLatestCompatibilityDate: boolean;
    buildImageMajorVersion: number;
    compatibilityDate: string;
    compatibilityFlags: string[];
    envVars: Record<string, unknown> | null;
    failOpen: boolean;
    usageModel: "standard" | "bundled" | "unbound" | (string & {});
    aiBindings?: Record<string, unknown> | null;
    analyticsEngineDatasets?: Record<string, unknown> | null;
    browsers?: Record<string, unknown> | null;
    d1Databases?: Record<string, unknown> | null;
    durableObjectNamespaces?: Record<string, unknown> | null;
    hyperdriveBindings?: Record<string, unknown> | null;
    kvNamespaces?: Record<string, unknown> | null;
    limits?: { cpuMs: number } | null;
    mtlsCertificates?: Record<string, unknown> | null;
    placement?: { mode: string } | null;
    queueProducers?: Record<string, unknown> | null;
    r2Buckets?: Record<string, unknown> | null;
    services?: Record<string, unknown> | null;
    vectorizeBindings?: Record<string, unknown> | null;
    wranglerConfigHash?: string | null;
  } | null;
}
const DeploymentConfigs = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    preview: Schema.optional(Schema.Union([Preview, Schema.Null])),
    production: Schema.optional(Schema.Union([Preview, Schema.Null])),
  }),
) as unknown as Schema.Codec<DeploymentConfigs>;

interface ListProjectsResponseResult {
  /** ID of the project. */
  id: string;
  /** Most recent production deployment of the project. */
  canonicalDeployment: {
    id: string;
    aliases: string[] | null;
    buildConfig: {
      webAnalyticsTag: string | null;
      webAnalyticsToken: string | null;
      buildCaching?: boolean | null;
      buildCommand?: string | null;
      destinationDir?: string | null;
      rootDir?: string | null;
    };
    createdOn: string;
    deploymentTrigger: {
      metadata: {
        branch: string;
        commitDirty: boolean;
        commitHash: string;
        commitMessage: string;
      };
      type: "github:push" | "ad_hoc" | "deploy_hook" | (string & {});
    };
    envVars: Record<string, unknown> | null;
    environment: "preview" | "production" | (string & {});
    isSkipped: boolean;
    latestStage: {
      endedOn: string | null;
      name:
        | "queued"
        | "initialize"
        | "clone_repo"
        | "build"
        | "deploy"
        | (string & {});
      startedOn: string | null;
      status:
        | "success"
        | "idle"
        | "active"
        | "failure"
        | "canceled"
        | (string & {});
    };
    modifiedOn: string;
    projectId: string;
    projectName: string;
    shortId: string;
    source?: {
      config: {
        deploymentsEnabled: boolean;
        owner: string;
        ownerId: string;
        pathExcludes: string[];
        pathIncludes: string[];
        prCommentsEnabled: boolean;
        previewBranchExcludes: string[];
        previewBranchIncludes: string[];
        previewDeploymentSetting: "all" | "none" | "custom" | (string & {});
        productionBranch: string;
        productionDeploymentsEnabled: boolean;
        repoId: string;
        repoName: string;
      };
      type: "github" | "gitlab" | (string & {});
    } | null;
    stages: {
      endedOn: string | null;
      name:
        | "queued"
        | "initialize"
        | "clone_repo"
        | "build"
        | "deploy"
        | (string & {});
      startedOn: string | null;
      status:
        | "success"
        | "idle"
        | "active"
        | "failure"
        | "canceled"
        | (string & {});
    }[];
    url: string;
    usesFunctions?: boolean | null;
  } | null;
  /** When the project was created. */
  createdOn: string;
  /** Configs for deployments in a project. */
  deploymentConfigs: {
    preview?: {
      alwaysUseLatestCompatibilityDate: boolean;
      buildImageMajorVersion: number;
      compatibilityDate: string;
      compatibilityFlags: string[];
      envVars: Record<string, unknown> | null;
      failOpen: boolean;
      usageModel: "standard" | "bundled" | "unbound" | (string & {});
      aiBindings?: Record<string, unknown> | null;
      analyticsEngineDatasets?: Record<string, unknown> | null;
      browsers?: Record<string, unknown> | null;
      d1Databases?: Record<string, unknown> | null;
      durableObjectNamespaces?: Record<string, unknown> | null;
      hyperdriveBindings?: Record<string, unknown> | null;
      kvNamespaces?: Record<string, unknown> | null;
      limits?: { cpuMs: number } | null;
      mtlsCertificates?: Record<string, unknown> | null;
      placement?: { mode: string } | null;
      queueProducers?: Record<string, unknown> | null;
      r2Buckets?: Record<string, unknown> | null;
      services?: Record<string, unknown> | null;
      vectorizeBindings?: Record<string, unknown> | null;
      wranglerConfigHash?: string | null;
    } | null;
    production?: {
      alwaysUseLatestCompatibilityDate: boolean;
      buildImageMajorVersion: number;
      compatibilityDate: string;
      compatibilityFlags: string[];
      envVars: Record<string, unknown> | null;
      failOpen: boolean;
      usageModel: "standard" | "bundled" | "unbound" | (string & {});
      aiBindings?: Record<string, unknown> | null;
      analyticsEngineDatasets?: Record<string, unknown> | null;
      browsers?: Record<string, unknown> | null;
      d1Databases?: Record<string, unknown> | null;
      durableObjectNamespaces?: Record<string, unknown> | null;
      hyperdriveBindings?: Record<string, unknown> | null;
      kvNamespaces?: Record<string, unknown> | null;
      limits?: { cpuMs: number } | null;
      mtlsCertificates?: Record<string, unknown> | null;
      placement?: { mode: string } | null;
      queueProducers?: Record<string, unknown> | null;
      r2Buckets?: Record<string, unknown> | null;
      services?: Record<string, unknown> | null;
      vectorizeBindings?: Record<string, unknown> | null;
      wranglerConfigHash?: string | null;
    } | null;
  };
  /** Framework the project is using. */
  framework: string;
  /** Version of the framework the project is using. */
  frameworkVersion: string;
  /** Most recent deployment of the project. */
  latestDeployment: {
    id: string;
    aliases: string[] | null;
    buildConfig: {
      webAnalyticsTag: string | null;
      webAnalyticsToken: string | null;
      buildCaching?: boolean | null;
      buildCommand?: string | null;
      destinationDir?: string | null;
      rootDir?: string | null;
    };
    createdOn: string;
    deploymentTrigger: {
      metadata: {
        branch: string;
        commitDirty: boolean;
        commitHash: string;
        commitMessage: string;
      };
      type: "github:push" | "ad_hoc" | "deploy_hook" | (string & {});
    };
    envVars: Record<string, unknown> | null;
    environment: "preview" | "production" | (string & {});
    isSkipped: boolean;
    latestStage: {
      endedOn: string | null;
      name:
        | "queued"
        | "initialize"
        | "clone_repo"
        | "build"
        | "deploy"
        | (string & {});
      startedOn: string | null;
      status:
        | "success"
        | "idle"
        | "active"
        | "failure"
        | "canceled"
        | (string & {});
    };
    modifiedOn: string;
    projectId: string;
    projectName: string;
    shortId: string;
    source?: {
      config: {
        deploymentsEnabled: boolean;
        owner: string;
        ownerId: string;
        pathExcludes: string[];
        pathIncludes: string[];
        prCommentsEnabled: boolean;
        previewBranchExcludes: string[];
        previewBranchIncludes: string[];
        previewDeploymentSetting: "all" | "none" | "custom" | (string & {});
        productionBranch: string;
        productionDeploymentsEnabled: boolean;
        repoId: string;
        repoName: string;
      };
      type: "github" | "gitlab" | (string & {});
    } | null;
    stages: {
      endedOn: string | null;
      name:
        | "queued"
        | "initialize"
        | "clone_repo"
        | "build"
        | "deploy"
        | (string & {});
      startedOn: string | null;
      status:
        | "success"
        | "idle"
        | "active"
        | "failure"
        | "canceled"
        | (string & {});
    }[];
    url: string;
    usesFunctions?: boolean | null;
  } | null;
  /** Name of the project. */
  name: string;
  /** Name of the preview script. */
  previewScriptName: string;
  /** Production branch of the project. Used to identify production deployments. */
  productionBranch: string;
  /** Name of the production script. */
  productionScriptName: string;
  /** Whether the project uses functions. */
  usesFunctions: boolean | null;
  /** Configs for the project build process. */
  buildConfig?: {
    webAnalyticsTag: string | null;
    webAnalyticsToken: string | null;
    buildCaching?: boolean | null;
    buildCommand?: string | null;
    destinationDir?: string | null;
    rootDir?: string | null;
  } | null;
  /** A list of associated custom domains for the project. */
  domains?: string[] | null;
  /** Configs for the project source control. */
  source?: {
    config: {
      deploymentsEnabled: boolean;
      owner: string;
      ownerId: string;
      pathExcludes: string[];
      pathIncludes: string[];
      prCommentsEnabled: boolean;
      previewBranchExcludes: string[];
      previewBranchIncludes: string[];
      previewDeploymentSetting: "all" | "none" | "custom" | (string & {});
      productionBranch: string;
      productionDeploymentsEnabled: boolean;
      repoId: string;
      repoName: string;
    };
    type: "github" | "gitlab" | (string & {});
  } | null;
  /** The Cloudflare subdomain associated with the project. */
  subdomain?: string | null;
}
const ListProjectsResponseResult = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      canonicalDeployment: Schema.Union([Deployment, Schema.Null]),
      createdOn: Schema.String,
      deploymentConfigs: DeploymentConfigs,
      framework: Schema.String,
      frameworkVersion: Schema.String,
      latestDeployment: Schema.Union([Deployment, Schema.Null]),
      name: Schema.String,
      previewScriptName: Schema.String,
      productionBranch: Schema.String,
      productionScriptName: Schema.String,
      usesFunctions: Schema.Union([Schema.Boolean, Schema.Null]),
      buildConfig: Schema.optional(Schema.Union([BuildConfig, Schema.Null])),
      domains: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      source: Schema.optional(Schema.Union([Source, Schema.Null])),
      subdomain: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        canonicalDeployment: "canonical_deployment",
        createdOn: "created_on",
        deploymentConfigs: "deployment_configs",
        framework: "framework",
        frameworkVersion: "framework_version",
        latestDeployment: "latest_deployment",
        name: "name",
        previewScriptName: "preview_script_name",
        productionBranch: "production_branch",
        productionScriptName: "production_script_name",
        usesFunctions: "uses_functions",
        buildConfig: "build_config",
        domains: "domains",
        source: "source",
        subdomain: "subdomain",
      }),
    ),
) as unknown as Schema.Codec<ListProjectsResponseResult>;

interface ListProjectsResponseResultInfo {
  count?: number | null;
  page?: number | null;
  perPage?: number | null;
  totalCount?: number | null;
}
const ListProjectsResponseResultInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      perPage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      totalCount: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        count: "count",
        page: "page",
        perPage: "per_page",
        totalCount: "total_count",
      }),
    ),
  ) as unknown as Schema.Codec<ListProjectsResponseResultInfo>;

interface BuildConfig2 {
  /** Enable build caching for the project. */
  buildCaching?: boolean | null;
  /** Command used to build project. */
  buildCommand?: string | null;
  /** Output directory of the build. */
  destinationDir?: string | null;
  /** Directory to run the command. */
  rootDir?: string | null;
  /** The classifying tag for analytics. */
  webAnalyticsTag?: string | null;
  /** The auth token for analytics. */
  webAnalyticsToken?: string | null;
}
const BuildConfig2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    buildCaching: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    buildCommand: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    destinationDir: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    rootDir: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    webAnalyticsTag: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    webAnalyticsToken: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      buildCaching: "build_caching",
      buildCommand: "build_command",
      destinationDir: "destination_dir",
      rootDir: "root_dir",
      webAnalyticsTag: "web_analytics_tag",
      webAnalyticsToken: "web_analytics_token",
    }),
  ),
) as unknown as Schema.Codec<BuildConfig2>;

interface Preview2 {
  /** Constellation bindings used for Pages Functions. */
  aiBindings?: Record<string, unknown> | null;
  /** Whether to always use the latest compatibility date for Pages Functions. */
  alwaysUseLatestCompatibilityDate?: boolean | null;
  /** Analytics Engine bindings used for Pages Functions. */
  analyticsEngineDatasets?: Record<string, unknown> | null;
  /** Browser bindings used for Pages Functions. */
  browsers?: Record<string, unknown> | null;
  /** The major version of the build image to use for Pages Functions. */
  buildImageMajorVersion?: number | null;
  /** Compatibility date used for Pages Functions. */
  compatibilityDate?: string | null;
  /** Compatibility flags used for Pages Functions. */
  compatibilityFlags?: string[] | null;
  /** D1 databases used for Pages Functions. */
  d1Databases?: Record<string, unknown> | null;
  /** Durable Object namespaces used for Pages Functions. */
  durableObjectNamespaces?: Record<string, unknown> | null;
  /** Environment variables used for builds and Pages Functions. */
  envVars?: Record<string, unknown> | null;
  /** Whether to fail open when the deployment config cannot be applied. */
  failOpen?: boolean | null;
  /** Hyperdrive bindings used for Pages Functions. */
  hyperdriveBindings?: Record<string, unknown> | null;
  /** KV namespaces used for Pages Functions. */
  kvNamespaces?: Record<string, unknown> | null;
  /** Limits for Pages Functions. */
  limits?: { cpuMs: number } | null;
  /** mTLS bindings used for Pages Functions. */
  mtlsCertificates?: Record<string, unknown> | null;
  /** Placement setting used for Pages Functions. */
  placement?: { mode: string } | null;
  /** Queue Producer bindings used for Pages Functions. */
  queueProducers?: Record<string, unknown> | null;
  /** R2 buckets used for Pages Functions. */
  r2Buckets?: Record<string, unknown> | null;
  /** Services used for Pages Functions. */
  services?: Record<string, unknown> | null;
  /** @deprecated All new projects now use the Standard usage model. */
  usageModel?: "standard" | "bundled" | "unbound" | (string & {}) | null;
  /** Vectorize bindings used for Pages Functions. */
  vectorizeBindings?: Record<string, unknown> | null;
  /** Hash of the Wrangler configuration used for the deployment. */
  wranglerConfigHash?: string | null;
}
const Preview2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    aiBindings: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    alwaysUseLatestCompatibilityDate: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    analyticsEngineDatasets: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    browsers: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    buildImageMajorVersion: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    compatibilityDate: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    compatibilityFlags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    d1Databases: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    durableObjectNamespaces: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    envVars: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    failOpen: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    hyperdriveBindings: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    kvNamespaces: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    limits: Schema.optional(Schema.Union([Limits, Schema.Null])),
    mtlsCertificates: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    placement: Schema.optional(Schema.Union([Placement, Schema.Null])),
    queueProducers: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    r2Buckets: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    services: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    usageModel: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["standard", "bundled", "unbound"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    vectorizeBindings: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    wranglerConfigHash: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      aiBindings: "ai_bindings",
      alwaysUseLatestCompatibilityDate: "always_use_latest_compatibility_date",
      analyticsEngineDatasets: "analytics_engine_datasets",
      browsers: "browsers",
      buildImageMajorVersion: "build_image_major_version",
      compatibilityDate: "compatibility_date",
      compatibilityFlags: "compatibility_flags",
      d1Databases: "d1_databases",
      durableObjectNamespaces: "durable_object_namespaces",
      envVars: "env_vars",
      failOpen: "fail_open",
      hyperdriveBindings: "hyperdrive_bindings",
      kvNamespaces: "kv_namespaces",
      limits: "limits",
      mtlsCertificates: "mtls_certificates",
      placement: "placement",
      queueProducers: "queue_producers",
      r2Buckets: "r2_buckets",
      services: "services",
      usageModel: "usage_model",
      vectorizeBindings: "vectorize_bindings",
      wranglerConfigHash: "wrangler_config_hash",
    }),
  ),
) as unknown as Schema.Codec<Preview2>;

interface DeploymentConfigs2 {
  /** Configs for preview deploys. */
  preview?: {
    aiBindings?: Record<string, unknown> | null;
    alwaysUseLatestCompatibilityDate?: boolean | null;
    analyticsEngineDatasets?: Record<string, unknown> | null;
    browsers?: Record<string, unknown> | null;
    buildImageMajorVersion?: number | null;
    compatibilityDate?: string | null;
    compatibilityFlags?: string[] | null;
    d1Databases?: Record<string, unknown> | null;
    durableObjectNamespaces?: Record<string, unknown> | null;
    envVars?: Record<string, unknown> | null;
    failOpen?: boolean | null;
    hyperdriveBindings?: Record<string, unknown> | null;
    kvNamespaces?: Record<string, unknown> | null;
    limits?: { cpuMs: number } | null;
    mtlsCertificates?: Record<string, unknown> | null;
    placement?: { mode: string } | null;
    queueProducers?: Record<string, unknown> | null;
    r2Buckets?: Record<string, unknown> | null;
    services?: Record<string, unknown> | null;
    usageModel?: "standard" | "bundled" | "unbound" | (string & {}) | null;
    vectorizeBindings?: Record<string, unknown> | null;
    wranglerConfigHash?: string | null;
  } | null;
  /** Configs for production deploys. */
  production?: {
    aiBindings?: Record<string, unknown> | null;
    alwaysUseLatestCompatibilityDate?: boolean | null;
    analyticsEngineDatasets?: Record<string, unknown> | null;
    browsers?: Record<string, unknown> | null;
    buildImageMajorVersion?: number | null;
    compatibilityDate?: string | null;
    compatibilityFlags?: string[] | null;
    d1Databases?: Record<string, unknown> | null;
    durableObjectNamespaces?: Record<string, unknown> | null;
    envVars?: Record<string, unknown> | null;
    failOpen?: boolean | null;
    hyperdriveBindings?: Record<string, unknown> | null;
    kvNamespaces?: Record<string, unknown> | null;
    limits?: { cpuMs: number } | null;
    mtlsCertificates?: Record<string, unknown> | null;
    placement?: { mode: string } | null;
    queueProducers?: Record<string, unknown> | null;
    r2Buckets?: Record<string, unknown> | null;
    services?: Record<string, unknown> | null;
    usageModel?: "standard" | "bundled" | "unbound" | (string & {}) | null;
    vectorizeBindings?: Record<string, unknown> | null;
    wranglerConfigHash?: string | null;
  } | null;
}
const DeploymentConfigs2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    preview: Schema.optional(Schema.Union([Preview2, Schema.Null])),
    production: Schema.optional(Schema.Union([Preview2, Schema.Null])),
  }),
) as unknown as Schema.Codec<DeploymentConfigs2>;

interface Config2 {
  /** @deprecated Use `production_deployments_enabled` and `preview_deployment_setting` for more granular control. */
  deploymentsEnabled?: boolean | null;
  /** The owner of the repository. */
  owner?: string | null;
  /** The owner ID of the repository. */
  ownerId?: string | null;
  /** A list of paths that should be excluded from triggering a preview deployment. Wildcard syntax (` `) is supported. */
  pathExcludes?: string[] | null;
  /** A list of paths that should be watched to trigger a preview deployment. Wildcard syntax (` `) is supported. */
  pathIncludes?: string[] | null;
  /** Whether to enable PR comments. */
  prCommentsEnabled?: boolean | null;
  /** A list of branches that should not trigger a preview deployment. Wildcard syntax (` `) is supported. Must be used with `preview_deployment_setting` set to `custom`. */
  previewBranchExcludes?: string[] | null;
  /** A list of branches that should trigger a preview deployment. Wildcard syntax (` `) is supported. Must be used with `preview_deployment_setting` set to `custom`. */
  previewBranchIncludes?: string[] | null;
  /** Controls whether commits to preview branches trigger a preview deployment. */
  previewDeploymentSetting?: "all" | "none" | "custom" | (string & {}) | null;
  /** The production branch of the repository. */
  productionBranch?: string | null;
  /** Whether to trigger a production deployment on commits to the production branch. */
  productionDeploymentsEnabled?: boolean | null;
  /** The ID of the repository. */
  repoId?: string | null;
  /** The name of the repository. */
  repoName?: string | null;
}
const Config2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    deploymentsEnabled: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    owner: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    ownerId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    pathExcludes: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    pathIncludes: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    prCommentsEnabled: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    previewBranchExcludes: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    previewBranchIncludes: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    previewDeploymentSetting: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["all", "none", "custom"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    productionBranch: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    productionDeploymentsEnabled: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    repoId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    repoName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      deploymentsEnabled: "deployments_enabled",
      owner: "owner",
      ownerId: "owner_id",
      pathExcludes: "path_excludes",
      pathIncludes: "path_includes",
      prCommentsEnabled: "pr_comments_enabled",
      previewBranchExcludes: "preview_branch_excludes",
      previewBranchIncludes: "preview_branch_includes",
      previewDeploymentSetting: "preview_deployment_setting",
      productionBranch: "production_branch",
      productionDeploymentsEnabled: "production_deployments_enabled",
      repoId: "repo_id",
      repoName: "repo_name",
    }),
  ),
) as unknown as Schema.Codec<Config2>;

interface Source2 {
  config: {
    deploymentsEnabled?: boolean | null;
    owner?: string | null;
    ownerId?: string | null;
    pathExcludes?: string[] | null;
    pathIncludes?: string[] | null;
    prCommentsEnabled?: boolean | null;
    previewBranchExcludes?: string[] | null;
    previewBranchIncludes?: string[] | null;
    previewDeploymentSetting?: "all" | "none" | "custom" | (string & {}) | null;
    productionBranch?: string | null;
    productionDeploymentsEnabled?: boolean | null;
    repoId?: string | null;
    repoName?: string | null;
  };
  /** The source control management provider. */
  type: "github" | "gitlab" | (string & {});
}
const Source2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    config: Config2,
    type: Schema.Union([Schema.Literals(["github", "gitlab"]), Schema.String]),
  }),
) as unknown as Schema.Codec<Source2>;

interface Deployment2 {
  /** Id of the deployment. */
  id: string;
  /** A list of alias URLs pointing to this deployment. */
  aliases: string[] | null;
  /** Configs for the project build process. */
  buildConfig: {
    webAnalyticsTag: string | null;
    webAnalyticsToken: string | null;
    buildCaching?: boolean | null;
    buildCommand?: string | null;
    destinationDir?: string | null;
    rootDir?: string | null;
  };
  /** When the deployment was created. */
  createdOn: string;
  /** Info about what caused the deployment. */
  deploymentTrigger: {
    metadata: {
      branch: string;
      commitDirty: boolean;
      commitHash: string;
      commitMessage: string;
    };
    type: "github:push" | "ad_hoc" | "deploy_hook" | (string & {});
  };
  /** Environment variables used for builds and Pages Functions. */
  envVars: Record<string, unknown> | null;
  /** Type of deploy. */
  environment: "preview" | "production" | (string & {});
  /** If the deployment has been skipped. */
  isSkipped: boolean;
  /** The status of the deployment. */
  latestStage: {
    endedOn: string | null;
    name:
      | "queued"
      | "initialize"
      | "clone_repo"
      | "build"
      | "deploy"
      | (string & {});
    startedOn: string | null;
    status:
      | "success"
      | "idle"
      | "active"
      | "failure"
      | "canceled"
      | (string & {});
  };
  /** When the deployment was last modified. */
  modifiedOn: string;
  /** Id of the project. */
  projectId: string;
  /** Name of the project. */
  projectName: string;
  /** Short Id (8 character) of the deployment. */
  shortId: string;
  /** Configs for the project source control. */
  source: {
    config: {
      deploymentsEnabled: boolean;
      owner: string;
      ownerId: string;
      pathExcludes: string[];
      pathIncludes: string[];
      prCommentsEnabled: boolean;
      previewBranchExcludes: string[];
      previewBranchIncludes: string[];
      previewDeploymentSetting: "all" | "none" | "custom" | (string & {});
      productionBranch: string;
      productionDeploymentsEnabled: boolean;
      repoId: string;
      repoName: string;
    };
    type: "github" | "gitlab" | (string & {});
  };
  /** List of past stages. */
  stages: {
    endedOn: string | null;
    name:
      | "queued"
      | "initialize"
      | "clone_repo"
      | "build"
      | "deploy"
      | (string & {});
    startedOn: string | null;
    status:
      | "success"
      | "idle"
      | "active"
      | "failure"
      | "canceled"
      | (string & {});
  }[];
  /** The live URL to view this deployment. */
  url: string;
  /** Whether the deployment uses functions. */
  usesFunctions?: boolean | null;
}
const Deployment2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    aliases: Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    buildConfig: BuildConfig,
    createdOn: Schema.String,
    deploymentTrigger: DeploymentTrigger,
    envVars: Schema.Union([
      Schema.Record(Schema.String, Schema.Unknown),
      Schema.Null,
    ]),
    environment: Schema.Union([
      Schema.Literals(["preview", "production"]),
      Schema.String,
    ]),
    isSkipped: Schema.Boolean,
    latestStage: Stage,
    modifiedOn: Schema.String,
    projectId: Schema.String,
    projectName: Schema.String,
    shortId: Schema.String,
    source: Source,
    stages: Schema.Array(Stage),
    url: Schema.String,
    usesFunctions: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      aliases: "aliases",
      buildConfig: "build_config",
      createdOn: "created_on",
      deploymentTrigger: "deployment_trigger",
      envVars: "env_vars",
      environment: "environment",
      isSkipped: "is_skipped",
      latestStage: "latest_stage",
      modifiedOn: "modified_on",
      projectId: "project_id",
      projectName: "project_name",
      shortId: "short_id",
      source: "source",
      stages: "stages",
      url: "url",
      usesFunctions: "uses_functions",
    }),
  ),
) as unknown as Schema.Codec<Deployment2>;

interface DeploymentConfigs3 {
  /** Configs for preview deploys. */
  preview: {
    alwaysUseLatestCompatibilityDate: boolean;
    buildImageMajorVersion: number;
    compatibilityDate: string;
    compatibilityFlags: string[];
    envVars: Record<string, unknown> | null;
    failOpen: boolean;
    usageModel: "standard" | "bundled" | "unbound" | (string & {});
    aiBindings?: Record<string, unknown> | null;
    analyticsEngineDatasets?: Record<string, unknown> | null;
    browsers?: Record<string, unknown> | null;
    d1Databases?: Record<string, unknown> | null;
    durableObjectNamespaces?: Record<string, unknown> | null;
    hyperdriveBindings?: Record<string, unknown> | null;
    kvNamespaces?: Record<string, unknown> | null;
    limits?: { cpuMs: number } | null;
    mtlsCertificates?: Record<string, unknown> | null;
    placement?: { mode: string } | null;
    queueProducers?: Record<string, unknown> | null;
    r2Buckets?: Record<string, unknown> | null;
    services?: Record<string, unknown> | null;
    vectorizeBindings?: Record<string, unknown> | null;
    wranglerConfigHash?: string | null;
  };
  /** Configs for production deploys. */
  production: {
    alwaysUseLatestCompatibilityDate: boolean;
    buildImageMajorVersion: number;
    compatibilityDate: string;
    compatibilityFlags: string[];
    envVars: Record<string, unknown> | null;
    failOpen: boolean;
    usageModel: "standard" | "bundled" | "unbound" | (string & {});
    aiBindings?: Record<string, unknown> | null;
    analyticsEngineDatasets?: Record<string, unknown> | null;
    browsers?: Record<string, unknown> | null;
    d1Databases?: Record<string, unknown> | null;
    durableObjectNamespaces?: Record<string, unknown> | null;
    hyperdriveBindings?: Record<string, unknown> | null;
    kvNamespaces?: Record<string, unknown> | null;
    limits?: { cpuMs: number } | null;
    mtlsCertificates?: Record<string, unknown> | null;
    placement?: { mode: string } | null;
    queueProducers?: Record<string, unknown> | null;
    r2Buckets?: Record<string, unknown> | null;
    services?: Record<string, unknown> | null;
    vectorizeBindings?: Record<string, unknown> | null;
    wranglerConfigHash?: string | null;
  };
}
const DeploymentConfigs3 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    preview: Preview,
    production: Preview,
  }),
) as unknown as Schema.Codec<DeploymentConfigs3>;

interface Data {
  line: string;
  ts: string;
}
const Data = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    line: Schema.String,
    ts: Schema.String,
  }),
) as unknown as Schema.Codec<Data>;

interface ValidationData {
  method?: "http" | "txt" | null;
  status?:
    | "initializing"
    | "pending"
    | "active"
    | "deactivated"
    | "error"
    | null;
  errorMessage?: string | null;
  txtName?: string | null;
  txtValue?: string | null;
}
const ValidationData = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    method: Schema.optional(
      Schema.Union([
        Schema.Literal("http"),
        Schema.Literal("txt"),
        Schema.Null,
      ]),
    ),
    status: Schema.optional(
      Schema.Union([
        Schema.Literal("initializing"),
        Schema.Literal("pending"),
        Schema.Literal("active"),
        Schema.Literal("deactivated"),
        Schema.Literal("error"),
        Schema.Null,
      ]),
    ),
    errorMessage: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    txtName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    txtValue: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      method: "method",
      status: "status",
      errorMessage: "error_message",
      txtName: "txt_name",
      txtValue: "txt_value",
    }),
  ),
) as unknown as Schema.Codec<ValidationData>;

interface VerificationData {
  status?: "pending" | "active" | "deactivated" | "blocked" | "error" | null;
  errorMessage?: string | null;
}
const VerificationData = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    status: Schema.optional(
      Schema.Union([
        Schema.Literal("pending"),
        Schema.Literal("active"),
        Schema.Literal("deactivated"),
        Schema.Literal("blocked"),
        Schema.Literal("error"),
        Schema.Null,
      ]),
    ),
    errorMessage: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({ status: "status", errorMessage: "error_message" }),
  ),
) as unknown as Schema.Codec<VerificationData>;

interface ListProjectDomainsResponseResult {
  id: string;
  certificateAuthority?: "google" | "lets_encrypt" | null;
  createdOn: string;
  domainId: string;
  /** The domain name. */
  name: string;
  status:
    | "initializing"
    | "pending"
    | "active"
    | "deactivated"
    | "blocked"
    | "error"
    | (string & {});
  validationData?: {
    method?: "http" | "txt" | null;
    status?:
      | "initializing"
      | "pending"
      | "active"
      | "deactivated"
      | "error"
      | null;
    errorMessage?: string | null;
    txtName?: string | null;
    txtValue?: string | null;
  } | null;
  verificationData?: {
    status?: "pending" | "active" | "deactivated" | "blocked" | "error" | null;
    errorMessage?: string | null;
  } | null;
  zoneTag?: string | null;
}
const ListProjectDomainsResponseResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      certificateAuthority: Schema.optional(
        Schema.Union([
          Schema.Literal("google"),
          Schema.Literal("lets_encrypt"),
          Schema.Null,
        ]),
      ),
      createdOn: Schema.String,
      domainId: Schema.String,
      name: Schema.String,
      status: Schema.Union([
        Schema.Literals([
          "initializing",
          "pending",
          "active",
          "deactivated",
          "blocked",
          "error",
        ]),
        Schema.String,
      ]),
      validationData: Schema.optional(
        Schema.Union([ValidationData, Schema.Null]),
      ),
      verificationData: Schema.optional(
        Schema.Union([VerificationData, Schema.Null]),
      ),
      zoneTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        certificateAuthority: "certificate_authority",
        createdOn: "created_on",
        domainId: "domain_id",
        name: "name",
        status: "status",
        validationData: "validation_data",
        verificationData: "verification_data",
        zoneTag: "zone_tag",
      }),
    ),
  ) as unknown as Schema.Codec<ListProjectDomainsResponseResult>;

// =============================================================================
// BuildCacheProject
// =============================================================================

export interface PurgeBuildCacheProjectRequest {
  projectName: string;
  /** Identifier. */
  accountId: string;
}

export const PurgeBuildCacheProjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      projectName: Schema.String.pipe(T.HttpPath("projectName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/pages/projects/{projectName}/purge_build_cache",
      }),
    ),
  ) as unknown as Schema.Codec<PurgeBuildCacheProjectRequest>;

export type PurgeBuildCacheProjectResponse = unknown;

export const PurgeBuildCacheProjectResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PurgeBuildCacheProjectResponse>;

export type PurgeBuildCacheProjectError = DefaultErrors;

export const purgeBuildCacheProject: API.OperationMethod<
  PurgeBuildCacheProjectRequest,
  PurgeBuildCacheProjectResponse,
  PurgeBuildCacheProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PurgeBuildCacheProjectRequest,
  output: PurgeBuildCacheProjectResponse,
  errors: [],
}));

// =============================================================================
// Project
// =============================================================================

export interface GetProjectRequest {
  projectName: string;
  /** Identifier. */
  accountId: string;
}

export const GetProjectRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      projectName: Schema.String.pipe(T.HttpPath("projectName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/pages/projects/{projectName}",
      }),
    ),
) as unknown as Schema.Codec<GetProjectRequest>;

export interface GetProjectResponse {
  /** ID of the project. */
  id: string;
  /** Most recent production deployment of the project. */
  canonicalDeployment: {
    id: string;
    aliases: string[] | null;
    buildConfig: {
      webAnalyticsTag: string | null;
      webAnalyticsToken: string | null;
      buildCaching?: boolean | null;
      buildCommand?: string | null;
      destinationDir?: string | null;
      rootDir?: string | null;
    };
    createdOn: string;
    deploymentTrigger: {
      metadata: {
        branch: string;
        commitDirty: boolean;
        commitHash: string;
        commitMessage: string;
      };
      type: "github:push" | "ad_hoc" | "deploy_hook" | (string & {});
    };
    envVars: Record<string, unknown> | null;
    environment: "preview" | "production" | (string & {});
    isSkipped: boolean;
    latestStage: {
      endedOn: string | null;
      name:
        | "queued"
        | "initialize"
        | "clone_repo"
        | "build"
        | "deploy"
        | (string & {});
      startedOn: string | null;
      status:
        | "success"
        | "idle"
        | "active"
        | "failure"
        | "canceled"
        | (string & {});
    };
    modifiedOn: string;
    projectId: string;
    projectName: string;
    shortId: string;
    source?: {
      config: {
        deploymentsEnabled: boolean;
        owner: string;
        ownerId: string;
        pathExcludes: string[];
        pathIncludes: string[];
        prCommentsEnabled: boolean;
        previewBranchExcludes: string[];
        previewBranchIncludes: string[];
        previewDeploymentSetting: "all" | "none" | "custom" | (string & {});
        productionBranch: string;
        productionDeploymentsEnabled: boolean;
        repoId: string;
        repoName: string;
      };
      type: "github" | "gitlab" | (string & {});
    } | null;
    stages: {
      endedOn: string | null;
      name:
        | "queued"
        | "initialize"
        | "clone_repo"
        | "build"
        | "deploy"
        | (string & {});
      startedOn: string | null;
      status:
        | "success"
        | "idle"
        | "active"
        | "failure"
        | "canceled"
        | (string & {});
    }[];
    url: string;
    usesFunctions?: boolean | null;
  } | null;
  /** When the project was created. */
  createdOn: string;
  /** Configs for deployments in a project. */
  deploymentConfigs: {
    preview?: {
      alwaysUseLatestCompatibilityDate: boolean;
      buildImageMajorVersion: number;
      compatibilityDate: string;
      compatibilityFlags: string[];
      envVars: Record<string, unknown> | null;
      failOpen: boolean;
      usageModel: "standard" | "bundled" | "unbound" | (string & {});
      aiBindings?: Record<string, unknown> | null;
      analyticsEngineDatasets?: Record<string, unknown> | null;
      browsers?: Record<string, unknown> | null;
      d1Databases?: Record<string, unknown> | null;
      durableObjectNamespaces?: Record<string, unknown> | null;
      hyperdriveBindings?: Record<string, unknown> | null;
      kvNamespaces?: Record<string, unknown> | null;
      limits?: { cpuMs: number } | null;
      mtlsCertificates?: Record<string, unknown> | null;
      placement?: { mode: string } | null;
      queueProducers?: Record<string, unknown> | null;
      r2Buckets?: Record<string, unknown> | null;
      services?: Record<string, unknown> | null;
      vectorizeBindings?: Record<string, unknown> | null;
      wranglerConfigHash?: string | null;
    } | null;
    production?: {
      alwaysUseLatestCompatibilityDate: boolean;
      buildImageMajorVersion: number;
      compatibilityDate: string;
      compatibilityFlags: string[];
      envVars: Record<string, unknown> | null;
      failOpen: boolean;
      usageModel: "standard" | "bundled" | "unbound" | (string & {});
      aiBindings?: Record<string, unknown> | null;
      analyticsEngineDatasets?: Record<string, unknown> | null;
      browsers?: Record<string, unknown> | null;
      d1Databases?: Record<string, unknown> | null;
      durableObjectNamespaces?: Record<string, unknown> | null;
      hyperdriveBindings?: Record<string, unknown> | null;
      kvNamespaces?: Record<string, unknown> | null;
      limits?: { cpuMs: number } | null;
      mtlsCertificates?: Record<string, unknown> | null;
      placement?: { mode: string } | null;
      queueProducers?: Record<string, unknown> | null;
      r2Buckets?: Record<string, unknown> | null;
      services?: Record<string, unknown> | null;
      vectorizeBindings?: Record<string, unknown> | null;
      wranglerConfigHash?: string | null;
    } | null;
  };
  /** Framework the project is using. */
  framework: string;
  /** Version of the framework the project is using. */
  frameworkVersion: string;
  /** Most recent deployment of the project. */
  latestDeployment: {
    id: string;
    aliases: string[] | null;
    buildConfig: {
      webAnalyticsTag: string | null;
      webAnalyticsToken: string | null;
      buildCaching?: boolean | null;
      buildCommand?: string | null;
      destinationDir?: string | null;
      rootDir?: string | null;
    };
    createdOn: string;
    deploymentTrigger: {
      metadata: {
        branch: string;
        commitDirty: boolean;
        commitHash: string;
        commitMessage: string;
      };
      type: "github:push" | "ad_hoc" | "deploy_hook" | (string & {});
    };
    envVars: Record<string, unknown> | null;
    environment: "preview" | "production" | (string & {});
    isSkipped: boolean;
    latestStage: {
      endedOn: string | null;
      name:
        | "queued"
        | "initialize"
        | "clone_repo"
        | "build"
        | "deploy"
        | (string & {});
      startedOn: string | null;
      status:
        | "success"
        | "idle"
        | "active"
        | "failure"
        | "canceled"
        | (string & {});
    };
    modifiedOn: string;
    projectId: string;
    projectName: string;
    shortId: string;
    source?: {
      config: {
        deploymentsEnabled: boolean;
        owner: string;
        ownerId: string;
        pathExcludes: string[];
        pathIncludes: string[];
        prCommentsEnabled: boolean;
        previewBranchExcludes: string[];
        previewBranchIncludes: string[];
        previewDeploymentSetting: "all" | "none" | "custom" | (string & {});
        productionBranch: string;
        productionDeploymentsEnabled: boolean;
        repoId: string;
        repoName: string;
      };
      type: "github" | "gitlab" | (string & {});
    } | null;
    stages: {
      endedOn: string | null;
      name:
        | "queued"
        | "initialize"
        | "clone_repo"
        | "build"
        | "deploy"
        | (string & {});
      startedOn: string | null;
      status:
        | "success"
        | "idle"
        | "active"
        | "failure"
        | "canceled"
        | (string & {});
    }[];
    url: string;
    usesFunctions?: boolean | null;
  } | null;
  /** Name of the project. */
  name: string;
  /** Name of the preview script. */
  previewScriptName: string;
  /** Production branch of the project. Used to identify production deployments. */
  productionBranch: string;
  /** Name of the production script. */
  productionScriptName: string;
  /** Whether the project uses functions. */
  usesFunctions: boolean | null;
  /** Configs for the project build process. */
  buildConfig?: {
    webAnalyticsTag: string | null;
    webAnalyticsToken: string | null;
    buildCaching?: boolean | null;
    buildCommand?: string | null;
    destinationDir?: string | null;
    rootDir?: string | null;
  } | null;
  /** A list of associated custom domains for the project. */
  domains?: string[] | null;
  /** Configs for the project source control. */
  source?: {
    config: {
      deploymentsEnabled: boolean;
      owner: string;
      ownerId: string;
      pathExcludes: string[];
      pathIncludes: string[];
      prCommentsEnabled: boolean;
      previewBranchExcludes: string[];
      previewBranchIncludes: string[];
      previewDeploymentSetting: "all" | "none" | "custom" | (string & {});
      productionBranch: string;
      productionDeploymentsEnabled: boolean;
      repoId: string;
      repoName: string;
    };
    type: "github" | "gitlab" | (string & {});
  } | null;
  /** The Cloudflare subdomain associated with the project. */
  subdomain?: string | null;
}

export const GetProjectResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      canonicalDeployment: Schema.Union([Deployment, Schema.Null]),
      createdOn: Schema.String,
      deploymentConfigs: DeploymentConfigs,
      framework: Schema.String,
      frameworkVersion: Schema.String,
      latestDeployment: Schema.Union([Deployment, Schema.Null]),
      name: Schema.String,
      previewScriptName: Schema.String,
      productionBranch: Schema.String,
      productionScriptName: Schema.String,
      usesFunctions: Schema.Union([Schema.Boolean, Schema.Null]),
      buildConfig: Schema.optional(Schema.Union([BuildConfig, Schema.Null])),
      domains: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      source: Schema.optional(Schema.Union([Source, Schema.Null])),
      subdomain: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          canonicalDeployment: "canonical_deployment",
          createdOn: "created_on",
          deploymentConfigs: "deployment_configs",
          framework: "framework",
          frameworkVersion: "framework_version",
          latestDeployment: "latest_deployment",
          name: "name",
          previewScriptName: "preview_script_name",
          productionBranch: "production_branch",
          productionScriptName: "production_script_name",
          usesFunctions: "uses_functions",
          buildConfig: "build_config",
          domains: "domains",
          source: "source",
          subdomain: "subdomain",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetProjectResponse>;

export type GetProjectError = DefaultErrors | ProjectNotFound | Forbidden;

export const getProject: API.OperationMethod<
  GetProjectRequest,
  GetProjectResponse,
  GetProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectRequest,
  output: GetProjectResponse,
  errors: [ProjectNotFound, Forbidden],
}));

export interface ListProjectsRequest {
  /** Path param: Identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
}

export const ListProjectsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    }).pipe(
      T.Http({ method: "GET", path: "/accounts/{account_id}/pages/projects" }),
    ),
) as unknown as Schema.Codec<ListProjectsRequest>;

export interface ListProjectsResponse {
  result: {
    id: string;
    canonicalDeployment: {
      id: string;
      aliases: string[] | null;
      buildConfig: {
        webAnalyticsTag: string | null;
        webAnalyticsToken: string | null;
        buildCaching?: boolean | null;
        buildCommand?: string | null;
        destinationDir?: string | null;
        rootDir?: string | null;
      };
      createdOn: string;
      deploymentTrigger: {
        metadata: {
          branch: string;
          commitDirty: boolean;
          commitHash: string;
          commitMessage: string;
        };
        type: "github:push" | "ad_hoc" | "deploy_hook" | (string & {});
      };
      envVars: Record<string, unknown> | null;
      environment: "preview" | "production" | (string & {});
      isSkipped: boolean;
      latestStage: {
        endedOn: string | null;
        name:
          | "queued"
          | "initialize"
          | "clone_repo"
          | "build"
          | "deploy"
          | (string & {});
        startedOn: string | null;
        status:
          | "success"
          | "idle"
          | "active"
          | "failure"
          | "canceled"
          | (string & {});
      };
      modifiedOn: string;
      projectId: string;
      projectName: string;
      shortId: string;
      source?: {
        config: {
          deploymentsEnabled: boolean;
          owner: string;
          ownerId: string;
          pathExcludes: string[];
          pathIncludes: string[];
          prCommentsEnabled: boolean;
          previewBranchExcludes: string[];
          previewBranchIncludes: string[];
          previewDeploymentSetting: "all" | "none" | "custom" | (string & {});
          productionBranch: string;
          productionDeploymentsEnabled: boolean;
          repoId: string;
          repoName: string;
        };
        type: "github" | "gitlab" | (string & {});
      } | null;
      stages: {
        endedOn: string | null;
        name:
          | "queued"
          | "initialize"
          | "clone_repo"
          | "build"
          | "deploy"
          | (string & {});
        startedOn: string | null;
        status:
          | "success"
          | "idle"
          | "active"
          | "failure"
          | "canceled"
          | (string & {});
      }[];
      url: string;
      usesFunctions?: boolean | null;
    } | null;
    createdOn: string;
    deploymentConfigs: {
      preview?: {
        alwaysUseLatestCompatibilityDate: boolean;
        buildImageMajorVersion: number;
        compatibilityDate: string;
        compatibilityFlags: string[];
        envVars: Record<string, unknown> | null;
        failOpen: boolean;
        usageModel: "standard" | "bundled" | "unbound" | (string & {});
        aiBindings?: Record<string, unknown> | null;
        analyticsEngineDatasets?: Record<string, unknown> | null;
        browsers?: Record<string, unknown> | null;
        d1Databases?: Record<string, unknown> | null;
        durableObjectNamespaces?: Record<string, unknown> | null;
        hyperdriveBindings?: Record<string, unknown> | null;
        kvNamespaces?: Record<string, unknown> | null;
        limits?: { cpuMs: number } | null;
        mtlsCertificates?: Record<string, unknown> | null;
        placement?: { mode: string } | null;
        queueProducers?: Record<string, unknown> | null;
        r2Buckets?: Record<string, unknown> | null;
        services?: Record<string, unknown> | null;
        vectorizeBindings?: Record<string, unknown> | null;
        wranglerConfigHash?: string | null;
      } | null;
      production?: {
        alwaysUseLatestCompatibilityDate: boolean;
        buildImageMajorVersion: number;
        compatibilityDate: string;
        compatibilityFlags: string[];
        envVars: Record<string, unknown> | null;
        failOpen: boolean;
        usageModel: "standard" | "bundled" | "unbound" | (string & {});
        aiBindings?: Record<string, unknown> | null;
        analyticsEngineDatasets?: Record<string, unknown> | null;
        browsers?: Record<string, unknown> | null;
        d1Databases?: Record<string, unknown> | null;
        durableObjectNamespaces?: Record<string, unknown> | null;
        hyperdriveBindings?: Record<string, unknown> | null;
        kvNamespaces?: Record<string, unknown> | null;
        limits?: { cpuMs: number } | null;
        mtlsCertificates?: Record<string, unknown> | null;
        placement?: { mode: string } | null;
        queueProducers?: Record<string, unknown> | null;
        r2Buckets?: Record<string, unknown> | null;
        services?: Record<string, unknown> | null;
        vectorizeBindings?: Record<string, unknown> | null;
        wranglerConfigHash?: string | null;
      } | null;
    };
    framework: string;
    frameworkVersion: string;
    latestDeployment: {
      id: string;
      aliases: string[] | null;
      buildConfig: {
        webAnalyticsTag: string | null;
        webAnalyticsToken: string | null;
        buildCaching?: boolean | null;
        buildCommand?: string | null;
        destinationDir?: string | null;
        rootDir?: string | null;
      };
      createdOn: string;
      deploymentTrigger: {
        metadata: {
          branch: string;
          commitDirty: boolean;
          commitHash: string;
          commitMessage: string;
        };
        type: "github:push" | "ad_hoc" | "deploy_hook" | (string & {});
      };
      envVars: Record<string, unknown> | null;
      environment: "preview" | "production" | (string & {});
      isSkipped: boolean;
      latestStage: {
        endedOn: string | null;
        name:
          | "queued"
          | "initialize"
          | "clone_repo"
          | "build"
          | "deploy"
          | (string & {});
        startedOn: string | null;
        status:
          | "success"
          | "idle"
          | "active"
          | "failure"
          | "canceled"
          | (string & {});
      };
      modifiedOn: string;
      projectId: string;
      projectName: string;
      shortId: string;
      source?: {
        config: {
          deploymentsEnabled: boolean;
          owner: string;
          ownerId: string;
          pathExcludes: string[];
          pathIncludes: string[];
          prCommentsEnabled: boolean;
          previewBranchExcludes: string[];
          previewBranchIncludes: string[];
          previewDeploymentSetting: "all" | "none" | "custom" | (string & {});
          productionBranch: string;
          productionDeploymentsEnabled: boolean;
          repoId: string;
          repoName: string;
        };
        type: "github" | "gitlab" | (string & {});
      } | null;
      stages: {
        endedOn: string | null;
        name:
          | "queued"
          | "initialize"
          | "clone_repo"
          | "build"
          | "deploy"
          | (string & {});
        startedOn: string | null;
        status:
          | "success"
          | "idle"
          | "active"
          | "failure"
          | "canceled"
          | (string & {});
      }[];
      url: string;
      usesFunctions?: boolean | null;
    } | null;
    name: string;
    previewScriptName: string;
    productionBranch: string;
    productionScriptName: string;
    usesFunctions: boolean | null;
    buildConfig?: {
      webAnalyticsTag: string | null;
      webAnalyticsToken: string | null;
      buildCaching?: boolean | null;
      buildCommand?: string | null;
      destinationDir?: string | null;
      rootDir?: string | null;
    } | null;
    domains?: string[] | null;
    source?: {
      config: {
        deploymentsEnabled: boolean;
        owner: string;
        ownerId: string;
        pathExcludes: string[];
        pathIncludes: string[];
        prCommentsEnabled: boolean;
        previewBranchExcludes: string[];
        previewBranchIncludes: string[];
        previewDeploymentSetting: "all" | "none" | "custom" | (string & {});
        productionBranch: string;
        productionDeploymentsEnabled: boolean;
        repoId: string;
        repoName: string;
      };
      type: "github" | "gitlab" | (string & {});
    } | null;
    subdomain?: string | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListProjectsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(ListProjectsResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListProjectsResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListProjectsResponse>;

export type ListProjectsError = DefaultErrors | Forbidden;

export const listProjects: API.PaginatedOperationMethod<
  ListProjectsRequest,
  ListProjectsResponse,
  ListProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsRequest,
  output: ListProjectsResponse,
  errors: [Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateProjectRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Name of the project. */
  name: string;
  /** Body param: Production branch of the project. Used to identify production deployments. */
  productionBranch: string;
  /** Body param: Configs for the project build process. */
  buildConfig?: {
    buildCaching?: boolean;
    buildCommand?: string;
    destinationDir?: string;
    rootDir?: string;
    webAnalyticsTag?: string | null;
    webAnalyticsToken?: string | null;
  };
  /** Body param: Configs for deployments in a project. */
  deploymentConfigs?: {
    preview?: {
      aiBindings?: Record<string, unknown>;
      alwaysUseLatestCompatibilityDate?: boolean;
      analyticsEngineDatasets?: Record<string, unknown>;
      browsers?: Record<string, unknown>;
      buildImageMajorVersion?: number;
      compatibilityDate?: string;
      compatibilityFlags?: string[];
      d1Databases?: Record<string, unknown>;
      durableObjectNamespaces?: Record<string, unknown>;
      envVars?: Record<string, unknown>;
      failOpen?: boolean;
      hyperdriveBindings?: Record<string, unknown>;
      kvNamespaces?: Record<string, unknown>;
      limits?: { cpuMs: number };
      mtlsCertificates?: Record<string, unknown>;
      placement?: { mode: string };
      queueProducers?: Record<string, unknown>;
      r2Buckets?: Record<string, unknown>;
      services?: Record<string, unknown>;
      usageModel?: "standard" | "bundled" | "unbound" | (string & {});
      vectorizeBindings?: Record<string, unknown>;
      wranglerConfigHash?: string;
    };
    production?: {
      aiBindings?: Record<string, unknown>;
      alwaysUseLatestCompatibilityDate?: boolean;
      analyticsEngineDatasets?: Record<string, unknown>;
      browsers?: Record<string, unknown>;
      buildImageMajorVersion?: number;
      compatibilityDate?: string;
      compatibilityFlags?: string[];
      d1Databases?: Record<string, unknown>;
      durableObjectNamespaces?: Record<string, unknown>;
      envVars?: Record<string, unknown>;
      failOpen?: boolean;
      hyperdriveBindings?: Record<string, unknown>;
      kvNamespaces?: Record<string, unknown>;
      limits?: { cpuMs: number };
      mtlsCertificates?: Record<string, unknown>;
      placement?: { mode: string };
      queueProducers?: Record<string, unknown>;
      r2Buckets?: Record<string, unknown>;
      services?: Record<string, unknown>;
      usageModel?: "standard" | "bundled" | "unbound" | (string & {});
      vectorizeBindings?: Record<string, unknown>;
      wranglerConfigHash?: string;
    };
  };
  /** Body param: Configs for the project source control. */
  source?: {
    config: {
      deploymentsEnabled?: boolean;
      owner?: string;
      ownerId?: string;
      pathExcludes?: string[];
      pathIncludes?: string[];
      prCommentsEnabled?: boolean;
      previewBranchExcludes?: string[];
      previewBranchIncludes?: string[];
      previewDeploymentSetting?: "all" | "none" | "custom" | (string & {});
      productionBranch?: string;
      productionDeploymentsEnabled?: boolean;
      repoId?: string;
      repoName?: string;
    };
    type: "github" | "gitlab" | (string & {});
  };
}

export const CreateProjectRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.String,
      productionBranch: Schema.String,
      buildConfig: Schema.optional(BuildConfig2),
      deploymentConfigs: Schema.optional(DeploymentConfigs2),
      source: Schema.optional(Source2),
    }).pipe(
      Schema.encodeKeys({
        name: "name",
        productionBranch: "production_branch",
        buildConfig: "build_config",
        deploymentConfigs: "deployment_configs",
        source: "source",
      }),
      T.Http({ method: "POST", path: "/accounts/{account_id}/pages/projects" }),
    ),
) as unknown as Schema.Codec<CreateProjectRequest>;

export interface CreateProjectResponse {
  /** ID of the project. */
  id: string;
  /** Most recent production deployment of the project. */
  canonicalDeployment: {
    id: string;
    aliases: string[] | null;
    buildConfig: {
      webAnalyticsTag: string | null;
      webAnalyticsToken: string | null;
      buildCaching?: boolean | null;
      buildCommand?: string | null;
      destinationDir?: string | null;
      rootDir?: string | null;
    };
    createdOn: string;
    deploymentTrigger: {
      metadata: {
        branch: string;
        commitDirty: boolean;
        commitHash: string;
        commitMessage: string;
      };
      type: "github:push" | "ad_hoc" | "deploy_hook" | (string & {});
    };
    envVars: Record<string, unknown> | null;
    environment: "preview" | "production" | (string & {});
    isSkipped: boolean;
    latestStage: {
      endedOn: string | null;
      name:
        | "queued"
        | "initialize"
        | "clone_repo"
        | "build"
        | "deploy"
        | (string & {});
      startedOn: string | null;
      status:
        | "success"
        | "idle"
        | "active"
        | "failure"
        | "canceled"
        | (string & {});
    };
    modifiedOn: string;
    projectId: string;
    projectName: string;
    shortId: string;
    source: {
      config: {
        deploymentsEnabled: boolean;
        owner: string;
        ownerId: string;
        pathExcludes: string[];
        pathIncludes: string[];
        prCommentsEnabled: boolean;
        previewBranchExcludes: string[];
        previewBranchIncludes: string[];
        previewDeploymentSetting: "all" | "none" | "custom" | (string & {});
        productionBranch: string;
        productionDeploymentsEnabled: boolean;
        repoId: string;
        repoName: string;
      };
      type: "github" | "gitlab" | (string & {});
    };
    stages: {
      endedOn: string | null;
      name:
        | "queued"
        | "initialize"
        | "clone_repo"
        | "build"
        | "deploy"
        | (string & {});
      startedOn: string | null;
      status:
        | "success"
        | "idle"
        | "active"
        | "failure"
        | "canceled"
        | (string & {});
    }[];
    url: string;
    usesFunctions?: boolean | null;
  } | null;
  /** When the project was created. */
  createdOn: string;
  /** Configs for deployments in a project. */
  deploymentConfigs: {
    preview: {
      alwaysUseLatestCompatibilityDate: boolean;
      buildImageMajorVersion: number;
      compatibilityDate: string;
      compatibilityFlags: string[];
      envVars: Record<string, unknown> | null;
      failOpen: boolean;
      usageModel: "standard" | "bundled" | "unbound" | (string & {});
      aiBindings?: Record<string, unknown> | null;
      analyticsEngineDatasets?: Record<string, unknown> | null;
      browsers?: Record<string, unknown> | null;
      d1Databases?: Record<string, unknown> | null;
      durableObjectNamespaces?: Record<string, unknown> | null;
      hyperdriveBindings?: Record<string, unknown> | null;
      kvNamespaces?: Record<string, unknown> | null;
      limits?: { cpuMs: number } | null;
      mtlsCertificates?: Record<string, unknown> | null;
      placement?: { mode: string } | null;
      queueProducers?: Record<string, unknown> | null;
      r2Buckets?: Record<string, unknown> | null;
      services?: Record<string, unknown> | null;
      vectorizeBindings?: Record<string, unknown> | null;
      wranglerConfigHash?: string | null;
    };
    production: {
      alwaysUseLatestCompatibilityDate: boolean;
      buildImageMajorVersion: number;
      compatibilityDate: string;
      compatibilityFlags: string[];
      envVars: Record<string, unknown> | null;
      failOpen: boolean;
      usageModel: "standard" | "bundled" | "unbound" | (string & {});
      aiBindings?: Record<string, unknown> | null;
      analyticsEngineDatasets?: Record<string, unknown> | null;
      browsers?: Record<string, unknown> | null;
      d1Databases?: Record<string, unknown> | null;
      durableObjectNamespaces?: Record<string, unknown> | null;
      hyperdriveBindings?: Record<string, unknown> | null;
      kvNamespaces?: Record<string, unknown> | null;
      limits?: { cpuMs: number } | null;
      mtlsCertificates?: Record<string, unknown> | null;
      placement?: { mode: string } | null;
      queueProducers?: Record<string, unknown> | null;
      r2Buckets?: Record<string, unknown> | null;
      services?: Record<string, unknown> | null;
      vectorizeBindings?: Record<string, unknown> | null;
      wranglerConfigHash?: string | null;
    };
  };
  /** Framework the project is using. */
  framework: string;
  /** Version of the framework the project is using. */
  frameworkVersion: string;
  /** Most recent deployment of the project. */
  latestDeployment: {
    id: string;
    aliases: string[] | null;
    buildConfig: {
      webAnalyticsTag: string | null;
      webAnalyticsToken: string | null;
      buildCaching?: boolean | null;
      buildCommand?: string | null;
      destinationDir?: string | null;
      rootDir?: string | null;
    };
    createdOn: string;
    deploymentTrigger: {
      metadata: {
        branch: string;
        commitDirty: boolean;
        commitHash: string;
        commitMessage: string;
      };
      type: "github:push" | "ad_hoc" | "deploy_hook" | (string & {});
    };
    envVars: Record<string, unknown> | null;
    environment: "preview" | "production" | (string & {});
    isSkipped: boolean;
    latestStage: {
      endedOn: string | null;
      name:
        | "queued"
        | "initialize"
        | "clone_repo"
        | "build"
        | "deploy"
        | (string & {});
      startedOn: string | null;
      status:
        | "success"
        | "idle"
        | "active"
        | "failure"
        | "canceled"
        | (string & {});
    };
    modifiedOn: string;
    projectId: string;
    projectName: string;
    shortId: string;
    source: {
      config: {
        deploymentsEnabled: boolean;
        owner: string;
        ownerId: string;
        pathExcludes: string[];
        pathIncludes: string[];
        prCommentsEnabled: boolean;
        previewBranchExcludes: string[];
        previewBranchIncludes: string[];
        previewDeploymentSetting: "all" | "none" | "custom" | (string & {});
        productionBranch: string;
        productionDeploymentsEnabled: boolean;
        repoId: string;
        repoName: string;
      };
      type: "github" | "gitlab" | (string & {});
    };
    stages: {
      endedOn: string | null;
      name:
        | "queued"
        | "initialize"
        | "clone_repo"
        | "build"
        | "deploy"
        | (string & {});
      startedOn: string | null;
      status:
        | "success"
        | "idle"
        | "active"
        | "failure"
        | "canceled"
        | (string & {});
    }[];
    url: string;
    usesFunctions?: boolean | null;
  } | null;
  /** Name of the project. */
  name: string;
  /** Name of the preview script. */
  previewScriptName: string;
  /** Production branch of the project. Used to identify production deployments. */
  productionBranch: string;
  /** Name of the production script. */
  productionScriptName: string;
  /** Whether the project uses functions. */
  usesFunctions: boolean | null;
  /** Configs for the project build process. */
  buildConfig?: {
    webAnalyticsTag: string | null;
    webAnalyticsToken: string | null;
    buildCaching?: boolean | null;
    buildCommand?: string | null;
    destinationDir?: string | null;
    rootDir?: string | null;
  } | null;
  /** A list of associated custom domains for the project. */
  domains?: string[] | null;
  /** Configs for the project source control. */
  source?: {
    config: {
      deploymentsEnabled: boolean;
      owner: string;
      ownerId: string;
      pathExcludes: string[];
      pathIncludes: string[];
      prCommentsEnabled: boolean;
      previewBranchExcludes: string[];
      previewBranchIncludes: string[];
      previewDeploymentSetting: "all" | "none" | "custom" | (string & {});
      productionBranch: string;
      productionDeploymentsEnabled: boolean;
      repoId: string;
      repoName: string;
    };
    type: "github" | "gitlab" | (string & {});
  } | null;
  /** The Cloudflare subdomain associated with the project. */
  subdomain?: string | null;
}

export const CreateProjectResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      canonicalDeployment: Schema.Union([Deployment2, Schema.Null]),
      createdOn: Schema.String,
      deploymentConfigs: DeploymentConfigs3,
      framework: Schema.String,
      frameworkVersion: Schema.String,
      latestDeployment: Schema.Union([Deployment2, Schema.Null]),
      name: Schema.String,
      previewScriptName: Schema.String,
      productionBranch: Schema.String,
      productionScriptName: Schema.String,
      usesFunctions: Schema.Union([Schema.Boolean, Schema.Null]),
      buildConfig: Schema.optional(Schema.Union([BuildConfig, Schema.Null])),
      domains: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      source: Schema.optional(Schema.Union([Source, Schema.Null])),
      subdomain: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          canonicalDeployment: "canonical_deployment",
          createdOn: "created_on",
          deploymentConfigs: "deployment_configs",
          framework: "framework",
          frameworkVersion: "framework_version",
          latestDeployment: "latest_deployment",
          name: "name",
          previewScriptName: "preview_script_name",
          productionBranch: "production_branch",
          productionScriptName: "production_script_name",
          usesFunctions: "uses_functions",
          buildConfig: "build_config",
          domains: "domains",
          source: "source",
          subdomain: "subdomain",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateProjectResponse>;

export type CreateProjectError =
  | DefaultErrors
  | ProjectAlreadyExists
  | Forbidden;

export const createProject: API.OperationMethod<
  CreateProjectRequest,
  CreateProjectResponse,
  CreateProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectRequest,
  output: CreateProjectResponse,
  errors: [ProjectAlreadyExists, Forbidden],
}));

export interface PatchProjectRequest {
  projectName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Configs for the project build process. */
  buildConfig?: {
    buildCaching?: boolean;
    buildCommand?: string;
    destinationDir?: string;
    rootDir?: string;
    webAnalyticsTag?: string | null;
    webAnalyticsToken?: string | null;
  };
  /** Body param: Configs for deployments in a project. */
  deploymentConfigs?: {
    preview?: {
      aiBindings?: Record<string, unknown>;
      alwaysUseLatestCompatibilityDate?: boolean;
      analyticsEngineDatasets?: Record<string, unknown>;
      browsers?: Record<string, unknown>;
      buildImageMajorVersion?: number;
      compatibilityDate?: string;
      compatibilityFlags?: string[];
      d1Databases?: Record<string, unknown>;
      durableObjectNamespaces?: Record<string, unknown>;
      envVars?: Record<string, unknown>;
      failOpen?: boolean;
      hyperdriveBindings?: Record<string, unknown>;
      kvNamespaces?: Record<string, unknown>;
      limits?: { cpuMs: number };
      mtlsCertificates?: Record<string, unknown>;
      placement?: { mode: string };
      queueProducers?: Record<string, unknown>;
      r2Buckets?: Record<string, unknown>;
      services?: Record<string, unknown>;
      usageModel?: "standard" | "bundled" | "unbound" | (string & {});
      vectorizeBindings?: Record<string, unknown>;
      wranglerConfigHash?: string;
    };
    production?: {
      aiBindings?: Record<string, unknown>;
      alwaysUseLatestCompatibilityDate?: boolean;
      analyticsEngineDatasets?: Record<string, unknown>;
      browsers?: Record<string, unknown>;
      buildImageMajorVersion?: number;
      compatibilityDate?: string;
      compatibilityFlags?: string[];
      d1Databases?: Record<string, unknown>;
      durableObjectNamespaces?: Record<string, unknown>;
      envVars?: Record<string, unknown>;
      failOpen?: boolean;
      hyperdriveBindings?: Record<string, unknown>;
      kvNamespaces?: Record<string, unknown>;
      limits?: { cpuMs: number };
      mtlsCertificates?: Record<string, unknown>;
      placement?: { mode: string };
      queueProducers?: Record<string, unknown>;
      r2Buckets?: Record<string, unknown>;
      services?: Record<string, unknown>;
      usageModel?: "standard" | "bundled" | "unbound" | (string & {});
      vectorizeBindings?: Record<string, unknown>;
      wranglerConfigHash?: string;
    };
  };
  /** Body param: Name of the project. */
  name?: string;
  /** Body param: Production branch of the project. Used to identify production deployments. */
  productionBranch?: string;
  /** Body param: Configs for the project source control. */
  source?: {
    config: {
      deploymentsEnabled?: boolean;
      owner?: string;
      ownerId?: string;
      pathExcludes?: string[];
      pathIncludes?: string[];
      prCommentsEnabled?: boolean;
      previewBranchExcludes?: string[];
      previewBranchIncludes?: string[];
      previewDeploymentSetting?: "all" | "none" | "custom" | (string & {});
      productionBranch?: string;
      productionDeploymentsEnabled?: boolean;
      repoId?: string;
      repoName?: string;
    };
    type: "github" | "gitlab" | (string & {});
  };
}

export const PatchProjectRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      projectName: Schema.String.pipe(T.HttpPath("projectName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      buildConfig: Schema.optional(BuildConfig2),
      deploymentConfigs: Schema.optional(DeploymentConfigs2),
      name: Schema.optional(Schema.String),
      productionBranch: Schema.optional(Schema.String),
      source: Schema.optional(Source2),
    }).pipe(
      Schema.encodeKeys({
        buildConfig: "build_config",
        deploymentConfigs: "deployment_configs",
        name: "name",
        productionBranch: "production_branch",
        source: "source",
      }),
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/pages/projects/{projectName}",
      }),
    ),
) as unknown as Schema.Codec<PatchProjectRequest>;

export interface PatchProjectResponse {
  /** ID of the project. */
  id: string;
  /** Most recent production deployment of the project. */
  canonicalDeployment: {
    id: string;
    aliases: string[] | null;
    buildConfig: {
      webAnalyticsTag: string | null;
      webAnalyticsToken: string | null;
      buildCaching?: boolean | null;
      buildCommand?: string | null;
      destinationDir?: string | null;
      rootDir?: string | null;
    };
    createdOn: string;
    deploymentTrigger: {
      metadata: {
        branch: string;
        commitDirty: boolean;
        commitHash: string;
        commitMessage: string;
      };
      type: "github:push" | "ad_hoc" | "deploy_hook" | (string & {});
    };
    envVars: Record<string, unknown> | null;
    environment: "preview" | "production" | (string & {});
    isSkipped: boolean;
    latestStage: {
      endedOn: string | null;
      name:
        | "queued"
        | "initialize"
        | "clone_repo"
        | "build"
        | "deploy"
        | (string & {});
      startedOn: string | null;
      status:
        | "success"
        | "idle"
        | "active"
        | "failure"
        | "canceled"
        | (string & {});
    };
    modifiedOn: string;
    projectId: string;
    projectName: string;
    shortId: string;
    source: {
      config: {
        deploymentsEnabled: boolean;
        owner: string;
        ownerId: string;
        pathExcludes: string[];
        pathIncludes: string[];
        prCommentsEnabled: boolean;
        previewBranchExcludes: string[];
        previewBranchIncludes: string[];
        previewDeploymentSetting: "all" | "none" | "custom" | (string & {});
        productionBranch: string;
        productionDeploymentsEnabled: boolean;
        repoId: string;
        repoName: string;
      };
      type: "github" | "gitlab" | (string & {});
    };
    stages: {
      endedOn: string | null;
      name:
        | "queued"
        | "initialize"
        | "clone_repo"
        | "build"
        | "deploy"
        | (string & {});
      startedOn: string | null;
      status:
        | "success"
        | "idle"
        | "active"
        | "failure"
        | "canceled"
        | (string & {});
    }[];
    url: string;
    usesFunctions?: boolean | null;
  } | null;
  /** When the project was created. */
  createdOn: string;
  /** Configs for deployments in a project. */
  deploymentConfigs: {
    preview: {
      alwaysUseLatestCompatibilityDate: boolean;
      buildImageMajorVersion: number;
      compatibilityDate: string;
      compatibilityFlags: string[];
      envVars: Record<string, unknown> | null;
      failOpen: boolean;
      usageModel: "standard" | "bundled" | "unbound" | (string & {});
      aiBindings?: Record<string, unknown> | null;
      analyticsEngineDatasets?: Record<string, unknown> | null;
      browsers?: Record<string, unknown> | null;
      d1Databases?: Record<string, unknown> | null;
      durableObjectNamespaces?: Record<string, unknown> | null;
      hyperdriveBindings?: Record<string, unknown> | null;
      kvNamespaces?: Record<string, unknown> | null;
      limits?: { cpuMs: number } | null;
      mtlsCertificates?: Record<string, unknown> | null;
      placement?: { mode: string } | null;
      queueProducers?: Record<string, unknown> | null;
      r2Buckets?: Record<string, unknown> | null;
      services?: Record<string, unknown> | null;
      vectorizeBindings?: Record<string, unknown> | null;
      wranglerConfigHash?: string | null;
    };
    production: {
      alwaysUseLatestCompatibilityDate: boolean;
      buildImageMajorVersion: number;
      compatibilityDate: string;
      compatibilityFlags: string[];
      envVars: Record<string, unknown> | null;
      failOpen: boolean;
      usageModel: "standard" | "bundled" | "unbound" | (string & {});
      aiBindings?: Record<string, unknown> | null;
      analyticsEngineDatasets?: Record<string, unknown> | null;
      browsers?: Record<string, unknown> | null;
      d1Databases?: Record<string, unknown> | null;
      durableObjectNamespaces?: Record<string, unknown> | null;
      hyperdriveBindings?: Record<string, unknown> | null;
      kvNamespaces?: Record<string, unknown> | null;
      limits?: { cpuMs: number } | null;
      mtlsCertificates?: Record<string, unknown> | null;
      placement?: { mode: string } | null;
      queueProducers?: Record<string, unknown> | null;
      r2Buckets?: Record<string, unknown> | null;
      services?: Record<string, unknown> | null;
      vectorizeBindings?: Record<string, unknown> | null;
      wranglerConfigHash?: string | null;
    };
  };
  /** Framework the project is using. */
  framework: string;
  /** Version of the framework the project is using. */
  frameworkVersion: string;
  /** Most recent deployment of the project. */
  latestDeployment: {
    id: string;
    aliases: string[] | null;
    buildConfig: {
      webAnalyticsTag: string | null;
      webAnalyticsToken: string | null;
      buildCaching?: boolean | null;
      buildCommand?: string | null;
      destinationDir?: string | null;
      rootDir?: string | null;
    };
    createdOn: string;
    deploymentTrigger: {
      metadata: {
        branch: string;
        commitDirty: boolean;
        commitHash: string;
        commitMessage: string;
      };
      type: "github:push" | "ad_hoc" | "deploy_hook" | (string & {});
    };
    envVars: Record<string, unknown> | null;
    environment: "preview" | "production" | (string & {});
    isSkipped: boolean;
    latestStage: {
      endedOn: string | null;
      name:
        | "queued"
        | "initialize"
        | "clone_repo"
        | "build"
        | "deploy"
        | (string & {});
      startedOn: string | null;
      status:
        | "success"
        | "idle"
        | "active"
        | "failure"
        | "canceled"
        | (string & {});
    };
    modifiedOn: string;
    projectId: string;
    projectName: string;
    shortId: string;
    source: {
      config: {
        deploymentsEnabled: boolean;
        owner: string;
        ownerId: string;
        pathExcludes: string[];
        pathIncludes: string[];
        prCommentsEnabled: boolean;
        previewBranchExcludes: string[];
        previewBranchIncludes: string[];
        previewDeploymentSetting: "all" | "none" | "custom" | (string & {});
        productionBranch: string;
        productionDeploymentsEnabled: boolean;
        repoId: string;
        repoName: string;
      };
      type: "github" | "gitlab" | (string & {});
    };
    stages: {
      endedOn: string | null;
      name:
        | "queued"
        | "initialize"
        | "clone_repo"
        | "build"
        | "deploy"
        | (string & {});
      startedOn: string | null;
      status:
        | "success"
        | "idle"
        | "active"
        | "failure"
        | "canceled"
        | (string & {});
    }[];
    url: string;
    usesFunctions?: boolean | null;
  } | null;
  /** Name of the project. */
  name: string;
  /** Name of the preview script. */
  previewScriptName: string;
  /** Production branch of the project. Used to identify production deployments. */
  productionBranch: string;
  /** Name of the production script. */
  productionScriptName: string;
  /** Whether the project uses functions. */
  usesFunctions: boolean | null;
  /** Configs for the project build process. */
  buildConfig?: {
    webAnalyticsTag: string | null;
    webAnalyticsToken: string | null;
    buildCaching?: boolean | null;
    buildCommand?: string | null;
    destinationDir?: string | null;
    rootDir?: string | null;
  } | null;
  /** A list of associated custom domains for the project. */
  domains?: string[] | null;
  /** Configs for the project source control. */
  source?: {
    config: {
      deploymentsEnabled: boolean;
      owner: string;
      ownerId: string;
      pathExcludes: string[];
      pathIncludes: string[];
      prCommentsEnabled: boolean;
      previewBranchExcludes: string[];
      previewBranchIncludes: string[];
      previewDeploymentSetting: "all" | "none" | "custom" | (string & {});
      productionBranch: string;
      productionDeploymentsEnabled: boolean;
      repoId: string;
      repoName: string;
    };
    type: "github" | "gitlab" | (string & {});
  } | null;
  /** The Cloudflare subdomain associated with the project. */
  subdomain?: string | null;
}

export const PatchProjectResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      canonicalDeployment: Schema.Union([Deployment2, Schema.Null]),
      createdOn: Schema.String,
      deploymentConfigs: DeploymentConfigs3,
      framework: Schema.String,
      frameworkVersion: Schema.String,
      latestDeployment: Schema.Union([Deployment2, Schema.Null]),
      name: Schema.String,
      previewScriptName: Schema.String,
      productionBranch: Schema.String,
      productionScriptName: Schema.String,
      usesFunctions: Schema.Union([Schema.Boolean, Schema.Null]),
      buildConfig: Schema.optional(Schema.Union([BuildConfig, Schema.Null])),
      domains: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      source: Schema.optional(Schema.Union([Source, Schema.Null])),
      subdomain: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          canonicalDeployment: "canonical_deployment",
          createdOn: "created_on",
          deploymentConfigs: "deployment_configs",
          framework: "framework",
          frameworkVersion: "framework_version",
          latestDeployment: "latest_deployment",
          name: "name",
          previewScriptName: "preview_script_name",
          productionBranch: "production_branch",
          productionScriptName: "production_script_name",
          usesFunctions: "uses_functions",
          buildConfig: "build_config",
          domains: "domains",
          source: "source",
          subdomain: "subdomain",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PatchProjectResponse>;

export type PatchProjectError = DefaultErrors | ProjectNotFound | Forbidden;

export const patchProject: API.OperationMethod<
  PatchProjectRequest,
  PatchProjectResponse,
  PatchProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectRequest,
  output: PatchProjectResponse,
  errors: [ProjectNotFound, Forbidden],
}));

export interface DeleteProjectRequest {
  projectName: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteProjectRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      projectName: Schema.String.pipe(T.HttpPath("projectName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/pages/projects/{projectName}",
      }),
    ),
) as unknown as Schema.Codec<DeleteProjectRequest>;

export type DeleteProjectResponse = unknown;

export const DeleteProjectResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () => Schema.Unknown.pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteProjectResponse>;

export type DeleteProjectError = DefaultErrors | ProjectNotFound | Forbidden;

export const deleteProject: API.OperationMethod<
  DeleteProjectRequest,
  DeleteProjectResponse,
  DeleteProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectRequest,
  output: DeleteProjectResponse,
  errors: [ProjectNotFound, Forbidden],
}));

// =============================================================================
// ProjectDeployment
// =============================================================================

export interface GetProjectDeploymentRequest {
  projectName: string;
  deploymentId: string;
  /** Identifier. */
  accountId: string;
}

export const GetProjectDeploymentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      projectName: Schema.String.pipe(T.HttpPath("projectName")),
      deploymentId: Schema.String.pipe(T.HttpPath("deploymentId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/pages/projects/{projectName}/deployments/{deploymentId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetProjectDeploymentRequest>;

export interface GetProjectDeploymentResponse {
  /** Id of the deployment. */
  id: string;
  /** A list of alias URLs pointing to this deployment. */
  aliases: string[] | null;
  /** Configs for the project build process. */
  buildConfig: {
    webAnalyticsTag: string | null;
    webAnalyticsToken: string | null;
    buildCaching?: boolean | null;
    buildCommand?: string | null;
    destinationDir?: string | null;
    rootDir?: string | null;
  };
  /** When the deployment was created. */
  createdOn: string;
  /** Info about what caused the deployment. */
  deploymentTrigger: {
    metadata: {
      branch: string;
      commitDirty: boolean;
      commitHash: string;
      commitMessage: string;
    };
    type: "github:push" | "ad_hoc" | "deploy_hook" | (string & {});
  };
  /** Environment variables used for builds and Pages Functions. */
  envVars: Record<string, unknown> | null;
  /** Type of deploy. */
  environment: "preview" | "production" | (string & {});
  /** If the deployment has been skipped. */
  isSkipped: boolean;
  /** The status of the deployment. */
  latestStage: {
    endedOn: string | null;
    name:
      | "queued"
      | "initialize"
      | "clone_repo"
      | "build"
      | "deploy"
      | (string & {});
    startedOn: string | null;
    status:
      | "success"
      | "idle"
      | "active"
      | "failure"
      | "canceled"
      | (string & {});
  };
  /** When the deployment was last modified. */
  modifiedOn: string;
  /** Id of the project. */
  projectId: string;
  /** Name of the project. */
  projectName: string;
  /** Short Id (8 character) of the deployment. */
  shortId: string;
  /** Configs for the project source control. */
  source?: {
    config: {
      deploymentsEnabled: boolean;
      owner: string;
      ownerId: string;
      pathExcludes: string[];
      pathIncludes: string[];
      prCommentsEnabled: boolean;
      previewBranchExcludes: string[];
      previewBranchIncludes: string[];
      previewDeploymentSetting: "all" | "none" | "custom" | (string & {});
      productionBranch: string;
      productionDeploymentsEnabled: boolean;
      repoId: string;
      repoName: string;
    };
    type: "github" | "gitlab" | (string & {});
  } | null;
  /** List of past stages. */
  stages: {
    endedOn: string | null;
    name:
      | "queued"
      | "initialize"
      | "clone_repo"
      | "build"
      | "deploy"
      | (string & {});
    startedOn: string | null;
    status:
      | "success"
      | "idle"
      | "active"
      | "failure"
      | "canceled"
      | (string & {});
  }[];
  /** The live URL to view this deployment. */
  url: string;
  /** Whether the deployment uses functions. */
  usesFunctions?: boolean | null;
}

export const GetProjectDeploymentResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      aliases: Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      buildConfig: BuildConfig,
      createdOn: Schema.String,
      deploymentTrigger: DeploymentTrigger,
      envVars: Schema.Union([
        Schema.Record(Schema.String, Schema.Unknown),
        Schema.Null,
      ]),
      environment: Schema.Union([
        Schema.Literals(["preview", "production"]),
        Schema.String,
      ]),
      isSkipped: Schema.Boolean,
      latestStage: Stage,
      modifiedOn: Schema.String,
      projectId: Schema.String,
      projectName: Schema.String,
      shortId: Schema.String,
      source: Schema.optional(Schema.Union([Source, Schema.Null])),
      stages: Schema.Array(Stage),
      url: Schema.String,
      usesFunctions: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          aliases: "aliases",
          buildConfig: "build_config",
          createdOn: "created_on",
          deploymentTrigger: "deployment_trigger",
          envVars: "env_vars",
          environment: "environment",
          isSkipped: "is_skipped",
          latestStage: "latest_stage",
          modifiedOn: "modified_on",
          projectId: "project_id",
          projectName: "project_name",
          shortId: "short_id",
          source: "source",
          stages: "stages",
          url: "url",
          usesFunctions: "uses_functions",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetProjectDeploymentResponse>;

export type GetProjectDeploymentError =
  | DefaultErrors
  | DeploymentNotFound
  | ProjectNotFound
  | Forbidden;

export const getProjectDeployment: API.OperationMethod<
  GetProjectDeploymentRequest,
  GetProjectDeploymentResponse,
  GetProjectDeploymentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectDeploymentRequest,
  output: GetProjectDeploymentResponse,
  errors: [DeploymentNotFound, ProjectNotFound, Forbidden],
}));

export interface ListProjectDeploymentsRequest {
  projectName: string;
  /** Path param: Identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: What type of deployments to fetch. */
  env?: "production" | "preview" | (string & {});
}

export const ListProjectDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      projectName: Schema.String.pipe(T.HttpPath("projectName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      env: Schema.optional(
        Schema.Union([
          Schema.Literals(["production", "preview"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("env")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/pages/projects/{projectName}/deployments",
      }),
    ),
  ) as unknown as Schema.Codec<ListProjectDeploymentsRequest>;

export interface ListProjectDeploymentsResponse {
  result: {
    id: string;
    aliases: string[] | null;
    buildConfig: {
      webAnalyticsTag: string | null;
      webAnalyticsToken: string | null;
      buildCaching?: boolean | null;
      buildCommand?: string | null;
      destinationDir?: string | null;
      rootDir?: string | null;
    };
    createdOn: string;
    deploymentTrigger: {
      metadata: {
        branch: string;
        commitDirty: boolean;
        commitHash: string;
        commitMessage: string;
      };
      type: "github:push" | "ad_hoc" | "deploy_hook" | (string & {});
    };
    envVars: Record<string, unknown> | null;
    environment: "preview" | "production" | (string & {});
    isSkipped: boolean;
    latestStage: {
      endedOn: string | null;
      name:
        | "queued"
        | "initialize"
        | "clone_repo"
        | "build"
        | "deploy"
        | (string & {});
      startedOn: string | null;
      status:
        | "success"
        | "idle"
        | "active"
        | "failure"
        | "canceled"
        | (string & {});
    };
    modifiedOn: string;
    projectId: string;
    projectName: string;
    shortId: string;
    source: {
      config: {
        deploymentsEnabled: boolean;
        owner: string;
        ownerId: string;
        pathExcludes: string[];
        pathIncludes: string[];
        prCommentsEnabled: boolean;
        previewBranchExcludes: string[];
        previewBranchIncludes: string[];
        previewDeploymentSetting: "all" | "none" | "custom" | (string & {});
        productionBranch: string;
        productionDeploymentsEnabled: boolean;
        repoId: string;
        repoName: string;
      };
      type: "github" | "gitlab" | (string & {});
    };
    stages: {
      endedOn: string | null;
      name:
        | "queued"
        | "initialize"
        | "clone_repo"
        | "build"
        | "deploy"
        | (string & {});
      startedOn: string | null;
      status:
        | "success"
        | "idle"
        | "active"
        | "failure"
        | "canceled"
        | (string & {});
    }[];
    url: string;
    usesFunctions?: boolean | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListProjectDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(Deployment2),
      resultInfo: Schema.optional(
        Schema.Union([ListProjectsResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListProjectDeploymentsResponse>;

export type ListProjectDeploymentsError = DefaultErrors;

export const listProjectDeployments: API.PaginatedOperationMethod<
  ListProjectDeploymentsRequest,
  ListProjectDeploymentsResponse,
  ListProjectDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectDeploymentsRequest,
  output: ListProjectDeploymentsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateProjectDeploymentRequest {
  projectName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Headers configuration file for the deployment. */
  headers?: File | Blob;
  /** Body param: Redirects configuration file for the deployment. */
  redirects?: File | Blob;
  /** Body param: Routes configuration file defining routing rules. */
  routesJson?: File | Blob;
  /** Body param: Worker bundle file in multipart/form-data format. Mutually exclusive with `_worker.js`. Cannot specify both `_worker.js` and `_worker.bundle` in the same request. Maximum size: 25 MiB. */
  workerBundle?: File | Blob;
  /** Body param: Worker JavaScript file. Mutually exclusive with `_worker.bundle`. Cannot specify both `_worker.js` and `_worker.bundle` in the same request. */
  workerJs?: File | Blob;
  /** Body param: The branch to build the new deployment from. The `HEAD` of the branch will be used. If omitted, the production branch will be used by default. */
  branch?: string;
  /** Body param: Boolean string indicating if the working directory has uncommitted changes. */
  commitDirty?: boolean;
  /** Body param: Git commit SHA associated with this deployment. */
  commitHash?: string;
  /** Body param: Git commit message associated with this deployment. */
  commitMessage?: string;
  /** Body param: Functions routing configuration file. */
  functionsFilepathRoutingConfigJson?: File | Blob;
  /** Body param: JSON string containing a manifest of files to deploy. Maps file paths to their content hashes. Required for direct upload deployments. Maximum 20,000 entries. */
  manifest?: string;
  /** Body param: The build output directory path. */
  pagesBuildOutputDir?: string;
  /** Body param: Hash of the Wrangler configuration file used for this deployment. */
  wranglerConfigHash?: string;
}

export const CreateProjectDeploymentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      projectName: Schema.String.pipe(T.HttpPath("projectName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      headers: Schema.optional(UploadableSchema.pipe(T.HttpFormDataFile())),
      redirects: Schema.optional(UploadableSchema.pipe(T.HttpFormDataFile())),
      routesJson: Schema.optional(UploadableSchema.pipe(T.HttpFormDataFile())),
      workerBundle: Schema.optional(
        UploadableSchema.pipe(T.HttpFormDataFile()),
      ),
      workerJs: Schema.optional(UploadableSchema.pipe(T.HttpFormDataFile())),
      branch: Schema.optional(Schema.String),
      commitDirty: Schema.optional(Schema.Boolean),
      commitHash: Schema.optional(Schema.String),
      commitMessage: Schema.optional(Schema.String),
      functionsFilepathRoutingConfigJson: Schema.optional(
        UploadableSchema.pipe(T.HttpFormDataFile()),
      ),
      manifest: Schema.optional(Schema.String),
      pagesBuildOutputDir: Schema.optional(Schema.String),
      wranglerConfigHash: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        headers: "_headers",
        redirects: "_redirects",
        routesJson: "_routes.json",
        workerBundle: "_worker.bundle",
        workerJs: "_worker.js",
        branch: "branch",
        commitDirty: "commit_dirty",
        commitHash: "commit_hash",
        commitMessage: "commit_message",
        functionsFilepathRoutingConfigJson:
          "functions-filepath-routing-config.json",
        manifest: "manifest",
        pagesBuildOutputDir: "pages_build_output_dir",
        wranglerConfigHash: "wrangler_config_hash",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/pages/projects/{projectName}/deployments",
        contentType: "multipart",
      }),
    ),
  ) as unknown as Schema.Codec<CreateProjectDeploymentRequest>;

export interface CreateProjectDeploymentResponse {
  /** Id of the deployment. */
  id: string;
  /** A list of alias URLs pointing to this deployment. */
  aliases: string[] | null;
  /** Configs for the project build process. */
  buildConfig: {
    webAnalyticsTag: string | null;
    webAnalyticsToken: string | null;
    buildCaching?: boolean | null;
    buildCommand?: string | null;
    destinationDir?: string | null;
    rootDir?: string | null;
  };
  /** When the deployment was created. */
  createdOn: string;
  /** Info about what caused the deployment. */
  deploymentTrigger: {
    metadata: {
      branch: string;
      commitDirty: boolean;
      commitHash: string;
      commitMessage: string;
    };
    type: "github:push" | "ad_hoc" | "deploy_hook" | (string & {});
  };
  /** Environment variables used for builds and Pages Functions. */
  envVars: Record<string, unknown> | null;
  /** Type of deploy. */
  environment: "preview" | "production" | (string & {});
  /** If the deployment has been skipped. */
  isSkipped: boolean;
  /** The status of the deployment. */
  latestStage: {
    endedOn: string | null;
    name:
      | "queued"
      | "initialize"
      | "clone_repo"
      | "build"
      | "deploy"
      | (string & {});
    startedOn: string | null;
    status:
      | "success"
      | "idle"
      | "active"
      | "failure"
      | "canceled"
      | (string & {});
  };
  /** When the deployment was last modified. */
  modifiedOn: string;
  /** Id of the project. */
  projectId: string;
  /** Name of the project. */
  projectName: string;
  /** Short Id (8 character) of the deployment. */
  shortId: string;
  /** Configs for the project source control. */
  source?: {
    config: {
      deploymentsEnabled: boolean;
      owner: string;
      ownerId: string;
      pathExcludes: string[];
      pathIncludes: string[];
      prCommentsEnabled: boolean;
      previewBranchExcludes: string[];
      previewBranchIncludes: string[];
      previewDeploymentSetting: "all" | "none" | "custom" | (string & {});
      productionBranch: string;
      productionDeploymentsEnabled: boolean;
      repoId: string;
      repoName: string;
    };
    type: "github" | "gitlab" | (string & {});
  } | null;
  /** List of past stages. */
  stages: {
    endedOn: string | null;
    name:
      | "queued"
      | "initialize"
      | "clone_repo"
      | "build"
      | "deploy"
      | (string & {});
    startedOn: string | null;
    status:
      | "success"
      | "idle"
      | "active"
      | "failure"
      | "canceled"
      | (string & {});
  }[];
  /** The live URL to view this deployment. */
  url: string;
  /** Whether the deployment uses functions. */
  usesFunctions?: boolean | null;
}

export const CreateProjectDeploymentResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      aliases: Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      buildConfig: BuildConfig,
      createdOn: Schema.String,
      deploymentTrigger: DeploymentTrigger,
      envVars: Schema.Union([
        Schema.Record(Schema.String, Schema.Unknown),
        Schema.Null,
      ]),
      environment: Schema.Union([
        Schema.Literals(["preview", "production"]),
        Schema.String,
      ]),
      isSkipped: Schema.Boolean,
      latestStage: Stage,
      modifiedOn: Schema.String,
      projectId: Schema.String,
      projectName: Schema.String,
      shortId: Schema.String,
      source: Schema.optional(Schema.Union([Source, Schema.Null])),
      stages: Schema.Array(Stage),
      url: Schema.String,
      usesFunctions: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          aliases: "aliases",
          buildConfig: "build_config",
          createdOn: "created_on",
          deploymentTrigger: "deployment_trigger",
          envVars: "env_vars",
          environment: "environment",
          isSkipped: "is_skipped",
          latestStage: "latest_stage",
          modifiedOn: "modified_on",
          projectId: "project_id",
          projectName: "project_name",
          shortId: "short_id",
          source: "source",
          stages: "stages",
          url: "url",
          usesFunctions: "uses_functions",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateProjectDeploymentResponse>;

export type CreateProjectDeploymentError =
  | DefaultErrors
  | ProjectNotFound
  | Forbidden;

export const createProjectDeployment: API.OperationMethod<
  CreateProjectDeploymentRequest,
  CreateProjectDeploymentResponse,
  CreateProjectDeploymentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectDeploymentRequest,
  output: CreateProjectDeploymentResponse,
  errors: [ProjectNotFound, Forbidden],
}));

export interface DeleteProjectDeploymentRequest {
  projectName: string;
  deploymentId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Query param: Allow deletion of aliased non-production deployments when a normal delete would be rejected. */
  force?: boolean;
}

export const DeleteProjectDeploymentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      projectName: Schema.String.pipe(T.HttpPath("projectName")),
      deploymentId: Schema.String.pipe(T.HttpPath("deploymentId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/pages/projects/{projectName}/deployments/{deploymentId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteProjectDeploymentRequest>;

export type DeleteProjectDeploymentResponse = unknown;

export const DeleteProjectDeploymentResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteProjectDeploymentResponse>;

export type DeleteProjectDeploymentError =
  | DefaultErrors
  | DeploymentNotFound
  | ProjectNotFound
  | ActiveProductionDeployment
  | Forbidden;

export const deleteProjectDeployment: API.OperationMethod<
  DeleteProjectDeploymentRequest,
  DeleteProjectDeploymentResponse,
  DeleteProjectDeploymentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectDeploymentRequest,
  output: DeleteProjectDeploymentResponse,
  errors: [
    DeploymentNotFound,
    ProjectNotFound,
    ActiveProductionDeployment,
    Forbidden,
  ],
}));

export interface RetryProjectDeploymentRequest {
  projectName: string;
  deploymentId: string;
  /** Identifier. */
  accountId: string;
}

export const RetryProjectDeploymentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      projectName: Schema.String.pipe(T.HttpPath("projectName")),
      deploymentId: Schema.String.pipe(T.HttpPath("deploymentId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/pages/projects/{projectName}/deployments/{deploymentId}/retry",
      }),
    ),
  ) as unknown as Schema.Codec<RetryProjectDeploymentRequest>;

export interface RetryProjectDeploymentResponse {
  /** Id of the deployment. */
  id: string;
  /** A list of alias URLs pointing to this deployment. */
  aliases: string[] | null;
  /** Configs for the project build process. */
  buildConfig: {
    webAnalyticsTag: string | null;
    webAnalyticsToken: string | null;
    buildCaching?: boolean | null;
    buildCommand?: string | null;
    destinationDir?: string | null;
    rootDir?: string | null;
  };
  /** When the deployment was created. */
  createdOn: string;
  /** Info about what caused the deployment. */
  deploymentTrigger: {
    metadata: {
      branch: string;
      commitDirty: boolean;
      commitHash: string;
      commitMessage: string;
    };
    type: "github:push" | "ad_hoc" | "deploy_hook" | (string & {});
  };
  /** Environment variables used for builds and Pages Functions. */
  envVars: Record<string, unknown> | null;
  /** Type of deploy. */
  environment: "preview" | "production" | (string & {});
  /** If the deployment has been skipped. */
  isSkipped: boolean;
  /** The status of the deployment. */
  latestStage: {
    endedOn: string | null;
    name:
      | "queued"
      | "initialize"
      | "clone_repo"
      | "build"
      | "deploy"
      | (string & {});
    startedOn: string | null;
    status:
      | "success"
      | "idle"
      | "active"
      | "failure"
      | "canceled"
      | (string & {});
  };
  /** When the deployment was last modified. */
  modifiedOn: string;
  /** Id of the project. */
  projectId: string;
  /** Name of the project. */
  projectName: string;
  /** Short Id (8 character) of the deployment. */
  shortId: string;
  /** Configs for the project source control. */
  source: {
    config: {
      deploymentsEnabled: boolean;
      owner: string;
      ownerId: string;
      pathExcludes: string[];
      pathIncludes: string[];
      prCommentsEnabled: boolean;
      previewBranchExcludes: string[];
      previewBranchIncludes: string[];
      previewDeploymentSetting: "all" | "none" | "custom" | (string & {});
      productionBranch: string;
      productionDeploymentsEnabled: boolean;
      repoId: string;
      repoName: string;
    };
    type: "github" | "gitlab" | (string & {});
  };
  /** List of past stages. */
  stages: {
    endedOn: string | null;
    name:
      | "queued"
      | "initialize"
      | "clone_repo"
      | "build"
      | "deploy"
      | (string & {});
    startedOn: string | null;
    status:
      | "success"
      | "idle"
      | "active"
      | "failure"
      | "canceled"
      | (string & {});
  }[];
  /** The live URL to view this deployment. */
  url: string;
  /** Whether the deployment uses functions. */
  usesFunctions?: boolean | null;
}

export const RetryProjectDeploymentResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      aliases: Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      buildConfig: BuildConfig,
      createdOn: Schema.String,
      deploymentTrigger: DeploymentTrigger,
      envVars: Schema.Union([
        Schema.Record(Schema.String, Schema.Unknown),
        Schema.Null,
      ]),
      environment: Schema.Union([
        Schema.Literals(["preview", "production"]),
        Schema.String,
      ]),
      isSkipped: Schema.Boolean,
      latestStage: Stage,
      modifiedOn: Schema.String,
      projectId: Schema.String,
      projectName: Schema.String,
      shortId: Schema.String,
      source: Source,
      stages: Schema.Array(Stage),
      url: Schema.String,
      usesFunctions: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          aliases: "aliases",
          buildConfig: "build_config",
          createdOn: "created_on",
          deploymentTrigger: "deployment_trigger",
          envVars: "env_vars",
          environment: "environment",
          isSkipped: "is_skipped",
          latestStage: "latest_stage",
          modifiedOn: "modified_on",
          projectId: "project_id",
          projectName: "project_name",
          shortId: "short_id",
          source: "source",
          stages: "stages",
          url: "url",
          usesFunctions: "uses_functions",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<RetryProjectDeploymentResponse>;

export type RetryProjectDeploymentError = DefaultErrors;

export const retryProjectDeployment: API.OperationMethod<
  RetryProjectDeploymentRequest,
  RetryProjectDeploymentResponse,
  RetryProjectDeploymentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RetryProjectDeploymentRequest,
  output: RetryProjectDeploymentResponse,
  errors: [],
}));

export interface RollbackProjectDeploymentRequest {
  projectName: string;
  deploymentId: string;
  /** Identifier. */
  accountId: string;
}

export const RollbackProjectDeploymentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      projectName: Schema.String.pipe(T.HttpPath("projectName")),
      deploymentId: Schema.String.pipe(T.HttpPath("deploymentId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/pages/projects/{projectName}/deployments/{deploymentId}/rollback",
      }),
    ),
  ) as unknown as Schema.Codec<RollbackProjectDeploymentRequest>;

export interface RollbackProjectDeploymentResponse {
  /** Id of the deployment. */
  id: string;
  /** A list of alias URLs pointing to this deployment. */
  aliases: string[] | null;
  /** Configs for the project build process. */
  buildConfig: {
    webAnalyticsTag: string | null;
    webAnalyticsToken: string | null;
    buildCaching?: boolean | null;
    buildCommand?: string | null;
    destinationDir?: string | null;
    rootDir?: string | null;
  };
  /** When the deployment was created. */
  createdOn: string;
  /** Info about what caused the deployment. */
  deploymentTrigger: {
    metadata: {
      branch: string;
      commitDirty: boolean;
      commitHash: string;
      commitMessage: string;
    };
    type: "github:push" | "ad_hoc" | "deploy_hook" | (string & {});
  };
  /** Environment variables used for builds and Pages Functions. */
  envVars: Record<string, unknown> | null;
  /** Type of deploy. */
  environment: "preview" | "production" | (string & {});
  /** If the deployment has been skipped. */
  isSkipped: boolean;
  /** The status of the deployment. */
  latestStage: {
    endedOn: string | null;
    name:
      | "queued"
      | "initialize"
      | "clone_repo"
      | "build"
      | "deploy"
      | (string & {});
    startedOn: string | null;
    status:
      | "success"
      | "idle"
      | "active"
      | "failure"
      | "canceled"
      | (string & {});
  };
  /** When the deployment was last modified. */
  modifiedOn: string;
  /** Id of the project. */
  projectId: string;
  /** Name of the project. */
  projectName: string;
  /** Short Id (8 character) of the deployment. */
  shortId: string;
  /** Configs for the project source control. */
  source: {
    config: {
      deploymentsEnabled: boolean;
      owner: string;
      ownerId: string;
      pathExcludes: string[];
      pathIncludes: string[];
      prCommentsEnabled: boolean;
      previewBranchExcludes: string[];
      previewBranchIncludes: string[];
      previewDeploymentSetting: "all" | "none" | "custom" | (string & {});
      productionBranch: string;
      productionDeploymentsEnabled: boolean;
      repoId: string;
      repoName: string;
    };
    type: "github" | "gitlab" | (string & {});
  };
  /** List of past stages. */
  stages: {
    endedOn: string | null;
    name:
      | "queued"
      | "initialize"
      | "clone_repo"
      | "build"
      | "deploy"
      | (string & {});
    startedOn: string | null;
    status:
      | "success"
      | "idle"
      | "active"
      | "failure"
      | "canceled"
      | (string & {});
  }[];
  /** The live URL to view this deployment. */
  url: string;
  /** Whether the deployment uses functions. */
  usesFunctions?: boolean | null;
}

export const RollbackProjectDeploymentResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      aliases: Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      buildConfig: BuildConfig,
      createdOn: Schema.String,
      deploymentTrigger: DeploymentTrigger,
      envVars: Schema.Union([
        Schema.Record(Schema.String, Schema.Unknown),
        Schema.Null,
      ]),
      environment: Schema.Union([
        Schema.Literals(["preview", "production"]),
        Schema.String,
      ]),
      isSkipped: Schema.Boolean,
      latestStage: Stage,
      modifiedOn: Schema.String,
      projectId: Schema.String,
      projectName: Schema.String,
      shortId: Schema.String,
      source: Source,
      stages: Schema.Array(Stage),
      url: Schema.String,
      usesFunctions: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          aliases: "aliases",
          buildConfig: "build_config",
          createdOn: "created_on",
          deploymentTrigger: "deployment_trigger",
          envVars: "env_vars",
          environment: "environment",
          isSkipped: "is_skipped",
          latestStage: "latest_stage",
          modifiedOn: "modified_on",
          projectId: "project_id",
          projectName: "project_name",
          shortId: "short_id",
          source: "source",
          stages: "stages",
          url: "url",
          usesFunctions: "uses_functions",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<RollbackProjectDeploymentResponse>;

export type RollbackProjectDeploymentError = DefaultErrors;

export const rollbackProjectDeployment: API.OperationMethod<
  RollbackProjectDeploymentRequest,
  RollbackProjectDeploymentResponse,
  RollbackProjectDeploymentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RollbackProjectDeploymentRequest,
  output: RollbackProjectDeploymentResponse,
  errors: [],
}));

// =============================================================================
// ProjectDeploymentHistoryLog
// =============================================================================

export interface GetProjectDeploymentHistoryLogRequest {
  projectName: string;
  deploymentId: string;
  /** Identifier. */
  accountId: string;
}

export const GetProjectDeploymentHistoryLogRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      projectName: Schema.String.pipe(T.HttpPath("projectName")),
      deploymentId: Schema.String.pipe(T.HttpPath("deploymentId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/pages/projects/{projectName}/deployments/{deploymentId}/history/logs",
      }),
    ),
  ) as unknown as Schema.Codec<GetProjectDeploymentHistoryLogRequest>;

export interface GetProjectDeploymentHistoryLogResponse {
  data: { line: string; ts: string }[];
  includesContainerLogs: boolean;
  total: number;
}

export const GetProjectDeploymentHistoryLogResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.Array(Data),
      includesContainerLogs: Schema.Boolean,
      total: Schema.Number,
    })
      .pipe(
        Schema.encodeKeys({
          data: "data",
          includesContainerLogs: "includes_container_logs",
          total: "total",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetProjectDeploymentHistoryLogResponse>;

export type GetProjectDeploymentHistoryLogError = DefaultErrors;

export const getProjectDeploymentHistoryLog: API.OperationMethod<
  GetProjectDeploymentHistoryLogRequest,
  GetProjectDeploymentHistoryLogResponse,
  GetProjectDeploymentHistoryLogError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectDeploymentHistoryLogRequest,
  output: GetProjectDeploymentHistoryLogResponse,
  errors: [],
}));

// =============================================================================
// ProjectDomain
// =============================================================================

export interface GetProjectDomainRequest {
  projectName: string;
  domainName: string;
  /** Identifier. */
  accountId: string;
}

export const GetProjectDomainRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      projectName: Schema.String.pipe(T.HttpPath("projectName")),
      domainName: Schema.String.pipe(T.HttpPath("domainName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/pages/projects/{projectName}/domains/{domainName}",
      }),
    ),
  ) as unknown as Schema.Codec<GetProjectDomainRequest>;

export interface GetProjectDomainResponse {
  id: string;
  certificateAuthority?: "google" | "lets_encrypt" | null;
  createdOn: string;
  domainId: string;
  /** The domain name. */
  name: string;
  status:
    | "initializing"
    | "pending"
    | "active"
    | "deactivated"
    | "blocked"
    | "error"
    | (string & {});
  validationData?: {
    method?: "http" | "txt" | null;
    status?:
      | "initializing"
      | "pending"
      | "active"
      | "deactivated"
      | "error"
      | null;
    errorMessage?: string | null;
    txtName?: string | null;
    txtValue?: string | null;
  } | null;
  verificationData?: {
    status?: "pending" | "active" | "deactivated" | "blocked" | "error" | null;
    errorMessage?: string | null;
  } | null;
  zoneTag?: string | null;
}

export const GetProjectDomainResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      certificateAuthority: Schema.optional(
        Schema.Union([
          Schema.Literal("google"),
          Schema.Literal("lets_encrypt"),
          Schema.Null,
        ]),
      ),
      createdOn: Schema.String,
      domainId: Schema.String,
      name: Schema.String,
      status: Schema.Union([
        Schema.Literals([
          "initializing",
          "pending",
          "active",
          "deactivated",
          "blocked",
          "error",
        ]),
        Schema.String,
      ]),
      validationData: Schema.optional(
        Schema.Union([ValidationData, Schema.Null]),
      ),
      verificationData: Schema.optional(
        Schema.Union([VerificationData, Schema.Null]),
      ),
      zoneTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          certificateAuthority: "certificate_authority",
          createdOn: "created_on",
          domainId: "domain_id",
          name: "name",
          status: "status",
          validationData: "validation_data",
          verificationData: "verification_data",
          zoneTag: "zone_tag",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetProjectDomainResponse>;

export type GetProjectDomainError =
  | DefaultErrors
  | ProjectNotFound
  | PagesDomainNotFound
  | Forbidden;

export const getProjectDomain: API.OperationMethod<
  GetProjectDomainRequest,
  GetProjectDomainResponse,
  GetProjectDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectDomainRequest,
  output: GetProjectDomainResponse,
  errors: [ProjectNotFound, PagesDomainNotFound, Forbidden],
}));

export interface ListProjectDomainsRequest {
  projectName: string;
  /** Identifier. */
  accountId: string;
}

export const ListProjectDomainsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      projectName: Schema.String.pipe(T.HttpPath("projectName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/pages/projects/{projectName}/domains",
      }),
    ),
  ) as unknown as Schema.Codec<ListProjectDomainsRequest>;

export interface ListProjectDomainsResponse {
  result: {
    id: string;
    certificateAuthority?: "google" | "lets_encrypt" | null;
    createdOn: string;
    domainId: string;
    name: string;
    status:
      | "initializing"
      | "pending"
      | "active"
      | "deactivated"
      | "blocked"
      | "error"
      | (string & {});
    validationData?: {
      method?: "http" | "txt" | null;
      status?:
        | "initializing"
        | "pending"
        | "active"
        | "deactivated"
        | "error"
        | null;
      errorMessage?: string | null;
      txtName?: string | null;
      txtValue?: string | null;
    } | null;
    verificationData?: {
      status?:
        | "pending"
        | "active"
        | "deactivated"
        | "blocked"
        | "error"
        | null;
      errorMessage?: string | null;
    } | null;
    zoneTag?: string | null;
  }[];
}

export const ListProjectDomainsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListProjectDomainsResponseResult),
    }),
  ) as unknown as Schema.Codec<ListProjectDomainsResponse>;

export type ListProjectDomainsError =
  | DefaultErrors
  | ProjectNotFound
  | Forbidden;

export const listProjectDomains: API.PaginatedOperationMethod<
  ListProjectDomainsRequest,
  ListProjectDomainsResponse,
  ListProjectDomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectDomainsRequest,
  output: ListProjectDomainsResponse,
  errors: [ProjectNotFound, Forbidden],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateProjectDomainRequest {
  projectName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: The domain name. */
  name: string;
}

export const CreateProjectDomainRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      projectName: Schema.String.pipe(T.HttpPath("projectName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.String,
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/pages/projects/{projectName}/domains",
      }),
    ),
  ) as unknown as Schema.Codec<CreateProjectDomainRequest>;

export interface CreateProjectDomainResponse {
  id: string;
  certificateAuthority?: "google" | "lets_encrypt" | null;
  createdOn: string;
  domainId: string;
  /** The domain name. */
  name: string;
  status:
    | "initializing"
    | "pending"
    | "active"
    | "deactivated"
    | "blocked"
    | "error"
    | (string & {});
  validationData?: {
    method?: "http" | "txt" | null;
    status?:
      | "initializing"
      | "pending"
      | "active"
      | "deactivated"
      | "error"
      | null;
    errorMessage?: string | null;
    txtName?: string | null;
    txtValue?: string | null;
  } | null;
  verificationData?: {
    status?: "pending" | "active" | "deactivated" | "blocked" | "error" | null;
    errorMessage?: string | null;
  } | null;
  zoneTag?: string | null;
}

export const CreateProjectDomainResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      certificateAuthority: Schema.optional(
        Schema.Union([
          Schema.Literal("google"),
          Schema.Literal("lets_encrypt"),
          Schema.Null,
        ]),
      ),
      createdOn: Schema.String,
      domainId: Schema.String,
      name: Schema.String,
      status: Schema.Union([
        Schema.Literals([
          "initializing",
          "pending",
          "active",
          "deactivated",
          "blocked",
          "error",
        ]),
        Schema.String,
      ]),
      validationData: Schema.optional(
        Schema.Union([ValidationData, Schema.Null]),
      ),
      verificationData: Schema.optional(
        Schema.Union([VerificationData, Schema.Null]),
      ),
      zoneTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          certificateAuthority: "certificate_authority",
          createdOn: "created_on",
          domainId: "domain_id",
          name: "name",
          status: "status",
          validationData: "validation_data",
          verificationData: "verification_data",
          zoneTag: "zone_tag",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateProjectDomainResponse>;

export type CreateProjectDomainError =
  | DefaultErrors
  | ProjectNotFound
  | PagesDomainAlreadyExists
  | Forbidden;

export const createProjectDomain: API.OperationMethod<
  CreateProjectDomainRequest,
  CreateProjectDomainResponse,
  CreateProjectDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectDomainRequest,
  output: CreateProjectDomainResponse,
  errors: [ProjectNotFound, PagesDomainAlreadyExists, Forbidden],
}));

export interface PatchProjectDomainRequest {
  projectName: string;
  domainName: string;
  /** Identifier. */
  accountId: string;
}

export const PatchProjectDomainRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      projectName: Schema.String.pipe(T.HttpPath("projectName")),
      domainName: Schema.String.pipe(T.HttpPath("domainName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/pages/projects/{projectName}/domains/{domainName}",
      }),
    ),
  ) as unknown as Schema.Codec<PatchProjectDomainRequest>;

export interface PatchProjectDomainResponse {
  id: string;
  certificateAuthority?: "google" | "lets_encrypt" | null;
  createdOn: string;
  domainId: string;
  /** The domain name. */
  name: string;
  status:
    | "initializing"
    | "pending"
    | "active"
    | "deactivated"
    | "blocked"
    | "error"
    | (string & {});
  validationData?: {
    method?: "http" | "txt" | null;
    status?:
      | "initializing"
      | "pending"
      | "active"
      | "deactivated"
      | "error"
      | null;
    errorMessage?: string | null;
    txtName?: string | null;
    txtValue?: string | null;
  } | null;
  verificationData?: {
    status?: "pending" | "active" | "deactivated" | "blocked" | "error" | null;
    errorMessage?: string | null;
  } | null;
  zoneTag?: string | null;
}

export const PatchProjectDomainResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      certificateAuthority: Schema.optional(
        Schema.Union([
          Schema.Literal("google"),
          Schema.Literal("lets_encrypt"),
          Schema.Null,
        ]),
      ),
      createdOn: Schema.String,
      domainId: Schema.String,
      name: Schema.String,
      status: Schema.Union([
        Schema.Literals([
          "initializing",
          "pending",
          "active",
          "deactivated",
          "blocked",
          "error",
        ]),
        Schema.String,
      ]),
      validationData: Schema.optional(
        Schema.Union([ValidationData, Schema.Null]),
      ),
      verificationData: Schema.optional(
        Schema.Union([VerificationData, Schema.Null]),
      ),
      zoneTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          certificateAuthority: "certificate_authority",
          createdOn: "created_on",
          domainId: "domain_id",
          name: "name",
          status: "status",
          validationData: "validation_data",
          verificationData: "verification_data",
          zoneTag: "zone_tag",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PatchProjectDomainResponse>;

export type PatchProjectDomainError =
  | DefaultErrors
  | ProjectNotFound
  | PagesDomainNotFound
  | Forbidden;

export const patchProjectDomain: API.OperationMethod<
  PatchProjectDomainRequest,
  PatchProjectDomainResponse,
  PatchProjectDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectDomainRequest,
  output: PatchProjectDomainResponse,
  errors: [ProjectNotFound, PagesDomainNotFound, Forbidden],
}));

export interface DeleteProjectDomainRequest {
  projectName: string;
  domainName: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteProjectDomainRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      projectName: Schema.String.pipe(T.HttpPath("projectName")),
      domainName: Schema.String.pipe(T.HttpPath("domainName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/pages/projects/{projectName}/domains/{domainName}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteProjectDomainRequest>;

export type DeleteProjectDomainResponse = unknown;

export const DeleteProjectDomainResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteProjectDomainResponse>;

export type DeleteProjectDomainError =
  | DefaultErrors
  | ProjectNotFound
  | PagesDomainNotFound
  | Forbidden;

export const deleteProjectDomain: API.OperationMethod<
  DeleteProjectDomainRequest,
  DeleteProjectDomainResponse,
  DeleteProjectDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectDomainRequest,
  output: DeleteProjectDomainResponse,
  errors: [ProjectNotFound, PagesDomainNotFound, Forbidden],
}));
