import type { Effect, Stream, Data as EffectData } from "effect";
import type { ResponseError } from "@effect/platform/HttpClientError";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class ApiGatewayV2 extends AWSServiceClient {
  createApi(
    input: CreateApiRequest,
  ): Effect.Effect<
    CreateApiResponse,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createApiMapping(
    input: CreateApiMappingRequest,
  ): Effect.Effect<
    CreateApiMappingResponse,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createAuthorizer(
    input: CreateAuthorizerRequest,
  ): Effect.Effect<
    CreateAuthorizerResponse,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createDeployment(
    input: CreateDeploymentRequest,
  ): Effect.Effect<
    CreateDeploymentResponse,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createDomainName(
    input: CreateDomainNameRequest,
  ): Effect.Effect<
    CreateDomainNameResponse,
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createIntegration(
    input: CreateIntegrationRequest,
  ): Effect.Effect<
    CreateIntegrationResult,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createIntegrationResponse(
    input: CreateIntegrationResponseRequest,
  ): Effect.Effect<
    CreateIntegrationResponseResponse,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createModel(
    input: CreateModelRequest,
  ): Effect.Effect<
    CreateModelResponse,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createRoute(
    input: CreateRouteRequest,
  ): Effect.Effect<
    CreateRouteResult,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createRouteResponse(
    input: CreateRouteResponseRequest,
  ): Effect.Effect<
    CreateRouteResponseResponse,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createRoutingRule(
    input: CreateRoutingRuleRequest,
  ): Effect.Effect<
    CreateRoutingRuleResponse,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createStage(
    input: CreateStageRequest,
  ): Effect.Effect<
    CreateStageResponse,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createVpcLink(
    input: CreateVpcLinkRequest,
  ): Effect.Effect<
    CreateVpcLinkResponse,
    BadRequestException | TooManyRequestsException | CommonAwsError
  >;
  deleteAccessLogSettings(
    input: DeleteAccessLogSettingsRequest,
  ): Effect.Effect<
    {},
    NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteApi(
    input: DeleteApiRequest,
  ): Effect.Effect<
    {},
    NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteApiMapping(
    input: DeleteApiMappingRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteAuthorizer(
    input: DeleteAuthorizerRequest,
  ): Effect.Effect<
    {},
    NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteCorsConfiguration(
    input: DeleteCorsConfigurationRequest,
  ): Effect.Effect<
    {},
    NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteDeployment(
    input: DeleteDeploymentRequest,
  ): Effect.Effect<
    {},
    NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteDomainName(
    input: DeleteDomainNameRequest,
  ): Effect.Effect<
    {},
    NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteIntegration(
    input: DeleteIntegrationRequest,
  ): Effect.Effect<
    {},
    NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteIntegrationResponse(
    input: DeleteIntegrationResponseRequest,
  ): Effect.Effect<
    {},
    NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteModel(
    input: DeleteModelRequest,
  ): Effect.Effect<
    {},
    NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteRoute(
    input: DeleteRouteRequest,
  ): Effect.Effect<
    {},
    NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteRouteRequestParameter(
    input: DeleteRouteRequestParameterRequest,
  ): Effect.Effect<
    {},
    NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteRouteResponse(
    input: DeleteRouteResponseRequest,
  ): Effect.Effect<
    {},
    NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteRouteSettings(
    input: DeleteRouteSettingsRequest,
  ): Effect.Effect<
    {},
    NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteRoutingRule(
    input: DeleteRoutingRuleRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteStage(
    input: DeleteStageRequest,
  ): Effect.Effect<
    {},
    NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteVpcLink(
    input: DeleteVpcLinkRequest,
  ): Effect.Effect<
    DeleteVpcLinkResponse,
    NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  exportApi(
    input: ExportApiRequest,
  ): Effect.Effect<
    ExportApiResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getApi(
    input: GetApiRequest,
  ): Effect.Effect<
    GetApiResponse,
    NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getApiMapping(
    input: GetApiMappingRequest,
  ): Effect.Effect<
    GetApiMappingResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getApiMappings(
    input: GetApiMappingsRequest,
  ): Effect.Effect<
    GetApiMappingsResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getApis(
    input: GetApisRequest,
  ): Effect.Effect<
    GetApisResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getAuthorizer(
    input: GetAuthorizerRequest,
  ): Effect.Effect<
    GetAuthorizerResponse,
    NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getAuthorizers(
    input: GetAuthorizersRequest,
  ): Effect.Effect<
    GetAuthorizersResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getDeployment(
    input: GetDeploymentRequest,
  ): Effect.Effect<
    GetDeploymentResponse,
    NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getDeployments(
    input: GetDeploymentsRequest,
  ): Effect.Effect<
    GetDeploymentsResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getDomainName(
    input: GetDomainNameRequest,
  ): Effect.Effect<
    GetDomainNameResponse,
    NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getDomainNames(
    input: GetDomainNamesRequest,
  ): Effect.Effect<
    GetDomainNamesResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getIntegration(
    input: GetIntegrationRequest,
  ): Effect.Effect<
    GetIntegrationResult,
    NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getIntegrationResponse(
    input: GetIntegrationResponseRequest,
  ): Effect.Effect<
    GetIntegrationResponseResponse,
    NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getIntegrationResponses(
    input: GetIntegrationResponsesRequest,
  ): Effect.Effect<
    GetIntegrationResponsesResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getIntegrations(
    input: GetIntegrationsRequest,
  ): Effect.Effect<
    GetIntegrationsResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getModel(
    input: GetModelRequest,
  ): Effect.Effect<
    GetModelResponse,
    NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getModels(
    input: GetModelsRequest,
  ): Effect.Effect<
    GetModelsResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getModelTemplate(
    input: GetModelTemplateRequest,
  ): Effect.Effect<
    GetModelTemplateResponse,
    NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getRoute(
    input: GetRouteRequest,
  ): Effect.Effect<
    GetRouteResult,
    NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getRouteResponse(
    input: GetRouteResponseRequest,
  ): Effect.Effect<
    GetRouteResponseResponse,
    NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getRouteResponses(
    input: GetRouteResponsesRequest,
  ): Effect.Effect<
    GetRouteResponsesResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getRoutes(
    input: GetRoutesRequest,
  ): Effect.Effect<
    GetRoutesResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getRoutingRule(
    input: GetRoutingRuleRequest,
  ): Effect.Effect<
    GetRoutingRuleResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getStage(
    input: GetStageRequest,
  ): Effect.Effect<
    GetStageResponse,
    NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getStages(
    input: GetStagesRequest,
  ): Effect.Effect<
    GetStagesResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getTags(
    input: GetTagsRequest,
  ): Effect.Effect<
    GetTagsResponse,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getVpcLink(
    input: GetVpcLinkRequest,
  ): Effect.Effect<
    GetVpcLinkResponse,
    NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getVpcLinks(
    input: GetVpcLinksRequest,
  ): Effect.Effect<
    GetVpcLinksResponse,
    BadRequestException | TooManyRequestsException | CommonAwsError
  >;
  importApi(
    input: ImportApiRequest,
  ): Effect.Effect<
    ImportApiResponse,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listRoutingRules(
    input: ListRoutingRulesRequest,
  ): Effect.Effect<
    ListRoutingRulesResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putRoutingRule(
    input: PutRoutingRuleRequest,
  ): Effect.Effect<
    PutRoutingRuleResponse,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  reimportApi(
    input: ReimportApiRequest,
  ): Effect.Effect<
    ReimportApiResponse,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  resetAuthorizersCache(
    input: ResetAuthorizersCacheRequest,
  ): Effect.Effect<
    {},
    NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateApi(
    input: UpdateApiRequest,
  ): Effect.Effect<
    UpdateApiResponse,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateApiMapping(
    input: UpdateApiMappingRequest,
  ): Effect.Effect<
    UpdateApiMappingResponse,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateAuthorizer(
    input: UpdateAuthorizerRequest,
  ): Effect.Effect<
    UpdateAuthorizerResponse,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateDeployment(
    input: UpdateDeploymentRequest,
  ): Effect.Effect<
    UpdateDeploymentResponse,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateDomainName(
    input: UpdateDomainNameRequest,
  ): Effect.Effect<
    UpdateDomainNameResponse,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateIntegration(
    input: UpdateIntegrationRequest,
  ): Effect.Effect<
    UpdateIntegrationResult,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateIntegrationResponse(
    input: UpdateIntegrationResponseRequest,
  ): Effect.Effect<
    UpdateIntegrationResponseResponse,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateModel(
    input: UpdateModelRequest,
  ): Effect.Effect<
    UpdateModelResponse,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateRoute(
    input: UpdateRouteRequest,
  ): Effect.Effect<
    UpdateRouteResult,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateRouteResponse(
    input: UpdateRouteResponseRequest,
  ): Effect.Effect<
    UpdateRouteResponseResponse,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateStage(
    input: UpdateStageRequest,
  ): Effect.Effect<
    UpdateStageResponse,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateVpcLink(
    input: UpdateVpcLinkRequest,
  ): Effect.Effect<
    UpdateVpcLinkResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
}

export declare class Apigatewayv2 extends ApiGatewayV2 {}

export type __boolean = boolean;

export type __double = number;

export type __integer = number;

export type __listOf__string = Array<string>;
export type __listOfApi = Array<Api>;
export type __listOfApiMapping = Array<ApiMapping>;
export type __listOfAuthorizer = Array<Authorizer>;
export type __listOfDeployment = Array<Deployment>;
export type __listOfDomainName = Array<DomainName>;
export type __listOfIntegration = Array<Integration>;
export type __listOfIntegrationResponse = Array<IntegrationResponse>;
export type __listOfModel = Array<Model>;
export type __listOfRoute = Array<Route>;
export type __listOfRouteResponse = Array<RouteResponse>;
export type __listOfRoutingRule = Array<RoutingRule>;
export type __listOfRoutingRuleAction = Array<RoutingRuleAction>;
export type __listOfRoutingRuleCondition = Array<RoutingRuleCondition>;
export type __listOfRoutingRuleMatchHeaderValue =
  Array<RoutingRuleMatchHeaderValue>;
export type __listOfSelectionKey = Array<string>;
export type __listOfStage = Array<Stage>;
export type __listOfVpcLink = Array<VpcLink>;
export type __string = string;

export type __timestampIso8601 = Date | string;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export interface AccessLogSettings {
  DestinationArn?: string;
  Format?: string;
}
export interface Api {
  ApiEndpoint?: string;
  ApiGatewayManaged?: boolean;
  ApiId?: string;
  ApiKeySelectionExpression?: string;
  CorsConfiguration?: Cors;
  CreatedDate?: Date | string;
  Description?: string;
  DisableSchemaValidation?: boolean;
  DisableExecuteApiEndpoint?: boolean;
  ImportInfo?: Array<string>;
  IpAddressType?: IpAddressType;
  Name: string;
  ProtocolType: ProtocolType;
  RouteSelectionExpression: string;
  Tags?: Record<string, string>;
  Version?: string;
  Warnings?: Array<string>;
}
export interface ApiMapping {
  ApiId: string;
  ApiMappingId?: string;
  ApiMappingKey?: string;
  Stage: string;
}
export type Arn = string;

export type AuthorizationScopes = Array<string>;
export type AuthorizationType = "NONE" | "AWS_IAM" | "CUSTOM" | "JWT";
export interface Authorizer {
  AuthorizerCredentialsArn?: string;
  AuthorizerId?: string;
  AuthorizerPayloadFormatVersion?: string;
  AuthorizerResultTtlInSeconds?: number;
  AuthorizerType?: AuthorizerType;
  AuthorizerUri?: string;
  EnableSimpleResponses?: boolean;
  IdentitySource?: Array<string>;
  IdentityValidationExpression?: string;
  JwtConfiguration?: JWTConfiguration;
  Name: string;
}
export type AuthorizerType = "REQUEST" | "JWT";
export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly Message?: string;
}> {}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export type ConnectionType = "INTERNET" | "VPC_LINK";
export type ContentHandlingStrategy = "CONVERT_TO_BINARY" | "CONVERT_TO_TEXT";
export interface Cors {
  AllowCredentials?: boolean;
  AllowHeaders?: Array<string>;
  AllowMethods?: Array<string>;
  AllowOrigins?: Array<string>;
  ExposeHeaders?: Array<string>;
  MaxAge?: number;
}
export type CorsHeaderList = Array<string>;
export type CorsMethodList = Array<string>;
export type CorsOriginList = Array<string>;
export interface CreateApiMappingRequest {
  ApiId: string;
  ApiMappingKey?: string;
  DomainName: string;
  Stage: string;
}
export interface CreateApiMappingResponse {
  ApiId?: string;
  ApiMappingId?: string;
  ApiMappingKey?: string;
  Stage?: string;
}
export interface CreateApiRequest {
  ApiKeySelectionExpression?: string;
  CorsConfiguration?: Cors;
  CredentialsArn?: string;
  Description?: string;
  DisableSchemaValidation?: boolean;
  DisableExecuteApiEndpoint?: boolean;
  IpAddressType?: IpAddressType;
  Name: string;
  ProtocolType: ProtocolType;
  RouteKey?: string;
  RouteSelectionExpression?: string;
  Tags?: Record<string, string>;
  Target?: string;
  Version?: string;
}
export interface CreateApiResponse {
  ApiEndpoint?: string;
  ApiGatewayManaged?: boolean;
  ApiId?: string;
  ApiKeySelectionExpression?: string;
  CorsConfiguration?: Cors;
  CreatedDate?: Date | string;
  Description?: string;
  DisableSchemaValidation?: boolean;
  DisableExecuteApiEndpoint?: boolean;
  ImportInfo?: Array<string>;
  IpAddressType?: IpAddressType;
  Name?: string;
  ProtocolType?: ProtocolType;
  RouteSelectionExpression?: string;
  Tags?: Record<string, string>;
  Version?: string;
  Warnings?: Array<string>;
}
export interface CreateAuthorizerRequest {
  ApiId: string;
  AuthorizerCredentialsArn?: string;
  AuthorizerPayloadFormatVersion?: string;
  AuthorizerResultTtlInSeconds?: number;
  AuthorizerType: AuthorizerType;
  AuthorizerUri?: string;
  EnableSimpleResponses?: boolean;
  IdentitySource: Array<string>;
  IdentityValidationExpression?: string;
  JwtConfiguration?: JWTConfiguration;
  Name: string;
}
export interface CreateAuthorizerResponse {
  AuthorizerCredentialsArn?: string;
  AuthorizerId?: string;
  AuthorizerPayloadFormatVersion?: string;
  AuthorizerResultTtlInSeconds?: number;
  AuthorizerType?: AuthorizerType;
  AuthorizerUri?: string;
  EnableSimpleResponses?: boolean;
  IdentitySource?: Array<string>;
  IdentityValidationExpression?: string;
  JwtConfiguration?: JWTConfiguration;
  Name?: string;
}
export interface CreateDeploymentRequest {
  ApiId: string;
  Description?: string;
  StageName?: string;
}
export interface CreateDeploymentResponse {
  AutoDeployed?: boolean;
  CreatedDate?: Date | string;
  DeploymentId?: string;
  DeploymentStatus?: DeploymentStatus;
  DeploymentStatusMessage?: string;
  Description?: string;
}
export interface CreateDomainNameRequest {
  DomainName: string;
  DomainNameConfigurations?: Array<DomainNameConfiguration>;
  MutualTlsAuthentication?: MutualTlsAuthenticationInput;
  RoutingMode?: RoutingMode;
  Tags?: Record<string, string>;
}
export interface CreateDomainNameResponse {
  ApiMappingSelectionExpression?: string;
  DomainName?: string;
  DomainNameArn?: string;
  DomainNameConfigurations?: Array<DomainNameConfiguration>;
  MutualTlsAuthentication?: MutualTlsAuthentication;
  RoutingMode?: RoutingMode;
  Tags?: Record<string, string>;
}
export interface CreateIntegrationRequest {
  ApiId: string;
  ConnectionId?: string;
  ConnectionType?: ConnectionType;
  ContentHandlingStrategy?: ContentHandlingStrategy;
  CredentialsArn?: string;
  Description?: string;
  IntegrationMethod?: string;
  IntegrationSubtype?: string;
  IntegrationType: IntegrationType;
  IntegrationUri?: string;
  PassthroughBehavior?: PassthroughBehavior;
  PayloadFormatVersion?: string;
  RequestParameters?: Record<string, string>;
  RequestTemplates?: Record<string, string>;
  ResponseParameters?: Record<string, Record<string, string>>;
  TemplateSelectionExpression?: string;
  TimeoutInMillis?: number;
  TlsConfig?: TlsConfigInput;
}
export interface CreateIntegrationResponseRequest {
  ApiId: string;
  ContentHandlingStrategy?: ContentHandlingStrategy;
  IntegrationId: string;
  IntegrationResponseKey: string;
  ResponseParameters?: Record<string, string>;
  ResponseTemplates?: Record<string, string>;
  TemplateSelectionExpression?: string;
}
export interface CreateIntegrationResponseResponse {
  ContentHandlingStrategy?: ContentHandlingStrategy;
  IntegrationResponseId?: string;
  IntegrationResponseKey?: string;
  ResponseParameters?: Record<string, string>;
  ResponseTemplates?: Record<string, string>;
  TemplateSelectionExpression?: string;
}
export interface CreateIntegrationResult {
  ApiGatewayManaged?: boolean;
  ConnectionId?: string;
  ConnectionType?: ConnectionType;
  ContentHandlingStrategy?: ContentHandlingStrategy;
  CredentialsArn?: string;
  Description?: string;
  IntegrationId?: string;
  IntegrationMethod?: string;
  IntegrationResponseSelectionExpression?: string;
  IntegrationSubtype?: string;
  IntegrationType?: IntegrationType;
  IntegrationUri?: string;
  PassthroughBehavior?: PassthroughBehavior;
  PayloadFormatVersion?: string;
  RequestParameters?: Record<string, string>;
  RequestTemplates?: Record<string, string>;
  ResponseParameters?: Record<string, Record<string, string>>;
  TemplateSelectionExpression?: string;
  TimeoutInMillis?: number;
  TlsConfig?: TlsConfig;
}
export interface CreateModelRequest {
  ApiId: string;
  ContentType?: string;
  Description?: string;
  Name: string;
  Schema: string;
}
export interface CreateModelResponse {
  ContentType?: string;
  Description?: string;
  ModelId?: string;
  Name?: string;
  Schema?: string;
}
export interface CreateRouteRequest {
  ApiId: string;
  ApiKeyRequired?: boolean;
  AuthorizationScopes?: Array<string>;
  AuthorizationType?: AuthorizationType;
  AuthorizerId?: string;
  ModelSelectionExpression?: string;
  OperationName?: string;
  RequestModels?: Record<string, string>;
  RequestParameters?: Record<string, ParameterConstraints>;
  RouteKey: string;
  RouteResponseSelectionExpression?: string;
  Target?: string;
}
export interface CreateRouteResponseRequest {
  ApiId: string;
  ModelSelectionExpression?: string;
  ResponseModels?: Record<string, string>;
  ResponseParameters?: Record<string, ParameterConstraints>;
  RouteId: string;
  RouteResponseKey: string;
}
export interface CreateRouteResponseResponse {
  ModelSelectionExpression?: string;
  ResponseModels?: Record<string, string>;
  ResponseParameters?: Record<string, ParameterConstraints>;
  RouteResponseId?: string;
  RouteResponseKey?: string;
}
export interface CreateRouteResult {
  ApiGatewayManaged?: boolean;
  ApiKeyRequired?: boolean;
  AuthorizationScopes?: Array<string>;
  AuthorizationType?: AuthorizationType;
  AuthorizerId?: string;
  ModelSelectionExpression?: string;
  OperationName?: string;
  RequestModels?: Record<string, string>;
  RequestParameters?: Record<string, ParameterConstraints>;
  RouteId?: string;
  RouteKey?: string;
  RouteResponseSelectionExpression?: string;
  Target?: string;
}
export interface CreateRoutingRuleRequest {
  Actions: Array<RoutingRuleAction>;
  Conditions: Array<RoutingRuleCondition>;
  DomainName: string;
  DomainNameId?: string;
  Priority: number;
}
export interface CreateRoutingRuleResponse {
  Actions?: Array<RoutingRuleAction>;
  Conditions?: Array<RoutingRuleCondition>;
  Priority?: number;
  RoutingRuleArn?: string;
  RoutingRuleId?: string;
}
export interface CreateStageRequest {
  AccessLogSettings?: AccessLogSettings;
  ApiId: string;
  AutoDeploy?: boolean;
  ClientCertificateId?: string;
  DefaultRouteSettings?: RouteSettings;
  DeploymentId?: string;
  Description?: string;
  RouteSettings?: Record<string, RouteSettings>;
  StageName: string;
  StageVariables?: Record<string, string>;
  Tags?: Record<string, string>;
}
export interface CreateStageResponse {
  AccessLogSettings?: AccessLogSettings;
  ApiGatewayManaged?: boolean;
  AutoDeploy?: boolean;
  ClientCertificateId?: string;
  CreatedDate?: Date | string;
  DefaultRouteSettings?: RouteSettings;
  DeploymentId?: string;
  Description?: string;
  LastDeploymentStatusMessage?: string;
  LastUpdatedDate?: Date | string;
  RouteSettings?: Record<string, RouteSettings>;
  StageName?: string;
  StageVariables?: Record<string, string>;
  Tags?: Record<string, string>;
}
export interface CreateVpcLinkRequest {
  Name: string;
  SecurityGroupIds?: Array<string>;
  SubnetIds: Array<string>;
  Tags?: Record<string, string>;
}
export interface CreateVpcLinkResponse {
  CreatedDate?: Date | string;
  Name?: string;
  SecurityGroupIds?: Array<string>;
  SubnetIds?: Array<string>;
  Tags?: Record<string, string>;
  VpcLinkId?: string;
  VpcLinkStatus?: VpcLinkStatus;
  VpcLinkStatusMessage?: string;
  VpcLinkVersion?: VpcLinkVersion;
}
export interface DeleteAccessLogSettingsRequest {
  ApiId: string;
  StageName: string;
}
export interface DeleteApiMappingRequest {
  ApiMappingId: string;
  DomainName: string;
}
export interface DeleteApiRequest {
  ApiId: string;
}
export interface DeleteAuthorizerRequest {
  ApiId: string;
  AuthorizerId: string;
}
export interface DeleteCorsConfigurationRequest {
  ApiId: string;
}
export interface DeleteDeploymentRequest {
  ApiId: string;
  DeploymentId: string;
}
export interface DeleteDomainNameRequest {
  DomainName: string;
}
export interface DeleteIntegrationRequest {
  ApiId: string;
  IntegrationId: string;
}
export interface DeleteIntegrationResponseRequest {
  ApiId: string;
  IntegrationId: string;
  IntegrationResponseId: string;
}
export interface DeleteModelRequest {
  ApiId: string;
  ModelId: string;
}
export interface DeleteRouteRequest {
  ApiId: string;
  RouteId: string;
}
export interface DeleteRouteRequestParameterRequest {
  ApiId: string;
  RequestParameterKey: string;
  RouteId: string;
}
export interface DeleteRouteResponseRequest {
  ApiId: string;
  RouteId: string;
  RouteResponseId: string;
}
export interface DeleteRouteSettingsRequest {
  ApiId: string;
  RouteKey: string;
  StageName: string;
}
export interface DeleteRoutingRuleRequest {
  DomainName: string;
  DomainNameId?: string;
  RoutingRuleId: string;
}
export interface DeleteStageRequest {
  ApiId: string;
  StageName: string;
}
export interface DeleteVpcLinkRequest {
  VpcLinkId: string;
}
export interface DeleteVpcLinkResponse {}
export interface Deployment {
  AutoDeployed?: boolean;
  CreatedDate?: Date | string;
  DeploymentId?: string;
  DeploymentStatus?: DeploymentStatus;
  DeploymentStatusMessage?: string;
  Description?: string;
}
export type DeploymentStatus = "PENDING" | "FAILED" | "DEPLOYED";
export interface DomainName {
  ApiMappingSelectionExpression?: string;
  DomainName: string;
  DomainNameArn?: string;
  DomainNameConfigurations?: Array<DomainNameConfiguration>;
  MutualTlsAuthentication?: MutualTlsAuthentication;
  RoutingMode?: RoutingMode;
  Tags?: Record<string, string>;
}
export interface DomainNameConfiguration {
  ApiGatewayDomainName?: string;
  CertificateArn?: string;
  CertificateName?: string;
  CertificateUploadDate?: Date | string;
  DomainNameStatus?: DomainNameStatus;
  DomainNameStatusMessage?: string;
  EndpointType?: EndpointType;
  HostedZoneId?: string;
  IpAddressType?: IpAddressType;
  SecurityPolicy?: SecurityPolicy;
  OwnershipVerificationCertificateArn?: string;
}
export type DomainNameConfigurations = Array<DomainNameConfiguration>;
export type DomainNameStatus =
  | "AVAILABLE"
  | "UPDATING"
  | "PENDING_CERTIFICATE_REIMPORT"
  | "PENDING_OWNERSHIP_VERIFICATION";
export type EndpointType = "REGIONAL" | "EDGE";
export interface ExportApiRequest {
  ApiId: string;
  ExportVersion?: string;
  IncludeExtensions?: boolean;
  OutputType: string;
  Specification: string;
  StageName?: string;
}
export interface ExportApiResponse {
  body?: Stream.Stream<Uint8Array, ResponseError>;
}
export type ExportedApi = Uint8Array | string;

export interface GetApiMappingRequest {
  ApiMappingId: string;
  DomainName: string;
}
export interface GetApiMappingResponse {
  ApiId?: string;
  ApiMappingId?: string;
  ApiMappingKey?: string;
  Stage?: string;
}
export interface GetApiMappingsRequest {
  DomainName: string;
  MaxResults?: string;
  NextToken?: string;
}
export interface GetApiMappingsResponse {
  Items?: Array<ApiMapping>;
  NextToken?: string;
}
export interface GetApiRequest {
  ApiId: string;
}
export interface GetApiResponse {
  ApiEndpoint?: string;
  ApiGatewayManaged?: boolean;
  ApiId?: string;
  ApiKeySelectionExpression?: string;
  CorsConfiguration?: Cors;
  CreatedDate?: Date | string;
  Description?: string;
  DisableSchemaValidation?: boolean;
  DisableExecuteApiEndpoint?: boolean;
  ImportInfo?: Array<string>;
  IpAddressType?: IpAddressType;
  Name?: string;
  ProtocolType?: ProtocolType;
  RouteSelectionExpression?: string;
  Tags?: Record<string, string>;
  Version?: string;
  Warnings?: Array<string>;
}
export interface GetApisRequest {
  MaxResults?: string;
  NextToken?: string;
}
export interface GetApisResponse {
  Items?: Array<Api>;
  NextToken?: string;
}
export interface GetAuthorizerRequest {
  ApiId: string;
  AuthorizerId: string;
}
export interface GetAuthorizerResponse {
  AuthorizerCredentialsArn?: string;
  AuthorizerId?: string;
  AuthorizerPayloadFormatVersion?: string;
  AuthorizerResultTtlInSeconds?: number;
  AuthorizerType?: AuthorizerType;
  AuthorizerUri?: string;
  EnableSimpleResponses?: boolean;
  IdentitySource?: Array<string>;
  IdentityValidationExpression?: string;
  JwtConfiguration?: JWTConfiguration;
  Name?: string;
}
export interface GetAuthorizersRequest {
  ApiId: string;
  MaxResults?: string;
  NextToken?: string;
}
export interface GetAuthorizersResponse {
  Items?: Array<Authorizer>;
  NextToken?: string;
}
export interface GetDeploymentRequest {
  ApiId: string;
  DeploymentId: string;
}
export interface GetDeploymentResponse {
  AutoDeployed?: boolean;
  CreatedDate?: Date | string;
  DeploymentId?: string;
  DeploymentStatus?: DeploymentStatus;
  DeploymentStatusMessage?: string;
  Description?: string;
}
export interface GetDeploymentsRequest {
  ApiId: string;
  MaxResults?: string;
  NextToken?: string;
}
export interface GetDeploymentsResponse {
  Items?: Array<Deployment>;
  NextToken?: string;
}
export interface GetDomainNameRequest {
  DomainName: string;
}
export interface GetDomainNameResponse {
  ApiMappingSelectionExpression?: string;
  DomainName?: string;
  DomainNameArn?: string;
  DomainNameConfigurations?: Array<DomainNameConfiguration>;
  MutualTlsAuthentication?: MutualTlsAuthentication;
  RoutingMode?: RoutingMode;
  Tags?: Record<string, string>;
}
export interface GetDomainNamesRequest {
  MaxResults?: string;
  NextToken?: string;
}
export interface GetDomainNamesResponse {
  Items?: Array<DomainName>;
  NextToken?: string;
}
export interface GetIntegrationRequest {
  ApiId: string;
  IntegrationId: string;
}
export interface GetIntegrationResponseRequest {
  ApiId: string;
  IntegrationId: string;
  IntegrationResponseId: string;
}
export interface GetIntegrationResponseResponse {
  ContentHandlingStrategy?: ContentHandlingStrategy;
  IntegrationResponseId?: string;
  IntegrationResponseKey?: string;
  ResponseParameters?: Record<string, string>;
  ResponseTemplates?: Record<string, string>;
  TemplateSelectionExpression?: string;
}
export interface GetIntegrationResponsesRequest {
  ApiId: string;
  IntegrationId: string;
  MaxResults?: string;
  NextToken?: string;
}
export interface GetIntegrationResponsesResponse {
  Items?: Array<IntegrationResponse>;
  NextToken?: string;
}
export interface GetIntegrationResult {
  ApiGatewayManaged?: boolean;
  ConnectionId?: string;
  ConnectionType?: ConnectionType;
  ContentHandlingStrategy?: ContentHandlingStrategy;
  CredentialsArn?: string;
  Description?: string;
  IntegrationId?: string;
  IntegrationMethod?: string;
  IntegrationResponseSelectionExpression?: string;
  IntegrationSubtype?: string;
  IntegrationType?: IntegrationType;
  IntegrationUri?: string;
  PassthroughBehavior?: PassthroughBehavior;
  PayloadFormatVersion?: string;
  RequestParameters?: Record<string, string>;
  RequestTemplates?: Record<string, string>;
  ResponseParameters?: Record<string, Record<string, string>>;
  TemplateSelectionExpression?: string;
  TimeoutInMillis?: number;
  TlsConfig?: TlsConfig;
}
export interface GetIntegrationsRequest {
  ApiId: string;
  MaxResults?: string;
  NextToken?: string;
}
export interface GetIntegrationsResponse {
  Items?: Array<Integration>;
  NextToken?: string;
}
export interface GetModelRequest {
  ApiId: string;
  ModelId: string;
}
export interface GetModelResponse {
  ContentType?: string;
  Description?: string;
  ModelId?: string;
  Name?: string;
  Schema?: string;
}
export interface GetModelsRequest {
  ApiId: string;
  MaxResults?: string;
  NextToken?: string;
}
export interface GetModelsResponse {
  Items?: Array<Model>;
  NextToken?: string;
}
export interface GetModelTemplateRequest {
  ApiId: string;
  ModelId: string;
}
export interface GetModelTemplateResponse {
  Value?: string;
}
export interface GetRouteRequest {
  ApiId: string;
  RouteId: string;
}
export interface GetRouteResponseRequest {
  ApiId: string;
  RouteId: string;
  RouteResponseId: string;
}
export interface GetRouteResponseResponse {
  ModelSelectionExpression?: string;
  ResponseModels?: Record<string, string>;
  ResponseParameters?: Record<string, ParameterConstraints>;
  RouteResponseId?: string;
  RouteResponseKey?: string;
}
export interface GetRouteResponsesRequest {
  ApiId: string;
  MaxResults?: string;
  NextToken?: string;
  RouteId: string;
}
export interface GetRouteResponsesResponse {
  Items?: Array<RouteResponse>;
  NextToken?: string;
}
export interface GetRouteResult {
  ApiGatewayManaged?: boolean;
  ApiKeyRequired?: boolean;
  AuthorizationScopes?: Array<string>;
  AuthorizationType?: AuthorizationType;
  AuthorizerId?: string;
  ModelSelectionExpression?: string;
  OperationName?: string;
  RequestModels?: Record<string, string>;
  RequestParameters?: Record<string, ParameterConstraints>;
  RouteId?: string;
  RouteKey?: string;
  RouteResponseSelectionExpression?: string;
  Target?: string;
}
export interface GetRoutesRequest {
  ApiId: string;
  MaxResults?: string;
  NextToken?: string;
}
export interface GetRoutesResponse {
  Items?: Array<Route>;
  NextToken?: string;
}
export interface GetRoutingRuleRequest {
  DomainName: string;
  DomainNameId?: string;
  RoutingRuleId: string;
}
export interface GetRoutingRuleResponse {
  Actions?: Array<RoutingRuleAction>;
  Conditions?: Array<RoutingRuleCondition>;
  Priority?: number;
  RoutingRuleArn?: string;
  RoutingRuleId?: string;
}
export interface GetStageRequest {
  ApiId: string;
  StageName: string;
}
export interface GetStageResponse {
  AccessLogSettings?: AccessLogSettings;
  ApiGatewayManaged?: boolean;
  AutoDeploy?: boolean;
  ClientCertificateId?: string;
  CreatedDate?: Date | string;
  DefaultRouteSettings?: RouteSettings;
  DeploymentId?: string;
  Description?: string;
  LastDeploymentStatusMessage?: string;
  LastUpdatedDate?: Date | string;
  RouteSettings?: Record<string, RouteSettings>;
  StageName?: string;
  StageVariables?: Record<string, string>;
  Tags?: Record<string, string>;
}
export interface GetStagesRequest {
  ApiId: string;
  MaxResults?: string;
  NextToken?: string;
}
export interface GetStagesResponse {
  Items?: Array<Stage>;
  NextToken?: string;
}
export interface GetTagsRequest {
  ResourceArn: string;
}
export interface GetTagsResponse {
  Tags?: Record<string, string>;
}
export interface GetVpcLinkRequest {
  VpcLinkId: string;
}
export interface GetVpcLinkResponse {
  CreatedDate?: Date | string;
  Name?: string;
  SecurityGroupIds?: Array<string>;
  SubnetIds?: Array<string>;
  Tags?: Record<string, string>;
  VpcLinkId?: string;
  VpcLinkStatus?: VpcLinkStatus;
  VpcLinkStatusMessage?: string;
  VpcLinkVersion?: VpcLinkVersion;
}
export interface GetVpcLinksRequest {
  MaxResults?: string;
  NextToken?: string;
}
export interface GetVpcLinksResponse {
  Items?: Array<VpcLink>;
  NextToken?: string;
}
export type Id = string;

export type IdentitySourceList = Array<string>;
export interface ImportApiRequest {
  Basepath?: string;
  Body: string;
  FailOnWarnings?: boolean;
}
export interface ImportApiResponse {
  ApiEndpoint?: string;
  ApiGatewayManaged?: boolean;
  ApiId?: string;
  ApiKeySelectionExpression?: string;
  CorsConfiguration?: Cors;
  CreatedDate?: Date | string;
  Description?: string;
  DisableSchemaValidation?: boolean;
  DisableExecuteApiEndpoint?: boolean;
  ImportInfo?: Array<string>;
  IpAddressType?: IpAddressType;
  Name?: string;
  ProtocolType?: ProtocolType;
  RouteSelectionExpression?: string;
  Tags?: Record<string, string>;
  Version?: string;
  Warnings?: Array<string>;
}
export type IntegerWithLengthBetween0And3600 = number;

export type IntegerWithLengthBetween50And30000 = number;

export type IntegerWithLengthBetweenMinus1And86400 = number;

export interface Integration {
  ApiGatewayManaged?: boolean;
  ConnectionId?: string;
  ConnectionType?: ConnectionType;
  ContentHandlingStrategy?: ContentHandlingStrategy;
  CredentialsArn?: string;
  Description?: string;
  IntegrationId?: string;
  IntegrationMethod?: string;
  IntegrationResponseSelectionExpression?: string;
  IntegrationSubtype?: string;
  IntegrationType?: IntegrationType;
  IntegrationUri?: string;
  PassthroughBehavior?: PassthroughBehavior;
  PayloadFormatVersion?: string;
  RequestParameters?: Record<string, string>;
  RequestTemplates?: Record<string, string>;
  ResponseParameters?: Record<string, Record<string, string>>;
  TemplateSelectionExpression?: string;
  TimeoutInMillis?: number;
  TlsConfig?: TlsConfig;
}
export type IntegrationParameters = Record<string, string>;
export interface IntegrationResponse {
  ContentHandlingStrategy?: ContentHandlingStrategy;
  IntegrationResponseId?: string;
  IntegrationResponseKey: string;
  ResponseParameters?: Record<string, string>;
  ResponseTemplates?: Record<string, string>;
  TemplateSelectionExpression?: string;
}
export type IntegrationType =
  | "AWS"
  | "HTTP"
  | "MOCK"
  | "HTTP_PROXY"
  | "AWS_PROXY";
export type IpAddressType = "ipv4" | "dualstack";
export interface JWTConfiguration {
  Audience?: Array<string>;
  Issuer?: string;
}
export interface ListRoutingRulesRequest {
  DomainName: string;
  DomainNameId?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListRoutingRulesResponse {
  NextToken?: string;
  RoutingRules?: Array<RoutingRule>;
}
export type LoggingLevel = "ERROR" | "INFO" | "OFF";
export type MaxResults = number;

export interface Model {
  ContentType?: string;
  Description?: string;
  ModelId?: string;
  Name: string;
  Schema?: string;
}
export interface MutualTlsAuthentication {
  TruststoreUri?: string;
  TruststoreVersion?: string;
  TruststoreWarnings?: Array<string>;
}
export interface MutualTlsAuthenticationInput {
  TruststoreUri?: string;
  TruststoreVersion?: string;
}
export type NextToken = string;

export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly Message?: string;
  readonly ResourceType?: string;
}> {}
export interface ParameterConstraints {
  Required?: boolean;
}
export type PassthroughBehavior =
  | "WHEN_NO_MATCH"
  | "NEVER"
  | "WHEN_NO_TEMPLATES";
export type ProtocolType = "WEBSOCKET" | "HTTP";
export interface PutRoutingRuleRequest {
  Actions: Array<RoutingRuleAction>;
  Conditions: Array<RoutingRuleCondition>;
  DomainName: string;
  DomainNameId?: string;
  Priority: number;
  RoutingRuleId: string;
}
export interface PutRoutingRuleResponse {
  Actions?: Array<RoutingRuleAction>;
  Conditions?: Array<RoutingRuleCondition>;
  Priority?: number;
  RoutingRuleArn?: string;
  RoutingRuleId?: string;
}
export interface ReimportApiRequest {
  ApiId: string;
  Basepath?: string;
  Body: string;
  FailOnWarnings?: boolean;
}
export interface ReimportApiResponse {
  ApiEndpoint?: string;
  ApiGatewayManaged?: boolean;
  ApiId?: string;
  ApiKeySelectionExpression?: string;
  CorsConfiguration?: Cors;
  CreatedDate?: Date | string;
  Description?: string;
  DisableSchemaValidation?: boolean;
  DisableExecuteApiEndpoint?: boolean;
  ImportInfo?: Array<string>;
  IpAddressType?: IpAddressType;
  Name?: string;
  ProtocolType?: ProtocolType;
  RouteSelectionExpression?: string;
  Tags?: Record<string, string>;
  Version?: string;
  Warnings?: Array<string>;
}
export interface ResetAuthorizersCacheRequest {
  ApiId: string;
  StageName: string;
}
export type ResponseParameters = Record<string, Record<string, string>>;
export interface Route {
  ApiGatewayManaged?: boolean;
  ApiKeyRequired?: boolean;
  AuthorizationScopes?: Array<string>;
  AuthorizationType?: AuthorizationType;
  AuthorizerId?: string;
  ModelSelectionExpression?: string;
  OperationName?: string;
  RequestModels?: Record<string, string>;
  RequestParameters?: Record<string, ParameterConstraints>;
  RouteId?: string;
  RouteKey: string;
  RouteResponseSelectionExpression?: string;
  Target?: string;
}
export type RouteModels = Record<string, string>;
export type RouteParameters = Record<string, ParameterConstraints>;
export interface RouteResponse {
  ModelSelectionExpression?: string;
  ResponseModels?: Record<string, string>;
  ResponseParameters?: Record<string, ParameterConstraints>;
  RouteResponseId?: string;
  RouteResponseKey: string;
}
export interface RouteSettings {
  DataTraceEnabled?: boolean;
  DetailedMetricsEnabled?: boolean;
  LoggingLevel?: LoggingLevel;
  ThrottlingBurstLimit?: number;
  ThrottlingRateLimit?: number;
}
export type RouteSettingsMap = Record<string, RouteSettings>;
export type RoutingMode =
  | "API_MAPPING_ONLY"
  | "ROUTING_RULE_ONLY"
  | "ROUTING_RULE_THEN_API_MAPPING";
export interface RoutingRule {
  Actions?: Array<RoutingRuleAction>;
  Conditions?: Array<RoutingRuleCondition>;
  Priority?: number;
  RoutingRuleArn?: string;
  RoutingRuleId?: string;
}
export interface RoutingRuleAction {
  InvokeApi: RoutingRuleActionInvokeApi;
}
export interface RoutingRuleActionInvokeApi {
  ApiId: string;
  Stage: string;
  StripBasePath?: boolean;
}
export interface RoutingRuleCondition {
  MatchBasePaths?: RoutingRuleMatchBasePaths;
  MatchHeaders?: RoutingRuleMatchHeaders;
}
export interface RoutingRuleMatchBasePaths {
  AnyOf: Array<string>;
}
export interface RoutingRuleMatchHeaders {
  AnyOf: Array<RoutingRuleMatchHeaderValue>;
}
export interface RoutingRuleMatchHeaderValue {
  Header: string;
  ValueGlob: string;
}
export type RoutingRulePriority = number;

export type SecurityGroupIdList = Array<string>;
export type SecurityPolicy = "TLS_1_0" | "TLS_1_2";
export type SelectionExpression = string;

export type SelectionKey = string;

export interface Stage {
  AccessLogSettings?: AccessLogSettings;
  ApiGatewayManaged?: boolean;
  AutoDeploy?: boolean;
  ClientCertificateId?: string;
  CreatedDate?: Date | string;
  DefaultRouteSettings?: RouteSettings;
  DeploymentId?: string;
  Description?: string;
  LastDeploymentStatusMessage?: string;
  LastUpdatedDate?: Date | string;
  RouteSettings?: Record<string, RouteSettings>;
  StageName: string;
  StageVariables?: Record<string, string>;
  Tags?: Record<string, string>;
}
export type StageVariablesMap = Record<string, string>;
export type StringWithLengthBetween0And1024 = string;

export type StringWithLengthBetween0And2048 = string;

export type StringWithLengthBetween0And32K = string;

export type StringWithLengthBetween1And1024 = string;

export type StringWithLengthBetween1And128 = string;

export type StringWithLengthBetween1And1600 = string;

export type StringWithLengthBetween1And256 = string;

export type StringWithLengthBetween1And512 = string;

export type StringWithLengthBetween1And64 = string;

export type SubnetIdList = Array<string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags?: Record<string, string>;
}
export interface TagResourceResponse {}
export type Tags = Record<string, string>;
export type TemplateMap = Record<string, string>;
export interface TlsConfig {
  ServerNameToVerify?: string;
}
export interface TlsConfigInput {
  ServerNameToVerify?: string;
}
export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly LimitType?: string;
  readonly Message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UpdateApiMappingRequest {
  ApiId: string;
  ApiMappingId: string;
  ApiMappingKey?: string;
  DomainName: string;
  Stage?: string;
}
export interface UpdateApiMappingResponse {
  ApiId?: string;
  ApiMappingId?: string;
  ApiMappingKey?: string;
  Stage?: string;
}
export interface UpdateApiRequest {
  ApiId: string;
  ApiKeySelectionExpression?: string;
  CorsConfiguration?: Cors;
  CredentialsArn?: string;
  Description?: string;
  DisableSchemaValidation?: boolean;
  DisableExecuteApiEndpoint?: boolean;
  IpAddressType?: IpAddressType;
  Name?: string;
  RouteKey?: string;
  RouteSelectionExpression?: string;
  Target?: string;
  Version?: string;
}
export interface UpdateApiResponse {
  ApiEndpoint?: string;
  ApiGatewayManaged?: boolean;
  ApiId?: string;
  ApiKeySelectionExpression?: string;
  CorsConfiguration?: Cors;
  CreatedDate?: Date | string;
  Description?: string;
  DisableSchemaValidation?: boolean;
  DisableExecuteApiEndpoint?: boolean;
  ImportInfo?: Array<string>;
  IpAddressType?: IpAddressType;
  Name?: string;
  ProtocolType?: ProtocolType;
  RouteSelectionExpression?: string;
  Tags?: Record<string, string>;
  Version?: string;
  Warnings?: Array<string>;
}
export interface UpdateAuthorizerRequest {
  ApiId: string;
  AuthorizerCredentialsArn?: string;
  AuthorizerId: string;
  AuthorizerPayloadFormatVersion?: string;
  AuthorizerResultTtlInSeconds?: number;
  AuthorizerType?: AuthorizerType;
  AuthorizerUri?: string;
  EnableSimpleResponses?: boolean;
  IdentitySource?: Array<string>;
  IdentityValidationExpression?: string;
  JwtConfiguration?: JWTConfiguration;
  Name?: string;
}
export interface UpdateAuthorizerResponse {
  AuthorizerCredentialsArn?: string;
  AuthorizerId?: string;
  AuthorizerPayloadFormatVersion?: string;
  AuthorizerResultTtlInSeconds?: number;
  AuthorizerType?: AuthorizerType;
  AuthorizerUri?: string;
  EnableSimpleResponses?: boolean;
  IdentitySource?: Array<string>;
  IdentityValidationExpression?: string;
  JwtConfiguration?: JWTConfiguration;
  Name?: string;
}
export interface UpdateDeploymentRequest {
  ApiId: string;
  DeploymentId: string;
  Description?: string;
}
export interface UpdateDeploymentResponse {
  AutoDeployed?: boolean;
  CreatedDate?: Date | string;
  DeploymentId?: string;
  DeploymentStatus?: DeploymentStatus;
  DeploymentStatusMessage?: string;
  Description?: string;
}
export interface UpdateDomainNameRequest {
  DomainName: string;
  DomainNameConfigurations?: Array<DomainNameConfiguration>;
  MutualTlsAuthentication?: MutualTlsAuthenticationInput;
  RoutingMode?: RoutingMode;
}
export interface UpdateDomainNameResponse {
  ApiMappingSelectionExpression?: string;
  DomainName?: string;
  DomainNameArn?: string;
  DomainNameConfigurations?: Array<DomainNameConfiguration>;
  MutualTlsAuthentication?: MutualTlsAuthentication;
  RoutingMode?: RoutingMode;
  Tags?: Record<string, string>;
}
export interface UpdateIntegrationRequest {
  ApiId: string;
  ConnectionId?: string;
  ConnectionType?: ConnectionType;
  ContentHandlingStrategy?: ContentHandlingStrategy;
  CredentialsArn?: string;
  Description?: string;
  IntegrationId: string;
  IntegrationMethod?: string;
  IntegrationSubtype?: string;
  IntegrationType?: IntegrationType;
  IntegrationUri?: string;
  PassthroughBehavior?: PassthroughBehavior;
  PayloadFormatVersion?: string;
  RequestParameters?: Record<string, string>;
  RequestTemplates?: Record<string, string>;
  ResponseParameters?: Record<string, Record<string, string>>;
  TemplateSelectionExpression?: string;
  TimeoutInMillis?: number;
  TlsConfig?: TlsConfigInput;
}
export interface UpdateIntegrationResponseRequest {
  ApiId: string;
  ContentHandlingStrategy?: ContentHandlingStrategy;
  IntegrationId: string;
  IntegrationResponseId: string;
  IntegrationResponseKey?: string;
  ResponseParameters?: Record<string, string>;
  ResponseTemplates?: Record<string, string>;
  TemplateSelectionExpression?: string;
}
export interface UpdateIntegrationResponseResponse {
  ContentHandlingStrategy?: ContentHandlingStrategy;
  IntegrationResponseId?: string;
  IntegrationResponseKey?: string;
  ResponseParameters?: Record<string, string>;
  ResponseTemplates?: Record<string, string>;
  TemplateSelectionExpression?: string;
}
export interface UpdateIntegrationResult {
  ApiGatewayManaged?: boolean;
  ConnectionId?: string;
  ConnectionType?: ConnectionType;
  ContentHandlingStrategy?: ContentHandlingStrategy;
  CredentialsArn?: string;
  Description?: string;
  IntegrationId?: string;
  IntegrationMethod?: string;
  IntegrationResponseSelectionExpression?: string;
  IntegrationSubtype?: string;
  IntegrationType?: IntegrationType;
  IntegrationUri?: string;
  PassthroughBehavior?: PassthroughBehavior;
  PayloadFormatVersion?: string;
  RequestParameters?: Record<string, string>;
  RequestTemplates?: Record<string, string>;
  ResponseParameters?: Record<string, Record<string, string>>;
  TemplateSelectionExpression?: string;
  TimeoutInMillis?: number;
  TlsConfig?: TlsConfig;
}
export interface UpdateModelRequest {
  ApiId: string;
  ContentType?: string;
  Description?: string;
  ModelId: string;
  Name?: string;
  Schema?: string;
}
export interface UpdateModelResponse {
  ContentType?: string;
  Description?: string;
  ModelId?: string;
  Name?: string;
  Schema?: string;
}
export interface UpdateRouteRequest {
  ApiId: string;
  ApiKeyRequired?: boolean;
  AuthorizationScopes?: Array<string>;
  AuthorizationType?: AuthorizationType;
  AuthorizerId?: string;
  ModelSelectionExpression?: string;
  OperationName?: string;
  RequestModels?: Record<string, string>;
  RequestParameters?: Record<string, ParameterConstraints>;
  RouteId: string;
  RouteKey?: string;
  RouteResponseSelectionExpression?: string;
  Target?: string;
}
export interface UpdateRouteResponseRequest {
  ApiId: string;
  ModelSelectionExpression?: string;
  ResponseModels?: Record<string, string>;
  ResponseParameters?: Record<string, ParameterConstraints>;
  RouteId: string;
  RouteResponseId: string;
  RouteResponseKey?: string;
}
export interface UpdateRouteResponseResponse {
  ModelSelectionExpression?: string;
  ResponseModels?: Record<string, string>;
  ResponseParameters?: Record<string, ParameterConstraints>;
  RouteResponseId?: string;
  RouteResponseKey?: string;
}
export interface UpdateRouteResult {
  ApiGatewayManaged?: boolean;
  ApiKeyRequired?: boolean;
  AuthorizationScopes?: Array<string>;
  AuthorizationType?: AuthorizationType;
  AuthorizerId?: string;
  ModelSelectionExpression?: string;
  OperationName?: string;
  RequestModels?: Record<string, string>;
  RequestParameters?: Record<string, ParameterConstraints>;
  RouteId?: string;
  RouteKey?: string;
  RouteResponseSelectionExpression?: string;
  Target?: string;
}
export interface UpdateStageRequest {
  AccessLogSettings?: AccessLogSettings;
  ApiId: string;
  AutoDeploy?: boolean;
  ClientCertificateId?: string;
  DefaultRouteSettings?: RouteSettings;
  DeploymentId?: string;
  Description?: string;
  RouteSettings?: Record<string, RouteSettings>;
  StageName: string;
  StageVariables?: Record<string, string>;
}
export interface UpdateStageResponse {
  AccessLogSettings?: AccessLogSettings;
  ApiGatewayManaged?: boolean;
  AutoDeploy?: boolean;
  ClientCertificateId?: string;
  CreatedDate?: Date | string;
  DefaultRouteSettings?: RouteSettings;
  DeploymentId?: string;
  Description?: string;
  LastDeploymentStatusMessage?: string;
  LastUpdatedDate?: Date | string;
  RouteSettings?: Record<string, RouteSettings>;
  StageName?: string;
  StageVariables?: Record<string, string>;
  Tags?: Record<string, string>;
}
export interface UpdateVpcLinkRequest {
  Name?: string;
  VpcLinkId: string;
}
export interface UpdateVpcLinkResponse {
  CreatedDate?: Date | string;
  Name?: string;
  SecurityGroupIds?: Array<string>;
  SubnetIds?: Array<string>;
  Tags?: Record<string, string>;
  VpcLinkId?: string;
  VpcLinkStatus?: VpcLinkStatus;
  VpcLinkStatusMessage?: string;
  VpcLinkVersion?: VpcLinkVersion;
}
export type UriWithLengthBetween1And2048 = string;

export interface VpcLink {
  CreatedDate?: Date | string;
  Name: string;
  SecurityGroupIds: Array<string>;
  SubnetIds: Array<string>;
  Tags?: Record<string, string>;
  VpcLinkId: string;
  VpcLinkStatus?: VpcLinkStatus;
  VpcLinkStatusMessage?: string;
  VpcLinkVersion?: VpcLinkVersion;
}
export type VpcLinkStatus =
  | "PENDING"
  | "AVAILABLE"
  | "DELETING"
  | "FAILED"
  | "INACTIVE";
export type VpcLinkVersion = "V2";
export declare namespace CreateApi {
  export type Input = CreateApiRequest;
  export type Output = CreateApiResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateApiMapping {
  export type Input = CreateApiMappingRequest;
  export type Output = CreateApiMappingResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateAuthorizer {
  export type Input = CreateAuthorizerRequest;
  export type Output = CreateAuthorizerResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateDeployment {
  export type Input = CreateDeploymentRequest;
  export type Output = CreateDeploymentResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateDomainName {
  export type Input = CreateDomainNameRequest;
  export type Output = CreateDomainNameResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateIntegration {
  export type Input = CreateIntegrationRequest;
  export type Output = CreateIntegrationResult;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateIntegrationResponse {
  export type Input = CreateIntegrationResponseRequest;
  export type Output = CreateIntegrationResponseResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateModel {
  export type Input = CreateModelRequest;
  export type Output = CreateModelResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateRoute {
  export type Input = CreateRouteRequest;
  export type Output = CreateRouteResult;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateRouteResponse {
  export type Input = CreateRouteResponseRequest;
  export type Output = CreateRouteResponseResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateRoutingRule {
  export type Input = CreateRoutingRuleRequest;
  export type Output = CreateRoutingRuleResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateStage {
  export type Input = CreateStageRequest;
  export type Output = CreateStageResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateVpcLink {
  export type Input = CreateVpcLinkRequest;
  export type Output = CreateVpcLinkResponse;
  export type Error =
    | BadRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteAccessLogSettings {
  export type Input = DeleteAccessLogSettingsRequest;
  export type Output = {};
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteApi {
  export type Input = DeleteApiRequest;
  export type Output = {};
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteApiMapping {
  export type Input = DeleteApiMappingRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteAuthorizer {
  export type Input = DeleteAuthorizerRequest;
  export type Output = {};
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteCorsConfiguration {
  export type Input = DeleteCorsConfigurationRequest;
  export type Output = {};
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteDeployment {
  export type Input = DeleteDeploymentRequest;
  export type Output = {};
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteDomainName {
  export type Input = DeleteDomainNameRequest;
  export type Output = {};
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteIntegration {
  export type Input = DeleteIntegrationRequest;
  export type Output = {};
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteIntegrationResponse {
  export type Input = DeleteIntegrationResponseRequest;
  export type Output = {};
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteModel {
  export type Input = DeleteModelRequest;
  export type Output = {};
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteRoute {
  export type Input = DeleteRouteRequest;
  export type Output = {};
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteRouteRequestParameter {
  export type Input = DeleteRouteRequestParameterRequest;
  export type Output = {};
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteRouteResponse {
  export type Input = DeleteRouteResponseRequest;
  export type Output = {};
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteRouteSettings {
  export type Input = DeleteRouteSettingsRequest;
  export type Output = {};
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteRoutingRule {
  export type Input = DeleteRoutingRuleRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteStage {
  export type Input = DeleteStageRequest;
  export type Output = {};
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteVpcLink {
  export type Input = DeleteVpcLinkRequest;
  export type Output = DeleteVpcLinkResponse;
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ExportApi {
  export type Input = ExportApiRequest;
  export type Output = ExportApiResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetApi {
  export type Input = GetApiRequest;
  export type Output = GetApiResponse;
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetApiMapping {
  export type Input = GetApiMappingRequest;
  export type Output = GetApiMappingResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetApiMappings {
  export type Input = GetApiMappingsRequest;
  export type Output = GetApiMappingsResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetApis {
  export type Input = GetApisRequest;
  export type Output = GetApisResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetAuthorizer {
  export type Input = GetAuthorizerRequest;
  export type Output = GetAuthorizerResponse;
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetAuthorizers {
  export type Input = GetAuthorizersRequest;
  export type Output = GetAuthorizersResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetDeployment {
  export type Input = GetDeploymentRequest;
  export type Output = GetDeploymentResponse;
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetDeployments {
  export type Input = GetDeploymentsRequest;
  export type Output = GetDeploymentsResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetDomainName {
  export type Input = GetDomainNameRequest;
  export type Output = GetDomainNameResponse;
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetDomainNames {
  export type Input = GetDomainNamesRequest;
  export type Output = GetDomainNamesResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetIntegration {
  export type Input = GetIntegrationRequest;
  export type Output = GetIntegrationResult;
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetIntegrationResponse {
  export type Input = GetIntegrationResponseRequest;
  export type Output = GetIntegrationResponseResponse;
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetIntegrationResponses {
  export type Input = GetIntegrationResponsesRequest;
  export type Output = GetIntegrationResponsesResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetIntegrations {
  export type Input = GetIntegrationsRequest;
  export type Output = GetIntegrationsResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetModel {
  export type Input = GetModelRequest;
  export type Output = GetModelResponse;
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetModels {
  export type Input = GetModelsRequest;
  export type Output = GetModelsResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetModelTemplate {
  export type Input = GetModelTemplateRequest;
  export type Output = GetModelTemplateResponse;
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetRoute {
  export type Input = GetRouteRequest;
  export type Output = GetRouteResult;
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetRouteResponse {
  export type Input = GetRouteResponseRequest;
  export type Output = GetRouteResponseResponse;
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetRouteResponses {
  export type Input = GetRouteResponsesRequest;
  export type Output = GetRouteResponsesResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetRoutes {
  export type Input = GetRoutesRequest;
  export type Output = GetRoutesResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetRoutingRule {
  export type Input = GetRoutingRuleRequest;
  export type Output = GetRoutingRuleResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetStage {
  export type Input = GetStageRequest;
  export type Output = GetStageResponse;
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetStages {
  export type Input = GetStagesRequest;
  export type Output = GetStagesResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetTags {
  export type Input = GetTagsRequest;
  export type Output = GetTagsResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetVpcLink {
  export type Input = GetVpcLinkRequest;
  export type Output = GetVpcLinkResponse;
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetVpcLinks {
  export type Input = GetVpcLinksRequest;
  export type Output = GetVpcLinksResponse;
  export type Error =
    | BadRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ImportApi {
  export type Input = ImportApiRequest;
  export type Output = ImportApiResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListRoutingRules {
  export type Input = ListRoutingRulesRequest;
  export type Output = ListRoutingRulesResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutRoutingRule {
  export type Input = PutRoutingRuleRequest;
  export type Output = PutRoutingRuleResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ReimportApi {
  export type Input = ReimportApiRequest;
  export type Output = ReimportApiResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ResetAuthorizersCache {
  export type Input = ResetAuthorizersCacheRequest;
  export type Output = {};
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateApi {
  export type Input = UpdateApiRequest;
  export type Output = UpdateApiResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateApiMapping {
  export type Input = UpdateApiMappingRequest;
  export type Output = UpdateApiMappingResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateAuthorizer {
  export type Input = UpdateAuthorizerRequest;
  export type Output = UpdateAuthorizerResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateDeployment {
  export type Input = UpdateDeploymentRequest;
  export type Output = UpdateDeploymentResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateDomainName {
  export type Input = UpdateDomainNameRequest;
  export type Output = UpdateDomainNameResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateIntegration {
  export type Input = UpdateIntegrationRequest;
  export type Output = UpdateIntegrationResult;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateIntegrationResponse {
  export type Input = UpdateIntegrationResponseRequest;
  export type Output = UpdateIntegrationResponseResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateModel {
  export type Input = UpdateModelRequest;
  export type Output = UpdateModelResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateRoute {
  export type Input = UpdateRouteRequest;
  export type Output = UpdateRouteResult;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateRouteResponse {
  export type Input = UpdateRouteResponseRequest;
  export type Output = UpdateRouteResponseResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateStage {
  export type Input = UpdateStageRequest;
  export type Output = UpdateStageResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateVpcLink {
  export type Input = UpdateVpcLinkRequest;
  export type Output = UpdateVpcLinkResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}
