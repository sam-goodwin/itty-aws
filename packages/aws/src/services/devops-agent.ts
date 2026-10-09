import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as stream from "effect/Stream";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "DevOps Agent",
  serviceShapeName: "DevOpsAgent",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "aidevops" });
const ver = /*@__PURE__*/ T.ServiceVersion("2026-01-01");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { UseFIPS = false, Endpoint, Region } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  if (Endpoint != null) {
    if (UseFIPS === true) {
      return err("Invalid Configuration: FIPS and custom endpoint are not supported");
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true) {
          return e(
            `https://aidevops-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        return e(`https://aidevops.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ContentSizeExceededException
  extends /*@__PURE__*/ S.TaggedError<ContentSizeExceededException>()(
    "ContentSizeExceededException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(413),
  ).pipe(C.withBadRequestError) {}
export class IdentityCenterServiceException
  extends /*@__PURE__*/ S.TaggedError<IdentityCenterServiceException>()(
    "IdentityCenterServiceException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      underlyingErrorCode: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class InvalidParameterException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterException>()(
    "InvalidParameterException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(429), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()("ValidationException", {
    message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
    fieldList: /*@__PURE__*/ S.optional(
      /*@__PURE__*/ S.suspend(() => ValidationExceptionFieldList).annotate({
        identifier: "ValidationExceptionFieldList",
      }),
    ),
  }) {}
export type AgentSpaceId = string;
export type ServiceId = string;
export type SourceAccountType = "source" | (string & {});
const SourceAccountType = S.String;

export type RoleArn = string;
export type ValidationStatus = "valid" | "invalid" | "pending-confirmation" | (string & {});
const ValidationStatus = S.String;

export interface SourceAwsConfiguration {
  accountId: string;
  accountType: SourceAccountType;
  assumableRoleArn: string;
  externalId?: string;
  agentElevatedRoleArn?: string;
  agentElevatedRoleArnStatus?: ValidationStatus;
}
const SourceAwsConfiguration = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<SourceAwsConfiguration>;
export type MonitorAccountType = "monitor" | (string & {});
const MonitorAccountType = S.String;

export interface AWSConfiguration {
  assumableRoleArn: string;
  accountId: string;
  accountType: MonitorAccountType;
  agentElevatedRoleArn?: string;
  agentElevatedRoleArnStatus?: ValidationStatus;
}
const AWSConfiguration = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<AWSConfiguration>;
export type GithubRepoOwnerType = "organization" | "user" | (string & {});
const GithubRepoOwnerType = S.String;

export interface GitHubConfiguration {
  repoName: string;
  repoId: string;
  owner: string;
  ownerType: GithubRepoOwnerType;
  instanceIdentifier?: string;
  runtimeRoleArn?: string;
}
const GitHubConfiguration = /*@__PURE__*/ __L.at(__c0, 2) as any as S.Schema<GitHubConfiguration>;
export interface SlackChannel {
  channelName?: string;
  channelId: string;
}
const SlackChannel = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<SlackChannel>;
export interface SlackTransmissionTarget {
  opsOncallTarget: SlackChannel;
  opsSRETarget?: SlackChannel;
}
const SlackTransmissionTarget = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<SlackTransmissionTarget>;
export interface SlackBidirectionalConfiguration {
  roleArn: string;
  enabled?: boolean;
}
const SlackBidirectionalConfiguration = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<SlackBidirectionalConfiguration>;
export interface SlackConfiguration {
  workspaceId: string;
  workspaceName: string;
  transmissionTarget: SlackTransmissionTarget;
  bidirectional?: SlackBidirectionalConfiguration;
}
const SlackConfiguration = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<SlackConfiguration>;
export type DynatraceResourceList = string[];
const DynatraceResourceList = /*@__PURE__*/ __L.at(__c0, 7);
export interface DynatraceConfiguration {
  envId: string;
  resources?: string[];
}
const DynatraceConfiguration = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<DynatraceConfiguration>;
export type ServiceNowAuthenticationScopeList = string[];
const ServiceNowAuthenticationScopeList =
  DynatraceResourceList as any as S.Schema<ServiceNowAuthenticationScopeList>;
export interface ServiceNowConfiguration {
  instanceId?: string;
  authScopes?: string[];
}
const ServiceNowConfiguration = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<ServiceNowConfiguration>;
export interface MCPServerNewRelicConfiguration {
  accountId: string;
  endpoint: string;
}
const MCPServerNewRelicConfiguration = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<MCPServerNewRelicConfiguration>;
export type ToolClassification = "READ_ONLY" | "MUTATIVE" | "DESTRUCTIVE" | (string & {});
const ToolClassification = S.String;

export interface MCPToolDetail {
  name: string;
  toolClassification?: ToolClassification;
}
const MCPToolDetail = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<MCPToolDetail>;
export type MCPToolDetailsList = MCPToolDetail[];
const MCPToolDetailsList = /*@__PURE__*/ __L.at(__c1, 4);
export interface MCPServerDatadogConfiguration {
  enabledElevatedTools?: MCPToolDetail[];
}
const MCPServerDatadogConfiguration = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<MCPServerDatadogConfiguration>;
export type MCPToolsList = string[];
const MCPToolsList = DynatraceResourceList as any as S.Schema<MCPToolsList>;
export interface MCPServerConfiguration {
  tools: string[];
  toolDetails?: MCPToolDetail[];
}
const MCPServerConfiguration = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<MCPServerConfiguration>;
export interface GitLabConfiguration {
  projectId: string;
  projectPath: string;
  instanceIdentifier?: string;
  runtimeRoleArn?: string;
}
const GitLabConfiguration = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<GitLabConfiguration>;
export interface MCPServerSplunkConfiguration {}
const MCPServerSplunkConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<MCPServerSplunkConfiguration>;
export interface EventChannelConfiguration {}
const EventChannelConfiguration =
  MCPServerSplunkConfiguration as any as S.Schema<EventChannelConfiguration>;
export interface AzureConfiguration {
  subscriptionId: string;
}
const AzureConfiguration = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<AzureConfiguration>;
export interface AzureDevOpsConfiguration {
  organizationName: string;
  projectId: string;
  projectName: string;
}
const AzureDevOpsConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<AzureDevOpsConfiguration>;
export interface MCPServerGrafanaConfiguration {
  endpoint: string;
  organizationId?: string;
  tools?: string[];
  enabledElevatedTools?: MCPToolDetail[];
}
const MCPServerGrafanaConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<MCPServerGrafanaConfiguration>;
export type PagerDutyServicesList = string[];
const PagerDutyServicesList = DynatraceResourceList as any as S.Schema<PagerDutyServicesList>;
export type EmailAddress = string | redacted.Redacted<string>;
export interface PagerDutyConfiguration {
  services: string[];
  customerEmail: string | redacted.Redacted<string>;
}
const PagerDutyConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<PagerDutyConfiguration>;
export interface MCPServerSigV4Configuration {
  tools: string[];
  toolDetails?: MCPToolDetail[];
}
const MCPServerSigV4Configuration = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<MCPServerSigV4Configuration>;
export interface RemoteAgentConfiguration {}
const RemoteAgentConfiguration =
  MCPServerSplunkConfiguration as any as S.Schema<RemoteAgentConfiguration>;
export interface RemoteAgentSigV4Configuration {}
const RemoteAgentSigV4Configuration =
  MCPServerSplunkConfiguration as any as S.Schema<RemoteAgentSigV4Configuration>;
export type ServiceConfiguration =
  | {
      sourceAws: SourceAwsConfiguration;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      sourceAws?: never;
      aws: AWSConfiguration;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github: GitHubConfiguration;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack: SlackConfiguration;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace: DynatraceConfiguration;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow: ServiceNowConfiguration;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic: MCPServerNewRelicConfiguration;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog: MCPServerDatadogConfiguration;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver: MCPServerConfiguration;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab: GitLabConfiguration;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk: MCPServerSplunkConfiguration;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel: EventChannelConfiguration;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure: AzureConfiguration;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops: AzureDevOpsConfiguration;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana: MCPServerGrafanaConfiguration;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty: PagerDutyConfiguration;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4: MCPServerSigV4Configuration;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent: RemoteAgentConfiguration;
      remoteagentsigv4?: never;
    }
  | {
      sourceAws?: never;
      aws?: never;
      github?: never;
      slack?: never;
      dynatrace?: never;
      servicenow?: never;
      mcpservernewrelic?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      eventChannel?: never;
      azure?: never;
      azuredevops?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4: RemoteAgentSigV4Configuration;
    };
const ServiceConfiguration = /*@__PURE__*/ __L.at(__c2, 6);
export type CapabilityType =
  | "RELEASE_READINESS_REVIEW"
  | "RELEASE_READINESS_REVIEW_AUTOMATED_TESTING"
  | (string & {});
const CapabilityType = S.String;

export type TriggerEvent = "PULL_REQUEST_READY_FOR_REVIEW" | "PULL_REQUEST_DRAFT" | (string & {});
const TriggerEvent = S.String;

export type TriggerEventList = TriggerEvent[];
const TriggerEventList = /*@__PURE__*/ __L.at(__c2, 7);
export type TriggerRegexPattern = string;
export type TriggerRegexPatternList = string[];
const TriggerRegexPatternList = DynatraceResourceList as any as S.Schema<TriggerRegexPatternList>;
export interface PatternFilter {
  patterns: string[];
}
const PatternFilter = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<PatternFilter>;
export interface TriggerFilterGroup {
  events?: TriggerEvent[];
  targetBranches?: PatternFilter;
}
const TriggerFilterGroup = /*@__PURE__*/ __L.at(__c3, 1) as any as S.Schema<TriggerFilterGroup>;
export type TriggerFilterGroups = TriggerFilterGroup[];
const TriggerFilterGroups = /*@__PURE__*/ __L.at(__c3, 2);
export interface CapabilityConfiguration {
  enabled?: boolean;
  triggerFilterGroups?: TriggerFilterGroup[];
}
const CapabilityConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<CapabilityConfiguration>;
export type AssociationCapabilities = { [key in CapabilityType]?: CapabilityConfiguration };
const AssociationCapabilities = /*@__PURE__*/ __L.at(__c3, 4);
export interface AssociateServiceInput {
  agentSpaceId: string;
  serviceId: string;
  configuration: ServiceConfiguration;
  capabilities?: { [key: string]: CapabilityConfiguration | undefined };
}
const AssociateServiceInput = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<AssociateServiceInput>;
export type AssociationId = string;
export interface Association {
  agentSpaceId: string;
  createdAt: Date;
  updatedAt: Date;
  status?: ValidationStatus;
  associationId: string;
  serviceId: string;
  configuration: ServiceConfiguration;
  capabilities?: { [key: string]: CapabilityConfiguration | undefined };
}
const Association = /*@__PURE__*/ __L.at(__c3, 6) as any as S.Schema<Association>;
export type WebhookType = "hmac" | "apikey" | "gitlab" | "pagerduty" | (string & {});
const WebhookType = S.String;

export type WebhookSecret = string | redacted.Redacted<string>;
export type ApiKeyValue = string | redacted.Redacted<string>;
export interface GenericWebhook {
  webhookUrl?: string;
  webhookId?: string;
  webhookType?: WebhookType;
  webhookSecret?: string | redacted.Redacted<string>;
  apiKey?: string | redacted.Redacted<string>;
}
const GenericWebhook = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<GenericWebhook>;
export interface AssociateServiceOutput {
  association: Association;
  webhook?: GenericWebhook;
}
const AssociateServiceOutput = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<AssociateServiceOutput>;
export type AgentSpaceName = string;
export type Description = string | redacted.Redacted<string>;
export type Locale = string;
export type KmsKeyArn = string;
export type TagKey = string;
export type TagValue = string;
export type Tags = { [key: string]: string | undefined };
const Tags = /*@__PURE__*/ __L.at(__c4, 1);
export type AgentSpacePreferenceKey = "elevatedActionsEnabled" | (string & {});
const AgentSpacePreferenceKey = S.String;

export type AgentSpacePreferences = { [key in AgentSpacePreferenceKey]?: boolean };
const AgentSpacePreferences = /*@__PURE__*/ __L.at(__c4, 2);
export interface CreateAgentSpaceInput {
  name: string;
  description?: string | redacted.Redacted<string>;
  locale?: string;
  kmsKeyArn?: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
  preferences?: { [key: string]: boolean | undefined };
}
const CreateAgentSpaceInput = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<CreateAgentSpaceInput>;
export interface AgentSpace {
  name: string;
  description?: string | redacted.Redacted<string>;
  locale?: string;
  createdAt: Date;
  updatedAt: Date;
  kmsKeyArn?: string;
  agentSpaceId: string;
  preferences?: { [key: string]: boolean | undefined };
}
const AgentSpace = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<AgentSpace>;
export interface CreateAgentSpaceOutput {
  agentSpace: AgentSpace;
  tags?: { [key: string]: string | undefined };
}
const CreateAgentSpaceOutput = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<CreateAgentSpaceOutput>;
export type AgentSpaceIdentifier = string;
export type AssetType = string;
export type AssetFilePath = string;
export type AssetFileBytes = Uint8Array;
export type AssetFileText = string;
export type AssetFileBody = { bytes: Uint8Array; text?: never } | { bytes?: never; text: string };
const AssetFileBody = /*@__PURE__*/ __L.at(__c4, 6);
export interface AssetFileContent {
  path: string;
  body: AssetFileBody;
  metadata?: any;
}
const AssetFileContent = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<AssetFileContent>;
export type AssetZipBytes = Uint8Array;
export interface AssetZipContent {
  zipFile: Uint8Array;
}
const AssetZipContent = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<AssetZipContent>;
export type AssetContentUrl = string;
export interface AssetSourceUrlContent {
  url: string;
}
const AssetSourceUrlContent = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<AssetSourceUrlContent>;
export type AssetContent =
  | { file: AssetFileContent; zip?: never; sourceUrl?: never }
  | { file?: never; zip: AssetZipContent; sourceUrl?: never }
  | { file?: never; zip?: never; sourceUrl: AssetSourceUrlContent };
const AssetContent = /*@__PURE__*/ __L.at(__c5, 2);
export interface CreateAssetRequest {
  agentSpaceId: string;
  assetType: string;
  metadata?: any;
  content: AssetContent;
  clientToken?: string;
}
const CreateAssetRequest = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<CreateAssetRequest>;
export type ResourceId = string;
export interface Asset {
  assetId: string;
  assetType: string;
  metadata: any;
  version: number;
  createdAt: Date;
  updatedAt: Date;
}
const Asset = /*@__PURE__*/ __L.at(__c5, 4) as any as S.Schema<Asset>;
export interface CreateAssetResponse {
  asset: Asset;
}
const CreateAssetResponse = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<CreateAssetResponse>;
export interface CreateAssetFileRequest {
  agentSpaceId: string;
  assetId: string;
  path: string;
  content: AssetFileBody;
  metadata?: any;
  clientToken?: string;
}
const CreateAssetFileRequest = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<CreateAssetFileRequest>;
export interface AssetFile {
  path: string;
  content: AssetFileBody;
  metadata?: any;
  version: number;
  createdAt: Date;
  updatedAt: Date;
}
const AssetFile = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<AssetFile>;
export interface CreateAssetFileResponse {
  file: AssetFile;
}
const CreateAssetFileResponse = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<CreateAssetFileResponse>;
export interface ReferenceInput {
  system: string;
  title?: string;
  referenceId: string;
  referenceUrl: string;
  associationId: string;
}
const ReferenceInput = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<ReferenceInput>;
export type TaskType =
  | "INVESTIGATION"
  | "EVALUATION"
  | "RELEASE_READINESS_REVIEW"
  | "RELEASE_TESTING"
  | (string & {});
const TaskType = S.String;

export type BacklogTaskTitle = string;
export type BacklogTaskDescription = string;
export type Priority = "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | "MINIMAL" | (string & {});
const Priority = S.String;

export interface CreateBacklogTaskRequest {
  agentSpaceId: string;
  reference?: ReferenceInput;
  taskType: TaskType;
  title: string;
  description?: string;
  priority: Priority;
  clientToken?: string;
}
const CreateBacklogTaskRequest = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<CreateBacklogTaskRequest>;
export interface ReferenceOutput {
  system: string;
  title?: string;
  referenceId: string;
  referenceUrl: string;
  associationId: string;
}
const ReferenceOutput = ReferenceInput as any as S.Schema<ReferenceOutput>;
export type TaskStatus =
  | "PENDING_TRIAGE"
  | "LINKED"
  | "PENDING_START"
  | "IN_PROGRESS"
  | "PENDING_CUSTOMER_APPROVAL"
  | "COMPLETED"
  | "FAILED"
  | "TIMED_OUT"
  | "CANCELED"
  | "SKIPPED"
  | "WAITING"
  | (string & {});
const TaskStatus = S.String;

export type BackLogTimestamp = Date;
export interface Task {
  agentSpaceId: string;
  taskId: string;
  executionId?: string;
  title: string;
  description?: string;
  reference?: ReferenceOutput;
  taskType: TaskType;
  priority: Priority;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  supportMetadata?: any;
  metadata?: any;
  primaryTaskId?: string;
  statusReason?: string;
  hasLinkedTasks?: boolean;
}
const Task = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<Task>;
export interface CreateBacklogTaskResponse {
  task: Task;
}
const CreateBacklogTaskResponse = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<CreateBacklogTaskResponse>;
export type UserType = "IAM" | "IDC" | "IDP" | (string & {});
const UserType = S.String;

export interface CreateChatRequest {
  agentSpaceId: string;
  userId?: string;
  userType?: UserType;
}
const CreateChatRequest = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<CreateChatRequest>;
export interface CreateChatResponse {
  executionId: string;
  createdAt: Date;
}
const CreateChatResponse = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<CreateChatResponse>;
export type PrivateConnectionName = string;
export type IpAddressOrDnsName = string;
export type VpcId = string;
export type SubnetId = string;
export type ListOfSubnetIds = string[];
const ListOfSubnetIds = DynatraceResourceList as any as S.Schema<ListOfSubnetIds>;
export type SecurityGroupId = string;
export type ListOfSecurityGroupIds = string[];
const ListOfSecurityGroupIds = DynatraceResourceList as any as S.Schema<ListOfSecurityGroupIds>;
export type IpAddressType = "IPV4" | "IPV6" | "DUAL_STACK" | (string & {});
const IpAddressType = S.String;

export type MaxIpv4AddressesPerEni = number;
export type PortRange = string;
export type PortRanges = string[];
const PortRanges = DynatraceResourceList as any as S.Schema<PortRanges>;
export type CertificateString = string;
export type ResourceConfigDnsResolution = "PUBLIC" | "IN_VPC" | (string & {});
const ResourceConfigDnsResolution = S.String;

export interface ServiceManagedInput {
  hostAddress: string;
  vpcId: string;
  subnetIds: string[];
  securityGroupIds?: string[];
  ipAddressType?: IpAddressType;
  ipv4AddressesPerEni?: number;
  portRanges?: string[];
  certificate?: string;
  dnsResolution?: ResourceConfigDnsResolution;
}
const ServiceManagedInput = /*@__PURE__*/ __L.at(__c6, 7) as any as S.Schema<ServiceManagedInput>;
export type ResourceConfigurationArn = string;
export interface SelfManagedInput {
  resourceConfigurationId: string;
  certificate?: string;
}
const SelfManagedInput = /*@__PURE__*/ __L.at(__c7, 0) as any as S.Schema<SelfManagedInput>;
export type PrivateConnectionMode =
  | { serviceManaged: ServiceManagedInput; selfManaged?: never }
  | { serviceManaged?: never; selfManaged: SelfManagedInput };
const PrivateConnectionMode = /*@__PURE__*/ __L.at(__c7, 1);
export interface CreatePrivateConnectionInput {
  name: string;
  mode: PrivateConnectionMode;
  tags?: { [key: string]: string | undefined };
}
const CreatePrivateConnectionInput = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<CreatePrivateConnectionInput>;
export type PrivateConnectionType = "SELF_MANAGED" | "SERVICE_MANAGED" | (string & {});
const PrivateConnectionType = S.String;

export type ResourceGatewayArn = string;
export type PrivateConnectionStatus =
  | "ACTIVE"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "DELETE_IN_PROGRESS"
  | "DELETE_FAILED"
  | (string & {});
const PrivateConnectionStatus = S.String;

export type FailureMessage = string;
export interface CreatePrivateConnectionOutput {
  name: string;
  type: PrivateConnectionType;
  resourceGatewayId?: string;
  hostAddress?: string;
  vpcId?: string;
  resourceConfigurationId?: string;
  status: PrivateConnectionStatus;
  certificateExpiryTime?: Date;
  dnsResolution?: ResourceConfigDnsResolution;
  failureMessage?: string;
  tags?: { [key: string]: string | undefined };
}
const CreatePrivateConnectionOutput = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<CreatePrivateConnectionOutput>;
export type TriggerType = string;
export type ScheduleExpression = string;
export interface ScheduleCondition {
  expression: string;
}
const ScheduleCondition = /*@__PURE__*/ __L.at(__c7, 4) as any as S.Schema<ScheduleCondition>;
export type TriggerCondition = { schedule: ScheduleCondition };
const TriggerCondition = /*@__PURE__*/ __L.at(__c7, 5);
export type TriggerAction = unknown;
export type TriggerStatus = string;
export interface CreateTriggerRequest {
  agentSpaceId: string;
  type: string;
  condition: TriggerCondition;
  action: any;
  status?: string;
  clientToken?: string;
}
const CreateTriggerRequest = /*@__PURE__*/ __L.at(__c7, 6) as any as S.Schema<CreateTriggerRequest>;
export interface Trigger {
  triggerId: string;
  agentSpaceId: string;
  type: string;
  condition: TriggerCondition;
  action: any;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
const Trigger = /*@__PURE__*/ __L.at(__c7, 7) as any as S.Schema<Trigger>;
export interface CreateTriggerResponse {
  trigger: Trigger;
}
const CreateTriggerResponse = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<CreateTriggerResponse>;
export interface DeleteAgentSpaceInput {
  agentSpaceId: string;
}
const DeleteAgentSpaceInput = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<DeleteAgentSpaceInput>;
export interface DeleteAgentSpaceOutput {}
const DeleteAgentSpaceOutput =
  MCPServerSplunkConfiguration as any as S.Schema<DeleteAgentSpaceOutput>;
export interface DeleteAssetRequest {
  agentSpaceId: string;
  assetId: string;
}
const DeleteAssetRequest = /*@__PURE__*/ __L.at(__c8, 2) as any as S.Schema<DeleteAssetRequest>;
export interface DeleteAssetResponse {}
const DeleteAssetResponse = MCPServerSplunkConfiguration as any as S.Schema<DeleteAssetResponse>;
export interface DeleteAssetFileRequest {
  agentSpaceId: string;
  assetId: string;
  path: string;
}
const DeleteAssetFileRequest = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<DeleteAssetFileRequest>;
export interface DeleteAssetFileResponse {}
const DeleteAssetFileResponse =
  MCPServerSplunkConfiguration as any as S.Schema<DeleteAssetFileResponse>;
export interface DeletePrivateConnectionInput {
  name: string;
}
const DeletePrivateConnectionInput = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<DeletePrivateConnectionInput>;
export interface DeletePrivateConnectionOutput {
  name: string;
  status: PrivateConnectionStatus;
}
const DeletePrivateConnectionOutput = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<DeletePrivateConnectionOutput>;
export interface DeleteTriggerRequest {
  agentSpaceId: string;
  triggerId: string;
}
const DeleteTriggerRequest = /*@__PURE__*/ __L.at(__c8, 6) as any as S.Schema<DeleteTriggerRequest>;
export interface DeleteTriggerResponse {}
const DeleteTriggerResponse =
  MCPServerSplunkConfiguration as any as S.Schema<DeleteTriggerResponse>;
export interface DeregisterServiceInput {
  serviceId: string;
}
const DeregisterServiceInput = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<DeregisterServiceInput>;
export interface DeregisterServiceOutput {}
const DeregisterServiceOutput =
  MCPServerSplunkConfiguration as any as S.Schema<DeregisterServiceOutput>;
export interface DescribePrivateConnectionInput {
  name: string;
}
const DescribePrivateConnectionInput = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<DescribePrivateConnectionInput>;
export interface DescribePrivateConnectionOutput {
  name: string;
  type: PrivateConnectionType;
  resourceGatewayId?: string;
  hostAddress?: string;
  vpcId?: string;
  resourceConfigurationId?: string;
  status: PrivateConnectionStatus;
  certificateExpiryTime?: Date;
  dnsResolution?: ResourceConfigDnsResolution;
  failureMessage?: string;
  tags?: { [key: string]: string | undefined };
}
const DescribePrivateConnectionOutput =
  CreatePrivateConnectionOutput as any as S.Schema<DescribePrivateConnectionOutput>;
export type AuthFlow = "iam" | "idc" | "idp" | (string & {});
const AuthFlow = S.String;

export interface DisableOperatorAppInput {
  agentSpaceId: string;
  authFlow?: AuthFlow;
}
const DisableOperatorAppInput = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<DisableOperatorAppInput>;
export interface DisableOperatorAppResponse {}
const DisableOperatorAppResponse =
  MCPServerSplunkConfiguration as any as S.Schema<DisableOperatorAppResponse>;
export interface DisassociateServiceInput {
  agentSpaceId: string;
  associationId: string;
}
const DisassociateServiceInput = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<DisassociateServiceInput>;
export interface DisassociateServiceOutput {}
const DisassociateServiceOutput =
  MCPServerSplunkConfiguration as any as S.Schema<DisassociateServiceOutput>;
export type IdpClientId = string;
export type IdpClientSecret = string | redacted.Redacted<string>;
export interface EnableOperatorAppInput {
  agentSpaceId: string;
  authFlow: AuthFlow;
  operatorAppRoleArn: string;
  idcInstanceArn?: string;
  issuerUrl?: string;
  idpClientId?: string;
  idpClientSecret?: string | redacted.Redacted<string>;
  provider?: string;
}
const EnableOperatorAppInput = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<EnableOperatorAppInput>;
export type OperatorAppUrl = string;
export interface IamAuthConfiguration {
  operatorAppRoleArn: string;
  createdAt: Date;
  updatedAt?: Date;
}
const IamAuthConfiguration = /*@__PURE__*/ __L.at(__c9, 4) as any as S.Schema<IamAuthConfiguration>;
export interface IdcAuthConfiguration {
  operatorAppRoleArn: string;
  idcInstanceArn: string;
  idcApplicationArn?: string;
  createdAt: Date;
  updatedAt?: Date;
}
const IdcAuthConfiguration = /*@__PURE__*/ __L.at(__c9, 5) as any as S.Schema<IdcAuthConfiguration>;
export interface IdpAuthConfiguration {
  issuerUrl: string;
  clientId: string;
  operatorAppRoleArn: string;
  provider: string;
  createdAt: Date;
  updatedAt?: Date;
}
const IdpAuthConfiguration = /*@__PURE__*/ __L.at(__c9, 6) as any as S.Schema<IdpAuthConfiguration>;
export interface EnableOperatorAppOutput {
  agentSpaceId: string;
  operatorAppUrl?: string;
  iam?: IamAuthConfiguration;
  idc?: IdcAuthConfiguration;
  idp?: IdpAuthConfiguration;
}
const EnableOperatorAppOutput = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<EnableOperatorAppOutput>;
export interface GetAccountUsageInput {}
const GetAccountUsageInput = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<GetAccountUsageInput>;
export interface UsageMetric {
  limit: number;
  usage: number;
}
const UsageMetric = /*@__PURE__*/ __L.at(__c10, 1) as any as S.Schema<UsageMetric>;
export interface GetAccountUsageOutput {
  monthlyAccountInvestigationHours?: UsageMetric;
  monthlyAccountEvaluationHours?: UsageMetric;
  monthlyAccountSystemLearningHours?: UsageMetric;
  monthlyAccountOnDemandHours?: UsageMetric;
  usagePeriodStartTime: Date;
  usagePeriodEndTime: Date;
}
const GetAccountUsageOutput = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<GetAccountUsageOutput>;
export interface GetAgentSpaceInput {
  agentSpaceId: string;
}
const GetAgentSpaceInput = /*@__PURE__*/ __L.at(__c10, 3) as any as S.Schema<GetAgentSpaceInput>;
export interface GetAgentSpaceOutput {
  agentSpace: AgentSpace;
  tags?: { [key: string]: string | undefined };
}
const GetAgentSpaceOutput = CreateAgentSpaceOutput as any as S.Schema<GetAgentSpaceOutput>;
export interface GetAssetRequest {
  agentSpaceId: string;
  assetId: string;
  assetVersion?: number;
}
const GetAssetRequest = /*@__PURE__*/ __L.at(__c10, 4) as any as S.Schema<GetAssetRequest>;
export interface GetAssetResponse {
  asset: Asset;
}
const GetAssetResponse = /*@__PURE__*/ __L.at(__c10, 5) as any as S.Schema<GetAssetResponse>;
export interface GetAssetContentRequest {
  agentSpaceId: string;
  assetId: string;
  assetVersion?: number;
}
const GetAssetContentRequest = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<GetAssetContentRequest>;
export interface GetAssetContentResponse {
  content: AssetZipContent;
  version: number;
}
const GetAssetContentResponse = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<GetAssetContentResponse>;
export interface GetAssetFileRequest {
  agentSpaceId: string;
  assetId: string;
  path: string;
  assetVersion?: number;
}
const GetAssetFileRequest = /*@__PURE__*/ __L.at(__c11, 0) as any as S.Schema<GetAssetFileRequest>;
export interface GetAssetFileResponse {
  file: AssetFile;
}
const GetAssetFileResponse = CreateAssetFileResponse as any as S.Schema<GetAssetFileResponse>;
export interface GetAssociationInput {
  agentSpaceId: string;
  associationId: string;
}
const GetAssociationInput = /*@__PURE__*/ __L.at(__c11, 1) as any as S.Schema<GetAssociationInput>;
export interface GetAssociationOutput {
  association: Association;
}
const GetAssociationOutput = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<GetAssociationOutput>;
export interface GetBacklogTaskRequest {
  agentSpaceId: string;
  taskId: string;
}
const GetBacklogTaskRequest = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<GetBacklogTaskRequest>;
export interface GetBacklogTaskResponse {
  task: Task;
}
const GetBacklogTaskResponse = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<GetBacklogTaskResponse>;
export interface GetOperatorAppInput {
  agentSpaceId: string;
}
const GetOperatorAppInput = /*@__PURE__*/ __L.at(__c11, 5) as any as S.Schema<GetOperatorAppInput>;
export interface GetOperatorAppOutput {
  operatorAppUrl?: string;
  iam?: IamAuthConfiguration;
  idc?: IdcAuthConfiguration;
  idp?: IdpAuthConfiguration;
}
const GetOperatorAppOutput = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<GetOperatorAppOutput>;
export interface GetRecommendationRequest {
  agentSpaceId: string;
  recommendationId: string;
  recommendationVersion?: number;
}
const GetRecommendationRequest = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<GetRecommendationRequest>;
export interface RecommendationContent {
  summary: string;
  spec?: string;
}
const RecommendationContent = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<RecommendationContent>;
export type RecommendationStatus =
  | "PROPOSED"
  | "ACCEPTED"
  | "REJECTED"
  | "CLOSED"
  | "COMPLETED"
  | "UPDATE_IN_PROGRESS"
  | (string & {});
const RecommendationStatus = S.String;

export type RecommendationPriority = "HIGH" | "MEDIUM" | "LOW" | (string & {});
const RecommendationPriority = S.String;

export interface Recommendation {
  agentSpaceArn: string;
  recommendationId: string;
  taskId: string;
  goalId?: string;
  title: string;
  content: RecommendationContent;
  status: RecommendationStatus;
  priority: RecommendationPriority;
  goalVersion?: number;
  additionalContext?: string;
  rankPosition?: number;
  rankedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  version: number;
}
const Recommendation = /*@__PURE__*/ __L.at(__c12, 1) as any as S.Schema<Recommendation>;
export interface GetRecommendationResponse {
  recommendation: Recommendation;
}
const GetRecommendationResponse = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<GetRecommendationResponse>;
export interface GetServiceInput {
  serviceId: string;
}
const GetServiceInput = /*@__PURE__*/ __L.at(__c12, 3) as any as S.Schema<GetServiceInput>;
export type Service =
  | "github"
  | "slack"
  | "azure"
  | "azuredevops"
  | "dynatrace"
  | "servicenow"
  | "pagerduty"
  | "gitlab"
  | "eventChannel"
  | "mcpservernewrelic"
  | "mcpservergrafana"
  | "mcpserverdatadog"
  | "mcpserver"
  | "mcpserversplunk"
  | "azureidentity"
  | "mcpserversigv4"
  | "remoteagent"
  | "remoteagentsigv4"
  | (string & {});
const Service = S.String;

export type ServiceName = string;
export type DocumentList = any[];
const DocumentList = /*@__PURE__*/ __L.at(__c12, 4);
export interface RegisteredGithubServiceDetails {
  owner: string;
  ownerType: GithubRepoOwnerType;
  targetUrl?: string;
}
const RegisteredGithubServiceDetails = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<RegisteredGithubServiceDetails>;
export interface RegisteredSlackServiceDetails {
  teamId: string;
  teamName: string;
}
const RegisteredSlackServiceDetails = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<RegisteredSlackServiceDetails>;
export type MCPServerAuthorizationMethod =
  | "oauth-client-credentials"
  | "oauth-3lo"
  | "api-key"
  | "bearer-token"
  | (string & {});
const MCPServerAuthorizationMethod = S.String;

export interface RegisteredMCPServerDetails {
  name: string;
  endpoint: string;
  authorizationMethod: MCPServerAuthorizationMethod;
  description?: string | redacted.Redacted<string>;
  apiKeyHeader?: string;
}
const RegisteredMCPServerDetails = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<RegisteredMCPServerDetails>;
export type ServiceNowInstanceUrl = string;
export interface RegisteredServiceNowDetails {
  instanceUrl?: string;
}
const RegisteredServiceNowDetails = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<RegisteredServiceNowDetails>;
export type GitLabTokenType = "personal" | "group" | (string & {});
const GitLabTokenType = S.String;

export interface RegisteredGitLabServiceDetails {
  targetUrl: string;
  tokenType: GitLabTokenType;
  groupId?: string;
}
const RegisteredGitLabServiceDetails = /*@__PURE__*/ __L.at(
  __c13,
  1,
) as any as S.Schema<RegisteredGitLabServiceDetails>;
export type NewRelicRegion = "US" | "EU" | "JP" | (string & {});
const NewRelicRegion = S.String;

export interface RegisteredNewRelicDetails {
  accountId: string;
  region: NewRelicRegion;
  description?: string | redacted.Redacted<string>;
}
const RegisteredNewRelicDetails = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<RegisteredNewRelicDetails>;
export interface RegisteredAzureDevOpsServiceDetails {
  organizationName: string;
}
const RegisteredAzureDevOpsServiceDetails = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<RegisteredAzureDevOpsServiceDetails>;
export type Guid = string;
export type WebIdentityTokenAudienceList = string[];
const WebIdentityTokenAudienceList =
  DynatraceResourceList as any as S.Schema<WebIdentityTokenAudienceList>;
export interface RegisteredAzureIdentityDetails {
  tenantId: string;
  clientId: string;
  webIdentityRoleArn: string;
  webIdentityTokenAudiences: string[];
}
const RegisteredAzureIdentityDetails = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<RegisteredAzureIdentityDetails>;
export type MCPServerEndpoint = string;
export interface RegisteredGrafanaServerDetails {
  endpoint: string;
  authorizationMethod: MCPServerAuthorizationMethod;
}
const RegisteredGrafanaServerDetails = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<RegisteredGrafanaServerDetails>;
export type PagerDutyScopesList = string[];
const PagerDutyScopesList = DynatraceResourceList as any as S.Schema<PagerDutyScopesList>;
export interface RegisteredPagerDutyDetails {
  scopes: string[];
}
const RegisteredPagerDutyDetails = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<RegisteredPagerDutyDetails>;
export type MCPServerName = string;
export type SigV4Region = string;
export type CustomHeaderName = string;
export type CustomHeaderValue = string | redacted.Redacted<string>;
export type CustomHeaders = { [key: string]: string | redacted.Redacted<string> | undefined };
const CustomHeaders = /*@__PURE__*/ __L.at(__c13, 7);
export interface RegisteredMCPServerSigV4Details {
  name: string;
  endpoint: string;
  description?: string | redacted.Redacted<string>;
  region: string;
  service: string;
  roleArn: string;
  mcpRoleArn?: string;
  customHeaders?: { [key: string]: string | redacted.Redacted<string> | undefined };
}
const RegisteredMCPServerSigV4Details = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<RegisteredMCPServerSigV4Details>;
export type RemoteAgentName = string;
export type RemoteAgentEndpoint = string;
export type RemoteAgentAuthorizationMethod =
  | "oauth-client-credentials"
  | "api-key"
  | "bearer-token"
  | (string & {});
const RemoteAgentAuthorizationMethod = S.String;

export interface RegisteredRemoteAgentDetails {
  name: string;
  endpoint: string;
  description?: string | redacted.Redacted<string>;
  authorizationMethod: RemoteAgentAuthorizationMethod;
  apiKeyHeader?: string;
}
const RegisteredRemoteAgentDetails = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<RegisteredRemoteAgentDetails>;
export interface RegisteredRemoteAgentSigV4Details {
  name: string;
  endpoint: string;
  description?: string | redacted.Redacted<string>;
  region: string;
  service: string;
  roleArn?: string;
}
const RegisteredRemoteAgentSigV4Details = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<RegisteredRemoteAgentSigV4Details>;
export type AdditionalServiceDetails =
  | {
      github: RegisteredGithubServiceDetails;
      slack?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      servicenow?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      azuredevops?: never;
      azureidentity?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      github?: never;
      slack: RegisteredSlackServiceDetails;
      mcpserverdatadog?: never;
      mcpserver?: never;
      servicenow?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      azuredevops?: never;
      azureidentity?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      github?: never;
      slack?: never;
      mcpserverdatadog: RegisteredMCPServerDetails;
      mcpserver?: never;
      servicenow?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      azuredevops?: never;
      azureidentity?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      github?: never;
      slack?: never;
      mcpserverdatadog?: never;
      mcpserver: RegisteredMCPServerDetails;
      servicenow?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      azuredevops?: never;
      azureidentity?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      github?: never;
      slack?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      servicenow: RegisteredServiceNowDetails;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      azuredevops?: never;
      azureidentity?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      github?: never;
      slack?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      servicenow?: never;
      gitlab: RegisteredGitLabServiceDetails;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      azuredevops?: never;
      azureidentity?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      github?: never;
      slack?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      servicenow?: never;
      gitlab?: never;
      mcpserversplunk: RegisteredMCPServerDetails;
      mcpservernewrelic?: never;
      azuredevops?: never;
      azureidentity?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      github?: never;
      slack?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      servicenow?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic: RegisteredNewRelicDetails;
      azuredevops?: never;
      azureidentity?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      github?: never;
      slack?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      servicenow?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      azuredevops: RegisteredAzureDevOpsServiceDetails;
      azureidentity?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      github?: never;
      slack?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      servicenow?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      azuredevops?: never;
      azureidentity: RegisteredAzureIdentityDetails;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      github?: never;
      slack?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      servicenow?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      azuredevops?: never;
      azureidentity?: never;
      mcpservergrafana: RegisteredGrafanaServerDetails;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      github?: never;
      slack?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      servicenow?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      azuredevops?: never;
      azureidentity?: never;
      mcpservergrafana?: never;
      pagerduty: RegisteredPagerDutyDetails;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      github?: never;
      slack?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      servicenow?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      azuredevops?: never;
      azureidentity?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4: RegisteredMCPServerSigV4Details;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      github?: never;
      slack?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      servicenow?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      azuredevops?: never;
      azureidentity?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent: RegisteredRemoteAgentDetails;
      remoteagentsigv4?: never;
    }
  | {
      github?: never;
      slack?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      servicenow?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      azuredevops?: never;
      azureidentity?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4: RegisteredRemoteAgentSigV4Details;
    };
const AdditionalServiceDetails = /*@__PURE__*/ __L.at(__c14, 3);
export interface RegisteredService {
  serviceId: string;
  serviceType: Service;
  name?: string;
  accessibleResources?: any[];
  additionalServiceDetails?: AdditionalServiceDetails;
  kmsKeyArn?: string;
  privateConnectionName?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
const RegisteredService = /*@__PURE__*/ __L.at(__c14, 4) as any as S.Schema<RegisteredService>;
export interface GetServiceOutput {
  service: RegisteredService & { createdAt: Date; updatedAt: Date };
  tags?: { [key: string]: string | undefined };
}
const GetServiceOutput = /*@__PURE__*/ __L.at(__c14, 5) as any as S.Schema<GetServiceOutput>;
export interface GetTriggerRequest {
  agentSpaceId: string;
  triggerId: string;
}
const GetTriggerRequest = /*@__PURE__*/ __L.at(__c14, 6) as any as S.Schema<GetTriggerRequest>;
export interface GetTriggerResponse {
  trigger: Trigger;
}
const GetTriggerResponse = CreateTriggerResponse as any as S.Schema<GetTriggerResponse>;
export type NextToken = string;
export interface ListAgentSpacesInput {
  maxResults?: number;
  nextToken?: string;
}
const ListAgentSpacesInput = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<ListAgentSpacesInput>;
export type AgentSpaceList = AgentSpace[];
const AgentSpaceList = /*@__PURE__*/ __L.at(__c15, 0);
export interface ListAgentSpacesOutput {
  nextToken?: string;
  agentSpaces: AgentSpace[];
}
const ListAgentSpacesOutput = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<ListAgentSpacesOutput>;
export interface ListAssetFilesRequest {
  agentSpaceId: string;
  assetId: string;
  assetVersion?: number;
  nextToken?: string;
  maxResults?: number;
}
const ListAssetFilesRequest = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<ListAssetFilesRequest>;
export interface AssetFileSummary {
  path: string;
  metadata?: any;
  version: number;
  createdAt: Date;
  updatedAt: Date;
}
const AssetFileSummary = /*@__PURE__*/ __L.at(__c15, 3) as any as S.Schema<AssetFileSummary>;
export type AssetFileSummaryList = AssetFileSummary[];
const AssetFileSummaryList = /*@__PURE__*/ __L.at(__c15, 4);
export interface ListAssetFilesResponse {
  items: AssetFileSummary[];
  nextToken?: string;
}
const ListAssetFilesResponse = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<ListAssetFilesResponse>;
export interface ListAssetsRequest {
  agentSpaceId: string;
  assetType?: string;
  updatedAfter?: Date;
  updatedBefore?: Date;
  nextToken?: string;
  maxResults?: number;
}
const ListAssetsRequest = /*@__PURE__*/ __L.at(__c15, 6) as any as S.Schema<ListAssetsRequest>;
export type AssetList = Asset[];
const AssetList = /*@__PURE__*/ __L.at(__c15, 7);
export interface ListAssetsResponse {
  items: Asset[];
  nextToken?: string;
}
const ListAssetsResponse = /*@__PURE__*/ __L.at(__c16, 0) as any as S.Schema<ListAssetsResponse>;
export interface ListAssetTypesRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListAssetTypesRequest = /*@__PURE__*/ __L.at(
  __c16,
  1,
) as any as S.Schema<ListAssetTypesRequest>;
export interface AssetTypeSummary {
  assetType: string;
  description: string;
}
const AssetTypeSummary = /*@__PURE__*/ __L.at(__c16, 2) as any as S.Schema<AssetTypeSummary>;
export type AssetTypeList = AssetTypeSummary[];
const AssetTypeList = /*@__PURE__*/ __L.at(__c16, 3);
export interface ListAssetTypesResponse {
  items: AssetTypeSummary[];
  nextToken?: string;
}
const ListAssetTypesResponse = /*@__PURE__*/ __L.at(
  __c16,
  4,
) as any as S.Schema<ListAssetTypesResponse>;
export interface ListAssetVersionsRequest {
  agentSpaceId: string;
  assetId: string;
  maxResults?: number;
  nextToken?: string;
}
const ListAssetVersionsRequest = /*@__PURE__*/ __L.at(
  __c16,
  5,
) as any as S.Schema<ListAssetVersionsRequest>;
export interface AssetVersionMetadata {
  version: number;
  createdAt: Date;
  updatedAt: Date;
}
const AssetVersionMetadata = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<AssetVersionMetadata>;
export type AssetVersionMetadataList = AssetVersionMetadata[];
const AssetVersionMetadataList = /*@__PURE__*/ __L.at(__c16, 7);
export interface ListAssetVersionsResponse {
  items: AssetVersionMetadata[];
  nextToken?: string;
}
const ListAssetVersionsResponse = /*@__PURE__*/ __L.at(
  __c17,
  0,
) as any as S.Schema<ListAssetVersionsResponse>;
export interface ListAssociationsInput {
  agentSpaceId: string;
  maxResults?: number;
  nextToken?: string;
  filterServiceTypes?: string;
}
const ListAssociationsInput = /*@__PURE__*/ __L.at(
  __c17,
  1,
) as any as S.Schema<ListAssociationsInput>;
export type AssociationsList = Association[];
const AssociationsList = /*@__PURE__*/ __L.at(__c17, 2);
export interface ListAssociationsOutput {
  nextToken?: string;
  associations: Association[];
}
const ListAssociationsOutput = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<ListAssociationsOutput>;
export type PriorityList = Priority[];
const PriorityList = TriggerEventList as any as S.Schema<PriorityList>;
export type TaskStatusList = TaskStatus[];
const TaskStatusList = TriggerEventList as any as S.Schema<TaskStatusList>;
export type TaskTypeList = TaskType[];
const TaskTypeList = TriggerEventList as any as S.Schema<TaskTypeList>;
export interface TaskFilter {
  createdAfter?: Date;
  createdBefore?: Date;
  priority?: Priority[];
  status?: TaskStatus[];
  taskType?: TaskType[];
  primaryTaskId?: string;
}
const TaskFilter = /*@__PURE__*/ __L.at(__c17, 4) as any as S.Schema<TaskFilter>;
export type TaskSortField = "CREATED_AT" | "PRIORITY" | (string & {});
const TaskSortField = S.String;

export type TaskSortOrder = "ASC" | "DESC" | (string & {});
const TaskSortOrder = S.String;

export interface ListBacklogTasksRequest {
  agentSpaceId: string;
  filter?: TaskFilter;
  limit?: number;
  nextToken?: string;
  sortField?: TaskSortField;
  order?: TaskSortOrder;
}
const ListBacklogTasksRequest = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<ListBacklogTasksRequest>;
export type TaskList = Task[];
const TaskList = /*@__PURE__*/ __L.at(__c17, 6);
export interface ListBacklogTasksResponse {
  tasks: Task[];
  nextToken?: string;
}
const ListBacklogTasksResponse = /*@__PURE__*/ __L.at(
  __c17,
  7,
) as any as S.Schema<ListBacklogTasksResponse>;
export interface ListChatsRequest {
  agentSpaceId: string;
  userId?: string;
  maxResults?: number;
  nextToken?: string;
}
const ListChatsRequest = /*@__PURE__*/ __L.at(__c18, 0) as any as S.Schema<ListChatsRequest>;
export interface ChatExecution {
  executionId: string;
  createdAt: Date;
  updatedAt?: Date;
  summary?: string;
}
const ChatExecution = /*@__PURE__*/ __L.at(__c18, 1) as any as S.Schema<ChatExecution>;
export type ChatExecutionList = ChatExecution[];
const ChatExecutionList = /*@__PURE__*/ __L.at(__c18, 2);
export interface ListChatsResponse {
  executions: ChatExecution[];
  nextToken?: string;
}
const ListChatsResponse = /*@__PURE__*/ __L.at(__c18, 3) as any as S.Schema<ListChatsResponse>;
export interface ListExecutionsRequest {
  agentSpaceId: string;
  taskId: string;
  limit?: number;
  nextToken?: string;
}
const ListExecutionsRequest = /*@__PURE__*/ __L.at(
  __c18,
  4,
) as any as S.Schema<ListExecutionsRequest>;
export type JournalTimestamp = Date;
export type ExecutionStatus =
  | "FAILED"
  | "RUNNING"
  | "STOPPED"
  | "CANCELED"
  | "TIMED_OUT"
  | "WAITING"
  | (string & {});
const ExecutionStatus = S.String;

export interface Execution {
  agentSpaceId: string;
  executionId: string;
  parentExecutionId?: string;
  agentSubTask: string;
  createdAt: Date;
  updatedAt: Date;
  executionStatus: ExecutionStatus;
  agentType?: string;
  uid?: string;
}
const Execution = /*@__PURE__*/ __L.at(__c18, 5) as any as S.Schema<Execution>;
export type ExecutionList = Execution[];
const ExecutionList = /*@__PURE__*/ __L.at(__c18, 6);
export interface ListExecutionsResponse {
  executions: Execution[];
  nextToken?: string;
}
const ListExecutionsResponse = /*@__PURE__*/ __L.at(
  __c18,
  7,
) as any as S.Schema<ListExecutionsResponse>;
export type GoalStatus = "ACTIVE" | "PAUSED" | "COMPLETE" | (string & {});
const GoalStatus = S.String;

export type GoalType = "CUSTOMER_DEFINED" | "ONCALL_REPORT" | (string & {});
const GoalType = S.String;

export interface ListGoalsRequest {
  agentSpaceId: string;
  status?: GoalStatus;
  goalType?: GoalType;
  limit?: number;
  nextToken?: string;
}
const ListGoalsRequest = /*@__PURE__*/ __L.at(__c19, 0) as any as S.Schema<ListGoalsRequest>;
export interface GoalContent {
  description: string;
  objectives: string;
}
const GoalContent = /*@__PURE__*/ __L.at(__c19, 1) as any as S.Schema<GoalContent>;
export type SchedulerState = "ENABLED" | "DISABLED" | (string & {});
const SchedulerState = S.String;

export interface GoalSchedule {
  state: SchedulerState;
  expression?: string;
}
const GoalSchedule = /*@__PURE__*/ __L.at(__c19, 2) as any as S.Schema<GoalSchedule>;
export interface Goal {
  agentSpaceArn: string;
  goalId: string;
  title: string;
  content: GoalContent;
  status: GoalStatus;
  goalType: GoalType;
  createdAt: Date;
  updatedAt: Date;
  lastEvaluatedAt?: Date;
  lastTaskId?: string;
  lastSuccessfulTaskId?: string;
  version: number;
  evaluationSchedule?: GoalSchedule;
}
const Goal = /*@__PURE__*/ __L.at(__c19, 3) as any as S.Schema<Goal>;
export type GoalList = Goal[];
const GoalList = /*@__PURE__*/ __L.at(__c19, 4);
export interface ListGoalsResponse {
  goals: Goal[];
  nextToken?: string;
}
const ListGoalsResponse = /*@__PURE__*/ __L.at(__c19, 5) as any as S.Schema<ListGoalsResponse>;
export type OrderType = "ASC" | "DESC" | (string & {});
const OrderType = S.String;

export interface ListJournalRecordsRequest {
  agentSpaceId: string;
  executionId: string;
  limit?: number;
  nextToken?: string;
  recordType?: string;
  order?: OrderType;
}
const ListJournalRecordsRequest = /*@__PURE__*/ __L.at(
  __c19,
  6,
) as any as S.Schema<ListJournalRecordsRequest>;
export interface UserReference {
  userId: string;
  userType: UserType;
}
const UserReference = /*@__PURE__*/ __L.at(__c19, 7) as any as S.Schema<UserReference>;
export interface JournalRecord {
  agentSpaceId: string;
  executionId: string;
  recordId: string;
  content: any;
  createdAt: Date;
  recordType: string;
  userReference?: UserReference;
}
const JournalRecord = /*@__PURE__*/ __L.at(__c20, 0) as any as S.Schema<JournalRecord>;
export type JournalRecordList = JournalRecord[];
const JournalRecordList = /*@__PURE__*/ __L.at(__c20, 1);
export interface ListJournalRecordsResponse {
  records: JournalRecord[];
  nextToken?: string;
}
const ListJournalRecordsResponse = /*@__PURE__*/ __L.at(
  __c20,
  2,
) as any as S.Schema<ListJournalRecordsResponse>;
export interface ListPendingMessagesRequest {
  agentSpaceId: string;
  executionId: string;
}
const ListPendingMessagesRequest = /*@__PURE__*/ __L.at(
  __c20,
  3,
) as any as S.Schema<ListPendingMessagesRequest>;
export type UserMessageBlock =
  | { text: string; toolResult?: never }
  | { text?: never; toolResult: any };
const UserMessageBlock = /*@__PURE__*/ __L.at(__c20, 4);
export type UserMessage = UserMessageBlock[];
const UserMessage = /*@__PURE__*/ __L.at(__c20, 5);
export type AssistantMessageBlock =
  | { text: string; toolUse?: never }
  | { text?: never; toolUse: any };
const AssistantMessageBlock = /*@__PURE__*/ __L.at(__c20, 6);
export type AssistantMessage = AssistantMessageBlock[];
const AssistantMessage = /*@__PURE__*/ __L.at(__c20, 7);
export type Message =
  | { userMessage: UserMessageBlock[]; assistantMessage?: never }
  | { userMessage?: never; assistantMessage: AssistantMessageBlock[] };
const Message = /*@__PURE__*/ __L.at(__c21, 0);
export interface PendingMessage {
  messageId: string;
  message: Message;
}
const PendingMessage = /*@__PURE__*/ __L.at(__c21, 1) as any as S.Schema<PendingMessage>;
export type PendingMessages = PendingMessage[];
const PendingMessages = /*@__PURE__*/ __L.at(__c21, 2);
export interface ListPendingMessagesResponse {
  agentSpaceId: string;
  executionId: string;
  messages: PendingMessage[];
  createdAt: Date;
}
const ListPendingMessagesResponse = /*@__PURE__*/ __L.at(
  __c21,
  3,
) as any as S.Schema<ListPendingMessagesResponse>;
export interface ListPrivateConnectionsInput {}
const ListPrivateConnectionsInput = /*@__PURE__*/ __L.at(
  __c21,
  4,
) as any as S.Schema<ListPrivateConnectionsInput>;
export interface PrivateConnectionSummary {
  name: string;
  type: PrivateConnectionType;
  resourceGatewayId?: string;
  hostAddress?: string;
  vpcId?: string;
  resourceConfigurationId?: string;
  status: PrivateConnectionStatus;
  certificateExpiryTime?: Date;
  dnsResolution?: ResourceConfigDnsResolution;
  failureMessage?: string;
}
const PrivateConnectionSummary = /*@__PURE__*/ __L.at(
  __c21,
  5,
) as any as S.Schema<PrivateConnectionSummary>;
export type PrivateConnectionSummaryList = PrivateConnectionSummary[];
const PrivateConnectionSummaryList = /*@__PURE__*/ __L.at(__c21, 6);
export interface ListPrivateConnectionsOutput {
  privateConnections: PrivateConnectionSummary[];
}
const ListPrivateConnectionsOutput = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<ListPrivateConnectionsOutput>;
export interface ListRecommendationsRequest {
  agentSpaceId: string;
  taskId?: string;
  goalId?: string;
  status?: RecommendationStatus;
  priority?: RecommendationPriority;
  limit?: number;
  nextToken?: string;
}
const ListRecommendationsRequest = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<ListRecommendationsRequest>;
export type RecommendationList = Recommendation[];
const RecommendationList = /*@__PURE__*/ __L.at(__c22, 1);
export interface ListRecommendationsResponse {
  recommendations: Recommendation[];
  nextToken?: string;
}
const ListRecommendationsResponse = /*@__PURE__*/ __L.at(
  __c22,
  2,
) as any as S.Schema<ListRecommendationsResponse>;
export interface ListServicesInput {
  maxResults?: number;
  nextToken?: string;
  filterServiceType?: Service;
}
const ListServicesInput = /*@__PURE__*/ __L.at(__c22, 3) as any as S.Schema<ListServicesInput>;
export type RegisteredServicesList = RegisteredService[];
const RegisteredServicesList = /*@__PURE__*/ __L.at(__c22, 4);
export interface ListServicesOutput {
  nextToken?: string;
  services: (RegisteredService & { createdAt: Date; updatedAt: Date })[];
}
const ListServicesOutput = /*@__PURE__*/ __L.at(__c22, 5) as any as S.Schema<ListServicesOutput>;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c22,
  7,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface ListTriggersRequest {
  agentSpaceId: string;
  status?: string;
  nextToken?: string;
  maxResults?: number;
}
const ListTriggersRequest = /*@__PURE__*/ __L.at(__c23, 0) as any as S.Schema<ListTriggersRequest>;
export type TriggerList = Trigger[];
const TriggerList = /*@__PURE__*/ __L.at(__c23, 1);
export interface ListTriggersResponse {
  items: Trigger[];
  nextToken?: string;
}
const ListTriggersResponse = /*@__PURE__*/ __L.at(
  __c23,
  2,
) as any as S.Schema<ListTriggersResponse>;
export interface ListWebhooksInput {
  agentSpaceId: string;
  associationId: string;
}
const ListWebhooksInput = /*@__PURE__*/ __L.at(__c23, 3) as any as S.Schema<ListWebhooksInput>;
export interface Webhook {
  webhookUrl: string;
  webhookType?: WebhookType;
  webhookId: string;
}
const Webhook = /*@__PURE__*/ __L.at(__c23, 4) as any as S.Schema<Webhook>;
export type WebhooksList = Webhook[];
const WebhooksList = /*@__PURE__*/ __L.at(__c23, 5);
export interface ListWebhooksOutput {
  webhooks: Webhook[];
}
const ListWebhooksOutput = /*@__PURE__*/ __L.at(__c23, 6) as any as S.Schema<ListWebhooksOutput>;
export type PostRegisterServiceSupportedService =
  | "dynatrace"
  | "servicenow"
  | "pagerduty"
  | "gitlab"
  | "eventChannel"
  | "mcpservernewrelic"
  | "mcpservergrafana"
  | "mcpserverdatadog"
  | "mcpserver"
  | "mcpserversplunk"
  | "azureidentity"
  | "mcpserversigv4"
  | "remoteagent"
  | "remoteagentsigv4"
  | (string & {});
const PostRegisterServiceSupportedService = S.String;

export type ClientId = string | redacted.Redacted<string>;
export type ExchangeParameterValue = string | redacted.Redacted<string>;
export type ExchangeParameters = { [key: string]: string | redacted.Redacted<string> | undefined };
const ExchangeParameters = CustomHeaders as any as S.Schema<ExchangeParameters>;
export type ClientSecret = string | redacted.Redacted<string>;
export interface DynatraceOAuthClientCredentialsConfig {
  clientName?: string;
  clientId: string | redacted.Redacted<string>;
  exchangeParameters?: { [key: string]: string | redacted.Redacted<string> | undefined };
  clientSecret: string | redacted.Redacted<string>;
}
const DynatraceOAuthClientCredentialsConfig = /*@__PURE__*/ __L.at(
  __c23,
  7,
) as any as S.Schema<DynatraceOAuthClientCredentialsConfig>;
export type DynatraceServiceAuthorizationConfig = {
  oAuthClientCredentials: DynatraceOAuthClientCredentialsConfig;
};
const DynatraceServiceAuthorizationConfig = /*@__PURE__*/ __L.at(__c24, 0);
export interface DynatraceServiceDetails {
  accountUrn: string;
  authorizationConfig?: DynatraceServiceAuthorizationConfig;
}
const DynatraceServiceDetails = /*@__PURE__*/ __L.at(
  __c24,
  1,
) as any as S.Schema<DynatraceServiceDetails>;
export interface ServiceNowOAuthClientCredentialsConfig {
  clientName?: string;
  clientId: string | redacted.Redacted<string>;
  exchangeParameters?: { [key: string]: string | redacted.Redacted<string> | undefined };
  clientSecret: string | redacted.Redacted<string>;
}
export type ServiceNowServiceAuthorizationConfig = {
  oAuthClientCredentials: ServiceNowOAuthClientCredentialsConfig;
};
const ServiceNowServiceAuthorizationConfig =
  DynatraceServiceAuthorizationConfig as any as S.Schema<ServiceNowServiceAuthorizationConfig>;
export interface ServiceNowServiceDetails {
  instanceUrl: string;
  authorizationConfig?: ServiceNowServiceAuthorizationConfig;
}
const ServiceNowServiceDetails = /*@__PURE__*/ __L.at(
  __c24,
  2,
) as any as S.Schema<ServiceNowServiceDetails>;
export interface MCPServerAuthorizationDiscoveryConfig {
  returnToEndpoint: string;
}
const MCPServerAuthorizationDiscoveryConfig = /*@__PURE__*/ __L.at(
  __c24,
  3,
) as any as S.Schema<MCPServerAuthorizationDiscoveryConfig>;
export type DatadogAuthorizationConfig = {
  authorizationDiscovery: MCPServerAuthorizationDiscoveryConfig;
};
const DatadogAuthorizationConfig = /*@__PURE__*/ __L.at(__c24, 4);
export interface DatadogServiceDetails {
  name: string;
  endpoint: string;
  description?: string | redacted.Redacted<string>;
  authorizationConfig: DatadogAuthorizationConfig;
}
const DatadogServiceDetails = /*@__PURE__*/ __L.at(
  __c24,
  5,
) as any as S.Schema<DatadogServiceDetails>;
export type OAuthScope = string;
export type Scopes = string[];
const Scopes = DynatraceResourceList as any as S.Schema<Scopes>;
export interface MCPServerOAuthClientCredentialsConfig {
  clientName?: string;
  clientId: string | redacted.Redacted<string>;
  exchangeParameters?: { [key: string]: string | redacted.Redacted<string> | undefined };
  clientSecret: string | redacted.Redacted<string>;
  exchangeUrl: string;
  scopes?: string[];
}
const MCPServerOAuthClientCredentialsConfig = /*@__PURE__*/ __L.at(
  __c24,
  6,
) as any as S.Schema<MCPServerOAuthClientCredentialsConfig>;
export interface MCPServerOAuth3LOConfig {
  clientName?: string;
  clientId: string | redacted.Redacted<string>;
  exchangeParameters?: { [key: string]: string | redacted.Redacted<string> | undefined };
  returnToEndpoint: string;
  authorizationUrl: string;
  exchangeUrl: string;
  clientSecret?: string | redacted.Redacted<string>;
  supportCodeChallenge?: boolean;
  scopes?: string[];
}
const MCPServerOAuth3LOConfig = /*@__PURE__*/ __L.at(
  __c24,
  7,
) as any as S.Schema<MCPServerOAuth3LOConfig>;
export interface MCPServerAPIKeyConfig {
  apiKeyName: string;
  apiKeyValue: string | redacted.Redacted<string>;
  apiKeyHeader: string;
}
const MCPServerAPIKeyConfig = /*@__PURE__*/ __L.at(
  __c25,
  0,
) as any as S.Schema<MCPServerAPIKeyConfig>;
export type TokenValue = string | redacted.Redacted<string>;
export interface MCPServerBearerTokenConfig {
  tokenName: string;
  tokenValue: string | redacted.Redacted<string>;
  authorizationHeader?: string;
}
const MCPServerBearerTokenConfig = /*@__PURE__*/ __L.at(
  __c25,
  1,
) as any as S.Schema<MCPServerBearerTokenConfig>;
export type MCPServerAuthorizationConfig =
  | {
      oAuthClientCredentials: MCPServerOAuthClientCredentialsConfig;
      oAuth3LO?: never;
      apiKey?: never;
      bearerToken?: never;
      authorizationDiscovery?: never;
    }
  | {
      oAuthClientCredentials?: never;
      oAuth3LO: MCPServerOAuth3LOConfig;
      apiKey?: never;
      bearerToken?: never;
      authorizationDiscovery?: never;
    }
  | {
      oAuthClientCredentials?: never;
      oAuth3LO?: never;
      apiKey: MCPServerAPIKeyConfig;
      bearerToken?: never;
      authorizationDiscovery?: never;
    }
  | {
      oAuthClientCredentials?: never;
      oAuth3LO?: never;
      apiKey?: never;
      bearerToken: MCPServerBearerTokenConfig;
      authorizationDiscovery?: never;
    }
  | {
      oAuthClientCredentials?: never;
      oAuth3LO?: never;
      apiKey?: never;
      bearerToken?: never;
      authorizationDiscovery: MCPServerAuthorizationDiscoveryConfig;
    };
const MCPServerAuthorizationConfig = /*@__PURE__*/ __L.at(__c25, 2);
export interface MCPServerDetails {
  name: string;
  endpoint: string;
  description?: string | redacted.Redacted<string>;
  authorizationConfig: MCPServerAuthorizationConfig;
}
const MCPServerDetails = /*@__PURE__*/ __L.at(__c25, 3) as any as S.Schema<MCPServerDetails>;
export type GitLabTokenValue = string | redacted.Redacted<string>;
export interface GitLabDetails {
  targetUrl: string;
  tokenType: GitLabTokenType;
  tokenValue: string | redacted.Redacted<string>;
  groupId?: string;
}
const GitLabDetails = /*@__PURE__*/ __L.at(__c25, 4) as any as S.Schema<GitLabDetails>;
export type NewRelicApiKey = string | redacted.Redacted<string>;
export type NewRelicApplicationIds = string[];
const NewRelicApplicationIds = DynatraceResourceList as any as S.Schema<NewRelicApplicationIds>;
export type NewRelicEntityGuids = string[];
const NewRelicEntityGuids = DynatraceResourceList as any as S.Schema<NewRelicEntityGuids>;
export type NewRelicAlertPolicyIds = string[];
const NewRelicAlertPolicyIds = DynatraceResourceList as any as S.Schema<NewRelicAlertPolicyIds>;
export interface NewRelicApiKeyConfig {
  apiKey: string | redacted.Redacted<string>;
  accountId: string;
  region: NewRelicRegion;
  applicationIds?: string[];
  entityGuids?: string[];
  alertPolicyIds?: string[];
}
const NewRelicApiKeyConfig = /*@__PURE__*/ __L.at(
  __c25,
  5,
) as any as S.Schema<NewRelicApiKeyConfig>;
export type NewRelicServiceAuthorizationConfig = { apiKey: NewRelicApiKeyConfig };
const NewRelicServiceAuthorizationConfig = /*@__PURE__*/ __L.at(__c25, 6);
export interface NewRelicServiceDetails {
  authorizationConfig: NewRelicServiceAuthorizationConfig;
}
const NewRelicServiceDetails = /*@__PURE__*/ __L.at(
  __c25,
  7,
) as any as S.Schema<NewRelicServiceDetails>;
export type EventChannelType = "webhook" | (string & {});
const EventChannelType = S.String;

export interface EventChannelDetails {
  type?: EventChannelType;
}
const EventChannelDetails = /*@__PURE__*/ __L.at(__c26, 0) as any as S.Schema<EventChannelDetails>;
export interface GrafanaServiceDetails {
  name: string;
  endpoint: string;
  description?: string | redacted.Redacted<string>;
  authorizationConfig: MCPServerAuthorizationConfig;
}
const GrafanaServiceDetails = MCPServerDetails as any as S.Schema<GrafanaServiceDetails>;
export type PagerDutyScopes = string[];
const PagerDutyScopes = DynatraceResourceList as any as S.Schema<PagerDutyScopes>;
export interface PagerDutyOAuthClientCredentialsConfig {
  clientName?: string;
  clientId: string | redacted.Redacted<string>;
  exchangeParameters?: { [key: string]: string | redacted.Redacted<string> | undefined };
  clientSecret: string | redacted.Redacted<string>;
}
export type PagerDutyAuthorizationConfig = {
  oAuthClientCredentials: PagerDutyOAuthClientCredentialsConfig;
};
const PagerDutyAuthorizationConfig =
  DynatraceServiceAuthorizationConfig as any as S.Schema<PagerDutyAuthorizationConfig>;
export interface PagerDutyDetails {
  scopes: string[];
  authorizationConfig: PagerDutyAuthorizationConfig;
}
const PagerDutyDetails = /*@__PURE__*/ __L.at(__c26, 1) as any as S.Schema<PagerDutyDetails>;
export interface MCPServerSigV4AuthorizationConfig {
  region: string;
  service: string;
  roleArn?: string;
  mcpRoleArn?: string;
  customHeaders?: { [key: string]: string | redacted.Redacted<string> | undefined };
}
const MCPServerSigV4AuthorizationConfig = /*@__PURE__*/ __L.at(
  __c26,
  2,
) as any as S.Schema<MCPServerSigV4AuthorizationConfig>;
export interface MCPServerSigV4ServiceDetails {
  name: string;
  endpoint: string;
  description?: string | redacted.Redacted<string>;
  authorizationConfig: MCPServerSigV4AuthorizationConfig;
}
const MCPServerSigV4ServiceDetails = /*@__PURE__*/ __L.at(
  __c26,
  3,
) as any as S.Schema<MCPServerSigV4ServiceDetails>;
export interface RemoteAgentAPIKeyConfig {
  apiKeyName: string;
  apiKeyValue: string | redacted.Redacted<string>;
  apiKeyHeader: string;
}
const RemoteAgentAPIKeyConfig = MCPServerAPIKeyConfig as any as S.Schema<RemoteAgentAPIKeyConfig>;
export interface RemoteAgentOAuthClientCredentialsConfig {
  clientName?: string;
  clientId: string | redacted.Redacted<string>;
  exchangeParameters?: { [key: string]: string | redacted.Redacted<string> | undefined };
  clientSecret: string | redacted.Redacted<string>;
  exchangeUrl: string;
  scopes?: string[];
}
const RemoteAgentOAuthClientCredentialsConfig =
  MCPServerOAuthClientCredentialsConfig as any as S.Schema<RemoteAgentOAuthClientCredentialsConfig>;
export interface RemoteAgentBearerTokenConfig {
  tokenName: string;
  tokenValue: string | redacted.Redacted<string>;
  authorizationHeader?: string;
}
const RemoteAgentBearerTokenConfig =
  MCPServerBearerTokenConfig as any as S.Schema<RemoteAgentBearerTokenConfig>;
export type RemoteAgentAuthorizationConfig =
  | { apiKey: RemoteAgentAPIKeyConfig; oAuthClientCredentials?: never; bearerToken?: never }
  | {
      apiKey?: never;
      oAuthClientCredentials: RemoteAgentOAuthClientCredentialsConfig;
      bearerToken?: never;
    }
  | { apiKey?: never; oAuthClientCredentials?: never; bearerToken: RemoteAgentBearerTokenConfig };
const RemoteAgentAuthorizationConfig = /*@__PURE__*/ __L.at(__c26, 4);
export interface RemoteAgentServiceDetails {
  name: string;
  endpoint: string;
  description?: string | redacted.Redacted<string>;
  authorizationConfig: RemoteAgentAuthorizationConfig;
}
const RemoteAgentServiceDetails = /*@__PURE__*/ __L.at(
  __c26,
  5,
) as any as S.Schema<RemoteAgentServiceDetails>;
export interface RemoteAgentSigV4AuthorizationConfig {
  region: string;
  service: string;
  roleArn?: string;
}
const RemoteAgentSigV4AuthorizationConfig = /*@__PURE__*/ __L.at(
  __c26,
  6,
) as any as S.Schema<RemoteAgentSigV4AuthorizationConfig>;
export interface RemoteAgentSigV4ServiceDetails {
  name: string;
  endpoint: string;
  description?: string | redacted.Redacted<string>;
  authorizationConfig: RemoteAgentSigV4AuthorizationConfig;
}
const RemoteAgentSigV4ServiceDetails = /*@__PURE__*/ __L.at(
  __c26,
  7,
) as any as S.Schema<RemoteAgentSigV4ServiceDetails>;
export type ServiceDetails =
  | {
      dynatrace: DynatraceServiceDetails;
      servicenow?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      eventChannel?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      azureidentity?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      dynatrace?: never;
      servicenow: ServiceNowServiceDetails;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      eventChannel?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      azureidentity?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      dynatrace?: never;
      servicenow?: never;
      mcpserverdatadog: DatadogServiceDetails;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      eventChannel?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      azureidentity?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      dynatrace?: never;
      servicenow?: never;
      mcpserverdatadog?: never;
      mcpserver: MCPServerDetails;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      eventChannel?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      azureidentity?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      dynatrace?: never;
      servicenow?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab: GitLabDetails;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      eventChannel?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      azureidentity?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      dynatrace?: never;
      servicenow?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk: MCPServerDetails;
      mcpservernewrelic?: never;
      eventChannel?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      azureidentity?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      dynatrace?: never;
      servicenow?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic: NewRelicServiceDetails;
      eventChannel?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      azureidentity?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      dynatrace?: never;
      servicenow?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      eventChannel: EventChannelDetails;
      mcpservergrafana?: never;
      pagerduty?: never;
      azureidentity?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      dynatrace?: never;
      servicenow?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      eventChannel?: never;
      mcpservergrafana: GrafanaServiceDetails;
      pagerduty?: never;
      azureidentity?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      dynatrace?: never;
      servicenow?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      eventChannel?: never;
      mcpservergrafana?: never;
      pagerduty: PagerDutyDetails;
      azureidentity?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      dynatrace?: never;
      servicenow?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      eventChannel?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      azureidentity: RegisteredAzureIdentityDetails;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      dynatrace?: never;
      servicenow?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      eventChannel?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      azureidentity?: never;
      mcpserversigv4: MCPServerSigV4ServiceDetails;
      remoteagent?: never;
      remoteagentsigv4?: never;
    }
  | {
      dynatrace?: never;
      servicenow?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      eventChannel?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      azureidentity?: never;
      mcpserversigv4?: never;
      remoteagent: RemoteAgentServiceDetails;
      remoteagentsigv4?: never;
    }
  | {
      dynatrace?: never;
      servicenow?: never;
      mcpserverdatadog?: never;
      mcpserver?: never;
      gitlab?: never;
      mcpserversplunk?: never;
      mcpservernewrelic?: never;
      eventChannel?: never;
      mcpservergrafana?: never;
      pagerduty?: never;
      azureidentity?: never;
      mcpserversigv4?: never;
      remoteagent?: never;
      remoteagentsigv4: RemoteAgentSigV4ServiceDetails;
    };
const ServiceDetails = /*@__PURE__*/ __L.at(__c27, 0);
export interface RegisterServiceInput {
  service: PostRegisterServiceSupportedService;
  serviceDetails: ServiceDetails;
  kmsKeyArn?: string;
  privateConnectionName?: string;
  targetUrlPrivateConnectionName?: string;
  exchangeUrlPrivateConnectionName?: string;
  name?: string;
  tags?: { [key: string]: string | undefined };
}
const RegisterServiceInput = /*@__PURE__*/ __L.at(
  __c27,
  1,
) as any as S.Schema<RegisterServiceInput>;
export interface OAuthAdditionalStepDetails {
  authorizationUrl: string;
}
const OAuthAdditionalStepDetails = /*@__PURE__*/ __L.at(
  __c27,
  2,
) as any as S.Schema<OAuthAdditionalStepDetails>;
export type AdditionalServiceRegistrationStep = { oauth: OAuthAdditionalStepDetails };
const AdditionalServiceRegistrationStep = /*@__PURE__*/ __L.at(__c27, 3);
export interface RegisterServiceOutput {
  serviceId?: string;
  additionalStep?: AdditionalServiceRegistrationStep;
  kmsKeyArn?: string;
  tags?: { [key: string]: string | undefined };
}
const RegisterServiceOutput = /*@__PURE__*/ __L.at(
  __c27,
  4,
) as any as S.Schema<RegisterServiceOutput>;
export type ChatExecutionId = string;
export type MessageContent = string;
export type ToolUseId = string;
export type InterruptId = string;
export type ApprovalId = string;
export type ButtonText = string;
export type ApprovalActionType = "APPROVED" | "REJECTED" | (string & {});
const ApprovalActionType = S.String;

export interface ApprovalAction {
  toolUseId?: string;
  interruptId?: string;
  approvalId?: string;
  buttonText?: string;
  action?: ApprovalActionType;
}
const ApprovalAction = /*@__PURE__*/ __L.at(__c27, 5) as any as S.Schema<ApprovalAction>;
export interface SendMessageContext {
  currentPage?: string;
  lastMessage?: string;
  userActionResponse?: string;
  approvalAction?: ApprovalAction;
}
const SendMessageContext = /*@__PURE__*/ __L.at(__c27, 6) as any as S.Schema<SendMessageContext>;
export type AssetIdList = string[];
const AssetIdList = DynatraceResourceList as any as S.Schema<AssetIdList>;
export interface SendMessageRequest {
  agentSpaceId: string;
  executionId: string;
  content: string;
  context?: SendMessageContext;
  userId?: string;
  assetIds?: string[];
  modelTier?: string;
}
const SendMessageRequest = /*@__PURE__*/ __L.at(__c27, 7) as any as S.Schema<SendMessageRequest>;
export interface SendMessageResponseCreatedEvent {
  responseId?: string;
  sequenceNumber?: number;
}
const SendMessageResponseCreatedEvent = /*@__PURE__*/ __L.at(
  __c28,
  0,
) as any as S.Schema<SendMessageResponseCreatedEvent>;
export interface SendMessageResponseInProgressEvent {
  responseId?: string;
  sequenceNumber?: number;
}
const SendMessageResponseInProgressEvent =
  SendMessageResponseCreatedEvent as any as S.Schema<SendMessageResponseInProgressEvent>;
export interface SendMessageUsageInfo {
  inputTokens?: number;
  outputTokens?: number;
  totalTokens?: number;
}
const SendMessageUsageInfo = /*@__PURE__*/ __L.at(
  __c28,
  1,
) as any as S.Schema<SendMessageUsageInfo>;
export interface SendMessageResponseCompletedEvent {
  responseId?: string;
  usage?: SendMessageUsageInfo;
  sequenceNumber?: number;
}
const SendMessageResponseCompletedEvent = /*@__PURE__*/ __L.at(
  __c28,
  2,
) as any as S.Schema<SendMessageResponseCompletedEvent>;
export interface SendMessageResponseFailedEvent {
  responseId?: string;
  errorCode?: string;
  errorMessage?: string;
  sequenceNumber?: number;
}
const SendMessageResponseFailedEvent = /*@__PURE__*/ __L.at(
  __c28,
  3,
) as any as S.Schema<SendMessageResponseFailedEvent>;
export interface SendMessageSummaryEvent {
  content?: string;
  sequenceNumber?: number;
}
const SendMessageSummaryEvent = /*@__PURE__*/ __L.at(
  __c28,
  4,
) as any as S.Schema<SendMessageSummaryEvent>;
export interface SendMessageHeartbeatEvent {}
const SendMessageHeartbeatEvent =
  MCPServerSplunkConfiguration as any as S.Schema<SendMessageHeartbeatEvent>;
export interface SendMessageContentBlockStartEvent {
  index?: number;
  type?: string;
  id?: string;
  parentId?: string;
  sequenceNumber?: number;
}
const SendMessageContentBlockStartEvent = /*@__PURE__*/ __L.at(
  __c28,
  5,
) as any as S.Schema<SendMessageContentBlockStartEvent>;
export interface SendMessageTextDelta {
  text?: string;
}
const SendMessageTextDelta = /*@__PURE__*/ __L.at(
  __c28,
  6,
) as any as S.Schema<SendMessageTextDelta>;
export interface SendMessageJsonDelta {
  partialJson?: string;
}
const SendMessageJsonDelta = /*@__PURE__*/ __L.at(
  __c28,
  7,
) as any as S.Schema<SendMessageJsonDelta>;
export type SendMessageContentBlockDelta =
  | { textDelta: SendMessageTextDelta; jsonDelta?: never }
  | { textDelta?: never; jsonDelta: SendMessageJsonDelta };
const SendMessageContentBlockDelta = /*@__PURE__*/ __L.at(__c29, 0);
export interface SendMessageContentBlockDeltaEvent {
  index?: number;
  delta?: SendMessageContentBlockDelta;
  sequenceNumber?: number;
}
const SendMessageContentBlockDeltaEvent = /*@__PURE__*/ __L.at(
  __c29,
  1,
) as any as S.Schema<SendMessageContentBlockDeltaEvent>;
export interface SendMessageContentBlockStopEvent {
  index?: number;
  type?: string;
  text?: string;
  last?: boolean;
  sequenceNumber?: number;
}
const SendMessageContentBlockStopEvent = /*@__PURE__*/ __L.at(
  __c29,
  2,
) as any as S.Schema<SendMessageContentBlockStopEvent>;
export type SendMessageEvents =
  | {
      responseCreated: SendMessageResponseCreatedEvent;
      responseInProgress?: never;
      responseCompleted?: never;
      responseFailed?: never;
      summary?: never;
      heartbeat?: never;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop?: never;
    }
  | {
      responseCreated?: never;
      responseInProgress: SendMessageResponseInProgressEvent;
      responseCompleted?: never;
      responseFailed?: never;
      summary?: never;
      heartbeat?: never;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop?: never;
    }
  | {
      responseCreated?: never;
      responseInProgress?: never;
      responseCompleted: SendMessageResponseCompletedEvent;
      responseFailed?: never;
      summary?: never;
      heartbeat?: never;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop?: never;
    }
  | {
      responseCreated?: never;
      responseInProgress?: never;
      responseCompleted?: never;
      responseFailed: SendMessageResponseFailedEvent;
      summary?: never;
      heartbeat?: never;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop?: never;
    }
  | {
      responseCreated?: never;
      responseInProgress?: never;
      responseCompleted?: never;
      responseFailed?: never;
      summary: SendMessageSummaryEvent;
      heartbeat?: never;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop?: never;
    }
  | {
      responseCreated?: never;
      responseInProgress?: never;
      responseCompleted?: never;
      responseFailed?: never;
      summary?: never;
      heartbeat: SendMessageHeartbeatEvent;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop?: never;
    }
  | {
      responseCreated?: never;
      responseInProgress?: never;
      responseCompleted?: never;
      responseFailed?: never;
      summary?: never;
      heartbeat?: never;
      contentBlockStart: SendMessageContentBlockStartEvent;
      contentBlockDelta?: never;
      contentBlockStop?: never;
    }
  | {
      responseCreated?: never;
      responseInProgress?: never;
      responseCompleted?: never;
      responseFailed?: never;
      summary?: never;
      heartbeat?: never;
      contentBlockStart?: never;
      contentBlockDelta: SendMessageContentBlockDeltaEvent;
      contentBlockStop?: never;
    }
  | {
      responseCreated?: never;
      responseInProgress?: never;
      responseCompleted?: never;
      responseFailed?: never;
      summary?: never;
      heartbeat?: never;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop: SendMessageContentBlockStopEvent;
    };
const SendMessageEvents = /*@__PURE__*/ __L.at(__c29, 3) as any as S.Schema<
  stream.Stream<SendMessageEvents, Error, never>
>;
export interface SendMessageResponse {
  events: stream.Stream<SendMessageEvents, Error, never>;
}
const SendMessageResponse = /*@__PURE__*/ __L.at(__c29, 4) as any as S.Schema<SendMessageResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c29, 5) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = MCPServerSplunkConfiguration as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = DynatraceResourceList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c29,
  6,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse =
  MCPServerSplunkConfiguration as any as S.Schema<UntagResourceResponse>;
export interface UpdateAgentSpaceInput {
  agentSpaceId: string;
  name?: string;
  description?: string | redacted.Redacted<string>;
  locale?: string;
  preferences?: { [key: string]: boolean | undefined };
}
const UpdateAgentSpaceInput = /*@__PURE__*/ __L.at(
  __c29,
  7,
) as any as S.Schema<UpdateAgentSpaceInput>;
export interface UpdateAgentSpaceOutput {
  agentSpace: AgentSpace;
}
const UpdateAgentSpaceOutput = /*@__PURE__*/ __L.at(
  __c30,
  0,
) as any as S.Schema<UpdateAgentSpaceOutput>;
export type ToolIdentifier = string;
export type ApprovalPinKey = string;
export type ApprovalPinValue = string;
export type ApprovalArgumentPins = { [key: string]: string | undefined };
const ApprovalArgumentPins = /*@__PURE__*/ __L.at(__c30, 1);
export interface ApprovalPattern {
  tool: string;
  argumentPins: { [key: string]: string | undefined };
}
const ApprovalPattern = /*@__PURE__*/ __L.at(__c30, 2) as any as S.Schema<ApprovalPattern>;
export type ApprovalReason = string;
export interface UpdateApprovalActionRequest {
  agentSpaceId: string;
  approvalId: string;
  action: ApprovalActionType;
  finalPattern?: ApprovalPattern;
  reason?: string;
  ttlSeconds?: number;
  singleUse?: boolean;
}
const UpdateApprovalActionRequest = /*@__PURE__*/ __L.at(
  __c30,
  3,
) as any as S.Schema<UpdateApprovalActionRequest>;
export type ApprovalStatus =
  | "PENDING"
  | "APPROVED"
  | "REJECTED"
  | "REVOKED"
  | "REDEEMED"
  | (string & {});
const ApprovalStatus = S.String;

export interface UpdateApprovalActionResponse {
  approvalId: string;
  status: ApprovalStatus;
  expiresAt?: Date;
}
const UpdateApprovalActionResponse = /*@__PURE__*/ __L.at(
  __c30,
  4,
) as any as S.Schema<UpdateApprovalActionResponse>;
export interface UpdateAssetRequest {
  agentSpaceId: string;
  assetId: string;
  metadata?: any;
  content?: AssetContent;
  clientToken?: string;
}
const UpdateAssetRequest = /*@__PURE__*/ __L.at(__c30, 5) as any as S.Schema<UpdateAssetRequest>;
export interface UpdateAssetResponse {
  asset: Asset;
}
const UpdateAssetResponse = CreateAssetResponse as any as S.Schema<UpdateAssetResponse>;
export interface UpdateAssetFileRequest {
  agentSpaceId: string;
  assetId: string;
  path: string;
  content?: AssetFileBody;
  metadata?: any;
  clientToken?: string;
}
const UpdateAssetFileRequest = /*@__PURE__*/ __L.at(
  __c30,
  6,
) as any as S.Schema<UpdateAssetFileRequest>;
export interface UpdateAssetFileResponse {
  file: AssetFile;
}
const UpdateAssetFileResponse = CreateAssetFileResponse as any as S.Schema<UpdateAssetFileResponse>;
export interface UpdateAssociationInput {
  agentSpaceId: string;
  associationId: string;
  configuration: ServiceConfiguration;
  capabilities?: { [key: string]: CapabilityConfiguration | undefined };
}
const UpdateAssociationInput = /*@__PURE__*/ __L.at(
  __c30,
  7,
) as any as S.Schema<UpdateAssociationInput>;
export interface UpdateAssociationOutput {
  association: Association;
  webhook?: GenericWebhook;
}
const UpdateAssociationOutput = AssociateServiceOutput as any as S.Schema<UpdateAssociationOutput>;
export interface UpdateBacklogTaskRequest {
  agentSpaceId: string;
  taskId: string;
  taskStatus?: TaskStatus;
  clientToken?: string;
}
const UpdateBacklogTaskRequest = /*@__PURE__*/ __L.at(
  __c31,
  0,
) as any as S.Schema<UpdateBacklogTaskRequest>;
export interface UpdateBacklogTaskResponse {
  task: Task;
}
const UpdateBacklogTaskResponse =
  CreateBacklogTaskResponse as any as S.Schema<UpdateBacklogTaskResponse>;
export interface GoalScheduleInput {
  state: SchedulerState;
}
const GoalScheduleInput = /*@__PURE__*/ __L.at(__c31, 1) as any as S.Schema<GoalScheduleInput>;
export interface UpdateGoalRequest {
  agentSpaceId: string;
  goalId: string;
  evaluationSchedule?: GoalScheduleInput;
  clientToken?: string;
}
const UpdateGoalRequest = /*@__PURE__*/ __L.at(__c31, 2) as any as S.Schema<UpdateGoalRequest>;
export interface UpdateGoalResponse {
  goal: Goal;
}
const UpdateGoalResponse = /*@__PURE__*/ __L.at(__c31, 3) as any as S.Schema<UpdateGoalResponse>;
export interface UpdateOperatorAppIdpConfigInput {
  agentSpaceId: string;
  idpClientSecret?: string | redacted.Redacted<string>;
}
const UpdateOperatorAppIdpConfigInput = /*@__PURE__*/ __L.at(
  __c31,
  4,
) as any as S.Schema<UpdateOperatorAppIdpConfigInput>;
export interface UpdateOperatorAppIdpConfigOutput {
  agentSpaceId: string;
  idp: IdpAuthConfiguration;
}
const UpdateOperatorAppIdpConfigOutput = /*@__PURE__*/ __L.at(
  __c31,
  5,
) as any as S.Schema<UpdateOperatorAppIdpConfigOutput>;
export interface UpdatePrivateConnectionCertificateInput {
  name: string;
  certificate: string;
}
const UpdatePrivateConnectionCertificateInput = /*@__PURE__*/ __L.at(
  __c31,
  6,
) as any as S.Schema<UpdatePrivateConnectionCertificateInput>;
export interface UpdatePrivateConnectionCertificateOutput {
  name: string;
  type: PrivateConnectionType;
  resourceGatewayId?: string;
  hostAddress?: string;
  vpcId?: string;
  resourceConfigurationId?: string;
  status: PrivateConnectionStatus;
  certificateExpiryTime?: Date;
  dnsResolution?: ResourceConfigDnsResolution;
  failureMessage?: string;
}
const UpdatePrivateConnectionCertificateOutput = /*@__PURE__*/ __L.at(
  __c31,
  7,
) as any as S.Schema<UpdatePrivateConnectionCertificateOutput>;
export interface UpdateRecommendationRequest {
  agentSpaceId: string;
  recommendationId: string;
  status?: RecommendationStatus;
  additionalContext?: string;
  clientToken?: string;
}
const UpdateRecommendationRequest = /*@__PURE__*/ __L.at(
  __c32,
  0,
) as any as S.Schema<UpdateRecommendationRequest>;
export interface UpdateRecommendationResponse {
  recommendation: Recommendation;
}
const UpdateRecommendationResponse =
  GetRecommendationResponse as any as S.Schema<UpdateRecommendationResponse>;
export interface UpdateTriggerRequest {
  agentSpaceId: string;
  triggerId: string;
  status?: string;
  clientToken?: string;
}
const UpdateTriggerRequest = /*@__PURE__*/ __L.at(
  __c32,
  1,
) as any as S.Schema<UpdateTriggerRequest>;
export interface UpdateTriggerResponse {
  trigger: Trigger;
}
const UpdateTriggerResponse = CreateTriggerResponse as any as S.Schema<UpdateTriggerResponse>;
export interface ValidateAwsAssociationsInput {
  agentSpaceId: string;
}
const ValidateAwsAssociationsInput = /*@__PURE__*/ __L.at(
  __c32,
  2,
) as any as S.Schema<ValidateAwsAssociationsInput>;
export interface ValidateAwsAssociationsOutput {}
const ValidateAwsAssociationsOutput =
  MCPServerSplunkConfiguration as any as S.Schema<ValidateAwsAssociationsOutput>;
export interface ValidationExceptionField {
  path: string;
  message: string;
}
const ValidationExceptionField = /*@__PURE__*/ __L.at(
  __c32,
  3,
) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFieldList = ValidationExceptionField[];
const ValidationExceptionFieldList = /*@__PURE__*/ __L.at(__c32, 4);
export type AssociateServiceError =
  | ConflictException
  | InternalServerException
  | InvalidParameterException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds a specific service association to an AgentSpace. It overwrites the existing association of the same service. Returns 201 Created on success.
 */
export const associateService: API.OperationMethod<
  AssociateServiceInput,
  AssociateServiceOutput,
  AssociateServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateServiceInput,
  output: AssociateServiceOutput,
  errors: [
    ConflictException,
    InternalServerException,
    InvalidParameterException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateService",
  endpointHostPrefix: "cp.",
}));

export type CreateAgentSpaceError =
  | ConflictException
  | InternalServerException
  | InvalidParameterException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new AgentSpace with the specified name and description. Duplicate space names are allowed.
 */
export const createAgentSpace: API.OperationMethod<
  CreateAgentSpaceInput,
  CreateAgentSpaceOutput,
  CreateAgentSpaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAgentSpaceInput,
  output: CreateAgentSpaceOutput,
  errors: [
    ConflictException,
    InternalServerException,
    InvalidParameterException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAgentSpace",
  endpointHostPrefix: "cp.",
}));

export type CreateAssetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new asset in the specified agent space
 */
export const createAsset: API.OperationMethod<
  CreateAssetRequest,
  CreateAssetResponse,
  CreateAssetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAssetRequest,
  output: CreateAssetResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAsset",
  endpointHostPrefix: "dp.",
}));

export type CreateAssetFileError =
  | AccessDeniedException
  | ConflictException
  | ContentSizeExceededException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a file in an asset
 */
export const createAssetFile: API.OperationMethod<
  CreateAssetFileRequest,
  CreateAssetFileResponse,
  CreateAssetFileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAssetFileRequest,
  output: CreateAssetFileResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ContentSizeExceededException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAssetFile",
  endpointHostPrefix: "dp.",
}));

export type CreateBacklogTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new backlog task in the specified agent space
 */
export const createBacklogTask: API.OperationMethod<
  CreateBacklogTaskRequest,
  CreateBacklogTaskResponse,
  CreateBacklogTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateBacklogTaskRequest,
  output: CreateBacklogTaskResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateBacklogTask",
  endpointHostPrefix: "dp.",
}));

export type CreateChatError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new chat execution in the specified agent space
 */
export const createChat: API.OperationMethod<
  CreateChatRequest,
  CreateChatResponse,
  CreateChatError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateChatRequest,
  output: CreateChatResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateChat",
  endpointHostPrefix: "dp.",
}));

export type CreatePrivateConnectionError =
  | AccessDeniedException
  | InternalServerException
  | InvalidParameterException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a Private Connection to a target resource.
 */
export const createPrivateConnection: API.OperationMethod<
  CreatePrivateConnectionInput,
  CreatePrivateConnectionOutput,
  CreatePrivateConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreatePrivateConnectionInput,
  output: CreatePrivateConnectionOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    InvalidParameterException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePrivateConnection",
  endpointHostPrefix: "cp.",
}));

export type CreateTriggerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new Trigger in the specified agent space
 */
export const createTrigger: API.OperationMethod<
  CreateTriggerRequest,
  CreateTriggerResponse,
  CreateTriggerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateTriggerRequest,
  output: CreateTriggerResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTrigger",
  endpointHostPrefix: "dp.",
}));

export type DeleteAgentSpaceError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an AgentSpace. This operation is idempotent and returns a 204 No Content response on success.
 */
export const deleteAgentSpace: API.OperationMethod<
  DeleteAgentSpaceInput,
  DeleteAgentSpaceOutput,
  DeleteAgentSpaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAgentSpaceInput,
  output: DeleteAgentSpaceOutput,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAgentSpace",
  endpointHostPrefix: "cp.",
}));

export type DeleteAssetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an asset and all its files from the specified agent space
 */
export const deleteAsset: API.OperationMethod<
  DeleteAssetRequest,
  DeleteAssetResponse,
  DeleteAssetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAssetRequest,
  output: DeleteAssetResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAsset",
  endpointHostPrefix: "dp.",
}));

export type DeleteAssetFileError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a file from an asset
 */
export const deleteAssetFile: API.OperationMethod<
  DeleteAssetFileRequest,
  DeleteAssetFileResponse,
  DeleteAssetFileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAssetFileRequest,
  output: DeleteAssetFileResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAssetFile",
  endpointHostPrefix: "dp.",
}));

export type DeletePrivateConnectionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a Private Connection. The deletion is asynchronous and returns DELETE_IN_PROGRESS status.
 */
export const deletePrivateConnection: API.OperationMethod<
  DeletePrivateConnectionInput,
  DeletePrivateConnectionOutput,
  DeletePrivateConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeletePrivateConnectionInput,
  output: DeletePrivateConnectionOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePrivateConnection",
  endpointHostPrefix: "cp.",
}));

export type DeleteTriggerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a Trigger from the specified agent space
 */
export const deleteTrigger: API.OperationMethod<
  DeleteTriggerRequest,
  DeleteTriggerResponse,
  DeleteTriggerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTriggerRequest,
  output: DeleteTriggerResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTrigger",
  endpointHostPrefix: "dp.",
}));

export type DeregisterServiceError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deregister a service
 */
export const deregisterService: API.OperationMethod<
  DeregisterServiceInput,
  DeregisterServiceOutput,
  DeregisterServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeregisterServiceInput,
  output: DeregisterServiceOutput,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeregisterService",
  endpointHostPrefix: "cp.",
}));

export type DescribePrivateConnectionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details of an existing Private Connection.
 */
export const describePrivateConnection: API.OperationMethod<
  DescribePrivateConnectionInput,
  DescribePrivateConnectionOutput,
  DescribePrivateConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribePrivateConnectionInput,
  output: DescribePrivateConnectionOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribePrivateConnection",
  endpointHostPrefix: "cp.",
}));

export type DisableOperatorAppError =
  | IdentityCenterServiceException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disable the Operator App for the specified AgentSpace
 */
export const disableOperatorApp: API.OperationMethod<
  DisableOperatorAppInput,
  DisableOperatorAppResponse,
  DisableOperatorAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisableOperatorAppInput,
  output: DisableOperatorAppResponse,
  errors: [
    IdentityCenterServiceException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableOperatorApp",
  endpointHostPrefix: "cp.",
}));

export type DisassociateServiceError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a specific service association from an AgentSpace. This operation is idempotent and returns a 204 No Content response on success.
 */
export const disassociateService: API.OperationMethod<
  DisassociateServiceInput,
  DisassociateServiceOutput,
  DisassociateServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateServiceInput,
  output: DisassociateServiceOutput,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateService",
  endpointHostPrefix: "cp.",
}));

export type EnableOperatorAppError =
  | IdentityCenterServiceException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enable the Operator App to access the given AgentSpace
 */
export const enableOperatorApp: API.OperationMethod<
  EnableOperatorAppInput,
  EnableOperatorAppOutput,
  EnableOperatorAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EnableOperatorAppInput,
  output: EnableOperatorAppOutput,
  errors: [
    IdentityCenterServiceException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableOperatorApp",
  endpointHostPrefix: "cp.",
}));

export type GetAccountUsageError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves monthly account usage metrics and limits for the AWS account.
 */
export const getAccountUsage: API.OperationMethod<
  GetAccountUsageInput,
  GetAccountUsageOutput,
  GetAccountUsageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccountUsageInput,
  output: GetAccountUsageOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccountUsage",
  endpointHostPrefix: "dp.",
}));

export type GetAgentSpaceError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves detailed information about a specific AgentSpace.
 */
export const getAgentSpace: API.OperationMethod<
  GetAgentSpaceInput,
  GetAgentSpaceOutput,
  GetAgentSpaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAgentSpaceInput,
  output: GetAgentSpaceOutput,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAgentSpace",
  endpointHostPrefix: "cp.",
}));

export type GetAssetError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets an asset from the specified agent space
 */
export const getAsset: API.OperationMethod<
  GetAssetRequest,
  GetAssetResponse,
  GetAssetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAssetRequest,
  output: GetAssetResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAsset",
  endpointHostPrefix: "dp.",
}));

export type GetAssetContentError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets an asset's content as a zip bundle
 */
export const getAssetContent: API.OperationMethod<
  GetAssetContentRequest,
  GetAssetContentResponse,
  GetAssetContentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAssetContentRequest,
  output: GetAssetContentResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAssetContent",
  endpointHostPrefix: "dp.",
}));

export type GetAssetFileError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a file from an asset
 */
export const getAssetFile: API.OperationMethod<
  GetAssetFileRequest,
  GetAssetFileResponse,
  GetAssetFileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAssetFileRequest,
  output: GetAssetFileResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAssetFile",
  endpointHostPrefix: "dp.",
}));

export type GetAssociationError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves given associations configured for a specific AgentSpace.
 */
export const getAssociation: API.OperationMethod<
  GetAssociationInput,
  GetAssociationOutput,
  GetAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAssociationInput,
  output: GetAssociationOutput,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAssociation",
  endpointHostPrefix: "cp.",
}));

export type GetBacklogTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a backlog task for the specified agent space and task id
 */
export const getBacklogTask: API.OperationMethod<
  GetBacklogTaskRequest,
  GetBacklogTaskResponse,
  GetBacklogTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBacklogTaskRequest,
  output: GetBacklogTaskResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBacklogTask",
  endpointHostPrefix: "dp.",
}));

export type GetOperatorAppError =
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get the full auth configuration of operator including any enabled auth flow
 */
export const getOperatorApp: API.OperationMethod<
  GetOperatorAppInput,
  GetOperatorAppOutput,
  GetOperatorAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOperatorAppInput,
  output: GetOperatorAppOutput,
  errors: [InternalServerException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetOperatorApp",
  endpointHostPrefix: "cp.",
}));

export type GetRecommendationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a specific recommendation by its ID
 */
export const getRecommendation: API.OperationMethod<
  GetRecommendationRequest,
  GetRecommendationResponse,
  GetRecommendationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetRecommendationRequest,
  output: GetRecommendationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRecommendation",
  endpointHostPrefix: "dp.",
}));

export type GetServiceError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves given service by it's unique identifier
 */
export const getService: API.OperationMethod<
  GetServiceInput,
  GetServiceOutput,
  GetServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetServiceInput,
  output: GetServiceOutput,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetService",
  endpointHostPrefix: "cp.",
}));

export type GetTriggerError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a Trigger from the specified agent space
 */
export const getTrigger: API.OperationMethod<
  GetTriggerRequest,
  GetTriggerResponse,
  GetTriggerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTriggerRequest,
  output: GetTriggerResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTrigger",
  endpointHostPrefix: "dp.",
}));

export type ListAgentSpacesError =
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all AgentSpaces with optional pagination.
 */
export const listAgentSpaces: API.PaginatedOperationMethod<
  ListAgentSpacesInput,
  ListAgentSpacesOutput,
  ListAgentSpacesError,
  Credentials | HttpClient.HttpClient,
  AgentSpace
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAgentSpacesInput,
  output: ListAgentSpacesOutput,
  errors: [InternalServerException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAgentSpaces",
  endpointHostPrefix: "cp.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "agentSpaces",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAssetFilesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists files in an asset
 */
export const listAssetFiles: API.PaginatedOperationMethod<
  ListAssetFilesRequest,
  ListAssetFilesResponse,
  ListAssetFilesError,
  Credentials | HttpClient.HttpClient,
  AssetFileSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAssetFilesRequest,
  output: ListAssetFilesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssetFiles",
  endpointHostPrefix: "dp.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAssetsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists assets in the specified agent space
 */
export const listAssets: API.PaginatedOperationMethod<
  ListAssetsRequest,
  ListAssetsResponse,
  ListAssetsError,
  Credentials | HttpClient.HttpClient,
  Asset
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAssetsRequest,
  output: ListAssetsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssets",
  endpointHostPrefix: "dp.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAssetTypesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the supported asset types
 */
export const listAssetTypes: API.PaginatedOperationMethod<
  ListAssetTypesRequest,
  ListAssetTypesResponse,
  ListAssetTypesError,
  Credentials | HttpClient.HttpClient,
  AssetTypeSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAssetTypesRequest,
  output: ListAssetTypesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssetTypes",
  endpointHostPrefix: "dp.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAssetVersionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists versions of an asset in the specified agent space
 */
export const listAssetVersions: API.PaginatedOperationMethod<
  ListAssetVersionsRequest,
  ListAssetVersionsResponse,
  ListAssetVersionsError,
  Credentials | HttpClient.HttpClient,
  AssetVersionMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAssetVersionsRequest,
  output: ListAssetVersionsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssetVersions",
  endpointHostPrefix: "dp.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAssociationsError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List all associations for given AgentSpace
 */
export const listAssociations: API.PaginatedOperationMethod<
  ListAssociationsInput,
  ListAssociationsOutput,
  ListAssociationsError,
  Credentials | HttpClient.HttpClient,
  Association
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAssociationsInput,
  output: ListAssociationsOutput,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssociations",
  endpointHostPrefix: "cp.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "associations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListBacklogTasksError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists backlog tasks in the specified agent space with optional filtering and sorting
 */
export const listBacklogTasks: API.PaginatedOperationMethod<
  ListBacklogTasksRequest,
  ListBacklogTasksResponse,
  ListBacklogTasksError,
  Credentials | HttpClient.HttpClient,
  Task
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListBacklogTasksRequest,
  output: ListBacklogTasksResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBacklogTasks",
  endpointHostPrefix: "dp.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "tasks",
    pageSize: "limit",
  } as const,
})) as any;

export type ListChatsError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a paginated list of the user's recent chat executions
 */
export const listChats: API.OperationMethod<
  ListChatsRequest,
  ListChatsResponse,
  ListChatsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListChatsRequest,
  output: ListChatsResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListChats",
  endpointHostPrefix: "dp.",
}));

export type ListExecutionsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List executions
 */
export const listExecutions: API.PaginatedOperationMethod<
  ListExecutionsRequest,
  ListExecutionsResponse,
  ListExecutionsError,
  Credentials | HttpClient.HttpClient,
  Execution
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListExecutionsRequest,
  output: ListExecutionsResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListExecutions",
  endpointHostPrefix: "dp.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "executions",
    pageSize: "limit",
  } as const,
})) as any;

export type ListGoalsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists goals in the specified agent space with optional filtering
 */
export const listGoals: API.PaginatedOperationMethod<
  ListGoalsRequest,
  ListGoalsResponse,
  ListGoalsError,
  Credentials | HttpClient.HttpClient,
  Goal
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListGoalsRequest,
  output: ListGoalsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListGoals",
  endpointHostPrefix: "dp.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "goals",
    pageSize: "limit",
  } as const,
})) as any;

export type ListJournalRecordsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List journal records for a specific execution
 */
export const listJournalRecords: API.PaginatedOperationMethod<
  ListJournalRecordsRequest,
  ListJournalRecordsResponse,
  ListJournalRecordsError,
  Credentials | HttpClient.HttpClient,
  JournalRecord
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListJournalRecordsRequest,
  output: ListJournalRecordsResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListJournalRecords",
  endpointHostPrefix: "dp.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "records",
    pageSize: "limit",
  } as const,
})) as any;

export type ListPendingMessagesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List pending messages for a specific execution.
 */
export const listPendingMessages: API.OperationMethod<
  ListPendingMessagesRequest,
  ListPendingMessagesResponse,
  ListPendingMessagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListPendingMessagesRequest,
  output: ListPendingMessagesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPendingMessages",
  endpointHostPrefix: "dp.",
}));

export type ListPrivateConnectionsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all Private Connections in the caller's account.
 */
export const listPrivateConnections: API.OperationMethod<
  ListPrivateConnectionsInput,
  ListPrivateConnectionsOutput,
  ListPrivateConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListPrivateConnectionsInput,
  output: ListPrivateConnectionsOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPrivateConnections",
  endpointHostPrefix: "cp.",
}));

export type ListRecommendationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists recommendations for the specified agent space
 */
export const listRecommendations: API.OperationMethod<
  ListRecommendationsRequest,
  ListRecommendationsResponse,
  ListRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListRecommendationsRequest,
  output: ListRecommendationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRecommendations",
  endpointHostPrefix: "dp.",
}));

export type ListServicesError =
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List a list of registered service on the account level.
 */
export const listServices: API.PaginatedOperationMethod<
  ListServicesInput,
  ListServicesOutput,
  ListServicesError,
  Credentials | HttpClient.HttpClient,
  RegisteredService
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListServicesInput,
  output: ListServicesOutput,
  errors: [InternalServerException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListServices",
  endpointHostPrefix: "cp.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "services",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists tags for the specified AWS DevOps Agent resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
  endpointHostPrefix: "cp.",
}));

export type ListTriggersError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists Triggers in the specified agent space
 */
export const listTriggers: API.PaginatedOperationMethod<
  ListTriggersRequest,
  ListTriggersResponse,
  ListTriggersError,
  Credentials | HttpClient.HttpClient,
  Trigger
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTriggersRequest,
  output: ListTriggersResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTriggers",
  endpointHostPrefix: "dp.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListWebhooksError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List all webhooks for given Association
 */
export const listWebhooks: API.OperationMethod<
  ListWebhooksInput,
  ListWebhooksOutput,
  ListWebhooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListWebhooksInput,
  output: ListWebhooksOutput,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWebhooks",
  endpointHostPrefix: "cp.",
}));

export type RegisterServiceError =
  | InternalServerException
  | InvalidParameterException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * This operation registers the specified service
 */
export const registerService: API.OperationMethod<
  RegisterServiceInput,
  RegisterServiceOutput,
  RegisterServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RegisterServiceInput,
  output: RegisterServiceOutput,
  errors: [
    InternalServerException,
    InvalidParameterException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterService",
  endpointHostPrefix: "cp.",
}));

export type SendMessageError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sends a chat message and streams the response for the specified agent space execution
 */
export const sendMessage: API.OperationMethod<
  SendMessageRequest,
  SendMessageResponse,
  SendMessageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SendMessageRequest,
  output: SendMessageResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendMessage",
  endpointHostPrefix: "dp.",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Adds or overwrites tags for the specified AWS DevOps Agent resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
  endpointHostPrefix: "cp.",
}));

export type UntagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes tags from the specified AWS DevOps Agent resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
  endpointHostPrefix: "cp.",
}));

export type UpdateAgentSpaceError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the information of an existing AgentSpace.
 */
export const updateAgentSpace: API.OperationMethod<
  UpdateAgentSpaceInput,
  UpdateAgentSpaceOutput,
  UpdateAgentSpaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAgentSpaceInput,
  output: UpdateAgentSpaceOutput,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAgentSpace",
  endpointHostPrefix: "cp.",
}));

export type UpdateApprovalActionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an approval request with the terminal decision (APPROVED or REJECTED). A single operation handles both verbs via the action enum.
 */
export const updateApprovalAction: API.OperationMethod<
  UpdateApprovalActionRequest,
  UpdateApprovalActionResponse,
  UpdateApprovalActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateApprovalActionRequest,
  output: UpdateApprovalActionResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApprovalAction",
  endpointHostPrefix: "dp.",
}));

export type UpdateAssetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an asset in the specified agent space
 */
export const updateAsset: API.OperationMethod<
  UpdateAssetRequest,
  UpdateAssetResponse,
  UpdateAssetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAssetRequest,
  output: UpdateAssetResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAsset",
  endpointHostPrefix: "dp.",
}));

export type UpdateAssetFileError =
  | AccessDeniedException
  | ConflictException
  | ContentSizeExceededException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a file in an asset
 */
export const updateAssetFile: API.OperationMethod<
  UpdateAssetFileRequest,
  UpdateAssetFileResponse,
  UpdateAssetFileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAssetFileRequest,
  output: UpdateAssetFileResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ContentSizeExceededException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAssetFile",
  endpointHostPrefix: "dp.",
}));

export type UpdateAssociationError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Partially updates the configuration of an existing service association for an AgentSpace. Present fields are fully replaced; absent fields are left unchanged. Returns 200 OK on success.
 */
export const updateAssociation: API.OperationMethod<
  UpdateAssociationInput,
  UpdateAssociationOutput,
  UpdateAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAssociationInput,
  output: UpdateAssociationOutput,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAssociation",
  endpointHostPrefix: "cp.",
}));

export type UpdateBacklogTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update an existing backlog task.
 */
export const updateBacklogTask: API.OperationMethod<
  UpdateBacklogTaskRequest,
  UpdateBacklogTaskResponse,
  UpdateBacklogTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateBacklogTaskRequest,
  output: UpdateBacklogTaskResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateBacklogTask",
  endpointHostPrefix: "dp.",
}));

export type UpdateGoalError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update an existing goal
 */
export const updateGoal: API.OperationMethod<
  UpdateGoalRequest,
  UpdateGoalResponse,
  UpdateGoalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateGoalRequest,
  output: UpdateGoalResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateGoal",
  endpointHostPrefix: "dp.",
}));

export type UpdateOperatorAppIdpConfigError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update the external Identity Provider configuration for the Operator App
 */
export const updateOperatorAppIdpConfig: API.OperationMethod<
  UpdateOperatorAppIdpConfigInput,
  UpdateOperatorAppIdpConfigOutput,
  UpdateOperatorAppIdpConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateOperatorAppIdpConfigInput,
  output: UpdateOperatorAppIdpConfigOutput,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateOperatorAppIdpConfig",
  endpointHostPrefix: "cp.",
}));

export type UpdatePrivateConnectionCertificateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the certificate associated with a Private Connection.
 */
export const updatePrivateConnectionCertificate: API.OperationMethod<
  UpdatePrivateConnectionCertificateInput,
  UpdatePrivateConnectionCertificateOutput,
  UpdatePrivateConnectionCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdatePrivateConnectionCertificateInput,
  output: UpdatePrivateConnectionCertificateOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePrivateConnectionCertificate",
  endpointHostPrefix: "cp.",
}));

export type UpdateRecommendationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing recommendation with new content, status, or metadata
 */
export const updateRecommendation: API.OperationMethod<
  UpdateRecommendationRequest,
  UpdateRecommendationResponse,
  UpdateRecommendationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateRecommendationRequest,
  output: UpdateRecommendationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRecommendation",
  endpointHostPrefix: "dp.",
}));

export type UpdateTriggerError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the status of an existing Trigger
 */
export const updateTrigger: API.OperationMethod<
  UpdateTriggerRequest,
  UpdateTriggerResponse,
  UpdateTriggerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateTriggerRequest,
  output: UpdateTriggerResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTrigger",
  endpointHostPrefix: "dp.",
}));

export type ValidateAwsAssociationsError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Validates an aws association and set status and returns a 204 No Content response on success.
 */
export const validateAwsAssociations: API.OperationMethod<
  ValidateAwsAssociationsInput,
  ValidateAwsAssociationsOutput,
  ValidateAwsAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ValidateAwsAssociationsInput,
  output: ValidateAwsAssociationsOutput,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ValidateAwsAssociations",
  endpointHostPrefix: "cp.",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          accountId: S.String,
          accountType: SourceAccountType,
          assumableRoleArn: S.String,
          externalId: S.optional(S.String),
          agentElevatedRoleArn: S.optional(S.String),
          agentElevatedRoleArnStatus: S.optional(ValidationStatus),
        }),
      ).annotate({ identifier: "SourceAwsConfiguration" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          assumableRoleArn: S.String,
          accountId: S.String,
          accountType: MonitorAccountType,
          agentElevatedRoleArn: S.optional(S.String),
          agentElevatedRoleArnStatus: S.optional(ValidationStatus),
        }),
      ).annotate({ identifier: "AWSConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          repoName: S.String,
          repoId: S.String,
          owner: S.String,
          ownerType: GithubRepoOwnerType,
          instanceIdentifier: S.optional(S.String),
          runtimeRoleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "GitHubConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({ channelName: S.optional(S.String), channelId: S.String }),
      ).annotate({ identifier: "SlackChannel" });
    case 4:
      return S.suspend(() =>
        S.Struct({ opsOncallTarget: SlackChannel, opsSRETarget: S.optional(SlackChannel) }),
      ).annotate({ identifier: "SlackTransmissionTarget" });
    case 5:
      return S.suspend(() =>
        S.Struct({ roleArn: S.String, enabled: S.optional(S.Boolean) }),
      ).annotate({
        identifier: "SlackBidirectionalConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String,
          workspaceName: S.String,
          transmissionTarget: SlackTransmissionTarget,
          bidirectional: S.optional(SlackBidirectionalConfiguration),
        }),
      ).annotate({ identifier: "SlackConfiguration" });
    case 7:
      return S.Array(S.String);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ envId: S.String, resources: S.optional(DynatraceResourceList) }),
      ).annotate({ identifier: "DynatraceConfiguration" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.optional(S.String),
          authScopes: S.optional(ServiceNowAuthenticationScopeList),
        }),
      ).annotate({ identifier: "ServiceNowConfiguration" });
    case 2:
      return S.suspend(() => S.Struct({ accountId: S.String, endpoint: S.String })).annotate({
        identifier: "MCPServerNewRelicConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ name: S.String, toolClassification: S.optional(ToolClassification) }),
      ).annotate({ identifier: "MCPToolDetail" });
    case 4:
      return S.Array(MCPToolDetail);
    case 5:
      return S.suspend(() =>
        S.Struct({ enabledElevatedTools: S.optional(MCPToolDetailsList) }),
      ).annotate({
        identifier: "MCPServerDatadogConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ tools: MCPToolsList, toolDetails: S.optional(MCPToolDetailsList) }),
      ).annotate({ identifier: "MCPServerConfiguration" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          projectId: S.String,
          projectPath: S.String,
          instanceIdentifier: S.optional(S.String),
          runtimeRoleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "GitLabConfiguration" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "MCPServerSplunkConfiguration",
      });
    case 1:
      return S.suspend(() => S.Struct({ subscriptionId: S.String })).annotate({
        identifier: "AzureConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ organizationName: S.String, projectId: S.String, projectName: S.String }),
      ).annotate({ identifier: "AzureDevOpsConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          endpoint: S.String,
          organizationId: S.optional(S.String),
          tools: S.optional(MCPToolsList),
          enabledElevatedTools: S.optional(MCPToolDetailsList),
        }),
      ).annotate({
        identifier: "MCPServerGrafanaConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ services: PagerDutyServicesList, customerEmail: SensitiveString }),
      ).annotate({ identifier: "PagerDutyConfiguration" });
    case 5:
      return S.suspend(() =>
        S.Struct({ tools: MCPToolsList, toolDetails: S.optional(MCPToolDetailsList) }),
      ).annotate({
        identifier: "MCPServerSigV4Configuration",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ sourceAws: SourceAwsConfiguration }),
        /*@__PURE__*/ S.Struct({ aws: AWSConfiguration }),
        /*@__PURE__*/ S.Struct({ github: GitHubConfiguration }),
        /*@__PURE__*/ S.Struct({ slack: SlackConfiguration }),
        /*@__PURE__*/ S.Struct({ dynatrace: DynatraceConfiguration }),
        /*@__PURE__*/ S.Struct({ servicenow: ServiceNowConfiguration }),
        /*@__PURE__*/ S.Struct({ mcpservernewrelic: MCPServerNewRelicConfiguration }),
        /*@__PURE__*/ S.Struct({ mcpserverdatadog: MCPServerDatadogConfiguration }),
        /*@__PURE__*/ S.Struct({ mcpserver: MCPServerConfiguration }),
        /*@__PURE__*/ S.Struct({ gitlab: GitLabConfiguration }),
        /*@__PURE__*/ S.Struct({ mcpserversplunk: MCPServerSplunkConfiguration }),
        /*@__PURE__*/ S.Struct({ eventChannel: EventChannelConfiguration }),
        /*@__PURE__*/ S.Struct({ azure: AzureConfiguration }),
        /*@__PURE__*/ S.Struct({ azuredevops: AzureDevOpsConfiguration }),
        /*@__PURE__*/ S.Struct({ mcpservergrafana: MCPServerGrafanaConfiguration }),
        /*@__PURE__*/ S.Struct({ pagerduty: PagerDutyConfiguration }),
        /*@__PURE__*/ S.Struct({ mcpserversigv4: MCPServerSigV4Configuration }),
        /*@__PURE__*/ S.Struct({ remoteagent: RemoteAgentConfiguration }),
        /*@__PURE__*/ S.Struct({ remoteagentsigv4: RemoteAgentSigV4Configuration }),
      ]);
    case 7:
      return S.Array(TriggerEvent);
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ patterns: TriggerRegexPatternList })).annotate({
        identifier: "PatternFilter",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          events: S.optional(TriggerEventList),
          targetBranches: S.optional(PatternFilter),
        }),
      ).annotate({ identifier: "TriggerFilterGroup" });
    case 2:
      return S.Array(TriggerFilterGroup);
    case 3:
      return S.suspend(() =>
        S.Struct({
          enabled: S.optional(S.Boolean),
          triggerFilterGroups: S.optional(TriggerFilterGroups),
        }),
      ).annotate({ identifier: "CapabilityConfiguration" });
    case 4:
      return S.Record(CapabilityType, /*@__PURE__*/ CapabilityConfiguration.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          serviceId: S.String,
          configuration: ServiceConfiguration,
          capabilities: S.optional(AssociationCapabilities),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/agentspaces/{agentSpaceId}/associations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AssociateServiceInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: S.optional(ValidationStatus),
          associationId: S.String,
          serviceId: S.String,
          configuration: ServiceConfiguration,
          capabilities: S.optional(AssociationCapabilities),
        }),
      ).annotate({ identifier: "Association" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          webhookUrl: S.optional(S.String),
          webhookId: S.optional(S.String),
          webhookType: S.optional(WebhookType),
          webhookSecret: S.optional(SensitiveString),
          apiKey: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "GenericWebhook" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ association: Association, webhook: S.optional(GenericWebhook) }),
      ).annotate({ identifier: "AssociateServiceOutput" });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 2:
      return S.Record(AgentSpacePreferenceKey, /*@__PURE__*/ S.Boolean.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(SensitiveString),
          locale: S.optional(S.String),
          kmsKeyArn: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(Tags),
          preferences: S.optional(AgentSpacePreferences),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/v1/agentspaces" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateAgentSpaceInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(SensitiveString),
          locale: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          kmsKeyArn: S.optional(S.String),
          agentSpaceId: S.String,
          preferences: S.optional(AgentSpacePreferences),
        }),
      ).annotate({ identifier: "AgentSpace" });
    case 5:
      return S.suspend(() => S.Struct({ agentSpace: AgentSpace, tags: S.optional(Tags) })).annotate(
        { identifier: "CreateAgentSpaceOutput" },
      );
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ bytes: T.Blob }),
        /*@__PURE__*/ S.Struct({ text: S.String }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({ path: S.String, body: AssetFileBody, metadata: S.optional(S.Any) }),
      ).annotate({ identifier: "AssetFileContent" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ zipFile: T.Blob })).annotate({
        identifier: "AssetZipContent",
      });
    case 1:
      return S.suspend(() => S.Struct({ url: S.String })).annotate({
        identifier: "AssetSourceUrlContent",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ file: AssetFileContent }),
        /*@__PURE__*/ S.Struct({ zip: AssetZipContent }),
        /*@__PURE__*/ S.Struct({ sourceUrl: AssetSourceUrlContent }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          assetType: S.String,
          metadata: S.optional(S.Any),
          content: AssetContent,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/asset/agent-space/{agentSpaceId}/assets" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateAssetRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          assetId: S.String,
          assetType: S.String,
          metadata: S.Any,
          version: S.Number,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "Asset" });
    case 5:
      return S.suspend(() => S.Struct({ asset: Asset })).annotate({
        identifier: "CreateAssetResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          assetId: S.String.pipe(T.HttpLabel("assetId")),
          path: S.String.pipe(T.HttpLabel("path")),
          content: AssetFileBody,
          metadata: S.optional(S.Any),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/asset/agent-space/{agentSpaceId}/assets/{assetId}/files/{path+}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateAssetFileRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          path: S.String,
          content: AssetFileBody,
          metadata: S.optional(S.Any),
          version: S.Number,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "AssetFile" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ file: AssetFile })).annotate({
        identifier: "CreateAssetFileResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          system: S.String,
          title: S.optional(S.String),
          referenceId: S.String,
          referenceUrl: S.String,
          associationId: S.String,
        }),
      ).annotate({ identifier: "ReferenceInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          reference: S.optional(ReferenceInput),
          taskType: TaskType,
          title: S.String,
          description: S.optional(S.String),
          priority: Priority,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/backlog/agent-space/{agentSpaceId}/tasks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateBacklogTaskRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String,
          taskId: S.String,
          executionId: S.optional(S.String),
          title: S.String,
          description: S.optional(S.String),
          reference: S.optional(ReferenceOutput),
          taskType: TaskType,
          priority: Priority,
          status: TaskStatus,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          version: S.Number,
          supportMetadata: S.optional(S.Any),
          metadata: S.optional(S.Any),
          primaryTaskId: S.optional(S.String),
          statusReason: S.optional(S.String),
          hasLinkedTasks: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "Task" });
    case 4:
      return S.suspend(() => S.Struct({ task: Task })).annotate({
        identifier: "CreateBacklogTaskResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          userId: S.optional(S.String).pipe(T.HttpQuery("userId")),
          userType: S.optional(UserType).pipe(T.HttpQuery("userType")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/agents/agent-space/{agentSpaceId}/chat/create" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateChatRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          executionId: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "CreateChatResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          hostAddress: S.String,
          vpcId: S.String,
          subnetIds: ListOfSubnetIds,
          securityGroupIds: S.optional(ListOfSecurityGroupIds),
          ipAddressType: S.optional(IpAddressType),
          ipv4AddressesPerEni: S.optional(S.Number),
          portRanges: S.optional(PortRanges),
          certificate: S.optional(S.String),
          dnsResolution: S.optional(ResourceConfigDnsResolution),
        }),
      ).annotate({ identifier: "ServiceManagedInput" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ resourceConfigurationId: S.String, certificate: S.optional(S.String) }),
      ).annotate({ identifier: "SelfManagedInput" });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ serviceManaged: ServiceManagedInput }),
        /*@__PURE__*/ S.Struct({ selfManaged: SelfManagedInput }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({ name: S.String, mode: PrivateConnectionMode, tags: S.optional(Tags) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/private-connections" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreatePrivateConnectionInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          type: PrivateConnectionType,
          resourceGatewayId: S.optional(S.String),
          hostAddress: S.optional(S.String),
          vpcId: S.optional(S.String),
          resourceConfigurationId: S.optional(S.String),
          status: PrivateConnectionStatus,
          certificateExpiryTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          dnsResolution: S.optional(ResourceConfigDnsResolution),
          failureMessage: S.optional(S.String),
          tags: S.optional(Tags),
        }),
      ).annotate({
        identifier: "CreatePrivateConnectionOutput",
      });
    case 4:
      return S.suspend(() => S.Struct({ expression: S.String })).annotate({
        identifier: "ScheduleCondition",
      });
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ schedule: ScheduleCondition })]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          type: S.String,
          condition: TriggerCondition,
          action: S.Any,
          status: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/trigger/agent-space/{agentSpaceId}/triggers" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateTriggerRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          triggerId: S.String,
          agentSpaceId: S.String,
          type: S.String,
          condition: TriggerCondition,
          action: S.Any,
          status: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "Trigger" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ trigger: Trigger })).annotate({
        identifier: "CreateTriggerResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/agentspaces/{agentSpaceId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteAgentSpaceInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          assetId: S.String.pipe(T.HttpLabel("assetId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/asset/agent-space/{agentSpaceId}/assets/{assetId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteAssetRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          assetId: S.String.pipe(T.HttpLabel("assetId")),
          path: S.String.pipe(T.HttpLabel("path")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/asset/agent-space/{agentSpaceId}/assets/{assetId}/files/{path+}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteAssetFileRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ name: S.String.pipe(T.HttpLabel("name")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/private-connections/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeletePrivateConnectionInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ name: S.String, status: PrivateConnectionStatus }),
      ).annotate({
        identifier: "DeletePrivateConnectionOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          triggerId: S.String.pipe(T.HttpLabel("triggerId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/trigger/agent-space/{agentSpaceId}/triggers/{triggerId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteTriggerRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ serviceId: S.String.pipe(T.HttpLabel("serviceId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/services/{serviceId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeregisterServiceInput" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ name: S.String.pipe(T.HttpLabel("name")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/private-connections/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribePrivateConnectionInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          authFlow: S.optional(AuthFlow).pipe(T.HttpHeader("x-amzn-app-auth-flow")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/agentspaces/{agentSpaceId}/operator" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DisableOperatorAppInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          associationId: S.String.pipe(T.HttpLabel("associationId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v1/agentspaces/{agentSpaceId}/associations/{associationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DisassociateServiceInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          authFlow: AuthFlow,
          operatorAppRoleArn: S.String,
          idcInstanceArn: S.optional(S.String),
          issuerUrl: S.optional(S.String),
          idpClientId: S.optional(S.String),
          idpClientSecret: S.optional(SensitiveString),
          provider: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/agentspaces/{agentSpaceId}/operator" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "EnableOperatorAppInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          operatorAppRoleArn: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "IamAuthConfiguration" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          operatorAppRoleArn: S.String,
          idcInstanceArn: S.String,
          idcApplicationArn: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "IdcAuthConfiguration" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          issuerUrl: S.String,
          clientId: S.String,
          operatorAppRoleArn: S.String,
          provider: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "IdpAuthConfiguration" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String,
          operatorAppUrl: S.optional(S.String),
          iam: S.optional(IamAuthConfiguration),
          idc: S.optional(IdcAuthConfiguration),
          idp: S.optional(IdpAuthConfiguration),
        }),
      ).annotate({ identifier: "EnableOperatorAppOutput" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/usage/account" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetAccountUsageInput" });
    case 1:
      return S.suspend(() => S.Struct({ limit: S.Number, usage: S.Number })).annotate({
        identifier: "UsageMetric",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          monthlyAccountInvestigationHours: S.optional(UsageMetric),
          monthlyAccountEvaluationHours: S.optional(UsageMetric),
          monthlyAccountSystemLearningHours: S.optional(UsageMetric),
          monthlyAccountOnDemandHours: S.optional(UsageMetric),
          usagePeriodStartTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          usagePeriodEndTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "GetAccountUsageOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/agentspaces/{agentSpaceId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAgentSpaceInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          assetId: S.String.pipe(T.HttpLabel("assetId")),
          assetVersion: S.optional(S.Number).pipe(T.HttpQuery("assetVersion")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/asset/agent-space/{agentSpaceId}/assets/{assetId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAssetRequest" });
    case 5:
      return S.suspend(() => S.Struct({ asset: Asset })).annotate({
        identifier: "GetAssetResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          assetId: S.String.pipe(T.HttpLabel("assetId")),
          assetVersion: S.optional(S.Number).pipe(T.HttpQuery("assetVersion")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/asset/agent-space/{agentSpaceId}/assets/{assetId}/content",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAssetContentRequest" });
    case 7:
      return S.suspend(() => S.Struct({ content: AssetZipContent, version: S.Number })).annotate({
        identifier: "GetAssetContentResponse",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          assetId: S.String.pipe(T.HttpLabel("assetId")),
          path: S.String.pipe(T.HttpLabel("path")),
          assetVersion: S.optional(S.Number).pipe(T.HttpQuery("assetVersion")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/asset/agent-space/{agentSpaceId}/assets/{assetId}/files/{path+}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAssetFileRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          associationId: S.String.pipe(T.HttpLabel("associationId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v1/agentspaces/{agentSpaceId}/associations/{associationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAssociationInput" });
    case 2:
      return S.suspend(() => S.Struct({ association: Association })).annotate({
        identifier: "GetAssociationOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          taskId: S.String.pipe(T.HttpLabel("taskId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/backlog/agent-space/{agentSpaceId}/tasks/{taskId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetBacklogTaskRequest" });
    case 4:
      return S.suspend(() => S.Struct({ task: Task })).annotate({
        identifier: "GetBacklogTaskResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/agentspaces/{agentSpaceId}/operator" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetOperatorAppInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          operatorAppUrl: S.optional(S.String),
          iam: S.optional(IamAuthConfiguration),
          idc: S.optional(IdcAuthConfiguration),
          idp: S.optional(IdpAuthConfiguration),
        }),
      ).annotate({ identifier: "GetOperatorAppOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          recommendationId: S.String.pipe(T.HttpLabel("recommendationId")),
          recommendationVersion: S.optional(S.Number).pipe(T.HttpQuery("recommendationVersion")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/backlog/agent-space/{agentSpaceId}/recommendations/{recommendationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetRecommendationRequest" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ summary: S.String, spec: S.optional(S.String) })).annotate({
        identifier: "RecommendationContent",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          agentSpaceArn: S.String,
          recommendationId: S.String,
          taskId: S.String,
          goalId: S.optional(S.String),
          title: S.String,
          content: RecommendationContent,
          status: RecommendationStatus,
          priority: RecommendationPriority,
          goalVersion: S.optional(S.Number),
          additionalContext: S.optional(S.String),
          rankPosition: S.optional(S.Number),
          rankedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          version: S.Number,
        }),
      ).annotate({ identifier: "Recommendation" });
    case 2:
      return S.suspend(() => S.Struct({ recommendation: Recommendation })).annotate({
        identifier: "GetRecommendationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ serviceId: S.String.pipe(T.HttpLabel("serviceId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/services/{serviceId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetServiceInput" });
    case 4:
      return S.Array(S.Any);
    case 5:
      return S.suspend(() =>
        S.Struct({
          owner: S.String,
          ownerType: GithubRepoOwnerType,
          targetUrl: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RegisteredGithubServiceDetails",
      });
    case 6:
      return S.suspend(() => S.Struct({ teamId: S.String, teamName: S.String })).annotate({
        identifier: "RegisteredSlackServiceDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          endpoint: S.String,
          authorizationMethod: MCPServerAuthorizationMethod,
          description: S.optional(SensitiveString),
          apiKeyHeader: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RegisteredMCPServerDetails",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ instanceUrl: S.optional(S.String) })).annotate({
        identifier: "RegisteredServiceNowDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          targetUrl: S.String,
          tokenType: GitLabTokenType,
          groupId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RegisteredGitLabServiceDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          accountId: S.String,
          region: NewRelicRegion,
          description: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "RegisteredNewRelicDetails",
      });
    case 3:
      return S.suspend(() => S.Struct({ organizationName: S.String })).annotate({
        identifier: "RegisteredAzureDevOpsServiceDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          tenantId: S.String,
          clientId: S.String,
          webIdentityRoleArn: S.String,
          webIdentityTokenAudiences: WebIdentityTokenAudienceList,
        }),
      ).annotate({
        identifier: "RegisteredAzureIdentityDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ endpoint: S.String, authorizationMethod: MCPServerAuthorizationMethod }),
      ).annotate({
        identifier: "RegisteredGrafanaServerDetails",
      });
    case 6:
      return S.suspend(() => S.Struct({ scopes: PagerDutyScopesList })).annotate({
        identifier: "RegisteredPagerDutyDetails",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ SensitiveString.pipe(S.optional));
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          endpoint: S.String,
          description: S.optional(SensitiveString),
          region: S.String,
          service: S.String,
          roleArn: S.String,
          mcpRoleArn: S.optional(S.String),
          customHeaders: S.optional(CustomHeaders),
        }),
      ).annotate({
        identifier: "RegisteredMCPServerSigV4Details",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          endpoint: S.String,
          description: S.optional(SensitiveString),
          authorizationMethod: RemoteAgentAuthorizationMethod,
          apiKeyHeader: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RegisteredRemoteAgentDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          endpoint: S.String,
          description: S.optional(SensitiveString),
          region: S.String,
          service: S.String,
          roleArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RegisteredRemoteAgentSigV4Details",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ github: RegisteredGithubServiceDetails }),
        /*@__PURE__*/ S.Struct({ slack: RegisteredSlackServiceDetails }),
        /*@__PURE__*/ S.Struct({ mcpserverdatadog: RegisteredMCPServerDetails }),
        /*@__PURE__*/ S.Struct({ mcpserver: RegisteredMCPServerDetails }),
        /*@__PURE__*/ S.Struct({ servicenow: RegisteredServiceNowDetails }),
        /*@__PURE__*/ S.Struct({ gitlab: RegisteredGitLabServiceDetails }),
        /*@__PURE__*/ S.Struct({ mcpserversplunk: RegisteredMCPServerDetails }),
        /*@__PURE__*/ S.Struct({ mcpservernewrelic: RegisteredNewRelicDetails }),
        /*@__PURE__*/ S.Struct({ azuredevops: RegisteredAzureDevOpsServiceDetails }),
        /*@__PURE__*/ S.Struct({ azureidentity: RegisteredAzureIdentityDetails }),
        /*@__PURE__*/ S.Struct({ mcpservergrafana: RegisteredGrafanaServerDetails }),
        /*@__PURE__*/ S.Struct({ pagerduty: RegisteredPagerDutyDetails }),
        /*@__PURE__*/ S.Struct({ mcpserversigv4: RegisteredMCPServerSigV4Details }),
        /*@__PURE__*/ S.Struct({ remoteagent: RegisteredRemoteAgentDetails }),
        /*@__PURE__*/ S.Struct({ remoteagentsigv4: RegisteredRemoteAgentSigV4Details }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          serviceId: S.String,
          serviceType: Service,
          name: S.optional(S.String),
          accessibleResources: S.optional(DocumentList),
          additionalServiceDetails: S.optional(AdditionalServiceDetails),
          kmsKeyArn: S.optional(S.String),
          privateConnectionName: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "RegisteredService" });
    case 5:
      return S.suspend(() =>
        S.Struct({ service: RegisteredService, tags: S.optional(Tags) }),
      ).annotate({ identifier: "GetServiceOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          triggerId: S.String.pipe(T.HttpLabel("triggerId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/trigger/agent-space/{agentSpaceId}/triggers/{triggerId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetTriggerRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/agentspaces/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListAgentSpacesInput" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AgentSpace);
    case 1:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), agentSpaces: AgentSpaceList }),
      ).annotate({ identifier: "ListAgentSpacesOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          assetId: S.String.pipe(T.HttpLabel("assetId")),
          assetVersion: S.optional(S.Number).pipe(T.HttpQuery("assetVersion")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/asset/agent-space/{agentSpaceId}/assets/{assetId}/files",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListAssetFilesRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          path: S.String,
          metadata: S.optional(S.Any),
          version: S.Number,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "AssetFileSummary" });
    case 4:
      return S.Array(AssetFileSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({ items: AssetFileSummaryList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListAssetFilesResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          assetType: S.optional(S.String).pipe(T.HttpQuery("assetType")),
          updatedAfter: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("updatedAfter"),
          ),
          updatedBefore: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("updatedBefore"),
          ),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/asset/agent-space/{agentSpaceId}/assets" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListAssetsRequest" });
    case 7:
      return S.Array(Asset);
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ items: AssetList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListAssetsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/asset/types" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListAssetTypesRequest" });
    case 2:
      return S.suspend(() => S.Struct({ assetType: S.String, description: S.String })).annotate({
        identifier: "AssetTypeSummary",
      });
    case 3:
      return S.Array(AssetTypeSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({ items: AssetTypeList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListAssetTypesResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          assetId: S.String.pipe(T.HttpLabel("assetId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/asset/agent-space/{agentSpaceId}/assets/{assetId}/versions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListAssetVersionsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          version: S.Number,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "AssetVersionMetadata" });
    case 7:
      return S.Array(AssetVersionMetadata);
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ items: AssetVersionMetadataList, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAssetVersionsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          filterServiceTypes: S.optional(S.String).pipe(T.HttpQuery("filterServiceTypes")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/agentspaces/{agentSpaceId}/associations/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListAssociationsInput" });
    case 2:
      return S.Array(Association);
    case 3:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), associations: AssociationsList }),
      ).annotate({ identifier: "ListAssociationsOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          createdAfter: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          createdBefore: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          priority: S.optional(PriorityList),
          status: S.optional(TaskStatusList),
          taskType: S.optional(TaskTypeList),
          primaryTaskId: S.optional(S.String),
        }),
      ).annotate({ identifier: "TaskFilter" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          filter: S.optional(TaskFilter),
          limit: S.optional(S.Number),
          nextToken: S.optional(S.String),
          sortField: S.optional(TaskSortField),
          order: S.optional(TaskSortOrder),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/backlog/agent-space/{agentSpaceId}/tasks/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListBacklogTasksRequest" });
    case 6:
      return S.Array(Task);
    case 7:
      return S.suspend(() =>
        S.Struct({ tasks: TaskList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListBacklogTasksResponse" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          userId: S.optional(S.String).pipe(T.HttpQuery("userId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/agents/agent-space/{agentSpaceId}/chat/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListChatsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          executionId: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          summary: S.optional(S.String),
        }),
      ).annotate({ identifier: "ChatExecution" });
    case 2:
      return S.Array(ChatExecution);
    case 3:
      return S.suspend(() =>
        S.Struct({ executions: ChatExecutionList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListChatsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          taskId: S.String,
          limit: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/journal/agent-space/{agentSpaceId}/executions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListExecutionsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String,
          executionId: S.String,
          parentExecutionId: S.optional(S.String),
          agentSubTask: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          executionStatus: ExecutionStatus,
          agentType: S.optional(S.String),
          uid: S.optional(S.String),
        }),
      ).annotate({ identifier: "Execution" });
    case 6:
      return S.Array(Execution);
    case 7:
      return S.suspend(() =>
        S.Struct({ executions: ExecutionList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListExecutionsResponse" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          status: S.optional(GoalStatus),
          goalType: S.optional(GoalType),
          limit: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/backlog/agent-space/{agentSpaceId}/goals/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListGoalsRequest" });
    case 1:
      return S.suspend(() => S.Struct({ description: S.String, objectives: S.String })).annotate({
        identifier: "GoalContent",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ state: SchedulerState, expression: S.optional(S.String) }),
      ).annotate({ identifier: "GoalSchedule" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          agentSpaceArn: S.String,
          goalId: S.String,
          title: S.String,
          content: GoalContent,
          status: GoalStatus,
          goalType: GoalType,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastEvaluatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastTaskId: S.optional(S.String),
          lastSuccessfulTaskId: S.optional(S.String),
          version: S.Number,
          evaluationSchedule: S.optional(GoalSchedule),
        }),
      ).annotate({ identifier: "Goal" });
    case 4:
      return S.Array(Goal);
    case 5:
      return S.suspend(() =>
        S.Struct({ goals: GoalList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListGoalsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          executionId: S.String,
          limit: S.optional(S.Number),
          nextToken: S.optional(S.String),
          recordType: S.optional(S.String),
          order: S.optional(OrderType),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/journal/agent-space/{agentSpaceId}/journalRecords" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListJournalRecordsRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ userId: S.String, userType: UserType })).annotate({
        identifier: "UserReference",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String,
          executionId: S.String,
          recordId: S.String,
          content: S.Any,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          recordType: S.String,
          userReference: S.optional(UserReference),
        }),
      ).annotate({ identifier: "JournalRecord" });
    case 1:
      return S.Array(JournalRecord);
    case 2:
      return S.suspend(() =>
        S.Struct({ records: JournalRecordList, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListJournalRecordsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          executionId: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/agents/agent-space/{agentSpaceId}/pendingMessages" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPendingMessagesRequest",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ text: S.String }),
        /*@__PURE__*/ S.Struct({ toolResult: S.Any }),
      ]);
    case 5:
      return S.Array(UserMessageBlock);
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ text: S.String }),
        /*@__PURE__*/ S.Struct({ toolUse: S.Any }),
      ]);
    case 7:
      return S.Array(AssistantMessageBlock);
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ userMessage: UserMessage }),
        /*@__PURE__*/ S.Struct({ assistantMessage: AssistantMessage }),
      ]);
    case 1:
      return S.suspend(() => S.Struct({ messageId: S.String, message: Message })).annotate({
        identifier: "PendingMessage",
      });
    case 2:
      return S.Array(PendingMessage);
    case 3:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String,
          executionId: S.String,
          messages: PendingMessages,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "ListPendingMessagesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/private-connections" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPrivateConnectionsInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          type: PrivateConnectionType,
          resourceGatewayId: S.optional(S.String),
          hostAddress: S.optional(S.String),
          vpcId: S.optional(S.String),
          resourceConfigurationId: S.optional(S.String),
          status: PrivateConnectionStatus,
          certificateExpiryTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          dnsResolution: S.optional(ResourceConfigDnsResolution),
          failureMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "PrivateConnectionSummary" });
    case 6:
      return S.Array(PrivateConnectionSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({ privateConnections: PrivateConnectionSummaryList }),
      ).annotate({
        identifier: "ListPrivateConnectionsOutput",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          taskId: S.optional(S.String),
          goalId: S.optional(S.String),
          status: S.optional(RecommendationStatus),
          priority: S.optional(RecommendationPriority),
          limit: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/backlog/agent-space/{agentSpaceId}/recommendations/list",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListRecommendationsRequest",
      });
    case 1:
      return S.Array(Recommendation);
    case 2:
      return S.suspend(() =>
        S.Struct({ recommendations: RecommendationList, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListRecommendationsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          filterServiceType: S.optional(Service).pipe(T.HttpQuery("filterServiceType")),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/v1/services/list" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListServicesInput" });
    case 4:
      return S.Array(RegisteredService);
    case 5:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), services: RegisteredServicesList }),
      ).annotate({ identifier: "ListServicesOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ tags: Tags })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/trigger/agent-space/{agentSpaceId}/triggers" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListTriggersRequest" });
    case 1:
      return S.Array(Trigger);
    case 2:
      return S.suspend(() =>
        S.Struct({ items: TriggerList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListTriggersResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          associationId: S.String.pipe(T.HttpLabel("associationId")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v1/agentspaces/{agentSpaceId}/associations/{associationId}/webhooks/list",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListWebhooksInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          webhookUrl: S.String,
          webhookType: S.optional(WebhookType),
          webhookId: S.String,
        }),
      ).annotate({ identifier: "Webhook" });
    case 5:
      return S.Array(Webhook);
    case 6:
      return S.suspend(() => S.Struct({ webhooks: WebhooksList })).annotate({
        identifier: "ListWebhooksOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          clientName: S.optional(S.String),
          clientId: SensitiveString,
          exchangeParameters: S.optional(ExchangeParameters),
          clientSecret: SensitiveString,
        }),
      ).annotate({
        identifier: "DynatraceOAuthClientCredentialsConfig",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ oAuthClientCredentials: DynatraceOAuthClientCredentialsConfig }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          accountUrn: S.String,
          authorizationConfig: S.optional(DynatraceServiceAuthorizationConfig),
        }),
      ).annotate({ identifier: "DynatraceServiceDetails" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          instanceUrl: S.String,
          authorizationConfig: S.optional(ServiceNowServiceAuthorizationConfig),
        }),
      ).annotate({ identifier: "ServiceNowServiceDetails" });
    case 3:
      return S.suspend(() => S.Struct({ returnToEndpoint: S.String })).annotate({
        identifier: "MCPServerAuthorizationDiscoveryConfig",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ authorizationDiscovery: MCPServerAuthorizationDiscoveryConfig }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          endpoint: S.String,
          description: S.optional(SensitiveString),
          authorizationConfig: DatadogAuthorizationConfig,
        }),
      ).annotate({ identifier: "DatadogServiceDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          clientName: S.optional(S.String),
          clientId: SensitiveString,
          exchangeParameters: S.optional(ExchangeParameters),
          clientSecret: SensitiveString,
          exchangeUrl: S.String,
          scopes: S.optional(Scopes),
        }),
      ).annotate({
        identifier: "MCPServerOAuthClientCredentialsConfig",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          clientName: S.optional(S.String),
          clientId: SensitiveString,
          exchangeParameters: S.optional(ExchangeParameters),
          returnToEndpoint: S.String,
          authorizationUrl: S.String,
          exchangeUrl: S.String,
          clientSecret: S.optional(SensitiveString),
          supportCodeChallenge: S.optional(S.Boolean),
          scopes: S.optional(Scopes),
        }),
      ).annotate({ identifier: "MCPServerOAuth3LOConfig" });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ apiKeyName: S.String, apiKeyValue: SensitiveString, apiKeyHeader: S.String }),
      ).annotate({ identifier: "MCPServerAPIKeyConfig" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          tokenName: S.String,
          tokenValue: SensitiveString,
          authorizationHeader: S.optional(S.String),
        }),
      ).annotate({
        identifier: "MCPServerBearerTokenConfig",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ oAuthClientCredentials: MCPServerOAuthClientCredentialsConfig }),
        /*@__PURE__*/ S.Struct({ oAuth3LO: MCPServerOAuth3LOConfig }),
        /*@__PURE__*/ S.Struct({ apiKey: MCPServerAPIKeyConfig }),
        /*@__PURE__*/ S.Struct({ bearerToken: MCPServerBearerTokenConfig }),
        /*@__PURE__*/ S.Struct({ authorizationDiscovery: MCPServerAuthorizationDiscoveryConfig }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          endpoint: S.String,
          description: S.optional(SensitiveString),
          authorizationConfig: MCPServerAuthorizationConfig,
        }),
      ).annotate({ identifier: "MCPServerDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          targetUrl: S.String,
          tokenType: GitLabTokenType,
          tokenValue: SensitiveString,
          groupId: S.optional(S.String),
        }),
      ).annotate({ identifier: "GitLabDetails" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          apiKey: SensitiveString,
          accountId: S.String,
          region: NewRelicRegion,
          applicationIds: S.optional(NewRelicApplicationIds),
          entityGuids: S.optional(NewRelicEntityGuids),
          alertPolicyIds: S.optional(NewRelicAlertPolicyIds),
        }),
      ).annotate({ identifier: "NewRelicApiKeyConfig" });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ apiKey: NewRelicApiKeyConfig })]);
    case 7:
      return S.suspend(() =>
        S.Struct({ authorizationConfig: NewRelicServiceAuthorizationConfig }),
      ).annotate({ identifier: "NewRelicServiceDetails" });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ type: S.optional(EventChannelType) })).annotate({
        identifier: "EventChannelDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ scopes: PagerDutyScopes, authorizationConfig: PagerDutyAuthorizationConfig }),
      ).annotate({ identifier: "PagerDutyDetails" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          region: S.String,
          service: S.String,
          roleArn: S.optional(S.String),
          mcpRoleArn: S.optional(S.String),
          customHeaders: S.optional(CustomHeaders),
        }),
      ).annotate({
        identifier: "MCPServerSigV4AuthorizationConfig",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          endpoint: S.String,
          description: S.optional(SensitiveString),
          authorizationConfig: MCPServerSigV4AuthorizationConfig,
        }),
      ).annotate({
        identifier: "MCPServerSigV4ServiceDetails",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ apiKey: RemoteAgentAPIKeyConfig }),
        /*@__PURE__*/ S.Struct({ oAuthClientCredentials: RemoteAgentOAuthClientCredentialsConfig }),
        /*@__PURE__*/ S.Struct({ bearerToken: RemoteAgentBearerTokenConfig }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          endpoint: S.String,
          description: S.optional(SensitiveString),
          authorizationConfig: RemoteAgentAuthorizationConfig,
        }),
      ).annotate({
        identifier: "RemoteAgentServiceDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ region: S.String, service: S.String, roleArn: S.optional(S.String) }),
      ).annotate({
        identifier: "RemoteAgentSigV4AuthorizationConfig",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          endpoint: S.String,
          description: S.optional(SensitiveString),
          authorizationConfig: RemoteAgentSigV4AuthorizationConfig,
        }),
      ).annotate({
        identifier: "RemoteAgentSigV4ServiceDetails",
      });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ dynatrace: DynatraceServiceDetails }),
        /*@__PURE__*/ S.Struct({ servicenow: ServiceNowServiceDetails }),
        /*@__PURE__*/ S.Struct({ mcpserverdatadog: DatadogServiceDetails }),
        /*@__PURE__*/ S.Struct({ mcpserver: MCPServerDetails }),
        /*@__PURE__*/ S.Struct({ gitlab: GitLabDetails }),
        /*@__PURE__*/ S.Struct({ mcpserversplunk: MCPServerDetails }),
        /*@__PURE__*/ S.Struct({ mcpservernewrelic: NewRelicServiceDetails }),
        /*@__PURE__*/ S.Struct({ eventChannel: EventChannelDetails }),
        /*@__PURE__*/ S.Struct({ mcpservergrafana: GrafanaServiceDetails }),
        /*@__PURE__*/ S.Struct({ pagerduty: PagerDutyDetails }),
        /*@__PURE__*/ S.Struct({ azureidentity: RegisteredAzureIdentityDetails }),
        /*@__PURE__*/ S.Struct({ mcpserversigv4: MCPServerSigV4ServiceDetails }),
        /*@__PURE__*/ S.Struct({ remoteagent: RemoteAgentServiceDetails }),
        /*@__PURE__*/ S.Struct({ remoteagentsigv4: RemoteAgentSigV4ServiceDetails }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          service: PostRegisterServiceSupportedService.pipe(T.HttpLabel("service")),
          serviceDetails: ServiceDetails,
          kmsKeyArn: S.optional(S.String),
          privateConnectionName: S.optional(S.String),
          targetUrlPrivateConnectionName: S.optional(S.String),
          exchangeUrlPrivateConnectionName: S.optional(S.String),
          name: S.optional(S.String),
          tags: S.optional(Tags),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/register/{service}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "RegisterServiceInput" });
    case 2:
      return S.suspend(() => S.Struct({ authorizationUrl: S.String })).annotate({
        identifier: "OAuthAdditionalStepDetails",
      });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ oauth: OAuthAdditionalStepDetails })]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          serviceId: S.optional(S.String),
          additionalStep: S.optional(AdditionalServiceRegistrationStep),
          kmsKeyArn: S.optional(S.String),
          tags: S.optional(Tags),
        }),
      ).annotate({ identifier: "RegisterServiceOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          toolUseId: S.optional(S.String),
          interruptId: S.optional(S.String),
          approvalId: S.optional(S.String),
          buttonText: S.optional(S.String),
          action: S.optional(ApprovalActionType),
        }),
      ).annotate({ identifier: "ApprovalAction" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          currentPage: S.optional(S.String),
          lastMessage: S.optional(S.String),
          userActionResponse: S.optional(S.String),
          approvalAction: S.optional(ApprovalAction),
        }),
      ).annotate({ identifier: "SendMessageContext" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          executionId: S.String,
          content: S.String,
          context: S.optional(SendMessageContext),
          userId: S.optional(S.String),
          assetIds: S.optional(AssetIdList),
          modelTier: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/agents/agent-space/{agentSpaceId}/chat/sendMessage" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SendMessageRequest" });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ responseId: S.optional(S.String), sequenceNumber: S.optional(S.Number) }),
      ).annotate({
        identifier: "SendMessageResponseCreatedEvent",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          inputTokens: S.optional(S.Number),
          outputTokens: S.optional(S.Number),
          totalTokens: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SendMessageUsageInfo" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          responseId: S.optional(S.String),
          usage: S.optional(SendMessageUsageInfo),
          sequenceNumber: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "SendMessageResponseCompletedEvent",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          responseId: S.optional(S.String),
          errorCode: S.optional(S.String),
          errorMessage: S.optional(S.String),
          sequenceNumber: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "SendMessageResponseFailedEvent",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ content: S.optional(S.String), sequenceNumber: S.optional(S.Number) }),
      ).annotate({ identifier: "SendMessageSummaryEvent" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          index: S.optional(S.Number),
          type: S.optional(S.String),
          id: S.optional(S.String),
          parentId: S.optional(S.String),
          sequenceNumber: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "SendMessageContentBlockStartEvent",
      });
    case 6:
      return S.suspend(() => S.Struct({ text: S.optional(S.String) })).annotate({
        identifier: "SendMessageTextDelta",
      });
    case 7:
      return S.suspend(() => S.Struct({ partialJson: S.optional(S.String) })).annotate({
        identifier: "SendMessageJsonDelta",
      });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ textDelta: SendMessageTextDelta }),
        /*@__PURE__*/ S.Struct({ jsonDelta: SendMessageJsonDelta }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          index: S.optional(S.Number),
          delta: S.optional(SendMessageContentBlockDelta),
          sequenceNumber: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "SendMessageContentBlockDeltaEvent",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          index: S.optional(S.Number),
          type: S.optional(S.String),
          text: S.optional(S.String),
          last: S.optional(S.Boolean),
          sequenceNumber: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "SendMessageContentBlockStopEvent",
      });
    case 3:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ responseCreated: SendMessageResponseCreatedEvent }),
          /*@__PURE__*/ S.Struct({ responseInProgress: SendMessageResponseInProgressEvent }),
          /*@__PURE__*/ S.Struct({ responseCompleted: SendMessageResponseCompletedEvent }),
          /*@__PURE__*/ S.Struct({ responseFailed: SendMessageResponseFailedEvent }),
          /*@__PURE__*/ S.Struct({ summary: SendMessageSummaryEvent }),
          /*@__PURE__*/ S.Struct({ heartbeat: SendMessageHeartbeatEvent }),
          /*@__PURE__*/ S.Struct({ contentBlockStart: SendMessageContentBlockStartEvent }),
          /*@__PURE__*/ S.Struct({ contentBlockDelta: SendMessageContentBlockDeltaEvent }),
          /*@__PURE__*/ S.Struct({ contentBlockStop: SendMessageContentBlockStopEvent }),
        ]),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({ events: SendMessageEvents.pipe(T.HttpPayload()) }),
      ).annotate({ identifier: "SendMessageResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: Tags }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          name: S.optional(S.String),
          description: S.optional(SensitiveString),
          locale: S.optional(S.String),
          preferences: S.optional(AgentSpacePreferences),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/v1/agentspaces/{agentSpaceId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateAgentSpaceInput" });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ agentSpace: AgentSpace })).annotate({
        identifier: "UpdateAgentSpaceOutput",
      });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({ tool: S.String, argumentPins: ApprovalArgumentPins }),
      ).annotate({ identifier: "ApprovalPattern" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          approvalId: S.String.pipe(T.HttpLabel("approvalId")),
          action: ApprovalActionType,
          finalPattern: S.optional(ApprovalPattern),
          reason: S.optional(S.String),
          ttlSeconds: S.optional(S.Number),
          singleUse: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/agents/agent-space/{agentSpaceId}/approvals/{approvalId}/update-action",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateApprovalActionRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          approvalId: S.String,
          status: ApprovalStatus,
          expiresAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "UpdateApprovalActionResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          assetId: S.String.pipe(T.HttpLabel("assetId")),
          metadata: S.optional(S.Any),
          content: S.optional(AssetContent),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/asset/agent-space/{agentSpaceId}/assets/{assetId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateAssetRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          assetId: S.String.pipe(T.HttpLabel("assetId")),
          path: S.String.pipe(T.HttpLabel("path")),
          content: S.optional(AssetFileBody),
          metadata: S.optional(S.Any),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/asset/agent-space/{agentSpaceId}/assets/{assetId}/files/{path+}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateAssetFileRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          associationId: S.String.pipe(T.HttpLabel("associationId")),
          configuration: ServiceConfiguration,
          capabilities: S.optional(AssociationCapabilities),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/v1/agentspaces/{agentSpaceId}/associations/{associationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateAssociationInput" });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          taskId: S.String.pipe(T.HttpLabel("taskId")),
          taskStatus: S.optional(TaskStatus),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/backlog/agent-space/{agentSpaceId}/tasks/{taskId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateBacklogTaskRequest" });
    case 1:
      return S.suspend(() => S.Struct({ state: SchedulerState })).annotate({
        identifier: "GoalScheduleInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          goalId: S.String.pipe(T.HttpLabel("goalId")),
          evaluationSchedule: S.optional(GoalScheduleInput),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/backlog/agent-space/{agentSpaceId}/goals/{goalId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateGoalRequest" });
    case 3:
      return S.suspend(() => S.Struct({ goal: Goal })).annotate({
        identifier: "UpdateGoalResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          idpClientSecret: S.optional(SensitiveString),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/v1/agentspaces/{agentSpaceId}/operator/idp" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateOperatorAppIdpConfigInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ agentSpaceId: S.String, idp: IdpAuthConfiguration }),
      ).annotate({
        identifier: "UpdateOperatorAppIdpConfigOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ name: S.String.pipe(T.HttpLabel("name")), certificate: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/private-connections/{name}/certificate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdatePrivateConnectionCertificateInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          type: PrivateConnectionType,
          resourceGatewayId: S.optional(S.String),
          hostAddress: S.optional(S.String),
          vpcId: S.optional(S.String),
          resourceConfigurationId: S.optional(S.String),
          status: PrivateConnectionStatus,
          certificateExpiryTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          dnsResolution: S.optional(ResourceConfigDnsResolution),
          failureMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdatePrivateConnectionCertificateOutput",
      });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          recommendationId: S.String.pipe(T.HttpLabel("recommendationId")),
          status: S.optional(RecommendationStatus),
          additionalContext: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/backlog/agent-space/{agentSpaceId}/recommendations/{recommendationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateRecommendationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")),
          triggerId: S.String.pipe(T.HttpLabel("triggerId")),
          status: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/trigger/agent-space/{agentSpaceId}/triggers/{triggerId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateTriggerRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ agentSpaceId: S.String.pipe(T.HttpLabel("agentSpaceId")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/agentspaces/{agentSpaceId}/associations/validate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ValidateAwsAssociationsInput",
      });
    case 3:
      return S.suspend(() => S.Struct({ path: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 4:
      return S.Array(ValidationExceptionField);
  }
}
