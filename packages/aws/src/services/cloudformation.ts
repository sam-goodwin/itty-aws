import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const ns = /*@__PURE__*/ T.XmlNamespace("http://cloudformation.amazonaws.com/doc/2010-05-15/");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "CloudFormation",
  serviceShapeName: "CloudFormation",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "cloudformation" });
const ver = /*@__PURE__*/ T.ServiceVersion("2010-05-15");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsQuery();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { Region, UseDualStack = false, UseFIPS = false, Endpoint } = p;
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
    if (UseDualStack === true) {
      return err("Invalid Configuration: Dualstack and custom endpoint are not supported");
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://cloudformation-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            if (_.getAttr(PartitionResult, "name") === "aws-us-gov") {
              return e(`https://cloudformation.${Region}.amazonaws.com`);
            }
            return e(
              `https://cloudformation-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://cloudformation.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://cloudformation.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<AlreadyExistsException>()(
    "AlreadyExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "AlreadyExistsException", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class CFNRegistryException
  extends /*@__PURE__*/ S.TaggedError<CFNRegistryException>()(
    "CFNRegistryException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "CFNRegistryException", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ChangeSetNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ChangeSetNotFoundException>()(
    "ChangeSetNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ChangeSetNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class ConcurrentResourcesLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<ConcurrentResourcesLimitExceededException>()(
    "ConcurrentResourcesLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ConcurrentResourcesLimitExceeded",
        httpResponseCode: 429,
      }),
      /*@__PURE__*/ T.HttpError(429),
    ),
  ).pipe(C.withThrottlingError) {}
export class CreatedButModifiedException
  extends /*@__PURE__*/ S.TaggedError<CreatedButModifiedException>()(
    "CreatedButModifiedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "CreatedButModifiedException", httpResponseCode: 409 }),
      /*@__PURE__*/ T.HttpError(409),
    ),
  ).pipe(C.withConflictError) {}
export class GeneratedTemplateNotFoundException
  extends /*@__PURE__*/ S.TaggedError<GeneratedTemplateNotFoundException>()(
    "GeneratedTemplateNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "GeneratedTemplateNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class HookResultNotFoundException
  extends /*@__PURE__*/ S.TaggedError<HookResultNotFoundException>()(
    "HookResultNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "HookResultNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class InsufficientCapabilitiesException
  extends /*@__PURE__*/ S.TaggedError<InsufficientCapabilitiesException>()(
    "InsufficientCapabilitiesException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "InsufficientCapabilitiesException",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidChangeSetStatusException
  extends /*@__PURE__*/ S.TaggedError<InvalidChangeSetStatusException>()(
    "InvalidChangeSetStatusException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidChangeSetStatus", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidOperationException
  extends /*@__PURE__*/ S.TaggedError<InvalidOperationException>()(
    "InvalidOperationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidOperationException", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidStateTransitionException
  extends /*@__PURE__*/ S.TaggedError<InvalidStateTransitionException>()(
    "InvalidStateTransitionException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidStateTransition", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()(
    "LimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "LimitExceededException", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class NameAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<NameAlreadyExistsException>()(
    "NameAlreadyExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "NameAlreadyExistsException", httpResponseCode: 409 }),
      /*@__PURE__*/ T.HttpError(409),
    ),
  ).pipe(C.withConflictError, C.withAlreadyExistsError) {}
export class NoUpdateToPerform
  extends /*@__PURE__*/ S.TaggedError<NoUpdateToPerform>()(
    "NoUpdateToPerform",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "ValidationError",
      message: { includes: "No updates are to be performed" },
    }),
  ) {}
export class OperationIdAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<OperationIdAlreadyExistsException>()(
    "OperationIdAlreadyExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "OperationIdAlreadyExistsException",
        httpResponseCode: 409,
      }),
      /*@__PURE__*/ T.HttpError(409),
    ),
  ).pipe(C.withConflictError, C.withAlreadyExistsError) {}
export class OperationInProgressException
  extends /*@__PURE__*/ S.TaggedError<OperationInProgressException>()(
    "OperationInProgressException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "OperationInProgressException",
        httpResponseCode: 409,
      }),
      /*@__PURE__*/ T.HttpError(409),
    ),
  ).pipe(C.withConflictError) {}
export class OperationNotFoundException
  extends /*@__PURE__*/ S.TaggedError<OperationNotFoundException>()(
    "OperationNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "OperationNotFoundException", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class OperationStatusCheckFailedException
  extends /*@__PURE__*/ S.TaggedError<OperationStatusCheckFailedException>()(
    "OperationStatusCheckFailedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ConditionalCheckFailed", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ResourceScanInProgressException
  extends /*@__PURE__*/ S.TaggedError<ResourceScanInProgressException>()(
    "ResourceScanInProgressException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ResourceScanInProgress", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ResourceScanLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<ResourceScanLimitExceededException>()(
    "ResourceScanLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ResourceScanLimitExceeded", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ResourceScanNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceScanNotFoundException>()(
    "ResourceScanNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ResourceScanNotFound", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class StackInstanceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<StackInstanceNotFoundException>()(
    "StackInstanceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "StackInstanceNotFoundException",
        httpResponseCode: 404,
      }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class StackNotFound
  extends /*@__PURE__*/ S.TaggedError<StackNotFound>()(
    "StackNotFound",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "ValidationError",
      message: { includes: "does not exist" },
    }),
  ).pipe(C.withNotFoundError) {}
export class StackNotFoundException
  extends /*@__PURE__*/ S.TaggedError<StackNotFoundException>()(
    "StackNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "StackNotFoundException", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class StackRefactorNotFoundException
  extends /*@__PURE__*/ S.TaggedError<StackRefactorNotFoundException>()(
    "StackRefactorNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "StackRefactorNotFoundException",
        httpResponseCode: 404,
      }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class StackSetNotEmptyException
  extends /*@__PURE__*/ S.TaggedError<StackSetNotEmptyException>()(
    "StackSetNotEmptyException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "StackSetNotEmptyException", httpResponseCode: 409 }),
      /*@__PURE__*/ T.HttpError(409),
    ),
  ).pipe(C.withConflictError) {}
export class StackSetNotFoundException
  extends /*@__PURE__*/ S.TaggedError<StackSetNotFoundException>()(
    "StackSetNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "StackSetNotFoundException", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class StaleRequestException
  extends /*@__PURE__*/ S.TaggedError<StaleRequestException>()(
    "StaleRequestException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "StaleRequestException", httpResponseCode: 409 }),
      /*@__PURE__*/ T.HttpError(409),
    ),
  ).pipe(C.withConflictError) {}
export class TokenAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<TokenAlreadyExistsException>()(
    "TokenAlreadyExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TokenAlreadyExistsException", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class TypeConfigurationNotFoundException
  extends /*@__PURE__*/ S.TaggedError<TypeConfigurationNotFoundException>()(
    "TypeConfigurationNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "TypeConfigurationNotFoundException",
        httpResponseCode: 404,
      }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class TypeNotFoundException
  extends /*@__PURE__*/ S.TaggedError<TypeNotFoundException>()(
    "TypeNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TypeNotFoundException", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export interface ActivateOrganizationsAccessInput {}
export interface ActivateOrganizationsAccessOutput {}
export type ThirdPartyType = "RESOURCE" | "MODULE" | "HOOK" | (string & {});
export type ThirdPartyTypeArn = string;
export type PublisherId = string;
export type TypeName = string;
export type AutoUpdate = boolean;
export type RoleARN2 = string;
export type LogGroupName = string;
export interface LoggingConfig {
  LogRoleArn?: string;
  LogGroupName?: string;
}
export type VersionBump = "MAJOR" | "MINOR" | (string & {});
export type MajorVersion = number;
export interface ActivateTypeInput {
  Type?: ThirdPartyType;
  PublicTypeArn?: string;
  PublisherId?: string;
  TypeName?: string;
  TypeNameAlias?: string;
  AutoUpdate?: boolean;
  LoggingConfig?: LoggingConfig;
  ExecutionRoleArn?: string;
  VersionBump?: VersionBump;
  MajorVersion?: number;
}
export type PrivateTypeArn = string;
export interface ActivateTypeOutput {
  Arn?: string;
}
export type TypeArn = string;
export type TypeConfigurationAlias = string;
export type TypeConfigurationArn = string;
export interface TypeConfigurationIdentifier {
  TypeArn?: string;
  TypeConfigurationAlias?: string;
  TypeConfigurationArn?: string;
  Type?: ThirdPartyType;
  TypeName?: string;
}
export type TypeConfigurationIdentifiers = TypeConfigurationIdentifier[];
export interface BatchDescribeTypeConfigurationsInput {
  TypeConfigurationIdentifiers?: TypeConfigurationIdentifier[];
}
export type ErrorCode = string;
export type ErrorMessage = string;
export interface BatchDescribeTypeConfigurationsError_ {
  ErrorCode?: string;
  ErrorMessage?: string;
  TypeConfigurationIdentifier?: TypeConfigurationIdentifier;
}
export type BatchDescribeTypeConfigurationsErrors = BatchDescribeTypeConfigurationsError_[];
export type UnprocessedTypeConfigurations = TypeConfigurationIdentifier[];
export type TypeConfiguration = string;
export type IsDefaultConfiguration = boolean;
export interface TypeConfigurationDetails {
  Arn?: string;
  Alias?: string;
  Configuration?: string;
  LastUpdated?: Date;
  TypeArn?: string;
  TypeName?: string;
  IsDefaultConfiguration?: boolean;
}
export type TypeConfigurationDetailsList = TypeConfigurationDetails[];
export interface BatchDescribeTypeConfigurationsOutput {
  Errors?: BatchDescribeTypeConfigurationsError_[];
  UnprocessedTypeConfigurations?: TypeConfigurationIdentifier[];
  TypeConfigurations?: TypeConfigurationDetails[];
}
export type StackName = string;
export type ClientRequestToken = string;
export interface CancelUpdateStackInput {
  StackName?: string;
  ClientRequestToken?: string;
}
export interface CancelUpdateStackResponse {}
export type StackNameOrId = string;
export type RoleARN = string;
export type ResourceToSkip = string;
export type ResourcesToSkip = string[];
export interface ContinueUpdateRollbackInput {
  StackName?: string;
  RoleARN?: string;
  ResourcesToSkip?: string[];
  ClientRequestToken?: string;
}
export interface ContinueUpdateRollbackOutput {}
export type TemplateBody = string;
export type TemplateURL = string;
export type UsePreviousTemplate = boolean;
export type ParameterKey = string;
export type ParameterValue = string;
export type UsePreviousValue = boolean;
export interface Parameter {
  ParameterKey?: string;
  ParameterValue?: string;
  UsePreviousValue?: boolean;
  ResolvedValue?: string;
}
export type Parameters = Parameter[];
export type Capability =
  | "CAPABILITY_IAM"
  | "CAPABILITY_NAMED_IAM"
  | "CAPABILITY_AUTO_EXPAND"
  | (string & {});
export type Capabilities = Capability[];
export type ResourceType = string;
export type ResourceTypes = string[];
export type Arn = string;
export type Type = string;
export interface RollbackTrigger {
  Arn?: string;
  Type?: string;
}
export type RollbackTriggers = RollbackTrigger[];
export type MonitoringTimeInMinutes = number;
export interface RollbackConfiguration {
  RollbackTriggers?: RollbackTrigger[];
  MonitoringTimeInMinutes?: number;
}
export type NotificationARN = string;
export type NotificationARNs = string[];
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key?: string;
  Value?: string;
}
export type Tags = Tag[];
export type ChangeSetName = string;
export type ClientToken = string;
export type Description = string;
export type ChangeSetType = "CREATE" | "UPDATE" | "IMPORT" | (string & {});
export type LogicalResourceId = string;
export type ResourceIdentifierPropertyKey = string;
export type ResourceIdentifierPropertyValue = string;
export type ResourceIdentifierProperties = { [key: string]: string | undefined };
export interface ResourceToImport {
  ResourceType?: string;
  LogicalResourceId?: string;
  ResourceIdentifier?: { [key: string]: string | undefined };
}
export type ResourcesToImport = ResourceToImport[];
export type IncludeNestedStacks = boolean;
export type OnStackFailure = "DO_NOTHING" | "ROLLBACK" | "DELETE" | (string & {});
export type ImportExistingResources = boolean;
export type DeploymentMode = "REVERT_DRIFT" | (string & {});
export type DeploymentConfigMode = "STANDARD" | "EXPRESS" | (string & {});
export type DisableRollback = boolean;
export interface DeploymentConfig {
  Mode?: DeploymentConfigMode;
  DisableRollback?: boolean;
}
export type DisableValidation = boolean;
export interface CreateChangeSetInput {
  StackName?: string;
  TemplateBody?: string;
  TemplateURL?: string;
  UsePreviousTemplate?: boolean;
  Parameters?: Parameter[];
  Capabilities?: Capability[];
  ResourceTypes?: string[];
  RoleARN?: string;
  RollbackConfiguration?: RollbackConfiguration;
  NotificationARNs?: string[];
  Tags?: Tag[];
  ChangeSetName?: string;
  ClientToken?: string;
  Description?: string;
  ChangeSetType?: ChangeSetType;
  ResourcesToImport?: ResourceToImport[];
  IncludeNestedStacks?: boolean;
  OnStackFailure?: OnStackFailure;
  ImportExistingResources?: boolean;
  DeploymentMode?: DeploymentMode;
  DeploymentConfig?: DeploymentConfig;
  DisableValidation?: boolean;
}
export type ChangeSetId = string;
export type StackId = string;
export interface CreateChangeSetOutput {
  Id?: string;
  StackId?: string;
}
export interface ResourceDefinition {
  ResourceType?: string;
  LogicalResourceId?: string;
  ResourceIdentifier?: { [key: string]: string | undefined };
}
export type ResourceDefinitions = ResourceDefinition[];
export type GeneratedTemplateName = string;
export type GeneratedTemplateDeletionPolicy = "DELETE" | "RETAIN" | (string & {});
export type GeneratedTemplateUpdateReplacePolicy = "DELETE" | "RETAIN" | (string & {});
export interface TemplateConfiguration {
  DeletionPolicy?: GeneratedTemplateDeletionPolicy;
  UpdateReplacePolicy?: GeneratedTemplateUpdateReplacePolicy;
}
export interface CreateGeneratedTemplateInput {
  Resources?: ResourceDefinition[];
  GeneratedTemplateName?: string;
  StackName?: string;
  TemplateConfiguration?: TemplateConfiguration;
}
export type GeneratedTemplateId = string;
export interface CreateGeneratedTemplateOutput {
  GeneratedTemplateId?: string;
}
export type TimeoutMinutes = number;
export type OnFailure = "DO_NOTHING" | "ROLLBACK" | "DELETE" | (string & {});
export type StackPolicyBody = string;
export type StackPolicyURL = string;
export type EnableTerminationProtection = boolean;
export type RetainExceptOnCreate = boolean;
export interface CreateStackInput {
  StackName?: string;
  TemplateBody?: string;
  TemplateURL?: string;
  Parameters?: Parameter[];
  DisableRollback?: boolean;
  RollbackConfiguration?: RollbackConfiguration;
  TimeoutInMinutes?: number;
  NotificationARNs?: string[];
  Capabilities?: Capability[];
  ResourceTypes?: string[];
  RoleARN?: string;
  OnFailure?: OnFailure;
  StackPolicyBody?: string;
  StackPolicyURL?: string;
  Tags?: Tag[];
  ClientRequestToken?: string;
  EnableTerminationProtection?: boolean;
  RetainExceptOnCreate?: boolean;
  DeploymentConfig?: DeploymentConfig;
  DisableValidation?: boolean;
}
export type OperationId = string;
export interface CreateStackOutput {
  StackId?: string;
  OperationId?: string;
}
export type StackSetName = string;
export type Account = string;
export type AccountList = string[];
export type AccountsUrl = string;
export type OrganizationalUnitId = string;
export type OrganizationalUnitIdList = string[];
export type AccountFilterType = "NONE" | "INTERSECTION" | "DIFFERENCE" | "UNION" | (string & {});
export interface DeploymentTargets {
  Accounts?: string[];
  AccountsUrl?: string;
  OrganizationalUnitIds?: string[];
  AccountFilterType?: AccountFilterType;
}
export type Region = string;
export type RegionList = string[];
export type RegionConcurrencyType = "SEQUENTIAL" | "PARALLEL" | (string & {});
export type FailureToleranceCount = number;
export type FailureTolerancePercentage = number;
export type MaxConcurrentCount = number;
export type MaxConcurrentPercentage = number;
export type ConcurrencyMode = "STRICT_FAILURE_TOLERANCE" | "SOFT_FAILURE_TOLERANCE" | (string & {});
export interface StackSetOperationPreferences {
  RegionConcurrencyType?: RegionConcurrencyType;
  RegionOrder?: string[];
  FailureToleranceCount?: number;
  FailureTolerancePercentage?: number;
  MaxConcurrentCount?: number;
  MaxConcurrentPercentage?: number;
  ConcurrencyMode?: ConcurrencyMode;
}
export type CallAs = "SELF" | "DELEGATED_ADMIN" | (string & {});
export interface CreateStackInstancesInput {
  StackSetName?: string;
  Accounts?: string[];
  DeploymentTargets?: DeploymentTargets;
  Regions?: string[];
  ParameterOverrides?: Parameter[];
  OperationPreferences?: StackSetOperationPreferences;
  OperationId?: string;
  CallAs?: CallAs;
}
export interface CreateStackInstancesOutput {
  OperationId?: string;
}
export type EnableStackCreation = boolean;
export interface ResourceLocation {
  StackName?: string;
  LogicalResourceId?: string;
}
export interface ResourceMapping {
  Source?: ResourceLocation;
  Destination?: ResourceLocation;
}
export type ResourceMappings = ResourceMapping[];
export interface StackDefinition {
  StackName?: string;
  TemplateBody?: string;
  TemplateURL?: string;
}
export type StackDefinitions = StackDefinition[];
export interface CreateStackRefactorInput {
  Description?: string;
  EnableStackCreation?: boolean;
  ResourceMappings?: ResourceMapping[];
  StackDefinitions?: StackDefinition[];
}
export type StackRefactorId = string;
export interface CreateStackRefactorOutput {
  StackRefactorId: string;
}
export type ExecutionRoleName = string;
export type PermissionModels = "SERVICE_MANAGED" | "SELF_MANAGED" | (string & {});
export type AutoDeploymentNullable = boolean;
export type RetainStacksOnAccountRemovalNullable = boolean;
export type StackSetARN = string;
export type StackSetARNList = string[];
export interface AutoDeployment {
  Enabled?: boolean;
  RetainStacksOnAccountRemoval?: boolean;
  DependsOn?: string[];
}
export type ManagedExecutionNullable = boolean;
export interface ManagedExecution {
  Active?: boolean;
}
export interface CreateStackSetInput {
  StackSetName?: string;
  Description?: string;
  TemplateBody?: string;
  TemplateURL?: string;
  StackId?: string;
  Parameters?: Parameter[];
  Capabilities?: Capability[];
  Tags?: Tag[];
  AdministrationRoleARN?: string;
  ExecutionRoleName?: string;
  PermissionModel?: PermissionModels;
  AutoDeployment?: AutoDeployment;
  CallAs?: CallAs;
  ClientRequestToken?: string;
  ManagedExecution?: ManagedExecution;
}
export type StackSetId = string;
export interface CreateStackSetOutput {
  StackSetId?: string;
}
export interface DeactivateOrganizationsAccessInput {}
export interface DeactivateOrganizationsAccessOutput {}
export interface DeactivateTypeInput {
  TypeName?: string;
  Type?: ThirdPartyType;
  Arn?: string;
}
export interface DeactivateTypeOutput {}
export type ChangeSetNameOrId = string;
export interface DeleteChangeSetInput {
  ChangeSetName?: string;
  StackName?: string;
}
export interface DeleteChangeSetOutput {}
export interface DeleteGeneratedTemplateInput {
  GeneratedTemplateName?: string;
}
export interface DeleteGeneratedTemplateResponse {}
export type RetainResources = string[];
export type DeletionMode = "STANDARD" | "FORCE_DELETE_STACK" | (string & {});
export interface DeleteStackInput {
  StackName?: string;
  RetainResources?: string[];
  RoleARN?: string;
  ClientRequestToken?: string;
  DeletionMode?: DeletionMode;
  DeploymentConfig?: DeploymentConfig;
}
export interface DeleteStackResponse {}
export type RetainStacks = boolean;
export interface DeleteStackInstancesInput {
  StackSetName?: string;
  Accounts?: string[];
  DeploymentTargets?: DeploymentTargets;
  Regions?: string[];
  OperationPreferences?: StackSetOperationPreferences;
  RetainStacks?: boolean;
  OperationId?: string;
  CallAs?: CallAs;
}
export interface DeleteStackInstancesOutput {
  OperationId?: string;
}
export interface DeleteStackSetInput {
  StackSetName?: string;
  CallAs?: CallAs;
}
export interface DeleteStackSetOutput {}
export type RegistryType = "RESOURCE" | "MODULE" | "HOOK" | (string & {});
export type TypeVersionId = string;
export interface DeregisterTypeInput {
  Arn?: string;
  Type?: RegistryType;
  TypeName?: string;
  VersionId?: string;
}
export interface DeregisterTypeOutput {}
export type NextToken = string;
export interface DescribeAccountLimitsInput {
  NextToken?: string;
}
export type LimitName = string;
export type LimitValue = number;
export interface AccountLimit {
  Name?: string;
  Value?: number;
}
export type AccountLimitList = AccountLimit[];
export interface DescribeAccountLimitsOutput {
  AccountLimits?: AccountLimit[];
  NextToken?: string;
}
export type IncludePropertyValues = boolean;
export interface DescribeChangeSetInput {
  ChangeSetName?: string;
  StackName?: string;
  NextToken?: string;
  IncludePropertyValues?: boolean;
}
export type CreationTime = Date;
export type ExecutionStatus =
  | "UNAVAILABLE"
  | "AVAILABLE"
  | "EXECUTE_IN_PROGRESS"
  | "EXECUTE_COMPLETE"
  | "EXECUTE_FAILED"
  | "OBSOLETE"
  | (string & {});
export type ChangeSetStatus =
  | "CREATE_PENDING"
  | "CREATE_IN_PROGRESS"
  | "CREATE_COMPLETE"
  | "DELETE_PENDING"
  | "DELETE_IN_PROGRESS"
  | "DELETE_COMPLETE"
  | "DELETE_FAILED"
  | "FAILED"
  | (string & {});
export type ChangeSetStatusReason = string;
export type StackDriftStatus = "DRIFTED" | "IN_SYNC" | "UNKNOWN" | "NOT_CHECKED" | (string & {});
export type ChangeType = "Resource" | (string & {});
export type HookInvocationCount = number;
export type PolicyAction =
  | "Delete"
  | "Retain"
  | "Snapshot"
  | "ReplaceAndDelete"
  | "ReplaceAndRetain"
  | "ReplaceAndSnapshot"
  | (string & {});
export type ChangeAction =
  | "Add"
  | "Modify"
  | "Remove"
  | "Import"
  | "Dynamic"
  | "SyncWithActual"
  | (string & {});
export type PhysicalResourceId = string;
export type Replacement = "True" | "False" | "Conditional" | (string & {});
export type ResourceAttribute =
  | "Properties"
  | "Metadata"
  | "CreationPolicy"
  | "UpdatePolicy"
  | "DeletionPolicy"
  | "UpdateReplacePolicy"
  | "Tags"
  | (string & {});
export type Scope = ResourceAttribute[];
export type StackResourceDriftStatus =
  | "IN_SYNC"
  | "MODIFIED"
  | "DELETED"
  | "NOT_CHECKED"
  | "UNKNOWN"
  | "UNSUPPORTED"
  | (string & {});
export type ResourcePropertyPath = string;
export type DriftIgnoredReason =
  | "MANAGED_BY_AWS"
  | "WRITE_ONLY_PROPERTY"
  | "SENSITIVE_PROPERTY"
  | (string & {});
export interface ResourceDriftIgnoredAttribute {
  Path?: string;
  Reason?: DriftIgnoredReason;
}
export type ResourceDriftIgnoredAttributes = ResourceDriftIgnoredAttribute[];
export type PropertyName = string;
export type RequiresRecreation = "Never" | "Conditionally" | "Always" | (string & {});
export type BeforeValue = string;
export type AfterValue = string;
export type BeforeValueFrom = "PREVIOUS_DEPLOYMENT_STATE" | "ACTUAL_STATE" | (string & {});
export type AfterValueFrom = "TEMPLATE" | (string & {});
export type ResourceDriftPreviousValue = string;
export type ResourceDriftActualValue = string;
export interface LiveResourceDrift {
  PreviousValue?: string;
  ActualValue?: string;
  DriftDetectionTimestamp?: Date;
}
export type AttributeChangeType = "Add" | "Remove" | "Modify" | "SyncWithActual" | (string & {});
export interface ResourceTargetDefinition {
  Attribute?: ResourceAttribute;
  Name?: string;
  RequiresRecreation?: RequiresRecreation;
  Path?: string;
  BeforeValue?: string;
  AfterValue?: string;
  BeforeValueFrom?: BeforeValueFrom;
  AfterValueFrom?: AfterValueFrom;
  Drift?: LiveResourceDrift;
  AttributeChangeType?: AttributeChangeType;
}
export type EvaluationType = "Static" | "Dynamic" | (string & {});
export type ChangeSource =
  | "ResourceReference"
  | "ParameterReference"
  | "ResourceAttribute"
  | "DirectModification"
  | "Automatic"
  | "NoModification"
  | (string & {});
export type CausingEntity = string;
export interface ResourceChangeDetail {
  Target?: ResourceTargetDefinition;
  Evaluation?: EvaluationType;
  ChangeSource?: ChangeSource;
  CausingEntity?: string;
}
export type ResourceChangeDetails = ResourceChangeDetail[];
export type TypeHierarchy = string;
export type LogicalIdHierarchy = string;
export interface ModuleInfo {
  TypeHierarchy?: string;
  LogicalIdHierarchy?: string;
}
export type BeforeContext = string;
export type AfterContext = string;
export type PreviousDeploymentContext = string;
export interface ResourceChange {
  PolicyAction?: PolicyAction;
  Action?: ChangeAction;
  LogicalResourceId?: string;
  PhysicalResourceId?: string;
  ResourceType?: string;
  Replacement?: Replacement;
  Scope?: ResourceAttribute[];
  ResourceDriftStatus?: StackResourceDriftStatus;
  ResourceDriftIgnoredAttributes?: ResourceDriftIgnoredAttribute[];
  Details?: ResourceChangeDetail[];
  ChangeSetId?: string;
  ModuleInfo?: ModuleInfo;
  BeforeContext?: string;
  AfterContext?: string;
  PreviousDeploymentContext?: string;
}
export interface Change {
  Type?: ChangeType;
  HookInvocationCount?: number;
  ResourceChange?: ResourceChange;
}
export type Changes = Change[];
export interface DescribeChangeSetOutput {
  ChangeSetName?: string;
  ChangeSetId?: string;
  StackId?: string;
  StackName?: string;
  Description?: string;
  Parameters?: Parameter[];
  CreationTime?: Date;
  ExecutionStatus?: ExecutionStatus;
  Status?: ChangeSetStatus;
  StatusReason?: string;
  StackDriftStatus?: StackDriftStatus;
  NotificationARNs?: string[];
  RollbackConfiguration?: RollbackConfiguration & {
    RollbackTriggers: (RollbackTrigger & { Arn: Arn; Type: Type })[];
  };
  Capabilities?: Capability[];
  Tags?: (Tag & { Key: TagKey; Value: TagValue })[];
  Changes?: Change[];
  NextToken?: string;
  IncludeNestedStacks?: boolean;
  ParentChangeSetId?: string;
  RootChangeSetId?: string;
  OnStackFailure?: OnStackFailure;
  ImportExistingResources?: boolean;
  DeploymentMode?: DeploymentMode;
  DeploymentConfig?: DeploymentConfig;
}
export interface DescribeChangeSetHooksInput {
  ChangeSetName?: string;
  StackName?: string;
  NextToken?: string;
  LogicalResourceId?: string;
}
export type HookInvocationPoint = "PRE_PROVISION" | (string & {});
export type HookFailureMode = "FAIL" | "WARN" | (string & {});
export type HookTypeName = string;
export type HookTypeVersionId = string;
export type HookTypeConfigurationVersionId = string;
export type HookTargetType = "RESOURCE" | (string & {});
export type HookTargetTypeName = string;
export interface ChangeSetHookResourceTargetDetails {
  LogicalResourceId?: string;
  ResourceType?: string;
  ResourceAction?: ChangeAction;
}
export interface ChangeSetHookTargetDetails {
  TargetType?: HookTargetType;
  ResourceTargetDetails?: ChangeSetHookResourceTargetDetails;
}
export interface ChangeSetHook {
  InvocationPoint?: HookInvocationPoint;
  FailureMode?: HookFailureMode;
  TypeName?: string;
  TypeVersionId?: string;
  TypeConfigurationVersionId?: string;
  TargetDetails?: ChangeSetHookTargetDetails;
}
export type ChangeSetHooks = ChangeSetHook[];
export type ChangeSetHooksStatus = "PLANNING" | "PLANNED" | "UNAVAILABLE" | (string & {});
export interface DescribeChangeSetHooksOutput {
  ChangeSetId?: string;
  ChangeSetName?: string;
  Hooks?: ChangeSetHook[];
  Status?: ChangeSetHooksStatus;
  NextToken?: string;
  StackId?: string;
  StackName?: string;
}
export type FailedEventsFilter = boolean;
export interface EventFilter {
  FailedEvents?: boolean;
}
export interface DescribeEventsInput {
  StackName?: string;
  ChangeSetName?: string;
  OperationId?: string;
  Filters?: EventFilter;
  NextToken?: string;
}
export type EventId = string;
export type OperationType =
  | "CREATE_STACK"
  | "UPDATE_STACK"
  | "DELETE_STACK"
  | "CONTINUE_ROLLBACK"
  | "ROLLBACK"
  | "CREATE_CHANGESET"
  | (string & {});
export type BeaconStackOperationStatus = "IN_PROGRESS" | "SUCCEEDED" | "FAILED" | (string & {});
export type EventType =
  | "STACK_EVENT"
  | "PROGRESS_EVENT"
  | "VALIDATION_ERROR"
  | "PROVISIONING_ERROR"
  | "HOOK_INVOCATION_ERROR"
  | (string & {});
export type ResourceStatus =
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "CREATE_COMPLETE"
  | "DELETE_IN_PROGRESS"
  | "DELETE_FAILED"
  | "DELETE_COMPLETE"
  | "DELETE_SKIPPED"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_FAILED"
  | "UPDATE_COMPLETE"
  | "IMPORT_FAILED"
  | "IMPORT_COMPLETE"
  | "IMPORT_IN_PROGRESS"
  | "IMPORT_ROLLBACK_IN_PROGRESS"
  | "IMPORT_ROLLBACK_FAILED"
  | "IMPORT_ROLLBACK_COMPLETE"
  | "EXPORT_FAILED"
  | "EXPORT_COMPLETE"
  | "EXPORT_IN_PROGRESS"
  | "EXPORT_ROLLBACK_IN_PROGRESS"
  | "EXPORT_ROLLBACK_FAILED"
  | "EXPORT_ROLLBACK_COMPLETE"
  | "UPDATE_ROLLBACK_IN_PROGRESS"
  | "UPDATE_ROLLBACK_COMPLETE"
  | "UPDATE_ROLLBACK_FAILED"
  | "ROLLBACK_IN_PROGRESS"
  | "ROLLBACK_COMPLETE"
  | "ROLLBACK_FAILED"
  | (string & {});
export type ResourceStatusReason = string;
export type ResourceProperties = string;
export type HookType = string;
export type HookStatus =
  | "HOOK_IN_PROGRESS"
  | "HOOK_COMPLETE_SUCCEEDED"
  | "HOOK_COMPLETE_FAILED"
  | "HOOK_FAILED"
  | (string & {});
export type HookStatusReason = string;
export type DetailedStatus = "CONFIGURATION_COMPLETE" | "VALIDATION_FAILED" | (string & {});
export type ValidationName = string;
export type ValidationStatus = "FAILED" | "SKIPPED" | (string & {});
export type ValidationStatusReason = string;
export type ValidationPath = string;
export interface OperationEvent {
  EventId?: string;
  StackId?: string;
  OperationId?: string;
  OperationType?: OperationType;
  OperationStatus?: BeaconStackOperationStatus;
  EventType?: EventType;
  LogicalResourceId?: string;
  PhysicalResourceId?: string;
  ResourceType?: string;
  Timestamp?: Date;
  StartTime?: Date;
  EndTime?: Date;
  ResourceStatus?: ResourceStatus;
  ResourceStatusReason?: string;
  ResourceProperties?: string;
  ClientRequestToken?: string;
  HookType?: string;
  HookStatus?: HookStatus;
  HookStatusReason?: string;
  HookInvocationPoint?: HookInvocationPoint;
  HookFailureMode?: HookFailureMode;
  DetailedStatus?: DetailedStatus;
  ValidationFailureMode?: HookFailureMode;
  ValidationName?: string;
  ValidationStatus?: ValidationStatus;
  ValidationStatusReason?: string;
  ValidationPath?: string;
}
export type OperationEvents = OperationEvent[];
export interface DescribeEventsOutput {
  OperationEvents?: OperationEvent[];
  NextToken?: string;
}
export interface DescribeGeneratedTemplateInput {
  GeneratedTemplateName?: string;
}
export type GeneratedTemplateResourceStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "FAILED"
  | "COMPLETE"
  | (string & {});
export type WarningType =
  | "MUTUALLY_EXCLUSIVE_PROPERTIES"
  | "UNSUPPORTED_PROPERTIES"
  | "MUTUALLY_EXCLUSIVE_TYPES"
  | "EXCLUDED_PROPERTIES"
  | "EXCLUDED_RESOURCES"
  | (string & {});
export type PropertyPath = string;
export type RequiredProperty = boolean;
export type PropertyDescription = string;
export interface WarningProperty {
  PropertyPath?: string;
  Required?: boolean;
  Description?: string;
}
export type WarningProperties = WarningProperty[];
export interface WarningDetail {
  Type?: WarningType;
  Properties?: WarningProperty[];
}
export type WarningDetails = WarningDetail[];
export interface ResourceDetail {
  ResourceType?: string;
  LogicalResourceId?: string;
  ResourceIdentifier?: { [key: string]: string | undefined };
  ResourceStatus?: GeneratedTemplateResourceStatus;
  ResourceStatusReason?: string;
  Warnings?: WarningDetail[];
}
export type ResourceDetails = ResourceDetail[];
export type GeneratedTemplateStatus =
  | "CREATE_PENDING"
  | "UPDATE_PENDING"
  | "DELETE_PENDING"
  | "CREATE_IN_PROGRESS"
  | "UPDATE_IN_PROGRESS"
  | "DELETE_IN_PROGRESS"
  | "FAILED"
  | "COMPLETE"
  | (string & {});
export type TemplateStatusReason = string;
export type LastUpdatedTime = Date;
export type ResourcesSucceeded = number;
export type ResourcesFailed = number;
export type ResourcesProcessing = number;
export type ResourcesPending = number;
export interface TemplateProgress {
  ResourcesSucceeded?: number;
  ResourcesFailed?: number;
  ResourcesProcessing?: number;
  ResourcesPending?: number;
}
export type TotalWarnings = number;
export interface DescribeGeneratedTemplateOutput {
  GeneratedTemplateId?: string;
  GeneratedTemplateName?: string;
  Resources?: ResourceDetail[];
  Status?: GeneratedTemplateStatus;
  StatusReason?: string;
  CreationTime?: Date;
  LastUpdatedTime?: Date;
  Progress?: TemplateProgress;
  StackId?: string;
  TemplateConfiguration?: TemplateConfiguration;
  TotalWarnings?: number;
}
export interface DescribeOrganizationsAccessInput {
  CallAs?: CallAs;
}
export type OrganizationStatus = "ENABLED" | "DISABLED" | "DISABLED_PERMANENTLY" | (string & {});
export interface DescribeOrganizationsAccessOutput {
  Status?: OrganizationStatus;
}
export interface DescribePublisherInput {
  PublisherId?: string;
}
export type PublisherStatus = "VERIFIED" | "UNVERIFIED" | (string & {});
export type IdentityProvider = "AWS_Marketplace" | "GitHub" | "Bitbucket" | (string & {});
export type PublisherProfile = string;
export interface DescribePublisherOutput {
  PublisherId?: string;
  PublisherStatus?: PublisherStatus;
  IdentityProvider?: IdentityProvider;
  PublisherProfile?: string;
}
export type ResourceScanId = string;
export interface DescribeResourceScanInput {
  ResourceScanId?: string;
}
export type ResourceScanStatus = "IN_PROGRESS" | "FAILED" | "COMPLETE" | "EXPIRED" | (string & {});
export type ResourceScanStatusReason = string;
export type PercentageCompleted = number;
export type ResourcesScanned = number;
export type ResourcesRead = number;
export type ResourceTypeFilter = string;
export type ResourceTypeFilters = string[];
export interface ScanFilter {
  Types?: string[];
}
export type ScanFilters = ScanFilter[];
export interface DescribeResourceScanOutput {
  ResourceScanId?: string;
  Status?: ResourceScanStatus;
  StatusReason?: string;
  StartTime?: Date;
  EndTime?: Date;
  PercentageCompleted?: number;
  ResourceTypes?: string[];
  ResourcesScanned?: number;
  ResourcesRead?: number;
  ScanFilters?: ScanFilter[];
}
export type StackDriftDetectionId = string;
export interface DescribeStackDriftDetectionStatusInput {
  StackDriftDetectionId?: string;
}
export type StackDriftDetectionStatus =
  | "DETECTION_IN_PROGRESS"
  | "DETECTION_FAILED"
  | "DETECTION_COMPLETE"
  | (string & {});
export type StackDriftDetectionStatusReason = string;
export type BoxedInteger = number;
export interface DescribeStackDriftDetectionStatusOutput {
  StackId: string;
  StackDriftDetectionId: string;
  StackDriftStatus?: StackDriftStatus;
  DetectionStatus: StackDriftDetectionStatus;
  DetectionStatusReason?: string;
  DriftedStackResourceCount?: number;
  Timestamp: Date;
}
export interface DescribeStackEventsInput {
  StackName?: string;
  NextToken?: string;
}
export type HookInvocationId = string;
export interface StackEvent {
  StackId?: string;
  EventId?: string;
  StackName?: string;
  OperationId?: string;
  LogicalResourceId?: string;
  PhysicalResourceId?: string;
  ResourceType?: string;
  Timestamp?: Date;
  ResourceStatus?: ResourceStatus;
  ResourceStatusReason?: string;
  ResourceProperties?: string;
  ClientRequestToken?: string;
  HookType?: string;
  HookStatus?: HookStatus;
  HookStatusReason?: string;
  HookInvocationPoint?: HookInvocationPoint;
  HookInvocationId?: string;
  HookFailureMode?: HookFailureMode;
  DetailedStatus?: DetailedStatus;
}
export type StackEvents = StackEvent[];
export interface DescribeStackEventsOutput {
  StackEvents?: (StackEvent & {
    StackId: StackId;
    EventId: EventId;
    StackName: StackName;
    Timestamp: Date;
  })[];
  NextToken?: string;
}
export interface DescribeStackInstanceInput {
  StackSetName?: string;
  StackInstanceAccount?: string;
  StackInstanceRegion?: string;
  CallAs?: CallAs;
}
export type StackInstanceStatus = "CURRENT" | "OUTDATED" | "INOPERABLE" | (string & {});
export type StackInstanceDetailedStatus =
  | "PENDING"
  | "RUNNING"
  | "SUCCEEDED"
  | "FAILED"
  | "CANCELLED"
  | "INOPERABLE"
  | "SKIPPED_SUSPENDED_ACCOUNT"
  | "FAILED_IMPORT"
  | (string & {});
export interface StackInstanceComprehensiveStatus {
  DetailedStatus?: StackInstanceDetailedStatus;
}
export type Reason = string;
export interface StackInstance {
  StackSetId?: string;
  Region?: string;
  Account?: string;
  StackId?: string;
  ParameterOverrides?: Parameter[];
  Status?: StackInstanceStatus;
  StackInstanceStatus?: StackInstanceComprehensiveStatus;
  StatusReason?: string;
  OrganizationalUnitId?: string;
  DriftStatus?: StackDriftStatus;
  LastDriftCheckTimestamp?: Date;
  LastOperationId?: string;
}
export interface DescribeStackInstanceOutput {
  StackInstance?: StackInstance;
}
export interface DescribeStackRefactorInput {
  StackRefactorId?: string;
}
export type StackIds = string[];
export type StackRefactorExecutionStatus =
  | "UNAVAILABLE"
  | "AVAILABLE"
  | "OBSOLETE"
  | "EXECUTE_IN_PROGRESS"
  | "EXECUTE_COMPLETE"
  | "EXECUTE_FAILED"
  | "ROLLBACK_IN_PROGRESS"
  | "ROLLBACK_COMPLETE"
  | "ROLLBACK_FAILED"
  | (string & {});
export type ExecutionStatusReason = string;
export type StackRefactorStatus =
  | "CREATE_IN_PROGRESS"
  | "CREATE_COMPLETE"
  | "CREATE_FAILED"
  | "DELETE_IN_PROGRESS"
  | "DELETE_COMPLETE"
  | "DELETE_FAILED"
  | (string & {});
export type StackRefactorStatusReason = string;
export interface DescribeStackRefactorOutput {
  Description?: string;
  StackRefactorId?: string;
  StackIds?: string[];
  ExecutionStatus?: StackRefactorExecutionStatus;
  ExecutionStatusReason?: string;
  Status?: StackRefactorStatus;
  StatusReason?: string;
}
export interface DescribeStackResourceInput {
  StackName?: string;
  LogicalResourceId?: string;
}
export type Metadata = string;
export interface StackResourceDriftInformation {
  StackResourceDriftStatus?: StackResourceDriftStatus;
  LastCheckTimestamp?: Date;
}
export interface StackResourceDetail {
  StackName?: string;
  StackId?: string;
  LogicalResourceId?: string;
  PhysicalResourceId?: string;
  ResourceType?: string;
  LastUpdatedTimestamp?: Date;
  ResourceStatus?: ResourceStatus;
  ResourceStatusReason?: string;
  Description?: string;
  Metadata?: string;
  DriftInformation?: StackResourceDriftInformation;
  ModuleInfo?: ModuleInfo;
}
export interface DescribeStackResourceOutput {
  StackResourceDetail?: StackResourceDetail & {
    LogicalResourceId: LogicalResourceId;
    ResourceType: ResourceType;
    LastUpdatedTimestamp: Date;
    ResourceStatus: ResourceStatus;
    DriftInformation: StackResourceDriftInformation & {
      StackResourceDriftStatus: StackResourceDriftStatus;
    };
  };
}
export type StackResourceDriftStatusFilters = StackResourceDriftStatus[];
export type BoxedMaxResults = number;
export interface DescribeStackResourceDriftsInput {
  StackName?: string;
  StackResourceDriftStatusFilters?: StackResourceDriftStatus[];
  NextToken?: string;
  MaxResults?: number;
}
export type Key = string;
export type Value = string;
export interface PhysicalResourceIdContextKeyValuePair {
  Key?: string;
  Value?: string;
}
export type PhysicalResourceIdContext = PhysicalResourceIdContextKeyValuePair[];
export type Properties = string;
export type PropertyValue = string;
export type DifferenceType = "ADD" | "REMOVE" | "NOT_EQUAL" | (string & {});
export interface PropertyDifference {
  PropertyPath?: string;
  ExpectedValue?: string;
  ActualValue?: string;
  DifferenceType?: DifferenceType;
}
export type PropertyDifferences = PropertyDifference[];
export type StackResourceDriftStatusReason = string;
export interface StackResourceDrift {
  StackId?: string;
  LogicalResourceId?: string;
  PhysicalResourceId?: string;
  PhysicalResourceIdContext?: PhysicalResourceIdContextKeyValuePair[];
  ResourceType?: string;
  ExpectedProperties?: string;
  ActualProperties?: string;
  PropertyDifferences?: PropertyDifference[];
  StackResourceDriftStatus?: StackResourceDriftStatus;
  Timestamp?: Date;
  ModuleInfo?: ModuleInfo;
  DriftStatusReason?: string;
}
export type StackResourceDrifts = StackResourceDrift[];
export interface DescribeStackResourceDriftsOutput {
  StackResourceDrifts: (StackResourceDrift & {
    StackId: StackId;
    LogicalResourceId: LogicalResourceId;
    ResourceType: ResourceType;
    StackResourceDriftStatus: StackResourceDriftStatus;
    Timestamp: Date;
    PhysicalResourceIdContext: (PhysicalResourceIdContextKeyValuePair & {
      Key: Key;
      Value: Value;
    })[];
    PropertyDifferences: (PropertyDifference & {
      PropertyPath: PropertyPath;
      ExpectedValue: PropertyValue;
      ActualValue: PropertyValue;
      DifferenceType: DifferenceType;
    })[];
  })[];
  NextToken?: string;
}
export interface DescribeStackResourcesInput {
  StackName?: string;
  LogicalResourceId?: string;
  PhysicalResourceId?: string;
}
export interface StackResource {
  StackName?: string;
  StackId?: string;
  LogicalResourceId?: string;
  PhysicalResourceId?: string;
  ResourceType?: string;
  Timestamp?: Date;
  ResourceStatus?: ResourceStatus;
  ResourceStatusReason?: string;
  Description?: string;
  DriftInformation?: StackResourceDriftInformation;
  ModuleInfo?: ModuleInfo;
}
export type StackResources = StackResource[];
export interface DescribeStackResourcesOutput {
  StackResources?: (StackResource & {
    LogicalResourceId: LogicalResourceId;
    ResourceType: ResourceType;
    Timestamp: Date;
    ResourceStatus: ResourceStatus;
    DriftInformation: StackResourceDriftInformation & {
      StackResourceDriftStatus: StackResourceDriftStatus;
    };
  })[];
}
export interface DescribeStacksInput {
  StackName?: string;
  NextToken?: string;
}
export type DeletionTime = Date;
export type StackStatus =
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "CREATE_COMPLETE"
  | "ROLLBACK_IN_PROGRESS"
  | "ROLLBACK_FAILED"
  | "ROLLBACK_COMPLETE"
  | "DELETE_IN_PROGRESS"
  | "DELETE_FAILED"
  | "DELETE_COMPLETE"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_COMPLETE_CLEANUP_IN_PROGRESS"
  | "UPDATE_COMPLETE"
  | "UPDATE_FAILED"
  | "UPDATE_ROLLBACK_IN_PROGRESS"
  | "UPDATE_ROLLBACK_FAILED"
  | "UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS"
  | "UPDATE_ROLLBACK_COMPLETE"
  | "REVIEW_IN_PROGRESS"
  | "IMPORT_IN_PROGRESS"
  | "IMPORT_COMPLETE"
  | "IMPORT_ROLLBACK_IN_PROGRESS"
  | "IMPORT_ROLLBACK_FAILED"
  | "IMPORT_ROLLBACK_COMPLETE"
  | (string & {});
export type StackStatusReason = string;
export type OutputKey = string;
export type OutputValue = string;
export type ExportName = string;
export interface Output {
  OutputKey?: string;
  OutputValue?: string;
  Description?: string;
  ExportName?: string;
}
export type Outputs = Output[];
export interface StackDriftInformation {
  StackDriftStatus?: StackDriftStatus;
  LastCheckTimestamp?: Date;
}
export interface OperationEntry {
  OperationType?: OperationType;
  OperationId?: string;
}
export type LastOperations = OperationEntry[];
export interface Stack {
  StackId?: string;
  StackName?: string;
  ChangeSetId?: string;
  Description?: string;
  Parameters?: Parameter[];
  CreationTime?: Date;
  DeletionTime?: Date;
  LastUpdatedTime?: Date;
  RollbackConfiguration?: RollbackConfiguration;
  StackStatus?: StackStatus;
  StackStatusReason?: string;
  DisableRollback?: boolean;
  DeploymentConfig?: DeploymentConfig;
  NotificationARNs?: string[];
  TimeoutInMinutes?: number;
  Capabilities?: Capability[];
  Outputs?: Output[];
  RoleARN?: string;
  Tags?: Tag[];
  EnableTerminationProtection?: boolean;
  ParentId?: string;
  RootId?: string;
  DriftInformation?: StackDriftInformation;
  RetainExceptOnCreate?: boolean;
  DeletionMode?: DeletionMode;
  DetailedStatus?: DetailedStatus;
  LastOperations?: OperationEntry[];
}
export type Stacks = Stack[];
export interface DescribeStacksOutput {
  Stacks?: (Stack & {
    StackName: StackName;
    CreationTime: CreationTime;
    StackStatus: StackStatus;
    RollbackConfiguration: RollbackConfiguration & {
      RollbackTriggers: (RollbackTrigger & { Arn: Arn; Type: Type })[];
    };
    Tags: (Tag & { Key: TagKey; Value: TagValue })[];
    DriftInformation: StackDriftInformation & { StackDriftStatus: StackDriftStatus };
  })[];
  NextToken?: string;
}
export interface DescribeStackSetInput {
  StackSetName?: string;
  CallAs?: CallAs;
}
export type StackSetStatus = "ACTIVE" | "DELETED" | (string & {});
export type StackSetDriftStatus = "DRIFTED" | "IN_SYNC" | "NOT_CHECKED" | (string & {});
export type StackSetDriftDetectionStatus =
  | "COMPLETED"
  | "FAILED"
  | "PARTIAL_SUCCESS"
  | "IN_PROGRESS"
  | "STOPPED"
  | (string & {});
export type TotalStackInstancesCount = number;
export type DriftedStackInstancesCount = number;
export type InSyncStackInstancesCount = number;
export type InProgressStackInstancesCount = number;
export type FailedStackInstancesCount = number;
export interface StackSetDriftDetectionDetails {
  DriftStatus?: StackSetDriftStatus;
  DriftDetectionStatus?: StackSetDriftDetectionStatus;
  LastDriftCheckTimestamp?: Date;
  TotalStackInstancesCount?: number;
  DriftedStackInstancesCount?: number;
  InSyncStackInstancesCount?: number;
  InProgressStackInstancesCount?: number;
  FailedStackInstancesCount?: number;
}
export interface StackSet {
  StackSetName?: string;
  StackSetId?: string;
  Description?: string;
  Status?: StackSetStatus;
  TemplateBody?: string;
  Parameters?: Parameter[];
  Capabilities?: Capability[];
  Tags?: Tag[];
  StackSetARN?: string;
  AdministrationRoleARN?: string;
  ExecutionRoleName?: string;
  StackSetDriftDetectionDetails?: StackSetDriftDetectionDetails;
  AutoDeployment?: AutoDeployment;
  PermissionModel?: PermissionModels;
  OrganizationalUnitIds?: string[];
  ManagedExecution?: ManagedExecution;
  Regions?: string[];
}
export interface DescribeStackSetOutput {
  StackSet?: StackSet & { Tags: (Tag & { Key: TagKey; Value: TagValue })[] };
}
export interface DescribeStackSetOperationInput {
  StackSetName?: string;
  OperationId?: string;
  CallAs?: CallAs;
}
export type StackSetOperationAction =
  | "CREATE"
  | "UPDATE"
  | "DELETE"
  | "DETECT_DRIFT"
  | (string & {});
export type StackSetOperationStatus =
  | "RUNNING"
  | "SUCCEEDED"
  | "FAILED"
  | "STOPPING"
  | "STOPPED"
  | "QUEUED"
  | (string & {});
export type RetainStacksNullable = boolean;
export type StackSetOperationStatusReason = string;
export interface StackSetOperationStatusDetails {
  FailedStackInstancesCount?: number;
}
export interface StackSetOperation {
  OperationId?: string;
  StackSetId?: string;
  Action?: StackSetOperationAction;
  Status?: StackSetOperationStatus;
  OperationPreferences?: StackSetOperationPreferences;
  RetainStacks?: boolean;
  AdministrationRoleARN?: string;
  ExecutionRoleName?: string;
  CreationTimestamp?: Date;
  EndTimestamp?: Date;
  DeploymentTargets?: DeploymentTargets;
  StackSetDriftDetectionDetails?: StackSetDriftDetectionDetails;
  StatusReason?: string;
  StatusDetails?: StackSetOperationStatusDetails;
}
export interface DescribeStackSetOperationOutput {
  StackSetOperation?: StackSetOperation;
}
export type PublicVersionNumber = string;
export interface DescribeTypeInput {
  Type?: RegistryType;
  TypeName?: string;
  Arn?: string;
  VersionId?: string;
  PublisherId?: string;
  PublicVersionNumber?: string;
}
export type IsDefaultVersion = boolean;
export type TypeTestsStatus = "PASSED" | "FAILED" | "IN_PROGRESS" | "NOT_TESTED" | (string & {});
export type TypeTestsStatusDescription = string;
export type TypeSchema = string;
export type ProvisioningType = "NON_PROVISIONABLE" | "IMMUTABLE" | "FULLY_MUTABLE" | (string & {});
export type DeprecatedStatus = "LIVE" | "DEPRECATED" | (string & {});
export type SupportedMajorVersion = number;
export type SupportedMajorVersions = number[];
export interface RequiredActivatedType {
  TypeNameAlias?: string;
  OriginalTypeName?: string;
  PublisherId?: string;
  SupportedMajorVersions?: number[];
}
export type RequiredActivatedTypes = RequiredActivatedType[];
export type Visibility = "PUBLIC" | "PRIVATE" | (string & {});
export type OptionalSecureUrl = string;
export type ConfigurationSchema = string;
export type IsActivated = boolean;
export interface DescribeTypeOutput {
  Arn?: string;
  Type?: RegistryType;
  TypeName?: string;
  DefaultVersionId?: string;
  IsDefaultVersion?: boolean;
  TypeTestsStatus?: TypeTestsStatus;
  TypeTestsStatusDescription?: string;
  Description?: string;
  Schema?: string;
  ProvisioningType?: ProvisioningType;
  DeprecatedStatus?: DeprecatedStatus;
  LoggingConfig?: LoggingConfig & { LogRoleArn: RoleARN2; LogGroupName: LogGroupName };
  RequiredActivatedTypes?: RequiredActivatedType[];
  ExecutionRoleArn?: string;
  Visibility?: Visibility;
  SourceUrl?: string;
  DocumentationUrl?: string;
  LastUpdated?: Date;
  TimeCreated?: Date;
  ConfigurationSchema?: string;
  PublisherId?: string;
  OriginalTypeName?: string;
  OriginalTypeArn?: string;
  PublicVersionNumber?: string;
  LatestPublicVersion?: string;
  IsActivated?: boolean;
  AutoUpdate?: boolean;
}
export type RegistrationToken = string;
export interface DescribeTypeRegistrationInput {
  RegistrationToken?: string;
}
export type RegistrationStatus = "COMPLETE" | "IN_PROGRESS" | "FAILED" | (string & {});
export interface DescribeTypeRegistrationOutput {
  ProgressStatus?: RegistrationStatus;
  Description?: string;
  TypeArn?: string;
  TypeVersionArn?: string;
}
export type LogicalResourceIds = string[];
export interface DetectStackDriftInput {
  StackName?: string;
  LogicalResourceIds?: string[];
}
export interface DetectStackDriftOutput {
  StackDriftDetectionId: string;
}
export interface DetectStackResourceDriftInput {
  StackName?: string;
  LogicalResourceId?: string;
}
export interface DetectStackResourceDriftOutput {
  StackResourceDrift: StackResourceDrift & {
    StackId: StackId;
    LogicalResourceId: LogicalResourceId;
    ResourceType: ResourceType;
    StackResourceDriftStatus: StackResourceDriftStatus;
    Timestamp: Date;
    PhysicalResourceIdContext: (PhysicalResourceIdContextKeyValuePair & {
      Key: Key;
      Value: Value;
    })[];
    PropertyDifferences: (PropertyDifference & {
      PropertyPath: PropertyPath;
      ExpectedValue: PropertyValue;
      ActualValue: PropertyValue;
      DifferenceType: DifferenceType;
    })[];
  };
}
export type StackSetNameOrId = string;
export interface DetectStackSetDriftInput {
  StackSetName?: string;
  OperationPreferences?: StackSetOperationPreferences;
  OperationId?: string;
  CallAs?: CallAs;
}
export interface DetectStackSetDriftOutput {
  OperationId?: string;
}
export interface EstimateTemplateCostInput {
  TemplateBody?: string;
  TemplateURL?: string;
  Parameters?: Parameter[];
}
export type Url = string;
export interface EstimateTemplateCostOutput {
  Url?: string;
}
export interface ExecuteChangeSetInput {
  ChangeSetName?: string;
  StackName?: string;
  ClientRequestToken?: string;
  DisableRollback?: boolean;
  RetainExceptOnCreate?: boolean;
}
export interface ExecuteChangeSetOutput {}
export interface ExecuteStackRefactorInput {
  StackRefactorId?: string;
}
export interface ExecuteStackRefactorResponse {}
export type TemplateFormat = "JSON" | "YAML" | (string & {});
export interface GetGeneratedTemplateInput {
  Format?: TemplateFormat;
  GeneratedTemplateName?: string;
}
export interface GetGeneratedTemplateOutput {
  Status?: GeneratedTemplateStatus;
  TemplateBody?: string;
}
export interface GetHookResultInput {
  HookResultId?: string;
}
export type HookTypeArn = string;
export type HookTargetId = string;
export type HookTargetAction = "CREATE" | "UPDATE" | "DELETE" | "IMPORT" | (string & {});
export interface HookTarget {
  TargetType?: HookTargetType;
  TargetTypeName?: string;
  TargetId?: string;
  Action?: HookTargetAction;
}
export type AnnotationName = string;
export type AnnotationStatus = "PASSED" | "FAILED" | "SKIPPED" | (string & {});
export type RemediationMessageStatusMessage = string;
export type RemediationMessageRemediationMessage = string;
export type AnnotationRemediationLink = string;
export type AnnotationSeverityLevel =
  | "INFORMATIONAL"
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "CRITICAL"
  | (string & {});
export interface Annotation {
  AnnotationName?: string;
  Status?: AnnotationStatus;
  StatusMessage?: string;
  RemediationMessage?: string;
  RemediationLink?: string;
  SeverityLevel?: AnnotationSeverityLevel;
}
export type AnnotationList = Annotation[];
export interface GetHookResultOutput {
  HookResultId?: string;
  InvocationPoint?: HookInvocationPoint;
  FailureMode?: HookFailureMode;
  TypeName?: string;
  OriginalTypeName?: string;
  TypeVersionId?: string;
  TypeConfigurationVersionId?: string;
  TypeArn?: string;
  Status?: HookStatus;
  HookStatusReason?: string;
  InvokedAt?: Date;
  Target?: HookTarget & {
    TargetType: HookTargetType;
    TargetTypeName: HookTargetTypeName;
    TargetId: HookTargetId;
    Action: HookTargetAction;
  };
  Annotations?: Annotation[];
}
export interface GetStackPolicyInput {
  StackName?: string;
}
export interface GetStackPolicyOutput {
  StackPolicyBody?: string;
}
export type TemplateStage = "Original" | "Processed" | (string & {});
export interface GetTemplateInput {
  StackName?: string;
  ChangeSetName?: string;
  TemplateStage?: TemplateStage;
}
export type StageList = TemplateStage[];
export interface GetTemplateOutput {
  TemplateBody?: string;
  StagesAvailable?: TemplateStage[];
}
export type TreatUnrecognizedResourceTypesAsWarnings = boolean;
export interface TemplateSummaryConfig {
  TreatUnrecognizedResourceTypesAsWarnings?: boolean;
}
export interface GetTemplateSummaryInput {
  TemplateBody?: string;
  TemplateURL?: string;
  StackName?: string;
  StackSetName?: string;
  CallAs?: CallAs;
  TemplateSummaryConfig?: TemplateSummaryConfig;
}
export type ParameterType = string;
export type NoEcho = boolean;
export type AllowedValue = string;
export type AllowedValues = string[];
export interface ParameterConstraints {
  AllowedValues?: string[];
}
export interface ParameterDeclaration {
  ParameterKey?: string;
  DefaultValue?: string;
  ParameterType?: string;
  NoEcho?: boolean;
  Description?: string;
  ParameterConstraints?: ParameterConstraints;
}
export type ParameterDeclarations = ParameterDeclaration[];
export type CapabilitiesReason = string;
export type Version = string;
export type TransformName = string;
export type TransformsList = string[];
export type ResourceIdentifiers = string[];
export interface ResourceIdentifierSummary {
  ResourceType?: string;
  LogicalResourceIds?: string[];
  ResourceIdentifiers?: string[];
}
export type ResourceIdentifierSummaries = ResourceIdentifierSummary[];
export interface Warnings {
  UnrecognizedResourceTypes?: string[];
}
export interface GetTemplateSummaryOutput {
  Parameters?: ParameterDeclaration[];
  Description?: string;
  Capabilities?: Capability[];
  CapabilitiesReason?: string;
  ResourceTypes?: string[];
  Version?: string;
  Metadata?: string;
  DeclaredTransforms?: string[];
  ResourceIdentifierSummaries?: ResourceIdentifierSummary[];
  Warnings?: Warnings;
}
export type StackIdList = string[];
export type StackIdsUrl = string;
export interface ImportStacksToStackSetInput {
  StackSetName?: string;
  StackIds?: string[];
  StackIdsUrl?: string;
  OrganizationalUnitIds?: string[];
  OperationPreferences?: StackSetOperationPreferences;
  OperationId?: string;
  CallAs?: CallAs;
}
export interface ImportStacksToStackSetOutput {
  OperationId?: string;
}
export interface ListChangeSetsInput {
  StackName?: string;
  NextToken?: string;
}
export interface ChangeSetSummary {
  StackId?: string;
  StackName?: string;
  ChangeSetId?: string;
  ChangeSetName?: string;
  ExecutionStatus?: ExecutionStatus;
  Status?: ChangeSetStatus;
  StatusReason?: string;
  CreationTime?: Date;
  Description?: string;
  IncludeNestedStacks?: boolean;
  ParentChangeSetId?: string;
  RootChangeSetId?: string;
  ImportExistingResources?: boolean;
}
export type ChangeSetSummaries = ChangeSetSummary[];
export interface ListChangeSetsOutput {
  Summaries?: ChangeSetSummary[];
  NextToken?: string;
}
export interface ListExportsInput {
  NextToken?: string;
}
export type ExportValue = string;
export interface Export {
  ExportingStackId?: string;
  Name?: string;
  Value?: string;
}
export type Exports = Export[];
export interface ListExportsOutput {
  Exports?: Export[];
  NextToken?: string;
}
export type MaxResults = number;
export interface ListGeneratedTemplatesInput {
  NextToken?: string;
  MaxResults?: number;
}
export type NumberOfResources = number;
export interface TemplateSummary {
  GeneratedTemplateId?: string;
  GeneratedTemplateName?: string;
  Status?: GeneratedTemplateStatus;
  StatusReason?: string;
  CreationTime?: Date;
  LastUpdatedTime?: Date;
  NumberOfResources?: number;
}
export type TemplateSummaries = TemplateSummary[];
export interface ListGeneratedTemplatesOutput {
  Summaries?: TemplateSummary[];
  NextToken?: string;
}
export type ListHookResultsTargetType =
  | "CHANGE_SET"
  | "STACK"
  | "RESOURCE"
  | "CLOUD_CONTROL"
  | (string & {});
export type HookResultId = string;
export interface ListHookResultsInput {
  TargetType?: ListHookResultsTargetType;
  TargetId?: string;
  TypeArn?: string;
  Status?: HookStatus;
  NextToken?: string;
}
export interface HookResultSummary {
  HookResultId?: string;
  InvocationPoint?: HookInvocationPoint;
  FailureMode?: HookFailureMode;
  TypeName?: string;
  TypeVersionId?: string;
  TypeConfigurationVersionId?: string;
  Status?: HookStatus;
  HookStatusReason?: string;
  InvokedAt?: Date;
  TargetType?: ListHookResultsTargetType;
  TargetId?: string;
  TypeArn?: string;
  HookExecutionTarget?: string;
}
export type HookResultSummaries = HookResultSummary[];
export interface ListHookResultsOutput {
  TargetType?: ListHookResultsTargetType;
  TargetId?: string;
  HookResults?: HookResultSummary[];
  NextToken?: string;
}
export interface ListImportsInput {
  ExportName?: string;
  NextToken?: string;
}
export type Imports = string[];
export interface ListImportsOutput {
  Imports?: string[];
  NextToken?: string;
}
export type JazzResourceIdentifierPropertyKey = string;
export type JazzResourceIdentifierPropertyValue = string;
export type JazzResourceIdentifierProperties = { [key: string]: string | undefined };
export interface ScannedResourceIdentifier {
  ResourceType?: string;
  ResourceIdentifier?: { [key: string]: string | undefined };
}
export type ScannedResourceIdentifiers = ScannedResourceIdentifier[];
export interface ListResourceScanRelatedResourcesInput {
  ResourceScanId?: string;
  Resources?: ScannedResourceIdentifier[];
  NextToken?: string;
  MaxResults?: number;
}
export type ManagedByStack = boolean;
export interface ScannedResource {
  ResourceType?: string;
  ResourceIdentifier?: { [key: string]: string | undefined };
  ManagedByStack?: boolean;
}
export type RelatedResources = ScannedResource[];
export interface ListResourceScanRelatedResourcesOutput {
  RelatedResources?: ScannedResource[];
  NextToken?: string;
}
export type ResourceIdentifier = string;
export type ResourceTypePrefix = string;
export type ResourceScannerMaxResults = number;
export interface ListResourceScanResourcesInput {
  ResourceScanId?: string;
  ResourceIdentifier?: string;
  ResourceTypePrefix?: string;
  TagKey?: string;
  TagValue?: string;
  NextToken?: string;
  MaxResults?: number;
}
export type ScannedResources = ScannedResource[];
export interface ListResourceScanResourcesOutput {
  Resources?: ScannedResource[];
  NextToken?: string;
}
export type ScanType = "FULL" | "PARTIAL" | (string & {});
export interface ListResourceScansInput {
  NextToken?: string;
  MaxResults?: number;
  ScanTypeFilter?: ScanType;
}
export interface ResourceScanSummary {
  ResourceScanId?: string;
  Status?: ResourceScanStatus;
  StatusReason?: string;
  StartTime?: Date;
  EndTime?: Date;
  PercentageCompleted?: number;
  ScanType?: ScanType;
}
export type ResourceScanSummaries = ResourceScanSummary[];
export interface ListResourceScansOutput {
  ResourceScanSummaries?: ResourceScanSummary[];
  NextToken?: string;
}
export interface ListStackInstanceResourceDriftsInput {
  StackSetName?: string;
  NextToken?: string;
  MaxResults?: number;
  StackInstanceResourceDriftStatuses?: StackResourceDriftStatus[];
  StackInstanceAccount?: string;
  StackInstanceRegion?: string;
  OperationId?: string;
  CallAs?: CallAs;
}
export interface StackInstanceResourceDriftsSummary {
  StackId?: string;
  LogicalResourceId?: string;
  PhysicalResourceId?: string;
  PhysicalResourceIdContext?: PhysicalResourceIdContextKeyValuePair[];
  ResourceType?: string;
  PropertyDifferences?: PropertyDifference[];
  StackResourceDriftStatus?: StackResourceDriftStatus;
  Timestamp?: Date;
}
export type StackInstanceResourceDriftsSummaries = StackInstanceResourceDriftsSummary[];
export interface ListStackInstanceResourceDriftsOutput {
  Summaries?: (StackInstanceResourceDriftsSummary & {
    StackId: StackId;
    LogicalResourceId: LogicalResourceId;
    ResourceType: ResourceType;
    StackResourceDriftStatus: StackResourceDriftStatus;
    Timestamp: Date;
    PhysicalResourceIdContext: (PhysicalResourceIdContextKeyValuePair & {
      Key: Key;
      Value: Value;
    })[];
    PropertyDifferences: (PropertyDifference & {
      PropertyPath: PropertyPath;
      ExpectedValue: PropertyValue;
      ActualValue: PropertyValue;
      DifferenceType: DifferenceType;
    })[];
  })[];
  NextToken?: string;
}
export type StackInstanceFilterName =
  | "DETAILED_STATUS"
  | "LAST_OPERATION_ID"
  | "DRIFT_STATUS"
  | (string & {});
export type StackInstanceFilterValues = string;
export interface StackInstanceFilter {
  Name?: StackInstanceFilterName;
  Values?: string;
}
export type StackInstanceFilters = StackInstanceFilter[];
export interface ListStackInstancesInput {
  StackSetName?: string;
  NextToken?: string;
  MaxResults?: number;
  Filters?: StackInstanceFilter[];
  StackInstanceAccount?: string;
  StackInstanceRegion?: string;
  CallAs?: CallAs;
}
export interface StackInstanceSummary {
  StackSetId?: string;
  Region?: string;
  Account?: string;
  StackId?: string;
  Status?: StackInstanceStatus;
  StatusReason?: string;
  StackInstanceStatus?: StackInstanceComprehensiveStatus;
  OrganizationalUnitId?: string;
  DriftStatus?: StackDriftStatus;
  LastDriftCheckTimestamp?: Date;
  LastOperationId?: string;
}
export type StackInstanceSummaries = StackInstanceSummary[];
export interface ListStackInstancesOutput {
  Summaries?: StackInstanceSummary[];
  NextToken?: string;
}
export interface ListStackRefactorActionsInput {
  StackRefactorId?: string;
  NextToken?: string;
  MaxResults?: number;
}
export type StackRefactorActionType = "MOVE" | "CREATE" | (string & {});
export type StackRefactorActionEntity = "RESOURCE" | "STACK" | (string & {});
export type StackRefactorResourceIdentifier = string;
export type StackRefactorDetection = "AUTO" | "MANUAL" | (string & {});
export type DetectionReason = string;
export type StackRefactorTagResources = Tag[];
export type StackRefactorUntagResources = string[];
export interface StackRefactorAction {
  Action?: StackRefactorActionType;
  Entity?: StackRefactorActionEntity;
  PhysicalResourceId?: string;
  ResourceIdentifier?: string;
  Description?: string;
  Detection?: StackRefactorDetection;
  DetectionReason?: string;
  TagResources?: Tag[];
  UntagResources?: string[];
  ResourceMapping?: ResourceMapping;
}
export type StackRefactorActions = StackRefactorAction[];
export interface ListStackRefactorActionsOutput {
  StackRefactorActions: (StackRefactorAction & {
    TagResources: (Tag & { Key: TagKey; Value: TagValue })[];
    ResourceMapping: ResourceMapping & {
      Source: ResourceLocation & { StackName: StackName; LogicalResourceId: LogicalResourceId };
      Destination: ResourceLocation & {
        StackName: StackName;
        LogicalResourceId: LogicalResourceId;
      };
    };
  })[];
  NextToken?: string;
}
export type StackRefactorExecutionStatusFilter = StackRefactorExecutionStatus[];
export interface ListStackRefactorsInput {
  ExecutionStatusFilter?: StackRefactorExecutionStatus[];
  NextToken?: string;
  MaxResults?: number;
}
export interface StackRefactorSummary {
  StackRefactorId?: string;
  Description?: string;
  ExecutionStatus?: StackRefactorExecutionStatus;
  ExecutionStatusReason?: string;
  Status?: StackRefactorStatus;
  StatusReason?: string;
}
export type StackRefactorSummaries = StackRefactorSummary[];
export interface ListStackRefactorsOutput {
  StackRefactorSummaries: StackRefactorSummary[];
  NextToken?: string;
}
export interface ListStackResourcesInput {
  StackName?: string;
  NextToken?: string;
}
export interface StackResourceDriftInformationSummary {
  StackResourceDriftStatus?: StackResourceDriftStatus;
  LastCheckTimestamp?: Date;
}
export interface StackResourceSummary {
  LogicalResourceId?: string;
  PhysicalResourceId?: string;
  ResourceType?: string;
  LastUpdatedTimestamp?: Date;
  ResourceStatus?: ResourceStatus;
  ResourceStatusReason?: string;
  DriftInformation?: StackResourceDriftInformationSummary;
  ModuleInfo?: ModuleInfo;
}
export type StackResourceSummaries = StackResourceSummary[];
export interface ListStackResourcesOutput {
  StackResourceSummaries?: (StackResourceSummary & {
    LogicalResourceId: LogicalResourceId;
    ResourceType: ResourceType;
    LastUpdatedTimestamp: Date;
    ResourceStatus: ResourceStatus;
    DriftInformation: StackResourceDriftInformationSummary & {
      StackResourceDriftStatus: StackResourceDriftStatus;
    };
  })[];
  NextToken?: string;
}
export type StackStatusFilter = StackStatus[];
export interface ListStacksInput {
  NextToken?: string;
  StackStatusFilter?: StackStatus[];
}
export type TemplateDescription = string;
export interface StackDriftInformationSummary {
  StackDriftStatus?: StackDriftStatus;
  LastCheckTimestamp?: Date;
}
export interface StackSummary {
  StackId?: string;
  StackName?: string;
  TemplateDescription?: string;
  CreationTime?: Date;
  LastUpdatedTime?: Date;
  DeletionTime?: Date;
  StackStatus?: StackStatus;
  StackStatusReason?: string;
  ParentId?: string;
  RootId?: string;
  DriftInformation?: StackDriftInformationSummary;
  LastOperations?: OperationEntry[];
}
export type StackSummaries = StackSummary[];
export interface ListStacksOutput {
  StackSummaries?: (StackSummary & {
    StackName: StackName;
    CreationTime: CreationTime;
    StackStatus: StackStatus;
    DriftInformation: StackDriftInformationSummary & { StackDriftStatus: StackDriftStatus };
  })[];
  NextToken?: string;
}
export interface ListStackSetAutoDeploymentTargetsInput {
  StackSetName?: string;
  NextToken?: string;
  MaxResults?: number;
  CallAs?: CallAs;
}
export interface StackSetAutoDeploymentTargetSummary {
  OrganizationalUnitId?: string;
  Regions?: string[];
}
export type StackSetAutoDeploymentTargetSummaries = StackSetAutoDeploymentTargetSummary[];
export interface ListStackSetAutoDeploymentTargetsOutput {
  Summaries?: StackSetAutoDeploymentTargetSummary[];
  NextToken?: string;
}
export type OperationResultFilterName = "OPERATION_RESULT_STATUS" | (string & {});
export type OperationResultFilterValues = string;
export interface OperationResultFilter {
  Name?: OperationResultFilterName;
  Values?: string;
}
export type OperationResultFilters = OperationResultFilter[];
export interface ListStackSetOperationResultsInput {
  StackSetName?: string;
  OperationId?: string;
  NextToken?: string;
  MaxResults?: number;
  CallAs?: CallAs;
  Filters?: OperationResultFilter[];
}
export type StackSetOperationResultStatus =
  | "PENDING"
  | "RUNNING"
  | "SUCCEEDED"
  | "FAILED"
  | "CANCELLED"
  | (string & {});
export type AccountGateStatus = "SUCCEEDED" | "FAILED" | "SKIPPED" | (string & {});
export type AccountGateStatusReason = string;
export interface AccountGateResult {
  Status?: AccountGateStatus;
  StatusReason?: string;
}
export interface StackSetOperationResultSummary {
  Account?: string;
  Region?: string;
  Status?: StackSetOperationResultStatus;
  StatusReason?: string;
  AccountGateResult?: AccountGateResult;
  OrganizationalUnitId?: string;
}
export type StackSetOperationResultSummaries = StackSetOperationResultSummary[];
export interface ListStackSetOperationResultsOutput {
  Summaries?: StackSetOperationResultSummary[];
  NextToken?: string;
}
export interface ListStackSetOperationsInput {
  StackSetName?: string;
  NextToken?: string;
  MaxResults?: number;
  CallAs?: CallAs;
}
export interface StackSetOperationSummary {
  OperationId?: string;
  Action?: StackSetOperationAction;
  Status?: StackSetOperationStatus;
  CreationTimestamp?: Date;
  EndTimestamp?: Date;
  StatusReason?: string;
  StatusDetails?: StackSetOperationStatusDetails;
  OperationPreferences?: StackSetOperationPreferences;
}
export type StackSetOperationSummaries = StackSetOperationSummary[];
export interface ListStackSetOperationsOutput {
  Summaries?: StackSetOperationSummary[];
  NextToken?: string;
}
export interface ListStackSetsInput {
  NextToken?: string;
  MaxResults?: number;
  Status?: StackSetStatus;
  CallAs?: CallAs;
}
export interface StackSetSummary {
  StackSetName?: string;
  StackSetId?: string;
  Description?: string;
  Status?: StackSetStatus;
  AutoDeployment?: AutoDeployment;
  PermissionModel?: PermissionModels;
  DriftStatus?: StackDriftStatus;
  LastDriftCheckTimestamp?: Date;
  ManagedExecution?: ManagedExecution;
}
export type StackSetSummaries = StackSetSummary[];
export interface ListStackSetsOutput {
  Summaries?: StackSetSummary[];
  NextToken?: string;
}
export interface ListTypeRegistrationsInput {
  Type?: RegistryType;
  TypeName?: string;
  TypeArn?: string;
  RegistrationStatusFilter?: RegistrationStatus;
  MaxResults?: number;
  NextToken?: string;
}
export type RegistrationTokenList = string[];
export interface ListTypeRegistrationsOutput {
  RegistrationTokenList?: string[];
  NextToken?: string;
}
export type Category = "REGISTERED" | "ACTIVATED" | "THIRD_PARTY" | "AWS_TYPES" | (string & {});
export type TypeNamePrefix = string;
export interface TypeFilters {
  Category?: Category;
  PublisherId?: string;
  TypeNamePrefix?: string;
}
export interface ListTypesInput {
  Visibility?: Visibility;
  ProvisioningType?: ProvisioningType;
  DeprecatedStatus?: DeprecatedStatus;
  Type?: RegistryType;
  Filters?: TypeFilters;
  MaxResults?: number;
  NextToken?: string;
}
export type PublisherName = string;
export interface TypeSummary {
  Type?: RegistryType;
  TypeName?: string;
  DefaultVersionId?: string;
  TypeArn?: string;
  LastUpdated?: Date;
  Description?: string;
  PublisherId?: string;
  OriginalTypeName?: string;
  PublicVersionNumber?: string;
  LatestPublicVersion?: string;
  PublisherIdentity?: IdentityProvider;
  PublisherName?: string;
  IsActivated?: boolean;
}
export type TypeSummaries = TypeSummary[];
export interface ListTypesOutput {
  TypeSummaries?: TypeSummary[];
  NextToken?: string;
}
export interface ListTypeVersionsInput {
  Type?: RegistryType;
  TypeName?: string;
  Arn?: string;
  MaxResults?: number;
  NextToken?: string;
  DeprecatedStatus?: DeprecatedStatus;
  PublisherId?: string;
}
export interface TypeVersionSummary {
  Type?: RegistryType;
  TypeName?: string;
  VersionId?: string;
  IsDefaultVersion?: boolean;
  Arn?: string;
  TimeCreated?: Date;
  Description?: string;
  PublicVersionNumber?: string;
}
export type TypeVersionSummaries = TypeVersionSummary[];
export interface ListTypeVersionsOutput {
  TypeVersionSummaries?: TypeVersionSummary[];
  NextToken?: string;
}
export interface PublishTypeInput {
  Type?: ThirdPartyType;
  Arn?: string;
  TypeName?: string;
  PublicVersionNumber?: string;
}
export interface PublishTypeOutput {
  PublicTypeArn?: string;
}
export type OperationStatus = "PENDING" | "IN_PROGRESS" | "SUCCESS" | "FAILED" | (string & {});
export type StatusMessage = string;
export type HandlerErrorCode =
  | "NotUpdatable"
  | "InvalidRequest"
  | "AccessDenied"
  | "InvalidCredentials"
  | "AlreadyExists"
  | "NotFound"
  | "ResourceConflict"
  | "Throttling"
  | "ServiceLimitExceeded"
  | "NotStabilized"
  | "GeneralServiceException"
  | "ServiceInternalError"
  | "NetworkFailure"
  | "InternalFailure"
  | "InvalidTypeConfiguration"
  | "HandlerInternalFailure"
  | "NonCompliant"
  | "Unknown"
  | "UnsupportedTarget"
  | (string & {});
export type ResourceModel = string;
export interface RecordHandlerProgressInput {
  BearerToken?: string;
  OperationStatus?: OperationStatus;
  CurrentOperationStatus?: OperationStatus;
  StatusMessage?: string;
  ErrorCode?: HandlerErrorCode;
  ResourceModel?: string;
  ClientRequestToken?: string;
}
export interface RecordHandlerProgressOutput {}
export type AcceptTermsAndConditions = boolean;
export type ConnectionArn = string;
export interface RegisterPublisherInput {
  AcceptTermsAndConditions?: boolean;
  ConnectionArn?: string;
}
export interface RegisterPublisherOutput {
  PublisherId?: string;
}
export type S3Url = string;
export type RequestToken = string;
export interface RegisterTypeInput {
  Type?: RegistryType;
  TypeName?: string;
  SchemaHandlerPackage?: string;
  LoggingConfig?: LoggingConfig;
  ExecutionRoleArn?: string;
  ClientRequestToken?: string;
}
export interface RegisterTypeOutput {
  RegistrationToken?: string;
}
export interface RollbackStackInput {
  StackName?: string;
  RoleARN?: string;
  ClientRequestToken?: string;
  RetainExceptOnCreate?: boolean;
  DeploymentConfig?: DeploymentConfig;
}
export interface RollbackStackOutput {
  StackId?: string;
  OperationId?: string;
}
export interface SetStackPolicyInput {
  StackName?: string;
  StackPolicyBody?: string;
  StackPolicyURL?: string;
}
export interface SetStackPolicyResponse {}
export interface SetTypeConfigurationInput {
  TypeArn?: string;
  Configuration?: string;
  ConfigurationAlias?: string;
  TypeName?: string;
  Type?: ThirdPartyType;
}
export interface SetTypeConfigurationOutput {
  ConfigurationArn?: string;
}
export interface SetTypeDefaultVersionInput {
  Arn?: string;
  Type?: RegistryType;
  TypeName?: string;
  VersionId?: string;
}
export interface SetTypeDefaultVersionOutput {}
export type ResourceSignalUniqueId = string;
export type ResourceSignalStatus = "SUCCESS" | "FAILURE" | (string & {});
export interface SignalResourceInput {
  StackName?: string;
  LogicalResourceId?: string;
  UniqueId?: string;
  Status?: ResourceSignalStatus;
}
export interface SignalResourceResponse {}
export interface StartResourceScanInput {
  ClientRequestToken?: string;
  ScanFilters?: ScanFilter[];
}
export interface StartResourceScanOutput {
  ResourceScanId?: string;
}
export interface StopStackSetOperationInput {
  StackSetName?: string;
  OperationId?: string;
  CallAs?: CallAs;
}
export interface StopStackSetOperationOutput {}
export type S3Bucket = string;
export interface TestTypeInput {
  Arn?: string;
  Type?: ThirdPartyType;
  TypeName?: string;
  VersionId?: string;
  LogDeliveryBucket?: string;
}
export interface TestTypeOutput {
  TypeVersionArn?: string;
}
export type JazzLogicalResourceIds = string[];
export type RefreshAllResources = boolean;
export interface UpdateGeneratedTemplateInput {
  GeneratedTemplateName?: string;
  NewGeneratedTemplateName?: string;
  AddResources?: ResourceDefinition[];
  RemoveResources?: string[];
  RefreshAllResources?: boolean;
  TemplateConfiguration?: TemplateConfiguration;
}
export interface UpdateGeneratedTemplateOutput {
  GeneratedTemplateId?: string;
}
export type StackPolicyDuringUpdateBody = string;
export type StackPolicyDuringUpdateURL = string;
export interface UpdateStackInput {
  StackName?: string;
  TemplateBody?: string;
  TemplateURL?: string;
  UsePreviousTemplate?: boolean;
  StackPolicyDuringUpdateBody?: string;
  StackPolicyDuringUpdateURL?: string;
  Parameters?: Parameter[];
  Capabilities?: Capability[];
  ResourceTypes?: string[];
  RoleARN?: string;
  RollbackConfiguration?: RollbackConfiguration;
  StackPolicyBody?: string;
  StackPolicyURL?: string;
  NotificationARNs?: string[];
  Tags?: Tag[];
  DisableRollback?: boolean;
  ClientRequestToken?: string;
  RetainExceptOnCreate?: boolean;
  DeploymentConfig?: DeploymentConfig;
  DisableValidation?: boolean;
}
export interface UpdateStackOutput {
  StackId?: string;
  OperationId?: string;
}
export interface UpdateStackInstancesInput {
  StackSetName?: string;
  Accounts?: string[];
  DeploymentTargets?: DeploymentTargets;
  Regions?: string[];
  ParameterOverrides?: Parameter[];
  OperationPreferences?: StackSetOperationPreferences;
  OperationId?: string;
  CallAs?: CallAs;
}
export interface UpdateStackInstancesOutput {
  OperationId?: string;
}
export interface UpdateStackSetInput {
  StackSetName?: string;
  Description?: string;
  TemplateBody?: string;
  TemplateURL?: string;
  UsePreviousTemplate?: boolean;
  Parameters?: Parameter[];
  Capabilities?: Capability[];
  Tags?: Tag[];
  OperationPreferences?: StackSetOperationPreferences;
  AdministrationRoleARN?: string;
  ExecutionRoleName?: string;
  DeploymentTargets?: DeploymentTargets;
  PermissionModel?: PermissionModels;
  AutoDeployment?: AutoDeployment;
  OperationId?: string;
  Accounts?: string[];
  Regions?: string[];
  CallAs?: CallAs;
  ManagedExecution?: ManagedExecution;
}
export interface UpdateStackSetOutput {
  OperationId?: string;
}
export interface UpdateTerminationProtectionInput {
  EnableTerminationProtection?: boolean;
  StackName?: string;
}
export interface UpdateTerminationProtectionOutput {
  StackId?: string;
}
export interface ValidateTemplateInput {
  TemplateBody?: string;
  TemplateURL?: string;
}
export interface TemplateParameter {
  ParameterKey?: string;
  DefaultValue?: string;
  NoEcho?: boolean;
  Description?: string;
}
export type TemplateParameters = TemplateParameter[];
export interface ValidateTemplateOutput {
  Parameters?: TemplateParameter[];
  Description?: string;
  Capabilities?: Capability[];
  CapabilitiesReason?: string;
  DeclaredTransforms?: string[];
}
export type ActivateOrganizationsAccessError =
  | InvalidOperationException
  | OperationNotFoundException
  | CommonErrors;
/**
 * Activate trusted access with Organizations. With trusted access between StackSets
 * and Organizations activated, the management account has permissions to create
 * and manage StackSets for your organization.
 */
export const activateOrganizationsAccess: API.OperationMethod<
  ActivateOrganizationsAccessInput,
  ActivateOrganizationsAccessOutput,
  ActivateOrganizationsAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<ActivateOrganizationsAccessInput>,
  output: __S(1, __c0, 1) as any as S.Schema<ActivateOrganizationsAccessOutput>,
  errors: [InvalidOperationException, OperationNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ActivateOrganizationsAccess",
}));

export type ActivateTypeError = CFNRegistryException | TypeNotFoundException | CommonErrors;
/**
 * Activates a public third-party extension, such as a resource or module, to make it
 * available for use in stack templates in your current account and Region. It can also create
 * CloudFormation Hooks, which allow you to evaluate resource configurations before CloudFormation
 * provisions them. Hooks integrate with both CloudFormation and Cloud Control API operations.
 *
 * After you activate an extension, you can use SetTypeConfiguration to set specific properties for the extension.
 *
 * To see which extensions have been activated, use ListTypes. To see
 * configuration details for an extension, use DescribeType.
 *
 * For more information, see Activate a
 * third-party public extension in your account in the
 * *CloudFormation User Guide*. For information about creating Hooks, see the
 * CloudFormation Hooks User Guide.
 */
export const activateType: API.OperationMethod<
  ActivateTypeInput,
  ActivateTypeOutput,
  ActivateTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(3, __c0, 3) as any as S.Schema<ActivateTypeInput>,
  output: __S(4, __c0, 4) as any as S.Schema<ActivateTypeOutput>,
  errors: [CFNRegistryException, TypeNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ActivateType",
}));

export type BatchDescribeTypeConfigurationsError =
  | CFNRegistryException
  | TypeConfigurationNotFoundException
  | CommonErrors;
/**
 * Returns configuration data for the specified CloudFormation extensions, from the CloudFormation
 * registry in your current account and Region.
 *
 * For more information, see Edit configuration
 * data for extensions in your account in the
 * *CloudFormation User Guide*.
 */
export const batchDescribeTypeConfigurations: API.OperationMethod<
  BatchDescribeTypeConfigurationsInput,
  BatchDescribeTypeConfigurationsOutput,
  BatchDescribeTypeConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(7, __c0, 7) as any as S.Schema<BatchDescribeTypeConfigurationsInput>,
  output: __S(13, __c1, 5) as any as S.Schema<BatchDescribeTypeConfigurationsOutput>,
  errors: [CFNRegistryException, TypeConfigurationNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDescribeTypeConfigurations",
}));

export type CancelUpdateStackError = TokenAlreadyExistsException | CommonErrors;
/**
 * Cancels an update on the specified stack. If the call completes successfully, the stack
 * rolls back the update and reverts to the previous stack configuration.
 *
 * You can cancel only stacks that are in the `UPDATE_IN_PROGRESS` state.
 */
export const cancelUpdateStack: API.OperationMethod<
  CancelUpdateStackInput,
  CancelUpdateStackResponse,
  CancelUpdateStackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(14, __c1, 6) as any as S.Schema<CancelUpdateStackInput>,
  output: __S(15, __c1, 7) as any as S.Schema<CancelUpdateStackResponse>,
  errors: [TokenAlreadyExistsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelUpdateStack",
}));

export type ContinueUpdateRollbackError = TokenAlreadyExistsException | CommonErrors;
/**
 * Continues rolling back a stack from `UPDATE_ROLLBACK_FAILED` to
 * `UPDATE_ROLLBACK_COMPLETE` state. Depending on the cause of the failure, you can
 * manually fix the error and continue the rollback. By continuing the rollback, you can return
 * your stack to a working state (the `UPDATE_ROLLBACK_COMPLETE` state) and then try
 * to update the stack again.
 *
 * A stack enters the `UPDATE_ROLLBACK_FAILED` state when CloudFormation can't roll
 * back all changes after a failed stack update. For example, this might occur when a stack
 * attempts to roll back to an old database that was deleted outside of CloudFormation. Because
 * CloudFormation doesn't know the instance was deleted, it assumes the instance still exists and
 * attempts to roll back to it, causing the update rollback to fail.
 *
 * For more information, see Continue rolling back an update in the *CloudFormation User Guide*. For
 * information for troubleshooting a failed update rollback, see Update rollback failed.
 */
export const continueUpdateRollback: API.OperationMethod<
  ContinueUpdateRollbackInput,
  ContinueUpdateRollbackOutput,
  ContinueUpdateRollbackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(17, __c2, 1) as any as S.Schema<ContinueUpdateRollbackInput>,
  output: __S(18, __c2, 2) as any as S.Schema<ContinueUpdateRollbackOutput>,
  errors: [TokenAlreadyExistsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ContinueUpdateRollback",
}));

export type CreateChangeSetError =
  | AlreadyExistsException
  | InsufficientCapabilitiesException
  | LimitExceededException
  | CommonErrors;
/**
 * Creates a list of changes that will be applied to a stack so that you can review the
 * changes before executing them. You can create a change set for a stack that doesn't exist or
 * an existing stack. If you create a change set for a stack that doesn't exist, the change set
 * shows all of the resources that CloudFormation will create. If you create a change set for an
 * existing stack, CloudFormation compares the stack's information with the information that you
 * submit in the change set and lists the differences. Use change sets to understand which
 * resources CloudFormation will create or change, and how it will change resources in an existing
 * stack, before you create or update a stack.
 *
 * To create a change set for a stack that doesn't exist, for the `ChangeSetType`
 * parameter, specify `CREATE`. To create a change set for an existing stack, specify
 * `UPDATE` for the `ChangeSetType` parameter. To create a change set for
 * an import operation, specify `IMPORT` for the `ChangeSetType` parameter.
 * After the `CreateChangeSet` call successfully completes, CloudFormation starts creating
 * the change set. To check the status of the change set or to review it, use the DescribeChangeSet action.
 *
 * When you are satisfied with the changes the change set will make, execute the change set
 * by using the ExecuteChangeSet action. CloudFormation doesn't make changes until
 * you execute the change set.
 *
 * To create a change set for the entire stack hierarchy, set
 * `IncludeNestedStacks` to `True`.
 */
export const createChangeSet: API.OperationMethod<
  CreateChangeSetInput,
  CreateChangeSetOutput,
  CreateChangeSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(33, __c4, 1) as any as S.Schema<CreateChangeSetInput>,
  output: __S(34, __c4, 2) as any as S.Schema<CreateChangeSetOutput>,
  errors: [AlreadyExistsException, InsufficientCapabilitiesException, LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateChangeSet",
}));

export type CreateGeneratedTemplateError =
  | AlreadyExistsException
  | ConcurrentResourcesLimitExceededException
  | LimitExceededException
  | CommonErrors;
/**
 * Creates a template from existing resources that are not already managed with CloudFormation.
 * You can check the status of the template generation using the
 * `DescribeGeneratedTemplate` API action.
 */
export const createGeneratedTemplate: API.OperationMethod<
  CreateGeneratedTemplateInput,
  CreateGeneratedTemplateOutput,
  CreateGeneratedTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(38, __c4, 6) as any as S.Schema<CreateGeneratedTemplateInput>,
  output: __S(39, __c4, 7) as any as S.Schema<CreateGeneratedTemplateOutput>,
  errors: [
    AlreadyExistsException,
    ConcurrentResourcesLimitExceededException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateGeneratedTemplate",
}));

export type CreateStackError =
  | AlreadyExistsException
  | InsufficientCapabilitiesException
  | LimitExceededException
  | TokenAlreadyExistsException
  | CommonErrors;
/**
 * Creates a stack as specified in the template. After the call completes successfully, the
 * stack creation starts. You can check the status of the stack through the DescribeStacks operation.
 *
 * For more information about creating a stack and monitoring stack progress, see Managing Amazon Web Services
 * resources as a single unit with CloudFormation stacks in the
 * *CloudFormation User Guide*.
 */
export const createStack: API.OperationMethod<
  CreateStackInput,
  CreateStackOutput,
  CreateStackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(40, __c5, 0) as any as S.Schema<CreateStackInput>,
  output: __S(41, __c5, 1) as any as S.Schema<CreateStackOutput>,
  errors: [
    AlreadyExistsException,
    InsufficientCapabilitiesException,
    LimitExceededException,
    TokenAlreadyExistsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateStack",
}));

export type CreateStackInstancesError =
  | InvalidOperationException
  | LimitExceededException
  | OperationIdAlreadyExistsException
  | OperationInProgressException
  | StackSetNotFoundException
  | StaleRequestException
  | CommonErrors;
/**
 * Creates stack instances for the specified accounts, within the specified Amazon Web Services Regions. A
 * stack instance refers to a stack in a specific account and Region. You must specify at least
 * one value for either `Accounts` or `DeploymentTargets`, and you must
 * specify at least one value for `Regions`.
 *
 * The maximum number of organizational unit (OUs) supported by a
 * `CreateStackInstances` operation is 50.
 *
 * If you need more than 50, consider the following options:
 *
 * - *Batch processing:* If you don't want to expose your OU
 * hierarchy, split up the operations into multiple calls with less than 50 OUs
 * each.
 *
 * - *Parent OU strategy:* If you don't mind exposing the OU
 * hierarchy, target a parent OU that contains all desired child OUs.
 */
export const createStackInstances: API.OperationMethod<
  CreateStackInstancesInput,
  CreateStackInstancesOutput,
  CreateStackInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(47, __c5, 7) as any as S.Schema<CreateStackInstancesInput>,
  output: __S(48, __c6, 0) as any as S.Schema<CreateStackInstancesOutput>,
  errors: [
    InvalidOperationException,
    LimitExceededException,
    OperationIdAlreadyExistsException,
    OperationInProgressException,
    StackSetNotFoundException,
    StaleRequestException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateStackInstances",
}));

export type CreateStackRefactorError = CommonErrors;
/**
 * Creates a refactor across multiple stacks, with the list of stacks and resources that are
 * affected.
 */
export const createStackRefactor: API.OperationMethod<
  CreateStackRefactorInput,
  CreateStackRefactorOutput,
  CreateStackRefactorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(54, __c6, 6) as any as S.Schema<CreateStackRefactorInput>,
  output: __S(55, __c6, 7) as any as S.Schema<CreateStackRefactorOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateStackRefactor",
}));

export type CreateStackSetError =
  | CreatedButModifiedException
  | LimitExceededException
  | NameAlreadyExistsException
  | CommonErrors;
/**
 * Creates a StackSet.
 */
export const createStackSet: API.OperationMethod<
  CreateStackSetInput,
  CreateStackSetOutput,
  CreateStackSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(59, __c7, 3) as any as S.Schema<CreateStackSetInput>,
  output: __S(60, __c7, 4) as any as S.Schema<CreateStackSetOutput>,
  errors: [CreatedButModifiedException, LimitExceededException, NameAlreadyExistsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateStackSet",
}));

export type DeactivateOrganizationsAccessError =
  | InvalidOperationException
  | OperationNotFoundException
  | CommonErrors;
/**
 * Deactivates trusted access with Organizations. If trusted access is deactivated,
 * the management account does not have permissions to create and manage
 * service-managed StackSets for your organization.
 */
export const deactivateOrganizationsAccess: API.OperationMethod<
  DeactivateOrganizationsAccessInput,
  DeactivateOrganizationsAccessOutput,
  DeactivateOrganizationsAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(61, __c7, 5) as any as S.Schema<DeactivateOrganizationsAccessInput>,
  output: __S(62, __c7, 6) as any as S.Schema<DeactivateOrganizationsAccessOutput>,
  errors: [InvalidOperationException, OperationNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeactivateOrganizationsAccess",
}));

export type DeactivateTypeError = CFNRegistryException | TypeNotFoundException | CommonErrors;
/**
 * Deactivates a public third-party extension, such as a resource or module, or a CloudFormation
 * Hook when you no longer use it.
 *
 * Deactivating an extension deletes the configuration details that are associated with it.
 * To temporarily disable a CloudFormation Hook instead, you can use SetTypeConfiguration.
 *
 * Once deactivated, an extension can't be used in any CloudFormation operation. This includes
 * stack update operations where the stack template includes the extension, even if no updates
 * are being made to the extension. In addition, deactivated extensions aren't automatically
 * updated if a new version of the extension is released.
 *
 * To see which extensions are currently activated, use ListTypes.
 */
export const deactivateType: API.OperationMethod<
  DeactivateTypeInput,
  DeactivateTypeOutput,
  DeactivateTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(63, __c7, 7) as any as S.Schema<DeactivateTypeInput>,
  output: __S(64, __c8, 0) as any as S.Schema<DeactivateTypeOutput>,
  errors: [CFNRegistryException, TypeNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeactivateType",
}));

export type DeleteChangeSetError = InvalidChangeSetStatusException | CommonErrors;
/**
 * Deletes the specified change set. Deleting change sets ensures that no one executes the
 * wrong change set.
 *
 * If the call successfully completes, CloudFormation successfully deleted the change set.
 *
 * If `IncludeNestedStacks` specifies `True` during the creation of the
 * nested change set, then `DeleteChangeSet` will delete all change sets that belong
 * to the stacks hierarchy and will also delete all change sets for nested stacks with the status
 * of `REVIEW_IN_PROGRESS`.
 */
export const deleteChangeSet: API.OperationMethod<
  DeleteChangeSetInput,
  DeleteChangeSetOutput,
  DeleteChangeSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(65, __c8, 1) as any as S.Schema<DeleteChangeSetInput>,
  output: __S(66, __c8, 2) as any as S.Schema<DeleteChangeSetOutput>,
  errors: [InvalidChangeSetStatusException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteChangeSet",
}));

export type DeleteGeneratedTemplateError =
  | ConcurrentResourcesLimitExceededException
  | GeneratedTemplateNotFoundException
  | CommonErrors;
/**
 * Deleted a generated template.
 */
export const deleteGeneratedTemplate: API.OperationMethod<
  DeleteGeneratedTemplateInput,
  DeleteGeneratedTemplateResponse,
  DeleteGeneratedTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(67, __c8, 3) as any as S.Schema<DeleteGeneratedTemplateInput>,
  output: __S(68, __c8, 4) as any as S.Schema<DeleteGeneratedTemplateResponse>,
  errors: [ConcurrentResourcesLimitExceededException, GeneratedTemplateNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteGeneratedTemplate",
}));

export type DeleteStackError = TokenAlreadyExistsException | CommonErrors;
/**
 * Deletes a specified stack. Once the call completes successfully, stack deletion starts.
 * Deleted stacks don't show up in the DescribeStacks operation if the deletion
 * has been completed successfully.
 *
 * For more information about deleting a stack, see Delete a stack from
 * the CloudFormation console in the *CloudFormation User Guide*.
 */
export const deleteStack: API.OperationMethod<
  DeleteStackInput,
  DeleteStackResponse,
  DeleteStackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70, __c8, 6) as any as S.Schema<DeleteStackInput>,
  output: __S(71, __c8, 7) as any as S.Schema<DeleteStackResponse>,
  errors: [TokenAlreadyExistsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteStack",
}));

export type DeleteStackInstancesError =
  | InvalidOperationException
  | OperationIdAlreadyExistsException
  | OperationInProgressException
  | StackSetNotFoundException
  | StaleRequestException
  | CommonErrors;
/**
 * Deletes stack instances for the specified accounts, in the specified Amazon Web Services Regions.
 *
 * The maximum number of organizational unit (OUs) supported by a
 * `DeleteStackInstances` operation is 50.
 *
 * If you need more than 50, consider the following options:
 *
 * - *Batch processing:* If you don't want to expose your OU
 * hierarchy, split up the operations into multiple calls with less than 50 OUs
 * each.
 *
 * - *Parent OU strategy:* If you don't mind exposing the OU
 * hierarchy, target a parent OU that contains all desired child OUs.
 */
export const deleteStackInstances: API.OperationMethod<
  DeleteStackInstancesInput,
  DeleteStackInstancesOutput,
  DeleteStackInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(72, __c9, 0) as any as S.Schema<DeleteStackInstancesInput>,
  output: __S(73, __c9, 1) as any as S.Schema<DeleteStackInstancesOutput>,
  errors: [
    InvalidOperationException,
    OperationIdAlreadyExistsException,
    OperationInProgressException,
    StackSetNotFoundException,
    StaleRequestException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteStackInstances",
}));

export type DeleteStackSetError =
  | OperationInProgressException
  | StackSetNotEmptyException
  | CommonErrors;
/**
 * Deletes a StackSet. Before you can delete a StackSet, all its member stack instances must
 * be deleted. For more information about how to complete this, see DeleteStackInstances.
 */
export const deleteStackSet: API.OperationMethod<
  DeleteStackSetInput,
  DeleteStackSetOutput,
  DeleteStackSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(74, __c9, 2) as any as S.Schema<DeleteStackSetInput>,
  output: __S(75, __c9, 3) as any as S.Schema<DeleteStackSetOutput>,
  errors: [OperationInProgressException, StackSetNotEmptyException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteStackSet",
}));

export type DeregisterTypeError = CFNRegistryException | TypeNotFoundException | CommonErrors;
/**
 * Marks an extension or extension version as `DEPRECATED` in the CloudFormation
 * registry, removing it from active use. Deprecated extensions or extension versions cannot be
 * used in CloudFormation operations.
 *
 * To deregister an entire extension, you must individually deregister all active versions of
 * that extension. If an extension has only a single active version, deregistering that version
 * results in the extension itself being deregistered and marked as deprecated in the
 * registry.
 *
 * You can't deregister the default version of an extension if there are other active version
 * of that extension. If you do deregister the default version of an extension, the extension
 * type itself is deregistered as well and marked as deprecated.
 *
 * To view the deprecation status of an extension or extension version, use DescribeType.
 *
 * For more information, see Remove
 * third-party private extensions from your account in the
 * *CloudFormation User Guide*.
 */
export const deregisterType: API.OperationMethod<
  DeregisterTypeInput,
  DeregisterTypeOutput,
  DeregisterTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(76, __c9, 4) as any as S.Schema<DeregisterTypeInput>,
  output: __S(77, __c9, 5) as any as S.Schema<DeregisterTypeOutput>,
  errors: [CFNRegistryException, TypeNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeregisterType",
}));

export type DescribeAccountLimitsError = CommonErrors;
/**
 * Retrieves your account's CloudFormation limits, such as the maximum number of stacks that you
 * can create in your account. For more information about account limits, see Understand CloudFormation quotas in the *CloudFormation User Guide*.
 */
export const describeAccountLimits: API.PaginatedOperationMethod<
  DescribeAccountLimitsInput,
  DescribeAccountLimitsOutput,
  DescribeAccountLimitsError,
  Credentials | HttpClient.HttpClient,
  AccountLimit
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(78, __c9, 6) as any as S.Schema<DescribeAccountLimitsInput>,
  output: __S(81, __c10, 1) as any as S.Schema<DescribeAccountLimitsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAccountLimits",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AccountLimits",
  } as const,
})) as any;

export type DescribeChangeSetError = ChangeSetNotFoundException | CommonErrors;
/**
 * Returns the inputs for the change set and a list of changes that CloudFormation will make if
 * you execute the change set. For more information, see Update
 * CloudFormation stacks using change sets in the
 * *CloudFormation User Guide*.
 */
export const describeChangeSet: API.PaginatedOperationMethod<
  DescribeChangeSetInput,
  DescribeChangeSetOutput,
  DescribeChangeSetError,
  Credentials | HttpClient.HttpClient,
  Change
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(82, __c10, 2) as any as S.Schema<DescribeChangeSetInput>,
  output: __S(94, __c11, 6) as any as S.Schema<DescribeChangeSetOutput>,
  errors: [ChangeSetNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeChangeSet",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", items: "Changes" } as const,
})) as any;

export type DescribeChangeSetHooksError = ChangeSetNotFoundException | CommonErrors;
/**
 * Returns Hook-related information for the change set and a list of changes that
 * CloudFormation makes when you run the change set.
 */
export const describeChangeSetHooks: API.OperationMethod<
  DescribeChangeSetHooksInput,
  DescribeChangeSetHooksOutput,
  DescribeChangeSetHooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(95, __c11, 7) as any as S.Schema<DescribeChangeSetHooksInput>,
  output: __S(100, __c12, 4) as any as S.Schema<DescribeChangeSetHooksOutput>,
  errors: [ChangeSetNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeChangeSetHooks",
}));

export type DescribeEventsError = CommonErrors;
/**
 * Returns CloudFormation events based on flexible query criteria. Groups events by operation ID,
 * enabling you to focus on individual stack operations during deployment.
 *
 * An operation is any action performed on a stack, including stack lifecycle actions
 * (Create, Update, Delete, Rollback), change set creation, nested stack creation, and automatic
 * rollbacks triggered by failures. Each operation has a unique identifier (Operation ID) and
 * represents a discrete change attempt on the stack.
 *
 * Returns different types of events including:
 *
 * - **Progress events** - Status updates during stack operation
 * execution.
 *
 * - **Validation errors** - Failures from CloudFormation Early
 * Validations.
 *
 * - **Provisioning errors** - Resource creation and update
 * failures.
 *
 * - **Hook invocation errors** - Failures from CloudFormation
 * Hook during stack operations.
 *
 * One of `ChangeSetName`, `OperationId` or `StackName`
 * must be specified as input.
 */
export const describeEvents: API.PaginatedOperationMethod<
  DescribeEventsInput,
  DescribeEventsOutput,
  DescribeEventsError,
  Credentials | HttpClient.HttpClient,
  OperationEvent
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(102, __c12, 6) as any as S.Schema<DescribeEventsInput>,
  output: __S(105, __c13, 1) as any as S.Schema<DescribeEventsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEvents",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "OperationEvents",
  } as const,
})) as any;

export type DescribeGeneratedTemplateError = GeneratedTemplateNotFoundException | CommonErrors;
/**
 * Describes a generated template. The output includes details about the progress of the
 * creation of a generated template started by a `CreateGeneratedTemplate` API action
 * or the update of a generated template started with an `UpdateGeneratedTemplate` API
 * action.
 */
export const describeGeneratedTemplate: API.OperationMethod<
  DescribeGeneratedTemplateInput,
  DescribeGeneratedTemplateOutput,
  DescribeGeneratedTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(106, __c13, 2) as any as S.Schema<DescribeGeneratedTemplateInput>,
  output: __S(114, __c14, 2) as any as S.Schema<DescribeGeneratedTemplateOutput>,
  errors: [GeneratedTemplateNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeGeneratedTemplate",
}));

export type DescribeOrganizationsAccessError =
  | InvalidOperationException
  | OperationNotFoundException
  | CommonErrors;
/**
 * Retrieves information about the account's `OrganizationAccess` status. This API
 * can be called either by the management account or the delegated administrator by using the
 * `CallAs` parameter. This API can also be called without the `CallAs`
 * parameter by the management account.
 */
export const describeOrganizationsAccess: API.OperationMethod<
  DescribeOrganizationsAccessInput,
  DescribeOrganizationsAccessOutput,
  DescribeOrganizationsAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(115, __c14, 3) as any as S.Schema<DescribeOrganizationsAccessInput>,
  output: __S(116, __c14, 4) as any as S.Schema<DescribeOrganizationsAccessOutput>,
  errors: [InvalidOperationException, OperationNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeOrganizationsAccess",
}));

export type DescribePublisherError = CFNRegistryException | CommonErrors;
/**
 * Returns information about a CloudFormation extension publisher.
 *
 * If you don't supply a `PublisherId`, and you have registered as an extension
 * publisher, `DescribePublisher` returns information about your own publisher
 * account.
 *
 * For more information about registering as a publisher, see:
 *
 * - RegisterPublisher
 *
 * - Publishing extensions
 * to make them available for public use in the
 * *CloudFormation Command Line Interface (CLI) User Guide*
 */
export const describePublisher: API.OperationMethod<
  DescribePublisherInput,
  DescribePublisherOutput,
  DescribePublisherError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(117, __c14, 5) as any as S.Schema<DescribePublisherInput>,
  output: __S(118, __c14, 6) as any as S.Schema<DescribePublisherOutput>,
  errors: [CFNRegistryException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribePublisher",
}));

export type DescribeResourceScanError = ResourceScanNotFoundException | CommonErrors;
/**
 * Describes details of a resource scan.
 */
export const describeResourceScan: API.OperationMethod<
  DescribeResourceScanInput,
  DescribeResourceScanOutput,
  DescribeResourceScanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(119, __c14, 7) as any as S.Schema<DescribeResourceScanInput>,
  output: __S(123, __c15, 3) as any as S.Schema<DescribeResourceScanOutput>,
  errors: [ResourceScanNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeResourceScan",
}));

export type DescribeStackDriftDetectionStatusError = CommonErrors;
/**
 * Returns information about a stack drift detection operation. A stack drift detection
 * operation detects whether a stack's actual configuration differs, or has
 * *drifted*, from its expected configuration, as defined in the stack
 * template and any values specified as template parameters. A stack is considered to have
 * drifted if one or more of its resources have drifted. For more information about stack and
 * resource drift, see Detect unmanaged
 * configuration changes to stacks and resources with drift detection.
 *
 * Use DetectStackDrift to initiate a stack drift detection operation.
 * `DetectStackDrift` returns a `StackDriftDetectionId` you can use to
 * monitor the progress of the operation using `DescribeStackDriftDetectionStatus`.
 * Once the drift detection operation has completed, use DescribeStackResourceDrifts to return drift information about the stack and its
 * resources.
 */
export const describeStackDriftDetectionStatus: API.OperationMethod<
  DescribeStackDriftDetectionStatusInput,
  DescribeStackDriftDetectionStatusOutput,
  DescribeStackDriftDetectionStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(124, __c15, 4) as any as S.Schema<DescribeStackDriftDetectionStatusInput>,
  output: __S(125, __c15, 5) as any as S.Schema<DescribeStackDriftDetectionStatusOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeStackDriftDetectionStatus",
}));

export type DescribeStackEventsError = CommonErrors;
/**
 * Returns all stack related events for a specified stack in reverse chronological order. For
 * more information about a stack's event history, see Understand CloudFormation stack creation events in the
 * *CloudFormation User Guide*.
 *
 * You can list events for stacks that have failed to create or have been deleted by
 * specifying the unique stack identifier (stack ID).
 */
export const describeStackEvents: API.PaginatedOperationMethod<
  DescribeStackEventsInput,
  DescribeStackEventsOutput,
  DescribeStackEventsError,
  Credentials | HttpClient.HttpClient,
  StackEvent
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(126, __c15, 6) as any as S.Schema<DescribeStackEventsInput>,
  output: __S(129, __c16, 1) as any as S.Schema<DescribeStackEventsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeStackEvents",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", items: "StackEvents" } as const,
})) as any;

export type DescribeStackInstanceError =
  | StackInstanceNotFoundException
  | StackSetNotFoundException
  | CommonErrors;
/**
 * Returns the stack instance that's associated with the specified StackSet, Amazon Web Services account,
 * and Amazon Web Services Region.
 *
 * For a list of stack instances that are associated with a specific StackSet, use ListStackInstances.
 */
export const describeStackInstance: API.OperationMethod<
  DescribeStackInstanceInput,
  DescribeStackInstanceOutput,
  DescribeStackInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(130, __c16, 2) as any as S.Schema<DescribeStackInstanceInput>,
  output: __S(133, __c16, 5) as any as S.Schema<DescribeStackInstanceOutput>,
  errors: [StackInstanceNotFoundException, StackSetNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeStackInstance",
}));

export type DescribeStackRefactorError = StackRefactorNotFoundException | CommonErrors;
/**
 * Describes the stack refactor status.
 */
export const describeStackRefactor: API.OperationMethod<
  DescribeStackRefactorInput,
  DescribeStackRefactorOutput,
  DescribeStackRefactorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(134, __c16, 6) as any as S.Schema<DescribeStackRefactorInput>,
  output: __S(136, __c17, 0) as any as S.Schema<DescribeStackRefactorOutput>,
  errors: [StackRefactorNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeStackRefactor",
}));

export type DescribeStackResourceError = CommonErrors;
/**
 * Returns a description of the specified resource in the specified stack.
 *
 * For deleted stacks, DescribeStackResource returns resource information for up to 90 days
 * after the stack has been deleted.
 */
export const describeStackResource: API.OperationMethod<
  DescribeStackResourceInput,
  DescribeStackResourceOutput,
  DescribeStackResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(137, __c17, 1) as any as S.Schema<DescribeStackResourceInput>,
  output: __S(140, __c17, 4) as any as S.Schema<DescribeStackResourceOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeStackResource",
}));

export type DescribeStackResourceDriftsError = CommonErrors;
/**
 * Returns drift information for the resources that have been checked for drift in the
 * specified stack. This includes actual and expected configuration values for resources where
 * CloudFormation detects configuration drift.
 *
 * For a given stack, there will be one `StackResourceDrift` for each stack
 * resource that has been checked for drift. Resources that haven't yet been checked for drift
 * aren't included. Resources that don't currently support drift detection aren't checked, and so
 * not included. For a list of resources that support drift detection, see Resource
 * type support for imports and drift detection.
 *
 * Use DetectStackResourceDrift to detect drift on individual resources, or
 * DetectStackDrift to detect drift on all supported resources for a given
 * stack.
 */
export const describeStackResourceDrifts: API.PaginatedOperationMethod<
  DescribeStackResourceDriftsInput,
  DescribeStackResourceDriftsOutput,
  DescribeStackResourceDriftsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(142, __c17, 6) as any as S.Schema<DescribeStackResourceDriftsInput>,
  output: __S(149, __c18, 5) as any as S.Schema<DescribeStackResourceDriftsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeStackResourceDrifts",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeStackResourcesError = CommonErrors;
/**
 * Returns Amazon Web Services resource descriptions for running and deleted stacks. If
 * `StackName` is specified, all the associated resources that are part of the stack
 * are returned. If `PhysicalResourceId` is specified, the associated resources of the
 * stack that the resource belongs to are returned.
 *
 * Only the first 100 resources will be returned. If your stack has more resources than
 * this, you should use `ListStackResources` instead.
 *
 * For deleted stacks, `DescribeStackResources` returns resource information for
 * up to 90 days after the stack has been deleted.
 *
 * You must specify either `StackName` or `PhysicalResourceId`, but not
 * both. In addition, you can specify `LogicalResourceId` to filter the returned
 * result. For more information about resources, the `LogicalResourceId` and
 * `PhysicalResourceId`, see the CloudFormation User Guide.
 *
 * A `ValidationError` is returned if you specify both `StackName`
 * and `PhysicalResourceId` in the same request.
 */
export const describeStackResources: API.OperationMethod<
  DescribeStackResourcesInput,
  DescribeStackResourcesOutput,
  DescribeStackResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(150, __c18, 6) as any as S.Schema<DescribeStackResourcesInput>,
  output: __S(153, __c19, 1) as any as S.Schema<DescribeStackResourcesOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeStackResources",
}));

export type DescribeStacksError = StackNotFound | CommonErrors;
/**
 * Returns the description for the specified stack; if no stack name was specified, then it
 * returns the description for all the stacks created. For more information about a stack's event
 * history, see Understand CloudFormation stack creation events in the
 * *CloudFormation User Guide*.
 *
 * If the stack doesn't exist, a `ValidationError` is returned.
 */
export const describeStacks: API.PaginatedOperationMethod<
  DescribeStacksInput,
  DescribeStacksOutput,
  DescribeStacksError,
  Credentials | HttpClient.HttpClient,
  Stack
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(154, __c19, 2) as any as S.Schema<DescribeStacksInput>,
  output: __S(162, __c20, 2) as any as S.Schema<DescribeStacksOutput>,
  errors: [StackNotFound],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeStacks",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", items: "Stacks" } as const,
})) as any;

export type DescribeStackSetError = StackSetNotFoundException | CommonErrors;
/**
 * Returns the description of the specified StackSet.
 *
 * This API provides *strongly consistent* reads meaning it will always
 * return the most up-to-date data.
 */
export const describeStackSet: API.OperationMethod<
  DescribeStackSetInput,
  DescribeStackSetOutput,
  DescribeStackSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(163, __c20, 3) as any as S.Schema<DescribeStackSetInput>,
  output: __S(166, __c20, 6) as any as S.Schema<DescribeStackSetOutput>,
  errors: [StackSetNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeStackSet",
}));

export type DescribeStackSetOperationError =
  | OperationNotFoundException
  | StackSetNotFoundException
  | CommonErrors;
/**
 * Returns the description of the specified StackSet operation.
 *
 * This API provides *strongly consistent* reads meaning it will always
 * return the most up-to-date data.
 */
export const describeStackSetOperation: API.OperationMethod<
  DescribeStackSetOperationInput,
  DescribeStackSetOperationOutput,
  DescribeStackSetOperationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(167, __c20, 7) as any as S.Schema<DescribeStackSetOperationInput>,
  output: __S(170, __c21, 2) as any as S.Schema<DescribeStackSetOperationOutput>,
  errors: [OperationNotFoundException, StackSetNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeStackSetOperation",
}));

export type DescribeTypeError = CFNRegistryException | TypeNotFoundException | CommonErrors;
/**
 * Returns detailed information about an extension from the CloudFormation registry in your
 * current account and Region.
 *
 * If you specify a `VersionId`, `DescribeType` returns information
 * about that specific extension version. Otherwise, it returns information about the default
 * extension version.
 *
 * For more information, see Edit configuration
 * data for extensions in your account in the
 * *CloudFormation User Guide*.
 */
export const describeType: API.OperationMethod<
  DescribeTypeInput,
  DescribeTypeOutput,
  DescribeTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(171, __c21, 3) as any as S.Schema<DescribeTypeInput>,
  output: __S(175, __c21, 7) as any as S.Schema<DescribeTypeOutput>,
  errors: [CFNRegistryException, TypeNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeType",
}));

export type DescribeTypeRegistrationError = CFNRegistryException | CommonErrors;
/**
 * Returns information about an extension's registration, including its current status and
 * type and version identifiers.
 *
 * When you initiate a registration request using RegisterType, you can
 * then use DescribeTypeRegistration to monitor the progress of that
 * registration request.
 *
 * Once the registration request has completed, use DescribeType to return
 * detailed information about an extension.
 */
export const describeTypeRegistration: API.OperationMethod<
  DescribeTypeRegistrationInput,
  DescribeTypeRegistrationOutput,
  DescribeTypeRegistrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(176, __c22, 0) as any as S.Schema<DescribeTypeRegistrationInput>,
  output: __S(177, __c22, 1) as any as S.Schema<DescribeTypeRegistrationOutput>,
  errors: [CFNRegistryException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTypeRegistration",
}));

export type DetectStackDriftError = CommonErrors;
/**
 * Detects whether a stack's actual configuration differs, or has
 * *drifted*, from its expected configuration, as defined in the stack
 * template and any values specified as template parameters. For each resource in the stack that
 * supports drift detection, CloudFormation compares the actual configuration of the resource with
 * its expected template configuration. Only resource properties explicitly defined in the stack
 * template are checked for drift. A stack is considered to have drifted if one or more of its
 * resources differ from their expected template configurations. For more information, see Detect unmanaged configuration changes to stacks and resources with drift
 * detection.
 *
 * Use `DetectStackDrift` to detect drift on all supported resources for a given
 * stack, or DetectStackResourceDrift to detect drift on individual
 * resources.
 *
 * For a list of stack resources that currently support drift detection, see Resource
 * type support for imports and drift detection.
 *
 * `DetectStackDrift` can take up to several minutes, depending on the number of
 * resources contained within the stack. Use DescribeStackDriftDetectionStatus
 * to monitor the progress of a detect stack drift operation. Once the drift detection operation
 * has completed, use DescribeStackResourceDrifts to return drift information
 * about the stack and its resources.
 *
 * When detecting drift on a stack, CloudFormation doesn't detect drift on any nested stacks
 * belonging to that stack. Perform `DetectStackDrift` directly on the nested stack
 * itself.
 */
export const detectStackDrift: API.OperationMethod<
  DetectStackDriftInput,
  DetectStackDriftOutput,
  DetectStackDriftError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(179, __c22, 3) as any as S.Schema<DetectStackDriftInput>,
  output: __S(180, __c22, 4) as any as S.Schema<DetectStackDriftOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetectStackDrift",
}));

export type DetectStackResourceDriftError = CommonErrors;
/**
 * Returns information about whether a resource's actual configuration differs, or has
 * *drifted*, from its expected configuration, as defined in the stack
 * template and any values specified as template parameters. This information includes actual and
 * expected property values for resources in which CloudFormation detects drift. Only resource
 * properties explicitly defined in the stack template are checked for drift. For more
 * information about stack and resource drift, see Detect unmanaged
 * configuration changes to stacks and resources with drift detection.
 *
 * Use `DetectStackResourceDrift` to detect drift on individual resources, or
 * DetectStackDrift to detect drift on all resources in a given stack that
 * support drift detection.
 *
 * Resources that don't currently support drift detection can't be checked. For a list of
 * resources that support drift detection, see Resource
 * type support for imports and drift detection.
 */
export const detectStackResourceDrift: API.OperationMethod<
  DetectStackResourceDriftInput,
  DetectStackResourceDriftOutput,
  DetectStackResourceDriftError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(181, __c22, 5) as any as S.Schema<DetectStackResourceDriftInput>,
  output: __S(182, __c22, 6) as any as S.Schema<DetectStackResourceDriftOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetectStackResourceDrift",
}));

export type DetectStackSetDriftError =
  | InvalidOperationException
  | OperationInProgressException
  | StackSetNotFoundException
  | CommonErrors;
/**
 * Detect drift on a StackSet. When CloudFormation performs drift detection on a StackSet, it
 * performs drift detection on the stack associated with each stack instance in the StackSet. For
 * more information, see Performing drift detection on
 * CloudFormation StackSets.
 *
 * `DetectStackSetDrift` returns the `OperationId` of the StackSet
 * drift detection operation. Use this operation id with DescribeStackSetOperation to monitor the progress of the drift detection
 * operation. The drift detection operation may take some time, depending on the number of stack
 * instances included in the StackSet, in addition to the number of resources included in each
 * stack.
 *
 * Once the operation has completed, use the following actions to return drift
 * information:
 *
 * - Use DescribeStackSet to return detailed information about the stack
 * set, including detailed information about the last *completed* drift
 * operation performed on the StackSet. (Information about drift operations that are in
 * progress isn't included.)
 *
 * - Use ListStackInstances to return a list of stack instances belonging
 * to the StackSet, including the drift status and last drift time checked of each
 * instance.
 *
 * - Use DescribeStackInstance to return detailed information about a
 * specific stack instance, including its drift status and last drift time checked.
 *
 * You can only run a single drift detection operation on a given StackSet at one
 * time.
 *
 * To stop a drift detection StackSet operation, use StopStackSetOperation.
 */
export const detectStackSetDrift: API.OperationMethod<
  DetectStackSetDriftInput,
  DetectStackSetDriftOutput,
  DetectStackSetDriftError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(183, __c22, 7) as any as S.Schema<DetectStackSetDriftInput>,
  output: __S(184, __c23, 0) as any as S.Schema<DetectStackSetDriftOutput>,
  errors: [InvalidOperationException, OperationInProgressException, StackSetNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetectStackSetDrift",
}));

export type EstimateTemplateCostError = CommonErrors;
/**
 * Returns the estimated monthly cost of a template. The return value is an Amazon Web Services Simple
 * Monthly Calculator URL with a query string that describes the resources required to run the
 * template.
 */
export const estimateTemplateCost: API.OperationMethod<
  EstimateTemplateCostInput,
  EstimateTemplateCostOutput,
  EstimateTemplateCostError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(185, __c23, 1) as any as S.Schema<EstimateTemplateCostInput>,
  output: __S(186, __c23, 2) as any as S.Schema<EstimateTemplateCostOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EstimateTemplateCost",
}));

export type ExecuteChangeSetError =
  | ChangeSetNotFoundException
  | InsufficientCapabilitiesException
  | InvalidChangeSetStatusException
  | TokenAlreadyExistsException
  | CommonErrors;
/**
 * Updates a stack using the input information that was provided when the specified change
 * set was created. After the call successfully completes, CloudFormation starts updating the stack.
 * Use the DescribeStacks action to view the status of the update.
 *
 * When you execute a change set, CloudFormation deletes all other change sets associated with
 * the stack because they aren't valid for the updated stack.
 *
 * If a stack policy is associated with the stack, CloudFormation enforces the policy during the
 * update. You can't specify a temporary stack policy that overrides the current policy.
 *
 * To create a change set for the entire stack hierarchy, `IncludeNestedStacks`
 * must have been set to `True`.
 */
export const executeChangeSet: API.OperationMethod<
  ExecuteChangeSetInput,
  ExecuteChangeSetOutput,
  ExecuteChangeSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(187, __c23, 3) as any as S.Schema<ExecuteChangeSetInput>,
  output: __S(188, __c23, 4) as any as S.Schema<ExecuteChangeSetOutput>,
  errors: [
    ChangeSetNotFoundException,
    InsufficientCapabilitiesException,
    InvalidChangeSetStatusException,
    TokenAlreadyExistsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ExecuteChangeSet",
}));

export type ExecuteStackRefactorError = CommonErrors;
/**
 * Executes the stack refactor operation.
 */
export const executeStackRefactor: API.OperationMethod<
  ExecuteStackRefactorInput,
  ExecuteStackRefactorResponse,
  ExecuteStackRefactorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(189, __c23, 5) as any as S.Schema<ExecuteStackRefactorInput>,
  output: __S(190, __c23, 6) as any as S.Schema<ExecuteStackRefactorResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ExecuteStackRefactor",
}));

export type GetGeneratedTemplateError = GeneratedTemplateNotFoundException | CommonErrors;
/**
 * Retrieves a generated template. If the template is in an `InProgress` or
 * `Pending` status then the template returned will be the template when the
 * template was last in a `Complete` status. If the template has not yet been in a
 * `Complete` status then an empty template will be returned.
 */
export const getGeneratedTemplate: API.OperationMethod<
  GetGeneratedTemplateInput,
  GetGeneratedTemplateOutput,
  GetGeneratedTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(191, __c23, 7) as any as S.Schema<GetGeneratedTemplateInput>,
  output: __S(192, __c24, 0) as any as S.Schema<GetGeneratedTemplateOutput>,
  errors: [GeneratedTemplateNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetGeneratedTemplate",
}));

export type GetHookResultError = HookResultNotFoundException | CommonErrors;
/**
 * Retrieves detailed information and remediation guidance for a Hook invocation
 * result.
 *
 * If the Hook uses a KMS key to encrypt annotations, callers of the
 * `GetHookResult` operation must have `kms:Decrypt` permissions. For
 * more information, see KMS key policy
 * and permissions for encrypting CloudFormation Hooks results at rest in the
 * *CloudFormation Hooks User Guide*.
 */
export const getHookResult: API.OperationMethod<
  GetHookResultInput,
  GetHookResultOutput,
  GetHookResultError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(193, __c24, 1) as any as S.Schema<GetHookResultInput>,
  output: __S(197, __c24, 5) as any as S.Schema<GetHookResultOutput>,
  errors: [HookResultNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetHookResult",
}));

export type GetStackPolicyError = CommonErrors;
/**
 * Returns the stack policy for a specified stack. If a stack doesn't have a policy, a null
 * value is returned.
 */
export const getStackPolicy: API.OperationMethod<
  GetStackPolicyInput,
  GetStackPolicyOutput,
  GetStackPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(198, __c24, 6) as any as S.Schema<GetStackPolicyInput>,
  output: __S(199, __c24, 7) as any as S.Schema<GetStackPolicyOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetStackPolicy",
}));

export type GetTemplateError = ChangeSetNotFoundException | CommonErrors;
/**
 * Returns the template body for a specified stack. You can get the template for running or
 * deleted stacks.
 *
 * For deleted stacks, `GetTemplate` returns the template for up to 90 days after
 * the stack has been deleted.
 *
 * If the template doesn't exist, a `ValidationError` is returned.
 */
export const getTemplate: API.OperationMethod<
  GetTemplateInput,
  GetTemplateOutput,
  GetTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(200, __c25, 0) as any as S.Schema<GetTemplateInput>,
  output: __S(202, __c25, 2) as any as S.Schema<GetTemplateOutput>,
  errors: [ChangeSetNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTemplate",
}));

export type GetTemplateSummaryError = StackSetNotFoundException | CommonErrors;
/**
 * Returns information about a new or existing template. The `GetTemplateSummary`
 * action is useful for viewing parameter information, such as default parameter values and
 * parameter types, before you create or update a stack or StackSet.
 *
 * You can use the `GetTemplateSummary` action when you submit a template, or you
 * can get template information for a StackSet, or a running or deleted stack.
 *
 * For deleted stacks, `GetTemplateSummary` returns the template information for
 * up to 90 days after the stack has been deleted. If the template doesn't exist, a
 * `ValidationError` is returned.
 */
export const getTemplateSummary: API.OperationMethod<
  GetTemplateSummaryInput,
  GetTemplateSummaryOutput,
  GetTemplateSummaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(204, __c25, 4) as any as S.Schema<GetTemplateSummaryInput>,
  output: __S(214, __c26, 6) as any as S.Schema<GetTemplateSummaryOutput>,
  errors: [StackSetNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTemplateSummary",
}));

export type ImportStacksToStackSetError =
  | InvalidOperationException
  | LimitExceededException
  | OperationIdAlreadyExistsException
  | OperationInProgressException
  | StackNotFoundException
  | StackSetNotFoundException
  | StaleRequestException
  | CommonErrors;
/**
 * Import existing stacks into a new StackSets. Use the stack import operation to import up
 * to 10 stacks into a new StackSet in the same account as the source stack or in a different
 * administrator account and Region, by specifying the stack ID of the stack you intend to
 * import.
 */
export const importStacksToStackSet: API.OperationMethod<
  ImportStacksToStackSetInput,
  ImportStacksToStackSetOutput,
  ImportStacksToStackSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(216, __c27, 0) as any as S.Schema<ImportStacksToStackSetInput>,
  output: __S(217, __c27, 1) as any as S.Schema<ImportStacksToStackSetOutput>,
  errors: [
    InvalidOperationException,
    LimitExceededException,
    OperationIdAlreadyExistsException,
    OperationInProgressException,
    StackNotFoundException,
    StackSetNotFoundException,
    StaleRequestException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ImportStacksToStackSet",
}));

export type ListChangeSetsError = CommonErrors;
/**
 * Returns the ID and status of each active change set for a stack. For example, CloudFormation
 * lists change sets that are in the `CREATE_IN_PROGRESS` or
 * `CREATE_PENDING` state.
 */
export const listChangeSets: API.PaginatedOperationMethod<
  ListChangeSetsInput,
  ListChangeSetsOutput,
  ListChangeSetsError,
  Credentials | HttpClient.HttpClient,
  ChangeSetSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(218, __c27, 2) as any as S.Schema<ListChangeSetsInput>,
  output: __S(221, __c27, 5) as any as S.Schema<ListChangeSetsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListChangeSets",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", items: "Summaries" } as const,
})) as any;

export type ListExportsError = CommonErrors;
/**
 * Lists all exported output values in the account and Region in which you call this action.
 * Use this action to see the exported output values that you can import into other stacks. To
 * import values, use the Fn::ImportValue function.
 *
 * For more information, see Get exported outputs
 * from a deployed CloudFormation stack.
 */
export const listExports: API.PaginatedOperationMethod<
  ListExportsInput,
  ListExportsOutput,
  ListExportsError,
  Credentials | HttpClient.HttpClient,
  Export
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(222, __c27, 6) as any as S.Schema<ListExportsInput>,
  output: __S(225, __c28, 1) as any as S.Schema<ListExportsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListExports",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", items: "Exports" } as const,
})) as any;

export type ListGeneratedTemplatesError = CommonErrors;
/**
 * Lists your generated templates in this Region.
 */
export const listGeneratedTemplates: API.PaginatedOperationMethod<
  ListGeneratedTemplatesInput,
  ListGeneratedTemplatesOutput,
  ListGeneratedTemplatesError,
  Credentials | HttpClient.HttpClient,
  TemplateSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(226, __c28, 2) as any as S.Schema<ListGeneratedTemplatesInput>,
  output: __S(229, __c28, 5) as any as S.Schema<ListGeneratedTemplatesOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListGeneratedTemplates",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Summaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListHookResultsError = HookResultNotFoundException | CommonErrors;
/**
 * Returns summaries of invoked Hooks. For more information, see View invocation
 * summaries for CloudFormation Hooks in the *CloudFormation Hooks User Guide*.
 *
 * This operation supports the following parameter combinations:
 *
 * - No parameters: Returns all Hook invocation summaries.
 *
 * - `TypeArn` only: Returns summaries for a specific Hook.
 *
 * - `TypeArn` and `Status`: Returns summaries for a specific Hook
 * filtered by status.
 *
 * - `TargetId` and `TargetType`: Returns summaries for a specific
 * Hook invocation target.
 */
export const listHookResults: API.OperationMethod<
  ListHookResultsInput,
  ListHookResultsOutput,
  ListHookResultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(230, __c28, 6) as any as S.Schema<ListHookResultsInput>,
  output: __S(233, __c29, 1) as any as S.Schema<ListHookResultsOutput>,
  errors: [HookResultNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListHookResults",
}));

export type ListImportsError = CommonErrors;
/**
 * Lists all stacks that are importing an exported output value. To modify or remove an
 * exported output value, first use this action to see which stacks are using it. To see the
 * exported output values in your account, see ListExports.
 *
 * For more information about importing an exported output value, see the Fn::ImportValue function.
 */
export const listImports: API.PaginatedOperationMethod<
  ListImportsInput,
  ListImportsOutput,
  ListImportsError,
  Credentials | HttpClient.HttpClient,
  StackName
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(234, __c29, 2) as any as S.Schema<ListImportsInput>,
  output: __S(236, __c29, 4) as any as S.Schema<ListImportsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListImports",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", items: "Imports" } as const,
})) as any;

export type ListResourceScanRelatedResourcesError =
  | ResourceScanInProgressException
  | ResourceScanNotFoundException
  | CommonErrors;
/**
 * Lists the related resources for a list of resources from a resource scan. The response
 * indicates whether each returned resource is already managed by CloudFormation.
 */
export const listResourceScanRelatedResources: API.PaginatedOperationMethod<
  ListResourceScanRelatedResourcesInput,
  ListResourceScanRelatedResourcesOutput,
  ListResourceScanRelatedResourcesError,
  Credentials | HttpClient.HttpClient,
  ScannedResource
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(240, __c30, 0) as any as S.Schema<ListResourceScanRelatedResourcesInput>,
  output: __S(243, __c30, 3) as any as S.Schema<ListResourceScanRelatedResourcesOutput>,
  errors: [ResourceScanInProgressException, ResourceScanNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResourceScanRelatedResources",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RelatedResources",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListResourceScanResourcesError =
  | ResourceScanInProgressException
  | ResourceScanNotFoundException
  | CommonErrors;
/**
 * Lists the resources from a resource scan. The results can be filtered by resource
 * identifier, resource type prefix, tag key, and tag value. Only resources that match all
 * specified filters are returned. The response indicates whether each returned resource is
 * already managed by CloudFormation.
 */
export const listResourceScanResources: API.PaginatedOperationMethod<
  ListResourceScanResourcesInput,
  ListResourceScanResourcesOutput,
  ListResourceScanResourcesError,
  Credentials | HttpClient.HttpClient,
  ScannedResource
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(244, __c30, 4) as any as S.Schema<ListResourceScanResourcesInput>,
  output: __S(246, __c30, 6) as any as S.Schema<ListResourceScanResourcesOutput>,
  errors: [ResourceScanInProgressException, ResourceScanNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResourceScanResources",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Resources",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListResourceScansError = CommonErrors;
/**
 * List the resource scans from newest to oldest. By default it will return up to 10 resource
 * scans.
 */
export const listResourceScans: API.PaginatedOperationMethod<
  ListResourceScansInput,
  ListResourceScansOutput,
  ListResourceScansError,
  Credentials | HttpClient.HttpClient,
  ResourceScanSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(247, __c30, 7) as any as S.Schema<ListResourceScansInput>,
  output: __S(250, __c31, 2) as any as S.Schema<ListResourceScansOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResourceScans",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ResourceScanSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListStackInstanceResourceDriftsError =
  | OperationNotFoundException
  | StackInstanceNotFoundException
  | StackSetNotFoundException
  | CommonErrors;
/**
 * Returns drift information for resources in a stack instance.
 *
 * `ListStackInstanceResourceDrifts` returns drift information for the most
 * recent drift detection operation. If an operation is in progress, it may only return partial
 * results.
 */
export const listStackInstanceResourceDrifts: API.OperationMethod<
  ListStackInstanceResourceDriftsInput,
  ListStackInstanceResourceDriftsOutput,
  ListStackInstanceResourceDriftsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(251, __c31, 3) as any as S.Schema<ListStackInstanceResourceDriftsInput>,
  output: __S(254, __c31, 6) as any as S.Schema<ListStackInstanceResourceDriftsOutput>,
  errors: [OperationNotFoundException, StackInstanceNotFoundException, StackSetNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListStackInstanceResourceDrifts",
}));

export type ListStackInstancesError = StackSetNotFoundException | CommonErrors;
/**
 * Returns summary information about stack instances that are associated with the specified
 * StackSet. You can filter for stack instances that are associated with a specific Amazon Web Services account
 * name or Region, or that have a specific status.
 */
export const listStackInstances: API.PaginatedOperationMethod<
  ListStackInstancesInput,
  ListStackInstancesOutput,
  ListStackInstancesError,
  Credentials | HttpClient.HttpClient,
  StackInstanceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(257, __c32, 1) as any as S.Schema<ListStackInstancesInput>,
  output: __S(260, __c32, 4) as any as S.Schema<ListStackInstancesOutput>,
  errors: [StackSetNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListStackInstances",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Summaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListStackRefactorActionsError = CommonErrors;
/**
 * Lists the stack refactor actions that will be taken after calling the ExecuteStackRefactor action.
 */
export const listStackRefactorActions: API.PaginatedOperationMethod<
  ListStackRefactorActionsInput,
  ListStackRefactorActionsOutput,
  ListStackRefactorActionsError,
  Credentials | HttpClient.HttpClient,
  StackRefactorAction
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(261, __c32, 5) as any as S.Schema<ListStackRefactorActionsInput>,
  output: __S(266, __c33, 2) as any as S.Schema<ListStackRefactorActionsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListStackRefactorActions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "StackRefactorActions",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListStackRefactorsError = CommonErrors;
/**
 * Lists all account stack refactor operations and their statuses.
 */
export const listStackRefactors: API.PaginatedOperationMethod<
  ListStackRefactorsInput,
  ListStackRefactorsOutput,
  ListStackRefactorsError,
  Credentials | HttpClient.HttpClient,
  StackRefactorSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(268, __c33, 4) as any as S.Schema<ListStackRefactorsInput>,
  output: __S(271, __c33, 7) as any as S.Schema<ListStackRefactorsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListStackRefactors",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "StackRefactorSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListStackResourcesError = CommonErrors;
/**
 * Returns descriptions of all resources of the specified stack.
 *
 * For deleted stacks, ListStackResources returns resource information for up to 90 days
 * after the stack has been deleted.
 */
export const listStackResources: API.PaginatedOperationMethod<
  ListStackResourcesInput,
  ListStackResourcesOutput,
  ListStackResourcesError,
  Credentials | HttpClient.HttpClient,
  StackResourceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(272, __c34, 0) as any as S.Schema<ListStackResourcesInput>,
  output: __S(276, __c34, 4) as any as S.Schema<ListStackResourcesOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListStackResources",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "StackResourceSummaries",
  } as const,
})) as any;

export type ListStacksError = CommonErrors;
/**
 * Returns the summary information for stacks whose status matches the specified
 * `StackStatusFilter`. Summary information for stacks that have been deleted is
 * kept for 90 days after the stack is deleted. If no `StackStatusFilter` is
 * specified, summary information for all stacks is returned (including existing stacks and
 * stacks that have been deleted).
 */
export const listStacks: API.PaginatedOperationMethod<
  ListStacksInput,
  ListStacksOutput,
  ListStacksError,
  Credentials | HttpClient.HttpClient,
  StackSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(278, __c34, 6) as any as S.Schema<ListStacksInput>,
  output: __S(282, __c35, 2) as any as S.Schema<ListStacksOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListStacks",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "StackSummaries",
  } as const,
})) as any;

export type ListStackSetAutoDeploymentTargetsError = StackSetNotFoundException | CommonErrors;
/**
 * Returns summary information about deployment targets for a StackSet.
 */
export const listStackSetAutoDeploymentTargets: API.OperationMethod<
  ListStackSetAutoDeploymentTargetsInput,
  ListStackSetAutoDeploymentTargetsOutput,
  ListStackSetAutoDeploymentTargetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(283, __c35, 3) as any as S.Schema<ListStackSetAutoDeploymentTargetsInput>,
  output: __S(286, __c35, 6) as any as S.Schema<ListStackSetAutoDeploymentTargetsOutput>,
  errors: [StackSetNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListStackSetAutoDeploymentTargets",
}));

export type ListStackSetOperationResultsError =
  | OperationNotFoundException
  | StackSetNotFoundException
  | CommonErrors;
/**
 * Returns summary information about the results of a StackSet operation.
 *
 * This API provides *eventually consistent* reads meaning it may take
 * some time but will eventually return the most up-to-date data.
 */
export const listStackSetOperationResults: API.PaginatedOperationMethod<
  ListStackSetOperationResultsInput,
  ListStackSetOperationResultsOutput,
  ListStackSetOperationResultsError,
  Credentials | HttpClient.HttpClient,
  StackSetOperationResultSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(289, __c36, 1) as any as S.Schema<ListStackSetOperationResultsInput>,
  output: __S(293, __c36, 5) as any as S.Schema<ListStackSetOperationResultsOutput>,
  errors: [OperationNotFoundException, StackSetNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListStackSetOperationResults",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Summaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListStackSetOperationsError = StackSetNotFoundException | CommonErrors;
/**
 * Returns summary information about operations performed on a StackSet.
 *
 * This API provides *eventually consistent* reads meaning it may take
 * some time but will eventually return the most up-to-date data.
 */
export const listStackSetOperations: API.PaginatedOperationMethod<
  ListStackSetOperationsInput,
  ListStackSetOperationsOutput,
  ListStackSetOperationsError,
  Credentials | HttpClient.HttpClient,
  StackSetOperationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(294, __c36, 6) as any as S.Schema<ListStackSetOperationsInput>,
  output: __S(297, __c37, 1) as any as S.Schema<ListStackSetOperationsOutput>,
  errors: [StackSetNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListStackSetOperations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Summaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListStackSetsError = CommonErrors;
/**
 * Returns summary information about StackSets that are associated with the user.
 *
 * This API provides *strongly consistent* reads meaning it will always
 * return the most up-to-date data.
 *
 * - [Self-managed permissions] If you set the `CallAs` parameter to
 * `SELF` while signed in to your Amazon Web Services account, `ListStackSets`
 * returns all self-managed StackSets in your Amazon Web Services account.
 *
 * - [Service-managed permissions] If you set the `CallAs` parameter to
 * `SELF` while signed in to the organization's management account,
 * `ListStackSets` returns all StackSets in the management account.
 *
 * - [Service-managed permissions] If you set the `CallAs` parameter to
 * `DELEGATED_ADMIN` while signed in to your member account,
 * `ListStackSets` returns all StackSets with service-managed permissions in the
 * management account.
 */
export const listStackSets: API.PaginatedOperationMethod<
  ListStackSetsInput,
  ListStackSetsOutput,
  ListStackSetsError,
  Credentials | HttpClient.HttpClient,
  StackSetSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(298, __c37, 2) as any as S.Schema<ListStackSetsInput>,
  output: __S(301, __c37, 5) as any as S.Schema<ListStackSetsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListStackSets",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Summaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTypeRegistrationsError = CFNRegistryException | CommonErrors;
/**
 * Returns a list of registration tokens for the specified extension(s).
 */
export const listTypeRegistrations: API.PaginatedOperationMethod<
  ListTypeRegistrationsInput,
  ListTypeRegistrationsOutput,
  ListTypeRegistrationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(302, __c37, 6) as any as S.Schema<ListTypeRegistrationsInput>,
  output: __S(304, __c38, 0) as any as S.Schema<ListTypeRegistrationsOutput>,
  errors: [CFNRegistryException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTypeRegistrations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTypesError = CFNRegistryException | CommonErrors;
/**
 * Returns summary information about all extensions, including your private resource types,
 * modules, and Hooks as well as all public extensions from Amazon Web Services and third-party
 * publishers.
 */
export const listTypes: API.PaginatedOperationMethod<
  ListTypesInput,
  ListTypesOutput,
  ListTypesError,
  Credentials | HttpClient.HttpClient,
  TypeSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(306, __c38, 2) as any as S.Schema<ListTypesInput>,
  output: __S(309, __c38, 5) as any as S.Schema<ListTypesOutput>,
  errors: [CFNRegistryException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTypes",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "TypeSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTypeVersionsError = CFNRegistryException | CommonErrors;
/**
 * Returns summary information about the versions of an extension.
 */
export const listTypeVersions: API.PaginatedOperationMethod<
  ListTypeVersionsInput,
  ListTypeVersionsOutput,
  ListTypeVersionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(310, __c38, 6) as any as S.Schema<ListTypeVersionsInput>,
  output: __S(313, __c39, 1) as any as S.Schema<ListTypeVersionsOutput>,
  errors: [CFNRegistryException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTypeVersions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type PublishTypeError = CFNRegistryException | TypeNotFoundException | CommonErrors;
/**
 * Publishes the specified extension to the CloudFormation registry as a public extension in this
 * Region. Public extensions are available for use by all CloudFormation users. For more information
 * about publishing extensions, see Publishing extensions to
 * make them available for public use in the
 * *CloudFormation Command Line Interface (CLI) User Guide*.
 *
 * To publish an extension, you must be registered as a publisher with CloudFormation. For more
 * information, see RegisterPublisher.
 */
export const publishType: API.OperationMethod<
  PublishTypeInput,
  PublishTypeOutput,
  PublishTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(314, __c39, 2) as any as S.Schema<PublishTypeInput>,
  output: __S(315, __c39, 3) as any as S.Schema<PublishTypeOutput>,
  errors: [CFNRegistryException, TypeNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PublishType",
}));

export type RecordHandlerProgressError =
  | InvalidStateTransitionException
  | OperationStatusCheckFailedException
  | CommonErrors;
/**
 * Reports progress of a resource handler to CloudFormation.
 *
 * Reserved for use by the CloudFormation
 * CLI. Don't use this API in your code.
 */
export const recordHandlerProgress: API.OperationMethod<
  RecordHandlerProgressInput,
  RecordHandlerProgressOutput,
  RecordHandlerProgressError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(316, __c39, 4) as any as S.Schema<RecordHandlerProgressInput>,
  output: __S(317, __c39, 5) as any as S.Schema<RecordHandlerProgressOutput>,
  errors: [InvalidStateTransitionException, OperationStatusCheckFailedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RecordHandlerProgress",
}));

export type RegisterPublisherError = CFNRegistryException | CommonErrors;
/**
 * Registers your account as a publisher of public extensions in the CloudFormation registry.
 * Public extensions are available for use by all CloudFormation users. This publisher ID applies to
 * your account in all Amazon Web Services Regions.
 *
 * For information about requirements for registering as a public extension publisher, see
 * Prerequisite: Registering your account to publish CloudFormation extensions in the
 * *CloudFormation Command Line Interface (CLI) User Guide*.
 */
export const registerPublisher: API.OperationMethod<
  RegisterPublisherInput,
  RegisterPublisherOutput,
  RegisterPublisherError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(318, __c39, 6) as any as S.Schema<RegisterPublisherInput>,
  output: __S(319, __c39, 7) as any as S.Schema<RegisterPublisherOutput>,
  errors: [CFNRegistryException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterPublisher",
}));

export type RegisterTypeError = CFNRegistryException | CommonErrors;
/**
 * Registers an extension with the CloudFormation service. Registering an extension makes it
 * available for use in CloudFormation templates in your Amazon Web Services account, and includes:
 *
 * - Validating the extension schema.
 *
 * - Determining which handlers, if any, have been specified for the extension.
 *
 * - Making the extension available for use in your account.
 *
 * For more information about how to develop extensions and ready them for registration, see
 * Creating resource types using the CloudFormation CLI in the
 * *CloudFormation Command Line Interface (CLI) User Guide*.
 *
 * You can have a maximum of 50 resource extension versions registered at a time. This
 * maximum is per account and per Region. Use DeregisterType
 * to deregister specific extension versions if necessary.
 *
 * Once you have initiated a registration request using RegisterType, you
 * can use DescribeTypeRegistration to monitor the progress of the registration
 * request.
 *
 * Once you have registered a private extension in your account and Region, use SetTypeConfiguration to specify configuration properties for the extension. For
 * more information, see Edit configuration
 * data for extensions in your account in the
 * *CloudFormation User Guide*.
 */
export const registerType: API.OperationMethod<
  RegisterTypeInput,
  RegisterTypeOutput,
  RegisterTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(320, __c40, 0) as any as S.Schema<RegisterTypeInput>,
  output: __S(321, __c40, 1) as any as S.Schema<RegisterTypeOutput>,
  errors: [CFNRegistryException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterType",
}));

export type RollbackStackError = TokenAlreadyExistsException | CommonErrors;
/**
 * When specifying `RollbackStack`, you preserve the state of previously
 * provisioned resources when an operation fails. You can check the status of the stack through
 * the DescribeStacks operation.
 *
 * Rolls back the specified stack to the last known stable state from
 * `CREATE_FAILED` or `UPDATE_FAILED` stack statuses.
 *
 * This operation will delete a stack if it doesn't contain a last known stable state. A last
 * known stable state includes any status in a `*_COMPLETE`. This includes the
 * following stack statuses.
 *
 * - `CREATE_COMPLETE`
 *
 * - `UPDATE_COMPLETE`
 *
 * - `UPDATE_ROLLBACK_COMPLETE`
 *
 * - `IMPORT_COMPLETE`
 *
 * - `IMPORT_ROLLBACK_COMPLETE`
 */
export const rollbackStack: API.OperationMethod<
  RollbackStackInput,
  RollbackStackOutput,
  RollbackStackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(322, __c40, 2) as any as S.Schema<RollbackStackInput>,
  output: __S(323, __c40, 3) as any as S.Schema<RollbackStackOutput>,
  errors: [TokenAlreadyExistsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RollbackStack",
}));

export type SetStackPolicyError = CommonErrors;
/**
 * Sets a stack policy for a specified stack.
 */
export const setStackPolicy: API.OperationMethod<
  SetStackPolicyInput,
  SetStackPolicyResponse,
  SetStackPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(324, __c40, 4) as any as S.Schema<SetStackPolicyInput>,
  output: __S(325, __c40, 5) as any as S.Schema<SetStackPolicyResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetStackPolicy",
}));

export type SetTypeConfigurationError = CFNRegistryException | TypeNotFoundException | CommonErrors;
/**
 * Specifies the configuration data for a CloudFormation extension, such as a resource or Hook,
 * in the given account and Region.
 *
 * For more information, see Edit configuration
 * data for extensions in your account in the
 * *CloudFormation User Guide*.
 *
 * To view the current configuration data for an extension, refer to the
 * `ConfigurationSchema` element of DescribeType.
 *
 * It's strongly recommended that you use dynamic references to restrict sensitive
 * configuration definitions, such as third-party credentials. For more information, see Specify values stored in other services using dynamic references in the
 * *CloudFormation User Guide*.
 *
 * For more information about setting the configuration data for resource types, see Defining the account-level configuration of an extension in the
 * *CloudFormation Command Line Interface (CLI) User Guide*. For more information about setting the configuration
 * data for Hooks, see the CloudFormation Hooks User Guide.
 */
export const setTypeConfiguration: API.OperationMethod<
  SetTypeConfigurationInput,
  SetTypeConfigurationOutput,
  SetTypeConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(326, __c40, 6) as any as S.Schema<SetTypeConfigurationInput>,
  output: __S(327, __c40, 7) as any as S.Schema<SetTypeConfigurationOutput>,
  errors: [CFNRegistryException, TypeNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetTypeConfiguration",
}));

export type SetTypeDefaultVersionError =
  | CFNRegistryException
  | TypeNotFoundException
  | CommonErrors;
/**
 * Specify the default version of an extension. The default version of an extension will be
 * used in CloudFormation operations.
 */
export const setTypeDefaultVersion: API.OperationMethod<
  SetTypeDefaultVersionInput,
  SetTypeDefaultVersionOutput,
  SetTypeDefaultVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(328, __c41, 0) as any as S.Schema<SetTypeDefaultVersionInput>,
  output: __S(329, __c41, 1) as any as S.Schema<SetTypeDefaultVersionOutput>,
  errors: [CFNRegistryException, TypeNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetTypeDefaultVersion",
}));

export type SignalResourceError = CommonErrors;
/**
 * Sends a signal to the specified resource with a success or failure status. You can use the
 * `SignalResource` operation in conjunction with a creation policy or update
 * policy. CloudFormation doesn't proceed with a stack creation or update until resources receive the
 * required number of signals or the timeout period is exceeded. The `SignalResource`
 * operation is useful in cases where you want to send signals from anywhere other than an Amazon EC2
 * instance.
 */
export const signalResource: API.OperationMethod<
  SignalResourceInput,
  SignalResourceResponse,
  SignalResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(330, __c41, 2) as any as S.Schema<SignalResourceInput>,
  output: __S(331, __c41, 3) as any as S.Schema<SignalResourceResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SignalResource",
}));

export type StartResourceScanError =
  | ResourceScanInProgressException
  | ResourceScanLimitExceededException
  | CommonErrors;
/**
 * Starts a scan of the resources in this account in this Region. You can the status of a
 * scan using the `ListResourceScans` API action.
 */
export const startResourceScan: API.OperationMethod<
  StartResourceScanInput,
  StartResourceScanOutput,
  StartResourceScanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(332, __c41, 4) as any as S.Schema<StartResourceScanInput>,
  output: __S(333, __c41, 5) as any as S.Schema<StartResourceScanOutput>,
  errors: [ResourceScanInProgressException, ResourceScanLimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartResourceScan",
}));

export type StopStackSetOperationError =
  | InvalidOperationException
  | OperationNotFoundException
  | StackSetNotFoundException
  | CommonErrors;
/**
 * Stops an in-progress operation on a StackSet and its associated stack instances. StackSets
 * will cancel all the unstarted stack instance deployments and wait for those are in-progress to
 * complete.
 */
export const stopStackSetOperation: API.OperationMethod<
  StopStackSetOperationInput,
  StopStackSetOperationOutput,
  StopStackSetOperationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(334, __c41, 6) as any as S.Schema<StopStackSetOperationInput>,
  output: __S(335, __c41, 7) as any as S.Schema<StopStackSetOperationOutput>,
  errors: [InvalidOperationException, OperationNotFoundException, StackSetNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopStackSetOperation",
}));

export type TestTypeError = CFNRegistryException | TypeNotFoundException | CommonErrors;
/**
 * Tests a registered extension to make sure it meets all necessary requirements for being
 * published in the CloudFormation registry.
 *
 * - For resource types, this includes passing all contracts tests defined for the
 * type.
 *
 * - For modules, this includes determining if the module's model meets all necessary
 * requirements.
 *
 * For more information, see Testing your public extension before publishing in the
 * *CloudFormation Command Line Interface (CLI) User Guide*.
 *
 * If you don't specify a version, CloudFormation uses the default version of the extension in
 * your account and Region for testing.
 *
 * To perform testing, CloudFormation assumes the execution role specified when the type was
 * registered. For more information, see RegisterType.
 *
 * Once you've initiated testing on an extension using `TestType`, you can pass
 * the returned `TypeVersionArn` into DescribeType to
 * monitor the current test status and test status description for the extension.
 *
 * An extension must have a test status of `PASSED` before it can be published.
 * For more information, see Publishing extensions
 * to make them available for public use in the
 * *CloudFormation Command Line Interface (CLI) User Guide*.
 */
export const testType: API.OperationMethod<
  TestTypeInput,
  TestTypeOutput,
  TestTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(336, __c42, 0) as any as S.Schema<TestTypeInput>,
  output: __S(337, __c42, 1) as any as S.Schema<TestTypeOutput>,
  errors: [CFNRegistryException, TypeNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TestType",
}));

export type UpdateGeneratedTemplateError =
  | AlreadyExistsException
  | GeneratedTemplateNotFoundException
  | LimitExceededException
  | CommonErrors;
/**
 * Updates a generated template. This can be used to change the name, add and remove
 * resources, refresh resources, and change the `DeletionPolicy` and
 * `UpdateReplacePolicy` settings. You can check the status of the update to the
 * generated template using the `DescribeGeneratedTemplate` API action.
 */
export const updateGeneratedTemplate: API.OperationMethod<
  UpdateGeneratedTemplateInput,
  UpdateGeneratedTemplateOutput,
  UpdateGeneratedTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(339, __c42, 3) as any as S.Schema<UpdateGeneratedTemplateInput>,
  output: __S(340, __c42, 4) as any as S.Schema<UpdateGeneratedTemplateOutput>,
  errors: [AlreadyExistsException, GeneratedTemplateNotFoundException, LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateGeneratedTemplate",
}));

export type UpdateStackError =
  | InsufficientCapabilitiesException
  | TokenAlreadyExistsException
  | NoUpdateToPerform
  | CommonErrors;
/**
 * Updates a stack as specified in the template. After the call completes successfully, the
 * stack update starts. You can check the status of the stack through the DescribeStacks action.
 *
 * To get a copy of the template for an existing stack, you can use the GetTemplate action.
 *
 * For more information about updating a stack and monitoring the progress of the update, see
 * Managing
 * Amazon Web Services resources as a single unit with CloudFormation stacks in the
 * *CloudFormation User Guide*.
 */
export const updateStack: API.OperationMethod<
  UpdateStackInput,
  UpdateStackOutput,
  UpdateStackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(341, __c42, 5) as any as S.Schema<UpdateStackInput>,
  output: __S(342, __c42, 6) as any as S.Schema<UpdateStackOutput>,
  errors: [InsufficientCapabilitiesException, TokenAlreadyExistsException, NoUpdateToPerform],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateStack",
}));

export type UpdateStackInstancesError =
  | InvalidOperationException
  | OperationIdAlreadyExistsException
  | OperationInProgressException
  | StackInstanceNotFoundException
  | StackSetNotFoundException
  | StaleRequestException
  | CommonErrors;
/**
 * Updates the parameter values for stack instances for the specified accounts, within the
 * specified Amazon Web Services Regions. A stack instance refers to a stack in a specific account and
 * Region.
 *
 * You can only update stack instances in Amazon Web Services Regions and accounts where they already
 * exist; to create additional stack instances, use CreateStackInstances.
 *
 * During StackSet updates, any parameters overridden for a stack instance aren't updated,
 * but retain their overridden value.
 *
 * You can only update the parameter *values* that are specified in the
 * StackSet. To add or delete a parameter itself, use UpdateStackSet
 * to update the StackSet template. If you add a parameter to a template, before you can override
 * the parameter value specified in the StackSet you must first use UpdateStackSet
 * to update all stack instances with the updated template and parameter value specified in the
 * StackSet. Once a stack instance has been updated with the new parameter, you can then override
 * the parameter value using `UpdateStackInstances`.
 *
 * The maximum number of organizational unit (OUs) supported by a
 * `UpdateStackInstances` operation is 50.
 *
 * If you need more than 50, consider the following options:
 *
 * - *Batch processing:* If you don't want to expose your OU
 * hierarchy, split up the operations into multiple calls with less than 50 OUs
 * each.
 *
 * - *Parent OU strategy:* If you don't mind exposing the OU
 * hierarchy, target a parent OU that contains all desired child OUs.
 */
export const updateStackInstances: API.OperationMethod<
  UpdateStackInstancesInput,
  UpdateStackInstancesOutput,
  UpdateStackInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(343, __c42, 7) as any as S.Schema<UpdateStackInstancesInput>,
  output: __S(344, __c43, 0) as any as S.Schema<UpdateStackInstancesOutput>,
  errors: [
    InvalidOperationException,
    OperationIdAlreadyExistsException,
    OperationInProgressException,
    StackInstanceNotFoundException,
    StackSetNotFoundException,
    StaleRequestException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateStackInstances",
}));

export type UpdateStackSetError =
  | InvalidOperationException
  | OperationIdAlreadyExistsException
  | OperationInProgressException
  | StackInstanceNotFoundException
  | StackSetNotFoundException
  | StaleRequestException
  | CommonErrors;
/**
 * Updates the StackSet and associated stack instances in the specified accounts and
 * Amazon Web Services Regions.
 *
 * Even if the StackSet operation created by updating the StackSet fails (completely or
 * partially, below or above a specified failure tolerance), the StackSet is updated with your
 * changes. Subsequent CreateStackInstances calls on the specified StackSet use
 * the updated StackSet.
 *
 * The maximum number of organizational unit (OUs) supported by a
 * `UpdateStackSet` operation is 50.
 *
 * If you need more than 50, consider the following options:
 *
 * - *Batch processing:* If you don't want to expose your OU
 * hierarchy, split up the operations into multiple calls with less than 50 OUs
 * each.
 *
 * - *Parent OU strategy:* If you don't mind exposing the OU
 * hierarchy, target a parent OU that contains all desired child OUs.
 */
export const updateStackSet: API.OperationMethod<
  UpdateStackSetInput,
  UpdateStackSetOutput,
  UpdateStackSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(345, __c43, 1) as any as S.Schema<UpdateStackSetInput>,
  output: __S(346, __c43, 2) as any as S.Schema<UpdateStackSetOutput>,
  errors: [
    InvalidOperationException,
    OperationIdAlreadyExistsException,
    OperationInProgressException,
    StackInstanceNotFoundException,
    StackSetNotFoundException,
    StaleRequestException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateStackSet",
}));

export type UpdateTerminationProtectionError = CommonErrors;
/**
 * Updates termination protection for the specified stack. If a user attempts to delete a
 * stack with termination protection enabled, the operation fails and the stack remains
 * unchanged. For more information, see Protect a CloudFormation
 * stack from being deleted in the *CloudFormation User Guide*.
 *
 * For nested stacks,
 * termination protection is set on the root stack and can't be changed directly on the nested
 * stack.
 */
export const updateTerminationProtection: API.OperationMethod<
  UpdateTerminationProtectionInput,
  UpdateTerminationProtectionOutput,
  UpdateTerminationProtectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(347, __c43, 3) as any as S.Schema<UpdateTerminationProtectionInput>,
  output: __S(348, __c43, 4) as any as S.Schema<UpdateTerminationProtectionOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTerminationProtection",
}));

export type ValidateTemplateError = CommonErrors;
/**
 * Validates a specified template. CloudFormation first checks if the template is valid JSON. If
 * it isn't, CloudFormation checks if the template is valid YAML. If both these checks fail,
 * CloudFormation returns a template validation error.
 */
export const validateTemplate: API.OperationMethod<
  ValidateTemplateInput,
  ValidateTemplateOutput,
  ValidateTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(349, __c43, 5) as any as S.Schema<ValidateTemplateInput>,
  output: __S(352, __c44, 0) as any as S.Schema<ValidateTemplateOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ValidateTemplate",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ActivateOrganizationsAccessInput",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "ActivateOrganizationsAccessOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ LogRoleArn: S.optional(S.String), LogGroupName: S.optional(S.String) }),
      ).annotate({ identifier: "LoggingConfig" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          PublicTypeArn: S.optional(S.String),
          PublisherId: S.optional(S.String),
          TypeName: S.optional(S.String),
          TypeNameAlias: S.optional(S.String),
          AutoUpdate: S.optional(S.Boolean),
          LoggingConfig: S.optional(__S(2, __c0, 2)),
          ExecutionRoleArn: S.optional(S.String),
          VersionBump: S.optional(S.String),
          MajorVersion: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ActivateTypeInput" });
    case 4:
      return S.suspend(() => S.Struct({ Arn: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "ActivateTypeOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          TypeArn: S.optional(S.String),
          TypeConfigurationAlias: S.optional(S.String),
          TypeConfigurationArn: S.optional(S.String),
          Type: S.optional(S.String),
          TypeName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "TypeConfigurationIdentifier",
      });
    case 6:
      return S.Array(__S(5, __c0, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ TypeConfigurationIdentifiers: S.optional(__S(6, __c0, 6)) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchDescribeTypeConfigurationsInput",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ErrorCode: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
          TypeConfigurationIdentifier: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({
        identifier: "BatchDescribeTypeConfigurationsError",
      });
    case 1:
      return S.Array(__S(8, __c1, 0));
    case 2:
      return S.Array(__S(5, __c0, 5));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Alias: S.optional(S.String),
          Configuration: S.optional(S.String),
          LastUpdated: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          TypeArn: S.optional(S.String),
          TypeName: S.optional(S.String),
          IsDefaultConfiguration: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "TypeConfigurationDetails" });
    case 4:
      return S.Array(__S(11, __c1, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Errors: S.optional(__S(9, __c1, 1)),
          UnprocessedTypeConfigurations: S.optional(__S(10, __c1, 2)),
          TypeConfigurations: S.optional(__S(12, __c1, 4)),
        }).pipe(ns),
      ).annotate({
        identifier: "BatchDescribeTypeConfigurationsOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          StackName: S.optional(S.String),
          ClientRequestToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CancelUpdateStackInput" });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "CancelUpdateStackResponse",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          StackName: S.optional(S.String),
          RoleARN: S.optional(S.String),
          ResourcesToSkip: S.optional(__S(16, __c2, 0)),
          ClientRequestToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ContinueUpdateRollbackInput",
      });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "ContinueUpdateRollbackOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ParameterKey: S.optional(S.String),
          ParameterValue: S.optional(S.String),
          UsePreviousValue: S.optional(S.Boolean),
          ResolvedValue: S.optional(S.String),
        }),
      ).annotate({ identifier: "Parameter" });
    case 4:
      return S.Array(__S(19, __c2, 3));
    case 5:
      return S.Array(S.String);
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({ Arn: S.optional(S.String), Type: S.optional(S.String) }),
      ).annotate({ identifier: "RollbackTrigger" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(23, __c2, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          RollbackTriggers: S.optional(__S(24, __c3, 0)),
          MonitoringTimeInMinutes: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RollbackConfiguration" });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({ Key: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({ identifier: "Tag" });
    case 4:
      return S.Array(__S(27, __c3, 3));
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          ResourceType: S.optional(S.String),
          LogicalResourceId: S.optional(S.String),
          ResourceIdentifier: S.optional(__S(29, __c3, 5)),
        }),
      ).annotate({ identifier: "ResourceToImport" });
    case 7:
      return S.Array(__S(30, __c3, 6));
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Mode: S.optional(S.String),
          DisableRollback: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "DeploymentConfig" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          StackName: S.optional(S.String),
          TemplateBody: S.optional(S.String),
          TemplateURL: S.optional(S.String),
          UsePreviousTemplate: S.optional(S.Boolean),
          Parameters: S.optional(__S(20, __c2, 4)),
          Capabilities: S.optional(__S(21, __c2, 5)),
          ResourceTypes: S.optional(__S(22, __c2, 6)),
          RoleARN: S.optional(S.String),
          RollbackConfiguration: S.optional(__S(25, __c3, 1)),
          NotificationARNs: S.optional(__S(26, __c3, 2)),
          Tags: S.optional(__S(28, __c3, 4)),
          ChangeSetName: S.optional(S.String),
          ClientToken: S.optional(S.String),
          Description: S.optional(S.String),
          ChangeSetType: S.optional(S.String),
          ResourcesToImport: S.optional(__S(31, __c3, 7)),
          IncludeNestedStacks: S.optional(S.Boolean),
          OnStackFailure: S.optional(S.String),
          ImportExistingResources: S.optional(S.Boolean),
          DeploymentMode: S.optional(S.String),
          DeploymentConfig: S.optional(__S(32, __c4, 0)),
          DisableValidation: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateChangeSetInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Id: S.optional(S.String), StackId: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "CreateChangeSetOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ResourceType: S.optional(S.String),
          LogicalResourceId: S.optional(S.String),
          ResourceIdentifier: S.optional(__S(29, __c3, 5)),
        }),
      ).annotate({ identifier: "ResourceDefinition" });
    case 4:
      return S.Array(__S(35, __c4, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          DeletionPolicy: S.optional(S.String),
          UpdateReplacePolicy: S.optional(S.String),
        }),
      ).annotate({ identifier: "TemplateConfiguration" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Resources: S.optional(__S(36, __c4, 4)),
          GeneratedTemplateName: S.optional(S.String),
          StackName: S.optional(S.String),
          TemplateConfiguration: S.optional(__S(37, __c4, 5)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateGeneratedTemplateInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ GeneratedTemplateId: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "CreateGeneratedTemplateOutput",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          StackName: S.optional(S.String),
          TemplateBody: S.optional(S.String),
          TemplateURL: S.optional(S.String),
          Parameters: S.optional(__S(20, __c2, 4)),
          DisableRollback: S.optional(S.Boolean),
          RollbackConfiguration: S.optional(__S(25, __c3, 1)),
          TimeoutInMinutes: S.optional(S.Number),
          NotificationARNs: S.optional(__S(26, __c3, 2)),
          Capabilities: S.optional(__S(21, __c2, 5)),
          ResourceTypes: S.optional(__S(22, __c2, 6)),
          RoleARN: S.optional(S.String),
          OnFailure: S.optional(S.String),
          StackPolicyBody: S.optional(S.String),
          StackPolicyURL: S.optional(S.String),
          Tags: S.optional(__S(28, __c3, 4)),
          ClientRequestToken: S.optional(S.String),
          EnableTerminationProtection: S.optional(S.Boolean),
          RetainExceptOnCreate: S.optional(S.Boolean),
          DeploymentConfig: S.optional(__S(32, __c4, 0)),
          DisableValidation: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateStackInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ StackId: S.optional(S.String), OperationId: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "CreateStackOutput" });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({
          Accounts: S.optional(__S(42, __c5, 2)),
          AccountsUrl: S.optional(S.String),
          OrganizationalUnitIds: S.optional(__S(43, __c5, 3)),
          AccountFilterType: S.optional(S.String),
        }),
      ).annotate({ identifier: "DeploymentTargets" });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          RegionConcurrencyType: S.optional(S.String),
          RegionOrder: S.optional(__S(45, __c5, 5)),
          FailureToleranceCount: S.optional(S.Number),
          FailureTolerancePercentage: S.optional(S.Number),
          MaxConcurrentCount: S.optional(S.Number),
          MaxConcurrentPercentage: S.optional(S.Number),
          ConcurrencyMode: S.optional(S.String),
        }),
      ).annotate({
        identifier: "StackSetOperationPreferences",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          StackSetName: S.optional(S.String),
          Accounts: S.optional(__S(42, __c5, 2)),
          DeploymentTargets: S.optional(__S(44, __c5, 4)),
          Regions: S.optional(__S(45, __c5, 5)),
          ParameterOverrides: S.optional(__S(20, __c2, 4)),
          OperationPreferences: S.optional(__S(46, __c5, 6)),
          OperationId: S.optional(S.String).pipe(T.IdempotencyToken()),
          CallAs: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateStackInstancesInput",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ OperationId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "CreateStackInstancesOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ StackName: S.optional(S.String), LogicalResourceId: S.optional(S.String) }),
      ).annotate({ identifier: "ResourceLocation" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Source: S.optional(__S(49, __c6, 1)),
          Destination: S.optional(__S(49, __c6, 1)),
        }),
      ).annotate({ identifier: "ResourceMapping" });
    case 3:
      return S.Array(__S(50, __c6, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          StackName: S.optional(S.String),
          TemplateBody: S.optional(S.String),
          TemplateURL: S.optional(S.String),
        }),
      ).annotate({ identifier: "StackDefinition" });
    case 5:
      return S.Array(__S(52, __c6, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          EnableStackCreation: S.optional(S.Boolean),
          ResourceMappings: S.optional(__S(51, __c6, 3)),
          StackDefinitions: S.optional(__S(53, __c6, 5)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateStackRefactorInput" });
    case 7:
      return S.suspend(() => S.Struct({ StackRefactorId: S.optional(S.String) }).pipe(ns)).annotate(
        {
          identifier: "CreateStackRefactorOutput",
        },
      );
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.optional(S.Boolean),
          RetainStacksOnAccountRemoval: S.optional(S.Boolean),
          DependsOn: S.optional(__S(56, __c7, 0)),
        }),
      ).annotate({ identifier: "AutoDeployment" });
    case 2:
      return S.suspend(() => S.Struct({ Active: S.optional(S.Boolean) })).annotate({
        identifier: "ManagedExecution",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          StackSetName: S.optional(S.String),
          Description: S.optional(S.String),
          TemplateBody: S.optional(S.String),
          TemplateURL: S.optional(S.String),
          StackId: S.optional(S.String),
          Parameters: S.optional(__S(20, __c2, 4)),
          Capabilities: S.optional(__S(21, __c2, 5)),
          Tags: S.optional(__S(28, __c3, 4)),
          AdministrationRoleARN: S.optional(S.String),
          ExecutionRoleName: S.optional(S.String),
          PermissionModel: S.optional(S.String),
          AutoDeployment: S.optional(__S(57, __c7, 1)),
          CallAs: S.optional(S.String),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          ManagedExecution: S.optional(__S(58, __c7, 2)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateStackSetInput" });
    case 4:
      return S.suspend(() => S.Struct({ StackSetId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "CreateStackSetOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeactivateOrganizationsAccessInput",
      });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeactivateOrganizationsAccessOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TypeName: S.optional(S.String),
          Type: S.optional(S.String),
          Arn: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeactivateTypeInput" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeactivateTypeOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ChangeSetName: S.optional(S.String), StackName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteChangeSetInput" });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteChangeSetOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ GeneratedTemplateName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteGeneratedTemplateInput",
      });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteGeneratedTemplateResponse",
      });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          StackName: S.optional(S.String),
          RetainResources: S.optional(__S(69, __c8, 5)),
          RoleARN: S.optional(S.String),
          ClientRequestToken: S.optional(S.String),
          DeletionMode: S.optional(S.String),
          DeploymentConfig: S.optional(__S(32, __c4, 0)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeleteStackInput" });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteStackResponse",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          StackSetName: S.optional(S.String),
          Accounts: S.optional(__S(42, __c5, 2)),
          DeploymentTargets: S.optional(__S(44, __c5, 4)),
          Regions: S.optional(__S(45, __c5, 5)),
          OperationPreferences: S.optional(__S(46, __c5, 6)),
          RetainStacks: S.optional(S.Boolean),
          OperationId: S.optional(S.String).pipe(T.IdempotencyToken()),
          CallAs: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteStackInstancesInput",
      });
    case 1:
      return S.suspend(() => S.Struct({ OperationId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "DeleteStackInstancesOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ StackSetName: S.optional(S.String), CallAs: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteStackSetInput" });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteStackSetOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Type: S.optional(S.String),
          TypeName: S.optional(S.String),
          VersionId: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeregisterTypeInput" });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeregisterTypeOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeAccountLimitsInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Value: S.optional(S.Number) }),
      ).annotate({ identifier: "AccountLimit" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(79, __c9, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountLimits: S.optional(__S(80, __c10, 0)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeAccountLimitsOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ChangeSetName: S.optional(S.String),
          StackName: S.optional(S.String),
          NextToken: S.optional(S.String),
          IncludePropertyValues: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeChangeSetInput" });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({ Path: S.optional(S.String), Reason: S.optional(S.String) }),
      ).annotate({
        identifier: "ResourceDriftIgnoredAttribute",
      });
    case 5:
      return S.Array(__S(84, __c10, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          PreviousValue: S.optional(S.String),
          ActualValue: S.optional(S.String),
          DriftDetectionTimestamp: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
        }),
      ).annotate({ identifier: "LiveResourceDrift" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Attribute: S.optional(S.String),
          Name: S.optional(S.String),
          RequiresRecreation: S.optional(S.String),
          Path: S.optional(S.String),
          BeforeValue: S.optional(S.String),
          AfterValue: S.optional(S.String),
          BeforeValueFrom: S.optional(S.String),
          AfterValueFrom: S.optional(S.String),
          Drift: S.optional(__S(86, __c10, 6)),
          AttributeChangeType: S.optional(S.String),
        }),
      ).annotate({ identifier: "ResourceTargetDefinition" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Target: S.optional(__S(87, __c10, 7)),
          Evaluation: S.optional(S.String),
          ChangeSource: S.optional(S.String),
          CausingEntity: S.optional(S.String),
        }),
      ).annotate({ identifier: "ResourceChangeDetail" });
    case 1:
      return S.Array(__S(88, __c11, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ TypeHierarchy: S.optional(S.String), LogicalIdHierarchy: S.optional(S.String) }),
      ).annotate({ identifier: "ModuleInfo" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          PolicyAction: S.optional(S.String),
          Action: S.optional(S.String),
          LogicalResourceId: S.optional(S.String),
          PhysicalResourceId: S.optional(S.String),
          ResourceType: S.optional(S.String),
          Replacement: S.optional(S.String),
          Scope: S.optional(__S(83, __c10, 3)),
          ResourceDriftStatus: S.optional(S.String),
          ResourceDriftIgnoredAttributes: S.optional(__S(85, __c10, 5)),
          Details: S.optional(__S(89, __c11, 1)),
          ChangeSetId: S.optional(S.String),
          ModuleInfo: S.optional(__S(90, __c11, 2)),
          BeforeContext: S.optional(S.String),
          AfterContext: S.optional(S.String),
          PreviousDeploymentContext: S.optional(S.String),
        }),
      ).annotate({ identifier: "ResourceChange" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          HookInvocationCount: S.optional(S.Number),
          ResourceChange: S.optional(__S(91, __c11, 3)),
        }),
      ).annotate({ identifier: "Change" });
    case 5:
      return S.Array(__S(92, __c11, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          ChangeSetName: S.optional(S.String),
          ChangeSetId: S.optional(S.String),
          StackId: S.optional(S.String),
          StackName: S.optional(S.String),
          Description: S.optional(S.String),
          Parameters: S.optional(__S(20, __c2, 4)),
          CreationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ExecutionStatus: S.optional(S.String),
          Status: S.optional(S.String),
          StatusReason: S.optional(S.String),
          StackDriftStatus: S.optional(S.String),
          NotificationARNs: S.optional(__S(26, __c3, 2)),
          RollbackConfiguration: S.optional(__S(25, __c3, 1)),
          Capabilities: S.optional(__S(21, __c2, 5)),
          Tags: S.optional(__S(28, __c3, 4)),
          Changes: S.optional(__S(93, __c11, 5)),
          NextToken: S.optional(S.String),
          IncludeNestedStacks: S.optional(S.Boolean),
          ParentChangeSetId: S.optional(S.String),
          RootChangeSetId: S.optional(S.String),
          OnStackFailure: S.optional(S.String),
          ImportExistingResources: S.optional(S.Boolean),
          DeploymentMode: S.optional(S.String),
          DeploymentConfig: S.optional(__S(32, __c4, 0)),
        }).pipe(ns),
      ).annotate({ identifier: "DescribeChangeSetOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ChangeSetName: S.optional(S.String),
          StackName: S.optional(S.String),
          NextToken: S.optional(S.String),
          LogicalResourceId: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeChangeSetHooksInput",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LogicalResourceId: S.optional(S.String),
          ResourceType: S.optional(S.String),
          ResourceAction: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ChangeSetHookResourceTargetDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          TargetType: S.optional(S.String),
          ResourceTargetDetails: S.optional(__S(96, __c12, 0)),
        }),
      ).annotate({
        identifier: "ChangeSetHookTargetDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          InvocationPoint: S.optional(S.String),
          FailureMode: S.optional(S.String),
          TypeName: S.optional(S.String),
          TypeVersionId: S.optional(S.String),
          TypeConfigurationVersionId: S.optional(S.String),
          TargetDetails: S.optional(__S(97, __c12, 1)),
        }),
      ).annotate({ identifier: "ChangeSetHook" });
    case 3:
      return S.Array(__S(98, __c12, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ChangeSetId: S.optional(S.String),
          ChangeSetName: S.optional(S.String),
          Hooks: S.optional(__S(99, __c12, 3)),
          Status: S.optional(S.String),
          NextToken: S.optional(S.String),
          StackId: S.optional(S.String),
          StackName: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeChangeSetHooksOutput",
      });
    case 5:
      return S.suspend(() => S.Struct({ FailedEvents: S.optional(S.Boolean) })).annotate({
        identifier: "EventFilter",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          StackName: S.optional(S.String),
          ChangeSetName: S.optional(S.String),
          OperationId: S.optional(S.String),
          Filters: S.optional(__S(101, __c12, 5)),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeEventsInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          EventId: S.optional(S.String),
          StackId: S.optional(S.String),
          OperationId: S.optional(S.String),
          OperationType: S.optional(S.String),
          OperationStatus: S.optional(S.String),
          EventType: S.optional(S.String),
          LogicalResourceId: S.optional(S.String),
          PhysicalResourceId: S.optional(S.String),
          ResourceType: S.optional(S.String),
          Timestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ResourceStatus: S.optional(S.String),
          ResourceStatusReason: S.optional(S.String),
          ResourceProperties: S.optional(S.String),
          ClientRequestToken: S.optional(S.String),
          HookType: S.optional(S.String),
          HookStatus: S.optional(S.String),
          HookStatusReason: S.optional(S.String),
          HookInvocationPoint: S.optional(S.String),
          HookFailureMode: S.optional(S.String),
          DetailedStatus: S.optional(S.String),
          ValidationFailureMode: S.optional(S.String),
          ValidationName: S.optional(S.String),
          ValidationStatus: S.optional(S.String),
          ValidationStatusReason: S.optional(S.String),
          ValidationPath: S.optional(S.String),
        }),
      ).annotate({ identifier: "OperationEvent" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(103, __c12, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          OperationEvents: S.optional(__S(104, __c13, 0)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "DescribeEventsOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ GeneratedTemplateName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeGeneratedTemplateInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          PropertyPath: S.optional(S.String),
          Required: S.optional(S.Boolean),
          Description: S.optional(S.String),
        }),
      ).annotate({ identifier: "WarningProperty" });
    case 4:
      return S.Array(__S(107, __c13, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ Type: S.optional(S.String), Properties: S.optional(__S(108, __c13, 4)) }),
      ).annotate({ identifier: "WarningDetail" });
    case 6:
      return S.Array(__S(109, __c13, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          ResourceType: S.optional(S.String),
          LogicalResourceId: S.optional(S.String),
          ResourceIdentifier: S.optional(__S(29, __c3, 5)),
          ResourceStatus: S.optional(S.String),
          ResourceStatusReason: S.optional(S.String),
          Warnings: S.optional(__S(110, __c13, 6)),
        }),
      ).annotate({ identifier: "ResourceDetail" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(111, __c13, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResourcesSucceeded: S.optional(S.Number),
          ResourcesFailed: S.optional(S.Number),
          ResourcesProcessing: S.optional(S.Number),
          ResourcesPending: S.optional(S.Number),
        }),
      ).annotate({ identifier: "TemplateProgress" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          GeneratedTemplateId: S.optional(S.String),
          GeneratedTemplateName: S.optional(S.String),
          Resources: S.optional(__S(112, __c14, 0)),
          Status: S.optional(S.String),
          StatusReason: S.optional(S.String),
          CreationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          LastUpdatedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Progress: S.optional(__S(113, __c14, 1)),
          StackId: S.optional(S.String),
          TemplateConfiguration: S.optional(__S(37, __c4, 5)),
          TotalWarnings: S.optional(S.Number),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeGeneratedTemplateOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ CallAs: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeOrganizationsAccessInput",
      });
    case 4:
      return S.suspend(() => S.Struct({ Status: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "DescribeOrganizationsAccessOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ PublisherId: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribePublisherInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          PublisherId: S.optional(S.String),
          PublisherStatus: S.optional(S.String),
          IdentityProvider: S.optional(S.String),
          PublisherProfile: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "DescribePublisherOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceScanId: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeResourceScanInput",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() => S.Struct({ Types: S.optional(__S(120, __c15, 0)) })).annotate({
        identifier: "ScanFilter",
      });
    case 2:
      return S.Array(__S(121, __c15, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          ResourceScanId: S.optional(S.String),
          Status: S.optional(S.String),
          StatusReason: S.optional(S.String),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          PercentageCompleted: S.optional(S.Number),
          ResourceTypes: S.optional(__S(22, __c2, 6)),
          ResourcesScanned: S.optional(S.Number),
          ResourcesRead: S.optional(S.Number),
          ScanFilters: S.optional(__S(122, __c15, 2)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeResourceScanOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ StackDriftDetectionId: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeStackDriftDetectionStatusInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          StackId: S.optional(S.String),
          StackDriftDetectionId: S.optional(S.String),
          StackDriftStatus: S.optional(S.String),
          DetectionStatus: S.optional(S.String),
          DetectionStatusReason: S.optional(S.String),
          DriftedStackResourceCount: S.optional(S.Number),
          Timestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeStackDriftDetectionStatusOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ StackName: S.optional(S.String), NextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeStackEventsInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          StackId: S.optional(S.String),
          EventId: S.optional(S.String),
          StackName: S.optional(S.String),
          OperationId: S.optional(S.String),
          LogicalResourceId: S.optional(S.String),
          PhysicalResourceId: S.optional(S.String),
          ResourceType: S.optional(S.String),
          Timestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ResourceStatus: S.optional(S.String),
          ResourceStatusReason: S.optional(S.String),
          ResourceProperties: S.optional(S.String),
          ClientRequestToken: S.optional(S.String),
          HookType: S.optional(S.String),
          HookStatus: S.optional(S.String),
          HookStatusReason: S.optional(S.String),
          HookInvocationPoint: S.optional(S.String),
          HookInvocationId: S.optional(S.String),
          HookFailureMode: S.optional(S.String),
          DetailedStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "StackEvent" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(127, __c15, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          StackEvents: S.optional(__S(128, __c16, 0)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeStackEventsOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          StackSetName: S.optional(S.String),
          StackInstanceAccount: S.optional(S.String),
          StackInstanceRegion: S.optional(S.String),
          CallAs: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeStackInstanceInput",
      });
    case 3:
      return S.suspend(() => S.Struct({ DetailedStatus: S.optional(S.String) })).annotate({
        identifier: "StackInstanceComprehensiveStatus",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          StackSetId: S.optional(S.String),
          Region: S.optional(S.String),
          Account: S.optional(S.String),
          StackId: S.optional(S.String),
          ParameterOverrides: S.optional(__S(20, __c2, 4)),
          Status: S.optional(S.String),
          StackInstanceStatus: S.optional(__S(131, __c16, 3)),
          StatusReason: S.optional(S.String),
          OrganizationalUnitId: S.optional(S.String),
          DriftStatus: S.optional(S.String),
          LastDriftCheckTimestamp: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          LastOperationId: S.optional(S.String),
        }),
      ).annotate({ identifier: "StackInstance" });
    case 5:
      return S.suspend(() =>
        S.Struct({ StackInstance: S.optional(__S(132, __c16, 4)) }).pipe(ns),
      ).annotate({
        identifier: "DescribeStackInstanceOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ StackRefactorId: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeStackRefactorInput",
      });
    case 7:
      return S.Array(S.String);
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          StackRefactorId: S.optional(S.String),
          StackIds: S.optional(__S(135, __c16, 7)),
          ExecutionStatus: S.optional(S.String),
          ExecutionStatusReason: S.optional(S.String),
          Status: S.optional(S.String),
          StatusReason: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeStackRefactorOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ StackName: S.optional(S.String), LogicalResourceId: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeStackResourceInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          StackResourceDriftStatus: S.optional(S.String),
          LastCheckTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "StackResourceDriftInformation",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          StackName: S.optional(S.String),
          StackId: S.optional(S.String),
          LogicalResourceId: S.optional(S.String),
          PhysicalResourceId: S.optional(S.String),
          ResourceType: S.optional(S.String),
          LastUpdatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ResourceStatus: S.optional(S.String),
          ResourceStatusReason: S.optional(S.String),
          Description: S.optional(S.String),
          Metadata: S.optional(S.String),
          DriftInformation: S.optional(__S(138, __c17, 2)),
          ModuleInfo: S.optional(__S(90, __c11, 2)),
        }),
      ).annotate({ identifier: "StackResourceDetail" });
    case 4:
      return S.suspend(() =>
        S.Struct({ StackResourceDetail: S.optional(__S(139, __c17, 3)) }).pipe(ns),
      ).annotate({
        identifier: "DescribeStackResourceOutput",
      });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          StackName: S.optional(S.String),
          StackResourceDriftStatusFilters: S.optional(__S(141, __c17, 5)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeStackResourceDriftsInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Key: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({
        identifier: "PhysicalResourceIdContextKeyValuePair",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(143, __c17, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          PropertyPath: S.optional(S.String),
          ExpectedValue: S.optional(S.String),
          ActualValue: S.optional(S.String),
          DifferenceType: S.optional(S.String),
        }),
      ).annotate({ identifier: "PropertyDifference" });
    case 2:
      return S.Array(__S(145, __c18, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          StackId: S.optional(S.String),
          LogicalResourceId: S.optional(S.String),
          PhysicalResourceId: S.optional(S.String),
          PhysicalResourceIdContext: S.optional(__S(144, __c18, 0)),
          ResourceType: S.optional(S.String),
          ExpectedProperties: S.optional(S.String),
          ActualProperties: S.optional(S.String),
          PropertyDifferences: S.optional(__S(146, __c18, 2)),
          StackResourceDriftStatus: S.optional(S.String),
          Timestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ModuleInfo: S.optional(__S(90, __c11, 2)),
          DriftStatusReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "StackResourceDrift" });
    case 4:
      return S.Array(__S(147, __c18, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          StackResourceDrifts: S.optional(__S(148, __c18, 4)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeStackResourceDriftsOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          StackName: S.optional(S.String),
          LogicalResourceId: S.optional(S.String),
          PhysicalResourceId: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeStackResourcesInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          StackName: S.optional(S.String),
          StackId: S.optional(S.String),
          LogicalResourceId: S.optional(S.String),
          PhysicalResourceId: S.optional(S.String),
          ResourceType: S.optional(S.String),
          Timestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ResourceStatus: S.optional(S.String),
          ResourceStatusReason: S.optional(S.String),
          Description: S.optional(S.String),
          DriftInformation: S.optional(__S(138, __c17, 2)),
          ModuleInfo: S.optional(__S(90, __c11, 2)),
        }),
      ).annotate({ identifier: "StackResource" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(151, __c18, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ StackResources: S.optional(__S(152, __c19, 0)) }).pipe(ns),
      ).annotate({
        identifier: "DescribeStackResourcesOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ StackName: S.optional(S.String), NextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeStacksInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          OutputKey: S.optional(S.String),
          OutputValue: S.optional(S.String),
          Description: S.optional(S.String),
          ExportName: S.optional(S.String),
        }),
      ).annotate({ identifier: "Output" });
    case 4:
      return S.Array(__S(155, __c19, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          StackDriftStatus: S.optional(S.String),
          LastCheckTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "StackDriftInformation" });
    case 6:
      return S.suspend(() =>
        S.Struct({ OperationType: S.optional(S.String), OperationId: S.optional(S.String) }),
      ).annotate({ identifier: "OperationEntry" });
    case 7:
      return S.Array(__S(158, __c19, 6));
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          StackId: S.optional(S.String),
          StackName: S.optional(S.String),
          ChangeSetId: S.optional(S.String),
          Description: S.optional(S.String),
          Parameters: S.optional(__S(20, __c2, 4)),
          CreationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          DeletionTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          LastUpdatedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          RollbackConfiguration: S.optional(__S(25, __c3, 1)),
          StackStatus: S.optional(S.String),
          StackStatusReason: S.optional(S.String),
          DisableRollback: S.optional(S.Boolean),
          DeploymentConfig: S.optional(__S(32, __c4, 0)),
          NotificationARNs: S.optional(__S(26, __c3, 2)),
          TimeoutInMinutes: S.optional(S.Number),
          Capabilities: S.optional(__S(21, __c2, 5)),
          Outputs: S.optional(__S(156, __c19, 4)),
          RoleARN: S.optional(S.String),
          Tags: S.optional(__S(28, __c3, 4)),
          EnableTerminationProtection: S.optional(S.Boolean),
          ParentId: S.optional(S.String),
          RootId: S.optional(S.String),
          DriftInformation: S.optional(__S(157, __c19, 5)),
          RetainExceptOnCreate: S.optional(S.Boolean),
          DeletionMode: S.optional(S.String),
          DetailedStatus: S.optional(S.String),
          LastOperations: S.optional(__S(159, __c19, 7)),
        }),
      ).annotate({ identifier: "Stack" });
    case 1:
      return S.Array(__S(160, __c20, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ Stacks: S.optional(__S(161, __c20, 1)), NextToken: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "DescribeStacksOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ StackSetName: S.optional(S.String), CallAs: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeStackSetInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DriftStatus: S.optional(S.String),
          DriftDetectionStatus: S.optional(S.String),
          LastDriftCheckTimestamp: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          TotalStackInstancesCount: S.optional(S.Number),
          DriftedStackInstancesCount: S.optional(S.Number),
          InSyncStackInstancesCount: S.optional(S.Number),
          InProgressStackInstancesCount: S.optional(S.Number),
          FailedStackInstancesCount: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "StackSetDriftDetectionDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          StackSetName: S.optional(S.String),
          StackSetId: S.optional(S.String),
          Description: S.optional(S.String),
          Status: S.optional(S.String),
          TemplateBody: S.optional(S.String),
          Parameters: S.optional(__S(20, __c2, 4)),
          Capabilities: S.optional(__S(21, __c2, 5)),
          Tags: S.optional(__S(28, __c3, 4)),
          StackSetARN: S.optional(S.String),
          AdministrationRoleARN: S.optional(S.String),
          ExecutionRoleName: S.optional(S.String),
          StackSetDriftDetectionDetails: S.optional(__S(164, __c20, 4)),
          AutoDeployment: S.optional(__S(57, __c7, 1)),
          PermissionModel: S.optional(S.String),
          OrganizationalUnitIds: S.optional(__S(43, __c5, 3)),
          ManagedExecution: S.optional(__S(58, __c7, 2)),
          Regions: S.optional(__S(45, __c5, 5)),
        }),
      ).annotate({ identifier: "StackSet" });
    case 6:
      return S.suspend(() =>
        S.Struct({ StackSet: S.optional(__S(165, __c20, 5)) }).pipe(ns),
      ).annotate({
        identifier: "DescribeStackSetOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          StackSetName: S.optional(S.String),
          OperationId: S.optional(S.String),
          CallAs: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeStackSetOperationInput",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ FailedStackInstancesCount: S.optional(S.Number) }),
      ).annotate({
        identifier: "StackSetOperationStatusDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          OperationId: S.optional(S.String),
          StackSetId: S.optional(S.String),
          Action: S.optional(S.String),
          Status: S.optional(S.String),
          OperationPreferences: S.optional(__S(46, __c5, 6)),
          RetainStacks: S.optional(S.Boolean),
          AdministrationRoleARN: S.optional(S.String),
          ExecutionRoleName: S.optional(S.String),
          CreationTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EndTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          DeploymentTargets: S.optional(__S(44, __c5, 4)),
          StackSetDriftDetectionDetails: S.optional(__S(164, __c20, 4)),
          StatusReason: S.optional(S.String),
          StatusDetails: S.optional(__S(168, __c21, 0)),
        }),
      ).annotate({ identifier: "StackSetOperation" });
    case 2:
      return S.suspend(() =>
        S.Struct({ StackSetOperation: S.optional(__S(169, __c21, 1)) }).pipe(ns),
      ).annotate({
        identifier: "DescribeStackSetOperationOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          TypeName: S.optional(S.String),
          Arn: S.optional(S.String),
          VersionId: S.optional(S.String),
          PublisherId: S.optional(S.String),
          PublicVersionNumber: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeTypeInput" });
    case 4:
      return S.Array(S.Number);
    case 5:
      return S.suspend(() =>
        S.Struct({
          TypeNameAlias: S.optional(S.String),
          OriginalTypeName: S.optional(S.String),
          PublisherId: S.optional(S.String),
          SupportedMajorVersions: S.optional(__S(172, __c21, 4)),
        }),
      ).annotate({ identifier: "RequiredActivatedType" });
    case 6:
      return S.Array(__S(173, __c21, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Type: S.optional(S.String),
          TypeName: S.optional(S.String),
          DefaultVersionId: S.optional(S.String),
          IsDefaultVersion: S.optional(S.Boolean),
          TypeTestsStatus: S.optional(S.String),
          TypeTestsStatusDescription: S.optional(S.String),
          Description: S.optional(S.String),
          Schema: S.optional(S.String),
          ProvisioningType: S.optional(S.String),
          DeprecatedStatus: S.optional(S.String),
          LoggingConfig: S.optional(__S(2, __c0, 2)),
          RequiredActivatedTypes: S.optional(__S(174, __c21, 6)),
          ExecutionRoleArn: S.optional(S.String),
          Visibility: S.optional(S.String),
          SourceUrl: S.optional(S.String),
          DocumentationUrl: S.optional(S.String),
          LastUpdated: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          TimeCreated: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ConfigurationSchema: S.optional(S.String),
          PublisherId: S.optional(S.String),
          OriginalTypeName: S.optional(S.String),
          OriginalTypeArn: S.optional(S.String),
          PublicVersionNumber: S.optional(S.String),
          LatestPublicVersion: S.optional(S.String),
          IsActivated: S.optional(S.Boolean),
          AutoUpdate: S.optional(S.Boolean),
        }).pipe(ns),
      ).annotate({ identifier: "DescribeTypeOutput" });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ RegistrationToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeTypeRegistrationInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ProgressStatus: S.optional(S.String),
          Description: S.optional(S.String),
          TypeArn: S.optional(S.String),
          TypeVersionArn: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeTypeRegistrationOutput",
      });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({
          StackName: S.optional(S.String),
          LogicalResourceIds: S.optional(__S(178, __c22, 2)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DetectStackDriftInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ StackDriftDetectionId: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "DetectStackDriftOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ StackName: S.optional(S.String), LogicalResourceId: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DetectStackResourceDriftInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ StackResourceDrift: S.optional(__S(147, __c18, 3)) }).pipe(ns),
      ).annotate({
        identifier: "DetectStackResourceDriftOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          StackSetName: S.optional(S.String),
          OperationPreferences: S.optional(__S(46, __c5, 6)),
          OperationId: S.optional(S.String).pipe(T.IdempotencyToken()),
          CallAs: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DetectStackSetDriftInput" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ OperationId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "DetectStackSetDriftOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          TemplateBody: S.optional(S.String),
          TemplateURL: S.optional(S.String),
          Parameters: S.optional(__S(20, __c2, 4)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "EstimateTemplateCostInput",
      });
    case 2:
      return S.suspend(() => S.Struct({ Url: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "EstimateTemplateCostOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ChangeSetName: S.optional(S.String),
          StackName: S.optional(S.String),
          ClientRequestToken: S.optional(S.String),
          DisableRollback: S.optional(S.Boolean),
          RetainExceptOnCreate: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ExecuteChangeSetInput" });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "ExecuteChangeSetOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ StackRefactorId: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ExecuteStackRefactorInput",
      });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "ExecuteStackRefactorResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Format: S.optional(S.String),
          GeneratedTemplateName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetGeneratedTemplateInput",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          TemplateBody: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "GetGeneratedTemplateOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ HookResultId: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetHookResultInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TargetType: S.optional(S.String),
          TargetTypeName: S.optional(S.String),
          TargetId: S.optional(S.String),
          Action: S.optional(S.String),
        }),
      ).annotate({ identifier: "HookTarget" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AnnotationName: S.optional(S.String),
          Status: S.optional(S.String),
          StatusMessage: S.optional(S.String),
          RemediationMessage: S.optional(S.String),
          RemediationLink: S.optional(S.String),
          SeverityLevel: S.optional(S.String),
        }),
      ).annotate({ identifier: "Annotation" });
    case 4:
      return S.Array(__S(195, __c24, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          HookResultId: S.optional(S.String),
          InvocationPoint: S.optional(S.String),
          FailureMode: S.optional(S.String),
          TypeName: S.optional(S.String),
          OriginalTypeName: S.optional(S.String),
          TypeVersionId: S.optional(S.String),
          TypeConfigurationVersionId: S.optional(S.String),
          TypeArn: S.optional(S.String),
          Status: S.optional(S.String),
          HookStatusReason: S.optional(S.String),
          InvokedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Target: S.optional(__S(194, __c24, 2)),
          Annotations: S.optional(__S(196, __c24, 4)),
        }).pipe(ns),
      ).annotate({ identifier: "GetHookResultOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ StackName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetStackPolicyInput" });
    case 7:
      return S.suspend(() => S.Struct({ StackPolicyBody: S.optional(S.String) }).pipe(ns)).annotate(
        { identifier: "GetStackPolicyOutput" },
      );
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          StackName: S.optional(S.String),
          ChangeSetName: S.optional(S.String),
          TemplateStage: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetTemplateInput" });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({
          TemplateBody: S.optional(S.String),
          StagesAvailable: S.optional(__S(201, __c25, 1)),
        }).pipe(ns),
      ).annotate({ identifier: "GetTemplateOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ TreatUnrecognizedResourceTypesAsWarnings: S.optional(S.Boolean) }),
      ).annotate({ identifier: "TemplateSummaryConfig" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TemplateBody: S.optional(S.String),
          TemplateURL: S.optional(S.String),
          StackName: S.optional(S.String),
          StackSetName: S.optional(S.String),
          CallAs: S.optional(S.String),
          TemplateSummaryConfig: S.optional(__S(203, __c25, 3)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetTemplateSummaryInput" });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() => S.Struct({ AllowedValues: S.optional(__S(205, __c25, 5)) })).annotate({
        identifier: "ParameterConstraints",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ParameterKey: S.optional(S.String),
          DefaultValue: S.optional(S.String),
          ParameterType: S.optional(S.String),
          NoEcho: S.optional(S.Boolean),
          Description: S.optional(S.String),
          ParameterConstraints: S.optional(__S(206, __c25, 6)),
        }),
      ).annotate({ identifier: "ParameterDeclaration" });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(207, __c25, 7));
    case 1:
      return S.Array(S.String);
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({
          ResourceType: S.optional(S.String),
          LogicalResourceIds: S.optional(__S(178, __c22, 2)),
          ResourceIdentifiers: S.optional(__S(210, __c26, 2)),
        }),
      ).annotate({
        identifier: "ResourceIdentifierSummary",
      });
    case 4:
      return S.Array(__S(211, __c26, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ UnrecognizedResourceTypes: S.optional(__S(22, __c2, 6)) }),
      ).annotate({ identifier: "Warnings" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Parameters: S.optional(__S(208, __c26, 0)),
          Description: S.optional(S.String),
          Capabilities: S.optional(__S(21, __c2, 5)),
          CapabilitiesReason: S.optional(S.String),
          ResourceTypes: S.optional(__S(22, __c2, 6)),
          Version: S.optional(S.String),
          Metadata: S.optional(S.String),
          DeclaredTransforms: S.optional(__S(209, __c26, 1)),
          ResourceIdentifierSummaries: S.optional(__S(212, __c26, 4)),
          Warnings: S.optional(__S(213, __c26, 5)),
        }).pipe(ns),
      ).annotate({ identifier: "GetTemplateSummaryOutput" });
    case 7:
      return S.Array(S.String);
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          StackSetName: S.optional(S.String),
          StackIds: S.optional(__S(215, __c26, 7)),
          StackIdsUrl: S.optional(S.String),
          OrganizationalUnitIds: S.optional(__S(43, __c5, 3)),
          OperationPreferences: S.optional(__S(46, __c5, 6)),
          OperationId: S.optional(S.String).pipe(T.IdempotencyToken()),
          CallAs: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ImportStacksToStackSetInput",
      });
    case 1:
      return S.suspend(() => S.Struct({ OperationId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "ImportStacksToStackSetOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ StackName: S.optional(S.String), NextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListChangeSetsInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          StackId: S.optional(S.String),
          StackName: S.optional(S.String),
          ChangeSetId: S.optional(S.String),
          ChangeSetName: S.optional(S.String),
          ExecutionStatus: S.optional(S.String),
          Status: S.optional(S.String),
          StatusReason: S.optional(S.String),
          CreationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Description: S.optional(S.String),
          IncludeNestedStacks: S.optional(S.Boolean),
          ParentChangeSetId: S.optional(S.String),
          RootChangeSetId: S.optional(S.String),
          ImportExistingResources: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ChangeSetSummary" });
    case 4:
      return S.Array(__S(219, __c27, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Summaries: S.optional(__S(220, __c27, 4)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListChangeSetsOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListExportsInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ExportingStackId: S.optional(S.String),
          Name: S.optional(S.String),
          Value: S.optional(S.String),
        }),
      ).annotate({ identifier: "Export" });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(223, __c27, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ Exports: S.optional(__S(224, __c28, 0)), NextToken: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "ListExportsOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListGeneratedTemplatesInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          GeneratedTemplateId: S.optional(S.String),
          GeneratedTemplateName: S.optional(S.String),
          Status: S.optional(S.String),
          StatusReason: S.optional(S.String),
          CreationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          LastUpdatedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          NumberOfResources: S.optional(S.Number),
        }),
      ).annotate({ identifier: "TemplateSummary" });
    case 4:
      return S.Array(__S(227, __c28, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Summaries: S.optional(__S(228, __c28, 4)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListGeneratedTemplatesOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TargetType: S.optional(S.String),
          TargetId: S.optional(S.String),
          TypeArn: S.optional(S.String),
          Status: S.optional(S.String),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListHookResultsInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          HookResultId: S.optional(S.String),
          InvocationPoint: S.optional(S.String),
          FailureMode: S.optional(S.String),
          TypeName: S.optional(S.String),
          TypeVersionId: S.optional(S.String),
          TypeConfigurationVersionId: S.optional(S.String),
          Status: S.optional(S.String),
          HookStatusReason: S.optional(S.String),
          InvokedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          TargetType: S.optional(S.String),
          TargetId: S.optional(S.String),
          TypeArn: S.optional(S.String),
          HookExecutionTarget: S.optional(S.String),
        }),
      ).annotate({ identifier: "HookResultSummary" });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(231, __c28, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          TargetType: S.optional(S.String),
          TargetId: S.optional(S.String),
          HookResults: S.optional(__S(232, __c29, 0)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListHookResultsOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ExportName: S.optional(S.String), NextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListImportsInput" });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({ Imports: S.optional(__S(235, __c29, 3)), NextToken: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "ListImportsOutput" });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          ResourceType: S.optional(S.String),
          ResourceIdentifier: S.optional(__S(237, __c29, 5)),
        }),
      ).annotate({
        identifier: "ScannedResourceIdentifier",
      });
    case 7:
      return S.Array(__S(238, __c29, 6));
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ResourceScanId: S.optional(S.String),
          Resources: S.optional(__S(239, __c29, 7)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListResourceScanRelatedResourcesInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResourceType: S.optional(S.String),
          ResourceIdentifier: S.optional(__S(237, __c29, 5)),
          ManagedByStack: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ScannedResource" });
    case 2:
      return S.Array(__S(241, __c30, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          RelatedResources: S.optional(__S(242, __c30, 2)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListResourceScanRelatedResourcesOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ResourceScanId: S.optional(S.String),
          ResourceIdentifier: S.optional(S.String),
          ResourceTypePrefix: S.optional(S.String),
          TagKey: S.optional(S.String),
          TagValue: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListResourceScanResourcesInput",
      });
    case 5:
      return S.Array(__S(241, __c30, 1));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Resources: S.optional(__S(245, __c30, 5)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListResourceScanResourcesOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          ScanTypeFilter: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListResourceScansInput" });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ResourceScanId: S.optional(S.String),
          Status: S.optional(S.String),
          StatusReason: S.optional(S.String),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          PercentageCompleted: S.optional(S.Number),
          ScanType: S.optional(S.String),
        }),
      ).annotate({ identifier: "ResourceScanSummary" });
    case 1:
      return S.Array(__S(248, __c31, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          ResourceScanSummaries: S.optional(__S(249, __c31, 1)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListResourceScansOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          StackSetName: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          StackInstanceResourceDriftStatuses: S.optional(__S(141, __c17, 5)),
          StackInstanceAccount: S.optional(S.String),
          StackInstanceRegion: S.optional(S.String),
          OperationId: S.optional(S.String),
          CallAs: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListStackInstanceResourceDriftsInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          StackId: S.optional(S.String),
          LogicalResourceId: S.optional(S.String),
          PhysicalResourceId: S.optional(S.String),
          PhysicalResourceIdContext: S.optional(__S(144, __c18, 0)),
          ResourceType: S.optional(S.String),
          PropertyDifferences: S.optional(__S(146, __c18, 2)),
          StackResourceDriftStatus: S.optional(S.String),
          Timestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "StackInstanceResourceDriftsSummary",
      });
    case 5:
      return S.Array(__S(252, __c31, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Summaries: S.optional(__S(253, __c31, 5)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListStackInstanceResourceDriftsOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Values: S.optional(S.String) }),
      ).annotate({ identifier: "StackInstanceFilter" });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(255, __c31, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          StackSetName: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          Filters: S.optional(__S(256, __c32, 0)),
          StackInstanceAccount: S.optional(S.String),
          StackInstanceRegion: S.optional(S.String),
          CallAs: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListStackInstancesInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          StackSetId: S.optional(S.String),
          Region: S.optional(S.String),
          Account: S.optional(S.String),
          StackId: S.optional(S.String),
          Status: S.optional(S.String),
          StatusReason: S.optional(S.String),
          StackInstanceStatus: S.optional(__S(131, __c16, 3)),
          OrganizationalUnitId: S.optional(S.String),
          DriftStatus: S.optional(S.String),
          LastDriftCheckTimestamp: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          LastOperationId: S.optional(S.String),
        }),
      ).annotate({ identifier: "StackInstanceSummary" });
    case 3:
      return S.Array(__S(258, __c32, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Summaries: S.optional(__S(259, __c32, 3)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListStackInstancesOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          StackRefactorId: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListStackRefactorActionsInput",
      });
    case 6:
      return S.Array(__S(27, __c3, 3));
    case 7:
      return S.Array(S.String);
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Action: S.optional(S.String),
          Entity: S.optional(S.String),
          PhysicalResourceId: S.optional(S.String),
          ResourceIdentifier: S.optional(S.String),
          Description: S.optional(S.String),
          Detection: S.optional(S.String),
          DetectionReason: S.optional(S.String),
          TagResources: S.optional(__S(262, __c32, 6)),
          UntagResources: S.optional(__S(263, __c32, 7)),
          ResourceMapping: S.optional(__S(50, __c6, 2)),
        }),
      ).annotate({ identifier: "StackRefactorAction" });
    case 1:
      return S.Array(__S(264, __c33, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          StackRefactorActions: S.optional(__S(265, __c33, 1)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListStackRefactorActionsOutput",
      });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({
          ExecutionStatusFilter: S.optional(__S(267, __c33, 3)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListStackRefactorsInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          StackRefactorId: S.optional(S.String),
          Description: S.optional(S.String),
          ExecutionStatus: S.optional(S.String),
          ExecutionStatusReason: S.optional(S.String),
          Status: S.optional(S.String),
          StatusReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "StackRefactorSummary" });
    case 6:
      return S.Array(__S(269, __c33, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          StackRefactorSummaries: S.optional(__S(270, __c33, 6)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListStackRefactorsOutput" });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ StackName: S.optional(S.String), NextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListStackResourcesInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          StackResourceDriftStatus: S.optional(S.String),
          LastCheckTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "StackResourceDriftInformationSummary",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          LogicalResourceId: S.optional(S.String),
          PhysicalResourceId: S.optional(S.String),
          ResourceType: S.optional(S.String),
          LastUpdatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ResourceStatus: S.optional(S.String),
          ResourceStatusReason: S.optional(S.String),
          DriftInformation: S.optional(__S(273, __c34, 1)),
          ModuleInfo: S.optional(__S(90, __c11, 2)),
        }),
      ).annotate({ identifier: "StackResourceSummary" });
    case 3:
      return S.Array(__S(274, __c34, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          StackResourceSummaries: S.optional(__S(275, __c34, 3)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListStackResourcesOutput" });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          StackStatusFilter: S.optional(__S(277, __c34, 5)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListStacksInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          StackDriftStatus: S.optional(S.String),
          LastCheckTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "StackDriftInformationSummary",
      });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          StackId: S.optional(S.String),
          StackName: S.optional(S.String),
          TemplateDescription: S.optional(S.String),
          CreationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          LastUpdatedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          DeletionTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          StackStatus: S.optional(S.String),
          StackStatusReason: S.optional(S.String),
          ParentId: S.optional(S.String),
          RootId: S.optional(S.String),
          DriftInformation: S.optional(__S(279, __c34, 7)),
          LastOperations: S.optional(__S(159, __c19, 7)),
        }),
      ).annotate({ identifier: "StackSummary" });
    case 1:
      return S.Array(__S(280, __c35, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          StackSummaries: S.optional(__S(281, __c35, 1)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListStacksOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          StackSetName: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          CallAs: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListStackSetAutoDeploymentTargetsInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          OrganizationalUnitId: S.optional(S.String),
          Regions: S.optional(__S(45, __c5, 5)),
        }),
      ).annotate({
        identifier: "StackSetAutoDeploymentTargetSummary",
      });
    case 5:
      return S.Array(__S(284, __c35, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Summaries: S.optional(__S(285, __c35, 5)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListStackSetAutoDeploymentTargetsOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Values: S.optional(S.String) }),
      ).annotate({ identifier: "OperationResultFilter" });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(287, __c35, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          StackSetName: S.optional(S.String),
          OperationId: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          CallAs: S.optional(S.String),
          Filters: S.optional(__S(288, __c36, 0)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListStackSetOperationResultsInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Status: S.optional(S.String), StatusReason: S.optional(S.String) }),
      ).annotate({ identifier: "AccountGateResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Account: S.optional(S.String),
          Region: S.optional(S.String),
          Status: S.optional(S.String),
          StatusReason: S.optional(S.String),
          AccountGateResult: S.optional(__S(290, __c36, 2)),
          OrganizationalUnitId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "StackSetOperationResultSummary",
      });
    case 4:
      return S.Array(__S(291, __c36, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Summaries: S.optional(__S(292, __c36, 4)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListStackSetOperationResultsOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          StackSetName: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          CallAs: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListStackSetOperationsInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          OperationId: S.optional(S.String),
          Action: S.optional(S.String),
          Status: S.optional(S.String),
          CreationTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EndTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          StatusReason: S.optional(S.String),
          StatusDetails: S.optional(__S(168, __c21, 0)),
          OperationPreferences: S.optional(__S(46, __c5, 6)),
        }),
      ).annotate({ identifier: "StackSetOperationSummary" });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(295, __c36, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Summaries: S.optional(__S(296, __c37, 0)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListStackSetOperationsOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          Status: S.optional(S.String),
          CallAs: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListStackSetsInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          StackSetName: S.optional(S.String),
          StackSetId: S.optional(S.String),
          Description: S.optional(S.String),
          Status: S.optional(S.String),
          AutoDeployment: S.optional(__S(57, __c7, 1)),
          PermissionModel: S.optional(S.String),
          DriftStatus: S.optional(S.String),
          LastDriftCheckTimestamp: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          ManagedExecution: S.optional(__S(58, __c7, 2)),
        }),
      ).annotate({ identifier: "StackSetSummary" });
    case 4:
      return S.Array(__S(299, __c37, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Summaries: S.optional(__S(300, __c37, 4)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListStackSetsOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          TypeName: S.optional(S.String),
          TypeArn: S.optional(S.String),
          RegistrationStatusFilter: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListTypeRegistrationsInput",
      });
    case 7:
      return S.Array(S.String);
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RegistrationTokenList: S.optional(__S(303, __c37, 7)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListTypeRegistrationsOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Category: S.optional(S.String),
          PublisherId: S.optional(S.String),
          TypeNamePrefix: S.optional(S.String),
        }),
      ).annotate({ identifier: "TypeFilters" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Visibility: S.optional(S.String),
          ProvisioningType: S.optional(S.String),
          DeprecatedStatus: S.optional(S.String),
          Type: S.optional(S.String),
          Filters: S.optional(__S(305, __c38, 1)),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListTypesInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          TypeName: S.optional(S.String),
          DefaultVersionId: S.optional(S.String),
          TypeArn: S.optional(S.String),
          LastUpdated: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Description: S.optional(S.String),
          PublisherId: S.optional(S.String),
          OriginalTypeName: S.optional(S.String),
          PublicVersionNumber: S.optional(S.String),
          LatestPublicVersion: S.optional(S.String),
          PublisherIdentity: S.optional(S.String),
          PublisherName: S.optional(S.String),
          IsActivated: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "TypeSummary" });
    case 4:
      return S.Array(__S(307, __c38, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          TypeSummaries: S.optional(__S(308, __c38, 4)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListTypesOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          TypeName: S.optional(S.String),
          Arn: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          DeprecatedStatus: S.optional(S.String),
          PublisherId: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListTypeVersionsInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          TypeName: S.optional(S.String),
          VersionId: S.optional(S.String),
          IsDefaultVersion: S.optional(S.Boolean),
          Arn: S.optional(S.String),
          TimeCreated: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Description: S.optional(S.String),
          PublicVersionNumber: S.optional(S.String),
        }),
      ).annotate({ identifier: "TypeVersionSummary" });
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(311, __c38, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          TypeVersionSummaries: S.optional(__S(312, __c39, 0)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListTypeVersionsOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          Arn: S.optional(S.String),
          TypeName: S.optional(S.String),
          PublicVersionNumber: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PublishTypeInput" });
    case 3:
      return S.suspend(() => S.Struct({ PublicTypeArn: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "PublishTypeOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          BearerToken: S.optional(S.String),
          OperationStatus: S.optional(S.String),
          CurrentOperationStatus: S.optional(S.String),
          StatusMessage: S.optional(S.String),
          ErrorCode: S.optional(S.String),
          ResourceModel: S.optional(S.String),
          ClientRequestToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RecordHandlerProgressInput",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "RecordHandlerProgressOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AcceptTermsAndConditions: S.optional(S.Boolean),
          ConnectionArn: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "RegisterPublisherInput" });
    case 7:
      return S.suspend(() => S.Struct({ PublisherId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "RegisterPublisherOutput",
      });
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          TypeName: S.optional(S.String),
          SchemaHandlerPackage: S.optional(S.String),
          LoggingConfig: S.optional(__S(2, __c0, 2)),
          ExecutionRoleArn: S.optional(S.String),
          ClientRequestToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "RegisterTypeInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ RegistrationToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "RegisterTypeOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          StackName: S.optional(S.String),
          RoleARN: S.optional(S.String),
          ClientRequestToken: S.optional(S.String),
          RetainExceptOnCreate: S.optional(S.Boolean),
          DeploymentConfig: S.optional(__S(32, __c4, 0)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "RollbackStackInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ StackId: S.optional(S.String), OperationId: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "RollbackStackOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          StackName: S.optional(S.String),
          StackPolicyBody: S.optional(S.String),
          StackPolicyURL: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "SetStackPolicyInput" });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "SetStackPolicyResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TypeArn: S.optional(S.String),
          Configuration: S.optional(S.String),
          ConfigurationAlias: S.optional(S.String),
          TypeName: S.optional(S.String),
          Type: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SetTypeConfigurationInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ConfigurationArn: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "SetTypeConfigurationOutput",
      });
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Type: S.optional(S.String),
          TypeName: S.optional(S.String),
          VersionId: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SetTypeDefaultVersionInput",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "SetTypeDefaultVersionOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          StackName: S.optional(S.String),
          LogicalResourceId: S.optional(S.String),
          UniqueId: S.optional(S.String),
          Status: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "SignalResourceInput" });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "SignalResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ClientRequestToken: S.optional(S.String),
          ScanFilters: S.optional(__S(122, __c15, 2)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "StartResourceScanInput" });
    case 5:
      return S.suspend(() => S.Struct({ ResourceScanId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "StartResourceScanOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          StackSetName: S.optional(S.String),
          OperationId: S.optional(S.String),
          CallAs: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StopStackSetOperationInput",
      });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "StopStackSetOperationOutput",
      });
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Type: S.optional(S.String),
          TypeName: S.optional(S.String),
          VersionId: S.optional(S.String),
          LogDeliveryBucket: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "TestTypeInput" });
    case 1:
      return S.suspend(() => S.Struct({ TypeVersionArn: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "TestTypeOutput",
      });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({
          GeneratedTemplateName: S.optional(S.String),
          NewGeneratedTemplateName: S.optional(S.String),
          AddResources: S.optional(__S(36, __c4, 4)),
          RemoveResources: S.optional(__S(338, __c42, 2)),
          RefreshAllResources: S.optional(S.Boolean),
          TemplateConfiguration: S.optional(__S(37, __c4, 5)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateGeneratedTemplateInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ GeneratedTemplateId: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "UpdateGeneratedTemplateOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          StackName: S.optional(S.String),
          TemplateBody: S.optional(S.String),
          TemplateURL: S.optional(S.String),
          UsePreviousTemplate: S.optional(S.Boolean),
          StackPolicyDuringUpdateBody: S.optional(S.String),
          StackPolicyDuringUpdateURL: S.optional(S.String),
          Parameters: S.optional(__S(20, __c2, 4)),
          Capabilities: S.optional(__S(21, __c2, 5)),
          ResourceTypes: S.optional(__S(22, __c2, 6)),
          RoleARN: S.optional(S.String),
          RollbackConfiguration: S.optional(__S(25, __c3, 1)),
          StackPolicyBody: S.optional(S.String),
          StackPolicyURL: S.optional(S.String),
          NotificationARNs: S.optional(__S(26, __c3, 2)),
          Tags: S.optional(__S(28, __c3, 4)),
          DisableRollback: S.optional(S.Boolean),
          ClientRequestToken: S.optional(S.String),
          RetainExceptOnCreate: S.optional(S.Boolean),
          DeploymentConfig: S.optional(__S(32, __c4, 0)),
          DisableValidation: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateStackInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ StackId: S.optional(S.String), OperationId: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "UpdateStackOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          StackSetName: S.optional(S.String),
          Accounts: S.optional(__S(42, __c5, 2)),
          DeploymentTargets: S.optional(__S(44, __c5, 4)),
          Regions: S.optional(__S(45, __c5, 5)),
          ParameterOverrides: S.optional(__S(20, __c2, 4)),
          OperationPreferences: S.optional(__S(46, __c5, 6)),
          OperationId: S.optional(S.String).pipe(T.IdempotencyToken()),
          CallAs: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateStackInstancesInput",
      });
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ OperationId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "UpdateStackInstancesOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          StackSetName: S.optional(S.String),
          Description: S.optional(S.String),
          TemplateBody: S.optional(S.String),
          TemplateURL: S.optional(S.String),
          UsePreviousTemplate: S.optional(S.Boolean),
          Parameters: S.optional(__S(20, __c2, 4)),
          Capabilities: S.optional(__S(21, __c2, 5)),
          Tags: S.optional(__S(28, __c3, 4)),
          OperationPreferences: S.optional(__S(46, __c5, 6)),
          AdministrationRoleARN: S.optional(S.String),
          ExecutionRoleName: S.optional(S.String),
          DeploymentTargets: S.optional(__S(44, __c5, 4)),
          PermissionModel: S.optional(S.String),
          AutoDeployment: S.optional(__S(57, __c7, 1)),
          OperationId: S.optional(S.String).pipe(T.IdempotencyToken()),
          Accounts: S.optional(__S(42, __c5, 2)),
          Regions: S.optional(__S(45, __c5, 5)),
          CallAs: S.optional(S.String),
          ManagedExecution: S.optional(__S(58, __c7, 2)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateStackSetInput" });
    case 2:
      return S.suspend(() => S.Struct({ OperationId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "UpdateStackSetOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          EnableTerminationProtection: S.optional(S.Boolean),
          StackName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateTerminationProtectionInput",
      });
    case 4:
      return S.suspend(() => S.Struct({ StackId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "UpdateTerminationProtectionOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ TemplateBody: S.optional(S.String), TemplateURL: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ValidateTemplateInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ParameterKey: S.optional(S.String),
          DefaultValue: S.optional(S.String),
          NoEcho: S.optional(S.Boolean),
          Description: S.optional(S.String),
        }),
      ).annotate({ identifier: "TemplateParameter" });
    case 7:
      return S.Array(__S(350, __c43, 6));
  }
}
function __c44(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Parameters: S.optional(__S(351, __c43, 7)),
          Description: S.optional(S.String),
          Capabilities: S.optional(__S(21, __c2, 5)),
          CapabilitiesReason: S.optional(S.String),
          DeclaredTransforms: S.optional(__S(209, __c26, 1)),
        }).pipe(ns),
      ).annotate({ identifier: "ValidateTemplateOutput" });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
