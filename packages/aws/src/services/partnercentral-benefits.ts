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
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "PartnerCentral Benefits",
  serviceShapeName: "PartnerCentralBenefitsService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "partnercentral-benefits" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-05-10");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_0();
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
            `https://partnercentral-benefits-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        return e(
          `https://partnercentral-benefits.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
        );
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
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceId: S.String,
      ResourceType: S.String,
      QuotaCode: S.String,
    },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(402), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withQuotaError, C.withRetryableError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      Reason: /*@__PURE__*/ S.suspend(() => ValidationExceptionReason).annotate({
        identifier: "ValidationExceptionReason",
      }),
      FieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ValidationExceptionFieldList).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type CatalogName = string;
export type BenefitApplicationIdentifier = string;
export interface Amendment {
  FieldPath: string;
  NewValue: string;
}
const Amendment = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<Amendment>;
export type AmendmentList = Amendment[];
const AmendmentList = /*@__PURE__*/ __L.at(__c0, 1);
export interface AmendBenefitApplicationInput {
  Catalog: string;
  ClientToken: string;
  Revision: string;
  Identifier: string;
  AmendmentReason: string;
  Amendments: Amendment[];
}
const AmendBenefitApplicationInput = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<AmendBenefitApplicationInput>;
export interface AmendBenefitApplicationOutput {}
const AmendBenefitApplicationOutput = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<AmendBenefitApplicationOutput>;
export type Arn = string;
export interface AssociateBenefitApplicationResourceInput {
  Catalog: string;
  BenefitApplicationIdentifier: string;
  ResourceArn: string;
}
const AssociateBenefitApplicationResourceInput = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<AssociateBenefitApplicationResourceInput>;
export type BenefitApplicationId = string;
export interface AssociateBenefitApplicationResourceOutput {
  Id?: string;
  Arn?: string;
  Revision?: string;
}
const AssociateBenefitApplicationResourceOutput = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<AssociateBenefitApplicationResourceOutput>;
export interface CancelBenefitApplicationInput {
  Catalog: string;
  ClientToken: string;
  Identifier: string;
  Reason?: string;
}
const CancelBenefitApplicationInput = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<CancelBenefitApplicationInput>;
export interface CancelBenefitApplicationOutput {}
const CancelBenefitApplicationOutput =
  AmendBenefitApplicationOutput as any as S.Schema<CancelBenefitApplicationOutput>;
export type BenefitApplicationName = string;
export type BenefitApplicationDescription = string;
export type FulfillmentType = "CREDITS" | "CASH" | "ACCESS" | (string & {});
const FulfillmentType = S.String;

export type FulfillmentTypes = FulfillmentType[];
const FulfillmentTypes = /*@__PURE__*/ __L.at(__c0, 7);
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
const Tag = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<Tag>;
export type Tags = Tag[];
const Tags = /*@__PURE__*/ __L.at(__c1, 1);
export type Arns = string[];
const Arns = /*@__PURE__*/ __L.at(__c1, 2);
export type ContactEmail = string | redacted.Redacted<string>;
export type ContactFirstName = string | redacted.Redacted<string>;
export type ContactLastName = string | redacted.Redacted<string>;
export type ContactPhone = string | redacted.Redacted<string>;
export interface Contact {
  Email?: string | redacted.Redacted<string>;
  FirstName?: string | redacted.Redacted<string>;
  LastName?: string | redacted.Redacted<string>;
  BusinessTitle?: string;
  Phone?: string | redacted.Redacted<string>;
}
const Contact = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<Contact>;
export type Contacts = Contact[];
const Contacts = /*@__PURE__*/ __L.at(__c1, 4);
export type FileURI = string;
export interface FileInput {
  FileURI: string;
  BusinessUseCase?: string;
}
const FileInput = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<FileInput>;
export type FileInputDetails = FileInput[];
const FileInputDetails = /*@__PURE__*/ __L.at(__c1, 6);
export interface CreateBenefitApplicationInput {
  Catalog: string;
  ClientToken: string;
  Name?: string;
  Description?: string;
  BenefitIdentifier: string;
  FulfillmentTypes?: FulfillmentType[];
  BenefitApplicationDetails?: any;
  Tags?: Tag[];
  AssociatedResources?: string[];
  PartnerContacts?: Contact[];
  FileDetails?: FileInput[];
}
const CreateBenefitApplicationInput = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<CreateBenefitApplicationInput>;
export interface CreateBenefitApplicationOutput {
  Id?: string;
  Arn?: string;
  Revision?: string;
}
const CreateBenefitApplicationOutput =
  AssociateBenefitApplicationResourceOutput as any as S.Schema<CreateBenefitApplicationOutput>;
export interface DisassociateBenefitApplicationResourceInput {
  Catalog: string;
  BenefitApplicationIdentifier: string;
  ResourceArn: string;
}
const DisassociateBenefitApplicationResourceInput = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<DisassociateBenefitApplicationResourceInput>;
export interface DisassociateBenefitApplicationResourceOutput {
  Id?: string;
  Arn?: string;
  Revision?: string;
}
const DisassociateBenefitApplicationResourceOutput =
  AssociateBenefitApplicationResourceOutput as any as S.Schema<DisassociateBenefitApplicationResourceOutput>;
export interface GetBenefitInput {
  Catalog: string;
  Identifier: string;
}
const GetBenefitInput = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<GetBenefitInput>;
export type Program = string;
export type Programs = string[];
const Programs = Arns as any as S.Schema<Programs>;
export type BenefitStatus = "ACTIVE" | "INACTIVE" | (string & {});
const BenefitStatus = S.String;

export interface GetBenefitOutput {
  Id?: string;
  Catalog?: string;
  Arn?: string;
  Name?: string;
  Description?: string;
  Programs?: string[];
  FulfillmentTypes?: FulfillmentType[];
  BenefitRequestSchema?: any;
  Status?: BenefitStatus;
}
const GetBenefitOutput = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<GetBenefitOutput>;
export type BenefitAllocationIdentifier = string;
export interface GetBenefitAllocationInput {
  Catalog: string;
  Identifier: string;
}
const GetBenefitAllocationInput = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<GetBenefitAllocationInput>;
export type BenefitAllocationId = string;
export type BenefitAllocationArn = string;
export type BenefitAllocationStatus = "ACTIVE" | "INACTIVE" | "FULFILLED" | (string & {});
const BenefitAllocationStatus = S.String;

export type BenefitId = string;
export type BenefitIdentifiers = string[];
const BenefitIdentifiers = Arns as any as S.Schema<BenefitIdentifiers>;
export type CurrencyCode =
  | "AED"
  | "AMD"
  | "ARS"
  | "AUD"
  | "AWG"
  | "AZN"
  | "BBD"
  | "BDT"
  | "BGN"
  | "BMD"
  | "BND"
  | "BOB"
  | "BRL"
  | "BSD"
  | "BYR"
  | "BZD"
  | "CAD"
  | "CHF"
  | "CLP"
  | "CNY"
  | "COP"
  | "CRC"
  | "CZK"
  | "DKK"
  | "DOP"
  | "EEK"
  | "EGP"
  | "EUR"
  | "GBP"
  | "GEL"
  | "GHS"
  | "GTQ"
  | "GYD"
  | "HKD"
  | "HNL"
  | "HRK"
  | "HTG"
  | "HUF"
  | "IDR"
  | "ILS"
  | "INR"
  | "ISK"
  | "JMD"
  | "JPY"
  | "KES"
  | "KHR"
  | "KRW"
  | "KYD"
  | "KZT"
  | "LBP"
  | "LKR"
  | "LTL"
  | "LVL"
  | "MAD"
  | "MNT"
  | "MOP"
  | "MUR"
  | "MVR"
  | "MXN"
  | "MYR"
  | "NAD"
  | "NGN"
  | "NIO"
  | "NOK"
  | "NZD"
  | "PAB"
  | "PEN"
  | "PHP"
  | "PKR"
  | "PLN"
  | "PYG"
  | "QAR"
  | "RON"
  | "RUB"
  | "SAR"
  | "SEK"
  | "SGD"
  | "SIT"
  | "SKK"
  | "THB"
  | "TND"
  | "TRY"
  | "TTD"
  | "TWD"
  | "TZS"
  | "UAH"
  | "USD"
  | "UYU"
  | "UZS"
  | "VND"
  | "XAF"
  | "XCD"
  | "XOF"
  | "XPF"
  | "ZAR"
  | (string & {});
const CurrencyCode = S.String;

export interface MonetaryValue {
  Amount: string;
  CurrencyCode: CurrencyCode;
}
const MonetaryValue = /*@__PURE__*/ __L.at(__c2, 4) as any as S.Schema<MonetaryValue>;
export interface IssuanceDetail {
  IssuanceId?: string;
  IssuanceAmount?: MonetaryValue;
  IssuedAt?: Date;
}
const IssuanceDetail = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<IssuanceDetail>;
export interface DisbursementDetails {
  DisbursedAmount?: MonetaryValue;
  IssuanceDetails?: IssuanceDetail;
}
const DisbursementDetails = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<DisbursementDetails>;
export interface ConsumableDetails {
  AllocatedAmount?: MonetaryValue;
  RemainingAmount?: MonetaryValue;
  UtilizedAmount?: MonetaryValue;
  IssuanceDetails?: IssuanceDetail;
}
const ConsumableDetails = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<ConsumableDetails>;
export interface CreditCode {
  AwsAccountId: string;
  Value: MonetaryValue;
  AwsCreditCode: string;
  Status: BenefitAllocationStatus;
  IssuedAt: Date;
  ExpiresAt: Date;
}
const CreditCode = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<CreditCode>;
export type CreditCodes = CreditCode[];
const CreditCodes = /*@__PURE__*/ __L.at(__c3, 1);
export interface CreditDetails {
  AllocatedAmount: MonetaryValue;
  IssuedAmount: MonetaryValue;
  Codes: CreditCode[];
}
const CreditDetails = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<CreditDetails>;
export interface AccessDetails {
  Description?: string;
}
const AccessDetails = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<AccessDetails>;
export type FulfillmentDetails =
  | {
      DisbursementDetails: DisbursementDetails;
      ConsumableDetails?: never;
      CreditDetails?: never;
      AccessDetails?: never;
    }
  | {
      DisbursementDetails?: never;
      ConsumableDetails: ConsumableDetails;
      CreditDetails?: never;
      AccessDetails?: never;
    }
  | {
      DisbursementDetails?: never;
      ConsumableDetails?: never;
      CreditDetails: CreditDetails;
      AccessDetails?: never;
    }
  | {
      DisbursementDetails?: never;
      ConsumableDetails?: never;
      CreditDetails?: never;
      AccessDetails: AccessDetails;
    };
const FulfillmentDetails = /*@__PURE__*/ __L.at(__c3, 4);
export interface GetBenefitAllocationOutput {
  Id?: string;
  Catalog?: string;
  Arn?: string;
  Name?: string;
  Description?: string;
  Status?: BenefitAllocationStatus;
  StatusReason?: string;
  BenefitApplicationId?: string;
  BenefitId?: string;
  FulfillmentType?: FulfillmentType;
  ApplicableBenefitIds?: string[];
  FulfillmentDetail?: FulfillmentDetails;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  StartsAt?: Date;
  ExpiresAt?: Date;
}
const GetBenefitAllocationOutput = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<GetBenefitAllocationOutput>;
export interface GetBenefitApplicationInput {
  Catalog: string;
  Identifier: string;
}
const GetBenefitApplicationInput = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<GetBenefitApplicationInput>;
export type BenefitApplicationStatus =
  | "PENDING_SUBMISSION"
  | "IN_REVIEW"
  | "ACTION_REQUIRED"
  | "APPROVED"
  | "REJECTED"
  | "CANCELED"
  | (string & {});
const BenefitApplicationStatus = S.String;

export type BenefitApplicationStage = string;
export type StatusReasonCode = string;
export type StatusReasonCodes = string[];
const StatusReasonCodes = Arns as any as S.Schema<StatusReasonCodes>;
export type FileType =
  | "application/msword"
  | "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  | "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  | "application/pdf"
  | "image/png"
  | "image/jpeg"
  | "image/svg+xml"
  | "text/csv"
  | (string & {});
const FileType = S.String;

export interface FileDetail {
  FileURI: string;
  BusinessUseCase?: string;
  FileName?: string;
  FileStatus?: string;
  FileStatusReason?: string;
  FileType?: FileType;
  CreatedBy?: string;
  CreatedAt?: Date;
}
const FileDetail = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<FileDetail>;
export type FileDetails = FileDetail[];
const FileDetails = /*@__PURE__*/ __L.at(__c4, 0);
export interface GetBenefitApplicationOutput {
  Id?: string;
  Arn?: string;
  Catalog?: string;
  BenefitId?: string;
  Name?: string;
  Description?: string;
  FulfillmentTypes?: FulfillmentType[];
  BenefitApplicationDetails?: any;
  Programs?: string[];
  Status?: BenefitApplicationStatus;
  Stage?: string;
  StatusReason?: string;
  StatusReasonCode?: string;
  StatusReasonCodes?: string[];
  CreatedAt?: Date;
  UpdatedAt?: Date;
  Revision?: string;
  AssociatedResources?: string[];
  PartnerContacts?: Contact[];
  FileDetails?: FileDetail[];
}
const GetBenefitApplicationOutput = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<GetBenefitApplicationOutput>;
export type BenefitApplicationIdentifierList = string[];
const BenefitApplicationIdentifierList = Arns as any as S.Schema<BenefitApplicationIdentifierList>;
export type BenefitAllocationStatusList = BenefitAllocationStatus[];
const BenefitAllocationStatusList =
  FulfillmentTypes as any as S.Schema<BenefitAllocationStatusList>;
export interface ListBenefitAllocationsInput {
  Catalog: string;
  FulfillmentTypes?: FulfillmentType[];
  BenefitIdentifiers?: string[];
  BenefitApplicationIdentifiers?: string[];
  Status?: BenefitAllocationStatus[];
  MaxResults?: number;
  NextToken?: string;
}
const ListBenefitAllocationsInput = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<ListBenefitAllocationsInput>;
export type BenefitAllocationName = string;
export type BenefitIds = string[];
const BenefitIds = Arns as any as S.Schema<BenefitIds>;
export interface BenefitAllocationSummary {
  Id?: string;
  Catalog?: string;
  Arn?: string;
  Status?: BenefitAllocationStatus;
  StatusReason?: string;
  Name?: string;
  BenefitId?: string;
  BenefitApplicationId?: string;
  FulfillmentTypes?: FulfillmentType[];
  CreatedAt?: Date;
  ExpiresAt?: Date;
  ApplicableBenefitIds?: string[];
}
const BenefitAllocationSummary = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<BenefitAllocationSummary>;
export type BenefitAllocationSummaries = BenefitAllocationSummary[];
const BenefitAllocationSummaries = /*@__PURE__*/ __L.at(__c4, 4);
export interface ListBenefitAllocationsOutput {
  BenefitAllocationSummaries?: BenefitAllocationSummary[];
  NextToken?: string;
}
const ListBenefitAllocationsOutput = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<ListBenefitAllocationsOutput>;
export type Statuses = BenefitApplicationStatus[];
const Statuses = FulfillmentTypes as any as S.Schema<Statuses>;
export type Stages = string[];
const Stages = Arns as any as S.Schema<Stages>;
export type ResourceType = "OPPORTUNITY" | "BENEFIT_ALLOCATION" | (string & {});
const ResourceType = S.String;

export interface AssociatedResource {
  ResourceType?: ResourceType;
  ResourceIdentifier?: string;
  ResourceArn?: string;
}
const AssociatedResource = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<AssociatedResource>;
export type AssociatedResources = AssociatedResource[];
const AssociatedResources = /*@__PURE__*/ __L.at(__c4, 7);
export interface ListBenefitApplicationsInput {
  Catalog: string;
  Programs?: string[];
  FulfillmentTypes?: FulfillmentType[];
  BenefitIdentifiers?: string[];
  Status?: BenefitApplicationStatus[];
  Stages?: string[];
  AssociatedResources?: AssociatedResource[];
  AssociatedResourceArns?: string[];
  MaxResults?: number;
  NextToken?: string;
}
const ListBenefitApplicationsInput = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<ListBenefitApplicationsInput>;
export type Attributes = { [key: string]: string | undefined };
const Attributes = /*@__PURE__*/ __L.at(__c5, 1);
export interface BenefitApplicationSummary {
  Catalog?: string;
  Name?: string;
  Id?: string;
  Arn?: string;
  BenefitId?: string;
  Programs?: string[];
  FulfillmentTypes?: FulfillmentType[];
  Status?: BenefitApplicationStatus;
  Stage?: string;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  BenefitApplicationDetails?: { [key: string]: string | undefined };
  AssociatedResources?: string[];
}
const BenefitApplicationSummary = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<BenefitApplicationSummary>;
export type BenefitApplicationSummaries = BenefitApplicationSummary[];
const BenefitApplicationSummaries = /*@__PURE__*/ __L.at(__c5, 3);
export interface ListBenefitApplicationsOutput {
  BenefitApplicationSummaries?: BenefitApplicationSummary[];
  NextToken?: string;
}
const ListBenefitApplicationsOutput = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<ListBenefitApplicationsOutput>;
export type BenefitStatuses = BenefitStatus[];
const BenefitStatuses = FulfillmentTypes as any as S.Schema<BenefitStatuses>;
export interface ListBenefitsInput {
  Catalog: string;
  Programs?: string[];
  FulfillmentTypes?: FulfillmentType[];
  Status?: BenefitStatus[];
  MaxResults?: number;
  NextToken?: string;
}
const ListBenefitsInput = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<ListBenefitsInput>;
export interface BenefitSummary {
  Id?: string;
  Catalog?: string;
  Arn?: string;
  Name?: string;
  Description?: string;
  Programs?: string[];
  FulfillmentTypes?: FulfillmentType[];
  Status?: BenefitStatus;
}
const BenefitSummary = /*@__PURE__*/ __L.at(__c5, 6) as any as S.Schema<BenefitSummary>;
export type BenefitSummaries = BenefitSummary[];
const BenefitSummaries = /*@__PURE__*/ __L.at(__c5, 7);
export interface ListBenefitsOutput {
  BenefitSummaries?: BenefitSummary[];
  NextToken?: string;
}
const ListBenefitsOutput = /*@__PURE__*/ __L.at(__c6, 0) as any as S.Schema<ListBenefitsOutput>;
export type TaggableResourceArn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: Tag[];
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface RecallBenefitApplicationInput {
  Catalog: string;
  ClientToken?: string;
  Identifier: string;
  Reason: string;
}
const RecallBenefitApplicationInput = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<RecallBenefitApplicationInput>;
export interface RecallBenefitApplicationOutput {}
const RecallBenefitApplicationOutput =
  AmendBenefitApplicationOutput as any as S.Schema<RecallBenefitApplicationOutput>;
export interface SubmitBenefitApplicationInput {
  Catalog: string;
  Identifier: string;
}
const SubmitBenefitApplicationInput = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<SubmitBenefitApplicationInput>;
export interface SubmitBenefitApplicationOutput {}
const SubmitBenefitApplicationOutput =
  AmendBenefitApplicationOutput as any as S.Schema<SubmitBenefitApplicationOutput>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Tag[];
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = AmendBenefitApplicationOutput as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = Arns as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse =
  AmendBenefitApplicationOutput as any as S.Schema<UntagResourceResponse>;
export interface UpdateBenefitApplicationInput {
  Catalog: string;
  ClientToken: string;
  Name?: string;
  Description?: string;
  Identifier: string;
  Revision: string;
  BenefitApplicationDetails?: any;
  PartnerContacts?: Contact[];
  FileDetails?: FileInput[];
}
const UpdateBenefitApplicationInput = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<UpdateBenefitApplicationInput>;
export interface UpdateBenefitApplicationOutput {
  Id?: string;
  Arn?: string;
  Revision?: string;
}
const UpdateBenefitApplicationOutput =
  AssociateBenefitApplicationResourceOutput as any as S.Schema<UpdateBenefitApplicationOutput>;
export type ValidationExceptionReason =
  | "unknownOperation"
  | "cannotParse"
  | "fieldValidationFailed"
  | "other"
  | "BUSINESS_VALIDATION_FAILED"
  | (string & {});
const ValidationExceptionReason = S.String;

export type ValidationExceptionErrorCode =
  | "REQUIRED_FIELD_MISSING"
  | "INVALID_ENUM_VALUE"
  | "INVALID_STRING_FORMAT"
  | "INVALID_VALUE"
  | "NOT_ENOUGH_VALUES"
  | "TOO_MANY_VALUES"
  | "INVALID_RESOURCE_STATE"
  | "DUPLICATE_KEY_VALUE"
  | "VALUE_OUT_OF_RANGE"
  | "ACTION_NOT_PERMITTED"
  | (string & {});
const ValidationExceptionErrorCode = S.String;

export interface ValidationExceptionField {
  Name: string;
  Message: string;
  Code?: ValidationExceptionErrorCode;
}
const ValidationExceptionField = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFieldList = ValidationExceptionField[];
const ValidationExceptionFieldList = /*@__PURE__*/ __L.at(__c7, 1);
export type AmendBenefitApplicationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Modifies an existing benefit application by applying amendments to specific fields while maintaining revision control.
 */
export const amendBenefitApplication: API.OperationMethod<
  AmendBenefitApplicationInput,
  AmendBenefitApplicationOutput,
  AmendBenefitApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AmendBenefitApplicationInput,
  output: AmendBenefitApplicationOutput,
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
  operationName: "AmendBenefitApplication",
}));

export type AssociateBenefitApplicationResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Links an AWS resource to an existing benefit application for tracking and management purposes.
 */
export const associateBenefitApplicationResource: API.OperationMethod<
  AssociateBenefitApplicationResourceInput,
  AssociateBenefitApplicationResourceOutput,
  AssociateBenefitApplicationResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateBenefitApplicationResourceInput,
  output: AssociateBenefitApplicationResourceOutput,
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
  operationName: "AssociateBenefitApplicationResource",
}));

export type CancelBenefitApplicationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Cancels a benefit application that is currently in progress, preventing further processing.
 */
export const cancelBenefitApplication: API.OperationMethod<
  CancelBenefitApplicationInput,
  CancelBenefitApplicationOutput,
  CancelBenefitApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelBenefitApplicationInput,
  output: CancelBenefitApplicationOutput,
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
  operationName: "CancelBenefitApplication",
}));

export type CreateBenefitApplicationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new benefit application for a partner to request access to AWS benefits and programs.
 */
export const createBenefitApplication: API.OperationMethod<
  CreateBenefitApplicationInput,
  CreateBenefitApplicationOutput,
  CreateBenefitApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateBenefitApplicationInput,
  output: CreateBenefitApplicationOutput,
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
  operationName: "CreateBenefitApplication",
}));

export type DisassociateBenefitApplicationResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes the association between an AWS resource and a benefit application.
 */
export const disassociateBenefitApplicationResource: API.OperationMethod<
  DisassociateBenefitApplicationResourceInput,
  DisassociateBenefitApplicationResourceOutput,
  DisassociateBenefitApplicationResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateBenefitApplicationResourceInput,
  output: DisassociateBenefitApplicationResourceOutput,
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
  operationName: "DisassociateBenefitApplicationResource",
}));

export type GetBenefitError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves detailed information about a specific benefit available in the partner catalog.
 */
export const getBenefit: API.OperationMethod<
  GetBenefitInput,
  GetBenefitOutput,
  GetBenefitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBenefitInput,
  output: GetBenefitOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBenefit",
}));

export type GetBenefitAllocationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves detailed information about a specific benefit allocation that has been granted to a partner.
 */
export const getBenefitAllocation: API.OperationMethod<
  GetBenefitAllocationInput,
  GetBenefitAllocationOutput,
  GetBenefitAllocationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBenefitAllocationInput,
  output: GetBenefitAllocationOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBenefitAllocation",
}));

export type GetBenefitApplicationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves detailed information about a specific benefit application.
 */
export const getBenefitApplication: API.OperationMethod<
  GetBenefitApplicationInput,
  GetBenefitApplicationOutput,
  GetBenefitApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBenefitApplicationInput,
  output: GetBenefitApplicationOutput,
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
  operationName: "GetBenefitApplication",
}));

export type ListBenefitAllocationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a paginated list of benefit allocations based on specified filter criteria.
 */
export const listBenefitAllocations: API.PaginatedOperationMethod<
  ListBenefitAllocationsInput,
  ListBenefitAllocationsOutput,
  ListBenefitAllocationsError,
  Credentials | HttpClient.HttpClient,
  BenefitAllocationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListBenefitAllocationsInput,
  output: ListBenefitAllocationsOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBenefitAllocations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "BenefitAllocationSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListBenefitApplicationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a paginated list of benefit applications based on specified filter criteria.
 */
export const listBenefitApplications: API.PaginatedOperationMethod<
  ListBenefitApplicationsInput,
  ListBenefitApplicationsOutput,
  ListBenefitApplicationsError,
  Credentials | HttpClient.HttpClient,
  BenefitApplicationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListBenefitApplicationsInput,
  output: ListBenefitApplicationsOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBenefitApplications",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "BenefitApplicationSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListBenefitsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a paginated list of available benefits based on specified filter criteria.
 */
export const listBenefits: API.PaginatedOperationMethod<
  ListBenefitsInput,
  ListBenefitsOutput,
  ListBenefitsError,
  Credentials | HttpClient.HttpClient,
  BenefitSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListBenefitsInput,
  output: ListBenefitsOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBenefits",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "BenefitSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves all tags associated with a specific resource.
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
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type RecallBenefitApplicationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Recalls a submitted benefit application, returning it to draft status for further modifications.
 */
export const recallBenefitApplication: API.OperationMethod<
  RecallBenefitApplicationInput,
  RecallBenefitApplicationOutput,
  RecallBenefitApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RecallBenefitApplicationInput,
  output: RecallBenefitApplicationOutput,
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
  operationName: "RecallBenefitApplication",
}));

export type SubmitBenefitApplicationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Submits a benefit application for review and processing by AWS.
 */
export const submitBenefitApplication: API.OperationMethod<
  SubmitBenefitApplicationInput,
  SubmitBenefitApplicationOutput,
  SubmitBenefitApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SubmitBenefitApplicationInput,
  output: SubmitBenefitApplicationOutput,
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
  operationName: "SubmitBenefitApplication",
}));

export type TagResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds or updates tags for a specified resource.
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
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes specified tags from a resource.
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
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateBenefitApplicationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing benefit application with new information while maintaining revision control.
 */
export const updateBenefitApplication: API.OperationMethod<
  UpdateBenefitApplicationInput,
  UpdateBenefitApplicationOutput,
  UpdateBenefitApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateBenefitApplicationInput,
  output: UpdateBenefitApplicationOutput,
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
  operationName: "UpdateBenefitApplication",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ FieldPath: S.String, NewValue: S.String })).annotate({
        identifier: "Amendment",
      });
    case 1:
      return S.Array(Amendment);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          ClientToken: S.String,
          Revision: S.String,
          Identifier: S.String,
          AmendmentReason: S.String,
          Amendments: AmendmentList,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/AmendBenefitApplication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AmendBenefitApplicationInput",
      });
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AmendBenefitApplicationOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          BenefitApplicationIdentifier: S.String,
          ResourceArn: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/AssociateBenefitApplicationResource" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateBenefitApplicationResourceInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Arn: S.optional(S.String),
          Revision: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AssociateBenefitApplicationResourceOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          ClientToken: S.String,
          Identifier: S.String,
          Reason: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CancelBenefitApplication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CancelBenefitApplicationInput",
      });
    case 7:
      return S.Array(FulfillmentType);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 1:
      return S.Array(Tag);
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Email: S.optional(SensitiveString),
          FirstName: S.optional(SensitiveString),
          LastName: S.optional(SensitiveString),
          BusinessTitle: S.optional(S.String),
          Phone: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "Contact" });
    case 4:
      return S.Array(Contact);
    case 5:
      return S.suspend(() =>
        S.Struct({ FileURI: S.String, BusinessUseCase: S.optional(S.String) }),
      ).annotate({ identifier: "FileInput" });
    case 6:
      return S.Array(FileInput);
    case 7:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          ClientToken: S.String,
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          BenefitIdentifier: S.String,
          FulfillmentTypes: S.optional(FulfillmentTypes),
          BenefitApplicationDetails: S.optional(S.Any),
          Tags: S.optional(Tags),
          AssociatedResources: S.optional(Arns),
          PartnerContacts: S.optional(Contacts),
          FileDetails: S.optional(FileInputDetails),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateBenefitApplication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateBenefitApplicationInput",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          BenefitApplicationIdentifier: S.String,
          ResourceArn: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DisassociateBenefitApplicationResource" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateBenefitApplicationResourceInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Catalog: S.String, Identifier: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetBenefit" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetBenefitInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Catalog: S.optional(S.String),
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Programs: S.optional(Programs),
          FulfillmentTypes: S.optional(FulfillmentTypes),
          BenefitRequestSchema: S.optional(S.Any),
          Status: S.optional(BenefitStatus),
        }),
      ).annotate({ identifier: "GetBenefitOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Catalog: S.String, Identifier: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetBenefitAllocation" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetBenefitAllocationInput",
      });
    case 4:
      return S.suspend(() => S.Struct({ Amount: S.String, CurrencyCode: CurrencyCode })).annotate({
        identifier: "MonetaryValue",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          IssuanceId: S.optional(S.String),
          IssuanceAmount: S.optional(MonetaryValue),
          IssuedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "IssuanceDetail" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DisbursedAmount: S.optional(MonetaryValue),
          IssuanceDetails: S.optional(IssuanceDetail),
        }),
      ).annotate({ identifier: "DisbursementDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AllocatedAmount: S.optional(MonetaryValue),
          RemainingAmount: S.optional(MonetaryValue),
          UtilizedAmount: S.optional(MonetaryValue),
          IssuanceDetails: S.optional(IssuanceDetail),
        }),
      ).annotate({ identifier: "ConsumableDetails" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AwsAccountId: S.String,
          Value: MonetaryValue,
          AwsCreditCode: S.String,
          Status: BenefitAllocationStatus,
          IssuedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ExpiresAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "CreditCode" });
    case 1:
      return S.Array(CreditCode);
    case 2:
      return S.suspend(() =>
        S.Struct({
          AllocatedAmount: MonetaryValue,
          IssuedAmount: MonetaryValue,
          Codes: CreditCodes,
        }),
      ).annotate({ identifier: "CreditDetails" });
    case 3:
      return S.suspend(() => S.Struct({ Description: S.optional(S.String) })).annotate({
        identifier: "AccessDetails",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ DisbursementDetails: DisbursementDetails }),
        /*@__PURE__*/ S.Struct({ ConsumableDetails: ConsumableDetails }),
        /*@__PURE__*/ S.Struct({ CreditDetails: CreditDetails }),
        /*@__PURE__*/ S.Struct({ AccessDetails: AccessDetails }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Catalog: S.optional(S.String),
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Status: S.optional(BenefitAllocationStatus),
          StatusReason: S.optional(S.String),
          BenefitApplicationId: S.optional(S.String),
          BenefitId: S.optional(S.String),
          FulfillmentType: S.optional(FulfillmentType),
          ApplicableBenefitIds: S.optional(BenefitIdentifiers),
          FulfillmentDetail: S.optional(FulfillmentDetails),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          StartsAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ExpiresAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "GetBenefitAllocationOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Catalog: S.String, Identifier: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetBenefitApplication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetBenefitApplicationInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          FileURI: S.String,
          BusinessUseCase: S.optional(S.String),
          FileName: S.optional(S.String),
          FileStatus: S.optional(S.String),
          FileStatusReason: S.optional(S.String),
          FileType: S.optional(FileType),
          CreatedBy: S.optional(S.String),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "FileDetail" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(FileDetail);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Arn: S.optional(S.String),
          Catalog: S.optional(S.String),
          BenefitId: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          FulfillmentTypes: S.optional(FulfillmentTypes),
          BenefitApplicationDetails: S.optional(S.Any),
          Programs: S.optional(Programs),
          Status: S.optional(BenefitApplicationStatus),
          Stage: S.optional(S.String),
          StatusReason: S.optional(S.String),
          StatusReasonCode: S.optional(S.String),
          StatusReasonCodes: S.optional(StatusReasonCodes),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Revision: S.optional(S.String),
          AssociatedResources: S.optional(Arns),
          PartnerContacts: S.optional(Contacts),
          FileDetails: S.optional(FileDetails),
        }),
      ).annotate({
        identifier: "GetBenefitApplicationOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          FulfillmentTypes: S.optional(FulfillmentTypes),
          BenefitIdentifiers: S.optional(BenefitIdentifiers),
          BenefitApplicationIdentifiers: S.optional(BenefitApplicationIdentifierList),
          Status: S.optional(BenefitAllocationStatusList),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListBenefitAllocations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListBenefitAllocationsInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Catalog: S.optional(S.String),
          Arn: S.optional(S.String),
          Status: S.optional(BenefitAllocationStatus),
          StatusReason: S.optional(S.String),
          Name: S.optional(S.String),
          BenefitId: S.optional(S.String),
          BenefitApplicationId: S.optional(S.String),
          FulfillmentTypes: S.optional(FulfillmentTypes),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ExpiresAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ApplicableBenefitIds: S.optional(BenefitIds),
        }),
      ).annotate({ identifier: "BenefitAllocationSummary" });
    case 4:
      return S.Array(BenefitAllocationSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          BenefitAllocationSummaries: S.optional(BenefitAllocationSummaries),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListBenefitAllocationsOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ResourceType: S.optional(ResourceType),
          ResourceIdentifier: S.optional(S.String),
          ResourceArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "AssociatedResource" });
    case 7:
      return S.Array(AssociatedResource);
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          Programs: S.optional(Programs),
          FulfillmentTypes: S.optional(FulfillmentTypes),
          BenefitIdentifiers: S.optional(BenefitIdentifiers),
          Status: S.optional(Statuses),
          Stages: S.optional(Stages),
          AssociatedResources: S.optional(AssociatedResources),
          AssociatedResourceArns: S.optional(Arns),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListBenefitApplications" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListBenefitApplicationsInput",
      });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.optional(S.String),
          Name: S.optional(S.String),
          Id: S.optional(S.String),
          Arn: S.optional(S.String),
          BenefitId: S.optional(S.String),
          Programs: S.optional(Programs),
          FulfillmentTypes: S.optional(FulfillmentTypes),
          Status: S.optional(BenefitApplicationStatus),
          Stage: S.optional(S.String),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          BenefitApplicationDetails: S.optional(Attributes),
          AssociatedResources: S.optional(Arns),
        }),
      ).annotate({
        identifier: "BenefitApplicationSummary",
      });
    case 3:
      return S.Array(BenefitApplicationSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          BenefitApplicationSummaries: S.optional(BenefitApplicationSummaries),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListBenefitApplicationsOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          Programs: S.optional(Programs),
          FulfillmentTypes: S.optional(FulfillmentTypes),
          Status: S.optional(BenefitStatuses),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListBenefits" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListBenefitsInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Catalog: S.optional(S.String),
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Programs: S.optional(Programs),
          FulfillmentTypes: S.optional(FulfillmentTypes),
          Status: S.optional(BenefitStatus),
        }),
      ).annotate({ identifier: "BenefitSummary" });
    case 7:
      return S.Array(BenefitSummary);
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          BenefitSummaries: S.optional(BenefitSummaries),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListBenefitsOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListTagsForResource" }),
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
    case 2:
      return S.suspend(() => S.Struct({ tags: S.optional(Tags) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          ClientToken: S.optional(S.String),
          Identifier: S.String,
          Reason: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/RecallBenefitApplication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RecallBenefitApplicationInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Catalog: S.String, Identifier: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/SubmitBenefitApplication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SubmitBenefitApplicationInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tags: Tags }).pipe(
          T.all(T.Http({ method: "POST", uri: "/TagResource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tagKeys: TagKeyList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/UntagResource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          ClientToken: S.String,
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Identifier: S.String,
          Revision: S.String,
          BenefitApplicationDetails: S.optional(S.Any),
          PartnerContacts: S.optional(Contacts),
          FileDetails: S.optional(FileInputDetails),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateBenefitApplication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateBenefitApplicationInput",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Message: S.String,
          Code: S.optional(ValidationExceptionErrorCode),
        }),
      ).annotate({ identifier: "ValidationExceptionField" });
    case 1:
      return S.Array(ValidationExceptionField);
  }
}
