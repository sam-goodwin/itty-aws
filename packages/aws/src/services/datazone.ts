import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "DataZone", serviceShapeName: "DataZone" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "datazone" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-05-10");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { Region, UseFIPS = false, Endpoint } = p;
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
        if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
          if (UseFIPS === true) {
            if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
              return e(
                `https://datazone-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
              );
            }
            return err("FIPS is enabled but this partition does not support FIPS");
          }
          return e(
            `https://datazone.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://datazone-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        return e(`https://datazone.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
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
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type DomainId = string;
export type AssetIdentifier = string;
export type Revision = string;
export type AcceptRuleBehavior = "ALL" | "NONE" | (string & {});
export interface AcceptRule {
  rule?: AcceptRuleBehavior;
  threshold?: number;
}
export type EditedValue = string | redacted.Redacted<string>;
export interface AcceptChoice {
  predictionTarget?: string;
  predictionChoice?: number;
  editedValue?: string | redacted.Redacted<string>;
}
export type AcceptChoices = AcceptChoice[];
export type ClientToken = string;
export interface AcceptPredictionsInput {
  domainIdentifier: string;
  identifier: string;
  revision?: string;
  acceptRule?: AcceptRule;
  acceptChoices?: AcceptChoice[];
  clientToken?: string;
}
export type AssetId = string;
export interface AcceptPredictionsOutput {
  domainId: string;
  assetId: string;
  revision: string;
}
export type SubscriptionRequestId = string;
export type DecisionComment = string | redacted.Redacted<string>;
export type FilterId = string;
export type FilterIds = string[];
export interface AcceptedAssetScope {
  assetId: string;
  filterIds: string[];
}
export type AcceptedAssetScopes = AcceptedAssetScope[];
export type S3Permission = "READ" | "WRITE" | (string & {});
export type S3Permissions = S3Permission[];
export type Permissions = { s3: S3Permission[] };
export interface AssetPermission {
  assetId: string;
  permissions: Permissions;
}
export type AssetPermissions = AssetPermission[];
export interface AcceptSubscriptionRequestInput {
  domainIdentifier: string;
  identifier: string;
  decisionComment?: string | redacted.Redacted<string>;
  assetScopes?: AcceptedAssetScope[];
  assetPermissions?: AssetPermission[];
}
export type CreatedBy = string;
export type UpdatedBy = string;
export type SubscriptionRequestStatus = "PENDING" | "ACCEPTED" | "REJECTED" | (string & {});
export type CreatedAt = Date;
export type UpdatedAt = Date;
export type RequestReason = string | redacted.Redacted<string>;
export type ProjectId = string;
export type ProjectName = string | redacted.Redacted<string>;
export interface SubscribedProject {
  id?: string;
  name?: string | redacted.Redacted<string>;
}
export type UserProfileId = string;
export interface IamUserProfileDetails {
  arn?: string;
  principalId?: string;
  sessionName?: string;
  groupProfileId?: string;
}
export type UserProfileName = string | redacted.Redacted<string>;
export type FirstName = string | redacted.Redacted<string>;
export type LastName = string | redacted.Redacted<string>;
export interface SsoUserProfileDetails {
  username?: string | redacted.Redacted<string>;
  firstName?: string | redacted.Redacted<string>;
  lastName?: string | redacted.Redacted<string>;
}
export type UserProfileDetails =
  | { iam: IamUserProfileDetails; sso?: never }
  | { iam?: never; sso: SsoUserProfileDetails };
export interface SubscribedUser {
  id?: string;
  details?: UserProfileDetails;
}
export type GroupProfileId = string;
export type GroupProfileName = string | redacted.Redacted<string>;
export interface SubscribedGroup {
  id?: string;
  name?: string | redacted.Redacted<string>;
}
export type IamPrincipalArn = string;
export interface SubscribedIamPrincipal {
  principalArn?: string;
}
export type SubscribedPrincipal =
  | { project: SubscribedProject; user?: never; group?: never; iam?: never }
  | { project?: never; user: SubscribedUser; group?: never; iam?: never }
  | { project?: never; user?: never; group: SubscribedGroup; iam?: never }
  | { project?: never; user?: never; group?: never; iam: SubscribedIamPrincipal };
export type SubscribedPrincipals = SubscribedPrincipal[];
export type ListingId = string;
export type ListingName = string;
export type Description = string | redacted.Redacted<string>;
export type TypeName = string;
export type Forms = string;
export type GlossaryTermName = string | redacted.Redacted<string>;
export type ShortDescription = string | redacted.Redacted<string>;
export interface DetailedGlossaryTerm {
  name?: string | redacted.Redacted<string>;
  shortDescription?: string | redacted.Redacted<string>;
}
export type DetailedGlossaryTerms = DetailedGlossaryTerm[];
export interface AssetScope {
  assetId: string;
  filterIds: string[];
  status: string;
  scopeName?: string;
  errorMessage?: string;
}
export interface SubscribedAssetListing {
  entityId?: string;
  entityRevision?: string;
  entityType?: string;
  forms?: string;
  glossaryTerms?: DetailedGlossaryTerm[];
  assetScope?: AssetScope;
  permissions?: Permissions;
}
export interface AssetInDataProductListingItem {
  entityId?: string;
  entityRevision?: string;
  entityType?: string;
}
export type AssetInDataProductListingItems = AssetInDataProductListingItem[];
export interface SubscribedProductListing {
  entityId?: string;
  entityRevision?: string;
  glossaryTerms?: DetailedGlossaryTerm[];
  name?: string;
  description?: string;
  assetListings?: AssetInDataProductListingItem[];
}
export type SubscribedListingItem =
  | { assetListing: SubscribedAssetListing; productListing?: never }
  | { assetListing?: never; productListing: SubscribedProductListing };
export interface SubscribedListing {
  id: string;
  revision?: string;
  name: string;
  description: string | redacted.Redacted<string>;
  item: SubscribedListingItem;
  ownerProjectId: string;
  ownerProjectName?: string;
}
export type SubscribedListings = SubscribedListing[];
export type SubscriptionId = string;
export type FormName = string;
export type FormTypeName = string | redacted.Redacted<string>;
export interface FormOutput {
  formName: string;
  typeName?: string | redacted.Redacted<string>;
  typeRevision?: string;
  content?: string;
}
export type MetadataForms = FormOutput[];
export interface AcceptSubscriptionRequestOutput {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  status: SubscriptionRequestStatus;
  createdAt: Date;
  updatedAt: Date;
  requestReason: string | redacted.Redacted<string>;
  subscribedPrincipals: SubscribedPrincipal[];
  subscribedListings: SubscribedListing[];
  reviewerId?: string;
  decisionComment?: string | redacted.Redacted<string>;
  existingSubscriptionId?: string;
  metadataForms?: FormOutput[];
}
export type DataZoneEntityType = "DOMAIN_UNIT" | (string & {});
export type UserIdentifier = string;
export interface OwnerUserProperties {
  userIdentifier: string;
}
export type GroupIdentifier = string;
export interface OwnerGroupProperties {
  groupIdentifier: string;
}
export type OwnerProperties =
  | { user: OwnerUserProperties; group?: never }
  | { user?: never; group: OwnerGroupProperties };
export interface AddEntityOwnerInput {
  domainIdentifier: string;
  entityType: DataZoneEntityType;
  entityIdentifier: string;
  owner: OwnerProperties;
  clientToken?: string;
}
export interface AddEntityOwnerOutput {}
export type TargetEntityType =
  | "DOMAIN_UNIT"
  | "ENVIRONMENT_BLUEPRINT_CONFIGURATION"
  | "ENVIRONMENT_PROFILE"
  | "ASSET_TYPE"
  | (string & {});
export type ManagedPolicyType =
  | "CREATE_DOMAIN_UNIT"
  | "OVERRIDE_DOMAIN_UNIT_OWNERS"
  | "ADD_TO_PROJECT_MEMBER_POOL"
  | "OVERRIDE_PROJECT_OWNERS"
  | "CREATE_GLOSSARY"
  | "CREATE_FORM_TYPE"
  | "CREATE_ASSET_TYPE"
  | "CREATE_PROJECT"
  | "CREATE_ENVIRONMENT_PROFILE"
  | "DELEGATE_CREATE_ENVIRONMENT_PROFILE"
  | "CREATE_ENVIRONMENT"
  | "CREATE_ENVIRONMENT_FROM_BLUEPRINT"
  | "CREATE_PROJECT_FROM_PROJECT_PROFILE"
  | "USE_ASSET_TYPE"
  | (string & {});
export interface AllUsersGrantFilter {}
export type UserPolicyGrantPrincipal =
  | { userIdentifier: string; allUsersGrantFilter?: never }
  | { userIdentifier?: never; allUsersGrantFilter: AllUsersGrantFilter };
export type GroupPolicyGrantPrincipal = { groupIdentifier: string };
export type ProjectDesignation =
  | "OWNER"
  | "CONTRIBUTOR"
  | "PROJECT_CATALOG_STEWARD"
  | (string & {});
export type DomainUnitId = string;
export interface DomainUnitFilterForProject {
  domainUnit: string;
  includeChildDomainUnits?: boolean;
}
export type ProjectGrantFilter = { domainUnitFilter: DomainUnitFilterForProject };
export interface ProjectPolicyGrantPrincipal {
  projectDesignation: ProjectDesignation;
  projectIdentifier?: string;
  projectGrantFilter?: ProjectGrantFilter;
}
export type DomainUnitDesignation = "OWNER" | (string & {});
export interface AllDomainUnitsGrantFilter {}
export type DomainUnitGrantFilter = { allDomainUnitsGrantFilter: AllDomainUnitsGrantFilter };
export interface DomainUnitPolicyGrantPrincipal {
  domainUnitDesignation: DomainUnitDesignation;
  domainUnitIdentifier?: string;
  domainUnitGrantFilter?: DomainUnitGrantFilter;
}
export type PolicyGrantPrincipal =
  | { user: UserPolicyGrantPrincipal; group?: never; project?: never; domainUnit?: never }
  | { user?: never; group: GroupPolicyGrantPrincipal; project?: never; domainUnit?: never }
  | { user?: never; group?: never; project: ProjectPolicyGrantPrincipal; domainUnit?: never }
  | { user?: never; group?: never; project?: never; domainUnit: DomainUnitPolicyGrantPrincipal };
export interface CreateDomainUnitPolicyGrantDetail {
  includeChildDomainUnits?: boolean;
}
export interface OverrideDomainUnitOwnersPolicyGrantDetail {
  includeChildDomainUnits?: boolean;
}
export interface AddToProjectMemberPoolPolicyGrantDetail {
  includeChildDomainUnits?: boolean;
}
export interface OverrideProjectOwnersPolicyGrantDetail {
  includeChildDomainUnits?: boolean;
}
export interface CreateGlossaryPolicyGrantDetail {
  includeChildDomainUnits?: boolean;
}
export interface CreateFormTypePolicyGrantDetail {
  includeChildDomainUnits?: boolean;
}
export interface CreateAssetTypePolicyGrantDetail {
  includeChildDomainUnits?: boolean;
}
export interface CreateProjectPolicyGrantDetail {
  includeChildDomainUnits?: boolean;
}
export interface CreateEnvironmentProfilePolicyGrantDetail {
  domainUnitId?: string;
}
export interface Unit {}
export type ProjectProfileList = string[];
export interface CreateProjectFromProjectProfilePolicyGrantDetail {
  includeChildDomainUnits?: boolean;
  projectProfiles?: string[];
}
export interface UseAssetTypePolicyGrantDetail {
  domainUnitId?: string;
}
export type PolicyGrantDetail =
  | {
      createDomainUnit: CreateDomainUnitPolicyGrantDetail;
      overrideDomainUnitOwners?: never;
      addToProjectMemberPool?: never;
      overrideProjectOwners?: never;
      createGlossary?: never;
      createFormType?: never;
      createAssetType?: never;
      createProject?: never;
      createEnvironmentProfile?: never;
      delegateCreateEnvironmentProfile?: never;
      createEnvironment?: never;
      createEnvironmentFromBlueprint?: never;
      createProjectFromProjectProfile?: never;
      useAssetType?: never;
    }
  | {
      createDomainUnit?: never;
      overrideDomainUnitOwners: OverrideDomainUnitOwnersPolicyGrantDetail;
      addToProjectMemberPool?: never;
      overrideProjectOwners?: never;
      createGlossary?: never;
      createFormType?: never;
      createAssetType?: never;
      createProject?: never;
      createEnvironmentProfile?: never;
      delegateCreateEnvironmentProfile?: never;
      createEnvironment?: never;
      createEnvironmentFromBlueprint?: never;
      createProjectFromProjectProfile?: never;
      useAssetType?: never;
    }
  | {
      createDomainUnit?: never;
      overrideDomainUnitOwners?: never;
      addToProjectMemberPool: AddToProjectMemberPoolPolicyGrantDetail;
      overrideProjectOwners?: never;
      createGlossary?: never;
      createFormType?: never;
      createAssetType?: never;
      createProject?: never;
      createEnvironmentProfile?: never;
      delegateCreateEnvironmentProfile?: never;
      createEnvironment?: never;
      createEnvironmentFromBlueprint?: never;
      createProjectFromProjectProfile?: never;
      useAssetType?: never;
    }
  | {
      createDomainUnit?: never;
      overrideDomainUnitOwners?: never;
      addToProjectMemberPool?: never;
      overrideProjectOwners: OverrideProjectOwnersPolicyGrantDetail;
      createGlossary?: never;
      createFormType?: never;
      createAssetType?: never;
      createProject?: never;
      createEnvironmentProfile?: never;
      delegateCreateEnvironmentProfile?: never;
      createEnvironment?: never;
      createEnvironmentFromBlueprint?: never;
      createProjectFromProjectProfile?: never;
      useAssetType?: never;
    }
  | {
      createDomainUnit?: never;
      overrideDomainUnitOwners?: never;
      addToProjectMemberPool?: never;
      overrideProjectOwners?: never;
      createGlossary: CreateGlossaryPolicyGrantDetail;
      createFormType?: never;
      createAssetType?: never;
      createProject?: never;
      createEnvironmentProfile?: never;
      delegateCreateEnvironmentProfile?: never;
      createEnvironment?: never;
      createEnvironmentFromBlueprint?: never;
      createProjectFromProjectProfile?: never;
      useAssetType?: never;
    }
  | {
      createDomainUnit?: never;
      overrideDomainUnitOwners?: never;
      addToProjectMemberPool?: never;
      overrideProjectOwners?: never;
      createGlossary?: never;
      createFormType: CreateFormTypePolicyGrantDetail;
      createAssetType?: never;
      createProject?: never;
      createEnvironmentProfile?: never;
      delegateCreateEnvironmentProfile?: never;
      createEnvironment?: never;
      createEnvironmentFromBlueprint?: never;
      createProjectFromProjectProfile?: never;
      useAssetType?: never;
    }
  | {
      createDomainUnit?: never;
      overrideDomainUnitOwners?: never;
      addToProjectMemberPool?: never;
      overrideProjectOwners?: never;
      createGlossary?: never;
      createFormType?: never;
      createAssetType: CreateAssetTypePolicyGrantDetail;
      createProject?: never;
      createEnvironmentProfile?: never;
      delegateCreateEnvironmentProfile?: never;
      createEnvironment?: never;
      createEnvironmentFromBlueprint?: never;
      createProjectFromProjectProfile?: never;
      useAssetType?: never;
    }
  | {
      createDomainUnit?: never;
      overrideDomainUnitOwners?: never;
      addToProjectMemberPool?: never;
      overrideProjectOwners?: never;
      createGlossary?: never;
      createFormType?: never;
      createAssetType?: never;
      createProject: CreateProjectPolicyGrantDetail;
      createEnvironmentProfile?: never;
      delegateCreateEnvironmentProfile?: never;
      createEnvironment?: never;
      createEnvironmentFromBlueprint?: never;
      createProjectFromProjectProfile?: never;
      useAssetType?: never;
    }
  | {
      createDomainUnit?: never;
      overrideDomainUnitOwners?: never;
      addToProjectMemberPool?: never;
      overrideProjectOwners?: never;
      createGlossary?: never;
      createFormType?: never;
      createAssetType?: never;
      createProject?: never;
      createEnvironmentProfile: CreateEnvironmentProfilePolicyGrantDetail;
      delegateCreateEnvironmentProfile?: never;
      createEnvironment?: never;
      createEnvironmentFromBlueprint?: never;
      createProjectFromProjectProfile?: never;
      useAssetType?: never;
    }
  | {
      createDomainUnit?: never;
      overrideDomainUnitOwners?: never;
      addToProjectMemberPool?: never;
      overrideProjectOwners?: never;
      createGlossary?: never;
      createFormType?: never;
      createAssetType?: never;
      createProject?: never;
      createEnvironmentProfile?: never;
      delegateCreateEnvironmentProfile: Unit;
      createEnvironment?: never;
      createEnvironmentFromBlueprint?: never;
      createProjectFromProjectProfile?: never;
      useAssetType?: never;
    }
  | {
      createDomainUnit?: never;
      overrideDomainUnitOwners?: never;
      addToProjectMemberPool?: never;
      overrideProjectOwners?: never;
      createGlossary?: never;
      createFormType?: never;
      createAssetType?: never;
      createProject?: never;
      createEnvironmentProfile?: never;
      delegateCreateEnvironmentProfile?: never;
      createEnvironment: Unit;
      createEnvironmentFromBlueprint?: never;
      createProjectFromProjectProfile?: never;
      useAssetType?: never;
    }
  | {
      createDomainUnit?: never;
      overrideDomainUnitOwners?: never;
      addToProjectMemberPool?: never;
      overrideProjectOwners?: never;
      createGlossary?: never;
      createFormType?: never;
      createAssetType?: never;
      createProject?: never;
      createEnvironmentProfile?: never;
      delegateCreateEnvironmentProfile?: never;
      createEnvironment?: never;
      createEnvironmentFromBlueprint: Unit;
      createProjectFromProjectProfile?: never;
      useAssetType?: never;
    }
  | {
      createDomainUnit?: never;
      overrideDomainUnitOwners?: never;
      addToProjectMemberPool?: never;
      overrideProjectOwners?: never;
      createGlossary?: never;
      createFormType?: never;
      createAssetType?: never;
      createProject?: never;
      createEnvironmentProfile?: never;
      delegateCreateEnvironmentProfile?: never;
      createEnvironment?: never;
      createEnvironmentFromBlueprint?: never;
      createProjectFromProjectProfile: CreateProjectFromProjectProfilePolicyGrantDetail;
      useAssetType?: never;
    }
  | {
      createDomainUnit?: never;
      overrideDomainUnitOwners?: never;
      addToProjectMemberPool?: never;
      overrideProjectOwners?: never;
      createGlossary?: never;
      createFormType?: never;
      createAssetType?: never;
      createProject?: never;
      createEnvironmentProfile?: never;
      delegateCreateEnvironmentProfile?: never;
      createEnvironment?: never;
      createEnvironmentFromBlueprint?: never;
      createProjectFromProjectProfile?: never;
      useAssetType: UseAssetTypePolicyGrantDetail;
    };
export interface AddPolicyGrantInput {
  domainIdentifier: string;
  entityType: TargetEntityType;
  entityIdentifier: string;
  policyType: ManagedPolicyType;
  principal: PolicyGrantPrincipal;
  detail: PolicyGrantDetail;
  clientToken?: string;
}
export type GrantIdentifier = string;
export interface AddPolicyGrantOutput {
  grantId?: string;
}
export type EnvironmentId = string;
export interface AssociateEnvironmentRoleInput {
  domainIdentifier: string;
  environmentIdentifier: string;
  environmentRoleArn: string;
}
export interface AssociateEnvironmentRoleOutput {}
export type EntityIdentifier = string;
export type GovernedEntityType = "ASSET" | (string & {});
export type GlossaryTermId = string;
export type GovernedGlossaryTerms = string[];
export interface AssociateGovernedTermsInput {
  domainIdentifier: string;
  entityIdentifier: string;
  entityType: GovernedEntityType;
  governedGlossaryTerms: string[];
}
export interface AssociateGovernedTermsOutput {}
export type AttributeEntityType = "ASSET" | "LISTING" | (string & {});
export type EntityId = string;
export type AttributeIdentifier = string;
export type AttributesList = string[];
export interface BatchGetAttributesMetadataInput {
  domainIdentifier: string;
  entityType: AttributeEntityType;
  entityIdentifier: string;
  entityRevision?: string;
  attributeIdentifiers: string[];
}
export type FormOutputList = FormOutput[];
export interface BatchGetAttributeOutput {
  attributeIdentifier: string;
  forms?: FormOutput[];
}
export type BatchGetAttributeItems = BatchGetAttributeOutput[];
export interface AttributeError {
  attributeIdentifier: string;
  code: string;
  message: string;
}
export type AttributesErrors = AttributeError[];
export interface BatchGetAttributesMetadataOutput {
  attributes?: BatchGetAttributeOutput[];
  errors: AttributeError[];
}
export type FormTypeIdentifier = string;
export type RevisionInput = string;
export interface FormInput {
  formName: string;
  typeIdentifier?: string;
  typeRevision?: string;
  content?: string;
}
export type FormInputList = FormInput[];
export interface AttributeInput {
  attributeIdentifier: string;
  forms: FormInput[];
}
export type Attributes = AttributeInput[];
export interface BatchPutAttributesMetadataInput {
  domainIdentifier: string;
  entityType: AttributeEntityType;
  entityIdentifier: string;
  clientToken?: string;
  attributes: AttributeInput[];
}
export interface BatchPutAttributeOutput {
  attributeIdentifier: string;
}
export type BatchPutAttributeItems = BatchPutAttributeOutput[];
export interface BatchPutAttributesMetadataOutput {
  errors?: AttributeError[];
  attributes?: BatchPutAttributeOutput[];
}
export type MetadataGenerationRunIdentifier = string;
export interface CancelMetadataGenerationRunInput {
  domainIdentifier: string;
  identifier: string;
}
export interface CancelMetadataGenerationRunOutput {}
export interface CancelSubscriptionInput {
  domainIdentifier: string;
  identifier: string;
}
export type SubscriptionStatus = "APPROVED" | "REVOKED" | "CANCELLED" | (string & {});
export interface CancelSubscriptionOutput {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  status: SubscriptionStatus;
  createdAt: Date;
  updatedAt: Date;
  subscribedPrincipal: SubscribedPrincipal;
  subscribedListing: SubscribedListing;
  subscriptionRequestId?: string;
  retainPermissions?: boolean;
}
export type AccountPoolName = string | redacted.Redacted<string>;
export type ResolutionStrategy = "MANUAL" | (string & {});
export type AwsAccountId = string;
export type AwsRegion = string;
export type AwsRegionList = string[];
export type AwsAccountName = string | redacted.Redacted<string>;
export interface AccountInfo {
  awsAccountId: string;
  supportedRegions: string[];
  awsAccountName?: string | redacted.Redacted<string>;
}
export type AccountInfoList = AccountInfo[];
export type LambdaFunctionArn = string;
export type LambdaExecutionRoleArn = string;
export interface CustomAccountPoolHandler {
  lambdaFunctionArn: string;
  lambdaExecutionRoleArn?: string;
}
export type AccountSource =
  | { accounts: AccountInfo[]; customAccountPoolHandler?: never }
  | { accounts?: never; customAccountPoolHandler: CustomAccountPoolHandler };
export interface CreateAccountPoolInput {
  domainIdentifier: string;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  resolutionStrategy: ResolutionStrategy;
  accountSource: AccountSource;
}
export type AccountPoolId = string;
export interface CreateAccountPoolOutput {
  domainId?: string;
  name?: string | redacted.Redacted<string>;
  id?: string;
  description?: string | redacted.Redacted<string>;
  resolutionStrategy?: ResolutionStrategy;
  accountSource: AccountSource;
  createdBy: string;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  updatedBy?: string;
  domainUnitId?: string;
}
export type AssetName = string | redacted.Redacted<string>;
export type ExternalIdentifier = string;
export type AssetTypeIdentifier = string;
export type GlossaryTerms = string[];
export interface BusinessNameGenerationConfiguration {
  enabled?: boolean;
}
export interface PredictionConfiguration {
  businessNameGeneration?: BusinessNameGenerationConfiguration;
}
export interface CreateAssetInput {
  name: string | redacted.Redacted<string>;
  domainIdentifier: string;
  externalIdentifier?: string;
  typeIdentifier: string;
  typeRevision?: string;
  description?: string | redacted.Redacted<string>;
  glossaryTerms?: string[];
  formsInput?: FormInput[];
  owningProjectIdentifier: string;
  predictionConfiguration?: PredictionConfiguration;
  clientToken?: string;
}
export type ListingStatus = "CREATING" | "ACTIVE" | "INACTIVE" | (string & {});
export interface AssetListingDetails {
  listingId: string;
  listingStatus: ListingStatus;
}
export type TimeSeriesFormName = string;
export type DataPointIdentifier = string;
export interface TimeSeriesDataPointSummaryFormOutput {
  formName: string;
  typeIdentifier: string;
  typeRevision?: string;
  timestamp: Date;
  contentSummary?: string;
  id?: string;
}
export type TimeSeriesDataPointSummaryFormOutputList = TimeSeriesDataPointSummaryFormOutput[];
export interface CreateAssetOutput {
  id: string;
  name: string | redacted.Redacted<string>;
  typeIdentifier: string;
  typeRevision: string;
  externalIdentifier?: string;
  revision: string;
  description?: string | redacted.Redacted<string>;
  createdAt?: Date;
  createdBy?: string;
  firstRevisionCreatedAt?: Date;
  firstRevisionCreatedBy?: string;
  glossaryTerms?: string[];
  governedGlossaryTerms?: string[];
  owningProjectId: string;
  domainId: string;
  listing?: AssetListingDetails;
  formsOutput: FormOutput[];
  readOnlyFormsOutput?: FormOutput[];
  latestTimeSeriesDataPointFormsOutput?: TimeSeriesDataPointSummaryFormOutput[];
  predictionConfiguration?: PredictionConfiguration;
}
export type FilterName = string | redacted.Redacted<string>;
export type ColumnNameList = string[];
export interface ColumnFilterConfiguration {
  includedColumnNames?: string[];
}
export interface EqualToExpression {
  columnName: string;
  value: string;
}
export interface NotEqualToExpression {
  columnName: string;
  value: string;
}
export interface GreaterThanExpression {
  columnName: string;
  value: string;
}
export interface LessThanExpression {
  columnName: string;
  value: string;
}
export interface GreaterThanOrEqualToExpression {
  columnName: string;
  value: string;
}
export interface LessThanOrEqualToExpression {
  columnName: string;
  value: string;
}
export interface IsNullExpression {
  columnName: string;
}
export interface IsNotNullExpression {
  columnName: string;
}
export type StringList = string[];
export interface InExpression {
  columnName: string;
  values: string[];
}
export interface NotInExpression {
  columnName: string;
  values: string[];
}
export interface LikeExpression {
  columnName: string;
  value: string;
}
export interface NotLikeExpression {
  columnName: string;
  value: string;
}
export type RowFilterExpression =
  | {
      equalTo: EqualToExpression;
      notEqualTo?: never;
      greaterThan?: never;
      lessThan?: never;
      greaterThanOrEqualTo?: never;
      lessThanOrEqualTo?: never;
      isNull?: never;
      isNotNull?: never;
      in?: never;
      notIn?: never;
      like?: never;
      notLike?: never;
    }
  | {
      equalTo?: never;
      notEqualTo: NotEqualToExpression;
      greaterThan?: never;
      lessThan?: never;
      greaterThanOrEqualTo?: never;
      lessThanOrEqualTo?: never;
      isNull?: never;
      isNotNull?: never;
      in?: never;
      notIn?: never;
      like?: never;
      notLike?: never;
    }
  | {
      equalTo?: never;
      notEqualTo?: never;
      greaterThan: GreaterThanExpression;
      lessThan?: never;
      greaterThanOrEqualTo?: never;
      lessThanOrEqualTo?: never;
      isNull?: never;
      isNotNull?: never;
      in?: never;
      notIn?: never;
      like?: never;
      notLike?: never;
    }
  | {
      equalTo?: never;
      notEqualTo?: never;
      greaterThan?: never;
      lessThan: LessThanExpression;
      greaterThanOrEqualTo?: never;
      lessThanOrEqualTo?: never;
      isNull?: never;
      isNotNull?: never;
      in?: never;
      notIn?: never;
      like?: never;
      notLike?: never;
    }
  | {
      equalTo?: never;
      notEqualTo?: never;
      greaterThan?: never;
      lessThan?: never;
      greaterThanOrEqualTo: GreaterThanOrEqualToExpression;
      lessThanOrEqualTo?: never;
      isNull?: never;
      isNotNull?: never;
      in?: never;
      notIn?: never;
      like?: never;
      notLike?: never;
    }
  | {
      equalTo?: never;
      notEqualTo?: never;
      greaterThan?: never;
      lessThan?: never;
      greaterThanOrEqualTo?: never;
      lessThanOrEqualTo: LessThanOrEqualToExpression;
      isNull?: never;
      isNotNull?: never;
      in?: never;
      notIn?: never;
      like?: never;
      notLike?: never;
    }
  | {
      equalTo?: never;
      notEqualTo?: never;
      greaterThan?: never;
      lessThan?: never;
      greaterThanOrEqualTo?: never;
      lessThanOrEqualTo?: never;
      isNull: IsNullExpression;
      isNotNull?: never;
      in?: never;
      notIn?: never;
      like?: never;
      notLike?: never;
    }
  | {
      equalTo?: never;
      notEqualTo?: never;
      greaterThan?: never;
      lessThan?: never;
      greaterThanOrEqualTo?: never;
      lessThanOrEqualTo?: never;
      isNull?: never;
      isNotNull: IsNotNullExpression;
      in?: never;
      notIn?: never;
      like?: never;
      notLike?: never;
    }
  | {
      equalTo?: never;
      notEqualTo?: never;
      greaterThan?: never;
      lessThan?: never;
      greaterThanOrEqualTo?: never;
      lessThanOrEqualTo?: never;
      isNull?: never;
      isNotNull?: never;
      in: InExpression;
      notIn?: never;
      like?: never;
      notLike?: never;
    }
  | {
      equalTo?: never;
      notEqualTo?: never;
      greaterThan?: never;
      lessThan?: never;
      greaterThanOrEqualTo?: never;
      lessThanOrEqualTo?: never;
      isNull?: never;
      isNotNull?: never;
      in?: never;
      notIn: NotInExpression;
      like?: never;
      notLike?: never;
    }
  | {
      equalTo?: never;
      notEqualTo?: never;
      greaterThan?: never;
      lessThan?: never;
      greaterThanOrEqualTo?: never;
      lessThanOrEqualTo?: never;
      isNull?: never;
      isNotNull?: never;
      in?: never;
      notIn?: never;
      like: LikeExpression;
      notLike?: never;
    }
  | {
      equalTo?: never;
      notEqualTo?: never;
      greaterThan?: never;
      lessThan?: never;
      greaterThanOrEqualTo?: never;
      lessThanOrEqualTo?: never;
      isNull?: never;
      isNotNull?: never;
      in?: never;
      notIn?: never;
      like?: never;
      notLike: NotLikeExpression;
    };
export type RowFilterList = RowFilter[];
export type RowFilter =
  | { expression: RowFilterExpression; and?: never; or?: never }
  | { expression?: never; and: RowFilter[]; or?: never }
  | { expression?: never; and?: never; or: RowFilter[] };
export interface RowFilterConfiguration {
  rowFilter: RowFilter;
  sensitive?: boolean;
}
export type AssetFilterConfiguration =
  | { columnConfiguration: ColumnFilterConfiguration; rowConfiguration?: never }
  | { columnConfiguration?: never; rowConfiguration: RowFilterConfiguration };
export interface CreateAssetFilterInput {
  domainIdentifier: string;
  assetIdentifier: string;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  configuration: AssetFilterConfiguration;
  clientToken?: string;
}
export type FilterStatus = "VALID" | "INVALID" | (string & {});
export interface CreateAssetFilterOutput {
  id: string;
  domainId: string;
  assetId: string;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  status?: FilterStatus;
  configuration: AssetFilterConfiguration;
  createdAt?: Date;
  errorMessage?: string;
  effectiveColumnNames?: string[];
  effectiveRowFilter?: string;
}
export interface CreateAssetRevisionInput {
  name: string | redacted.Redacted<string>;
  domainIdentifier: string;
  identifier: string;
  typeRevision?: string;
  description?: string | redacted.Redacted<string>;
  glossaryTerms?: string[];
  formsInput?: FormInput[];
  predictionConfiguration?: PredictionConfiguration;
  clientToken?: string;
}
export interface CreateAssetRevisionOutput {
  id: string;
  name: string | redacted.Redacted<string>;
  typeIdentifier: string;
  typeRevision: string;
  externalIdentifier?: string;
  revision: string;
  description?: string | redacted.Redacted<string>;
  createdAt?: Date;
  createdBy?: string;
  firstRevisionCreatedAt?: Date;
  firstRevisionCreatedBy?: string;
  glossaryTerms?: string[];
  governedGlossaryTerms?: string[];
  owningProjectId: string;
  domainId: string;
  listing?: AssetListingDetails;
  formsOutput: FormOutput[];
  readOnlyFormsOutput?: FormOutput[];
  latestTimeSeriesDataPointFormsOutput?: TimeSeriesDataPointSummaryFormOutput[];
  predictionConfiguration?: PredictionConfiguration;
}
export interface FormEntryInput {
  typeIdentifier: string;
  typeRevision: string;
  required?: boolean;
}
export type FormsInputMap = { [key: string]: FormEntryInput | undefined };
export interface CreateAssetTypeInput {
  domainIdentifier: string;
  name: string;
  description?: string | redacted.Redacted<string>;
  formsInput: { [key: string]: FormEntryInput | undefined };
  owningProjectIdentifier: string;
}
export interface FormEntryOutput {
  typeName: string | redacted.Redacted<string>;
  typeRevision: string;
  required?: boolean;
}
export type FormsOutputMap = { [key: string]: FormEntryOutput | undefined };
export interface CreateAssetTypeOutput {
  domainId: string;
  name: string;
  revision: string;
  description?: string | redacted.Redacted<string>;
  formsOutput: { [key: string]: FormEntryOutput | undefined };
  owningProjectId?: string;
  originDomainId?: string;
  originProjectId?: string;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
}
export type ConnectionId = string;
export interface AwsLocation {
  accessRole?: string;
  awsAccountId?: string;
  awsRegion?: string;
  iamConnectionId?: string;
}
export type PropertyMap = { [key: string]: string | undefined };
export interface Configuration {
  classification?: string;
  properties?: { [key: string]: string | undefined };
}
export type Configurations = Configuration[];
export type ConnectionName = string;
export interface AthenaPropertiesInput {
  workgroupName?: string;
}
export type ConnectionProperties = { [key: string]: string | undefined };
export type SubnetId = string;
export type SubnetIdList = string[];
export type SecurityGroupIdList = string[];
export interface PhysicalConnectionRequirements {
  subnetId?: string;
  subnetIdList?: string[];
  securityGroupIdList?: string[];
  availabilityZone?: string;
}
export type GlueConnectionType =
  | "SNOWFLAKE"
  | "BIGQUERY"
  | "DOCUMENTDB"
  | "DYNAMODB"
  | "MYSQL"
  | "OPENSEARCH"
  | "ORACLE"
  | "POSTGRESQL"
  | "REDSHIFT"
  | "SAPHANA"
  | "SQLSERVER"
  | "TERADATA"
  | "VERTICA"
  | (string & {});
export type ComputeEnvironments = "SPARK" | "ATHENA" | "PYTHON" | (string & {});
export type ComputeEnvironmentsList = ComputeEnvironments[];
export type AuthenticationType = "BASIC" | "OAUTH2" | "CUSTOM" | (string & {});
export type OAuth2GrantType =
  | "AUTHORIZATION_CODE"
  | "CLIENT_CREDENTIALS"
  | "JWT_BEARER"
  | (string & {});
export interface OAuth2ClientApplication {
  userManagedClientApplicationClientId?: string;
  aWSManagedClientApplicationReference?: string;
}
export type TokenUrlParametersMap = { [key: string]: string | undefined };
export interface AuthorizationCodeProperties {
  authorizationCode?: string;
  redirectUri?: string;
}
export interface GlueOAuth2Credentials {
  userManagedClientApplicationClientSecret?: string;
  accessToken?: string;
  refreshToken?: string;
  jwtToken?: string;
}
export interface OAuth2Properties {
  oAuth2GrantType?: OAuth2GrantType;
  oAuth2ClientApplication?: OAuth2ClientApplication;
  tokenUrl?: string;
  tokenUrlParametersMap?: { [key: string]: string | undefined };
  authorizationCodeProperties?: AuthorizationCodeProperties;
  oAuth2Credentials?: GlueOAuth2Credentials;
}
export interface BasicAuthenticationCredentials {
  userName?: string;
  password?: string;
}
export type CredentialMap = { [key: string]: string | undefined };
export interface AuthenticationConfigurationInput {
  authenticationType?: AuthenticationType;
  oAuth2Properties?: OAuth2Properties;
  secretArn?: string;
  kmsKeyArn?: string;
  basicAuthenticationCredentials?: BasicAuthenticationCredentials;
  customAuthenticationCredentials?: { [key: string]: string | undefined };
}
export interface GlueConnectionInput {
  connectionProperties?: { [key: string]: string | undefined };
  physicalConnectionRequirements?: PhysicalConnectionRequirements;
  name?: string;
  description?: string;
  connectionType?: GlueConnectionType;
  matchCriteria?: string;
  validateCredentials?: boolean;
  validateForComputeEnvironments?: ComputeEnvironments[];
  sparkProperties?: { [key: string]: string | undefined };
  athenaProperties?: { [key: string]: string | undefined };
  pythonProperties?: { [key: string]: string | undefined };
  authenticationConfiguration?: AuthenticationConfigurationInput;
}
export interface GluePropertiesInput {
  glueConnectionInput?: GlueConnectionInput;
}
export interface HyperPodPropertiesInput {
  clusterName: string;
}
export type RoleArn = string;
export interface IamPropertiesInput {
  glueLineageSyncEnabled?: boolean;
  roleArn?: string;
}
export type RedshiftStorageProperties =
  | { clusterName: string; workgroupName?: never }
  | { clusterName?: never; workgroupName: string };
export type Password = string | redacted.Redacted<string>;
export type Username = string;
export interface UsernamePassword {
  password: string | redacted.Redacted<string>;
  username: string;
}
export type RedshiftCredentials =
  | { secretArn: string; usernamePassword?: never }
  | { secretArn?: never; usernamePassword: UsernamePassword };
export interface LineageSyncSchedule {
  schedule?: string;
}
export interface RedshiftLineageSyncConfigurationInput {
  enabled?: boolean;
  schedule?: LineageSyncSchedule;
}
export interface RedshiftPropertiesInput {
  storage?: RedshiftStorageProperties;
  databaseName?: string;
  host?: string;
  port?: number;
  credentials?: RedshiftCredentials;
  lineageSync?: RedshiftLineageSyncConfigurationInput;
}
export interface SparkEmrPropertiesInput {
  computeArn?: string;
  instanceProfileArn?: string;
  javaVirtualEnv?: string;
  logUri?: string;
  pythonVirtualEnv?: string;
  runtimeRole?: string;
  trustedCertificatesS3Uri?: string;
  managedEndpointArn?: string;
}
export interface SparkGlueArgs {
  connection?: string;
}
export type GlueConnectionName = string;
export type GlueConnectionNames = string[];
export interface SparkGluePropertiesInput {
  additionalArgs?: SparkGlueArgs;
  glueConnectionName?: string;
  glueConnectionNames?: string[];
  glueVersion?: string;
  idleTimeout?: number;
  javaVirtualEnv?: string;
  numberOfWorkers?: number;
  pythonVirtualEnv?: string;
  workerType?: string;
}
export type S3Uri = string;
export type S3AccessGrantLocationId = string;
export interface S3PropertiesInput {
  s3Uri: string;
  s3AccessGrantLocationId?: string;
  registerS3AccessGrantLocation?: boolean;
}
export interface ConnectivityProperties {
  connectionProperties?: { [key: string]: string | undefined };
  physicalConnectionRequirements?: PhysicalConnectionRequirements;
  name?: string;
  description?: string;
  validateCredentials?: boolean;
  validateForComputeEnvironments?: ComputeEnvironments[];
  sparkProperties?: { [key: string]: string | undefined };
  athenaProperties?: { [key: string]: string | undefined };
  pythonProperties?: { [key: string]: string | undefined };
  authenticationConfiguration?: AuthenticationConfigurationInput;
}
export type SnowflakeRole = string;
export interface IdentityMapping {
  usernameAttribute: string;
  prefix?: string;
}
export type Timezone =
  | "UTC"
  | "AFRICA_JOHANNESBURG"
  | "AMERICA_MONTREAL"
  | "AMERICA_SAO_PAULO"
  | "ASIA_BAHRAIN"
  | "ASIA_BANGKOK"
  | "ASIA_CALCUTTA"
  | "ASIA_DUBAI"
  | "ASIA_HONG_KONG"
  | "ASIA_JAKARTA"
  | "ASIA_KUALA_LUMPUR"
  | "ASIA_SEOUL"
  | "ASIA_SHANGHAI"
  | "ASIA_SINGAPORE"
  | "ASIA_TAIPEI"
  | "ASIA_TOKYO"
  | "AUSTRALIA_MELBOURNE"
  | "AUSTRALIA_SYDNEY"
  | "CANADA_CENTRAL"
  | "CET"
  | "CST6CDT"
  | "ETC_GMT"
  | "ETC_GMT0"
  | "ETC_GMT_ADD_0"
  | "ETC_GMT_ADD_1"
  | "ETC_GMT_ADD_10"
  | "ETC_GMT_ADD_11"
  | "ETC_GMT_ADD_12"
  | "ETC_GMT_ADD_2"
  | "ETC_GMT_ADD_3"
  | "ETC_GMT_ADD_4"
  | "ETC_GMT_ADD_5"
  | "ETC_GMT_ADD_6"
  | "ETC_GMT_ADD_7"
  | "ETC_GMT_ADD_8"
  | "ETC_GMT_ADD_9"
  | "ETC_GMT_NEG_0"
  | "ETC_GMT_NEG_1"
  | "ETC_GMT_NEG_10"
  | "ETC_GMT_NEG_11"
  | "ETC_GMT_NEG_12"
  | "ETC_GMT_NEG_13"
  | "ETC_GMT_NEG_14"
  | "ETC_GMT_NEG_2"
  | "ETC_GMT_NEG_3"
  | "ETC_GMT_NEG_4"
  | "ETC_GMT_NEG_5"
  | "ETC_GMT_NEG_6"
  | "ETC_GMT_NEG_7"
  | "ETC_GMT_NEG_8"
  | "ETC_GMT_NEG_9"
  | "EUROPE_DUBLIN"
  | "EUROPE_LONDON"
  | "EUROPE_PARIS"
  | "EUROPE_STOCKHOLM"
  | "EUROPE_ZURICH"
  | "ISRAEL"
  | "MEXICO_GENERAL"
  | "MST7MDT"
  | "PACIFIC_AUCKLAND"
  | "US_CENTRAL"
  | "US_EASTERN"
  | "US_MOUNTAIN"
  | "US_PACIFIC"
  | (string & {});
export type LineageSyncScheduleCronString = string;
export interface LineageSyncInput {
  timezone?: Timezone;
  enabled: boolean;
  schedule?: string;
}
export interface SnowflakePropertiesInput {
  connectivityProperties?: ConnectivityProperties;
  snowflakeRole: string;
  identityMapping: IdentityMapping;
  lineageSync?: LineageSyncInput;
}
export interface AmazonQPropertiesInput {
  isEnabled: boolean;
  profileArn?: string;
  authMode?: string;
}
export interface MlflowPropertiesInput {
  trackingServerArn?: string;
}
export interface WorkflowsMwaaPropertiesInput {
  mwaaEnvironmentName?: string;
}
export interface WorkflowsServerlessPropertiesInput {}
export interface LakehousePropertiesInput {
  glueLineageSyncEnabled?: boolean;
}
export type VpcId = string;
export type VpcConnectionSubnetIdList = string[];
export type SecurityGroupId = string;
export interface VpcPropertiesInput {
  vpcId: string;
  subnetIds: string[];
  securityGroupId?: string;
}
export interface GitPropertiesInput {
  codeConnectionArn: string;
  repositoryId: string;
  defaultBranch: string;
}
export type ConnectionPropertiesInput =
  | {
      athenaProperties: AthenaPropertiesInput;
      glueProperties?: never;
      hyperPodProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      sparkGlueProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties: GluePropertiesInput;
      hyperPodProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      sparkGlueProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      hyperPodProperties: HyperPodPropertiesInput;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      sparkGlueProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      hyperPodProperties?: never;
      iamProperties: IamPropertiesInput;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      sparkGlueProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      hyperPodProperties?: never;
      iamProperties?: never;
      redshiftProperties: RedshiftPropertiesInput;
      sparkEmrProperties?: never;
      sparkGlueProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      hyperPodProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties: SparkEmrPropertiesInput;
      sparkGlueProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      hyperPodProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      sparkGlueProperties: SparkGluePropertiesInput;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      hyperPodProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      sparkGlueProperties?: never;
      s3Properties: S3PropertiesInput;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      hyperPodProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      sparkGlueProperties?: never;
      s3Properties?: never;
      snowflakeProperties: SnowflakePropertiesInput;
      amazonQProperties?: never;
      mlflowProperties?: never;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      hyperPodProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      sparkGlueProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties: AmazonQPropertiesInput;
      mlflowProperties?: never;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      hyperPodProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      sparkGlueProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties: MlflowPropertiesInput;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      hyperPodProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      sparkGlueProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      workflowsMwaaProperties: WorkflowsMwaaPropertiesInput;
      workflowsServerlessProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      hyperPodProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      sparkGlueProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties: WorkflowsServerlessPropertiesInput;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      hyperPodProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      sparkGlueProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties?: never;
      lakehouseProperties: LakehousePropertiesInput;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      hyperPodProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      sparkGlueProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties?: never;
      lakehouseProperties?: never;
      vpcProperties: VpcPropertiesInput;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      hyperPodProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      sparkGlueProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties: GitPropertiesInput;
    };
export type ConnectionScope = "DOMAIN" | "PROJECT" | (string & {});
export interface CreateConnectionInput {
  awsLocation?: AwsLocation;
  clientToken?: string;
  configurations?: Configuration[];
  description?: string | redacted.Redacted<string>;
  domainIdentifier: string;
  environmentIdentifier?: string;
  name: string;
  props?: ConnectionPropertiesInput;
  enableTrustedIdentityPropagation?: boolean;
  scope?: ConnectionScope;
}
export type ConnectionType =
  | "ATHENA"
  | "BIGQUERY"
  | "DATABRICKS"
  | "DOCUMENTDB"
  | "DYNAMODB"
  | "HYPERPOD"
  | "IAM"
  | "MYSQL"
  | "OPENSEARCH"
  | "ORACLE"
  | "POSTGRESQL"
  | "REDSHIFT"
  | "S3"
  | "SAPHANA"
  | "SNOWFLAKE"
  | "SPARK"
  | "SQLSERVER"
  | "TERADATA"
  | "VERTICA"
  | "WORKFLOWS_MWAA"
  | "AMAZON_Q"
  | "MLFLOW"
  | "VPC"
  | "GIT"
  | (string & {});
export type MatchCriteria = string[];
export type ConnectionStatus =
  | "CREATING"
  | "CREATE_FAILED"
  | "DELETING"
  | "DELETE_FAILED"
  | "READY"
  | "UPDATING"
  | "UPDATE_FAILED"
  | "DELETED"
  | (string & {});
export interface AuthenticationConfiguration {
  authenticationType?: AuthenticationType;
  secretArn?: string;
  oAuth2Properties?: OAuth2Properties;
}
export interface GlueConnection {
  name?: string;
  description?: string;
  connectionType?: ConnectionType;
  matchCriteria?: string[];
  connectionProperties?: { [key: string]: string | undefined };
  sparkProperties?: { [key: string]: string | undefined };
  athenaProperties?: { [key: string]: string | undefined };
  pythonProperties?: { [key: string]: string | undefined };
  physicalConnectionRequirements?: PhysicalConnectionRequirements;
  creationTime?: Date;
  lastUpdatedTime?: Date;
  lastUpdatedBy?: string;
  status?: ConnectionStatus;
  statusReason?: string;
  lastConnectionValidationTime?: Date;
  authenticationConfiguration?: AuthenticationConfiguration;
  connectionSchemaVersion?: number;
  compatibleComputeEnvironments?: ComputeEnvironments[];
}
export type Protocol =
  | "ATHENA"
  | "GLUE_INTERACTIVE_SESSION"
  | "HTTPS"
  | "JDBC"
  | "LIVY"
  | "ODBC"
  | "PRISM"
  | (string & {});
export interface PhysicalEndpoint {
  awsLocation?: AwsLocation;
  glueConnectionName?: string;
  glueConnectionNames?: string[];
  glueConnection?: GlueConnection;
  enableTrustedIdentityPropagation?: boolean;
  host?: string;
  port?: number;
  protocol?: Protocol;
  stage?: string;
}
export type PhysicalEndpoints = PhysicalEndpoint[];
export interface AthenaPropertiesOutput {
  workgroupName?: string;
}
export interface GluePropertiesOutput {
  status?: ConnectionStatus;
  errorMessage?: string;
}
export type HyperPodOrchestrator = "EKS" | "SLURM" | (string & {});
export interface HyperPodPropertiesOutput {
  clusterName: string;
  clusterArn?: string;
  orchestrator?: HyperPodOrchestrator;
}
export interface IamPropertiesOutput {
  environmentId?: string;
  glueLineageSyncEnabled?: boolean;
}
export interface RedshiftLineageSyncConfigurationOutput {
  lineageJobId?: string;
  enabled?: boolean;
  schedule?: LineageSyncSchedule;
}
export interface RedshiftPropertiesOutput {
  storage?: RedshiftStorageProperties;
  credentials?: RedshiftCredentials;
  isProvisionedSecret?: boolean;
  jdbcIamUrl?: string;
  jdbcUrl?: string;
  redshiftTempDir?: string;
  lineageSync?: RedshiftLineageSyncConfigurationOutput;
  status?: ConnectionStatus;
  databaseName?: string;
}
export type GovernanceType = "AWS_MANAGED" | "USER_MANAGED" | (string & {});
export interface ManagedEndpointCredentials {
  id?: string;
  token?: string;
}
export interface SparkEmrPropertiesOutput {
  computeArn?: string;
  credentials?: UsernamePassword;
  credentialsExpiration?: Date;
  governanceType?: GovernanceType;
  instanceProfileArn?: string;
  javaVirtualEnv?: string;
  livyEndpoint?: string;
  logUri?: string;
  pythonVirtualEnv?: string;
  runtimeRole?: string;
  trustedCertificatesS3Uri?: string;
  certificateData?: string;
  managedEndpointArn?: string;
  managedEndpointCredentials?: ManagedEndpointCredentials;
}
export interface SparkGluePropertiesOutput {
  additionalArgs?: SparkGlueArgs;
  glueConnectionName?: string;
  glueConnectionNames?: string[];
  glueVersion?: string;
  idleTimeout?: number;
  javaVirtualEnv?: string;
  numberOfWorkers?: number;
  pythonVirtualEnv?: string;
  workerType?: string;
}
export interface S3PropertiesOutput {
  s3Uri: string;
  s3AccessGrantLocationId?: string;
  registerS3AccessGrantLocation?: boolean;
  status?: ConnectionStatus;
  errorMessage?: string;
}
export interface LineageSyncOutput {
  lineageJobId?: string;
  timezone?: Timezone;
  enabled?: boolean;
  schedule?: string;
}
export interface SnowflakePropertiesOutput {
  snowflakeRole: string;
  identityMapping: IdentityMapping;
  lineageSync: LineageSyncOutput;
  status: ConnectionStatus;
  errorMessage?: string;
}
export interface AmazonQPropertiesOutput {
  isEnabled: boolean;
  profileArn?: string;
  authMode?: string;
}
export interface MlflowPropertiesOutput {
  trackingServerArn?: string;
}
export interface WorkflowsMwaaPropertiesOutput {
  mwaaEnvironmentName?: string;
}
export interface WorkflowsServerlessPropertiesOutput {}
export interface LakehousePropertiesOutput {
  glueLineageSyncEnabled?: boolean;
}
export interface VpcPropertiesOutput {
  vpcId: string;
  subnetIds: string[];
  status: ConnectionStatus;
  securityGroupId?: string;
  glueConnectionNames?: string[];
}
export interface GitPropertiesOutput {
  codeConnectionArn: string;
  repositoryId: string;
  defaultBranch: string;
  status?: ConnectionStatus;
  errorMessage?: string;
}
export type ConnectionPropertiesOutput =
  | {
      athenaProperties: AthenaPropertiesOutput;
      glueProperties?: never;
      hyperPodProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      sparkGlueProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties: GluePropertiesOutput;
      hyperPodProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      sparkGlueProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      hyperPodProperties: HyperPodPropertiesOutput;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      sparkGlueProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      hyperPodProperties?: never;
      iamProperties: IamPropertiesOutput;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      sparkGlueProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      hyperPodProperties?: never;
      iamProperties?: never;
      redshiftProperties: RedshiftPropertiesOutput;
      sparkEmrProperties?: never;
      sparkGlueProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      hyperPodProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties: SparkEmrPropertiesOutput;
      sparkGlueProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      hyperPodProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      sparkGlueProperties: SparkGluePropertiesOutput;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      hyperPodProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      sparkGlueProperties?: never;
      s3Properties: S3PropertiesOutput;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      hyperPodProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      sparkGlueProperties?: never;
      s3Properties?: never;
      snowflakeProperties: SnowflakePropertiesOutput;
      amazonQProperties?: never;
      mlflowProperties?: never;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      hyperPodProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      sparkGlueProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties: AmazonQPropertiesOutput;
      mlflowProperties?: never;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      hyperPodProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      sparkGlueProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties: MlflowPropertiesOutput;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      hyperPodProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      sparkGlueProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      workflowsMwaaProperties: WorkflowsMwaaPropertiesOutput;
      workflowsServerlessProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      hyperPodProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      sparkGlueProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties: WorkflowsServerlessPropertiesOutput;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      hyperPodProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      sparkGlueProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties?: never;
      lakehouseProperties: LakehousePropertiesOutput;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      hyperPodProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      sparkGlueProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties?: never;
      lakehouseProperties?: never;
      vpcProperties: VpcPropertiesOutput;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      hyperPodProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      sparkGlueProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      workflowsMwaaProperties?: never;
      workflowsServerlessProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties: GitPropertiesOutput;
    };
export interface CreateConnectionOutput {
  connectionId: string;
  configurations?: Configuration[];
  description?: string | redacted.Redacted<string>;
  domainId: string;
  domainUnitId: string;
  environmentId?: string;
  name: string;
  physicalEndpoints: PhysicalEndpoint[];
  projectId?: string;
  props?: ConnectionPropertiesOutput;
  type: ConnectionType;
  scope?: ConnectionScope;
}
export type DataProductName = string | redacted.Redacted<string>;
export type DataProductDescription = string | redacted.Redacted<string>;
export type DataProductItemType = "ASSET" | (string & {});
export type ItemGlossaryTerms = string[];
export interface DataProductItem {
  itemType: DataProductItemType;
  identifier: string;
  revision?: string;
  glossaryTerms?: string[];
}
export type DataProductItems = DataProductItem[];
export interface CreateDataProductInput {
  domainIdentifier: string;
  name: string | redacted.Redacted<string>;
  owningProjectIdentifier: string;
  description?: string | redacted.Redacted<string>;
  glossaryTerms?: string[];
  formsInput?: FormInput[];
  items?: DataProductItem[];
  clientToken?: string;
}
export type DataProductId = string;
export type DataProductStatus = "CREATED" | "CREATING" | "CREATE_FAILED" | (string & {});
export interface CreateDataProductOutput {
  domainId: string;
  id: string;
  revision: string;
  owningProjectId: string;
  name: string | redacted.Redacted<string>;
  status: DataProductStatus;
  description?: string | redacted.Redacted<string>;
  glossaryTerms?: string[];
  items?: DataProductItem[];
  formsOutput?: FormOutput[];
  createdAt?: Date;
  createdBy?: string;
  firstRevisionCreatedAt?: Date;
  firstRevisionCreatedBy?: string;
}
export interface CreateDataProductRevisionInput {
  domainIdentifier: string;
  identifier: string;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  glossaryTerms?: string[];
  items?: DataProductItem[];
  formsInput?: FormInput[];
  clientToken?: string;
}
export interface CreateDataProductRevisionOutput {
  domainId: string;
  id: string;
  revision: string;
  owningProjectId: string;
  name: string | redacted.Redacted<string>;
  status: DataProductStatus;
  description?: string | redacted.Redacted<string>;
  glossaryTerms?: string[];
  items?: DataProductItem[];
  formsOutput?: FormOutput[];
  createdAt?: Date;
  createdBy?: string;
  firstRevisionCreatedAt?: Date;
  firstRevisionCreatedBy?: string;
}
export type Name = string | redacted.Redacted<string>;
export type DataSourceType = string;
export type FilterExpressionType = "INCLUDE" | "EXCLUDE" | (string & {});
export interface FilterExpression {
  type: FilterExpressionType;
  expression: string;
}
export type FilterExpressions = FilterExpression[];
export interface RelationalFilterConfiguration {
  databaseName: string;
  schemaName?: string;
  filterExpressions?: FilterExpression[];
}
export type RelationalFilterConfigurations = RelationalFilterConfiguration[];
export interface GlueRunConfigurationInput {
  dataAccessRole?: string;
  relationalFilterConfigurations: RelationalFilterConfiguration[];
  autoImportDataQualityResult?: boolean;
  catalogName?: string;
}
export interface RedshiftCredentialConfiguration {
  secretManagerArn: string;
}
export interface RedshiftClusterStorage {
  clusterName: string;
}
export interface RedshiftServerlessStorage {
  workgroupName: string;
}
export type RedshiftStorage =
  | { redshiftClusterSource: RedshiftClusterStorage; redshiftServerlessSource?: never }
  | { redshiftClusterSource?: never; redshiftServerlessSource: RedshiftServerlessStorage };
export interface RedshiftRunConfigurationInput {
  dataAccessRole?: string;
  relationalFilterConfigurations: RelationalFilterConfiguration[];
  redshiftCredentialConfiguration?: RedshiftCredentialConfiguration;
  redshiftStorage?: RedshiftStorage;
}
export type SageMakerAssetType = string;
export type SageMakerResourceArn = string;
export type TrackingAssetArns = string[];
export type TrackingAssets = { [key: string]: string[] | undefined };
export interface SageMakerRunConfigurationInput {
  trackingAssets: { [key: string]: string[] | undefined };
}
export type DataSourceConfigurationInput =
  | {
      glueRunConfiguration: GlueRunConfigurationInput;
      redshiftRunConfiguration?: never;
      sageMakerRunConfiguration?: never;
    }
  | {
      glueRunConfiguration?: never;
      redshiftRunConfiguration: RedshiftRunConfigurationInput;
      sageMakerRunConfiguration?: never;
    }
  | {
      glueRunConfiguration?: never;
      redshiftRunConfiguration?: never;
      sageMakerRunConfiguration: SageMakerRunConfigurationInput;
    };
export interface RecommendationConfiguration {
  enableBusinessNameGeneration?: boolean;
}
export type EnableSetting = "ENABLED" | "DISABLED" | (string & {});
export type CronString = string;
export interface ScheduleConfiguration {
  timezone?: Timezone;
  schedule?: string;
}
export interface CreateDataSourceInput {
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  domainIdentifier: string;
  projectIdentifier: string;
  environmentIdentifier?: string;
  connectionIdentifier?: string;
  type: string;
  configuration?: DataSourceConfigurationInput;
  recommendation?: RecommendationConfiguration;
  enableSetting?: EnableSetting;
  schedule?: ScheduleConfiguration;
  publishOnImport?: boolean;
  assetFormsInput?: FormInput[];
  clientToken?: string;
}
export type DataSourceId = string;
export type DataSourceStatus =
  | "CREATING"
  | "FAILED_CREATION"
  | "READY"
  | "UPDATING"
  | "FAILED_UPDATE"
  | "RUNNING"
  | "DELETING"
  | "FAILED_DELETION"
  | (string & {});
export interface GlueRunConfigurationOutput {
  accountId?: string;
  region?: string;
  dataAccessRole?: string;
  relationalFilterConfigurations: RelationalFilterConfiguration[];
  autoImportDataQualityResult?: boolean;
  catalogName?: string;
}
export interface RedshiftRunConfigurationOutput {
  accountId?: string;
  region?: string;
  dataAccessRole?: string;
  relationalFilterConfigurations: RelationalFilterConfiguration[];
  redshiftCredentialConfiguration?: RedshiftCredentialConfiguration;
  redshiftStorage: RedshiftStorage;
}
export interface SageMakerRunConfigurationOutput {
  accountId?: string;
  region?: string;
  trackingAssets: { [key: string]: string[] | undefined };
}
export type DataSourceConfigurationOutput =
  | {
      glueRunConfiguration: GlueRunConfigurationOutput;
      redshiftRunConfiguration?: never;
      sageMakerRunConfiguration?: never;
    }
  | {
      glueRunConfiguration?: never;
      redshiftRunConfiguration: RedshiftRunConfigurationOutput;
      sageMakerRunConfiguration?: never;
    }
  | {
      glueRunConfiguration?: never;
      redshiftRunConfiguration?: never;
      sageMakerRunConfiguration: SageMakerRunConfigurationOutput;
    };
export type DataSourceRunStatus =
  | "REQUESTED"
  | "RUNNING"
  | "FAILED"
  | "PARTIALLY_SUCCEEDED"
  | "SUCCESS"
  | (string & {});
export type DataSourceErrorType =
  | "ACCESS_DENIED_EXCEPTION"
  | "CONFLICT_EXCEPTION"
  | "INTERNAL_SERVER_EXCEPTION"
  | "RESOURCE_NOT_FOUND_EXCEPTION"
  | "SERVICE_QUOTA_EXCEEDED_EXCEPTION"
  | "THROTTLING_EXCEPTION"
  | "VALIDATION_EXCEPTION"
  | (string & {});
export interface DataSourceErrorMessage {
  errorType: DataSourceErrorType;
  errorDetail?: string;
}
export interface CreateDataSourceOutput {
  id: string;
  status?: DataSourceStatus;
  type?: string;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  domainId: string;
  projectId: string;
  environmentId?: string;
  connectionId?: string;
  configuration?: DataSourceConfigurationOutput;
  recommendation?: RecommendationConfiguration;
  enableSetting?: EnableSetting;
  publishOnImport?: boolean;
  assetFormsOutput?: FormOutput[];
  schedule?: ScheduleConfiguration;
  lastRunStatus?: DataSourceRunStatus;
  lastRunAt?: Date;
  lastRunErrorMessage?: DataSourceErrorMessage;
  errorMessage?: DataSourceErrorMessage;
  createdAt?: Date;
  updatedAt?: Date;
}
export type AuthType = "IAM_IDC" | "DISABLED" | (string & {});
export type UserAssignment = "AUTOMATIC" | "MANUAL" | (string & {});
export interface SingleSignOn {
  type?: AuthType;
  userAssignment?: UserAssignment;
  idcInstanceArn?: string;
}
export type KmsKeyArn = string;
export type TagKey = string;
export type TagValue = string;
export type Tags = { [key: string]: string | undefined };
export type DomainVersion = "V1" | "V2" | (string & {});
export interface CreateDomainInput {
  name: string;
  description?: string;
  singleSignOn?: SingleSignOn;
  domainExecutionRole?: string;
  kmsKeyIdentifier?: string;
  tags?: { [key: string]: string | undefined };
  domainVersion?: DomainVersion;
  serviceRole?: string;
  clientToken?: string;
}
export type DomainStatus =
  | "CREATING"
  | "AVAILABLE"
  | "CREATION_FAILED"
  | "DELETING"
  | "DELETED"
  | "DELETION_FAILED"
  | (string & {});
export interface CreateDomainOutput {
  id: string;
  rootDomainUnitId?: string;
  name?: string;
  description?: string;
  singleSignOn?: SingleSignOn;
  domainExecutionRole?: string;
  arn?: string;
  kmsKeyIdentifier?: string;
  status?: DomainStatus;
  portalUrl?: string;
  tags?: { [key: string]: string | undefined };
  domainVersion?: DomainVersion;
  serviceRole?: string;
}
export type DomainUnitName = string | redacted.Redacted<string>;
export type DomainUnitDescription = string | redacted.Redacted<string>;
export interface CreateDomainUnitInput {
  domainIdentifier: string;
  name: string | redacted.Redacted<string>;
  parentDomainUnitIdentifier: string;
  description?: string | redacted.Redacted<string>;
  clientToken?: string;
}
export interface DomainUnitUserProperties {
  userId?: string;
}
export interface DomainUnitGroupProperties {
  groupId?: string;
}
export type DomainUnitOwnerProperties =
  | { user: DomainUnitUserProperties; group?: never }
  | { user?: never; group: DomainUnitGroupProperties };
export type DomainUnitOwners = DomainUnitOwnerProperties[];
export type DomainUnitIds = string[];
export interface CreateDomainUnitOutput {
  id: string;
  domainId: string;
  name: string | redacted.Redacted<string>;
  parentDomainUnitId?: string;
  description?: string | redacted.Redacted<string>;
  owners: DomainUnitOwnerProperties[];
  ancestorDomainUnitIds: string[];
  createdAt?: Date;
  createdBy?: string;
}
export type EnvironmentProfileId = string;
export interface EnvironmentParameter {
  name?: string;
  value?: string;
}
export type EnvironmentParametersList = EnvironmentParameter[];
export type EnvironmentConfigurationName = string | redacted.Redacted<string>;
export interface CreateEnvironmentInput {
  projectIdentifier: string;
  domainIdentifier: string;
  description?: string;
  name: string;
  environmentProfileIdentifier?: string;
  userParameters?: EnvironmentParameter[];
  glossaryTerms?: string[];
  environmentAccountIdentifier?: string;
  environmentAccountRegion?: string;
  environmentBlueprintIdentifier?: string;
  deploymentOrder?: number;
  environmentConfigurationId?: string;
  environmentConfigurationName?: string | redacted.Redacted<string>;
}
export type EnvironmentName = string | redacted.Redacted<string>;
export interface Resource {
  provider?: string;
  name?: string;
  value: string;
  type: string;
}
export type ResourceList = Resource[];
export type EnvironmentStatus =
  | "ACTIVE"
  | "CREATING"
  | "UPDATING"
  | "DELETING"
  | "CREATE_FAILED"
  | "UPDATE_FAILED"
  | "DELETE_FAILED"
  | "VALIDATION_FAILED"
  | "SUSPENDED"
  | "DISABLED"
  | "EXPIRED"
  | "DELETED"
  | "INACCESSIBLE"
  | (string & {});
export type ConfigurableActionTypeAuthorization = "IAM" | "HTTPS" | (string & {});
export interface ConfigurableActionParameter {
  key?: string;
  value?: string;
}
export type ConfigurableActionParameterList = ConfigurableActionParameter[];
export interface ConfigurableEnvironmentAction {
  type: string;
  auth?: ConfigurableActionTypeAuthorization;
  parameters: ConfigurableActionParameter[];
}
export type EnvironmentActionList = ConfigurableEnvironmentAction[];
export interface CustomParameter {
  keyName: string;
  description?: string | redacted.Redacted<string>;
  fieldType: string;
  defaultValue?: string;
  isEditable?: boolean;
  isOptional?: boolean;
  isUpdateSupported?: boolean;
}
export type CustomParameterList = CustomParameter[];
export type DeploymentType = "CREATE" | "UPDATE" | "DELETE" | (string & {});
export type DeploymentStatus =
  | "IN_PROGRESS"
  | "SUCCESSFUL"
  | "FAILED"
  | "PENDING_DEPLOYMENT"
  | (string & {});
export interface EnvironmentError {
  code?: string;
  message: string;
}
export type DeploymentMessage = string;
export type DeploymentMessagesList = string[];
export interface Deployment {
  deploymentId?: string;
  deploymentType?: DeploymentType;
  deploymentStatus?: DeploymentStatus;
  failureReason?: EnvironmentError;
  messages?: string[];
  isDeploymentComplete?: boolean;
}
export interface CloudFormationProperties {
  templateUrl: string;
}
export type ProvisioningProperties =
  | { cloudFormation: CloudFormationProperties; manual?: never }
  | { cloudFormation?: never; manual: Record<string, never> };
export interface DeploymentProperties {
  startTimeoutMinutes?: number;
  endTimeoutMinutes?: number;
}
export type EnvironmentBlueprintId = string;
export type EnvironmentConfigurationId = string | redacted.Redacted<string>;
export interface CreateEnvironmentOutput {
  projectId: string;
  id?: string;
  domainId: string;
  createdBy: string;
  createdAt?: Date;
  updatedAt?: Date;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  environmentProfileId?: string;
  awsAccountId?: string;
  awsAccountRegion?: string;
  provider: string;
  provisionedResources?: Resource[];
  status?: EnvironmentStatus;
  environmentActions?: ConfigurableEnvironmentAction[];
  glossaryTerms?: string[];
  userParameters?: CustomParameter[];
  lastDeployment?: Deployment;
  provisioningProperties?: ProvisioningProperties;
  deploymentProperties?: DeploymentProperties;
  environmentBlueprintId?: string;
  environmentConfigurationId?: string | redacted.Redacted<string>;
  environmentConfigurationName?: string | redacted.Redacted<string>;
}
export interface AwsConsoleLinkParameters {
  uri?: string;
}
export type ActionParameters = { awsConsoleLink: AwsConsoleLinkParameters };
export interface CreateEnvironmentActionInput {
  domainIdentifier: string;
  environmentIdentifier: string;
  name: string;
  parameters: ActionParameters;
  description?: string;
}
export type EnvironmentActionId = string;
export interface CreateEnvironmentActionOutput {
  domainId: string;
  environmentId: string;
  id: string;
  name: string;
  parameters: ActionParameters;
  description?: string;
}
export type EnvironmentBlueprintName = string;
export type BlueprintCategory = "TOOLING" | (string & {});
export interface CreateEnvironmentBlueprintInput {
  domainIdentifier: string;
  name: string;
  description?: string | redacted.Redacted<string>;
  provisioningProperties: ProvisioningProperties;
  userParameters?: CustomParameter[];
  blueprintCategory?: BlueprintCategory;
}
export interface CreateEnvironmentBlueprintOutput {
  id: string;
  name: string;
  description?: string | redacted.Redacted<string>;
  provider: string;
  provisioningProperties: ProvisioningProperties;
  deploymentProperties?: DeploymentProperties;
  userParameters?: CustomParameter[];
  glossaryTerms?: string[];
  blueprintCategory?: BlueprintCategory;
  createdAt?: Date;
  updatedAt?: Date;
}
export type EnvironmentProfileName = string | redacted.Redacted<string>;
export interface CreateEnvironmentProfileInput {
  domainIdentifier: string;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  environmentBlueprintIdentifier: string;
  projectIdentifier: string;
  userParameters?: EnvironmentParameter[];
  awsAccountId?: string;
  awsAccountRegion?: string;
}
export interface CreateEnvironmentProfileOutput {
  id: string;
  domainId: string;
  awsAccountId?: string;
  awsAccountRegion?: string;
  createdBy: string;
  createdAt?: Date;
  updatedAt?: Date;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  environmentBlueprintId: string;
  projectId?: string;
  userParameters?: CustomParameter[];
}
export type Smithy = string;
export type Model = { smithy: string };
export type FormTypeStatus = "ENABLED" | "DISABLED" | (string & {});
export interface CreateFormTypeInput {
  domainIdentifier: string;
  name: string | redacted.Redacted<string>;
  model: Model;
  owningProjectIdentifier: string;
  status?: FormTypeStatus;
  description?: string | redacted.Redacted<string>;
}
export interface CreateFormTypeOutput {
  domainId: string;
  name: string | redacted.Redacted<string>;
  revision: string;
  description?: string | redacted.Redacted<string>;
  owningProjectId?: string;
  originDomainId?: string;
  originProjectId?: string;
}
export type GlossaryName = string | redacted.Redacted<string>;
export type GlossaryDescription = string | redacted.Redacted<string>;
export type GlossaryStatus = "DISABLED" | "ENABLED" | (string & {});
export type GlossaryUsageRestriction = "ASSET_GOVERNED_TERMS" | (string & {});
export type GlossaryUsageRestrictions = GlossaryUsageRestriction[];
export interface CreateGlossaryInput {
  domainIdentifier: string;
  name: string | redacted.Redacted<string>;
  owningProjectIdentifier: string;
  description?: string | redacted.Redacted<string>;
  status?: GlossaryStatus;
  usageRestrictions?: GlossaryUsageRestriction[];
  clientToken?: string;
}
export type GlossaryId = string;
export interface CreateGlossaryOutput {
  domainId: string;
  id: string;
  name: string | redacted.Redacted<string>;
  owningProjectId: string;
  description?: string | redacted.Redacted<string>;
  status?: GlossaryStatus;
  usageRestrictions?: GlossaryUsageRestriction[];
}
export type GlossaryTermStatus = "ENABLED" | "DISABLED" | (string & {});
export type LongDescription = string | redacted.Redacted<string>;
export interface TermRelations {
  isA?: string[];
  classifies?: string[];
}
export interface CreateGlossaryTermInput {
  domainIdentifier: string;
  glossaryIdentifier: string;
  name: string | redacted.Redacted<string>;
  status?: GlossaryTermStatus;
  shortDescription?: string | redacted.Redacted<string>;
  longDescription?: string | redacted.Redacted<string>;
  termRelations?: TermRelations;
  clientToken?: string;
}
export interface CreateGlossaryTermOutput {
  id: string;
  domainId: string;
  glossaryId: string;
  name: string | redacted.Redacted<string>;
  status: GlossaryTermStatus;
  shortDescription?: string | redacted.Redacted<string>;
  longDescription?: string | redacted.Redacted<string>;
  termRelations?: TermRelations;
  usageRestrictions?: GlossaryUsageRestriction[];
}
export interface CreateGroupProfileInput {
  domainIdentifier: string;
  groupIdentifier?: string;
  rolePrincipalArn?: string;
  clientToken?: string;
}
export type GroupProfileStatus = "ASSIGNED" | "NOT_ASSIGNED" | (string & {});
export interface CreateGroupProfileOutput {
  domainId?: string;
  id?: string;
  status?: GroupProfileStatus;
  groupName?: string | redacted.Redacted<string>;
  rolePrincipalArn?: string;
  rolePrincipalId?: string;
}
export type EntityType = "ASSET" | "DATA_PRODUCT" | (string & {});
export type ChangeAction = "PUBLISH" | "UNPUBLISH" | (string & {});
export interface CreateListingChangeSetInput {
  domainIdentifier: string;
  entityIdentifier: string;
  entityType: EntityType;
  entityRevision?: string;
  action: ChangeAction;
  clientToken?: string;
}
export interface CreateListingChangeSetOutput {
  listingId: string;
  listingRevision: string;
  status: ListingStatus;
}
export type NotebookName = string | redacted.Redacted<string>;
export type NotebookType = "DATA" | "SQL" | (string & {});
export type MetadataKey = string;
export type MetadataValue = string | redacted.Redacted<string>;
export type Metadata = { [key: string]: string | redacted.Redacted<string> | undefined };
export type ParameterKey = string;
export type ParameterValue = string;
export type Parameters = { [key: string]: string | undefined };
export interface CreateNotebookInput {
  domainIdentifier: string;
  owningProjectIdentifier: string;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  type?: NotebookType;
  metadata?: { [key: string]: string | redacted.Redacted<string> | undefined };
  parameters?: { [key: string]: string | undefined };
  clientToken?: string;
}
export type NotebookId = string;
export interface CellInformation {}
export type CellOrder = CellInformation[];
export type NotebookStatus =
  | "ACTIVE"
  | "ARCHIVED"
  | "SYNC_IN_PROGRESS"
  | "SYNC_FAILED"
  | (string & {});
export type ComputeId = string;
export type PackageManager = "UV" | (string & {});
export interface PackageConfig {
  packageManager: PackageManager;
  packageSpecification?: string;
}
export interface EnvironmentConfig {
  imageVersion?: string;
  packageConfig?: PackageConfig;
}
export interface NotebookError {
  message: string;
}
export type GitConnectionId = string;
export type GitRepository = string | redacted.Redacted<string>;
export type GitBranch = string | redacted.Redacted<string>;
export type CommitHash = string;
export type FileName = string;
export type CommitMessage = string | redacted.Redacted<string>;
export interface GitMetadata {
  connectionId: string;
  repository: string | redacted.Redacted<string>;
  branch: string | redacted.Redacted<string>;
  commitHash: string;
  fileName?: string;
  committedAt?: Date;
  commitMessage?: string | redacted.Redacted<string>;
}
export interface CreateNotebookOutput {
  id: string;
  name: string | redacted.Redacted<string>;
  owningProjectId: string;
  domainId: string;
  cellOrder: CellInformation[];
  status: NotebookStatus;
  type?: NotebookType;
  description?: string | redacted.Redacted<string>;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  lockedBy?: string;
  lockedAt?: Date;
  lockExpiresAt?: Date;
  computeId?: string;
  metadata?: { [key: string]: string | redacted.Redacted<string> | undefined };
  parameters?: { [key: string]: string | undefined };
  environmentConfiguration?: EnvironmentConfig;
  error?: NotebookError;
  gitMetadata?: GitMetadata;
}
export type ProjectProfileId = string;
export interface EnvironmentResolvedAccount {
  awsAccountId: string;
  regionName: string;
  sourceAccountPoolId?: string;
}
export interface EnvironmentConfigurationUserParameter {
  environmentId?: string;
  environmentResolvedAccount?: EnvironmentResolvedAccount;
  environmentConfigurationName?: string | redacted.Redacted<string>;
  environmentParameters?: EnvironmentParameter[];
}
export type EnvironmentConfigurationUserParametersList = EnvironmentConfigurationUserParameter[];
export type Member =
  | { userIdentifier: string; groupIdentifier?: never }
  | { userIdentifier?: never; groupIdentifier: string };
export type UserDesignation =
  | "PROJECT_OWNER"
  | "PROJECT_CONTRIBUTOR"
  | "PROJECT_CATALOG_VIEWER"
  | "PROJECT_CATALOG_CONSUMER"
  | "PROJECT_CATALOG_STEWARD"
  | (string & {});
export interface ProjectMembershipAssignment {
  member: Member;
  designation: UserDesignation;
}
export type ProjectMembershipAssignments = ProjectMembershipAssignment[];
export interface CreateProjectInput {
  domainIdentifier: string;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  resourceTags?: { [key: string]: string | undefined };
  glossaryTerms?: string[];
  domainUnitId?: string;
  projectProfileId?: string;
  userParameters?: EnvironmentConfigurationUserParameter[];
  projectCategory?: string;
  projectExecutionRole?: string;
  membershipAssignments?: ProjectMembershipAssignment[];
}
export type ProjectStatus =
  | "ACTIVE"
  | "DELETING"
  | "DELETE_FAILED"
  | "UPDATING"
  | "UPDATE_FAILED"
  | "MOVING"
  | (string & {});
export interface ProjectDeletionError {
  code?: string;
  message?: string;
}
export type FailureReasons = ProjectDeletionError[];
export type ResourceTagSource = "PROJECT" | "PROJECT_PROFILE" | (string & {});
export interface ResourceTag {
  key: string;
  value: string;
  source: ResourceTagSource;
}
export type ResourceTags = ResourceTag[];
export type OverallDeploymentStatus =
  | "PENDING_DEPLOYMENT"
  | "IN_PROGRESS"
  | "SUCCESSFUL"
  | "FAILED_VALIDATION"
  | "FAILED_DEPLOYMENT"
  | (string & {});
export type EnvironmentFailureReasonsList = EnvironmentError[];
export type EnvironmentFailureReasons = { [key: string]: EnvironmentError[] | undefined };
export interface EnvironmentDeploymentDetails {
  overallDeploymentStatus?: OverallDeploymentStatus;
  environmentFailureReasons?: { [key: string]: EnvironmentError[] | undefined };
}
export interface CreateProjectOutput {
  domainId: string;
  id: string;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  projectStatus?: ProjectStatus;
  failureReasons?: ProjectDeletionError[];
  createdBy: string;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  resourceTags?: ResourceTag[];
  glossaryTerms?: string[];
  domainUnitId?: string;
  projectProfileId?: string;
  userParameters?: EnvironmentConfigurationUserParameter[];
  environmentDeploymentDetails?: EnvironmentDeploymentDetails;
  projectCategory?: string;
}
export interface CreateProjectMembershipInput {
  domainIdentifier: string;
  projectIdentifier: string;
  member: Member;
  designation: UserDesignation;
}
export interface CreateProjectMembershipOutput {}
export type ProjectProfileName = string | redacted.Redacted<string>;
export type Status = "ENABLED" | "DISABLED" | (string & {});
export interface ResourceTagParameter {
  key: string;
  value: string;
  isValueEditable: boolean;
}
export type ProjectResourceTagParameters = ResourceTagParameter[];
export type DeploymentMode = "ON_CREATE" | "ON_DEMAND" | (string & {});
export type ParameterStorePath = string;
export type EnvironmentConfigurationParameterName = string;
export interface EnvironmentConfigurationParameter {
  name?: string;
  value?: string;
  isEditable?: boolean;
}
export type EnvironmentConfigurationParametersList = EnvironmentConfigurationParameter[];
export interface EnvironmentConfigurationParametersDetails {
  ssmPath?: string;
  parameterOverrides?: EnvironmentConfigurationParameter[];
  resolvedParameters?: EnvironmentConfigurationParameter[];
}
export type AwsAccount =
  | { awsAccountId: string; awsAccountIdPath?: never }
  | { awsAccountId?: never; awsAccountIdPath: string };
export type AccountPoolList = string[];
export type RegionName = string;
export type Region =
  | { regionName: string; regionNamePath?: never }
  | { regionName?: never; regionNamePath: string };
const Region = /*@__PURE__*/ __L.at(__c33, 4);
export type DeploymentOrder = number;
export interface EnvironmentConfiguration {
  name: string | redacted.Redacted<string>;
  id?: string | redacted.Redacted<string>;
  environmentBlueprintId: string;
  description?: string | redacted.Redacted<string>;
  deploymentMode?: DeploymentMode;
  configurationParameters?: EnvironmentConfigurationParametersDetails;
  awsAccount?: AwsAccount;
  accountPools?: string[];
  awsRegion?: Region;
  deploymentOrder?: number;
}
export type EnvironmentConfigurationsList = EnvironmentConfiguration[];
export interface CreateProjectProfileInput {
  domainIdentifier: string;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  status?: Status;
  projectResourceTags?: ResourceTagParameter[];
  allowCustomProjectResourceTags?: boolean;
  projectResourceTagsDescription?: string | redacted.Redacted<string>;
  environmentConfigurations?: EnvironmentConfiguration[];
  domainUnitIdentifier?: string;
}
export interface CreateProjectProfileOutput {
  domainId: string;
  id: string;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  status?: Status;
  projectResourceTags?: ResourceTagParameter[];
  allowCustomProjectResourceTags?: boolean;
  projectResourceTagsDescription?: string | redacted.Redacted<string>;
  environmentConfigurations?: EnvironmentConfiguration[];
  createdBy: string;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  domainUnitId?: string;
}
export type RuleName = string | redacted.Redacted<string>;
export interface DomainUnitTarget {
  domainUnitId: string;
  includeChildDomainUnits?: boolean;
}
export type RuleTarget = { domainUnitTarget: DomainUnitTarget };
export type RuleAction =
  | "CREATE_LISTING_CHANGE_SET"
  | "CREATE_SUBSCRIPTION_REQUEST"
  | (string & {});
export type RuleScopeSelectionMode = "ALL" | "SPECIFIC" | (string & {});
export type RuleAssetTypeList = string[];
export interface AssetTypesForRule {
  selectionMode: RuleScopeSelectionMode;
  specificAssetTypes?: string[];
}
export type RuleProjectIdentifierList = string[];
export interface ProjectsForRule {
  selectionMode: RuleScopeSelectionMode;
  specificProjects?: string[];
}
export interface RuleScope {
  assetType?: AssetTypesForRule;
  dataProduct?: boolean;
  project?: ProjectsForRule;
}
export interface MetadataFormReference {
  typeIdentifier: string;
  typeRevision: string;
}
export type RequiredMetadataFormList = MetadataFormReference[];
export interface MetadataFormEnforcementDetail {
  requiredMetadataForms?: MetadataFormReference[];
}
export type GlossaryTermIdentifiers = string[];
export interface GlossaryTermEnforcementDetail {
  requiredGlossaryTermIds?: string[];
}
export type RuleDetail =
  | {
      metadataFormEnforcementDetail: MetadataFormEnforcementDetail;
      glossaryTermEnforcementDetail?: never;
    }
  | {
      metadataFormEnforcementDetail?: never;
      glossaryTermEnforcementDetail: GlossaryTermEnforcementDetail;
    };
export interface CreateRuleInput {
  domainIdentifier: string;
  name: string | redacted.Redacted<string>;
  target: RuleTarget;
  action: RuleAction;
  scope: RuleScope;
  detail: RuleDetail;
  description?: string | redacted.Redacted<string>;
  clientToken?: string;
}
export type RuleId = string;
export type RuleType = "METADATA_FORM_ENFORCEMENT" | "GLOSSARY_TERM_ENFORCEMENT" | (string & {});
export type RuleTargetType = "DOMAIN_UNIT" | (string & {});
export interface CreateRuleOutput {
  identifier: string;
  name: string | redacted.Redacted<string>;
  ruleType: RuleType;
  target: RuleTarget;
  action: RuleAction;
  scope: RuleScope;
  detail: RuleDetail;
  targetType?: RuleTargetType;
  description?: string | redacted.Redacted<string>;
  createdAt: Date;
  createdBy: string;
}
export type SubscriptionTargetId = string;
export interface ListingRevisionInput {
  identifier: string;
  revision: string;
}
export type GrantedEntityInput = { listing: ListingRevisionInput };
export interface AssetTargetNameMap {
  assetId: string;
  targetName: string;
}
export type AssetTargetNames = AssetTargetNameMap[];
export interface CreateSubscriptionGrantInput {
  domainIdentifier: string;
  environmentIdentifier: string;
  subscriptionTargetIdentifier?: string;
  grantedEntity: GrantedEntityInput;
  assetTargetNames?: AssetTargetNameMap[];
  clientToken?: string;
}
export type SubscriptionGrantId = string;
export interface ListingRevision {
  id: string;
  revision: string;
}
export type GrantedEntity = { listing: ListingRevision };
export type SubscriptionGrantOverallStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "GRANT_FAILED"
  | "REVOKE_FAILED"
  | "GRANT_AND_REVOKE_FAILED"
  | "COMPLETED"
  | "INACCESSIBLE"
  | (string & {});
export type SubscriptionGrantStatus =
  | "GRANT_PENDING"
  | "REVOKE_PENDING"
  | "GRANT_IN_PROGRESS"
  | "REVOKE_IN_PROGRESS"
  | "GRANTED"
  | "REVOKED"
  | "GRANT_FAILED"
  | "REVOKE_FAILED"
  | (string & {});
export interface FailureCause {
  message?: string;
}
export interface SubscribedAsset {
  assetId: string;
  assetRevision: string;
  status: SubscriptionGrantStatus;
  targetName?: string;
  failureCause?: FailureCause;
  grantedTimestamp?: Date;
  failureTimestamp?: Date;
  assetScope?: AssetScope;
  permissions?: Permissions;
}
export type SubscribedAssets = SubscribedAsset[];
export interface CreateSubscriptionGrantOutput {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  createdAt: Date;
  updatedAt: Date;
  environmentId?: string;
  subscriptionTargetId: string;
  grantedEntity: GrantedEntity;
  status: SubscriptionGrantOverallStatus;
  assets?: SubscribedAsset[];
  subscriptionId?: string;
}
export interface SubscribedProjectInput {
  identifier?: string;
}
export interface SubscribedUserInput {
  identifier?: string;
}
export interface SubscribedGroupInput {
  identifier?: string;
}
export interface SubscribedIamPrincipalInput {
  identifier?: string;
}
export type SubscribedPrincipalInput =
  | { project: SubscribedProjectInput; user?: never; group?: never; iam?: never }
  | { project?: never; user: SubscribedUserInput; group?: never; iam?: never }
  | { project?: never; user?: never; group: SubscribedGroupInput; iam?: never }
  | { project?: never; user?: never; group?: never; iam: SubscribedIamPrincipalInput };
export type SubscribedPrincipalInputs = SubscribedPrincipalInput[];
export interface SubscribedListingInput {
  identifier: string;
}
export type SubscribedListingInputs = SubscribedListingInput[];
export type MetadataFormInputs = FormInput[];
export interface CreateSubscriptionRequestInput {
  domainIdentifier: string;
  subscribedPrincipals: SubscribedPrincipalInput[];
  subscribedListings: SubscribedListingInput[];
  requestReason: string | redacted.Redacted<string>;
  clientToken?: string;
  metadataForms?: FormInput[];
  assetPermissions?: AssetPermission[];
  assetScopes?: AcceptedAssetScope[];
}
export interface CreateSubscriptionRequestOutput {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  status: SubscriptionRequestStatus;
  createdAt: Date;
  updatedAt: Date;
  requestReason: string | redacted.Redacted<string>;
  subscribedPrincipals: SubscribedPrincipal[];
  subscribedListings: SubscribedListing[];
  reviewerId?: string;
  decisionComment?: string | redacted.Redacted<string>;
  existingSubscriptionId?: string;
  metadataForms?: FormOutput[];
}
export type SubscriptionTargetName = string | redacted.Redacted<string>;
export interface SubscriptionTargetForm {
  formName: string;
  content: string;
}
export type SubscriptionTargetForms = SubscriptionTargetForm[];
export type AuthorizedPrincipalIdentifier = string;
export type AuthorizedPrincipalIdentifiers = string[];
export type IamRoleArn = string;
export type ApplicableAssetTypes = string[];
export type SubscriptionGrantCreationMode = "AUTOMATIC" | "MANUAL" | (string & {});
export interface CreateSubscriptionTargetInput {
  domainIdentifier: string;
  environmentIdentifier: string;
  name: string | redacted.Redacted<string>;
  type: string;
  subscriptionTargetConfig: SubscriptionTargetForm[];
  authorizedPrincipals: string[];
  manageAccessRole: string;
  applicableAssetTypes: string[];
  provider?: string;
  clientToken?: string;
  subscriptionGrantCreationMode?: SubscriptionGrantCreationMode;
}
export interface CreateSubscriptionTargetOutput {
  id: string;
  authorizedPrincipals: string[];
  domainId: string;
  projectId: string;
  environmentId: string;
  name: string | redacted.Redacted<string>;
  type: string;
  createdBy: string;
  updatedBy?: string;
  createdAt: Date;
  updatedAt?: Date;
  manageAccessRole?: string;
  applicableAssetTypes: string[];
  subscriptionTargetConfig: SubscriptionTargetForm[];
  provider: string;
  subscriptionGrantCreationMode?: SubscriptionGrantCreationMode;
}
export type UserType = "IAM_USER" | "IAM_ROLE" | "SSO_USER" | "IAM_ROLE_SESSION" | (string & {});
export interface CreateUserProfileInput {
  domainIdentifier: string;
  userIdentifier: string;
  userType?: UserType;
  sessionName?: string;
  clientToken?: string;
}
export type UserProfileType = "IAM" | "SSO" | (string & {});
export type UserProfileStatus =
  | "ASSIGNED"
  | "NOT_ASSIGNED"
  | "ACTIVATED"
  | "DEACTIVATED"
  | (string & {});
export interface CreateUserProfileOutput {
  domainId?: string;
  id?: string;
  type?: UserProfileType;
  status?: UserProfileStatus;
  details?: UserProfileDetails;
}
export interface DeleteAccountPoolInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteAccountPoolOutput {}
export interface DeleteAssetInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteAssetOutput {}
export interface DeleteAssetFilterInput {
  domainIdentifier: string;
  assetIdentifier: string;
  identifier: string;
}
export interface DeleteAssetFilterResponse {}
export interface DeleteAssetTypeInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteAssetTypeOutput {}
export interface DeleteConnectionInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteConnectionOutput {
  status?: string;
}
export interface DeleteDataExportConfigurationInput {
  domainIdentifier: string;
}
export interface DeleteDataExportConfigurationOutput {}
export interface DeleteDataProductInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteDataProductOutput {}
export interface DeleteDataSourceInput {
  domainIdentifier: string;
  identifier: string;
  clientToken?: string;
  retainPermissionsOnRevokeFailure?: boolean;
}
export type SelfGrantStatus =
  | "GRANT_PENDING"
  | "REVOKE_PENDING"
  | "GRANT_IN_PROGRESS"
  | "REVOKE_IN_PROGRESS"
  | "GRANTED"
  | "GRANT_FAILED"
  | "REVOKE_FAILED"
  | (string & {});
export interface SelfGrantStatusDetail {
  databaseName: string;
  schemaName?: string;
  status: SelfGrantStatus;
  failureCause?: string;
}
export type SelfGrantStatusDetails = SelfGrantStatusDetail[];
export interface GlueSelfGrantStatusOutput {
  selfGrantStatusDetails: SelfGrantStatusDetail[];
}
export interface RedshiftSelfGrantStatusOutput {
  selfGrantStatusDetails: SelfGrantStatusDetail[];
}
export type SelfGrantStatusOutput =
  | { glueSelfGrantStatus: GlueSelfGrantStatusOutput; redshiftSelfGrantStatus?: never }
  | { glueSelfGrantStatus?: never; redshiftSelfGrantStatus: RedshiftSelfGrantStatusOutput };
export interface DeleteDataSourceOutput {
  id: string;
  status?: DataSourceStatus;
  type?: string;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  domainId: string;
  projectId: string;
  environmentId?: string;
  connectionId?: string;
  configuration?: DataSourceConfigurationOutput;
  enableSetting?: EnableSetting;
  publishOnImport?: boolean;
  assetFormsOutput?: FormOutput[];
  schedule?: ScheduleConfiguration;
  lastRunStatus?: DataSourceRunStatus;
  lastRunAt?: Date;
  lastRunErrorMessage?: DataSourceErrorMessage;
  errorMessage?: DataSourceErrorMessage;
  createdAt?: Date;
  updatedAt?: Date;
  selfGrantStatus?: SelfGrantStatusOutput;
  retainPermissionsOnRevokeFailure?: boolean;
}
export interface DeleteDomainInput {
  identifier: string;
  clientToken?: string;
  skipDeletionCheck?: boolean;
  cascadeDelete?: boolean;
}
export interface DeleteDomainOutput {
  status: DomainStatus;
}
export interface DeleteDomainUnitInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteDomainUnitOutput {}
export interface DeleteEnvironmentInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteEnvironmentResponse {}
export interface DeleteEnvironmentActionInput {
  domainIdentifier: string;
  environmentIdentifier: string;
  identifier: string;
}
export interface DeleteEnvironmentActionResponse {}
export interface DeleteEnvironmentBlueprintInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteEnvironmentBlueprintResponse {}
export interface DeleteEnvironmentBlueprintConfigurationInput {
  domainIdentifier: string;
  environmentBlueprintIdentifier: string;
}
export interface DeleteEnvironmentBlueprintConfigurationOutput {}
export interface DeleteEnvironmentProfileInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteEnvironmentProfileResponse {}
export interface DeleteFormTypeInput {
  domainIdentifier: string;
  formTypeIdentifier: string;
}
export interface DeleteFormTypeOutput {}
export interface DeleteGlossaryInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteGlossaryOutput {}
export interface DeleteGlossaryTermInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteGlossaryTermOutput {}
export type LineageEventIdentifier = string;
export interface DeleteLineageEventInput {
  domainIdentifier: string;
  identifier: string;
}
export type LineageEventProcessingStatus =
  | "REQUESTED"
  | "PROCESSING"
  | "SUCCESS"
  | "FAILED"
  | (string & {});
export interface DeleteLineageEventOutput {
  id?: string;
  domainId?: string;
  processingStatus?: LineageEventProcessingStatus;
}
export interface DeleteListingInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteListingOutput {}
export interface DeleteNotebookInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteNotebookOutput {}
export interface DeleteProjectInput {
  domainIdentifier: string;
  identifier: string;
  skipDeletionCheck?: boolean;
}
export interface DeleteProjectOutput {}
export interface DeleteProjectMembershipInput {
  domainIdentifier: string;
  projectIdentifier: string;
  member: Member;
}
export interface DeleteProjectMembershipOutput {}
export interface DeleteProjectProfileInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteProjectProfileOutput {}
export interface DeleteRuleInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteRuleOutput {}
export interface DeleteSubscriptionGrantInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteSubscriptionGrantOutput {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  createdAt: Date;
  updatedAt: Date;
  environmentId?: string;
  subscriptionTargetId: string;
  grantedEntity: GrantedEntity;
  status: SubscriptionGrantOverallStatus;
  assets?: SubscribedAsset[];
  subscriptionId?: string;
}
export interface DeleteSubscriptionRequestInput {
  domainIdentifier: string;
  identifier: string;
}
export interface DeleteSubscriptionRequestResponse {}
export interface DeleteSubscriptionTargetInput {
  domainIdentifier: string;
  environmentIdentifier: string;
  identifier: string;
}
export interface DeleteSubscriptionTargetResponse {}
export type TimeSeriesEntityType = "ASSET" | "LISTING" | (string & {});
export interface DeleteTimeSeriesDataPointsInput {
  domainIdentifier: string;
  entityIdentifier: string;
  entityType: TimeSeriesEntityType;
  formName: string;
  clientToken?: string;
}
export interface DeleteTimeSeriesDataPointsOutput {}
export interface DisassociateEnvironmentRoleInput {
  domainIdentifier: string;
  environmentIdentifier: string;
  environmentRoleArn: string;
}
export interface DisassociateEnvironmentRoleOutput {}
export interface DisassociateGovernedTermsInput {
  domainIdentifier: string;
  entityIdentifier: string;
  entityType: GovernedEntityType;
  governedGlossaryTerms: string[];
}
export interface DisassociateGovernedTermsOutput {}
export interface GetAccountPoolInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetAccountPoolOutput {
  domainId?: string;
  name?: string | redacted.Redacted<string>;
  id?: string;
  description?: string | redacted.Redacted<string>;
  resolutionStrategy?: ResolutionStrategy;
  accountSource: AccountSource;
  createdBy: string;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  updatedBy?: string;
  domainUnitId?: string;
}
export interface GetAssetInput {
  domainIdentifier: string;
  identifier: string;
  revision?: string;
}
export interface GetAssetOutput {
  id: string;
  name: string | redacted.Redacted<string>;
  typeIdentifier: string;
  typeRevision: string;
  externalIdentifier?: string;
  revision: string;
  description?: string | redacted.Redacted<string>;
  createdAt?: Date;
  createdBy?: string;
  firstRevisionCreatedAt?: Date;
  firstRevisionCreatedBy?: string;
  glossaryTerms?: string[];
  governedGlossaryTerms?: string[];
  owningProjectId: string;
  domainId: string;
  listing?: AssetListingDetails;
  formsOutput: FormOutput[];
  readOnlyFormsOutput?: FormOutput[];
  latestTimeSeriesDataPointFormsOutput?: TimeSeriesDataPointSummaryFormOutput[];
}
export interface GetAssetFilterInput {
  domainIdentifier: string;
  assetIdentifier: string;
  identifier: string;
}
export interface GetAssetFilterOutput {
  id: string;
  domainId: string;
  assetId: string;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  status?: FilterStatus;
  configuration: AssetFilterConfiguration;
  createdAt?: Date;
  errorMessage?: string;
  effectiveColumnNames?: string[];
  effectiveRowFilter?: string;
}
export interface GetAssetTypeInput {
  domainIdentifier: string;
  identifier: string;
  revision?: string;
}
export interface GetAssetTypeOutput {
  domainId: string;
  name: string;
  revision: string;
  description?: string | redacted.Redacted<string>;
  formsOutput: { [key: string]: FormEntryOutput | undefined };
  owningProjectId: string;
  originDomainId?: string;
  originProjectId?: string;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
}
export interface GetConnectionInput {
  domainIdentifier: string;
  identifier: string;
  withSecret?: boolean;
}
export interface ConnectionCredentials {
  accessKeyId?: string;
  secretAccessKey?: string | redacted.Redacted<string>;
  sessionToken?: string | redacted.Redacted<string>;
  expiration?: Date;
}
export interface GetConnectionOutput {
  connectionCredentials?: ConnectionCredentials;
  configurations?: Configuration[];
  connectionId: string;
  description?: string | redacted.Redacted<string>;
  domainId: string;
  domainUnitId: string;
  environmentId?: string;
  environmentUserRole?: string;
  name: string;
  physicalEndpoints: PhysicalEndpoint[];
  projectId?: string;
  props?: ConnectionPropertiesOutput;
  type: ConnectionType;
  scope?: ConnectionScope;
}
export interface GetDataExportConfigurationInput {
  domainIdentifier: string;
}
export type ConfigurationStatus = "COMPLETED" | "FAILED" | (string & {});
export interface EncryptionConfiguration {
  kmsKeyArn?: string;
  sseAlgorithm?: string;
}
export interface GetDataExportConfigurationOutput {
  isExportEnabled?: boolean;
  status?: ConfigurationStatus;
  encryptionConfiguration?: EncryptionConfiguration;
  s3TableBucketArn?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface GetDataProductInput {
  domainIdentifier: string;
  identifier: string;
  revision?: string;
}
export interface GetDataProductOutput {
  domainId: string;
  id: string;
  revision: string;
  owningProjectId: string;
  name: string | redacted.Redacted<string>;
  status: DataProductStatus;
  description?: string | redacted.Redacted<string>;
  glossaryTerms?: string[];
  items?: DataProductItem[];
  formsOutput?: FormOutput[];
  createdAt?: Date;
  createdBy?: string;
  firstRevisionCreatedAt?: Date;
  firstRevisionCreatedBy?: string;
}
export interface GetDataSourceInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetDataSourceOutput {
  id: string;
  status?: DataSourceStatus;
  type?: string;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  domainId: string;
  projectId: string;
  environmentId?: string;
  connectionId?: string;
  configuration?: DataSourceConfigurationOutput;
  recommendation?: RecommendationConfiguration;
  enableSetting?: EnableSetting;
  publishOnImport?: boolean;
  assetFormsOutput?: FormOutput[];
  schedule?: ScheduleConfiguration;
  lastRunStatus?: DataSourceRunStatus;
  lastRunAt?: Date;
  lastRunErrorMessage?: DataSourceErrorMessage;
  lastRunAssetCount?: number;
  errorMessage?: DataSourceErrorMessage;
  createdAt?: Date;
  updatedAt?: Date;
  selfGrantStatus?: SelfGrantStatusOutput;
}
export type DataSourceRunId = string;
export interface GetDataSourceRunInput {
  domainIdentifier: string;
  identifier: string;
}
export type DataSourceRunType = "PRIORITIZED" | "SCHEDULED" | (string & {});
export interface RunStatisticsForAssets {
  added?: number;
  updated?: number;
  unchanged?: number;
  skipped?: number;
  failed?: number;
}
export type LineageImportStatus =
  | "IN_PROGRESS"
  | "SUCCESS"
  | "FAILED"
  | "PARTIALLY_SUCCEEDED"
  | (string & {});
export interface DataSourceRunLineageSummary {
  importStatus?: LineageImportStatus;
}
export interface GetDataSourceRunOutput {
  domainId: string;
  dataSourceId: string;
  id: string;
  projectId: string;
  status: DataSourceRunStatus;
  type: DataSourceRunType;
  dataSourceConfigurationSnapshot?: string;
  runStatisticsForAssets?: RunStatisticsForAssets;
  lineageSummary?: DataSourceRunLineageSummary;
  errorMessage?: DataSourceErrorMessage;
  createdAt: Date;
  updatedAt: Date;
  startedAt?: Date;
  stoppedAt?: Date;
}
export interface GetDomainInput {
  identifier: string;
}
export interface FailureReason {
  id?: string;
  message?: string;
}
export type FailureReasonsList = FailureReason[];
export interface DeleteProgress {
  successfullyDeletedProjectCount?: number;
}
export interface GetDomainOutput {
  id: string;
  rootDomainUnitId?: string;
  name?: string;
  description?: string;
  singleSignOn?: SingleSignOn;
  domainExecutionRole: string;
  arn?: string;
  kmsKeyIdentifier?: string;
  status: DomainStatus;
  portalUrl?: string;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  tags?: { [key: string]: string | undefined };
  domainVersion?: DomainVersion;
  serviceRole?: string;
  failureReasons?: FailureReason[];
  deleteProgress?: DeleteProgress;
}
export interface GetDomainUnitInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetDomainUnitOutput {
  id: string;
  domainId: string;
  name: string | redacted.Redacted<string>;
  parentDomainUnitId?: string;
  description?: string | redacted.Redacted<string>;
  owners: DomainUnitOwnerProperties[];
  createdAt?: Date;
  lastUpdatedAt?: Date;
  createdBy?: string;
  lastUpdatedBy?: string;
}
export interface GetEnvironmentInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetEnvironmentOutput {
  projectId: string;
  id?: string;
  domainId: string;
  createdBy: string;
  createdAt?: Date;
  updatedAt?: Date;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  environmentProfileId?: string;
  awsAccountId?: string;
  awsAccountRegion?: string;
  provider: string;
  provisionedResources?: Resource[];
  status?: EnvironmentStatus;
  environmentActions?: ConfigurableEnvironmentAction[];
  glossaryTerms?: string[];
  userParameters?: CustomParameter[];
  lastDeployment?: Deployment;
  provisioningProperties?: ProvisioningProperties;
  deploymentProperties?: DeploymentProperties;
  environmentBlueprintId?: string;
  environmentConfigurationId?: string | redacted.Redacted<string>;
  environmentConfigurationName?: string | redacted.Redacted<string>;
}
export interface GetEnvironmentActionInput {
  domainIdentifier: string;
  environmentIdentifier: string;
  identifier: string;
}
export interface GetEnvironmentActionOutput {
  domainId: string;
  environmentId: string;
  id: string;
  name: string;
  parameters: ActionParameters;
  description?: string;
}
export interface GetEnvironmentBlueprintInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetEnvironmentBlueprintOutput {
  id: string;
  name: string;
  description?: string | redacted.Redacted<string>;
  provider: string;
  provisioningProperties: ProvisioningProperties;
  deploymentProperties?: DeploymentProperties;
  userParameters?: CustomParameter[];
  glossaryTerms?: string[];
  blueprintCategory?: BlueprintCategory;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface GetEnvironmentBlueprintConfigurationInput {
  domainIdentifier: string;
  environmentBlueprintIdentifier: string;
}
export type PolicyArn = string;
export type EnabledRegionList = string[];
export type RegionalParameter = { [key: string]: string | undefined };
export type RegionalParameterMap = {
  [key: string]: { [key: string]: string | undefined } | undefined;
};
export type ResourceConfigurationParameterMap = { [key: string]: string | undefined };
export interface ResourceConfiguration {
  identifier: string;
  name: string;
  description?: string;
  region: string;
  parameters: { [key: string]: string | undefined };
}
export type ResourceConfigurations = ResourceConfiguration[];
export type S3Location = string;
export type S3LocationList = string[];
export interface LakeFormationConfiguration {
  locationRegistrationRole?: string;
  locationRegistrationExcludeS3Locations?: string[];
}
export type ProvisioningConfiguration = { lakeFormationConfiguration: LakeFormationConfiguration };
export type ProvisioningConfigurationList = ProvisioningConfiguration[];
export interface GetEnvironmentBlueprintConfigurationOutput {
  domainId: string;
  environmentBlueprintId: string;
  provisioningRoleArn?: string;
  environmentRolePermissionBoundary?: string;
  manageAccessRoleArn?: string;
  enabledRegions?: string[];
  regionalParameters?: { [key: string]: { [key: string]: string | undefined } | undefined };
  allowUserProvidedConfigurations?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  resourceConfigurations?: ResourceConfiguration[];
  provisioningConfigurations?: ProvisioningConfiguration[];
}
export interface GetEnvironmentCredentialsInput {
  domainIdentifier: string;
  environmentIdentifier: string;
}
export interface GetEnvironmentCredentialsOutput {
  accessKeyId?: string;
  secretAccessKey?: string | redacted.Redacted<string>;
  sessionToken?: string | redacted.Redacted<string>;
  expiration?: Date;
}
export interface GetEnvironmentProfileInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetEnvironmentProfileOutput {
  id: string;
  domainId: string;
  awsAccountId?: string;
  awsAccountRegion?: string;
  createdBy: string;
  createdAt?: Date;
  updatedAt?: Date;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  environmentBlueprintId: string;
  projectId?: string;
  userParameters?: CustomParameter[];
}
export interface GetFormTypeInput {
  domainIdentifier: string;
  formTypeIdentifier: string;
  revision?: string;
}
export interface Import {
  name: string | redacted.Redacted<string>;
  revision: string;
}
export type ImportList = Import[];
export interface GetFormTypeOutput {
  domainId: string;
  name: string | redacted.Redacted<string>;
  revision: string;
  model: Model;
  owningProjectId?: string;
  originDomainId?: string;
  originProjectId?: string;
  status?: FormTypeStatus;
  createdAt?: Date;
  createdBy?: string;
  description?: string | redacted.Redacted<string>;
  imports?: Import[];
}
export interface GetGlossaryInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetGlossaryOutput {
  domainId: string;
  id: string;
  owningProjectId: string;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  status: GlossaryStatus;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  usageRestrictions?: GlossaryUsageRestriction[];
}
export interface GetGlossaryTermInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetGlossaryTermOutput {
  domainId: string;
  glossaryId: string;
  id: string;
  name: string | redacted.Redacted<string>;
  shortDescription?: string | redacted.Redacted<string>;
  longDescription?: string | redacted.Redacted<string>;
  termRelations?: TermRelations;
  status: GlossaryTermStatus;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  usageRestrictions?: GlossaryUsageRestriction[];
}
export interface GetGroupProfileInput {
  domainIdentifier: string;
  groupIdentifier: string;
}
export interface GetGroupProfileOutput {
  domainId?: string;
  id?: string;
  status?: GroupProfileStatus;
  groupName?: string | redacted.Redacted<string>;
  rolePrincipalArn?: string;
  rolePrincipalId?: string;
}
export interface GetIamPortalLoginUrlInput {
  domainIdentifier: string;
}
export interface GetIamPortalLoginUrlOutput {
  authCodeUrl?: string;
  userProfileId: string;
}
export type RunIdentifier = string;
export interface GetJobRunInput {
  domainIdentifier: string;
  identifier: string;
}
export type JobType = "LINEAGE" | (string & {});
export type JobRunMode = "SCHEDULED" | "ON_DEMAND" | (string & {});
export type FailedQueryProcessingErrorMessages = string[];
export interface LineageSqlQueryRunDetails {
  queryStartTime?: Date;
  queryEndTime?: Date;
  totalQueriesProcessed?: number;
  numQueriesFailed?: number;
  errorMessages?: string[];
}
export interface LineageRunDetails {
  sqlQueryRunDetails?: LineageSqlQueryRunDetails;
}
export type JobRunDetails = { lineageRunDetails: LineageRunDetails };
export type JobRunStatus =
  | "SCHEDULED"
  | "IN_PROGRESS"
  | "SUCCESS"
  | "PARTIALLY_SUCCEEDED"
  | "FAILED"
  | "ABORTED"
  | "TIMED_OUT"
  | "CANCELED"
  | (string & {});
export interface JobRunError {
  message: string;
}
export interface GetJobRunOutput {
  domainId?: string;
  id?: string;
  jobId?: string;
  jobType?: JobType;
  runMode?: JobRunMode;
  details?: JobRunDetails;
  status?: JobRunStatus;
  error?: JobRunError;
  createdBy?: string;
  createdAt?: Date;
  startTime?: Date;
  endTime?: Date;
}
export interface GetLineageEventInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetLineageEventOutput {
  domainId?: string;
  id?: string;
  event?: T.StreamingOutputBody;
  createdBy?: string;
  processingStatus?: LineageEventProcessingStatus;
  eventTime?: Date;
  createdAt?: Date;
}
export type LineageNodeIdentifier = string;
export interface GetLineageNodeInput {
  domainIdentifier: string;
  identifier: string;
  eventTimestamp?: Date;
}
export type LineageNodeId = string;
export interface LineageNodeReference {
  id?: string;
  eventTimestamp?: Date;
}
export type LineageNodeReferenceList = LineageNodeReference[];
export interface GetLineageNodeOutput {
  domainId: string;
  name?: string;
  description?: string;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  id: string;
  typeName: string;
  typeRevision?: string;
  sourceIdentifier?: string;
  eventTimestamp?: Date;
  formsOutput?: FormOutput[];
  upstreamNodes?: LineageNodeReference[];
  downstreamNodes?: LineageNodeReference[];
}
export interface GetListingInput {
  domainIdentifier: string;
  identifier: string;
  listingRevision?: string;
}
export interface AssetListing {
  assetId?: string;
  assetRevision?: string;
  assetType?: string;
  createdAt?: Date;
  forms?: string;
  latestTimeSeriesDataPointForms?: TimeSeriesDataPointSummaryFormOutput[];
  glossaryTerms?: DetailedGlossaryTerm[];
  governedGlossaryTerms?: DetailedGlossaryTerm[];
  owningProjectId?: string;
}
export interface ListingSummary {
  listingId?: string;
  listingRevision?: string;
  glossaryTerms?: DetailedGlossaryTerm[];
}
export type ListingSummaries = ListingSummary[];
export interface DataProductListing {
  dataProductId?: string;
  dataProductRevision?: string;
  createdAt?: Date;
  forms?: string;
  glossaryTerms?: DetailedGlossaryTerm[];
  owningProjectId?: string;
  items?: ListingSummary[];
}
export type ListingItem =
  | { assetListing: AssetListing; dataProductListing?: never }
  | { assetListing?: never; dataProductListing: DataProductListing };
export interface GetListingOutput {
  domainId: string;
  id: string;
  listingRevision: string;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: string;
  updatedBy?: string;
  item?: ListingItem;
  name?: string;
  description?: string | redacted.Redacted<string>;
  status?: ListingStatus;
}
export type MetadataGenerationRunType =
  | "BUSINESS_DESCRIPTIONS"
  | "BUSINESS_NAMES"
  | "BUSINESS_GLOSSARY_ASSOCIATIONS"
  | (string & {});
export interface GetMetadataGenerationRunInput {
  domainIdentifier: string;
  identifier: string;
  type?: MetadataGenerationRunType;
}
export type MetadataGenerationTargetType = "ASSET" | (string & {});
export interface MetadataGenerationRunTarget {
  type: MetadataGenerationTargetType;
  identifier: string;
  revision?: string;
}
export type MetadataGenerationRunStatus =
  | "SUBMITTED"
  | "IN_PROGRESS"
  | "CANCELED"
  | "SUCCEEDED"
  | "FAILED"
  | "PARTIALLY_SUCCEEDED"
  | (string & {});
export type MetadataGenerationRunTypes = MetadataGenerationRunType[];
export interface MetadataGenerationRunTypeStat {
  type: MetadataGenerationRunType;
  status: MetadataGenerationRunStatus;
  errorMessage?: string;
}
export type MetadataGenerationRunTypeStats = MetadataGenerationRunTypeStat[];
export interface GetMetadataGenerationRunOutput {
  domainId: string;
  id: string;
  target?: MetadataGenerationRunTarget;
  status?: MetadataGenerationRunStatus;
  type?: MetadataGenerationRunType;
  types?: MetadataGenerationRunType[];
  createdAt?: Date;
  createdBy?: string;
  owningProjectId: string;
  typeStats?: MetadataGenerationRunTypeStat[];
}
export interface GetNotebookInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetNotebookOutput {
  id: string;
  name: string | redacted.Redacted<string>;
  owningProjectId: string;
  domainId: string;
  cellOrder: CellInformation[];
  status: NotebookStatus;
  type?: NotebookType;
  description?: string | redacted.Redacted<string>;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  lockedBy?: string;
  lockedAt?: Date;
  lockExpiresAt?: Date;
  computeId?: string;
  metadata?: { [key: string]: string | redacted.Redacted<string> | undefined };
  parameters?: { [key: string]: string | undefined };
  environmentConfiguration?: EnvironmentConfig;
  error?: NotebookError;
  gitMetadata?: GitMetadata;
}
export type ExportId = string;
export interface GetNotebookExportInput {
  domainIdentifier: string;
  identifier: string;
}
export type FileFormat = "PDF" | "IPYNB" | (string & {});
export type NotebookExportStatus = "IN_PROGRESS" | "SUCCEEDED" | "FAILED" | (string & {});
export type NotebookS3Uri = string | redacted.Redacted<string>;
export interface S3Destination {
  uri?: string | redacted.Redacted<string>;
}
export type OutputLocation = { s3: S3Destination };
export interface NotebookExportError {
  message: string;
}
export type CompletedAt = Date;
export interface GetNotebookExportOutput {
  id: string;
  domainId: string;
  owningProjectId: string;
  notebookId: string;
  fileFormat: FileFormat;
  status: NotebookExportStatus;
  outputLocation?: OutputLocation;
  error?: NotebookExportError;
  completedAt?: Date;
  createdAt?: Date;
  createdBy?: string;
}
export type NotebookRunId = string;
export interface GetNotebookRunInput {
  domainIdentifier: string;
  identifier: string;
}
export type ScheduleId = string;
export type NotebookRunStatus =
  | "QUEUED"
  | "STARTING"
  | "RUNNING"
  | "STOPPING"
  | "STOPPED"
  | "SUCCEEDED"
  | "FAILED"
  | (string & {});
export type InstanceType = string;
export interface ComputeConfig {
  instanceType?: string;
  environmentVersion?: string;
}
export type NetworkAccessType = "PUBLIC_INTERNET_ONLY" | "VPC_ONLY" | (string & {});
export type SubnetIds = string[];
export type SecurityGroupIds = string[];
export interface NetworkConfig {
  networkAccessType: NetworkAccessType;
  vpcId?: string;
  subnetIds?: string[];
  securityGroupIds?: string[];
}
export interface TimeoutConfig {
  runTimeoutInMinutes?: number;
}
export type S3Path = string;
export interface StorageConfig {
  projectS3Path?: string;
  kmsKeyArn?: string;
}
export type NotifyOnState =
  | "SUCCEEDED"
  | "FAILED"
  | "STOPPED"
  | "QUEUED"
  | "STARTING"
  | "RUNNING"
  | "STOPPING"
  | (string & {});
export type NotifyOnStates = NotifyOnState[];
export interface NotificationConfig {
  notifyOn: NotifyOnState[];
}
export type TriggerSourceType = "MANUAL" | "SCHEDULED" | "WORKFLOW" | (string & {});
export interface TriggerSource {
  type?: TriggerSourceType;
  name?: string;
}
export interface NotebookRunError {
  message: string;
}
export interface GetNotebookRunOutput {
  id: string;
  domainId: string;
  owningProjectId: string;
  notebookId: string;
  scheduleId?: string;
  status: NotebookRunStatus;
  cellOrder?: CellInformation[];
  metadata?: { [key: string]: string | redacted.Redacted<string> | undefined };
  parameters?: { [key: string]: string | undefined };
  computeConfiguration?: ComputeConfig;
  networkConfiguration?: NetworkConfig;
  timeoutConfiguration?: TimeoutConfig;
  environmentConfiguration?: EnvironmentConfig;
  storageConfiguration?: StorageConfig;
  notificationConfiguration?: NotificationConfig;
  triggerSource?: TriggerSource;
  error?: NotebookRunError;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  startedAt?: Date;
  completedAt?: Date;
}
export interface GetProjectInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetProjectOutput {
  domainId: string;
  id: string;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  projectStatus?: ProjectStatus;
  failureReasons?: ProjectDeletionError[];
  createdBy: string;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  resourceTags?: ResourceTag[];
  glossaryTerms?: string[];
  domainUnitId?: string;
  projectProfileId?: string;
  userParameters?: EnvironmentConfigurationUserParameter[];
  environmentDeploymentDetails?: EnvironmentDeploymentDetails;
  projectCategory?: string;
}
export interface GetProjectProfileInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetProjectProfileOutput {
  domainId: string;
  id: string;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  status?: Status;
  projectResourceTags?: ResourceTagParameter[];
  allowCustomProjectResourceTags?: boolean;
  projectResourceTagsDescription?: string | redacted.Redacted<string>;
  environmentConfigurations?: EnvironmentConfiguration[];
  createdBy: string;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  domainUnitId?: string;
}
export interface GetRuleInput {
  domainIdentifier: string;
  identifier: string;
  revision?: string;
}
export interface GetRuleOutput {
  identifier: string;
  revision: string;
  name: string | redacted.Redacted<string>;
  ruleType: RuleType;
  target: RuleTarget;
  action: RuleAction;
  scope: RuleScope;
  detail: RuleDetail;
  targetType?: RuleTargetType;
  description?: string | redacted.Redacted<string>;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  lastUpdatedBy: string;
}
export interface GetSubscriptionInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetSubscriptionOutput {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  status: SubscriptionStatus;
  createdAt: Date;
  updatedAt: Date;
  subscribedPrincipal: SubscribedPrincipal;
  subscribedListing: SubscribedListing;
  subscriptionRequestId?: string;
  retainPermissions?: boolean;
}
export interface GetSubscriptionGrantInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetSubscriptionGrantOutput {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  createdAt: Date;
  updatedAt: Date;
  environmentId?: string;
  subscriptionTargetId: string;
  grantedEntity: GrantedEntity;
  status: SubscriptionGrantOverallStatus;
  assets?: SubscribedAsset[];
  subscriptionId?: string;
}
export interface GetSubscriptionRequestDetailsInput {
  domainIdentifier: string;
  identifier: string;
}
export interface GetSubscriptionRequestDetailsOutput {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  status: SubscriptionRequestStatus;
  createdAt: Date;
  updatedAt: Date;
  requestReason: string | redacted.Redacted<string>;
  subscribedPrincipals: SubscribedPrincipal[];
  subscribedListings: SubscribedListing[];
  reviewerId?: string;
  decisionComment?: string | redacted.Redacted<string>;
  existingSubscriptionId?: string;
  metadataForms?: FormOutput[];
}
export interface GetSubscriptionTargetInput {
  domainIdentifier: string;
  environmentIdentifier: string;
  identifier: string;
}
export interface GetSubscriptionTargetOutput {
  id: string;
  authorizedPrincipals: string[];
  domainId: string;
  projectId: string;
  environmentId: string;
  name: string | redacted.Redacted<string>;
  type: string;
  createdBy: string;
  updatedBy?: string;
  createdAt: Date;
  updatedAt?: Date;
  manageAccessRole?: string;
  applicableAssetTypes: string[];
  subscriptionTargetConfig: SubscriptionTargetForm[];
  provider: string;
  subscriptionGrantCreationMode?: SubscriptionGrantCreationMode;
}
export type TimeSeriesDataPointIdentifier = string;
export interface GetTimeSeriesDataPointInput {
  domainIdentifier: string;
  entityIdentifier: string;
  entityType: TimeSeriesEntityType;
  identifier: string;
  formName: string;
}
export interface TimeSeriesDataPointFormOutput {
  formName: string;
  typeIdentifier: string;
  typeRevision?: string;
  timestamp: Date;
  content?: string;
  id?: string;
}
export interface GetTimeSeriesDataPointOutput {
  domainId?: string;
  entityId?: string;
  entityType?: TimeSeriesEntityType;
  formName?: string;
  form?: TimeSeriesDataPointFormOutput;
}
export interface GetUserProfileInput {
  domainIdentifier: string;
  userIdentifier: string;
  type?: UserProfileType;
  sessionName?: string;
}
export interface GetUserProfileOutput {
  domainId?: string;
  id?: string;
  type?: UserProfileType;
  status?: UserProfileStatus;
  details?: UserProfileDetails;
}
export type SortFieldAccountPool = "NAME" | (string & {});
export type SortOrder = "ASCENDING" | "DESCENDING" | (string & {});
export type PaginationToken = string;
export type MaxResults = number;
export interface ListAccountPoolsInput {
  domainIdentifier: string;
  name?: string | redacted.Redacted<string>;
  sortBy?: SortFieldAccountPool;
  sortOrder?: SortOrder;
  nextToken?: string;
  maxResults?: number;
}
export interface AccountPoolSummary {
  domainId?: string;
  id?: string;
  name?: string | redacted.Redacted<string>;
  resolutionStrategy?: ResolutionStrategy;
  domainUnitId?: string;
  createdBy?: string;
  updatedBy?: string;
}
export type AccountPoolSummaries = AccountPoolSummary[];
export interface ListAccountPoolsOutput {
  items?: AccountPoolSummary[];
  nextToken?: string;
}
export interface ListAccountsInAccountPoolInput {
  domainIdentifier: string;
  identifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAccountsInAccountPoolOutput {
  items?: AccountInfo[];
  nextToken?: string;
}
export interface ListAssetFiltersInput {
  domainIdentifier: string;
  assetIdentifier: string;
  status?: FilterStatus;
  nextToken?: string;
  maxResults?: number;
}
export interface AssetFilterSummary {
  id: string;
  domainId: string;
  assetId: string;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  status?: FilterStatus;
  effectiveColumnNames?: string[];
  effectiveRowFilter?: string;
  createdAt?: Date;
  errorMessage?: string;
}
export type AssetFilters = AssetFilterSummary[];
export interface ListAssetFiltersOutput {
  items: AssetFilterSummary[];
  nextToken?: string;
}
export interface ListAssetRevisionsInput {
  domainIdentifier: string;
  identifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface AssetRevision {
  domainId?: string;
  id?: string;
  revision?: string;
  createdBy?: string;
  createdAt?: Date;
}
export type AssetRevisions = AssetRevision[];
export interface ListAssetRevisionsOutput {
  items?: AssetRevision[];
  nextToken?: string;
}
export type SortFieldConnection = "NAME" | (string & {});
export interface ListConnectionsInput {
  domainIdentifier: string;
  maxResults?: number;
  nextToken?: string;
  sortBy?: SortFieldConnection;
  sortOrder?: SortOrder;
  name?: string;
  environmentIdentifier?: string;
  projectIdentifier?: string;
  type?: ConnectionType;
  scope?: ConnectionScope;
}
export interface ConnectionSummary {
  configurations?: Configuration[];
  connectionId: string;
  domainId: string;
  domainUnitId: string;
  environmentId?: string;
  name: string;
  physicalEndpoints: PhysicalEndpoint[];
  projectId?: string;
  props?: ConnectionPropertiesOutput;
  type: ConnectionType;
  scope?: ConnectionScope;
}
export type ConnectionSummaries = ConnectionSummary[];
export interface ListConnectionsOutput {
  items: ConnectionSummary[];
  nextToken?: string;
}
export interface ListDataProductRevisionsInput {
  domainIdentifier: string;
  identifier: string;
  maxResults?: number;
  nextToken?: string;
}
export interface DataProductRevision {
  domainId?: string;
  id?: string;
  revision?: string;
  createdAt?: Date;
  createdBy?: string;
}
export type DataProductRevisions = DataProductRevision[];
export interface ListDataProductRevisionsOutput {
  items: DataProductRevision[];
  nextToken?: string;
}
export type DataAssetActivityStatus =
  | "FAILED"
  | "PUBLISHING_FAILED"
  | "SUCCEEDED_CREATED"
  | "SUCCEEDED_UPDATED"
  | "SKIPPED_ALREADY_IMPORTED"
  | "SKIPPED_ARCHIVED"
  | "SKIPPED_NO_ACCESS"
  | "UNCHANGED"
  | (string & {});
export interface ListDataSourceRunActivitiesInput {
  domainIdentifier: string;
  identifier: string;
  status?: DataAssetActivityStatus;
  nextToken?: string;
  maxResults?: number;
}
export type LineageEventErrorMessage = string;
export interface LineageInfo {
  eventId?: string;
  eventStatus?: LineageEventProcessingStatus;
  errorMessage?: string;
}
export interface DataSourceRunActivity {
  database: string | redacted.Redacted<string>;
  dataSourceRunId: string;
  technicalName: string | redacted.Redacted<string>;
  dataAssetStatus: DataAssetActivityStatus;
  projectId: string;
  dataAssetId?: string;
  technicalDescription?: string | redacted.Redacted<string>;
  errorMessage?: DataSourceErrorMessage;
  lineageSummary?: LineageInfo;
  createdAt: Date;
  updatedAt: Date;
}
export type DataSourceRunActivities = DataSourceRunActivity[];
export interface ListDataSourceRunActivitiesOutput {
  items: DataSourceRunActivity[];
  nextToken?: string;
}
export interface ListDataSourceRunsInput {
  domainIdentifier: string;
  dataSourceIdentifier: string;
  status?: DataSourceRunStatus;
  nextToken?: string;
  maxResults?: number;
}
export interface DataSourceRunSummary {
  id: string;
  dataSourceId: string;
  type: DataSourceRunType;
  status: DataSourceRunStatus;
  projectId: string;
  runStatisticsForAssets?: RunStatisticsForAssets;
  errorMessage?: DataSourceErrorMessage;
  createdAt: Date;
  updatedAt: Date;
  startedAt?: Date;
  stoppedAt?: Date;
  lineageSummary?: DataSourceRunLineageSummary;
}
export type DataSourceRunSummaries = DataSourceRunSummary[];
export interface ListDataSourceRunsOutput {
  items: DataSourceRunSummary[];
  nextToken?: string;
}
export interface ListDataSourcesInput {
  domainIdentifier: string;
  projectIdentifier: string;
  environmentIdentifier?: string;
  connectionIdentifier?: string;
  type?: string;
  status?: DataSourceStatus;
  name?: string | redacted.Redacted<string>;
  nextToken?: string;
  maxResults?: number;
}
export interface DataSourceSummary {
  domainId: string;
  environmentId?: string;
  connectionId?: string;
  dataSourceId: string;
  name: string | redacted.Redacted<string>;
  type: string;
  status: DataSourceStatus;
  enableSetting?: EnableSetting;
  schedule?: ScheduleConfiguration;
  lastRunStatus?: DataSourceRunStatus;
  lastRunAt?: Date;
  lastRunErrorMessage?: DataSourceErrorMessage;
  lastRunAssetCount?: number;
  createdAt?: Date;
  updatedAt?: Date;
  description?: string | redacted.Redacted<string>;
}
export type DataSourceSummaries = DataSourceSummary[];
export interface ListDataSourcesOutput {
  items: DataSourceSummary[];
  nextToken?: string;
}
export type MaxResultsForListDomains = number;
export interface ListDomainsInput {
  status?: DomainStatus;
  maxResults?: number;
  nextToken?: string;
}
export type DomainName = string | redacted.Redacted<string>;
export type DomainDescription = string | redacted.Redacted<string>;
export interface DomainSummary {
  id: string;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  arn: string;
  managedAccountId: string;
  status: DomainStatus;
  portalUrl?: string;
  createdAt: Date;
  lastUpdatedAt?: Date;
  domainVersion?: DomainVersion;
}
export type DomainSummaries = DomainSummary[];
export interface ListDomainsOutput {
  items: DomainSummary[];
  nextToken?: string;
}
export interface ListDomainUnitsForParentInput {
  domainIdentifier: string;
  parentDomainUnitIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
export interface DomainUnitSummary {
  name: string;
  id: string;
}
export type DomainUnitSummaries = DomainUnitSummary[];
export interface ListDomainUnitsForParentOutput {
  items: DomainUnitSummary[];
  nextToken?: string;
}
export interface ListEntityOwnersInput {
  domainIdentifier: string;
  entityType: DataZoneEntityType;
  entityIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
export interface OwnerUserPropertiesOutput {
  userId?: string;
}
export interface OwnerGroupPropertiesOutput {
  groupId?: string;
}
export type OwnerPropertiesOutput =
  | { user: OwnerUserPropertiesOutput; group?: never }
  | { user?: never; group: OwnerGroupPropertiesOutput };
export type EntityOwners = OwnerPropertiesOutput[];
export interface ListEntityOwnersOutput {
  owners: OwnerPropertiesOutput[];
  nextToken?: string;
}
export interface ListEnvironmentActionsInput {
  domainIdentifier: string;
  environmentIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface EnvironmentActionSummary {
  domainId: string;
  environmentId: string;
  id: string;
  name: string;
  parameters: ActionParameters;
  description?: string;
}
export type ListEnvironmentActionSummaries = EnvironmentActionSummary[];
export interface ListEnvironmentActionsOutput {
  items?: EnvironmentActionSummary[];
  nextToken?: string;
}
export interface ListEnvironmentBlueprintConfigurationsInput {
  domainIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
export interface EnvironmentBlueprintConfigurationItem {
  domainId: string;
  environmentBlueprintId: string;
  provisioningRoleArn?: string;
  environmentRolePermissionBoundary?: string;
  manageAccessRoleArn?: string;
  enabledRegions?: string[];
  regionalParameters?: { [key: string]: { [key: string]: string | undefined } | undefined };
  allowUserProvidedConfigurations?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  resourceConfigurations?: ResourceConfiguration[];
  provisioningConfigurations?: ProvisioningConfiguration[];
}
export type EnvironmentBlueprintConfigurations = EnvironmentBlueprintConfigurationItem[];
export interface ListEnvironmentBlueprintConfigurationsOutput {
  items?: EnvironmentBlueprintConfigurationItem[];
  nextToken?: string;
}
export interface ListEnvironmentBlueprintsInput {
  domainIdentifier: string;
  maxResults?: number;
  nextToken?: string;
  name?: string;
  managed?: boolean;
}
export interface EnvironmentBlueprintSummary {
  id: string;
  name: string;
  description?: string | redacted.Redacted<string>;
  provider: string;
  provisioningProperties: ProvisioningProperties;
  createdAt?: Date;
  updatedAt?: Date;
  blueprintCategory?: BlueprintCategory;
}
export type EnvironmentBlueprintSummaries = EnvironmentBlueprintSummary[];
export interface ListEnvironmentBlueprintsOutput {
  items: EnvironmentBlueprintSummary[];
  nextToken?: string;
}
export interface ListEnvironmentProfilesInput {
  domainIdentifier: string;
  awsAccountId?: string;
  awsAccountRegion?: string;
  environmentBlueprintIdentifier?: string;
  projectIdentifier?: string;
  name?: string | redacted.Redacted<string>;
  nextToken?: string;
  maxResults?: number;
}
export interface EnvironmentProfileSummary {
  id: string;
  domainId: string;
  awsAccountId?: string;
  awsAccountRegion?: string;
  createdBy: string;
  createdAt?: Date;
  updatedAt?: Date;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  environmentBlueprintId: string;
  projectId?: string;
}
export type EnvironmentProfileSummaries = EnvironmentProfileSummary[];
export interface ListEnvironmentProfilesOutput {
  items: EnvironmentProfileSummary[];
  nextToken?: string;
}
export interface ListEnvironmentsInput {
  domainIdentifier: string;
  awsAccountId?: string;
  status?: EnvironmentStatus;
  awsAccountRegion?: string;
  projectIdentifier: string;
  environmentProfileIdentifier?: string;
  environmentBlueprintIdentifier?: string;
  provider?: string;
  name?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface EnvironmentSummary {
  projectId: string;
  id?: string;
  domainId: string;
  createdBy: string;
  createdAt?: Date;
  updatedAt?: Date;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  environmentProfileId?: string;
  awsAccountId?: string;
  awsAccountRegion?: string;
  provider: string;
  status?: EnvironmentStatus;
  environmentConfigurationId?: string | redacted.Redacted<string>;
  environmentConfigurationName?: string | redacted.Redacted<string>;
}
export type EnvironmentSummaries = EnvironmentSummary[];
export interface ListEnvironmentsOutput {
  items: EnvironmentSummary[];
  nextToken?: string;
}
export interface ListJobRunsInput {
  domainIdentifier: string;
  jobIdentifier: string;
  status?: JobRunStatus;
  sortOrder?: SortOrder;
  nextToken?: string;
  maxResults?: number;
}
export interface JobRunSummary {
  domainId?: string;
  jobId?: string;
  jobType?: JobType;
  runId?: string;
  runMode?: JobRunMode;
  status?: JobRunStatus;
  error?: JobRunError;
  createdBy?: string;
  createdAt?: Date;
  startTime?: Date;
  endTime?: Date;
}
export type JobRunSummaries = JobRunSummary[];
export interface ListJobRunsOutput {
  items?: JobRunSummary[];
  nextToken?: string;
}
export interface ListLineageEventsInput {
  domainIdentifier: string;
  maxResults?: number;
  timestampAfter?: Date;
  timestampBefore?: Date;
  processingStatus?: LineageEventProcessingStatus;
  sortOrder?: SortOrder;
  nextToken?: string;
}
export type OpenLineageRunState =
  | "START"
  | "RUNNING"
  | "COMPLETE"
  | "ABORT"
  | "FAIL"
  | "OTHER"
  | (string & {});
export interface NameIdentifier {
  name?: string;
  namespace?: string;
}
export type NameIdentifiers = NameIdentifier[];
export interface OpenLineageRunEventSummary {
  eventType?: OpenLineageRunState;
  runId?: string;
  job?: NameIdentifier;
  inputs?: NameIdentifier[];
  outputs?: NameIdentifier[];
}
export type EventSummary = { openLineageRunEventSummary: OpenLineageRunEventSummary };
export interface LineageEventSummary {
  id?: string;
  domainId?: string;
  processingStatus?: LineageEventProcessingStatus;
  eventTime?: Date;
  eventSummary?: EventSummary;
  createdBy?: string;
  createdAt?: Date;
}
export type LineageEventSummaries = LineageEventSummary[];
export interface ListLineageEventsOutput {
  items?: LineageEventSummary[];
  nextToken?: string;
}
export type EdgeDirection = "UPSTREAM" | "DOWNSTREAM" | (string & {});
export interface ListLineageNodeHistoryInput {
  domainIdentifier: string;
  maxResults?: number;
  nextToken?: string;
  identifier: string;
  direction?: EdgeDirection;
  eventTimestampGTE?: Date;
  eventTimestampLTE?: Date;
  sortOrder?: SortOrder;
}
export interface LineageNodeSummary {
  domainId: string;
  name?: string;
  description?: string;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  id: string;
  typeName: string;
  typeRevision?: string;
  sourceIdentifier?: string;
  eventTimestamp?: Date;
}
export type LineageNodeSummaries = LineageNodeSummary[];
export interface ListLineageNodeHistoryOutput {
  nodes?: LineageNodeSummary[];
  nextToken?: string;
}
export interface ListMetadataGenerationRunsInput {
  domainIdentifier: string;
  status?: MetadataGenerationRunStatus;
  type?: MetadataGenerationRunType;
  nextToken?: string;
  maxResults?: number;
  targetIdentifier?: string;
}
export interface MetadataGenerationRunItem {
  domainId: string;
  id: string;
  target?: MetadataGenerationRunTarget;
  status?: MetadataGenerationRunStatus;
  type?: MetadataGenerationRunType;
  types?: MetadataGenerationRunType[];
  createdAt?: Date;
  createdBy?: string;
  owningProjectId: string;
}
export type MetadataGenerationRuns = MetadataGenerationRunItem[];
export interface ListMetadataGenerationRunsOutput {
  items?: MetadataGenerationRunItem[];
  nextToken?: string;
}
export interface ListNotebookRunsInput {
  domainIdentifier: string;
  owningProjectIdentifier: string;
  notebookIdentifier?: string;
  status?: NotebookRunStatus;
  scheduleIdentifier?: string;
  maxResults?: number;
  sortOrder?: SortOrder;
  nextToken?: string;
}
export interface NotebookRunSummary {
  id: string;
  domainId: string;
  owningProjectId: string;
  notebookId: string;
  scheduleId?: string;
  status: NotebookRunStatus;
  triggerSource?: TriggerSource;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  startedAt?: Date;
  completedAt?: Date;
}
export type NotebookRunSummaryList = NotebookRunSummary[];
export interface ListNotebookRunsOutput {
  items?: NotebookRunSummary[];
  nextToken?: string;
}
export type SortKey = "CREATED_AT" | "UPDATED_AT" | (string & {});
export interface ListNotebooksInput {
  domainIdentifier: string;
  owningProjectIdentifier: string;
  maxResults?: number;
  sortOrder?: SortOrder;
  sortBy?: SortKey;
  status?: NotebookStatus;
  type?: NotebookType;
  nextToken?: string;
}
export interface NotebookSummary {
  id: string;
  name: string | redacted.Redacted<string>;
  owningProjectId: string;
  domainId: string;
  status: NotebookStatus;
  type?: NotebookType;
  description?: string | redacted.Redacted<string>;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
}
export type NotebookSummaryList = NotebookSummary[];
export interface ListNotebooksOutput {
  items?: NotebookSummary[];
  nextToken?: string;
}
export type NotificationType = "TASK" | "EVENT" | (string & {});
export type NotificationSubjects = string[];
export type TaskStatus = "ACTIVE" | "INACTIVE" | (string & {});
export interface ListNotificationsInput {
  domainIdentifier: string;
  type: NotificationType;
  afterTimestamp?: Date;
  beforeTimestamp?: Date;
  subjects?: string[];
  taskStatus?: TaskStatus;
  maxResults?: number;
  nextToken?: string;
}
export type TaskId = string;
export type NotificationResourceType = "PROJECT" | (string & {});
export interface NotificationResource {
  type: NotificationResourceType;
  id: string;
  name?: string;
}
export type NotificationRole =
  | "PROJECT_OWNER"
  | "PROJECT_CONTRIBUTOR"
  | "PROJECT_VIEWER"
  | "DOMAIN_OWNER"
  | "PROJECT_SUBSCRIBER"
  | (string & {});
export interface Topic {
  subject: string;
  resource: NotificationResource;
  role: NotificationRole;
}
export type Title = string | redacted.Redacted<string>;
export type Message = string | redacted.Redacted<string>;
export type ActionLink = string | redacted.Redacted<string>;
export type MetadataMap = { [key: string]: string | undefined };
export interface NotificationOutput {
  identifier: string;
  domainIdentifier: string;
  type: NotificationType;
  topic: Topic;
  title: string | redacted.Redacted<string>;
  message: string | redacted.Redacted<string>;
  status?: TaskStatus;
  actionLink: string | redacted.Redacted<string>;
  creationTimestamp: Date;
  lastUpdatedTimestamp: Date;
  metadata?: { [key: string]: string | undefined };
}
export type NotificationsList = NotificationOutput[];
export interface ListNotificationsOutput {
  notifications?: NotificationOutput[];
  nextToken?: string;
}
export interface ListPolicyGrantsInput {
  domainIdentifier: string;
  entityType: TargetEntityType;
  entityIdentifier: string;
  policyType: ManagedPolicyType;
  maxResults?: number;
  nextToken?: string;
}
export interface PolicyGrantMember {
  principal?: PolicyGrantPrincipal;
  detail?: PolicyGrantDetail;
  createdAt?: Date;
  createdBy?: string;
  grantId?: string;
}
export type PolicyGrantList = PolicyGrantMember[];
export interface ListPolicyGrantsOutput {
  grantList: PolicyGrantMember[];
  nextToken?: string;
}
export type SortFieldProject = "NAME" | (string & {});
export interface ListProjectMembershipsInput {
  domainIdentifier: string;
  projectIdentifier: string;
  sortBy?: SortFieldProject;
  sortOrder?: SortOrder;
  nextToken?: string;
  maxResults?: number;
}
export interface UserDetails {
  userId: string;
}
export interface GroupDetails {
  groupId: string;
}
export type MemberDetails =
  | { user: UserDetails; group?: never }
  | { user?: never; group: GroupDetails };
export interface ProjectMember {
  memberDetails: MemberDetails;
  designation: UserDesignation;
}
export type ProjectMembers = ProjectMember[];
export interface ListProjectMembershipsOutput {
  members: ProjectMember[];
  nextToken?: string;
}
export interface ListProjectProfilesInput {
  domainIdentifier: string;
  name?: string | redacted.Redacted<string>;
  sortBy?: SortFieldProject;
  sortOrder?: SortOrder;
  nextToken?: string;
  maxResults?: number;
}
export interface ProjectProfileSummary {
  domainId: string;
  id: string;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  status?: Status;
  createdBy: string;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  domainUnitId?: string;
}
export type ProjectProfileSummaries = ProjectProfileSummary[];
export interface ListProjectProfilesOutput {
  items?: ProjectProfileSummary[];
  nextToken?: string;
}
export interface ListProjectsInput {
  domainIdentifier: string;
  userIdentifier?: string;
  groupIdentifier?: string;
  name?: string | redacted.Redacted<string>;
  projectCategory?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ProjectSummary {
  domainId: string;
  id: string;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  projectStatus?: ProjectStatus;
  failureReasons?: ProjectDeletionError[];
  createdBy: string;
  createdAt?: Date;
  updatedAt?: Date;
  domainUnitId?: string;
  projectCategory?: string;
}
export type ProjectSummaries = ProjectSummary[];
export interface ListProjectsOutput {
  items?: ProjectSummary[];
  nextToken?: string;
}
export type ProjectIds = string[];
export type AssetTypeIdentifiers = string[];
export interface ListRulesInput {
  domainIdentifier: string;
  targetType: RuleTargetType;
  targetIdentifier: string;
  ruleType?: RuleType;
  action?: RuleAction;
  projectIds?: string[];
  assetTypes?: string[];
  dataProduct?: boolean;
  includeCascaded?: boolean;
  maxResults?: number;
  nextToken?: string;
}
export interface RuleSummary {
  identifier?: string;
  revision?: string;
  ruleType?: RuleType;
  name?: string | redacted.Redacted<string>;
  targetType?: RuleTargetType;
  target?: RuleTarget;
  action?: RuleAction;
  scope?: RuleScope;
  updatedAt?: Date;
  lastUpdatedBy?: string;
}
export type RuleSummaries = RuleSummary[];
export interface ListRulesOutput {
  items: RuleSummary[];
  nextToken?: string;
}
export interface ListSubscriptionGrantsInput {
  domainIdentifier: string;
  environmentId?: string;
  subscriptionTargetId?: string;
  subscribedListingId?: string;
  subscriptionId?: string;
  owningProjectId?: string;
  owningIamPrincipalArn?: string;
  owningUserId?: string;
  owningGroupId?: string;
  sortBy?: SortKey;
  sortOrder?: SortOrder;
  maxResults?: number;
  nextToken?: string;
}
export interface SubscriptionGrantSummary {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  createdAt: Date;
  updatedAt: Date;
  environmentId?: string;
  subscriptionTargetId: string;
  grantedEntity: GrantedEntity;
  status: SubscriptionGrantOverallStatus;
  assets?: SubscribedAsset[];
  subscriptionId?: string;
}
export type SubscriptionGrants = SubscriptionGrantSummary[];
export interface ListSubscriptionGrantsOutput {
  items: SubscriptionGrantSummary[];
  nextToken?: string;
}
export interface ListSubscriptionRequestsInput {
  domainIdentifier: string;
  status?: SubscriptionRequestStatus;
  subscribedListingId?: string;
  owningProjectId?: string;
  owningIamPrincipalArn?: string;
  approverProjectId?: string;
  owningUserId?: string;
  owningGroupId?: string;
  sortBy?: SortKey;
  sortOrder?: SortOrder;
  maxResults?: number;
  nextToken?: string;
}
export interface MetadataFormSummary {
  formName?: string;
  typeName: string | redacted.Redacted<string>;
  typeRevision: string;
}
export type MetadataFormsSummary = MetadataFormSummary[];
export interface SubscriptionRequestSummary {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  status: SubscriptionRequestStatus;
  createdAt: Date;
  updatedAt: Date;
  requestReason: string | redacted.Redacted<string>;
  subscribedPrincipals: SubscribedPrincipal[];
  subscribedListings: SubscribedListing[];
  reviewerId?: string;
  decisionComment?: string | redacted.Redacted<string>;
  existingSubscriptionId?: string;
  metadataFormsSummary?: MetadataFormSummary[];
}
export type SubscriptionRequests = SubscriptionRequestSummary[];
export interface ListSubscriptionRequestsOutput {
  items: SubscriptionRequestSummary[];
  nextToken?: string;
}
export interface ListSubscriptionsInput {
  domainIdentifier: string;
  subscriptionRequestIdentifier?: string;
  status?: SubscriptionStatus;
  subscribedListingId?: string;
  owningProjectId?: string;
  owningIamPrincipalArn?: string;
  owningUserId?: string;
  owningGroupId?: string;
  approverProjectId?: string;
  sortBy?: SortKey;
  sortOrder?: SortOrder;
  maxResults?: number;
  nextToken?: string;
}
export interface SubscriptionSummary {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  status: SubscriptionStatus;
  createdAt: Date;
  updatedAt: Date;
  subscribedPrincipal: SubscribedPrincipal;
  subscribedListing: SubscribedListing;
  subscriptionRequestId?: string;
  retainPermissions?: boolean;
}
export type Subscriptions = SubscriptionSummary[];
export interface ListSubscriptionsOutput {
  items: SubscriptionSummary[];
  nextToken?: string;
}
export interface ListSubscriptionTargetsInput {
  domainIdentifier: string;
  environmentIdentifier: string;
  sortBy?: SortKey;
  sortOrder?: SortOrder;
  maxResults?: number;
  nextToken?: string;
}
export interface SubscriptionTargetSummary {
  id: string;
  authorizedPrincipals: string[];
  domainId: string;
  projectId: string;
  environmentId: string;
  name: string | redacted.Redacted<string>;
  type: string;
  createdBy: string;
  updatedBy?: string;
  createdAt: Date;
  updatedAt?: Date;
  manageAccessRole?: string;
  applicableAssetTypes: string[];
  subscriptionTargetConfig: SubscriptionTargetForm[];
  provider: string;
  subscriptionGrantCreationMode?: SubscriptionGrantCreationMode;
}
export type SubscriptionTargets = SubscriptionTargetSummary[];
export interface ListSubscriptionTargetsOutput {
  items: SubscriptionTargetSummary[];
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export interface ListTimeSeriesDataPointsInput {
  domainIdentifier: string;
  entityIdentifier: string;
  entityType: TimeSeriesEntityType;
  formName: string;
  startedAt?: Date;
  endedAt?: Date;
  nextToken?: string;
  maxResults?: number;
}
export interface ListTimeSeriesDataPointsOutput {
  items?: TimeSeriesDataPointSummaryFormOutput[];
  nextToken?: string;
}
export interface PostLineageEventInput {
  domainIdentifier: string;
  event: T.StreamingInputBody;
  clientToken?: string;
}
export interface PostLineageEventOutput {
  id?: string;
  domainId?: string;
}
export interface TimeSeriesDataPointFormInput {
  formName: string;
  typeIdentifier: string;
  typeRevision?: string;
  timestamp: Date;
  content?: string;
}
export type TimeSeriesDataPointFormInputList = TimeSeriesDataPointFormInput[];
export interface PostTimeSeriesDataPointsInput {
  domainIdentifier: string;
  entityIdentifier: string;
  entityType: TimeSeriesEntityType;
  forms: TimeSeriesDataPointFormInput[];
  clientToken?: string;
}
export type TimeSeriesDataPointFormOutputList = TimeSeriesDataPointFormOutput[];
export interface PostTimeSeriesDataPointsOutput {
  domainId?: string;
  entityId?: string;
  entityType?: TimeSeriesEntityType;
  forms?: TimeSeriesDataPointFormOutput[];
}
export interface PutDataExportConfigurationInput {
  domainIdentifier: string;
  enableExport: boolean;
  encryptionConfiguration?: EncryptionConfiguration;
  clientToken?: string;
}
export interface PutDataExportConfigurationOutput {}
export interface PutResourceConfiguration {
  name: string;
  description?: string;
  region: string;
  parameters: { [key: string]: string | undefined };
}
export type PutResourceConfigurations = PutResourceConfiguration[];
export type GlobalParameterMap = { [key: string]: string | undefined };
export interface PutEnvironmentBlueprintConfigurationInput {
  domainIdentifier: string;
  environmentBlueprintIdentifier: string;
  provisioningRoleArn?: string;
  manageAccessRoleArn?: string;
  environmentRolePermissionBoundary?: string;
  enabledRegions: string[];
  regionalParameters?: { [key: string]: { [key: string]: string | undefined } | undefined };
  resourceConfigurations?: PutResourceConfiguration[];
  allowUserProvidedConfigurations?: boolean;
  globalParameters?: { [key: string]: string | undefined };
  provisioningConfigurations?: ProvisioningConfiguration[];
}
export interface PutEnvironmentBlueprintConfigurationOutput {
  domainId: string;
  environmentBlueprintId: string;
  provisioningRoleArn?: string;
  environmentRolePermissionBoundary?: string;
  manageAccessRoleArn?: string;
  enabledRegions?: string[];
  regionalParameters?: { [key: string]: { [key: string]: string | undefined } | undefined };
  allowUserProvidedConfigurations?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  resourceConfigurations?: ResourceConfiguration[];
  provisioningConfigurations?: ProvisioningConfiguration[];
}
export type RelationType = "LINEAGE" | (string & {});
export type RelationDirection = "IN" | "OUT" | (string & {});
export interface RelationPattern {
  relationType: RelationType;
  relationDirection: RelationDirection;
  maxPathLength?: number;
}
export type GraphEntityType = "LINEAGE_NODE" | (string & {});
export type Attribute = string;
export type FilterOperator = "EQ" | "LE" | "LT" | "GE" | "GT" | "TEXT_SEARCH" | (string & {});
export interface Filter {
  attribute: string;
  value?: string;
  intValue?: number;
  operator?: FilterOperator;
}
export type FilterList = FilterClause[];
export type FilterClause =
  | { filter: Filter; and?: never; or?: never }
  | { filter?: never; and: FilterClause[]; or?: never }
  | { filter?: never; and?: never; or: FilterClause[] };
export interface EntityPattern {
  entityType: GraphEntityType;
  identifier: string;
  filters?: FilterClause;
}
export type MatchClause =
  | { relationPattern: RelationPattern; entityPattern?: never }
  | { relationPattern?: never; entityPattern: EntityPattern };
export type MatchClauses = MatchClause[];
export type FormNameList = string[];
export interface AdditionalAttributes {
  formNames?: string[];
}
export interface QueryGraphInput {
  domainIdentifier: string;
  match: MatchClause[];
  maxResults?: number;
  nextToken?: string;
  additionalAttributes?: AdditionalAttributes;
}
export type LineageNodeIds = string[];
export interface LineageNodeItem {
  domainId: string;
  name?: string;
  description?: string;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  id: string;
  typeName: string;
  typeRevision?: string;
  sourceIdentifier?: string;
  eventTimestamp?: Date;
  formsOutput?: FormOutput[];
  upstreamLineageNodeIds?: string[];
  downstreamLineageNodeIds?: string[];
}
export type ResultItem = { lineageNode: LineageNodeItem };
export type ResultItemList = ResultItem[];
export interface QueryGraphOutput {
  items?: ResultItem[];
  nextToken?: string;
}
export type RejectRuleBehavior = "ALL" | "NONE" | (string & {});
export interface RejectRule {
  rule?: RejectRuleBehavior;
  threshold?: number;
}
export type PredictionChoices = number[];
export interface RejectChoice {
  predictionTarget?: string;
  predictionChoices?: number[];
}
export type RejectChoices = RejectChoice[];
export interface RejectPredictionsInput {
  domainIdentifier: string;
  identifier: string;
  revision?: string;
  rejectRule?: RejectRule;
  rejectChoices?: RejectChoice[];
  clientToken?: string;
}
export interface RejectPredictionsOutput {
  domainId: string;
  assetId: string;
  assetRevision: string;
}
export interface RejectSubscriptionRequestInput {
  domainIdentifier: string;
  identifier: string;
  decisionComment?: string | redacted.Redacted<string>;
}
export interface RejectSubscriptionRequestOutput {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  status: SubscriptionRequestStatus;
  createdAt: Date;
  updatedAt: Date;
  requestReason: string | redacted.Redacted<string>;
  subscribedPrincipals: SubscribedPrincipal[];
  subscribedListings: SubscribedListing[];
  reviewerId?: string;
  decisionComment?: string | redacted.Redacted<string>;
  existingSubscriptionId?: string;
  metadataForms?: FormOutput[];
}
export interface RemoveEntityOwnerInput {
  domainIdentifier: string;
  entityType: DataZoneEntityType;
  entityIdentifier: string;
  owner: OwnerProperties;
  clientToken?: string;
}
export interface RemoveEntityOwnerOutput {}
export interface RemovePolicyGrantInput {
  domainIdentifier: string;
  entityType: TargetEntityType;
  entityIdentifier: string;
  policyType: ManagedPolicyType;
  principal: PolicyGrantPrincipal;
  grantIdentifier?: string;
  clientToken?: string;
}
export interface RemovePolicyGrantOutput {}
export interface RevokeSubscriptionInput {
  domainIdentifier: string;
  identifier: string;
  retainPermissions?: boolean;
}
export interface RevokeSubscriptionOutput {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  status: SubscriptionStatus;
  createdAt: Date;
  updatedAt: Date;
  subscribedPrincipal: SubscribedPrincipal;
  subscribedListing: SubscribedListing;
  subscriptionRequestId?: string;
  retainPermissions?: boolean;
}
export type InventorySearchScope =
  | "ASSET"
  | "GLOSSARY"
  | "GLOSSARY_TERM"
  | "DATA_PRODUCT"
  | (string & {});
export type SearchText = string;
export interface SearchInItem {
  attribute: string;
}
export type SearchInList = SearchInItem[];
export interface SearchSort {
  attribute: string;
  order?: SortOrder;
}
export type SearchOutputAdditionalAttribute =
  | "FORMS"
  | "TIME_SERIES_DATA_POINT_FORMS"
  | "TEXT_MATCH_RATIONALE"
  | (string & {});
export type SearchOutputAdditionalAttributes = SearchOutputAdditionalAttribute[];
export interface SearchInput {
  domainIdentifier: string;
  owningProjectIdentifier?: string;
  maxResults?: number;
  nextToken?: string;
  searchScope: InventorySearchScope;
  searchText?: string;
  searchIn?: SearchInItem[];
  filters?: FilterClause;
  sort?: SearchSort;
  additionalAttributes?: SearchOutputAdditionalAttribute[];
}
export interface MatchOffset {
  startOffset?: number;
  endOffset?: number;
}
export type MatchOffsets = MatchOffset[];
export interface TextMatchItem {
  attribute?: string;
  text?: string;
  matchOffsets?: MatchOffset[];
}
export type TextMatches = TextMatchItem[];
export type MatchRationaleItem = { textMatches: TextMatchItem[] };
export type MatchRationale = MatchRationaleItem[];
export interface GlossaryItemAdditionalAttributes {
  matchRationale?: MatchRationaleItem[];
}
export interface GlossaryItem {
  domainId: string;
  id: string;
  name: string | redacted.Redacted<string>;
  owningProjectId: string;
  description?: string | redacted.Redacted<string>;
  status: GlossaryStatus;
  usageRestrictions?: GlossaryUsageRestriction[];
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  additionalAttributes?: GlossaryItemAdditionalAttributes;
}
export interface GlossaryTermItemAdditionalAttributes {
  matchRationale?: MatchRationaleItem[];
}
export interface GlossaryTermItem {
  domainId: string;
  glossaryId: string;
  id: string;
  name: string | redacted.Redacted<string>;
  shortDescription?: string | redacted.Redacted<string>;
  usageRestrictions?: GlossaryUsageRestriction[];
  longDescription?: string | redacted.Redacted<string>;
  termRelations?: TermRelations;
  status: GlossaryTermStatus;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  additionalAttributes?: GlossaryTermItemAdditionalAttributes;
}
export interface AssetItemAdditionalAttributes {
  formsOutput?: FormOutput[];
  readOnlyFormsOutput?: FormOutput[];
  latestTimeSeriesDataPointFormsOutput?: TimeSeriesDataPointSummaryFormOutput[];
  matchRationale?: MatchRationaleItem[];
}
export interface AssetItem {
  domainId: string;
  identifier: string;
  name: string | redacted.Redacted<string>;
  typeIdentifier: string;
  typeRevision: string;
  externalIdentifier?: string;
  description?: string | redacted.Redacted<string>;
  createdAt?: Date;
  createdBy?: string;
  firstRevisionCreatedAt?: Date;
  firstRevisionCreatedBy?: string;
  glossaryTerms?: string[];
  owningProjectId: string;
  additionalAttributes?: AssetItemAdditionalAttributes;
  governedGlossaryTerms?: string[];
}
export interface DataProductItemAdditionalAttributes {
  matchRationale?: MatchRationaleItem[];
}
export interface DataProductResultItem {
  domainId: string;
  id: string;
  name: string | redacted.Redacted<string>;
  owningProjectId: string;
  description?: string | redacted.Redacted<string>;
  glossaryTerms?: string[];
  createdAt?: Date;
  createdBy?: string;
  firstRevisionCreatedAt?: Date;
  firstRevisionCreatedBy?: string;
  additionalAttributes?: DataProductItemAdditionalAttributes;
}
export type SearchInventoryResultItem =
  | {
      glossaryItem: GlossaryItem;
      glossaryTermItem?: never;
      assetItem?: never;
      dataProductItem?: never;
    }
  | {
      glossaryItem?: never;
      glossaryTermItem: GlossaryTermItem;
      assetItem?: never;
      dataProductItem?: never;
    }
  | {
      glossaryItem?: never;
      glossaryTermItem?: never;
      assetItem: AssetItem;
      dataProductItem?: never;
    }
  | {
      glossaryItem?: never;
      glossaryTermItem?: never;
      assetItem?: never;
      dataProductItem: DataProductResultItem;
    };
export type SearchInventoryResultItems = SearchInventoryResultItem[];
export interface SearchOutput {
  items?: SearchInventoryResultItem[];
  nextToken?: string;
  totalMatchCount?: number;
}
export type GroupSearchType =
  | "SSO_GROUP"
  | "DATAZONE_SSO_GROUP"
  | "IAM_ROLE_SESSION_GROUP"
  | (string & {});
export type GroupSearchText = string | redacted.Redacted<string>;
export interface SearchGroupProfilesInput {
  domainIdentifier: string;
  groupType: GroupSearchType;
  searchText?: string | redacted.Redacted<string>;
  maxResults?: number;
  nextToken?: string;
}
export interface GroupProfileSummary {
  domainId?: string;
  id?: string;
  status?: GroupProfileStatus;
  groupName?: string | redacted.Redacted<string>;
  rolePrincipalArn?: string;
  rolePrincipalId?: string;
}
export type GroupProfileSummaries = GroupProfileSummary[];
export interface SearchGroupProfilesOutput {
  items?: GroupProfileSummary[];
  nextToken?: string;
}
export type AggregationDisplayValue = string;
export interface AggregationListItem {
  attribute: string;
  displayValue?: string;
}
export type AggregationList = AggregationListItem[];
export interface SearchListingsInput {
  domainIdentifier: string;
  searchText?: string;
  searchIn?: SearchInItem[];
  maxResults?: number;
  nextToken?: string;
  filters?: FilterClause;
  aggregations?: AggregationListItem[];
  sort?: SearchSort;
  additionalAttributes?: SearchOutputAdditionalAttribute[];
}
export interface AssetListingItemAdditionalAttributes {
  forms?: string;
  matchRationale?: MatchRationaleItem[];
  latestTimeSeriesDataPointForms?: TimeSeriesDataPointSummaryFormOutput[];
}
export interface AssetListingItem {
  listingId?: string;
  listingRevision?: string;
  name?: string | redacted.Redacted<string>;
  entityId?: string;
  entityRevision?: string;
  entityType?: string;
  description?: string | redacted.Redacted<string>;
  createdAt?: Date;
  listingCreatedBy?: string;
  listingUpdatedBy?: string;
  glossaryTerms?: DetailedGlossaryTerm[];
  governedGlossaryTerms?: DetailedGlossaryTerm[];
  owningProjectId?: string;
  additionalAttributes?: AssetListingItemAdditionalAttributes;
}
export interface DataProductListingItemAdditionalAttributes {
  forms?: string;
  matchRationale?: MatchRationaleItem[];
}
export interface ListingSummaryItem {
  listingId?: string;
  listingRevision?: string;
  glossaryTerms?: DetailedGlossaryTerm[];
}
export type ListingSummaryItems = ListingSummaryItem[];
export interface DataProductListingItem {
  listingId?: string;
  listingRevision?: string;
  name?: string | redacted.Redacted<string>;
  entityId?: string;
  entityRevision?: string;
  description?: string | redacted.Redacted<string>;
  createdAt?: Date;
  listingCreatedBy?: string;
  listingUpdatedBy?: string;
  glossaryTerms?: DetailedGlossaryTerm[];
  owningProjectId?: string;
  additionalAttributes?: DataProductListingItemAdditionalAttributes;
  items?: ListingSummaryItem[];
}
export type SearchResultItem =
  | { assetListing: AssetListingItem; dataProductListing?: never }
  | { assetListing?: never; dataProductListing: DataProductListingItem };
export type SearchResultItems = SearchResultItem[];
export type AggregationAttributeValue = string;
export type AggregationAttributeDisplayValue = string;
export interface AggregationOutputItem {
  value?: string;
  count?: number;
  displayValue?: string;
}
export type AggregationOutputItems = AggregationOutputItem[];
export interface AggregationOutput {
  attribute?: string;
  displayValue?: string;
  items?: AggregationOutputItem[];
}
export type AggregationOutputList = AggregationOutput[];
export interface SearchListingsOutput {
  items?: SearchResultItem[];
  nextToken?: string;
  totalMatchCount?: number;
  aggregates?: AggregationOutput[];
}
export type TypesSearchScope = "ASSET_TYPE" | "FORM_TYPE" | "LINEAGE_NODE_TYPE" | (string & {});
export interface SearchTypesInput {
  domainIdentifier: string;
  maxResults?: number;
  nextToken?: string;
  searchScope: TypesSearchScope;
  searchText?: string;
  searchIn?: SearchInItem[];
  filters?: FilterClause;
  sort?: SearchSort;
  managed: boolean;
}
export interface AssetTypeItem {
  domainId: string;
  name: string;
  revision: string;
  description?: string | redacted.Redacted<string>;
  formsOutput: { [key: string]: FormEntryOutput | undefined };
  owningProjectId: string;
  originDomainId?: string;
  originProjectId?: string;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
}
export interface FormTypeData {
  domainId: string;
  name: string | redacted.Redacted<string>;
  revision: string;
  model?: Model;
  status?: FormTypeStatus;
  owningProjectId?: string;
  originDomainId?: string;
  originProjectId?: string;
  createdAt?: Date;
  createdBy?: string;
  description?: string | redacted.Redacted<string>;
  imports?: Import[];
}
export interface LineageNodeTypeItem {
  domainId: string;
  name?: string;
  description?: string;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  revision: string;
  formsOutput: { [key: string]: FormEntryOutput | undefined };
}
export type SearchTypesResultItem =
  | { assetTypeItem: AssetTypeItem; formTypeItem?: never; lineageNodeTypeItem?: never }
  | { assetTypeItem?: never; formTypeItem: FormTypeData; lineageNodeTypeItem?: never }
  | { assetTypeItem?: never; formTypeItem?: never; lineageNodeTypeItem: LineageNodeTypeItem };
export type SearchTypesResultItems = SearchTypesResultItem[];
export interface SearchTypesOutput {
  items?: SearchTypesResultItem[];
  nextToken?: string;
  totalMatchCount?: number;
}
export type UserSearchType =
  | "SSO_USER"
  | "DATAZONE_USER"
  | "DATAZONE_SSO_USER"
  | "DATAZONE_IAM_USER"
  | (string & {});
export type UserSearchText = string | redacted.Redacted<string>;
export interface SearchUserProfilesInput {
  domainIdentifier: string;
  userType: UserSearchType;
  searchText?: string | redacted.Redacted<string>;
  maxResults?: number;
  nextToken?: string;
}
export interface UserProfileSummary {
  domainId?: string;
  id?: string;
  type?: UserProfileType;
  status?: UserProfileStatus;
  details?: UserProfileDetails;
}
export type UserProfileSummaries = UserProfileSummary[];
export interface SearchUserProfilesOutput {
  items?: UserProfileSummary[];
  nextToken?: string;
}
export interface StartDataSourceRunInput {
  domainIdentifier: string;
  dataSourceIdentifier: string;
  clientToken?: string;
}
export interface StartDataSourceRunOutput {
  domainId: string;
  dataSourceId: string;
  id: string;
  projectId: string;
  status: DataSourceRunStatus;
  type: DataSourceRunType;
  dataSourceConfigurationSnapshot?: string;
  runStatisticsForAssets?: RunStatisticsForAssets;
  errorMessage?: DataSourceErrorMessage;
  createdAt: Date;
  updatedAt: Date;
  startedAt?: Date;
  stoppedAt?: Date;
}
export interface StartMetadataGenerationRunInput {
  domainIdentifier: string;
  type?: MetadataGenerationRunType;
  types?: MetadataGenerationRunType[];
  target: MetadataGenerationRunTarget;
  clientToken?: string;
  owningProjectIdentifier: string;
}
export interface StartMetadataGenerationRunOutput {
  domainId: string;
  id: string;
  status?: MetadataGenerationRunStatus;
  type?: MetadataGenerationRunType;
  types?: MetadataGenerationRunType[];
  createdAt?: Date;
  createdBy?: string;
  owningProjectId?: string;
}
export interface StartNotebookExportInput {
  domainIdentifier: string;
  notebookIdentifier: string;
  owningProjectIdentifier: string;
  fileFormat: FileFormat;
  clientToken?: string;
}
export interface StartNotebookExportOutput {
  id: string;
  domainId: string;
  owningProjectId: string;
  notebookId: string;
  fileFormat: FileFormat;
  status: NotebookExportStatus;
  createdAt?: Date;
  createdBy?: string;
}
export type S3SourceLocation = string | redacted.Redacted<string>;
export type SourceLocation = { s3: string | redacted.Redacted<string> };
export interface StartNotebookImportInput {
  domainIdentifier: string;
  owningProjectIdentifier: string;
  sourceLocation: SourceLocation;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  clientToken?: string;
}
export interface StartNotebookImportOutput {
  notebookId?: string;
  status?: NotebookStatus;
  domainId?: string;
  owningProjectId?: string;
  name?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  sourceLocation?: SourceLocation;
  createdAt?: Date;
  createdBy?: string;
}
export interface StartNotebookRunInput {
  domainIdentifier: string;
  owningProjectIdentifier: string;
  notebookIdentifier: string;
  scheduleIdentifier?: string;
  computeConfiguration?: ComputeConfig;
  networkConfiguration?: NetworkConfig;
  timeoutConfiguration?: TimeoutConfig;
  notificationConfiguration?: NotificationConfig;
  triggerSource?: TriggerSource;
  metadata?: { [key: string]: string | redacted.Redacted<string> | undefined };
  parameters?: { [key: string]: string | undefined };
  clientToken?: string;
}
export interface StartNotebookRunOutput {
  id: string;
  domainId: string;
  owningProjectId: string;
  notebookId: string;
  scheduleId?: string;
  status: NotebookRunStatus;
  cellOrder?: CellInformation[];
  metadata?: { [key: string]: string | redacted.Redacted<string> | undefined };
  parameters?: { [key: string]: string | undefined };
  computeConfiguration?: ComputeConfig;
  networkConfiguration?: NetworkConfig;
  timeoutConfiguration?: TimeoutConfig;
  environmentConfiguration?: EnvironmentConfig;
  storageConfiguration?: StorageConfig;
  notificationConfiguration?: NotificationConfig;
  triggerSource?: TriggerSource;
  error?: NotebookRunError;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  startedAt?: Date;
  completedAt?: Date;
}
export interface StartNotebookSyncInput {
  domainIdentifier: string;
  owningProjectIdentifier: string;
  sourceLocation: SourceLocation;
  gitMetadata?: GitMetadata;
  notebookId?: string;
  name?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  clientToken?: string;
}
export interface StartNotebookSyncOutput {
  notebookId?: string;
  status?: NotebookStatus;
  domainId?: string;
  owningProjectId?: string;
  sourceLocation?: SourceLocation;
  gitMetadata?: GitMetadata;
  name?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  createdAt?: Date;
  createdBy?: string;
}
export interface StopNotebookRunInput {
  domainIdentifier: string;
  identifier: string;
  clientToken?: string;
}
export interface StopNotebookRunOutput {
  id: string;
  domainId: string;
  owningProjectId: string;
  status: NotebookRunStatus;
}
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateAccountPoolInput {
  domainIdentifier: string;
  identifier: string;
  name?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  resolutionStrategy?: ResolutionStrategy;
  accountSource?: AccountSource;
}
export interface UpdateAccountPoolOutput {
  domainId?: string;
  name?: string | redacted.Redacted<string>;
  id?: string;
  description?: string | redacted.Redacted<string>;
  resolutionStrategy?: ResolutionStrategy;
  accountSource: AccountSource;
  createdBy: string;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  updatedBy?: string;
  domainUnitId?: string;
}
export interface UpdateAssetFilterInput {
  domainIdentifier: string;
  assetIdentifier: string;
  identifier: string;
  name?: string;
  description?: string | redacted.Redacted<string>;
  configuration?: AssetFilterConfiguration;
}
export interface UpdateAssetFilterOutput {
  id: string;
  domainId: string;
  assetId: string;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  status?: FilterStatus;
  configuration: AssetFilterConfiguration;
  createdAt?: Date;
  errorMessage?: string;
  effectiveColumnNames?: string[];
  effectiveRowFilter?: string;
}
export interface AthenaPropertiesPatch {
  workgroupName?: string;
}
export interface AuthenticationConfigurationPatch {
  secretArn?: string;
  basicAuthenticationCredentials?: BasicAuthenticationCredentials;
}
export interface GlueConnectionPatch {
  description?: string;
  connectionProperties?: { [key: string]: string | undefined };
  authenticationConfiguration?: AuthenticationConfigurationPatch;
}
export interface GluePropertiesPatch {
  glueConnectionInput?: GlueConnectionPatch;
}
export interface IamPropertiesPatch {
  glueLineageSyncEnabled?: boolean;
}
export interface RedshiftPropertiesPatch {
  storage?: RedshiftStorageProperties;
  databaseName?: string;
  host?: string;
  port?: number;
  credentials?: RedshiftCredentials;
  lineageSync?: RedshiftLineageSyncConfigurationInput;
}
export interface SparkEmrPropertiesPatch {
  computeArn?: string;
  instanceProfileArn?: string;
  javaVirtualEnv?: string;
  logUri?: string;
  pythonVirtualEnv?: string;
  runtimeRole?: string;
  trustedCertificatesS3Uri?: string;
  managedEndpointArn?: string;
}
export interface S3PropertiesPatch {
  s3Uri: string;
  s3AccessGrantLocationId?: string;
  registerS3AccessGrantLocation?: boolean;
}
export interface ConnectivityPropertiesPatch {
  description?: string;
  connectionProperties?: { [key: string]: string | undefined };
  authenticationConfiguration?: AuthenticationConfigurationPatch;
}
export interface SnowflakePropertiesPatch {
  connectivityPropertiesPatch?: ConnectivityPropertiesPatch;
  snowflakeRole?: string;
  lineageSync?: LineageSyncInput;
}
export interface AmazonQPropertiesPatch {
  isEnabled: boolean;
  profileArn?: string;
  authMode?: string;
}
export interface MlflowPropertiesPatch {
  trackingServerArn?: string;
}
export interface LakehousePropertiesPatch {
  glueLineageSyncEnabled?: boolean;
}
export interface VpcPropertiesPatch {
  vpcId?: string;
  subnetIds?: string[];
  securityGroupId?: string;
}
export interface GitPropertiesPatch {
  codeConnectionArn?: string;
  defaultBranch?: string;
}
export type ConnectionPropertiesPatch =
  | {
      athenaProperties: AthenaPropertiesPatch;
      glueProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties: GluePropertiesPatch;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      iamProperties: IamPropertiesPatch;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      iamProperties?: never;
      redshiftProperties: RedshiftPropertiesPatch;
      sparkEmrProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties: SparkEmrPropertiesPatch;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      s3Properties: S3PropertiesPatch;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      s3Properties?: never;
      snowflakeProperties: SnowflakePropertiesPatch;
      amazonQProperties?: never;
      mlflowProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties: AmazonQPropertiesPatch;
      mlflowProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties: MlflowPropertiesPatch;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      lakehouseProperties: LakehousePropertiesPatch;
      vpcProperties?: never;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      lakehouseProperties?: never;
      vpcProperties: VpcPropertiesPatch;
      gitProperties?: never;
    }
  | {
      athenaProperties?: never;
      glueProperties?: never;
      iamProperties?: never;
      redshiftProperties?: never;
      sparkEmrProperties?: never;
      s3Properties?: never;
      snowflakeProperties?: never;
      amazonQProperties?: never;
      mlflowProperties?: never;
      lakehouseProperties?: never;
      vpcProperties?: never;
      gitProperties: GitPropertiesPatch;
    };
export interface UpdateConnectionInput {
  configurations?: Configuration[];
  domainIdentifier: string;
  identifier: string;
  description?: string | redacted.Redacted<string>;
  awsLocation?: AwsLocation;
  props?: ConnectionPropertiesPatch;
}
export interface UpdateConnectionOutput {
  configurations?: Configuration[];
  connectionId: string;
  description?: string | redacted.Redacted<string>;
  domainId: string;
  domainUnitId: string;
  environmentId?: string;
  name: string;
  physicalEndpoints: PhysicalEndpoint[];
  projectId?: string;
  props?: ConnectionPropertiesOutput;
  type: ConnectionType;
  scope?: ConnectionScope;
}
export interface UpdateDataSourceInput {
  domainIdentifier: string;
  identifier: string;
  name?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  enableSetting?: EnableSetting;
  publishOnImport?: boolean;
  assetFormsInput?: FormInput[];
  schedule?: ScheduleConfiguration;
  configuration?: DataSourceConfigurationInput;
  recommendation?: RecommendationConfiguration;
  retainPermissionsOnRevokeFailure?: boolean;
}
export interface UpdateDataSourceOutput {
  id: string;
  status?: DataSourceStatus;
  type?: string;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  domainId: string;
  projectId: string;
  environmentId?: string;
  connectionId?: string;
  configuration?: DataSourceConfigurationOutput;
  recommendation?: RecommendationConfiguration;
  enableSetting?: EnableSetting;
  publishOnImport?: boolean;
  assetFormsOutput?: FormOutput[];
  schedule?: ScheduleConfiguration;
  lastRunStatus?: DataSourceRunStatus;
  lastRunAt?: Date;
  lastRunErrorMessage?: DataSourceErrorMessage;
  errorMessage?: DataSourceErrorMessage;
  createdAt?: Date;
  updatedAt?: Date;
  selfGrantStatus?: SelfGrantStatusOutput;
  retainPermissionsOnRevokeFailure?: boolean;
}
export interface UpdateDomainInput {
  identifier: string;
  description?: string;
  singleSignOn?: SingleSignOn;
  domainExecutionRole?: string;
  serviceRole?: string;
  name?: string;
  clientToken?: string;
}
export interface UpdateDomainOutput {
  id: string;
  rootDomainUnitId?: string;
  description?: string;
  singleSignOn?: SingleSignOn;
  domainExecutionRole?: string;
  serviceRole?: string;
  name?: string;
  lastUpdatedAt?: Date;
}
export interface UpdateDomainUnitInput {
  domainIdentifier: string;
  identifier: string;
  description?: string | redacted.Redacted<string>;
  name?: string | redacted.Redacted<string>;
}
export interface UpdateDomainUnitOutput {
  id: string;
  domainId: string;
  name: string | redacted.Redacted<string>;
  owners: DomainUnitOwnerProperties[];
  description?: string | redacted.Redacted<string>;
  parentDomainUnitId?: string;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  createdBy?: string;
  lastUpdatedBy?: string;
}
export interface UpdateEnvironmentInput {
  domainIdentifier: string;
  identifier: string;
  name?: string;
  description?: string;
  glossaryTerms?: string[];
  blueprintVersion?: string;
  userParameters?: EnvironmentParameter[];
  environmentConfigurationName?: string | redacted.Redacted<string>;
}
export interface UpdateEnvironmentOutput {
  projectId: string;
  id?: string;
  domainId: string;
  createdBy: string;
  createdAt?: Date;
  updatedAt?: Date;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  environmentProfileId?: string;
  awsAccountId?: string;
  awsAccountRegion?: string;
  provider: string;
  provisionedResources?: Resource[];
  status?: EnvironmentStatus;
  environmentActions?: ConfigurableEnvironmentAction[];
  glossaryTerms?: string[];
  userParameters?: CustomParameter[];
  lastDeployment?: Deployment;
  provisioningProperties?: ProvisioningProperties;
  deploymentProperties?: DeploymentProperties;
  environmentBlueprintId?: string;
  environmentConfigurationId?: string | redacted.Redacted<string>;
  environmentConfigurationName?: string | redacted.Redacted<string>;
}
export interface UpdateEnvironmentActionInput {
  domainIdentifier: string;
  environmentIdentifier: string;
  identifier: string;
  parameters?: ActionParameters;
  name?: string;
  description?: string;
}
export interface UpdateEnvironmentActionOutput {
  domainId: string;
  environmentId: string;
  id: string;
  name: string;
  parameters: ActionParameters;
  description?: string;
}
export interface UpdateEnvironmentBlueprintInput {
  domainIdentifier: string;
  identifier: string;
  description?: string;
  provisioningProperties?: ProvisioningProperties;
  userParameters?: CustomParameter[];
  blueprintCategory?: BlueprintCategory;
}
export interface UpdateEnvironmentBlueprintOutput {
  id: string;
  name: string;
  description?: string | redacted.Redacted<string>;
  provider: string;
  provisioningProperties: ProvisioningProperties;
  deploymentProperties?: DeploymentProperties;
  userParameters?: CustomParameter[];
  glossaryTerms?: string[];
  blueprintCategory?: BlueprintCategory;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface UpdateEnvironmentProfileInput {
  domainIdentifier: string;
  identifier: string;
  name?: string | redacted.Redacted<string>;
  description?: string;
  userParameters?: EnvironmentParameter[];
  awsAccountId?: string;
  awsAccountRegion?: string;
}
export interface UpdateEnvironmentProfileOutput {
  id: string;
  domainId: string;
  awsAccountId?: string;
  awsAccountRegion?: string;
  createdBy: string;
  createdAt?: Date;
  updatedAt?: Date;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  environmentBlueprintId: string;
  projectId?: string;
  userParameters?: CustomParameter[];
}
export interface UpdateGlossaryInput {
  domainIdentifier: string;
  identifier: string;
  name?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  status?: GlossaryStatus;
  clientToken?: string;
}
export interface UpdateGlossaryOutput {
  domainId: string;
  id: string;
  name: string | redacted.Redacted<string>;
  owningProjectId: string;
  description?: string | redacted.Redacted<string>;
  status?: GlossaryStatus;
  usageRestrictions?: GlossaryUsageRestriction[];
}
export interface UpdateGlossaryTermInput {
  domainIdentifier: string;
  glossaryIdentifier?: string;
  identifier: string;
  name?: string | redacted.Redacted<string>;
  shortDescription?: string | redacted.Redacted<string>;
  longDescription?: string | redacted.Redacted<string>;
  termRelations?: TermRelations;
  status?: GlossaryTermStatus;
}
export interface UpdateGlossaryTermOutput {
  id: string;
  domainId: string;
  glossaryId: string;
  name: string | redacted.Redacted<string>;
  status: GlossaryTermStatus;
  shortDescription?: string | redacted.Redacted<string>;
  longDescription?: string | redacted.Redacted<string>;
  termRelations?: TermRelations;
  usageRestrictions?: GlossaryUsageRestriction[];
}
export interface UpdateGroupProfileInput {
  domainIdentifier: string;
  groupIdentifier: string;
  status: GroupProfileStatus;
}
export interface UpdateGroupProfileOutput {
  domainId?: string;
  id?: string;
  status?: GroupProfileStatus;
  groupName?: string | redacted.Redacted<string>;
  rolePrincipalArn?: string;
  rolePrincipalId?: string;
}
export interface UpdateNotebookInput {
  domainIdentifier: string;
  identifier: string;
  description?: string | redacted.Redacted<string>;
  status?: NotebookStatus;
  name?: string | redacted.Redacted<string>;
  cellOrder?: CellInformation[];
  type?: NotebookType;
  metadata?: { [key: string]: string | redacted.Redacted<string> | undefined };
  parameters?: { [key: string]: string | undefined };
  environmentConfiguration?: EnvironmentConfig;
  clientToken?: string;
}
export interface UpdateNotebookOutput {
  id: string;
  name: string | redacted.Redacted<string>;
  owningProjectId: string;
  domainId: string;
  cellOrder: CellInformation[];
  status: NotebookStatus;
  type?: NotebookType;
  description?: string | redacted.Redacted<string>;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  lockedBy?: string;
  lockedAt?: Date;
  lockExpiresAt?: Date;
  computeId?: string;
  metadata?: { [key: string]: string | redacted.Redacted<string> | undefined };
  parameters?: { [key: string]: string | undefined };
  environmentConfiguration?: EnvironmentConfig;
  error?: NotebookError;
  gitMetadata?: GitMetadata;
}
export interface UpdateProjectInput {
  domainIdentifier: string;
  identifier: string;
  name?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  resourceTags?: { [key: string]: string | undefined };
  glossaryTerms?: string[];
  domainUnitId?: string;
  environmentDeploymentDetails?: EnvironmentDeploymentDetails;
  userParameters?: EnvironmentConfigurationUserParameter[];
  projectProfileVersion?: string;
}
export interface UpdateProjectOutput {
  domainId: string;
  id: string;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  projectStatus?: ProjectStatus;
  failureReasons?: ProjectDeletionError[];
  createdBy: string;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  resourceTags?: ResourceTag[];
  glossaryTerms?: string[];
  domainUnitId?: string;
  projectProfileId?: string;
  userParameters?: EnvironmentConfigurationUserParameter[];
  environmentDeploymentDetails?: EnvironmentDeploymentDetails;
  projectCategory?: string;
}
export interface UpdateProjectProfileInput {
  domainIdentifier: string;
  identifier: string;
  name?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  status?: Status;
  projectResourceTags?: ResourceTagParameter[];
  allowCustomProjectResourceTags?: boolean;
  projectResourceTagsDescription?: string | redacted.Redacted<string>;
  environmentConfigurations?: EnvironmentConfiguration[];
  domainUnitIdentifier?: string;
}
export interface UpdateProjectProfileOutput {
  domainId: string;
  id: string;
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  status?: Status;
  projectResourceTags?: ResourceTagParameter[];
  allowCustomProjectResourceTags?: boolean;
  projectResourceTagsDescription?: string | redacted.Redacted<string>;
  environmentConfigurations?: EnvironmentConfiguration[];
  createdBy: string;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  domainUnitId?: string;
}
export interface UpdateRootDomainUnitOwnerInput {
  domainIdentifier: string;
  currentOwner: string;
  newOwner: string;
  clientToken?: string;
}
export interface UpdateRootDomainUnitOwnerOutput {}
export interface UpdateRuleInput {
  domainIdentifier: string;
  identifier: string;
  name?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  scope?: RuleScope;
  detail?: RuleDetail;
  includeChildDomainUnits?: boolean;
}
export interface UpdateRuleOutput {
  identifier: string;
  revision: string;
  name: string | redacted.Redacted<string>;
  ruleType: RuleType;
  target: RuleTarget;
  action: RuleAction;
  scope: RuleScope;
  detail: RuleDetail;
  description?: string | redacted.Redacted<string>;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  lastUpdatedBy: string;
}
export interface UpdateSubscriptionGrantStatusInput {
  domainIdentifier: string;
  identifier: string;
  assetIdentifier: string;
  status: SubscriptionGrantStatus;
  failureCause?: FailureCause;
  targetName?: string;
}
export interface UpdateSubscriptionGrantStatusOutput {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  createdAt: Date;
  updatedAt: Date;
  environmentId?: string;
  subscriptionTargetId: string;
  grantedEntity: GrantedEntity;
  status: SubscriptionGrantOverallStatus;
  assets?: SubscribedAsset[];
  subscriptionId?: string;
}
export interface UpdateSubscriptionRequestInput {
  domainIdentifier: string;
  identifier: string;
  requestReason: string | redacted.Redacted<string>;
}
export interface UpdateSubscriptionRequestOutput {
  id: string;
  createdBy: string;
  updatedBy?: string;
  domainId: string;
  status: SubscriptionRequestStatus;
  createdAt: Date;
  updatedAt: Date;
  requestReason: string | redacted.Redacted<string>;
  subscribedPrincipals: SubscribedPrincipal[];
  subscribedListings: SubscribedListing[];
  reviewerId?: string;
  decisionComment?: string | redacted.Redacted<string>;
  existingSubscriptionId?: string;
  metadataForms?: FormOutput[];
}
export interface UpdateSubscriptionTargetInput {
  domainIdentifier: string;
  environmentIdentifier: string;
  identifier: string;
  name?: string | redacted.Redacted<string>;
  authorizedPrincipals?: string[];
  applicableAssetTypes?: string[];
  subscriptionTargetConfig?: SubscriptionTargetForm[];
  manageAccessRole?: string;
  provider?: string;
  subscriptionGrantCreationMode?: SubscriptionGrantCreationMode;
}
export interface UpdateSubscriptionTargetOutput {
  id: string;
  authorizedPrincipals: string[];
  domainId: string;
  projectId: string;
  environmentId: string;
  name: string | redacted.Redacted<string>;
  type: string;
  createdBy: string;
  updatedBy?: string;
  createdAt: Date;
  updatedAt?: Date;
  manageAccessRole?: string;
  applicableAssetTypes: string[];
  subscriptionTargetConfig: SubscriptionTargetForm[];
  provider: string;
  subscriptionGrantCreationMode?: SubscriptionGrantCreationMode;
}
export interface UpdateUserProfileInput {
  domainIdentifier: string;
  userIdentifier: string;
  type?: UserProfileType;
  status: UserProfileStatus;
  sessionName?: string;
}
export interface UpdateUserProfileOutput {
  domainId?: string;
  id?: string;
  type?: UserProfileType;
  status?: UserProfileStatus;
  details?: UserProfileDetails;
}
export type ErrorMessage = string;
export type AcceptPredictionsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Accepts automatically generated business-friendly metadata for your Amazon DataZone assets.
 */
export const acceptPredictions: API.OperationMethod<
  AcceptPredictionsInput,
  AcceptPredictionsOutput,
  AcceptPredictionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(3, __c0, 3) as any as S.Schema<AcceptPredictionsInput>,
  output: __S(4, __c0, 4) as any as S.Schema<AcceptPredictionsOutput>,
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
  operationName: "AcceptPredictions",
}));

export type AcceptSubscriptionRequestError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Accepts a subscription request to a specific asset.
 */
export const acceptSubscriptionRequest: API.OperationMethod<
  AcceptSubscriptionRequestInput,
  AcceptSubscriptionRequestOutput,
  AcceptSubscriptionRequestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(12, __c1, 4) as any as S.Schema<AcceptSubscriptionRequestInput>,
  output: __S(33, __c4, 1) as any as S.Schema<AcceptSubscriptionRequestOutput>,
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
  operationName: "AcceptSubscriptionRequest",
}));

export type AddEntityOwnerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds the owner of an entity (a domain unit).
 */
export const addEntityOwner: API.OperationMethod<
  AddEntityOwnerInput,
  AddEntityOwnerOutput,
  AddEntityOwnerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(37, __c4, 5) as any as S.Schema<AddEntityOwnerInput>,
  output: __S(38, __c4, 6) as any as S.Schema<AddEntityOwnerOutput>,
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
  operationName: "AddEntityOwner",
}));

export type AddPolicyGrantError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds a policy grant (an authorization policy) to a specified entity, including domain units, environment blueprint configurations, or environment profiles.
 */
export const addPolicyGrant: API.OperationMethod<
  AddPolicyGrantInput,
  AddPolicyGrantOutput,
  AddPolicyGrantError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(51, __c6, 3) as any as S.Schema<AddPolicyGrantInput>,
  output: __S(52, __c6, 4) as any as S.Schema<AddPolicyGrantOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddPolicyGrant",
}));

export type AssociateEnvironmentRoleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates the environment role in Amazon DataZone.
 */
export const associateEnvironmentRole: API.OperationMethod<
  AssociateEnvironmentRoleInput,
  AssociateEnvironmentRoleOutput,
  AssociateEnvironmentRoleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(53, __c6, 5) as any as S.Schema<AssociateEnvironmentRoleInput>,
  output: __S(38, __c4, 6) as any as S.Schema<AssociateEnvironmentRoleOutput>,
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
  operationName: "AssociateEnvironmentRole",
}));

export type AssociateGovernedTermsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates governed terms with an asset.
 */
export const associateGovernedTerms: API.OperationMethod<
  AssociateGovernedTermsInput,
  AssociateGovernedTermsOutput,
  AssociateGovernedTermsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(54, __c6, 6) as any as S.Schema<AssociateGovernedTermsInput>,
  output: __S(38, __c4, 6) as any as S.Schema<AssociateGovernedTermsOutput>,
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
  operationName: "AssociateGovernedTerms",
}));

export type BatchGetAttributesMetadataError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the attribute metadata.
 */
export const batchGetAttributesMetadata: API.OperationMethod<
  BatchGetAttributesMetadataInput,
  BatchGetAttributesMetadataOutput,
  BatchGetAttributesMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(55, __c6, 7) as any as S.Schema<BatchGetAttributesMetadataInput>,
  output: __S(60, __c7, 4) as any as S.Schema<BatchGetAttributesMetadataOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetAttributesMetadata",
}));

export type BatchPutAttributesMetadataError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Writes the attribute metadata.
 */
export const batchPutAttributesMetadata: API.OperationMethod<
  BatchPutAttributesMetadataInput,
  BatchPutAttributesMetadataOutput,
  BatchPutAttributesMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(65, __c8, 1) as any as S.Schema<BatchPutAttributesMetadataInput>,
  output: __S(68, __c8, 4) as any as S.Schema<BatchPutAttributesMetadataOutput>,
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
  operationName: "BatchPutAttributesMetadata",
}));

export type CancelMetadataGenerationRunError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Cancels the metadata generation run.
 *
 * Prerequisites:
 *
 * - The run must exist and be in a cancelable status (e.g., SUBMITTED, IN_PROGRESS).
 *
 * - Runs in SUCCEEDED status cannot be cancelled.
 *
 * - User must have access to the run and cancel permissions.
 */
export const cancelMetadataGenerationRun: API.OperationMethod<
  CancelMetadataGenerationRunInput,
  CancelMetadataGenerationRunOutput,
  CancelMetadataGenerationRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(69, __c8, 5) as any as S.Schema<CancelMetadataGenerationRunInput>,
  output: __S(70, __c8, 6) as any as S.Schema<CancelMetadataGenerationRunOutput>,
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
  operationName: "CancelMetadataGenerationRun",
}));

export type CancelSubscriptionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Cancels the subscription to the specified asset.
 */
export const cancelSubscription: API.OperationMethod<
  CancelSubscriptionInput,
  CancelSubscriptionOutput,
  CancelSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(71, __c8, 7) as any as S.Schema<CancelSubscriptionInput>,
  output: __S(72, __c9, 0) as any as S.Schema<CancelSubscriptionOutput>,
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
  operationName: "CancelSubscription",
}));

export type CreateAccountPoolError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an account pool.
 */
export const createAccountPool: API.OperationMethod<
  CreateAccountPoolInput,
  CreateAccountPoolOutput,
  CreateAccountPoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(77, __c9, 5) as any as S.Schema<CreateAccountPoolInput>,
  output: __S(78, __c9, 6) as any as S.Schema<CreateAccountPoolOutput>,
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
  operationName: "CreateAccountPool",
}));

export type CreateAssetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an asset in Amazon DataZone catalog.
 *
 * Before creating assets, make sure that the following requirements are met:
 *
 * - `--domain-identifier` must refer to an existing domain.
 *
 * - `--owning-project-identifier` must be a valid project within the domain.
 *
 * - Asset type must be created beforehand using `create-asset-type`, or be a supported system-defined type. For more information, see create-asset-type.
 *
 * - `--type-revision` (if used) must match a valid revision of the asset type.
 *
 * - `formsInput` is required when it is associated as required in the `asset-type`. For more information, see create-form-type.
 *
 * - Form content must include all required fields as per the form schema (e.g., `bucketArn`).
 *
 * You must invoke the following pre-requisite commands before invoking this API:
 *
 * - CreateFormType
 *
 * - CreateAssetType
 */
export const createAsset: API.OperationMethod<
  CreateAssetInput,
  CreateAssetOutput,
  CreateAssetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(81, __c10, 1) as any as S.Schema<CreateAssetInput>,
  output: __S(85, __c10, 5) as any as S.Schema<CreateAssetOutput>,
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
  operationName: "CreateAsset",
}));

export type CreateAssetFilterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a data asset filter.
 *
 * Asset filters provide a sophisticated way to create controlled views of data assets by selecting specific columns or applying row-level filters. This capability is crucial for organizations that need to share data while maintaining security and privacy controls. For example, your database might be filtered to show only non-PII fields to certain users, or sales data might be filtered by region for different regional teams. Asset filters enable fine-grained access control while maintaining a single source of truth.
 *
 * Prerequisites:
 *
 * - A valid domain (`--domain-identifier`) must exist.
 *
 * - A data asset (`--asset-identifier`) must already be created under that domain.
 *
 * - The asset must have the referenced columns available in its schema for column-based filtering.
 *
 * - You cannot specify both (`columnConfiguration`, `rowConfiguration`)at the same time.
 */
export const createAssetFilter: API.OperationMethod<
  CreateAssetFilterInput,
  CreateAssetFilterOutput,
  CreateAssetFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(96, __c12, 0) as any as S.Schema<CreateAssetFilterInput>,
  output: __S(97, __c12, 1) as any as S.Schema<CreateAssetFilterOutput>,
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
  operationName: "CreateAssetFilter",
}));

export type CreateAssetRevisionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a revision of the asset.
 *
 * Asset revisions represent new versions of existing assets, capturing changes to either the underlying data or its metadata. They maintain a historical record of how assets evolve over time, who made changes, and when those changes occurred. This versioning capability is crucial for governance and compliance, allowing organizations to track changes, understand their impact, and roll back if necessary.
 *
 * Prerequisites:
 *
 * - Asset must already exist in the domain with identifier.
 *
 * - `formsInput` is required when asset has the form type. `typeRevision` should be the latest version of form type.
 *
 * - The form content must include all required fields (e.g., `bucketArn` for `S3ObjectCollectionForm`).
 *
 * - The owning project of the original asset must still exist and be active.
 *
 * - User must have write access to the project and domain.
 */
export const createAssetRevision: API.OperationMethod<
  CreateAssetRevisionInput,
  CreateAssetRevisionOutput,
  CreateAssetRevisionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(98, __c12, 2) as any as S.Schema<CreateAssetRevisionInput>,
  output: __S(99, __c12, 3) as any as S.Schema<CreateAssetRevisionOutput>,
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
  operationName: "CreateAssetRevision",
}));

export type CreateAssetTypeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a custom asset type.
 *
 * Prerequisites:
 *
 * - The `formsInput` field is required, however, can be passed as empty (e.g. `-forms-input {})`.
 *
 * - You must have `CreateAssetType` permissions.
 *
 * - The domain-identifier and owning-project-identifier must be valid and active.
 *
 * - The name of the asset type must be unique within the domain -- duplicate names will cause failure.
 *
 * - JSON input must be valid -- incorrect formatting causes Invalid JSON errors.
 */
export const createAssetType: API.OperationMethod<
  CreateAssetTypeInput,
  CreateAssetTypeOutput,
  CreateAssetTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(102, __c12, 6) as any as S.Schema<CreateAssetTypeInput>,
  output: __S(105, __c13, 1) as any as S.Schema<CreateAssetTypeOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAssetType",
}));

export type CreateConnectionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new connection. In Amazon DataZone, a connection enables you to connect your resources (domains, projects, and environments) to external resources and services.
 */
export const createConnection: API.OperationMethod<
  CreateConnectionInput,
  CreateConnectionOutput,
  CreateConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(143, __c17, 7) as any as S.Schema<CreateConnectionInput>,
  output: __S(163, __c20, 3) as any as S.Schema<CreateConnectionOutput>,
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
  operationName: "CreateConnection",
}));

export type CreateDataProductError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a data product.
 *
 * A data product is a comprehensive package that combines data assets with their associated metadata, documentation, and access controls. It's designed to serve specific business needs or use cases, making it easier for users to find and consume data appropriately. Data products include important information about data quality, freshness, and usage guidelines, effectively bridging the gap between data producers and consumers while ensuring proper governance.
 *
 * Prerequisites:
 *
 * - The domain must exist and be accessible.
 *
 * - The owning project must be valid and active.
 *
 * - The name must be unique within the domain (no existing data product with the same name).
 *
 * - User must have create permissions for data products in the project.
 */
export const createDataProduct: API.OperationMethod<
  CreateDataProductInput,
  CreateDataProductOutput,
  CreateDataProductError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(166, __c20, 6) as any as S.Schema<CreateDataProductInput>,
  output: __S(167, __c20, 7) as any as S.Schema<CreateDataProductOutput>,
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
  operationName: "CreateDataProduct",
}));

export type CreateDataProductRevisionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a data product revision.
 *
 * Prerequisites:
 *
 * - The original data product must exist in the given domain.
 *
 * - User must have permissions on the data product.
 *
 * - The domain must be valid and accessible.
 *
 * - The new revision name must comply with naming constraints (if required).
 */
export const createDataProductRevision: API.OperationMethod<
  CreateDataProductRevisionInput,
  CreateDataProductRevisionOutput,
  CreateDataProductRevisionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(168, __c21, 0) as any as S.Schema<CreateDataProductRevisionInput>,
  output: __S(169, __c21, 1) as any as S.Schema<CreateDataProductRevisionOutput>,
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
  operationName: "CreateDataProductRevision",
}));

export type CreateDataSourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon DataZone data source.
 */
export const createDataSource: API.OperationMethod<
  CreateDataSourceInput,
  CreateDataSourceOutput,
  CreateDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(184, __c23, 0) as any as S.Schema<CreateDataSourceInput>,
  output: __S(190, __c23, 6) as any as S.Schema<CreateDataSourceOutput>,
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
  operationName: "CreateDataSource",
}));

export type CreateDomainError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon DataZone domain.
 */
export const createDomain: API.OperationMethod<
  CreateDomainInput,
  CreateDomainOutput,
  CreateDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(193, __c24, 1) as any as S.Schema<CreateDomainInput>,
  output: __S(194, __c24, 2) as any as S.Schema<CreateDomainOutput>,
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
  operationName: "CreateDomain",
}));

export type CreateDomainUnitError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a domain unit in Amazon DataZone.
 */
export const createDomainUnit: API.OperationMethod<
  CreateDomainUnitInput,
  CreateDomainUnitOutput,
  CreateDomainUnitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(195, __c24, 3) as any as S.Schema<CreateDomainUnitInput>,
  output: __S(200, __c25, 0) as any as S.Schema<CreateDomainUnitOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDomainUnit",
}));

export type CreateEnvironmentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Create an Amazon DataZone environment.
 */
export const createEnvironment: API.OperationMethod<
  CreateEnvironmentInput,
  CreateEnvironmentOutput,
  CreateEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(203, __c25, 3) as any as S.Schema<CreateEnvironmentInput>,
  output: __S(217, __c27, 1) as any as S.Schema<CreateEnvironmentOutput>,
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
  operationName: "CreateEnvironment",
}));

export type CreateEnvironmentActionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an action for the environment, for example, creates a console link for an analytics tool that is available in this environment.
 */
export const createEnvironmentAction: API.OperationMethod<
  CreateEnvironmentActionInput,
  CreateEnvironmentActionOutput,
  CreateEnvironmentActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(220, __c27, 4) as any as S.Schema<CreateEnvironmentActionInput>,
  output: __S(221, __c27, 5) as any as S.Schema<CreateEnvironmentActionOutput>,
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
  operationName: "CreateEnvironmentAction",
}));

export type CreateEnvironmentBlueprintError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a Amazon DataZone blueprint.
 */
export const createEnvironmentBlueprint: API.OperationMethod<
  CreateEnvironmentBlueprintInput,
  CreateEnvironmentBlueprintOutput,
  CreateEnvironmentBlueprintError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(222, __c27, 6) as any as S.Schema<CreateEnvironmentBlueprintInput>,
  output: __S(223, __c27, 7) as any as S.Schema<CreateEnvironmentBlueprintOutput>,
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
  operationName: "CreateEnvironmentBlueprint",
}));

export type CreateEnvironmentProfileError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon DataZone environment profile.
 */
export const createEnvironmentProfile: API.OperationMethod<
  CreateEnvironmentProfileInput,
  CreateEnvironmentProfileOutput,
  CreateEnvironmentProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(224, __c28, 0) as any as S.Schema<CreateEnvironmentProfileInput>,
  output: __S(225, __c28, 1) as any as S.Schema<CreateEnvironmentProfileOutput>,
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
  operationName: "CreateEnvironmentProfile",
}));

export type CreateFormTypeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a metadata form type.
 *
 * Prerequisites:
 *
 * - The domain must exist and be in an `ENABLED` state.
 *
 * - The owning project must exist and be accessible.
 *
 * - The name must be unique within the domain.
 *
 * For custom form types, to indicate that a field should be searchable, annotate it with `@amazon.datazone#searchable`. By default, searchable fields are indexed for semantic search, where related query terms will match the attribute value even if they are not stemmed or keyword matches. To indicate that a field should be indexed for lexical search (which disables semantic search but supports stemmed and partial matches), annotate it with `@amazon.datazone#searchable(modes:["LEXICAL"])`. To indicate that a field should be indexed for technical identifier search (for more information on technical identifier search, see: https://aws.amazon.com/blogs/big-data/streamline-data-discovery-with-precise-technical-identifier-search-in-amazon-sagemaker-unified-studio/), annotate it with `@amazon.datazone#searchable(modes:["TECHNICAL"])`.
 *
 * To denote that a field will store glossary term ids (which are filterable via the Search/SearchListings APIs), annotate it with `@amazon.datazone#glossaryterm("${GLOSSARY_ID}")`, where `${GLOSSARY_ID}` is the id of the glossary that the glossary terms stored in the field belong to.
 */
export const createFormType: API.OperationMethod<
  CreateFormTypeInput,
  CreateFormTypeOutput,
  CreateFormTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(227, __c28, 3) as any as S.Schema<CreateFormTypeInput>,
  output: __S(228, __c28, 4) as any as S.Schema<CreateFormTypeOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateFormType",
}));

export type CreateGlossaryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon DataZone business glossary.
 *
 * Specifies that this is a create glossary policy.
 *
 * A glossary serves as the central repository for business terminology and definitions within an organization. It helps establish and maintain a common language across different departments and teams, reducing miscommunication and ensuring consistent interpretation of business concepts. Glossaries can include hierarchical relationships between terms, cross-references, and links to actual data assets, making them invaluable for both business users and technical teams trying to understand and use data correctly.
 *
 * Prerequisites:
 *
 * - Domain must exist and be in an active state.
 *
 * - Owning project must exist and be accessible by the caller.
 *
 * - The glossary name must be unique within the domain.
 */
export const createGlossary: API.OperationMethod<
  CreateGlossaryInput,
  CreateGlossaryOutput,
  CreateGlossaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(229, __c28, 5) as any as S.Schema<CreateGlossaryInput>,
  output: __S(230, __c28, 6) as any as S.Schema<CreateGlossaryOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateGlossary",
}));

export type CreateGlossaryTermError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a business glossary term.
 *
 * A glossary term represents an individual entry within the Amazon DataZone glossary, serving as a standardized definition for a specific business concept or data element. Each term can include rich metadata such as detailed definitions, synonyms, related terms, and usage examples. Glossary terms can be linked directly to data assets, providing business context to technical data elements. This linking capability helps users understand the business meaning of data fields and ensures consistent interpretation across different systems and teams. Terms can also have relationships with other terms, creating a semantic network that reflects the complexity of business concepts.
 *
 * Prerequisites:
 *
 * - Domain must exist.
 *
 * - Glossary must exist.
 *
 * - The term name must be unique within the glossary.
 *
 * - Ensure term does not conflict with existing terms in hierarchy.
 */
export const createGlossaryTerm: API.OperationMethod<
  CreateGlossaryTermInput,
  CreateGlossaryTermOutput,
  CreateGlossaryTermError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(232, __c29, 0) as any as S.Schema<CreateGlossaryTermInput>,
  output: __S(233, __c29, 1) as any as S.Schema<CreateGlossaryTermOutput>,
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
  operationName: "CreateGlossaryTerm",
}));

export type CreateGroupProfileError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Creates a group profile in Amazon DataZone.
 */
export const createGroupProfile: API.OperationMethod<
  CreateGroupProfileInput,
  CreateGroupProfileOutput,
  CreateGroupProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(234, __c29, 2) as any as S.Schema<CreateGroupProfileInput>,
  output: __S(235, __c29, 3) as any as S.Schema<CreateGroupProfileOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateGroupProfile",
}));

export type CreateListingChangeSetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Publishes a listing (a record of an asset at a given time) or removes a listing from the catalog.
 */
export const createListingChangeSet: API.OperationMethod<
  CreateListingChangeSetInput,
  CreateListingChangeSetOutput,
  CreateListingChangeSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(236, __c29, 4) as any as S.Schema<CreateListingChangeSetInput>,
  output: __S(237, __c29, 5) as any as S.Schema<CreateListingChangeSetOutput>,
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
  operationName: "CreateListingChangeSet",
}));

export type CreateNotebookError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a notebook in Amazon SageMaker Unified Studio. A notebook is a collaborative document within a project that contains code cells for interactive computing.
 */
export const createNotebook: API.OperationMethod<
  CreateNotebookInput,
  CreateNotebookOutput,
  CreateNotebookError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(239, __c29, 7) as any as S.Schema<CreateNotebookInput>,
  output: __S(245, __c30, 5) as any as S.Schema<CreateNotebookOutput>,
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
  operationName: "CreateNotebook",
}));

export type CreateProjectError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon DataZone project.
 */
export const createProject: API.OperationMethod<
  CreateProjectInput,
  CreateProjectOutput,
  CreateProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(252, __c31, 4) as any as S.Schema<CreateProjectInput>,
  output: __S(260, __c32, 4) as any as S.Schema<CreateProjectOutput>,
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
  operationName: "CreateProject",
}));

export type CreateProjectMembershipError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Creates a project membership in Amazon DataZone.
 */
export const createProjectMembership: API.OperationMethod<
  CreateProjectMembershipInput,
  CreateProjectMembershipOutput,
  CreateProjectMembershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(261, __c32, 5) as any as S.Schema<CreateProjectMembershipInput>,
  output: __S(38, __c4, 6) as any as S.Schema<CreateProjectMembershipOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateProjectMembership",
}));

export type CreateProjectProfileError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a project profile.
 */
export const createProjectProfile: API.OperationMethod<
  CreateProjectProfileInput,
  CreateProjectProfileOutput,
  CreateProjectProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(271, __c33, 7) as any as S.Schema<CreateProjectProfileInput>,
  output: __S(272, __c34, 0) as any as S.Schema<CreateProjectProfileOutput>,
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
  operationName: "CreateProjectProfile",
}));

export type CreateRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a rule in Amazon DataZone. A rule is a formal agreement that enforces specific requirements across user workflows (e.g., publishing assets to the catalog, requesting subscriptions, creating projects) within the Amazon DataZone data portal. These rules help maintain consistency, ensure compliance, and uphold governance standards in data management processes. For instance, a metadata enforcement rule can specify the required information for creating a subscription request or publishing a data asset to the catalog, ensuring alignment with organizational standards.
 */
export const createRule: API.OperationMethod<
  CreateRuleInput,
  CreateRuleOutput,
  CreateRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(283, __c35, 3) as any as S.Schema<CreateRuleInput>,
  output: __S(284, __c35, 4) as any as S.Schema<CreateRuleOutput>,
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
  operationName: "CreateRule",
}));

export type CreateSubscriptionGrantError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a subsscription grant in Amazon DataZone.
 */
export const createSubscriptionGrant: API.OperationMethod<
  CreateSubscriptionGrantInput,
  CreateSubscriptionGrantOutput,
  CreateSubscriptionGrantError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(289, __c36, 1) as any as S.Schema<CreateSubscriptionGrantInput>,
  output: __S(295, __c36, 7) as any as S.Schema<CreateSubscriptionGrantOutput>,
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
  operationName: "CreateSubscriptionGrant",
}));

export type CreateSubscriptionRequestError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a subscription request in Amazon DataZone.
 */
export const createSubscriptionRequest: API.OperationMethod<
  CreateSubscriptionRequestInput,
  CreateSubscriptionRequestOutput,
  CreateSubscriptionRequestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(302, __c37, 6) as any as S.Schema<CreateSubscriptionRequestInput>,
  output: __S(33, __c4, 1) as any as S.Schema<CreateSubscriptionRequestOutput>,
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
  operationName: "CreateSubscriptionRequest",
}));

export type CreateSubscriptionTargetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a subscription target in Amazon DataZone.
 */
export const createSubscriptionTarget: API.OperationMethod<
  CreateSubscriptionTargetInput,
  CreateSubscriptionTargetOutput,
  CreateSubscriptionTargetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(305, __c38, 1) as any as S.Schema<CreateSubscriptionTargetInput>,
  output: __S(306, __c38, 2) as any as S.Schema<CreateSubscriptionTargetOutput>,
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
  operationName: "CreateSubscriptionTarget",
}));

export type CreateUserProfileError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Creates a user profile in Amazon DataZone.
 */
export const createUserProfile: API.OperationMethod<
  CreateUserProfileInput,
  CreateUserProfileOutput,
  CreateUserProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(307, __c38, 3) as any as S.Schema<CreateUserProfileInput>,
  output: __S(308, __c38, 4) as any as S.Schema<CreateUserProfileOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateUserProfile",
}));

export type DeleteAccountPoolError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an account pool.
 */
export const deleteAccountPool: API.OperationMethod<
  DeleteAccountPoolInput,
  DeleteAccountPoolOutput,
  DeleteAccountPoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(309, __c38, 5) as any as S.Schema<DeleteAccountPoolInput>,
  output: __S(38, __c4, 6) as any as S.Schema<DeleteAccountPoolOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAccountPool",
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
 * Deletes an asset in Amazon DataZone.
 *
 * - --domain-identifier must refer to a valid and existing domain.
 *
 * - --identifier must refer to an existing asset in the specified domain.
 *
 * - Asset must not be referenced in any existing asset filters.
 *
 * - Asset must not be linked to any draft or published data product.
 *
 * - User must have delete permissions for the domain and project.
 */
export const deleteAsset: API.OperationMethod<
  DeleteAssetInput,
  DeleteAssetOutput,
  DeleteAssetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(310, __c38, 6) as any as S.Schema<DeleteAssetInput>,
  output: __S(38, __c4, 6) as any as S.Schema<DeleteAssetOutput>,
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
}));

export type DeleteAssetFilterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an asset filter.
 *
 * Prerequisites:
 *
 * - The asset filter must exist.
 *
 * - The domain and asset must not have been deleted.
 *
 * - Ensure the --identifier refers to a valid filter ID.
 */
export const deleteAssetFilter: API.OperationMethod<
  DeleteAssetFilterInput,
  DeleteAssetFilterResponse,
  DeleteAssetFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(311, __c38, 7) as any as S.Schema<DeleteAssetFilterInput>,
  output: __S(38, __c4, 6) as any as S.Schema<DeleteAssetFilterResponse>,
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
  operationName: "DeleteAssetFilter",
}));

export type DeleteAssetTypeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an asset type in Amazon DataZone.
 *
 * Prerequisites:
 *
 * - The asset type must exist in the domain.
 *
 * - You must have DeleteAssetType permission.
 *
 * - The asset type must not be in use (e.g., assigned to any asset). If used, deletion will fail.
 *
 * - You should retrieve the asset type using get-asset-type to confirm its presence before deletion.
 */
export const deleteAssetType: API.OperationMethod<
  DeleteAssetTypeInput,
  DeleteAssetTypeOutput,
  DeleteAssetTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(312, __c39, 0) as any as S.Schema<DeleteAssetTypeInput>,
  output: __S(38, __c4, 6) as any as S.Schema<DeleteAssetTypeOutput>,
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
  operationName: "DeleteAssetType",
}));

export type DeleteConnectionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes and connection. In Amazon DataZone, a connection enables you to connect your resources (domains, projects, and environments) to external resources and services.
 */
export const deleteConnection: API.OperationMethod<
  DeleteConnectionInput,
  DeleteConnectionOutput,
  DeleteConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(313, __c39, 1) as any as S.Schema<DeleteConnectionInput>,
  output: __S(314, __c39, 2) as any as S.Schema<DeleteConnectionOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConnection",
}));

export type DeleteDataExportConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes data export configuration for a domain.
 *
 * This operation does not delete the S3 table created by the PutDataExportConfiguration operation.
 *
 * To temporarily disable export without deleting the configuration, use the PutDataExportConfiguration operation with the `--no-enable-export` flag instead. This allows you to re-enable export for the same domain using the `--enable-export` flag without deleting S3 table.
 */
export const deleteDataExportConfiguration: API.OperationMethod<
  DeleteDataExportConfigurationInput,
  DeleteDataExportConfigurationOutput,
  DeleteDataExportConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(315, __c39, 3) as any as S.Schema<DeleteDataExportConfigurationInput>,
  output: __S(70, __c8, 6) as any as S.Schema<DeleteDataExportConfigurationOutput>,
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
  operationName: "DeleteDataExportConfiguration",
}));

export type DeleteDataProductError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a data product in Amazon DataZone.
 *
 * Prerequisites:
 *
 * - The data product must exist and not be deleted or archived.
 *
 * - The user must have delete permissions for the data product.
 *
 * - Domain and project must be active.
 */
export const deleteDataProduct: API.OperationMethod<
  DeleteDataProductInput,
  DeleteDataProductOutput,
  DeleteDataProductError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(316, __c39, 4) as any as S.Schema<DeleteDataProductInput>,
  output: __S(38, __c4, 6) as any as S.Schema<DeleteDataProductOutput>,
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
  operationName: "DeleteDataProduct",
}));

export type DeleteDataSourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a data source in Amazon DataZone.
 */
export const deleteDataSource: API.OperationMethod<
  DeleteDataSourceInput,
  DeleteDataSourceOutput,
  DeleteDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(317, __c39, 5) as any as S.Schema<DeleteDataSourceInput>,
  output: __S(322, __c40, 2) as any as S.Schema<DeleteDataSourceOutput>,
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
  operationName: "DeleteDataSource",
}));

export type DeleteDomainError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a Amazon DataZone domain.
 */
export const deleteDomain: API.OperationMethod<
  DeleteDomainInput,
  DeleteDomainOutput,
  DeleteDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(323, __c40, 3) as any as S.Schema<DeleteDomainInput>,
  output: __S(324, __c40, 4) as any as S.Schema<DeleteDomainOutput>,
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
  operationName: "DeleteDomain",
}));

export type DeleteDomainUnitError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a domain unit.
 */
export const deleteDomainUnit: API.OperationMethod<
  DeleteDomainUnitInput,
  DeleteDomainUnitOutput,
  DeleteDomainUnitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(325, __c40, 5) as any as S.Schema<DeleteDomainUnitInput>,
  output: __S(38, __c4, 6) as any as S.Schema<DeleteDomainUnitOutput>,
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
  operationName: "DeleteDomainUnit",
}));

export type DeleteEnvironmentError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an environment in Amazon DataZone.
 */
export const deleteEnvironment: API.OperationMethod<
  DeleteEnvironmentInput,
  DeleteEnvironmentResponse,
  DeleteEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(326, __c40, 6) as any as S.Schema<DeleteEnvironmentInput>,
  output: __S(38, __c4, 6) as any as S.Schema<DeleteEnvironmentResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEnvironment",
}));

export type DeleteEnvironmentActionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an action for the environment, for example, deletes a console link for an analytics tool that is available in this environment.
 */
export const deleteEnvironmentAction: API.OperationMethod<
  DeleteEnvironmentActionInput,
  DeleteEnvironmentActionResponse,
  DeleteEnvironmentActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(327, __c40, 7) as any as S.Schema<DeleteEnvironmentActionInput>,
  output: __S(328, __c41, 0) as any as S.Schema<DeleteEnvironmentActionResponse>,
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
  operationName: "DeleteEnvironmentAction",
}));

export type DeleteEnvironmentBlueprintError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a blueprint in Amazon DataZone.
 */
export const deleteEnvironmentBlueprint: API.OperationMethod<
  DeleteEnvironmentBlueprintInput,
  DeleteEnvironmentBlueprintResponse,
  DeleteEnvironmentBlueprintError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(329, __c41, 1) as any as S.Schema<DeleteEnvironmentBlueprintInput>,
  output: __S(70, __c8, 6) as any as S.Schema<DeleteEnvironmentBlueprintResponse>,
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
  operationName: "DeleteEnvironmentBlueprint",
}));

export type DeleteEnvironmentBlueprintConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ValidationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes the blueprint configuration in Amazon DataZone.
 */
export const deleteEnvironmentBlueprintConfiguration: API.OperationMethod<
  DeleteEnvironmentBlueprintConfigurationInput,
  DeleteEnvironmentBlueprintConfigurationOutput,
  DeleteEnvironmentBlueprintConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(330, __c41, 2) as any as S.Schema<DeleteEnvironmentBlueprintConfigurationInput>,
  output: __S(70, __c8, 6) as any as S.Schema<DeleteEnvironmentBlueprintConfigurationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ValidationException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEnvironmentBlueprintConfiguration",
}));

export type DeleteEnvironmentProfileError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an environment profile in Amazon DataZone.
 */
export const deleteEnvironmentProfile: API.OperationMethod<
  DeleteEnvironmentProfileInput,
  DeleteEnvironmentProfileResponse,
  DeleteEnvironmentProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(331, __c41, 3) as any as S.Schema<DeleteEnvironmentProfileInput>,
  output: __S(70, __c8, 6) as any as S.Schema<DeleteEnvironmentProfileResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEnvironmentProfile",
}));

export type DeleteFormTypeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes and metadata form type in Amazon DataZone.
 *
 * Prerequisites:
 *
 * - The form type must exist in the domain.
 *
 * - The form type must not be in use by any asset types or assets.
 *
 * - The domain must be valid and accessible.
 *
 * - User must have delete permissions on the form type.
 *
 * - Any dependencies (such as linked asset types) must be removed first.
 */
export const deleteFormType: API.OperationMethod<
  DeleteFormTypeInput,
  DeleteFormTypeOutput,
  DeleteFormTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(332, __c41, 4) as any as S.Schema<DeleteFormTypeInput>,
  output: __S(38, __c4, 6) as any as S.Schema<DeleteFormTypeOutput>,
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
  operationName: "DeleteFormType",
}));

export type DeleteGlossaryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a business glossary in Amazon DataZone.
 *
 * Prerequisites:
 *
 * - The glossary must be in DISABLED state.
 *
 * - The glossary must not have any glossary terms associated with it.
 *
 * - The glossary must exist in the specified domain.
 *
 * - The caller must have the `datazone:DeleteGlossary` permission in the domain and glossary.
 *
 * - Glossary should not be linked to any active metadata forms.
 */
export const deleteGlossary: API.OperationMethod<
  DeleteGlossaryInput,
  DeleteGlossaryOutput,
  DeleteGlossaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(333, __c41, 5) as any as S.Schema<DeleteGlossaryInput>,
  output: __S(38, __c4, 6) as any as S.Schema<DeleteGlossaryOutput>,
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
  operationName: "DeleteGlossary",
}));

export type DeleteGlossaryTermError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a business glossary term in Amazon DataZone.
 *
 * Prerequisites:
 *
 * - Glossary term must exist and be active.
 *
 * - The term must not be linked to other assets or child terms.
 *
 * - Caller must have delete permissions in the domain/glossary.
 *
 * - Ensure all associations (such as to assets or parent terms) are removed before deletion.
 */
export const deleteGlossaryTerm: API.OperationMethod<
  DeleteGlossaryTermInput,
  DeleteGlossaryTermOutput,
  DeleteGlossaryTermError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(334, __c41, 6) as any as S.Schema<DeleteGlossaryTermInput>,
  output: __S(38, __c4, 6) as any as S.Schema<DeleteGlossaryTermOutput>,
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
  operationName: "DeleteGlossaryTerm",
}));

export type DeleteLineageEventError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified lineage event.
 */
export const deleteLineageEvent: API.OperationMethod<
  DeleteLineageEventInput,
  DeleteLineageEventOutput,
  DeleteLineageEventError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(335, __c41, 7) as any as S.Schema<DeleteLineageEventInput>,
  output: __S(336, __c42, 0) as any as S.Schema<DeleteLineageEventOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLineageEvent",
}));

export type DeleteListingError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a listing (a record of an asset at a given time).
 */
export const deleteListing: API.OperationMethod<
  DeleteListingInput,
  DeleteListingOutput,
  DeleteListingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(337, __c42, 1) as any as S.Schema<DeleteListingInput>,
  output: __S(38, __c4, 6) as any as S.Schema<DeleteListingOutput>,
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
  operationName: "DeleteListing",
}));

export type DeleteNotebookError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a notebook in Amazon SageMaker Unified Studio.
 */
export const deleteNotebook: API.OperationMethod<
  DeleteNotebookInput,
  DeleteNotebookOutput,
  DeleteNotebookError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(338, __c42, 2) as any as S.Schema<DeleteNotebookInput>,
  output: __S(38, __c4, 6) as any as S.Schema<DeleteNotebookOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteNotebook",
}));

export type DeleteProjectError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a project in Amazon DataZone.
 */
export const deleteProject: API.OperationMethod<
  DeleteProjectInput,
  DeleteProjectOutput,
  DeleteProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(339, __c42, 3) as any as S.Schema<DeleteProjectInput>,
  output: __S(38, __c4, 6) as any as S.Schema<DeleteProjectOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteProject",
}));

export type DeleteProjectMembershipError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes project membership in Amazon DataZone.
 */
export const deleteProjectMembership: API.OperationMethod<
  DeleteProjectMembershipInput,
  DeleteProjectMembershipOutput,
  DeleteProjectMembershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(340, __c42, 4) as any as S.Schema<DeleteProjectMembershipInput>,
  output: __S(38, __c4, 6) as any as S.Schema<DeleteProjectMembershipOutput>,
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
  operationName: "DeleteProjectMembership",
}));

export type DeleteProjectProfileError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a project profile.
 */
export const deleteProjectProfile: API.OperationMethod<
  DeleteProjectProfileInput,
  DeleteProjectProfileOutput,
  DeleteProjectProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(341, __c42, 5) as any as S.Schema<DeleteProjectProfileInput>,
  output: __S(38, __c4, 6) as any as S.Schema<DeleteProjectProfileOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteProjectProfile",
}));

export type DeleteRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a rule in Amazon DataZone. A rule is a formal agreement that enforces specific requirements across user workflows (e.g., publishing assets to the catalog, requesting subscriptions, creating projects) within the Amazon DataZone data portal. These rules help maintain consistency, ensure compliance, and uphold governance standards in data management processes. For instance, a metadata enforcement rule can specify the required information for creating a subscription request or publishing a data asset to the catalog, ensuring alignment with organizational standards.
 */
export const deleteRule: API.OperationMethod<
  DeleteRuleInput,
  DeleteRuleOutput,
  DeleteRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(342, __c42, 6) as any as S.Schema<DeleteRuleInput>,
  output: __S(38, __c4, 6) as any as S.Schema<DeleteRuleOutput>,
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
  operationName: "DeleteRule",
}));

export type DeleteSubscriptionGrantError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes and subscription grant in Amazon DataZone.
 */
export const deleteSubscriptionGrant: API.OperationMethod<
  DeleteSubscriptionGrantInput,
  DeleteSubscriptionGrantOutput,
  DeleteSubscriptionGrantError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(343, __c42, 7) as any as S.Schema<DeleteSubscriptionGrantInput>,
  output: __S(295, __c36, 7) as any as S.Schema<DeleteSubscriptionGrantOutput>,
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
  operationName: "DeleteSubscriptionGrant",
}));

export type DeleteSubscriptionRequestError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a subscription request in Amazon DataZone.
 */
export const deleteSubscriptionRequest: API.OperationMethod<
  DeleteSubscriptionRequestInput,
  DeleteSubscriptionRequestResponse,
  DeleteSubscriptionRequestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(344, __c43, 0) as any as S.Schema<DeleteSubscriptionRequestInput>,
  output: __S(70, __c8, 6) as any as S.Schema<DeleteSubscriptionRequestResponse>,
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
  operationName: "DeleteSubscriptionRequest",
}));

export type DeleteSubscriptionTargetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a subscription target in Amazon DataZone.
 */
export const deleteSubscriptionTarget: API.OperationMethod<
  DeleteSubscriptionTargetInput,
  DeleteSubscriptionTargetResponse,
  DeleteSubscriptionTargetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(345, __c43, 1) as any as S.Schema<DeleteSubscriptionTargetInput>,
  output: __S(70, __c8, 6) as any as S.Schema<DeleteSubscriptionTargetResponse>,
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
  operationName: "DeleteSubscriptionTarget",
}));

export type DeleteTimeSeriesDataPointsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified time series form for the specified asset.
 */
export const deleteTimeSeriesDataPoints: API.OperationMethod<
  DeleteTimeSeriesDataPointsInput,
  DeleteTimeSeriesDataPointsOutput,
  DeleteTimeSeriesDataPointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(346, __c43, 2) as any as S.Schema<DeleteTimeSeriesDataPointsInput>,
  output: __S(70, __c8, 6) as any as S.Schema<DeleteTimeSeriesDataPointsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTimeSeriesDataPoints",
}));

export type DisassociateEnvironmentRoleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates the environment role in Amazon DataZone.
 */
export const disassociateEnvironmentRole: API.OperationMethod<
  DisassociateEnvironmentRoleInput,
  DisassociateEnvironmentRoleOutput,
  DisassociateEnvironmentRoleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(347, __c43, 3) as any as S.Schema<DisassociateEnvironmentRoleInput>,
  output: __S(70, __c8, 6) as any as S.Schema<DisassociateEnvironmentRoleOutput>,
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
  operationName: "DisassociateEnvironmentRole",
}));

export type DisassociateGovernedTermsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates restricted terms from an asset.
 */
export const disassociateGovernedTerms: API.OperationMethod<
  DisassociateGovernedTermsInput,
  DisassociateGovernedTermsOutput,
  DisassociateGovernedTermsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(348, __c43, 4) as any as S.Schema<DisassociateGovernedTermsInput>,
  output: __S(328, __c41, 0) as any as S.Schema<DisassociateGovernedTermsOutput>,
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
  operationName: "DisassociateGovernedTerms",
}));

export type GetAccountPoolError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the details of the account pool.
 */
export const getAccountPool: API.OperationMethod<
  GetAccountPoolInput,
  GetAccountPoolOutput,
  GetAccountPoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(349, __c43, 5) as any as S.Schema<GetAccountPoolInput>,
  output: __S(78, __c9, 6) as any as S.Schema<GetAccountPoolOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccountPool",
}));

export type GetAssetError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets an Amazon DataZone asset.
 *
 * An asset is the fundamental building block in Amazon DataZone, representing any data resource that needs to be cataloged and managed. It can take many forms, from Amazon S3 buckets and database tables to dashboards and machine learning models. Each asset contains comprehensive metadata about the resource, including its location, schema, ownership, and lineage information. Assets are essential for organizing and managing data resources across an organization, making them discoverable and usable while maintaining proper governance.
 *
 * Before using the Amazon DataZone GetAsset command, ensure the following prerequisites are met:
 *
 * - Domain identifier must exist and be valid
 *
 * - Asset identifier must exist
 *
 * - User must have the required permissions to perform the action
 */
export const getAsset: API.OperationMethod<
  GetAssetInput,
  GetAssetOutput,
  GetAssetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(350, __c43, 6) as any as S.Schema<GetAssetInput>,
  output: __S(351, __c43, 7) as any as S.Schema<GetAssetOutput>,
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
}));

export type GetAssetFilterError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets an asset filter.
 *
 * Prerequisites:
 *
 * - Domain (`--domain-identifier`), asset (`--asset-identifier`), and filter (`--identifier`) must all exist.
 *
 * - The asset filter should not have been deleted.
 *
 * - The asset must still exist (since the filter is linked to it).
 */
export const getAssetFilter: API.OperationMethod<
  GetAssetFilterInput,
  GetAssetFilterOutput,
  GetAssetFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(352, __c44, 0) as any as S.Schema<GetAssetFilterInput>,
  output: __S(97, __c12, 1) as any as S.Schema<GetAssetFilterOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAssetFilter",
}));

export type GetAssetTypeError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets an Amazon DataZone asset type.
 *
 * Asset types define the categories and characteristics of different kinds of data assets within Amazon DataZone.. They determine what metadata fields are required, what operations are possible, and how the asset integrates with other Amazon Web Services services. Asset types can range from built-in types like Amazon S3 buckets and Amazon Web Services Glue tables to custom types defined for specific organizational needs. Understanding asset types is crucial for properly organizing and managing different kinds of data resources.
 *
 * Prerequisites:
 *
 * - The asset type with identifier must exist in the domain. ResourceNotFoundException.
 *
 * - You must have the GetAssetType permission.
 *
 * - Ensure the domain-identifier value is correct and accessible.
 */
export const getAssetType: API.OperationMethod<
  GetAssetTypeInput,
  GetAssetTypeOutput,
  GetAssetTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(353, __c44, 1) as any as S.Schema<GetAssetTypeInput>,
  output: __S(354, __c44, 2) as any as S.Schema<GetAssetTypeOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAssetType",
}));

export type GetConnectionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a connection. In Amazon DataZone, a connection enables you to connect your resources (domains, projects, and environments) to external resources and services.
 */
export const getConnection: API.OperationMethod<
  GetConnectionInput,
  GetConnectionOutput,
  GetConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(355, __c44, 3) as any as S.Schema<GetConnectionInput>,
  output: __S(357, __c44, 5) as any as S.Schema<GetConnectionOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConnection",
}));

export type GetDataExportConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets data export configuration details.
 */
export const getDataExportConfiguration: API.OperationMethod<
  GetDataExportConfigurationInput,
  GetDataExportConfigurationOutput,
  GetDataExportConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(358, __c44, 6) as any as S.Schema<GetDataExportConfigurationInput>,
  output: __S(360, __c45, 0) as any as S.Schema<GetDataExportConfigurationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDataExportConfiguration",
}));

export type GetDataProductError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the data product.
 *
 * Prerequisites:
 *
 * - The data product ID must exist.
 *
 * - The domain must be valid and accessible.
 *
 * - User must have read or discovery permissions for the data product.
 */
export const getDataProduct: API.OperationMethod<
  GetDataProductInput,
  GetDataProductOutput,
  GetDataProductError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(361, __c45, 1) as any as S.Schema<GetDataProductInput>,
  output: __S(167, __c20, 7) as any as S.Schema<GetDataProductOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDataProduct",
}));

export type GetDataSourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets an Amazon DataZone data source.
 */
export const getDataSource: API.OperationMethod<
  GetDataSourceInput,
  GetDataSourceOutput,
  GetDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(362, __c45, 2) as any as S.Schema<GetDataSourceInput>,
  output: __S(363, __c45, 3) as any as S.Schema<GetDataSourceOutput>,
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
  operationName: "GetDataSource",
}));

export type GetDataSourceRunError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets an Amazon DataZone data source run.
 */
export const getDataSourceRun: API.OperationMethod<
  GetDataSourceRunInput,
  GetDataSourceRunOutput,
  GetDataSourceRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(364, __c45, 4) as any as S.Schema<GetDataSourceRunInput>,
  output: __S(367, __c45, 7) as any as S.Schema<GetDataSourceRunOutput>,
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
  operationName: "GetDataSourceRun",
}));

export type GetDomainError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets an Amazon DataZone domain.
 */
export const getDomain: API.OperationMethod<
  GetDomainInput,
  GetDomainOutput,
  GetDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(368, __c46, 0) as any as S.Schema<GetDomainInput>,
  output: __S(372, __c46, 4) as any as S.Schema<GetDomainOutput>,
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
  operationName: "GetDomain",
}));

export type GetDomainUnitError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the details of the specified domain unit.
 */
export const getDomainUnit: API.OperationMethod<
  GetDomainUnitInput,
  GetDomainUnitOutput,
  GetDomainUnitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(373, __c46, 5) as any as S.Schema<GetDomainUnitInput>,
  output: __S(374, __c46, 6) as any as S.Schema<GetDomainUnitOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDomainUnit",
}));

export type GetEnvironmentError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets an Amazon DataZone environment.
 */
export const getEnvironment: API.OperationMethod<
  GetEnvironmentInput,
  GetEnvironmentOutput,
  GetEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(375, __c46, 7) as any as S.Schema<GetEnvironmentInput>,
  output: __S(217, __c27, 1) as any as S.Schema<GetEnvironmentOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEnvironment",
}));

export type GetEnvironmentActionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the specified environment action.
 */
export const getEnvironmentAction: API.OperationMethod<
  GetEnvironmentActionInput,
  GetEnvironmentActionOutput,
  GetEnvironmentActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(376, __c47, 0) as any as S.Schema<GetEnvironmentActionInput>,
  output: __S(221, __c27, 5) as any as S.Schema<GetEnvironmentActionOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEnvironmentAction",
}));

export type GetEnvironmentBlueprintError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets an Amazon DataZone blueprint.
 */
export const getEnvironmentBlueprint: API.OperationMethod<
  GetEnvironmentBlueprintInput,
  GetEnvironmentBlueprintOutput,
  GetEnvironmentBlueprintError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(377, __c47, 1) as any as S.Schema<GetEnvironmentBlueprintInput>,
  output: __S(223, __c27, 7) as any as S.Schema<GetEnvironmentBlueprintOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEnvironmentBlueprint",
}));

export type GetEnvironmentBlueprintConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets the blueprint configuration in Amazon DataZone.
 */
export const getEnvironmentBlueprintConfiguration: API.OperationMethod<
  GetEnvironmentBlueprintConfigurationInput,
  GetEnvironmentBlueprintConfigurationOutput,
  GetEnvironmentBlueprintConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(378, __c47, 2) as any as S.Schema<GetEnvironmentBlueprintConfigurationInput>,
  output: __S(385, __c48, 1) as any as S.Schema<GetEnvironmentBlueprintConfigurationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEnvironmentBlueprintConfiguration",
}));

export type GetEnvironmentCredentialsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the credentials of an environment in Amazon DataZone.
 */
export const getEnvironmentCredentials: API.OperationMethod<
  GetEnvironmentCredentialsInput,
  GetEnvironmentCredentialsOutput,
  GetEnvironmentCredentialsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(386, __c48, 2) as any as S.Schema<GetEnvironmentCredentialsInput>,
  output: __S(387, __c48, 3) as any as S.Schema<GetEnvironmentCredentialsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEnvironmentCredentials",
}));

export type GetEnvironmentProfileError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets an evinronment profile in Amazon DataZone.
 */
export const getEnvironmentProfile: API.OperationMethod<
  GetEnvironmentProfileInput,
  GetEnvironmentProfileOutput,
  GetEnvironmentProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(388, __c48, 4) as any as S.Schema<GetEnvironmentProfileInput>,
  output: __S(225, __c28, 1) as any as S.Schema<GetEnvironmentProfileOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEnvironmentProfile",
}));

export type GetFormTypeError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a metadata form type in Amazon DataZone.
 *
 * Form types define the structure and validation rules for collecting metadata about assets in Amazon DataZone. They act as templates that ensure consistent metadata capture across similar types of assets, while allowing for customization to meet specific organizational needs. Form types can include required fields, validation rules, and dependencies, helping maintain high-quality metadata that makes data assets more discoverable and usable.
 *
 * - The form type with the specified identifier must exist in the given domain.
 *
 * - The domain must be valid and active.
 *
 * - User must have permission on the form type.
 *
 * - The form type should not be deleted or in an invalid state.
 *
 * One use case for this API is to determine whether a form field is indexed for search.
 *
 * A searchable field will be annotated with `@amazon.datazone#searchable`. By default, searchable fields are indexed for semantic search, where related query terms will match the attribute value even if they are not stemmed or keyword matches. If a field is indexed technical identifier search, it will be annotated with `@amazon.datazone#searchable(modes:["TECHNICAL"])`. If a field is indexed for lexical search (supports stemmed and prefix matches but not semantic matches), it will be annotated with `@amazon.datazone#searchable(modes:["LEXICAL"])`.
 *
 * A field storing glossary term IDs (which is filterable) will be annotated with `@amazon.datazone#glossaryterm("${glossaryId}")`.
 */
export const getFormType: API.OperationMethod<
  GetFormTypeInput,
  GetFormTypeOutput,
  GetFormTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(389, __c48, 5) as any as S.Schema<GetFormTypeInput>,
  output: __S(392, __c49, 0) as any as S.Schema<GetFormTypeOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFormType",
}));

export type GetGlossaryError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a business glossary in Amazon DataZone.
 *
 * Prerequisites:
 *
 * - The specified glossary ID must exist and be associated with the given domain.
 *
 * - The caller must have the `datazone:GetGlossary` permission on the domain.
 */
export const getGlossary: API.OperationMethod<
  GetGlossaryInput,
  GetGlossaryOutput,
  GetGlossaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(393, __c49, 1) as any as S.Schema<GetGlossaryInput>,
  output: __S(394, __c49, 2) as any as S.Schema<GetGlossaryOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetGlossary",
}));

export type GetGlossaryTermError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a business glossary term in Amazon DataZone.
 *
 * Prerequisites:
 *
 * - Glossary term with identifier must exist in the domain.
 *
 * - User must have permission on the glossary term.
 *
 * - Domain must be accessible and active.
 */
export const getGlossaryTerm: API.OperationMethod<
  GetGlossaryTermInput,
  GetGlossaryTermOutput,
  GetGlossaryTermError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(395, __c49, 3) as any as S.Schema<GetGlossaryTermInput>,
  output: __S(396, __c49, 4) as any as S.Schema<GetGlossaryTermOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetGlossaryTerm",
}));

export type GetGroupProfileError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets a group profile in Amazon DataZone.
 */
export const getGroupProfile: API.OperationMethod<
  GetGroupProfileInput,
  GetGroupProfileOutput,
  GetGroupProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(397, __c49, 5) as any as S.Schema<GetGroupProfileInput>,
  output: __S(235, __c29, 3) as any as S.Schema<GetGroupProfileOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetGroupProfile",
}));

export type GetIamPortalLoginUrlError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the data portal URL for the specified Amazon DataZone domain.
 */
export const getIamPortalLoginUrl: API.OperationMethod<
  GetIamPortalLoginUrlInput,
  GetIamPortalLoginUrlOutput,
  GetIamPortalLoginUrlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(398, __c49, 6) as any as S.Schema<GetIamPortalLoginUrlInput>,
  output: __S(399, __c49, 7) as any as S.Schema<GetIamPortalLoginUrlOutput>,
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
  operationName: "GetIamPortalLoginUrl",
}));

export type GetJobRunError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The details of the job run.
 */
export const getJobRun: API.OperationMethod<
  GetJobRunInput,
  GetJobRunOutput,
  GetJobRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(400, __c50, 0) as any as S.Schema<GetJobRunInput>,
  output: __S(405, __c50, 5) as any as S.Schema<GetJobRunOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetJobRun",
}));

export type GetLineageEventError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the lineage event.
 */
export const getLineageEvent: API.OperationMethod<
  GetLineageEventInput,
  GetLineageEventOutput,
  GetLineageEventError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(406, __c50, 6) as any as S.Schema<GetLineageEventInput>,
  output: __S(407, __c50, 7) as any as S.Schema<GetLineageEventOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLineageEvent",
}));

export type GetLineageNodeError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the data lineage node.
 */
export const getLineageNode: API.OperationMethod<
  GetLineageNodeInput,
  GetLineageNodeOutput,
  GetLineageNodeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(408, __c51, 0) as any as S.Schema<GetLineageNodeInput>,
  output: __S(411, __c51, 3) as any as S.Schema<GetLineageNodeOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLineageNode",
}));

export type GetListingError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a listing (a record of an asset at a given time). If you specify a listing version, only details that are specific to that version are returned.
 */
export const getListing: API.OperationMethod<
  GetListingInput,
  GetListingOutput,
  GetListingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(412, __c51, 4) as any as S.Schema<GetListingInput>,
  output: __S(418, __c52, 2) as any as S.Schema<GetListingOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetListing",
}));

export type GetMetadataGenerationRunError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a metadata generation run in Amazon DataZone.
 *
 * Prerequisites:
 *
 * - Valid domain and run identifier.
 *
 * - The metadata generation run must exist.
 *
 * - User must have read access to the metadata run.
 */
export const getMetadataGenerationRun: API.OperationMethod<
  GetMetadataGenerationRunInput,
  GetMetadataGenerationRunOutput,
  GetMetadataGenerationRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(419, __c52, 3) as any as S.Schema<GetMetadataGenerationRunInput>,
  output: __S(423, __c52, 7) as any as S.Schema<GetMetadataGenerationRunOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMetadataGenerationRun",
}));

export type GetNotebookError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the details of a notebook in Amazon SageMaker Unified Studio.
 */
export const getNotebook: API.OperationMethod<
  GetNotebookInput,
  GetNotebookOutput,
  GetNotebookError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(424, __c53, 0) as any as S.Schema<GetNotebookInput>,
  output: __S(245, __c30, 5) as any as S.Schema<GetNotebookOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetNotebook",
}));

export type GetNotebookExportError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the details of a notebook export in Amazon SageMaker Unified Studio.
 */
export const getNotebookExport: API.OperationMethod<
  GetNotebookExportInput,
  GetNotebookExportOutput,
  GetNotebookExportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(425, __c53, 1) as any as S.Schema<GetNotebookExportInput>,
  output: __S(428, __c53, 4) as any as S.Schema<GetNotebookExportOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetNotebookExport",
}));

export type GetNotebookRunError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the details of a notebook run in Amazon SageMaker Unified Studio.
 */
export const getNotebookRun: API.OperationMethod<
  GetNotebookRunInput,
  GetNotebookRunOutput,
  GetNotebookRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(429, __c53, 5) as any as S.Schema<GetNotebookRunInput>,
  output: __S(436, __c54, 4) as any as S.Schema<GetNotebookRunOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetNotebookRun",
}));

export type GetProjectError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a project in Amazon DataZone.
 */
export const getProject: API.OperationMethod<
  GetProjectInput,
  GetProjectOutput,
  GetProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(437, __c54, 5) as any as S.Schema<GetProjectInput>,
  output: __S(260, __c32, 4) as any as S.Schema<GetProjectOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetProject",
}));

export type GetProjectProfileError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The details of the project profile.
 */
export const getProjectProfile: API.OperationMethod<
  GetProjectProfileInput,
  GetProjectProfileOutput,
  GetProjectProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(438, __c54, 6) as any as S.Schema<GetProjectProfileInput>,
  output: __S(439, __c54, 7) as any as S.Schema<GetProjectProfileOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetProjectProfile",
}));

export type GetRuleError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the details of a rule in Amazon DataZone. A rule is a formal agreement that enforces specific requirements across user workflows (e.g., publishing assets to the catalog, requesting subscriptions, creating projects) within the Amazon DataZone data portal. These rules help maintain consistency, ensure compliance, and uphold governance standards in data management processes. For instance, a metadata enforcement rule can specify the required information for creating a subscription request or publishing a data asset to the catalog, ensuring alignment with organizational standards.
 */
export const getRule: API.OperationMethod<
  GetRuleInput,
  GetRuleOutput,
  GetRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(440, __c55, 0) as any as S.Schema<GetRuleInput>,
  output: __S(441, __c55, 1) as any as S.Schema<GetRuleOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRule",
}));

export type GetSubscriptionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a subscription in Amazon DataZone.
 */
export const getSubscription: API.OperationMethod<
  GetSubscriptionInput,
  GetSubscriptionOutput,
  GetSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(442, __c55, 2) as any as S.Schema<GetSubscriptionInput>,
  output: __S(72, __c9, 0) as any as S.Schema<GetSubscriptionOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSubscription",
}));

export type GetSubscriptionGrantError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the subscription grant in Amazon DataZone.
 */
export const getSubscriptionGrant: API.OperationMethod<
  GetSubscriptionGrantInput,
  GetSubscriptionGrantOutput,
  GetSubscriptionGrantError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(443, __c55, 3) as any as S.Schema<GetSubscriptionGrantInput>,
  output: __S(295, __c36, 7) as any as S.Schema<GetSubscriptionGrantOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSubscriptionGrant",
}));

export type GetSubscriptionRequestDetailsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the details of the specified subscription request.
 */
export const getSubscriptionRequestDetails: API.OperationMethod<
  GetSubscriptionRequestDetailsInput,
  GetSubscriptionRequestDetailsOutput,
  GetSubscriptionRequestDetailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(444, __c55, 4) as any as S.Schema<GetSubscriptionRequestDetailsInput>,
  output: __S(33, __c4, 1) as any as S.Schema<GetSubscriptionRequestDetailsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSubscriptionRequestDetails",
}));

export type GetSubscriptionTargetError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the subscription target in Amazon DataZone.
 */
export const getSubscriptionTarget: API.OperationMethod<
  GetSubscriptionTargetInput,
  GetSubscriptionTargetOutput,
  GetSubscriptionTargetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(445, __c55, 5) as any as S.Schema<GetSubscriptionTargetInput>,
  output: __S(306, __c38, 2) as any as S.Schema<GetSubscriptionTargetOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSubscriptionTarget",
}));

export type GetTimeSeriesDataPointError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the existing data point for the asset.
 */
export const getTimeSeriesDataPoint: API.OperationMethod<
  GetTimeSeriesDataPointInput,
  GetTimeSeriesDataPointOutput,
  GetTimeSeriesDataPointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(446, __c55, 6) as any as S.Schema<GetTimeSeriesDataPointInput>,
  output: __S(448, __c56, 0) as any as S.Schema<GetTimeSeriesDataPointOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTimeSeriesDataPoint",
}));

export type GetUserProfileError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets a user profile in Amazon DataZone.
 */
export const getUserProfile: API.OperationMethod<
  GetUserProfileInput,
  GetUserProfileOutput,
  GetUserProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(449, __c56, 1) as any as S.Schema<GetUserProfileInput>,
  output: __S(308, __c38, 4) as any as S.Schema<GetUserProfileOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetUserProfile",
}));

export type ListAccountPoolsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists existing account pools.
 */
export const listAccountPools: API.PaginatedOperationMethod<
  ListAccountPoolsInput,
  ListAccountPoolsOutput,
  ListAccountPoolsError,
  Credentials | HttpClient.HttpClient,
  AccountPoolSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(450, __c56, 2) as any as S.Schema<ListAccountPoolsInput>,
  output: __S(453, __c56, 5) as any as S.Schema<ListAccountPoolsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccountPools",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAccountsInAccountPoolError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the accounts in the specified account pool.
 */
export const listAccountsInAccountPool: API.PaginatedOperationMethod<
  ListAccountsInAccountPoolInput,
  ListAccountsInAccountPoolOutput,
  ListAccountsInAccountPoolError,
  Credentials | HttpClient.HttpClient,
  AccountInfo
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(454, __c56, 6) as any as S.Schema<ListAccountsInAccountPoolInput>,
  output: __S(455, __c56, 7) as any as S.Schema<ListAccountsInAccountPoolOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccountsInAccountPool",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAssetFiltersError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists asset filters.
 *
 * Prerequisites:
 *
 * - A valid domain and asset must exist.
 *
 * - The asset must have at least one filter created to return results.
 */
export const listAssetFilters: API.PaginatedOperationMethod<
  ListAssetFiltersInput,
  ListAssetFiltersOutput,
  ListAssetFiltersError,
  Credentials | HttpClient.HttpClient,
  AssetFilterSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(456, __c57, 0) as any as S.Schema<ListAssetFiltersInput>,
  output: __S(459, __c57, 3) as any as S.Schema<ListAssetFiltersOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssetFilters",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAssetRevisionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the revisions for the asset.
 *
 * Prerequisites:
 *
 * - The asset must exist in the domain.
 *
 * - There must be at least one revision of the asset (which happens automatically after creation).
 *
 * - The domain must be valid and active.
 *
 * - User must have permissions on the asset and domain.
 */
export const listAssetRevisions: API.PaginatedOperationMethod<
  ListAssetRevisionsInput,
  ListAssetRevisionsOutput,
  ListAssetRevisionsError,
  Credentials | HttpClient.HttpClient,
  AssetRevision
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(460, __c57, 4) as any as S.Schema<ListAssetRevisionsInput>,
  output: __S(463, __c57, 7) as any as S.Schema<ListAssetRevisionsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssetRevisions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListConnectionsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists connections. In Amazon DataZone, a connection enables you to connect your resources (domains, projects, and environments) to external resources and services.
 */
export const listConnections: API.PaginatedOperationMethod<
  ListConnectionsInput,
  ListConnectionsOutput,
  ListConnectionsError,
  Credentials | HttpClient.HttpClient,
  ConnectionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(464, __c58, 0) as any as S.Schema<ListConnectionsInput>,
  output: __S(467, __c58, 3) as any as S.Schema<ListConnectionsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConnections",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDataProductRevisionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists data product revisions.
 *
 * Prerequisites:
 *
 * - The data product ID must exist within the domain.
 *
 * - User must have view permissions on the data product.
 *
 * - The domain must be in a valid and accessible state.
 */
export const listDataProductRevisions: API.PaginatedOperationMethod<
  ListDataProductRevisionsInput,
  ListDataProductRevisionsOutput,
  ListDataProductRevisionsError,
  Credentials | HttpClient.HttpClient,
  DataProductRevision
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(468, __c58, 4) as any as S.Schema<ListDataProductRevisionsInput>,
  output: __S(471, __c58, 7) as any as S.Schema<ListDataProductRevisionsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDataProductRevisions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDataSourceRunActivitiesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists data source run activities.
 */
export const listDataSourceRunActivities: API.PaginatedOperationMethod<
  ListDataSourceRunActivitiesInput,
  ListDataSourceRunActivitiesOutput,
  ListDataSourceRunActivitiesError,
  Credentials | HttpClient.HttpClient,
  DataSourceRunActivity
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(472, __c59, 0) as any as S.Schema<ListDataSourceRunActivitiesInput>,
  output: __S(476, __c59, 4) as any as S.Schema<ListDataSourceRunActivitiesOutput>,
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
  operationName: "ListDataSourceRunActivities",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDataSourceRunsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists data source runs in Amazon DataZone.
 */
export const listDataSourceRuns: API.PaginatedOperationMethod<
  ListDataSourceRunsInput,
  ListDataSourceRunsOutput,
  ListDataSourceRunsError,
  Credentials | HttpClient.HttpClient,
  DataSourceRunSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(477, __c59, 5) as any as S.Schema<ListDataSourceRunsInput>,
  output: __S(480, __c60, 0) as any as S.Schema<ListDataSourceRunsOutput>,
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
  operationName: "ListDataSourceRuns",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDataSourcesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists data sources in Amazon DataZone.
 */
export const listDataSources: API.PaginatedOperationMethod<
  ListDataSourcesInput,
  ListDataSourcesOutput,
  ListDataSourcesError,
  Credentials | HttpClient.HttpClient,
  DataSourceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(481, __c60, 1) as any as S.Schema<ListDataSourcesInput>,
  output: __S(484, __c60, 4) as any as S.Schema<ListDataSourcesOutput>,
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
  operationName: "ListDataSources",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDomainsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists Amazon DataZone domains.
 */
export const listDomains: API.PaginatedOperationMethod<
  ListDomainsInput,
  ListDomainsOutput,
  ListDomainsError,
  Credentials | HttpClient.HttpClient,
  DomainSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(485, __c60, 5) as any as S.Schema<ListDomainsInput>,
  output: __S(488, __c61, 0) as any as S.Schema<ListDomainsOutput>,
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
  operationName: "ListDomains",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDomainUnitsForParentError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists child domain units for the specified parent domain unit.
 */
export const listDomainUnitsForParent: API.PaginatedOperationMethod<
  ListDomainUnitsForParentInput,
  ListDomainUnitsForParentOutput,
  ListDomainUnitsForParentError,
  Credentials | HttpClient.HttpClient,
  DomainUnitSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(489, __c61, 1) as any as S.Schema<ListDomainUnitsForParentInput>,
  output: __S(492, __c61, 4) as any as S.Schema<ListDomainUnitsForParentOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDomainUnitsForParent",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListEntityOwnersError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the entity (domain units) owners.
 */
export const listEntityOwners: API.PaginatedOperationMethod<
  ListEntityOwnersInput,
  ListEntityOwnersOutput,
  ListEntityOwnersError,
  Credentials | HttpClient.HttpClient,
  OwnerPropertiesOutput
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(493, __c61, 5) as any as S.Schema<ListEntityOwnersInput>,
  output: __S(497, __c62, 1) as any as S.Schema<ListEntityOwnersOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEntityOwners",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "owners",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListEnvironmentActionsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists existing environment actions.
 */
export const listEnvironmentActions: API.PaginatedOperationMethod<
  ListEnvironmentActionsInput,
  ListEnvironmentActionsOutput,
  ListEnvironmentActionsError,
  Credentials | HttpClient.HttpClient,
  EnvironmentActionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(498, __c62, 2) as any as S.Schema<ListEnvironmentActionsInput>,
  output: __S(501, __c62, 5) as any as S.Schema<ListEnvironmentActionsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEnvironmentActions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListEnvironmentBlueprintConfigurationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists blueprint configurations for a Amazon DataZone environment.
 */
export const listEnvironmentBlueprintConfigurations: API.PaginatedOperationMethod<
  ListEnvironmentBlueprintConfigurationsInput,
  ListEnvironmentBlueprintConfigurationsOutput,
  ListEnvironmentBlueprintConfigurationsError,
  Credentials | HttpClient.HttpClient,
  EnvironmentBlueprintConfigurationItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(502, __c62, 6) as any as S.Schema<ListEnvironmentBlueprintConfigurationsInput>,
  output: __S(504, __c63, 0) as any as S.Schema<ListEnvironmentBlueprintConfigurationsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEnvironmentBlueprintConfigurations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListEnvironmentBlueprintsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists blueprints in an Amazon DataZone environment.
 */
export const listEnvironmentBlueprints: API.PaginatedOperationMethod<
  ListEnvironmentBlueprintsInput,
  ListEnvironmentBlueprintsOutput,
  ListEnvironmentBlueprintsError,
  Credentials | HttpClient.HttpClient,
  EnvironmentBlueprintSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(505, __c63, 1) as any as S.Schema<ListEnvironmentBlueprintsInput>,
  output: __S(508, __c63, 4) as any as S.Schema<ListEnvironmentBlueprintsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEnvironmentBlueprints",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListEnvironmentProfilesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists Amazon DataZone environment profiles.
 */
export const listEnvironmentProfiles: API.PaginatedOperationMethod<
  ListEnvironmentProfilesInput,
  ListEnvironmentProfilesOutput,
  ListEnvironmentProfilesError,
  Credentials | HttpClient.HttpClient,
  EnvironmentProfileSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(509, __c63, 5) as any as S.Schema<ListEnvironmentProfilesInput>,
  output: __S(512, __c64, 0) as any as S.Schema<ListEnvironmentProfilesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEnvironmentProfiles",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListEnvironmentsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Lists Amazon DataZone environments.
 */
export const listEnvironments: API.PaginatedOperationMethod<
  ListEnvironmentsInput,
  ListEnvironmentsOutput,
  ListEnvironmentsError,
  Credentials | HttpClient.HttpClient,
  EnvironmentSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(513, __c64, 1) as any as S.Schema<ListEnvironmentsInput>,
  output: __S(516, __c64, 4) as any as S.Schema<ListEnvironmentsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEnvironments",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListJobRunsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists job runs.
 */
export const listJobRuns: API.PaginatedOperationMethod<
  ListJobRunsInput,
  ListJobRunsOutput,
  ListJobRunsError,
  Credentials | HttpClient.HttpClient,
  JobRunSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(517, __c64, 5) as any as S.Schema<ListJobRunsInput>,
  output: __S(520, __c65, 0) as any as S.Schema<ListJobRunsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListJobRuns",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListLineageEventsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists lineage events.
 */
export const listLineageEvents: API.PaginatedOperationMethod<
  ListLineageEventsInput,
  ListLineageEventsOutput,
  ListLineageEventsError,
  Credentials | HttpClient.HttpClient,
  LineageEventSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(521, __c65, 1) as any as S.Schema<ListLineageEventsInput>,
  output: __S(528, __c66, 0) as any as S.Schema<ListLineageEventsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLineageEvents",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListLineageNodeHistoryError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the history of the specified data lineage node.
 */
export const listLineageNodeHistory: API.PaginatedOperationMethod<
  ListLineageNodeHistoryInput,
  ListLineageNodeHistoryOutput,
  ListLineageNodeHistoryError,
  Credentials | HttpClient.HttpClient,
  LineageNodeSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(529, __c66, 1) as any as S.Schema<ListLineageNodeHistoryInput>,
  output: __S(532, __c66, 4) as any as S.Schema<ListLineageNodeHistoryOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLineageNodeHistory",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "nodes",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListMetadataGenerationRunsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all metadata generation runs.
 *
 * Metadata generation runs represent automated processes that leverage AI/ML capabilities to create or enhance asset metadata at scale. This feature helps organizations maintain comprehensive and consistent metadata across large numbers of assets without manual intervention. It can automatically generate business descriptions, tags, and other metadata elements, significantly reducing the time and effort required for metadata management while improving consistency and completeness.
 *
 * Prerequisites:
 *
 * - Valid domain identifier.
 *
 * - User must have access to metadata generation runs in the domain.
 */
export const listMetadataGenerationRuns: API.PaginatedOperationMethod<
  ListMetadataGenerationRunsInput,
  ListMetadataGenerationRunsOutput,
  ListMetadataGenerationRunsError,
  Credentials | HttpClient.HttpClient,
  MetadataGenerationRunItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(533, __c66, 5) as any as S.Schema<ListMetadataGenerationRunsInput>,
  output: __S(536, __c67, 0) as any as S.Schema<ListMetadataGenerationRunsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMetadataGenerationRuns",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListNotebookRunsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists notebook runs in Amazon SageMaker Unified Studio.
 */
export const listNotebookRuns: API.PaginatedOperationMethod<
  ListNotebookRunsInput,
  ListNotebookRunsOutput,
  ListNotebookRunsError,
  Credentials | HttpClient.HttpClient,
  NotebookRunSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(537, __c67, 1) as any as S.Schema<ListNotebookRunsInput>,
  output: __S(540, __c67, 4) as any as S.Schema<ListNotebookRunsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNotebookRuns",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListNotebooksError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists notebooks in Amazon SageMaker Unified Studio.
 */
export const listNotebooks: API.PaginatedOperationMethod<
  ListNotebooksInput,
  ListNotebooksOutput,
  ListNotebooksError,
  Credentials | HttpClient.HttpClient,
  NotebookSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(541, __c67, 5) as any as S.Schema<ListNotebooksInput>,
  output: __S(544, __c68, 0) as any as S.Schema<ListNotebooksOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNotebooks",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListNotificationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists all Amazon DataZone notifications.
 */
export const listNotifications: API.PaginatedOperationMethod<
  ListNotificationsInput,
  ListNotificationsOutput,
  ListNotificationsError,
  Credentials | HttpClient.HttpClient,
  NotificationOutput
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(545, __c68, 1) as any as S.Schema<ListNotificationsInput>,
  output: __S(550, __c68, 6) as any as S.Schema<ListNotificationsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNotifications",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "notifications",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPolicyGrantsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists policy grants.
 */
export const listPolicyGrants: API.PaginatedOperationMethod<
  ListPolicyGrantsInput,
  ListPolicyGrantsOutput,
  ListPolicyGrantsError,
  Credentials | HttpClient.HttpClient,
  PolicyGrantMember
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(551, __c68, 7) as any as S.Schema<ListPolicyGrantsInput>,
  output: __S(554, __c69, 2) as any as S.Schema<ListPolicyGrantsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPolicyGrants",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "grantList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListProjectMembershipsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all members of the specified project.
 */
export const listProjectMemberships: API.PaginatedOperationMethod<
  ListProjectMembershipsInput,
  ListProjectMembershipsOutput,
  ListProjectMembershipsError,
  Credentials | HttpClient.HttpClient,
  ProjectMember
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(555, __c69, 3) as any as S.Schema<ListProjectMembershipsInput>,
  output: __S(561, __c70, 1) as any as S.Schema<ListProjectMembershipsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProjectMemberships",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "members",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListProjectProfilesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists project profiles.
 */
export const listProjectProfiles: API.PaginatedOperationMethod<
  ListProjectProfilesInput,
  ListProjectProfilesOutput,
  ListProjectProfilesError,
  Credentials | HttpClient.HttpClient,
  ProjectProfileSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(562, __c70, 2) as any as S.Schema<ListProjectProfilesInput>,
  output: __S(565, __c70, 5) as any as S.Schema<ListProjectProfilesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProjectProfiles",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListProjectsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Lists Amazon DataZone projects.
 */
export const listProjects: API.PaginatedOperationMethod<
  ListProjectsInput,
  ListProjectsOutput,
  ListProjectsError,
  Credentials | HttpClient.HttpClient,
  ProjectSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(566, __c70, 6) as any as S.Schema<ListProjectsInput>,
  output: __S(569, __c71, 1) as any as S.Schema<ListProjectsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProjects",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRulesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists existing rules. In Amazon DataZone, a rule is a formal agreement that enforces specific requirements across user workflows (e.g., publishing assets to the catalog, requesting subscriptions, creating projects) within the Amazon DataZone data portal. These rules help maintain consistency, ensure compliance, and uphold governance standards in data management processes. For instance, a metadata enforcement rule can specify the required information for creating a subscription request or publishing a data asset to the catalog, ensuring alignment with organizational standards.
 */
export const listRules: API.PaginatedOperationMethod<
  ListRulesInput,
  ListRulesOutput,
  ListRulesError,
  Credentials | HttpClient.HttpClient,
  RuleSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(570, __c71, 2) as any as S.Schema<ListRulesInput>,
  output: __S(573, __c71, 5) as any as S.Schema<ListRulesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRules",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSubscriptionGrantsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists subscription grants.
 */
export const listSubscriptionGrants: API.PaginatedOperationMethod<
  ListSubscriptionGrantsInput,
  ListSubscriptionGrantsOutput,
  ListSubscriptionGrantsError,
  Credentials | HttpClient.HttpClient,
  SubscriptionGrantSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(574, __c71, 6) as any as S.Schema<ListSubscriptionGrantsInput>,
  output: __S(577, __c72, 1) as any as S.Schema<ListSubscriptionGrantsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSubscriptionGrants",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSubscriptionRequestsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists Amazon DataZone subscription requests.
 */
export const listSubscriptionRequests: API.PaginatedOperationMethod<
  ListSubscriptionRequestsInput,
  ListSubscriptionRequestsOutput,
  ListSubscriptionRequestsError,
  Credentials | HttpClient.HttpClient,
  SubscriptionRequestSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(578, __c72, 2) as any as S.Schema<ListSubscriptionRequestsInput>,
  output: __S(583, __c72, 7) as any as S.Schema<ListSubscriptionRequestsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSubscriptionRequests",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSubscriptionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists subscriptions in Amazon DataZone.
 */
export const listSubscriptions: API.PaginatedOperationMethod<
  ListSubscriptionsInput,
  ListSubscriptionsOutput,
  ListSubscriptionsError,
  Credentials | HttpClient.HttpClient,
  SubscriptionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(584, __c73, 0) as any as S.Schema<ListSubscriptionsInput>,
  output: __S(586, __c73, 2) as any as S.Schema<ListSubscriptionsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSubscriptions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSubscriptionTargetsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists subscription targets in Amazon DataZone.
 */
export const listSubscriptionTargets: API.PaginatedOperationMethod<
  ListSubscriptionTargetsInput,
  ListSubscriptionTargetsOutput,
  ListSubscriptionTargetsError,
  Credentials | HttpClient.HttpClient,
  SubscriptionTargetSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(587, __c73, 3) as any as S.Schema<ListSubscriptionTargetsInput>,
  output: __S(589, __c73, 5) as any as S.Schema<ListSubscriptionTargetsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSubscriptionTargets",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists tags for the specified resource in Amazon DataZone.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(590, __c73, 6) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(591, __c73, 7) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListTimeSeriesDataPointsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists time series data points.
 */
export const listTimeSeriesDataPoints: API.PaginatedOperationMethod<
  ListTimeSeriesDataPointsInput,
  ListTimeSeriesDataPointsOutput,
  ListTimeSeriesDataPointsError,
  Credentials | HttpClient.HttpClient,
  TimeSeriesDataPointSummaryFormOutput
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(592, __c74, 0) as any as S.Schema<ListTimeSeriesDataPointsInput>,
  output: __S(593, __c74, 1) as any as S.Schema<ListTimeSeriesDataPointsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTimeSeriesDataPoints",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type PostLineageEventError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Posts a data lineage event.
 */
export const postLineageEvent: API.OperationMethod<
  PostLineageEventInput,
  PostLineageEventOutput,
  PostLineageEventError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(594, __c74, 2) as any as S.Schema<PostLineageEventInput>,
  output: __S(595, __c74, 3) as any as S.Schema<PostLineageEventOutput>,
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
  operationName: "PostLineageEvent",
}));

export type PostTimeSeriesDataPointsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Posts time series data points to Amazon DataZone for the specified asset.
 */
export const postTimeSeriesDataPoints: API.OperationMethod<
  PostTimeSeriesDataPointsInput,
  PostTimeSeriesDataPointsOutput,
  PostTimeSeriesDataPointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(598, __c74, 6) as any as S.Schema<PostTimeSeriesDataPointsInput>,
  output: __S(600, __c75, 0) as any as S.Schema<PostTimeSeriesDataPointsOutput>,
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
  operationName: "PostTimeSeriesDataPoints",
}));

export type PutDataExportConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates data export configuration details.
 *
 * If you want to temporarily disable export and later re-enable it for the same domain, use the `--no-enable-export` flag to disable and the `--enable-export` flag to re-enable. This preserves the configuration and allows you to re-enable export without deleting S3 table.
 *
 * You can enable asset metadata export for only one domain per account per Region. To enable export for a different domain, complete the following steps:
 *
 * - Delete the export configuration for the currently enabled domain using the DeleteDataExportConfiguration operation.
 *
 * - Delete the asset S3 table under the aws-sagemaker-catalog S3 table bucket. We recommend backing up the S3 table before deletion.
 *
 * - Call the PutDataExportConfiguration API to enable export for the new domain.
 */
export const putDataExportConfiguration: API.OperationMethod<
  PutDataExportConfigurationInput,
  PutDataExportConfigurationOutput,
  PutDataExportConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(601, __c75, 1) as any as S.Schema<PutDataExportConfigurationInput>,
  output: __S(70, __c8, 6) as any as S.Schema<PutDataExportConfigurationOutput>,
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
  operationName: "PutDataExportConfiguration",
}));

export type PutEnvironmentBlueprintConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Writes the configuration for the specified environment blueprint in Amazon DataZone.
 */
export const putEnvironmentBlueprintConfiguration: API.OperationMethod<
  PutEnvironmentBlueprintConfigurationInput,
  PutEnvironmentBlueprintConfigurationOutput,
  PutEnvironmentBlueprintConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(604, __c75, 4) as any as S.Schema<PutEnvironmentBlueprintConfigurationInput>,
  output: __S(385, __c48, 1) as any as S.Schema<PutEnvironmentBlueprintConfigurationOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutEnvironmentBlueprintConfiguration",
}));

export type QueryGraphError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Queries entities in the graph store.
 */
export const queryGraph: API.PaginatedOperationMethod<
  QueryGraphInput,
  QueryGraphOutput,
  QueryGraphError,
  Credentials | HttpClient.HttpClient,
  ResultItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(613, __c76, 5) as any as S.Schema<QueryGraphInput>,
  output: __S(617, __c77, 1) as any as S.Schema<QueryGraphOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "QueryGraph",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type RejectPredictionsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Rejects automatically generated business-friendly metadata for your Amazon DataZone assets.
 */
export const rejectPredictions: API.OperationMethod<
  RejectPredictionsInput,
  RejectPredictionsOutput,
  RejectPredictionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(621, __c77, 5) as any as S.Schema<RejectPredictionsInput>,
  output: __S(622, __c77, 6) as any as S.Schema<RejectPredictionsOutput>,
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
  operationName: "RejectPredictions",
}));

export type RejectSubscriptionRequestError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Rejects the specified subscription request.
 */
export const rejectSubscriptionRequest: API.OperationMethod<
  RejectSubscriptionRequestInput,
  RejectSubscriptionRequestOutput,
  RejectSubscriptionRequestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(623, __c77, 7) as any as S.Schema<RejectSubscriptionRequestInput>,
  output: __S(33, __c4, 1) as any as S.Schema<RejectSubscriptionRequestOutput>,
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
  operationName: "RejectSubscriptionRequest",
}));

export type RemoveEntityOwnerError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes an owner from an entity.
 */
export const removeEntityOwner: API.OperationMethod<
  RemoveEntityOwnerInput,
  RemoveEntityOwnerOutput,
  RemoveEntityOwnerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(624, __c78, 0) as any as S.Schema<RemoveEntityOwnerInput>,
  output: __S(38, __c4, 6) as any as S.Schema<RemoveEntityOwnerOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveEntityOwner",
}));

export type RemovePolicyGrantError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes a policy grant.
 */
export const removePolicyGrant: API.OperationMethod<
  RemovePolicyGrantInput,
  RemovePolicyGrantOutput,
  RemovePolicyGrantError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(625, __c78, 1) as any as S.Schema<RemovePolicyGrantInput>,
  output: __S(38, __c4, 6) as any as S.Schema<RemovePolicyGrantOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemovePolicyGrant",
}));

export type RevokeSubscriptionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Revokes a specified subscription in Amazon DataZone.
 */
export const revokeSubscription: API.OperationMethod<
  RevokeSubscriptionInput,
  RevokeSubscriptionOutput,
  RevokeSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(626, __c78, 2) as any as S.Schema<RevokeSubscriptionInput>,
  output: __S(72, __c9, 0) as any as S.Schema<RevokeSubscriptionOutput>,
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
  operationName: "RevokeSubscription",
}));

export type SearchError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Searches for assets in Amazon DataZone.
 *
 * Search in Amazon DataZone is a powerful capability that enables users to discover and explore data assets, glossary terms, and data products across their organization. It provides both basic and advanced search functionality, allowing users to find resources based on names, descriptions, metadata, and other attributes. Search can be scoped to specific types of resources (like assets, glossary terms, or data products) and can be filtered using various criteria such as creation date, owner, or status. The search functionality is essential for making the wealth of data resources in an organization discoverable and usable, helping users find the right data for their needs quickly and efficiently.
 *
 * Many search commands in Amazon DataZone are paginated, including `search` and `search-types`. When the result set is large, Amazon DataZone returns a `nextToken` in the response. This token can be used to retrieve the next page of results.
 *
 * Prerequisites:
 *
 * - The --domain-identifier must refer to an existing Amazon DataZone domain.
 *
 * - --search-scope must be one of: ASSET, GLOSSARY_TERM, DATA_PRODUCT, or GLOSSARY.
 *
 * - The user must have search permissions in the specified domain.
 *
 * - If using --filters, ensure that the JSON is well-formed and that each filter includes valid attribute and value keys.
 *
 * - For paginated results, be prepared to use --next-token to fetch additional pages.
 *
 * To run a standard free-text search, the `searchText` parameter must be supplied. By default, all searchable fields are indexed for semantic search and will return semantic matches for SearchListings queries. To prevent semantic search indexing for a custom form attribute, see the CreateFormType API documentation. To run a lexical search query, enclose the query with double quotes (""). This will disable semantic search even for fields that have semantic search enabled and will only return results that contain the keywords wrapped by double quotes (order of tokens in the query is not enforced). Free-text search is supported for all attributes annotated with @amazon.datazone#searchable.
 *
 * To run a filtered search, provide filter clause using the `filters` parameter. To filter on glossary terms, use the special attribute `__DataZoneGlossaryTerms`. To filter on an indexed numeric attribute (i.e., a numeric attribute annotated with `@amazon.datazone#sortable`), provide a filter using the `intValue` parameter. The filters parameter can also be used to run more advanced free-text searches that target specific attributes (attributes must be annotated with `@amazon.datazone#searchable` for free-text search). Create/update timestamp filtering is supported using the special `creationTime`/`lastUpdatedTime` attributes. Filter types can be mixed and matched to power complex queries.
 *
 * To find out whether an attribute has been annotated and indexed for a given search type, use the GetFormType API to retrieve the form containing the attribute.
 */
export const search: API.PaginatedOperationMethod<
  SearchInput,
  SearchOutput,
  SearchError,
  Credentials | HttpClient.HttpClient,
  SearchInventoryResultItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(631, __c78, 7) as any as S.Schema<SearchInput>,
  output: __S(646, __c80, 6) as any as S.Schema<SearchOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "Search",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type SearchGroupProfilesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Searches group profiles in Amazon DataZone.
 */
export const searchGroupProfiles: API.PaginatedOperationMethod<
  SearchGroupProfilesInput,
  SearchGroupProfilesOutput,
  SearchGroupProfilesError,
  Credentials | HttpClient.HttpClient,
  GroupProfileSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(647, __c80, 7) as any as S.Schema<SearchGroupProfilesInput>,
  output: __S(649, __c81, 1) as any as S.Schema<SearchGroupProfilesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchGroupProfiles",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type SearchListingsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Searches listings in Amazon DataZone.
 *
 * SearchListings is a powerful capability that enables users to discover and explore published assets and data products across their organization. It provides both basic and advanced search functionality, allowing users to find resources based on names, descriptions, metadata, and other attributes. SearchListings also supports filtering using various criteria such as creation date, owner, or status. This API is essential for making the wealth of data resources in an organization discoverable and usable, helping users find the right data for their needs quickly and efficiently.
 *
 * SearchListings returns results in a paginated format. When the result set is large, the response will include a nextToken, which can be used to retrieve the next page of results.
 *
 * The SearchListings API gives users flexibility in specifying what kind of search is run.
 *
 * To run a standard free-text search, the `searchText` parameter must be supplied. By default, all searchable fields are indexed for semantic search and will return semantic matches for SearchListings queries. To prevent semantic search indexing for a custom form attribute, see the CreateFormType API documentation. To run a lexical search query, enclose the query with double quotes (""). This will disable semantic search even for fields that have semantic search enabled and will only return results that contain the keywords wrapped by double quotes (order of tokens in the query is not enforced). Free-text search is supported for all attributes annotated with @amazon.datazone#searchable.
 *
 * To run a filtered search, provide filter clause using the `filters` parameter. To filter on glossary terms, use the special attribute `__DataZoneGlossaryTerms`. To filter on an indexed numeric attribute (i.e., a numeric attribute annotated with `@amazon.datazone#sortable`), provide a filter using the `intValue` parameter. The filters parameter can also be used to run more advanced free-text searches that target specific attributes (attributes must be annotated with `@amazon.datazone#searchable` for free-text search). Create/update timestamp filtering is supported using the special `creationTime`/`lastUpdatedTime` attributes. Filter types can be mixed and matched to power complex queries.
 *
 * To find out whether an attribute has been annotated and indexed for a given search type, use the GetFormType API to retrieve the form containing the attribute.
 */
export const searchListings: API.PaginatedOperationMethod<
  SearchListingsInput,
  SearchListingsOutput,
  SearchListingsError,
  Credentials | HttpClient.HttpClient,
  SearchResultItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(652, __c81, 4) as any as S.Schema<SearchListingsInput>,
  output: __S(663, __c82, 7) as any as S.Schema<SearchListingsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchListings",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type SearchTypesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Searches for types in Amazon DataZone.
 *
 * Prerequisites:
 *
 * - The --domain-identifier must refer to an existing Amazon DataZone domain.
 *
 * - --search-scope must be one of the valid values including: ASSET_TYPE, GLOSSARY_TERM_TYPE, DATA_PRODUCT_TYPE.
 *
 * - The --managed flag must be present without a value.
 *
 * - The user must have permissions for form or asset types in the domain.
 *
 * - If using --filters, ensure that the JSON is valid.
 *
 * - Filters contain correct structure (attribute, value, operator).
 */
export const searchTypes: API.PaginatedOperationMethod<
  SearchTypesInput,
  SearchTypesOutput,
  SearchTypesError,
  Credentials | HttpClient.HttpClient,
  SearchTypesResultItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(664, __c83, 0) as any as S.Schema<SearchTypesInput>,
  output: __S(669, __c83, 5) as any as S.Schema<SearchTypesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchTypes",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type SearchUserProfilesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Searches user profiles in Amazon DataZone.
 */
export const searchUserProfiles: API.PaginatedOperationMethod<
  SearchUserProfilesInput,
  SearchUserProfilesOutput,
  SearchUserProfilesError,
  Credentials | HttpClient.HttpClient,
  UserProfileSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(670, __c83, 6) as any as S.Schema<SearchUserProfilesInput>,
  output: __S(672, __c84, 0) as any as S.Schema<SearchUserProfilesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchUserProfiles",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type StartDataSourceRunError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Start the run of the specified data source in Amazon DataZone.
 */
export const startDataSourceRun: API.OperationMethod<
  StartDataSourceRunInput,
  StartDataSourceRunOutput,
  StartDataSourceRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(673, __c84, 1) as any as S.Schema<StartDataSourceRunInput>,
  output: __S(674, __c84, 2) as any as S.Schema<StartDataSourceRunOutput>,
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
  operationName: "StartDataSourceRun",
}));

export type StartMetadataGenerationRunError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts the metadata generation run.
 *
 * Prerequisites:
 *
 * - Asset must be created and belong to the specified domain and project.
 *
 * - Asset type must be supported for metadata generation (e.g., Amazon Web Services Glue table).
 *
 * - Asset must have a structured schema with valid rows and columns.
 *
 * - Valid values for --type: BUSINESS_DESCRIPTIONS, BUSINESS_NAMES, BUSINESS_GLOSSARY_ASSOCIATIONS.
 *
 * - The user must have permission to run metadata generation in the domain/project.
 */
export const startMetadataGenerationRun: API.OperationMethod<
  StartMetadataGenerationRunInput,
  StartMetadataGenerationRunOutput,
  StartMetadataGenerationRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(675, __c84, 3) as any as S.Schema<StartMetadataGenerationRunInput>,
  output: __S(676, __c84, 4) as any as S.Schema<StartMetadataGenerationRunOutput>,
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
  operationName: "StartMetadataGenerationRun",
}));

export type StartNotebookExportError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a notebook export in Amazon SageMaker Unified Studio. This operation exports a notebook to a specified file format and stores the output in Amazon Simple Storage Service.
 */
export const startNotebookExport: API.OperationMethod<
  StartNotebookExportInput,
  StartNotebookExportOutput,
  StartNotebookExportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(677, __c84, 5) as any as S.Schema<StartNotebookExportInput>,
  output: __S(678, __c84, 6) as any as S.Schema<StartNotebookExportOutput>,
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
  operationName: "StartNotebookExport",
}));

export type StartNotebookImportError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a notebook import in Amazon SageMaker Unified Studio. This operation imports a notebook from an Amazon Simple Storage Service location into a project.
 */
export const startNotebookImport: API.OperationMethod<
  StartNotebookImportInput,
  StartNotebookImportOutput,
  StartNotebookImportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(680, __c85, 0) as any as S.Schema<StartNotebookImportInput>,
  output: __S(681, __c85, 1) as any as S.Schema<StartNotebookImportOutput>,
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
  operationName: "StartNotebookImport",
}));

export type StartNotebookRunError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a notebook run in Amazon SageMaker Unified Studio. A notebook run represents the execution of an Amazon SageMaker notebook within a project. You can configure compute, network, timeout, and environment settings for the run.
 */
export const startNotebookRun: API.OperationMethod<
  StartNotebookRunInput,
  StartNotebookRunOutput,
  StartNotebookRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(682, __c85, 2) as any as S.Schema<StartNotebookRunInput>,
  output: __S(436, __c54, 4) as any as S.Schema<StartNotebookRunOutput>,
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
  operationName: "StartNotebookRun",
}));

export type StartNotebookSyncError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a notebook sync in Amazon SageMaker Unified Studio. This operation syncs a notebook from a Git repository into a project.
 */
export const startNotebookSync: API.OperationMethod<
  StartNotebookSyncInput,
  StartNotebookSyncOutput,
  StartNotebookSyncError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(683, __c85, 3) as any as S.Schema<StartNotebookSyncInput>,
  output: __S(684, __c85, 4) as any as S.Schema<StartNotebookSyncOutput>,
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
  operationName: "StartNotebookSync",
}));

export type StopNotebookRunError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Stops a running notebook run in Amazon SageMaker Unified Studio.
 */
export const stopNotebookRun: API.OperationMethod<
  StopNotebookRunInput,
  StopNotebookRunOutput,
  StopNotebookRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(685, __c85, 5) as any as S.Schema<StopNotebookRunInput>,
  output: __S(686, __c85, 6) as any as S.Schema<StopNotebookRunOutput>,
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
  operationName: "StopNotebookRun",
}));

export type TagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Tags a resource in Amazon DataZone.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(687, __c85, 7) as any as S.Schema<TagResourceRequest>,
  output: __S(38, __c4, 6) as any as S.Schema<TagResourceResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError = InternalServerException | ResourceNotFoundException | CommonErrors;
/**
 * Untags a resource in Amazon DataZone.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(688, __c86, 0) as any as S.Schema<UntagResourceRequest>,
  output: __S(38, __c4, 6) as any as S.Schema<UntagResourceResponse>,
  errors: [InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAccountPoolError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the account pool.
 */
export const updateAccountPool: API.OperationMethod<
  UpdateAccountPoolInput,
  UpdateAccountPoolOutput,
  UpdateAccountPoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(689, __c86, 1) as any as S.Schema<UpdateAccountPoolInput>,
  output: __S(78, __c9, 6) as any as S.Schema<UpdateAccountPoolOutput>,
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
  operationName: "UpdateAccountPool",
}));

export type UpdateAssetFilterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an asset filter.
 *
 * Prerequisites:
 *
 * - The domain, asset, and asset filter identifier must all exist.
 *
 * - The asset must contain the columns being referenced in the update.
 *
 * - If applying a row filter, ensure the column referenced in the expression exists in the asset schema.
 */
export const updateAssetFilter: API.OperationMethod<
  UpdateAssetFilterInput,
  UpdateAssetFilterOutput,
  UpdateAssetFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(690, __c86, 2) as any as S.Schema<UpdateAssetFilterInput>,
  output: __S(97, __c12, 1) as any as S.Schema<UpdateAssetFilterOutput>,
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
  operationName: "UpdateAssetFilter",
}));

export type UpdateConnectionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a connection. In Amazon DataZone, a connection enables you to connect your resources (domains, projects, and environments) to external resources and services.
 */
export const updateConnection: API.OperationMethod<
  UpdateConnectionInput,
  UpdateConnectionOutput,
  UpdateConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(699, __c87, 3) as any as S.Schema<UpdateConnectionInput>,
  output: __S(700, __c87, 4) as any as S.Schema<UpdateConnectionOutput>,
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
  operationName: "UpdateConnection",
}));

export type UpdateDataSourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified data source in Amazon DataZone.
 */
export const updateDataSource: API.OperationMethod<
  UpdateDataSourceInput,
  UpdateDataSourceOutput,
  UpdateDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(701, __c87, 5) as any as S.Schema<UpdateDataSourceInput>,
  output: __S(702, __c87, 6) as any as S.Schema<UpdateDataSourceOutput>,
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
  operationName: "UpdateDataSource",
}));

export type UpdateDomainError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a Amazon DataZone domain.
 */
export const updateDomain: API.OperationMethod<
  UpdateDomainInput,
  UpdateDomainOutput,
  UpdateDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(703, __c87, 7) as any as S.Schema<UpdateDomainInput>,
  output: __S(704, __c88, 0) as any as S.Schema<UpdateDomainOutput>,
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
  operationName: "UpdateDomain",
}));

export type UpdateDomainUnitError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the domain unit.
 */
export const updateDomainUnit: API.OperationMethod<
  UpdateDomainUnitInput,
  UpdateDomainUnitOutput,
  UpdateDomainUnitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(705, __c88, 1) as any as S.Schema<UpdateDomainUnitInput>,
  output: __S(706, __c88, 2) as any as S.Schema<UpdateDomainUnitOutput>,
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
  operationName: "UpdateDomainUnit",
}));

export type UpdateEnvironmentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified environment in Amazon DataZone.
 */
export const updateEnvironment: API.OperationMethod<
  UpdateEnvironmentInput,
  UpdateEnvironmentOutput,
  UpdateEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(707, __c88, 3) as any as S.Schema<UpdateEnvironmentInput>,
  output: __S(217, __c27, 1) as any as S.Schema<UpdateEnvironmentOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEnvironment",
}));

export type UpdateEnvironmentActionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an environment action.
 */
export const updateEnvironmentAction: API.OperationMethod<
  UpdateEnvironmentActionInput,
  UpdateEnvironmentActionOutput,
  UpdateEnvironmentActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(708, __c88, 4) as any as S.Schema<UpdateEnvironmentActionInput>,
  output: __S(221, __c27, 5) as any as S.Schema<UpdateEnvironmentActionOutput>,
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
  operationName: "UpdateEnvironmentAction",
}));

export type UpdateEnvironmentBlueprintError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an environment blueprint in Amazon DataZone.
 */
export const updateEnvironmentBlueprint: API.OperationMethod<
  UpdateEnvironmentBlueprintInput,
  UpdateEnvironmentBlueprintOutput,
  UpdateEnvironmentBlueprintError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(709, __c88, 5) as any as S.Schema<UpdateEnvironmentBlueprintInput>,
  output: __S(223, __c27, 7) as any as S.Schema<UpdateEnvironmentBlueprintOutput>,
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
  operationName: "UpdateEnvironmentBlueprint",
}));

export type UpdateEnvironmentProfileError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified environment profile in Amazon DataZone.
 */
export const updateEnvironmentProfile: API.OperationMethod<
  UpdateEnvironmentProfileInput,
  UpdateEnvironmentProfileOutput,
  UpdateEnvironmentProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(710, __c88, 6) as any as S.Schema<UpdateEnvironmentProfileInput>,
  output: __S(225, __c28, 1) as any as S.Schema<UpdateEnvironmentProfileOutput>,
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
  operationName: "UpdateEnvironmentProfile",
}));

export type UpdateGlossaryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the business glossary in Amazon DataZone.
 *
 * Prerequisites:
 *
 * - The glossary must exist in the given domain.
 *
 * - The caller must have the `datazone:UpdateGlossary` permission to update it.
 *
 * - When updating the name, the new name must be unique within the domain.
 *
 * - The glossary must not be deleted or in a terminal state.
 */
export const updateGlossary: API.OperationMethod<
  UpdateGlossaryInput,
  UpdateGlossaryOutput,
  UpdateGlossaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(711, __c88, 7) as any as S.Schema<UpdateGlossaryInput>,
  output: __S(230, __c28, 6) as any as S.Schema<UpdateGlossaryOutput>,
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
  operationName: "UpdateGlossary",
}));

export type UpdateGlossaryTermError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a business glossary term in Amazon DataZone.
 *
 * Prerequisites:
 *
 * - Glossary term must exist in the specified domain.
 *
 * - New name must not conflict with existing terms in the same glossary.
 *
 * - User must have permissions on the term.
 *
 * - The term must not be in DELETED status.
 */
export const updateGlossaryTerm: API.OperationMethod<
  UpdateGlossaryTermInput,
  UpdateGlossaryTermOutput,
  UpdateGlossaryTermError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(712, __c89, 0) as any as S.Schema<UpdateGlossaryTermInput>,
  output: __S(233, __c29, 1) as any as S.Schema<UpdateGlossaryTermOutput>,
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
  operationName: "UpdateGlossaryTerm",
}));

export type UpdateGroupProfileError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified group profile in Amazon DataZone.
 */
export const updateGroupProfile: API.OperationMethod<
  UpdateGroupProfileInput,
  UpdateGroupProfileOutput,
  UpdateGroupProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(713, __c89, 1) as any as S.Schema<UpdateGroupProfileInput>,
  output: __S(235, __c29, 3) as any as S.Schema<UpdateGroupProfileOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateGroupProfile",
}));

export type UpdateNotebookError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a notebook in Amazon SageMaker Unified Studio.
 */
export const updateNotebook: API.OperationMethod<
  UpdateNotebookInput,
  UpdateNotebookOutput,
  UpdateNotebookError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(714, __c89, 2) as any as S.Schema<UpdateNotebookInput>,
  output: __S(245, __c30, 5) as any as S.Schema<UpdateNotebookOutput>,
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
  operationName: "UpdateNotebook",
}));

export type UpdateProjectError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified project in Amazon DataZone.
 */
export const updateProject: API.OperationMethod<
  UpdateProjectInput,
  UpdateProjectOutput,
  UpdateProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(715, __c89, 3) as any as S.Schema<UpdateProjectInput>,
  output: __S(260, __c32, 4) as any as S.Schema<UpdateProjectOutput>,
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
  operationName: "UpdateProject",
}));

export type UpdateProjectProfileError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a project profile.
 */
export const updateProjectProfile: API.OperationMethod<
  UpdateProjectProfileInput,
  UpdateProjectProfileOutput,
  UpdateProjectProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(716, __c89, 4) as any as S.Schema<UpdateProjectProfileInput>,
  output: __S(272, __c34, 0) as any as S.Schema<UpdateProjectProfileOutput>,
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
  operationName: "UpdateProjectProfile",
}));

export type UpdateRootDomainUnitOwnerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the owner of the root domain unit.
 */
export const updateRootDomainUnitOwner: API.OperationMethod<
  UpdateRootDomainUnitOwnerInput,
  UpdateRootDomainUnitOwnerOutput,
  UpdateRootDomainUnitOwnerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(717, __c89, 5) as any as S.Schema<UpdateRootDomainUnitOwnerInput>,
  output: __S(328, __c41, 0) as any as S.Schema<UpdateRootDomainUnitOwnerOutput>,
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
  operationName: "UpdateRootDomainUnitOwner",
}));

export type UpdateRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a rule. In Amazon DataZone, a rule is a formal agreement that enforces specific requirements across user workflows (e.g., publishing assets to the catalog, requesting subscriptions, creating projects) within the Amazon DataZone data portal. These rules help maintain consistency, ensure compliance, and uphold governance standards in data management processes. For instance, a metadata enforcement rule can specify the required information for creating a subscription request or publishing a data asset to the catalog, ensuring alignment with organizational standards.
 */
export const updateRule: API.OperationMethod<
  UpdateRuleInput,
  UpdateRuleOutput,
  UpdateRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(718, __c89, 6) as any as S.Schema<UpdateRuleInput>,
  output: __S(719, __c89, 7) as any as S.Schema<UpdateRuleOutput>,
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
  operationName: "UpdateRule",
}));

export type UpdateSubscriptionGrantStatusError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the status of the specified subscription grant status in Amazon DataZone.
 */
export const updateSubscriptionGrantStatus: API.OperationMethod<
  UpdateSubscriptionGrantStatusInput,
  UpdateSubscriptionGrantStatusOutput,
  UpdateSubscriptionGrantStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(720, __c90, 0) as any as S.Schema<UpdateSubscriptionGrantStatusInput>,
  output: __S(295, __c36, 7) as any as S.Schema<UpdateSubscriptionGrantStatusOutput>,
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
  operationName: "UpdateSubscriptionGrantStatus",
}));

export type UpdateSubscriptionRequestError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a specified subscription request in Amazon DataZone.
 */
export const updateSubscriptionRequest: API.OperationMethod<
  UpdateSubscriptionRequestInput,
  UpdateSubscriptionRequestOutput,
  UpdateSubscriptionRequestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(721, __c90, 1) as any as S.Schema<UpdateSubscriptionRequestInput>,
  output: __S(33, __c4, 1) as any as S.Schema<UpdateSubscriptionRequestOutput>,
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
  operationName: "UpdateSubscriptionRequest",
}));

export type UpdateSubscriptionTargetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified subscription target in Amazon DataZone.
 */
export const updateSubscriptionTarget: API.OperationMethod<
  UpdateSubscriptionTargetInput,
  UpdateSubscriptionTargetOutput,
  UpdateSubscriptionTargetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(722, __c90, 2) as any as S.Schema<UpdateSubscriptionTargetInput>,
  output: __S(306, __c38, 2) as any as S.Schema<UpdateSubscriptionTargetOutput>,
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
  operationName: "UpdateSubscriptionTarget",
}));

export type UpdateUserProfileError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified user profile in Amazon DataZone.
 */
export const updateUserProfile: API.OperationMethod<
  UpdateUserProfileInput,
  UpdateUserProfileOutput,
  UpdateUserProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(723, __c90, 3) as any as S.Schema<UpdateUserProfileInput>,
  output: __S(308, __c38, 4) as any as S.Schema<UpdateUserProfileOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateUserProfile",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ rule: S.optional(S.String), threshold: S.optional(S.Number) }),
      ).annotate({ identifier: "AcceptRule" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          predictionTarget: S.optional(S.String),
          predictionChoice: S.optional(S.Number),
          editedValue: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "AcceptChoice" });
    case 2:
      return S.Array(__S(1, __c0, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          revision: S.optional(S.String).pipe(T.HttpQuery("revision")),
          acceptRule: S.optional(__S(0, __c0, 0)),
          acceptChoices: S.optional(__S(2, __c0, 2)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v2/domains/{domainIdentifier}/assets/{identifier}/accept-predictions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AcceptPredictionsInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ domainId: S.String, assetId: S.String, revision: S.String }),
      ).annotate({ identifier: "AcceptPredictionsOutput" });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() => S.Struct({ assetId: S.String, filterIds: __S(5, __c0, 5) })).annotate({
        identifier: "AcceptedAssetScope",
      });
    case 7:
      return S.Array(__S(6, __c0, 6));
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.Union([/*@__PURE__*/ S.Struct({ s3: __S(8, __c1, 0) })]);
    case 2:
      return S.suspend(() =>
        S.Struct({ assetId: S.String, permissions: __S(9, __c1, 1) }),
      ).annotate({
        identifier: "AssetPermission",
      });
    case 3:
      return S.Array(__S(10, __c1, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          decisionComment: S.optional(SensitiveString),
          assetScopes: S.optional(__S(7, __c0, 7)),
          assetPermissions: S.optional(__S(11, __c1, 3)),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v2/domains/{domainIdentifier}/subscription-requests/{identifier}/accept",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AcceptSubscriptionRequestInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ id: S.optional(S.String), name: S.optional(SensitiveString) }),
      ).annotate({ identifier: "SubscribedProject" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          principalId: S.optional(S.String),
          sessionName: S.optional(S.String),
          groupProfileId: S.optional(S.String),
        }),
      ).annotate({ identifier: "IamUserProfileDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          username: S.optional(SensitiveString),
          firstName: S.optional(SensitiveString),
          lastName: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "SsoUserProfileDetails" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ iam: __S(14, __c1, 6) }),
        /*@__PURE__*/ S.Struct({ sso: __S(15, __c1, 7) }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({ id: S.optional(S.String), details: S.optional(__S(16, __c2, 0)) }),
      ).annotate({ identifier: "SubscribedUser" });
    case 2:
      return S.suspend(() => S.Struct({ principalArn: S.optional(S.String) })).annotate({
        identifier: "SubscribedIamPrincipal",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ project: __S(13, __c1, 5) }),
        /*@__PURE__*/ S.Struct({ user: __S(17, __c2, 1) }),
        /*@__PURE__*/ S.Struct({ group: __S(13, __c1, 5) }),
        /*@__PURE__*/ S.Struct({ iam: __S(18, __c2, 2) }),
      ]);
    case 4:
      return S.Array(__S(19, __c2, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(SensitiveString),
          shortDescription: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "DetailedGlossaryTerm" });
    case 6:
      return S.Array(__S(21, __c2, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          assetId: S.String,
          filterIds: __S(5, __c0, 5),
          status: S.String,
          scopeName: S.optional(S.String),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "AssetScope" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          entityId: S.optional(S.String),
          entityRevision: S.optional(S.String),
          entityType: S.optional(S.String),
          forms: S.optional(S.String),
          glossaryTerms: S.optional(__S(22, __c2, 6)),
          assetScope: S.optional(__S(23, __c2, 7)),
          permissions: S.optional(__S(9, __c1, 1)),
        }),
      ).annotate({ identifier: "SubscribedAssetListing" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          entityId: S.optional(S.String),
          entityRevision: S.optional(S.String),
          entityType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AssetInDataProductListingItem",
      });
    case 2:
      return S.Array(__S(25, __c3, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          entityId: S.optional(S.String),
          entityRevision: S.optional(S.String),
          glossaryTerms: S.optional(__S(22, __c2, 6)),
          name: S.optional(S.String),
          description: S.optional(S.String),
          assetListings: S.optional(__S(26, __c3, 2)),
        }),
      ).annotate({ identifier: "SubscribedProductListing" });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ assetListing: __S(24, __c3, 0) }),
        /*@__PURE__*/ S.Struct({ productListing: __S(27, __c3, 3) }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          revision: S.optional(S.String),
          name: S.String,
          description: SensitiveString,
          item: __S(28, __c3, 4),
          ownerProjectId: S.String,
          ownerProjectName: S.optional(S.String),
        }),
      ).annotate({ identifier: "SubscribedListing" });
    case 6:
      return S.Array(__S(29, __c3, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          formName: S.String,
          typeName: S.optional(SensitiveString),
          typeRevision: S.optional(S.String),
          content: S.optional(S.String),
        }),
      ).annotate({ identifier: "FormOutput" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(31, __c3, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          createdBy: S.String,
          updatedBy: S.optional(S.String),
          domainId: S.String,
          status: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          requestReason: SensitiveString,
          subscribedPrincipals: __S(20, __c2, 4),
          subscribedListings: __S(30, __c3, 6),
          reviewerId: S.optional(S.String),
          decisionComment: S.optional(SensitiveString),
          existingSubscriptionId: S.optional(S.String),
          metadataForms: S.optional(__S(32, __c4, 0)),
        }),
      ).annotate({
        identifier: "AcceptSubscriptionRequestOutput",
      });
    case 2:
      return S.suspend(() => S.Struct({ userIdentifier: S.String })).annotate({
        identifier: "OwnerUserProperties",
      });
    case 3:
      return S.suspend(() => S.Struct({ groupIdentifier: S.String })).annotate({
        identifier: "OwnerGroupProperties",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ user: __S(34, __c4, 2) }),
        /*@__PURE__*/ S.Struct({ group: __S(35, __c4, 3) }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          entityType: S.String.pipe(T.HttpLabel("entityType")),
          entityIdentifier: S.String.pipe(T.HttpLabel("entityIdentifier")),
          owner: __S(36, __c4, 4),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/addOwner",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AddEntityOwnerInput" });
    case 6:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AddEntityOwnerOutput",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ userIdentifier: S.String }),
        /*@__PURE__*/ S.Struct({ allUsersGrantFilter: __S(38, __c4, 6) }),
      ]);
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ groupIdentifier: S.String })]);
    case 1:
      return S.suspend(() =>
        S.Struct({ domainUnit: S.String, includeChildDomainUnits: S.optional(S.Boolean) }),
      ).annotate({
        identifier: "DomainUnitFilterForProject",
      });
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ domainUnitFilter: __S(41, __c5, 1) })]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          projectDesignation: S.String,
          projectIdentifier: S.optional(S.String),
          projectGrantFilter: S.optional(__S(42, __c5, 2)),
        }),
      ).annotate({
        identifier: "ProjectPolicyGrantPrincipal",
      });
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ allDomainUnitsGrantFilter: __S(38, __c4, 6) })]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainUnitDesignation: S.String,
          domainUnitIdentifier: S.optional(S.String),
          domainUnitGrantFilter: S.optional(__S(44, __c5, 4)),
        }),
      ).annotate({
        identifier: "DomainUnitPolicyGrantPrincipal",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ user: __S(39, __c4, 7) }),
        /*@__PURE__*/ S.Struct({ group: __S(40, __c5, 0) }),
        /*@__PURE__*/ S.Struct({ project: __S(43, __c5, 3) }),
        /*@__PURE__*/ S.Struct({ domainUnit: __S(45, __c5, 5) }),
      ]);
    case 7:
      return S.suspend(() => S.Struct({ includeChildDomainUnits: S.optional(S.Boolean) })).annotate(
        {
          identifier: "CreateDomainUnitPolicyGrantDetail",
        },
      );
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ domainUnitId: S.optional(S.String) })).annotate({
        identifier: "CreateEnvironmentProfilePolicyGrantDetail",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          includeChildDomainUnits: S.optional(S.Boolean),
          projectProfiles: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({
        identifier: "CreateProjectFromProjectProfilePolicyGrantDetail",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ createDomainUnit: __S(47, __c5, 7) }),
        /*@__PURE__*/ S.Struct({
          overrideDomainUnitOwners: __S(47, __c5, 7),
        }),
        /*@__PURE__*/ S.Struct({ addToProjectMemberPool: __S(47, __c5, 7) }),
        /*@__PURE__*/ S.Struct({ overrideProjectOwners: __S(47, __c5, 7) }),
        /*@__PURE__*/ S.Struct({ createGlossary: __S(47, __c5, 7) }),
        /*@__PURE__*/ S.Struct({ createFormType: __S(47, __c5, 7) }),
        /*@__PURE__*/ S.Struct({ createAssetType: __S(47, __c5, 7) }),
        /*@__PURE__*/ S.Struct({ createProject: __S(47, __c5, 7) }),
        /*@__PURE__*/ S.Struct({
          createEnvironmentProfile: __S(48, __c6, 0),
        }),
        /*@__PURE__*/ S.Struct({ delegateCreateEnvironmentProfile: __S(38, __c4, 6) }),
        /*@__PURE__*/ S.Struct({ createEnvironment: __S(38, __c4, 6) }),
        /*@__PURE__*/ S.Struct({ createEnvironmentFromBlueprint: __S(38, __c4, 6) }),
        /*@__PURE__*/ S.Struct({
          createProjectFromProjectProfile: __S(49, __c6, 1),
        }),
        /*@__PURE__*/ S.Struct({ useAssetType: __S(48, __c6, 0) }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          entityType: S.String.pipe(T.HttpLabel("entityType")),
          entityIdentifier: S.String.pipe(T.HttpLabel("entityIdentifier")),
          policyType: S.String,
          principal: __S(46, __c5, 6),
          detail: __S(50, __c6, 2),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v2/domains/{domainIdentifier}/policies/managed/{entityType}/{entityIdentifier}/addGrant",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AddPolicyGrantInput" });
    case 4:
      return S.suspend(() => S.Struct({ grantId: S.optional(S.String) })).annotate({
        identifier: "AddPolicyGrantOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          environmentIdentifier: S.String.pipe(T.HttpLabel("environmentIdentifier")),
          environmentRoleArn: S.String.pipe(T.HttpLabel("environmentRoleArn")),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/roles/{environmentRoleArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateEnvironmentRoleInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          entityIdentifier: S.String.pipe(T.HttpLabel("entityIdentifier")),
          entityType: S.String.pipe(T.HttpLabel("entityType")),
          governedGlossaryTerms: __S(5, __c0, 5),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/associate-governed-terms",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateGovernedTermsInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          entityType: S.String.pipe(T.HttpLabel("entityType")),
          entityIdentifier: S.String.pipe(T.HttpLabel("entityIdentifier")),
          entityRevision: S.optional(S.String).pipe(T.HttpQuery("entityRevision")),
          attributeIdentifiers: __S(5, __c0, 5).pipe(T.HttpQuery("attributeIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/attributes-metadata",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetAttributesMetadataInput",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ attributeIdentifier: S.String, forms: S.optional(__S(32, __c4, 0)) }),
      ).annotate({ identifier: "BatchGetAttributeOutput" });
    case 1:
      return S.Array(__S(56, __c7, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ attributeIdentifier: S.String, code: S.String, message: S.String }),
      ).annotate({ identifier: "AttributeError" });
    case 3:
      return S.Array(__S(58, __c7, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ attributes: S.optional(__S(57, __c7, 1)), errors: __S(59, __c7, 3) }),
      ).annotate({
        identifier: "BatchGetAttributesMetadataOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          formName: S.String,
          typeIdentifier: S.optional(S.String),
          typeRevision: S.optional(S.String),
          content: S.optional(S.String),
        }),
      ).annotate({ identifier: "FormInput" });
    case 6:
      return S.Array(__S(61, __c7, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ attributeIdentifier: S.String, forms: __S(62, __c7, 6) }),
      ).annotate({ identifier: "AttributeInput" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(63, __c7, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          entityType: S.String.pipe(T.HttpLabel("entityType")),
          entityIdentifier: S.String.pipe(T.HttpLabel("entityIdentifier")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          attributes: __S(64, __c8, 0),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/attributes-metadata",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchPutAttributesMetadataInput",
      });
    case 2:
      return S.suspend(() => S.Struct({ attributeIdentifier: S.String })).annotate({
        identifier: "BatchPutAttributeOutput",
      });
    case 3:
      return S.Array(__S(66, __c8, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          errors: S.optional(__S(59, __c7, 3)),
          attributes: S.optional(__S(67, __c8, 3)),
        }),
      ).annotate({
        identifier: "BatchPutAttributesMetadataOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v2/domains/{domainIdentifier}/metadata-generation-runs/{identifier}/cancel",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CancelMetadataGenerationRunInput",
      });
    case 6:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "CancelMetadataGenerationRunOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v2/domains/{domainIdentifier}/subscriptions/{identifier}/cancel",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CancelSubscriptionInput" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          createdBy: S.String,
          updatedBy: S.optional(S.String),
          domainId: S.String,
          status: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          subscribedPrincipal: __S(19, __c2, 3),
          subscribedListing: __S(29, __c3, 5),
          subscriptionRequestId: S.optional(S.String),
          retainPermissions: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "CancelSubscriptionOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          awsAccountId: S.String,
          supportedRegions: __S(5, __c0, 5),
          awsAccountName: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "AccountInfo" });
    case 2:
      return S.Array(__S(73, __c9, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ lambdaFunctionArn: S.String, lambdaExecutionRoleArn: S.optional(S.String) }),
      ).annotate({ identifier: "CustomAccountPoolHandler" });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ accounts: __S(74, __c9, 2) }),
        /*@__PURE__*/ S.Struct({ customAccountPoolHandler: __S(75, __c9, 3) }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          name: SensitiveString,
          description: S.optional(SensitiveString),
          resolutionStrategy: S.String,
          accountSource: __S(76, __c9, 4),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/account-pools" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateAccountPoolInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainId: S.optional(S.String),
          name: S.optional(SensitiveString),
          id: S.optional(S.String),
          description: S.optional(SensitiveString),
          resolutionStrategy: S.optional(S.String),
          accountSource: __S(76, __c9, 4),
          createdBy: S.String,
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
          domainUnitId: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateAccountPoolOutput" });
    case 7:
      return S.suspend(() => S.Struct({ enabled: S.optional(S.Boolean) })).annotate({
        identifier: "BusinessNameGenerationConfiguration",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ businessNameGeneration: S.optional(__S(79, __c9, 7)) }),
      ).annotate({ identifier: "PredictionConfiguration" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: SensitiveString,
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          externalIdentifier: S.optional(S.String),
          typeIdentifier: S.String,
          typeRevision: S.optional(S.String),
          description: S.optional(SensitiveString),
          glossaryTerms: S.optional(__S(5, __c0, 5)),
          formsInput: S.optional(__S(62, __c7, 6)),
          owningProjectIdentifier: S.String,
          predictionConfiguration: S.optional(__S(80, __c10, 0)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/assets" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateAssetInput" });
    case 2:
      return S.suspend(() => S.Struct({ listingId: S.String, listingStatus: S.String })).annotate({
        identifier: "AssetListingDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          formName: S.String,
          typeIdentifier: S.String,
          typeRevision: S.optional(S.String),
          timestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          contentSummary: S.optional(S.String),
          id: S.optional(S.String),
        }),
      ).annotate({
        identifier: "TimeSeriesDataPointSummaryFormOutput",
      });
    case 4:
      return S.Array(__S(83, __c10, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: SensitiveString,
          typeIdentifier: S.String,
          typeRevision: S.String,
          externalIdentifier: S.optional(S.String),
          revision: S.String,
          description: S.optional(SensitiveString),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          firstRevisionCreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          firstRevisionCreatedBy: S.optional(S.String),
          glossaryTerms: S.optional(__S(5, __c0, 5)),
          governedGlossaryTerms: S.optional(__S(5, __c0, 5)),
          owningProjectId: S.String,
          domainId: S.String,
          listing: S.optional(__S(82, __c10, 2)),
          formsOutput: __S(32, __c4, 0),
          readOnlyFormsOutput: S.optional(__S(32, __c4, 0)),
          latestTimeSeriesDataPointFormsOutput: S.optional(__S(84, __c10, 4)),
          predictionConfiguration: S.optional(__S(80, __c10, 0)),
        }),
      ).annotate({ identifier: "CreateAssetOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ includedColumnNames: S.optional(__S(5, __c0, 5)) }),
      ).annotate({
        identifier: "ColumnFilterConfiguration",
      });
    case 7:
      return S.suspend(() => S.Struct({ columnName: S.String, value: S.String })).annotate({
        identifier: "EqualToExpression",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ columnName: S.String, value: S.String })).annotate({
        identifier: "GreaterThanOrEqualToExpression",
      });
    case 1:
      return S.suspend(() => S.Struct({ columnName: S.String })).annotate({
        identifier: "IsNullExpression",
      });
    case 2:
      return S.suspend(() => S.Struct({ columnName: S.String, values: __S(5, __c0, 5) })).annotate({
        identifier: "InExpression",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ equalTo: __S(87, __c10, 7) }),
        /*@__PURE__*/ S.Struct({ notEqualTo: __S(87, __c10, 7) }),
        /*@__PURE__*/ S.Struct({ greaterThan: __S(87, __c10, 7) }),
        /*@__PURE__*/ S.Struct({ lessThan: __S(87, __c10, 7) }),
        /*@__PURE__*/ S.Struct({ greaterThanOrEqualTo: __S(88, __c11, 0) }),
        /*@__PURE__*/ S.Struct({ lessThanOrEqualTo: __S(88, __c11, 0) }),
        /*@__PURE__*/ S.Struct({ isNull: __S(89, __c11, 1) }),
        /*@__PURE__*/ S.Struct({ isNotNull: __S(89, __c11, 1) }),
        /*@__PURE__*/ S.Struct({ in: __S(90, __c11, 2) }),
        /*@__PURE__*/ S.Struct({ notIn: __S(90, __c11, 2) }),
        /*@__PURE__*/ S.Struct({ like: __S(87, __c10, 7) }),
        /*@__PURE__*/ S.Struct({ notLike: __S(87, __c10, 7) }),
      ]);
    case 4:
      return S.Array(
        /*@__PURE__*/ S.suspend(() => __S(93, __c11, 5)).annotate({ identifier: "RowFilter" }),
      );
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ expression: __S(91, __c11, 3) }),
        /*@__PURE__*/ S.Struct({
          and: /*@__PURE__*/ S.suspend(() => __S(92, __c11, 4)).annotate({
            identifier: "RowFilterList",
          }),
        }),
        /*@__PURE__*/ S.Struct({
          or: /*@__PURE__*/ S.suspend(() => __S(92, __c11, 4)).annotate({
            identifier: "RowFilterList",
          }),
        }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({ rowFilter: __S(93, __c11, 5), sensitive: S.optional(S.Boolean) }),
      ).annotate({ identifier: "RowFilterConfiguration" });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ columnConfiguration: __S(86, __c10, 6) }),
        /*@__PURE__*/ S.Struct({ rowConfiguration: __S(94, __c11, 6) }),
      ]);
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          assetIdentifier: S.String.pipe(T.HttpLabel("assetIdentifier")),
          name: SensitiveString,
          description: S.optional(SensitiveString),
          configuration: __S(95, __c11, 7),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v2/domains/{domainIdentifier}/assets/{assetIdentifier}/filters",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateAssetFilterInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          domainId: S.String,
          assetId: S.String,
          name: SensitiveString,
          description: S.optional(SensitiveString),
          status: S.optional(S.String),
          configuration: __S(95, __c11, 7),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          errorMessage: S.optional(S.String),
          effectiveColumnNames: S.optional(__S(5, __c0, 5)),
          effectiveRowFilter: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateAssetFilterOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: SensitiveString,
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          typeRevision: S.optional(S.String),
          description: S.optional(SensitiveString),
          glossaryTerms: S.optional(__S(5, __c0, 5)),
          formsInput: S.optional(__S(62, __c7, 6)),
          predictionConfiguration: S.optional(__S(80, __c10, 0)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v2/domains/{domainIdentifier}/assets/{identifier}/revisions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateAssetRevisionInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: SensitiveString,
          typeIdentifier: S.String,
          typeRevision: S.String,
          externalIdentifier: S.optional(S.String),
          revision: S.String,
          description: S.optional(SensitiveString),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          firstRevisionCreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          firstRevisionCreatedBy: S.optional(S.String),
          glossaryTerms: S.optional(__S(5, __c0, 5)),
          governedGlossaryTerms: S.optional(__S(5, __c0, 5)),
          owningProjectId: S.String,
          domainId: S.String,
          listing: S.optional(__S(82, __c10, 2)),
          formsOutput: __S(32, __c4, 0),
          readOnlyFormsOutput: S.optional(__S(32, __c4, 0)),
          latestTimeSeriesDataPointFormsOutput: S.optional(__S(84, __c10, 4)),
          predictionConfiguration: S.optional(__S(80, __c10, 0)),
        }),
      ).annotate({
        identifier: "CreateAssetRevisionOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          typeIdentifier: S.String,
          typeRevision: S.String,
          required: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "FormEntryInput" });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ __S(100, __c12, 4).pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          name: S.String,
          description: S.optional(SensitiveString),
          formsInput: __S(101, __c12, 5),
          owningProjectIdentifier: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/asset-types" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateAssetTypeInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          typeName: SensitiveString,
          typeRevision: S.String,
          required: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "FormEntryOutput" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ __S(103, __c12, 7).pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          name: S.String,
          revision: S.String,
          description: S.optional(SensitiveString),
          formsOutput: __S(104, __c13, 0),
          owningProjectId: S.optional(S.String),
          originDomainId: S.optional(S.String),
          originProjectId: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateAssetTypeOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          accessRole: S.optional(S.String),
          awsAccountId: S.optional(S.String),
          awsRegion: S.optional(S.String),
          iamConnectionId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsLocation" });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          classification: S.optional(S.String),
          properties: S.optional(__S(107, __c13, 3)),
        }),
      ).annotate({ identifier: "Configuration" });
    case 5:
      return S.Array(__S(108, __c13, 4));
    case 6:
      return S.suspend(() => S.Struct({ workgroupName: S.optional(S.String) })).annotate({
        identifier: "AthenaPropertiesInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          subnetId: S.optional(S.String),
          subnetIdList: S.optional(__S(5, __c0, 5)),
          securityGroupIdList: S.optional(__S(5, __c0, 5)),
          availabilityZone: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PhysicalConnectionRequirements",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          userManagedClientApplicationClientId: S.optional(S.String),
          aWSManagedClientApplicationReference: S.optional(S.String),
        }),
      ).annotate({ identifier: "OAuth2ClientApplication" });
    case 1:
      return S.suspend(() =>
        S.Struct({ authorizationCode: S.optional(S.String), redirectUri: S.optional(S.String) }),
      ).annotate({
        identifier: "AuthorizationCodeProperties",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          userManagedClientApplicationClientSecret: S.optional(S.String),
          accessToken: S.optional(S.String),
          refreshToken: S.optional(S.String),
          jwtToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "GlueOAuth2Credentials" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          oAuth2GrantType: S.optional(S.String),
          oAuth2ClientApplication: S.optional(__S(112, __c14, 0)),
          tokenUrl: S.optional(S.String),
          tokenUrlParametersMap: S.optional(__S(107, __c13, 3)),
          authorizationCodeProperties: S.optional(__S(113, __c14, 1)),
          oAuth2Credentials: S.optional(__S(114, __c14, 2)),
        }),
      ).annotate({ identifier: "OAuth2Properties" });
    case 4:
      return S.suspend(() =>
        S.Struct({ userName: S.optional(S.String), password: S.optional(S.String) }),
      ).annotate({
        identifier: "BasicAuthenticationCredentials",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          authenticationType: S.optional(S.String),
          oAuth2Properties: S.optional(__S(115, __c14, 3)),
          secretArn: S.optional(S.String),
          kmsKeyArn: S.optional(S.String),
          basicAuthenticationCredentials: S.optional(__S(116, __c14, 4)),
          customAuthenticationCredentials: S.optional(__S(107, __c13, 3)),
        }),
      ).annotate({
        identifier: "AuthenticationConfigurationInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          connectionProperties: S.optional(__S(107, __c13, 3)),
          physicalConnectionRequirements: S.optional(__S(111, __c13, 7)),
          name: S.optional(S.String),
          description: S.optional(S.String),
          connectionType: S.optional(S.String),
          matchCriteria: S.optional(S.String),
          validateCredentials: S.optional(S.Boolean),
          validateForComputeEnvironments: S.optional(__S(8, __c1, 0)),
          sparkProperties: S.optional(__S(107, __c13, 3)),
          athenaProperties: S.optional(__S(107, __c13, 3)),
          pythonProperties: S.optional(__S(107, __c13, 3)),
          authenticationConfiguration: S.optional(__S(117, __c14, 5)),
        }),
      ).annotate({ identifier: "GlueConnectionInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({ glueConnectionInput: S.optional(__S(118, __c14, 6)) }),
      ).annotate({ identifier: "GluePropertiesInput" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ clusterName: S.String })).annotate({
        identifier: "HyperPodPropertiesInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ glueLineageSyncEnabled: S.optional(S.Boolean), roleArn: S.optional(S.String) }),
      ).annotate({ identifier: "IamPropertiesInput" });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ clusterName: S.String }),
        /*@__PURE__*/ S.Struct({ workgroupName: S.String }),
      ]);
    case 3:
      return S.suspend(() => S.Struct({ password: SensitiveString, username: S.String })).annotate({
        identifier: "UsernamePassword",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ secretArn: S.String }),
        /*@__PURE__*/ S.Struct({ usernamePassword: __S(123, __c15, 3) }),
      ]);
    case 5:
      return S.suspend(() => S.Struct({ schedule: S.optional(S.String) })).annotate({
        identifier: "LineageSyncSchedule",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ enabled: S.optional(S.Boolean), schedule: S.optional(__S(125, __c15, 5)) }),
      ).annotate({
        identifier: "RedshiftLineageSyncConfigurationInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          storage: S.optional(__S(122, __c15, 2)),
          databaseName: S.optional(S.String),
          host: S.optional(S.String),
          port: S.optional(S.Number),
          credentials: S.optional(__S(124, __c15, 4)),
          lineageSync: S.optional(__S(126, __c15, 6)),
        }),
      ).annotate({ identifier: "RedshiftPropertiesInput" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          computeArn: S.optional(S.String),
          instanceProfileArn: S.optional(S.String),
          javaVirtualEnv: S.optional(S.String),
          logUri: S.optional(S.String),
          pythonVirtualEnv: S.optional(S.String),
          runtimeRole: S.optional(S.String),
          trustedCertificatesS3Uri: S.optional(S.String),
          managedEndpointArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "SparkEmrPropertiesInput" });
    case 1:
      return S.suspend(() => S.Struct({ connection: S.optional(S.String) })).annotate({
        identifier: "SparkGlueArgs",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          additionalArgs: S.optional(__S(129, __c16, 1)),
          glueConnectionName: S.optional(S.String),
          glueConnectionNames: S.optional(__S(5, __c0, 5)),
          glueVersion: S.optional(S.String),
          idleTimeout: S.optional(S.Number),
          javaVirtualEnv: S.optional(S.String),
          numberOfWorkers: S.optional(S.Number),
          pythonVirtualEnv: S.optional(S.String),
          workerType: S.optional(S.String),
        }),
      ).annotate({ identifier: "SparkGluePropertiesInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          s3Uri: S.String,
          s3AccessGrantLocationId: S.optional(S.String),
          registerS3AccessGrantLocation: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "S3PropertiesInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          connectionProperties: S.optional(__S(107, __c13, 3)),
          physicalConnectionRequirements: S.optional(__S(111, __c13, 7)),
          name: S.optional(S.String),
          description: S.optional(S.String),
          validateCredentials: S.optional(S.Boolean),
          validateForComputeEnvironments: S.optional(__S(8, __c1, 0)),
          sparkProperties: S.optional(__S(107, __c13, 3)),
          athenaProperties: S.optional(__S(107, __c13, 3)),
          pythonProperties: S.optional(__S(107, __c13, 3)),
          authenticationConfiguration: S.optional(__S(117, __c14, 5)),
        }),
      ).annotate({ identifier: "ConnectivityProperties" });
    case 5:
      return S.suspend(() =>
        S.Struct({ usernameAttribute: S.String, prefix: S.optional(S.String) }),
      ).annotate({ identifier: "IdentityMapping" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          timezone: S.optional(S.String),
          enabled: S.Boolean,
          schedule: S.optional(S.String),
        }),
      ).annotate({ identifier: "LineageSyncInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          connectivityProperties: S.optional(__S(132, __c16, 4)),
          snowflakeRole: S.String,
          identityMapping: __S(133, __c16, 5),
          lineageSync: S.optional(__S(134, __c16, 6)),
        }),
      ).annotate({ identifier: "SnowflakePropertiesInput" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          isEnabled: S.Boolean,
          profileArn: S.optional(S.String),
          authMode: S.optional(S.String),
        }),
      ).annotate({ identifier: "AmazonQPropertiesInput" });
    case 1:
      return S.suspend(() => S.Struct({ trackingServerArn: S.optional(S.String) })).annotate({
        identifier: "MlflowPropertiesInput",
      });
    case 2:
      return S.suspend(() => S.Struct({ mwaaEnvironmentName: S.optional(S.String) })).annotate({
        identifier: "WorkflowsMwaaPropertiesInput",
      });
    case 3:
      return S.suspend(() => S.Struct({ glueLineageSyncEnabled: S.optional(S.Boolean) })).annotate({
        identifier: "LakehousePropertiesInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          vpcId: S.String,
          subnetIds: __S(5, __c0, 5),
          securityGroupId: S.optional(S.String),
        }),
      ).annotate({ identifier: "VpcPropertiesInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ codeConnectionArn: S.String, repositoryId: S.String, defaultBranch: S.String }),
      ).annotate({ identifier: "GitPropertiesInput" });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ athenaProperties: __S(110, __c13, 6) }),
        /*@__PURE__*/ S.Struct({ glueProperties: __S(119, __c14, 7) }),
        /*@__PURE__*/ S.Struct({ hyperPodProperties: __S(120, __c15, 0) }),
        /*@__PURE__*/ S.Struct({ iamProperties: __S(121, __c15, 1) }),
        /*@__PURE__*/ S.Struct({ redshiftProperties: __S(127, __c15, 7) }),
        /*@__PURE__*/ S.Struct({ sparkEmrProperties: __S(128, __c16, 0) }),
        /*@__PURE__*/ S.Struct({ sparkGlueProperties: __S(130, __c16, 2) }),
        /*@__PURE__*/ S.Struct({ s3Properties: __S(131, __c16, 3) }),
        /*@__PURE__*/ S.Struct({ snowflakeProperties: __S(135, __c16, 7) }),
        /*@__PURE__*/ S.Struct({ amazonQProperties: __S(136, __c17, 0) }),
        /*@__PURE__*/ S.Struct({ mlflowProperties: __S(137, __c17, 1) }),
        /*@__PURE__*/ S.Struct({ workflowsMwaaProperties: __S(138, __c17, 2) }),
        /*@__PURE__*/ S.Struct({
          workflowsServerlessProperties: __S(70, __c8, 6),
        }),
        /*@__PURE__*/ S.Struct({ lakehouseProperties: __S(139, __c17, 3) }),
        /*@__PURE__*/ S.Struct({ vpcProperties: __S(140, __c17, 4) }),
        /*@__PURE__*/ S.Struct({ gitProperties: __S(141, __c17, 5) }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          awsLocation: S.optional(__S(106, __c13, 2)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          configurations: S.optional(__S(109, __c13, 5)),
          description: S.optional(SensitiveString),
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          environmentIdentifier: S.optional(S.String),
          name: S.String,
          props: S.optional(__S(142, __c17, 6)),
          enableTrustedIdentityPropagation: S.optional(S.Boolean),
          scope: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/connections" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateConnectionInput" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          authenticationType: S.optional(S.String),
          secretArn: S.optional(S.String),
          oAuth2Properties: S.optional(__S(115, __c14, 3)),
        }),
      ).annotate({
        identifier: "AuthenticationConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          description: S.optional(S.String),
          connectionType: S.optional(S.String),
          matchCriteria: S.optional(__S(5, __c0, 5)),
          connectionProperties: S.optional(__S(107, __c13, 3)),
          sparkProperties: S.optional(__S(107, __c13, 3)),
          athenaProperties: S.optional(__S(107, __c13, 3)),
          pythonProperties: S.optional(__S(107, __c13, 3)),
          physicalConnectionRequirements: S.optional(__S(111, __c13, 7)),
          creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedBy: S.optional(S.String),
          status: S.optional(S.String),
          statusReason: S.optional(S.String),
          lastConnectionValidationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          authenticationConfiguration: S.optional(__S(144, __c18, 0)),
          connectionSchemaVersion: S.optional(S.Number),
          compatibleComputeEnvironments: S.optional(__S(8, __c1, 0)),
        }),
      ).annotate({ identifier: "GlueConnection" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          awsLocation: S.optional(__S(106, __c13, 2)),
          glueConnectionName: S.optional(S.String),
          glueConnectionNames: S.optional(__S(5, __c0, 5)),
          glueConnection: S.optional(__S(145, __c18, 1)),
          enableTrustedIdentityPropagation: S.optional(S.Boolean),
          host: S.optional(S.String),
          port: S.optional(S.Number),
          protocol: S.optional(S.String),
          stage: S.optional(S.String),
        }),
      ).annotate({ identifier: "PhysicalEndpoint" });
    case 3:
      return S.Array(__S(146, __c18, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ status: S.optional(S.String), errorMessage: S.optional(S.String) }),
      ).annotate({ identifier: "GluePropertiesOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String,
          clusterArn: S.optional(S.String),
          orchestrator: S.optional(S.String),
        }),
      ).annotate({ identifier: "HyperPodPropertiesOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          environmentId: S.optional(S.String),
          glueLineageSyncEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "IamPropertiesOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          lineageJobId: S.optional(S.String),
          enabled: S.optional(S.Boolean),
          schedule: S.optional(__S(125, __c15, 5)),
        }),
      ).annotate({
        identifier: "RedshiftLineageSyncConfigurationOutput",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          storage: S.optional(__S(122, __c15, 2)),
          credentials: S.optional(__S(124, __c15, 4)),
          isProvisionedSecret: S.optional(S.Boolean),
          jdbcIamUrl: S.optional(S.String),
          jdbcUrl: S.optional(S.String),
          redshiftTempDir: S.optional(S.String),
          lineageSync: S.optional(__S(151, __c18, 7)),
          status: S.optional(S.String),
          databaseName: S.optional(S.String),
        }),
      ).annotate({ identifier: "RedshiftPropertiesOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ id: S.optional(S.String), token: S.optional(S.String) }),
      ).annotate({
        identifier: "ManagedEndpointCredentials",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          computeArn: S.optional(S.String),
          credentials: S.optional(__S(123, __c15, 3)),
          credentialsExpiration: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          governanceType: S.optional(S.String),
          instanceProfileArn: S.optional(S.String),
          javaVirtualEnv: S.optional(S.String),
          livyEndpoint: S.optional(S.String),
          logUri: S.optional(S.String),
          pythonVirtualEnv: S.optional(S.String),
          runtimeRole: S.optional(S.String),
          trustedCertificatesS3Uri: S.optional(S.String),
          certificateData: S.optional(S.String),
          managedEndpointArn: S.optional(S.String),
          managedEndpointCredentials: S.optional(__S(153, __c19, 1)),
        }),
      ).annotate({ identifier: "SparkEmrPropertiesOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          additionalArgs: S.optional(__S(129, __c16, 1)),
          glueConnectionName: S.optional(S.String),
          glueConnectionNames: S.optional(__S(5, __c0, 5)),
          glueVersion: S.optional(S.String),
          idleTimeout: S.optional(S.Number),
          javaVirtualEnv: S.optional(S.String),
          numberOfWorkers: S.optional(S.Number),
          pythonVirtualEnv: S.optional(S.String),
          workerType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SparkGluePropertiesOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          s3Uri: S.String,
          s3AccessGrantLocationId: S.optional(S.String),
          registerS3AccessGrantLocation: S.optional(S.Boolean),
          status: S.optional(S.String),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "S3PropertiesOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          lineageJobId: S.optional(S.String),
          timezone: S.optional(S.String),
          enabled: S.optional(S.Boolean),
          schedule: S.optional(S.String),
        }),
      ).annotate({ identifier: "LineageSyncOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          snowflakeRole: S.String,
          identityMapping: __S(133, __c16, 5),
          lineageSync: __S(157, __c19, 5),
          status: S.String,
          errorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SnowflakePropertiesOutput",
      });
    case 7:
      return S.suspend(() => S.Struct({ glueLineageSyncEnabled: S.optional(S.Boolean) })).annotate({
        identifier: "LakehousePropertiesOutput",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          vpcId: S.String,
          subnetIds: __S(5, __c0, 5),
          status: S.String,
          securityGroupId: S.optional(S.String),
          glueConnectionNames: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({ identifier: "VpcPropertiesOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          codeConnectionArn: S.String,
          repositoryId: S.String,
          defaultBranch: S.String,
          status: S.optional(S.String),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "GitPropertiesOutput" });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ athenaProperties: __S(110, __c13, 6) }),
        /*@__PURE__*/ S.Struct({ glueProperties: __S(148, __c18, 4) }),
        /*@__PURE__*/ S.Struct({ hyperPodProperties: __S(149, __c18, 5) }),
        /*@__PURE__*/ S.Struct({ iamProperties: __S(150, __c18, 6) }),
        /*@__PURE__*/ S.Struct({ redshiftProperties: __S(152, __c19, 0) }),
        /*@__PURE__*/ S.Struct({ sparkEmrProperties: __S(154, __c19, 2) }),
        /*@__PURE__*/ S.Struct({ sparkGlueProperties: __S(155, __c19, 3) }),
        /*@__PURE__*/ S.Struct({ s3Properties: __S(156, __c19, 4) }),
        /*@__PURE__*/ S.Struct({ snowflakeProperties: __S(158, __c19, 6) }),
        /*@__PURE__*/ S.Struct({ amazonQProperties: __S(136, __c17, 0) }),
        /*@__PURE__*/ S.Struct({ mlflowProperties: __S(137, __c17, 1) }),
        /*@__PURE__*/ S.Struct({ workflowsMwaaProperties: __S(138, __c17, 2) }),
        /*@__PURE__*/ S.Struct({
          workflowsServerlessProperties: __S(70, __c8, 6),
        }),
        /*@__PURE__*/ S.Struct({ lakehouseProperties: __S(159, __c19, 7) }),
        /*@__PURE__*/ S.Struct({ vpcProperties: __S(160, __c20, 0) }),
        /*@__PURE__*/ S.Struct({ gitProperties: __S(161, __c20, 1) }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          connectionId: S.String,
          configurations: S.optional(__S(109, __c13, 5)),
          description: S.optional(SensitiveString),
          domainId: S.String,
          domainUnitId: S.String,
          environmentId: S.optional(S.String),
          name: S.String,
          physicalEndpoints: __S(147, __c18, 3),
          projectId: S.optional(S.String),
          props: S.optional(__S(162, __c20, 2)),
          type: S.String,
          scope: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateConnectionOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          itemType: S.String,
          identifier: S.String,
          revision: S.optional(S.String),
          glossaryTerms: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({ identifier: "DataProductItem" });
    case 5:
      return S.Array(__S(164, __c20, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          name: SensitiveString,
          owningProjectIdentifier: S.String,
          description: S.optional(SensitiveString),
          glossaryTerms: S.optional(__S(5, __c0, 5)),
          formsInput: S.optional(__S(62, __c7, 6)),
          items: S.optional(__S(165, __c20, 5)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/data-products" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateDataProductInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          id: S.String,
          revision: S.String,
          owningProjectId: S.String,
          name: SensitiveString,
          status: S.String,
          description: S.optional(SensitiveString),
          glossaryTerms: S.optional(__S(5, __c0, 5)),
          items: S.optional(__S(165, __c20, 5)),
          formsOutput: S.optional(__S(32, __c4, 0)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          firstRevisionCreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          firstRevisionCreatedBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateDataProductOutput" });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          name: SensitiveString,
          description: S.optional(SensitiveString),
          glossaryTerms: S.optional(__S(5, __c0, 5)),
          items: S.optional(__S(165, __c20, 5)),
          formsInput: S.optional(__S(62, __c7, 6)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v2/domains/{domainIdentifier}/data-products/{identifier}/revisions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateDataProductRevisionInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          id: S.String,
          revision: S.String,
          owningProjectId: S.String,
          name: SensitiveString,
          status: S.String,
          description: S.optional(SensitiveString),
          glossaryTerms: S.optional(__S(5, __c0, 5)),
          items: S.optional(__S(165, __c20, 5)),
          formsOutput: S.optional(__S(32, __c4, 0)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          firstRevisionCreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          firstRevisionCreatedBy: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateDataProductRevisionOutput",
      });
    case 2:
      return S.suspend(() => S.Struct({ type: S.String, expression: S.String })).annotate({
        identifier: "FilterExpression",
      });
    case 3:
      return S.Array(__S(170, __c21, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          databaseName: S.String,
          schemaName: S.optional(S.String),
          filterExpressions: S.optional(__S(171, __c21, 3)),
        }),
      ).annotate({
        identifier: "RelationalFilterConfiguration",
      });
    case 5:
      return S.Array(__S(172, __c21, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          dataAccessRole: S.optional(S.String),
          relationalFilterConfigurations: __S(173, __c21, 5),
          autoImportDataQualityResult: S.optional(S.Boolean),
          catalogName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GlueRunConfigurationInput",
      });
    case 7:
      return S.suspend(() => S.Struct({ secretManagerArn: S.String })).annotate({
        identifier: "RedshiftCredentialConfiguration",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ workgroupName: S.String })).annotate({
        identifier: "RedshiftServerlessStorage",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ redshiftClusterSource: __S(120, __c15, 0) }),
        /*@__PURE__*/ S.Struct({ redshiftServerlessSource: __S(176, __c22, 0) }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          dataAccessRole: S.optional(S.String),
          relationalFilterConfigurations: __S(173, __c21, 5),
          redshiftCredentialConfiguration: S.optional(__S(175, __c21, 7)),
          redshiftStorage: S.optional(__S(177, __c22, 1)),
        }),
      ).annotate({
        identifier: "RedshiftRunConfigurationInput",
      });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ __S(5, __c0, 5).pipe(S.optional));
    case 4:
      return S.suspend(() => S.Struct({ trackingAssets: __S(179, __c22, 3) })).annotate({
        identifier: "SageMakerRunConfigurationInput",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ glueRunConfiguration: __S(174, __c21, 6) }),
        /*@__PURE__*/ S.Struct({ redshiftRunConfiguration: __S(178, __c22, 2) }),
        /*@__PURE__*/ S.Struct({ sageMakerRunConfiguration: __S(180, __c22, 4) }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({ enableBusinessNameGeneration: S.optional(S.Boolean) }),
      ).annotate({
        identifier: "RecommendationConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ timezone: S.optional(S.String), schedule: S.optional(S.String) }),
      ).annotate({ identifier: "ScheduleConfiguration" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: SensitiveString,
          description: S.optional(SensitiveString),
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          projectIdentifier: S.String,
          environmentIdentifier: S.optional(S.String),
          connectionIdentifier: S.optional(S.String),
          type: S.String,
          configuration: S.optional(__S(181, __c22, 5)),
          recommendation: S.optional(__S(182, __c22, 6)),
          enableSetting: S.optional(S.String),
          schedule: S.optional(__S(183, __c22, 7)),
          publishOnImport: S.optional(S.Boolean),
          assetFormsInput: S.optional(__S(62, __c7, 6)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/data-sources" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateDataSourceInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          accountId: S.optional(S.String),
          region: S.optional(S.String),
          dataAccessRole: S.optional(S.String),
          relationalFilterConfigurations: __S(173, __c21, 5),
          autoImportDataQualityResult: S.optional(S.Boolean),
          catalogName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GlueRunConfigurationOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          accountId: S.optional(S.String),
          region: S.optional(S.String),
          dataAccessRole: S.optional(S.String),
          relationalFilterConfigurations: __S(173, __c21, 5),
          redshiftCredentialConfiguration: S.optional(__S(175, __c21, 7)),
          redshiftStorage: __S(177, __c22, 1),
        }),
      ).annotate({
        identifier: "RedshiftRunConfigurationOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          accountId: S.optional(S.String),
          region: S.optional(S.String),
          trackingAssets: __S(179, __c22, 3),
        }),
      ).annotate({
        identifier: "SageMakerRunConfigurationOutput",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ glueRunConfiguration: __S(185, __c23, 1) }),
        /*@__PURE__*/ S.Struct({ redshiftRunConfiguration: __S(186, __c23, 2) }),
        /*@__PURE__*/ S.Struct({ sageMakerRunConfiguration: __S(187, __c23, 3) }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({ errorType: S.String, errorDetail: S.optional(S.String) }),
      ).annotate({ identifier: "DataSourceErrorMessage" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          status: S.optional(S.String),
          type: S.optional(S.String),
          name: SensitiveString,
          description: S.optional(SensitiveString),
          domainId: S.String,
          projectId: S.String,
          environmentId: S.optional(S.String),
          connectionId: S.optional(S.String),
          configuration: S.optional(__S(188, __c23, 4)),
          recommendation: S.optional(__S(182, __c22, 6)),
          enableSetting: S.optional(S.String),
          publishOnImport: S.optional(S.Boolean),
          assetFormsOutput: S.optional(__S(32, __c4, 0)),
          schedule: S.optional(__S(183, __c22, 7)),
          lastRunStatus: S.optional(S.String),
          lastRunAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastRunErrorMessage: S.optional(__S(189, __c23, 5)),
          errorMessage: S.optional(__S(189, __c23, 5)),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "CreateDataSourceOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          userAssignment: S.optional(S.String),
          idcInstanceArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "SingleSignOn" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          singleSignOn: S.optional(__S(191, __c23, 7)),
          domainExecutionRole: S.optional(S.String),
          kmsKeyIdentifier: S.optional(S.String),
          tags: S.optional(__S(192, __c24, 0)),
          domainVersion: S.optional(S.String),
          serviceRole: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/v2/domains" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateDomainInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          rootDomainUnitId: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          singleSignOn: S.optional(__S(191, __c23, 7)),
          domainExecutionRole: S.optional(S.String),
          arn: S.optional(S.String),
          kmsKeyIdentifier: S.optional(S.String),
          status: S.optional(S.String),
          portalUrl: S.optional(S.String),
          tags: S.optional(__S(192, __c24, 0)),
          domainVersion: S.optional(S.String),
          serviceRole: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateDomainOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          name: SensitiveString,
          parentDomainUnitIdentifier: S.String,
          description: S.optional(SensitiveString),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/domain-units" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateDomainUnitInput" });
    case 4:
      return S.suspend(() => S.Struct({ userId: S.optional(S.String) })).annotate({
        identifier: "DomainUnitUserProperties",
      });
    case 5:
      return S.suspend(() => S.Struct({ groupId: S.optional(S.String) })).annotate({
        identifier: "DomainUnitGroupProperties",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ user: __S(196, __c24, 4) }),
        /*@__PURE__*/ S.Struct({ group: __S(197, __c24, 5) }),
      ]);
    case 7:
      return S.Array(__S(198, __c24, 6));
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          domainId: S.String,
          name: SensitiveString,
          parentDomainUnitId: S.optional(S.String),
          description: S.optional(SensitiveString),
          owners: __S(199, __c24, 7),
          ancestorDomainUnitIds: __S(5, __c0, 5),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateDomainUnitOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), value: S.optional(S.String) }),
      ).annotate({ identifier: "EnvironmentParameter" });
    case 2:
      return S.Array(__S(201, __c25, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          projectIdentifier: S.String,
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          description: S.optional(S.String),
          name: S.String,
          environmentProfileIdentifier: S.optional(S.String),
          userParameters: S.optional(__S(202, __c25, 2)),
          glossaryTerms: S.optional(__S(5, __c0, 5)),
          environmentAccountIdentifier: S.optional(S.String),
          environmentAccountRegion: S.optional(S.String),
          environmentBlueprintIdentifier: S.optional(S.String),
          deploymentOrder: S.optional(S.Number),
          environmentConfigurationId: S.optional(S.String),
          environmentConfigurationName: S.optional(SensitiveString),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/environments" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateEnvironmentInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          provider: S.optional(S.String),
          name: S.optional(S.String),
          value: S.String,
          type: S.String,
        }),
      ).annotate({ identifier: "Resource" });
    case 5:
      return S.Array(__S(204, __c25, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ key: S.optional(S.String), value: S.optional(S.String) }),
      ).annotate({
        identifier: "ConfigurableActionParameter",
      });
    case 7:
      return S.Array(__S(206, __c25, 6));
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          auth: S.optional(S.String),
          parameters: __S(207, __c25, 7),
        }),
      ).annotate({
        identifier: "ConfigurableEnvironmentAction",
      });
    case 1:
      return S.Array(__S(208, __c26, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          keyName: S.String,
          description: S.optional(SensitiveString),
          fieldType: S.String,
          defaultValue: S.optional(S.String),
          isEditable: S.optional(S.Boolean),
          isOptional: S.optional(S.Boolean),
          isUpdateSupported: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "CustomParameter" });
    case 3:
      return S.Array(__S(210, __c26, 2));
    case 4:
      return S.suspend(() => S.Struct({ code: S.optional(S.String), message: S.String })).annotate({
        identifier: "EnvironmentError",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          deploymentId: S.optional(S.String),
          deploymentType: S.optional(S.String),
          deploymentStatus: S.optional(S.String),
          failureReason: S.optional(__S(212, __c26, 4)),
          messages: S.optional(__S(5, __c0, 5)),
          isDeploymentComplete: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "Deployment" });
    case 6:
      return S.suspend(() => S.Struct({ templateUrl: S.String })).annotate({
        identifier: "CloudFormationProperties",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ cloudFormation: __S(214, __c26, 6) }),
        /*@__PURE__*/ S.Struct({ manual: /*@__PURE__*/ S.Struct({}) }),
      ]);
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          startTimeoutMinutes: S.optional(S.Number),
          endTimeoutMinutes: S.optional(S.Number),
        }),
      ).annotate({ identifier: "DeploymentProperties" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          projectId: S.String,
          id: S.optional(S.String),
          domainId: S.String,
          createdBy: S.String,
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          name: SensitiveString,
          description: S.optional(SensitiveString),
          environmentProfileId: S.optional(S.String),
          awsAccountId: S.optional(S.String),
          awsAccountRegion: S.optional(S.String),
          provider: S.String,
          provisionedResources: S.optional(__S(205, __c25, 5)),
          status: S.optional(S.String),
          environmentActions: S.optional(__S(209, __c26, 1)),
          glossaryTerms: S.optional(__S(5, __c0, 5)),
          userParameters: S.optional(__S(211, __c26, 3)),
          lastDeployment: S.optional(__S(213, __c26, 5)),
          provisioningProperties: S.optional(__S(215, __c26, 7)),
          deploymentProperties: S.optional(__S(216, __c27, 0)),
          environmentBlueprintId: S.optional(S.String),
          environmentConfigurationId: S.optional(SensitiveString),
          environmentConfigurationName: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "CreateEnvironmentOutput" });
    case 2:
      return S.suspend(() => S.Struct({ uri: S.optional(S.String) })).annotate({
        identifier: "AwsConsoleLinkParameters",
      });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ awsConsoleLink: __S(218, __c27, 2) })]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          environmentIdentifier: S.String.pipe(T.HttpLabel("environmentIdentifier")),
          name: S.String,
          parameters: __S(219, __c27, 3),
          description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/actions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateEnvironmentActionInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          environmentId: S.String,
          id: S.String,
          name: S.String,
          parameters: __S(219, __c27, 3),
          description: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateEnvironmentActionOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          name: S.String,
          description: S.optional(SensitiveString),
          provisioningProperties: __S(215, __c26, 7),
          userParameters: S.optional(__S(211, __c26, 3)),
          blueprintCategory: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v2/domains/{domainIdentifier}/environment-blueprints",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateEnvironmentBlueprintInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: S.String,
          description: S.optional(SensitiveString),
          provider: S.String,
          provisioningProperties: __S(215, __c26, 7),
          deploymentProperties: S.optional(__S(216, __c27, 0)),
          userParameters: S.optional(__S(211, __c26, 3)),
          glossaryTerms: S.optional(__S(5, __c0, 5)),
          blueprintCategory: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "CreateEnvironmentBlueprintOutput",
      });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          name: SensitiveString,
          description: S.optional(SensitiveString),
          environmentBlueprintIdentifier: S.String,
          projectIdentifier: S.String,
          userParameters: S.optional(__S(202, __c25, 2)),
          awsAccountId: S.optional(S.String),
          awsAccountRegion: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/environment-profiles" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateEnvironmentProfileInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          domainId: S.String,
          awsAccountId: S.optional(S.String),
          awsAccountRegion: S.optional(S.String),
          createdBy: S.String,
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          name: SensitiveString,
          description: S.optional(SensitiveString),
          environmentBlueprintId: S.String,
          projectId: S.optional(S.String),
          userParameters: S.optional(__S(211, __c26, 3)),
        }),
      ).annotate({
        identifier: "CreateEnvironmentProfileOutput",
      });
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ smithy: S.String })]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          name: SensitiveString,
          model: __S(226, __c28, 2),
          owningProjectIdentifier: S.String,
          status: S.optional(S.String),
          description: S.optional(SensitiveString),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/form-types" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateFormTypeInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          name: SensitiveString,
          revision: S.String,
          description: S.optional(SensitiveString),
          owningProjectId: S.optional(S.String),
          originDomainId: S.optional(S.String),
          originProjectId: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateFormTypeOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          name: SensitiveString,
          owningProjectIdentifier: S.String,
          description: S.optional(SensitiveString),
          status: S.optional(S.String),
          usageRestrictions: S.optional(__S(8, __c1, 0)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/glossaries" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateGlossaryInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          id: S.String,
          name: SensitiveString,
          owningProjectId: S.String,
          description: S.optional(SensitiveString),
          status: S.optional(S.String),
          usageRestrictions: S.optional(__S(8, __c1, 0)),
        }),
      ).annotate({ identifier: "CreateGlossaryOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({ isA: S.optional(__S(5, __c0, 5)), classifies: S.optional(__S(5, __c0, 5)) }),
      ).annotate({ identifier: "TermRelations" });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          glossaryIdentifier: S.String,
          name: SensitiveString,
          status: S.optional(S.String),
          shortDescription: S.optional(SensitiveString),
          longDescription: S.optional(SensitiveString),
          termRelations: S.optional(__S(231, __c28, 7)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/glossary-terms" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateGlossaryTermInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          domainId: S.String,
          glossaryId: S.String,
          name: SensitiveString,
          status: S.String,
          shortDescription: S.optional(SensitiveString),
          longDescription: S.optional(SensitiveString),
          termRelations: S.optional(__S(231, __c28, 7)),
          usageRestrictions: S.optional(__S(8, __c1, 0)),
        }),
      ).annotate({ identifier: "CreateGlossaryTermOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          groupIdentifier: S.optional(S.String),
          rolePrincipalArn: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/group-profiles" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateGroupProfileInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainId: S.optional(S.String),
          id: S.optional(S.String),
          status: S.optional(S.String),
          groupName: S.optional(SensitiveString),
          rolePrincipalArn: S.optional(S.String),
          rolePrincipalId: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateGroupProfileOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          entityIdentifier: S.String,
          entityType: S.String,
          entityRevision: S.optional(S.String),
          action: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/listings/change-set" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateListingChangeSetInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ listingId: S.String, listingRevision: S.String, status: S.String }),
      ).annotate({
        identifier: "CreateListingChangeSetOutput",
      });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ SensitiveString.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          owningProjectIdentifier: S.String,
          name: SensitiveString,
          description: S.optional(SensitiveString),
          type: S.optional(S.String),
          metadata: S.optional(__S(238, __c29, 6)),
          parameters: S.optional(__S(192, __c24, 0)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/notebooks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateNotebookInput" });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(38, __c4, 6));
    case 1:
      return S.suspend(() =>
        S.Struct({ packageManager: S.String, packageSpecification: S.optional(S.String) }),
      ).annotate({ identifier: "PackageConfig" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          imageVersion: S.optional(S.String),
          packageConfig: S.optional(__S(241, __c30, 1)),
        }),
      ).annotate({ identifier: "EnvironmentConfig" });
    case 3:
      return S.suspend(() => S.Struct({ message: S.String })).annotate({
        identifier: "NotebookError",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          connectionId: S.String,
          repository: SensitiveString,
          branch: SensitiveString,
          commitHash: S.String,
          fileName: S.optional(S.String),
          committedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          commitMessage: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "GitMetadata" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: SensitiveString,
          owningProjectId: S.String,
          domainId: S.String,
          cellOrder: __S(240, __c30, 0),
          status: S.String,
          type: S.optional(S.String),
          description: S.optional(SensitiveString),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedBy: S.optional(S.String),
          lockedBy: S.optional(S.String),
          lockedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lockExpiresAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          computeId: S.optional(S.String),
          metadata: S.optional(__S(238, __c29, 6)),
          parameters: S.optional(__S(192, __c24, 0)),
          environmentConfiguration: S.optional(__S(242, __c30, 2)),
          error: S.optional(__S(243, __c30, 3)),
          gitMetadata: S.optional(__S(244, __c30, 4)),
        }),
      ).annotate({ identifier: "CreateNotebookOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          awsAccountId: S.String,
          regionName: S.String,
          sourceAccountPoolId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "EnvironmentResolvedAccount",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          environmentId: S.optional(S.String),
          environmentResolvedAccount: S.optional(__S(246, __c30, 6)),
          environmentConfigurationName: S.optional(SensitiveString),
          environmentParameters: S.optional(__S(202, __c25, 2)),
        }),
      ).annotate({
        identifier: "EnvironmentConfigurationUserParameter",
      });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(247, __c30, 7));
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ userIdentifier: S.String }),
        /*@__PURE__*/ S.Struct({ groupIdentifier: S.String }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({ member: __S(249, __c31, 1), designation: S.String }),
      ).annotate({
        identifier: "ProjectMembershipAssignment",
      });
    case 3:
      return S.Array(__S(250, __c31, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          name: SensitiveString,
          description: S.optional(SensitiveString),
          resourceTags: S.optional(__S(192, __c24, 0)),
          glossaryTerms: S.optional(__S(5, __c0, 5)),
          domainUnitId: S.optional(S.String),
          projectProfileId: S.optional(S.String),
          userParameters: S.optional(__S(248, __c31, 0)),
          projectCategory: S.optional(S.String),
          projectExecutionRole: S.optional(S.String),
          membershipAssignments: S.optional(__S(251, __c31, 3)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/projects" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateProjectInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ code: S.optional(S.String), message: S.optional(S.String) }),
      ).annotate({ identifier: "ProjectDeletionError" });
    case 6:
      return S.Array(__S(253, __c31, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ key: S.String, value: S.String, source: S.String }),
      ).annotate({ identifier: "ResourceTag" });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(255, __c31, 7));
    case 1:
      return S.Array(__S(212, __c26, 4));
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(257, __c32, 1).pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          overallDeploymentStatus: S.optional(S.String),
          environmentFailureReasons: S.optional(__S(258, __c32, 2)),
        }),
      ).annotate({
        identifier: "EnvironmentDeploymentDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          id: S.String,
          name: SensitiveString,
          description: S.optional(SensitiveString),
          projectStatus: S.optional(S.String),
          failureReasons: S.optional(__S(254, __c31, 6)),
          createdBy: S.String,
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          resourceTags: S.optional(__S(256, __c32, 0)),
          glossaryTerms: S.optional(__S(5, __c0, 5)),
          domainUnitId: S.optional(S.String),
          projectProfileId: S.optional(S.String),
          userParameters: S.optional(__S(248, __c31, 0)),
          environmentDeploymentDetails: S.optional(__S(259, __c32, 3)),
          projectCategory: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateProjectOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          projectIdentifier: S.String.pipe(T.HttpLabel("projectIdentifier")),
          member: __S(249, __c31, 1),
          designation: S.String,
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v2/domains/{domainIdentifier}/projects/{projectIdentifier}/createMembership",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateProjectMembershipInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ key: S.String, value: S.String, isValueEditable: S.Boolean }),
      ).annotate({ identifier: "ResourceTagParameter" });
    case 7:
      return S.Array(__S(262, __c32, 6));
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          value: S.optional(S.String),
          isEditable: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "EnvironmentConfigurationParameter",
      });
    case 1:
      return S.Array(__S(264, __c33, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          ssmPath: S.optional(S.String),
          parameterOverrides: S.optional(__S(265, __c33, 1)),
          resolvedParameters: S.optional(__S(265, __c33, 1)),
        }),
      ).annotate({
        identifier: "EnvironmentConfigurationParametersDetails",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ awsAccountId: S.String }),
        /*@__PURE__*/ S.Struct({ awsAccountIdPath: S.String }),
      ]);
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ regionName: S.String }),
        /*@__PURE__*/ S.Struct({ regionNamePath: S.String }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: SensitiveString,
          id: S.optional(SensitiveString),
          environmentBlueprintId: S.String,
          description: S.optional(SensitiveString),
          deploymentMode: S.optional(S.String),
          configurationParameters: S.optional(__S(266, __c33, 2)),
          awsAccount: S.optional(__S(267, __c33, 3)),
          accountPools: S.optional(__S(5, __c0, 5)),
          awsRegion: S.optional(Region),
          deploymentOrder: S.optional(S.Number),
        }),
      ).annotate({ identifier: "EnvironmentConfiguration" });
    case 6:
      return S.Array(__S(269, __c33, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          name: SensitiveString,
          description: S.optional(SensitiveString),
          status: S.optional(S.String),
          projectResourceTags: S.optional(__S(263, __c32, 7)),
          allowCustomProjectResourceTags: S.optional(S.Boolean),
          projectResourceTagsDescription: S.optional(SensitiveString),
          environmentConfigurations: S.optional(__S(270, __c33, 6)),
          domainUnitIdentifier: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/project-profiles" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateProjectProfileInput",
      });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          id: S.String,
          name: SensitiveString,
          description: S.optional(SensitiveString),
          status: S.optional(S.String),
          projectResourceTags: S.optional(__S(263, __c32, 7)),
          allowCustomProjectResourceTags: S.optional(S.Boolean),
          projectResourceTagsDescription: S.optional(SensitiveString),
          environmentConfigurations: S.optional(__S(270, __c33, 6)),
          createdBy: S.String,
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          domainUnitId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateProjectProfileOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ domainUnitId: S.String, includeChildDomainUnits: S.optional(S.Boolean) }),
      ).annotate({ identifier: "DomainUnitTarget" });
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ domainUnitTarget: __S(273, __c34, 1) })]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          selectionMode: S.String,
          specificAssetTypes: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({ identifier: "AssetTypesForRule" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          selectionMode: S.String,
          specificProjects: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({ identifier: "ProjectsForRule" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          assetType: S.optional(__S(275, __c34, 3)),
          dataProduct: S.optional(S.Boolean),
          project: S.optional(__S(276, __c34, 4)),
        }),
      ).annotate({ identifier: "RuleScope" });
    case 6:
      return S.suspend(() =>
        S.Struct({ typeIdentifier: S.String, typeRevision: S.String }),
      ).annotate({ identifier: "MetadataFormReference" });
    case 7:
      return S.Array(__S(278, __c34, 6));
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ requiredMetadataForms: S.optional(__S(279, __c34, 7)) }),
      ).annotate({
        identifier: "MetadataFormEnforcementDetail",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ requiredGlossaryTermIds: S.optional(__S(5, __c0, 5)) }),
      ).annotate({
        identifier: "GlossaryTermEnforcementDetail",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ metadataFormEnforcementDetail: __S(280, __c35, 0) }),
        /*@__PURE__*/ S.Struct({ glossaryTermEnforcementDetail: __S(281, __c35, 1) }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          name: SensitiveString,
          target: __S(274, __c34, 2),
          action: S.String,
          scope: __S(277, __c34, 5),
          detail: __S(282, __c35, 2),
          description: S.optional(SensitiveString),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/rules" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateRuleInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          identifier: S.String,
          name: SensitiveString,
          ruleType: S.String,
          target: __S(274, __c34, 2),
          action: S.String,
          scope: __S(277, __c34, 5),
          detail: __S(282, __c35, 2),
          targetType: S.optional(S.String),
          description: S.optional(SensitiveString),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          createdBy: S.String,
        }),
      ).annotate({ identifier: "CreateRuleOutput" });
    case 5:
      return S.suspend(() => S.Struct({ identifier: S.String, revision: S.String })).annotate({
        identifier: "ListingRevisionInput",
      });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ listing: __S(285, __c35, 5) })]);
    case 7:
      return S.suspend(() => S.Struct({ assetId: S.String, targetName: S.String })).annotate({
        identifier: "AssetTargetNameMap",
      });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(287, __c35, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          environmentIdentifier: S.String,
          subscriptionTargetIdentifier: S.optional(S.String),
          grantedEntity: __S(286, __c35, 6),
          assetTargetNames: S.optional(__S(288, __c36, 0)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/subscription-grants" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateSubscriptionGrantInput",
      });
    case 2:
      return S.suspend(() => S.Struct({ id: S.String, revision: S.String })).annotate({
        identifier: "ListingRevision",
      });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ listing: __S(290, __c36, 2) })]);
    case 4:
      return S.suspend(() => S.Struct({ message: S.optional(S.String) })).annotate({
        identifier: "FailureCause",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          assetId: S.String,
          assetRevision: S.String,
          status: S.String,
          targetName: S.optional(S.String),
          failureCause: S.optional(__S(292, __c36, 4)),
          grantedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          failureTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          assetScope: S.optional(__S(23, __c2, 7)),
          permissions: S.optional(__S(9, __c1, 1)),
        }),
      ).annotate({ identifier: "SubscribedAsset" });
    case 6:
      return S.Array(__S(293, __c36, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          createdBy: S.String,
          updatedBy: S.optional(S.String),
          domainId: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          environmentId: S.optional(S.String),
          subscriptionTargetId: S.String,
          grantedEntity: __S(291, __c36, 3),
          status: S.String,
          assets: S.optional(__S(294, __c36, 6)),
          subscriptionId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateSubscriptionGrantOutput",
      });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ identifier: S.optional(S.String) })).annotate({
        identifier: "SubscribedProjectInput",
      });
    case 1:
      return S.suspend(() => S.Struct({ identifier: S.optional(S.String) })).annotate({
        identifier: "SubscribedIamPrincipalInput",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ project: __S(296, __c37, 0) }),
        /*@__PURE__*/ S.Struct({ user: __S(296, __c37, 0) }),
        /*@__PURE__*/ S.Struct({ group: __S(296, __c37, 0) }),
        /*@__PURE__*/ S.Struct({ iam: __S(297, __c37, 1) }),
      ]);
    case 3:
      return S.Array(__S(298, __c37, 2));
    case 4:
      return S.suspend(() => S.Struct({ identifier: S.String })).annotate({
        identifier: "SubscribedListingInput",
      });
    case 5:
      return S.Array(__S(300, __c37, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          subscribedPrincipals: __S(299, __c37, 3),
          subscribedListings: __S(301, __c37, 5),
          requestReason: SensitiveString,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          metadataForms: S.optional(__S(62, __c7, 6)),
          assetPermissions: S.optional(__S(11, __c1, 3)),
          assetScopes: S.optional(__S(7, __c0, 7)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/subscription-requests" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateSubscriptionRequestInput",
      });
    case 7:
      return S.suspend(() => S.Struct({ formName: S.String, content: S.String })).annotate({
        identifier: "SubscriptionTargetForm",
      });
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(303, __c37, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          environmentIdentifier: S.String.pipe(T.HttpLabel("environmentIdentifier")),
          name: SensitiveString,
          type: S.String,
          subscriptionTargetConfig: __S(304, __c38, 0),
          authorizedPrincipals: __S(5, __c0, 5),
          manageAccessRole: S.String,
          applicableAssetTypes: __S(5, __c0, 5),
          provider: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          subscriptionGrantCreationMode: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateSubscriptionTargetInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          authorizedPrincipals: __S(5, __c0, 5),
          domainId: S.String,
          projectId: S.String,
          environmentId: S.String,
          name: SensitiveString,
          type: S.String,
          createdBy: S.String,
          updatedBy: S.optional(S.String),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          manageAccessRole: S.optional(S.String),
          applicableAssetTypes: __S(5, __c0, 5),
          subscriptionTargetConfig: __S(304, __c38, 0),
          provider: S.String,
          subscriptionGrantCreationMode: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateSubscriptionTargetOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          userIdentifier: S.String,
          userType: S.optional(S.String),
          sessionName: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/user-profiles" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateUserProfileInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          domainId: S.optional(S.String),
          id: S.optional(S.String),
          type: S.optional(S.String),
          status: S.optional(S.String),
          details: S.optional(__S(16, __c2, 0)),
        }),
      ).annotate({ identifier: "CreateUserProfileOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/domains/{domainIdentifier}/account-pools/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteAccountPoolInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v2/domains/{domainIdentifier}/assets/{identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteAssetInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          assetIdentifier: S.String.pipe(T.HttpLabel("assetIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/domains/{domainIdentifier}/assets/{assetIdentifier}/filters/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteAssetFilterInput" });
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/domains/{domainIdentifier}/asset-types/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteAssetTypeInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/domains/{domainIdentifier}/connections/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteConnectionInput" });
    case 2:
      return S.suspend(() => S.Struct({ status: S.optional(S.String) })).annotate({
        identifier: "DeleteConnectionOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")) }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/domains/{domainIdentifier}/data-export-configuration",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteDataExportConfigurationInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/domains/{domainIdentifier}/data-products/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteDataProductInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
          retainPermissionsOnRevokeFailure: S.optional(S.Boolean).pipe(
            T.HttpQuery("retainPermissionsOnRevokeFailure"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/domains/{domainIdentifier}/data-sources/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteDataSourceInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          databaseName: S.String,
          schemaName: S.optional(S.String),
          status: S.String,
          failureCause: S.optional(S.String),
        }),
      ).annotate({ identifier: "SelfGrantStatusDetail" });
    case 7:
      return S.Array(__S(318, __c39, 6));
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ selfGrantStatusDetails: __S(319, __c39, 7) })).annotate({
        identifier: "GlueSelfGrantStatusOutput",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ glueSelfGrantStatus: __S(320, __c40, 0) }),
        /*@__PURE__*/ S.Struct({ redshiftSelfGrantStatus: __S(320, __c40, 0) }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          status: S.optional(S.String),
          type: S.optional(S.String),
          name: SensitiveString,
          description: S.optional(SensitiveString),
          domainId: S.String,
          projectId: S.String,
          environmentId: S.optional(S.String),
          connectionId: S.optional(S.String),
          configuration: S.optional(__S(188, __c23, 4)),
          enableSetting: S.optional(S.String),
          publishOnImport: S.optional(S.Boolean),
          assetFormsOutput: S.optional(__S(32, __c4, 0)),
          schedule: S.optional(__S(183, __c22, 7)),
          lastRunStatus: S.optional(S.String),
          lastRunAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastRunErrorMessage: S.optional(__S(189, __c23, 5)),
          errorMessage: S.optional(__S(189, __c23, 5)),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          selfGrantStatus: S.optional(__S(321, __c40, 1)),
          retainPermissionsOnRevokeFailure: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "DeleteDataSourceOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
          skipDeletionCheck: S.optional(S.Boolean).pipe(T.HttpQuery("skipDeletionCheck")),
          cascadeDelete: S.optional(S.Boolean).pipe(T.HttpQuery("cascadeDelete")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v2/domains/{identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteDomainInput" });
    case 4:
      return S.suspend(() => S.Struct({ status: S.String })).annotate({
        identifier: "DeleteDomainOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/domains/{domainIdentifier}/domain-units/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteDomainUnitInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/domains/{domainIdentifier}/environments/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteEnvironmentInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          environmentIdentifier: S.String.pipe(T.HttpLabel("environmentIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/actions/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteEnvironmentActionInput",
      });
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteEnvironmentActionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/domains/{domainIdentifier}/environment-blueprints/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteEnvironmentBlueprintInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          environmentBlueprintIdentifier: S.String.pipe(
            T.HttpLabel("environmentBlueprintIdentifier"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/domains/{domainIdentifier}/environment-blueprint-configurations/{environmentBlueprintIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteEnvironmentBlueprintConfigurationInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/domains/{domainIdentifier}/environment-profiles/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteEnvironmentProfileInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          formTypeIdentifier: S.String.pipe(T.HttpLabel("formTypeIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/domains/{domainIdentifier}/form-types/{formTypeIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteFormTypeInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/domains/{domainIdentifier}/glossaries/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteGlossaryInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/domains/{domainIdentifier}/glossary-terms/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteGlossaryTermInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/domains/{domainIdentifier}/lineage/events/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteLineageEventInput" });
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          domainId: S.optional(S.String),
          processingStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "DeleteLineageEventOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/domains/{domainIdentifier}/listings/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteListingInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/domains/{domainIdentifier}/notebooks/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteNotebookInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          skipDeletionCheck: S.optional(S.Boolean).pipe(T.HttpQuery("skipDeletionCheck")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/domains/{domainIdentifier}/projects/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteProjectInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          projectIdentifier: S.String.pipe(T.HttpLabel("projectIdentifier")),
          member: __S(249, __c31, 1),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v2/domains/{domainIdentifier}/projects/{projectIdentifier}/deleteMembership",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteProjectMembershipInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/domains/{domainIdentifier}/project-profiles/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteProjectProfileInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v2/domains/{domainIdentifier}/rules/{identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteRuleInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/domains/{domainIdentifier}/subscription-grants/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteSubscriptionGrantInput",
      });
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/domains/{domainIdentifier}/subscription-requests/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteSubscriptionRequestInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          environmentIdentifier: S.String.pipe(T.HttpLabel("environmentIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteSubscriptionTargetInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          entityIdentifier: S.String.pipe(T.HttpLabel("entityIdentifier")),
          entityType: S.String.pipe(T.HttpLabel("entityType")),
          formName: S.String.pipe(T.HttpQuery("formName")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/time-series-data-points",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteTimeSeriesDataPointsInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          environmentIdentifier: S.String.pipe(T.HttpLabel("environmentIdentifier")),
          environmentRoleArn: S.String.pipe(T.HttpLabel("environmentRoleArn")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/roles/{environmentRoleArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateEnvironmentRoleInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          entityIdentifier: S.String.pipe(T.HttpLabel("entityIdentifier")),
          entityType: S.String.pipe(T.HttpLabel("entityType")),
          governedGlossaryTerms: __S(5, __c0, 5),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/disassociate-governed-terms",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateGovernedTermsInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/account-pools/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAccountPoolInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          revision: S.optional(S.String).pipe(T.HttpQuery("revision")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/domains/{domainIdentifier}/assets/{identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAssetInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: SensitiveString,
          typeIdentifier: S.String,
          typeRevision: S.String,
          externalIdentifier: S.optional(S.String),
          revision: S.String,
          description: S.optional(SensitiveString),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          firstRevisionCreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          firstRevisionCreatedBy: S.optional(S.String),
          glossaryTerms: S.optional(__S(5, __c0, 5)),
          governedGlossaryTerms: S.optional(__S(5, __c0, 5)),
          owningProjectId: S.String,
          domainId: S.String,
          listing: S.optional(__S(82, __c10, 2)),
          formsOutput: __S(32, __c4, 0),
          readOnlyFormsOutput: S.optional(__S(32, __c4, 0)),
          latestTimeSeriesDataPointFormsOutput: S.optional(__S(84, __c10, 4)),
        }),
      ).annotate({ identifier: "GetAssetOutput" });
  }
}
function __c44(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          assetIdentifier: S.String.pipe(T.HttpLabel("assetIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/assets/{assetIdentifier}/filters/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAssetFilterInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          revision: S.optional(S.String).pipe(T.HttpQuery("revision")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/asset-types/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAssetTypeInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          name: S.String,
          revision: S.String,
          description: S.optional(SensitiveString),
          formsOutput: __S(104, __c13, 0),
          owningProjectId: S.String,
          originDomainId: S.optional(S.String),
          originProjectId: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetAssetTypeOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          withSecret: S.optional(S.Boolean).pipe(T.HttpQuery("withSecret")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/connections/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetConnectionInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          accessKeyId: S.optional(S.String),
          secretAccessKey: S.optional(SensitiveString),
          sessionToken: S.optional(SensitiveString),
          expiration: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ConnectionCredentials" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          connectionCredentials: S.optional(__S(356, __c44, 4)),
          configurations: S.optional(__S(109, __c13, 5)),
          connectionId: S.String,
          description: S.optional(SensitiveString),
          domainId: S.String,
          domainUnitId: S.String,
          environmentId: S.optional(S.String),
          environmentUserRole: S.optional(S.String),
          name: S.String,
          physicalEndpoints: __S(147, __c18, 3),
          projectId: S.optional(S.String),
          props: S.optional(__S(162, __c20, 2)),
          type: S.String,
          scope: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetConnectionOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")) }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/data-export-configuration",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDataExportConfigurationInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ kmsKeyArn: S.optional(S.String), sseAlgorithm: S.optional(S.String) }),
      ).annotate({ identifier: "EncryptionConfiguration" });
  }
}
function __c45(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          isExportEnabled: S.optional(S.Boolean),
          status: S.optional(S.String),
          encryptionConfiguration: S.optional(__S(359, __c44, 7)),
          s3TableBucketArn: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "GetDataExportConfigurationOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          revision: S.optional(S.String).pipe(T.HttpQuery("revision")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/data-products/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDataProductInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/data-sources/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDataSourceInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          status: S.optional(S.String),
          type: S.optional(S.String),
          name: SensitiveString,
          description: S.optional(SensitiveString),
          domainId: S.String,
          projectId: S.String,
          environmentId: S.optional(S.String),
          connectionId: S.optional(S.String),
          configuration: S.optional(__S(188, __c23, 4)),
          recommendation: S.optional(__S(182, __c22, 6)),
          enableSetting: S.optional(S.String),
          publishOnImport: S.optional(S.Boolean),
          assetFormsOutput: S.optional(__S(32, __c4, 0)),
          schedule: S.optional(__S(183, __c22, 7)),
          lastRunStatus: S.optional(S.String),
          lastRunAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastRunErrorMessage: S.optional(__S(189, __c23, 5)),
          lastRunAssetCount: S.optional(S.Number),
          errorMessage: S.optional(__S(189, __c23, 5)),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          selfGrantStatus: S.optional(__S(321, __c40, 1)),
        }),
      ).annotate({ identifier: "GetDataSourceOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/data-source-runs/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDataSourceRunInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          added: S.optional(S.Number),
          updated: S.optional(S.Number),
          unchanged: S.optional(S.Number),
          skipped: S.optional(S.Number),
          failed: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RunStatisticsForAssets" });
    case 6:
      return S.suspend(() => S.Struct({ importStatus: S.optional(S.String) })).annotate({
        identifier: "DataSourceRunLineageSummary",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          dataSourceId: S.String,
          id: S.String,
          projectId: S.String,
          status: S.String,
          type: S.String,
          dataSourceConfigurationSnapshot: S.optional(S.String),
          runStatisticsForAssets: S.optional(__S(365, __c45, 5)),
          lineageSummary: S.optional(__S(366, __c45, 6)),
          errorMessage: S.optional(__S(189, __c23, 5)),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          startedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          stoppedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "GetDataSourceRunOutput" });
  }
}
function __c46(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ identifier: S.String.pipe(T.HttpLabel("identifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/domains/{identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDomainInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ id: S.optional(S.String), message: S.optional(S.String) }),
      ).annotate({ identifier: "FailureReason" });
    case 2:
      return S.Array(__S(369, __c46, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ successfullyDeletedProjectCount: S.optional(S.Number) }),
      ).annotate({ identifier: "DeleteProgress" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          rootDomainUnitId: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          singleSignOn: S.optional(__S(191, __c23, 7)),
          domainExecutionRole: S.String,
          arn: S.optional(S.String),
          kmsKeyIdentifier: S.optional(S.String),
          status: S.String,
          portalUrl: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          tags: S.optional(__S(192, __c24, 0)),
          domainVersion: S.optional(S.String),
          serviceRole: S.optional(S.String),
          failureReasons: S.optional(__S(370, __c46, 2)),
          deleteProgress: S.optional(__S(371, __c46, 3)),
        }),
      ).annotate({ identifier: "GetDomainOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/domain-units/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDomainUnitInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          domainId: S.String,
          name: SensitiveString,
          parentDomainUnitId: S.optional(S.String),
          description: S.optional(SensitiveString),
          owners: __S(199, __c24, 7),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          lastUpdatedBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetDomainUnitOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/environments/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetEnvironmentInput" });
  }
}
function __c47(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          environmentIdentifier: S.String.pipe(T.HttpLabel("environmentIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/actions/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetEnvironmentActionInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/environment-blueprints/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetEnvironmentBlueprintInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          environmentBlueprintIdentifier: S.String.pipe(
            T.HttpLabel("environmentBlueprintIdentifier"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/environment-blueprint-configurations/{environmentBlueprintIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetEnvironmentBlueprintConfigurationInput",
      });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ __S(107, __c13, 3).pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          identifier: S.String,
          name: S.String,
          description: S.optional(S.String),
          region: S.String,
          parameters: __S(107, __c13, 3),
        }),
      ).annotate({ identifier: "ResourceConfiguration" });
    case 5:
      return S.Array(__S(380, __c47, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          locationRegistrationRole: S.optional(S.String),
          locationRegistrationExcludeS3Locations: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({
        identifier: "LakeFormationConfiguration",
      });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ lakeFormationConfiguration: __S(382, __c47, 6) })]);
  }
}
function __c48(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(383, __c47, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          environmentBlueprintId: S.String,
          provisioningRoleArn: S.optional(S.String),
          environmentRolePermissionBoundary: S.optional(S.String),
          manageAccessRoleArn: S.optional(S.String),
          enabledRegions: S.optional(__S(5, __c0, 5)),
          regionalParameters: S.optional(__S(379, __c47, 3)),
          allowUserProvidedConfigurations: S.optional(S.Boolean),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          resourceConfigurations: S.optional(__S(381, __c47, 5)),
          provisioningConfigurations: S.optional(__S(384, __c48, 0)),
        }),
      ).annotate({
        identifier: "GetEnvironmentBlueprintConfigurationOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          environmentIdentifier: S.String.pipe(T.HttpLabel("environmentIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/credentials",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetEnvironmentCredentialsInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          accessKeyId: S.optional(S.String),
          secretAccessKey: S.optional(SensitiveString),
          sessionToken: S.optional(SensitiveString),
          expiration: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "GetEnvironmentCredentialsOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/environment-profiles/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetEnvironmentProfileInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          formTypeIdentifier: S.String.pipe(T.HttpLabel("formTypeIdentifier")),
          revision: S.optional(S.String).pipe(T.HttpQuery("revision")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/form-types/{formTypeIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetFormTypeInput" });
    case 6:
      return S.suspend(() => S.Struct({ name: SensitiveString, revision: S.String })).annotate({
        identifier: "Import",
      });
    case 7:
      return S.Array(__S(390, __c48, 6));
  }
}
function __c49(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          name: SensitiveString,
          revision: S.String,
          model: __S(226, __c28, 2),
          owningProjectId: S.optional(S.String),
          originDomainId: S.optional(S.String),
          originProjectId: S.optional(S.String),
          status: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          description: S.optional(SensitiveString),
          imports: S.optional(__S(391, __c48, 7)),
        }),
      ).annotate({ identifier: "GetFormTypeOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/glossaries/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetGlossaryInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          id: S.String,
          owningProjectId: S.String,
          name: SensitiveString,
          description: S.optional(SensitiveString),
          status: S.String,
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedBy: S.optional(S.String),
          usageRestrictions: S.optional(__S(8, __c1, 0)),
        }),
      ).annotate({ identifier: "GetGlossaryOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/glossary-terms/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetGlossaryTermInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          glossaryId: S.String,
          id: S.String,
          name: SensitiveString,
          shortDescription: S.optional(SensitiveString),
          longDescription: S.optional(SensitiveString),
          termRelations: S.optional(__S(231, __c28, 7)),
          status: S.String,
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedBy: S.optional(S.String),
          usageRestrictions: S.optional(__S(8, __c1, 0)),
        }),
      ).annotate({ identifier: "GetGlossaryTermOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          groupIdentifier: S.String.pipe(T.HttpLabel("groupIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/group-profiles/{groupIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetGroupProfileInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/get-portal-login-url" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetIamPortalLoginUrlInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ authCodeUrl: S.optional(S.String), userProfileId: S.String }),
      ).annotate({
        identifier: "GetIamPortalLoginUrlOutput",
      });
  }
}
function __c50(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/domains/{domainIdentifier}/jobRuns/{identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetJobRunInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          queryStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          queryEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          totalQueriesProcessed: S.optional(S.Number),
          numQueriesFailed: S.optional(S.Number),
          errorMessages: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({
        identifier: "LineageSqlQueryRunDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ sqlQueryRunDetails: S.optional(__S(401, __c50, 1)) }),
      ).annotate({ identifier: "LineageRunDetails" });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ lineageRunDetails: __S(402, __c50, 2) })]);
    case 4:
      return S.suspend(() => S.Struct({ message: S.String })).annotate({
        identifier: "JobRunError",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainId: S.optional(S.String),
          id: S.optional(S.String),
          jobId: S.optional(S.String),
          jobType: S.optional(S.String),
          runMode: S.optional(S.String),
          details: S.optional(__S(403, __c50, 3)),
          status: S.optional(S.String),
          error: S.optional(__S(404, __c50, 4)),
          createdBy: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "GetJobRunOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/lineage/events/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetLineageEventInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainId: S.optional(S.String).pipe(T.HttpHeader("Domain-Id")),
          id: S.optional(S.String).pipe(T.HttpHeader("Id")),
          event: S.optional(T.StreamingOutput).pipe(T.HttpPayload()),
          createdBy: S.optional(S.String).pipe(T.HttpHeader("Created-By")),
          processingStatus: S.optional(S.String).pipe(T.HttpHeader("Processing-Status")),
          eventTime: S.optional(S.Date.pipe(T.TimestampFormat("http-date"))).pipe(
            T.HttpHeader("Event-Time"),
          ),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("http-date"))).pipe(
            T.HttpHeader("Created-At"),
          ),
        }),
      ).annotate({ identifier: "GetLineageEventOutput" });
  }
}
function __c51(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          eventTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("timestamp"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/lineage/nodes/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetLineageNodeInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          eventTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "LineageNodeReference" });
    case 2:
      return S.Array(__S(409, __c51, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedBy: S.optional(S.String),
          id: S.String,
          typeName: S.String,
          typeRevision: S.optional(S.String),
          sourceIdentifier: S.optional(S.String),
          eventTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          formsOutput: S.optional(__S(32, __c4, 0)),
          upstreamNodes: S.optional(__S(410, __c51, 2)),
          downstreamNodes: S.optional(__S(410, __c51, 2)),
        }),
      ).annotate({ identifier: "GetLineageNodeOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          listingRevision: S.optional(S.String).pipe(T.HttpQuery("listingRevision")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/domains/{domainIdentifier}/listings/{identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetListingInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          assetId: S.optional(S.String),
          assetRevision: S.optional(S.String),
          assetType: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          forms: S.optional(S.String),
          latestTimeSeriesDataPointForms: S.optional(__S(84, __c10, 4)),
          glossaryTerms: S.optional(__S(22, __c2, 6)),
          governedGlossaryTerms: S.optional(__S(22, __c2, 6)),
          owningProjectId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AssetListing" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          listingId: S.optional(S.String),
          listingRevision: S.optional(S.String),
          glossaryTerms: S.optional(__S(22, __c2, 6)),
        }),
      ).annotate({ identifier: "ListingSummary" });
    case 7:
      return S.Array(__S(414, __c51, 6));
  }
}
function __c52(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          dataProductId: S.optional(S.String),
          dataProductRevision: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          forms: S.optional(S.String),
          glossaryTerms: S.optional(__S(22, __c2, 6)),
          owningProjectId: S.optional(S.String),
          items: S.optional(__S(415, __c51, 7)),
        }),
      ).annotate({ identifier: "DataProductListing" });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ assetListing: __S(413, __c51, 5) }),
        /*@__PURE__*/ S.Struct({ dataProductListing: __S(416, __c52, 0) }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          id: S.String,
          listingRevision: S.String,
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          updatedBy: S.optional(S.String),
          item: S.optional(__S(417, __c52, 1)),
          name: S.optional(S.String),
          description: S.optional(SensitiveString),
          status: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetListingOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          type: S.optional(S.String).pipe(T.HttpQuery("type")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/metadata-generation-runs/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetMetadataGenerationRunInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          identifier: S.String,
          revision: S.optional(S.String),
        }),
      ).annotate({
        identifier: "MetadataGenerationRunTarget",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          status: S.String,
          errorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "MetadataGenerationRunTypeStat",
      });
    case 6:
      return S.Array(__S(421, __c52, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          id: S.String,
          target: S.optional(__S(420, __c52, 4)),
          status: S.optional(S.String),
          type: S.optional(S.String),
          types: S.optional(__S(8, __c1, 0)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          owningProjectId: S.String,
          typeStats: S.optional(__S(422, __c52, 6)),
        }),
      ).annotate({
        identifier: "GetMetadataGenerationRunOutput",
      });
  }
}
function __c53(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/domains/{domainIdentifier}/notebooks/{identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetNotebookInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/notebook-exports/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetNotebookExportInput" });
    case 2:
      return S.suspend(() => S.Struct({ uri: S.optional(SensitiveString) })).annotate({
        identifier: "S3Destination",
      });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ s3: __S(426, __c53, 2) })]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          domainId: S.String,
          owningProjectId: S.String,
          notebookId: S.String,
          fileFormat: S.String,
          status: S.String,
          outputLocation: S.optional(__S(427, __c53, 3)),
          error: S.optional(__S(243, __c30, 3)),
          completedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetNotebookExportOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/notebook-runs/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetNotebookRunInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ instanceType: S.optional(S.String), environmentVersion: S.optional(S.String) }),
      ).annotate({ identifier: "ComputeConfig" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          networkAccessType: S.String,
          vpcId: S.optional(S.String),
          subnetIds: S.optional(__S(5, __c0, 5)),
          securityGroupIds: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({ identifier: "NetworkConfig" });
  }
}
function __c54(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ runTimeoutInMinutes: S.optional(S.Number) })).annotate({
        identifier: "TimeoutConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ projectS3Path: S.optional(S.String), kmsKeyArn: S.optional(S.String) }),
      ).annotate({ identifier: "StorageConfig" });
    case 2:
      return S.suspend(() => S.Struct({ notifyOn: __S(8, __c1, 0) })).annotate({
        identifier: "NotificationConfig",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ type: S.optional(S.String), name: S.optional(S.String) }),
      ).annotate({ identifier: "TriggerSource" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          domainId: S.String,
          owningProjectId: S.String,
          notebookId: S.String,
          scheduleId: S.optional(S.String),
          status: S.String,
          cellOrder: S.optional(__S(240, __c30, 0)),
          metadata: S.optional(__S(238, __c29, 6)),
          parameters: S.optional(__S(192, __c24, 0)),
          computeConfiguration: S.optional(__S(430, __c53, 6)),
          networkConfiguration: S.optional(__S(431, __c53, 7)),
          timeoutConfiguration: S.optional(__S(432, __c54, 0)),
          environmentConfiguration: S.optional(__S(242, __c30, 2)),
          storageConfiguration: S.optional(__S(433, __c54, 1)),
          notificationConfiguration: S.optional(__S(434, __c54, 2)),
          triggerSource: S.optional(__S(435, __c54, 3)),
          error: S.optional(__S(243, __c30, 3)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedBy: S.optional(S.String),
          startedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          completedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "GetNotebookRunOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/domains/{domainIdentifier}/projects/{identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetProjectInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/project-profiles/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetProjectProfileInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          id: S.String,
          name: SensitiveString,
          description: S.optional(SensitiveString),
          status: S.optional(S.String),
          projectResourceTags: S.optional(__S(263, __c32, 7)),
          allowCustomProjectResourceTags: S.optional(S.Boolean),
          projectResourceTagsDescription: S.optional(SensitiveString),
          environmentConfigurations: S.optional(__S(270, __c33, 6)),
          createdBy: S.String,
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          domainUnitId: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetProjectProfileOutput" });
  }
}
function __c55(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          revision: S.optional(S.String).pipe(T.HttpQuery("revision")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/domains/{domainIdentifier}/rules/{identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetRuleInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          identifier: S.String,
          revision: S.String,
          name: SensitiveString,
          ruleType: S.String,
          target: __S(274, __c34, 2),
          action: S.String,
          scope: __S(277, __c34, 5),
          detail: __S(282, __c35, 2),
          targetType: S.optional(S.String),
          description: S.optional(SensitiveString),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          createdBy: S.String,
          lastUpdatedBy: S.String,
        }),
      ).annotate({ identifier: "GetRuleOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/subscriptions/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSubscriptionInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/subscription-grants/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSubscriptionGrantInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/subscription-requests/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSubscriptionRequestDetailsInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          environmentIdentifier: S.String.pipe(T.HttpLabel("environmentIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSubscriptionTargetInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          entityIdentifier: S.String.pipe(T.HttpLabel("entityIdentifier")),
          entityType: S.String.pipe(T.HttpLabel("entityType")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          formName: S.String.pipe(T.HttpQuery("formName")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/time-series-data-points/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTimeSeriesDataPointInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          formName: S.String,
          typeIdentifier: S.String,
          typeRevision: S.optional(S.String),
          timestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          content: S.optional(S.String),
          id: S.optional(S.String),
        }),
      ).annotate({
        identifier: "TimeSeriesDataPointFormOutput",
      });
  }
}
function __c56(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainId: S.optional(S.String),
          entityId: S.optional(S.String),
          entityType: S.optional(S.String),
          formName: S.optional(S.String),
          form: S.optional(__S(447, __c55, 7)),
        }),
      ).annotate({
        identifier: "GetTimeSeriesDataPointOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          userIdentifier: S.String.pipe(T.HttpLabel("userIdentifier")),
          type: S.optional(S.String).pipe(T.HttpQuery("type")),
          sessionName: S.optional(S.String).pipe(T.HttpQuery("sessionName")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/user-profiles/{userIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetUserProfileInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          name: S.optional(SensitiveString).pipe(T.HttpQuery("name")),
          sortBy: S.optional(S.String).pipe(T.HttpQuery("sortBy")),
          sortOrder: S.optional(S.String).pipe(T.HttpQuery("sortOrder")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/domains/{domainIdentifier}/account-pools" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListAccountPoolsInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainId: S.optional(S.String),
          id: S.optional(S.String),
          name: S.optional(SensitiveString),
          resolutionStrategy: S.optional(S.String),
          domainUnitId: S.optional(S.String),
          createdBy: S.optional(S.String),
          updatedBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "AccountPoolSummary" });
    case 4:
      return S.Array(__S(451, __c56, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(452, __c56, 4)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListAccountPoolsOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/account-pools/{identifier}/accounts",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAccountsInAccountPoolInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(74, __c9, 2)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAccountsInAccountPoolOutput",
      });
  }
}
function __c57(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          assetIdentifier: S.String.pipe(T.HttpLabel("assetIdentifier")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/assets/{assetIdentifier}/filters",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListAssetFiltersInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          domainId: S.String,
          assetId: S.String,
          name: SensitiveString,
          description: S.optional(SensitiveString),
          status: S.optional(S.String),
          effectiveColumnNames: S.optional(__S(5, __c0, 5)),
          effectiveRowFilter: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "AssetFilterSummary" });
    case 2:
      return S.Array(__S(457, __c57, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ items: __S(458, __c57, 2), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListAssetFiltersOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/assets/{identifier}/revisions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListAssetRevisionsInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainId: S.optional(S.String),
          id: S.optional(S.String),
          revision: S.optional(S.String),
          createdBy: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "AssetRevision" });
    case 6:
      return S.Array(__S(461, __c57, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(462, __c57, 6)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListAssetRevisionsOutput" });
  }
}
function __c58(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          sortBy: S.optional(S.String).pipe(T.HttpQuery("sortBy")),
          sortOrder: S.optional(S.String).pipe(T.HttpQuery("sortOrder")),
          name: S.optional(S.String).pipe(T.HttpQuery("name")),
          environmentIdentifier: S.optional(S.String).pipe(T.HttpQuery("environmentIdentifier")),
          projectIdentifier: S.optional(S.String).pipe(T.HttpQuery("projectIdentifier")),
          type: S.optional(S.String).pipe(T.HttpQuery("type")),
          scope: S.optional(S.String).pipe(T.HttpQuery("scope")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/domains/{domainIdentifier}/connections" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListConnectionsInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          configurations: S.optional(__S(109, __c13, 5)),
          connectionId: S.String,
          domainId: S.String,
          domainUnitId: S.String,
          environmentId: S.optional(S.String),
          name: S.String,
          physicalEndpoints: __S(147, __c18, 3),
          projectId: S.optional(S.String),
          props: S.optional(__S(162, __c20, 2)),
          type: S.String,
          scope: S.optional(S.String),
        }),
      ).annotate({ identifier: "ConnectionSummary" });
    case 2:
      return S.Array(__S(465, __c58, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ items: __S(466, __c58, 2), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListConnectionsOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/data-products/{identifier}/revisions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDataProductRevisionsInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainId: S.optional(S.String),
          id: S.optional(S.String),
          revision: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "DataProductRevision" });
    case 6:
      return S.Array(__S(469, __c58, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ items: __S(470, __c58, 6), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListDataProductRevisionsOutput",
      });
  }
}
function __c59(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/data-source-runs/{identifier}/activities",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDataSourceRunActivitiesInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          eventId: S.optional(S.String),
          eventStatus: S.optional(S.String),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "LineageInfo" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          database: SensitiveString,
          dataSourceRunId: S.String,
          technicalName: SensitiveString,
          dataAssetStatus: S.String,
          projectId: S.String,
          dataAssetId: S.optional(S.String),
          technicalDescription: S.optional(SensitiveString),
          errorMessage: S.optional(__S(189, __c23, 5)),
          lineageSummary: S.optional(__S(473, __c59, 1)),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "DataSourceRunActivity" });
    case 3:
      return S.Array(__S(474, __c59, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ items: __S(475, __c59, 3), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListDataSourceRunActivitiesOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          dataSourceIdentifier: S.String.pipe(T.HttpLabel("dataSourceIdentifier")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/data-sources/{dataSourceIdentifier}/runs",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListDataSourceRunsInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          dataSourceId: S.String,
          type: S.String,
          status: S.String,
          projectId: S.String,
          runStatisticsForAssets: S.optional(__S(365, __c45, 5)),
          errorMessage: S.optional(__S(189, __c23, 5)),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          startedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          stoppedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lineageSummary: S.optional(__S(366, __c45, 6)),
        }),
      ).annotate({ identifier: "DataSourceRunSummary" });
    case 7:
      return S.Array(__S(478, __c59, 6));
  }
}
function __c60(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ items: __S(479, __c59, 7), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListDataSourceRunsOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          projectIdentifier: S.String.pipe(T.HttpQuery("projectIdentifier")),
          environmentIdentifier: S.optional(S.String).pipe(T.HttpQuery("environmentIdentifier")),
          connectionIdentifier: S.optional(S.String).pipe(T.HttpQuery("connectionIdentifier")),
          type: S.optional(S.String).pipe(T.HttpQuery("type")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
          name: S.optional(SensitiveString).pipe(T.HttpQuery("name")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/domains/{domainIdentifier}/data-sources" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListDataSourcesInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          environmentId: S.optional(S.String),
          connectionId: S.optional(S.String),
          dataSourceId: S.String,
          name: SensitiveString,
          type: S.String,
          status: S.String,
          enableSetting: S.optional(S.String),
          schedule: S.optional(__S(183, __c22, 7)),
          lastRunStatus: S.optional(S.String),
          lastRunAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastRunErrorMessage: S.optional(__S(189, __c23, 5)),
          lastRunAssetCount: S.optional(S.Number),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          description: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "DataSourceSummary" });
    case 3:
      return S.Array(__S(482, __c60, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ items: __S(483, __c60, 3), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListDataSourcesOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/v2/domains" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListDomainsInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: SensitiveString,
          description: S.optional(SensitiveString),
          arn: S.String,
          managedAccountId: S.String,
          status: S.String,
          portalUrl: S.optional(S.String),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          domainVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "DomainSummary" });
    case 7:
      return S.Array(__S(486, __c60, 6));
  }
}
function __c61(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ items: __S(487, __c60, 7), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListDomainsOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          parentDomainUnitIdentifier: S.String.pipe(T.HttpQuery("parentDomainUnitIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/domains/{domainIdentifier}/domain-units" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDomainUnitsForParentInput",
      });
    case 2:
      return S.suspend(() => S.Struct({ name: S.String, id: S.String })).annotate({
        identifier: "DomainUnitSummary",
      });
    case 3:
      return S.Array(__S(490, __c61, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ items: __S(491, __c61, 3), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListDomainUnitsForParentOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          entityType: S.String.pipe(T.HttpLabel("entityType")),
          entityIdentifier: S.String.pipe(T.HttpLabel("entityIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/owners",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListEntityOwnersInput" });
    case 6:
      return S.suspend(() => S.Struct({ userId: S.optional(S.String) })).annotate({
        identifier: "OwnerUserPropertiesOutput",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ user: __S(494, __c61, 6) }),
        /*@__PURE__*/ S.Struct({ group: __S(197, __c24, 5) }),
      ]);
  }
}
function __c62(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(495, __c61, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ owners: __S(496, __c62, 0), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListEntityOwnersOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          environmentIdentifier: S.String.pipe(T.HttpLabel("environmentIdentifier")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/actions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListEnvironmentActionsInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          environmentId: S.String,
          id: S.String,
          name: S.String,
          parameters: __S(219, __c27, 3),
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "EnvironmentActionSummary" });
    case 4:
      return S.Array(__S(499, __c62, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(500, __c62, 4)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListEnvironmentActionsOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/environment-blueprint-configurations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListEnvironmentBlueprintConfigurationsInput",
      });
    case 7:
      return S.Array(__S(385, __c48, 1));
  }
}
function __c63(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(503, __c62, 7)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListEnvironmentBlueprintConfigurationsOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          name: S.optional(S.String).pipe(T.HttpQuery("name")),
          managed: S.optional(S.Boolean).pipe(T.HttpQuery("managed")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/domains/{domainIdentifier}/environment-blueprints" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListEnvironmentBlueprintsInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: S.String,
          description: S.optional(SensitiveString),
          provider: S.String,
          provisioningProperties: __S(215, __c26, 7),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          blueprintCategory: S.optional(S.String),
        }),
      ).annotate({
        identifier: "EnvironmentBlueprintSummary",
      });
    case 3:
      return S.Array(__S(506, __c63, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ items: __S(507, __c63, 3), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListEnvironmentBlueprintsOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          awsAccountId: S.optional(S.String).pipe(T.HttpQuery("awsAccountId")),
          awsAccountRegion: S.optional(S.String).pipe(T.HttpQuery("awsAccountRegion")),
          environmentBlueprintIdentifier: S.optional(S.String).pipe(
            T.HttpQuery("environmentBlueprintIdentifier"),
          ),
          projectIdentifier: S.optional(S.String).pipe(T.HttpQuery("projectIdentifier")),
          name: S.optional(SensitiveString).pipe(T.HttpQuery("name")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/domains/{domainIdentifier}/environment-profiles" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListEnvironmentProfilesInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          domainId: S.String,
          awsAccountId: S.optional(S.String),
          awsAccountRegion: S.optional(S.String),
          createdBy: S.String,
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          name: SensitiveString,
          description: S.optional(SensitiveString),
          environmentBlueprintId: S.String,
          projectId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "EnvironmentProfileSummary",
      });
    case 7:
      return S.Array(__S(510, __c63, 6));
  }
}
function __c64(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ items: __S(511, __c63, 7), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListEnvironmentProfilesOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          awsAccountId: S.optional(S.String).pipe(T.HttpQuery("awsAccountId")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
          awsAccountRegion: S.optional(S.String).pipe(T.HttpQuery("awsAccountRegion")),
          projectIdentifier: S.String.pipe(T.HttpQuery("projectIdentifier")),
          environmentProfileIdentifier: S.optional(S.String).pipe(
            T.HttpQuery("environmentProfileIdentifier"),
          ),
          environmentBlueprintIdentifier: S.optional(S.String).pipe(
            T.HttpQuery("environmentBlueprintIdentifier"),
          ),
          provider: S.optional(S.String).pipe(T.HttpQuery("provider")),
          name: S.optional(S.String).pipe(T.HttpQuery("name")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/domains/{domainIdentifier}/environments" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListEnvironmentsInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          projectId: S.String,
          id: S.optional(S.String),
          domainId: S.String,
          createdBy: S.String,
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          name: SensitiveString,
          description: S.optional(SensitiveString),
          environmentProfileId: S.optional(S.String),
          awsAccountId: S.optional(S.String),
          awsAccountRegion: S.optional(S.String),
          provider: S.String,
          status: S.optional(S.String),
          environmentConfigurationId: S.optional(SensitiveString),
          environmentConfigurationName: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "EnvironmentSummary" });
    case 3:
      return S.Array(__S(514, __c64, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ items: __S(515, __c64, 3), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListEnvironmentsOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          jobIdentifier: S.String.pipe(T.HttpLabel("jobIdentifier")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
          sortOrder: S.optional(S.String).pipe(T.HttpQuery("sortOrder")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/jobs/{jobIdentifier}/runs",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListJobRunsInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainId: S.optional(S.String),
          jobId: S.optional(S.String),
          jobType: S.optional(S.String),
          runId: S.optional(S.String),
          runMode: S.optional(S.String),
          status: S.optional(S.String),
          error: S.optional(__S(404, __c50, 4)),
          createdBy: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "JobRunSummary" });
    case 7:
      return S.Array(__S(518, __c64, 6));
  }
}
function __c65(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(519, __c64, 7)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListJobRunsOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          timestampAfter: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("timestampAfter"),
          ),
          timestampBefore: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("timestampBefore"),
          ),
          processingStatus: S.optional(S.String).pipe(T.HttpQuery("processingStatus")),
          sortOrder: S.optional(S.String).pipe(T.HttpQuery("sortOrder")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/domains/{domainIdentifier}/lineage/events" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListLineageEventsInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), namespace: S.optional(S.String) }),
      ).annotate({ identifier: "NameIdentifier" });
    case 3:
      return S.Array(__S(522, __c65, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          eventType: S.optional(S.String),
          runId: S.optional(S.String),
          job: S.optional(__S(522, __c65, 2)),
          inputs: S.optional(__S(523, __c65, 3)),
          outputs: S.optional(__S(523, __c65, 3)),
        }),
      ).annotate({
        identifier: "OpenLineageRunEventSummary",
      });
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ openLineageRunEventSummary: __S(524, __c65, 4) })]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          domainId: S.optional(S.String),
          processingStatus: S.optional(S.String),
          eventTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          eventSummary: S.optional(__S(525, __c65, 5)),
          createdBy: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "LineageEventSummary" });
    case 7:
      return S.Array(__S(526, __c65, 6));
  }
}
function __c66(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(527, __c65, 7)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListLineageEventsOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          direction: S.optional(S.String).pipe(T.HttpQuery("direction")),
          eventTimestampGTE: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("timestampGTE"),
          ),
          eventTimestampLTE: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("timestampLTE"),
          ),
          sortOrder: S.optional(S.String).pipe(T.HttpQuery("sortOrder")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/lineage/nodes/{identifier}/history",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListLineageNodeHistoryInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedBy: S.optional(S.String),
          id: S.String,
          typeName: S.String,
          typeRevision: S.optional(S.String),
          sourceIdentifier: S.optional(S.String),
          eventTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "LineageNodeSummary" });
    case 3:
      return S.Array(__S(530, __c66, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ nodes: S.optional(__S(531, __c66, 3)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListLineageNodeHistoryOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
          type: S.optional(S.String).pipe(T.HttpQuery("type")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          targetIdentifier: S.optional(S.String).pipe(T.HttpQuery("targetIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/metadata-generation-runs",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListMetadataGenerationRunsInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          id: S.String,
          target: S.optional(__S(420, __c52, 4)),
          status: S.optional(S.String),
          type: S.optional(S.String),
          types: S.optional(__S(8, __c1, 0)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          owningProjectId: S.String,
        }),
      ).annotate({
        identifier: "MetadataGenerationRunItem",
      });
    case 7:
      return S.Array(__S(534, __c66, 6));
  }
}
function __c67(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(535, __c66, 7)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListMetadataGenerationRunsOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          owningProjectIdentifier: S.String.pipe(T.HttpQuery("owningProjectIdentifier")),
          notebookIdentifier: S.optional(S.String).pipe(T.HttpQuery("notebookIdentifier")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
          scheduleIdentifier: S.optional(S.String).pipe(T.HttpQuery("scheduleIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          sortOrder: S.optional(S.String).pipe(T.HttpQuery("sortOrder")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/domains/{domainIdentifier}/notebook-runs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListNotebookRunsInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          domainId: S.String,
          owningProjectId: S.String,
          notebookId: S.String,
          scheduleId: S.optional(S.String),
          status: S.String,
          triggerSource: S.optional(__S(435, __c54, 3)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedBy: S.optional(S.String),
          startedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          completedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "NotebookRunSummary" });
    case 3:
      return S.Array(__S(538, __c67, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(539, __c67, 3)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListNotebookRunsOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          owningProjectIdentifier: S.String.pipe(T.HttpQuery("owningProjectIdentifier")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          sortOrder: S.optional(S.String).pipe(T.HttpQuery("sortOrder")),
          sortBy: S.optional(S.String).pipe(T.HttpQuery("sortBy")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
          type: S.optional(S.String).pipe(T.HttpQuery("type")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/domains/{domainIdentifier}/notebooks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListNotebooksInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: SensitiveString,
          owningProjectId: S.String,
          domainId: S.String,
          status: S.String,
          type: S.optional(S.String),
          description: S.optional(SensitiveString),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "NotebookSummary" });
    case 7:
      return S.Array(__S(542, __c67, 6));
  }
}
function __c68(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(543, __c67, 7)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListNotebooksOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          type: S.String.pipe(T.HttpQuery("type")),
          afterTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("afterTimestamp"),
          ),
          beforeTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("beforeTimestamp"),
          ),
          subjects: S.optional(__S(5, __c0, 5)).pipe(T.HttpQuery("subjects")),
          taskStatus: S.optional(S.String).pipe(T.HttpQuery("taskStatus")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/domains/{domainIdentifier}/notifications" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListNotificationsInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ type: S.String, id: S.String, name: S.optional(S.String) }),
      ).annotate({ identifier: "NotificationResource" });
    case 3:
      return S.suspend(() =>
        S.Struct({ subject: S.String, resource: __S(546, __c68, 2), role: S.String }),
      ).annotate({ identifier: "Topic" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          identifier: S.String,
          domainIdentifier: S.String,
          type: S.String,
          topic: __S(547, __c68, 3),
          title: SensitiveString,
          message: SensitiveString,
          status: S.optional(S.String),
          actionLink: SensitiveString,
          creationTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUpdatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          metadata: S.optional(__S(107, __c13, 3)),
        }),
      ).annotate({ identifier: "NotificationOutput" });
    case 5:
      return S.Array(__S(548, __c68, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          notifications: S.optional(__S(549, __c68, 5)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListNotificationsOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          entityType: S.String.pipe(T.HttpLabel("entityType")),
          entityIdentifier: S.String.pipe(T.HttpLabel("entityIdentifier")),
          policyType: S.String.pipe(T.HttpQuery("policyType")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/policies/managed/{entityType}/{entityIdentifier}/grants",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListPolicyGrantsInput" });
  }
}
function __c69(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          principal: S.optional(__S(46, __c5, 6)),
          detail: S.optional(__S(50, __c6, 2)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          grantId: S.optional(S.String),
        }),
      ).annotate({ identifier: "PolicyGrantMember" });
    case 1:
      return S.Array(__S(552, __c69, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ grantList: __S(553, __c69, 1), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListPolicyGrantsOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          projectIdentifier: S.String.pipe(T.HttpLabel("projectIdentifier")),
          sortBy: S.optional(S.String).pipe(T.HttpQuery("sortBy")),
          sortOrder: S.optional(S.String).pipe(T.HttpQuery("sortOrder")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/projects/{projectIdentifier}/memberships",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListProjectMembershipsInput",
      });
    case 4:
      return S.suspend(() => S.Struct({ userId: S.String })).annotate({
        identifier: "UserDetails",
      });
    case 5:
      return S.suspend(() => S.Struct({ groupId: S.String })).annotate({
        identifier: "GroupDetails",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ user: __S(556, __c69, 4) }),
        /*@__PURE__*/ S.Struct({ group: __S(557, __c69, 5) }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({ memberDetails: __S(558, __c69, 6), designation: S.String }),
      ).annotate({ identifier: "ProjectMember" });
  }
}
function __c70(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(559, __c69, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ members: __S(560, __c70, 0), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListProjectMembershipsOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          name: S.optional(SensitiveString).pipe(T.HttpQuery("name")),
          sortBy: S.optional(S.String).pipe(T.HttpQuery("sortBy")),
          sortOrder: S.optional(S.String).pipe(T.HttpQuery("sortOrder")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/domains/{domainIdentifier}/project-profiles" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListProjectProfilesInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          id: S.String,
          name: SensitiveString,
          description: S.optional(SensitiveString),
          status: S.optional(S.String),
          createdBy: S.String,
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          domainUnitId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ProjectProfileSummary" });
    case 4:
      return S.Array(__S(563, __c70, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(564, __c70, 4)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListProjectProfilesOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          userIdentifier: S.optional(S.String).pipe(T.HttpQuery("userIdentifier")),
          groupIdentifier: S.optional(S.String).pipe(T.HttpQuery("groupIdentifier")),
          name: S.optional(SensitiveString).pipe(T.HttpQuery("name")),
          projectCategory: S.optional(S.String).pipe(T.HttpQuery("projectCategory")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/domains/{domainIdentifier}/projects" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListProjectsInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          id: S.String,
          name: SensitiveString,
          description: S.optional(SensitiveString),
          projectStatus: S.optional(S.String),
          failureReasons: S.optional(__S(254, __c31, 6)),
          createdBy: S.String,
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          domainUnitId: S.optional(S.String),
          projectCategory: S.optional(S.String),
        }),
      ).annotate({ identifier: "ProjectSummary" });
  }
}
function __c71(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(567, __c70, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(568, __c71, 0)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListProjectsOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          targetType: S.String.pipe(T.HttpLabel("targetType")),
          targetIdentifier: S.String.pipe(T.HttpLabel("targetIdentifier")),
          ruleType: S.optional(S.String).pipe(T.HttpQuery("ruleType")),
          action: S.optional(S.String).pipe(T.HttpQuery("ruleAction")),
          projectIds: S.optional(__S(5, __c0, 5)).pipe(T.HttpQuery("projectIds")),
          assetTypes: S.optional(__S(5, __c0, 5)).pipe(T.HttpQuery("assetTypes")),
          dataProduct: S.optional(S.Boolean).pipe(T.HttpQuery("dataProduct")),
          includeCascaded: S.optional(S.Boolean).pipe(T.HttpQuery("includeCascaded")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/list-rules/{targetType}/{targetIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListRulesInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          identifier: S.optional(S.String),
          revision: S.optional(S.String),
          ruleType: S.optional(S.String),
          name: S.optional(SensitiveString),
          targetType: S.optional(S.String),
          target: S.optional(__S(274, __c34, 2)),
          action: S.optional(S.String),
          scope: S.optional(__S(277, __c34, 5)),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "RuleSummary" });
    case 4:
      return S.Array(__S(571, __c71, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ items: __S(572, __c71, 4), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListRulesOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          environmentId: S.optional(S.String).pipe(T.HttpQuery("environmentId")),
          subscriptionTargetId: S.optional(S.String).pipe(T.HttpQuery("subscriptionTargetId")),
          subscribedListingId: S.optional(S.String).pipe(T.HttpQuery("subscribedListingId")),
          subscriptionId: S.optional(S.String).pipe(T.HttpQuery("subscriptionId")),
          owningProjectId: S.optional(S.String).pipe(T.HttpQuery("owningProjectId")),
          owningIamPrincipalArn: S.optional(S.String).pipe(T.HttpQuery("owningIamPrincipalArn")),
          owningUserId: S.optional(S.String).pipe(T.HttpQuery("owningUserId")),
          owningGroupId: S.optional(S.String).pipe(T.HttpQuery("owningGroupId")),
          sortBy: S.optional(S.String).pipe(T.HttpQuery("sortBy")),
          sortOrder: S.optional(S.String).pipe(T.HttpQuery("sortOrder")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/domains/{domainIdentifier}/subscription-grants" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSubscriptionGrantsInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          createdBy: S.String,
          updatedBy: S.optional(S.String),
          domainId: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          environmentId: S.optional(S.String),
          subscriptionTargetId: S.String,
          grantedEntity: __S(291, __c36, 3),
          status: S.String,
          assets: S.optional(__S(294, __c36, 6)),
          subscriptionId: S.optional(S.String),
        }),
      ).annotate({ identifier: "SubscriptionGrantSummary" });
  }
}
function __c72(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(575, __c71, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ items: __S(576, __c72, 0), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListSubscriptionGrantsOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
          subscribedListingId: S.optional(S.String).pipe(T.HttpQuery("subscribedListingId")),
          owningProjectId: S.optional(S.String).pipe(T.HttpQuery("owningProjectId")),
          owningIamPrincipalArn: S.optional(S.String).pipe(T.HttpQuery("owningIamPrincipalArn")),
          approverProjectId: S.optional(S.String).pipe(T.HttpQuery("approverProjectId")),
          owningUserId: S.optional(S.String).pipe(T.HttpQuery("owningUserId")),
          owningGroupId: S.optional(S.String).pipe(T.HttpQuery("owningGroupId")),
          sortBy: S.optional(S.String).pipe(T.HttpQuery("sortBy")),
          sortOrder: S.optional(S.String).pipe(T.HttpQuery("sortOrder")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/domains/{domainIdentifier}/subscription-requests" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSubscriptionRequestsInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          formName: S.optional(S.String),
          typeName: SensitiveString,
          typeRevision: S.String,
        }),
      ).annotate({ identifier: "MetadataFormSummary" });
    case 4:
      return S.Array(__S(579, __c72, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          createdBy: S.String,
          updatedBy: S.optional(S.String),
          domainId: S.String,
          status: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          requestReason: SensitiveString,
          subscribedPrincipals: __S(20, __c2, 4),
          subscribedListings: __S(30, __c3, 6),
          reviewerId: S.optional(S.String),
          decisionComment: S.optional(SensitiveString),
          existingSubscriptionId: S.optional(S.String),
          metadataFormsSummary: S.optional(__S(580, __c72, 4)),
        }),
      ).annotate({
        identifier: "SubscriptionRequestSummary",
      });
    case 6:
      return S.Array(__S(581, __c72, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ items: __S(582, __c72, 6), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListSubscriptionRequestsOutput",
      });
  }
}
function __c73(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          subscriptionRequestIdentifier: S.optional(S.String).pipe(
            T.HttpQuery("subscriptionRequestIdentifier"),
          ),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
          subscribedListingId: S.optional(S.String).pipe(T.HttpQuery("subscribedListingId")),
          owningProjectId: S.optional(S.String).pipe(T.HttpQuery("owningProjectId")),
          owningIamPrincipalArn: S.optional(S.String).pipe(T.HttpQuery("owningIamPrincipalArn")),
          owningUserId: S.optional(S.String).pipe(T.HttpQuery("owningUserId")),
          owningGroupId: S.optional(S.String).pipe(T.HttpQuery("owningGroupId")),
          approverProjectId: S.optional(S.String).pipe(T.HttpQuery("approverProjectId")),
          sortBy: S.optional(S.String).pipe(T.HttpQuery("sortBy")),
          sortOrder: S.optional(S.String).pipe(T.HttpQuery("sortOrder")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v2/domains/{domainIdentifier}/subscriptions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListSubscriptionsInput" });
    case 1:
      return S.Array(__S(72, __c9, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ items: __S(585, __c73, 1), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListSubscriptionsOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          environmentIdentifier: S.String.pipe(T.HttpLabel("environmentIdentifier")),
          sortBy: S.optional(S.String).pipe(T.HttpQuery("sortBy")),
          sortOrder: S.optional(S.String).pipe(T.HttpQuery("sortOrder")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSubscriptionTargetsInput",
      });
    case 4:
      return S.Array(__S(306, __c38, 2));
    case 5:
      return S.suspend(() =>
        S.Struct({ items: __S(588, __c73, 4), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListSubscriptionTargetsOutput",
      });
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
      return S.suspend(() => S.Struct({ tags: S.optional(__S(192, __c24, 0)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
  }
}
function __c74(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          entityIdentifier: S.String.pipe(T.HttpLabel("entityIdentifier")),
          entityType: S.String.pipe(T.HttpLabel("entityType")),
          formName: S.String.pipe(T.HttpQuery("formName")),
          startedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("startedAt"),
          ),
          endedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("endedAt"),
          ),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/time-series-data-points",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTimeSeriesDataPointsInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(84, __c10, 4)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListTimeSeriesDataPointsOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          event: T.StreamingInput.pipe(T.HttpPayload()),
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("Client-Token"),
            T.IdempotencyToken(),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/lineage/events" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PostLineageEventInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ id: S.optional(S.String), domainId: S.optional(S.String) }),
      ).annotate({ identifier: "PostLineageEventOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          formName: S.String,
          typeIdentifier: S.String,
          typeRevision: S.optional(S.String),
          timestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          content: S.optional(S.String),
        }),
      ).annotate({
        identifier: "TimeSeriesDataPointFormInput",
      });
    case 5:
      return S.Array(__S(596, __c74, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          entityIdentifier: S.String.pipe(T.HttpLabel("entityIdentifier")),
          entityType: S.String.pipe(T.HttpLabel("entityType")),
          forms: __S(597, __c74, 5),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/time-series-data-points",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PostTimeSeriesDataPointsInput",
      });
    case 7:
      return S.Array(__S(447, __c55, 7));
  }
}
function __c75(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainId: S.optional(S.String),
          entityId: S.optional(S.String),
          entityType: S.optional(S.String),
          forms: S.optional(__S(599, __c74, 7)),
        }),
      ).annotate({
        identifier: "PostTimeSeriesDataPointsOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          enableExport: S.Boolean,
          encryptionConfiguration: S.optional(__S(359, __c44, 7)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v2/domains/{domainIdentifier}/data-export-configuration",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutDataExportConfigurationInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          region: S.String,
          parameters: __S(107, __c13, 3),
        }),
      ).annotate({ identifier: "PutResourceConfiguration" });
    case 3:
      return S.Array(__S(602, __c75, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          environmentBlueprintIdentifier: S.String.pipe(
            T.HttpLabel("environmentBlueprintIdentifier"),
          ),
          provisioningRoleArn: S.optional(S.String),
          manageAccessRoleArn: S.optional(S.String),
          environmentRolePermissionBoundary: S.optional(S.String),
          enabledRegions: __S(5, __c0, 5),
          regionalParameters: S.optional(__S(379, __c47, 3)),
          resourceConfigurations: S.optional(__S(603, __c75, 3)),
          allowUserProvidedConfigurations: S.optional(S.Boolean),
          globalParameters: S.optional(__S(107, __c13, 3)),
          provisioningConfigurations: S.optional(__S(384, __c48, 0)),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v2/domains/{domainIdentifier}/environment-blueprint-configurations/{environmentBlueprintIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutEnvironmentBlueprintConfigurationInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          relationType: S.String,
          relationDirection: S.String,
          maxPathLength: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RelationPattern" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          attribute: S.String,
          value: S.optional(S.String),
          intValue: S.optional(S.Number),
          operator: S.optional(S.String),
        }),
      ).annotate({ identifier: "Filter" });
    case 7:
      return S.Array(
        /*@__PURE__*/ S.suspend(() => __S(608, __c76, 0)).annotate({ identifier: "FilterClause" }),
      );
  }
}
function __c76(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ filter: __S(606, __c75, 6) }),
        /*@__PURE__*/ S.Struct({
          and: /*@__PURE__*/ S.suspend(() => __S(607, __c75, 7)).annotate({
            identifier: "FilterList",
          }),
        }),
        /*@__PURE__*/ S.Struct({
          or: /*@__PURE__*/ S.suspend(() => __S(607, __c75, 7)).annotate({
            identifier: "FilterList",
          }),
        }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          entityType: S.String,
          identifier: S.String,
          filters: S.optional(__S(608, __c76, 0)),
        }),
      ).annotate({ identifier: "EntityPattern" });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ relationPattern: __S(605, __c75, 5) }),
        /*@__PURE__*/ S.Struct({ entityPattern: __S(609, __c76, 1) }),
      ]);
    case 3:
      return S.Array(__S(610, __c76, 2));
    case 4:
      return S.suspend(() => S.Struct({ formNames: S.optional(__S(5, __c0, 5)) })).annotate({
        identifier: "AdditionalAttributes",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          match: __S(611, __c76, 3),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          additionalAttributes: S.optional(__S(612, __c76, 4)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/graph/query" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "QueryGraphInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedBy: S.optional(S.String),
          id: S.String,
          typeName: S.String,
          typeRevision: S.optional(S.String),
          sourceIdentifier: S.optional(S.String),
          eventTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          formsOutput: S.optional(__S(32, __c4, 0)),
          upstreamLineageNodeIds: S.optional(__S(5, __c0, 5)),
          downstreamLineageNodeIds: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({ identifier: "LineageNodeItem" });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ lineageNode: __S(614, __c76, 6) })]);
  }
}
function __c77(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(615, __c76, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(616, __c77, 0)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "QueryGraphOutput" });
    case 2:
      return S.Array(S.Number);
    case 3:
      return S.suspend(() =>
        S.Struct({
          predictionTarget: S.optional(S.String),
          predictionChoices: S.optional(__S(618, __c77, 2)),
        }),
      ).annotate({ identifier: "RejectChoice" });
    case 4:
      return S.Array(__S(619, __c77, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          revision: S.optional(S.String).pipe(T.HttpQuery("revision")),
          rejectRule: S.optional(__S(0, __c0, 0)),
          rejectChoices: S.optional(__S(620, __c77, 4)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v2/domains/{domainIdentifier}/assets/{identifier}/reject-predictions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "RejectPredictionsInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ domainId: S.String, assetId: S.String, assetRevision: S.String }),
      ).annotate({ identifier: "RejectPredictionsOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          decisionComment: S.optional(SensitiveString),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v2/domains/{domainIdentifier}/subscription-requests/{identifier}/reject",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RejectSubscriptionRequestInput",
      });
  }
}
function __c78(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          entityType: S.String.pipe(T.HttpLabel("entityType")),
          entityIdentifier: S.String.pipe(T.HttpLabel("entityIdentifier")),
          owner: __S(36, __c4, 4),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/removeOwner",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "RemoveEntityOwnerInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          entityType: S.String.pipe(T.HttpLabel("entityType")),
          entityIdentifier: S.String.pipe(T.HttpLabel("entityIdentifier")),
          policyType: S.String,
          principal: __S(46, __c5, 6),
          grantIdentifier: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v2/domains/{domainIdentifier}/policies/managed/{entityType}/{entityIdentifier}/removeGrant",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "RemovePolicyGrantInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          retainPermissions: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v2/domains/{domainIdentifier}/subscriptions/{identifier}/revoke",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "RevokeSubscriptionInput" });
    case 3:
      return S.suspend(() => S.Struct({ attribute: S.String })).annotate({
        identifier: "SearchInItem",
      });
    case 4:
      return S.Array(__S(627, __c78, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ attribute: S.String, order: S.optional(S.String) }),
      ).annotate({ identifier: "SearchSort" });
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          owningProjectIdentifier: S.optional(S.String),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          searchScope: S.String,
          searchText: S.optional(S.String),
          searchIn: S.optional(__S(628, __c78, 4)),
          filters: S.optional(__S(608, __c76, 0)),
          sort: S.optional(__S(629, __c78, 5)),
          additionalAttributes: S.optional(__S(630, __c78, 6)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/search" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SearchInput" });
  }
}
function __c79(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ startOffset: S.optional(S.Number), endOffset: S.optional(S.Number) }),
      ).annotate({ identifier: "MatchOffset" });
    case 1:
      return S.Array(__S(632, __c79, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          attribute: S.optional(S.String),
          text: S.optional(S.String),
          matchOffsets: S.optional(__S(633, __c79, 1)),
        }),
      ).annotate({ identifier: "TextMatchItem" });
    case 3:
      return S.Array(__S(634, __c79, 2));
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ textMatches: __S(635, __c79, 3) })]);
    case 5:
      return S.Array(__S(636, __c79, 4));
    case 6:
      return S.suspend(() => S.Struct({ matchRationale: S.optional(__S(637, __c79, 5)) })).annotate(
        {
          identifier: "GlossaryItemAdditionalAttributes",
        },
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          id: S.String,
          name: SensitiveString,
          owningProjectId: S.String,
          description: S.optional(SensitiveString),
          status: S.String,
          usageRestrictions: S.optional(__S(8, __c1, 0)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedBy: S.optional(S.String),
          additionalAttributes: S.optional(__S(638, __c79, 6)),
        }),
      ).annotate({ identifier: "GlossaryItem" });
  }
}
function __c80(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          glossaryId: S.String,
          id: S.String,
          name: SensitiveString,
          shortDescription: S.optional(SensitiveString),
          usageRestrictions: S.optional(__S(8, __c1, 0)),
          longDescription: S.optional(SensitiveString),
          termRelations: S.optional(__S(231, __c28, 7)),
          status: S.String,
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedBy: S.optional(S.String),
          additionalAttributes: S.optional(__S(638, __c79, 6)),
        }),
      ).annotate({ identifier: "GlossaryTermItem" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          formsOutput: S.optional(__S(32, __c4, 0)),
          readOnlyFormsOutput: S.optional(__S(32, __c4, 0)),
          latestTimeSeriesDataPointFormsOutput: S.optional(__S(84, __c10, 4)),
          matchRationale: S.optional(__S(637, __c79, 5)),
        }),
      ).annotate({
        identifier: "AssetItemAdditionalAttributes",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          identifier: S.String,
          name: SensitiveString,
          typeIdentifier: S.String,
          typeRevision: S.String,
          externalIdentifier: S.optional(S.String),
          description: S.optional(SensitiveString),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          firstRevisionCreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          firstRevisionCreatedBy: S.optional(S.String),
          glossaryTerms: S.optional(__S(5, __c0, 5)),
          owningProjectId: S.String,
          additionalAttributes: S.optional(__S(641, __c80, 1)),
          governedGlossaryTerms: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({ identifier: "AssetItem" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          id: S.String,
          name: SensitiveString,
          owningProjectId: S.String,
          description: S.optional(SensitiveString),
          glossaryTerms: S.optional(__S(5, __c0, 5)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          firstRevisionCreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          firstRevisionCreatedBy: S.optional(S.String),
          additionalAttributes: S.optional(__S(638, __c79, 6)),
        }),
      ).annotate({ identifier: "DataProductResultItem" });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ glossaryItem: __S(639, __c79, 7) }),
        /*@__PURE__*/ S.Struct({ glossaryTermItem: __S(640, __c80, 0) }),
        /*@__PURE__*/ S.Struct({ assetItem: __S(642, __c80, 2) }),
        /*@__PURE__*/ S.Struct({ dataProductItem: __S(643, __c80, 3) }),
      ]);
    case 5:
      return S.Array(__S(644, __c80, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(645, __c80, 5)),
          nextToken: S.optional(S.String),
          totalMatchCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SearchOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          groupType: S.String,
          searchText: S.optional(SensitiveString),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/search-group-profiles" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SearchGroupProfilesInput" });
  }
}
function __c81(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(235, __c29, 3));
    case 1:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(648, __c81, 0)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "SearchGroupProfilesOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ attribute: S.String, displayValue: S.optional(S.String) }),
      ).annotate({ identifier: "AggregationListItem" });
    case 3:
      return S.Array(__S(650, __c81, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          searchText: S.optional(S.String),
          searchIn: S.optional(__S(628, __c78, 4)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          filters: S.optional(__S(608, __c76, 0)),
          aggregations: S.optional(__S(651, __c81, 3)),
          sort: S.optional(__S(629, __c78, 5)),
          additionalAttributes: S.optional(__S(630, __c78, 6)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/listings/search" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SearchListingsInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          forms: S.optional(S.String),
          matchRationale: S.optional(__S(637, __c79, 5)),
          latestTimeSeriesDataPointForms: S.optional(__S(84, __c10, 4)),
        }),
      ).annotate({
        identifier: "AssetListingItemAdditionalAttributes",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          listingId: S.optional(S.String),
          listingRevision: S.optional(S.String),
          name: S.optional(SensitiveString),
          entityId: S.optional(S.String),
          entityRevision: S.optional(S.String),
          entityType: S.optional(S.String),
          description: S.optional(SensitiveString),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          listingCreatedBy: S.optional(S.String),
          listingUpdatedBy: S.optional(S.String),
          glossaryTerms: S.optional(__S(22, __c2, 6)),
          governedGlossaryTerms: S.optional(__S(22, __c2, 6)),
          owningProjectId: S.optional(S.String),
          additionalAttributes: S.optional(__S(653, __c81, 5)),
        }),
      ).annotate({ identifier: "AssetListingItem" });
    case 7:
      return S.suspend(() =>
        S.Struct({ forms: S.optional(S.String), matchRationale: S.optional(__S(637, __c79, 5)) }),
      ).annotate({
        identifier: "DataProductListingItemAdditionalAttributes",
      });
  }
}
function __c82(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          listingId: S.optional(S.String),
          listingRevision: S.optional(S.String),
          name: S.optional(SensitiveString),
          entityId: S.optional(S.String),
          entityRevision: S.optional(S.String),
          description: S.optional(SensitiveString),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          listingCreatedBy: S.optional(S.String),
          listingUpdatedBy: S.optional(S.String),
          glossaryTerms: S.optional(__S(22, __c2, 6)),
          owningProjectId: S.optional(S.String),
          additionalAttributes: S.optional(__S(655, __c81, 7)),
          items: S.optional(__S(415, __c51, 7)),
        }),
      ).annotate({ identifier: "DataProductListingItem" });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ assetListing: __S(654, __c81, 6) }),
        /*@__PURE__*/ S.Struct({ dataProductListing: __S(656, __c82, 0) }),
      ]);
    case 2:
      return S.Array(__S(657, __c82, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          value: S.optional(S.String),
          count: S.optional(S.Number),
          displayValue: S.optional(S.String),
        }),
      ).annotate({ identifier: "AggregationOutputItem" });
    case 4:
      return S.Array(__S(659, __c82, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          attribute: S.optional(S.String),
          displayValue: S.optional(S.String),
          items: S.optional(__S(660, __c82, 4)),
        }),
      ).annotate({ identifier: "AggregationOutput" });
    case 6:
      return S.Array(__S(661, __c82, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(658, __c82, 2)),
          nextToken: S.optional(S.String),
          totalMatchCount: S.optional(S.Number),
          aggregates: S.optional(__S(662, __c82, 6)),
        }),
      ).annotate({ identifier: "SearchListingsOutput" });
  }
}
function __c83(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          searchScope: S.String,
          searchText: S.optional(S.String),
          searchIn: S.optional(__S(628, __c78, 4)),
          filters: S.optional(__S(608, __c76, 0)),
          sort: S.optional(__S(629, __c78, 5)),
          managed: S.Boolean,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/types-search" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SearchTypesInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          name: SensitiveString,
          revision: S.String,
          model: S.optional(__S(226, __c28, 2)),
          status: S.optional(S.String),
          owningProjectId: S.optional(S.String),
          originDomainId: S.optional(S.String),
          originProjectId: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          description: S.optional(SensitiveString),
          imports: S.optional(__S(391, __c48, 7)),
        }),
      ).annotate({ identifier: "FormTypeData" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedBy: S.optional(S.String),
          revision: S.String,
          formsOutput: __S(104, __c13, 0),
        }),
      ).annotate({ identifier: "LineageNodeTypeItem" });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ assetTypeItem: __S(354, __c44, 2) }),
        /*@__PURE__*/ S.Struct({ formTypeItem: __S(665, __c83, 1) }),
        /*@__PURE__*/ S.Struct({ lineageNodeTypeItem: __S(666, __c83, 2) }),
      ]);
    case 4:
      return S.Array(__S(667, __c83, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(__S(668, __c83, 4)),
          nextToken: S.optional(S.String),
          totalMatchCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SearchTypesOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          userType: S.String,
          searchText: S.optional(SensitiveString),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/search-user-profiles" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SearchUserProfilesInput" });
    case 7:
      return S.Array(__S(308, __c38, 4));
  }
}
function __c84(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(671, __c83, 7)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "SearchUserProfilesOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          dataSourceIdentifier: S.String.pipe(T.HttpLabel("dataSourceIdentifier")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v2/domains/{domainIdentifier}/data-sources/{dataSourceIdentifier}/runs",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartDataSourceRunInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          dataSourceId: S.String,
          id: S.String,
          projectId: S.String,
          status: S.String,
          type: S.String,
          dataSourceConfigurationSnapshot: S.optional(S.String),
          runStatisticsForAssets: S.optional(__S(365, __c45, 5)),
          errorMessage: S.optional(__S(189, __c23, 5)),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          startedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          stoppedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "StartDataSourceRunOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          type: S.optional(S.String),
          types: S.optional(__S(8, __c1, 0)),
          target: __S(420, __c52, 4),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          owningProjectIdentifier: S.String,
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v2/domains/{domainIdentifier}/metadata-generation-runs",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartMetadataGenerationRunInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          id: S.String,
          status: S.optional(S.String),
          type: S.optional(S.String),
          types: S.optional(__S(8, __c1, 0)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          owningProjectId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "StartMetadataGenerationRunOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          notebookIdentifier: S.String,
          owningProjectIdentifier: S.String,
          fileFormat: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/notebook-exports" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartNotebookExportInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          domainId: S.String,
          owningProjectId: S.String,
          notebookId: S.String,
          fileFormat: S.String,
          status: S.String,
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
        }),
      ).annotate({
        identifier: "StartNotebookExportOutput",
      });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ s3: SensitiveString })]);
  }
}
function __c85(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          owningProjectIdentifier: S.String,
          sourceLocation: __S(679, __c84, 7),
          name: SensitiveString,
          description: S.optional(SensitiveString),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/notebook-imports" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartNotebookImportInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          notebookId: S.optional(S.String),
          status: S.optional(S.String),
          domainId: S.optional(S.String),
          owningProjectId: S.optional(S.String),
          name: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
          sourceLocation: S.optional(__S(679, __c84, 7)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
        }),
      ).annotate({
        identifier: "StartNotebookImportOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          owningProjectIdentifier: S.String,
          notebookIdentifier: S.String,
          scheduleIdentifier: S.optional(S.String),
          computeConfiguration: S.optional(__S(430, __c53, 6)),
          networkConfiguration: S.optional(__S(431, __c53, 7)),
          timeoutConfiguration: S.optional(__S(432, __c54, 0)),
          notificationConfiguration: S.optional(__S(434, __c54, 2)),
          triggerSource: S.optional(__S(435, __c54, 3)),
          metadata: S.optional(__S(238, __c29, 6)),
          parameters: S.optional(__S(192, __c24, 0)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/notebook-runs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartNotebookRunInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          owningProjectIdentifier: S.String,
          sourceLocation: __S(679, __c84, 7),
          gitMetadata: S.optional(__S(244, __c30, 4)),
          notebookId: S.optional(S.String),
          name: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v2/domains/{domainIdentifier}/notebook-syncs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartNotebookSyncInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          notebookId: S.optional(S.String),
          status: S.optional(S.String),
          domainId: S.optional(S.String),
          owningProjectId: S.optional(S.String),
          sourceLocation: S.optional(__S(679, __c84, 7)),
          gitMetadata: S.optional(__S(244, __c30, 4)),
          name: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "StartNotebookSyncOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v2/domains/{domainIdentifier}/notebook-runs/{identifier}/stop",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StopNotebookRunInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          domainId: S.String,
          owningProjectId: S.String,
          status: S.String,
        }),
      ).annotate({ identifier: "StopNotebookRunOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tags: __S(192, __c24, 0),
        }).pipe(
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
  }
}
function __c86(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(5, __c0, 5).pipe(T.HttpQuery("tagKeys")),
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
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          name: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
          resolutionStrategy: S.optional(S.String),
          accountSource: S.optional(__S(76, __c9, 4)),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/v2/domains/{domainIdentifier}/account-pools/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateAccountPoolInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          assetIdentifier: S.String.pipe(T.HttpLabel("assetIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          name: S.optional(S.String),
          description: S.optional(SensitiveString),
          configuration: S.optional(__S(95, __c11, 7)),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/v2/domains/{domainIdentifier}/assets/{assetIdentifier}/filters/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateAssetFilterInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          secretArn: S.optional(S.String),
          basicAuthenticationCredentials: S.optional(__S(116, __c14, 4)),
        }),
      ).annotate({
        identifier: "AuthenticationConfigurationPatch",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          description: S.optional(S.String),
          connectionProperties: S.optional(__S(107, __c13, 3)),
          authenticationConfiguration: S.optional(__S(691, __c86, 3)),
        }),
      ).annotate({ identifier: "GlueConnectionPatch" });
    case 5:
      return S.suspend(() =>
        S.Struct({ glueConnectionInput: S.optional(__S(692, __c86, 4)) }),
      ).annotate({ identifier: "GluePropertiesPatch" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          description: S.optional(S.String),
          connectionProperties: S.optional(__S(107, __c13, 3)),
          authenticationConfiguration: S.optional(__S(691, __c86, 3)),
        }),
      ).annotate({
        identifier: "ConnectivityPropertiesPatch",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          connectivityPropertiesPatch: S.optional(__S(694, __c86, 6)),
          snowflakeRole: S.optional(S.String),
          lineageSync: S.optional(__S(134, __c16, 6)),
        }),
      ).annotate({ identifier: "SnowflakePropertiesPatch" });
  }
}
function __c87(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          vpcId: S.optional(S.String),
          subnetIds: S.optional(__S(5, __c0, 5)),
          securityGroupId: S.optional(S.String),
        }),
      ).annotate({ identifier: "VpcPropertiesPatch" });
    case 1:
      return S.suspend(() =>
        S.Struct({ codeConnectionArn: S.optional(S.String), defaultBranch: S.optional(S.String) }),
      ).annotate({ identifier: "GitPropertiesPatch" });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ athenaProperties: __S(110, __c13, 6) }),
        /*@__PURE__*/ S.Struct({ glueProperties: __S(693, __c86, 5) }),
        /*@__PURE__*/ S.Struct({ iamProperties: __S(139, __c17, 3) }),
        /*@__PURE__*/ S.Struct({ redshiftProperties: __S(127, __c15, 7) }),
        /*@__PURE__*/ S.Struct({ sparkEmrProperties: __S(128, __c16, 0) }),
        /*@__PURE__*/ S.Struct({ s3Properties: __S(131, __c16, 3) }),
        /*@__PURE__*/ S.Struct({ snowflakeProperties: __S(695, __c86, 7) }),
        /*@__PURE__*/ S.Struct({ amazonQProperties: __S(136, __c17, 0) }),
        /*@__PURE__*/ S.Struct({ mlflowProperties: __S(137, __c17, 1) }),
        /*@__PURE__*/ S.Struct({ lakehouseProperties: __S(139, __c17, 3) }),
        /*@__PURE__*/ S.Struct({ vpcProperties: __S(696, __c87, 0) }),
        /*@__PURE__*/ S.Struct({ gitProperties: __S(697, __c87, 1) }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          configurations: S.optional(__S(109, __c13, 5)),
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          description: S.optional(SensitiveString),
          awsLocation: S.optional(__S(106, __c13, 2)),
          props: S.optional(__S(698, __c87, 2)),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/v2/domains/{domainIdentifier}/connections/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateConnectionInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          configurations: S.optional(__S(109, __c13, 5)),
          connectionId: S.String,
          description: S.optional(SensitiveString),
          domainId: S.String,
          domainUnitId: S.String,
          environmentId: S.optional(S.String),
          name: S.String,
          physicalEndpoints: __S(147, __c18, 3),
          projectId: S.optional(S.String),
          props: S.optional(__S(162, __c20, 2)),
          type: S.String,
          scope: S.optional(S.String),
        }),
      ).annotate({ identifier: "UpdateConnectionOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          name: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
          enableSetting: S.optional(S.String),
          publishOnImport: S.optional(S.Boolean),
          assetFormsInput: S.optional(__S(62, __c7, 6)),
          schedule: S.optional(__S(183, __c22, 7)),
          configuration: S.optional(__S(181, __c22, 5)),
          recommendation: S.optional(__S(182, __c22, 6)),
          retainPermissionsOnRevokeFailure: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/v2/domains/{domainIdentifier}/data-sources/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateDataSourceInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          status: S.optional(S.String),
          type: S.optional(S.String),
          name: SensitiveString,
          description: S.optional(SensitiveString),
          domainId: S.String,
          projectId: S.String,
          environmentId: S.optional(S.String),
          connectionId: S.optional(S.String),
          configuration: S.optional(__S(188, __c23, 4)),
          recommendation: S.optional(__S(182, __c22, 6)),
          enableSetting: S.optional(S.String),
          publishOnImport: S.optional(S.Boolean),
          assetFormsOutput: S.optional(__S(32, __c4, 0)),
          schedule: S.optional(__S(183, __c22, 7)),
          lastRunStatus: S.optional(S.String),
          lastRunAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastRunErrorMessage: S.optional(__S(189, __c23, 5)),
          errorMessage: S.optional(__S(189, __c23, 5)),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          selfGrantStatus: S.optional(__S(321, __c40, 1)),
          retainPermissionsOnRevokeFailure: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "UpdateDataSourceOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          description: S.optional(S.String),
          singleSignOn: S.optional(__S(191, __c23, 7)),
          domainExecutionRole: S.optional(S.String),
          serviceRole: S.optional(S.String),
          name: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v2/domains/{identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateDomainInput" });
  }
}
function __c88(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          rootDomainUnitId: S.optional(S.String),
          description: S.optional(S.String),
          singleSignOn: S.optional(__S(191, __c23, 7)),
          domainExecutionRole: S.optional(S.String),
          serviceRole: S.optional(S.String),
          name: S.optional(S.String),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "UpdateDomainOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          description: S.optional(SensitiveString),
          name: S.optional(SensitiveString),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v2/domains/{domainIdentifier}/domain-units/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateDomainUnitInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          domainId: S.String,
          name: SensitiveString,
          owners: __S(199, __c24, 7),
          description: S.optional(SensitiveString),
          parentDomainUnitId: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(S.String),
          lastUpdatedBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "UpdateDomainUnitOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          name: S.optional(S.String),
          description: S.optional(S.String),
          glossaryTerms: S.optional(__S(5, __c0, 5)),
          blueprintVersion: S.optional(S.String),
          userParameters: S.optional(__S(202, __c25, 2)),
          environmentConfigurationName: S.optional(SensitiveString),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/v2/domains/{domainIdentifier}/environments/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateEnvironmentInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          environmentIdentifier: S.String.pipe(T.HttpLabel("environmentIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          parameters: S.optional(__S(219, __c27, 3)),
          name: S.optional(S.String),
          description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/actions/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateEnvironmentActionInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          description: S.optional(S.String),
          provisioningProperties: S.optional(__S(215, __c26, 7)),
          userParameters: S.optional(__S(211, __c26, 3)),
          blueprintCategory: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/v2/domains/{domainIdentifier}/environment-blueprints/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateEnvironmentBlueprintInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          name: S.optional(SensitiveString),
          description: S.optional(S.String),
          userParameters: S.optional(__S(202, __c25, 2)),
          awsAccountId: S.optional(S.String),
          awsAccountRegion: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/v2/domains/{domainIdentifier}/environment-profiles/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateEnvironmentProfileInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          name: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
          status: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/v2/domains/{domainIdentifier}/glossaries/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateGlossaryInput" });
  }
}
function __c89(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          glossaryIdentifier: S.optional(S.String),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          name: S.optional(SensitiveString),
          shortDescription: S.optional(SensitiveString),
          longDescription: S.optional(SensitiveString),
          termRelations: S.optional(__S(231, __c28, 7)),
          status: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/v2/domains/{domainIdentifier}/glossary-terms/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateGlossaryTermInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          groupIdentifier: S.String.pipe(T.HttpLabel("groupIdentifier")),
          status: S.String,
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v2/domains/{domainIdentifier}/group-profiles/{groupIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateGroupProfileInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          description: S.optional(SensitiveString),
          status: S.optional(S.String),
          name: S.optional(SensitiveString),
          cellOrder: S.optional(__S(240, __c30, 0)),
          type: S.optional(S.String),
          metadata: S.optional(__S(238, __c29, 6)),
          parameters: S.optional(__S(192, __c24, 0)),
          environmentConfiguration: S.optional(__S(242, __c30, 2)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/v2/domains/{domainIdentifier}/notebooks/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateNotebookInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          name: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
          resourceTags: S.optional(__S(192, __c24, 0)),
          glossaryTerms: S.optional(__S(5, __c0, 5)),
          domainUnitId: S.optional(S.String),
          environmentDeploymentDetails: S.optional(__S(259, __c32, 3)),
          userParameters: S.optional(__S(248, __c31, 0)),
          projectProfileVersion: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/v2/domains/{domainIdentifier}/projects/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateProjectInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          name: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
          status: S.optional(S.String),
          projectResourceTags: S.optional(__S(263, __c32, 7)),
          allowCustomProjectResourceTags: S.optional(S.Boolean),
          projectResourceTagsDescription: S.optional(SensitiveString),
          environmentConfigurations: S.optional(__S(270, __c33, 6)),
          domainUnitIdentifier: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/v2/domains/{domainIdentifier}/project-profiles/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateProjectProfileInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          currentOwner: S.String,
          newOwner: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/v2/domains/{domainIdentifier}/root-domain-unit-owner",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateRootDomainUnitOwnerInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          name: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
          scope: S.optional(__S(277, __c34, 5)),
          detail: S.optional(__S(282, __c35, 2)),
          includeChildDomainUnits: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/v2/domains/{domainIdentifier}/rules/{identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateRuleInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          identifier: S.String,
          revision: S.String,
          name: SensitiveString,
          ruleType: S.String,
          target: __S(274, __c34, 2),
          action: S.String,
          scope: __S(277, __c34, 5),
          detail: __S(282, __c35, 2),
          description: S.optional(SensitiveString),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          createdBy: S.String,
          lastUpdatedBy: S.String,
        }),
      ).annotate({ identifier: "UpdateRuleOutput" });
  }
}
function __c90(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          assetIdentifier: S.String.pipe(T.HttpLabel("assetIdentifier")),
          status: S.String,
          failureCause: S.optional(__S(292, __c36, 4)),
          targetName: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/v2/domains/{domainIdentifier}/subscription-grants/{identifier}/status/{assetIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateSubscriptionGrantStatusInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          requestReason: SensitiveString,
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/v2/domains/{domainIdentifier}/subscription-requests/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateSubscriptionRequestInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          environmentIdentifier: S.String.pipe(T.HttpLabel("environmentIdentifier")),
          identifier: S.String.pipe(T.HttpLabel("identifier")),
          name: S.optional(SensitiveString),
          authorizedPrincipals: S.optional(__S(5, __c0, 5)),
          applicableAssetTypes: S.optional(__S(5, __c0, 5)),
          subscriptionTargetConfig: S.optional(__S(304, __c38, 0)),
          manageAccessRole: S.optional(S.String),
          provider: S.optional(S.String),
          subscriptionGrantCreationMode: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets/{identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateSubscriptionTargetInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainIdentifier: S.String.pipe(T.HttpLabel("domainIdentifier")),
          userIdentifier: S.String.pipe(T.HttpLabel("userIdentifier")),
          type: S.optional(S.String),
          status: S.String,
          sessionName: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v2/domains/{domainIdentifier}/user-profiles/{userIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateUserProfileInput" });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
