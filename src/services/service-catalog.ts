import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWS242ServiceCatalogService {
  acceptPortfolioShare(
    input: AcceptPortfolioShareInput,
  ): Effect.Effect<
    AcceptPortfolioShareOutput,
    | InvalidParametersException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  associateBudgetWithResource(
    input: AssociateBudgetWithResourceInput,
  ): Effect.Effect<
    AssociateBudgetWithResourceOutput,
    | DuplicateResourceException
    | InvalidParametersException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  associatePrincipalWithPortfolio(
    input: AssociatePrincipalWithPortfolioInput,
  ): Effect.Effect<
    AssociatePrincipalWithPortfolioOutput,
    | InvalidParametersException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  associateProductWithPortfolio(
    input: AssociateProductWithPortfolioInput,
  ): Effect.Effect<
    AssociateProductWithPortfolioOutput,
    | InvalidParametersException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  associateServiceActionWithProvisioningArtifact(
    input: AssociateServiceActionWithProvisioningArtifactInput,
  ): Effect.Effect<
    AssociateServiceActionWithProvisioningArtifactOutput,
    | DuplicateResourceException
    | InvalidParametersException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  associateTagOptionWithResource(
    input: AssociateTagOptionWithResourceInput,
  ): Effect.Effect<
    AssociateTagOptionWithResourceOutput,
    | DuplicateResourceException
    | InvalidParametersException
    | InvalidStateException
    | LimitExceededException
    | ResourceNotFoundException
    | TagOptionNotMigratedException
    | CommonAwsError
  >;
  batchAssociateServiceActionWithProvisioningArtifact(
    input: BatchAssociateServiceActionWithProvisioningArtifactInput,
  ): Effect.Effect<
    BatchAssociateServiceActionWithProvisioningArtifactOutput,
    InvalidParametersException | CommonAwsError
  >;
  batchDisassociateServiceActionFromProvisioningArtifact(
    input: BatchDisassociateServiceActionFromProvisioningArtifactInput,
  ): Effect.Effect<
    BatchDisassociateServiceActionFromProvisioningArtifactOutput,
    InvalidParametersException | CommonAwsError
  >;
  copyProduct(
    input: CopyProductInput,
  ): Effect.Effect<
    CopyProductOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  createConstraint(
    input: CreateConstraintInput,
  ): Effect.Effect<
    CreateConstraintOutput,
    | DuplicateResourceException
    | InvalidParametersException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createPortfolio(
    input: CreatePortfolioInput,
  ): Effect.Effect<
    CreatePortfolioOutput,
    | InvalidParametersException
    | LimitExceededException
    | TagOptionNotMigratedException
    | CommonAwsError
  >;
  createPortfolioShare(
    input: CreatePortfolioShareInput,
  ): Effect.Effect<
    CreatePortfolioShareOutput,
    | InvalidParametersException
    | InvalidStateException
    | LimitExceededException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createProduct(
    input: CreateProductInput,
  ): Effect.Effect<
    CreateProductOutput,
    | InvalidParametersException
    | LimitExceededException
    | TagOptionNotMigratedException
    | CommonAwsError
  >;
  createProvisionedProductPlan(
    input: CreateProvisionedProductPlanInput,
  ): Effect.Effect<
    CreateProvisionedProductPlanOutput,
    | InvalidParametersException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createProvisioningArtifact(
    input: CreateProvisioningArtifactInput,
  ): Effect.Effect<
    CreateProvisioningArtifactOutput,
    | InvalidParametersException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createServiceAction(
    input: CreateServiceActionInput,
  ): Effect.Effect<
    CreateServiceActionOutput,
    InvalidParametersException | LimitExceededException | CommonAwsError
  >;
  createTagOption(
    input: CreateTagOptionInput,
  ): Effect.Effect<
    CreateTagOptionOutput,
    | DuplicateResourceException
    | LimitExceededException
    | TagOptionNotMigratedException
    | CommonAwsError
  >;
  deleteConstraint(
    input: DeleteConstraintInput,
  ): Effect.Effect<
    DeleteConstraintOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  deletePortfolio(
    input: DeletePortfolioInput,
  ): Effect.Effect<
    DeletePortfolioOutput,
    | InvalidParametersException
    | ResourceInUseException
    | ResourceNotFoundException
    | TagOptionNotMigratedException
    | CommonAwsError
  >;
  deletePortfolioShare(
    input: DeletePortfolioShareInput,
  ): Effect.Effect<
    DeletePortfolioShareOutput,
    | InvalidParametersException
    | InvalidStateException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteProduct(
    input: DeleteProductInput,
  ): Effect.Effect<
    DeleteProductOutput,
    | InvalidParametersException
    | ResourceInUseException
    | ResourceNotFoundException
    | TagOptionNotMigratedException
    | CommonAwsError
  >;
  deleteProvisionedProductPlan(
    input: DeleteProvisionedProductPlanInput,
  ): Effect.Effect<
    DeleteProvisionedProductPlanOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  deleteProvisioningArtifact(
    input: DeleteProvisioningArtifactInput,
  ): Effect.Effect<
    DeleteProvisioningArtifactOutput,
    | InvalidParametersException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteServiceAction(
    input: DeleteServiceActionInput,
  ): Effect.Effect<
    DeleteServiceActionOutput,
    | InvalidParametersException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteTagOption(
    input: DeleteTagOptionInput,
  ): Effect.Effect<
    DeleteTagOptionOutput,
    | ResourceInUseException
    | ResourceNotFoundException
    | TagOptionNotMigratedException
    | CommonAwsError
  >;
  describeConstraint(
    input: DescribeConstraintInput,
  ): Effect.Effect<
    DescribeConstraintOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  describeCopyProductStatus(
    input: DescribeCopyProductStatusInput,
  ): Effect.Effect<
    DescribeCopyProductStatusOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  describePortfolio(
    input: DescribePortfolioInput,
  ): Effect.Effect<
    DescribePortfolioOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  describePortfolioShares(
    input: DescribePortfolioSharesInput,
  ): Effect.Effect<
    DescribePortfolioSharesOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  describePortfolioShareStatus(
    input: DescribePortfolioShareStatusInput,
  ): Effect.Effect<
    DescribePortfolioShareStatusOutput,
    | InvalidParametersException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeProduct(
    input: DescribeProductInput,
  ): Effect.Effect<
    DescribeProductOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  describeProductAsAdmin(
    input: DescribeProductAsAdminInput,
  ): Effect.Effect<
    DescribeProductAsAdminOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  describeProductView(
    input: DescribeProductViewInput,
  ): Effect.Effect<
    DescribeProductViewOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  describeProvisionedProduct(
    input: DescribeProvisionedProductInput,
  ): Effect.Effect<
    DescribeProvisionedProductOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  describeProvisionedProductPlan(
    input: DescribeProvisionedProductPlanInput,
  ): Effect.Effect<
    DescribeProvisionedProductPlanOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  describeProvisioningArtifact(
    input: DescribeProvisioningArtifactInput,
  ): Effect.Effect<
    DescribeProvisioningArtifactOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  describeProvisioningParameters(
    input: DescribeProvisioningParametersInput,
  ): Effect.Effect<
    DescribeProvisioningParametersOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  describeRecord(
    input: DescribeRecordInput,
  ): Effect.Effect<
    DescribeRecordOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  describeServiceAction(
    input: DescribeServiceActionInput,
  ): Effect.Effect<
    DescribeServiceActionOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  describeServiceActionExecutionParameters(
    input: DescribeServiceActionExecutionParametersInput,
  ): Effect.Effect<
    DescribeServiceActionExecutionParametersOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  describeTagOption(
    input: DescribeTagOptionInput,
  ): Effect.Effect<
    DescribeTagOptionOutput,
    ResourceNotFoundException | TagOptionNotMigratedException | CommonAwsError
  >;
  disableAWSOrganizationsAccess(
    input: DisableAWSOrganizationsAccessInput,
  ): Effect.Effect<
    DisableAWSOrganizationsAccessOutput,
    | InvalidStateException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  disassociateBudgetFromResource(
    input: DisassociateBudgetFromResourceInput,
  ): Effect.Effect<
    DisassociateBudgetFromResourceOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  disassociatePrincipalFromPortfolio(
    input: DisassociatePrincipalFromPortfolioInput,
  ): Effect.Effect<
    DisassociatePrincipalFromPortfolioOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  disassociateProductFromPortfolio(
    input: DisassociateProductFromPortfolioInput,
  ): Effect.Effect<
    DisassociateProductFromPortfolioOutput,
    | InvalidParametersException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  disassociateServiceActionFromProvisioningArtifact(
    input: DisassociateServiceActionFromProvisioningArtifactInput,
  ): Effect.Effect<
    DisassociateServiceActionFromProvisioningArtifactOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  disassociateTagOptionFromResource(
    input: DisassociateTagOptionFromResourceInput,
  ): Effect.Effect<
    DisassociateTagOptionFromResourceOutput,
    ResourceNotFoundException | TagOptionNotMigratedException | CommonAwsError
  >;
  enableAWSOrganizationsAccess(
    input: EnableAWSOrganizationsAccessInput,
  ): Effect.Effect<
    EnableAWSOrganizationsAccessOutput,
    | InvalidStateException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  executeProvisionedProductPlan(
    input: ExecuteProvisionedProductPlanInput,
  ): Effect.Effect<
    ExecuteProvisionedProductPlanOutput,
    | InvalidParametersException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  executeProvisionedProductServiceAction(
    input: ExecuteProvisionedProductServiceActionInput,
  ): Effect.Effect<
    ExecuteProvisionedProductServiceActionOutput,
    | InvalidParametersException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getAWSOrganizationsAccessStatus(
    input: GetAWSOrganizationsAccessStatusInput,
  ): Effect.Effect<
    GetAWSOrganizationsAccessStatusOutput,
    OperationNotSupportedException | ResourceNotFoundException | CommonAwsError
  >;
  getProvisionedProductOutputs(
    input: GetProvisionedProductOutputsInput,
  ): Effect.Effect<
    GetProvisionedProductOutputsOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  importAsProvisionedProduct(
    input: ImportAsProvisionedProductInput,
  ): Effect.Effect<
    ImportAsProvisionedProductOutput,
    | DuplicateResourceException
    | InvalidParametersException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listAcceptedPortfolioShares(
    input: ListAcceptedPortfolioSharesInput,
  ): Effect.Effect<
    ListAcceptedPortfolioSharesOutput,
    InvalidParametersException | OperationNotSupportedException | CommonAwsError
  >;
  listBudgetsForResource(
    input: ListBudgetsForResourceInput,
  ): Effect.Effect<
    ListBudgetsForResourceOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  listConstraintsForPortfolio(
    input: ListConstraintsForPortfolioInput,
  ): Effect.Effect<
    ListConstraintsForPortfolioOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  listLaunchPaths(
    input: ListLaunchPathsInput,
  ): Effect.Effect<
    ListLaunchPathsOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  listOrganizationPortfolioAccess(
    input: ListOrganizationPortfolioAccessInput,
  ): Effect.Effect<
    ListOrganizationPortfolioAccessOutput,
    | InvalidParametersException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listPortfolioAccess(
    input: ListPortfolioAccessInput,
  ): Effect.Effect<
    ListPortfolioAccessOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  listPortfolios(
    input: ListPortfoliosInput,
  ): Effect.Effect<
    ListPortfoliosOutput,
    InvalidParametersException | CommonAwsError
  >;
  listPortfoliosForProduct(
    input: ListPortfoliosForProductInput,
  ): Effect.Effect<
    ListPortfoliosForProductOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  listPrincipalsForPortfolio(
    input: ListPrincipalsForPortfolioInput,
  ): Effect.Effect<
    ListPrincipalsForPortfolioOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  listProvisionedProductPlans(
    input: ListProvisionedProductPlansInput,
  ): Effect.Effect<
    ListProvisionedProductPlansOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  listProvisioningArtifacts(
    input: ListProvisioningArtifactsInput,
  ): Effect.Effect<
    ListProvisioningArtifactsOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  listProvisioningArtifactsForServiceAction(
    input: ListProvisioningArtifactsForServiceActionInput,
  ): Effect.Effect<
    ListProvisioningArtifactsForServiceActionOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  listRecordHistory(
    input: ListRecordHistoryInput,
  ): Effect.Effect<
    ListRecordHistoryOutput,
    InvalidParametersException | CommonAwsError
  >;
  listResourcesForTagOption(
    input: ListResourcesForTagOptionInput,
  ): Effect.Effect<
    ListResourcesForTagOptionOutput,
    | InvalidParametersException
    | ResourceNotFoundException
    | TagOptionNotMigratedException
    | CommonAwsError
  >;
  listServiceActions(
    input: ListServiceActionsInput,
  ): Effect.Effect<
    ListServiceActionsOutput,
    InvalidParametersException | CommonAwsError
  >;
  listServiceActionsForProvisioningArtifact(
    input: ListServiceActionsForProvisioningArtifactInput,
  ): Effect.Effect<
    ListServiceActionsForProvisioningArtifactOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  listStackInstancesForProvisionedProduct(
    input: ListStackInstancesForProvisionedProductInput,
  ): Effect.Effect<
    ListStackInstancesForProvisionedProductOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  listTagOptions(
    input: ListTagOptionsInput,
  ): Effect.Effect<
    ListTagOptionsOutput,
    InvalidParametersException | TagOptionNotMigratedException | CommonAwsError
  >;
  notifyProvisionProductEngineWorkflowResult(
    input: NotifyProvisionProductEngineWorkflowResultInput,
  ): Effect.Effect<
    NotifyProvisionProductEngineWorkflowResultOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  notifyTerminateProvisionedProductEngineWorkflowResult(
    input: NotifyTerminateProvisionedProductEngineWorkflowResultInput,
  ): Effect.Effect<
    NotifyTerminateProvisionedProductEngineWorkflowResultOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  notifyUpdateProvisionedProductEngineWorkflowResult(
    input: NotifyUpdateProvisionedProductEngineWorkflowResultInput,
  ): Effect.Effect<
    NotifyUpdateProvisionedProductEngineWorkflowResultOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  provisionProduct(
    input: ProvisionProductInput,
  ): Effect.Effect<
    ProvisionProductOutput,
    | DuplicateResourceException
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  rejectPortfolioShare(
    input: RejectPortfolioShareInput,
  ): Effect.Effect<
    RejectPortfolioShareOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  scanProvisionedProducts(
    input: ScanProvisionedProductsInput,
  ): Effect.Effect<
    ScanProvisionedProductsOutput,
    InvalidParametersException | CommonAwsError
  >;
  searchProducts(
    input: SearchProductsInput,
  ): Effect.Effect<
    SearchProductsOutput,
    InvalidParametersException | CommonAwsError
  >;
  searchProductsAsAdmin(
    input: SearchProductsAsAdminInput,
  ): Effect.Effect<
    SearchProductsAsAdminOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  searchProvisionedProducts(
    input: SearchProvisionedProductsInput,
  ): Effect.Effect<
    SearchProvisionedProductsOutput,
    InvalidParametersException | CommonAwsError
  >;
  terminateProvisionedProduct(
    input: TerminateProvisionedProductInput,
  ): Effect.Effect<
    TerminateProvisionedProductOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  updateConstraint(
    input: UpdateConstraintInput,
  ): Effect.Effect<
    UpdateConstraintOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  updatePortfolio(
    input: UpdatePortfolioInput,
  ): Effect.Effect<
    UpdatePortfolioOutput,
    | InvalidParametersException
    | LimitExceededException
    | ResourceNotFoundException
    | TagOptionNotMigratedException
    | CommonAwsError
  >;
  updatePortfolioShare(
    input: UpdatePortfolioShareInput,
  ): Effect.Effect<
    UpdatePortfolioShareOutput,
    | InvalidParametersException
    | InvalidStateException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateProduct(
    input: UpdateProductInput,
  ): Effect.Effect<
    UpdateProductOutput,
    | InvalidParametersException
    | ResourceNotFoundException
    | TagOptionNotMigratedException
    | CommonAwsError
  >;
  updateProvisionedProduct(
    input: UpdateProvisionedProductInput,
  ): Effect.Effect<
    UpdateProvisionedProductOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  updateProvisionedProductProperties(
    input: UpdateProvisionedProductPropertiesInput,
  ): Effect.Effect<
    UpdateProvisionedProductPropertiesOutput,
    | InvalidParametersException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateProvisioningArtifact(
    input: UpdateProvisioningArtifactInput,
  ): Effect.Effect<
    UpdateProvisioningArtifactOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  updateServiceAction(
    input: UpdateServiceActionInput,
  ): Effect.Effect<
    UpdateServiceActionOutput,
    InvalidParametersException | ResourceNotFoundException | CommonAwsError
  >;
  updateTagOption(
    input: UpdateTagOptionInput,
  ): Effect.Effect<
    UpdateTagOptionOutput,
    | DuplicateResourceException
    | InvalidParametersException
    | ResourceNotFoundException
    | TagOptionNotMigratedException
    | CommonAwsError
  >;
}

export type ServiceCatalog = AWS242ServiceCatalogService;

export type AcceptLanguage = string;

export interface AcceptPortfolioShareInput {
  AcceptLanguage?: string;
  PortfolioId: string;
  PortfolioShareType?: PortfolioShareType;
}
export interface AcceptPortfolioShareOutput {}
export interface AccessLevelFilter {
  Key?: AccessLevelFilterKey;
  Value?: string;
}
export type AccessLevelFilterKey = "ACCOUNT" | "ROLE" | "USER";
export type AccessLevelFilterValue = string;

export type AccessStatus = "ENABLED" | "UNDER_CHANGE" | "DISABLED";
export type AccountId = string;

export type AccountIds = Array<string>;
export type AddTags = Array<Tag>;
export type AllowedValues = Array<string>;
export type ApproximateCount = number;

export interface AssociateBudgetWithResourceInput {
  BudgetName: string;
  ResourceId: string;
}
export interface AssociateBudgetWithResourceOutput {}
export interface AssociatePrincipalWithPortfolioInput {
  AcceptLanguage?: string;
  PortfolioId: string;
  PrincipalARN: string;
  PrincipalType: PrincipalType;
}
export interface AssociatePrincipalWithPortfolioOutput {}
export interface AssociateProductWithPortfolioInput {
  AcceptLanguage?: string;
  ProductId: string;
  PortfolioId: string;
  SourcePortfolioId?: string;
}
export interface AssociateProductWithPortfolioOutput {}
export interface AssociateServiceActionWithProvisioningArtifactInput {
  ProductId: string;
  ProvisioningArtifactId: string;
  ServiceActionId: string;
  AcceptLanguage?: string;
  IdempotencyToken?: string;
}
export interface AssociateServiceActionWithProvisioningArtifactOutput {}
export interface AssociateTagOptionWithResourceInput {
  ResourceId: string;
  TagOptionId: string;
}
export interface AssociateTagOptionWithResourceOutput {}
export type AttributeValue = string;

export interface BatchAssociateServiceActionWithProvisioningArtifactInput {
  ServiceActionAssociations: Array<ServiceActionAssociation>;
  AcceptLanguage?: string;
}
export interface BatchAssociateServiceActionWithProvisioningArtifactOutput {
  FailedServiceActionAssociations?: Array<FailedServiceActionAssociation>;
}
export interface BatchDisassociateServiceActionFromProvisioningArtifactInput {
  ServiceActionAssociations: Array<ServiceActionAssociation>;
  AcceptLanguage?: string;
}
export interface BatchDisassociateServiceActionFromProvisioningArtifactOutput {
  FailedServiceActionAssociations?: Array<FailedServiceActionAssociation>;
}
export interface BudgetDetail {
  BudgetName?: string;
}
export type BudgetName = string;

export type Budgets = Array<BudgetDetail>;
export type CausingEntity = string;

export type ChangeAction = "ADD" | "MODIFY" | "REMOVE";
export interface CloudWatchDashboard {
  Name?: string;
}
export type CloudWatchDashboardName = string;

export type CloudWatchDashboards = Array<CloudWatchDashboard>;
export type CodeStarConnectionArn = string;

export interface CodeStarParameters {
  ConnectionArn: string;
  Repository: string;
  Branch: string;
  ArtifactPath: string;
}
export type ConstraintDescription = string;

export interface ConstraintDetail {
  ConstraintId?: string;
  Type?: string;
  Description?: string;
  Owner?: string;
  ProductId?: string;
  PortfolioId?: string;
}
export type ConstraintDetails = Array<ConstraintDetail>;
export type ConstraintParameters = string;

export type ConstraintSummaries = Array<ConstraintSummary>;
export interface ConstraintSummary {
  Type?: string;
  Description?: string;
}
export type ConstraintType = string;

export type CopyOption = "CopyTags";
export type CopyOptions = Array<CopyOption>;
export interface CopyProductInput {
  AcceptLanguage?: string;
  SourceProductArn: string;
  TargetProductId?: string;
  TargetProductName?: string;
  SourceProvisioningArtifactIdentifiers?: Array<
    Record<ProvisioningArtifactPropertyName, string>
  >;
  CopyOptions?: Array<CopyOption>;
  IdempotencyToken: string;
}
export interface CopyProductOutput {
  CopyProductToken?: string;
}
export type CopyProductStatus = "SUCCEEDED" | "IN_PROGRESS" | "FAILED";
export interface CreateConstraintInput {
  AcceptLanguage?: string;
  PortfolioId: string;
  ProductId: string;
  Parameters: string;
  Type: string;
  Description?: string;
  IdempotencyToken: string;
}
export interface CreateConstraintOutput {
  ConstraintDetail?: ConstraintDetail;
  ConstraintParameters?: string;
  Status?: Status;
}
export type CreatedTime = Date | string;

export interface CreatePortfolioInput {
  AcceptLanguage?: string;
  DisplayName: string;
  Description?: string;
  ProviderName: string;
  Tags?: Array<Tag>;
  IdempotencyToken: string;
}
export interface CreatePortfolioOutput {
  PortfolioDetail?: PortfolioDetail;
  Tags?: Array<Tag>;
}
export interface CreatePortfolioShareInput {
  AcceptLanguage?: string;
  PortfolioId: string;
  AccountId?: string;
  OrganizationNode?: OrganizationNode;
  ShareTagOptions?: boolean;
  SharePrincipals?: boolean;
}
export interface CreatePortfolioShareOutput {
  PortfolioShareToken?: string;
}
export interface CreateProductInput {
  AcceptLanguage?: string;
  Name: string;
  Owner: string;
  Description?: string;
  Distributor?: string;
  SupportDescription?: string;
  SupportEmail?: string;
  SupportUrl?: string;
  ProductType: ProductType;
  Tags?: Array<Tag>;
  ProvisioningArtifactParameters?: ProvisioningArtifactProperties;
  IdempotencyToken: string;
  SourceConnection?: SourceConnection;
}
export interface CreateProductOutput {
  ProductViewDetail?: ProductViewDetail;
  ProvisioningArtifactDetail?: ProvisioningArtifactDetail;
  Tags?: Array<Tag>;
}
export interface CreateProvisionedProductPlanInput {
  AcceptLanguage?: string;
  PlanName: string;
  PlanType: ProvisionedProductPlanType;
  NotificationArns?: Array<string>;
  PathId?: string;
  ProductId: string;
  ProvisionedProductName: string;
  ProvisioningArtifactId: string;
  ProvisioningParameters?: Array<UpdateProvisioningParameter>;
  IdempotencyToken: string;
  Tags?: Array<Tag>;
}
export interface CreateProvisionedProductPlanOutput {
  PlanName?: string;
  PlanId?: string;
  ProvisionProductId?: string;
  ProvisionedProductName?: string;
  ProvisioningArtifactId?: string;
}
export interface CreateProvisioningArtifactInput {
  AcceptLanguage?: string;
  ProductId: string;
  Parameters: ProvisioningArtifactProperties;
  IdempotencyToken: string;
}
export interface CreateProvisioningArtifactOutput {
  ProvisioningArtifactDetail?: ProvisioningArtifactDetail;
  Info?: Record<string, string>;
  Status?: Status;
}
export interface CreateServiceActionInput {
  Name: string;
  DefinitionType: ServiceActionDefinitionType;
  Definition: Record<ServiceActionDefinitionKey, string>;
  Description?: string;
  AcceptLanguage?: string;
  IdempotencyToken: string;
}
export interface CreateServiceActionOutput {
  ServiceActionDetail?: ServiceActionDetail;
}
export interface CreateTagOptionInput {
  Key: string;
  Value: string;
}
export interface CreateTagOptionOutput {
  TagOptionDetail?: TagOptionDetail;
}
export type CreationTime = Date | string;

export type DefaultValue = string;

export interface DeleteConstraintInput {
  AcceptLanguage?: string;
  Id: string;
}
export interface DeleteConstraintOutput {}
export interface DeletePortfolioInput {
  AcceptLanguage?: string;
  Id: string;
}
export interface DeletePortfolioOutput {}
export interface DeletePortfolioShareInput {
  AcceptLanguage?: string;
  PortfolioId: string;
  AccountId?: string;
  OrganizationNode?: OrganizationNode;
}
export interface DeletePortfolioShareOutput {
  PortfolioShareToken?: string;
}
export interface DeleteProductInput {
  AcceptLanguage?: string;
  Id: string;
}
export interface DeleteProductOutput {}
export interface DeleteProvisionedProductPlanInput {
  AcceptLanguage?: string;
  PlanId: string;
  IgnoreErrors?: boolean;
}
export interface DeleteProvisionedProductPlanOutput {}
export interface DeleteProvisioningArtifactInput {
  AcceptLanguage?: string;
  ProductId: string;
  ProvisioningArtifactId: string;
}
export interface DeleteProvisioningArtifactOutput {}
export interface DeleteServiceActionInput {
  Id: string;
  AcceptLanguage?: string;
  IdempotencyToken?: string;
}
export interface DeleteServiceActionOutput {}
export interface DeleteTagOptionInput {
  Id: string;
}
export interface DeleteTagOptionOutput {}
export interface DescribeConstraintInput {
  AcceptLanguage?: string;
  Id: string;
}
export interface DescribeConstraintOutput {
  ConstraintDetail?: ConstraintDetail;
  ConstraintParameters?: string;
  Status?: Status;
}
export interface DescribeCopyProductStatusInput {
  AcceptLanguage?: string;
  CopyProductToken: string;
}
export interface DescribeCopyProductStatusOutput {
  CopyProductStatus?: CopyProductStatus;
  TargetProductId?: string;
  StatusDetail?: string;
}
export interface DescribePortfolioInput {
  AcceptLanguage?: string;
  Id: string;
}
export interface DescribePortfolioOutput {
  PortfolioDetail?: PortfolioDetail;
  Tags?: Array<Tag>;
  TagOptions?: Array<TagOptionDetail>;
  Budgets?: Array<BudgetDetail>;
}
export interface DescribePortfolioSharesInput {
  PortfolioId: string;
  Type: DescribePortfolioShareType;
  PageToken?: string;
  PageSize?: number;
}
export interface DescribePortfolioSharesOutput {
  NextPageToken?: string;
  PortfolioShareDetails?: Array<PortfolioShareDetail>;
}
export interface DescribePortfolioShareStatusInput {
  PortfolioShareToken: string;
}
export interface DescribePortfolioShareStatusOutput {
  PortfolioShareToken?: string;
  PortfolioId?: string;
  OrganizationNodeValue?: string;
  Status?: ShareStatus;
  ShareDetails?: ShareDetails;
}
export type DescribePortfolioShareType =
  | "ACCOUNT"
  | "ORGANIZATION"
  | "ORGANIZATIONAL_UNIT"
  | "ORGANIZATION_MEMBER_ACCOUNT";
export interface DescribeProductAsAdminInput {
  AcceptLanguage?: string;
  Id?: string;
  Name?: string;
  SourcePortfolioId?: string;
}
export interface DescribeProductAsAdminOutput {
  ProductViewDetail?: ProductViewDetail;
  ProvisioningArtifactSummaries?: Array<ProvisioningArtifactSummary>;
  Tags?: Array<Tag>;
  TagOptions?: Array<TagOptionDetail>;
  Budgets?: Array<BudgetDetail>;
}
export interface DescribeProductInput {
  AcceptLanguage?: string;
  Id?: string;
  Name?: string;
}
export interface DescribeProductOutput {
  ProductViewSummary?: ProductViewSummary;
  ProvisioningArtifacts?: Array<ProvisioningArtifact>;
  Budgets?: Array<BudgetDetail>;
  LaunchPaths?: Array<LaunchPath>;
}
export interface DescribeProductViewInput {
  AcceptLanguage?: string;
  Id: string;
}
export interface DescribeProductViewOutput {
  ProductViewSummary?: ProductViewSummary;
  ProvisioningArtifacts?: Array<ProvisioningArtifact>;
}
export interface DescribeProvisionedProductInput {
  AcceptLanguage?: string;
  Id?: string;
  Name?: string;
}
export interface DescribeProvisionedProductOutput {
  ProvisionedProductDetail?: ProvisionedProductDetail;
  CloudWatchDashboards?: Array<CloudWatchDashboard>;
}
export interface DescribeProvisionedProductPlanInput {
  AcceptLanguage?: string;
  PlanId: string;
  PageSize?: number;
  PageToken?: string;
}
export interface DescribeProvisionedProductPlanOutput {
  ProvisionedProductPlanDetails?: ProvisionedProductPlanDetails;
  ResourceChanges?: Array<ResourceChange>;
  NextPageToken?: string;
}
export interface DescribeProvisioningArtifactInput {
  AcceptLanguage?: string;
  ProvisioningArtifactId?: string;
  ProductId?: string;
  ProvisioningArtifactName?: string;
  ProductName?: string;
  Verbose?: boolean;
  IncludeProvisioningArtifactParameters?: boolean;
}
export interface DescribeProvisioningArtifactOutput {
  ProvisioningArtifactDetail?: ProvisioningArtifactDetail;
  Info?: Record<string, string>;
  Status?: Status;
  ProvisioningArtifactParameters?: Array<ProvisioningArtifactParameter>;
}
export interface DescribeProvisioningParametersInput {
  AcceptLanguage?: string;
  ProductId?: string;
  ProductName?: string;
  ProvisioningArtifactId?: string;
  ProvisioningArtifactName?: string;
  PathId?: string;
  PathName?: string;
}
export interface DescribeProvisioningParametersOutput {
  ProvisioningArtifactParameters?: Array<ProvisioningArtifactParameter>;
  ConstraintSummaries?: Array<ConstraintSummary>;
  UsageInstructions?: Array<UsageInstruction>;
  TagOptions?: Array<TagOptionSummary>;
  ProvisioningArtifactPreferences?: ProvisioningArtifactPreferences;
  ProvisioningArtifactOutputs?: Array<ProvisioningArtifactOutput>;
  ProvisioningArtifactOutputKeys?: Array<ProvisioningArtifactOutput>;
}
export interface DescribeRecordInput {
  AcceptLanguage?: string;
  Id: string;
  PageToken?: string;
  PageSize?: number;
}
export interface DescribeRecordOutput {
  RecordDetail?: RecordDetail;
  RecordOutputs?: Array<RecordOutput>;
  NextPageToken?: string;
}
export interface DescribeServiceActionExecutionParametersInput {
  ProvisionedProductId: string;
  ServiceActionId: string;
  AcceptLanguage?: string;
}
export interface DescribeServiceActionExecutionParametersOutput {
  ServiceActionParameters?: Array<ExecutionParameter>;
}
export interface DescribeServiceActionInput {
  Id: string;
  AcceptLanguage?: string;
}
export interface DescribeServiceActionOutput {
  ServiceActionDetail?: ServiceActionDetail;
}
export interface DescribeTagOptionInput {
  Id: string;
}
export interface DescribeTagOptionOutput {
  TagOptionDetail?: TagOptionDetail;
}
export type Description = string;

export interface DisableAWSOrganizationsAccessInput {}
export interface DisableAWSOrganizationsAccessOutput {}
export type DisableTemplateValidation = boolean;

export interface DisassociateBudgetFromResourceInput {
  BudgetName: string;
  ResourceId: string;
}
export interface DisassociateBudgetFromResourceOutput {}
export interface DisassociatePrincipalFromPortfolioInput {
  AcceptLanguage?: string;
  PortfolioId: string;
  PrincipalARN: string;
  PrincipalType?: PrincipalType;
}
export interface DisassociatePrincipalFromPortfolioOutput {}
export interface DisassociateProductFromPortfolioInput {
  AcceptLanguage?: string;
  ProductId: string;
  PortfolioId: string;
}
export interface DisassociateProductFromPortfolioOutput {}
export interface DisassociateServiceActionFromProvisioningArtifactInput {
  ProductId: string;
  ProvisioningArtifactId: string;
  ServiceActionId: string;
  AcceptLanguage?: string;
  IdempotencyToken?: string;
}
export interface DisassociateServiceActionFromProvisioningArtifactOutput {}
export interface DisassociateTagOptionFromResourceInput {
  ResourceId: string;
  TagOptionId: string;
}
export interface DisassociateTagOptionFromResourceOutput {}
export declare class DuplicateResourceException extends Data.TaggedError(
  "DuplicateResourceException",
)<{
  readonly Message?: string;
}> {}
export interface EnableAWSOrganizationsAccessInput {}
export interface EnableAWSOrganizationsAccessOutput {}
export type EngineWorkflowFailureReason = string;

export interface EngineWorkflowResourceIdentifier {
  UniqueTag?: UniqueTagResourceIdentifier;
}
export type EngineWorkflowStatus = "SUCCEEDED" | "FAILED";
export type EngineWorkflowToken = string;

export type Error = string;

export type ErrorCode = string;

export type ErrorDescription = string;

export type ErrorMessage = string;

export type EvaluationType = "STATIC" | "DYNAMIC";
export interface ExecuteProvisionedProductPlanInput {
  AcceptLanguage?: string;
  PlanId: string;
  IdempotencyToken: string;
}
export interface ExecuteProvisionedProductPlanOutput {
  RecordDetail?: RecordDetail;
}
export interface ExecuteProvisionedProductServiceActionInput {
  ProvisionedProductId: string;
  ServiceActionId: string;
  ExecuteToken: string;
  AcceptLanguage?: string;
  Parameters?: Record<string, Array<string>>;
}
export interface ExecuteProvisionedProductServiceActionOutput {
  RecordDetail?: RecordDetail;
}
export interface ExecutionParameter {
  Name?: string;
  Type?: string;
  DefaultValues?: Array<string>;
}
export type ExecutionParameterKey = string;

export type ExecutionParameterMap = Record<string, Array<string>>;
export type ExecutionParameters = Array<ExecutionParameter>;
export type ExecutionParameterType = string;

export type ExecutionParameterValue = string;

export type ExecutionParameterValueList = Array<string>;
export interface FailedServiceActionAssociation {
  ServiceActionId?: string;
  ProductId?: string;
  ProvisioningArtifactId?: string;
  ErrorCode?: ServiceActionAssociationErrorCode;
  ErrorMessage?: string;
}
export type FailedServiceActionAssociations =
  Array<FailedServiceActionAssociation>;
export interface GetAWSOrganizationsAccessStatusInput {}
export interface GetAWSOrganizationsAccessStatusOutput {
  AccessStatus?: AccessStatus;
}
export interface GetProvisionedProductOutputsInput {
  AcceptLanguage?: string;
  ProvisionedProductId?: string;
  ProvisionedProductName?: string;
  OutputKeys?: Array<string>;
  PageSize?: number;
  PageToken?: string;
}
export interface GetProvisionedProductOutputsOutput {
  Outputs?: Array<RecordOutput>;
  NextPageToken?: string;
}
export type HasDefaultPath = boolean;

export type Id = string;

export type IdempotencyToken = string;

export type IgnoreErrors = boolean;

export interface ImportAsProvisionedProductInput {
  AcceptLanguage?: string;
  ProductId: string;
  ProvisioningArtifactId: string;
  ProvisionedProductName: string;
  PhysicalId: string;
  IdempotencyToken: string;
}
export interface ImportAsProvisionedProductOutput {
  RecordDetail?: RecordDetail;
}
export type InstructionType = string;

export type InstructionValue = string;

export declare class InvalidParametersException extends Data.TaggedError(
  "InvalidParametersException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidStateException extends Data.TaggedError(
  "InvalidStateException",
)<{
  readonly Message?: string;
}> {}
export type LastRequestId = string;

export type LastSuccessfulSyncTime = Date | string;

export interface LastSync {
  LastSyncTime?: Date | string;
  LastSyncStatus?: LastSyncStatus;
  LastSyncStatusMessage?: string;
  LastSuccessfulSyncTime?: Date | string;
  LastSuccessfulSyncProvisioningArtifactId?: string;
}
export type LastSyncStatus = "SUCCEEDED" | "FAILED";
export type LastSyncStatusMessage = string;

export type LastSyncTime = Date | string;

export interface LaunchPath {
  Id?: string;
  Name?: string;
}
export type LaunchPaths = Array<LaunchPath>;
export type LaunchPathSummaries = Array<LaunchPathSummary>;
export interface LaunchPathSummary {
  Id?: string;
  ConstraintSummaries?: Array<ConstraintSummary>;
  Tags?: Array<Tag>;
  Name?: string;
}
export declare class LimitExceededException extends Data.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface ListAcceptedPortfolioSharesInput {
  AcceptLanguage?: string;
  PageToken?: string;
  PageSize?: number;
  PortfolioShareType?: PortfolioShareType;
}
export interface ListAcceptedPortfolioSharesOutput {
  PortfolioDetails?: Array<PortfolioDetail>;
  NextPageToken?: string;
}
export interface ListBudgetsForResourceInput {
  AcceptLanguage?: string;
  ResourceId: string;
  PageSize?: number;
  PageToken?: string;
}
export interface ListBudgetsForResourceOutput {
  Budgets?: Array<BudgetDetail>;
  NextPageToken?: string;
}
export interface ListConstraintsForPortfolioInput {
  AcceptLanguage?: string;
  PortfolioId: string;
  ProductId?: string;
  PageSize?: number;
  PageToken?: string;
}
export interface ListConstraintsForPortfolioOutput {
  ConstraintDetails?: Array<ConstraintDetail>;
  NextPageToken?: string;
}
export interface ListLaunchPathsInput {
  AcceptLanguage?: string;
  ProductId: string;
  PageSize?: number;
  PageToken?: string;
}
export interface ListLaunchPathsOutput {
  LaunchPathSummaries?: Array<LaunchPathSummary>;
  NextPageToken?: string;
}
export interface ListOrganizationPortfolioAccessInput {
  AcceptLanguage?: string;
  PortfolioId: string;
  OrganizationNodeType: OrganizationNodeType;
  PageToken?: string;
  PageSize?: number;
}
export interface ListOrganizationPortfolioAccessOutput {
  OrganizationNodes?: Array<OrganizationNode>;
  NextPageToken?: string;
}
export interface ListPortfolioAccessInput {
  AcceptLanguage?: string;
  PortfolioId: string;
  OrganizationParentId?: string;
  PageToken?: string;
  PageSize?: number;
}
export interface ListPortfolioAccessOutput {
  AccountIds?: Array<string>;
  NextPageToken?: string;
}
export interface ListPortfoliosForProductInput {
  AcceptLanguage?: string;
  ProductId: string;
  PageToken?: string;
  PageSize?: number;
}
export interface ListPortfoliosForProductOutput {
  PortfolioDetails?: Array<PortfolioDetail>;
  NextPageToken?: string;
}
export interface ListPortfoliosInput {
  AcceptLanguage?: string;
  PageToken?: string;
  PageSize?: number;
}
export interface ListPortfoliosOutput {
  PortfolioDetails?: Array<PortfolioDetail>;
  NextPageToken?: string;
}
export interface ListPrincipalsForPortfolioInput {
  AcceptLanguage?: string;
  PortfolioId: string;
  PageSize?: number;
  PageToken?: string;
}
export interface ListPrincipalsForPortfolioOutput {
  Principals?: Array<Principal>;
  NextPageToken?: string;
}
export interface ListProvisionedProductPlansInput {
  AcceptLanguage?: string;
  ProvisionProductId?: string;
  PageSize?: number;
  PageToken?: string;
  AccessLevelFilter?: AccessLevelFilter;
}
export interface ListProvisionedProductPlansOutput {
  ProvisionedProductPlans?: Array<ProvisionedProductPlanSummary>;
  NextPageToken?: string;
}
export interface ListProvisioningArtifactsForServiceActionInput {
  ServiceActionId: string;
  PageSize?: number;
  PageToken?: string;
  AcceptLanguage?: string;
}
export interface ListProvisioningArtifactsForServiceActionOutput {
  ProvisioningArtifactViews?: Array<ProvisioningArtifactView>;
  NextPageToken?: string;
}
export interface ListProvisioningArtifactsInput {
  AcceptLanguage?: string;
  ProductId: string;
}
export interface ListProvisioningArtifactsOutput {
  ProvisioningArtifactDetails?: Array<ProvisioningArtifactDetail>;
  NextPageToken?: string;
}
export interface ListRecordHistoryInput {
  AcceptLanguage?: string;
  AccessLevelFilter?: AccessLevelFilter;
  SearchFilter?: ListRecordHistorySearchFilter;
  PageSize?: number;
  PageToken?: string;
}
export interface ListRecordHistoryOutput {
  RecordDetails?: Array<RecordDetail>;
  NextPageToken?: string;
}
export interface ListRecordHistorySearchFilter {
  Key?: string;
  Value?: string;
}
export interface ListResourcesForTagOptionInput {
  TagOptionId: string;
  ResourceType?: string;
  PageSize?: number;
  PageToken?: string;
}
export interface ListResourcesForTagOptionOutput {
  ResourceDetails?: Array<ResourceDetail>;
  PageToken?: string;
}
export interface ListServiceActionsForProvisioningArtifactInput {
  ProductId: string;
  ProvisioningArtifactId: string;
  PageSize?: number;
  PageToken?: string;
  AcceptLanguage?: string;
}
export interface ListServiceActionsForProvisioningArtifactOutput {
  ServiceActionSummaries?: Array<ServiceActionSummary>;
  NextPageToken?: string;
}
export interface ListServiceActionsInput {
  AcceptLanguage?: string;
  PageSize?: number;
  PageToken?: string;
}
export interface ListServiceActionsOutput {
  ServiceActionSummaries?: Array<ServiceActionSummary>;
  NextPageToken?: string;
}
export interface ListStackInstancesForProvisionedProductInput {
  AcceptLanguage?: string;
  ProvisionedProductId: string;
  PageToken?: string;
  PageSize?: number;
}
export interface ListStackInstancesForProvisionedProductOutput {
  StackInstances?: Array<StackInstance>;
  NextPageToken?: string;
}
export interface ListTagOptionsFilters {
  Key?: string;
  Value?: string;
  Active?: boolean;
}
export interface ListTagOptionsInput {
  Filters?: ListTagOptionsFilters;
  PageSize?: number;
  PageToken?: string;
}
export interface ListTagOptionsOutput {
  TagOptionDetails?: Array<TagOptionDetail>;
  PageToken?: string;
}
export type LogicalResourceId = string;

export type Message = string;

export type Namespaces = Array<string>;
export type NoEcho = boolean;

export type NotificationArn = string;

export type NotificationArns = Array<string>;
export interface NotifyProvisionProductEngineWorkflowResultInput {
  WorkflowToken: string;
  RecordId: string;
  Status: EngineWorkflowStatus;
  FailureReason?: string;
  ResourceIdentifier?: EngineWorkflowResourceIdentifier;
  Outputs?: Array<RecordOutput>;
  IdempotencyToken: string;
}
export interface NotifyProvisionProductEngineWorkflowResultOutput {}
export interface NotifyTerminateProvisionedProductEngineWorkflowResultInput {
  WorkflowToken: string;
  RecordId: string;
  Status: EngineWorkflowStatus;
  FailureReason?: string;
  IdempotencyToken: string;
}
export interface NotifyTerminateProvisionedProductEngineWorkflowResultOutput {}
export interface NotifyUpdateProvisionedProductEngineWorkflowResultInput {
  WorkflowToken: string;
  RecordId: string;
  Status: EngineWorkflowStatus;
  FailureReason?: string;
  Outputs?: Array<RecordOutput>;
  IdempotencyToken: string;
}
export interface NotifyUpdateProvisionedProductEngineWorkflowResultOutput {}
export type NullableBoolean = boolean;

export declare class OperationNotSupportedException extends Data.TaggedError(
  "OperationNotSupportedException",
)<{
  readonly Message?: string;
}> {}
export interface OrganizationNode {
  Type?: OrganizationNodeType;
  Value?: string;
}
export type OrganizationNodes = Array<OrganizationNode>;
export type OrganizationNodeType =
  | "ORGANIZATION"
  | "ORGANIZATIONAL_UNIT"
  | "ACCOUNT";
export type OrganizationNodeValue = string;

export type OutputDescription = string;

export type OutputKey = string;

export type OutputKeys = Array<string>;
export type OutputValue = string;

export type Owner = string;

export type PageSize = number;

export type PageSizeMax100 = number;

export type PageToken = string;

export interface ParameterConstraints {
  AllowedValues?: Array<string>;
  AllowedPattern?: string;
  ConstraintDescription?: string;
  MaxLength?: string;
  MinLength?: string;
  MaxValue?: string;
  MinValue?: string;
}
export type ParameterKey = string;

export type ParameterType = string;

export type ParameterValue = string;

export type PhysicalId = string;

export type PhysicalResourceId = string;

export type PlanResourceType = string;

export type PortfolioDescription = string;

export interface PortfolioDetail {
  Id?: string;
  ARN?: string;
  DisplayName?: string;
  Description?: string;
  CreatedTime?: Date | string;
  ProviderName?: string;
}
export type PortfolioDetails = Array<PortfolioDetail>;
export type PortfolioDisplayName = string;

export type PortfolioName = string;

export interface PortfolioShareDetail {
  PrincipalId?: string;
  Type?: DescribePortfolioShareType;
  Accepted?: boolean;
  ShareTagOptions?: boolean;
  SharePrincipals?: boolean;
}
export type PortfolioShareDetails = Array<PortfolioShareDetail>;
export type PortfolioShareType =
  | "IMPORTED"
  | "AWS_SERVICECATALOG"
  | "AWS_ORGANIZATIONS";
export interface Principal {
  PrincipalARN?: string;
  PrincipalType?: PrincipalType;
}
export type PrincipalARN = string;

export type Principals = Array<Principal>;
export type PrincipalType = "IAM" | "IAM_PATTERN";
export type ProductArn = string;

export type ProductSource = "ACCOUNT";
export type ProductType =
  | "CLOUD_FORMATION_TEMPLATE"
  | "MARKETPLACE"
  | "TERRAFORM_OPEN_SOURCE"
  | "TERRAFORM_CLOUD"
  | "EXTERNAL";
export type ProductViewAggregations = Record<
  string,
  Array<ProductViewAggregationValue>
>;
export type ProductViewAggregationType = string;

export interface ProductViewAggregationValue {
  Value?: string;
  ApproximateCount?: number;
}
export type ProductViewAggregationValues = Array<ProductViewAggregationValue>;
export interface ProductViewDetail {
  ProductViewSummary?: ProductViewSummary;
  Status?: Status;
  ProductARN?: string;
  CreatedTime?: Date | string;
  SourceConnection?: SourceConnectionDetail;
}
export type ProductViewDetails = Array<ProductViewDetail>;
export type ProductViewDistributor = string;

export type ProductViewFilterBy =
  | "FullTextSearch"
  | "Owner"
  | "ProductType"
  | "SourceProductId";
export type ProductViewFilters = Record<ProductViewFilterBy, Array<string>>;
export type ProductViewFilterValue = string;

export type ProductViewFilterValues = Array<string>;
export type ProductViewName = string;

export type ProductViewOwner = string;

export type ProductViewShortDescription = string;

export type ProductViewSortBy = "Title" | "VersionCount" | "CreationDate";
export type ProductViewSummaries = Array<ProductViewSummary>;
export interface ProductViewSummary {
  Id?: string;
  ProductId?: string;
  Name?: string;
  Owner?: string;
  ShortDescription?: string;
  Type?: ProductType;
  Distributor?: string;
  HasDefaultPath?: boolean;
  SupportEmail?: string;
  SupportDescription?: string;
  SupportUrl?: string;
}
export type PropertyKey = "Owner" | "LaunchRole";
export type PropertyName = string;

export type PropertyValue = string;

export type ProviderName = string;

export interface ProvisionedProductAttribute {
  Name?: string;
  Arn?: string;
  Type?: string;
  Id?: string;
  Status?: ProvisionedProductStatus;
  StatusMessage?: string;
  CreatedTime?: Date | string;
  IdempotencyToken?: string;
  LastRecordId?: string;
  LastProvisioningRecordId?: string;
  LastSuccessfulProvisioningRecordId?: string;
  Tags?: Array<Tag>;
  PhysicalId?: string;
  ProductId?: string;
  ProductName?: string;
  ProvisioningArtifactId?: string;
  ProvisioningArtifactName?: string;
  UserArn?: string;
  UserArnSession?: string;
}
export type ProvisionedProductAttributes = Array<ProvisionedProductAttribute>;
export interface ProvisionedProductDetail {
  Name?: string;
  Arn?: string;
  Type?: string;
  Id?: string;
  Status?: ProvisionedProductStatus;
  StatusMessage?: string;
  CreatedTime?: Date | string;
  IdempotencyToken?: string;
  LastRecordId?: string;
  LastProvisioningRecordId?: string;
  LastSuccessfulProvisioningRecordId?: string;
  ProductId?: string;
  ProvisioningArtifactId?: string;
  LaunchRoleArn?: string;
}
export type ProvisionedProductDetails = Array<ProvisionedProductDetail>;
export type ProvisionedProductFilters = Record<
  ProvisionedProductViewFilterBy,
  Array<string>
>;
export type ProvisionedProductId = string;

export type ProvisionedProductName = string;

export type ProvisionedProductNameOrArn = string;

export interface ProvisionedProductPlanDetails {
  CreatedTime?: Date | string;
  PathId?: string;
  ProductId?: string;
  PlanName?: string;
  PlanId?: string;
  ProvisionProductId?: string;
  ProvisionProductName?: string;
  PlanType?: ProvisionedProductPlanType;
  ProvisioningArtifactId?: string;
  Status?: ProvisionedProductPlanStatus;
  UpdatedTime?: Date | string;
  NotificationArns?: Array<string>;
  ProvisioningParameters?: Array<UpdateProvisioningParameter>;
  Tags?: Array<Tag>;
  StatusMessage?: string;
}
export type ProvisionedProductPlanName = string;

export type ProvisionedProductPlans = Array<ProvisionedProductPlanSummary>;
export type ProvisionedProductPlanStatus =
  | "CREATE_IN_PROGRESS"
  | "CREATE_SUCCESS"
  | "CREATE_FAILED"
  | "EXECUTE_IN_PROGRESS"
  | "EXECUTE_SUCCESS"
  | "EXECUTE_FAILED";
export interface ProvisionedProductPlanSummary {
  PlanName?: string;
  PlanId?: string;
  ProvisionProductId?: string;
  ProvisionProductName?: string;
  PlanType?: ProvisionedProductPlanType;
  ProvisioningArtifactId?: string;
}
export type ProvisionedProductPlanType = "CLOUDFORMATION";
export type ProvisionedProductProperties = Record<PropertyKey, string>;
export type ProvisionedProductStatus =
  | "AVAILABLE"
  | "UNDER_CHANGE"
  | "TAINTED"
  | "ERROR"
  | "PLAN_IN_PROGRESS";
export type ProvisionedProductStatusMessage = string;

export type ProvisionedProductType = string;

export type ProvisionedProductViewFilterBy = "SearchQuery";
export type ProvisionedProductViewFilterValue = string;

export type ProvisionedProductViewFilterValues = Array<string>;
export interface ProvisioningArtifact {
  Id?: string;
  Name?: string;
  Description?: string;
  CreatedTime?: Date | string;
  Guidance?: ProvisioningArtifactGuidance;
}
export type ProvisioningArtifactActive = boolean;

export type ProvisioningArtifactCreatedTime = Date | string;

export type ProvisioningArtifactDescription = string;

export interface ProvisioningArtifactDetail {
  Id?: string;
  Name?: string;
  Description?: string;
  Type?: ProvisioningArtifactType;
  CreatedTime?: Date | string;
  Active?: boolean;
  Guidance?: ProvisioningArtifactGuidance;
  SourceRevision?: string;
}
export type ProvisioningArtifactDetails = Array<ProvisioningArtifactDetail>;
export type ProvisioningArtifactGuidance = "DEFAULT" | "DEPRECATED";
export type ProvisioningArtifactInfo = Record<string, string>;
export type ProvisioningArtifactInfoKey = string;

export type ProvisioningArtifactInfoValue = string;

export type ProvisioningArtifactName = string;

export interface ProvisioningArtifactOutput {
  Key?: string;
  Description?: string;
}
export type ProvisioningArtifactOutputKey = string;

export type ProvisioningArtifactOutputs = Array<ProvisioningArtifactOutput>;
export interface ProvisioningArtifactParameter {
  ParameterKey?: string;
  DefaultValue?: string;
  ParameterType?: string;
  IsNoEcho?: boolean;
  Description?: string;
  ParameterConstraints?: ParameterConstraints;
}
export type ProvisioningArtifactParameters =
  Array<ProvisioningArtifactParameter>;
export interface ProvisioningArtifactPreferences {
  StackSetAccounts?: Array<string>;
  StackSetRegions?: Array<string>;
}
export interface ProvisioningArtifactProperties {
  Name?: string;
  Description?: string;
  Info?: Record<string, string>;
  Type?: ProvisioningArtifactType;
  DisableTemplateValidation?: boolean;
}
export type ProvisioningArtifactPropertyName = "Id";
export type ProvisioningArtifactPropertyValue = string;

export type ProvisioningArtifacts = Array<ProvisioningArtifact>;
export type ProvisioningArtifactSummaries = Array<ProvisioningArtifactSummary>;
export interface ProvisioningArtifactSummary {
  Id?: string;
  Name?: string;
  Description?: string;
  CreatedTime?: Date | string;
  ProvisioningArtifactMetadata?: Record<string, string>;
}
export type ProvisioningArtifactType =
  | "CLOUD_FORMATION_TEMPLATE"
  | "MARKETPLACE_AMI"
  | "MARKETPLACE_CAR"
  | "TERRAFORM_OPEN_SOURCE"
  | "TERRAFORM_CLOUD"
  | "EXTERNAL";
export interface ProvisioningArtifactView {
  ProductViewSummary?: ProductViewSummary;
  ProvisioningArtifact?: ProvisioningArtifact;
}
export type ProvisioningArtifactViews = Array<ProvisioningArtifactView>;
export interface ProvisioningParameter {
  Key?: string;
  Value?: string;
}
export type ProvisioningParameters = Array<ProvisioningParameter>;
export interface ProvisioningPreferences {
  StackSetAccounts?: Array<string>;
  StackSetRegions?: Array<string>;
  StackSetFailureToleranceCount?: number;
  StackSetFailureTolerancePercentage?: number;
  StackSetMaxConcurrencyCount?: number;
  StackSetMaxConcurrencyPercentage?: number;
}
export interface ProvisionProductInput {
  AcceptLanguage?: string;
  ProductId?: string;
  ProductName?: string;
  ProvisioningArtifactId?: string;
  ProvisioningArtifactName?: string;
  PathId?: string;
  PathName?: string;
  ProvisionedProductName: string;
  ProvisioningParameters?: Array<ProvisioningParameter>;
  ProvisioningPreferences?: ProvisioningPreferences;
  Tags?: Array<Tag>;
  NotificationArns?: Array<string>;
  ProvisionToken: string;
}
export interface ProvisionProductOutput {
  RecordDetail?: RecordDetail;
}
export interface RecordDetail {
  RecordId?: string;
  ProvisionedProductName?: string;
  Status?: RecordStatus;
  CreatedTime?: Date | string;
  UpdatedTime?: Date | string;
  ProvisionedProductType?: string;
  RecordType?: string;
  ProvisionedProductId?: string;
  ProductId?: string;
  ProvisioningArtifactId?: string;
  PathId?: string;
  RecordErrors?: Array<RecordError>;
  RecordTags?: Array<RecordTag>;
  LaunchRoleArn?: string;
}
export type RecordDetails = Array<RecordDetail>;
export interface RecordError {
  Code?: string;
  Description?: string;
}
export type RecordErrors = Array<RecordError>;
export interface RecordOutput {
  OutputKey?: string;
  OutputValue?: string;
  Description?: string;
}
export type RecordOutputs = Array<RecordOutput>;
export type RecordStatus =
  | "CREATED"
  | "IN_PROGRESS"
  | "IN_PROGRESS_IN_ERROR"
  | "SUCCEEDED"
  | "FAILED";
export interface RecordTag {
  Key?: string;
  Value?: string;
}
export type RecordTagKey = string;

export type RecordTags = Array<RecordTag>;
export type RecordTagValue = string;

export type RecordType = string;

export type Region = string;

export interface RejectPortfolioShareInput {
  AcceptLanguage?: string;
  PortfolioId: string;
  PortfolioShareType?: PortfolioShareType;
}
export interface RejectPortfolioShareOutput {}
export type Replacement = "TRUE" | "FALSE" | "CONDITIONAL";
export type Repository = string;

export type RepositoryArtifactPath = string;

export type RepositoryBranch = string;

export type RequiresRecreation = "NEVER" | "CONDITIONALLY" | "ALWAYS";
export type ResourceARN = string;

export type ResourceAttribute =
  | "PROPERTIES"
  | "METADATA"
  | "CREATIONPOLICY"
  | "UPDATEPOLICY"
  | "DELETIONPOLICY"
  | "TAGS";
export interface ResourceChange {
  Action?: ChangeAction;
  LogicalResourceId?: string;
  PhysicalResourceId?: string;
  ResourceType?: string;
  Replacement?: Replacement;
  Scope?: Array<ResourceAttribute>;
  Details?: Array<ResourceChangeDetail>;
}
export interface ResourceChangeDetail {
  Target?: ResourceTargetDefinition;
  Evaluation?: EvaluationType;
  CausingEntity?: string;
}
export type ResourceChangeDetails = Array<ResourceChangeDetail>;
export type ResourceChanges = Array<ResourceChange>;
export interface ResourceDetail {
  Id?: string;
  ARN?: string;
  Name?: string;
  Description?: string;
  CreatedTime?: Date | string;
}
export type ResourceDetailARN = string;

export type ResourceDetailCreatedTime = Date | string;

export type ResourceDetailDescription = string;

export type ResourceDetailId = string;

export type ResourceDetailName = string;

export type ResourceDetails = Array<ResourceDetail>;
export type ResourceId = string;

export declare class ResourceInUseException extends Data.TaggedError(
  "ResourceInUseException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface ResourceTargetDefinition {
  Attribute?: ResourceAttribute;
  Name?: string;
  RequiresRecreation?: RequiresRecreation;
}
export type ResourceType = string;

export type RetainPhysicalResources = boolean;

export type RoleArn = string;

export interface ScanProvisionedProductsInput {
  AcceptLanguage?: string;
  AccessLevelFilter?: AccessLevelFilter;
  PageSize?: number;
  PageToken?: string;
}
export interface ScanProvisionedProductsOutput {
  ProvisionedProducts?: Array<ProvisionedProductDetail>;
  NextPageToken?: string;
}
export type Scope = Array<ResourceAttribute>;
export type SearchFilterKey = string;

export type SearchFilterValue = string;

export interface SearchProductsAsAdminInput {
  AcceptLanguage?: string;
  PortfolioId?: string;
  Filters?: Record<ProductViewFilterBy, Array<string>>;
  SortBy?: ProductViewSortBy;
  SortOrder?: SortOrder;
  PageToken?: string;
  PageSize?: number;
  ProductSource?: ProductSource;
}
export interface SearchProductsAsAdminOutput {
  ProductViewDetails?: Array<ProductViewDetail>;
  NextPageToken?: string;
}
export interface SearchProductsInput {
  AcceptLanguage?: string;
  Filters?: Record<ProductViewFilterBy, Array<string>>;
  PageSize?: number;
  SortBy?: ProductViewSortBy;
  SortOrder?: SortOrder;
  PageToken?: string;
}
export interface SearchProductsOutput {
  ProductViewSummaries?: Array<ProductViewSummary>;
  ProductViewAggregations?: Record<string, Array<ProductViewAggregationValue>>;
  NextPageToken?: string;
}
export interface SearchProvisionedProductsInput {
  AcceptLanguage?: string;
  AccessLevelFilter?: AccessLevelFilter;
  Filters?: Record<ProvisionedProductViewFilterBy, Array<string>>;
  SortBy?: string;
  SortOrder?: SortOrder;
  PageSize?: number;
  PageToken?: string;
}
export interface SearchProvisionedProductsOutput {
  ProvisionedProducts?: Array<ProvisionedProductAttribute>;
  TotalResultsCount?: number;
  NextPageToken?: string;
}
export type SearchProvisionedProductsPageSize = number;

export interface ServiceActionAssociation {
  ServiceActionId: string;
  ProductId: string;
  ProvisioningArtifactId: string;
}
export type ServiceActionAssociationErrorCode =
  | "DuplicateResourceException"
  | "InternalFailure"
  | "LimitExceededException"
  | "ResourceNotFoundException"
  | "ThrottlingException"
  | "InvalidParameterException";
export type ServiceActionAssociationErrorMessage = string;

export type ServiceActionAssociations = Array<ServiceActionAssociation>;
export type ServiceActionDefinitionKey =
  | "Name"
  | "Version"
  | "AssumeRole"
  | "Parameters";
export type ServiceActionDefinitionMap = Record<
  ServiceActionDefinitionKey,
  string
>;
export type ServiceActionDefinitionType = "SsmAutomation";
export type ServiceActionDefinitionValue = string;

export type ServiceActionDescription = string;

export interface ServiceActionDetail {
  ServiceActionSummary?: ServiceActionSummary;
  Definition?: Record<ServiceActionDefinitionKey, string>;
}
export type ServiceActionName = string;

export type ServiceActionSummaries = Array<ServiceActionSummary>;
export interface ServiceActionSummary {
  Id?: string;
  Name?: string;
  Description?: string;
  DefinitionType?: ServiceActionDefinitionType;
}
export interface ShareDetails {
  SuccessfulShares?: Array<string>;
  ShareErrors?: Array<ShareError>;
}
export interface ShareError {
  Accounts?: Array<string>;
  Message?: string;
  Error?: string;
}
export type ShareErrors = Array<ShareError>;
export type ShareStatus =
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "COMPLETED_WITH_ERRORS"
  | "ERROR";
export type SortField = string;

export type SortOrder = "ASCENDING" | "DESCENDING";
export interface SourceConnection {
  Type?: SourceType;
  ConnectionParameters: SourceConnectionParameters;
}
export interface SourceConnectionDetail {
  Type?: SourceType;
  ConnectionParameters?: SourceConnectionParameters;
  LastSync?: LastSync;
}
export interface SourceConnectionParameters {
  CodeStar?: CodeStarParameters;
}
export type SourceProvisioningArtifactProperties = Array<
  Record<ProvisioningArtifactPropertyName, string>
>;
export type SourceProvisioningArtifactPropertiesMap = Record<
  ProvisioningArtifactPropertyName,
  string
>;
export type SourceRevision = string;

export type SourceType = "CODESTAR";
export interface StackInstance {
  Account?: string;
  Region?: string;
  StackInstanceStatus?: StackInstanceStatus;
}
export type StackInstances = Array<StackInstance>;
export type StackInstanceStatus = "CURRENT" | "OUTDATED" | "INOPERABLE";
export type StackSetAccounts = Array<string>;
export type StackSetFailureToleranceCount = number;

export type StackSetFailureTolerancePercentage = number;

export type StackSetMaxConcurrencyCount = number;

export type StackSetMaxConcurrencyPercentage = number;

export type StackSetOperationType = "CREATE" | "UPDATE" | "DELETE";
export type StackSetRegions = Array<string>;
export type Status = "AVAILABLE" | "CREATING" | "FAILED";
export type StatusDetail = string;

export type StatusMessage = string;

export type SuccessfulShares = Array<string>;
export type SupportDescription = string;

export type SupportEmail = string;

export type SupportUrl = string;

export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeys = Array<string>;
export type TagOptionActive = boolean;

export interface TagOptionDetail {
  Key?: string;
  Value?: string;
  Active?: boolean;
  Id?: string;
  Owner?: string;
}
export type TagOptionDetails = Array<TagOptionDetail>;
export type TagOptionId = string;

export type TagOptionKey = string;

export declare class TagOptionNotMigratedException extends Data.TaggedError(
  "TagOptionNotMigratedException",
)<{
  readonly Message?: string;
}> {}
export type TagOptionSummaries = Array<TagOptionSummary>;
export interface TagOptionSummary {
  Key?: string;
  Values?: Array<string>;
}
export type TagOptionValue = string;

export type TagOptionValues = Array<string>;
export type Tags = Array<Tag>;
export type TagValue = string;

export interface TerminateProvisionedProductInput {
  ProvisionedProductName?: string;
  ProvisionedProductId?: string;
  TerminateToken: string;
  IgnoreErrors?: boolean;
  AcceptLanguage?: string;
  RetainPhysicalResources?: boolean;
}
export interface TerminateProvisionedProductOutput {
  RecordDetail?: RecordDetail;
}
export type TotalResultsCount = number;

export type UniqueTagKey = string;

export interface UniqueTagResourceIdentifier {
  Key?: string;
  Value?: string;
}
export type UniqueTagValue = string;

export interface UpdateConstraintInput {
  AcceptLanguage?: string;
  Id: string;
  Description?: string;
  Parameters?: string;
}
export interface UpdateConstraintOutput {
  ConstraintDetail?: ConstraintDetail;
  ConstraintParameters?: string;
  Status?: Status;
}
export type UpdatedTime = Date | string;

export interface UpdatePortfolioInput {
  AcceptLanguage?: string;
  Id: string;
  DisplayName?: string;
  Description?: string;
  ProviderName?: string;
  AddTags?: Array<Tag>;
  RemoveTags?: Array<string>;
}
export interface UpdatePortfolioOutput {
  PortfolioDetail?: PortfolioDetail;
  Tags?: Array<Tag>;
}
export interface UpdatePortfolioShareInput {
  AcceptLanguage?: string;
  PortfolioId: string;
  AccountId?: string;
  OrganizationNode?: OrganizationNode;
  ShareTagOptions?: boolean;
  SharePrincipals?: boolean;
}
export interface UpdatePortfolioShareOutput {
  PortfolioShareToken?: string;
  Status?: ShareStatus;
}
export interface UpdateProductInput {
  AcceptLanguage?: string;
  Id: string;
  Name?: string;
  Owner?: string;
  Description?: string;
  Distributor?: string;
  SupportDescription?: string;
  SupportEmail?: string;
  SupportUrl?: string;
  AddTags?: Array<Tag>;
  RemoveTags?: Array<string>;
  SourceConnection?: SourceConnection;
}
export interface UpdateProductOutput {
  ProductViewDetail?: ProductViewDetail;
  Tags?: Array<Tag>;
}
export interface UpdateProvisionedProductInput {
  AcceptLanguage?: string;
  ProvisionedProductName?: string;
  ProvisionedProductId?: string;
  ProductId?: string;
  ProductName?: string;
  ProvisioningArtifactId?: string;
  ProvisioningArtifactName?: string;
  PathId?: string;
  PathName?: string;
  ProvisioningParameters?: Array<UpdateProvisioningParameter>;
  ProvisioningPreferences?: UpdateProvisioningPreferences;
  Tags?: Array<Tag>;
  UpdateToken: string;
}
export interface UpdateProvisionedProductOutput {
  RecordDetail?: RecordDetail;
}
export interface UpdateProvisionedProductPropertiesInput {
  AcceptLanguage?: string;
  ProvisionedProductId: string;
  ProvisionedProductProperties: Record<PropertyKey, string>;
  IdempotencyToken: string;
}
export interface UpdateProvisionedProductPropertiesOutput {
  ProvisionedProductId?: string;
  ProvisionedProductProperties?: Record<PropertyKey, string>;
  RecordId?: string;
  Status?: RecordStatus;
}
export interface UpdateProvisioningArtifactInput {
  AcceptLanguage?: string;
  ProductId: string;
  ProvisioningArtifactId: string;
  Name?: string;
  Description?: string;
  Active?: boolean;
  Guidance?: ProvisioningArtifactGuidance;
}
export interface UpdateProvisioningArtifactOutput {
  ProvisioningArtifactDetail?: ProvisioningArtifactDetail;
  Info?: Record<string, string>;
  Status?: Status;
}
export interface UpdateProvisioningParameter {
  Key?: string;
  Value?: string;
  UsePreviousValue?: boolean;
}
export type UpdateProvisioningParameters = Array<UpdateProvisioningParameter>;
export interface UpdateProvisioningPreferences {
  StackSetAccounts?: Array<string>;
  StackSetRegions?: Array<string>;
  StackSetFailureToleranceCount?: number;
  StackSetFailureTolerancePercentage?: number;
  StackSetMaxConcurrencyCount?: number;
  StackSetMaxConcurrencyPercentage?: number;
  StackSetOperationType?: StackSetOperationType;
}
export interface UpdateServiceActionInput {
  Id: string;
  Name?: string;
  Definition?: Record<ServiceActionDefinitionKey, string>;
  Description?: string;
  AcceptLanguage?: string;
}
export interface UpdateServiceActionOutput {
  ServiceActionDetail?: ServiceActionDetail;
}
export interface UpdateTagOptionInput {
  Id: string;
  Value?: string;
  Active?: boolean;
}
export interface UpdateTagOptionOutput {
  TagOptionDetail?: TagOptionDetail;
}
export interface UsageInstruction {
  Type?: string;
  Value?: string;
}
export type UsageInstructions = Array<UsageInstruction>;
export type UsePreviousValue = boolean;

export type UserArn = string;

export type UserArnSession = string;

export type Verbose = boolean;

export declare namespace AcceptPortfolioShare {
  export type Input = AcceptPortfolioShareInput;
  export type Output = AcceptPortfolioShareOutput;
  export type Error =
    | InvalidParametersException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace AssociateBudgetWithResource {
  export type Input = AssociateBudgetWithResourceInput;
  export type Output = AssociateBudgetWithResourceOutput;
  export type Error =
    | DuplicateResourceException
    | InvalidParametersException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace AssociatePrincipalWithPortfolio {
  export type Input = AssociatePrincipalWithPortfolioInput;
  export type Output = AssociatePrincipalWithPortfolioOutput;
  export type Error =
    | InvalidParametersException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace AssociateProductWithPortfolio {
  export type Input = AssociateProductWithPortfolioInput;
  export type Output = AssociateProductWithPortfolioOutput;
  export type Error =
    | InvalidParametersException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace AssociateServiceActionWithProvisioningArtifact {
  export type Input = AssociateServiceActionWithProvisioningArtifactInput;
  export type Output = AssociateServiceActionWithProvisioningArtifactOutput;
  export type Error =
    | DuplicateResourceException
    | InvalidParametersException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace AssociateTagOptionWithResource {
  export type Input = AssociateTagOptionWithResourceInput;
  export type Output = AssociateTagOptionWithResourceOutput;
  export type Error =
    | DuplicateResourceException
    | InvalidParametersException
    | InvalidStateException
    | LimitExceededException
    | ResourceNotFoundException
    | TagOptionNotMigratedException
    | CommonAwsError;
}

export declare namespace BatchAssociateServiceActionWithProvisioningArtifact {
  export type Input = BatchAssociateServiceActionWithProvisioningArtifactInput;
  export type Output =
    BatchAssociateServiceActionWithProvisioningArtifactOutput;
  export type Error = InvalidParametersException | CommonAwsError;
}

export declare namespace BatchDisassociateServiceActionFromProvisioningArtifact {
  export type Input =
    BatchDisassociateServiceActionFromProvisioningArtifactInput;
  export type Output =
    BatchDisassociateServiceActionFromProvisioningArtifactOutput;
  export type Error = InvalidParametersException | CommonAwsError;
}

export declare namespace CopyProduct {
  export type Input = CopyProductInput;
  export type Output = CopyProductOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateConstraint {
  export type Input = CreateConstraintInput;
  export type Output = CreateConstraintOutput;
  export type Error =
    | DuplicateResourceException
    | InvalidParametersException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreatePortfolio {
  export type Input = CreatePortfolioInput;
  export type Output = CreatePortfolioOutput;
  export type Error =
    | InvalidParametersException
    | LimitExceededException
    | TagOptionNotMigratedException
    | CommonAwsError;
}

export declare namespace CreatePortfolioShare {
  export type Input = CreatePortfolioShareInput;
  export type Output = CreatePortfolioShareOutput;
  export type Error =
    | InvalidParametersException
    | InvalidStateException
    | LimitExceededException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateProduct {
  export type Input = CreateProductInput;
  export type Output = CreateProductOutput;
  export type Error =
    | InvalidParametersException
    | LimitExceededException
    | TagOptionNotMigratedException
    | CommonAwsError;
}

export declare namespace CreateProvisionedProductPlan {
  export type Input = CreateProvisionedProductPlanInput;
  export type Output = CreateProvisionedProductPlanOutput;
  export type Error =
    | InvalidParametersException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateProvisioningArtifact {
  export type Input = CreateProvisioningArtifactInput;
  export type Output = CreateProvisioningArtifactOutput;
  export type Error =
    | InvalidParametersException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateServiceAction {
  export type Input = CreateServiceActionInput;
  export type Output = CreateServiceActionOutput;
  export type Error =
    | InvalidParametersException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace CreateTagOption {
  export type Input = CreateTagOptionInput;
  export type Output = CreateTagOptionOutput;
  export type Error =
    | DuplicateResourceException
    | LimitExceededException
    | TagOptionNotMigratedException
    | CommonAwsError;
}

export declare namespace DeleteConstraint {
  export type Input = DeleteConstraintInput;
  export type Output = DeleteConstraintOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeletePortfolio {
  export type Input = DeletePortfolioInput;
  export type Output = DeletePortfolioOutput;
  export type Error =
    | InvalidParametersException
    | ResourceInUseException
    | ResourceNotFoundException
    | TagOptionNotMigratedException
    | CommonAwsError;
}

export declare namespace DeletePortfolioShare {
  export type Input = DeletePortfolioShareInput;
  export type Output = DeletePortfolioShareOutput;
  export type Error =
    | InvalidParametersException
    | InvalidStateException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteProduct {
  export type Input = DeleteProductInput;
  export type Output = DeleteProductOutput;
  export type Error =
    | InvalidParametersException
    | ResourceInUseException
    | ResourceNotFoundException
    | TagOptionNotMigratedException
    | CommonAwsError;
}

export declare namespace DeleteProvisionedProductPlan {
  export type Input = DeleteProvisionedProductPlanInput;
  export type Output = DeleteProvisionedProductPlanOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteProvisioningArtifact {
  export type Input = DeleteProvisioningArtifactInput;
  export type Output = DeleteProvisioningArtifactOutput;
  export type Error =
    | InvalidParametersException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteServiceAction {
  export type Input = DeleteServiceActionInput;
  export type Output = DeleteServiceActionOutput;
  export type Error =
    | InvalidParametersException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteTagOption {
  export type Input = DeleteTagOptionInput;
  export type Output = DeleteTagOptionOutput;
  export type Error =
    | ResourceInUseException
    | ResourceNotFoundException
    | TagOptionNotMigratedException
    | CommonAwsError;
}

export declare namespace DescribeConstraint {
  export type Input = DescribeConstraintInput;
  export type Output = DescribeConstraintOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace DescribeCopyProductStatus {
  export type Input = DescribeCopyProductStatusInput;
  export type Output = DescribeCopyProductStatusOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace DescribePortfolio {
  export type Input = DescribePortfolioInput;
  export type Output = DescribePortfolioOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace DescribePortfolioShares {
  export type Input = DescribePortfolioSharesInput;
  export type Output = DescribePortfolioSharesOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribePortfolioShareStatus {
  export type Input = DescribePortfolioShareStatusInput;
  export type Output = DescribePortfolioShareStatusOutput;
  export type Error =
    | InvalidParametersException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeProduct {
  export type Input = DescribeProductInput;
  export type Output = DescribeProductOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeProductAsAdmin {
  export type Input = DescribeProductAsAdminInput;
  export type Output = DescribeProductAsAdminOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeProductView {
  export type Input = DescribeProductViewInput;
  export type Output = DescribeProductViewOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeProvisionedProduct {
  export type Input = DescribeProvisionedProductInput;
  export type Output = DescribeProvisionedProductOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeProvisionedProductPlan {
  export type Input = DescribeProvisionedProductPlanInput;
  export type Output = DescribeProvisionedProductPlanOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeProvisioningArtifact {
  export type Input = DescribeProvisioningArtifactInput;
  export type Output = DescribeProvisioningArtifactOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeProvisioningParameters {
  export type Input = DescribeProvisioningParametersInput;
  export type Output = DescribeProvisioningParametersOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeRecord {
  export type Input = DescribeRecordInput;
  export type Output = DescribeRecordOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace DescribeServiceAction {
  export type Input = DescribeServiceActionInput;
  export type Output = DescribeServiceActionOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace DescribeServiceActionExecutionParameters {
  export type Input = DescribeServiceActionExecutionParametersInput;
  export type Output = DescribeServiceActionExecutionParametersOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeTagOption {
  export type Input = DescribeTagOptionInput;
  export type Output = DescribeTagOptionOutput;
  export type Error =
    | ResourceNotFoundException
    | TagOptionNotMigratedException
    | CommonAwsError;
}

export declare namespace DisableAWSOrganizationsAccess {
  export type Input = DisableAWSOrganizationsAccessInput;
  export type Output = DisableAWSOrganizationsAccessOutput;
  export type Error =
    | InvalidStateException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisassociateBudgetFromResource {
  export type Input = DisassociateBudgetFromResourceInput;
  export type Output = DisassociateBudgetFromResourceOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace DisassociatePrincipalFromPortfolio {
  export type Input = DisassociatePrincipalFromPortfolioInput;
  export type Output = DisassociatePrincipalFromPortfolioOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisassociateProductFromPortfolio {
  export type Input = DisassociateProductFromPortfolioInput;
  export type Output = DisassociateProductFromPortfolioOutput;
  export type Error =
    | InvalidParametersException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisassociateServiceActionFromProvisioningArtifact {
  export type Input = DisassociateServiceActionFromProvisioningArtifactInput;
  export type Output = DisassociateServiceActionFromProvisioningArtifactOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisassociateTagOptionFromResource {
  export type Input = DisassociateTagOptionFromResourceInput;
  export type Output = DisassociateTagOptionFromResourceOutput;
  export type Error =
    | ResourceNotFoundException
    | TagOptionNotMigratedException
    | CommonAwsError;
}

export declare namespace EnableAWSOrganizationsAccess {
  export type Input = EnableAWSOrganizationsAccessInput;
  export type Output = EnableAWSOrganizationsAccessOutput;
  export type Error =
    | InvalidStateException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ExecuteProvisionedProductPlan {
  export type Input = ExecuteProvisionedProductPlanInput;
  export type Output = ExecuteProvisionedProductPlanOutput;
  export type Error =
    | InvalidParametersException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ExecuteProvisionedProductServiceAction {
  export type Input = ExecuteProvisionedProductServiceActionInput;
  export type Output = ExecuteProvisionedProductServiceActionOutput;
  export type Error =
    | InvalidParametersException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetAWSOrganizationsAccessStatus {
  export type Input = GetAWSOrganizationsAccessStatusInput;
  export type Output = GetAWSOrganizationsAccessStatusOutput;
  export type Error =
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetProvisionedProductOutputs {
  export type Input = GetProvisionedProductOutputsInput;
  export type Output = GetProvisionedProductOutputsOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ImportAsProvisionedProduct {
  export type Input = ImportAsProvisionedProductInput;
  export type Output = ImportAsProvisionedProductOutput;
  export type Error =
    | DuplicateResourceException
    | InvalidParametersException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListAcceptedPortfolioShares {
  export type Input = ListAcceptedPortfolioSharesInput;
  export type Output = ListAcceptedPortfolioSharesOutput;
  export type Error =
    | InvalidParametersException
    | OperationNotSupportedException
    | CommonAwsError;
}

export declare namespace ListBudgetsForResource {
  export type Input = ListBudgetsForResourceInput;
  export type Output = ListBudgetsForResourceOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListConstraintsForPortfolio {
  export type Input = ListConstraintsForPortfolioInput;
  export type Output = ListConstraintsForPortfolioOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListLaunchPaths {
  export type Input = ListLaunchPathsInput;
  export type Output = ListLaunchPathsOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListOrganizationPortfolioAccess {
  export type Input = ListOrganizationPortfolioAccessInput;
  export type Output = ListOrganizationPortfolioAccessOutput;
  export type Error =
    | InvalidParametersException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListPortfolioAccess {
  export type Input = ListPortfolioAccessInput;
  export type Output = ListPortfolioAccessOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListPortfolios {
  export type Input = ListPortfoliosInput;
  export type Output = ListPortfoliosOutput;
  export type Error = InvalidParametersException | CommonAwsError;
}

export declare namespace ListPortfoliosForProduct {
  export type Input = ListPortfoliosForProductInput;
  export type Output = ListPortfoliosForProductOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListPrincipalsForPortfolio {
  export type Input = ListPrincipalsForPortfolioInput;
  export type Output = ListPrincipalsForPortfolioOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListProvisionedProductPlans {
  export type Input = ListProvisionedProductPlansInput;
  export type Output = ListProvisionedProductPlansOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListProvisioningArtifacts {
  export type Input = ListProvisioningArtifactsInput;
  export type Output = ListProvisioningArtifactsOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListProvisioningArtifactsForServiceAction {
  export type Input = ListProvisioningArtifactsForServiceActionInput;
  export type Output = ListProvisioningArtifactsForServiceActionOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListRecordHistory {
  export type Input = ListRecordHistoryInput;
  export type Output = ListRecordHistoryOutput;
  export type Error = InvalidParametersException | CommonAwsError;
}

export declare namespace ListResourcesForTagOption {
  export type Input = ListResourcesForTagOptionInput;
  export type Output = ListResourcesForTagOptionOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | TagOptionNotMigratedException
    | CommonAwsError;
}

export declare namespace ListServiceActions {
  export type Input = ListServiceActionsInput;
  export type Output = ListServiceActionsOutput;
  export type Error = InvalidParametersException | CommonAwsError;
}

export declare namespace ListServiceActionsForProvisioningArtifact {
  export type Input = ListServiceActionsForProvisioningArtifactInput;
  export type Output = ListServiceActionsForProvisioningArtifactOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListStackInstancesForProvisionedProduct {
  export type Input = ListStackInstancesForProvisionedProductInput;
  export type Output = ListStackInstancesForProvisionedProductOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListTagOptions {
  export type Input = ListTagOptionsInput;
  export type Output = ListTagOptionsOutput;
  export type Error =
    | InvalidParametersException
    | TagOptionNotMigratedException
    | CommonAwsError;
}

export declare namespace NotifyProvisionProductEngineWorkflowResult {
  export type Input = NotifyProvisionProductEngineWorkflowResultInput;
  export type Output = NotifyProvisionProductEngineWorkflowResultOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace NotifyTerminateProvisionedProductEngineWorkflowResult {
  export type Input =
    NotifyTerminateProvisionedProductEngineWorkflowResultInput;
  export type Output =
    NotifyTerminateProvisionedProductEngineWorkflowResultOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace NotifyUpdateProvisionedProductEngineWorkflowResult {
  export type Input = NotifyUpdateProvisionedProductEngineWorkflowResultInput;
  export type Output = NotifyUpdateProvisionedProductEngineWorkflowResultOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ProvisionProduct {
  export type Input = ProvisionProductInput;
  export type Output = ProvisionProductOutput;
  export type Error =
    | DuplicateResourceException
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace RejectPortfolioShare {
  export type Input = RejectPortfolioShareInput;
  export type Output = RejectPortfolioShareOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace ScanProvisionedProducts {
  export type Input = ScanProvisionedProductsInput;
  export type Output = ScanProvisionedProductsOutput;
  export type Error = InvalidParametersException | CommonAwsError;
}

export declare namespace SearchProducts {
  export type Input = SearchProductsInput;
  export type Output = SearchProductsOutput;
  export type Error = InvalidParametersException | CommonAwsError;
}

export declare namespace SearchProductsAsAdmin {
  export type Input = SearchProductsAsAdminInput;
  export type Output = SearchProductsAsAdminOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace SearchProvisionedProducts {
  export type Input = SearchProvisionedProductsInput;
  export type Output = SearchProvisionedProductsOutput;
  export type Error = InvalidParametersException | CommonAwsError;
}

export declare namespace TerminateProvisionedProduct {
  export type Input = TerminateProvisionedProductInput;
  export type Output = TerminateProvisionedProductOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace UpdateConstraint {
  export type Input = UpdateConstraintInput;
  export type Output = UpdateConstraintOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdatePortfolio {
  export type Input = UpdatePortfolioInput;
  export type Output = UpdatePortfolioOutput;
  export type Error =
    | InvalidParametersException
    | LimitExceededException
    | ResourceNotFoundException
    | TagOptionNotMigratedException
    | CommonAwsError;
}

export declare namespace UpdatePortfolioShare {
  export type Input = UpdatePortfolioShareInput;
  export type Output = UpdatePortfolioShareOutput;
  export type Error =
    | InvalidParametersException
    | InvalidStateException
    | OperationNotSupportedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateProduct {
  export type Input = UpdateProductInput;
  export type Output = UpdateProductOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | TagOptionNotMigratedException
    | CommonAwsError;
}

export declare namespace UpdateProvisionedProduct {
  export type Input = UpdateProvisionedProductInput;
  export type Output = UpdateProvisionedProductOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateProvisionedProductProperties {
  export type Input = UpdateProvisionedProductPropertiesInput;
  export type Output = UpdateProvisionedProductPropertiesOutput;
  export type Error =
    | InvalidParametersException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateProvisioningArtifact {
  export type Input = UpdateProvisioningArtifactInput;
  export type Output = UpdateProvisioningArtifactOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateServiceAction {
  export type Input = UpdateServiceActionInput;
  export type Output = UpdateServiceActionOutput;
  export type Error =
    | InvalidParametersException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateTagOption {
  export type Input = UpdateTagOptionInput;
  export type Output = UpdateTagOptionOutput;
  export type Error =
    | DuplicateResourceException
    | InvalidParametersException
    | ResourceNotFoundException
    | TagOptionNotMigratedException
    | CommonAwsError;
}
