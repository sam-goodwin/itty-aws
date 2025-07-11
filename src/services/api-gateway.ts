import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface BackplaneControlService {
  createApiKey(
    input: CreateApiKeyRequest,
  ): Effect.Effect<
    ApiKey,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  createAuthorizer(
    input: CreateAuthorizerRequest,
  ): Effect.Effect<
    Authorizer,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  createBasePathMapping(
    input: CreateBasePathMappingRequest,
  ): Effect.Effect<
    BasePathMapping,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  createDeployment(
    input: CreateDeploymentRequest,
  ): Effect.Effect<
    Deployment,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  createDocumentationPart(
    input: CreateDocumentationPartRequest,
  ): Effect.Effect<
    DocumentationPart,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  createDocumentationVersion(
    input: CreateDocumentationVersionRequest,
  ): Effect.Effect<
    DocumentationVersion,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  createDomainName(
    input: CreateDomainNameRequest,
  ): Effect.Effect<
    DomainName,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  createDomainNameAccessAssociation(
    input: CreateDomainNameAccessAssociationRequest,
  ): Effect.Effect<
    DomainNameAccessAssociation,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  createModel(
    input: CreateModelRequest,
  ): Effect.Effect<
    Model,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  createRequestValidator(
    input: CreateRequestValidatorRequest,
  ): Effect.Effect<
    RequestValidator,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  createResource(
    input: CreateResourceRequest,
  ): Effect.Effect<
    Resource,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  createRestApi(
    input: CreateRestApiRequest,
  ): Effect.Effect<
    RestApi,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  createStage(
    input: CreateStageRequest,
  ): Effect.Effect<
    Stage,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  createUsagePlan(
    input: CreateUsagePlanRequest,
  ): Effect.Effect<
    UsagePlan,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  createUsagePlanKey(
    input: CreateUsagePlanKeyRequest,
  ): Effect.Effect<
    UsagePlanKey,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  createVpcLink(
    input: CreateVpcLinkRequest,
  ): Effect.Effect<
    VpcLink,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteApiKey(
    input: DeleteApiKeyRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteAuthorizer(
    input: DeleteAuthorizerRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteBasePathMapping(
    input: DeleteBasePathMappingRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteClientCertificate(
    input: DeleteClientCertificateRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteDeployment(
    input: DeleteDeploymentRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteDocumentationPart(
    input: DeleteDocumentationPartRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteDocumentationVersion(
    input: DeleteDocumentationVersionRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteDomainName(
    input: DeleteDomainNameRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteDomainNameAccessAssociation(
    input: DeleteDomainNameAccessAssociationRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteGatewayResponse(
    input: DeleteGatewayResponseRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteIntegration(
    input: DeleteIntegrationRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteIntegrationResponse(
    input: DeleteIntegrationResponseRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteMethod(
    input: DeleteMethodRequest,
  ): Effect.Effect<
    {},
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteMethodResponse(
    input: DeleteMethodResponseRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteModel(
    input: DeleteModelRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteRequestValidator(
    input: DeleteRequestValidatorRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteResource(
    input: DeleteResourceRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteRestApi(
    input: DeleteRestApiRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteStage(
    input: DeleteStageRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteUsagePlan(
    input: DeleteUsagePlanRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteUsagePlanKey(
    input: DeleteUsagePlanKeyRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteVpcLink(
    input: DeleteVpcLinkRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  flushStageAuthorizersCache(
    input: FlushStageAuthorizersCacheRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  flushStageCache(
    input: FlushStageCacheRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  generateClientCertificate(
    input: GenerateClientCertificateRequest,
  ): Effect.Effect<
    ClientCertificate,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getAccount(
    input: GetAccountRequest,
  ): Effect.Effect<
    Account,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getApiKey(
    input: GetApiKeyRequest,
  ): Effect.Effect<
    ApiKey,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getApiKeys(
    input: GetApiKeysRequest,
  ): Effect.Effect<
    ApiKeys,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getAuthorizer(
    input: GetAuthorizerRequest,
  ): Effect.Effect<
    Authorizer,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getAuthorizers(
    input: GetAuthorizersRequest,
  ): Effect.Effect<
    Authorizers,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getBasePathMapping(
    input: GetBasePathMappingRequest,
  ): Effect.Effect<
    BasePathMapping,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getBasePathMappings(
    input: GetBasePathMappingsRequest,
  ): Effect.Effect<
    BasePathMappings,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getClientCertificate(
    input: GetClientCertificateRequest,
  ): Effect.Effect<
    ClientCertificate,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getClientCertificates(
    input: GetClientCertificatesRequest,
  ): Effect.Effect<
    ClientCertificates,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getDeployment(
    input: GetDeploymentRequest,
  ): Effect.Effect<
    Deployment,
    | BadRequestException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getDeployments(
    input: GetDeploymentsRequest,
  ): Effect.Effect<
    Deployments,
    | BadRequestException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getDocumentationPart(
    input: GetDocumentationPartRequest,
  ): Effect.Effect<
    DocumentationPart,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getDocumentationParts(
    input: GetDocumentationPartsRequest,
  ): Effect.Effect<
    DocumentationParts,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getDocumentationVersion(
    input: GetDocumentationVersionRequest,
  ): Effect.Effect<
    DocumentationVersion,
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getDocumentationVersions(
    input: GetDocumentationVersionsRequest,
  ): Effect.Effect<
    DocumentationVersions,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getDomainName(
    input: GetDomainNameRequest,
  ): Effect.Effect<
    DomainName,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getDomainNameAccessAssociations(
    input: GetDomainNameAccessAssociationsRequest,
  ): Effect.Effect<
    DomainNameAccessAssociations,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getDomainNames(
    input: GetDomainNamesRequest,
  ): Effect.Effect<
    DomainNames,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getExport(
    input: GetExportRequest,
  ): Effect.Effect<
    ExportResponse,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getGatewayResponse(
    input: GetGatewayResponseRequest,
  ): Effect.Effect<
    GatewayResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getGatewayResponses(
    input: GetGatewayResponsesRequest,
  ): Effect.Effect<
    GatewayResponses,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getIntegration(
    input: GetIntegrationRequest,
  ): Effect.Effect<
    Integration,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getIntegrationResponse(
    input: GetIntegrationResponseRequest,
  ): Effect.Effect<
    IntegrationResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getMethod(
    input: GetMethodRequest,
  ): Effect.Effect<
    Method,
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getMethodResponse(
    input: GetMethodResponseRequest,
  ): Effect.Effect<
    MethodResponse,
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getModel(
    input: GetModelRequest,
  ): Effect.Effect<
    Model,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getModels(
    input: GetModelsRequest,
  ): Effect.Effect<
    Models,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getModelTemplate(
    input: GetModelTemplateRequest,
  ): Effect.Effect<
    Template,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getRequestValidator(
    input: GetRequestValidatorRequest,
  ): Effect.Effect<
    RequestValidator,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getRequestValidators(
    input: GetRequestValidatorsRequest,
  ): Effect.Effect<
    RequestValidators,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getResource(
    input: GetResourceRequest,
  ): Effect.Effect<
    Resource,
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getResources(
    input: GetResourcesRequest,
  ): Effect.Effect<
    Resources,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getRestApi(
    input: GetRestApiRequest,
  ): Effect.Effect<
    RestApi,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getRestApis(
    input: GetRestApisRequest,
  ): Effect.Effect<
    RestApis,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getSdk(
    input: GetSdkRequest,
  ): Effect.Effect<
    SdkResponse,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getSdkType(
    input: GetSdkTypeRequest,
  ): Effect.Effect<
    SdkType,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getSdkTypes(
    input: GetSdkTypesRequest,
  ): Effect.Effect<
    SdkTypes,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getStage(
    input: GetStageRequest,
  ): Effect.Effect<
    Stage,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getStages(
    input: GetStagesRequest,
  ): Effect.Effect<
    Stages,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getTags(
    input: GetTagsRequest,
  ): Effect.Effect<
    Tags,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getUsage(
    input: GetUsageRequest,
  ): Effect.Effect<
    Usage,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getUsagePlan(
    input: GetUsagePlanRequest,
  ): Effect.Effect<
    UsagePlan,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getUsagePlanKey(
    input: GetUsagePlanKeyRequest,
  ): Effect.Effect<
    UsagePlanKey,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getUsagePlanKeys(
    input: GetUsagePlanKeysRequest,
  ): Effect.Effect<
    UsagePlanKeys,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getUsagePlans(
    input: GetUsagePlansRequest,
  ): Effect.Effect<
    UsagePlans,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getVpcLink(
    input: GetVpcLinkRequest,
  ): Effect.Effect<
    VpcLink,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getVpcLinks(
    input: GetVpcLinksRequest,
  ): Effect.Effect<
    VpcLinks,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  importApiKeys(
    input: ImportApiKeysRequest,
  ): Effect.Effect<
    ApiKeyIds,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  importDocumentationParts(
    input: ImportDocumentationPartsRequest,
  ): Effect.Effect<
    DocumentationPartIds,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  importRestApi(
    input: ImportRestApiRequest,
  ): Effect.Effect<
    RestApi,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  putGatewayResponse(
    input: PutGatewayResponseRequest,
  ): Effect.Effect<
    GatewayResponse,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  putIntegration(
    input: PutIntegrationRequest,
  ): Effect.Effect<
    Integration,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  putIntegrationResponse(
    input: PutIntegrationResponseRequest,
  ): Effect.Effect<
    IntegrationResponse,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  putMethod(
    input: PutMethodRequest,
  ): Effect.Effect<
    Method,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  putMethodResponse(
    input: PutMethodResponseRequest,
  ): Effect.Effect<
    MethodResponse,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  putRestApi(
    input: PutRestApiRequest,
  ): Effect.Effect<
    RestApi,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  rejectDomainNameAccessAssociation(
    input: RejectDomainNameAccessAssociationRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  testInvokeAuthorizer(
    input: TestInvokeAuthorizerRequest,
  ): Effect.Effect<
    TestInvokeAuthorizerResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  testInvokeMethod(
    input: TestInvokeMethodRequest,
  ): Effect.Effect<
    TestInvokeMethodResponse,
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateAccount(
    input: UpdateAccountRequest,
  ): Effect.Effect<
    Account,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateApiKey(
    input: UpdateApiKeyRequest,
  ): Effect.Effect<
    ApiKey,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateAuthorizer(
    input: UpdateAuthorizerRequest,
  ): Effect.Effect<
    Authorizer,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateBasePathMapping(
    input: UpdateBasePathMappingRequest,
  ): Effect.Effect<
    BasePathMapping,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateClientCertificate(
    input: UpdateClientCertificateRequest,
  ): Effect.Effect<
    ClientCertificate,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateDeployment(
    input: UpdateDeploymentRequest,
  ): Effect.Effect<
    Deployment,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateDocumentationPart(
    input: UpdateDocumentationPartRequest,
  ): Effect.Effect<
    DocumentationPart,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateDocumentationVersion(
    input: UpdateDocumentationVersionRequest,
  ): Effect.Effect<
    DocumentationVersion,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateDomainName(
    input: UpdateDomainNameRequest,
  ): Effect.Effect<
    DomainName,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateGatewayResponse(
    input: UpdateGatewayResponseRequest,
  ): Effect.Effect<
    GatewayResponse,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateIntegration(
    input: UpdateIntegrationRequest,
  ): Effect.Effect<
    Integration,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateIntegrationResponse(
    input: UpdateIntegrationResponseRequest,
  ): Effect.Effect<
    IntegrationResponse,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateMethod(
    input: UpdateMethodRequest,
  ): Effect.Effect<
    Method,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateMethodResponse(
    input: UpdateMethodResponseRequest,
  ): Effect.Effect<
    MethodResponse,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateModel(
    input: UpdateModelRequest,
  ): Effect.Effect<
    Model,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateRequestValidator(
    input: UpdateRequestValidatorRequest,
  ): Effect.Effect<
    RequestValidator,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateResource(
    input: UpdateResourceRequest,
  ): Effect.Effect<
    Resource,
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateRestApi(
    input: UpdateRestApiRequest,
  ): Effect.Effect<
    RestApi,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateStage(
    input: UpdateStageRequest,
  ): Effect.Effect<
    Stage,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateUsage(
    input: UpdateUsageRequest,
  ): Effect.Effect<
    Usage,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateUsagePlan(
    input: UpdateUsagePlanRequest,
  ): Effect.Effect<
    UsagePlan,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateVpcLink(
    input: UpdateVpcLinkRequest,
  ): Effect.Effect<
    VpcLink,
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
}

export type ApiGateway = BackplaneControlService;

export type AccessAssociationSourceType = "VPCE";
export interface AccessLogSettings {
  format?: string;
  destinationArn?: string;
}
export interface Account {
  cloudwatchRoleArn?: string;
  throttleSettings?: ThrottleSettings;
  features?: Array<string>;
  apiKeyVersion?: string;
}
export interface ApiKey {
  id?: string;
  value?: string;
  name?: string;
  customerId?: string;
  description?: string;
  enabled?: boolean;
  createdDate?: Date | string;
  lastUpdatedDate?: Date | string;
  stageKeys?: Array<string>;
  tags?: Record<string, string>;
}
export interface ApiKeyIds {
  ids?: Array<string>;
  warnings?: Array<string>;
}
export interface ApiKeys {
  warnings?: Array<string>;
  items?: Array<ApiKey>;
  position?: string;
}
export type ApiKeysFormat = "csv";
export type ApiKeySourceType = "HEADER" | "AUTHORIZER";
export interface ApiStage {
  apiId?: string;
  stage?: string;
  throttle?: Record<string, ThrottleSettings>;
}
export interface Authorizer {
  id?: string;
  name?: string;
  type?: AuthorizerType;
  providerARNs?: Array<string>;
  authType?: string;
  authorizerUri?: string;
  authorizerCredentials?: string;
  identitySource?: string;
  identityValidationExpression?: string;
  authorizerResultTtlInSeconds?: number;
}
export interface Authorizers {
  items?: Array<Authorizer>;
  position?: string;
}
export type AuthorizerType = "TOKEN" | "REQUEST" | "COGNITO_USER_POOLS";
export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly message?: string;
}> {}
export interface BasePathMapping {
  basePath?: string;
  restApiId?: string;
  stage?: string;
}
export interface BasePathMappings {
  items?: Array<BasePathMapping>;
  position?: string;
}
export type Blob = Uint8Array | string;

export type CacheClusterSize =
  | "SIZE_0_POINT_5_GB"
  | "SIZE_1_POINT_6_GB"
  | "SIZE_6_POINT_1_GB"
  | "SIZE_13_POINT_5_GB"
  | "SIZE_28_POINT_4_GB"
  | "SIZE_58_POINT_2_GB"
  | "SIZE_118_GB"
  | "SIZE_237_GB";
export type CacheClusterStatus =
  | "CREATE_IN_PROGRESS"
  | "AVAILABLE"
  | "DELETE_IN_PROGRESS"
  | "NOT_AVAILABLE"
  | "FLUSH_IN_PROGRESS";
export interface CanarySettings {
  percentTraffic?: number;
  deploymentId?: string;
  stageVariableOverrides?: Record<string, string>;
  useStageCache?: boolean;
}
export interface ClientCertificate {
  clientCertificateId?: string;
  description?: string;
  pemEncodedCertificate?: string;
  createdDate?: Date | string;
  expirationDate?: Date | string;
  tags?: Record<string, string>;
}
export interface ClientCertificates {
  items?: Array<ClientCertificate>;
  position?: string;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export type ConnectionType = "INTERNET" | "VPC_LINK";
export type ContentHandlingStrategy = "CONVERT_TO_BINARY" | "CONVERT_TO_TEXT";
export interface CreateApiKeyRequest {
  name?: string;
  description?: string;
  enabled?: boolean;
  generateDistinctId?: boolean;
  value?: string;
  stageKeys?: Array<StageKey>;
  customerId?: string;
  tags?: Record<string, string>;
}
export interface CreateAuthorizerRequest {
  restApiId: string;
  name: string;
  type: AuthorizerType;
  providerARNs?: Array<string>;
  authType?: string;
  authorizerUri?: string;
  authorizerCredentials?: string;
  identitySource?: string;
  identityValidationExpression?: string;
  authorizerResultTtlInSeconds?: number;
}
export interface CreateBasePathMappingRequest {
  domainName: string;
  domainNameId?: string;
  basePath?: string;
  restApiId: string;
  stage?: string;
}
export interface CreateDeploymentRequest {
  restApiId: string;
  stageName?: string;
  stageDescription?: string;
  description?: string;
  cacheClusterEnabled?: boolean;
  cacheClusterSize?: CacheClusterSize;
  variables?: Record<string, string>;
  canarySettings?: DeploymentCanarySettings;
  tracingEnabled?: boolean;
}
export interface CreateDocumentationPartRequest {
  restApiId: string;
  location: DocumentationPartLocation;
  properties: string;
}
export interface CreateDocumentationVersionRequest {
  restApiId: string;
  documentationVersion: string;
  stageName?: string;
  description?: string;
}
export interface CreateDomainNameAccessAssociationRequest {
  domainNameArn: string;
  accessAssociationSourceType: AccessAssociationSourceType;
  accessAssociationSource: string;
  tags?: Record<string, string>;
}
export interface CreateDomainNameRequest {
  domainName: string;
  certificateName?: string;
  certificateBody?: string;
  certificatePrivateKey?: string;
  certificateChain?: string;
  certificateArn?: string;
  regionalCertificateName?: string;
  regionalCertificateArn?: string;
  endpointConfiguration?: EndpointConfiguration;
  tags?: Record<string, string>;
  securityPolicy?: SecurityPolicy;
  mutualTlsAuthentication?: MutualTlsAuthenticationInput;
  ownershipVerificationCertificateArn?: string;
  policy?: string;
  routingMode?: RoutingMode;
}
export interface CreateModelRequest {
  restApiId: string;
  name: string;
  description?: string;
  schema?: string;
  contentType: string;
}
export interface CreateRequestValidatorRequest {
  restApiId: string;
  name?: string;
  validateRequestBody?: boolean;
  validateRequestParameters?: boolean;
}
export interface CreateResourceRequest {
  restApiId: string;
  parentId: string;
  pathPart: string;
}
export interface CreateRestApiRequest {
  name: string;
  description?: string;
  version?: string;
  cloneFrom?: string;
  binaryMediaTypes?: Array<string>;
  minimumCompressionSize?: number;
  apiKeySource?: ApiKeySourceType;
  endpointConfiguration?: EndpointConfiguration;
  policy?: string;
  tags?: Record<string, string>;
  disableExecuteApiEndpoint?: boolean;
}
export interface CreateStageRequest {
  restApiId: string;
  stageName: string;
  deploymentId: string;
  description?: string;
  cacheClusterEnabled?: boolean;
  cacheClusterSize?: CacheClusterSize;
  variables?: Record<string, string>;
  documentationVersion?: string;
  canarySettings?: CanarySettings;
  tracingEnabled?: boolean;
  tags?: Record<string, string>;
}
export interface CreateUsagePlanKeyRequest {
  usagePlanId: string;
  keyId: string;
  keyType: string;
}
export interface CreateUsagePlanRequest {
  name: string;
  description?: string;
  apiStages?: Array<ApiStage>;
  throttle?: ThrottleSettings;
  quota?: QuotaSettings;
  tags?: Record<string, string>;
}
export interface CreateVpcLinkRequest {
  name: string;
  description?: string;
  targetArns: Array<string>;
  tags?: Record<string, string>;
}
export interface DeleteApiKeyRequest {
  apiKey: string;
}
export interface DeleteAuthorizerRequest {
  restApiId: string;
  authorizerId: string;
}
export interface DeleteBasePathMappingRequest {
  domainName: string;
  domainNameId?: string;
  basePath: string;
}
export interface DeleteClientCertificateRequest {
  clientCertificateId: string;
}
export interface DeleteDeploymentRequest {
  restApiId: string;
  deploymentId: string;
}
export interface DeleteDocumentationPartRequest {
  restApiId: string;
  documentationPartId: string;
}
export interface DeleteDocumentationVersionRequest {
  restApiId: string;
  documentationVersion: string;
}
export interface DeleteDomainNameAccessAssociationRequest {
  domainNameAccessAssociationArn: string;
}
export interface DeleteDomainNameRequest {
  domainName: string;
  domainNameId?: string;
}
export interface DeleteGatewayResponseRequest {
  restApiId: string;
  responseType: GatewayResponseType;
}
export interface DeleteIntegrationRequest {
  restApiId: string;
  resourceId: string;
  httpMethod: string;
}
export interface DeleteIntegrationResponseRequest {
  restApiId: string;
  resourceId: string;
  httpMethod: string;
  statusCode: string;
}
export interface DeleteMethodRequest {
  restApiId: string;
  resourceId: string;
  httpMethod: string;
}
export interface DeleteMethodResponseRequest {
  restApiId: string;
  resourceId: string;
  httpMethod: string;
  statusCode: string;
}
export interface DeleteModelRequest {
  restApiId: string;
  modelName: string;
}
export interface DeleteRequestValidatorRequest {
  restApiId: string;
  requestValidatorId: string;
}
export interface DeleteResourceRequest {
  restApiId: string;
  resourceId: string;
}
export interface DeleteRestApiRequest {
  restApiId: string;
}
export interface DeleteStageRequest {
  restApiId: string;
  stageName: string;
}
export interface DeleteUsagePlanKeyRequest {
  usagePlanId: string;
  keyId: string;
}
export interface DeleteUsagePlanRequest {
  usagePlanId: string;
}
export interface DeleteVpcLinkRequest {
  vpcLinkId: string;
}
export interface Deployment {
  id?: string;
  description?: string;
  createdDate?: Date | string;
  apiSummary?: Record<string, Record<string, MethodSnapshot>>;
}
export interface DeploymentCanarySettings {
  percentTraffic?: number;
  stageVariableOverrides?: Record<string, string>;
  useStageCache?: boolean;
}
export interface Deployments {
  items?: Array<Deployment>;
  position?: string;
}
export interface DocumentationPart {
  id?: string;
  location?: DocumentationPartLocation;
  properties?: string;
}
export interface DocumentationPartIds {
  ids?: Array<string>;
  warnings?: Array<string>;
}
export interface DocumentationPartLocation {
  type: DocumentationPartType;
  path?: string;
  method?: string;
  statusCode?: string;
  name?: string;
}
export type DocumentationPartLocationStatusCode = string;

export interface DocumentationParts {
  items?: Array<DocumentationPart>;
  position?: string;
}
export type DocumentationPartType =
  | "API"
  | "AUTHORIZER"
  | "MODEL"
  | "RESOURCE"
  | "METHOD"
  | "PATH_PARAMETER"
  | "QUERY_PARAMETER"
  | "REQUEST_HEADER"
  | "REQUEST_BODY"
  | "RESPONSE"
  | "RESPONSE_HEADER"
  | "RESPONSE_BODY";
export interface DocumentationVersion {
  version?: string;
  createdDate?: Date | string;
  description?: string;
}
export interface DocumentationVersions {
  items?: Array<DocumentationVersion>;
  position?: string;
}
export interface DomainName {
  domainName?: string;
  domainNameId?: string;
  domainNameArn?: string;
  certificateName?: string;
  certificateArn?: string;
  certificateUploadDate?: Date | string;
  regionalDomainName?: string;
  regionalHostedZoneId?: string;
  regionalCertificateName?: string;
  regionalCertificateArn?: string;
  distributionDomainName?: string;
  distributionHostedZoneId?: string;
  endpointConfiguration?: EndpointConfiguration;
  domainNameStatus?: DomainNameStatus;
  domainNameStatusMessage?: string;
  securityPolicy?: SecurityPolicy;
  tags?: Record<string, string>;
  mutualTlsAuthentication?: MutualTlsAuthentication;
  ownershipVerificationCertificateArn?: string;
  managementPolicy?: string;
  policy?: string;
  routingMode?: RoutingMode;
}
export interface DomainNameAccessAssociation {
  domainNameAccessAssociationArn?: string;
  domainNameArn?: string;
  accessAssociationSourceType?: AccessAssociationSourceType;
  accessAssociationSource?: string;
  tags?: Record<string, string>;
}
export interface DomainNameAccessAssociations {
  items?: Array<DomainNameAccessAssociation>;
  position?: string;
}
export interface DomainNames {
  items?: Array<DomainName>;
  position?: string;
}
export type DomainNameStatus =
  | "AVAILABLE"
  | "UPDATING"
  | "PENDING"
  | "PENDING_CERTIFICATE_REIMPORT"
  | "PENDING_OWNERSHIP_VERIFICATION";
export type Double = number;

export interface EndpointConfiguration {
  types?: Array<EndpointType>;
  ipAddressType?: IpAddressType;
  vpcEndpointIds?: Array<string>;
}
export type EndpointType = "REGIONAL" | "EDGE" | "PRIVATE";
export interface ExportResponse {
  contentType?: string;
  contentDisposition?: string;
  body?: Uint8Array | string;
}
export interface FlushStageAuthorizersCacheRequest {
  restApiId: string;
  stageName: string;
}
export interface FlushStageCacheRequest {
  restApiId: string;
  stageName: string;
}
export interface GatewayResponse {
  responseType?: GatewayResponseType;
  statusCode?: string;
  responseParameters?: Record<string, string>;
  responseTemplates?: Record<string, string>;
  defaultResponse?: boolean;
}
export interface GatewayResponses {
  items?: Array<GatewayResponse>;
  position?: string;
}
export type GatewayResponseType =
  | "DEFAULT_4XX"
  | "DEFAULT_5XX"
  | "RESOURCE_NOT_FOUND"
  | "UNAUTHORIZED"
  | "INVALID_API_KEY"
  | "ACCESS_DENIED"
  | "AUTHORIZER_FAILURE"
  | "AUTHORIZER_CONFIGURATION_ERROR"
  | "INVALID_SIGNATURE"
  | "EXPIRED_TOKEN"
  | "MISSING_AUTHENTICATION_TOKEN"
  | "INTEGRATION_FAILURE"
  | "INTEGRATION_TIMEOUT"
  | "API_CONFIGURATION_ERROR"
  | "UNSUPPORTED_MEDIA_TYPE"
  | "BAD_REQUEST_PARAMETERS"
  | "BAD_REQUEST_BODY"
  | "REQUEST_TOO_LARGE"
  | "THROTTLED"
  | "QUOTA_EXCEEDED"
  | "WAF_FILTERED";
export interface GenerateClientCertificateRequest {
  description?: string;
  tags?: Record<string, string>;
}
export interface GetAccountRequest {}
export interface GetApiKeyRequest {
  apiKey: string;
  includeValue?: boolean;
}
export interface GetApiKeysRequest {
  position?: string;
  limit?: number;
  nameQuery?: string;
  customerId?: string;
  includeValues?: boolean;
}
export interface GetAuthorizerRequest {
  restApiId: string;
  authorizerId: string;
}
export interface GetAuthorizersRequest {
  restApiId: string;
  position?: string;
  limit?: number;
}
export interface GetBasePathMappingRequest {
  domainName: string;
  domainNameId?: string;
  basePath: string;
}
export interface GetBasePathMappingsRequest {
  domainName: string;
  domainNameId?: string;
  position?: string;
  limit?: number;
}
export interface GetClientCertificateRequest {
  clientCertificateId: string;
}
export interface GetClientCertificatesRequest {
  position?: string;
  limit?: number;
}
export interface GetDeploymentRequest {
  restApiId: string;
  deploymentId: string;
  embed?: Array<string>;
}
export interface GetDeploymentsRequest {
  restApiId: string;
  position?: string;
  limit?: number;
}
export interface GetDocumentationPartRequest {
  restApiId: string;
  documentationPartId: string;
}
export interface GetDocumentationPartsRequest {
  restApiId: string;
  type?: DocumentationPartType;
  nameQuery?: string;
  path?: string;
  position?: string;
  limit?: number;
  locationStatus?: LocationStatusType;
}
export interface GetDocumentationVersionRequest {
  restApiId: string;
  documentationVersion: string;
}
export interface GetDocumentationVersionsRequest {
  restApiId: string;
  position?: string;
  limit?: number;
}
export interface GetDomainNameAccessAssociationsRequest {
  position?: string;
  limit?: number;
  resourceOwner?: ResourceOwner;
}
export interface GetDomainNameRequest {
  domainName: string;
  domainNameId?: string;
}
export interface GetDomainNamesRequest {
  position?: string;
  limit?: number;
  resourceOwner?: ResourceOwner;
}
export interface GetExportRequest {
  restApiId: string;
  stageName: string;
  exportType: string;
  parameters?: Record<string, string>;
  accepts?: string;
}
export interface GetGatewayResponseRequest {
  restApiId: string;
  responseType: GatewayResponseType;
}
export interface GetGatewayResponsesRequest {
  restApiId: string;
  position?: string;
  limit?: number;
}
export interface GetIntegrationRequest {
  restApiId: string;
  resourceId: string;
  httpMethod: string;
}
export interface GetIntegrationResponseRequest {
  restApiId: string;
  resourceId: string;
  httpMethod: string;
  statusCode: string;
}
export interface GetMethodRequest {
  restApiId: string;
  resourceId: string;
  httpMethod: string;
}
export interface GetMethodResponseRequest {
  restApiId: string;
  resourceId: string;
  httpMethod: string;
  statusCode: string;
}
export interface GetModelRequest {
  restApiId: string;
  modelName: string;
  flatten?: boolean;
}
export interface GetModelsRequest {
  restApiId: string;
  position?: string;
  limit?: number;
}
export interface GetModelTemplateRequest {
  restApiId: string;
  modelName: string;
}
export interface GetRequestValidatorRequest {
  restApiId: string;
  requestValidatorId: string;
}
export interface GetRequestValidatorsRequest {
  restApiId: string;
  position?: string;
  limit?: number;
}
export interface GetResourceRequest {
  restApiId: string;
  resourceId: string;
  embed?: Array<string>;
}
export interface GetResourcesRequest {
  restApiId: string;
  position?: string;
  limit?: number;
  embed?: Array<string>;
}
export interface GetRestApiRequest {
  restApiId: string;
}
export interface GetRestApisRequest {
  position?: string;
  limit?: number;
}
export interface GetSdkRequest {
  restApiId: string;
  stageName: string;
  sdkType: string;
  parameters?: Record<string, string>;
}
export interface GetSdkTypeRequest {
  id: string;
}
export interface GetSdkTypesRequest {
  position?: string;
  limit?: number;
}
export interface GetStageRequest {
  restApiId: string;
  stageName: string;
}
export interface GetStagesRequest {
  restApiId: string;
  deploymentId?: string;
}
export interface GetTagsRequest {
  resourceArn: string;
  position?: string;
  limit?: number;
}
export interface GetUsagePlanKeyRequest {
  usagePlanId: string;
  keyId: string;
}
export interface GetUsagePlanKeysRequest {
  usagePlanId: string;
  position?: string;
  limit?: number;
  nameQuery?: string;
}
export interface GetUsagePlanRequest {
  usagePlanId: string;
}
export interface GetUsagePlansRequest {
  position?: string;
  keyId?: string;
  limit?: number;
}
export interface GetUsageRequest {
  usagePlanId: string;
  keyId?: string;
  startDate: string;
  endDate: string;
  position?: string;
  limit?: number;
}
export interface GetVpcLinkRequest {
  vpcLinkId: string;
}
export interface GetVpcLinksRequest {
  position?: string;
  limit?: number;
}
export interface ImportApiKeysRequest {
  body: Uint8Array | string;
  format: ApiKeysFormat;
  failOnWarnings?: boolean;
}
export interface ImportDocumentationPartsRequest {
  restApiId: string;
  mode?: PutMode;
  failOnWarnings?: boolean;
  body: Uint8Array | string;
}
export interface ImportRestApiRequest {
  failOnWarnings?: boolean;
  parameters?: Record<string, string>;
  body: Uint8Array | string;
}
export type Integer = number;

export interface Integration {
  type?: IntegrationType;
  httpMethod?: string;
  uri?: string;
  connectionType?: ConnectionType;
  connectionId?: string;
  credentials?: string;
  requestParameters?: Record<string, string>;
  requestTemplates?: Record<string, string>;
  passthroughBehavior?: string;
  contentHandling?: ContentHandlingStrategy;
  timeoutInMillis?: number;
  cacheNamespace?: string;
  cacheKeyParameters?: Array<string>;
  integrationResponses?: Record<string, IntegrationResponse>;
  tlsConfig?: TlsConfig;
}
export interface IntegrationResponse {
  statusCode?: string;
  selectionPattern?: string;
  responseParameters?: Record<string, string>;
  responseTemplates?: Record<string, string>;
  contentHandling?: ContentHandlingStrategy;
}
export type IntegrationType =
  | "HTTP"
  | "AWS"
  | "MOCK"
  | "HTTP_PROXY"
  | "AWS_PROXY";
export type IpAddressType = "ipv4" | "dualstack";
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly retryAfterSeconds?: string;
  readonly message?: string;
}> {}
export type ListOfApiKey = Array<ApiKey>;
export type ListOfApiStage = Array<ApiStage>;
export type ListOfARNs = Array<string>;
export type ListOfAuthorizer = Array<Authorizer>;
export type ListOfBasePathMapping = Array<BasePathMapping>;
export type ListOfClientCertificate = Array<ClientCertificate>;
export type ListOfDeployment = Array<Deployment>;
export type ListOfDocumentationPart = Array<DocumentationPart>;
export type ListOfDocumentationVersion = Array<DocumentationVersion>;
export type ListOfDomainName = Array<DomainName>;
export type ListOfDomainNameAccessAssociation =
  Array<DomainNameAccessAssociation>;
export type ListOfEndpointType = Array<EndpointType>;
export type ListOfGatewayResponse = Array<GatewayResponse>;
export type ListOfLong = Array<number>;
export type ListOfModel = Array<Model>;
export type ListOfPatchOperation = Array<PatchOperation>;
export type ListOfRequestValidator = Array<RequestValidator>;
export type ListOfResource = Array<Resource>;
export type ListOfRestApi = Array<RestApi>;
export type ListOfSdkConfigurationProperty = Array<SdkConfigurationProperty>;
export type ListOfSdkType = Array<SdkType>;
export type ListOfStage = Array<Stage>;
export type ListOfStageKeys = Array<StageKey>;
export type ListOfString = Array<string>;
export type ListOfUsage = Array<Array<number>>;
export type ListOfUsagePlan = Array<UsagePlan>;
export type ListOfUsagePlanKey = Array<UsagePlanKey>;
export type ListOfVpcLink = Array<VpcLink>;
export type LocationStatusType = "DOCUMENTED" | "UNDOCUMENTED";
export type Long = number;

export type MapOfApiStageThrottleSettings = Record<string, ThrottleSettings>;
export type MapOfIntegrationResponse = Record<string, IntegrationResponse>;
export type MapOfKeyUsages = Record<string, Array<Array<number>>>;
export type MapOfMethod = Record<string, Method>;
export type MapOfMethodResponse = Record<string, MethodResponse>;
export type MapOfMethodSettings = Record<string, MethodSetting>;
export type MapOfMethodSnapshot = Record<string, MethodSnapshot>;
export type MapOfStringToBoolean = Record<string, boolean>;
export type MapOfStringToList = Record<string, Array<string>>;
export type MapOfStringToString = Record<string, string>;
export interface Method {
  httpMethod?: string;
  authorizationType?: string;
  authorizerId?: string;
  apiKeyRequired?: boolean;
  requestValidatorId?: string;
  operationName?: string;
  requestParameters?: Record<string, boolean>;
  requestModels?: Record<string, string>;
  methodResponses?: Record<string, MethodResponse>;
  methodIntegration?: Integration;
  authorizationScopes?: Array<string>;
}
export interface MethodResponse {
  statusCode?: string;
  responseParameters?: Record<string, boolean>;
  responseModels?: Record<string, string>;
}
export interface MethodSetting {
  metricsEnabled?: boolean;
  loggingLevel?: string;
  dataTraceEnabled?: boolean;
  throttlingBurstLimit?: number;
  throttlingRateLimit?: number;
  cachingEnabled?: boolean;
  cacheTtlInSeconds?: number;
  cacheDataEncrypted?: boolean;
  requireAuthorizationForCacheControl?: boolean;
  unauthorizedCacheControlHeaderStrategy?: UnauthorizedCacheControlHeaderStrategy;
}
export interface MethodSnapshot {
  authorizationType?: string;
  apiKeyRequired?: boolean;
}
export interface Model {
  id?: string;
  name?: string;
  description?: string;
  schema?: string;
  contentType?: string;
}
export interface Models {
  items?: Array<Model>;
  position?: string;
}
export interface MutualTlsAuthentication {
  truststoreUri?: string;
  truststoreVersion?: string;
  truststoreWarnings?: Array<string>;
}
export interface MutualTlsAuthenticationInput {
  truststoreUri?: string;
  truststoreVersion?: string;
}
export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly message?: string;
}> {}
export type NullableBoolean = boolean;

export type NullableInteger = number;

export type Op = "add" | "remove" | "replace" | "move" | "copy" | "test";
export interface PatchOperation {
  op?: Op;
  path?: string;
  value?: string;
  from?: string;
}
export type PathToMapOfMethodSnapshot = Record<
  string,
  Record<string, MethodSnapshot>
>;
export type ProviderARN = string;

export interface PutGatewayResponseRequest {
  restApiId: string;
  responseType: GatewayResponseType;
  statusCode?: string;
  responseParameters?: Record<string, string>;
  responseTemplates?: Record<string, string>;
}
export interface PutIntegrationRequest {
  restApiId: string;
  resourceId: string;
  httpMethod: string;
  type: IntegrationType;
  integrationHttpMethod?: string;
  uri?: string;
  connectionType?: ConnectionType;
  connectionId?: string;
  credentials?: string;
  requestParameters?: Record<string, string>;
  requestTemplates?: Record<string, string>;
  passthroughBehavior?: string;
  cacheNamespace?: string;
  cacheKeyParameters?: Array<string>;
  contentHandling?: ContentHandlingStrategy;
  timeoutInMillis?: number;
  tlsConfig?: TlsConfig;
}
export interface PutIntegrationResponseRequest {
  restApiId: string;
  resourceId: string;
  httpMethod: string;
  statusCode: string;
  selectionPattern?: string;
  responseParameters?: Record<string, string>;
  responseTemplates?: Record<string, string>;
  contentHandling?: ContentHandlingStrategy;
}
export interface PutMethodRequest {
  restApiId: string;
  resourceId: string;
  httpMethod: string;
  authorizationType: string;
  authorizerId?: string;
  apiKeyRequired?: boolean;
  operationName?: string;
  requestParameters?: Record<string, boolean>;
  requestModels?: Record<string, string>;
  requestValidatorId?: string;
  authorizationScopes?: Array<string>;
}
export interface PutMethodResponseRequest {
  restApiId: string;
  resourceId: string;
  httpMethod: string;
  statusCode: string;
  responseParameters?: Record<string, boolean>;
  responseModels?: Record<string, string>;
}
export type PutMode = "Merge" | "Overwrite";
export interface PutRestApiRequest {
  restApiId: string;
  mode?: PutMode;
  failOnWarnings?: boolean;
  parameters?: Record<string, string>;
  body: Uint8Array | string;
}
export type QuotaPeriodType = "DAY" | "WEEK" | "MONTH";
export interface QuotaSettings {
  limit?: number;
  offset?: number;
  period?: QuotaPeriodType;
}
export interface RejectDomainNameAccessAssociationRequest {
  domainNameAccessAssociationArn: string;
  domainNameArn: string;
}
export interface RequestValidator {
  id?: string;
  name?: string;
  validateRequestBody?: boolean;
  validateRequestParameters?: boolean;
}
export interface RequestValidators {
  items?: Array<RequestValidator>;
  position?: string;
}
export interface Resource {
  id?: string;
  parentId?: string;
  pathPart?: string;
  path?: string;
  resourceMethods?: Record<string, Method>;
}
export type ResourceOwner = "SELF" | "OTHER_ACCOUNTS";
export interface Resources {
  items?: Array<Resource>;
  position?: string;
}
export interface RestApi {
  id?: string;
  name?: string;
  description?: string;
  createdDate?: Date | string;
  version?: string;
  warnings?: Array<string>;
  binaryMediaTypes?: Array<string>;
  minimumCompressionSize?: number;
  apiKeySource?: ApiKeySourceType;
  endpointConfiguration?: EndpointConfiguration;
  policy?: string;
  tags?: Record<string, string>;
  disableExecuteApiEndpoint?: boolean;
  rootResourceId?: string;
}
export interface RestApis {
  items?: Array<RestApi>;
  position?: string;
}
export type RoutingMode =
  | "BASE_PATH_MAPPING_ONLY"
  | "ROUTING_RULE_ONLY"
  | "ROUTING_RULE_THEN_BASE_PATH_MAPPING";
export interface SdkConfigurationProperty {
  name?: string;
  friendlyName?: string;
  description?: string;
  required?: boolean;
  defaultValue?: string;
}
export interface SdkResponse {
  contentType?: string;
  contentDisposition?: string;
  body?: Uint8Array | string;
}
export interface SdkType {
  id?: string;
  friendlyName?: string;
  description?: string;
  configurationProperties?: Array<SdkConfigurationProperty>;
}
export interface SdkTypes {
  items?: Array<SdkType>;
}
export type SecurityPolicy = "TLS_1_0" | "TLS_1_2";
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly retryAfterSeconds?: string;
  readonly message?: string;
}> {}
export interface Stage {
  deploymentId?: string;
  clientCertificateId?: string;
  stageName?: string;
  description?: string;
  cacheClusterEnabled?: boolean;
  cacheClusterSize?: CacheClusterSize;
  cacheClusterStatus?: CacheClusterStatus;
  methodSettings?: Record<string, MethodSetting>;
  variables?: Record<string, string>;
  documentationVersion?: string;
  accessLogSettings?: AccessLogSettings;
  canarySettings?: CanarySettings;
  tracingEnabled?: boolean;
  webAclArn?: string;
  tags?: Record<string, string>;
  createdDate?: Date | string;
  lastUpdatedDate?: Date | string;
}
export interface StageKey {
  restApiId?: string;
  stageName?: string;
}
export interface Stages {
  item?: Array<Stage>;
}
export type StatusCode = string;

export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface Tags {
  tags?: Record<string, string>;
}
export interface Template {
  value?: string;
}
export interface TestInvokeAuthorizerRequest {
  restApiId: string;
  authorizerId: string;
  headers?: Record<string, string>;
  multiValueHeaders?: Record<string, Array<string>>;
  pathWithQueryString?: string;
  body?: string;
  stageVariables?: Record<string, string>;
  additionalContext?: Record<string, string>;
}
export interface TestInvokeAuthorizerResponse {
  clientStatus?: number;
  log?: string;
  latency?: number;
  principalId?: string;
  policy?: string;
  authorization?: Record<string, Array<string>>;
  claims?: Record<string, string>;
}
export interface TestInvokeMethodRequest {
  restApiId: string;
  resourceId: string;
  httpMethod: string;
  pathWithQueryString?: string;
  body?: string;
  headers?: Record<string, string>;
  multiValueHeaders?: Record<string, Array<string>>;
  clientCertificateId?: string;
  stageVariables?: Record<string, string>;
}
export interface TestInvokeMethodResponse {
  status?: number;
  body?: string;
  headers?: Record<string, string>;
  multiValueHeaders?: Record<string, Array<string>>;
  log?: string;
  latency?: number;
}
export interface ThrottleSettings {
  burstLimit?: number;
  rateLimit?: number;
}
export type Timestamp = Date | string;

export interface TlsConfig {
  insecureSkipVerification?: boolean;
}
export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly retryAfterSeconds?: string;
  readonly message?: string;
}> {}
export type UnauthorizedCacheControlHeaderStrategy =
  | "FAIL_WITH_403"
  | "SUCCEED_WITH_RESPONSE_HEADER"
  | "SUCCEED_WITHOUT_RESPONSE_HEADER";
export declare class UnauthorizedException extends EffectData.TaggedError(
  "UnauthorizedException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UpdateAccountRequest {
  patchOperations?: Array<PatchOperation>;
}
export interface UpdateApiKeyRequest {
  apiKey: string;
  patchOperations?: Array<PatchOperation>;
}
export interface UpdateAuthorizerRequest {
  restApiId: string;
  authorizerId: string;
  patchOperations?: Array<PatchOperation>;
}
export interface UpdateBasePathMappingRequest {
  domainName: string;
  domainNameId?: string;
  basePath: string;
  patchOperations?: Array<PatchOperation>;
}
export interface UpdateClientCertificateRequest {
  clientCertificateId: string;
  patchOperations?: Array<PatchOperation>;
}
export interface UpdateDeploymentRequest {
  restApiId: string;
  deploymentId: string;
  patchOperations?: Array<PatchOperation>;
}
export interface UpdateDocumentationPartRequest {
  restApiId: string;
  documentationPartId: string;
  patchOperations?: Array<PatchOperation>;
}
export interface UpdateDocumentationVersionRequest {
  restApiId: string;
  documentationVersion: string;
  patchOperations?: Array<PatchOperation>;
}
export interface UpdateDomainNameRequest {
  domainName: string;
  domainNameId?: string;
  patchOperations?: Array<PatchOperation>;
}
export interface UpdateGatewayResponseRequest {
  restApiId: string;
  responseType: GatewayResponseType;
  patchOperations?: Array<PatchOperation>;
}
export interface UpdateIntegrationRequest {
  restApiId: string;
  resourceId: string;
  httpMethod: string;
  patchOperations?: Array<PatchOperation>;
}
export interface UpdateIntegrationResponseRequest {
  restApiId: string;
  resourceId: string;
  httpMethod: string;
  statusCode: string;
  patchOperations?: Array<PatchOperation>;
}
export interface UpdateMethodRequest {
  restApiId: string;
  resourceId: string;
  httpMethod: string;
  patchOperations?: Array<PatchOperation>;
}
export interface UpdateMethodResponseRequest {
  restApiId: string;
  resourceId: string;
  httpMethod: string;
  statusCode: string;
  patchOperations?: Array<PatchOperation>;
}
export interface UpdateModelRequest {
  restApiId: string;
  modelName: string;
  patchOperations?: Array<PatchOperation>;
}
export interface UpdateRequestValidatorRequest {
  restApiId: string;
  requestValidatorId: string;
  patchOperations?: Array<PatchOperation>;
}
export interface UpdateResourceRequest {
  restApiId: string;
  resourceId: string;
  patchOperations?: Array<PatchOperation>;
}
export interface UpdateRestApiRequest {
  restApiId: string;
  patchOperations?: Array<PatchOperation>;
}
export interface UpdateStageRequest {
  restApiId: string;
  stageName: string;
  patchOperations?: Array<PatchOperation>;
}
export interface UpdateUsagePlanRequest {
  usagePlanId: string;
  patchOperations?: Array<PatchOperation>;
}
export interface UpdateUsageRequest {
  usagePlanId: string;
  keyId: string;
  patchOperations?: Array<PatchOperation>;
}
export interface UpdateVpcLinkRequest {
  vpcLinkId: string;
  patchOperations?: Array<PatchOperation>;
}
export interface Usage {
  usagePlanId?: string;
  startDate?: string;
  endDate?: string;
  items?: Record<string, Array<Array<number>>>;
  position?: string;
}
export interface UsagePlan {
  id?: string;
  name?: string;
  description?: string;
  apiStages?: Array<ApiStage>;
  throttle?: ThrottleSettings;
  quota?: QuotaSettings;
  productCode?: string;
  tags?: Record<string, string>;
}
export interface UsagePlanKey {
  id?: string;
  type?: string;
  value?: string;
  name?: string;
}
export interface UsagePlanKeys {
  items?: Array<UsagePlanKey>;
  position?: string;
}
export interface UsagePlans {
  items?: Array<UsagePlan>;
  position?: string;
}
export interface VpcLink {
  id?: string;
  name?: string;
  description?: string;
  targetArns?: Array<string>;
  status?: VpcLinkStatus;
  statusMessage?: string;
  tags?: Record<string, string>;
}
export interface VpcLinks {
  items?: Array<VpcLink>;
  position?: string;
}
export type VpcLinkStatus = "AVAILABLE" | "PENDING" | "DELETING" | "FAILED";
export declare namespace CreateApiKey {
  export type Input = CreateApiKeyRequest;
  export type Output = ApiKey;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateAuthorizer {
  export type Input = CreateAuthorizerRequest;
  export type Output = Authorizer;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateBasePathMapping {
  export type Input = CreateBasePathMappingRequest;
  export type Output = BasePathMapping;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateDeployment {
  export type Input = CreateDeploymentRequest;
  export type Output = Deployment;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateDocumentationPart {
  export type Input = CreateDocumentationPartRequest;
  export type Output = DocumentationPart;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateDocumentationVersion {
  export type Input = CreateDocumentationVersionRequest;
  export type Output = DocumentationVersion;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateDomainName {
  export type Input = CreateDomainNameRequest;
  export type Output = DomainName;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateDomainNameAccessAssociation {
  export type Input = CreateDomainNameAccessAssociationRequest;
  export type Output = DomainNameAccessAssociation;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateModel {
  export type Input = CreateModelRequest;
  export type Output = Model;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateRequestValidator {
  export type Input = CreateRequestValidatorRequest;
  export type Output = RequestValidator;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateResource {
  export type Input = CreateResourceRequest;
  export type Output = Resource;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateRestApi {
  export type Input = CreateRestApiRequest;
  export type Output = RestApi;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateStage {
  export type Input = CreateStageRequest;
  export type Output = Stage;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateUsagePlan {
  export type Input = CreateUsagePlanRequest;
  export type Output = UsagePlan;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateUsagePlanKey {
  export type Input = CreateUsagePlanKeyRequest;
  export type Output = UsagePlanKey;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateVpcLink {
  export type Input = CreateVpcLinkRequest;
  export type Output = VpcLink;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteApiKey {
  export type Input = DeleteApiKeyRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteAuthorizer {
  export type Input = DeleteAuthorizerRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteBasePathMapping {
  export type Input = DeleteBasePathMappingRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteClientCertificate {
  export type Input = DeleteClientCertificateRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteDeployment {
  export type Input = DeleteDeploymentRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteDocumentationPart {
  export type Input = DeleteDocumentationPartRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteDocumentationVersion {
  export type Input = DeleteDocumentationVersionRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteDomainName {
  export type Input = DeleteDomainNameRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteDomainNameAccessAssociation {
  export type Input = DeleteDomainNameAccessAssociationRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteGatewayResponse {
  export type Input = DeleteGatewayResponseRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteIntegration {
  export type Input = DeleteIntegrationRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteIntegrationResponse {
  export type Input = DeleteIntegrationResponseRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteMethod {
  export type Input = DeleteMethodRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteMethodResponse {
  export type Input = DeleteMethodResponseRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteModel {
  export type Input = DeleteModelRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteRequestValidator {
  export type Input = DeleteRequestValidatorRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteResource {
  export type Input = DeleteResourceRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteRestApi {
  export type Input = DeleteRestApiRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteStage {
  export type Input = DeleteStageRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteUsagePlan {
  export type Input = DeleteUsagePlanRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteUsagePlanKey {
  export type Input = DeleteUsagePlanKeyRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteVpcLink {
  export type Input = DeleteVpcLinkRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace FlushStageAuthorizersCache {
  export type Input = FlushStageAuthorizersCacheRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace FlushStageCache {
  export type Input = FlushStageCacheRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GenerateClientCertificate {
  export type Input = GenerateClientCertificateRequest;
  export type Output = ClientCertificate;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetAccount {
  export type Input = GetAccountRequest;
  export type Output = Account;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetApiKey {
  export type Input = GetApiKeyRequest;
  export type Output = ApiKey;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetApiKeys {
  export type Input = GetApiKeysRequest;
  export type Output = ApiKeys;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetAuthorizer {
  export type Input = GetAuthorizerRequest;
  export type Output = Authorizer;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetAuthorizers {
  export type Input = GetAuthorizersRequest;
  export type Output = Authorizers;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetBasePathMapping {
  export type Input = GetBasePathMappingRequest;
  export type Output = BasePathMapping;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetBasePathMappings {
  export type Input = GetBasePathMappingsRequest;
  export type Output = BasePathMappings;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetClientCertificate {
  export type Input = GetClientCertificateRequest;
  export type Output = ClientCertificate;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetClientCertificates {
  export type Input = GetClientCertificatesRequest;
  export type Output = ClientCertificates;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetDeployment {
  export type Input = GetDeploymentRequest;
  export type Output = Deployment;
  export type Error =
    | BadRequestException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetDeployments {
  export type Input = GetDeploymentsRequest;
  export type Output = Deployments;
  export type Error =
    | BadRequestException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetDocumentationPart {
  export type Input = GetDocumentationPartRequest;
  export type Output = DocumentationPart;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetDocumentationParts {
  export type Input = GetDocumentationPartsRequest;
  export type Output = DocumentationParts;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetDocumentationVersion {
  export type Input = GetDocumentationVersionRequest;
  export type Output = DocumentationVersion;
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetDocumentationVersions {
  export type Input = GetDocumentationVersionsRequest;
  export type Output = DocumentationVersions;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetDomainName {
  export type Input = GetDomainNameRequest;
  export type Output = DomainName;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetDomainNameAccessAssociations {
  export type Input = GetDomainNameAccessAssociationsRequest;
  export type Output = DomainNameAccessAssociations;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetDomainNames {
  export type Input = GetDomainNamesRequest;
  export type Output = DomainNames;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetExport {
  export type Input = GetExportRequest;
  export type Output = ExportResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetGatewayResponse {
  export type Input = GetGatewayResponseRequest;
  export type Output = GatewayResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetGatewayResponses {
  export type Input = GetGatewayResponsesRequest;
  export type Output = GatewayResponses;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetIntegration {
  export type Input = GetIntegrationRequest;
  export type Output = Integration;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetIntegrationResponse {
  export type Input = GetIntegrationResponseRequest;
  export type Output = IntegrationResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetMethod {
  export type Input = GetMethodRequest;
  export type Output = Method;
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetMethodResponse {
  export type Input = GetMethodResponseRequest;
  export type Output = MethodResponse;
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetModel {
  export type Input = GetModelRequest;
  export type Output = Model;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetModels {
  export type Input = GetModelsRequest;
  export type Output = Models;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetModelTemplate {
  export type Input = GetModelTemplateRequest;
  export type Output = Template;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetRequestValidator {
  export type Input = GetRequestValidatorRequest;
  export type Output = RequestValidator;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetRequestValidators {
  export type Input = GetRequestValidatorsRequest;
  export type Output = RequestValidators;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetResource {
  export type Input = GetResourceRequest;
  export type Output = Resource;
  export type Error =
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetResources {
  export type Input = GetResourcesRequest;
  export type Output = Resources;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetRestApi {
  export type Input = GetRestApiRequest;
  export type Output = RestApi;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetRestApis {
  export type Input = GetRestApisRequest;
  export type Output = RestApis;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetSdk {
  export type Input = GetSdkRequest;
  export type Output = SdkResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetSdkType {
  export type Input = GetSdkTypeRequest;
  export type Output = SdkType;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetSdkTypes {
  export type Input = GetSdkTypesRequest;
  export type Output = SdkTypes;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetStage {
  export type Input = GetStageRequest;
  export type Output = Stage;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetStages {
  export type Input = GetStagesRequest;
  export type Output = Stages;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetTags {
  export type Input = GetTagsRequest;
  export type Output = Tags;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetUsage {
  export type Input = GetUsageRequest;
  export type Output = Usage;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetUsagePlan {
  export type Input = GetUsagePlanRequest;
  export type Output = UsagePlan;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetUsagePlanKey {
  export type Input = GetUsagePlanKeyRequest;
  export type Output = UsagePlanKey;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetUsagePlanKeys {
  export type Input = GetUsagePlanKeysRequest;
  export type Output = UsagePlanKeys;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetUsagePlans {
  export type Input = GetUsagePlansRequest;
  export type Output = UsagePlans;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetVpcLink {
  export type Input = GetVpcLinkRequest;
  export type Output = VpcLink;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetVpcLinks {
  export type Input = GetVpcLinksRequest;
  export type Output = VpcLinks;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ImportApiKeys {
  export type Input = ImportApiKeysRequest;
  export type Output = ApiKeyIds;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ImportDocumentationParts {
  export type Input = ImportDocumentationPartsRequest;
  export type Output = DocumentationPartIds;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ImportRestApi {
  export type Input = ImportRestApiRequest;
  export type Output = RestApi;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace PutGatewayResponse {
  export type Input = PutGatewayResponseRequest;
  export type Output = GatewayResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace PutIntegration {
  export type Input = PutIntegrationRequest;
  export type Output = Integration;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace PutIntegrationResponse {
  export type Input = PutIntegrationResponseRequest;
  export type Output = IntegrationResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace PutMethod {
  export type Input = PutMethodRequest;
  export type Output = Method;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace PutMethodResponse {
  export type Input = PutMethodResponseRequest;
  export type Output = MethodResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace PutRestApi {
  export type Input = PutRestApiRequest;
  export type Output = RestApi;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace RejectDomainNameAccessAssociation {
  export type Input = RejectDomainNameAccessAssociationRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace TestInvokeAuthorizer {
  export type Input = TestInvokeAuthorizerRequest;
  export type Output = TestInvokeAuthorizerResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace TestInvokeMethod {
  export type Input = TestInvokeMethodRequest;
  export type Output = TestInvokeMethodResponse;
  export type Error =
    | BadRequestException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateAccount {
  export type Input = UpdateAccountRequest;
  export type Output = Account;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateApiKey {
  export type Input = UpdateApiKeyRequest;
  export type Output = ApiKey;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateAuthorizer {
  export type Input = UpdateAuthorizerRequest;
  export type Output = Authorizer;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateBasePathMapping {
  export type Input = UpdateBasePathMappingRequest;
  export type Output = BasePathMapping;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateClientCertificate {
  export type Input = UpdateClientCertificateRequest;
  export type Output = ClientCertificate;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateDeployment {
  export type Input = UpdateDeploymentRequest;
  export type Output = Deployment;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateDocumentationPart {
  export type Input = UpdateDocumentationPartRequest;
  export type Output = DocumentationPart;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateDocumentationVersion {
  export type Input = UpdateDocumentationVersionRequest;
  export type Output = DocumentationVersion;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateDomainName {
  export type Input = UpdateDomainNameRequest;
  export type Output = DomainName;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateGatewayResponse {
  export type Input = UpdateGatewayResponseRequest;
  export type Output = GatewayResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateIntegration {
  export type Input = UpdateIntegrationRequest;
  export type Output = Integration;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateIntegrationResponse {
  export type Input = UpdateIntegrationResponseRequest;
  export type Output = IntegrationResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateMethod {
  export type Input = UpdateMethodRequest;
  export type Output = Method;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateMethodResponse {
  export type Input = UpdateMethodResponseRequest;
  export type Output = MethodResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateModel {
  export type Input = UpdateModelRequest;
  export type Output = Model;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateRequestValidator {
  export type Input = UpdateRequestValidatorRequest;
  export type Output = RequestValidator;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateResource {
  export type Input = UpdateResourceRequest;
  export type Output = Resource;
  export type Error =
    | BadRequestException
    | ConflictException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateRestApi {
  export type Input = UpdateRestApiRequest;
  export type Output = RestApi;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateStage {
  export type Input = UpdateStageRequest;
  export type Output = Stage;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateUsage {
  export type Input = UpdateUsageRequest;
  export type Output = Usage;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateUsagePlan {
  export type Input = UpdateUsagePlanRequest;
  export type Output = UsagePlan;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateVpcLink {
  export type Input = UpdateVpcLinkRequest;
  export type Output = VpcLink;
  export type Error =
    | BadRequestException
    | ConflictException
    | LimitExceededException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}
