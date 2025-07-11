import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface ServerlessApplicationRepository {
  createApplication(
    input: CreateApplicationRequest,
  ): Effect.Effect<
    CreateApplicationResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createApplicationVersion(
    input: CreateApplicationVersionRequest,
  ): Effect.Effect<
    CreateApplicationVersionResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createCloudFormationChangeSet(
    input: CreateCloudFormationChangeSetRequest,
  ): Effect.Effect<
    CreateCloudFormationChangeSetResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createCloudFormationTemplate(
    input: CreateCloudFormationTemplateRequest,
  ): Effect.Effect<
    CreateCloudFormationTemplateResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteApplication(
    input: DeleteApplicationRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getApplication(
    input: GetApplicationRequest,
  ): Effect.Effect<
    GetApplicationResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getApplicationPolicy(
    input: GetApplicationPolicyRequest,
  ): Effect.Effect<
    GetApplicationPolicyResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getCloudFormationTemplate(
    input: GetCloudFormationTemplateRequest,
  ): Effect.Effect<
    GetCloudFormationTemplateResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listApplicationDependencies(
    input: ListApplicationDependenciesRequest,
  ): Effect.Effect<
    ListApplicationDependenciesResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listApplications(
    input: ListApplicationsRequest,
  ): Effect.Effect<
    ListApplicationsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError
  >;
  listApplicationVersions(
    input: ListApplicationVersionsRequest,
  ): Effect.Effect<
    ListApplicationVersionsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putApplicationPolicy(
    input: PutApplicationPolicyRequest,
  ): Effect.Effect<
    PutApplicationPolicyResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  unshareApplication(
    input: UnshareApplicationRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateApplication(
    input: UpdateApplicationRequest,
  ): Effect.Effect<
    UpdateApplicationResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
}

export type Serverlessapplicationrepository = ServerlessApplicationRepository;

export type __boolean = boolean;

export type __integer = number;

export type __listOf__string = Array<string>;
export type __listOfApplicationDependencySummary =
  Array<ApplicationDependencySummary>;
export type __listOfApplicationPolicyStatement =
  Array<ApplicationPolicyStatement>;
export type __listOfApplicationSummary = Array<ApplicationSummary>;
export type __listOfCapability = Array<Capability>;
export type __listOfParameterDefinition = Array<ParameterDefinition>;
export type __listOfParameterValue = Array<ParameterValue>;
export type __listOfRollbackTrigger = Array<RollbackTrigger>;
export type __listOfTag = Array<Tag>;
export type __listOfVersionSummary = Array<VersionSummary>;
export type __string = string;

export interface ApplicationDependencySummary {
  ApplicationId: string;
  SemanticVersion: string;
}
export interface ApplicationPolicyStatement {
  Actions: Array<string>;
  PrincipalOrgIDs?: Array<string>;
  Principals: Array<string>;
  StatementId?: string;
}
export interface ApplicationSummary {
  ApplicationId: string;
  Author: string;
  CreationTime?: string;
  Description: string;
  HomePageUrl?: string;
  Labels?: Array<string>;
  Name: string;
  SpdxLicenseId?: string;
}
export declare class BadRequestException extends Data.TaggedError(
  "BadRequestException",
)<{
  readonly ErrorCode?: string;
  readonly Message?: string;
}> {}
export type Capability =
  | "CAPABILITY_IAM"
  | "CAPABILITY_NAMED_IAM"
  | "CAPABILITY_AUTO_EXPAND"
  | "CAPABILITY_RESOURCE_POLICY";
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly ErrorCode?: string;
  readonly Message?: string;
}> {}
export interface CreateApplicationRequest {
  Author: string;
  Description: string;
  HomePageUrl?: string;
  Labels?: Array<string>;
  LicenseBody?: string;
  LicenseUrl?: string;
  Name: string;
  ReadmeBody?: string;
  ReadmeUrl?: string;
  SemanticVersion?: string;
  SourceCodeArchiveUrl?: string;
  SourceCodeUrl?: string;
  SpdxLicenseId?: string;
  TemplateBody?: string;
  TemplateUrl?: string;
}
export interface CreateApplicationResponse {
  ApplicationId?: string;
  Author?: string;
  CreationTime?: string;
  Description?: string;
  HomePageUrl?: string;
  IsVerifiedAuthor?: boolean;
  Labels?: Array<string>;
  LicenseUrl?: string;
  Name?: string;
  ReadmeUrl?: string;
  SpdxLicenseId?: string;
  VerifiedAuthorUrl?: string;
  Version?: Version;
}
export interface CreateApplicationVersionRequest {
  ApplicationId: string;
  SemanticVersion: string;
  SourceCodeArchiveUrl?: string;
  SourceCodeUrl?: string;
  TemplateBody?: string;
  TemplateUrl?: string;
}
export interface CreateApplicationVersionResponse {
  ApplicationId?: string;
  CreationTime?: string;
  ParameterDefinitions?: Array<ParameterDefinition>;
  RequiredCapabilities?: Array<Capability>;
  ResourcesSupported?: boolean;
  SemanticVersion?: string;
  SourceCodeArchiveUrl?: string;
  SourceCodeUrl?: string;
  TemplateUrl?: string;
}
export interface CreateCloudFormationChangeSetRequest {
  ApplicationId: string;
  Capabilities?: Array<string>;
  ChangeSetName?: string;
  ClientToken?: string;
  Description?: string;
  NotificationArns?: Array<string>;
  ParameterOverrides?: Array<ParameterValue>;
  ResourceTypes?: Array<string>;
  RollbackConfiguration?: RollbackConfiguration;
  SemanticVersion?: string;
  StackName: string;
  Tags?: Array<Tag>;
  TemplateId?: string;
}
export interface CreateCloudFormationChangeSetResponse {
  ApplicationId?: string;
  ChangeSetId?: string;
  SemanticVersion?: string;
  StackId?: string;
}
export interface CreateCloudFormationTemplateRequest {
  ApplicationId: string;
  SemanticVersion?: string;
}
export interface CreateCloudFormationTemplateResponse {
  ApplicationId?: string;
  CreationTime?: string;
  ExpirationTime?: string;
  SemanticVersion?: string;
  Status?: Status;
  TemplateId?: string;
  TemplateUrl?: string;
}
export interface DeleteApplicationRequest {
  ApplicationId: string;
}
export declare class ForbiddenException extends Data.TaggedError(
  "ForbiddenException",
)<{
  readonly ErrorCode?: string;
  readonly Message?: string;
}> {}
export interface GetApplicationPolicyRequest {
  ApplicationId: string;
}
export interface GetApplicationPolicyResponse {
  Statements?: Array<ApplicationPolicyStatement>;
}
export interface GetApplicationRequest {
  ApplicationId: string;
  SemanticVersion?: string;
}
export interface GetApplicationResponse {
  ApplicationId?: string;
  Author?: string;
  CreationTime?: string;
  Description?: string;
  HomePageUrl?: string;
  IsVerifiedAuthor?: boolean;
  Labels?: Array<string>;
  LicenseUrl?: string;
  Name?: string;
  ReadmeUrl?: string;
  SpdxLicenseId?: string;
  VerifiedAuthorUrl?: string;
  Version?: Version;
}
export interface GetCloudFormationTemplateRequest {
  ApplicationId: string;
  TemplateId: string;
}
export interface GetCloudFormationTemplateResponse {
  ApplicationId?: string;
  CreationTime?: string;
  ExpirationTime?: string;
  SemanticVersion?: string;
  Status?: Status;
  TemplateId?: string;
  TemplateUrl?: string;
}
export declare class InternalServerErrorException extends Data.TaggedError(
  "InternalServerErrorException",
)<{
  readonly ErrorCode?: string;
  readonly Message?: string;
}> {}
export interface ListApplicationDependenciesRequest {
  ApplicationId: string;
  MaxItems?: number;
  NextToken?: string;
  SemanticVersion?: string;
}
export interface ListApplicationDependenciesResponse {
  Dependencies?: Array<ApplicationDependencySummary>;
  NextToken?: string;
}
export interface ListApplicationsRequest {
  MaxItems?: number;
  NextToken?: string;
}
export interface ListApplicationsResponse {
  Applications?: Array<ApplicationSummary>;
  NextToken?: string;
}
export interface ListApplicationVersionsRequest {
  ApplicationId: string;
  MaxItems?: number;
  NextToken?: string;
}
export interface ListApplicationVersionsResponse {
  NextToken?: string;
  Versions?: Array<VersionSummary>;
}
export type MaxItems = number;

export declare class NotFoundException extends Data.TaggedError(
  "NotFoundException",
)<{
  readonly ErrorCode?: string;
  readonly Message?: string;
}> {}
export interface ParameterDefinition {
  AllowedPattern?: string;
  AllowedValues?: Array<string>;
  ConstraintDescription?: string;
  DefaultValue?: string;
  Description?: string;
  MaxLength?: number;
  MaxValue?: number;
  MinLength?: number;
  MinValue?: number;
  Name: string;
  NoEcho?: boolean;
  ReferencedByResources: Array<string>;
  Type?: string;
}
export interface ParameterValue {
  Name: string;
  Value: string;
}
export interface PutApplicationPolicyRequest {
  ApplicationId: string;
  Statements: Array<ApplicationPolicyStatement>;
}
export interface PutApplicationPolicyResponse {
  Statements?: Array<ApplicationPolicyStatement>;
}
export interface RollbackConfiguration {
  MonitoringTimeInMinutes?: number;
  RollbackTriggers?: Array<RollbackTrigger>;
}
export interface RollbackTrigger {
  Arn: string;
  Type: string;
}
export type Status = "PREPARING" | "ACTIVE" | "EXPIRED";
export interface Tag {
  Key: string;
  Value: string;
}
export declare class TooManyRequestsException extends Data.TaggedError(
  "TooManyRequestsException",
)<{
  readonly ErrorCode?: string;
  readonly Message?: string;
}> {}
export interface UnshareApplicationRequest {
  ApplicationId: string;
  OrganizationId: string;
}
export interface UpdateApplicationRequest {
  ApplicationId: string;
  Author?: string;
  Description?: string;
  HomePageUrl?: string;
  Labels?: Array<string>;
  ReadmeBody?: string;
  ReadmeUrl?: string;
}
export interface UpdateApplicationResponse {
  ApplicationId?: string;
  Author?: string;
  CreationTime?: string;
  Description?: string;
  HomePageUrl?: string;
  IsVerifiedAuthor?: boolean;
  Labels?: Array<string>;
  LicenseUrl?: string;
  Name?: string;
  ReadmeUrl?: string;
  SpdxLicenseId?: string;
  VerifiedAuthorUrl?: string;
  Version?: Version;
}
export interface Version {
  ApplicationId: string;
  CreationTime: string;
  ParameterDefinitions: Array<ParameterDefinition>;
  RequiredCapabilities: Array<Capability>;
  ResourcesSupported: boolean;
  SemanticVersion: string;
  SourceCodeArchiveUrl?: string;
  SourceCodeUrl?: string;
  TemplateUrl: string;
}
export interface VersionSummary {
  ApplicationId: string;
  CreationTime: string;
  SemanticVersion: string;
  SourceCodeUrl?: string;
}
export declare namespace CreateApplication {
  export type Input = CreateApplicationRequest;
  export type Output = CreateApplicationResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateApplicationVersion {
  export type Input = CreateApplicationVersionRequest;
  export type Output = CreateApplicationVersionResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateCloudFormationChangeSet {
  export type Input = CreateCloudFormationChangeSetRequest;
  export type Output = CreateCloudFormationChangeSetResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateCloudFormationTemplate {
  export type Input = CreateCloudFormationTemplateRequest;
  export type Output = CreateCloudFormationTemplateResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteApplication {
  export type Input = DeleteApplicationRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetApplication {
  export type Input = GetApplicationRequest;
  export type Output = GetApplicationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetApplicationPolicy {
  export type Input = GetApplicationPolicyRequest;
  export type Output = GetApplicationPolicyResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetCloudFormationTemplate {
  export type Input = GetCloudFormationTemplateRequest;
  export type Output = GetCloudFormationTemplateResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListApplicationDependencies {
  export type Input = ListApplicationDependenciesRequest;
  export type Output = ListApplicationDependenciesResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListApplications {
  export type Input = ListApplicationsRequest;
  export type Output = ListApplicationsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace ListApplicationVersions {
  export type Input = ListApplicationVersionsRequest;
  export type Output = ListApplicationVersionsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutApplicationPolicy {
  export type Input = PutApplicationPolicyRequest;
  export type Output = PutApplicationPolicyResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UnshareApplication {
  export type Input = UnshareApplicationRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateApplication {
  export type Input = UpdateApplicationRequest;
  export type Output = UpdateApplicationResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}
