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
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "TaxSettings",
  serviceShapeName: "TaxSettings",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "tax" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-05-10");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { UseDualStack = false, UseFIPS = false, Endpoint, Region } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  const _p0 = (_0: unknown) => ({
    authSchemes: [{ name: "sigv4", signingRegion: `${_.getAttr(_0, "implicitGlobalRegion")}` }],
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
              `https://tax-fips.${_.getAttr(PartitionResult, "implicitGlobalRegion")}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
              _p0(PartitionResult),
              {},
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true && UseDualStack === false) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://tax-fips.${_.getAttr(PartitionResult, "implicitGlobalRegion")}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
              _p0(PartitionResult),
              {},
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseFIPS === false && UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://tax.${_.getAttr(PartitionResult, "implicitGlobalRegion")}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
              _p0(PartitionResult),
              {},
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://tax.${_.getAttr(PartitionResult, "implicitGlobalRegion")}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
          _p0(PartitionResult),
          {},
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ SensitiveString.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(401),
  ).pipe(C.withAuthError) {}
export class AttachmentUploadException
  extends /*@__PURE__*/ S.TaggedError<AttachmentUploadException>()(
    "AttachmentUploadException",
    { message: /*@__PURE__*/ SensitiveString.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class CaseCreationLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<CaseCreationLimitExceededException>()(
    "CaseCreationLimitExceededException",
    { message: /*@__PURE__*/ SensitiveString.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(413),
  ).pipe(C.withBadRequestError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ SensitiveString.pipe(/*@__PURE__*/ T.ErrorMessage()),
      errorCode: S.String,
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    {
      message: /*@__PURE__*/ SensitiveString.pipe(/*@__PURE__*/ T.ErrorMessage()),
      errorCode: S.String,
    },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ SensitiveString.pipe(/*@__PURE__*/ T.ErrorMessage()),
      errorCode: S.String,
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ SensitiveString.pipe(/*@__PURE__*/ T.ErrorMessage()),
      errorCode: /*@__PURE__*/ S.suspend(() => S.String).annotate({
        identifier: "ValidationExceptionErrorCode",
      }),
      fieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(95, __c11, 7)).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type AccountId = string;
export type AccountIds = string[];
export interface BatchDeleteTaxRegistrationRequest {
  accountIds: string[];
}
export type ErrorMessage = string | redacted.Redacted<string>;
export type ErrorCode = string;
export interface BatchDeleteTaxRegistrationError_ {
  accountId: string;
  message: string | redacted.Redacted<string>;
  code?: string;
}
export type BatchDeleteTaxRegistrationErrors = BatchDeleteTaxRegistrationError_[];
export interface BatchDeleteTaxRegistrationResponse {
  errors: BatchDeleteTaxRegistrationError_[];
}
export interface BatchGetTaxExemptionsRequest {
  accountIds: string[];
}
export type CountryCode = string;
export type State = string;
export interface Authority {
  country: string;
  state?: string;
}
export type DisplayName = string;
export type Authorities = Authority[];
export interface TaxExemptionType {
  displayName?: string;
  description?: string;
  applicableJurisdictions?: Authority[];
}
export type EntityExemptionAccountStatus = "None" | "Valid" | "Expired" | "Pending" | (string & {});
export interface TaxExemption {
  authority: Authority;
  taxExemptionType: TaxExemptionType;
  effectiveDate?: Date;
  expirationDate?: Date;
  systemEffectiveDate?: Date;
  status?: EntityExemptionAccountStatus;
}
export type TaxExemptions = TaxExemption[];
export interface TaxExemptionDetails {
  taxExemptions?: TaxExemption[];
  heritageObtainedDetails?: boolean;
  heritageObtainedParentEntity?: string;
  heritageObtainedReason?: string;
}
export type TaxExemptionDetailsMap = { [key: string]: TaxExemptionDetails | undefined };
export interface BatchGetTaxExemptionsResponse {
  taxExemptionDetailsMap?: { [key: string]: TaxExemptionDetails | undefined };
  failedAccounts?: string[];
}
export type RegistrationId = string;
export type TaxRegistrationType =
  | "VAT"
  | "GST"
  | "CPF"
  | "CNPJ"
  | "SST"
  | "TIN"
  | "NRIC"
  | "PAN"
  | "NIP"
  | (string & {});
export type LegalName = string;
export type AddressLine1 = string;
export type AddressLine2 = string;
export type AddressLine3 = string;
export type District = string;
export type City = string;
export type PostalCode = string;
export interface Address {
  addressLine1?: string;
  addressLine2?: string;
  addressLine3?: string;
  districtOrCounty?: string;
  city?: string;
  stateOrRegion?: string;
  postalCode: string;
  countryCode: string;
}
export type Sector = "Business" | "Individual" | "Government" | (string & {});
export type MalaysiaServiceTaxCode =
  | "Consultancy"
  | "Digital Service And Electronic Medium"
  | "IT Services"
  | "Training Or Coaching"
  | (string & {});
export type MalaysiaServiceTaxCodesList = MalaysiaServiceTaxCode[];
export type TaxInformationNumber = string;
export type BusinessRegistrationNumber = string;
export interface MalaysiaAdditionalInfo {
  serviceTaxCodes?: MalaysiaServiceTaxCode[];
  taxInformationNumber?: string;
  businessRegistrationNumber?: string;
}
export type IsraelDealerType = "Authorized" | "Non-authorized" | (string & {});
export type IsraelCustomerType = "Business" | "Individual" | (string & {});
export interface IsraelAdditionalInfo {
  dealerType: IsraelDealerType;
  customerType: IsraelCustomerType;
}
export type RegistryCommercialCode = string;
export interface EstoniaAdditionalInfo {
  registryCommercialCode: string;
}
export type CanadaProvincialSalesTaxIdString = string;
export type CanadaQuebecSalesTaxNumberString = string;
export type CanadaRetailSalesTaxNumberString = string;
export interface CanadaAdditionalInfo {
  provincialSalesTaxId?: string;
  canadaQuebecSalesTaxNumber?: string;
  canadaRetailSalesTaxNumber?: string;
  isResellerAccount?: boolean;
}
export type RegistrationType = "Intra-EU" | "Local" | (string & {});
export interface SpainAdditionalInfo {
  registrationType: RegistrationType;
}
export type PersonType = "Legal Person" | "Physical Person" | "Business" | (string & {});
export interface KenyaAdditionalInfo {
  personType: PersonType;
}
export type BusinessRepresentativeName = string;
export type LineOfBusiness = string;
export type ItemOfBusiness = string;
export interface SouthKoreaAdditionalInfo {
  businessRepresentativeName: string;
  lineOfBusiness: string;
  itemOfBusiness: string;
}
export type TaxOffice = string;
export type KepEmailId = string;
export type SecondaryTaxId = string;
export type Industries =
  | "CirculatingOrg"
  | "ProfessionalOrg"
  | "Banks"
  | "Insurance"
  | "PensionAndBenefitFunds"
  | "DevelopmentAgencies"
  | (string & {});
export interface TurkeyAdditionalInfo {
  taxOffice?: string;
  kepEmailId?: string;
  secondaryTaxId?: string;
  industries?: Industries;
}
export interface GeorgiaAdditionalInfo {
  personType: PersonType;
}
export type SdiAccountId = string;
export type CigNumber = string;
export type CupNumber = string;
export type TaxCode = string;
export type CustomerType = "Business" | "Individual" | (string & {});
export interface ItalyAdditionalInfo {
  sdiAccountId?: string;
  cigNumber?: string;
  cupNumber?: string;
  taxCode?: string;
  customerType?: CustomerType;
}
export type TaxRegistrationNumberType =
  | "TaxRegistrationNumber"
  | "LocalRegistrationNumber"
  | (string & {});
export interface RomaniaAdditionalInfo {
  taxRegistrationNumberType: TaxRegistrationNumberType;
}
export type UkraineTrnType = "Business" | "Individual" | (string & {});
export interface UkraineAdditionalInfo {
  ukraineTrnType: UkraineTrnType;
}
export type IndividualRegistrationNumber = string;
export type PolandTaxRegistrationNumberType =
  | "EUTaxRegistrationNumber"
  | "LocalTaxRegistrationNumber"
  | "LocalRegistrationNumber"
  | (string & {});
export interface PolandAdditionalInfo {
  individualRegistrationNumber?: string;
  isGroupVatEnabled?: boolean;
  taxRegistrationNumberType?: PolandTaxRegistrationNumberType;
}
export type SaudiArabiaTaxRegistrationNumberType =
  | "TaxRegistrationNumber"
  | "TaxIdentificationNumber"
  | "CommercialRegistrationNumber"
  | (string & {});
export interface SaudiArabiaAdditionalInfo {
  taxRegistrationNumberType?: SaudiArabiaTaxRegistrationNumberType;
}
export type IndonesiaTaxRegistrationNumberType =
  | "NIK"
  | "PassportNumber"
  | "NPWP"
  | "NITKU"
  | (string & {});
export type PpnExceptionDesignationCode = string;
export type DecisionNumber = string;
export interface IndonesiaAdditionalInfo {
  taxRegistrationNumberType?: IndonesiaTaxRegistrationNumberType;
  ppnExceptionDesignationCode?: string;
  decisionNumber?: string;
}
export type EnterpriseIdentificationNumber = string;
export type ElectronicTransactionCodeNumber = string;
export type PaymentVoucherNumber = string;
export type DateString = string;
export interface VietnamAdditionalInfo {
  enterpriseIdentificationNumber?: string;
  electronicTransactionCodeNumber?: string;
  paymentVoucherNumber?: string;
  paymentVoucherNumberDate?: string;
}
export type UniqueIdentificationNumber = string;
export interface EgyptAdditionalInfo {
  uniqueIdentificationNumber?: string;
  uniqueIdentificationNumberExpirationDate?: string;
}
export type ContractingAuthorityCode = string;
export interface GreeceAdditionalInfo {
  contractingAuthorityCode?: string;
}
export type UzbekistanTaxRegistrationNumberType = "Business" | "Individual" | (string & {});
export type VatRegistrationNumber = string;
export interface UzbekistanAdditionalInfo {
  taxRegistrationNumberType?: UzbekistanTaxRegistrationNumberType;
  vatRegistrationNumber?: string;
}
export interface PhilippinesAdditionalInfo {
  isVatRegistered?: boolean;
}
export type PeppolId = string;
export interface BelgiumAdditionalInfo {
  peppolId?: string;
  isMercuriusBoxEnabled?: boolean;
}
export type ChileDocumentType = "Invoice" | "Receipt" | (string & {});
export interface ChileAdditionalInfo {
  documentType?: ChileDocumentType;
  businessActivity?: string;
}
export type SirenNumber = string;
export interface FranceAdditionalInfo {
  sirenNumber: string;
  eInvoiceRoutingCode?: string;
}
export type BusinessNumber = string;
export interface MonacoAdditionalInfo {
  businessNumber: string;
}
export interface AdditionalInfoRequest {
  malaysiaAdditionalInfo?: MalaysiaAdditionalInfo;
  israelAdditionalInfo?: IsraelAdditionalInfo;
  estoniaAdditionalInfo?: EstoniaAdditionalInfo;
  canadaAdditionalInfo?: CanadaAdditionalInfo;
  spainAdditionalInfo?: SpainAdditionalInfo;
  kenyaAdditionalInfo?: KenyaAdditionalInfo;
  southKoreaAdditionalInfo?: SouthKoreaAdditionalInfo;
  turkeyAdditionalInfo?: TurkeyAdditionalInfo;
  georgiaAdditionalInfo?: GeorgiaAdditionalInfo;
  italyAdditionalInfo?: ItalyAdditionalInfo;
  romaniaAdditionalInfo?: RomaniaAdditionalInfo;
  ukraineAdditionalInfo?: UkraineAdditionalInfo;
  polandAdditionalInfo?: PolandAdditionalInfo;
  saudiArabiaAdditionalInfo?: SaudiArabiaAdditionalInfo;
  indonesiaAdditionalInfo?: IndonesiaAdditionalInfo;
  vietnamAdditionalInfo?: VietnamAdditionalInfo;
  egyptAdditionalInfo?: EgyptAdditionalInfo;
  greeceAdditionalInfo?: GreeceAdditionalInfo;
  uzbekistanAdditionalInfo?: UzbekistanAdditionalInfo;
  philippinesAdditionalInfo?: PhilippinesAdditionalInfo;
  belgiumAdditionalInfo?: BelgiumAdditionalInfo;
  chileAdditionalInfo?: ChileAdditionalInfo;
  franceAdditionalInfo?: FranceAdditionalInfo;
  monacoAdditionalInfo?: MonacoAdditionalInfo;
}
export type DateOfBirth = string;
export type S3BucketName = string;
export type S3Key = string;
export interface SourceS3Location {
  bucket: string;
  key: string;
}
export type TaxDocumentName = string;
export type FileBlob = Uint8Array;
export interface TaxRegistrationDocFile {
  fileName: string;
  fileContent: Uint8Array;
}
export interface TaxRegistrationDocument {
  s3Location?: SourceS3Location;
  file?: TaxRegistrationDocFile;
}
export type TaxRegistrationDocuments = TaxRegistrationDocument[];
export interface VerificationDetails {
  dateOfBirth?: string;
  taxRegistrationDocuments?: TaxRegistrationDocument[];
}
export type CertifiedEmailId = string;
export interface TaxRegistrationEntry {
  registrationId: string;
  registrationType: TaxRegistrationType;
  legalName?: string;
  legalAddress?: Address;
  sector?: Sector;
  additionalTaxInformation?: AdditionalInfoRequest;
  verificationDetails?: VerificationDetails;
  certifiedEmailId?: string;
}
export interface BatchPutTaxRegistrationRequest {
  accountIds: string[];
  taxRegistrationEntry: TaxRegistrationEntry;
}
export type TaxRegistrationStatus = "Verified" | "Pending" | "Deleted" | "Rejected" | (string & {});
export interface BatchPutTaxRegistrationError_ {
  accountId: string;
  message: string | redacted.Redacted<string>;
  code?: string;
}
export type BatchPutTaxRegistrationErrors = BatchPutTaxRegistrationError_[];
export interface BatchPutTaxRegistrationResponse {
  status?: TaxRegistrationStatus;
  errors: BatchPutTaxRegistrationError_[];
}
export interface DeleteSupplementalTaxRegistrationRequest {
  authorityId: string;
}
export interface DeleteSupplementalTaxRegistrationResponse {}
export interface DeleteTaxRegistrationRequest {
  accountId?: string;
}
export interface DeleteTaxRegistrationResponse {}
export interface GetTaxExemptionTypesRequest {}
export type TaxExemptionTypes = TaxExemptionType[];
export interface GetTaxExemptionTypesResponse {
  taxExemptionTypes?: TaxExemptionType[];
}
export interface GetTaxInheritanceRequest {}
export type HeritageStatus = "OptIn" | "OptOut" | (string & {});
export interface GetTaxInheritanceResponse {
  heritageStatus?: HeritageStatus;
}
export interface GetTaxRegistrationRequest {
  accountId?: string;
}
export type TaxDocumentAccessToken = string;
export interface TaxDocumentMetadata {
  taxDocumentAccessToken: string;
  taxDocumentName: string;
}
export type TaxDocumentMetadatas = TaxDocumentMetadata[];
export type CcmCode = string;
export type LegalNatureCode = string;
export interface BrazilAdditionalInfo {
  ccmCode?: string;
  legalNatureCode?: string;
}
export type Pan = string;
export interface IndiaAdditionalInfo {
  pan?: string;
}
export interface AdditionalInfoResponse {
  malaysiaAdditionalInfo?: MalaysiaAdditionalInfo;
  israelAdditionalInfo?: IsraelAdditionalInfo;
  estoniaAdditionalInfo?: EstoniaAdditionalInfo;
  canadaAdditionalInfo?: CanadaAdditionalInfo;
  brazilAdditionalInfo?: BrazilAdditionalInfo;
  spainAdditionalInfo?: SpainAdditionalInfo;
  kenyaAdditionalInfo?: KenyaAdditionalInfo;
  southKoreaAdditionalInfo?: SouthKoreaAdditionalInfo;
  turkeyAdditionalInfo?: TurkeyAdditionalInfo;
  georgiaAdditionalInfo?: GeorgiaAdditionalInfo;
  italyAdditionalInfo?: ItalyAdditionalInfo;
  romaniaAdditionalInfo?: RomaniaAdditionalInfo;
  ukraineAdditionalInfo?: UkraineAdditionalInfo;
  polandAdditionalInfo?: PolandAdditionalInfo;
  saudiArabiaAdditionalInfo?: SaudiArabiaAdditionalInfo;
  indiaAdditionalInfo?: IndiaAdditionalInfo;
  indonesiaAdditionalInfo?: IndonesiaAdditionalInfo;
  vietnamAdditionalInfo?: VietnamAdditionalInfo;
  egyptAdditionalInfo?: EgyptAdditionalInfo;
  greeceAdditionalInfo?: GreeceAdditionalInfo;
  uzbekistanAdditionalInfo?: UzbekistanAdditionalInfo;
  philippinesAdditionalInfo?: PhilippinesAdditionalInfo;
  belgiumAdditionalInfo?: BelgiumAdditionalInfo;
  chileAdditionalInfo?: ChileAdditionalInfo;
  franceAdditionalInfo?: FranceAdditionalInfo;
  monacoAdditionalInfo?: MonacoAdditionalInfo;
}
export interface TaxRegistration {
  registrationId: string;
  registrationType: TaxRegistrationType;
  legalName: string;
  status: TaxRegistrationStatus;
  sector?: Sector;
  taxDocumentMetadatas?: TaxDocumentMetadata[];
  certifiedEmailId?: string;
  additionalTaxInformation?: AdditionalInfoResponse;
  legalAddress: Address;
}
export interface GetTaxRegistrationResponse {
  taxRegistration?: TaxRegistration;
}
export type S3Prefix = string;
export interface DestinationS3Location {
  bucket: string;
  prefix?: string;
}
export interface GetTaxRegistrationDocumentRequest {
  destinationS3Location?: DestinationS3Location;
  taxDocumentMetadata: TaxDocumentMetadata;
}
export type DestinationFilePath = string;
export type Url = string;
export interface GetTaxRegistrationDocumentResponse {
  destinationFilePath?: string;
  presignedS3Url?: string;
}
export type MaxResults = number;
export type PaginationTokenString = string;
export interface ListSupplementalTaxRegistrationsRequest {
  maxResults?: number;
  nextToken?: string;
}
export type SupplementalTaxRegistrationType = "VAT" | (string & {});
export interface SupplementalTaxRegistration {
  registrationId: string;
  registrationType: SupplementalTaxRegistrationType;
  legalName: string;
  address: Address;
  authorityId: string;
  status: TaxRegistrationStatus;
}
export type SupplementalTaxRegistrationList = SupplementalTaxRegistration[];
export interface ListSupplementalTaxRegistrationsResponse {
  taxRegistrations: SupplementalTaxRegistration[];
  nextToken?: string;
}
export interface ListTaxExemptionsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListTaxExemptionsResponse {
  nextToken?: string;
  taxExemptionDetailsMap?: { [key: string]: TaxExemptionDetails | undefined };
}
export interface ListTaxRegistrationsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface Jurisdiction {
  stateOrRegion?: string;
  countryCode: string;
}
export interface TaxRegistrationWithJurisdiction {
  registrationId: string;
  registrationType: TaxRegistrationType;
  legalName: string;
  status: TaxRegistrationStatus;
  sector?: Sector;
  taxDocumentMetadatas?: TaxDocumentMetadata[];
  certifiedEmailId?: string;
  additionalTaxInformation?: AdditionalInfoResponse;
  jurisdiction: Jurisdiction;
}
export type InheritanceObtainedReason = string;
export interface TaxInheritanceDetails {
  parentEntityId?: string;
  inheritanceObtainedReason?: string;
}
export type AccountName = string;
export type Seller = string;
export type AddressRoleType = "TaxAddress" | "BillingAddress" | "ContactAddress" | (string & {});
export type AddressRoleMap = { [key in AddressRoleType]?: Jurisdiction };
export interface AccountMetaData {
  accountName?: string;
  seller?: string;
  address?: Address;
  addressType?: AddressRoleType;
  addressRoleMap?: { [key: string]: Jurisdiction | undefined };
}
export interface AccountDetails {
  accountId?: string;
  taxRegistration?: TaxRegistrationWithJurisdiction;
  taxInheritanceDetails?: TaxInheritanceDetails;
  accountMetaData?: AccountMetaData;
}
export type AccountDetailsList = AccountDetails[];
export interface ListTaxRegistrationsResponse {
  accountDetails: AccountDetails[];
  nextToken?: string;
}
export interface SupplementalTaxRegistrationEntry {
  registrationId: string;
  registrationType: SupplementalTaxRegistrationType;
  legalName: string;
  address: Address;
}
export interface PutSupplementalTaxRegistrationRequest {
  taxRegistrationEntry: SupplementalTaxRegistrationEntry;
}
export interface PutSupplementalTaxRegistrationResponse {
  authorityId: string;
  status: TaxRegistrationStatus;
}
export type ExemptionDocumentName = string;
export type ExemptionFileBlob = Uint8Array;
export interface ExemptionCertificate {
  documentName: string;
  documentFile: Uint8Array;
}
export interface PutTaxExemptionRequest {
  accountIds: string[];
  authority: Authority;
  exemptionType: string;
  exemptionCertificate: ExemptionCertificate;
}
export interface PutTaxExemptionResponse {
  caseId?: string;
}
export interface PutTaxInheritanceRequest {
  heritageStatus?: HeritageStatus;
}
export interface PutTaxInheritanceResponse {}
export interface PutTaxRegistrationRequest {
  accountId?: string;
  taxRegistrationEntry: TaxRegistrationEntry;
}
export interface PutTaxRegistrationResponse {
  status?: TaxRegistrationStatus;
}
export type ValidationExceptionErrorCode =
  | "MalformedToken"
  | "ExpiredToken"
  | "InvalidToken"
  | "FieldValidationFailed"
  | "MissingInput"
  | "NonIndiaCustomerCanNotSetPAN"
  | "GSTExistenceBlockSetPAN"
  | (string & {});
export type FieldName = string;
export interface ValidationExceptionField {
  name: string;
}
export type ValidationExceptionFieldList = ValidationExceptionField[];
export type BatchDeleteTaxRegistrationError =
  | ConflictException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Deletes tax registration for multiple accounts in batch. This can be used to delete tax registrations for up to five accounts in one batch.
 *
 * This API operation can't be used to delete your tax registration in Brazil. Use the Payment preferences page in the Billing and Cost Management console instead.
 */
export const batchDeleteTaxRegistration: API.OperationMethod<
  BatchDeleteTaxRegistrationRequest,
  BatchDeleteTaxRegistrationResponse,
  BatchDeleteTaxRegistrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1, __c0, 1) as any as S.Schema<BatchDeleteTaxRegistrationRequest>,
  output: __S(4, __c0, 4) as any as S.Schema<BatchDeleteTaxRegistrationResponse>,
  errors: [ConflictException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDeleteTaxRegistration",
}));

export type BatchGetTaxExemptionsError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Get the active tax exemptions for a given list of accounts. The IAM action is `tax:GetExemptions`.
 */
export const batchGetTaxExemptions: API.OperationMethod<
  BatchGetTaxExemptionsRequest,
  BatchGetTaxExemptionsResponse,
  BatchGetTaxExemptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(5, __c0, 5) as any as S.Schema<BatchGetTaxExemptionsRequest>,
  output: __S(13, __c1, 5) as any as S.Schema<BatchGetTaxExemptionsResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetTaxExemptions",
}));

export type BatchPutTaxRegistrationError =
  | ConflictException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Adds or updates tax registration for multiple accounts in batch. This can be used to add or update tax registrations for up to five accounts in one batch. You can't set a TRN if there's a pending TRN. You'll need to delete the pending TRN first.
 *
 * To call this API operation for specific countries, see the following country-specific requirements.
 *
 * **Bangladesh**
 *
 * - You must specify the tax registration certificate document in the `taxRegistrationDocuments` field of the `VerificationDetails` object.
 *
 * **Brazil**
 *
 * - You must complete the tax registration process in the Payment preferences page in the Billing and Cost Management console. After your TRN and billing address are verified, you can call this API operation.
 *
 * - For Amazon Web Services accounts created through Organizations, you can call this API operation when you don't have a billing address.
 *
 * **Georgia**
 *
 * - The valid `personType` values are `Physical Person` and `Business`.
 *
 * **Indonesia**
 *
 * - `PutTaxRegistration`: The use of this operation to submit tax information is subject to the Amazon Web Services service terms. By submitting, you're providing consent for Amazon Web Services to validate NIK, NPWP, and NITKU data, provided by you with the Directorate General of Taxes of Indonesia in accordance with the Minister of Finance Regulation (PMK) Number 112/PMK.03/2022.
 *
 * - `BatchPutTaxRegistration`: The use of this operation to submit tax information is subject to the Amazon Web Services service terms. By submitting, you're providing consent for Amazon Web Services to validate NIK, NPWP, and NITKU data, provided by you with the Directorate General of Taxes of Indonesia in accordance with the Minister of Finance Regulation (PMK) Number 112/PMK.03/2022, through our third-party partner PT Achilles Advanced Management (OnlinePajak).
 *
 * - You must specify the `taxRegistrationNumberType` in the `indonesiaAdditionalInfo` field of the `additionalTaxInformation` object.
 *
 * - If you specify `decisionNumber`, you must specify the `ppnExceptionDesignationCode` in the `indonesiaAdditionalInfo` field of the `additionalTaxInformation` object. If the `taxRegistrationNumberType` is set to NPWP or NITKU, valid values for `ppnExceptionDesignationCode` are either `01`, `02`, `03`, `07`, or `08`.
 *
 * For other `taxRegistrationNumberType` values, `ppnExceptionDesignationCode` must be either `01`, `07`, or `08`.
 *
 * - If `ppnExceptionDesignationCode` is `07` or `08`, you must specify the `decisionNumber` in the `indonesiaAdditionalInfo` field of the `additionalTaxInformation` object.
 *
 * **Kenya**
 *
 * - You must specify the `personType` in the `kenyaAdditionalInfo` field of the `additionalTaxInformation` object.
 *
 * - If the `personType` is `Physical Person`, you must specify the tax registration certificate document in the `taxRegistrationDocuments` field of the `VerificationDetails` object.
 *
 * **Malaysia**
 *
 * - The sector valid values are `Business` and `Individual`.
 *
 * - `RegistrationType` valid values are `NRIC` for individual, and TIN and sales and service tax (SST) for Business.
 *
 * - For individual, you can specify the `taxInformationNumber` in `MalaysiaAdditionalInfo` with NRIC type, and a valid `MyKad` or NRIC number.
 *
 * - For business, you must specify a `businessRegistrationNumber` in `MalaysiaAdditionalInfo` with a TIN type and tax identification number.
 *
 * - For business resellers, you must specify a `businessRegistrationNumber` and `taxInformationNumber` in `MalaysiaAdditionalInfo` with a sales and service tax (SST) type and a valid SST number.
 *
 * - For business resellers with service codes, you must specify `businessRegistrationNumber`, `taxInformationNumber`, and distinct `serviceTaxCodes` in `MalaysiaAdditionalInfo` with a SST type and valid sales and service tax (SST) number. By using this API operation, Amazon Web Services registers your self-declaration that you're an authorized business reseller registered with the Royal Malaysia Customs Department (RMCD), and have a valid SST number.
 *
 * - Amazon Web Services reserves the right to seek additional information and/or take other actions to support your self-declaration as appropriate.
 *
 * - Amazon Web Services is currently registered under the following service tax codes. You must include at least one of the service tax codes in the service tax code strings to declare yourself as an authorized registered business reseller.
 *
 * Taxable service and service tax codes:
 *
 * Consultancy - 9907061674
 *
 * Training or coaching service - 9907071685
 *
 * IT service - 9907101676
 *
 * Digital services and electronic medium - 9907121690
 *
 * **Mexico**
 *
 * - You must provide a Constancia de Situación fiscal (CSF) document in the **verificationDetails** field.
 *
 * - You do not need to provide address and legal name. These will be populated based on your tax registration number.
 *
 * **Nepal**
 *
 * - The sector valid values are `Business` and `Individual`.
 *
 * **Saudi Arabia**
 *
 * - For `address`, you must specify `addressLine3`.
 *
 * **South Korea**
 *
 * - You must specify the `certifiedEmailId` and `legalName` in the `TaxRegistrationEntry` object. Use Korean characters for `legalName`.
 *
 * - You must specify the `businessRepresentativeName`, `itemOfBusiness`, and `lineOfBusiness` in the `southKoreaAdditionalInfo` field of the `additionalTaxInformation` object. Use Korean characters for these fields.
 *
 * - You must specify the tax registration certificate document in the `taxRegistrationDocuments` field of the `VerificationDetails` object.
 *
 * - For the `address` object, use Korean characters for `addressLine1`, `addressLine2` `city`, `postalCode`, and `stateOrRegion`.
 *
 * **Spain**
 *
 * - You must specify the `registrationType` in the `spainAdditionalInfo` field of the `additionalTaxInformation` object.
 *
 * - If the `registrationType` is `Local`, you must specify the tax registration certificate document in the `taxRegistrationDocuments` field of the `VerificationDetails` object.
 *
 * **Turkey**
 *
 * - You must specify the `sector` in the `taxRegistrationEntry` object.
 *
 * - If your `sector` is `Business`, `Individual`, or `Government`:
 *
 * - Specify the `taxOffice`. If your `sector` is `Individual`, don't enter this value.
 *
 * - (Optional) Specify the `kepEmailId`. If your `sector` is `Individual`, don't enter this value.
 *
 * - **Note:** In the **Tax Settings** page of the Billing console, `Government` appears as **Public institutions**
 *
 * - If your `sector` is `Business` and you're subject to KDV tax, you must specify your industry in the `industries` field.
 *
 * - For `address`, you must specify `districtOrCounty`.
 *
 * **Ukraine**
 *
 * - The sector valid values are `Business` and `Individual`.
 *
 * **Philippines**
 *
 * - You can optionally specify the `isVatRegistered` in the `philippinesAdditionalInfo` field of the `additionalTaxInformation` object to indicate your VAT registration status with the Bureau of Internal Revenue (BIR).
 *
 * **Belgium**
 *
 * - You can optionally specify the `peppolId` in the `belgiumAdditionalInfo` field of the `additionalTaxInformation` object.
 *
 * **Chile**
 *
 * - You can optionally specify the `documentType` and `businessActivity` in the `chileAdditionalInfo` field of the `additionalTaxInformation` object.
 *
 * **France**
 *
 * - You must specify the `sirenNumber` in the `franceAdditionalInfo` field of the `additionalTaxInformation` object.
 *
 * - You can optionally specify the `eInvoiceRoutingCode` in the `franceAdditionalInfo` field of the `additionalTaxInformation` object.
 *
 * **Monaco**
 *
 * - You must specify the `businessNumber` in the `monacoAdditionalInfo` field of the `additionalTaxInformation` object.
 *
 * **Poland**
 *
 * - You can optionally specify the `taxRegistrationNumberType` in the `polandAdditionalInfo` field of the `additionalTaxInformation` object. Valid values are `EUTaxRegistrationNumber`, `LocalTaxRegistrationNumber`, or `LocalRegistrationNumber`.
 */
export const batchPutTaxRegistration: API.OperationMethod<
  BatchPutTaxRegistrationRequest,
  BatchPutTaxRegistrationResponse,
  BatchPutTaxRegistrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(46, __c5, 6) as any as S.Schema<BatchPutTaxRegistrationRequest>,
  output: __S(49, __c6, 1) as any as S.Schema<BatchPutTaxRegistrationResponse>,
  errors: [ConflictException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchPutTaxRegistration",
}));

export type DeleteSupplementalTaxRegistrationError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a supplemental tax registration for a single account.
 */
export const deleteSupplementalTaxRegistration: API.OperationMethod<
  DeleteSupplementalTaxRegistrationRequest,
  DeleteSupplementalTaxRegistrationResponse,
  DeleteSupplementalTaxRegistrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(50, __c6, 2) as any as S.Schema<DeleteSupplementalTaxRegistrationRequest>,
  output: __S(51, __c6, 3) as any as S.Schema<DeleteSupplementalTaxRegistrationResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSupplementalTaxRegistration",
}));

export type DeleteTaxRegistrationError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes tax registration for a single account.
 *
 * This API operation can't be used to delete your tax registration in Brazil. Use the Payment preferences page in the Billing and Cost Management console instead.
 */
export const deleteTaxRegistration: API.OperationMethod<
  DeleteTaxRegistrationRequest,
  DeleteTaxRegistrationResponse,
  DeleteTaxRegistrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(52, __c6, 4) as any as S.Schema<DeleteTaxRegistrationRequest>,
  output: __S(53, __c6, 5) as any as S.Schema<DeleteTaxRegistrationResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTaxRegistration",
}));

export type GetTaxExemptionTypesError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Get supported tax exemption types. The IAM action is `tax:GetExemptions`.
 */
export const getTaxExemptionTypes: API.OperationMethod<
  GetTaxExemptionTypesRequest,
  GetTaxExemptionTypesResponse,
  GetTaxExemptionTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(54, __c6, 6) as any as S.Schema<GetTaxExemptionTypesRequest>,
  output: __S(56, __c7, 0) as any as S.Schema<GetTaxExemptionTypesResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTaxExemptionTypes",
}));

export type GetTaxInheritanceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * The get account tax inheritance status.
 */
export const getTaxInheritance: API.OperationMethod<
  GetTaxInheritanceRequest,
  GetTaxInheritanceResponse,
  GetTaxInheritanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(57, __c7, 1) as any as S.Schema<GetTaxInheritanceRequest>,
  output: __S(58, __c7, 2) as any as S.Schema<GetTaxInheritanceResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTaxInheritance",
}));

export type GetTaxRegistrationError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves tax registration for a single account.
 */
export const getTaxRegistration: API.OperationMethod<
  GetTaxRegistrationRequest,
  GetTaxRegistrationResponse,
  GetTaxRegistrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(59, __c7, 3) as any as S.Schema<GetTaxRegistrationRequest>,
  output: __S(66, __c8, 2) as any as S.Schema<GetTaxRegistrationResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTaxRegistration",
}));

export type GetTaxRegistrationDocumentError =
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Downloads your tax documents to the Amazon S3 bucket that you specify in your request.
 */
export const getTaxRegistrationDocument: API.OperationMethod<
  GetTaxRegistrationDocumentRequest,
  GetTaxRegistrationDocumentResponse,
  GetTaxRegistrationDocumentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(68, __c8, 4) as any as S.Schema<GetTaxRegistrationDocumentRequest>,
  output: __S(69, __c8, 5) as any as S.Schema<GetTaxRegistrationDocumentResponse>,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTaxRegistrationDocument",
}));

export type ListSupplementalTaxRegistrationsError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves supplemental tax registrations for a single account.
 */
export const listSupplementalTaxRegistrations: API.PaginatedOperationMethod<
  ListSupplementalTaxRegistrationsRequest,
  ListSupplementalTaxRegistrationsResponse,
  ListSupplementalTaxRegistrationsError,
  Credentials | HttpClient.HttpClient,
  SupplementalTaxRegistration
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(70, __c8, 6) as any as S.Schema<ListSupplementalTaxRegistrationsRequest>,
  output: __S(73, __c9, 1) as any as S.Schema<ListSupplementalTaxRegistrationsResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSupplementalTaxRegistrations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "taxRegistrations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTaxExemptionsError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the tax exemption of accounts listed in a consolidated billing family. The IAM action is `tax:GetExemptions`.
 */
export const listTaxExemptions: API.PaginatedOperationMethod<
  ListTaxExemptionsRequest,
  ListTaxExemptionsResponse,
  ListTaxExemptionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(74, __c9, 2) as any as S.Schema<ListTaxExemptionsRequest>,
  output: __S(75, __c9, 3) as any as S.Schema<ListTaxExemptionsResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTaxExemptions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "taxExemptionDetailsMap",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTaxRegistrationsError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the tax registration of accounts listed in a consolidated billing family. This can be used to retrieve up to 100 accounts' tax registrations in one call (default 50).
 */
export const listTaxRegistrations: API.PaginatedOperationMethod<
  ListTaxRegistrationsRequest,
  ListTaxRegistrationsResponse,
  ListTaxRegistrationsError,
  Credentials | HttpClient.HttpClient,
  AccountDetails
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(76, __c9, 4) as any as S.Schema<ListTaxRegistrationsRequest>,
  output: __S(84, __c10, 4) as any as S.Schema<ListTaxRegistrationsResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTaxRegistrations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "accountDetails",
    pageSize: "maxResults",
  } as const,
})) as any;

export type PutSupplementalTaxRegistrationError =
  | ConflictException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Stores supplemental tax registration for a single account.
 */
export const putSupplementalTaxRegistration: API.OperationMethod<
  PutSupplementalTaxRegistrationRequest,
  PutSupplementalTaxRegistrationResponse,
  PutSupplementalTaxRegistrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(86, __c10, 6) as any as S.Schema<PutSupplementalTaxRegistrationRequest>,
  output: __S(87, __c10, 7) as any as S.Schema<PutSupplementalTaxRegistrationResponse>,
  errors: [ConflictException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutSupplementalTaxRegistration",
}));

export type PutTaxExemptionError =
  | AccessDeniedException
  | AttachmentUploadException
  | CaseCreationLimitExceededException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Adds the tax exemption for a single account or all accounts listed in a consolidated billing family. The IAM action is `tax:UpdateExemptions`.
 */
export const putTaxExemption: API.OperationMethod<
  PutTaxExemptionRequest,
  PutTaxExemptionResponse,
  PutTaxExemptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(89, __c11, 1) as any as S.Schema<PutTaxExemptionRequest>,
  output: __S(90, __c11, 2) as any as S.Schema<PutTaxExemptionResponse>,
  errors: [
    AccessDeniedException,
    AttachmentUploadException,
    CaseCreationLimitExceededException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutTaxExemption",
}));

export type PutTaxInheritanceError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * The updated tax inheritance status.
 */
export const putTaxInheritance: API.OperationMethod<
  PutTaxInheritanceRequest,
  PutTaxInheritanceResponse,
  PutTaxInheritanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(91, __c11, 3) as any as S.Schema<PutTaxInheritanceRequest>,
  output: __S(53, __c6, 5) as any as S.Schema<PutTaxInheritanceResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutTaxInheritance",
}));

export type PutTaxRegistrationError =
  | ConflictException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Adds or updates tax registration for a single account. You can't set a TRN if there's a pending TRN. You'll need to delete the pending TRN first.
 *
 * To call this API operation for specific countries, see the following country-specific requirements.
 *
 * **Bangladesh**
 *
 * - You must specify the tax registration certificate document in the `taxRegistrationDocuments` field of the `VerificationDetails` object.
 *
 * **Brazil**
 *
 * - You must complete the tax registration process in the Payment preferences page in the Billing and Cost Management console. After your TRN and billing address are verified, you can call this API operation.
 *
 * - For Amazon Web Services accounts created through Organizations, you can call this API operation when you don't have a billing address.
 *
 * **Georgia**
 *
 * - The valid `personType` values are `Physical Person` and `Business`.
 *
 * **Indonesia**
 *
 * - `PutTaxRegistration`: The use of this operation to submit tax information is subject to the Amazon Web Services service terms. By submitting, you're providing consent for Amazon Web Services to validate NIK, NPWP, and NITKU data, provided by you with the Directorate General of Taxes of Indonesia in accordance with the Minister of Finance Regulation (PMK) Number 112/PMK.03/2022.
 *
 * - `BatchPutTaxRegistration`: The use of this operation to submit tax information is subject to the Amazon Web Services service terms. By submitting, you're providing consent for Amazon Web Services to validate NIK, NPWP, and NITKU data, provided by you with the Directorate General of Taxes of Indonesia in accordance with the Minister of Finance Regulation (PMK) Number 112/PMK.03/2022, through our third-party partner PT Achilles Advanced Management (OnlinePajak).
 *
 * - You must specify the `taxRegistrationNumberType` in the `indonesiaAdditionalInfo` field of the `additionalTaxInformation` object.
 *
 * - If you specify `decisionNumber`, you must specify the `ppnExceptionDesignationCode` in the `indonesiaAdditionalInfo` field of the `additionalTaxInformation` object. If the `taxRegistrationNumberType` is set to NPWP or NITKU, valid values for `ppnExceptionDesignationCode` are either `01`, `02`, `03`, `07`, or `08`.
 *
 * For other `taxRegistrationNumberType` values, `ppnExceptionDesignationCode` must be either `01`, `07`, or `08`.
 *
 * - If `ppnExceptionDesignationCode` is `07` or `08`, you must specify the `decisionNumber` in the `indonesiaAdditionalInfo` field of the `additionalTaxInformation` object.
 *
 * **Kenya**
 *
 * - You must specify the `personType` in the `kenyaAdditionalInfo` field of the `additionalTaxInformation` object.
 *
 * - If the `personType` is `Physical Person`, you must specify the tax registration certificate document in the `taxRegistrationDocuments` field of the `VerificationDetails` object.
 *
 * **Malaysia**
 *
 * - The sector valid values are `Business` and `Individual`.
 *
 * - `RegistrationType` valid values are `NRIC` for individual, and TIN and sales and service tax (SST) for Business.
 *
 * - For individual, you can specify the `taxInformationNumber` in `MalaysiaAdditionalInfo` with NRIC type, and a valid `MyKad` or NRIC number.
 *
 * - For business, you must specify a `businessRegistrationNumber` in `MalaysiaAdditionalInfo` with a TIN type and tax identification number.
 *
 * - For business resellers, you must specify a `businessRegistrationNumber` and `taxInformationNumber` in `MalaysiaAdditionalInfo` with a sales and service tax (SST) type and a valid SST number.
 *
 * - For business resellers with service codes, you must specify `businessRegistrationNumber`, `taxInformationNumber`, and distinct `serviceTaxCodes` in `MalaysiaAdditionalInfo` with a SST type and valid sales and service tax (SST) number. By using this API operation, Amazon Web Services registers your self-declaration that you're an authorized business reseller registered with the Royal Malaysia Customs Department (RMCD), and have a valid SST number.
 *
 * - Amazon Web Services reserves the right to seek additional information and/or take other actions to support your self-declaration as appropriate.
 *
 * - Amazon Web Services is currently registered under the following service tax codes. You must include at least one of the service tax codes in the service tax code strings to declare yourself as an authorized registered business reseller.
 *
 * Taxable service and service tax codes:
 *
 * Consultancy - 9907061674
 *
 * Training or coaching service - 9907071685
 *
 * IT service - 9907101676
 *
 * Digital services and electronic medium - 9907121690
 *
 * **Mexico**
 *
 * - You must provide a Constancia de Situación fiscal (CSF) document in the **verificationDetails** field.
 *
 * - You do not need to provide address and legal name. These will be populated based on your tax registration number.
 *
 * **Nepal**
 *
 * - The sector valid values are `Business` and `Individual`.
 *
 * **Saudi Arabia**
 *
 * - For `address`, you must specify `addressLine3`.
 *
 * **South Korea**
 *
 * - You must specify the `certifiedEmailId` and `legalName` in the `TaxRegistrationEntry` object. Use Korean characters for `legalName`.
 *
 * - You must specify the `businessRepresentativeName`, `itemOfBusiness`, and `lineOfBusiness` in the `southKoreaAdditionalInfo` field of the `additionalTaxInformation` object. Use Korean characters for these fields.
 *
 * - You must specify the tax registration certificate document in the `taxRegistrationDocuments` field of the `VerificationDetails` object.
 *
 * - For the `address` object, use Korean characters for `addressLine1`, `addressLine2` `city`, `postalCode`, and `stateOrRegion`.
 *
 * **Spain**
 *
 * - You must specify the `registrationType` in the `spainAdditionalInfo` field of the `additionalTaxInformation` object.
 *
 * - If the `registrationType` is `Local`, you must specify the tax registration certificate document in the `taxRegistrationDocuments` field of the `VerificationDetails` object.
 *
 * **Turkey**
 *
 * - You must specify the `sector` in the `taxRegistrationEntry` object.
 *
 * - If your `sector` is `Business`, `Individual`, or `Government`:
 *
 * - Specify the `taxOffice`. If your `sector` is `Individual`, don't enter this value.
 *
 * - (Optional) Specify the `kepEmailId`. If your `sector` is `Individual`, don't enter this value.
 *
 * - **Note:** In the **Tax Settings** page of the Billing console, `Government` appears as **Public institutions**
 *
 * - If your `sector` is `Business` and you're subject to KDV tax, you must specify your industry in the `industries` field.
 *
 * - For `address`, you must specify `districtOrCounty`.
 *
 * **Ukraine**
 *
 * - The sector valid values are `Business` and `Individual`.
 *
 * **Philippines**
 *
 * - You can optionally specify the `isVatRegistered` in the `philippinesAdditionalInfo` field of the `additionalTaxInformation` object to indicate your VAT registration status with the Bureau of Internal Revenue (BIR).
 *
 * **Belgium**
 *
 * - You can optionally specify the `peppolId` in the `belgiumAdditionalInfo` field of the `additionalTaxInformation` object.
 *
 * **Chile**
 *
 * - You can optionally specify the `documentType` and `businessActivity` in the `chileAdditionalInfo` field of the `additionalTaxInformation` object.
 *
 * **France**
 *
 * - You must specify the `sirenNumber` in the `franceAdditionalInfo` field of the `additionalTaxInformation` object.
 *
 * - You can optionally specify the `eInvoiceRoutingCode` in the `franceAdditionalInfo` field of the `additionalTaxInformation` object.
 *
 * **Monaco**
 *
 * - You must specify the `businessNumber` in the `monacoAdditionalInfo` field of the `additionalTaxInformation` object.
 *
 * **Poland**
 *
 * - You can optionally specify the `taxRegistrationNumberType` in the `polandAdditionalInfo` field of the `additionalTaxInformation` object. Valid values are `EUTaxRegistrationNumber`, `LocalTaxRegistrationNumber`, or `LocalRegistrationNumber`.
 */
export const putTaxRegistration: API.OperationMethod<
  PutTaxRegistrationRequest,
  PutTaxRegistrationResponse,
  PutTaxRegistrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(92, __c11, 4) as any as S.Schema<PutTaxRegistrationRequest>,
  output: __S(93, __c11, 5) as any as S.Schema<PutTaxRegistrationResponse>,
  errors: [ConflictException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutTaxRegistration",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({ accountIds: __S(0, __c0, 0) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/BatchDeleteTaxRegistration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchDeleteTaxRegistrationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ accountId: S.String, message: SensitiveString, code: S.optional(S.String) }),
      ).annotate({
        identifier: "BatchDeleteTaxRegistrationError",
      });
    case 3:
      return S.Array(__S(2, __c0, 2));
    case 4:
      return S.suspend(() => S.Struct({ errors: __S(3, __c0, 3) })).annotate({
        identifier: "BatchDeleteTaxRegistrationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ accountIds: __S(0, __c0, 0) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/BatchGetTaxExemptions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetTaxExemptionsRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ country: S.String, state: S.optional(S.String) })).annotate(
        { identifier: "Authority" },
      );
    case 7:
      return S.Array(__S(6, __c0, 6));
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          displayName: S.optional(S.String),
          description: S.optional(S.String),
          applicableJurisdictions: S.optional(__S(7, __c0, 7)),
        }),
      ).annotate({ identifier: "TaxExemptionType" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          authority: __S(6, __c0, 6),
          taxExemptionType: __S(8, __c1, 0),
          effectiveDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          expirationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          systemEffectiveDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(S.String),
        }),
      ).annotate({ identifier: "TaxExemption" });
    case 2:
      return S.Array(__S(9, __c1, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          taxExemptions: S.optional(__S(10, __c1, 2)),
          heritageObtainedDetails: S.optional(S.Boolean),
          heritageObtainedParentEntity: S.optional(S.String),
          heritageObtainedReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "TaxExemptionDetails" });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ __S(11, __c1, 3).pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          taxExemptionDetailsMap: S.optional(__S(12, __c1, 4)),
          failedAccounts: S.optional(__S(0, __c0, 0)),
        }),
      ).annotate({
        identifier: "BatchGetTaxExemptionsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          addressLine1: S.optional(S.String),
          addressLine2: S.optional(S.String),
          addressLine3: S.optional(S.String),
          districtOrCounty: S.optional(S.String),
          city: S.optional(S.String),
          stateOrRegion: S.optional(S.String),
          postalCode: S.String,
          countryCode: S.String,
        }),
      ).annotate({ identifier: "Address" });
    case 7:
      return S.Array(S.String);
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          serviceTaxCodes: S.optional(__S(15, __c1, 7)),
          taxInformationNumber: S.optional(S.String),
          businessRegistrationNumber: S.optional(S.String),
        }),
      ).annotate({ identifier: "MalaysiaAdditionalInfo" });
    case 1:
      return S.suspend(() => S.Struct({ dealerType: S.String, customerType: S.String })).annotate({
        identifier: "IsraelAdditionalInfo",
      });
    case 2:
      return S.suspend(() => S.Struct({ registryCommercialCode: S.String })).annotate({
        identifier: "EstoniaAdditionalInfo",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          provincialSalesTaxId: S.optional(S.String),
          canadaQuebecSalesTaxNumber: S.optional(S.String),
          canadaRetailSalesTaxNumber: S.optional(S.String),
          isResellerAccount: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "CanadaAdditionalInfo" });
    case 4:
      return S.suspend(() => S.Struct({ registrationType: S.String })).annotate({
        identifier: "SpainAdditionalInfo",
      });
    case 5:
      return S.suspend(() => S.Struct({ personType: S.String })).annotate({
        identifier: "KenyaAdditionalInfo",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          businessRepresentativeName: S.String,
          lineOfBusiness: S.String,
          itemOfBusiness: S.String,
        }),
      ).annotate({ identifier: "SouthKoreaAdditionalInfo" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          taxOffice: S.optional(S.String),
          kepEmailId: S.optional(S.String),
          secondaryTaxId: S.optional(S.String),
          industries: S.optional(S.String),
        }),
      ).annotate({ identifier: "TurkeyAdditionalInfo" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sdiAccountId: S.optional(S.String),
          cigNumber: S.optional(S.String),
          cupNumber: S.optional(S.String),
          taxCode: S.optional(S.String),
          customerType: S.optional(S.String),
        }),
      ).annotate({ identifier: "ItalyAdditionalInfo" });
    case 1:
      return S.suspend(() => S.Struct({ taxRegistrationNumberType: S.String })).annotate({
        identifier: "RomaniaAdditionalInfo",
      });
    case 2:
      return S.suspend(() => S.Struct({ ukraineTrnType: S.String })).annotate({
        identifier: "UkraineAdditionalInfo",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          individualRegistrationNumber: S.optional(S.String),
          isGroupVatEnabled: S.optional(S.Boolean),
          taxRegistrationNumberType: S.optional(S.String),
        }),
      ).annotate({ identifier: "PolandAdditionalInfo" });
    case 4:
      return S.suspend(() =>
        S.Struct({ taxRegistrationNumberType: S.optional(S.String) }),
      ).annotate({
        identifier: "SaudiArabiaAdditionalInfo",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          taxRegistrationNumberType: S.optional(S.String),
          ppnExceptionDesignationCode: S.optional(S.String),
          decisionNumber: S.optional(S.String),
        }),
      ).annotate({ identifier: "IndonesiaAdditionalInfo" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          enterpriseIdentificationNumber: S.optional(S.String),
          electronicTransactionCodeNumber: S.optional(S.String),
          paymentVoucherNumber: S.optional(S.String),
          paymentVoucherNumberDate: S.optional(S.String),
        }),
      ).annotate({ identifier: "VietnamAdditionalInfo" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          uniqueIdentificationNumber: S.optional(S.String),
          uniqueIdentificationNumberExpirationDate: S.optional(S.String),
        }),
      ).annotate({ identifier: "EgyptAdditionalInfo" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ contractingAuthorityCode: S.optional(S.String) })).annotate(
        { identifier: "GreeceAdditionalInfo" },
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          taxRegistrationNumberType: S.optional(S.String),
          vatRegistrationNumber: S.optional(S.String),
        }),
      ).annotate({ identifier: "UzbekistanAdditionalInfo" });
    case 2:
      return S.suspend(() => S.Struct({ isVatRegistered: S.optional(S.Boolean) })).annotate({
        identifier: "PhilippinesAdditionalInfo",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ peppolId: S.optional(S.String), isMercuriusBoxEnabled: S.optional(S.Boolean) }),
      ).annotate({ identifier: "BelgiumAdditionalInfo" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          documentType: S.optional(S.String),
          businessActivity: S.optional(S.String),
        }),
      ).annotate({ identifier: "ChileAdditionalInfo" });
    case 5:
      return S.suspend(() =>
        S.Struct({ sirenNumber: S.String, eInvoiceRoutingCode: S.optional(S.String) }),
      ).annotate({ identifier: "FranceAdditionalInfo" });
    case 6:
      return S.suspend(() => S.Struct({ businessNumber: S.String })).annotate({
        identifier: "MonacoAdditionalInfo",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          malaysiaAdditionalInfo: S.optional(__S(16, __c2, 0)),
          israelAdditionalInfo: S.optional(__S(17, __c2, 1)),
          estoniaAdditionalInfo: S.optional(__S(18, __c2, 2)),
          canadaAdditionalInfo: S.optional(__S(19, __c2, 3)),
          spainAdditionalInfo: S.optional(__S(20, __c2, 4)),
          kenyaAdditionalInfo: S.optional(__S(21, __c2, 5)),
          southKoreaAdditionalInfo: S.optional(__S(22, __c2, 6)),
          turkeyAdditionalInfo: S.optional(__S(23, __c2, 7)),
          georgiaAdditionalInfo: S.optional(__S(21, __c2, 5)),
          italyAdditionalInfo: S.optional(__S(24, __c3, 0)),
          romaniaAdditionalInfo: S.optional(__S(25, __c3, 1)),
          ukraineAdditionalInfo: S.optional(__S(26, __c3, 2)),
          polandAdditionalInfo: S.optional(__S(27, __c3, 3)),
          saudiArabiaAdditionalInfo: S.optional(__S(28, __c3, 4)),
          indonesiaAdditionalInfo: S.optional(__S(29, __c3, 5)),
          vietnamAdditionalInfo: S.optional(__S(30, __c3, 6)),
          egyptAdditionalInfo: S.optional(__S(31, __c3, 7)),
          greeceAdditionalInfo: S.optional(__S(32, __c4, 0)),
          uzbekistanAdditionalInfo: S.optional(__S(33, __c4, 1)),
          philippinesAdditionalInfo: S.optional(__S(34, __c4, 2)),
          belgiumAdditionalInfo: S.optional(__S(35, __c4, 3)),
          chileAdditionalInfo: S.optional(__S(36, __c4, 4)),
          franceAdditionalInfo: S.optional(__S(37, __c4, 5)),
          monacoAdditionalInfo: S.optional(__S(38, __c4, 6)),
        }),
      ).annotate({ identifier: "AdditionalInfoRequest" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ bucket: S.String, key: S.String })).annotate({
        identifier: "SourceS3Location",
      });
    case 1:
      return S.suspend(() => S.Struct({ fileName: S.String, fileContent: T.Blob })).annotate({
        identifier: "TaxRegistrationDocFile",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          s3Location: S.optional(__S(40, __c5, 0)),
          file: S.optional(__S(41, __c5, 1)),
        }),
      ).annotate({ identifier: "TaxRegistrationDocument" });
    case 3:
      return S.Array(__S(42, __c5, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          dateOfBirth: S.optional(S.String),
          taxRegistrationDocuments: S.optional(__S(43, __c5, 3)),
        }),
      ).annotate({ identifier: "VerificationDetails" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          registrationId: S.String,
          registrationType: S.String,
          legalName: S.optional(S.String),
          legalAddress: S.optional(__S(14, __c1, 6)),
          sector: S.optional(S.String),
          additionalTaxInformation: S.optional(__S(39, __c4, 7)),
          verificationDetails: S.optional(__S(44, __c5, 4)),
          certifiedEmailId: S.optional(S.String),
        }),
      ).annotate({ identifier: "TaxRegistrationEntry" });
    case 6:
      return S.suspend(() =>
        S.Struct({ accountIds: __S(0, __c0, 0), taxRegistrationEntry: __S(45, __c5, 5) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/BatchPutTaxRegistration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchPutTaxRegistrationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ accountId: S.String, message: SensitiveString, code: S.optional(S.String) }),
      ).annotate({
        identifier: "BatchPutTaxRegistrationError",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(47, __c5, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(S.String),
          errors: __S(48, __c6, 0),
        }),
      ).annotate({
        identifier: "BatchPutTaxRegistrationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ authorityId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteSupplementalTaxRegistration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteSupplementalTaxRegistrationRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteSupplementalTaxRegistrationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ accountId: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteTaxRegistration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteTaxRegistrationRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteTaxRegistrationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetTaxExemptionTypes" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTaxExemptionTypesRequest",
      });
    case 7:
      return S.Array(__S(8, __c1, 0));
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ taxExemptionTypes: S.optional(__S(55, __c6, 7)) }),
      ).annotate({
        identifier: "GetTaxExemptionTypesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetTaxInheritance" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetTaxInheritanceRequest" });
    case 2:
      return S.suspend(() => S.Struct({ heritageStatus: S.optional(S.String) })).annotate({
        identifier: "GetTaxInheritanceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ accountId: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetTaxRegistration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTaxRegistrationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ taxDocumentAccessToken: S.String, taxDocumentName: S.String }),
      ).annotate({ identifier: "TaxDocumentMetadata" });
    case 5:
      return S.Array(__S(60, __c7, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ ccmCode: S.optional(S.String), legalNatureCode: S.optional(S.String) }),
      ).annotate({ identifier: "BrazilAdditionalInfo" });
    case 7:
      return S.suspend(() => S.Struct({ pan: S.optional(S.String) })).annotate({
        identifier: "IndiaAdditionalInfo",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          malaysiaAdditionalInfo: S.optional(__S(16, __c2, 0)),
          israelAdditionalInfo: S.optional(__S(17, __c2, 1)),
          estoniaAdditionalInfo: S.optional(__S(18, __c2, 2)),
          canadaAdditionalInfo: S.optional(__S(19, __c2, 3)),
          brazilAdditionalInfo: S.optional(__S(62, __c7, 6)),
          spainAdditionalInfo: S.optional(__S(20, __c2, 4)),
          kenyaAdditionalInfo: S.optional(__S(21, __c2, 5)),
          southKoreaAdditionalInfo: S.optional(__S(22, __c2, 6)),
          turkeyAdditionalInfo: S.optional(__S(23, __c2, 7)),
          georgiaAdditionalInfo: S.optional(__S(21, __c2, 5)),
          italyAdditionalInfo: S.optional(__S(24, __c3, 0)),
          romaniaAdditionalInfo: S.optional(__S(25, __c3, 1)),
          ukraineAdditionalInfo: S.optional(__S(26, __c3, 2)),
          polandAdditionalInfo: S.optional(__S(27, __c3, 3)),
          saudiArabiaAdditionalInfo: S.optional(__S(28, __c3, 4)),
          indiaAdditionalInfo: S.optional(__S(63, __c7, 7)),
          indonesiaAdditionalInfo: S.optional(__S(29, __c3, 5)),
          vietnamAdditionalInfo: S.optional(__S(30, __c3, 6)),
          egyptAdditionalInfo: S.optional(__S(31, __c3, 7)),
          greeceAdditionalInfo: S.optional(__S(32, __c4, 0)),
          uzbekistanAdditionalInfo: S.optional(__S(33, __c4, 1)),
          philippinesAdditionalInfo: S.optional(__S(34, __c4, 2)),
          belgiumAdditionalInfo: S.optional(__S(35, __c4, 3)),
          chileAdditionalInfo: S.optional(__S(36, __c4, 4)),
          franceAdditionalInfo: S.optional(__S(37, __c4, 5)),
          monacoAdditionalInfo: S.optional(__S(38, __c4, 6)),
        }),
      ).annotate({ identifier: "AdditionalInfoResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          registrationId: S.String,
          registrationType: S.String,
          legalName: S.String,
          status: S.String,
          sector: S.optional(S.String),
          taxDocumentMetadatas: S.optional(__S(61, __c7, 5)),
          certifiedEmailId: S.optional(S.String),
          additionalTaxInformation: S.optional(__S(64, __c8, 0)),
          legalAddress: __S(14, __c1, 6),
        }),
      ).annotate({ identifier: "TaxRegistration" });
    case 2:
      return S.suspend(() => S.Struct({ taxRegistration: S.optional(__S(65, __c8, 1)) })).annotate({
        identifier: "GetTaxRegistrationResponse",
      });
    case 3:
      return S.suspend(() => S.Struct({ bucket: S.String, prefix: S.optional(S.String) })).annotate(
        { identifier: "DestinationS3Location" },
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          destinationS3Location: S.optional(__S(67, __c8, 3)),
          taxDocumentMetadata: __S(60, __c7, 4),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetTaxRegistrationDocument" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTaxRegistrationDocumentRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          destinationFilePath: S.optional(S.String),
          presignedS3Url: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetTaxRegistrationDocumentResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ maxResults: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListSupplementalTaxRegistrations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSupplementalTaxRegistrationsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          registrationId: S.String,
          registrationType: S.String,
          legalName: S.String,
          address: __S(14, __c1, 6),
          authorityId: S.String,
          status: S.String,
        }),
      ).annotate({
        identifier: "SupplementalTaxRegistration",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(71, __c8, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          taxRegistrations: __S(72, __c9, 0),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListSupplementalTaxRegistrationsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ maxResults: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListTaxExemptions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListTaxExemptionsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          taxExemptionDetailsMap: S.optional(__S(12, __c1, 4)),
        }),
      ).annotate({
        identifier: "ListTaxExemptionsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ maxResults: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListTaxRegistrations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTaxRegistrationsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ stateOrRegion: S.optional(S.String), countryCode: S.String }),
      ).annotate({ identifier: "Jurisdiction" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          registrationId: S.String,
          registrationType: S.String,
          legalName: S.String,
          status: S.String,
          sector: S.optional(S.String),
          taxDocumentMetadatas: S.optional(__S(61, __c7, 5)),
          certifiedEmailId: S.optional(S.String),
          additionalTaxInformation: S.optional(__S(64, __c8, 0)),
          jurisdiction: __S(77, __c9, 5),
        }),
      ).annotate({
        identifier: "TaxRegistrationWithJurisdiction",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          parentEntityId: S.optional(S.String),
          inheritanceObtainedReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "TaxInheritanceDetails" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ __S(77, __c9, 5).pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          accountName: S.optional(S.String),
          seller: S.optional(S.String),
          address: S.optional(__S(14, __c1, 6)),
          addressType: S.optional(S.String),
          addressRoleMap: S.optional(__S(80, __c10, 0)),
        }),
      ).annotate({ identifier: "AccountMetaData" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          accountId: S.optional(S.String),
          taxRegistration: S.optional(__S(78, __c9, 6)),
          taxInheritanceDetails: S.optional(__S(79, __c9, 7)),
          accountMetaData: S.optional(__S(81, __c10, 1)),
        }),
      ).annotate({ identifier: "AccountDetails" });
    case 3:
      return S.Array(__S(82, __c10, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ accountDetails: __S(83, __c10, 3), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListTaxRegistrationsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          registrationId: S.String,
          registrationType: S.String,
          legalName: S.String,
          address: __S(14, __c1, 6),
        }),
      ).annotate({
        identifier: "SupplementalTaxRegistrationEntry",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ taxRegistrationEntry: __S(85, __c10, 5) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/PutSupplementalTaxRegistration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutSupplementalTaxRegistrationRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ authorityId: S.String, status: S.String })).annotate({
        identifier: "PutSupplementalTaxRegistrationResponse",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ documentName: S.String, documentFile: T.Blob })).annotate({
        identifier: "ExemptionCertificate",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          accountIds: __S(0, __c0, 0),
          authority: __S(6, __c0, 6),
          exemptionType: S.String,
          exemptionCertificate: __S(88, __c11, 0),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/PutTaxExemption" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutTaxExemptionRequest" });
    case 2:
      return S.suspend(() => S.Struct({ caseId: S.optional(S.String) })).annotate({
        identifier: "PutTaxExemptionResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ heritageStatus: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/PutTaxInheritance" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PutTaxInheritanceRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          accountId: S.optional(S.String),
          taxRegistrationEntry: __S(45, __c5, 5),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/PutTaxRegistration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutTaxRegistrationRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ status: S.optional(S.String) })).annotate({
        identifier: "PutTaxRegistrationResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ name: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 7:
      return S.Array(__S(94, __c11, 6));
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
