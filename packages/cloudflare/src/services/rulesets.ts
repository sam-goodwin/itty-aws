/**
 * Cloudflare RULESETS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service rulesets
 */

import * as Schema from "@distilled.cloud/core/schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// =============================================================================
// Errors
// =============================================================================

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class PhaseNotEntitled extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<PhaseNotEntitled>()("PhaseNotEntitled", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 50002 }, { status: 400, message: { includes: "not entitled" } }],
) {}

export class RulesetNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<RulesetNotFound>()("RulesetNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10003 }, { code: 10001 }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface Response {
  /** The content to return. */
  content: string;
  /** The type of the content to return. */
  contentType: string;
  /** The status code to return. */
  statusCode: number;
}
const Response = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    content: Schema.String,
    contentType: Schema.String,
    statusCode: Schema.Number,
  }).pipe(
    Schema.encodeKeys({
      content: "content",
      contentType: "content_type",
      statusCode: "status_code",
    }),
  ),
) as unknown as Schema.Codec<Response>;

interface ActionParameters {
  /** The response to show when the block is applied. */
  response?: {
    content: string;
    contentType: string;
    statusCode: number;
  } | null;
}
const ActionParameters = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    response: Schema.optional(Schema.Union([Response, Schema.Null])),
  }),
) as unknown as Schema.Codec<ActionParameters>;

interface ExposedCredentialCheck {
  /** An expression that selects the password used in the credentials check. */
  passwordExpression: string;
  /** An expression that selects the user ID used in the credentials check. */
  usernameExpression: string;
}
const ExposedCredentialCheck = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    passwordExpression: SensitiveString,
    usernameExpression: Schema.String,
  }).pipe(
    Schema.encodeKeys({
      passwordExpression: "password_expression",
      usernameExpression: "username_expression",
    }),
  ),
) as unknown as Schema.Codec<ExposedCredentialCheck>;

interface Logging {
  /** Whether to generate a log when the rule matches. */
  enabled: boolean;
}
const Logging = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    enabled: Schema.Boolean,
  }),
) as unknown as Schema.Codec<Logging>;

interface Ratelimit {
  /** Characteristics of the request on which the rate limit counter will be incremented. */
  characteristics: string[];
  /** Period in seconds over which the counter is being incremented. */
  period: number;
  /** An expression that defines when the rate limit counter should be incremented. It defaults to the same as the rule's expression. */
  countingExpression?: string | null;
  /** Period of time in seconds after which the action will be disabled following its first execution. */
  mitigationTimeout?: number | null;
  /** The threshold of requests per period after which the action will be executed for the first time. */
  requestsPerPeriod?: number | null;
  /** Whether counting is only performed when an origin is reached. */
  requestsToOrigin?: boolean | null;
  /** The score threshold per period for which the action will be executed the first time. */
  scorePerPeriod?: number | null;
  /** A response header name provided by the origin, which contains the score to increment rate limit counter with. */
  scoreResponseHeaderName?: string | null;
}
const Ratelimit = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    characteristics: Schema.Array(Schema.String),
    period: Schema.Number,
    countingExpression: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    mitigationTimeout: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    requestsPerPeriod: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    requestsToOrigin: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    scorePerPeriod: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    scoreResponseHeaderName: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      characteristics: "characteristics",
      period: "period",
      countingExpression: "counting_expression",
      mitigationTimeout: "mitigation_timeout",
      requestsPerPeriod: "requests_per_period",
      requestsToOrigin: "requests_to_origin",
      scorePerPeriod: "score_per_period",
      scoreResponseHeaderName: "score_response_header_name",
    }),
  ),
) as unknown as Schema.Codec<Ratelimit>;

interface BlockRule {
  /** The timestamp of when the rule was last modified. */
  lastUpdated: string;
  /** The version of the rule. */
  version: string;
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "block" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: {
    response?: {
      content: string;
      contentType: string;
      statusCode: number;
    } | null;
  } | null;
  /** The categories of the rule. */
  categories?: string[] | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const BlockRule = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    lastUpdated: Schema.String,
    version: Schema.String,
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("block"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([ActionParameters, Schema.Null]),
    ),
    categories: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      lastUpdated: "last_updated",
      version: "version",
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      categories: "categories",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<BlockRule>;

interface RulesetsChallengeRule {
  /** The timestamp of when the rule was last modified. */
  lastUpdated: string;
  /** The version of the rule. */
  version: string;
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "challenge" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: unknown | null;
  /** The categories of the rule. */
  categories?: string[] | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const RulesetsChallengeRule = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    lastUpdated: Schema.String,
    version: Schema.String,
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("challenge"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([Schema.Unknown, Schema.Null]),
    ),
    categories: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      lastUpdated: "last_updated",
      version: "version",
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      categories: "categories",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<RulesetsChallengeRule>;

interface Algorithm {
  /** Name of the compression algorithm to enable. */
  name?:
    | "none"
    | "auto"
    | "default"
    | "gzip"
    | "brotli"
    | "zstd"
    | (string & {})
    | null;
}
const Algorithm = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "none",
            "auto",
            "default",
            "gzip",
            "brotli",
            "zstd",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<Algorithm>;

interface ActionParameters2 {
  /** Custom order for compression algorithms. */
  algorithms: {
    name?:
      | "none"
      | "auto"
      | "default"
      | "gzip"
      | "brotli"
      | "zstd"
      | (string & {})
      | null;
  }[];
}
const ActionParameters2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    algorithms: Schema.Array(Algorithm),
  }),
) as unknown as Schema.Codec<ActionParameters2>;

interface CompressResponseRule {
  /** The timestamp of when the rule was last modified. */
  lastUpdated: string;
  /** The version of the rule. */
  version: string;
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "compress_response" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: {
    algorithms: {
      name?:
        | "none"
        | "auto"
        | "default"
        | "gzip"
        | "brotli"
        | "zstd"
        | (string & {})
        | null;
    }[];
  } | null;
  /** The categories of the rule. */
  categories?: string[] | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const CompressResponseRule = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    lastUpdated: Schema.String,
    version: Schema.String,
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("compress_response"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([ActionParameters2, Schema.Null]),
    ),
    categories: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      lastUpdated: "last_updated",
      version: "version",
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      categories: "categories",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<CompressResponseRule>;

interface DdoSDynamicRule {
  /** The timestamp of when the rule was last modified. */
  lastUpdated: string;
  /** The version of the rule. */
  version: string;
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "ddos_dynamic" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: unknown | null;
  /** The categories of the rule. */
  categories?: string[] | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const DdoSDynamicRule = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    lastUpdated: Schema.String,
    version: Schema.String,
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("ddos_dynamic"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([Schema.Unknown, Schema.Null]),
    ),
    categories: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      lastUpdated: "last_updated",
      version: "version",
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      categories: "categories",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<DdoSDynamicRule>;

interface MatchedData {
  /** The public key to encrypt matched data logs with. */
  publicKey: string;
}
const MatchedData = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    publicKey: Schema.String,
  }).pipe(Schema.encodeKeys({ publicKey: "public_key" })),
) as unknown as Schema.Codec<MatchedData>;

interface Category {
  /** The name of the category to override. */
  category: string;
  /** The action to override rules in the category with. */
  action?: string | null;
  /** Whether to enable execution of rules in the category. */
  enabled?: boolean | null;
  /** The sensitivity level to use for rules in the category. This option is only applicable for DDoS phases. */
  sensitivityLevel?:
    | "default"
    | "medium"
    | "low"
    | "eoff"
    | (string & {})
    | null;
}
const Category = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    category: Schema.String,
    action: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    sensitivityLevel: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["default", "medium", "low", "eoff"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      category: "category",
      action: "action",
      enabled: "enabled",
      sensitivityLevel: "sensitivity_level",
    }),
  ),
) as unknown as Schema.Codec<Category>;

interface Rule {
  /** The ID of the rule to override. */
  id: string;
  /** The action to override the rule with. */
  action?: string | null;
  /** Whether to enable execution of the rule. */
  enabled?: boolean | null;
  /** The score threshold to use for the rule. */
  scoreThreshold?: number | null;
  /** The sensitivity level to use for the rule. This option is only applicable for DDoS phases. */
  sensitivityLevel?:
    | "default"
    | "medium"
    | "low"
    | "eoff"
    | (string & {})
    | null;
}
const Rule = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    action: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    scoreThreshold: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    sensitivityLevel: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["default", "medium", "low", "eoff"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      action: "action",
      enabled: "enabled",
      scoreThreshold: "score_threshold",
      sensitivityLevel: "sensitivity_level",
    }),
  ),
) as unknown as Schema.Codec<Rule>;

interface Overrides {
  /** An action to override all rules with. This option has lower precedence than rule and category overrides. */
  action?: string | null;
  /** A list of category-level overrides. This option has the second-highest precedence after rule-level overrides. */
  categories?:
    | {
        category: string;
        action?: string | null;
        enabled?: boolean | null;
        sensitivityLevel?:
          | "default"
          | "medium"
          | "low"
          | "eoff"
          | (string & {})
          | null;
      }[]
    | null;
  /** Whether to enable execution of all rules. This option has lower precedence than rule and category overrides. */
  enabled?: boolean | null;
  /** A list of rule-level overrides. This option has the highest precedence. */
  rules?:
    | {
        id: string;
        action?: string | null;
        enabled?: boolean | null;
        scoreThreshold?: number | null;
        sensitivityLevel?:
          | "default"
          | "medium"
          | "low"
          | "eoff"
          | (string & {})
          | null;
      }[]
    | null;
  /** A sensitivity level to set for all rules. This option has lower precedence than rule and category overrides and is only applicable for DDoS phases. */
  sensitivityLevel?:
    | "default"
    | "medium"
    | "low"
    | "eoff"
    | (string & {})
    | null;
}
const Overrides = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    action: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    categories: Schema.optional(
      Schema.Union([Schema.Array(Category), Schema.Null]),
    ),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    rules: Schema.optional(Schema.Union([Schema.Array(Rule), Schema.Null])),
    sensitivityLevel: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["default", "medium", "low", "eoff"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      action: "action",
      categories: "categories",
      enabled: "enabled",
      rules: "rules",
      sensitivityLevel: "sensitivity_level",
    }),
  ),
) as unknown as Schema.Codec<Overrides>;

interface ActionParameters3 {
  /** The ID of the ruleset to execute. */
  id: string;
  /** The configuration to use for matched data logging. */
  matchedData?: { publicKey: string } | null;
  /** A set of overrides to apply to the target ruleset. */
  overrides?: {
    action?: string | null;
    categories?:
      | {
          category: string;
          action?: string | null;
          enabled?: boolean | null;
          sensitivityLevel?:
            | "default"
            | "medium"
            | "low"
            | "eoff"
            | (string & {})
            | null;
        }[]
      | null;
    enabled?: boolean | null;
    rules?:
      | {
          id: string;
          action?: string | null;
          enabled?: boolean | null;
          scoreThreshold?: number | null;
          sensitivityLevel?:
            | "default"
            | "medium"
            | "low"
            | "eoff"
            | (string & {})
            | null;
        }[]
      | null;
    sensitivityLevel?:
      | "default"
      | "medium"
      | "low"
      | "eoff"
      | (string & {})
      | null;
  } | null;
}
const ActionParameters3 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    matchedData: Schema.optional(Schema.Union([MatchedData, Schema.Null])),
    overrides: Schema.optional(Schema.Union([Overrides, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      matchedData: "matched_data",
      overrides: "overrides",
    }),
  ),
) as unknown as Schema.Codec<ActionParameters3>;

interface ExecuteRule {
  /** The timestamp of when the rule was last modified. */
  lastUpdated: string;
  /** The version of the rule. */
  version: string;
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "execute" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: {
    id: string;
    matchedData?: { publicKey: string } | null;
    overrides?: {
      action?: string | null;
      categories?:
        | {
            category: string;
            action?: string | null;
            enabled?: boolean | null;
            sensitivityLevel?:
              | "default"
              | "medium"
              | "low"
              | "eoff"
              | (string & {})
              | null;
          }[]
        | null;
      enabled?: boolean | null;
      rules?:
        | {
            id: string;
            action?: string | null;
            enabled?: boolean | null;
            scoreThreshold?: number | null;
            sensitivityLevel?:
              | "default"
              | "medium"
              | "low"
              | "eoff"
              | (string & {})
              | null;
          }[]
        | null;
      sensitivityLevel?:
        | "default"
        | "medium"
        | "low"
        | "eoff"
        | (string & {})
        | null;
    } | null;
  } | null;
  /** The categories of the rule. */
  categories?: string[] | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const ExecuteRule = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    lastUpdated: Schema.String,
    version: Schema.String,
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("execute"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([ActionParameters3, Schema.Null]),
    ),
    categories: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      lastUpdated: "last_updated",
      version: "version",
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      categories: "categories",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<ExecuteRule>;

interface ForceConnectionCloseRule {
  /** The timestamp of when the rule was last modified. */
  lastUpdated: string;
  /** The version of the rule. */
  version: string;
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "force_connection_close" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: unknown | null;
  /** The categories of the rule. */
  categories?: string[] | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const ForceConnectionCloseRule = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      lastUpdated: Schema.String,
      version: Schema.String,
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("force_connection_close"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([Schema.Unknown, Schema.Null]),
      ),
      categories: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        lastUpdated: "last_updated",
        version: "version",
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        categories: "categories",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
) as unknown as Schema.Codec<ForceConnectionCloseRule>;

interface RulesetsJSChallengeRule {
  /** The timestamp of when the rule was last modified. */
  lastUpdated: string;
  /** The version of the rule. */
  version: string;
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "js_challenge" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: unknown | null;
  /** The categories of the rule. */
  categories?: string[] | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const RulesetsJSChallengeRule = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    lastUpdated: Schema.String,
    version: Schema.String,
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("js_challenge"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([Schema.Unknown, Schema.Null]),
    ),
    categories: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      lastUpdated: "last_updated",
      version: "version",
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      categories: "categories",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<RulesetsJSChallengeRule>;

interface LogRule {
  /** The timestamp of when the rule was last modified. */
  lastUpdated: string;
  /** The version of the rule. */
  version: string;
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "log" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: unknown | null;
  /** The categories of the rule. */
  categories?: string[] | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const LogRule = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    lastUpdated: Schema.String,
    version: Schema.String,
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(Schema.Union([Schema.Literal("log"), Schema.Null])),
    actionParameters: Schema.optional(
      Schema.Union([Schema.Unknown, Schema.Null]),
    ),
    categories: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      lastUpdated: "last_updated",
      version: "version",
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      categories: "categories",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<LogRule>;

interface CookieField {
  /** The name of the cookie. */
  name: string;
}
const CookieField = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
  }),
) as unknown as Schema.Codec<CookieField>;

interface RawResponseField {
  /** The name of the response header. */
  name: string;
  /** Whether to log duplicate values of the same header. */
  preserveDuplicates?: boolean | null;
}
const RawResponseField = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    preserveDuplicates: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      preserveDuplicates: "preserve_duplicates",
    }),
  ),
) as unknown as Schema.Codec<RawResponseField>;

interface ActionParameters4 {
  /** The cookie fields to log. */
  cookieFields?: { name: string }[] | null;
  /** The raw response fields to log. */
  rawResponseFields?:
    | { name: string; preserveDuplicates?: boolean | null }[]
    | null;
  /** The raw request fields to log. */
  requestFields?: { name: string }[] | null;
  /** The transformed response fields to log. */
  responseFields?:
    | { name: string; preserveDuplicates?: boolean | null }[]
    | null;
  /** The transformed request fields to log. */
  transformedRequestFields?: { name: string }[] | null;
}
const ActionParameters4 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    cookieFields: Schema.optional(
      Schema.Union([Schema.Array(CookieField), Schema.Null]),
    ),
    rawResponseFields: Schema.optional(
      Schema.Union([Schema.Array(RawResponseField), Schema.Null]),
    ),
    requestFields: Schema.optional(
      Schema.Union([Schema.Array(CookieField), Schema.Null]),
    ),
    responseFields: Schema.optional(
      Schema.Union([Schema.Array(RawResponseField), Schema.Null]),
    ),
    transformedRequestFields: Schema.optional(
      Schema.Union([Schema.Array(CookieField), Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      cookieFields: "cookie_fields",
      rawResponseFields: "raw_response_fields",
      requestFields: "request_fields",
      responseFields: "response_fields",
      transformedRequestFields: "transformed_request_fields",
    }),
  ),
) as unknown as Schema.Codec<ActionParameters4>;

interface LogCustomFieldRule {
  /** The timestamp of when the rule was last modified. */
  lastUpdated: string;
  /** The version of the rule. */
  version: string;
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "log_custom_field" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: {
    cookieFields?: { name: string }[] | null;
    rawResponseFields?:
      | { name: string; preserveDuplicates?: boolean | null }[]
      | null;
    requestFields?: { name: string }[] | null;
    responseFields?:
      | { name: string; preserveDuplicates?: boolean | null }[]
      | null;
    transformedRequestFields?: { name: string }[] | null;
  } | null;
  /** The categories of the rule. */
  categories?: string[] | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const LogCustomFieldRule = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    lastUpdated: Schema.String,
    version: Schema.String,
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("log_custom_field"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([ActionParameters4, Schema.Null]),
    ),
    categories: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      lastUpdated: "last_updated",
      version: "version",
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      categories: "categories",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<LogCustomFieldRule>;

interface ManagedChallengeRule {
  /** The timestamp of when the rule was last modified. */
  lastUpdated: string;
  /** The version of the rule. */
  version: string;
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "managed_challenge" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: unknown | null;
  /** The categories of the rule. */
  categories?: string[] | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const ManagedChallengeRule = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    lastUpdated: Schema.String,
    version: Schema.String,
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("managed_challenge"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([Schema.Unknown, Schema.Null]),
    ),
    categories: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      lastUpdated: "last_updated",
      version: "version",
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      categories: "categories",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<ManagedChallengeRule>;

interface FromList {
  /** An expression that evaluates to the list lookup key. */
  key: string;
  /** The name of the list to match against. */
  name: string;
}
const FromList = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    key: Schema.String,
    name: Schema.String,
  }),
) as unknown as Schema.Codec<FromList>;

interface TargetURL {
  /** An expression that evaluates to a URL to redirect the request to. */
  expression?: string | null;
  /** A URL to redirect the request to. */
  value?: string | null;
}
const TargetURL = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<TargetURL>;

interface FromValue {
  /** A URL to redirect the request to. */
  targetUrl: { expression?: string | null; value?: string | null };
  /** Whether to keep the query string of the original request. */
  preserveQueryString?: boolean | null;
  /** The status code to use for the redirect. */
  statusCode?: "301" | "302" | "303" | "307" | "308" | number | null;
}
const FromValue = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    targetUrl: TargetURL,
    preserveQueryString: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    statusCode: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literal("301"),
          Schema.Literal("302"),
          Schema.Literal("303"),
          Schema.Literal("307"),
          Schema.Literal("308"),
          Schema.Number,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      targetUrl: "target_url",
      preserveQueryString: "preserve_query_string",
      statusCode: "status_code",
    }),
  ),
) as unknown as Schema.Codec<FromValue>;

interface ActionParameters5 {
  /** A redirect based on a bulk list lookup. */
  fromList?: { key: string; name: string } | null;
  /** A redirect based on the request properties. */
  fromValue?: {
    targetUrl: { expression?: string | null; value?: string | null };
    preserveQueryString?: boolean | null;
    statusCode?: "301" | "302" | "303" | "307" | "308" | number | null;
  } | null;
}
const ActionParameters5 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    fromList: Schema.optional(Schema.Union([FromList, Schema.Null])),
    fromValue: Schema.optional(Schema.Union([FromValue, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({ fromList: "from_list", fromValue: "from_value" }),
  ),
) as unknown as Schema.Codec<ActionParameters5>;

interface RedirectRule {
  /** The timestamp of when the rule was last modified. */
  lastUpdated: string;
  /** The version of the rule. */
  version: string;
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "redirect" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: {
    fromList?: { key: string; name: string } | null;
    fromValue?: {
      targetUrl: { expression?: string | null; value?: string | null };
      preserveQueryString?: boolean | null;
      statusCode?: "301" | "302" | "303" | "307" | "308" | number | null;
    } | null;
  } | null;
  /** The categories of the rule. */
  categories?: string[] | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const RedirectRule = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    lastUpdated: Schema.String,
    version: Schema.String,
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("redirect"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([ActionParameters5, Schema.Null]),
    ),
    categories: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      lastUpdated: "last_updated",
      version: "version",
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      categories: "categories",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<RedirectRule>;

interface Uripath {
  /** A URI path rewrite. */
  path: { expression?: string | null; value?: string | null };
  /** Whether to propagate the rewritten URI to origin. */
  origin?: boolean | null;
}
const Uripath = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    path: TargetURL,
    origin: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }),
) as unknown as Schema.Codec<Uripath>;

interface Uriquery {
  /** A URI query rewrite. */
  query: { expression?: string | null; value?: string | null };
  /** Whether to propagate the rewritten URI to origin. */
  origin?: boolean | null;
}
const Uriquery = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    query: TargetURL,
    origin: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }),
) as unknown as Schema.Codec<Uriquery>;

interface ActionParameters6 {
  /** A map of headers to rewrite. */
  headers?: Record<string, unknown> | null;
  /** A URI path rewrite. */
  uri?:
    | {
        path: { expression?: string | null; value?: string | null };
        origin?: boolean | null;
      }
    | {
        query: { expression?: string | null; value?: string | null };
        origin?: boolean | null;
      }
    | null;
}
const ActionParameters6 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    headers: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    uri: Schema.optional(
      Schema.Union([Schema.Union([Uripath, Uriquery]), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<ActionParameters6>;

interface RewriteRule {
  /** The timestamp of when the rule was last modified. */
  lastUpdated: string;
  /** The version of the rule. */
  version: string;
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "rewrite" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: {
    headers?: Record<string, unknown> | null;
    uri?:
      | {
          path: { expression?: string | null; value?: string | null };
          origin?: boolean | null;
        }
      | {
          query: { expression?: string | null; value?: string | null };
          origin?: boolean | null;
        }
      | null;
  } | null;
  /** The categories of the rule. */
  categories?: string[] | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const RewriteRule = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    lastUpdated: Schema.String,
    version: Schema.String,
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("rewrite"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([ActionParameters6, Schema.Null]),
    ),
    categories: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      lastUpdated: "last_updated",
      version: "version",
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      categories: "categories",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<RewriteRule>;

interface Origin {
  /** A resolved host to route to. */
  host?: string | null;
  /** A destination port to route to. */
  port?: number | null;
}
const Origin = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    host: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<Origin>;

interface Sni {
  /** A value to override the SNI to. */
  value: string;
}
const Sni = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    value: Schema.String,
  }),
) as unknown as Schema.Codec<Sni>;

interface ActionParameters7 {
  /** A value to rewrite the HTTP host header to. */
  hostHeader?: string | null;
  /** An origin to route to. */
  origin?: { host?: string | null; port?: number | null } | null;
  /** A Server Name Indication (SNI) override. */
  sni?: { value: string } | null;
}
const ActionParameters7 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    hostHeader: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    origin: Schema.optional(Schema.Union([Origin, Schema.Null])),
    sni: Schema.optional(Schema.Union([Sni, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      hostHeader: "host_header",
      origin: "origin",
      sni: "sni",
    }),
  ),
) as unknown as Schema.Codec<ActionParameters7>;

interface RouteRule {
  /** The timestamp of when the rule was last modified. */
  lastUpdated: string;
  /** The version of the rule. */
  version: string;
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "route" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: {
    hostHeader?: string | null;
    origin?: { host?: string | null; port?: number | null } | null;
    sni?: { value: string } | null;
  } | null;
  /** The categories of the rule. */
  categories?: string[] | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const RouteRule = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    lastUpdated: Schema.String,
    version: Schema.String,
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("route"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([ActionParameters7, Schema.Null]),
    ),
    categories: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      lastUpdated: "last_updated",
      version: "version",
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      categories: "categories",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<RouteRule>;

interface ActionParameters8 {
  /** A delta to change the score by, which can be either positive or negative. */
  increment: number;
}
const ActionParameters8 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    increment: Schema.Number,
  }),
) as unknown as Schema.Codec<ActionParameters8>;

interface ScoreRule {
  /** The timestamp of when the rule was last modified. */
  lastUpdated: string;
  /** The version of the rule. */
  version: string;
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "score" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: { increment: number } | null;
  /** The categories of the rule. */
  categories?: string[] | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const ScoreRule = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    lastUpdated: Schema.String,
    version: Schema.String,
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("score"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([ActionParameters8, Schema.Null]),
    ),
    categories: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      lastUpdated: "last_updated",
      version: "version",
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      categories: "categories",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<ScoreRule>;

interface ActionParametersContent {
  /** The response content. */
  content: string;
  /** The content type header to set with the error response. */
  contentType?:
    | "application/json"
    | "text/html"
    | "text/plain"
    | "text/xml"
    | (string & {})
    | null;
  /** The status code to use for the error. */
  statusCode?: number | null;
}
const ActionParametersContent = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    content: Schema.String,
    contentType: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "application/json",
            "text/html",
            "text/plain",
            "text/xml",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    statusCode: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      content: "content",
      contentType: "content_type",
      statusCode: "status_code",
    }),
  ),
) as unknown as Schema.Codec<ActionParametersContent>;

interface ActionParametersAsset {
  /** The name of a custom asset to serve as the error response. */
  assetName: string;
  /** The content type header to set with the error response. */
  contentType?:
    | "application/json"
    | "text/html"
    | "text/plain"
    | "text/xml"
    | (string & {})
    | null;
  /** The status code to use for the error. */
  statusCode?: number | null;
}
const ActionParametersAsset = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    assetName: Schema.String,
    contentType: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "application/json",
            "text/html",
            "text/plain",
            "text/xml",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    statusCode: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      assetName: "asset_name",
      contentType: "content_type",
      statusCode: "status_code",
    }),
  ),
) as unknown as Schema.Codec<ActionParametersAsset>;

interface ServeErrorRule {
  /** The timestamp of when the rule was last modified. */
  lastUpdated: string;
  /** The version of the rule. */
  version: string;
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "serve_error" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?:
    | {
        content: string;
        contentType?:
          | "application/json"
          | "text/html"
          | "text/plain"
          | "text/xml"
          | (string & {})
          | null;
        statusCode?: number | null;
      }
    | {
        assetName: string;
        contentType?:
          | "application/json"
          | "text/html"
          | "text/plain"
          | "text/xml"
          | (string & {})
          | null;
        statusCode?: number | null;
      }
    | null;
  /** The categories of the rule. */
  categories?: string[] | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const ServeErrorRule = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    lastUpdated: Schema.String,
    version: Schema.String,
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("serve_error"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([
        Schema.Union([ActionParametersContent, ActionParametersAsset]),
        Schema.Null,
      ]),
    ),
    categories: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      lastUpdated: "last_updated",
      version: "version",
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      categories: "categories",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<ServeErrorRule>;

interface SetDirective {
  /** The operation to perform on the cache-control directive. */
  operation: "set" | "remove" | (string & {});
  /** Whether the directive should only be applied to the Cloudflare CDN cache. */
  cloudflareOnly?: boolean | null;
}
const SetDirective = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    operation: Schema.Union([
      Schema.Literals(["set", "remove"]),
      Schema.String,
    ]),
    cloudflareOnly: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      operation: "operation",
      cloudflareOnly: "cloudflare_only",
    }),
  ),
) as unknown as Schema.Codec<SetDirective>;

interface ActionParameters9 {
  /** A cache-control directive configuration. */
  immutable?: {
    operation: "set" | "remove" | (string & {});
    cloudflareOnly?: boolean | null;
  } | null;
  /** A cache-control directive configuration that accepts a duration value in seconds. */
  maxAge?: {
    operation: "set" | "remove" | (string & {});
    cloudflareOnly?: boolean | null;
  } | null;
  /** A cache-control directive configuration. */
  mustRevalidate?: {
    operation: "set" | "remove" | (string & {});
    cloudflareOnly?: boolean | null;
  } | null;
  /** A cache-control directive configuration. */
  mustUnderstand?: {
    operation: "set" | "remove" | (string & {});
    cloudflareOnly?: boolean | null;
  } | null;
  /** A cache-control directive configuration that accepts optional qualifiers (header names). */
  noCache?: {
    operation: "set" | "remove" | (string & {});
    cloudflareOnly?: boolean | null;
  } | null;
  /** A cache-control directive configuration. */
  noStore?: {
    operation: "set" | "remove" | (string & {});
    cloudflareOnly?: boolean | null;
  } | null;
  /** A cache-control directive configuration. */
  noTransform?: {
    operation: "set" | "remove" | (string & {});
    cloudflareOnly?: boolean | null;
  } | null;
  /** A cache-control directive configuration that accepts optional qualifiers (header names). */
  private?: {
    operation: "set" | "remove" | (string & {});
    cloudflareOnly?: boolean | null;
  } | null;
  /** A cache-control directive configuration. */
  proxyRevalidate?: {
    operation: "set" | "remove" | (string & {});
    cloudflareOnly?: boolean | null;
  } | null;
  /** A cache-control directive configuration. */
  public?: {
    operation: "set" | "remove" | (string & {});
    cloudflareOnly?: boolean | null;
  } | null;
  /** A cache-control directive configuration that accepts a duration value in seconds. */
  sMaxage?: {
    operation: "set" | "remove" | (string & {});
    cloudflareOnly?: boolean | null;
  } | null;
  /** A cache-control directive configuration that accepts a duration value in seconds. */
  staleIfError?: {
    operation: "set" | "remove" | (string & {});
    cloudflareOnly?: boolean | null;
  } | null;
  /** A cache-control directive configuration that accepts a duration value in seconds. */
  staleWhileRevalidate?: {
    operation: "set" | "remove" | (string & {});
    cloudflareOnly?: boolean | null;
  } | null;
}
const ActionParameters9 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    immutable: Schema.optional(Schema.Union([SetDirective, Schema.Null])),
    maxAge: Schema.optional(Schema.Union([SetDirective, Schema.Null])),
    mustRevalidate: Schema.optional(Schema.Union([SetDirective, Schema.Null])),
    mustUnderstand: Schema.optional(Schema.Union([SetDirective, Schema.Null])),
    noCache: Schema.optional(Schema.Union([SetDirective, Schema.Null])),
    noStore: Schema.optional(Schema.Union([SetDirective, Schema.Null])),
    noTransform: Schema.optional(Schema.Union([SetDirective, Schema.Null])),
    private: Schema.optional(Schema.Union([SetDirective, Schema.Null])),
    proxyRevalidate: Schema.optional(Schema.Union([SetDirective, Schema.Null])),
    public: Schema.optional(Schema.Union([SetDirective, Schema.Null])),
    sMaxage: Schema.optional(Schema.Union([SetDirective, Schema.Null])),
    staleIfError: Schema.optional(Schema.Union([SetDirective, Schema.Null])),
    staleWhileRevalidate: Schema.optional(
      Schema.Union([SetDirective, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      immutable: "immutable",
      maxAge: "max-age",
      mustRevalidate: "must-revalidate",
      mustUnderstand: "must-understand",
      noCache: "no-cache",
      noStore: "no-store",
      noTransform: "no-transform",
      private: "private",
      proxyRevalidate: "proxy-revalidate",
      public: "public",
      sMaxage: "s-maxage",
      staleIfError: "stale-if-error",
      staleWhileRevalidate: "stale-while-revalidate",
    }),
  ),
) as unknown as Schema.Codec<ActionParameters9>;

interface RulesetsSetCacheControlRule {
  /** The timestamp of when the rule was last modified. */
  lastUpdated: string;
  /** The version of the rule. */
  version: string;
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "set_cache_control" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: {
    immutable?: {
      operation: "set" | "remove" | (string & {});
      cloudflareOnly?: boolean | null;
    } | null;
    maxAge?: {
      operation: "set" | "remove" | (string & {});
      cloudflareOnly?: boolean | null;
    } | null;
    mustRevalidate?: {
      operation: "set" | "remove" | (string & {});
      cloudflareOnly?: boolean | null;
    } | null;
    mustUnderstand?: {
      operation: "set" | "remove" | (string & {});
      cloudflareOnly?: boolean | null;
    } | null;
    noCache?: {
      operation: "set" | "remove" | (string & {});
      cloudflareOnly?: boolean | null;
    } | null;
    noStore?: {
      operation: "set" | "remove" | (string & {});
      cloudflareOnly?: boolean | null;
    } | null;
    noTransform?: {
      operation: "set" | "remove" | (string & {});
      cloudflareOnly?: boolean | null;
    } | null;
    private?: {
      operation: "set" | "remove" | (string & {});
      cloudflareOnly?: boolean | null;
    } | null;
    proxyRevalidate?: {
      operation: "set" | "remove" | (string & {});
      cloudflareOnly?: boolean | null;
    } | null;
    public?: {
      operation: "set" | "remove" | (string & {});
      cloudflareOnly?: boolean | null;
    } | null;
    sMaxage?: {
      operation: "set" | "remove" | (string & {});
      cloudflareOnly?: boolean | null;
    } | null;
    staleIfError?: {
      operation: "set" | "remove" | (string & {});
      cloudflareOnly?: boolean | null;
    } | null;
    staleWhileRevalidate?: {
      operation: "set" | "remove" | (string & {});
      cloudflareOnly?: boolean | null;
    } | null;
  } | null;
  /** The categories of the rule. */
  categories?: string[] | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const RulesetsSetCacheControlRule = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      lastUpdated: Schema.String,
      version: Schema.String,
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("set_cache_control"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([ActionParameters9, Schema.Null]),
      ),
      categories: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        lastUpdated: "last_updated",
        version: "version",
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        categories: "categories",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
) as unknown as Schema.Codec<RulesetsSetCacheControlRule>;

interface BrowserTTL {
  /** The browser TTL mode. */
  mode:
    | "respect_origin"
    | "bypass_by_default"
    | "override_origin"
    | "bypass"
    | (string & {});
  /** The browser TTL (in seconds) if you choose the "override_origin" mode. */
  default?: number | null;
}
const BrowserTTL = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    mode: Schema.Union([
      Schema.Literals([
        "respect_origin",
        "bypass_by_default",
        "override_origin",
        "bypass",
      ]),
      Schema.String,
    ]),
    default: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<BrowserTTL>;

interface Cookie {
  /** A list of cookies to check for the presence of. The presence of these cookies is included in the cache key. */
  checkPresence?: string[] | null;
  /** A list of cookies to include in the cache key. */
  include?: string[] | null;
}
const Cookie = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    checkPresence: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    include: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({ checkPresence: "check_presence", include: "include" }),
  ),
) as unknown as Schema.Codec<Cookie>;

interface Header {
  /** A list of headers to check for the presence of. The presence of these headers is included in the cache key. */
  checkPresence?: string[] | null;
  /** A mapping of header names to a list of values. If a header is present in the request and contains any of the values provided, its value is included in the cache key. */
  contains?: Record<string, unknown> | null;
  /** Whether to exclude the origin header in the cache key. */
  excludeOrigin?: boolean | null;
  /** A list of headers to include in the cache key. */
  include?: string[] | null;
}
const Header = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    checkPresence: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    contains: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    excludeOrigin: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    include: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      checkPresence: "check_presence",
      contains: "contains",
      excludeOrigin: "exclude_origin",
      include: "include",
    }),
  ),
) as unknown as Schema.Codec<Header>;

interface Host {
  /** Whether to use the resolved host in the cache key. */
  resolved?: boolean | null;
}
const Host = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    resolved: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }),
) as unknown as Schema.Codec<Host>;

interface Exclude2 {
  /** Whether to exclude all query string parameters from the cache key. */
  all?: true | null;
  /** A list of query string parameters to exclude from the cache key. */
  list?: string[] | null;
}
const Exclude2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    all: Schema.optional(Schema.Union([Schema.Literal(true), Schema.Null])),
    list: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<Exclude2>;

interface QueryString {
  /** Which query string parameters to exclude from the cache key. */
  exclude?: { all?: true | null; list?: string[] | null } | null;
  /** Which query string parameters to include in the cache key. */
  include?: { all?: true | null; list?: string[] | null } | null;
}
const QueryString = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    exclude: Schema.optional(Schema.Union([Exclude2, Schema.Null])),
    include: Schema.optional(Schema.Union([Exclude2, Schema.Null])),
  }),
) as unknown as Schema.Codec<QueryString>;

interface User {
  /** Whether to use the user agent's device type in the cache key. */
  deviceType?: boolean | null;
  /** Whether to use the user agents's country in the cache key. */
  geo?: boolean | null;
  /** Whether to use the user agent's language in the cache key. */
  lang?: boolean | null;
}
const User = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    deviceType: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    geo: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    lang: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({ deviceType: "device_type", geo: "geo", lang: "lang" }),
  ),
) as unknown as Schema.Codec<User>;

interface CustomKey {
  /** Which cookies to include in the cache key. */
  cookie?: {
    checkPresence?: string[] | null;
    include?: string[] | null;
  } | null;
  /** Which headers to include in the cache key. */
  header?: {
    checkPresence?: string[] | null;
    contains?: Record<string, unknown> | null;
    excludeOrigin?: boolean | null;
    include?: string[] | null;
  } | null;
  /** How to use the host in the cache key. */
  host?: { resolved?: boolean | null } | null;
  /** Which query string parameters to include in or exclude from the cache key. */
  queryString?: {
    exclude?: { all?: true | null; list?: string[] | null } | null;
    include?: { all?: true | null; list?: string[] | null } | null;
  } | null;
  /** How to use characteristics of the request user agent in the cache key. */
  user?: {
    deviceType?: boolean | null;
    geo?: boolean | null;
    lang?: boolean | null;
  } | null;
}
const CustomKey = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    cookie: Schema.optional(Schema.Union([Cookie, Schema.Null])),
    header: Schema.optional(Schema.Union([Header, Schema.Null])),
    host: Schema.optional(Schema.Union([Host, Schema.Null])),
    queryString: Schema.optional(Schema.Union([QueryString, Schema.Null])),
    user: Schema.optional(Schema.Union([User, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      cookie: "cookie",
      header: "header",
      host: "host",
      queryString: "query_string",
      user: "user",
    }),
  ),
) as unknown as Schema.Codec<CustomKey>;

interface CacheKey {
  /** Whether to separate cached content based on the visitor's device type. */
  cacheByDeviceType?: boolean | null;
  /** Whether to protect from web cache deception attacks, while allowing static assets to be cached. */
  cacheDeceptionArmor?: boolean | null;
  /** Which components of the request are included or excluded from the cache key. */
  customKey?: {
    cookie?: {
      checkPresence?: string[] | null;
      include?: string[] | null;
    } | null;
    header?: {
      checkPresence?: string[] | null;
      contains?: Record<string, unknown> | null;
      excludeOrigin?: boolean | null;
      include?: string[] | null;
    } | null;
    host?: { resolved?: boolean | null } | null;
    queryString?: {
      exclude?: { all?: true | null; list?: string[] | null } | null;
      include?: { all?: true | null; list?: string[] | null } | null;
    } | null;
    user?: {
      deviceType?: boolean | null;
      geo?: boolean | null;
      lang?: boolean | null;
    } | null;
  } | null;
  /** Whether to treat requests with the same query parameters the same, regardless of the order those query parameters are in. */
  ignoreQueryStringsOrder?: boolean | null;
}
const CacheKey = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    cacheByDeviceType: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    cacheDeceptionArmor: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    customKey: Schema.optional(Schema.Union([CustomKey, Schema.Null])),
    ignoreQueryStringsOrder: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      cacheByDeviceType: "cache_by_device_type",
      cacheDeceptionArmor: "cache_deception_armor",
      customKey: "custom_key",
      ignoreQueryStringsOrder: "ignore_query_strings_order",
    }),
  ),
) as unknown as Schema.Codec<CacheKey>;

interface CacheReserve {
  /** Whether Cache Reserve is enabled. If this is true and a request meets eligibility criteria, Cloudflare will write the resource to Cache Reserve. */
  eligible: boolean;
  /** The minimum file size eligible for storage in Cache Reserve. */
  minimumFileSize?: number | null;
}
const CacheReserve = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    eligible: Schema.Boolean,
    minimumFileSize: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      eligible: "eligible",
      minimumFileSize: "minimum_file_size",
    }),
  ),
) as unknown as Schema.Codec<CacheReserve>;

interface StatusCodeRange {
  /** The lower bound of the range. */
  from?: number | null;
  /** The upper bound of the range. */
  to?: number | null;
}
const StatusCodeRange = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    from: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    to: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<StatusCodeRange>;

interface StatusCodeTTL {
  /** The time to cache the response for (in seconds). A value of 0 is equivalent to setting the cache control header with the value "no-cache". A value of -1 is equivalent to setting the cache control head */
  value: number;
  /** A single status code to apply the TTL to. */
  statusCode?: number | null;
  /** A range of status codes to apply the TTL to. */
  statusCodeRange?: { from?: number | null; to?: number | null } | null;
}
const StatusCodeTTL = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    value: Schema.Number,
    statusCode: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    statusCodeRange: Schema.optional(
      Schema.Union([StatusCodeRange, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      value: "value",
      statusCode: "status_code",
      statusCodeRange: "status_code_range",
    }),
  ),
) as unknown as Schema.Codec<StatusCodeTTL>;

interface EdgeTTL {
  /** The edge TTL mode. */
  mode:
    | "respect_origin"
    | "bypass_by_default"
    | "override_origin"
    | (string & {});
  /** The edge TTL (in seconds) if you choose the "override_origin" mode. */
  default?: number | null;
  /** A list of TTLs to apply to specific status codes or status code ranges. */
  statusCodeTtl?:
    | {
        value: number;
        statusCode?: number | null;
        statusCodeRange?: { from?: number | null; to?: number | null } | null;
      }[]
    | null;
}
const EdgeTTL = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    mode: Schema.Union([
      Schema.Literals([
        "respect_origin",
        "bypass_by_default",
        "override_origin",
      ]),
      Schema.String,
    ]),
    default: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    statusCodeTtl: Schema.optional(
      Schema.Union([Schema.Array(StatusCodeTTL), Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      mode: "mode",
      default: "default",
      statusCodeTtl: "status_code_ttl",
    }),
  ),
) as unknown as Schema.Codec<EdgeTTL>;

interface ServeStale {
  /** Whether Cloudflare should disable serving stale content while getting the latest content from the origin. */
  disableStaleWhileUpdating?: boolean | null;
}
const ServeStale = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    disableStaleWhileUpdating: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      disableStaleWhileUpdating: "disable_stale_while_updating",
    }),
  ),
) as unknown as Schema.Codec<ServeStale>;

interface SharedDictionary {
  /** URL pattern for the Use-As-Dictionary match field. This pattern specifies which URLs can use this response as a dictionary. */
  matchPattern: string;
}
const SharedDictionary = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    matchPattern: Schema.String,
  }).pipe(Schema.encodeKeys({ matchPattern: "match_pattern" })),
) as unknown as Schema.Codec<SharedDictionary>;

interface Default {
  /** How the header value is treated when building the cache key. */
  action: "bypass" | "passthrough" | "normalize" | (string & {});
}
const Default = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    action: Schema.Union([
      Schema.Literals(["bypass", "passthrough", "normalize"]),
      Schema.String,
    ]),
  }),
) as unknown as Schema.Codec<Default>;

interface Vary {
  /** Controls how response Vary headers without a per-header override contribute to the cache key. */
  default?: {
    action: "bypass" | "passthrough" | "normalize" | (string & {});
  } | null;
  /** A mapping of lowercase request header names to their vary configuration. */
  headers?: Record<string, unknown> | null;
}
const Vary = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    default: Schema.optional(Schema.Union([Default, Schema.Null])),
    headers: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<Vary>;

interface ActionParameters10 {
  /** A list of additional ports that caching should be enabled on. */
  additionalCacheablePorts?: number[] | null;
  /** How long client browsers should cache the response. Cloudflare cache purge will not purge content cached on client browsers, so high browser TTLs may lead to stale content. */
  browserTtl?: {
    mode:
      | "respect_origin"
      | "bypass_by_default"
      | "override_origin"
      | "bypass"
      | (string & {});
    default?: number | null;
  } | null;
  /** Whether the request's response from the origin is eligible for caching. Caching itself will still depend on the cache control header and your other caching configurations. */
  cache?: boolean | null;
  /** Which components of the request are included in or excluded from the cache key Cloudflare uses to store the response in cache. */
  cacheKey?: {
    cacheByDeviceType?: boolean | null;
    cacheDeceptionArmor?: boolean | null;
    customKey?: {
      cookie?: {
        checkPresence?: string[] | null;
        include?: string[] | null;
      } | null;
      header?: {
        checkPresence?: string[] | null;
        contains?: Record<string, unknown> | null;
        excludeOrigin?: boolean | null;
        include?: string[] | null;
      } | null;
      host?: { resolved?: boolean | null } | null;
      queryString?: {
        exclude?: { all?: true | null; list?: string[] | null } | null;
        include?: { all?: true | null; list?: string[] | null } | null;
      } | null;
      user?: {
        deviceType?: boolean | null;
        geo?: boolean | null;
        lang?: boolean | null;
      } | null;
    } | null;
    ignoreQueryStringsOrder?: boolean | null;
  } | null;
  /** Settings to determine whether the request's response from origin is eligible for Cache Reserve (requires a Cache Reserve add-on plan). */
  cacheReserve?: { eligible: boolean; minimumFileSize?: number | null } | null;
  /** How long the Cloudflare edge network should cache the response. */
  edgeTtl?: {
    mode:
      | "respect_origin"
      | "bypass_by_default"
      | "override_origin"
      | (string & {});
    default?: number | null;
    statusCodeTtl?:
      | {
          value: number;
          statusCode?: number | null;
          statusCodeRange?: { from?: number | null; to?: number | null } | null;
        }[]
      | null;
  } | null;
  /** Whether Cloudflare will aim to strictly adhere to RFC 7234. */
  originCacheControl?: boolean | null;
  /** Whether to generate Cloudflare error pages for issues from the origin server. */
  originErrorPagePassthru?: boolean | null;
  /** A timeout value between two successive read operations to use for your origin server. Historically, the timeout value between two read options from Cloudflare to an origin server is 100 seconds. If yo */
  readTimeout?: number | null;
  /** Whether Cloudflare should respect strong ETag (entity tag) headers. If false, Cloudflare converts strong ETag headers to weak ETag headers. */
  respectStrongEtags?: boolean | null;
  /** When to serve stale content from cache. */
  serveStale?: { disableStaleWhileUpdating?: boolean | null } | null;
  /** Configuration for shared dictionary compression. When set, Cloudflare injects Use-As-Dictionary headers on matching cacheable responses. */
  sharedDictionary?: { matchPattern: string } | null;
  /** Whether to strip ETag headers from the origin response before caching. */
  stripEtags?: boolean | null;
  /** Whether to strip Last-Modified headers from the origin response before caching. */
  stripLastModified?: boolean | null;
  /** Whether to strip Set-Cookie headers from the origin response before caching. */
  stripSetCookie?: boolean | null;
  /** Controls how cached responses vary based on request headers. `default` is required by the API and applies to any Vary response header that does not have a per-header override. */
  vary?: {
    default?: {
      action: "bypass" | "passthrough" | "normalize" | (string & {});
    } | null;
    headers?: Record<string, unknown> | null;
  } | null;
}
const ActionParameters10 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    additionalCacheablePorts: Schema.optional(
      Schema.Union([Schema.Array(Schema.Number), Schema.Null]),
    ),
    browserTtl: Schema.optional(Schema.Union([BrowserTTL, Schema.Null])),
    cache: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    cacheKey: Schema.optional(Schema.Union([CacheKey, Schema.Null])),
    cacheReserve: Schema.optional(Schema.Union([CacheReserve, Schema.Null])),
    edgeTtl: Schema.optional(Schema.Union([EdgeTTL, Schema.Null])),
    originCacheControl: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    originErrorPagePassthru: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    readTimeout: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    respectStrongEtags: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    serveStale: Schema.optional(Schema.Union([ServeStale, Schema.Null])),
    sharedDictionary: Schema.optional(
      Schema.Union([SharedDictionary, Schema.Null]),
    ),
    stripEtags: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    stripLastModified: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    stripSetCookie: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    vary: Schema.optional(Schema.Union([Vary, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      additionalCacheablePorts: "additional_cacheable_ports",
      browserTtl: "browser_ttl",
      cache: "cache",
      cacheKey: "cache_key",
      cacheReserve: "cache_reserve",
      edgeTtl: "edge_ttl",
      originCacheControl: "origin_cache_control",
      originErrorPagePassthru: "origin_error_page_passthru",
      readTimeout: "read_timeout",
      respectStrongEtags: "respect_strong_etags",
      serveStale: "serve_stale",
      sharedDictionary: "shared_dictionary",
      stripEtags: "strip_etags",
      stripLastModified: "strip_last_modified",
      stripSetCookie: "strip_set_cookie",
      vary: "vary",
    }),
  ),
) as unknown as Schema.Codec<ActionParameters10>;

interface SetCacheSettingsRule {
  /** The timestamp of when the rule was last modified. */
  lastUpdated: string;
  /** The version of the rule. */
  version: string;
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "set_cache_settings" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: {
    additionalCacheablePorts?: number[] | null;
    browserTtl?: {
      mode:
        | "respect_origin"
        | "bypass_by_default"
        | "override_origin"
        | "bypass"
        | (string & {});
      default?: number | null;
    } | null;
    cache?: boolean | null;
    cacheKey?: {
      cacheByDeviceType?: boolean | null;
      cacheDeceptionArmor?: boolean | null;
      customKey?: {
        cookie?: {
          checkPresence?: string[] | null;
          include?: string[] | null;
        } | null;
        header?: {
          checkPresence?: string[] | null;
          contains?: Record<string, unknown> | null;
          excludeOrigin?: boolean | null;
          include?: string[] | null;
        } | null;
        host?: { resolved?: boolean | null } | null;
        queryString?: {
          exclude?: { all?: true | null; list?: string[] | null } | null;
          include?: { all?: true | null; list?: string[] | null } | null;
        } | null;
        user?: {
          deviceType?: boolean | null;
          geo?: boolean | null;
          lang?: boolean | null;
        } | null;
      } | null;
      ignoreQueryStringsOrder?: boolean | null;
    } | null;
    cacheReserve?: {
      eligible: boolean;
      minimumFileSize?: number | null;
    } | null;
    edgeTtl?: {
      mode:
        | "respect_origin"
        | "bypass_by_default"
        | "override_origin"
        | (string & {});
      default?: number | null;
      statusCodeTtl?:
        | {
            value: number;
            statusCode?: number | null;
            statusCodeRange?: {
              from?: number | null;
              to?: number | null;
            } | null;
          }[]
        | null;
    } | null;
    originCacheControl?: boolean | null;
    originErrorPagePassthru?: boolean | null;
    readTimeout?: number | null;
    respectStrongEtags?: boolean | null;
    serveStale?: { disableStaleWhileUpdating?: boolean | null } | null;
    sharedDictionary?: { matchPattern: string } | null;
    stripEtags?: boolean | null;
    stripLastModified?: boolean | null;
    stripSetCookie?: boolean | null;
    vary?: {
      default?: {
        action: "bypass" | "passthrough" | "normalize" | (string & {});
      } | null;
      headers?: Record<string, unknown> | null;
    } | null;
  } | null;
  /** The categories of the rule. */
  categories?: string[] | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const SetCacheSettingsRule = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    lastUpdated: Schema.String,
    version: Schema.String,
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("set_cache_settings"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([ActionParameters10, Schema.Null]),
    ),
    categories: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      lastUpdated: "last_updated",
      version: "version",
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      categories: "categories",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<SetCacheSettingsRule>;

interface AddCacheTagsValues {
  /** The operation to perform on the cache tags. */
  operation: "add" | "remove" | "set" | (string & {});
  /** A list of cache tag values. */
  values: string[];
}
const AddCacheTagsValues = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    operation: Schema.Union([
      Schema.Literals(["add", "remove", "set"]),
      Schema.String,
    ]),
    values: Schema.Array(Schema.String),
  }),
) as unknown as Schema.Codec<AddCacheTagsValues>;

interface AddCacheTagsExpression {
  /** An expression that evaluates to an array of cache tag values. */
  expression: string;
  /** The operation to perform on the cache tags. */
  operation: "add" | "remove" | "set" | (string & {});
}
const AddCacheTagsExpression = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    expression: Schema.String,
    operation: Schema.Union([
      Schema.Literals(["add", "remove", "set"]),
      Schema.String,
    ]),
  }),
) as unknown as Schema.Codec<AddCacheTagsExpression>;

interface RulesetsSetCacheTagsRule {
  /** The timestamp of when the rule was last modified. */
  lastUpdated: string;
  /** The version of the rule. */
  version: string;
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "set_cache_tags" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?:
    | { operation: "add" | "remove" | "set" | (string & {}); values: string[] }
    | {
        expression: string;
        operation: "add" | "remove" | "set" | (string & {});
      }
    | null;
  /** The categories of the rule. */
  categories?: string[] | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const RulesetsSetCacheTagsRule = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      lastUpdated: Schema.String,
      version: Schema.String,
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("set_cache_tags"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([
          Schema.Union([AddCacheTagsValues, AddCacheTagsExpression]),
          Schema.Null,
        ]),
      ),
      categories: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        lastUpdated: "last_updated",
        version: "version",
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        categories: "categories",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
) as unknown as Schema.Codec<RulesetsSetCacheTagsRule>;

interface Autominify {
  /** Whether to minify CSS files. */
  css?: boolean | null;
  /** Whether to minify HTML files. */
  html?: boolean | null;
  /** Whether to minify JavaScript files. */
  js?: boolean | null;
}
const Autominify = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    css: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    html: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    js: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }),
) as unknown as Schema.Codec<Autominify>;

interface ActionParameters11 {
  /** Whether to enable Automatic HTTPS Rewrites. */
  automaticHttpsRewrites?: boolean | null;
  /** Which file extensions to minify automatically. */
  autominify?: {
    css?: boolean | null;
    html?: boolean | null;
    js?: boolean | null;
  } | null;
  /** Whether to enable Browser Integrity Check (BIC). */
  bic?: boolean | null;
  /** Whether to enable content conversion (e.g., HTML to Markdown). */
  contentConverter?: boolean | null;
  /** @deprecated Cloudflare Apps are deprected. */
  disableApps?: true | null;
  /** Whether to disable Pay Per Crawl. */
  disablePayPerCrawl?: true | null;
  /** Whether to disable Real User Monitoring (RUM). */
  disableRum?: true | null;
  /** Whether to disable Zaraz. */
  disableZaraz?: true | null;
  /** Whether to enable Email Obfuscation. */
  emailObfuscation?: boolean | null;
  /** Whether to enable Cloudflare Fonts. */
  fonts?: boolean | null;
  /** Whether to enable Hotlink Protection. */
  hotlinkProtection?: boolean | null;
  /** @deprecated Mirage is deprecated. More information at https://developers.cloudflare.com/speed/optimization/images/mirage/. */
  mirage?: boolean | null;
  /** Whether to enable Opportunistic Encryption. */
  opportunisticEncryption?: boolean | null;
  /** The Polish level to configure. */
  polish?: "off" | "lossless" | "lossy" | "webp" | (string & {}) | null;
  /** Whether to redirect verified AI training crawlers to canonical URLs found in the HTML response. */
  redirectsForAiTraining?: boolean | null;
  /** The request body buffering mode. */
  requestBodyBuffering?: "none" | "standard" | "full" | (string & {}) | null;
  /** The response body buffering mode. */
  responseBodyBuffering?: "none" | "standard" | (string & {}) | null;
  /** Whether to enable Rocket Loader. */
  rocketLoader?: boolean | null;
  /** The Security Level to configure. */
  securityLevel?:
    | "off"
    | "essentially_off"
    | "low"
    | "medium"
    | "high"
    | "under_attack"
    | (string & {})
    | null;
  /** Whether to enable Server-Side Excludes. */
  serverSideExcludes?: boolean | null;
  /** The SSL level to configure. */
  ssl?:
    | "off"
    | "flexible"
    | "full"
    | "strict"
    | "origin_pull"
    | (string & {})
    | null;
  /** Whether to enable Signed Exchanges (SXG). */
  sxg?: boolean | null;
}
const ActionParameters11 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    automaticHttpsRewrites: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    autominify: Schema.optional(Schema.Union([Autominify, Schema.Null])),
    bic: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    contentConverter: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    disableApps: Schema.optional(
      Schema.Union([Schema.Literal(true), Schema.Null]),
    ),
    disablePayPerCrawl: Schema.optional(
      Schema.Union([Schema.Literal(true), Schema.Null]),
    ),
    disableRum: Schema.optional(
      Schema.Union([Schema.Literal(true), Schema.Null]),
    ),
    disableZaraz: Schema.optional(
      Schema.Union([Schema.Literal(true), Schema.Null]),
    ),
    emailObfuscation: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    fonts: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    hotlinkProtection: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    mirage: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    opportunisticEncryption: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    polish: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["off", "lossless", "lossy", "webp"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    redirectsForAiTraining: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    requestBodyBuffering: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["none", "standard", "full"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    responseBodyBuffering: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["none", "standard"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    rocketLoader: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    securityLevel: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "off",
            "essentially_off",
            "low",
            "medium",
            "high",
            "under_attack",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    serverSideExcludes: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    ssl: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["off", "flexible", "full", "strict", "origin_pull"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    sxg: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      automaticHttpsRewrites: "automatic_https_rewrites",
      autominify: "autominify",
      bic: "bic",
      contentConverter: "content_converter",
      disableApps: "disable_apps",
      disablePayPerCrawl: "disable_pay_per_crawl",
      disableRum: "disable_rum",
      disableZaraz: "disable_zaraz",
      emailObfuscation: "email_obfuscation",
      fonts: "fonts",
      hotlinkProtection: "hotlink_protection",
      mirage: "mirage",
      opportunisticEncryption: "opportunistic_encryption",
      polish: "polish",
      redirectsForAiTraining: "redirects_for_ai_training",
      requestBodyBuffering: "request_body_buffering",
      responseBodyBuffering: "response_body_buffering",
      rocketLoader: "rocket_loader",
      securityLevel: "security_level",
      serverSideExcludes: "server_side_excludes",
      ssl: "ssl",
      sxg: "sxg",
    }),
  ),
) as unknown as Schema.Codec<ActionParameters11>;

interface SetConfigRule {
  /** The timestamp of when the rule was last modified. */
  lastUpdated: string;
  /** The version of the rule. */
  version: string;
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "set_config" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: {
    automaticHttpsRewrites?: boolean | null;
    autominify?: {
      css?: boolean | null;
      html?: boolean | null;
      js?: boolean | null;
    } | null;
    bic?: boolean | null;
    contentConverter?: boolean | null;
    disableApps?: true | null;
    disablePayPerCrawl?: true | null;
    disableRum?: true | null;
    disableZaraz?: true | null;
    emailObfuscation?: boolean | null;
    fonts?: boolean | null;
    hotlinkProtection?: boolean | null;
    mirage?: boolean | null;
    opportunisticEncryption?: boolean | null;
    polish?: "off" | "lossless" | "lossy" | "webp" | (string & {}) | null;
    redirectsForAiTraining?: boolean | null;
    requestBodyBuffering?: "none" | "standard" | "full" | (string & {}) | null;
    responseBodyBuffering?: "none" | "standard" | (string & {}) | null;
    rocketLoader?: boolean | null;
    securityLevel?:
      | "off"
      | "essentially_off"
      | "low"
      | "medium"
      | "high"
      | "under_attack"
      | (string & {})
      | null;
    serverSideExcludes?: boolean | null;
    ssl?:
      | "off"
      | "flexible"
      | "full"
      | "strict"
      | "origin_pull"
      | (string & {})
      | null;
    sxg?: boolean | null;
  } | null;
  /** The categories of the rule. */
  categories?: string[] | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const SetConfigRule = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    lastUpdated: Schema.String,
    version: Schema.String,
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("set_config"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([ActionParameters11, Schema.Null]),
    ),
    categories: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      lastUpdated: "last_updated",
      version: "version",
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      categories: "categories",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<SetConfigRule>;

interface ActionParameters12 {
  /** A phase to skip the execution of. This option is only compatible with the products option. */
  phase?: "current" | null;
  /** A list of phases to skip the execution of. This option is incompatible with the rulesets option. */
  phases?:
    | (
        | "ddos_l4"
        | "ddos_l7"
        | "http_config_settings"
        | "http_custom_errors"
        | "http_log_custom_fields"
        | "http_ratelimit"
        | "http_request_cache_settings"
        | "http_request_dynamic_redirect"
        | "http_request_firewall_custom"
        | "http_request_firewall_managed"
        | "http_request_late_transform"
        | "http_request_origin"
        | "http_request_redirect"
        | "http_request_sanitize"
        | "http_request_sbfm"
        | "http_request_transform"
        | "http_response_cache_settings"
        | "http_response_compression"
        | "http_response_firewall_managed"
        | "http_response_headers_transform"
        | "magic_transit"
        | "magic_transit_ids_managed"
        | "magic_transit_managed"
        | "magic_transit_ratelimit"
        | (string & {})
      )[]
    | null;
  /** A list of legacy security products to skip the execution of. */
  products?:
    | (
        | "bic"
        | "hot"
        | "rateLimit"
        | "securityLevel"
        | "uaBlock"
        | "waf"
        | "zoneLockdown"
        | (string & {})
      )[]
    | null;
  /** A mapping of ruleset IDs to a list of rule IDs in that ruleset to skip the execution of. This option is incompatible with the ruleset option. */
  rules?: Record<string, unknown> | null;
  /** A ruleset to skip the execution of. This option is incompatible with the rulesets option. */
  ruleset?: "current" | null;
  /** A list of ruleset IDs to skip the execution of. This option is incompatible with the ruleset and phases options. */
  rulesets?: string[] | null;
}
const ActionParameters12 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    phase: Schema.optional(
      Schema.Union([Schema.Literal("current"), Schema.Null]),
    ),
    phases: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Union([
            Schema.Literals([
              "ddos_l4",
              "ddos_l7",
              "http_config_settings",
              "http_custom_errors",
              "http_log_custom_fields",
              "http_ratelimit",
              "http_request_cache_settings",
              "http_request_dynamic_redirect",
              "http_request_firewall_custom",
              "http_request_firewall_managed",
              "http_request_late_transform",
              "http_request_origin",
              "http_request_redirect",
              "http_request_sanitize",
              "http_request_sbfm",
              "http_request_transform",
              "http_response_cache_settings",
              "http_response_compression",
              "http_response_firewall_managed",
              "http_response_headers_transform",
              "magic_transit",
              "magic_transit_ids_managed",
              "magic_transit_managed",
              "magic_transit_ratelimit",
            ]),
            Schema.String,
          ]),
        ),
        Schema.Null,
      ]),
    ),
    products: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Union([
            Schema.Literals([
              "bic",
              "hot",
              "rateLimit",
              "securityLevel",
              "uaBlock",
              "waf",
              "zoneLockdown",
            ]),
            Schema.String,
          ]),
        ),
        Schema.Null,
      ]),
    ),
    rules: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    ruleset: Schema.optional(
      Schema.Union([Schema.Literal("current"), Schema.Null]),
    ),
    rulesets: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<ActionParameters12>;

interface SkipRule {
  /** The timestamp of when the rule was last modified. */
  lastUpdated: string;
  /** The version of the rule. */
  version: string;
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "skip" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: {
    phase?: "current" | null;
    phases?:
      | (
          | "ddos_l4"
          | "ddos_l7"
          | "http_config_settings"
          | "http_custom_errors"
          | "http_log_custom_fields"
          | "http_ratelimit"
          | "http_request_cache_settings"
          | "http_request_dynamic_redirect"
          | "http_request_firewall_custom"
          | "http_request_firewall_managed"
          | "http_request_late_transform"
          | "http_request_origin"
          | "http_request_redirect"
          | "http_request_sanitize"
          | "http_request_sbfm"
          | "http_request_transform"
          | "http_response_cache_settings"
          | "http_response_compression"
          | "http_response_firewall_managed"
          | "http_response_headers_transform"
          | "magic_transit"
          | "magic_transit_ids_managed"
          | "magic_transit_managed"
          | "magic_transit_ratelimit"
          | (string & {})
        )[]
      | null;
    products?:
      | (
          | "bic"
          | "hot"
          | "rateLimit"
          | "securityLevel"
          | "uaBlock"
          | "waf"
          | "zoneLockdown"
          | (string & {})
        )[]
      | null;
    rules?: Record<string, unknown> | null;
    ruleset?: "current" | null;
    rulesets?: string[] | null;
  } | null;
  /** The categories of the rule. */
  categories?: string[] | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const SkipRule = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    lastUpdated: Schema.String,
    version: Schema.String,
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("skip"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([ActionParameters12, Schema.Null]),
    ),
    categories: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      lastUpdated: "last_updated",
      version: "version",
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      categories: "categories",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<SkipRule>;

interface BlockRuleParam {
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "block" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: {
    response?: {
      content: string;
      contentType: string;
      statusCode: number;
    } | null;
  } | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const BlockRuleParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("block"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([ActionParameters, Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<BlockRuleParam>;

interface RulesetsChallengeRule2 {
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "challenge" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: unknown | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const RulesetsChallengeRule2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("challenge"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([Schema.Unknown, Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<RulesetsChallengeRule2>;

interface CompressResponseRuleParam {
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "compress_response" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: {
    algorithms: {
      name?:
        | "none"
        | "auto"
        | "default"
        | "gzip"
        | "brotli"
        | "zstd"
        | (string & {})
        | null;
    }[];
  } | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const CompressResponseRuleParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("compress_response"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([ActionParameters2, Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
) as unknown as Schema.Codec<CompressResponseRuleParam>;

interface DdoSDynamicRuleParam {
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "ddos_dynamic" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: unknown | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const DdoSDynamicRuleParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("ddos_dynamic"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([Schema.Unknown, Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<DdoSDynamicRuleParam>;

interface ExecuteRuleParam {
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "execute" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: {
    id: string;
    matchedData?: { publicKey: string } | null;
    overrides?: {
      action?: string | null;
      categories?:
        | {
            category: string;
            action?: string | null;
            enabled?: boolean | null;
            sensitivityLevel?:
              | "default"
              | "medium"
              | "low"
              | "eoff"
              | (string & {})
              | null;
          }[]
        | null;
      enabled?: boolean | null;
      rules?:
        | {
            id: string;
            action?: string | null;
            enabled?: boolean | null;
            scoreThreshold?: number | null;
            sensitivityLevel?:
              | "default"
              | "medium"
              | "low"
              | "eoff"
              | (string & {})
              | null;
          }[]
        | null;
      sensitivityLevel?:
        | "default"
        | "medium"
        | "low"
        | "eoff"
        | (string & {})
        | null;
    } | null;
  } | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const ExecuteRuleParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("execute"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([ActionParameters3, Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<ExecuteRuleParam>;

interface ForceConnectionCloseRuleParam {
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "force_connection_close" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: unknown | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const ForceConnectionCloseRuleParam =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("force_connection_close"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([Schema.Unknown, Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
  ) as unknown as Schema.Codec<ForceConnectionCloseRuleParam>;

interface RulesetsJSChallengeRule2 {
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "js_challenge" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: unknown | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const RulesetsJSChallengeRule2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("js_challenge"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([Schema.Unknown, Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
) as unknown as Schema.Codec<RulesetsJSChallengeRule2>;

interface LogRuleParam {
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "log" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: unknown | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const LogRuleParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(Schema.Union([Schema.Literal("log"), Schema.Null])),
    actionParameters: Schema.optional(
      Schema.Union([Schema.Unknown, Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<LogRuleParam>;

interface LogCustomFieldRuleParam {
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "log_custom_field" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: {
    cookieFields?: { name: string }[] | null;
    rawResponseFields?:
      | { name: string; preserveDuplicates?: boolean | null }[]
      | null;
    requestFields?: { name: string }[] | null;
    responseFields?:
      | { name: string; preserveDuplicates?: boolean | null }[]
      | null;
    transformedRequestFields?: { name: string }[] | null;
  } | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const LogCustomFieldRuleParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("log_custom_field"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([ActionParameters4, Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<LogCustomFieldRuleParam>;

interface ManagedChallengeRuleParam {
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "managed_challenge" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: unknown | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const ManagedChallengeRuleParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("managed_challenge"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([Schema.Unknown, Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
) as unknown as Schema.Codec<ManagedChallengeRuleParam>;

interface FromValue2 {
  /** A URL to redirect the request to. */
  targetUrl: { expression?: string | null; value?: string | null };
  /** Whether to keep the query string of the original request. */
  preserveQueryString?: boolean | null;
  /** The status code to use for the redirect. */
  statusCode?: number | null;
}
const FromValue2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    targetUrl: TargetURL,
    preserveQueryString: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    statusCode: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      targetUrl: "target_url",
      preserveQueryString: "preserve_query_string",
      statusCode: "status_code",
    }),
  ),
) as unknown as Schema.Codec<FromValue2>;

interface ActionParameters13 {
  /** A redirect based on a bulk list lookup. */
  fromList?: { key: string; name: string } | null;
  /** A redirect based on the request properties. */
  fromValue?: {
    targetUrl: { expression?: string | null; value?: string | null };
    preserveQueryString?: boolean | null;
    statusCode?: number | null;
  } | null;
}
const ActionParameters13 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    fromList: Schema.optional(Schema.Union([FromList, Schema.Null])),
    fromValue: Schema.optional(Schema.Union([FromValue2, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({ fromList: "from_list", fromValue: "from_value" }),
  ),
) as unknown as Schema.Codec<ActionParameters13>;

interface RedirectRuleParam {
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "redirect" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: {
    fromList?: { key: string; name: string } | null;
    fromValue?: {
      targetUrl: { expression?: string | null; value?: string | null };
      preserveQueryString?: boolean | null;
      statusCode?: number | null;
    } | null;
  } | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const RedirectRuleParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("redirect"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([ActionParameters13, Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<RedirectRuleParam>;

interface Uripath2 {
  /** A URI path rewrite. */
  path: { expression?: string | null; value?: string | null };
}
const Uripath2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    path: TargetURL,
  }),
) as unknown as Schema.Codec<Uripath2>;

interface Uriquery2 {
  /** A URI query rewrite. */
  query: { expression?: string | null; value?: string | null };
}
const Uriquery2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    query: TargetURL,
  }),
) as unknown as Schema.Codec<Uriquery2>;

interface ActionParameters14 {
  /** A map of headers to rewrite. */
  headers?: Record<string, unknown> | null;
  /** A URI path rewrite. */
  uri?:
    | { path: { expression?: string | null; value?: string | null } }
    | { query: { expression?: string | null; value?: string | null } }
    | null;
}
const ActionParameters14 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    headers: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    uri: Schema.optional(
      Schema.Union([Schema.Union([Uripath2, Uriquery2]), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<ActionParameters14>;

interface RewriteRuleParam {
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "rewrite" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: {
    headers?: Record<string, unknown> | null;
    uri?:
      | { path: { expression?: string | null; value?: string | null } }
      | { query: { expression?: string | null; value?: string | null } }
      | null;
  } | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const RewriteRuleParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("rewrite"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([ActionParameters14, Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<RewriteRuleParam>;

interface RouteRuleParam {
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "route" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: {
    hostHeader?: string | null;
    origin?: { host?: string | null; port?: number | null } | null;
    sni?: { value: string } | null;
  } | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const RouteRuleParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("route"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([ActionParameters7, Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<RouteRuleParam>;

interface ScoreRuleParam {
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "score" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: { increment: number } | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const ScoreRuleParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("score"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([ActionParameters8, Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<ScoreRuleParam>;

interface ServeErrorRuleParam {
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "serve_error" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?:
    | {
        content: string;
        contentType?:
          | "application/json"
          | "text/html"
          | "text/plain"
          | "text/xml"
          | (string & {})
          | null;
        statusCode?: number | null;
      }
    | {
        assetName: string;
        contentType?:
          | "application/json"
          | "text/html"
          | "text/plain"
          | "text/xml"
          | (string & {})
          | null;
        statusCode?: number | null;
      }
    | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const ServeErrorRuleParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("serve_error"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([
        Schema.Union([ActionParametersContent, ActionParametersAsset]),
        Schema.Null,
      ]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<ServeErrorRuleParam>;

interface RulesetsSetCacheControlRule2 {
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "set_cache_control" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: {
    immutable?: {
      operation: "set" | "remove" | (string & {});
      cloudflareOnly?: boolean | null;
    } | null;
    maxAge?: {
      operation: "set" | "remove" | (string & {});
      cloudflareOnly?: boolean | null;
    } | null;
    mustRevalidate?: {
      operation: "set" | "remove" | (string & {});
      cloudflareOnly?: boolean | null;
    } | null;
    mustUnderstand?: {
      operation: "set" | "remove" | (string & {});
      cloudflareOnly?: boolean | null;
    } | null;
    noCache?: {
      operation: "set" | "remove" | (string & {});
      cloudflareOnly?: boolean | null;
    } | null;
    noStore?: {
      operation: "set" | "remove" | (string & {});
      cloudflareOnly?: boolean | null;
    } | null;
    noTransform?: {
      operation: "set" | "remove" | (string & {});
      cloudflareOnly?: boolean | null;
    } | null;
    private?: {
      operation: "set" | "remove" | (string & {});
      cloudflareOnly?: boolean | null;
    } | null;
    proxyRevalidate?: {
      operation: "set" | "remove" | (string & {});
      cloudflareOnly?: boolean | null;
    } | null;
    public?: {
      operation: "set" | "remove" | (string & {});
      cloudflareOnly?: boolean | null;
    } | null;
    sMaxage?: {
      operation: "set" | "remove" | (string & {});
      cloudflareOnly?: boolean | null;
    } | null;
    staleIfError?: {
      operation: "set" | "remove" | (string & {});
      cloudflareOnly?: boolean | null;
    } | null;
    staleWhileRevalidate?: {
      operation: "set" | "remove" | (string & {});
      cloudflareOnly?: boolean | null;
    } | null;
  } | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const RulesetsSetCacheControlRule2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("set_cache_control"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([ActionParameters9, Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
) as unknown as Schema.Codec<RulesetsSetCacheControlRule2>;

interface SetCacheSettingsRuleParam {
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "set_cache_settings" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: {
    additionalCacheablePorts?: number[] | null;
    browserTtl?: {
      mode:
        | "respect_origin"
        | "bypass_by_default"
        | "override_origin"
        | "bypass"
        | (string & {});
      default?: number | null;
    } | null;
    cache?: boolean | null;
    cacheKey?: {
      cacheByDeviceType?: boolean | null;
      cacheDeceptionArmor?: boolean | null;
      customKey?: {
        cookie?: {
          checkPresence?: string[] | null;
          include?: string[] | null;
        } | null;
        header?: {
          checkPresence?: string[] | null;
          contains?: Record<string, unknown> | null;
          excludeOrigin?: boolean | null;
          include?: string[] | null;
        } | null;
        host?: { resolved?: boolean | null } | null;
        queryString?: {
          exclude?: { all?: true | null; list?: string[] | null } | null;
          include?: { all?: true | null; list?: string[] | null } | null;
        } | null;
        user?: {
          deviceType?: boolean | null;
          geo?: boolean | null;
          lang?: boolean | null;
        } | null;
      } | null;
      ignoreQueryStringsOrder?: boolean | null;
    } | null;
    cacheReserve?: {
      eligible: boolean;
      minimumFileSize?: number | null;
    } | null;
    edgeTtl?: {
      mode:
        | "respect_origin"
        | "bypass_by_default"
        | "override_origin"
        | (string & {});
      default?: number | null;
      statusCodeTtl?:
        | {
            value: number;
            statusCode?: number | null;
            statusCodeRange?: {
              from?: number | null;
              to?: number | null;
            } | null;
          }[]
        | null;
    } | null;
    originCacheControl?: boolean | null;
    originErrorPagePassthru?: boolean | null;
    readTimeout?: number | null;
    respectStrongEtags?: boolean | null;
    serveStale?: { disableStaleWhileUpdating?: boolean | null } | null;
    sharedDictionary?: { matchPattern: string } | null;
    stripEtags?: boolean | null;
    stripLastModified?: boolean | null;
    stripSetCookie?: boolean | null;
    vary?: {
      default?: {
        action: "bypass" | "passthrough" | "normalize" | (string & {});
      } | null;
      headers?: Record<string, unknown> | null;
    } | null;
  } | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const SetCacheSettingsRuleParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("set_cache_settings"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([ActionParameters10, Schema.Null]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
) as unknown as Schema.Codec<SetCacheSettingsRuleParam>;

interface RulesetsSetCacheTagsRule2 {
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "set_cache_tags" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?:
    | { operation: "add" | "remove" | "set" | (string & {}); values: string[] }
    | {
        expression: string;
        operation: "add" | "remove" | "set" | (string & {});
      }
    | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const RulesetsSetCacheTagsRule2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      action: Schema.optional(
        Schema.Union([Schema.Literal("set_cache_tags"), Schema.Null]),
      ),
      actionParameters: Schema.optional(
        Schema.Union([
          Schema.Union([AddCacheTagsValues, AddCacheTagsExpression]),
          Schema.Null,
        ]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      exposedCredentialCheck: Schema.optional(
        Schema.Union([ExposedCredentialCheck, Schema.Null]),
      ),
      expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
      ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
      ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
    ),
) as unknown as Schema.Codec<RulesetsSetCacheTagsRule2>;

interface SetConfigRuleParam {
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "set_config" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: {
    automaticHttpsRewrites?: boolean | null;
    autominify?: {
      css?: boolean | null;
      html?: boolean | null;
      js?: boolean | null;
    } | null;
    bic?: boolean | null;
    contentConverter?: boolean | null;
    disableApps?: true | null;
    disablePayPerCrawl?: true | null;
    disableRum?: true | null;
    disableZaraz?: true | null;
    emailObfuscation?: boolean | null;
    fonts?: boolean | null;
    hotlinkProtection?: boolean | null;
    mirage?: boolean | null;
    opportunisticEncryption?: boolean | null;
    polish?: "off" | "lossless" | "lossy" | "webp" | (string & {}) | null;
    redirectsForAiTraining?: boolean | null;
    requestBodyBuffering?: "none" | "standard" | "full" | (string & {}) | null;
    responseBodyBuffering?: "none" | "standard" | (string & {}) | null;
    rocketLoader?: boolean | null;
    securityLevel?:
      | "off"
      | "essentially_off"
      | "low"
      | "medium"
      | "high"
      | "under_attack"
      | (string & {})
      | null;
    serverSideExcludes?: boolean | null;
    ssl?:
      | "off"
      | "flexible"
      | "full"
      | "strict"
      | "origin_pull"
      | (string & {})
      | null;
    sxg?: boolean | null;
  } | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const SetConfigRuleParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("set_config"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([ActionParameters11, Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<SetConfigRuleParam>;

interface SkipRuleParam {
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "skip" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: {
    phase?: "current" | null;
    phases?:
      | (
          | "ddos_l4"
          | "ddos_l7"
          | "http_config_settings"
          | "http_custom_errors"
          | "http_log_custom_fields"
          | "http_ratelimit"
          | "http_request_cache_settings"
          | "http_request_dynamic_redirect"
          | "http_request_firewall_custom"
          | "http_request_firewall_managed"
          | "http_request_late_transform"
          | "http_request_origin"
          | "http_request_redirect"
          | "http_request_sanitize"
          | "http_request_sbfm"
          | "http_request_transform"
          | "http_response_cache_settings"
          | "http_response_compression"
          | "http_response_firewall_managed"
          | "http_response_headers_transform"
          | "magic_transit"
          | "magic_transit_ids_managed"
          | "magic_transit_managed"
          | "magic_transit_ratelimit"
          | (string & {})
        )[]
      | null;
    products?:
      | (
          | "bic"
          | "hot"
          | "rateLimit"
          | "securityLevel"
          | "uaBlock"
          | "waf"
          | "zoneLockdown"
          | (string & {})
        )[]
      | null;
    rules?: Record<string, unknown> | null;
    ruleset?: "current" | null;
    rulesets?: string[] | null;
  } | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const SkipRuleParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("skip"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([ActionParameters12, Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<SkipRuleParam>;

interface FromValue3 {
  /** A URL to redirect the request to. */
  targetUrl: { expression?: string | null; value?: string | null };
  /** Whether to keep the query string of the original request. */
  preserveQueryString?: boolean | null;
  /** The status code to use for the redirect. */
  statusCode?: "301" | "302" | "303" | "307" | "308" | (string & {}) | null;
}
const FromValue3 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    targetUrl: TargetURL,
    preserveQueryString: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    statusCode: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["301", "302", "303", "307", "308"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      targetUrl: "target_url",
      preserveQueryString: "preserve_query_string",
      statusCode: "status_code",
    }),
  ),
) as unknown as Schema.Codec<FromValue3>;

interface ActionParameters15 {
  /** A redirect based on a bulk list lookup. */
  fromList?: { key: string; name: string } | null;
  /** A redirect based on the request properties. */
  fromValue?: {
    targetUrl: { expression?: string | null; value?: string | null };
    preserveQueryString?: boolean | null;
    statusCode?: "301" | "302" | "303" | "307" | "308" | (string & {}) | null;
  } | null;
}
const ActionParameters15 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    fromList: Schema.optional(Schema.Union([FromList, Schema.Null])),
    fromValue: Schema.optional(Schema.Union([FromValue3, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({ fromList: "from_list", fromValue: "from_value" }),
  ),
) as unknown as Schema.Codec<ActionParameters15>;

interface RedirectRule2 {
  /** The timestamp of when the rule was last modified. */
  lastUpdated: string;
  /** The version of the rule. */
  version: string;
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "redirect" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: {
    fromList?: { key: string; name: string } | null;
    fromValue?: {
      targetUrl: { expression?: string | null; value?: string | null };
      preserveQueryString?: boolean | null;
      statusCode?: "301" | "302" | "303" | "307" | "308" | (string & {}) | null;
    } | null;
  } | null;
  /** The categories of the rule. */
  categories?: string[] | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const RedirectRule2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    lastUpdated: Schema.String,
    version: Schema.String,
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("redirect"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([ActionParameters15, Schema.Null]),
    ),
    categories: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      lastUpdated: "last_updated",
      version: "version",
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      categories: "categories",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<RedirectRule2>;

interface ListPhasVersionsResponseResult {
  /** The unique ID of the ruleset. */
  id: string;
  /** The kind of the ruleset. */
  kind: "managed" | "custom" | "root" | "zone" | (string & {});
  /** The timestamp of when the ruleset was last modified. */
  lastUpdated: string;
  /** The human-readable name of the ruleset. */
  name: string;
  /** The phase of the ruleset. */
  phase:
    | "ddos_l4"
    | "ddos_l7"
    | "http_config_settings"
    | "http_custom_errors"
    | "http_log_custom_fields"
    | "http_ratelimit"
    | "http_request_cache_settings"
    | "http_request_dynamic_redirect"
    | "http_request_firewall_custom"
    | "http_request_firewall_managed"
    | "http_request_late_transform"
    | "http_request_origin"
    | "http_request_redirect"
    | "http_request_sanitize"
    | "http_request_sbfm"
    | "http_request_transform"
    | "http_response_cache_settings"
    | "http_response_compression"
    | "http_response_firewall_managed"
    | "http_response_headers_transform"
    | "magic_transit"
    | "magic_transit_ids_managed"
    | "magic_transit_managed"
    | "magic_transit_ratelimit"
    | (string & {});
  /** The version of the ruleset. */
  version: string;
  /** An informative description of the ruleset. */
  description?: string | null;
}
const ListPhasVersionsResponseResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      kind: Schema.Union([
        Schema.Literals(["managed", "custom", "root", "zone"]),
        Schema.String,
      ]),
      lastUpdated: Schema.String,
      name: Schema.String,
      phase: Schema.Union([
        Schema.Literals([
          "ddos_l4",
          "ddos_l7",
          "http_config_settings",
          "http_custom_errors",
          "http_log_custom_fields",
          "http_ratelimit",
          "http_request_cache_settings",
          "http_request_dynamic_redirect",
          "http_request_firewall_custom",
          "http_request_firewall_managed",
          "http_request_late_transform",
          "http_request_origin",
          "http_request_redirect",
          "http_request_sanitize",
          "http_request_sbfm",
          "http_request_transform",
          "http_response_cache_settings",
          "http_response_compression",
          "http_response_firewall_managed",
          "http_response_headers_transform",
          "magic_transit",
          "magic_transit_ids_managed",
          "magic_transit_managed",
          "magic_transit_ratelimit",
        ]),
        Schema.String,
      ]),
      version: Schema.String,
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        kind: "kind",
        lastUpdated: "last_updated",
        name: "name",
        phase: "phase",
        version: "version",
        description: "description",
      }),
    ),
  ) as unknown as Schema.Codec<ListPhasVersionsResponseResult>;

interface BeforePosition {
  /** The ID of another rule to place the rule before. An empty value causes the rule to be placed at the top. */
  before?: string | null;
  /** The ID of another rule to place the rule after. An empty value causes the rule to be placed at the bottom. */
  after?: string | null;
  /** An index at which to place the rule, where index 1 is the first rule. */
  index?: number | null;
}
const BeforePosition = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    before: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    after: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    index: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<BeforePosition>;

interface ListRulesetsResponseResultInfo {
  count?: number | null;
  cursor?: string | null;
  perPage?: number | null;
}
const ListRulesetsResponseResultInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      cursor: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      perPage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        count: "count",
        cursor: "cursor",
        perPage: "per_page",
      }),
    ),
  ) as unknown as Schema.Codec<ListRulesetsResponseResultInfo>;

interface RedirectRuleParam2 {
  /** The unique ID of the rule. */
  id?: string | null;
  /** The action to perform when the rule matches. */
  action?: "redirect" | null;
  /** The parameters configuring the rule's action. */
  actionParameters?: {
    fromList?: { key: string; name: string } | null;
    fromValue?: {
      targetUrl: { expression?: string | null; value?: string | null };
      preserveQueryString?: boolean | null;
      statusCode?: "301" | "302" | "303" | "307" | "308" | (string & {}) | null;
    } | null;
  } | null;
  /** An informative description of the rule. */
  description?: string | null;
  /** Whether the rule should be executed. */
  enabled?: boolean | null;
  /** Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  } | null;
  /** The expression defining which traffic will match the rule. */
  expression?: string | null;
  /** An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean } | null;
  /** An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string | null;
    mitigationTimeout?: number | null;
    requestsPerPeriod?: number | null;
    requestsToOrigin?: boolean | null;
    scorePerPeriod?: number | null;
    scoreResponseHeaderName?: string | null;
  } | null;
  /** The reference of the rule (the rule's ID by default). */
  ref?: string | null;
}
const RedirectRuleParam2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    action: Schema.optional(
      Schema.Union([Schema.Literal("redirect"), Schema.Null]),
    ),
    actionParameters: Schema.optional(
      Schema.Union([ActionParameters15, Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    exposedCredentialCheck: Schema.optional(
      Schema.Union([ExposedCredentialCheck, Schema.Null]),
    ),
    expression: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logging: Schema.optional(Schema.Union([Logging, Schema.Null])),
    ratelimit: Schema.optional(Schema.Union([Ratelimit, Schema.Null])),
    ref: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      action: "action",
      actionParameters: "action_parameters",
      description: "description",
      enabled: "enabled",
      exposedCredentialCheck: "exposed_credential_check",
      expression: "expression",
      logging: "logging",
      ratelimit: "ratelimit",
      ref: "ref",
    }),
  ),
) as unknown as Schema.Codec<RedirectRuleParam2>;

// =============================================================================
// Pha
// =============================================================================

const GetPhasBaseFields = {
  rulesetPhase: Schema.String.pipe(T.HttpPath("rulesetPhase")),
} as const;

interface GetPhasBaseRequest {
  rulesetPhase: string;
}

export interface GetPhasForAccountRequest extends GetPhasBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface GetPhasForZoneRequest extends GetPhasBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const GetPhasForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...GetPhasBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/rulesets/phases/{rulesetPhase}/entrypoint",
      }),
    ),
  ) as unknown as Schema.Codec<GetPhasForAccountRequest>;

export const GetPhasForZoneRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...GetPhasBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/rulesets/phases/{rulesetPhase}/entrypoint",
      }),
    ),
) as unknown as Schema.Codec<GetPhasForZoneRequest>;

export interface GetPhasResponse {
  /** The unique ID of the ruleset. */
  id: string;
  /** The kind of the ruleset. */
  kind: "managed" | "custom" | "root" | "zone" | (string & {});
  /** The timestamp of when the ruleset was last modified. */
  lastUpdated: string;
  /** The human-readable name of the ruleset. */
  name: string;
  /** The phase of the ruleset. */
  phase:
    | "ddos_l4"
    | "ddos_l7"
    | "http_config_settings"
    | "http_custom_errors"
    | "http_log_custom_fields"
    | "http_ratelimit"
    | "http_request_cache_settings"
    | "http_request_dynamic_redirect"
    | "http_request_firewall_custom"
    | "http_request_firewall_managed"
    | "http_request_late_transform"
    | "http_request_origin"
    | "http_request_redirect"
    | "http_request_sanitize"
    | "http_request_sbfm"
    | "http_request_transform"
    | "http_response_cache_settings"
    | "http_response_compression"
    | "http_response_firewall_managed"
    | "http_response_headers_transform"
    | "magic_transit"
    | "magic_transit_ids_managed"
    | "magic_transit_managed"
    | "magic_transit_ratelimit"
    | (string & {});
  /** The list of rules in the ruleset. */
  rules?:
    | (
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "block" | null;
            actionParameters?: {
              response?: {
                content: string;
                contentType: string;
                statusCode: number;
              } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "challenge" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "compress_response" | null;
            actionParameters?: {
              algorithms: {
                name?:
                  | "none"
                  | "auto"
                  | "default"
                  | "gzip"
                  | "brotli"
                  | "zstd"
                  | (string & {})
                  | null;
              }[];
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "ddos_dynamic" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "execute" | null;
            actionParameters?: {
              id: string;
              matchedData?: { publicKey: string } | null;
              overrides?: {
                action?: string | null;
                categories?:
                  | {
                      category: string;
                      action?: string | null;
                      enabled?: boolean | null;
                      sensitivityLevel?:
                        | "default"
                        | "medium"
                        | "low"
                        | "eoff"
                        | (string & {})
                        | null;
                    }[]
                  | null;
                enabled?: boolean | null;
                rules?:
                  | {
                      id: string;
                      action?: string | null;
                      enabled?: boolean | null;
                      scoreThreshold?: number | null;
                      sensitivityLevel?:
                        | "default"
                        | "medium"
                        | "low"
                        | "eoff"
                        | (string & {})
                        | null;
                    }[]
                  | null;
                sensitivityLevel?:
                  | "default"
                  | "medium"
                  | "low"
                  | "eoff"
                  | (string & {})
                  | null;
              } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "force_connection_close" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "js_challenge" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "log" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "log_custom_field" | null;
            actionParameters?: {
              cookieFields?: { name: string }[] | null;
              rawResponseFields?:
                | { name: string; preserveDuplicates?: boolean | null }[]
                | null;
              requestFields?: { name: string }[] | null;
              responseFields?:
                | { name: string; preserveDuplicates?: boolean | null }[]
                | null;
              transformedRequestFields?: { name: string }[] | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "managed_challenge" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "redirect" | null;
            actionParameters?: {
              fromList?: { key: string; name: string } | null;
              fromValue?: {
                targetUrl: {
                  expression?: string | null;
                  value?: string | null;
                };
                preserveQueryString?: boolean | null;
                statusCode?:
                  | "301"
                  | "302"
                  | "303"
                  | "307"
                  | "308"
                  | number
                  | null;
              } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "rewrite" | null;
            actionParameters?: {
              headers?: Record<string, unknown> | null;
              uri?:
                | {
                    path: { expression?: string | null; value?: string | null };
                    origin?: boolean | null;
                  }
                | {
                    query: {
                      expression?: string | null;
                      value?: string | null;
                    };
                    origin?: boolean | null;
                  }
                | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "route" | null;
            actionParameters?: {
              hostHeader?: string | null;
              origin?: { host?: string | null; port?: number | null } | null;
              sni?: { value: string } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "score" | null;
            actionParameters?: { increment: number } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "serve_error" | null;
            actionParameters?:
              | {
                  content: string;
                  contentType?:
                    | "application/json"
                    | "text/html"
                    | "text/plain"
                    | "text/xml"
                    | (string & {})
                    | null;
                  statusCode?: number | null;
                }
              | {
                  assetName: string;
                  contentType?:
                    | "application/json"
                    | "text/html"
                    | "text/plain"
                    | "text/xml"
                    | (string & {})
                    | null;
                  statusCode?: number | null;
                }
              | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "set_cache_control" | null;
            actionParameters?: {
              immutable?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              maxAge?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              mustRevalidate?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              mustUnderstand?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              noCache?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              noStore?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              noTransform?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              private?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              proxyRevalidate?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              public?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              sMaxage?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              staleIfError?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              staleWhileRevalidate?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "set_cache_settings" | null;
            actionParameters?: {
              additionalCacheablePorts?: number[] | null;
              browserTtl?: {
                mode:
                  | "respect_origin"
                  | "bypass_by_default"
                  | "override_origin"
                  | "bypass"
                  | (string & {});
                default?: number | null;
              } | null;
              cache?: boolean | null;
              cacheKey?: {
                cacheByDeviceType?: boolean | null;
                cacheDeceptionArmor?: boolean | null;
                customKey?: {
                  cookie?: {
                    checkPresence?: string[] | null;
                    include?: string[] | null;
                  } | null;
                  header?: {
                    checkPresence?: string[] | null;
                    contains?: Record<string, unknown> | null;
                    excludeOrigin?: boolean | null;
                    include?: string[] | null;
                  } | null;
                  host?: { resolved?: boolean | null } | null;
                  queryString?: {
                    exclude?: {
                      all?: true | null;
                      list?: string[] | null;
                    } | null;
                    include?: {
                      all?: true | null;
                      list?: string[] | null;
                    } | null;
                  } | null;
                  user?: {
                    deviceType?: boolean | null;
                    geo?: boolean | null;
                    lang?: boolean | null;
                  } | null;
                } | null;
                ignoreQueryStringsOrder?: boolean | null;
              } | null;
              cacheReserve?: {
                eligible: boolean;
                minimumFileSize?: number | null;
              } | null;
              edgeTtl?: {
                mode:
                  | "respect_origin"
                  | "bypass_by_default"
                  | "override_origin"
                  | (string & {});
                default?: number | null;
                statusCodeTtl?:
                  | {
                      value: number;
                      statusCode?: number | null;
                      statusCodeRange?: {
                        from?: number | null;
                        to?: number | null;
                      } | null;
                    }[]
                  | null;
              } | null;
              originCacheControl?: boolean | null;
              originErrorPagePassthru?: boolean | null;
              readTimeout?: number | null;
              respectStrongEtags?: boolean | null;
              serveStale?: {
                disableStaleWhileUpdating?: boolean | null;
              } | null;
              sharedDictionary?: { matchPattern: string } | null;
              stripEtags?: boolean | null;
              stripLastModified?: boolean | null;
              stripSetCookie?: boolean | null;
              vary?: {
                default?: {
                  action:
                    | "bypass"
                    | "passthrough"
                    | "normalize"
                    | (string & {});
                } | null;
                headers?: Record<string, unknown> | null;
              } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "set_cache_tags" | null;
            actionParameters?:
              | {
                  operation: "add" | "remove" | "set" | (string & {});
                  values: string[];
                }
              | {
                  expression: string;
                  operation: "add" | "remove" | "set" | (string & {});
                }
              | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "set_config" | null;
            actionParameters?: {
              automaticHttpsRewrites?: boolean | null;
              autominify?: {
                css?: boolean | null;
                html?: boolean | null;
                js?: boolean | null;
              } | null;
              bic?: boolean | null;
              contentConverter?: boolean | null;
              disableApps?: true | null;
              disablePayPerCrawl?: true | null;
              disableRum?: true | null;
              disableZaraz?: true | null;
              emailObfuscation?: boolean | null;
              fonts?: boolean | null;
              hotlinkProtection?: boolean | null;
              mirage?: boolean | null;
              opportunisticEncryption?: boolean | null;
              polish?:
                | "off"
                | "lossless"
                | "lossy"
                | "webp"
                | (string & {})
                | null;
              redirectsForAiTraining?: boolean | null;
              requestBodyBuffering?:
                | "none"
                | "standard"
                | "full"
                | (string & {})
                | null;
              responseBodyBuffering?:
                | "none"
                | "standard"
                | (string & {})
                | null;
              rocketLoader?: boolean | null;
              securityLevel?:
                | "off"
                | "essentially_off"
                | "low"
                | "medium"
                | "high"
                | "under_attack"
                | (string & {})
                | null;
              serverSideExcludes?: boolean | null;
              ssl?:
                | "off"
                | "flexible"
                | "full"
                | "strict"
                | "origin_pull"
                | (string & {})
                | null;
              sxg?: boolean | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "skip" | null;
            actionParameters?: {
              phase?: "current" | null;
              phases?:
                | (
                    | "ddos_l4"
                    | "ddos_l7"
                    | "http_config_settings"
                    | "http_custom_errors"
                    | "http_log_custom_fields"
                    | "http_ratelimit"
                    | "http_request_cache_settings"
                    | "http_request_dynamic_redirect"
                    | "http_request_firewall_custom"
                    | "http_request_firewall_managed"
                    | "http_request_late_transform"
                    | "http_request_origin"
                    | "http_request_redirect"
                    | "http_request_sanitize"
                    | "http_request_sbfm"
                    | "http_request_transform"
                    | "http_response_cache_settings"
                    | "http_response_compression"
                    | "http_response_firewall_managed"
                    | "http_response_headers_transform"
                    | "magic_transit"
                    | "magic_transit_ids_managed"
                    | "magic_transit_managed"
                    | "magic_transit_ratelimit"
                    | (string & {})
                  )[]
                | null;
              products?:
                | (
                    | "bic"
                    | "hot"
                    | "rateLimit"
                    | "securityLevel"
                    | "uaBlock"
                    | "waf"
                    | "zoneLockdown"
                    | (string & {})
                  )[]
                | null;
              rules?: Record<string, unknown> | null;
              ruleset?: "current" | null;
              rulesets?: string[] | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
      )[]
    | null;
  /** The version of the ruleset. */
  version: string;
  /** An informative description of the ruleset. */
  description?: string | null;
}

export const GetPhasResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    kind: Schema.Union([
      Schema.Literals(["managed", "custom", "root", "zone"]),
      Schema.String,
    ]),
    lastUpdated: Schema.String,
    name: Schema.String,
    phase: Schema.Union([
      Schema.Literals([
        "ddos_l4",
        "ddos_l7",
        "http_config_settings",
        "http_custom_errors",
        "http_log_custom_fields",
        "http_ratelimit",
        "http_request_cache_settings",
        "http_request_dynamic_redirect",
        "http_request_firewall_custom",
        "http_request_firewall_managed",
        "http_request_late_transform",
        "http_request_origin",
        "http_request_redirect",
        "http_request_sanitize",
        "http_request_sbfm",
        "http_request_transform",
        "http_response_cache_settings",
        "http_response_compression",
        "http_response_firewall_managed",
        "http_response_headers_transform",
        "magic_transit",
        "magic_transit_ids_managed",
        "magic_transit_managed",
        "magic_transit_ratelimit",
      ]),
      Schema.String,
    ]),
    rules: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Union([
            BlockRule,
            RulesetsChallengeRule,
            CompressResponseRule,
            DdoSDynamicRule,
            ExecuteRule,
            ForceConnectionCloseRule,
            RulesetsJSChallengeRule,
            LogRule,
            LogCustomFieldRule,
            ManagedChallengeRule,
            RedirectRule,
            RewriteRule,
            RouteRule,
            ScoreRule,
            ServeErrorRule,
            RulesetsSetCacheControlRule,
            SetCacheSettingsRule,
            RulesetsSetCacheTagsRule,
            SetConfigRule,
            SkipRule,
          ]),
        ),
        Schema.Null,
      ]),
    ),
    version: Schema.String,
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        kind: "kind",
        lastUpdated: "last_updated",
        name: "name",
        phase: "phase",
        rules: "rules",
        version: "version",
        description: "description",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetPhasResponse>;

export type GetPhasError = DefaultErrors | RulesetNotFound | Forbidden;

export const getPhasForAccount: API.OperationMethod<
  GetPhasForAccountRequest,
  GetPhasResponse,
  GetPhasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPhasForAccountRequest,
  output: GetPhasResponse,
  errors: [RulesetNotFound, Forbidden],
}));

export const getPhasForZone: API.OperationMethod<
  GetPhasForZoneRequest,
  GetPhasResponse,
  GetPhasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPhasForZoneRequest,
  output: GetPhasResponse,
  errors: [RulesetNotFound, Forbidden],
}));

const PutPhasBaseFields = {
  rulesetPhase: Schema.String.pipe(T.HttpPath("rulesetPhase")),
  description: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  rules: Schema.optional(
    Schema.Array(
      Schema.Union([
        BlockRuleParam,
        RulesetsChallengeRule2,
        CompressResponseRuleParam,
        DdoSDynamicRuleParam,
        ExecuteRuleParam,
        ForceConnectionCloseRuleParam,
        RulesetsJSChallengeRule2,
        LogRuleParam,
        LogCustomFieldRuleParam,
        ManagedChallengeRuleParam,
        RedirectRuleParam,
        RewriteRuleParam,
        RouteRuleParam,
        ScoreRuleParam,
        ServeErrorRuleParam,
        RulesetsSetCacheControlRule2,
        SetCacheSettingsRuleParam,
        RulesetsSetCacheTagsRule2,
        SetConfigRuleParam,
        SkipRuleParam,
      ]),
    ),
  ),
} as const;

interface PutPhasBaseRequest {
  rulesetPhase: string;
  /** Body param: An informative description of the ruleset. */
  description?: string;
  /** Body param: The human-readable name of the ruleset. */
  name?: string;
  /** Body param: The list of rules in the ruleset. */
  rules?: (
    | {
        id?: string;
        action?: "block";
        actionParameters?: {
          response?: {
            content: string;
            contentType: string;
            statusCode: number;
          };
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "challenge";
        actionParameters?: unknown;
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "compress_response";
        actionParameters?: {
          algorithms: {
            name?:
              | "none"
              | "auto"
              | "default"
              | "gzip"
              | "brotli"
              | "zstd"
              | (string & {});
          }[];
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "ddos_dynamic";
        actionParameters?: unknown;
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "execute";
        actionParameters?: {
          id: string;
          matchedData?: { publicKey: string };
          overrides?: {
            action?: string;
            categories?: {
              category: string;
              action?: string;
              enabled?: boolean;
              sensitivityLevel?:
                | "default"
                | "medium"
                | "low"
                | "eoff"
                | (string & {});
            }[];
            enabled?: boolean;
            rules?: {
              id: string;
              action?: string;
              enabled?: boolean;
              scoreThreshold?: number;
              sensitivityLevel?:
                | "default"
                | "medium"
                | "low"
                | "eoff"
                | (string & {});
            }[];
            sensitivityLevel?:
              | "default"
              | "medium"
              | "low"
              | "eoff"
              | (string & {});
          };
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "force_connection_close";
        actionParameters?: unknown;
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "js_challenge";
        actionParameters?: unknown;
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "log";
        actionParameters?: unknown;
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "log_custom_field";
        actionParameters?: {
          cookieFields?: { name: string }[];
          rawResponseFields?: { name: string; preserveDuplicates?: boolean }[];
          requestFields?: { name: string }[];
          responseFields?: { name: string; preserveDuplicates?: boolean }[];
          transformedRequestFields?: { name: string }[];
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "managed_challenge";
        actionParameters?: unknown;
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "redirect";
        actionParameters?: {
          fromList?: { key: string; name: string };
          fromValue?: {
            targetUrl: { expression?: string; value?: string };
            preserveQueryString?: boolean;
            statusCode?: number;
          };
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "rewrite";
        actionParameters?: {
          headers?: Record<string, unknown>;
          uri?:
            | { path: { expression?: string; value?: string } }
            | { query: { expression?: string; value?: string } };
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "route";
        actionParameters?: {
          hostHeader?: string;
          origin?: { host?: string; port?: number };
          sni?: { value: string };
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "score";
        actionParameters?: { increment: number };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "serve_error";
        actionParameters?:
          | {
              content: string;
              contentType?:
                | "application/json"
                | "text/html"
                | "text/plain"
                | "text/xml"
                | (string & {});
              statusCode?: number;
            }
          | {
              assetName: string;
              contentType?:
                | "application/json"
                | "text/html"
                | "text/plain"
                | "text/xml"
                | (string & {});
              statusCode?: number;
            };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "set_cache_control";
        actionParameters?: {
          immutable?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          maxAge?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          mustRevalidate?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          mustUnderstand?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          noCache?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          noStore?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          noTransform?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          private?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          proxyRevalidate?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          public?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          sMaxage?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          staleIfError?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          staleWhileRevalidate?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "set_cache_settings";
        actionParameters?: {
          additionalCacheablePorts?: number[];
          browserTtl?: {
            mode:
              | "respect_origin"
              | "bypass_by_default"
              | "override_origin"
              | "bypass"
              | (string & {});
            default?: number;
          };
          cache?: boolean;
          cacheKey?: {
            cacheByDeviceType?: boolean;
            cacheDeceptionArmor?: boolean;
            customKey?: {
              cookie?: { checkPresence?: string[]; include?: string[] };
              header?: {
                checkPresence?: string[];
                contains?: Record<string, unknown>;
                excludeOrigin?: boolean;
                include?: string[];
              };
              host?: { resolved?: boolean };
              queryString?: {
                exclude?: { all?: true; list?: string[] };
                include?: { all?: true; list?: string[] };
              };
              user?: { deviceType?: boolean; geo?: boolean; lang?: boolean };
            };
            ignoreQueryStringsOrder?: boolean;
          };
          cacheReserve?: { eligible: boolean; minimumFileSize?: number };
          edgeTtl?: {
            mode:
              | "respect_origin"
              | "bypass_by_default"
              | "override_origin"
              | (string & {});
            default?: number;
            statusCodeTtl?: {
              value: number;
              statusCode?: number;
              statusCodeRange?: { from?: number; to?: number };
            }[];
          };
          originCacheControl?: boolean;
          originErrorPagePassthru?: boolean;
          readTimeout?: number;
          respectStrongEtags?: boolean;
          serveStale?: { disableStaleWhileUpdating?: boolean };
          sharedDictionary?: { matchPattern: string };
          stripEtags?: boolean;
          stripLastModified?: boolean;
          stripSetCookie?: boolean;
          vary?: {
            default?: {
              action: "bypass" | "passthrough" | "normalize" | (string & {});
            };
            headers?: Record<string, unknown>;
          };
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "set_cache_tags";
        actionParameters?:
          | {
              operation: "add" | "remove" | "set" | (string & {});
              values: string[];
            }
          | {
              expression: string;
              operation: "add" | "remove" | "set" | (string & {});
            };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "set_config";
        actionParameters?: {
          automaticHttpsRewrites?: boolean;
          autominify?: { css?: boolean; html?: boolean; js?: boolean };
          bic?: boolean;
          contentConverter?: boolean;
          disableApps?: true;
          disablePayPerCrawl?: true;
          disableRum?: true;
          disableZaraz?: true;
          emailObfuscation?: boolean;
          fonts?: boolean;
          hotlinkProtection?: boolean;
          mirage?: boolean;
          opportunisticEncryption?: boolean;
          polish?: "off" | "lossless" | "lossy" | "webp" | (string & {});
          redirectsForAiTraining?: boolean;
          requestBodyBuffering?: "none" | "standard" | "full" | (string & {});
          responseBodyBuffering?: "none" | "standard" | (string & {});
          rocketLoader?: boolean;
          securityLevel?:
            | "off"
            | "essentially_off"
            | "low"
            | "medium"
            | "high"
            | "under_attack"
            | (string & {});
          serverSideExcludes?: boolean;
          ssl?:
            | "off"
            | "flexible"
            | "full"
            | "strict"
            | "origin_pull"
            | (string & {});
          sxg?: boolean;
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "skip";
        actionParameters?: {
          phase?: "current";
          phases?: (
            | "ddos_l4"
            | "ddos_l7"
            | "http_config_settings"
            | "http_custom_errors"
            | "http_log_custom_fields"
            | "http_ratelimit"
            | "http_request_cache_settings"
            | "http_request_dynamic_redirect"
            | "http_request_firewall_custom"
            | "http_request_firewall_managed"
            | "http_request_late_transform"
            | "http_request_origin"
            | "http_request_redirect"
            | "http_request_sanitize"
            | "http_request_sbfm"
            | "http_request_transform"
            | "http_response_cache_settings"
            | "http_response_compression"
            | "http_response_firewall_managed"
            | "http_response_headers_transform"
            | "magic_transit"
            | "magic_transit_ids_managed"
            | "magic_transit_managed"
            | "magic_transit_ratelimit"
            | (string & {})
          )[];
          products?: (
            | "bic"
            | "hot"
            | "rateLimit"
            | "securityLevel"
            | "uaBlock"
            | "waf"
            | "zoneLockdown"
            | (string & {})
          )[];
          rules?: Record<string, unknown>;
          ruleset?: "current";
          rulesets?: string[];
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
  )[];
}

export interface PutPhasForAccountRequest extends PutPhasBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface PutPhasForZoneRequest extends PutPhasBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const PutPhasForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...PutPhasBaseFields,
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/rulesets/phases/{rulesetPhase}/entrypoint",
      }),
    ),
  ) as unknown as Schema.Codec<PutPhasForAccountRequest>;

export const PutPhasForZoneRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...PutPhasBaseFields,
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/rulesets/phases/{rulesetPhase}/entrypoint",
      }),
    ),
) as unknown as Schema.Codec<PutPhasForZoneRequest>;

export interface PutPhasResponse {
  /** The unique ID of the ruleset. */
  id: string;
  /** The kind of the ruleset. */
  kind: "managed" | "custom" | "root" | "zone" | (string & {});
  /** The timestamp of when the ruleset was last modified. */
  lastUpdated: string;
  /** The human-readable name of the ruleset. */
  name: string;
  /** The phase of the ruleset. */
  phase:
    | "ddos_l4"
    | "ddos_l7"
    | "http_config_settings"
    | "http_custom_errors"
    | "http_log_custom_fields"
    | "http_ratelimit"
    | "http_request_cache_settings"
    | "http_request_dynamic_redirect"
    | "http_request_firewall_custom"
    | "http_request_firewall_managed"
    | "http_request_late_transform"
    | "http_request_origin"
    | "http_request_redirect"
    | "http_request_sanitize"
    | "http_request_sbfm"
    | "http_request_transform"
    | "http_response_cache_settings"
    | "http_response_compression"
    | "http_response_firewall_managed"
    | "http_response_headers_transform"
    | "magic_transit"
    | "magic_transit_ids_managed"
    | "magic_transit_managed"
    | "magic_transit_ratelimit"
    | (string & {});
  /** The list of rules in the ruleset. */
  rules?:
    | (
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "block" | null;
            actionParameters?: {
              response?: {
                content: string;
                contentType: string;
                statusCode: number;
              } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "challenge" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "compress_response" | null;
            actionParameters?: {
              algorithms: {
                name?:
                  | "none"
                  | "auto"
                  | "default"
                  | "gzip"
                  | "brotli"
                  | "zstd"
                  | (string & {})
                  | null;
              }[];
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "ddos_dynamic" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "execute" | null;
            actionParameters?: {
              id: string;
              matchedData?: { publicKey: string } | null;
              overrides?: {
                action?: string | null;
                categories?:
                  | {
                      category: string;
                      action?: string | null;
                      enabled?: boolean | null;
                      sensitivityLevel?:
                        | "default"
                        | "medium"
                        | "low"
                        | "eoff"
                        | (string & {})
                        | null;
                    }[]
                  | null;
                enabled?: boolean | null;
                rules?:
                  | {
                      id: string;
                      action?: string | null;
                      enabled?: boolean | null;
                      scoreThreshold?: number | null;
                      sensitivityLevel?:
                        | "default"
                        | "medium"
                        | "low"
                        | "eoff"
                        | (string & {})
                        | null;
                    }[]
                  | null;
                sensitivityLevel?:
                  | "default"
                  | "medium"
                  | "low"
                  | "eoff"
                  | (string & {})
                  | null;
              } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "force_connection_close" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "js_challenge" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "log" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "log_custom_field" | null;
            actionParameters?: {
              cookieFields?: { name: string }[] | null;
              rawResponseFields?:
                | { name: string; preserveDuplicates?: boolean | null }[]
                | null;
              requestFields?: { name: string }[] | null;
              responseFields?:
                | { name: string; preserveDuplicates?: boolean | null }[]
                | null;
              transformedRequestFields?: { name: string }[] | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "managed_challenge" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "redirect" | null;
            actionParameters?: {
              fromList?: { key: string; name: string } | null;
              fromValue?: {
                targetUrl: {
                  expression?: string | null;
                  value?: string | null;
                };
                preserveQueryString?: boolean | null;
                statusCode?:
                  | "301"
                  | "302"
                  | "303"
                  | "307"
                  | "308"
                  | number
                  | null;
              } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "rewrite" | null;
            actionParameters?: {
              headers?: Record<string, unknown> | null;
              uri?:
                | {
                    path: { expression?: string | null; value?: string | null };
                    origin?: boolean | null;
                  }
                | {
                    query: {
                      expression?: string | null;
                      value?: string | null;
                    };
                    origin?: boolean | null;
                  }
                | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "route" | null;
            actionParameters?: {
              hostHeader?: string | null;
              origin?: { host?: string | null; port?: number | null } | null;
              sni?: { value: string } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "score" | null;
            actionParameters?: { increment: number } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "serve_error" | null;
            actionParameters?:
              | {
                  content: string;
                  contentType?:
                    | "application/json"
                    | "text/html"
                    | "text/plain"
                    | "text/xml"
                    | (string & {})
                    | null;
                  statusCode?: number | null;
                }
              | {
                  assetName: string;
                  contentType?:
                    | "application/json"
                    | "text/html"
                    | "text/plain"
                    | "text/xml"
                    | (string & {})
                    | null;
                  statusCode?: number | null;
                }
              | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "set_cache_control" | null;
            actionParameters?: {
              immutable?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              maxAge?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              mustRevalidate?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              mustUnderstand?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              noCache?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              noStore?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              noTransform?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              private?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              proxyRevalidate?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              public?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              sMaxage?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              staleIfError?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              staleWhileRevalidate?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "set_cache_settings" | null;
            actionParameters?: {
              additionalCacheablePorts?: number[] | null;
              browserTtl?: {
                mode:
                  | "respect_origin"
                  | "bypass_by_default"
                  | "override_origin"
                  | "bypass"
                  | (string & {});
                default?: number | null;
              } | null;
              cache?: boolean | null;
              cacheKey?: {
                cacheByDeviceType?: boolean | null;
                cacheDeceptionArmor?: boolean | null;
                customKey?: {
                  cookie?: {
                    checkPresence?: string[] | null;
                    include?: string[] | null;
                  } | null;
                  header?: {
                    checkPresence?: string[] | null;
                    contains?: Record<string, unknown> | null;
                    excludeOrigin?: boolean | null;
                    include?: string[] | null;
                  } | null;
                  host?: { resolved?: boolean | null } | null;
                  queryString?: {
                    exclude?: {
                      all?: true | null;
                      list?: string[] | null;
                    } | null;
                    include?: {
                      all?: true | null;
                      list?: string[] | null;
                    } | null;
                  } | null;
                  user?: {
                    deviceType?: boolean | null;
                    geo?: boolean | null;
                    lang?: boolean | null;
                  } | null;
                } | null;
                ignoreQueryStringsOrder?: boolean | null;
              } | null;
              cacheReserve?: {
                eligible: boolean;
                minimumFileSize?: number | null;
              } | null;
              edgeTtl?: {
                mode:
                  | "respect_origin"
                  | "bypass_by_default"
                  | "override_origin"
                  | (string & {});
                default?: number | null;
                statusCodeTtl?:
                  | {
                      value: number;
                      statusCode?: number | null;
                      statusCodeRange?: {
                        from?: number | null;
                        to?: number | null;
                      } | null;
                    }[]
                  | null;
              } | null;
              originCacheControl?: boolean | null;
              originErrorPagePassthru?: boolean | null;
              readTimeout?: number | null;
              respectStrongEtags?: boolean | null;
              serveStale?: {
                disableStaleWhileUpdating?: boolean | null;
              } | null;
              sharedDictionary?: { matchPattern: string } | null;
              stripEtags?: boolean | null;
              stripLastModified?: boolean | null;
              stripSetCookie?: boolean | null;
              vary?: {
                default?: {
                  action:
                    | "bypass"
                    | "passthrough"
                    | "normalize"
                    | (string & {});
                } | null;
                headers?: Record<string, unknown> | null;
              } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "set_cache_tags" | null;
            actionParameters?:
              | {
                  operation: "add" | "remove" | "set" | (string & {});
                  values: string[];
                }
              | {
                  expression: string;
                  operation: "add" | "remove" | "set" | (string & {});
                }
              | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "set_config" | null;
            actionParameters?: {
              automaticHttpsRewrites?: boolean | null;
              autominify?: {
                css?: boolean | null;
                html?: boolean | null;
                js?: boolean | null;
              } | null;
              bic?: boolean | null;
              contentConverter?: boolean | null;
              disableApps?: true | null;
              disablePayPerCrawl?: true | null;
              disableRum?: true | null;
              disableZaraz?: true | null;
              emailObfuscation?: boolean | null;
              fonts?: boolean | null;
              hotlinkProtection?: boolean | null;
              mirage?: boolean | null;
              opportunisticEncryption?: boolean | null;
              polish?:
                | "off"
                | "lossless"
                | "lossy"
                | "webp"
                | (string & {})
                | null;
              redirectsForAiTraining?: boolean | null;
              requestBodyBuffering?:
                | "none"
                | "standard"
                | "full"
                | (string & {})
                | null;
              responseBodyBuffering?:
                | "none"
                | "standard"
                | (string & {})
                | null;
              rocketLoader?: boolean | null;
              securityLevel?:
                | "off"
                | "essentially_off"
                | "low"
                | "medium"
                | "high"
                | "under_attack"
                | (string & {})
                | null;
              serverSideExcludes?: boolean | null;
              ssl?:
                | "off"
                | "flexible"
                | "full"
                | "strict"
                | "origin_pull"
                | (string & {})
                | null;
              sxg?: boolean | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "skip" | null;
            actionParameters?: {
              phase?: "current" | null;
              phases?:
                | (
                    | "ddos_l4"
                    | "ddos_l7"
                    | "http_config_settings"
                    | "http_custom_errors"
                    | "http_log_custom_fields"
                    | "http_ratelimit"
                    | "http_request_cache_settings"
                    | "http_request_dynamic_redirect"
                    | "http_request_firewall_custom"
                    | "http_request_firewall_managed"
                    | "http_request_late_transform"
                    | "http_request_origin"
                    | "http_request_redirect"
                    | "http_request_sanitize"
                    | "http_request_sbfm"
                    | "http_request_transform"
                    | "http_response_cache_settings"
                    | "http_response_compression"
                    | "http_response_firewall_managed"
                    | "http_response_headers_transform"
                    | "magic_transit"
                    | "magic_transit_ids_managed"
                    | "magic_transit_managed"
                    | "magic_transit_ratelimit"
                    | (string & {})
                  )[]
                | null;
              products?:
                | (
                    | "bic"
                    | "hot"
                    | "rateLimit"
                    | "securityLevel"
                    | "uaBlock"
                    | "waf"
                    | "zoneLockdown"
                    | (string & {})
                  )[]
                | null;
              rules?: Record<string, unknown> | null;
              ruleset?: "current" | null;
              rulesets?: string[] | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
      )[]
    | null;
  /** The version of the ruleset. */
  version: string;
  /** An informative description of the ruleset. */
  description?: string | null;
}

export const PutPhasResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    kind: Schema.Union([
      Schema.Literals(["managed", "custom", "root", "zone"]),
      Schema.String,
    ]),
    lastUpdated: Schema.String,
    name: Schema.String,
    phase: Schema.Union([
      Schema.Literals([
        "ddos_l4",
        "ddos_l7",
        "http_config_settings",
        "http_custom_errors",
        "http_log_custom_fields",
        "http_ratelimit",
        "http_request_cache_settings",
        "http_request_dynamic_redirect",
        "http_request_firewall_custom",
        "http_request_firewall_managed",
        "http_request_late_transform",
        "http_request_origin",
        "http_request_redirect",
        "http_request_sanitize",
        "http_request_sbfm",
        "http_request_transform",
        "http_response_cache_settings",
        "http_response_compression",
        "http_response_firewall_managed",
        "http_response_headers_transform",
        "magic_transit",
        "magic_transit_ids_managed",
        "magic_transit_managed",
        "magic_transit_ratelimit",
      ]),
      Schema.String,
    ]),
    rules: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Union([
            BlockRule,
            RulesetsChallengeRule,
            CompressResponseRule,
            DdoSDynamicRule,
            ExecuteRule,
            ForceConnectionCloseRule,
            RulesetsJSChallengeRule,
            LogRule,
            LogCustomFieldRule,
            ManagedChallengeRule,
            RedirectRule,
            RewriteRule,
            RouteRule,
            ScoreRule,
            ServeErrorRule,
            RulesetsSetCacheControlRule,
            SetCacheSettingsRule,
            RulesetsSetCacheTagsRule,
            SetConfigRule,
            SkipRule,
          ]),
        ),
        Schema.Null,
      ]),
    ),
    version: Schema.String,
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        kind: "kind",
        lastUpdated: "last_updated",
        name: "name",
        phase: "phase",
        rules: "rules",
        version: "version",
        description: "description",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PutPhasResponse>;

export type PutPhasError =
  | DefaultErrors
  | RulesetNotFound
  | PhaseNotEntitled
  | Forbidden;

export const putPhasForAccount: API.OperationMethod<
  PutPhasForAccountRequest,
  PutPhasResponse,
  PutPhasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutPhasForAccountRequest,
  output: PutPhasResponse,
  errors: [RulesetNotFound, PhaseNotEntitled, Forbidden],
}));

export const putPhasForZone: API.OperationMethod<
  PutPhasForZoneRequest,
  PutPhasResponse,
  PutPhasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutPhasForZoneRequest,
  output: PutPhasResponse,
  errors: [RulesetNotFound, PhaseNotEntitled, Forbidden],
}));

// =============================================================================
// PhasVersion
// =============================================================================

const GetPhasVersionBaseFields = {
  rulesetVersion: Schema.String.pipe(T.HttpPath("rulesetVersion")),
  rulesetPhase: Schema.String.pipe(T.HttpPath("rulesetPhase")),
} as const;

interface GetPhasVersionBaseRequest {
  rulesetVersion: string;
  rulesetPhase: string;
}

export interface GetPhasVersionForAccountRequest extends GetPhasVersionBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface GetPhasVersionForZoneRequest extends GetPhasVersionBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const GetPhasVersionForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...GetPhasVersionBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/rulesets/phases/{rulesetPhase}/entrypoint/versions/{rulesetVersion}",
      }),
    ),
  ) as unknown as Schema.Codec<GetPhasVersionForAccountRequest>;

export const GetPhasVersionForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...GetPhasVersionBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/rulesets/phases/{rulesetPhase}/entrypoint/versions/{rulesetVersion}",
      }),
    ),
  ) as unknown as Schema.Codec<GetPhasVersionForZoneRequest>;

export interface GetPhasVersionResponse {
  /** The unique ID of the ruleset. */
  id: string;
  /** The kind of the ruleset. */
  kind: "managed" | "custom" | "root" | "zone" | (string & {});
  /** The timestamp of when the ruleset was last modified. */
  lastUpdated: string;
  /** The human-readable name of the ruleset. */
  name: string;
  /** The phase of the ruleset. */
  phase:
    | "ddos_l4"
    | "ddos_l7"
    | "http_config_settings"
    | "http_custom_errors"
    | "http_log_custom_fields"
    | "http_ratelimit"
    | "http_request_cache_settings"
    | "http_request_dynamic_redirect"
    | "http_request_firewall_custom"
    | "http_request_firewall_managed"
    | "http_request_late_transform"
    | "http_request_origin"
    | "http_request_redirect"
    | "http_request_sanitize"
    | "http_request_sbfm"
    | "http_request_transform"
    | "http_response_cache_settings"
    | "http_response_compression"
    | "http_response_firewall_managed"
    | "http_response_headers_transform"
    | "magic_transit"
    | "magic_transit_ids_managed"
    | "magic_transit_managed"
    | "magic_transit_ratelimit"
    | (string & {});
  /** The list of rules in the ruleset. */
  rules: (
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "block" | null;
        actionParameters?: {
          response?: {
            content: string;
            contentType: string;
            statusCode: number;
          } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "challenge" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "compress_response" | null;
        actionParameters?: {
          algorithms: {
            name?:
              | "none"
              | "auto"
              | "default"
              | "gzip"
              | "brotli"
              | "zstd"
              | (string & {})
              | null;
          }[];
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "ddos_dynamic" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "execute" | null;
        actionParameters?: {
          id: string;
          matchedData?: { publicKey: string } | null;
          overrides?: {
            action?: string | null;
            categories?:
              | {
                  category: string;
                  action?: string | null;
                  enabled?: boolean | null;
                  sensitivityLevel?:
                    | "default"
                    | "medium"
                    | "low"
                    | "eoff"
                    | (string & {})
                    | null;
                }[]
              | null;
            enabled?: boolean | null;
            rules?:
              | {
                  id: string;
                  action?: string | null;
                  enabled?: boolean | null;
                  scoreThreshold?: number | null;
                  sensitivityLevel?:
                    | "default"
                    | "medium"
                    | "low"
                    | "eoff"
                    | (string & {})
                    | null;
                }[]
              | null;
            sensitivityLevel?:
              | "default"
              | "medium"
              | "low"
              | "eoff"
              | (string & {})
              | null;
          } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "force_connection_close" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "js_challenge" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "log" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "log_custom_field" | null;
        actionParameters?: {
          cookieFields?: { name: string }[] | null;
          rawResponseFields?:
            | { name: string; preserveDuplicates?: boolean | null }[]
            | null;
          requestFields?: { name: string }[] | null;
          responseFields?:
            | { name: string; preserveDuplicates?: boolean | null }[]
            | null;
          transformedRequestFields?: { name: string }[] | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "managed_challenge" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "redirect" | null;
        actionParameters?: {
          fromList?: { key: string; name: string } | null;
          fromValue?: {
            targetUrl: { expression?: string | null; value?: string | null };
            preserveQueryString?: boolean | null;
            statusCode?:
              | "301"
              | "302"
              | "303"
              | "307"
              | "308"
              | (string & {})
              | null;
          } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "rewrite" | null;
        actionParameters?: {
          headers?: Record<string, unknown> | null;
          uri?:
            | {
                path: { expression?: string | null; value?: string | null };
                origin?: boolean | null;
              }
            | {
                query: { expression?: string | null; value?: string | null };
                origin?: boolean | null;
              }
            | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "route" | null;
        actionParameters?: {
          hostHeader?: string | null;
          origin?: { host?: string | null; port?: number | null } | null;
          sni?: { value: string } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "score" | null;
        actionParameters?: { increment: number } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "serve_error" | null;
        actionParameters?:
          | {
              content: string;
              contentType?:
                | "application/json"
                | "text/html"
                | "text/plain"
                | "text/xml"
                | (string & {})
                | null;
              statusCode?: number | null;
            }
          | {
              assetName: string;
              contentType?:
                | "application/json"
                | "text/html"
                | "text/plain"
                | "text/xml"
                | (string & {})
                | null;
              statusCode?: number | null;
            }
          | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "set_cache_control" | null;
        actionParameters?: {
          immutable?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          maxAge?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          mustRevalidate?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          mustUnderstand?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          noCache?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          noStore?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          noTransform?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          private?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          proxyRevalidate?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          public?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          sMaxage?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          staleIfError?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          staleWhileRevalidate?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "set_cache_settings" | null;
        actionParameters?: {
          additionalCacheablePorts?: number[] | null;
          browserTtl?: {
            mode:
              | "respect_origin"
              | "bypass_by_default"
              | "override_origin"
              | "bypass"
              | (string & {});
            default?: number | null;
          } | null;
          cache?: boolean | null;
          cacheKey?: {
            cacheByDeviceType?: boolean | null;
            cacheDeceptionArmor?: boolean | null;
            customKey?: {
              cookie?: {
                checkPresence?: string[] | null;
                include?: string[] | null;
              } | null;
              header?: {
                checkPresence?: string[] | null;
                contains?: Record<string, unknown> | null;
                excludeOrigin?: boolean | null;
                include?: string[] | null;
              } | null;
              host?: { resolved?: boolean | null } | null;
              queryString?: {
                exclude?: { all?: true | null; list?: string[] | null } | null;
                include?: { all?: true | null; list?: string[] | null } | null;
              } | null;
              user?: {
                deviceType?: boolean | null;
                geo?: boolean | null;
                lang?: boolean | null;
              } | null;
            } | null;
            ignoreQueryStringsOrder?: boolean | null;
          } | null;
          cacheReserve?: {
            eligible: boolean;
            minimumFileSize?: number | null;
          } | null;
          edgeTtl?: {
            mode:
              | "respect_origin"
              | "bypass_by_default"
              | "override_origin"
              | (string & {});
            default?: number | null;
            statusCodeTtl?:
              | {
                  value: number;
                  statusCode?: number | null;
                  statusCodeRange?: {
                    from?: number | null;
                    to?: number | null;
                  } | null;
                }[]
              | null;
          } | null;
          originCacheControl?: boolean | null;
          originErrorPagePassthru?: boolean | null;
          readTimeout?: number | null;
          respectStrongEtags?: boolean | null;
          serveStale?: { disableStaleWhileUpdating?: boolean | null } | null;
          sharedDictionary?: { matchPattern: string } | null;
          stripEtags?: boolean | null;
          stripLastModified?: boolean | null;
          stripSetCookie?: boolean | null;
          vary?: {
            default?: {
              action: "bypass" | "passthrough" | "normalize" | (string & {});
            } | null;
            headers?: Record<string, unknown> | null;
          } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "set_cache_tags" | null;
        actionParameters?:
          | {
              operation: "add" | "remove" | "set" | (string & {});
              values: string[];
            }
          | {
              expression: string;
              operation: "add" | "remove" | "set" | (string & {});
            }
          | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "set_config" | null;
        actionParameters?: {
          automaticHttpsRewrites?: boolean | null;
          autominify?: {
            css?: boolean | null;
            html?: boolean | null;
            js?: boolean | null;
          } | null;
          bic?: boolean | null;
          contentConverter?: boolean | null;
          disableApps?: true | null;
          disablePayPerCrawl?: true | null;
          disableRum?: true | null;
          disableZaraz?: true | null;
          emailObfuscation?: boolean | null;
          fonts?: boolean | null;
          hotlinkProtection?: boolean | null;
          mirage?: boolean | null;
          opportunisticEncryption?: boolean | null;
          polish?: "off" | "lossless" | "lossy" | "webp" | (string & {}) | null;
          redirectsForAiTraining?: boolean | null;
          requestBodyBuffering?:
            | "none"
            | "standard"
            | "full"
            | (string & {})
            | null;
          responseBodyBuffering?: "none" | "standard" | (string & {}) | null;
          rocketLoader?: boolean | null;
          securityLevel?:
            | "off"
            | "essentially_off"
            | "low"
            | "medium"
            | "high"
            | "under_attack"
            | (string & {})
            | null;
          serverSideExcludes?: boolean | null;
          ssl?:
            | "off"
            | "flexible"
            | "full"
            | "strict"
            | "origin_pull"
            | (string & {})
            | null;
          sxg?: boolean | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "skip" | null;
        actionParameters?: {
          phase?: "current" | null;
          phases?:
            | (
                | "ddos_l4"
                | "ddos_l7"
                | "http_config_settings"
                | "http_custom_errors"
                | "http_log_custom_fields"
                | "http_ratelimit"
                | "http_request_cache_settings"
                | "http_request_dynamic_redirect"
                | "http_request_firewall_custom"
                | "http_request_firewall_managed"
                | "http_request_late_transform"
                | "http_request_origin"
                | "http_request_redirect"
                | "http_request_sanitize"
                | "http_request_sbfm"
                | "http_request_transform"
                | "http_response_cache_settings"
                | "http_response_compression"
                | "http_response_firewall_managed"
                | "http_response_headers_transform"
                | "magic_transit"
                | "magic_transit_ids_managed"
                | "magic_transit_managed"
                | "magic_transit_ratelimit"
                | (string & {})
              )[]
            | null;
          products?:
            | (
                | "bic"
                | "hot"
                | "rateLimit"
                | "securityLevel"
                | "uaBlock"
                | "waf"
                | "zoneLockdown"
                | (string & {})
              )[]
            | null;
          rules?: Record<string, unknown> | null;
          ruleset?: "current" | null;
          rulesets?: string[] | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
  )[];
  /** The version of the ruleset. */
  version: string;
  /** An informative description of the ruleset. */
  description?: string | null;
}

export const GetPhasVersionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      kind: Schema.Union([
        Schema.Literals(["managed", "custom", "root", "zone"]),
        Schema.String,
      ]),
      lastUpdated: Schema.String,
      name: Schema.String,
      phase: Schema.Union([
        Schema.Literals([
          "ddos_l4",
          "ddos_l7",
          "http_config_settings",
          "http_custom_errors",
          "http_log_custom_fields",
          "http_ratelimit",
          "http_request_cache_settings",
          "http_request_dynamic_redirect",
          "http_request_firewall_custom",
          "http_request_firewall_managed",
          "http_request_late_transform",
          "http_request_origin",
          "http_request_redirect",
          "http_request_sanitize",
          "http_request_sbfm",
          "http_request_transform",
          "http_response_cache_settings",
          "http_response_compression",
          "http_response_firewall_managed",
          "http_response_headers_transform",
          "magic_transit",
          "magic_transit_ids_managed",
          "magic_transit_managed",
          "magic_transit_ratelimit",
        ]),
        Schema.String,
      ]),
      rules: Schema.Array(
        Schema.Union([
          BlockRule,
          RulesetsChallengeRule,
          CompressResponseRule,
          DdoSDynamicRule,
          ExecuteRule,
          ForceConnectionCloseRule,
          RulesetsJSChallengeRule,
          LogRule,
          LogCustomFieldRule,
          ManagedChallengeRule,
          RedirectRule2,
          RewriteRule,
          RouteRule,
          ScoreRule,
          ServeErrorRule,
          RulesetsSetCacheControlRule,
          SetCacheSettingsRule,
          RulesetsSetCacheTagsRule,
          SetConfigRule,
          SkipRule,
        ]),
      ),
      version: Schema.String,
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          kind: "kind",
          lastUpdated: "last_updated",
          name: "name",
          phase: "phase",
          rules: "rules",
          version: "version",
          description: "description",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetPhasVersionResponse>;

export type GetPhasVersionError = DefaultErrors;

export const getPhasVersionForAccount: API.OperationMethod<
  GetPhasVersionForAccountRequest,
  GetPhasVersionResponse,
  GetPhasVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPhasVersionForAccountRequest,
  output: GetPhasVersionResponse,
  errors: [],
}));

export const getPhasVersionForZone: API.OperationMethod<
  GetPhasVersionForZoneRequest,
  GetPhasVersionResponse,
  GetPhasVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPhasVersionForZoneRequest,
  output: GetPhasVersionResponse,
  errors: [],
}));

const ListPhasVersionsBaseFields = {
  rulesetPhase: Schema.String.pipe(T.HttpPath("rulesetPhase")),
} as const;

interface ListPhasVersionsBaseRequest {
  rulesetPhase: string;
}

export interface ListPhasVersionsForAccountRequest extends ListPhasVersionsBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface ListPhasVersionsForZoneRequest extends ListPhasVersionsBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const ListPhasVersionsForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...ListPhasVersionsBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/rulesets/phases/{rulesetPhase}/entrypoint/versions",
      }),
    ),
  ) as unknown as Schema.Codec<ListPhasVersionsForAccountRequest>;

export const ListPhasVersionsForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...ListPhasVersionsBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/rulesets/phases/{rulesetPhase}/entrypoint/versions",
      }),
    ),
  ) as unknown as Schema.Codec<ListPhasVersionsForZoneRequest>;

export interface ListPhasVersionsResponse {
  result: {
    id: string;
    kind: "managed" | "custom" | "root" | "zone" | (string & {});
    lastUpdated: string;
    name: string;
    phase:
      | "ddos_l4"
      | "ddos_l7"
      | "http_config_settings"
      | "http_custom_errors"
      | "http_log_custom_fields"
      | "http_ratelimit"
      | "http_request_cache_settings"
      | "http_request_dynamic_redirect"
      | "http_request_firewall_custom"
      | "http_request_firewall_managed"
      | "http_request_late_transform"
      | "http_request_origin"
      | "http_request_redirect"
      | "http_request_sanitize"
      | "http_request_sbfm"
      | "http_request_transform"
      | "http_response_cache_settings"
      | "http_response_compression"
      | "http_response_firewall_managed"
      | "http_response_headers_transform"
      | "magic_transit"
      | "magic_transit_ids_managed"
      | "magic_transit_managed"
      | "magic_transit_ratelimit"
      | (string & {});
    version: string;
    description?: string | null;
  }[];
}

export const ListPhasVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListPhasVersionsResponseResult),
    }),
  ) as unknown as Schema.Codec<ListPhasVersionsResponse>;

export type ListPhasVersionsError = DefaultErrors;

export const listPhasVersionsForAccount: API.PaginatedOperationMethod<
  ListPhasVersionsForAccountRequest,
  ListPhasVersionsResponse,
  ListPhasVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPhasVersionsForAccountRequest,
  output: ListPhasVersionsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export const listPhasVersionsForZone: API.PaginatedOperationMethod<
  ListPhasVersionsForZoneRequest,
  ListPhasVersionsResponse,
  ListPhasVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPhasVersionsForZoneRequest,
  output: ListPhasVersionsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// Rule
// =============================================================================

const CreateRuleBaseFields = {
  rulesetId: Schema.String.pipe(T.HttpPath("rulesetId")),
  id: Schema.optional(Schema.String),
  action: Schema.optional(
    Schema.Union([
      Schema.Literals([
        "block",
        "challenge",
        "compress_response",
        "ddos_dynamic",
        "execute",
        "force_connection_close",
        "js_challenge",
        "log",
        "log_custom_field",
        "managed_challenge",
        "redirect",
        "rewrite",
        "route",
        "score",
        "serve_error",
        "set_cache_control",
        "set_cache_settings",
        "set_cache_tags",
        "set_config",
        "skip",
      ]),
      Schema.String,
    ]),
  ),
  actionParameters: Schema.optional(
    Schema.Union([
      AddCacheTagsValues,
      AddCacheTagsExpression,
      ActionParameters2,
      ActionParameters3,
      ActionParameters8,
      ActionParametersContent,
      ActionParametersAsset,
      ActionParameters,
      ActionParameters4,
      ActionParameters15,
      ActionParameters14,
      ActionParameters7,
      ActionParameters9,
      ActionParameters10,
      ActionParameters11,
      ActionParameters12,
    ]),
  ),
  description: Schema.optional(Schema.String),
  enabled: Schema.optional(Schema.Boolean),
  exposedCredentialCheck: Schema.optional(ExposedCredentialCheck),
  expression: Schema.optional(Schema.String),
  logging: Schema.optional(Logging),
  position: Schema.optional(BeforePosition),
  ratelimit: Schema.optional(Ratelimit),
  ref: Schema.optional(Schema.String),
} as const;

interface CreateRuleBaseRequest {
  rulesetId: string;
  /** Body param: The unique ID of the rule. */
  id?: string;
  /** Body param: The action to perform when the rule matches. */
  action?:
    | "block"
    | "challenge"
    | "compress_response"
    | "ddos_dynamic"
    | "execute"
    | "force_connection_close"
    | "js_challenge"
    | "log"
    | "log_custom_field"
    | "managed_challenge"
    | "redirect"
    | "rewrite"
    | "route"
    | "score"
    | "serve_error"
    | "set_cache_control"
    | "set_cache_settings"
    | "set_cache_tags"
    | "set_config"
    | "skip"
    | (string & {});
  /** Body param: The parameters configuring the rule's action. */
  actionParameters?:
    | {
        response?: { content: string; contentType: string; statusCode: number };
      }
    | {
        algorithms: {
          name?:
            | "none"
            | "auto"
            | "default"
            | "gzip"
            | "brotli"
            | "zstd"
            | (string & {});
        }[];
      }
    | {
        id: string;
        matchedData?: { publicKey: string };
        overrides?: {
          action?: string;
          categories?: {
            category: string;
            action?: string;
            enabled?: boolean;
            sensitivityLevel?:
              | "default"
              | "medium"
              | "low"
              | "eoff"
              | (string & {});
          }[];
          enabled?: boolean;
          rules?: {
            id: string;
            action?: string;
            enabled?: boolean;
            scoreThreshold?: number;
            sensitivityLevel?:
              | "default"
              | "medium"
              | "low"
              | "eoff"
              | (string & {});
          }[];
          sensitivityLevel?:
            | "default"
            | "medium"
            | "low"
            | "eoff"
            | (string & {});
        };
      }
    | {
        cookieFields?: { name: string }[];
        rawResponseFields?: { name: string; preserveDuplicates?: boolean }[];
        requestFields?: { name: string }[];
        responseFields?: { name: string; preserveDuplicates?: boolean }[];
        transformedRequestFields?: { name: string }[];
      }
    | {
        fromList?: { key: string; name: string };
        fromValue?: {
          targetUrl: { expression?: string; value?: string };
          preserveQueryString?: boolean;
          statusCode?: "301" | "302" | "303" | "307" | "308" | (string & {});
        };
      }
    | {
        headers?: Record<string, unknown>;
        uri?:
          | { path: { expression?: string; value?: string } }
          | { query: { expression?: string; value?: string } };
      }
    | {
        hostHeader?: string;
        origin?: { host?: string; port?: number };
        sni?: { value: string };
      }
    | { increment: number }
    | {
        content: string;
        contentType?:
          | "application/json"
          | "text/html"
          | "text/plain"
          | "text/xml"
          | (string & {});
        statusCode?: number;
      }
    | {
        assetName: string;
        contentType?:
          | "application/json"
          | "text/html"
          | "text/plain"
          | "text/xml"
          | (string & {});
        statusCode?: number;
      }
    | {
        immutable?: {
          operation: "set" | "remove" | (string & {});
          cloudflareOnly?: boolean;
        };
        maxAge?: {
          operation: "set" | "remove" | (string & {});
          cloudflareOnly?: boolean;
        };
        mustRevalidate?: {
          operation: "set" | "remove" | (string & {});
          cloudflareOnly?: boolean;
        };
        mustUnderstand?: {
          operation: "set" | "remove" | (string & {});
          cloudflareOnly?: boolean;
        };
        noCache?: {
          operation: "set" | "remove" | (string & {});
          cloudflareOnly?: boolean;
        };
        noStore?: {
          operation: "set" | "remove" | (string & {});
          cloudflareOnly?: boolean;
        };
        noTransform?: {
          operation: "set" | "remove" | (string & {});
          cloudflareOnly?: boolean;
        };
        private?: {
          operation: "set" | "remove" | (string & {});
          cloudflareOnly?: boolean;
        };
        proxyRevalidate?: {
          operation: "set" | "remove" | (string & {});
          cloudflareOnly?: boolean;
        };
        public?: {
          operation: "set" | "remove" | (string & {});
          cloudflareOnly?: boolean;
        };
        sMaxage?: {
          operation: "set" | "remove" | (string & {});
          cloudflareOnly?: boolean;
        };
        staleIfError?: {
          operation: "set" | "remove" | (string & {});
          cloudflareOnly?: boolean;
        };
        staleWhileRevalidate?: {
          operation: "set" | "remove" | (string & {});
          cloudflareOnly?: boolean;
        };
      }
    | {
        additionalCacheablePorts?: number[];
        browserTtl?: {
          mode:
            | "respect_origin"
            | "bypass_by_default"
            | "override_origin"
            | "bypass"
            | (string & {});
          default?: number;
        };
        cache?: boolean;
        cacheKey?: {
          cacheByDeviceType?: boolean;
          cacheDeceptionArmor?: boolean;
          customKey?: {
            cookie?: { checkPresence?: string[]; include?: string[] };
            header?: {
              checkPresence?: string[];
              contains?: Record<string, unknown>;
              excludeOrigin?: boolean;
              include?: string[];
            };
            host?: { resolved?: boolean };
            queryString?: {
              exclude?: { all?: true; list?: string[] };
              include?: { all?: true; list?: string[] };
            };
            user?: { deviceType?: boolean; geo?: boolean; lang?: boolean };
          };
          ignoreQueryStringsOrder?: boolean;
        };
        cacheReserve?: { eligible: boolean; minimumFileSize?: number };
        edgeTtl?: {
          mode:
            | "respect_origin"
            | "bypass_by_default"
            | "override_origin"
            | (string & {});
          default?: number;
          statusCodeTtl?: {
            value: number;
            statusCode?: number;
            statusCodeRange?: { from?: number; to?: number };
          }[];
        };
        originCacheControl?: boolean;
        originErrorPagePassthru?: boolean;
        readTimeout?: number;
        respectStrongEtags?: boolean;
        serveStale?: { disableStaleWhileUpdating?: boolean };
        sharedDictionary?: { matchPattern: string };
        stripEtags?: boolean;
        stripLastModified?: boolean;
        stripSetCookie?: boolean;
        vary?: {
          default?: {
            action: "bypass" | "passthrough" | "normalize" | (string & {});
          };
          headers?: Record<string, unknown>;
        };
      }
    | { operation: "add" | "remove" | "set" | (string & {}); values: string[] }
    | {
        expression: string;
        operation: "add" | "remove" | "set" | (string & {});
      }
    | {
        automaticHttpsRewrites?: boolean;
        autominify?: { css?: boolean; html?: boolean; js?: boolean };
        bic?: boolean;
        contentConverter?: boolean;
        disableApps?: true;
        disablePayPerCrawl?: true;
        disableRum?: true;
        disableZaraz?: true;
        emailObfuscation?: boolean;
        fonts?: boolean;
        hotlinkProtection?: boolean;
        mirage?: boolean;
        opportunisticEncryption?: boolean;
        polish?: "off" | "lossless" | "lossy" | "webp" | (string & {});
        redirectsForAiTraining?: boolean;
        requestBodyBuffering?: "none" | "standard" | "full" | (string & {});
        responseBodyBuffering?: "none" | "standard" | (string & {});
        rocketLoader?: boolean;
        securityLevel?:
          | "off"
          | "essentially_off"
          | "low"
          | "medium"
          | "high"
          | "under_attack"
          | (string & {});
        serverSideExcludes?: boolean;
        ssl?:
          | "off"
          | "flexible"
          | "full"
          | "strict"
          | "origin_pull"
          | (string & {});
        sxg?: boolean;
      }
    | {
        phase?: "current";
        phases?: (
          | "ddos_l4"
          | "ddos_l7"
          | "http_config_settings"
          | "http_custom_errors"
          | "http_log_custom_fields"
          | "http_ratelimit"
          | "http_request_cache_settings"
          | "http_request_dynamic_redirect"
          | "http_request_firewall_custom"
          | "http_request_firewall_managed"
          | "http_request_late_transform"
          | "http_request_origin"
          | "http_request_redirect"
          | "http_request_sanitize"
          | "http_request_sbfm"
          | "http_request_transform"
          | "http_response_cache_settings"
          | "http_response_compression"
          | "http_response_firewall_managed"
          | "http_response_headers_transform"
          | "magic_transit"
          | "magic_transit_ids_managed"
          | "magic_transit_managed"
          | "magic_transit_ratelimit"
          | (string & {})
        )[];
        products?: (
          | "bic"
          | "hot"
          | "rateLimit"
          | "securityLevel"
          | "uaBlock"
          | "waf"
          | "zoneLockdown"
          | (string & {})
        )[];
        rules?: Record<string, unknown>;
        ruleset?: "current";
        rulesets?: string[];
      };
  /** Body param: An informative description of the rule. */
  description?: string;
  /** Body param: Whether the rule should be executed. */
  enabled?: boolean;
  /** Body param: Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  };
  /** Body param: The expression defining which traffic will match the rule. */
  expression?: string;
  /** Body param: An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean };
  /** Body param: An object configuring where the rule will be placed. */
  position?: { before?: string; after?: string; index?: number };
  /** Body param: An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string;
    mitigationTimeout?: number;
    requestsPerPeriod?: number;
    requestsToOrigin?: boolean;
    scorePerPeriod?: number;
    scoreResponseHeaderName?: string;
  };
  /** Body param: The reference of the rule (the rule's ID by default). */
  ref?: string;
}

export interface CreateRuleForAccountRequest extends CreateRuleBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface CreateRuleForZoneRequest extends CreateRuleBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const CreateRuleForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...CreateRuleBaseFields,
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        position: "position",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/rulesets/{rulesetId}/rules",
      }),
    ),
  ) as unknown as Schema.Codec<CreateRuleForAccountRequest>;

export const CreateRuleForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...CreateRuleBaseFields,
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        position: "position",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/rulesets/{rulesetId}/rules",
      }),
    ),
  ) as unknown as Schema.Codec<CreateRuleForZoneRequest>;

export interface CreateRuleResponse {
  /** The unique ID of the ruleset. */
  id: string;
  /** The kind of the ruleset. */
  kind: "managed" | "custom" | "root" | "zone" | (string & {});
  /** The timestamp of when the ruleset was last modified. */
  lastUpdated: string;
  /** The human-readable name of the ruleset. */
  name: string;
  /** The phase of the ruleset. */
  phase:
    | "ddos_l4"
    | "ddos_l7"
    | "http_config_settings"
    | "http_custom_errors"
    | "http_log_custom_fields"
    | "http_ratelimit"
    | "http_request_cache_settings"
    | "http_request_dynamic_redirect"
    | "http_request_firewall_custom"
    | "http_request_firewall_managed"
    | "http_request_late_transform"
    | "http_request_origin"
    | "http_request_redirect"
    | "http_request_sanitize"
    | "http_request_sbfm"
    | "http_request_transform"
    | "http_response_cache_settings"
    | "http_response_compression"
    | "http_response_firewall_managed"
    | "http_response_headers_transform"
    | "magic_transit"
    | "magic_transit_ids_managed"
    | "magic_transit_managed"
    | "magic_transit_ratelimit"
    | (string & {});
  /** The list of rules in the ruleset. */
  rules: (
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "block" | null;
        actionParameters?: {
          response?: {
            content: string;
            contentType: string;
            statusCode: number;
          } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "challenge" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "compress_response" | null;
        actionParameters?: {
          algorithms: {
            name?:
              | "none"
              | "auto"
              | "default"
              | "gzip"
              | "brotli"
              | "zstd"
              | (string & {})
              | null;
          }[];
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "ddos_dynamic" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "execute" | null;
        actionParameters?: {
          id: string;
          matchedData?: { publicKey: string } | null;
          overrides?: {
            action?: string | null;
            categories?:
              | {
                  category: string;
                  action?: string | null;
                  enabled?: boolean | null;
                  sensitivityLevel?:
                    | "default"
                    | "medium"
                    | "low"
                    | "eoff"
                    | (string & {})
                    | null;
                }[]
              | null;
            enabled?: boolean | null;
            rules?:
              | {
                  id: string;
                  action?: string | null;
                  enabled?: boolean | null;
                  scoreThreshold?: number | null;
                  sensitivityLevel?:
                    | "default"
                    | "medium"
                    | "low"
                    | "eoff"
                    | (string & {})
                    | null;
                }[]
              | null;
            sensitivityLevel?:
              | "default"
              | "medium"
              | "low"
              | "eoff"
              | (string & {})
              | null;
          } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "force_connection_close" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "js_challenge" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "log" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "log_custom_field" | null;
        actionParameters?: {
          cookieFields?: { name: string }[] | null;
          rawResponseFields?:
            | { name: string; preserveDuplicates?: boolean | null }[]
            | null;
          requestFields?: { name: string }[] | null;
          responseFields?:
            | { name: string; preserveDuplicates?: boolean | null }[]
            | null;
          transformedRequestFields?: { name: string }[] | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "managed_challenge" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "redirect" | null;
        actionParameters?: {
          fromList?: { key: string; name: string } | null;
          fromValue?: {
            targetUrl: { expression?: string | null; value?: string | null };
            preserveQueryString?: boolean | null;
            statusCode?:
              | "301"
              | "302"
              | "303"
              | "307"
              | "308"
              | (string & {})
              | null;
          } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "rewrite" | null;
        actionParameters?: {
          headers?: Record<string, unknown> | null;
          uri?:
            | {
                path: { expression?: string | null; value?: string | null };
                origin?: boolean | null;
              }
            | {
                query: { expression?: string | null; value?: string | null };
                origin?: boolean | null;
              }
            | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "route" | null;
        actionParameters?: {
          hostHeader?: string | null;
          origin?: { host?: string | null; port?: number | null } | null;
          sni?: { value: string } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "score" | null;
        actionParameters?: { increment: number } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "serve_error" | null;
        actionParameters?:
          | {
              content: string;
              contentType?:
                | "application/json"
                | "text/html"
                | "text/plain"
                | "text/xml"
                | (string & {})
                | null;
              statusCode?: number | null;
            }
          | {
              assetName: string;
              contentType?:
                | "application/json"
                | "text/html"
                | "text/plain"
                | "text/xml"
                | (string & {})
                | null;
              statusCode?: number | null;
            }
          | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "set_cache_control" | null;
        actionParameters?: {
          immutable?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          maxAge?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          mustRevalidate?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          mustUnderstand?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          noCache?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          noStore?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          noTransform?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          private?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          proxyRevalidate?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          public?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          sMaxage?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          staleIfError?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          staleWhileRevalidate?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "set_cache_settings" | null;
        actionParameters?: {
          additionalCacheablePorts?: number[] | null;
          browserTtl?: {
            mode:
              | "respect_origin"
              | "bypass_by_default"
              | "override_origin"
              | "bypass"
              | (string & {});
            default?: number | null;
          } | null;
          cache?: boolean | null;
          cacheKey?: {
            cacheByDeviceType?: boolean | null;
            cacheDeceptionArmor?: boolean | null;
            customKey?: {
              cookie?: {
                checkPresence?: string[] | null;
                include?: string[] | null;
              } | null;
              header?: {
                checkPresence?: string[] | null;
                contains?: Record<string, unknown> | null;
                excludeOrigin?: boolean | null;
                include?: string[] | null;
              } | null;
              host?: { resolved?: boolean | null } | null;
              queryString?: {
                exclude?: { all?: true | null; list?: string[] | null } | null;
                include?: { all?: true | null; list?: string[] | null } | null;
              } | null;
              user?: {
                deviceType?: boolean | null;
                geo?: boolean | null;
                lang?: boolean | null;
              } | null;
            } | null;
            ignoreQueryStringsOrder?: boolean | null;
          } | null;
          cacheReserve?: {
            eligible: boolean;
            minimumFileSize?: number | null;
          } | null;
          edgeTtl?: {
            mode:
              | "respect_origin"
              | "bypass_by_default"
              | "override_origin"
              | (string & {});
            default?: number | null;
            statusCodeTtl?:
              | {
                  value: number;
                  statusCode?: number | null;
                  statusCodeRange?: {
                    from?: number | null;
                    to?: number | null;
                  } | null;
                }[]
              | null;
          } | null;
          originCacheControl?: boolean | null;
          originErrorPagePassthru?: boolean | null;
          readTimeout?: number | null;
          respectStrongEtags?: boolean | null;
          serveStale?: { disableStaleWhileUpdating?: boolean | null } | null;
          sharedDictionary?: { matchPattern: string } | null;
          stripEtags?: boolean | null;
          stripLastModified?: boolean | null;
          stripSetCookie?: boolean | null;
          vary?: {
            default?: {
              action: "bypass" | "passthrough" | "normalize" | (string & {});
            } | null;
            headers?: Record<string, unknown> | null;
          } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "set_cache_tags" | null;
        actionParameters?:
          | {
              operation: "add" | "remove" | "set" | (string & {});
              values: string[];
            }
          | {
              expression: string;
              operation: "add" | "remove" | "set" | (string & {});
            }
          | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "set_config" | null;
        actionParameters?: {
          automaticHttpsRewrites?: boolean | null;
          autominify?: {
            css?: boolean | null;
            html?: boolean | null;
            js?: boolean | null;
          } | null;
          bic?: boolean | null;
          contentConverter?: boolean | null;
          disableApps?: true | null;
          disablePayPerCrawl?: true | null;
          disableRum?: true | null;
          disableZaraz?: true | null;
          emailObfuscation?: boolean | null;
          fonts?: boolean | null;
          hotlinkProtection?: boolean | null;
          mirage?: boolean | null;
          opportunisticEncryption?: boolean | null;
          polish?: "off" | "lossless" | "lossy" | "webp" | (string & {}) | null;
          redirectsForAiTraining?: boolean | null;
          requestBodyBuffering?:
            | "none"
            | "standard"
            | "full"
            | (string & {})
            | null;
          responseBodyBuffering?: "none" | "standard" | (string & {}) | null;
          rocketLoader?: boolean | null;
          securityLevel?:
            | "off"
            | "essentially_off"
            | "low"
            | "medium"
            | "high"
            | "under_attack"
            | (string & {})
            | null;
          serverSideExcludes?: boolean | null;
          ssl?:
            | "off"
            | "flexible"
            | "full"
            | "strict"
            | "origin_pull"
            | (string & {})
            | null;
          sxg?: boolean | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "skip" | null;
        actionParameters?: {
          phase?: "current" | null;
          phases?:
            | (
                | "ddos_l4"
                | "ddos_l7"
                | "http_config_settings"
                | "http_custom_errors"
                | "http_log_custom_fields"
                | "http_ratelimit"
                | "http_request_cache_settings"
                | "http_request_dynamic_redirect"
                | "http_request_firewall_custom"
                | "http_request_firewall_managed"
                | "http_request_late_transform"
                | "http_request_origin"
                | "http_request_redirect"
                | "http_request_sanitize"
                | "http_request_sbfm"
                | "http_request_transform"
                | "http_response_cache_settings"
                | "http_response_compression"
                | "http_response_firewall_managed"
                | "http_response_headers_transform"
                | "magic_transit"
                | "magic_transit_ids_managed"
                | "magic_transit_managed"
                | "magic_transit_ratelimit"
                | (string & {})
              )[]
            | null;
          products?:
            | (
                | "bic"
                | "hot"
                | "rateLimit"
                | "securityLevel"
                | "uaBlock"
                | "waf"
                | "zoneLockdown"
                | (string & {})
              )[]
            | null;
          rules?: Record<string, unknown> | null;
          ruleset?: "current" | null;
          rulesets?: string[] | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
  )[];
  /** The version of the ruleset. */
  version: string;
  /** An informative description of the ruleset. */
  description?: string | null;
}

export const CreateRuleResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      kind: Schema.Union([
        Schema.Literals(["managed", "custom", "root", "zone"]),
        Schema.String,
      ]),
      lastUpdated: Schema.String,
      name: Schema.String,
      phase: Schema.Union([
        Schema.Literals([
          "ddos_l4",
          "ddos_l7",
          "http_config_settings",
          "http_custom_errors",
          "http_log_custom_fields",
          "http_ratelimit",
          "http_request_cache_settings",
          "http_request_dynamic_redirect",
          "http_request_firewall_custom",
          "http_request_firewall_managed",
          "http_request_late_transform",
          "http_request_origin",
          "http_request_redirect",
          "http_request_sanitize",
          "http_request_sbfm",
          "http_request_transform",
          "http_response_cache_settings",
          "http_response_compression",
          "http_response_firewall_managed",
          "http_response_headers_transform",
          "magic_transit",
          "magic_transit_ids_managed",
          "magic_transit_managed",
          "magic_transit_ratelimit",
        ]),
        Schema.String,
      ]),
      rules: Schema.Array(
        Schema.Union([
          BlockRule,
          RulesetsChallengeRule,
          CompressResponseRule,
          DdoSDynamicRule,
          ExecuteRule,
          ForceConnectionCloseRule,
          RulesetsJSChallengeRule,
          LogRule,
          LogCustomFieldRule,
          ManagedChallengeRule,
          RedirectRule2,
          RewriteRule,
          RouteRule,
          ScoreRule,
          ServeErrorRule,
          RulesetsSetCacheControlRule,
          SetCacheSettingsRule,
          RulesetsSetCacheTagsRule,
          SetConfigRule,
          SkipRule,
        ]),
      ),
      version: Schema.String,
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          kind: "kind",
          lastUpdated: "last_updated",
          name: "name",
          phase: "phase",
          rules: "rules",
          version: "version",
          description: "description",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateRuleResponse>;

export type CreateRuleError = DefaultErrors;

export const createRuleForAccount: API.OperationMethod<
  CreateRuleForAccountRequest,
  CreateRuleResponse,
  CreateRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateRuleForAccountRequest,
  output: CreateRuleResponse,
  errors: [],
}));

export const createRuleForZone: API.OperationMethod<
  CreateRuleForZoneRequest,
  CreateRuleResponse,
  CreateRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateRuleForZoneRequest,
  output: CreateRuleResponse,
  errors: [],
}));

const PatchRuleBaseFields = {
  rulesetId: Schema.String.pipe(T.HttpPath("rulesetId")),
  ruleId: Schema.String.pipe(T.HttpPath("ruleId")),
  id: Schema.optional(Schema.String),
  action: Schema.optional(
    Schema.Union([
      Schema.Literals([
        "block",
        "challenge",
        "compress_response",
        "ddos_dynamic",
        "execute",
        "force_connection_close",
        "js_challenge",
        "log",
        "log_custom_field",
        "managed_challenge",
        "redirect",
        "rewrite",
        "route",
        "score",
        "serve_error",
        "set_cache_control",
        "set_cache_settings",
        "set_cache_tags",
        "set_config",
        "skip",
      ]),
      Schema.String,
    ]),
  ),
  actionParameters: Schema.optional(
    Schema.Union([
      AddCacheTagsValues,
      AddCacheTagsExpression,
      ActionParameters2,
      ActionParameters3,
      ActionParameters8,
      ActionParametersContent,
      ActionParametersAsset,
      ActionParameters,
      ActionParameters4,
      ActionParameters15,
      ActionParameters14,
      ActionParameters7,
      ActionParameters9,
      ActionParameters10,
      ActionParameters11,
      ActionParameters12,
    ]),
  ),
  description: Schema.optional(Schema.String),
  enabled: Schema.optional(Schema.Boolean),
  exposedCredentialCheck: Schema.optional(ExposedCredentialCheck),
  expression: Schema.optional(Schema.String),
  logging: Schema.optional(Logging),
  position: Schema.optional(BeforePosition),
  ratelimit: Schema.optional(Ratelimit),
  ref: Schema.optional(Schema.String),
} as const;

interface PatchRuleBaseRequest {
  rulesetId: string;
  ruleId: string;
  /** Body param: The unique ID of the rule. */
  id?: string;
  /** Body param: The action to perform when the rule matches. */
  action?:
    | "block"
    | "challenge"
    | "compress_response"
    | "ddos_dynamic"
    | "execute"
    | "force_connection_close"
    | "js_challenge"
    | "log"
    | "log_custom_field"
    | "managed_challenge"
    | "redirect"
    | "rewrite"
    | "route"
    | "score"
    | "serve_error"
    | "set_cache_control"
    | "set_cache_settings"
    | "set_cache_tags"
    | "set_config"
    | "skip"
    | (string & {});
  /** Body param: The parameters configuring the rule's action. */
  actionParameters?:
    | {
        response?: { content: string; contentType: string; statusCode: number };
      }
    | {
        algorithms: {
          name?:
            | "none"
            | "auto"
            | "default"
            | "gzip"
            | "brotli"
            | "zstd"
            | (string & {});
        }[];
      }
    | {
        id: string;
        matchedData?: { publicKey: string };
        overrides?: {
          action?: string;
          categories?: {
            category: string;
            action?: string;
            enabled?: boolean;
            sensitivityLevel?:
              | "default"
              | "medium"
              | "low"
              | "eoff"
              | (string & {});
          }[];
          enabled?: boolean;
          rules?: {
            id: string;
            action?: string;
            enabled?: boolean;
            scoreThreshold?: number;
            sensitivityLevel?:
              | "default"
              | "medium"
              | "low"
              | "eoff"
              | (string & {});
          }[];
          sensitivityLevel?:
            | "default"
            | "medium"
            | "low"
            | "eoff"
            | (string & {});
        };
      }
    | {
        cookieFields?: { name: string }[];
        rawResponseFields?: { name: string; preserveDuplicates?: boolean }[];
        requestFields?: { name: string }[];
        responseFields?: { name: string; preserveDuplicates?: boolean }[];
        transformedRequestFields?: { name: string }[];
      }
    | {
        fromList?: { key: string; name: string };
        fromValue?: {
          targetUrl: { expression?: string; value?: string };
          preserveQueryString?: boolean;
          statusCode?: "301" | "302" | "303" | "307" | "308" | (string & {});
        };
      }
    | {
        headers?: Record<string, unknown>;
        uri?:
          | { path: { expression?: string; value?: string } }
          | { query: { expression?: string; value?: string } };
      }
    | {
        hostHeader?: string;
        origin?: { host?: string; port?: number };
        sni?: { value: string };
      }
    | { increment: number }
    | {
        content: string;
        contentType?:
          | "application/json"
          | "text/html"
          | "text/plain"
          | "text/xml"
          | (string & {});
        statusCode?: number;
      }
    | {
        assetName: string;
        contentType?:
          | "application/json"
          | "text/html"
          | "text/plain"
          | "text/xml"
          | (string & {});
        statusCode?: number;
      }
    | {
        immutable?: {
          operation: "set" | "remove" | (string & {});
          cloudflareOnly?: boolean;
        };
        maxAge?: {
          operation: "set" | "remove" | (string & {});
          cloudflareOnly?: boolean;
        };
        mustRevalidate?: {
          operation: "set" | "remove" | (string & {});
          cloudflareOnly?: boolean;
        };
        mustUnderstand?: {
          operation: "set" | "remove" | (string & {});
          cloudflareOnly?: boolean;
        };
        noCache?: {
          operation: "set" | "remove" | (string & {});
          cloudflareOnly?: boolean;
        };
        noStore?: {
          operation: "set" | "remove" | (string & {});
          cloudflareOnly?: boolean;
        };
        noTransform?: {
          operation: "set" | "remove" | (string & {});
          cloudflareOnly?: boolean;
        };
        private?: {
          operation: "set" | "remove" | (string & {});
          cloudflareOnly?: boolean;
        };
        proxyRevalidate?: {
          operation: "set" | "remove" | (string & {});
          cloudflareOnly?: boolean;
        };
        public?: {
          operation: "set" | "remove" | (string & {});
          cloudflareOnly?: boolean;
        };
        sMaxage?: {
          operation: "set" | "remove" | (string & {});
          cloudflareOnly?: boolean;
        };
        staleIfError?: {
          operation: "set" | "remove" | (string & {});
          cloudflareOnly?: boolean;
        };
        staleWhileRevalidate?: {
          operation: "set" | "remove" | (string & {});
          cloudflareOnly?: boolean;
        };
      }
    | {
        additionalCacheablePorts?: number[];
        browserTtl?: {
          mode:
            | "respect_origin"
            | "bypass_by_default"
            | "override_origin"
            | "bypass"
            | (string & {});
          default?: number;
        };
        cache?: boolean;
        cacheKey?: {
          cacheByDeviceType?: boolean;
          cacheDeceptionArmor?: boolean;
          customKey?: {
            cookie?: { checkPresence?: string[]; include?: string[] };
            header?: {
              checkPresence?: string[];
              contains?: Record<string, unknown>;
              excludeOrigin?: boolean;
              include?: string[];
            };
            host?: { resolved?: boolean };
            queryString?: {
              exclude?: { all?: true; list?: string[] };
              include?: { all?: true; list?: string[] };
            };
            user?: { deviceType?: boolean; geo?: boolean; lang?: boolean };
          };
          ignoreQueryStringsOrder?: boolean;
        };
        cacheReserve?: { eligible: boolean; minimumFileSize?: number };
        edgeTtl?: {
          mode:
            | "respect_origin"
            | "bypass_by_default"
            | "override_origin"
            | (string & {});
          default?: number;
          statusCodeTtl?: {
            value: number;
            statusCode?: number;
            statusCodeRange?: { from?: number; to?: number };
          }[];
        };
        originCacheControl?: boolean;
        originErrorPagePassthru?: boolean;
        readTimeout?: number;
        respectStrongEtags?: boolean;
        serveStale?: { disableStaleWhileUpdating?: boolean };
        sharedDictionary?: { matchPattern: string };
        stripEtags?: boolean;
        stripLastModified?: boolean;
        stripSetCookie?: boolean;
        vary?: {
          default?: {
            action: "bypass" | "passthrough" | "normalize" | (string & {});
          };
          headers?: Record<string, unknown>;
        };
      }
    | { operation: "add" | "remove" | "set" | (string & {}); values: string[] }
    | {
        expression: string;
        operation: "add" | "remove" | "set" | (string & {});
      }
    | {
        automaticHttpsRewrites?: boolean;
        autominify?: { css?: boolean; html?: boolean; js?: boolean };
        bic?: boolean;
        contentConverter?: boolean;
        disableApps?: true;
        disablePayPerCrawl?: true;
        disableRum?: true;
        disableZaraz?: true;
        emailObfuscation?: boolean;
        fonts?: boolean;
        hotlinkProtection?: boolean;
        mirage?: boolean;
        opportunisticEncryption?: boolean;
        polish?: "off" | "lossless" | "lossy" | "webp" | (string & {});
        redirectsForAiTraining?: boolean;
        requestBodyBuffering?: "none" | "standard" | "full" | (string & {});
        responseBodyBuffering?: "none" | "standard" | (string & {});
        rocketLoader?: boolean;
        securityLevel?:
          | "off"
          | "essentially_off"
          | "low"
          | "medium"
          | "high"
          | "under_attack"
          | (string & {});
        serverSideExcludes?: boolean;
        ssl?:
          | "off"
          | "flexible"
          | "full"
          | "strict"
          | "origin_pull"
          | (string & {});
        sxg?: boolean;
      }
    | {
        phase?: "current";
        phases?: (
          | "ddos_l4"
          | "ddos_l7"
          | "http_config_settings"
          | "http_custom_errors"
          | "http_log_custom_fields"
          | "http_ratelimit"
          | "http_request_cache_settings"
          | "http_request_dynamic_redirect"
          | "http_request_firewall_custom"
          | "http_request_firewall_managed"
          | "http_request_late_transform"
          | "http_request_origin"
          | "http_request_redirect"
          | "http_request_sanitize"
          | "http_request_sbfm"
          | "http_request_transform"
          | "http_response_cache_settings"
          | "http_response_compression"
          | "http_response_firewall_managed"
          | "http_response_headers_transform"
          | "magic_transit"
          | "magic_transit_ids_managed"
          | "magic_transit_managed"
          | "magic_transit_ratelimit"
          | (string & {})
        )[];
        products?: (
          | "bic"
          | "hot"
          | "rateLimit"
          | "securityLevel"
          | "uaBlock"
          | "waf"
          | "zoneLockdown"
          | (string & {})
        )[];
        rules?: Record<string, unknown>;
        ruleset?: "current";
        rulesets?: string[];
      };
  /** Body param: An informative description of the rule. */
  description?: string;
  /** Body param: Whether the rule should be executed. */
  enabled?: boolean;
  /** Body param: Configuration for exposed credential checking. */
  exposedCredentialCheck?: {
    passwordExpression: string;
    usernameExpression: string;
  };
  /** Body param: The expression defining which traffic will match the rule. */
  expression?: string;
  /** Body param: An object configuring the rule's logging behavior. */
  logging?: { enabled: boolean };
  /** Body param: An object configuring where the rule will be placed. */
  position?: { before?: string; after?: string; index?: number };
  /** Body param: An object configuring the rule's rate limit behavior. */
  ratelimit?: {
    characteristics: string[];
    period: number;
    countingExpression?: string;
    mitigationTimeout?: number;
    requestsPerPeriod?: number;
    requestsToOrigin?: boolean;
    scorePerPeriod?: number;
    scoreResponseHeaderName?: string;
  };
  /** Body param: The reference of the rule (the rule's ID by default). */
  ref?: string;
}

export interface PatchRuleForAccountRequest extends PatchRuleBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface PatchRuleForZoneRequest extends PatchRuleBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const PatchRuleForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...PatchRuleBaseFields,
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        position: "position",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/rulesets/{rulesetId}/rules/{ruleId}",
      }),
    ),
  ) as unknown as Schema.Codec<PatchRuleForAccountRequest>;

export const PatchRuleForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...PatchRuleBaseFields,
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        action: "action",
        actionParameters: "action_parameters",
        description: "description",
        enabled: "enabled",
        exposedCredentialCheck: "exposed_credential_check",
        expression: "expression",
        logging: "logging",
        position: "position",
        ratelimit: "ratelimit",
        ref: "ref",
      }),
      T.Http({
        method: "PATCH",
        path: "/zones/{zone_id}/rulesets/{rulesetId}/rules/{ruleId}",
      }),
    ),
  ) as unknown as Schema.Codec<PatchRuleForZoneRequest>;

export interface PatchRuleResponse {
  /** The unique ID of the ruleset. */
  id: string;
  /** The kind of the ruleset. */
  kind: "managed" | "custom" | "root" | "zone" | (string & {});
  /** The timestamp of when the ruleset was last modified. */
  lastUpdated: string;
  /** The human-readable name of the ruleset. */
  name: string;
  /** The phase of the ruleset. */
  phase:
    | "ddos_l4"
    | "ddos_l7"
    | "http_config_settings"
    | "http_custom_errors"
    | "http_log_custom_fields"
    | "http_ratelimit"
    | "http_request_cache_settings"
    | "http_request_dynamic_redirect"
    | "http_request_firewall_custom"
    | "http_request_firewall_managed"
    | "http_request_late_transform"
    | "http_request_origin"
    | "http_request_redirect"
    | "http_request_sanitize"
    | "http_request_sbfm"
    | "http_request_transform"
    | "http_response_cache_settings"
    | "http_response_compression"
    | "http_response_firewall_managed"
    | "http_response_headers_transform"
    | "magic_transit"
    | "magic_transit_ids_managed"
    | "magic_transit_managed"
    | "magic_transit_ratelimit"
    | (string & {});
  /** The list of rules in the ruleset. */
  rules: (
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "block" | null;
        actionParameters?: {
          response?: {
            content: string;
            contentType: string;
            statusCode: number;
          } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "challenge" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "compress_response" | null;
        actionParameters?: {
          algorithms: {
            name?:
              | "none"
              | "auto"
              | "default"
              | "gzip"
              | "brotli"
              | "zstd"
              | (string & {})
              | null;
          }[];
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "ddos_dynamic" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "execute" | null;
        actionParameters?: {
          id: string;
          matchedData?: { publicKey: string } | null;
          overrides?: {
            action?: string | null;
            categories?:
              | {
                  category: string;
                  action?: string | null;
                  enabled?: boolean | null;
                  sensitivityLevel?:
                    | "default"
                    | "medium"
                    | "low"
                    | "eoff"
                    | (string & {})
                    | null;
                }[]
              | null;
            enabled?: boolean | null;
            rules?:
              | {
                  id: string;
                  action?: string | null;
                  enabled?: boolean | null;
                  scoreThreshold?: number | null;
                  sensitivityLevel?:
                    | "default"
                    | "medium"
                    | "low"
                    | "eoff"
                    | (string & {})
                    | null;
                }[]
              | null;
            sensitivityLevel?:
              | "default"
              | "medium"
              | "low"
              | "eoff"
              | (string & {})
              | null;
          } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "force_connection_close" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "js_challenge" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "log" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "log_custom_field" | null;
        actionParameters?: {
          cookieFields?: { name: string }[] | null;
          rawResponseFields?:
            | { name: string; preserveDuplicates?: boolean | null }[]
            | null;
          requestFields?: { name: string }[] | null;
          responseFields?:
            | { name: string; preserveDuplicates?: boolean | null }[]
            | null;
          transformedRequestFields?: { name: string }[] | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "managed_challenge" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "redirect" | null;
        actionParameters?: {
          fromList?: { key: string; name: string } | null;
          fromValue?: {
            targetUrl: { expression?: string | null; value?: string | null };
            preserveQueryString?: boolean | null;
            statusCode?:
              | "301"
              | "302"
              | "303"
              | "307"
              | "308"
              | (string & {})
              | null;
          } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "rewrite" | null;
        actionParameters?: {
          headers?: Record<string, unknown> | null;
          uri?:
            | {
                path: { expression?: string | null; value?: string | null };
                origin?: boolean | null;
              }
            | {
                query: { expression?: string | null; value?: string | null };
                origin?: boolean | null;
              }
            | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "route" | null;
        actionParameters?: {
          hostHeader?: string | null;
          origin?: { host?: string | null; port?: number | null } | null;
          sni?: { value: string } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "score" | null;
        actionParameters?: { increment: number } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "serve_error" | null;
        actionParameters?:
          | {
              content: string;
              contentType?:
                | "application/json"
                | "text/html"
                | "text/plain"
                | "text/xml"
                | (string & {})
                | null;
              statusCode?: number | null;
            }
          | {
              assetName: string;
              contentType?:
                | "application/json"
                | "text/html"
                | "text/plain"
                | "text/xml"
                | (string & {})
                | null;
              statusCode?: number | null;
            }
          | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "set_cache_control" | null;
        actionParameters?: {
          immutable?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          maxAge?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          mustRevalidate?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          mustUnderstand?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          noCache?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          noStore?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          noTransform?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          private?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          proxyRevalidate?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          public?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          sMaxage?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          staleIfError?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          staleWhileRevalidate?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "set_cache_settings" | null;
        actionParameters?: {
          additionalCacheablePorts?: number[] | null;
          browserTtl?: {
            mode:
              | "respect_origin"
              | "bypass_by_default"
              | "override_origin"
              | "bypass"
              | (string & {});
            default?: number | null;
          } | null;
          cache?: boolean | null;
          cacheKey?: {
            cacheByDeviceType?: boolean | null;
            cacheDeceptionArmor?: boolean | null;
            customKey?: {
              cookie?: {
                checkPresence?: string[] | null;
                include?: string[] | null;
              } | null;
              header?: {
                checkPresence?: string[] | null;
                contains?: Record<string, unknown> | null;
                excludeOrigin?: boolean | null;
                include?: string[] | null;
              } | null;
              host?: { resolved?: boolean | null } | null;
              queryString?: {
                exclude?: { all?: true | null; list?: string[] | null } | null;
                include?: { all?: true | null; list?: string[] | null } | null;
              } | null;
              user?: {
                deviceType?: boolean | null;
                geo?: boolean | null;
                lang?: boolean | null;
              } | null;
            } | null;
            ignoreQueryStringsOrder?: boolean | null;
          } | null;
          cacheReserve?: {
            eligible: boolean;
            minimumFileSize?: number | null;
          } | null;
          edgeTtl?: {
            mode:
              | "respect_origin"
              | "bypass_by_default"
              | "override_origin"
              | (string & {});
            default?: number | null;
            statusCodeTtl?:
              | {
                  value: number;
                  statusCode?: number | null;
                  statusCodeRange?: {
                    from?: number | null;
                    to?: number | null;
                  } | null;
                }[]
              | null;
          } | null;
          originCacheControl?: boolean | null;
          originErrorPagePassthru?: boolean | null;
          readTimeout?: number | null;
          respectStrongEtags?: boolean | null;
          serveStale?: { disableStaleWhileUpdating?: boolean | null } | null;
          sharedDictionary?: { matchPattern: string } | null;
          stripEtags?: boolean | null;
          stripLastModified?: boolean | null;
          stripSetCookie?: boolean | null;
          vary?: {
            default?: {
              action: "bypass" | "passthrough" | "normalize" | (string & {});
            } | null;
            headers?: Record<string, unknown> | null;
          } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "set_cache_tags" | null;
        actionParameters?:
          | {
              operation: "add" | "remove" | "set" | (string & {});
              values: string[];
            }
          | {
              expression: string;
              operation: "add" | "remove" | "set" | (string & {});
            }
          | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "set_config" | null;
        actionParameters?: {
          automaticHttpsRewrites?: boolean | null;
          autominify?: {
            css?: boolean | null;
            html?: boolean | null;
            js?: boolean | null;
          } | null;
          bic?: boolean | null;
          contentConverter?: boolean | null;
          disableApps?: true | null;
          disablePayPerCrawl?: true | null;
          disableRum?: true | null;
          disableZaraz?: true | null;
          emailObfuscation?: boolean | null;
          fonts?: boolean | null;
          hotlinkProtection?: boolean | null;
          mirage?: boolean | null;
          opportunisticEncryption?: boolean | null;
          polish?: "off" | "lossless" | "lossy" | "webp" | (string & {}) | null;
          redirectsForAiTraining?: boolean | null;
          requestBodyBuffering?:
            | "none"
            | "standard"
            | "full"
            | (string & {})
            | null;
          responseBodyBuffering?: "none" | "standard" | (string & {}) | null;
          rocketLoader?: boolean | null;
          securityLevel?:
            | "off"
            | "essentially_off"
            | "low"
            | "medium"
            | "high"
            | "under_attack"
            | (string & {})
            | null;
          serverSideExcludes?: boolean | null;
          ssl?:
            | "off"
            | "flexible"
            | "full"
            | "strict"
            | "origin_pull"
            | (string & {})
            | null;
          sxg?: boolean | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "skip" | null;
        actionParameters?: {
          phase?: "current" | null;
          phases?:
            | (
                | "ddos_l4"
                | "ddos_l7"
                | "http_config_settings"
                | "http_custom_errors"
                | "http_log_custom_fields"
                | "http_ratelimit"
                | "http_request_cache_settings"
                | "http_request_dynamic_redirect"
                | "http_request_firewall_custom"
                | "http_request_firewall_managed"
                | "http_request_late_transform"
                | "http_request_origin"
                | "http_request_redirect"
                | "http_request_sanitize"
                | "http_request_sbfm"
                | "http_request_transform"
                | "http_response_cache_settings"
                | "http_response_compression"
                | "http_response_firewall_managed"
                | "http_response_headers_transform"
                | "magic_transit"
                | "magic_transit_ids_managed"
                | "magic_transit_managed"
                | "magic_transit_ratelimit"
                | (string & {})
              )[]
            | null;
          products?:
            | (
                | "bic"
                | "hot"
                | "rateLimit"
                | "securityLevel"
                | "uaBlock"
                | "waf"
                | "zoneLockdown"
                | (string & {})
              )[]
            | null;
          rules?: Record<string, unknown> | null;
          ruleset?: "current" | null;
          rulesets?: string[] | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
  )[];
  /** The version of the ruleset. */
  version: string;
  /** An informative description of the ruleset. */
  description?: string | null;
}

export const PatchRuleResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      kind: Schema.Union([
        Schema.Literals(["managed", "custom", "root", "zone"]),
        Schema.String,
      ]),
      lastUpdated: Schema.String,
      name: Schema.String,
      phase: Schema.Union([
        Schema.Literals([
          "ddos_l4",
          "ddos_l7",
          "http_config_settings",
          "http_custom_errors",
          "http_log_custom_fields",
          "http_ratelimit",
          "http_request_cache_settings",
          "http_request_dynamic_redirect",
          "http_request_firewall_custom",
          "http_request_firewall_managed",
          "http_request_late_transform",
          "http_request_origin",
          "http_request_redirect",
          "http_request_sanitize",
          "http_request_sbfm",
          "http_request_transform",
          "http_response_cache_settings",
          "http_response_compression",
          "http_response_firewall_managed",
          "http_response_headers_transform",
          "magic_transit",
          "magic_transit_ids_managed",
          "magic_transit_managed",
          "magic_transit_ratelimit",
        ]),
        Schema.String,
      ]),
      rules: Schema.Array(
        Schema.Union([
          BlockRule,
          RulesetsChallengeRule,
          CompressResponseRule,
          DdoSDynamicRule,
          ExecuteRule,
          ForceConnectionCloseRule,
          RulesetsJSChallengeRule,
          LogRule,
          LogCustomFieldRule,
          ManagedChallengeRule,
          RedirectRule2,
          RewriteRule,
          RouteRule,
          ScoreRule,
          ServeErrorRule,
          RulesetsSetCacheControlRule,
          SetCacheSettingsRule,
          RulesetsSetCacheTagsRule,
          SetConfigRule,
          SkipRule,
        ]),
      ),
      version: Schema.String,
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          kind: "kind",
          lastUpdated: "last_updated",
          name: "name",
          phase: "phase",
          rules: "rules",
          version: "version",
          description: "description",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PatchRuleResponse>;

export type PatchRuleError = DefaultErrors;

export const patchRuleForAccount: API.OperationMethod<
  PatchRuleForAccountRequest,
  PatchRuleResponse,
  PatchRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchRuleForAccountRequest,
  output: PatchRuleResponse,
  errors: [],
}));

export const patchRuleForZone: API.OperationMethod<
  PatchRuleForZoneRequest,
  PatchRuleResponse,
  PatchRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchRuleForZoneRequest,
  output: PatchRuleResponse,
  errors: [],
}));

const DeleteRuleBaseFields = {
  rulesetId: Schema.String.pipe(T.HttpPath("rulesetId")),
  ruleId: Schema.String.pipe(T.HttpPath("ruleId")),
} as const;

interface DeleteRuleBaseRequest {
  rulesetId: string;
  ruleId: string;
}

export interface DeleteRuleForAccountRequest extends DeleteRuleBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface DeleteRuleForZoneRequest extends DeleteRuleBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const DeleteRuleForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...DeleteRuleBaseFields,
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/rulesets/{rulesetId}/rules/{ruleId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteRuleForAccountRequest>;

export const DeleteRuleForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...DeleteRuleBaseFields,
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/rulesets/{rulesetId}/rules/{ruleId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteRuleForZoneRequest>;

export interface DeleteRuleResponse {
  /** The unique ID of the ruleset. */
  id: string;
  /** The kind of the ruleset. */
  kind: "managed" | "custom" | "root" | "zone" | (string & {});
  /** The timestamp of when the ruleset was last modified. */
  lastUpdated: string;
  /** The human-readable name of the ruleset. */
  name: string;
  /** The phase of the ruleset. */
  phase:
    | "ddos_l4"
    | "ddos_l7"
    | "http_config_settings"
    | "http_custom_errors"
    | "http_log_custom_fields"
    | "http_ratelimit"
    | "http_request_cache_settings"
    | "http_request_dynamic_redirect"
    | "http_request_firewall_custom"
    | "http_request_firewall_managed"
    | "http_request_late_transform"
    | "http_request_origin"
    | "http_request_redirect"
    | "http_request_sanitize"
    | "http_request_sbfm"
    | "http_request_transform"
    | "http_response_cache_settings"
    | "http_response_compression"
    | "http_response_firewall_managed"
    | "http_response_headers_transform"
    | "magic_transit"
    | "magic_transit_ids_managed"
    | "magic_transit_managed"
    | "magic_transit_ratelimit"
    | (string & {});
  /** The list of rules in the ruleset. */
  rules: (
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "block" | null;
        actionParameters?: {
          response?: {
            content: string;
            contentType: string;
            statusCode: number;
          } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "challenge" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "compress_response" | null;
        actionParameters?: {
          algorithms: {
            name?:
              | "none"
              | "auto"
              | "default"
              | "gzip"
              | "brotli"
              | "zstd"
              | (string & {})
              | null;
          }[];
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "ddos_dynamic" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "execute" | null;
        actionParameters?: {
          id: string;
          matchedData?: { publicKey: string } | null;
          overrides?: {
            action?: string | null;
            categories?:
              | {
                  category: string;
                  action?: string | null;
                  enabled?: boolean | null;
                  sensitivityLevel?:
                    | "default"
                    | "medium"
                    | "low"
                    | "eoff"
                    | (string & {})
                    | null;
                }[]
              | null;
            enabled?: boolean | null;
            rules?:
              | {
                  id: string;
                  action?: string | null;
                  enabled?: boolean | null;
                  scoreThreshold?: number | null;
                  sensitivityLevel?:
                    | "default"
                    | "medium"
                    | "low"
                    | "eoff"
                    | (string & {})
                    | null;
                }[]
              | null;
            sensitivityLevel?:
              | "default"
              | "medium"
              | "low"
              | "eoff"
              | (string & {})
              | null;
          } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "force_connection_close" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "js_challenge" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "log" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "log_custom_field" | null;
        actionParameters?: {
          cookieFields?: { name: string }[] | null;
          rawResponseFields?:
            | { name: string; preserveDuplicates?: boolean | null }[]
            | null;
          requestFields?: { name: string }[] | null;
          responseFields?:
            | { name: string; preserveDuplicates?: boolean | null }[]
            | null;
          transformedRequestFields?: { name: string }[] | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "managed_challenge" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "redirect" | null;
        actionParameters?: {
          fromList?: { key: string; name: string } | null;
          fromValue?: {
            targetUrl: { expression?: string | null; value?: string | null };
            preserveQueryString?: boolean | null;
            statusCode?:
              | "301"
              | "302"
              | "303"
              | "307"
              | "308"
              | (string & {})
              | null;
          } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "rewrite" | null;
        actionParameters?: {
          headers?: Record<string, unknown> | null;
          uri?:
            | {
                path: { expression?: string | null; value?: string | null };
                origin?: boolean | null;
              }
            | {
                query: { expression?: string | null; value?: string | null };
                origin?: boolean | null;
              }
            | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "route" | null;
        actionParameters?: {
          hostHeader?: string | null;
          origin?: { host?: string | null; port?: number | null } | null;
          sni?: { value: string } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "score" | null;
        actionParameters?: { increment: number } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "serve_error" | null;
        actionParameters?:
          | {
              content: string;
              contentType?:
                | "application/json"
                | "text/html"
                | "text/plain"
                | "text/xml"
                | (string & {})
                | null;
              statusCode?: number | null;
            }
          | {
              assetName: string;
              contentType?:
                | "application/json"
                | "text/html"
                | "text/plain"
                | "text/xml"
                | (string & {})
                | null;
              statusCode?: number | null;
            }
          | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "set_cache_control" | null;
        actionParameters?: {
          immutable?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          maxAge?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          mustRevalidate?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          mustUnderstand?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          noCache?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          noStore?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          noTransform?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          private?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          proxyRevalidate?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          public?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          sMaxage?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          staleIfError?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          staleWhileRevalidate?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "set_cache_settings" | null;
        actionParameters?: {
          additionalCacheablePorts?: number[] | null;
          browserTtl?: {
            mode:
              | "respect_origin"
              | "bypass_by_default"
              | "override_origin"
              | "bypass"
              | (string & {});
            default?: number | null;
          } | null;
          cache?: boolean | null;
          cacheKey?: {
            cacheByDeviceType?: boolean | null;
            cacheDeceptionArmor?: boolean | null;
            customKey?: {
              cookie?: {
                checkPresence?: string[] | null;
                include?: string[] | null;
              } | null;
              header?: {
                checkPresence?: string[] | null;
                contains?: Record<string, unknown> | null;
                excludeOrigin?: boolean | null;
                include?: string[] | null;
              } | null;
              host?: { resolved?: boolean | null } | null;
              queryString?: {
                exclude?: { all?: true | null; list?: string[] | null } | null;
                include?: { all?: true | null; list?: string[] | null } | null;
              } | null;
              user?: {
                deviceType?: boolean | null;
                geo?: boolean | null;
                lang?: boolean | null;
              } | null;
            } | null;
            ignoreQueryStringsOrder?: boolean | null;
          } | null;
          cacheReserve?: {
            eligible: boolean;
            minimumFileSize?: number | null;
          } | null;
          edgeTtl?: {
            mode:
              | "respect_origin"
              | "bypass_by_default"
              | "override_origin"
              | (string & {});
            default?: number | null;
            statusCodeTtl?:
              | {
                  value: number;
                  statusCode?: number | null;
                  statusCodeRange?: {
                    from?: number | null;
                    to?: number | null;
                  } | null;
                }[]
              | null;
          } | null;
          originCacheControl?: boolean | null;
          originErrorPagePassthru?: boolean | null;
          readTimeout?: number | null;
          respectStrongEtags?: boolean | null;
          serveStale?: { disableStaleWhileUpdating?: boolean | null } | null;
          sharedDictionary?: { matchPattern: string } | null;
          stripEtags?: boolean | null;
          stripLastModified?: boolean | null;
          stripSetCookie?: boolean | null;
          vary?: {
            default?: {
              action: "bypass" | "passthrough" | "normalize" | (string & {});
            } | null;
            headers?: Record<string, unknown> | null;
          } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "set_cache_tags" | null;
        actionParameters?:
          | {
              operation: "add" | "remove" | "set" | (string & {});
              values: string[];
            }
          | {
              expression: string;
              operation: "add" | "remove" | "set" | (string & {});
            }
          | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "set_config" | null;
        actionParameters?: {
          automaticHttpsRewrites?: boolean | null;
          autominify?: {
            css?: boolean | null;
            html?: boolean | null;
            js?: boolean | null;
          } | null;
          bic?: boolean | null;
          contentConverter?: boolean | null;
          disableApps?: true | null;
          disablePayPerCrawl?: true | null;
          disableRum?: true | null;
          disableZaraz?: true | null;
          emailObfuscation?: boolean | null;
          fonts?: boolean | null;
          hotlinkProtection?: boolean | null;
          mirage?: boolean | null;
          opportunisticEncryption?: boolean | null;
          polish?: "off" | "lossless" | "lossy" | "webp" | (string & {}) | null;
          redirectsForAiTraining?: boolean | null;
          requestBodyBuffering?:
            | "none"
            | "standard"
            | "full"
            | (string & {})
            | null;
          responseBodyBuffering?: "none" | "standard" | (string & {}) | null;
          rocketLoader?: boolean | null;
          securityLevel?:
            | "off"
            | "essentially_off"
            | "low"
            | "medium"
            | "high"
            | "under_attack"
            | (string & {})
            | null;
          serverSideExcludes?: boolean | null;
          ssl?:
            | "off"
            | "flexible"
            | "full"
            | "strict"
            | "origin_pull"
            | (string & {})
            | null;
          sxg?: boolean | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "skip" | null;
        actionParameters?: {
          phase?: "current" | null;
          phases?:
            | (
                | "ddos_l4"
                | "ddos_l7"
                | "http_config_settings"
                | "http_custom_errors"
                | "http_log_custom_fields"
                | "http_ratelimit"
                | "http_request_cache_settings"
                | "http_request_dynamic_redirect"
                | "http_request_firewall_custom"
                | "http_request_firewall_managed"
                | "http_request_late_transform"
                | "http_request_origin"
                | "http_request_redirect"
                | "http_request_sanitize"
                | "http_request_sbfm"
                | "http_request_transform"
                | "http_response_cache_settings"
                | "http_response_compression"
                | "http_response_firewall_managed"
                | "http_response_headers_transform"
                | "magic_transit"
                | "magic_transit_ids_managed"
                | "magic_transit_managed"
                | "magic_transit_ratelimit"
                | (string & {})
              )[]
            | null;
          products?:
            | (
                | "bic"
                | "hot"
                | "rateLimit"
                | "securityLevel"
                | "uaBlock"
                | "waf"
                | "zoneLockdown"
                | (string & {})
              )[]
            | null;
          rules?: Record<string, unknown> | null;
          ruleset?: "current" | null;
          rulesets?: string[] | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
  )[];
  /** The version of the ruleset. */
  version: string;
  /** An informative description of the ruleset. */
  description?: string | null;
}

export const DeleteRuleResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      kind: Schema.Union([
        Schema.Literals(["managed", "custom", "root", "zone"]),
        Schema.String,
      ]),
      lastUpdated: Schema.String,
      name: Schema.String,
      phase: Schema.Union([
        Schema.Literals([
          "ddos_l4",
          "ddos_l7",
          "http_config_settings",
          "http_custom_errors",
          "http_log_custom_fields",
          "http_ratelimit",
          "http_request_cache_settings",
          "http_request_dynamic_redirect",
          "http_request_firewall_custom",
          "http_request_firewall_managed",
          "http_request_late_transform",
          "http_request_origin",
          "http_request_redirect",
          "http_request_sanitize",
          "http_request_sbfm",
          "http_request_transform",
          "http_response_cache_settings",
          "http_response_compression",
          "http_response_firewall_managed",
          "http_response_headers_transform",
          "magic_transit",
          "magic_transit_ids_managed",
          "magic_transit_managed",
          "magic_transit_ratelimit",
        ]),
        Schema.String,
      ]),
      rules: Schema.Array(
        Schema.Union([
          BlockRule,
          RulesetsChallengeRule,
          CompressResponseRule,
          DdoSDynamicRule,
          ExecuteRule,
          ForceConnectionCloseRule,
          RulesetsJSChallengeRule,
          LogRule,
          LogCustomFieldRule,
          ManagedChallengeRule,
          RedirectRule2,
          RewriteRule,
          RouteRule,
          ScoreRule,
          ServeErrorRule,
          RulesetsSetCacheControlRule,
          SetCacheSettingsRule,
          RulesetsSetCacheTagsRule,
          SetConfigRule,
          SkipRule,
        ]),
      ),
      version: Schema.String,
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          kind: "kind",
          lastUpdated: "last_updated",
          name: "name",
          phase: "phase",
          rules: "rules",
          version: "version",
          description: "description",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteRuleResponse>;

export type DeleteRuleError = DefaultErrors;

export const deleteRuleForAccount: API.OperationMethod<
  DeleteRuleForAccountRequest,
  DeleteRuleResponse,
  DeleteRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteRuleForAccountRequest,
  output: DeleteRuleResponse,
  errors: [],
}));

export const deleteRuleForZone: API.OperationMethod<
  DeleteRuleForZoneRequest,
  DeleteRuleResponse,
  DeleteRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteRuleForZoneRequest,
  output: DeleteRuleResponse,
  errors: [],
}));

// =============================================================================
// Ruleset
// =============================================================================

const GetRulesetBaseFields = {
  rulesetId: Schema.String.pipe(T.HttpPath("rulesetId")),
} as const;

interface GetRulesetBaseRequest {
  rulesetId: string;
}

export interface GetRulesetForAccountRequest extends GetRulesetBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface GetRulesetForZoneRequest extends GetRulesetBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const GetRulesetForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...GetRulesetBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/rulesets/{rulesetId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetRulesetForAccountRequest>;

export const GetRulesetForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...GetRulesetBaseFields,
    }).pipe(
      T.Http({ method: "GET", path: "/zones/{zone_id}/rulesets/{rulesetId}" }),
    ),
  ) as unknown as Schema.Codec<GetRulesetForZoneRequest>;

export interface GetRulesetResponse {
  /** The unique ID of the ruleset. */
  id: string;
  /** The kind of the ruleset. */
  kind: "managed" | "custom" | "root" | "zone" | (string & {});
  /** The timestamp of when the ruleset was last modified. */
  lastUpdated: string;
  /** The human-readable name of the ruleset. */
  name: string;
  /** The phase of the ruleset. */
  phase:
    | "ddos_l4"
    | "ddos_l7"
    | "http_config_settings"
    | "http_custom_errors"
    | "http_log_custom_fields"
    | "http_ratelimit"
    | "http_request_cache_settings"
    | "http_request_dynamic_redirect"
    | "http_request_firewall_custom"
    | "http_request_firewall_managed"
    | "http_request_late_transform"
    | "http_request_origin"
    | "http_request_redirect"
    | "http_request_sanitize"
    | "http_request_sbfm"
    | "http_request_transform"
    | "http_response_cache_settings"
    | "http_response_compression"
    | "http_response_firewall_managed"
    | "http_response_headers_transform"
    | "magic_transit"
    | "magic_transit_ids_managed"
    | "magic_transit_managed"
    | "magic_transit_ratelimit"
    | (string & {});
  /** The list of rules in the ruleset. */
  rules?:
    | (
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "block" | null;
            actionParameters?: {
              response?: {
                content: string;
                contentType: string;
                statusCode: number;
              } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "challenge" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "compress_response" | null;
            actionParameters?: {
              algorithms: {
                name?:
                  | "none"
                  | "auto"
                  | "default"
                  | "gzip"
                  | "brotli"
                  | "zstd"
                  | (string & {})
                  | null;
              }[];
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "ddos_dynamic" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "execute" | null;
            actionParameters?: {
              id: string;
              matchedData?: { publicKey: string } | null;
              overrides?: {
                action?: string | null;
                categories?:
                  | {
                      category: string;
                      action?: string | null;
                      enabled?: boolean | null;
                      sensitivityLevel?:
                        | "default"
                        | "medium"
                        | "low"
                        | "eoff"
                        | (string & {})
                        | null;
                    }[]
                  | null;
                enabled?: boolean | null;
                rules?:
                  | {
                      id: string;
                      action?: string | null;
                      enabled?: boolean | null;
                      scoreThreshold?: number | null;
                      sensitivityLevel?:
                        | "default"
                        | "medium"
                        | "low"
                        | "eoff"
                        | (string & {})
                        | null;
                    }[]
                  | null;
                sensitivityLevel?:
                  | "default"
                  | "medium"
                  | "low"
                  | "eoff"
                  | (string & {})
                  | null;
              } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "force_connection_close" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "js_challenge" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "log" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "log_custom_field" | null;
            actionParameters?: {
              cookieFields?: { name: string }[] | null;
              rawResponseFields?:
                | { name: string; preserveDuplicates?: boolean | null }[]
                | null;
              requestFields?: { name: string }[] | null;
              responseFields?:
                | { name: string; preserveDuplicates?: boolean | null }[]
                | null;
              transformedRequestFields?: { name: string }[] | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "managed_challenge" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "redirect" | null;
            actionParameters?: {
              fromList?: { key: string; name: string } | null;
              fromValue?: {
                targetUrl: {
                  expression?: string | null;
                  value?: string | null;
                };
                preserveQueryString?: boolean | null;
                statusCode?:
                  | "301"
                  | "302"
                  | "303"
                  | "307"
                  | "308"
                  | (string & {})
                  | null;
              } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "rewrite" | null;
            actionParameters?: {
              headers?: Record<string, unknown> | null;
              uri?:
                | {
                    path: { expression?: string | null; value?: string | null };
                    origin?: boolean | null;
                  }
                | {
                    query: {
                      expression?: string | null;
                      value?: string | null;
                    };
                    origin?: boolean | null;
                  }
                | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "route" | null;
            actionParameters?: {
              hostHeader?: string | null;
              origin?: { host?: string | null; port?: number | null } | null;
              sni?: { value: string } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "score" | null;
            actionParameters?: { increment: number } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "serve_error" | null;
            actionParameters?:
              | {
                  content: string;
                  contentType?:
                    | "application/json"
                    | "text/html"
                    | "text/plain"
                    | "text/xml"
                    | (string & {})
                    | null;
                  statusCode?: number | null;
                }
              | {
                  assetName: string;
                  contentType?:
                    | "application/json"
                    | "text/html"
                    | "text/plain"
                    | "text/xml"
                    | (string & {})
                    | null;
                  statusCode?: number | null;
                }
              | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "set_cache_control" | null;
            actionParameters?: {
              immutable?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              maxAge?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              mustRevalidate?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              mustUnderstand?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              noCache?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              noStore?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              noTransform?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              private?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              proxyRevalidate?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              public?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              sMaxage?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              staleIfError?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              staleWhileRevalidate?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "set_cache_settings" | null;
            actionParameters?: {
              additionalCacheablePorts?: number[] | null;
              browserTtl?: {
                mode:
                  | "respect_origin"
                  | "bypass_by_default"
                  | "override_origin"
                  | "bypass"
                  | (string & {});
                default?: number | null;
              } | null;
              cache?: boolean | null;
              cacheKey?: {
                cacheByDeviceType?: boolean | null;
                cacheDeceptionArmor?: boolean | null;
                customKey?: {
                  cookie?: {
                    checkPresence?: string[] | null;
                    include?: string[] | null;
                  } | null;
                  header?: {
                    checkPresence?: string[] | null;
                    contains?: Record<string, unknown> | null;
                    excludeOrigin?: boolean | null;
                    include?: string[] | null;
                  } | null;
                  host?: { resolved?: boolean | null } | null;
                  queryString?: {
                    exclude?: {
                      all?: true | null;
                      list?: string[] | null;
                    } | null;
                    include?: {
                      all?: true | null;
                      list?: string[] | null;
                    } | null;
                  } | null;
                  user?: {
                    deviceType?: boolean | null;
                    geo?: boolean | null;
                    lang?: boolean | null;
                  } | null;
                } | null;
                ignoreQueryStringsOrder?: boolean | null;
              } | null;
              cacheReserve?: {
                eligible: boolean;
                minimumFileSize?: number | null;
              } | null;
              edgeTtl?: {
                mode:
                  | "respect_origin"
                  | "bypass_by_default"
                  | "override_origin"
                  | (string & {});
                default?: number | null;
                statusCodeTtl?:
                  | {
                      value: number;
                      statusCode?: number | null;
                      statusCodeRange?: {
                        from?: number | null;
                        to?: number | null;
                      } | null;
                    }[]
                  | null;
              } | null;
              originCacheControl?: boolean | null;
              originErrorPagePassthru?: boolean | null;
              readTimeout?: number | null;
              respectStrongEtags?: boolean | null;
              serveStale?: {
                disableStaleWhileUpdating?: boolean | null;
              } | null;
              sharedDictionary?: { matchPattern: string } | null;
              stripEtags?: boolean | null;
              stripLastModified?: boolean | null;
              stripSetCookie?: boolean | null;
              vary?: {
                default?: {
                  action:
                    | "bypass"
                    | "passthrough"
                    | "normalize"
                    | (string & {});
                } | null;
                headers?: Record<string, unknown> | null;
              } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "set_cache_tags" | null;
            actionParameters?:
              | {
                  operation: "add" | "remove" | "set" | (string & {});
                  values: string[];
                }
              | {
                  expression: string;
                  operation: "add" | "remove" | "set" | (string & {});
                }
              | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "set_config" | null;
            actionParameters?: {
              automaticHttpsRewrites?: boolean | null;
              autominify?: {
                css?: boolean | null;
                html?: boolean | null;
                js?: boolean | null;
              } | null;
              bic?: boolean | null;
              contentConverter?: boolean | null;
              disableApps?: true | null;
              disablePayPerCrawl?: true | null;
              disableRum?: true | null;
              disableZaraz?: true | null;
              emailObfuscation?: boolean | null;
              fonts?: boolean | null;
              hotlinkProtection?: boolean | null;
              mirage?: boolean | null;
              opportunisticEncryption?: boolean | null;
              polish?:
                | "off"
                | "lossless"
                | "lossy"
                | "webp"
                | (string & {})
                | null;
              redirectsForAiTraining?: boolean | null;
              requestBodyBuffering?:
                | "none"
                | "standard"
                | "full"
                | (string & {})
                | null;
              responseBodyBuffering?:
                | "none"
                | "standard"
                | (string & {})
                | null;
              rocketLoader?: boolean | null;
              securityLevel?:
                | "off"
                | "essentially_off"
                | "low"
                | "medium"
                | "high"
                | "under_attack"
                | (string & {})
                | null;
              serverSideExcludes?: boolean | null;
              ssl?:
                | "off"
                | "flexible"
                | "full"
                | "strict"
                | "origin_pull"
                | (string & {})
                | null;
              sxg?: boolean | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "skip" | null;
            actionParameters?: {
              phase?: "current" | null;
              phases?:
                | (
                    | "ddos_l4"
                    | "ddos_l7"
                    | "http_config_settings"
                    | "http_custom_errors"
                    | "http_log_custom_fields"
                    | "http_ratelimit"
                    | "http_request_cache_settings"
                    | "http_request_dynamic_redirect"
                    | "http_request_firewall_custom"
                    | "http_request_firewall_managed"
                    | "http_request_late_transform"
                    | "http_request_origin"
                    | "http_request_redirect"
                    | "http_request_sanitize"
                    | "http_request_sbfm"
                    | "http_request_transform"
                    | "http_response_cache_settings"
                    | "http_response_compression"
                    | "http_response_firewall_managed"
                    | "http_response_headers_transform"
                    | "magic_transit"
                    | "magic_transit_ids_managed"
                    | "magic_transit_managed"
                    | "magic_transit_ratelimit"
                    | (string & {})
                  )[]
                | null;
              products?:
                | (
                    | "bic"
                    | "hot"
                    | "rateLimit"
                    | "securityLevel"
                    | "uaBlock"
                    | "waf"
                    | "zoneLockdown"
                    | (string & {})
                  )[]
                | null;
              rules?: Record<string, unknown> | null;
              ruleset?: "current" | null;
              rulesets?: string[] | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
      )[]
    | null;
  /** The version of the ruleset. */
  version: string;
  /** An informative description of the ruleset. */
  description?: string | null;
}

export const GetRulesetResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      kind: Schema.Union([
        Schema.Literals(["managed", "custom", "root", "zone"]),
        Schema.String,
      ]),
      lastUpdated: Schema.String,
      name: Schema.String,
      phase: Schema.Union([
        Schema.Literals([
          "ddos_l4",
          "ddos_l7",
          "http_config_settings",
          "http_custom_errors",
          "http_log_custom_fields",
          "http_ratelimit",
          "http_request_cache_settings",
          "http_request_dynamic_redirect",
          "http_request_firewall_custom",
          "http_request_firewall_managed",
          "http_request_late_transform",
          "http_request_origin",
          "http_request_redirect",
          "http_request_sanitize",
          "http_request_sbfm",
          "http_request_transform",
          "http_response_cache_settings",
          "http_response_compression",
          "http_response_firewall_managed",
          "http_response_headers_transform",
          "magic_transit",
          "magic_transit_ids_managed",
          "magic_transit_managed",
          "magic_transit_ratelimit",
        ]),
        Schema.String,
      ]),
      rules: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              BlockRule,
              RulesetsChallengeRule,
              CompressResponseRule,
              DdoSDynamicRule,
              ExecuteRule,
              ForceConnectionCloseRule,
              RulesetsJSChallengeRule,
              LogRule,
              LogCustomFieldRule,
              ManagedChallengeRule,
              RedirectRule2,
              RewriteRule,
              RouteRule,
              ScoreRule,
              ServeErrorRule,
              RulesetsSetCacheControlRule,
              SetCacheSettingsRule,
              RulesetsSetCacheTagsRule,
              SetConfigRule,
              SkipRule,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      version: Schema.String,
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          kind: "kind",
          lastUpdated: "last_updated",
          name: "name",
          phase: "phase",
          rules: "rules",
          version: "version",
          description: "description",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetRulesetResponse>;

export type GetRulesetError = DefaultErrors | RulesetNotFound | Forbidden;

export const getRulesetForAccount: API.OperationMethod<
  GetRulesetForAccountRequest,
  GetRulesetResponse,
  GetRulesetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRulesetForAccountRequest,
  output: GetRulesetResponse,
  errors: [RulesetNotFound, Forbidden],
}));

export const getRulesetForZone: API.OperationMethod<
  GetRulesetForZoneRequest,
  GetRulesetResponse,
  GetRulesetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRulesetForZoneRequest,
  output: GetRulesetResponse,
  errors: [RulesetNotFound, Forbidden],
}));

const ListRulesetsBaseFields = {
  perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
  cursor: Schema.optional(Schema.String).pipe(T.HttpQuery("cursor")),
} as const;

interface ListRulesetsBaseRequest {
  perPage?: number;
  cursor?: string;
}

export interface ListRulesetsForAccountRequest extends ListRulesetsBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface ListRulesetsForZoneRequest extends ListRulesetsBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const ListRulesetsForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...ListRulesetsBaseFields,
    }).pipe(T.Http({ method: "GET", path: "/accounts/{account_id}/rulesets" })),
  ) as unknown as Schema.Codec<ListRulesetsForAccountRequest>;

export const ListRulesetsForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...ListRulesetsBaseFields,
    }).pipe(T.Http({ method: "GET", path: "/zones/{zone_id}/rulesets" })),
  ) as unknown as Schema.Codec<ListRulesetsForZoneRequest>;

export interface ListRulesetsResponse {
  result: {
    id: string;
    kind: "managed" | "custom" | "root" | "zone" | (string & {});
    lastUpdated: string;
    name: string;
    phase:
      | "ddos_l4"
      | "ddos_l7"
      | "http_config_settings"
      | "http_custom_errors"
      | "http_log_custom_fields"
      | "http_ratelimit"
      | "http_request_cache_settings"
      | "http_request_dynamic_redirect"
      | "http_request_firewall_custom"
      | "http_request_firewall_managed"
      | "http_request_late_transform"
      | "http_request_origin"
      | "http_request_redirect"
      | "http_request_sanitize"
      | "http_request_sbfm"
      | "http_request_transform"
      | "http_response_cache_settings"
      | "http_response_compression"
      | "http_response_firewall_managed"
      | "http_response_headers_transform"
      | "magic_transit"
      | "magic_transit_ids_managed"
      | "magic_transit_managed"
      | "magic_transit_ratelimit"
      | (string & {});
    version: string;
    description?: string | null;
  }[];
  resultInfo?: {
    count?: number | null;
    cursor?: string | null;
    perPage?: number | null;
  } | null;
}

export const ListRulesetsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(ListPhasVersionsResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListRulesetsResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListRulesetsResponse>;

export type ListRulesetsError = DefaultErrors;

export const listRulesetsForAccount: API.PaginatedOperationMethod<
  ListRulesetsForAccountRequest,
  ListRulesetsResponse,
  ListRulesetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListRulesetsForAccountRequest,
  output: ListRulesetsResponse,
  errors: [],
  pagination: {
    mode: "cursor",
    inputToken: "cursor",
    outputToken: "resultInfo.cursor",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export const listRulesetsForZone: API.PaginatedOperationMethod<
  ListRulesetsForZoneRequest,
  ListRulesetsResponse,
  ListRulesetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListRulesetsForZoneRequest,
  output: ListRulesetsResponse,
  errors: [],
  pagination: {
    mode: "cursor",
    inputToken: "cursor",
    outputToken: "resultInfo.cursor",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

const CreateRulesetBaseFields = {
  kind: Schema.Union([
    Schema.Literals(["managed", "custom", "root", "zone"]),
    Schema.String,
  ]),
  name: Schema.String,
  phase: Schema.Union([
    Schema.Literals([
      "ddos_l4",
      "ddos_l7",
      "http_config_settings",
      "http_custom_errors",
      "http_log_custom_fields",
      "http_ratelimit",
      "http_request_cache_settings",
      "http_request_dynamic_redirect",
      "http_request_firewall_custom",
      "http_request_firewall_managed",
      "http_request_late_transform",
      "http_request_origin",
      "http_request_redirect",
      "http_request_sanitize",
      "http_request_sbfm",
      "http_request_transform",
      "http_response_cache_settings",
      "http_response_compression",
      "http_response_firewall_managed",
      "http_response_headers_transform",
      "magic_transit",
      "magic_transit_ids_managed",
      "magic_transit_managed",
      "magic_transit_ratelimit",
    ]),
    Schema.String,
  ]),
  description: Schema.optional(Schema.String),
  rules: Schema.optional(
    Schema.Array(
      Schema.Union([
        BlockRuleParam,
        RulesetsChallengeRule2,
        CompressResponseRuleParam,
        DdoSDynamicRuleParam,
        ExecuteRuleParam,
        ForceConnectionCloseRuleParam,
        RulesetsJSChallengeRule2,
        LogRuleParam,
        LogCustomFieldRuleParam,
        ManagedChallengeRuleParam,
        RedirectRuleParam2,
        RewriteRuleParam,
        RouteRuleParam,
        ScoreRuleParam,
        ServeErrorRuleParam,
        RulesetsSetCacheControlRule2,
        SetCacheSettingsRuleParam,
        RulesetsSetCacheTagsRule2,
        SetConfigRuleParam,
        SkipRuleParam,
      ]),
    ),
  ),
} as const;

interface CreateRulesetBaseRequest {
  /** Body param: The kind of the ruleset. */
  kind: "managed" | "custom" | "root" | "zone" | (string & {});
  /** Body param: The human-readable name of the ruleset. */
  name: string;
  /** Body param: The phase of the ruleset. */
  phase:
    | "ddos_l4"
    | "ddos_l7"
    | "http_config_settings"
    | "http_custom_errors"
    | "http_log_custom_fields"
    | "http_ratelimit"
    | "http_request_cache_settings"
    | "http_request_dynamic_redirect"
    | "http_request_firewall_custom"
    | "http_request_firewall_managed"
    | "http_request_late_transform"
    | "http_request_origin"
    | "http_request_redirect"
    | "http_request_sanitize"
    | "http_request_sbfm"
    | "http_request_transform"
    | "http_response_cache_settings"
    | "http_response_compression"
    | "http_response_firewall_managed"
    | "http_response_headers_transform"
    | "magic_transit"
    | "magic_transit_ids_managed"
    | "magic_transit_managed"
    | "magic_transit_ratelimit"
    | (string & {});
  /** Body param: An informative description of the ruleset. */
  description?: string;
  /** Body param: The list of rules in the ruleset. */
  rules?: (
    | {
        id?: string;
        action?: "block";
        actionParameters?: {
          response?: {
            content: string;
            contentType: string;
            statusCode: number;
          };
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "challenge";
        actionParameters?: unknown;
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "compress_response";
        actionParameters?: {
          algorithms: {
            name?:
              | "none"
              | "auto"
              | "default"
              | "gzip"
              | "brotli"
              | "zstd"
              | (string & {});
          }[];
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "ddos_dynamic";
        actionParameters?: unknown;
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "execute";
        actionParameters?: {
          id: string;
          matchedData?: { publicKey: string };
          overrides?: {
            action?: string;
            categories?: {
              category: string;
              action?: string;
              enabled?: boolean;
              sensitivityLevel?:
                | "default"
                | "medium"
                | "low"
                | "eoff"
                | (string & {});
            }[];
            enabled?: boolean;
            rules?: {
              id: string;
              action?: string;
              enabled?: boolean;
              scoreThreshold?: number;
              sensitivityLevel?:
                | "default"
                | "medium"
                | "low"
                | "eoff"
                | (string & {});
            }[];
            sensitivityLevel?:
              | "default"
              | "medium"
              | "low"
              | "eoff"
              | (string & {});
          };
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "force_connection_close";
        actionParameters?: unknown;
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "js_challenge";
        actionParameters?: unknown;
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "log";
        actionParameters?: unknown;
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "log_custom_field";
        actionParameters?: {
          cookieFields?: { name: string }[];
          rawResponseFields?: { name: string; preserveDuplicates?: boolean }[];
          requestFields?: { name: string }[];
          responseFields?: { name: string; preserveDuplicates?: boolean }[];
          transformedRequestFields?: { name: string }[];
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "managed_challenge";
        actionParameters?: unknown;
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "redirect";
        actionParameters?: {
          fromList?: { key: string; name: string };
          fromValue?: {
            targetUrl: { expression?: string; value?: string };
            preserveQueryString?: boolean;
            statusCode?: "301" | "302" | "303" | "307" | "308" | (string & {});
          };
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "rewrite";
        actionParameters?: {
          headers?: Record<string, unknown>;
          uri?:
            | { path: { expression?: string; value?: string } }
            | { query: { expression?: string; value?: string } };
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "route";
        actionParameters?: {
          hostHeader?: string;
          origin?: { host?: string; port?: number };
          sni?: { value: string };
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "score";
        actionParameters?: { increment: number };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "serve_error";
        actionParameters?:
          | {
              content: string;
              contentType?:
                | "application/json"
                | "text/html"
                | "text/plain"
                | "text/xml"
                | (string & {});
              statusCode?: number;
            }
          | {
              assetName: string;
              contentType?:
                | "application/json"
                | "text/html"
                | "text/plain"
                | "text/xml"
                | (string & {});
              statusCode?: number;
            };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "set_cache_control";
        actionParameters?: {
          immutable?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          maxAge?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          mustRevalidate?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          mustUnderstand?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          noCache?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          noStore?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          noTransform?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          private?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          proxyRevalidate?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          public?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          sMaxage?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          staleIfError?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          staleWhileRevalidate?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "set_cache_settings";
        actionParameters?: {
          additionalCacheablePorts?: number[];
          browserTtl?: {
            mode:
              | "respect_origin"
              | "bypass_by_default"
              | "override_origin"
              | "bypass"
              | (string & {});
            default?: number;
          };
          cache?: boolean;
          cacheKey?: {
            cacheByDeviceType?: boolean;
            cacheDeceptionArmor?: boolean;
            customKey?: {
              cookie?: { checkPresence?: string[]; include?: string[] };
              header?: {
                checkPresence?: string[];
                contains?: Record<string, unknown>;
                excludeOrigin?: boolean;
                include?: string[];
              };
              host?: { resolved?: boolean };
              queryString?: {
                exclude?: { all?: true; list?: string[] };
                include?: { all?: true; list?: string[] };
              };
              user?: { deviceType?: boolean; geo?: boolean; lang?: boolean };
            };
            ignoreQueryStringsOrder?: boolean;
          };
          cacheReserve?: { eligible: boolean; minimumFileSize?: number };
          edgeTtl?: {
            mode:
              | "respect_origin"
              | "bypass_by_default"
              | "override_origin"
              | (string & {});
            default?: number;
            statusCodeTtl?: {
              value: number;
              statusCode?: number;
              statusCodeRange?: { from?: number; to?: number };
            }[];
          };
          originCacheControl?: boolean;
          originErrorPagePassthru?: boolean;
          readTimeout?: number;
          respectStrongEtags?: boolean;
          serveStale?: { disableStaleWhileUpdating?: boolean };
          sharedDictionary?: { matchPattern: string };
          stripEtags?: boolean;
          stripLastModified?: boolean;
          stripSetCookie?: boolean;
          vary?: {
            default?: {
              action: "bypass" | "passthrough" | "normalize" | (string & {});
            };
            headers?: Record<string, unknown>;
          };
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "set_cache_tags";
        actionParameters?:
          | {
              operation: "add" | "remove" | "set" | (string & {});
              values: string[];
            }
          | {
              expression: string;
              operation: "add" | "remove" | "set" | (string & {});
            };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "set_config";
        actionParameters?: {
          automaticHttpsRewrites?: boolean;
          autominify?: { css?: boolean; html?: boolean; js?: boolean };
          bic?: boolean;
          contentConverter?: boolean;
          disableApps?: true;
          disablePayPerCrawl?: true;
          disableRum?: true;
          disableZaraz?: true;
          emailObfuscation?: boolean;
          fonts?: boolean;
          hotlinkProtection?: boolean;
          mirage?: boolean;
          opportunisticEncryption?: boolean;
          polish?: "off" | "lossless" | "lossy" | "webp" | (string & {});
          redirectsForAiTraining?: boolean;
          requestBodyBuffering?: "none" | "standard" | "full" | (string & {});
          responseBodyBuffering?: "none" | "standard" | (string & {});
          rocketLoader?: boolean;
          securityLevel?:
            | "off"
            | "essentially_off"
            | "low"
            | "medium"
            | "high"
            | "under_attack"
            | (string & {});
          serverSideExcludes?: boolean;
          ssl?:
            | "off"
            | "flexible"
            | "full"
            | "strict"
            | "origin_pull"
            | (string & {});
          sxg?: boolean;
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "skip";
        actionParameters?: {
          phase?: "current";
          phases?: (
            | "ddos_l4"
            | "ddos_l7"
            | "http_config_settings"
            | "http_custom_errors"
            | "http_log_custom_fields"
            | "http_ratelimit"
            | "http_request_cache_settings"
            | "http_request_dynamic_redirect"
            | "http_request_firewall_custom"
            | "http_request_firewall_managed"
            | "http_request_late_transform"
            | "http_request_origin"
            | "http_request_redirect"
            | "http_request_sanitize"
            | "http_request_sbfm"
            | "http_request_transform"
            | "http_response_cache_settings"
            | "http_response_compression"
            | "http_response_firewall_managed"
            | "http_response_headers_transform"
            | "magic_transit"
            | "magic_transit_ids_managed"
            | "magic_transit_managed"
            | "magic_transit_ratelimit"
            | (string & {})
          )[];
          products?: (
            | "bic"
            | "hot"
            | "rateLimit"
            | "securityLevel"
            | "uaBlock"
            | "waf"
            | "zoneLockdown"
            | (string & {})
          )[];
          rules?: Record<string, unknown>;
          ruleset?: "current";
          rulesets?: string[];
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
  )[];
}

export interface CreateRulesetForAccountRequest extends CreateRulesetBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface CreateRulesetForZoneRequest extends CreateRulesetBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const CreateRulesetForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...CreateRulesetBaseFields,
    }).pipe(
      T.Http({ method: "POST", path: "/accounts/{account_id}/rulesets" }),
    ),
  ) as unknown as Schema.Codec<CreateRulesetForAccountRequest>;

export const CreateRulesetForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...CreateRulesetBaseFields,
    }).pipe(T.Http({ method: "POST", path: "/zones/{zone_id}/rulesets" })),
  ) as unknown as Schema.Codec<CreateRulesetForZoneRequest>;

export interface CreateRulesetResponse {
  /** The unique ID of the ruleset. */
  id: string;
  /** The kind of the ruleset. */
  kind: "managed" | "custom" | "root" | "zone" | (string & {});
  /** The timestamp of when the ruleset was last modified. */
  lastUpdated: string;
  /** The human-readable name of the ruleset. */
  name: string;
  /** The phase of the ruleset. */
  phase:
    | "ddos_l4"
    | "ddos_l7"
    | "http_config_settings"
    | "http_custom_errors"
    | "http_log_custom_fields"
    | "http_ratelimit"
    | "http_request_cache_settings"
    | "http_request_dynamic_redirect"
    | "http_request_firewall_custom"
    | "http_request_firewall_managed"
    | "http_request_late_transform"
    | "http_request_origin"
    | "http_request_redirect"
    | "http_request_sanitize"
    | "http_request_sbfm"
    | "http_request_transform"
    | "http_response_cache_settings"
    | "http_response_compression"
    | "http_response_firewall_managed"
    | "http_response_headers_transform"
    | "magic_transit"
    | "magic_transit_ids_managed"
    | "magic_transit_managed"
    | "magic_transit_ratelimit"
    | (string & {});
  /** The list of rules in the ruleset. */
  rules?:
    | (
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "block" | null;
            actionParameters?: {
              response?: {
                content: string;
                contentType: string;
                statusCode: number;
              } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "challenge" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "compress_response" | null;
            actionParameters?: {
              algorithms: {
                name?:
                  | "none"
                  | "auto"
                  | "default"
                  | "gzip"
                  | "brotli"
                  | "zstd"
                  | (string & {})
                  | null;
              }[];
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "ddos_dynamic" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "execute" | null;
            actionParameters?: {
              id: string;
              matchedData?: { publicKey: string } | null;
              overrides?: {
                action?: string | null;
                categories?:
                  | {
                      category: string;
                      action?: string | null;
                      enabled?: boolean | null;
                      sensitivityLevel?:
                        | "default"
                        | "medium"
                        | "low"
                        | "eoff"
                        | (string & {})
                        | null;
                    }[]
                  | null;
                enabled?: boolean | null;
                rules?:
                  | {
                      id: string;
                      action?: string | null;
                      enabled?: boolean | null;
                      scoreThreshold?: number | null;
                      sensitivityLevel?:
                        | "default"
                        | "medium"
                        | "low"
                        | "eoff"
                        | (string & {})
                        | null;
                    }[]
                  | null;
                sensitivityLevel?:
                  | "default"
                  | "medium"
                  | "low"
                  | "eoff"
                  | (string & {})
                  | null;
              } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "force_connection_close" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "js_challenge" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "log" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "log_custom_field" | null;
            actionParameters?: {
              cookieFields?: { name: string }[] | null;
              rawResponseFields?:
                | { name: string; preserveDuplicates?: boolean | null }[]
                | null;
              requestFields?: { name: string }[] | null;
              responseFields?:
                | { name: string; preserveDuplicates?: boolean | null }[]
                | null;
              transformedRequestFields?: { name: string }[] | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "managed_challenge" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "redirect" | null;
            actionParameters?: {
              fromList?: { key: string; name: string } | null;
              fromValue?: {
                targetUrl: {
                  expression?: string | null;
                  value?: string | null;
                };
                preserveQueryString?: boolean | null;
                statusCode?:
                  | "301"
                  | "302"
                  | "303"
                  | "307"
                  | "308"
                  | (string & {})
                  | null;
              } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "rewrite" | null;
            actionParameters?: {
              headers?: Record<string, unknown> | null;
              uri?:
                | {
                    path: { expression?: string | null; value?: string | null };
                    origin?: boolean | null;
                  }
                | {
                    query: {
                      expression?: string | null;
                      value?: string | null;
                    };
                    origin?: boolean | null;
                  }
                | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "route" | null;
            actionParameters?: {
              hostHeader?: string | null;
              origin?: { host?: string | null; port?: number | null } | null;
              sni?: { value: string } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "score" | null;
            actionParameters?: { increment: number } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "serve_error" | null;
            actionParameters?:
              | {
                  content: string;
                  contentType?:
                    | "application/json"
                    | "text/html"
                    | "text/plain"
                    | "text/xml"
                    | (string & {})
                    | null;
                  statusCode?: number | null;
                }
              | {
                  assetName: string;
                  contentType?:
                    | "application/json"
                    | "text/html"
                    | "text/plain"
                    | "text/xml"
                    | (string & {})
                    | null;
                  statusCode?: number | null;
                }
              | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "set_cache_control" | null;
            actionParameters?: {
              immutable?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              maxAge?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              mustRevalidate?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              mustUnderstand?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              noCache?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              noStore?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              noTransform?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              private?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              proxyRevalidate?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              public?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              sMaxage?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              staleIfError?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              staleWhileRevalidate?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "set_cache_settings" | null;
            actionParameters?: {
              additionalCacheablePorts?: number[] | null;
              browserTtl?: {
                mode:
                  | "respect_origin"
                  | "bypass_by_default"
                  | "override_origin"
                  | "bypass"
                  | (string & {});
                default?: number | null;
              } | null;
              cache?: boolean | null;
              cacheKey?: {
                cacheByDeviceType?: boolean | null;
                cacheDeceptionArmor?: boolean | null;
                customKey?: {
                  cookie?: {
                    checkPresence?: string[] | null;
                    include?: string[] | null;
                  } | null;
                  header?: {
                    checkPresence?: string[] | null;
                    contains?: Record<string, unknown> | null;
                    excludeOrigin?: boolean | null;
                    include?: string[] | null;
                  } | null;
                  host?: { resolved?: boolean | null } | null;
                  queryString?: {
                    exclude?: {
                      all?: true | null;
                      list?: string[] | null;
                    } | null;
                    include?: {
                      all?: true | null;
                      list?: string[] | null;
                    } | null;
                  } | null;
                  user?: {
                    deviceType?: boolean | null;
                    geo?: boolean | null;
                    lang?: boolean | null;
                  } | null;
                } | null;
                ignoreQueryStringsOrder?: boolean | null;
              } | null;
              cacheReserve?: {
                eligible: boolean;
                minimumFileSize?: number | null;
              } | null;
              edgeTtl?: {
                mode:
                  | "respect_origin"
                  | "bypass_by_default"
                  | "override_origin"
                  | (string & {});
                default?: number | null;
                statusCodeTtl?:
                  | {
                      value: number;
                      statusCode?: number | null;
                      statusCodeRange?: {
                        from?: number | null;
                        to?: number | null;
                      } | null;
                    }[]
                  | null;
              } | null;
              originCacheControl?: boolean | null;
              originErrorPagePassthru?: boolean | null;
              readTimeout?: number | null;
              respectStrongEtags?: boolean | null;
              serveStale?: {
                disableStaleWhileUpdating?: boolean | null;
              } | null;
              sharedDictionary?: { matchPattern: string } | null;
              stripEtags?: boolean | null;
              stripLastModified?: boolean | null;
              stripSetCookie?: boolean | null;
              vary?: {
                default?: {
                  action:
                    | "bypass"
                    | "passthrough"
                    | "normalize"
                    | (string & {});
                } | null;
                headers?: Record<string, unknown> | null;
              } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "set_cache_tags" | null;
            actionParameters?:
              | {
                  operation: "add" | "remove" | "set" | (string & {});
                  values: string[];
                }
              | {
                  expression: string;
                  operation: "add" | "remove" | "set" | (string & {});
                }
              | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "set_config" | null;
            actionParameters?: {
              automaticHttpsRewrites?: boolean | null;
              autominify?: {
                css?: boolean | null;
                html?: boolean | null;
                js?: boolean | null;
              } | null;
              bic?: boolean | null;
              contentConverter?: boolean | null;
              disableApps?: true | null;
              disablePayPerCrawl?: true | null;
              disableRum?: true | null;
              disableZaraz?: true | null;
              emailObfuscation?: boolean | null;
              fonts?: boolean | null;
              hotlinkProtection?: boolean | null;
              mirage?: boolean | null;
              opportunisticEncryption?: boolean | null;
              polish?:
                | "off"
                | "lossless"
                | "lossy"
                | "webp"
                | (string & {})
                | null;
              redirectsForAiTraining?: boolean | null;
              requestBodyBuffering?:
                | "none"
                | "standard"
                | "full"
                | (string & {})
                | null;
              responseBodyBuffering?:
                | "none"
                | "standard"
                | (string & {})
                | null;
              rocketLoader?: boolean | null;
              securityLevel?:
                | "off"
                | "essentially_off"
                | "low"
                | "medium"
                | "high"
                | "under_attack"
                | (string & {})
                | null;
              serverSideExcludes?: boolean | null;
              ssl?:
                | "off"
                | "flexible"
                | "full"
                | "strict"
                | "origin_pull"
                | (string & {})
                | null;
              sxg?: boolean | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "skip" | null;
            actionParameters?: {
              phase?: "current" | null;
              phases?:
                | (
                    | "ddos_l4"
                    | "ddos_l7"
                    | "http_config_settings"
                    | "http_custom_errors"
                    | "http_log_custom_fields"
                    | "http_ratelimit"
                    | "http_request_cache_settings"
                    | "http_request_dynamic_redirect"
                    | "http_request_firewall_custom"
                    | "http_request_firewall_managed"
                    | "http_request_late_transform"
                    | "http_request_origin"
                    | "http_request_redirect"
                    | "http_request_sanitize"
                    | "http_request_sbfm"
                    | "http_request_transform"
                    | "http_response_cache_settings"
                    | "http_response_compression"
                    | "http_response_firewall_managed"
                    | "http_response_headers_transform"
                    | "magic_transit"
                    | "magic_transit_ids_managed"
                    | "magic_transit_managed"
                    | "magic_transit_ratelimit"
                    | (string & {})
                  )[]
                | null;
              products?:
                | (
                    | "bic"
                    | "hot"
                    | "rateLimit"
                    | "securityLevel"
                    | "uaBlock"
                    | "waf"
                    | "zoneLockdown"
                    | (string & {})
                  )[]
                | null;
              rules?: Record<string, unknown> | null;
              ruleset?: "current" | null;
              rulesets?: string[] | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
      )[]
    | null;
  /** The version of the ruleset. */
  version: string;
  /** An informative description of the ruleset. */
  description?: string | null;
}

export const CreateRulesetResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      kind: Schema.Union([
        Schema.Literals(["managed", "custom", "root", "zone"]),
        Schema.String,
      ]),
      lastUpdated: Schema.String,
      name: Schema.String,
      phase: Schema.Union([
        Schema.Literals([
          "ddos_l4",
          "ddos_l7",
          "http_config_settings",
          "http_custom_errors",
          "http_log_custom_fields",
          "http_ratelimit",
          "http_request_cache_settings",
          "http_request_dynamic_redirect",
          "http_request_firewall_custom",
          "http_request_firewall_managed",
          "http_request_late_transform",
          "http_request_origin",
          "http_request_redirect",
          "http_request_sanitize",
          "http_request_sbfm",
          "http_request_transform",
          "http_response_cache_settings",
          "http_response_compression",
          "http_response_firewall_managed",
          "http_response_headers_transform",
          "magic_transit",
          "magic_transit_ids_managed",
          "magic_transit_managed",
          "magic_transit_ratelimit",
        ]),
        Schema.String,
      ]),
      rules: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              BlockRule,
              RulesetsChallengeRule,
              CompressResponseRule,
              DdoSDynamicRule,
              ExecuteRule,
              ForceConnectionCloseRule,
              RulesetsJSChallengeRule,
              LogRule,
              LogCustomFieldRule,
              ManagedChallengeRule,
              RedirectRule2,
              RewriteRule,
              RouteRule,
              ScoreRule,
              ServeErrorRule,
              RulesetsSetCacheControlRule,
              SetCacheSettingsRule,
              RulesetsSetCacheTagsRule,
              SetConfigRule,
              SkipRule,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      version: Schema.String,
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          kind: "kind",
          lastUpdated: "last_updated",
          name: "name",
          phase: "phase",
          rules: "rules",
          version: "version",
          description: "description",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateRulesetResponse>;

export type CreateRulesetError = DefaultErrors | PhaseNotEntitled | Forbidden;

export const createRulesetForAccount: API.OperationMethod<
  CreateRulesetForAccountRequest,
  CreateRulesetResponse,
  CreateRulesetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateRulesetForAccountRequest,
  output: CreateRulesetResponse,
  errors: [PhaseNotEntitled, Forbidden],
}));

export const createRulesetForZone: API.OperationMethod<
  CreateRulesetForZoneRequest,
  CreateRulesetResponse,
  CreateRulesetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateRulesetForZoneRequest,
  output: CreateRulesetResponse,
  errors: [PhaseNotEntitled, Forbidden],
}));

const UpdateRulesetBaseFields = {
  rulesetId: Schema.String.pipe(T.HttpPath("rulesetId")),
  description: Schema.optional(Schema.String),
  kind: Schema.optional(
    Schema.Union([
      Schema.Literals(["managed", "custom", "root", "zone"]),
      Schema.String,
    ]),
  ),
  name: Schema.optional(Schema.String),
  phase: Schema.optional(
    Schema.Union([
      Schema.Literals([
        "ddos_l4",
        "ddos_l7",
        "http_config_settings",
        "http_custom_errors",
        "http_log_custom_fields",
        "http_ratelimit",
        "http_request_cache_settings",
        "http_request_dynamic_redirect",
        "http_request_firewall_custom",
        "http_request_firewall_managed",
        "http_request_late_transform",
        "http_request_origin",
        "http_request_redirect",
        "http_request_sanitize",
        "http_request_sbfm",
        "http_request_transform",
        "http_response_cache_settings",
        "http_response_compression",
        "http_response_firewall_managed",
        "http_response_headers_transform",
        "magic_transit",
        "magic_transit_ids_managed",
        "magic_transit_managed",
        "magic_transit_ratelimit",
      ]),
      Schema.String,
    ]),
  ),
  rules: Schema.optional(
    Schema.Array(
      Schema.Union([
        BlockRuleParam,
        RulesetsChallengeRule2,
        CompressResponseRuleParam,
        DdoSDynamicRuleParam,
        ExecuteRuleParam,
        ForceConnectionCloseRuleParam,
        RulesetsJSChallengeRule2,
        LogRuleParam,
        LogCustomFieldRuleParam,
        ManagedChallengeRuleParam,
        RedirectRuleParam2,
        RewriteRuleParam,
        RouteRuleParam,
        ScoreRuleParam,
        ServeErrorRuleParam,
        RulesetsSetCacheControlRule2,
        SetCacheSettingsRuleParam,
        RulesetsSetCacheTagsRule2,
        SetConfigRuleParam,
        SkipRuleParam,
      ]),
    ),
  ),
} as const;

interface UpdateRulesetBaseRequest {
  rulesetId: string;
  /** Body param: An informative description of the ruleset. */
  description?: string;
  /** Body param: The kind of the ruleset. */
  kind?: "managed" | "custom" | "root" | "zone" | (string & {});
  /** Body param: The human-readable name of the ruleset. */
  name?: string;
  /** Body param: The phase of the ruleset. */
  phase?:
    | "ddos_l4"
    | "ddos_l7"
    | "http_config_settings"
    | "http_custom_errors"
    | "http_log_custom_fields"
    | "http_ratelimit"
    | "http_request_cache_settings"
    | "http_request_dynamic_redirect"
    | "http_request_firewall_custom"
    | "http_request_firewall_managed"
    | "http_request_late_transform"
    | "http_request_origin"
    | "http_request_redirect"
    | "http_request_sanitize"
    | "http_request_sbfm"
    | "http_request_transform"
    | "http_response_cache_settings"
    | "http_response_compression"
    | "http_response_firewall_managed"
    | "http_response_headers_transform"
    | "magic_transit"
    | "magic_transit_ids_managed"
    | "magic_transit_managed"
    | "magic_transit_ratelimit"
    | (string & {});
  /** Body param: The list of rules in the ruleset. */
  rules?: (
    | {
        id?: string;
        action?: "block";
        actionParameters?: {
          response?: {
            content: string;
            contentType: string;
            statusCode: number;
          };
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "challenge";
        actionParameters?: unknown;
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "compress_response";
        actionParameters?: {
          algorithms: {
            name?:
              | "none"
              | "auto"
              | "default"
              | "gzip"
              | "brotli"
              | "zstd"
              | (string & {});
          }[];
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "ddos_dynamic";
        actionParameters?: unknown;
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "execute";
        actionParameters?: {
          id: string;
          matchedData?: { publicKey: string };
          overrides?: {
            action?: string;
            categories?: {
              category: string;
              action?: string;
              enabled?: boolean;
              sensitivityLevel?:
                | "default"
                | "medium"
                | "low"
                | "eoff"
                | (string & {});
            }[];
            enabled?: boolean;
            rules?: {
              id: string;
              action?: string;
              enabled?: boolean;
              scoreThreshold?: number;
              sensitivityLevel?:
                | "default"
                | "medium"
                | "low"
                | "eoff"
                | (string & {});
            }[];
            sensitivityLevel?:
              | "default"
              | "medium"
              | "low"
              | "eoff"
              | (string & {});
          };
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "force_connection_close";
        actionParameters?: unknown;
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "js_challenge";
        actionParameters?: unknown;
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "log";
        actionParameters?: unknown;
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "log_custom_field";
        actionParameters?: {
          cookieFields?: { name: string }[];
          rawResponseFields?: { name: string; preserveDuplicates?: boolean }[];
          requestFields?: { name: string }[];
          responseFields?: { name: string; preserveDuplicates?: boolean }[];
          transformedRequestFields?: { name: string }[];
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "managed_challenge";
        actionParameters?: unknown;
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "redirect";
        actionParameters?: {
          fromList?: { key: string; name: string };
          fromValue?: {
            targetUrl: { expression?: string; value?: string };
            preserveQueryString?: boolean;
            statusCode?: "301" | "302" | "303" | "307" | "308" | (string & {});
          };
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "rewrite";
        actionParameters?: {
          headers?: Record<string, unknown>;
          uri?:
            | { path: { expression?: string; value?: string } }
            | { query: { expression?: string; value?: string } };
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "route";
        actionParameters?: {
          hostHeader?: string;
          origin?: { host?: string; port?: number };
          sni?: { value: string };
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "score";
        actionParameters?: { increment: number };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "serve_error";
        actionParameters?:
          | {
              content: string;
              contentType?:
                | "application/json"
                | "text/html"
                | "text/plain"
                | "text/xml"
                | (string & {});
              statusCode?: number;
            }
          | {
              assetName: string;
              contentType?:
                | "application/json"
                | "text/html"
                | "text/plain"
                | "text/xml"
                | (string & {});
              statusCode?: number;
            };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "set_cache_control";
        actionParameters?: {
          immutable?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          maxAge?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          mustRevalidate?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          mustUnderstand?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          noCache?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          noStore?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          noTransform?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          private?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          proxyRevalidate?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          public?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          sMaxage?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          staleIfError?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
          staleWhileRevalidate?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean;
          };
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "set_cache_settings";
        actionParameters?: {
          additionalCacheablePorts?: number[];
          browserTtl?: {
            mode:
              | "respect_origin"
              | "bypass_by_default"
              | "override_origin"
              | "bypass"
              | (string & {});
            default?: number;
          };
          cache?: boolean;
          cacheKey?: {
            cacheByDeviceType?: boolean;
            cacheDeceptionArmor?: boolean;
            customKey?: {
              cookie?: { checkPresence?: string[]; include?: string[] };
              header?: {
                checkPresence?: string[];
                contains?: Record<string, unknown>;
                excludeOrigin?: boolean;
                include?: string[];
              };
              host?: { resolved?: boolean };
              queryString?: {
                exclude?: { all?: true; list?: string[] };
                include?: { all?: true; list?: string[] };
              };
              user?: { deviceType?: boolean; geo?: boolean; lang?: boolean };
            };
            ignoreQueryStringsOrder?: boolean;
          };
          cacheReserve?: { eligible: boolean; minimumFileSize?: number };
          edgeTtl?: {
            mode:
              | "respect_origin"
              | "bypass_by_default"
              | "override_origin"
              | (string & {});
            default?: number;
            statusCodeTtl?: {
              value: number;
              statusCode?: number;
              statusCodeRange?: { from?: number; to?: number };
            }[];
          };
          originCacheControl?: boolean;
          originErrorPagePassthru?: boolean;
          readTimeout?: number;
          respectStrongEtags?: boolean;
          serveStale?: { disableStaleWhileUpdating?: boolean };
          sharedDictionary?: { matchPattern: string };
          stripEtags?: boolean;
          stripLastModified?: boolean;
          stripSetCookie?: boolean;
          vary?: {
            default?: {
              action: "bypass" | "passthrough" | "normalize" | (string & {});
            };
            headers?: Record<string, unknown>;
          };
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "set_cache_tags";
        actionParameters?:
          | {
              operation: "add" | "remove" | "set" | (string & {});
              values: string[];
            }
          | {
              expression: string;
              operation: "add" | "remove" | "set" | (string & {});
            };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "set_config";
        actionParameters?: {
          automaticHttpsRewrites?: boolean;
          autominify?: { css?: boolean; html?: boolean; js?: boolean };
          bic?: boolean;
          contentConverter?: boolean;
          disableApps?: true;
          disablePayPerCrawl?: true;
          disableRum?: true;
          disableZaraz?: true;
          emailObfuscation?: boolean;
          fonts?: boolean;
          hotlinkProtection?: boolean;
          mirage?: boolean;
          opportunisticEncryption?: boolean;
          polish?: "off" | "lossless" | "lossy" | "webp" | (string & {});
          redirectsForAiTraining?: boolean;
          requestBodyBuffering?: "none" | "standard" | "full" | (string & {});
          responseBodyBuffering?: "none" | "standard" | (string & {});
          rocketLoader?: boolean;
          securityLevel?:
            | "off"
            | "essentially_off"
            | "low"
            | "medium"
            | "high"
            | "under_attack"
            | (string & {});
          serverSideExcludes?: boolean;
          ssl?:
            | "off"
            | "flexible"
            | "full"
            | "strict"
            | "origin_pull"
            | (string & {});
          sxg?: boolean;
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
    | {
        id?: string;
        action?: "skip";
        actionParameters?: {
          phase?: "current";
          phases?: (
            | "ddos_l4"
            | "ddos_l7"
            | "http_config_settings"
            | "http_custom_errors"
            | "http_log_custom_fields"
            | "http_ratelimit"
            | "http_request_cache_settings"
            | "http_request_dynamic_redirect"
            | "http_request_firewall_custom"
            | "http_request_firewall_managed"
            | "http_request_late_transform"
            | "http_request_origin"
            | "http_request_redirect"
            | "http_request_sanitize"
            | "http_request_sbfm"
            | "http_request_transform"
            | "http_response_cache_settings"
            | "http_response_compression"
            | "http_response_firewall_managed"
            | "http_response_headers_transform"
            | "magic_transit"
            | "magic_transit_ids_managed"
            | "magic_transit_managed"
            | "magic_transit_ratelimit"
            | (string & {})
          )[];
          products?: (
            | "bic"
            | "hot"
            | "rateLimit"
            | "securityLevel"
            | "uaBlock"
            | "waf"
            | "zoneLockdown"
            | (string & {})
          )[];
          rules?: Record<string, unknown>;
          ruleset?: "current";
          rulesets?: string[];
        };
        description?: string;
        enabled?: boolean;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        };
        expression?: string;
        logging?: { enabled: boolean };
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string;
          mitigationTimeout?: number;
          requestsPerPeriod?: number;
          requestsToOrigin?: boolean;
          scorePerPeriod?: number;
          scoreResponseHeaderName?: string;
        };
        ref?: string;
      }
  )[];
}

export interface UpdateRulesetForAccountRequest extends UpdateRulesetBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface UpdateRulesetForZoneRequest extends UpdateRulesetBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const UpdateRulesetForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...UpdateRulesetBaseFields,
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/rulesets/{rulesetId}",
      }),
    ),
  ) as unknown as Schema.Codec<UpdateRulesetForAccountRequest>;

export const UpdateRulesetForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...UpdateRulesetBaseFields,
    }).pipe(
      T.Http({ method: "PUT", path: "/zones/{zone_id}/rulesets/{rulesetId}" }),
    ),
  ) as unknown as Schema.Codec<UpdateRulesetForZoneRequest>;

export interface UpdateRulesetResponse {
  /** The unique ID of the ruleset. */
  id: string;
  /** The kind of the ruleset. */
  kind: "managed" | "custom" | "root" | "zone" | (string & {});
  /** The timestamp of when the ruleset was last modified. */
  lastUpdated: string;
  /** The human-readable name of the ruleset. */
  name: string;
  /** The phase of the ruleset. */
  phase:
    | "ddos_l4"
    | "ddos_l7"
    | "http_config_settings"
    | "http_custom_errors"
    | "http_log_custom_fields"
    | "http_ratelimit"
    | "http_request_cache_settings"
    | "http_request_dynamic_redirect"
    | "http_request_firewall_custom"
    | "http_request_firewall_managed"
    | "http_request_late_transform"
    | "http_request_origin"
    | "http_request_redirect"
    | "http_request_sanitize"
    | "http_request_sbfm"
    | "http_request_transform"
    | "http_response_cache_settings"
    | "http_response_compression"
    | "http_response_firewall_managed"
    | "http_response_headers_transform"
    | "magic_transit"
    | "magic_transit_ids_managed"
    | "magic_transit_managed"
    | "magic_transit_ratelimit"
    | (string & {});
  /** The list of rules in the ruleset. */
  rules?:
    | (
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "block" | null;
            actionParameters?: {
              response?: {
                content: string;
                contentType: string;
                statusCode: number;
              } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "challenge" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "compress_response" | null;
            actionParameters?: {
              algorithms: {
                name?:
                  | "none"
                  | "auto"
                  | "default"
                  | "gzip"
                  | "brotli"
                  | "zstd"
                  | (string & {})
                  | null;
              }[];
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "ddos_dynamic" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "execute" | null;
            actionParameters?: {
              id: string;
              matchedData?: { publicKey: string } | null;
              overrides?: {
                action?: string | null;
                categories?:
                  | {
                      category: string;
                      action?: string | null;
                      enabled?: boolean | null;
                      sensitivityLevel?:
                        | "default"
                        | "medium"
                        | "low"
                        | "eoff"
                        | (string & {})
                        | null;
                    }[]
                  | null;
                enabled?: boolean | null;
                rules?:
                  | {
                      id: string;
                      action?: string | null;
                      enabled?: boolean | null;
                      scoreThreshold?: number | null;
                      sensitivityLevel?:
                        | "default"
                        | "medium"
                        | "low"
                        | "eoff"
                        | (string & {})
                        | null;
                    }[]
                  | null;
                sensitivityLevel?:
                  | "default"
                  | "medium"
                  | "low"
                  | "eoff"
                  | (string & {})
                  | null;
              } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "force_connection_close" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "js_challenge" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "log" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "log_custom_field" | null;
            actionParameters?: {
              cookieFields?: { name: string }[] | null;
              rawResponseFields?:
                | { name: string; preserveDuplicates?: boolean | null }[]
                | null;
              requestFields?: { name: string }[] | null;
              responseFields?:
                | { name: string; preserveDuplicates?: boolean | null }[]
                | null;
              transformedRequestFields?: { name: string }[] | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "managed_challenge" | null;
            actionParameters?: unknown | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "redirect" | null;
            actionParameters?: {
              fromList?: { key: string; name: string } | null;
              fromValue?: {
                targetUrl: {
                  expression?: string | null;
                  value?: string | null;
                };
                preserveQueryString?: boolean | null;
                statusCode?:
                  | "301"
                  | "302"
                  | "303"
                  | "307"
                  | "308"
                  | (string & {})
                  | null;
              } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "rewrite" | null;
            actionParameters?: {
              headers?: Record<string, unknown> | null;
              uri?:
                | {
                    path: { expression?: string | null; value?: string | null };
                    origin?: boolean | null;
                  }
                | {
                    query: {
                      expression?: string | null;
                      value?: string | null;
                    };
                    origin?: boolean | null;
                  }
                | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "route" | null;
            actionParameters?: {
              hostHeader?: string | null;
              origin?: { host?: string | null; port?: number | null } | null;
              sni?: { value: string } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "score" | null;
            actionParameters?: { increment: number } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "serve_error" | null;
            actionParameters?:
              | {
                  content: string;
                  contentType?:
                    | "application/json"
                    | "text/html"
                    | "text/plain"
                    | "text/xml"
                    | (string & {})
                    | null;
                  statusCode?: number | null;
                }
              | {
                  assetName: string;
                  contentType?:
                    | "application/json"
                    | "text/html"
                    | "text/plain"
                    | "text/xml"
                    | (string & {})
                    | null;
                  statusCode?: number | null;
                }
              | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "set_cache_control" | null;
            actionParameters?: {
              immutable?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              maxAge?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              mustRevalidate?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              mustUnderstand?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              noCache?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              noStore?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              noTransform?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              private?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              proxyRevalidate?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              public?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              sMaxage?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              staleIfError?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
              staleWhileRevalidate?: {
                operation: "set" | "remove" | (string & {});
                cloudflareOnly?: boolean | null;
              } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "set_cache_settings" | null;
            actionParameters?: {
              additionalCacheablePorts?: number[] | null;
              browserTtl?: {
                mode:
                  | "respect_origin"
                  | "bypass_by_default"
                  | "override_origin"
                  | "bypass"
                  | (string & {});
                default?: number | null;
              } | null;
              cache?: boolean | null;
              cacheKey?: {
                cacheByDeviceType?: boolean | null;
                cacheDeceptionArmor?: boolean | null;
                customKey?: {
                  cookie?: {
                    checkPresence?: string[] | null;
                    include?: string[] | null;
                  } | null;
                  header?: {
                    checkPresence?: string[] | null;
                    contains?: Record<string, unknown> | null;
                    excludeOrigin?: boolean | null;
                    include?: string[] | null;
                  } | null;
                  host?: { resolved?: boolean | null } | null;
                  queryString?: {
                    exclude?: {
                      all?: true | null;
                      list?: string[] | null;
                    } | null;
                    include?: {
                      all?: true | null;
                      list?: string[] | null;
                    } | null;
                  } | null;
                  user?: {
                    deviceType?: boolean | null;
                    geo?: boolean | null;
                    lang?: boolean | null;
                  } | null;
                } | null;
                ignoreQueryStringsOrder?: boolean | null;
              } | null;
              cacheReserve?: {
                eligible: boolean;
                minimumFileSize?: number | null;
              } | null;
              edgeTtl?: {
                mode:
                  | "respect_origin"
                  | "bypass_by_default"
                  | "override_origin"
                  | (string & {});
                default?: number | null;
                statusCodeTtl?:
                  | {
                      value: number;
                      statusCode?: number | null;
                      statusCodeRange?: {
                        from?: number | null;
                        to?: number | null;
                      } | null;
                    }[]
                  | null;
              } | null;
              originCacheControl?: boolean | null;
              originErrorPagePassthru?: boolean | null;
              readTimeout?: number | null;
              respectStrongEtags?: boolean | null;
              serveStale?: {
                disableStaleWhileUpdating?: boolean | null;
              } | null;
              sharedDictionary?: { matchPattern: string } | null;
              stripEtags?: boolean | null;
              stripLastModified?: boolean | null;
              stripSetCookie?: boolean | null;
              vary?: {
                default?: {
                  action:
                    | "bypass"
                    | "passthrough"
                    | "normalize"
                    | (string & {});
                } | null;
                headers?: Record<string, unknown> | null;
              } | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "set_cache_tags" | null;
            actionParameters?:
              | {
                  operation: "add" | "remove" | "set" | (string & {});
                  values: string[];
                }
              | {
                  expression: string;
                  operation: "add" | "remove" | "set" | (string & {});
                }
              | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "set_config" | null;
            actionParameters?: {
              automaticHttpsRewrites?: boolean | null;
              autominify?: {
                css?: boolean | null;
                html?: boolean | null;
                js?: boolean | null;
              } | null;
              bic?: boolean | null;
              contentConverter?: boolean | null;
              disableApps?: true | null;
              disablePayPerCrawl?: true | null;
              disableRum?: true | null;
              disableZaraz?: true | null;
              emailObfuscation?: boolean | null;
              fonts?: boolean | null;
              hotlinkProtection?: boolean | null;
              mirage?: boolean | null;
              opportunisticEncryption?: boolean | null;
              polish?:
                | "off"
                | "lossless"
                | "lossy"
                | "webp"
                | (string & {})
                | null;
              redirectsForAiTraining?: boolean | null;
              requestBodyBuffering?:
                | "none"
                | "standard"
                | "full"
                | (string & {})
                | null;
              responseBodyBuffering?:
                | "none"
                | "standard"
                | (string & {})
                | null;
              rocketLoader?: boolean | null;
              securityLevel?:
                | "off"
                | "essentially_off"
                | "low"
                | "medium"
                | "high"
                | "under_attack"
                | (string & {})
                | null;
              serverSideExcludes?: boolean | null;
              ssl?:
                | "off"
                | "flexible"
                | "full"
                | "strict"
                | "origin_pull"
                | (string & {})
                | null;
              sxg?: boolean | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
        | {
            lastUpdated: string;
            version: string;
            id?: string | null;
            action?: "skip" | null;
            actionParameters?: {
              phase?: "current" | null;
              phases?:
                | (
                    | "ddos_l4"
                    | "ddos_l7"
                    | "http_config_settings"
                    | "http_custom_errors"
                    | "http_log_custom_fields"
                    | "http_ratelimit"
                    | "http_request_cache_settings"
                    | "http_request_dynamic_redirect"
                    | "http_request_firewall_custom"
                    | "http_request_firewall_managed"
                    | "http_request_late_transform"
                    | "http_request_origin"
                    | "http_request_redirect"
                    | "http_request_sanitize"
                    | "http_request_sbfm"
                    | "http_request_transform"
                    | "http_response_cache_settings"
                    | "http_response_compression"
                    | "http_response_firewall_managed"
                    | "http_response_headers_transform"
                    | "magic_transit"
                    | "magic_transit_ids_managed"
                    | "magic_transit_managed"
                    | "magic_transit_ratelimit"
                    | (string & {})
                  )[]
                | null;
              products?:
                | (
                    | "bic"
                    | "hot"
                    | "rateLimit"
                    | "securityLevel"
                    | "uaBlock"
                    | "waf"
                    | "zoneLockdown"
                    | (string & {})
                  )[]
                | null;
              rules?: Record<string, unknown> | null;
              ruleset?: "current" | null;
              rulesets?: string[] | null;
            } | null;
            categories?: string[] | null;
            description?: string | null;
            enabled?: boolean | null;
            exposedCredentialCheck?: {
              passwordExpression: string;
              usernameExpression: string;
            } | null;
            expression?: string | null;
            logging?: { enabled: boolean } | null;
            ratelimit?: {
              characteristics: string[];
              period: number;
              countingExpression?: string | null;
              mitigationTimeout?: number | null;
              requestsPerPeriod?: number | null;
              requestsToOrigin?: boolean | null;
              scorePerPeriod?: number | null;
              scoreResponseHeaderName?: string | null;
            } | null;
            ref?: string | null;
          }
      )[]
    | null;
  /** The version of the ruleset. */
  version: string;
  /** An informative description of the ruleset. */
  description?: string | null;
}

export const UpdateRulesetResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      kind: Schema.Union([
        Schema.Literals(["managed", "custom", "root", "zone"]),
        Schema.String,
      ]),
      lastUpdated: Schema.String,
      name: Schema.String,
      phase: Schema.Union([
        Schema.Literals([
          "ddos_l4",
          "ddos_l7",
          "http_config_settings",
          "http_custom_errors",
          "http_log_custom_fields",
          "http_ratelimit",
          "http_request_cache_settings",
          "http_request_dynamic_redirect",
          "http_request_firewall_custom",
          "http_request_firewall_managed",
          "http_request_late_transform",
          "http_request_origin",
          "http_request_redirect",
          "http_request_sanitize",
          "http_request_sbfm",
          "http_request_transform",
          "http_response_cache_settings",
          "http_response_compression",
          "http_response_firewall_managed",
          "http_response_headers_transform",
          "magic_transit",
          "magic_transit_ids_managed",
          "magic_transit_managed",
          "magic_transit_ratelimit",
        ]),
        Schema.String,
      ]),
      rules: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              BlockRule,
              RulesetsChallengeRule,
              CompressResponseRule,
              DdoSDynamicRule,
              ExecuteRule,
              ForceConnectionCloseRule,
              RulesetsJSChallengeRule,
              LogRule,
              LogCustomFieldRule,
              ManagedChallengeRule,
              RedirectRule2,
              RewriteRule,
              RouteRule,
              ScoreRule,
              ServeErrorRule,
              RulesetsSetCacheControlRule,
              SetCacheSettingsRule,
              RulesetsSetCacheTagsRule,
              SetConfigRule,
              SkipRule,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      version: Schema.String,
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          kind: "kind",
          lastUpdated: "last_updated",
          name: "name",
          phase: "phase",
          rules: "rules",
          version: "version",
          description: "description",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<UpdateRulesetResponse>;

export type UpdateRulesetError = DefaultErrors | RulesetNotFound | Forbidden;

export const updateRulesetForAccount: API.OperationMethod<
  UpdateRulesetForAccountRequest,
  UpdateRulesetResponse,
  UpdateRulesetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateRulesetForAccountRequest,
  output: UpdateRulesetResponse,
  errors: [RulesetNotFound, Forbidden],
}));

export const updateRulesetForZone: API.OperationMethod<
  UpdateRulesetForZoneRequest,
  UpdateRulesetResponse,
  UpdateRulesetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateRulesetForZoneRequest,
  output: UpdateRulesetResponse,
  errors: [RulesetNotFound, Forbidden],
}));

const DeleteRulesetBaseFields = {
  rulesetId: Schema.String.pipe(T.HttpPath("rulesetId")),
} as const;

interface DeleteRulesetBaseRequest {
  rulesetId: string;
}

export interface DeleteRulesetForAccountRequest extends DeleteRulesetBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface DeleteRulesetForZoneRequest extends DeleteRulesetBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const DeleteRulesetForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...DeleteRulesetBaseFields,
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/rulesets/{rulesetId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteRulesetForAccountRequest>;

export const DeleteRulesetForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...DeleteRulesetBaseFields,
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/rulesets/{rulesetId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteRulesetForZoneRequest>;

export type DeleteRulesetResponse = unknown;

export const DeleteRulesetResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () => Schema.Unknown,
) as unknown as Schema.Codec<DeleteRulesetResponse>;

export type DeleteRulesetError = DefaultErrors | RulesetNotFound | Forbidden;

export const deleteRulesetForAccount: API.OperationMethod<
  DeleteRulesetForAccountRequest,
  DeleteRulesetResponse,
  DeleteRulesetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteRulesetForAccountRequest,
  output: DeleteRulesetResponse,
  errors: [RulesetNotFound, Forbidden],
}));

export const deleteRulesetForZone: API.OperationMethod<
  DeleteRulesetForZoneRequest,
  DeleteRulesetResponse,
  DeleteRulesetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteRulesetForZoneRequest,
  output: DeleteRulesetResponse,
  errors: [RulesetNotFound, Forbidden],
}));

// =============================================================================
// Version
// =============================================================================

const GetVersionBaseFields = {
  rulesetId: Schema.String.pipe(T.HttpPath("rulesetId")),
  rulesetVersion: Schema.String.pipe(T.HttpPath("rulesetVersion")),
} as const;

interface GetVersionBaseRequest {
  rulesetId: string;
  rulesetVersion: string;
}

export interface GetVersionForAccountRequest extends GetVersionBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface GetVersionForZoneRequest extends GetVersionBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const GetVersionForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...GetVersionBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/rulesets/{rulesetId}/versions/{rulesetVersion}",
      }),
    ),
  ) as unknown as Schema.Codec<GetVersionForAccountRequest>;

export const GetVersionForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...GetVersionBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/rulesets/{rulesetId}/versions/{rulesetVersion}",
      }),
    ),
  ) as unknown as Schema.Codec<GetVersionForZoneRequest>;

export interface GetVersionResponse {
  /** The unique ID of the ruleset. */
  id: string;
  /** The kind of the ruleset. */
  kind: "managed" | "custom" | "root" | "zone" | (string & {});
  /** The timestamp of when the ruleset was last modified. */
  lastUpdated: string;
  /** The human-readable name of the ruleset. */
  name: string;
  /** The phase of the ruleset. */
  phase:
    | "ddos_l4"
    | "ddos_l7"
    | "http_config_settings"
    | "http_custom_errors"
    | "http_log_custom_fields"
    | "http_ratelimit"
    | "http_request_cache_settings"
    | "http_request_dynamic_redirect"
    | "http_request_firewall_custom"
    | "http_request_firewall_managed"
    | "http_request_late_transform"
    | "http_request_origin"
    | "http_request_redirect"
    | "http_request_sanitize"
    | "http_request_sbfm"
    | "http_request_transform"
    | "http_response_cache_settings"
    | "http_response_compression"
    | "http_response_firewall_managed"
    | "http_response_headers_transform"
    | "magic_transit"
    | "magic_transit_ids_managed"
    | "magic_transit_managed"
    | "magic_transit_ratelimit"
    | (string & {});
  /** The list of rules in the ruleset. */
  rules: (
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "block" | null;
        actionParameters?: {
          response?: {
            content: string;
            contentType: string;
            statusCode: number;
          } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "challenge" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "compress_response" | null;
        actionParameters?: {
          algorithms: {
            name?:
              | "none"
              | "auto"
              | "default"
              | "gzip"
              | "brotli"
              | "zstd"
              | (string & {})
              | null;
          }[];
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "ddos_dynamic" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "execute" | null;
        actionParameters?: {
          id: string;
          matchedData?: { publicKey: string } | null;
          overrides?: {
            action?: string | null;
            categories?:
              | {
                  category: string;
                  action?: string | null;
                  enabled?: boolean | null;
                  sensitivityLevel?:
                    | "default"
                    | "medium"
                    | "low"
                    | "eoff"
                    | (string & {})
                    | null;
                }[]
              | null;
            enabled?: boolean | null;
            rules?:
              | {
                  id: string;
                  action?: string | null;
                  enabled?: boolean | null;
                  scoreThreshold?: number | null;
                  sensitivityLevel?:
                    | "default"
                    | "medium"
                    | "low"
                    | "eoff"
                    | (string & {})
                    | null;
                }[]
              | null;
            sensitivityLevel?:
              | "default"
              | "medium"
              | "low"
              | "eoff"
              | (string & {})
              | null;
          } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "force_connection_close" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "js_challenge" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "log" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "log_custom_field" | null;
        actionParameters?: {
          cookieFields?: { name: string }[] | null;
          rawResponseFields?:
            | { name: string; preserveDuplicates?: boolean | null }[]
            | null;
          requestFields?: { name: string }[] | null;
          responseFields?:
            | { name: string; preserveDuplicates?: boolean | null }[]
            | null;
          transformedRequestFields?: { name: string }[] | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "managed_challenge" | null;
        actionParameters?: unknown | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "redirect" | null;
        actionParameters?: {
          fromList?: { key: string; name: string } | null;
          fromValue?: {
            targetUrl: { expression?: string | null; value?: string | null };
            preserveQueryString?: boolean | null;
            statusCode?:
              | "301"
              | "302"
              | "303"
              | "307"
              | "308"
              | (string & {})
              | null;
          } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "rewrite" | null;
        actionParameters?: {
          headers?: Record<string, unknown> | null;
          uri?:
            | {
                path: { expression?: string | null; value?: string | null };
                origin?: boolean | null;
              }
            | {
                query: { expression?: string | null; value?: string | null };
                origin?: boolean | null;
              }
            | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "route" | null;
        actionParameters?: {
          hostHeader?: string | null;
          origin?: { host?: string | null; port?: number | null } | null;
          sni?: { value: string } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "score" | null;
        actionParameters?: { increment: number } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "serve_error" | null;
        actionParameters?:
          | {
              content: string;
              contentType?:
                | "application/json"
                | "text/html"
                | "text/plain"
                | "text/xml"
                | (string & {})
                | null;
              statusCode?: number | null;
            }
          | {
              assetName: string;
              contentType?:
                | "application/json"
                | "text/html"
                | "text/plain"
                | "text/xml"
                | (string & {})
                | null;
              statusCode?: number | null;
            }
          | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "set_cache_control" | null;
        actionParameters?: {
          immutable?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          maxAge?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          mustRevalidate?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          mustUnderstand?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          noCache?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          noStore?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          noTransform?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          private?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          proxyRevalidate?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          public?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          sMaxage?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          staleIfError?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
          staleWhileRevalidate?: {
            operation: "set" | "remove" | (string & {});
            cloudflareOnly?: boolean | null;
          } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "set_cache_settings" | null;
        actionParameters?: {
          additionalCacheablePorts?: number[] | null;
          browserTtl?: {
            mode:
              | "respect_origin"
              | "bypass_by_default"
              | "override_origin"
              | "bypass"
              | (string & {});
            default?: number | null;
          } | null;
          cache?: boolean | null;
          cacheKey?: {
            cacheByDeviceType?: boolean | null;
            cacheDeceptionArmor?: boolean | null;
            customKey?: {
              cookie?: {
                checkPresence?: string[] | null;
                include?: string[] | null;
              } | null;
              header?: {
                checkPresence?: string[] | null;
                contains?: Record<string, unknown> | null;
                excludeOrigin?: boolean | null;
                include?: string[] | null;
              } | null;
              host?: { resolved?: boolean | null } | null;
              queryString?: {
                exclude?: { all?: true | null; list?: string[] | null } | null;
                include?: { all?: true | null; list?: string[] | null } | null;
              } | null;
              user?: {
                deviceType?: boolean | null;
                geo?: boolean | null;
                lang?: boolean | null;
              } | null;
            } | null;
            ignoreQueryStringsOrder?: boolean | null;
          } | null;
          cacheReserve?: {
            eligible: boolean;
            minimumFileSize?: number | null;
          } | null;
          edgeTtl?: {
            mode:
              | "respect_origin"
              | "bypass_by_default"
              | "override_origin"
              | (string & {});
            default?: number | null;
            statusCodeTtl?:
              | {
                  value: number;
                  statusCode?: number | null;
                  statusCodeRange?: {
                    from?: number | null;
                    to?: number | null;
                  } | null;
                }[]
              | null;
          } | null;
          originCacheControl?: boolean | null;
          originErrorPagePassthru?: boolean | null;
          readTimeout?: number | null;
          respectStrongEtags?: boolean | null;
          serveStale?: { disableStaleWhileUpdating?: boolean | null } | null;
          sharedDictionary?: { matchPattern: string } | null;
          stripEtags?: boolean | null;
          stripLastModified?: boolean | null;
          stripSetCookie?: boolean | null;
          vary?: {
            default?: {
              action: "bypass" | "passthrough" | "normalize" | (string & {});
            } | null;
            headers?: Record<string, unknown> | null;
          } | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "set_cache_tags" | null;
        actionParameters?:
          | {
              operation: "add" | "remove" | "set" | (string & {});
              values: string[];
            }
          | {
              expression: string;
              operation: "add" | "remove" | "set" | (string & {});
            }
          | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "set_config" | null;
        actionParameters?: {
          automaticHttpsRewrites?: boolean | null;
          autominify?: {
            css?: boolean | null;
            html?: boolean | null;
            js?: boolean | null;
          } | null;
          bic?: boolean | null;
          contentConverter?: boolean | null;
          disableApps?: true | null;
          disablePayPerCrawl?: true | null;
          disableRum?: true | null;
          disableZaraz?: true | null;
          emailObfuscation?: boolean | null;
          fonts?: boolean | null;
          hotlinkProtection?: boolean | null;
          mirage?: boolean | null;
          opportunisticEncryption?: boolean | null;
          polish?: "off" | "lossless" | "lossy" | "webp" | (string & {}) | null;
          redirectsForAiTraining?: boolean | null;
          requestBodyBuffering?:
            | "none"
            | "standard"
            | "full"
            | (string & {})
            | null;
          responseBodyBuffering?: "none" | "standard" | (string & {}) | null;
          rocketLoader?: boolean | null;
          securityLevel?:
            | "off"
            | "essentially_off"
            | "low"
            | "medium"
            | "high"
            | "under_attack"
            | (string & {})
            | null;
          serverSideExcludes?: boolean | null;
          ssl?:
            | "off"
            | "flexible"
            | "full"
            | "strict"
            | "origin_pull"
            | (string & {})
            | null;
          sxg?: boolean | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
    | {
        lastUpdated: string;
        version: string;
        id?: string | null;
        action?: "skip" | null;
        actionParameters?: {
          phase?: "current" | null;
          phases?:
            | (
                | "ddos_l4"
                | "ddos_l7"
                | "http_config_settings"
                | "http_custom_errors"
                | "http_log_custom_fields"
                | "http_ratelimit"
                | "http_request_cache_settings"
                | "http_request_dynamic_redirect"
                | "http_request_firewall_custom"
                | "http_request_firewall_managed"
                | "http_request_late_transform"
                | "http_request_origin"
                | "http_request_redirect"
                | "http_request_sanitize"
                | "http_request_sbfm"
                | "http_request_transform"
                | "http_response_cache_settings"
                | "http_response_compression"
                | "http_response_firewall_managed"
                | "http_response_headers_transform"
                | "magic_transit"
                | "magic_transit_ids_managed"
                | "magic_transit_managed"
                | "magic_transit_ratelimit"
                | (string & {})
              )[]
            | null;
          products?:
            | (
                | "bic"
                | "hot"
                | "rateLimit"
                | "securityLevel"
                | "uaBlock"
                | "waf"
                | "zoneLockdown"
                | (string & {})
              )[]
            | null;
          rules?: Record<string, unknown> | null;
          ruleset?: "current" | null;
          rulesets?: string[] | null;
        } | null;
        categories?: string[] | null;
        description?: string | null;
        enabled?: boolean | null;
        exposedCredentialCheck?: {
          passwordExpression: string;
          usernameExpression: string;
        } | null;
        expression?: string | null;
        logging?: { enabled: boolean } | null;
        ratelimit?: {
          characteristics: string[];
          period: number;
          countingExpression?: string | null;
          mitigationTimeout?: number | null;
          requestsPerPeriod?: number | null;
          requestsToOrigin?: boolean | null;
          scorePerPeriod?: number | null;
          scoreResponseHeaderName?: string | null;
        } | null;
        ref?: string | null;
      }
  )[];
  /** The version of the ruleset. */
  version: string;
  /** An informative description of the ruleset. */
  description?: string | null;
}

export const GetVersionResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      kind: Schema.Union([
        Schema.Literals(["managed", "custom", "root", "zone"]),
        Schema.String,
      ]),
      lastUpdated: Schema.String,
      name: Schema.String,
      phase: Schema.Union([
        Schema.Literals([
          "ddos_l4",
          "ddos_l7",
          "http_config_settings",
          "http_custom_errors",
          "http_log_custom_fields",
          "http_ratelimit",
          "http_request_cache_settings",
          "http_request_dynamic_redirect",
          "http_request_firewall_custom",
          "http_request_firewall_managed",
          "http_request_late_transform",
          "http_request_origin",
          "http_request_redirect",
          "http_request_sanitize",
          "http_request_sbfm",
          "http_request_transform",
          "http_response_cache_settings",
          "http_response_compression",
          "http_response_firewall_managed",
          "http_response_headers_transform",
          "magic_transit",
          "magic_transit_ids_managed",
          "magic_transit_managed",
          "magic_transit_ratelimit",
        ]),
        Schema.String,
      ]),
      rules: Schema.Array(
        Schema.Union([
          BlockRule,
          RulesetsChallengeRule,
          CompressResponseRule,
          DdoSDynamicRule,
          ExecuteRule,
          ForceConnectionCloseRule,
          RulesetsJSChallengeRule,
          LogRule,
          LogCustomFieldRule,
          ManagedChallengeRule,
          RedirectRule2,
          RewriteRule,
          RouteRule,
          ScoreRule,
          ServeErrorRule,
          RulesetsSetCacheControlRule,
          SetCacheSettingsRule,
          RulesetsSetCacheTagsRule,
          SetConfigRule,
          SkipRule,
        ]),
      ),
      version: Schema.String,
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          kind: "kind",
          lastUpdated: "last_updated",
          name: "name",
          phase: "phase",
          rules: "rules",
          version: "version",
          description: "description",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetVersionResponse>;

export type GetVersionError = DefaultErrors;

export const getVersionForAccount: API.OperationMethod<
  GetVersionForAccountRequest,
  GetVersionResponse,
  GetVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetVersionForAccountRequest,
  output: GetVersionResponse,
  errors: [],
}));

export const getVersionForZone: API.OperationMethod<
  GetVersionForZoneRequest,
  GetVersionResponse,
  GetVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetVersionForZoneRequest,
  output: GetVersionResponse,
  errors: [],
}));

const ListVersionsBaseFields = {
  rulesetId: Schema.String.pipe(T.HttpPath("rulesetId")),
} as const;

interface ListVersionsBaseRequest {
  rulesetId: string;
}

export interface ListVersionsForAccountRequest extends ListVersionsBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface ListVersionsForZoneRequest extends ListVersionsBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const ListVersionsForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...ListVersionsBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/rulesets/{rulesetId}/versions",
      }),
    ),
  ) as unknown as Schema.Codec<ListVersionsForAccountRequest>;

export const ListVersionsForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...ListVersionsBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/rulesets/{rulesetId}/versions",
      }),
    ),
  ) as unknown as Schema.Codec<ListVersionsForZoneRequest>;

export interface ListVersionsResponse {
  result: {
    id: string;
    kind: "managed" | "custom" | "root" | "zone" | (string & {});
    lastUpdated: string;
    name: string;
    phase:
      | "ddos_l4"
      | "ddos_l7"
      | "http_config_settings"
      | "http_custom_errors"
      | "http_log_custom_fields"
      | "http_ratelimit"
      | "http_request_cache_settings"
      | "http_request_dynamic_redirect"
      | "http_request_firewall_custom"
      | "http_request_firewall_managed"
      | "http_request_late_transform"
      | "http_request_origin"
      | "http_request_redirect"
      | "http_request_sanitize"
      | "http_request_sbfm"
      | "http_request_transform"
      | "http_response_cache_settings"
      | "http_response_compression"
      | "http_response_firewall_managed"
      | "http_response_headers_transform"
      | "magic_transit"
      | "magic_transit_ids_managed"
      | "magic_transit_managed"
      | "magic_transit_ratelimit"
      | (string & {});
    version: string;
    description?: string | null;
  }[];
}

export const ListVersionsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(ListPhasVersionsResponseResult),
    }),
) as unknown as Schema.Codec<ListVersionsResponse>;

export type ListVersionsError = DefaultErrors;

export const listVersionsForAccount: API.PaginatedOperationMethod<
  ListVersionsForAccountRequest,
  ListVersionsResponse,
  ListVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListVersionsForAccountRequest,
  output: ListVersionsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export const listVersionsForZone: API.PaginatedOperationMethod<
  ListVersionsForZoneRequest,
  ListVersionsResponse,
  ListVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListVersionsForZoneRequest,
  output: ListVersionsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

const DeleteVersionBaseFields = {
  rulesetId: Schema.String.pipe(T.HttpPath("rulesetId")),
  rulesetVersion: Schema.String.pipe(T.HttpPath("rulesetVersion")),
} as const;

interface DeleteVersionBaseRequest {
  rulesetId: string;
  rulesetVersion: string;
}

export interface DeleteVersionForAccountRequest extends DeleteVersionBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface DeleteVersionForZoneRequest extends DeleteVersionBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const DeleteVersionForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...DeleteVersionBaseFields,
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/rulesets/{rulesetId}/versions/{rulesetVersion}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteVersionForAccountRequest>;

export const DeleteVersionForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...DeleteVersionBaseFields,
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/rulesets/{rulesetId}/versions/{rulesetVersion}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteVersionForZoneRequest>;

export type DeleteVersionResponse = unknown;

export const DeleteVersionResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () => Schema.Unknown,
) as unknown as Schema.Codec<DeleteVersionResponse>;

export type DeleteVersionError = DefaultErrors;

export const deleteVersionForAccount: API.OperationMethod<
  DeleteVersionForAccountRequest,
  DeleteVersionResponse,
  DeleteVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteVersionForAccountRequest,
  output: DeleteVersionResponse,
  errors: [],
}));

export const deleteVersionForZone: API.OperationMethod<
  DeleteVersionForZoneRequest,
  DeleteVersionResponse,
  DeleteVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteVersionForZoneRequest,
  output: DeleteVersionResponse,
  errors: [],
}));
