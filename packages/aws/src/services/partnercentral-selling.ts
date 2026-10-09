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
  sdkId: "PartnerCentral Selling",
  serviceShapeName: "AWSPartnerCentralSelling",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "partnercentral-selling" });
const ver = /*@__PURE__*/ T.ServiceVersion("2022-07-26");
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
            `https://partnercentral-selling-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        return e(
          `https://partnercentral-selling.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Reason: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({
          identifier: "AccessDeniedExceptionErrorCode",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      Reason: /*@__PURE__*/ S.suspend(() => S.String).annotate({
        identifier: "ValidationExceptionReason",
      }),
      ErrorList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(198, __c24, 6)).annotate({
          identifier: "ValidationExceptionErrorList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type CatalogIdentifier = string;
export type EngagementInvitationArnOrIdentifier = string;
export interface AcceptEngagementInvitationRequest {
  Catalog: string;
  Identifier: string;
}
export interface AcceptEngagementInvitationResponse {}
export type OpportunityIdentifier = string;
export type Email = string | redacted.Redacted<string>;
export type Name = string | redacted.Redacted<string>;
export type PhoneNumber = string | redacted.Redacted<string>;
export type JobTitle = string | redacted.Redacted<string>;
export interface AssigneeContact {
  Email: string | redacted.Redacted<string>;
  FirstName: string | redacted.Redacted<string>;
  LastName: string | redacted.Redacted<string>;
  Phone?: string | redacted.Redacted<string>;
  BusinessTitle: string | redacted.Redacted<string>;
}
export interface AssignOpportunityRequest {
  Catalog: string;
  Identifier: string;
  Assignee: AssigneeContact;
}
export interface AssignOpportunityResponse {}
export type RelatedEntityType =
  | "Solutions"
  | "AwsProducts"
  | "AwsMarketplaceOffers"
  | "AwsMarketplaceOfferSets"
  | "AwsMarketplaceSolutions"
  | "AwsMarketplaceProducts"
  | (string & {});
export interface AssociateOpportunityRequest {
  Catalog: string;
  OpportunityIdentifier: string;
  RelatedEntityType: RelatedEntityType;
  RelatedEntityIdentifier: string;
}
export interface AssociateOpportunityResponse {}
export type ClientToken = string;
export type EngagementTitle = string;
export type EngagementDescription = string;
export type EngagementContextIdentifier = string;
export type EngagementContextType =
  | "CustomerProject"
  | "Lead"
  | "ProspectingResult"
  | (string & {});
export type Industry =
  | "Aerospace"
  | "Agriculture"
  | "Automotive"
  | "Computers and Electronics"
  | "Consumer Goods"
  | "Education"
  | "Energy - Oil and Gas"
  | "Energy - Power and Utilities"
  | "Financial Services"
  | "Gaming"
  | "Government"
  | "Healthcare"
  | "Hospitality"
  | "Life Sciences"
  | "Manufacturing"
  | "Marketing and Advertising"
  | "Media and Entertainment"
  | "Mining"
  | "Non-Profit Organization"
  | "Professional Services"
  | "Real Estate and Construction"
  | "Retail"
  | "Software and Internet"
  | "Telecommunications"
  | "Transportation and Logistics"
  | "Travel"
  | "Wholesale and Distribution"
  | "Other"
  | (string & {});
export type CompanyName = string | redacted.Redacted<string>;
export type CompanyWebsiteUrl = string | redacted.Redacted<string>;
export type CountryCode =
  | "US"
  | "AF"
  | "AX"
  | "AL"
  | "DZ"
  | "AS"
  | "AD"
  | "AO"
  | "AI"
  | "AQ"
  | "AG"
  | "AR"
  | "AM"
  | "AW"
  | "AU"
  | "AT"
  | "AZ"
  | "BS"
  | "BH"
  | "BD"
  | "BB"
  | "BY"
  | "BE"
  | "BZ"
  | "BJ"
  | "BM"
  | "BT"
  | "BO"
  | "BQ"
  | "BA"
  | "BW"
  | "BV"
  | "BR"
  | "IO"
  | "BN"
  | "BG"
  | "BF"
  | "BI"
  | "KH"
  | "CM"
  | "CA"
  | "CV"
  | "KY"
  | "CF"
  | "TD"
  | "CL"
  | "CN"
  | "CX"
  | "CC"
  | "CO"
  | "KM"
  | "CG"
  | "CK"
  | "CR"
  | "CI"
  | "HR"
  | "CU"
  | "CW"
  | "CY"
  | "CZ"
  | "CD"
  | "DK"
  | "DJ"
  | "DM"
  | "DO"
  | "EC"
  | "EG"
  | "SV"
  | "GQ"
  | "ER"
  | "EE"
  | "ET"
  | "FK"
  | "FO"
  | "FJ"
  | "FI"
  | "FR"
  | "GF"
  | "PF"
  | "TF"
  | "GA"
  | "GM"
  | "GE"
  | "DE"
  | "GH"
  | "GI"
  | "GR"
  | "GL"
  | "GD"
  | "GP"
  | "GU"
  | "GT"
  | "GG"
  | "GN"
  | "GW"
  | "GY"
  | "HT"
  | "HM"
  | "VA"
  | "HN"
  | "HK"
  | "HU"
  | "IS"
  | "IN"
  | "ID"
  | "IR"
  | "IQ"
  | "IE"
  | "IM"
  | "IL"
  | "IT"
  | "JM"
  | "JP"
  | "JE"
  | "JO"
  | "KZ"
  | "KE"
  | "KI"
  | "KR"
  | "KW"
  | "KG"
  | "LA"
  | "LV"
  | "LB"
  | "LS"
  | "LR"
  | "LY"
  | "LI"
  | "LT"
  | "LU"
  | "MO"
  | "MK"
  | "MG"
  | "MW"
  | "MY"
  | "MV"
  | "ML"
  | "MT"
  | "MH"
  | "MQ"
  | "MR"
  | "MU"
  | "YT"
  | "MX"
  | "FM"
  | "MD"
  | "MC"
  | "MN"
  | "ME"
  | "MS"
  | "MA"
  | "MZ"
  | "MM"
  | "NA"
  | "NR"
  | "NP"
  | "NL"
  | "AN"
  | "NC"
  | "NZ"
  | "NI"
  | "NE"
  | "NG"
  | "NU"
  | "NF"
  | "MP"
  | "NO"
  | "OM"
  | "PK"
  | "PW"
  | "PS"
  | "PA"
  | "PG"
  | "PY"
  | "PE"
  | "PH"
  | "PN"
  | "PL"
  | "PT"
  | "PR"
  | "QA"
  | "RE"
  | "RO"
  | "RU"
  | "RW"
  | "BL"
  | "SH"
  | "KN"
  | "LC"
  | "MF"
  | "PM"
  | "VC"
  | "WS"
  | "SM"
  | "ST"
  | "SA"
  | "SN"
  | "RS"
  | "SC"
  | "SL"
  | "SG"
  | "SX"
  | "SK"
  | "SI"
  | "SB"
  | "SO"
  | "ZA"
  | "GS"
  | "SS"
  | "ES"
  | "LK"
  | "SD"
  | "SR"
  | "SJ"
  | "SZ"
  | "SE"
  | "CH"
  | "SY"
  | "TW"
  | "TJ"
  | "TZ"
  | "TH"
  | "TL"
  | "TG"
  | "TK"
  | "TO"
  | "TT"
  | "TN"
  | "TR"
  | "TM"
  | "TC"
  | "TV"
  | "UG"
  | "UA"
  | "AE"
  | "GB"
  | "UM"
  | "UY"
  | "UZ"
  | "VU"
  | "VE"
  | "VN"
  | "VG"
  | "VI"
  | "WF"
  | "EH"
  | "YE"
  | "ZM"
  | "ZW"
  | (string & {});
export interface EngagementCustomer {
  Industry: Industry;
  CompanyName: string | redacted.Redacted<string>;
  WebsiteUrl: string | redacted.Redacted<string>;
  CountryCode: CountryCode;
}
export type EngagementCustomerProjectTitle = string;
export type EngagementCustomerBusinessProblem = string | redacted.Redacted<string>;
export interface EngagementCustomerProjectDetails {
  Title: string;
  BusinessProblem: string | redacted.Redacted<string>;
  TargetCompletionDate: string;
}
export interface CustomerProjectsContext {
  Customer?: EngagementCustomer;
  Project?: EngagementCustomerProjectDetails;
}
export interface LeadInsights {
  LeadReadinessScore?: string;
}
export type LeadQualificationStatus = string;
export type LeadIndustry = string;
export type LeadWebsiteUrl = string | redacted.Redacted<string>;
export type LeadCountryCode = string | redacted.Redacted<string>;
export interface LeadAddress {
  City?: string;
  PostalCode?: string;
  StateOrRegion?: string;
  CountryCode?: string | redacted.Redacted<string>;
}
export type AwsMaturity = string;
export type LeadMarketSegment = string;
export interface LeadCustomer {
  Industry?: string;
  CompanyName: string | redacted.Redacted<string>;
  WebsiteUrl?: string | redacted.Redacted<string>;
  Address?: LeadAddress;
  AwsMaturity?: string;
  MarketSegment?: string;
}
export type LeadSourceType = string;
export type LeadSourceId = string;
export type LeadSourceName = string;
export type EngagementUseCase = string;
export type CustomerAction = string;
export type LeadBusinessProblem = string | redacted.Redacted<string>;
export type LeadJobTitle = string | redacted.Redacted<string>;
export type LeadEmail = string | redacted.Redacted<string>;
export type LeadPhoneNumber = string | redacted.Redacted<string>;
export interface LeadContact {
  BusinessTitle: string | redacted.Redacted<string>;
  Email: string | redacted.Redacted<string>;
  FirstName: string | redacted.Redacted<string>;
  LastName: string | redacted.Redacted<string>;
  Phone?: string | redacted.Redacted<string>;
}
export interface LeadInteraction {
  SourceType?: string;
  SourceId?: string;
  SourceName?: string;
  Usecase?: string;
  InteractionDate?: Date;
  CustomerAction?: string;
  BusinessProblem?: string | redacted.Redacted<string>;
  Contact: LeadContact;
}
export type LeadInteractionList = LeadInteraction[];
export interface LeadContext {
  Insights?: LeadInsights;
  QualificationStatus?: string;
  Customer: LeadCustomer;
  Interactions: LeadInteraction[];
}
export type ProspectingAccountName = string;
export type ProspectingGeo = string;
export type ProspectingRegion = string;
export type ProspectingSubRegion = string;
export type ProspectingSubIndustry = string;
export type ProspectingSegment = string;
export type ProspectingCompanySize = string;
export type EligibleProgramsList = string[];
export type ProspectingPublicProfileSummary = string;
export interface ProspectingResultCustomer {
  AccountName?: string;
  Geo?: string;
  Region?: string;
  SubRegion?: string;
  Country?: CountryCode;
  Industry?: Industry;
  SubIndustry?: string;
  Segment?: string;
  CompanySize?: string;
  EligiblePrograms?: string[];
  PublicProfileSummary?: string;
}
export type EngagementScoreLevel = string;
export interface ProspectingInsights {
  MarketplaceEngagementScore?: string;
  SolutionScore?: string;
  SolutionCategory?: string;
  SolutionSubCategory?: string;
}
export type ProspectingTaskIdentifier = string;
export type TaskArn = string;
export type TaskName = string;
export interface ProspectingResultAws {
  Customer?: ProspectingResultCustomer;
  Insights?: ProspectingInsights;
  StartTime?: Date;
  EndTime?: Date;
  TaskId?: string;
  TaskArn?: string;
  TaskName?: string;
}
export interface ProspectingResult {
  Aws?: ProspectingResultAws;
}
export type EngagementContextPayload =
  | { CustomerProject: CustomerProjectsContext; Lead?: never; ProspectingResult?: never }
  | { CustomerProject?: never; Lead: LeadContext; ProspectingResult?: never }
  | { CustomerProject?: never; Lead?: never; ProspectingResult: ProspectingResult };
export interface EngagementContextDetails {
  Id?: string;
  Type: EngagementContextType;
  Payload?: EngagementContextPayload;
}
export type EngagementContexts = EngagementContextDetails[];
export interface CreateEngagementRequest {
  Catalog: string;
  ClientToken: string;
  Title?: string;
  Description?: string;
  Contexts?: EngagementContextDetails[];
}
export type EngagementIdentifier = string;
export type EngagementArn = string;
export interface CreateEngagementResponse {
  Id?: string;
  Arn?: string;
  ModifiedAt?: Date;
}
export type EngagementArnOrIdentifier = string;
export interface CreateEngagementContextRequest {
  Catalog: string;
  EngagementIdentifier: string;
  ClientToken: string;
  Type: EngagementContextType;
  Payload: EngagementContextPayload;
}
export interface CreateEngagementContextResponse {
  EngagementId?: string;
  EngagementArn?: string;
  EngagementLastModifiedAt?: Date;
  ContextId?: string;
}
export type InvitationMessage = string | redacted.Redacted<string>;
export type Alias = string | redacted.Redacted<string>;
export type AwsAccount = string | redacted.Redacted<string>;
export interface AccountReceiver {
  Alias?: string | redacted.Redacted<string>;
  AwsAccountId: string | redacted.Redacted<string>;
}
export type Receiver = { Account: AccountReceiver };
export type SenderContactEmail = string | redacted.Redacted<string>;
export interface SenderContact {
  Email: string | redacted.Redacted<string>;
  FirstName?: string | redacted.Redacted<string>;
  LastName?: string | redacted.Redacted<string>;
  BusinessTitle?: string | redacted.Redacted<string>;
  Phone?: string | redacted.Redacted<string>;
}
export type SenderContactList = SenderContact[];
export type ReceiverResponsibility =
  | "Distributor"
  | "Reseller"
  | "Hardware Partner"
  | "Managed Service Provider"
  | "Software Partner"
  | "Services Partner"
  | "Training Partner"
  | "Co-Sell Facilitator"
  | "Facilitator"
  | (string & {});
export type ReceiverResponsibilityList = ReceiverResponsibility[];
export type Amount = string | redacted.Redacted<string>;
export type CurrencyCode =
  | "USD"
  | "EUR"
  | "GBP"
  | "AUD"
  | "CAD"
  | "CNY"
  | "NZD"
  | "INR"
  | "JPY"
  | "CHF"
  | "SEK"
  | "AED"
  | "AFN"
  | "ALL"
  | "AMD"
  | "ANG"
  | "AOA"
  | "ARS"
  | "AWG"
  | "AZN"
  | "BAM"
  | "BBD"
  | "BDT"
  | "BGN"
  | "BHD"
  | "BIF"
  | "BMD"
  | "BND"
  | "BOB"
  | "BOV"
  | "BRL"
  | "BSD"
  | "BTN"
  | "BWP"
  | "BYN"
  | "BZD"
  | "CDF"
  | "CHE"
  | "CHW"
  | "CLF"
  | "CLP"
  | "COP"
  | "COU"
  | "CRC"
  | "CUC"
  | "CUP"
  | "CVE"
  | "CZK"
  | "DJF"
  | "DKK"
  | "DOP"
  | "DZD"
  | "EGP"
  | "ERN"
  | "ETB"
  | "FJD"
  | "FKP"
  | "GEL"
  | "GHS"
  | "GIP"
  | "GMD"
  | "GNF"
  | "GTQ"
  | "GYD"
  | "HKD"
  | "HNL"
  | "HRK"
  | "HTG"
  | "HUF"
  | "IDR"
  | "ILS"
  | "IQD"
  | "IRR"
  | "ISK"
  | "JMD"
  | "JOD"
  | "KES"
  | "KGS"
  | "KHR"
  | "KMF"
  | "KPW"
  | "KRW"
  | "KWD"
  | "KYD"
  | "KZT"
  | "LAK"
  | "LBP"
  | "LKR"
  | "LRD"
  | "LSL"
  | "LYD"
  | "MAD"
  | "MDL"
  | "MGA"
  | "MKD"
  | "MMK"
  | "MNT"
  | "MOP"
  | "MRU"
  | "MUR"
  | "MVR"
  | "MWK"
  | "MXN"
  | "MXV"
  | "MYR"
  | "MZN"
  | "NAD"
  | "NGN"
  | "NIO"
  | "NOK"
  | "NPR"
  | "OMR"
  | "PAB"
  | "PEN"
  | "PGK"
  | "PHP"
  | "PKR"
  | "PLN"
  | "PYG"
  | "QAR"
  | "RON"
  | "RSD"
  | "RUB"
  | "RWF"
  | "SAR"
  | "SBD"
  | "SCR"
  | "SDG"
  | "SGD"
  | "SHP"
  | "SLL"
  | "SOS"
  | "SRD"
  | "SSP"
  | "STN"
  | "SVC"
  | "SYP"
  | "SZL"
  | "THB"
  | "TJS"
  | "TMT"
  | "TND"
  | "TOP"
  | "TRY"
  | "TTD"
  | "TWD"
  | "TZS"
  | "UAH"
  | "UGX"
  | "USN"
  | "UYI"
  | "UYU"
  | "UZS"
  | "VEF"
  | "VND"
  | "VUV"
  | "WST"
  | "XAF"
  | "XCD"
  | "XDR"
  | "XOF"
  | "XPF"
  | "XSU"
  | "XUA"
  | "YER"
  | "ZAR"
  | "ZMW"
  | "ZWL"
  | (string & {});
export type PaymentFrequency = "Monthly" | (string & {});
export type EstimationUrl = string;
export interface ExpectedCustomerSpend {
  Amount?: string | redacted.Redacted<string>;
  CurrencyCode: CurrencyCode;
  Frequency: PaymentFrequency;
  TargetCompany: string;
  EstimationUrl?: string;
}
export type ExpectedCustomerSpendList = ExpectedCustomerSpend[];
export interface ProjectDetails {
  BusinessProblem: string | redacted.Redacted<string>;
  Title: string;
  TargetCompletionDate: string;
  ExpectedCustomerSpend: ExpectedCustomerSpend[];
}
export interface OpportunityInvitationPayload {
  SenderContacts?: SenderContact[];
  ReceiverResponsibilities: ReceiverResponsibility[];
  Customer: EngagementCustomer;
  Project: ProjectDetails;
}
export interface LeadInvitationCustomer {
  Industry?: string;
  CompanyName: string | redacted.Redacted<string>;
  WebsiteUrl?: string | redacted.Redacted<string>;
  CountryCode?: string | redacted.Redacted<string>;
  AwsMaturity?: string;
  MarketSegment?: string;
}
export interface LeadInvitationInteraction {
  SourceType?: string;
  SourceId?: string;
  SourceName?: string;
  Usecase?: string;
  ContactBusinessTitle: string | redacted.Redacted<string>;
}
export interface LeadInvitationPayload {
  Customer: LeadInvitationCustomer;
  Interaction: LeadInvitationInteraction;
}
export type Payload =
  | { OpportunityInvitation: OpportunityInvitationPayload; LeadInvitation?: never }
  | { OpportunityInvitation?: never; LeadInvitation: LeadInvitationPayload };
export interface Invitation {
  Message: string | redacted.Redacted<string>;
  Receiver: Receiver;
  Payload: Payload;
}
export interface CreateEngagementInvitationRequest {
  Catalog: string;
  ClientToken: string;
  EngagementIdentifier: string;
  Invitation: Invitation;
}
export type EngagementInvitationIdentifier = string;
export type EngagementInvitationArn = string;
export interface CreateEngagementInvitationResponse {
  Id: string;
  Arn: string;
}
export type PrimaryNeedFromAws =
  | "Co-Sell - Architectural Validation"
  | "Co-Sell - Business Presentation"
  | "Co-Sell - Competitive Information"
  | "Co-Sell - Pricing Assistance"
  | "Co-Sell - Technical Consultation"
  | "Co-Sell - Total Cost of Ownership Evaluation"
  | "Co-Sell - Deal Support"
  | "Co-Sell - Support for Public Tender / RFx"
  | (string & {});
export type PrimaryNeedsFromAws = PrimaryNeedFromAws[];
export type NationalSecurity = "Yes" | "No" | (string & {});
export type WebsiteUrl = string | redacted.Redacted<string>;
export type AddressPart = string | redacted.Redacted<string>;
export interface Address {
  City?: string | redacted.Redacted<string>;
  PostalCode?: string | redacted.Redacted<string>;
  StateOrRegion?: string | redacted.Redacted<string>;
  CountryCode?: CountryCode;
  StreetAddress?: string | redacted.Redacted<string>;
}
export type DunsNumber = string | redacted.Redacted<string>;
export interface Account {
  Industry?: Industry;
  OtherIndustry?: string;
  CompanyName: string | redacted.Redacted<string>;
  WebsiteUrl?: string | redacted.Redacted<string>;
  AwsAccountId?: string | redacted.Redacted<string>;
  Address?: Address;
  Duns?: string | redacted.Redacted<string>;
}
export interface Contact {
  Email?: string | redacted.Redacted<string>;
  FirstName?: string | redacted.Redacted<string>;
  LastName?: string | redacted.Redacted<string>;
  BusinessTitle?: string | redacted.Redacted<string>;
  Phone?: string | redacted.Redacted<string>;
}
export type CustomerContactsList = Contact[];
export interface Customer {
  Account?: Account;
  Contacts?: Contact[];
}
export type DeliveryModel =
  | "SaaS or PaaS"
  | "BYOL or AMI"
  | "Managed Services"
  | "Professional Services"
  | "Resell"
  | "Other"
  | (string & {});
export type DeliveryModels = DeliveryModel[];
export type ExpectedContractDurationTerm = "Months" | (string & {});
export interface ExpectedContractDuration {
  Term: ExpectedContractDurationTerm;
  Value: string;
}
export type PiiString = string | redacted.Redacted<string>;
export type ApnPrograms = string[];
export type SalesActivity =
  | "Initialized discussions with customer"
  | "Customer has shown interest in solution"
  | "Conducted POC / Demo"
  | "In evaluation / planning stage"
  | "Agreed on solution to Business Problem"
  | "Completed Action Plan"
  | "Finalized Deployment Need"
  | "SOW Signed"
  | (string & {});
export type SalesActivities = SalesActivity[];
export type CompetitorName =
  | "Oracle Cloud"
  | "On-Prem"
  | "Co-location"
  | "Akamai"
  | "AliCloud"
  | "Google Cloud Platform"
  | "IBM Softlayer"
  | "Microsoft Azure"
  | "Other- Cost Optimization"
  | "No Competition"
  | "*Other"
  | (string & {});
export type AwsPartition = "aws-eusc" | (string & {});
export interface Project {
  DeliveryModels?: DeliveryModel[];
  ExpectedCustomerSpend?: ExpectedCustomerSpend[];
  ExpectedContractDuration?: ExpectedContractDuration;
  Title?: string | redacted.Redacted<string>;
  ApnPrograms?: string[];
  CustomerBusinessProblem?: string | redacted.Redacted<string>;
  CustomerUseCase?: string;
  RelatedOpportunityIdentifier?: string;
  SalesActivities?: SalesActivity[];
  CompetitorName?: CompetitorName;
  OtherCompetitorNames?: string;
  OtherSolutionDescription?: string | redacted.Redacted<string>;
  AdditionalComments?: string;
  AwsPartition?: AwsPartition;
}
export type OpportunityType = "Net New Business" | "Flat Renewal" | "Expansion" | (string & {});
export type MarketingSource = "Marketing Activity" | "None" | (string & {});
export type UseCases = string[];
export type Channel =
  | "AWS Marketing Central"
  | "Content Syndication"
  | "Display"
  | "Email"
  | "Live Event"
  | "Out Of Home (OOH)"
  | "Print"
  | "Search"
  | "Social"
  | "Telemarketing"
  | "TV"
  | "Video"
  | "Virtual Event"
  | (string & {});
export type Channels = Channel[];
export type AwsFundingUsed = "Yes" | "No" | (string & {});
export interface Marketing {
  CampaignName?: string;
  Source?: MarketingSource;
  UseCases?: string[];
  Channels?: Channel[];
  AwsFundingUsed?: AwsFundingUsed;
}
export type RevenueModel = "Contract" | "Pay-as-you-go" | "Subscription" | (string & {});
export interface MonetaryValue {
  Amount: string;
  CurrencyCode: CurrencyCode;
}
export interface SoftwareRevenue {
  DeliveryModel?: RevenueModel;
  Value?: MonetaryValue;
  EffectiveDate?: string;
  ExpirationDate?: string;
}
export type Stage =
  | "Prospect"
  | "Qualified"
  | "Technical Validation"
  | "Business Validation"
  | "Committed"
  | "Launched"
  | "Closed Lost"
  | (string & {});
export type ClosedLostReason =
  | "Customer Deficiency"
  | "Delay / Cancellation of Project"
  | "Legal / Tax / Regulatory"
  | "Lost to Competitor - Google"
  | "Lost to Competitor - Microsoft"
  | "Lost to Competitor - SoftLayer"
  | "Lost to Competitor - VMWare"
  | "Lost to Competitor - Other"
  | "No Opportunity"
  | "On Premises Deployment"
  | "Partner Gap"
  | "Price"
  | "Security / Compliance"
  | "Technical Limitations"
  | "Customer Experience"
  | "Other"
  | "People/Relationship/Governance"
  | "Product/Technology"
  | "Financial/Commercial"
  | (string & {});
export type ReviewStatus =
  | "Pending Submission"
  | "Submitted"
  | "In review"
  | "Approved"
  | "Rejected"
  | "Action Required"
  | (string & {});
export interface NextStepsHistory {
  Value: string;
  Time: Date;
}
export type NextStepsHistories = NextStepsHistory[];
export interface LifeCycle {
  Stage?: Stage;
  ClosedLostReason?: ClosedLostReason;
  NextSteps?: string | redacted.Redacted<string>;
  TargetCloseDate?: string;
  ReviewStatus?: ReviewStatus;
  ReviewComments?: string;
  ReviewStatusReason?: string;
  NextStepsHistory?: NextStepsHistory[];
}
export type OpportunityOrigin = "AWS Referral" | "Partner Referral" | (string & {});
export type PartnerOpportunityTeamMembersList = Contact[];
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagList = Tag[];
export interface CreateOpportunityRequest {
  Catalog: string;
  PrimaryNeedsFromAws?: PrimaryNeedFromAws[];
  NationalSecurity?: NationalSecurity;
  PartnerOpportunityIdentifier?: string;
  Customer?: Customer;
  Project?: Project;
  OpportunityType?: OpportunityType;
  Marketing?: Marketing;
  SoftwareRevenue?: SoftwareRevenue;
  ClientToken: string;
  LifeCycle?: LifeCycle;
  Origin?: OpportunityOrigin;
  OpportunityTeam?: Contact[];
  Tags?: Tag[];
}
export interface CreateOpportunityResponse {
  Id: string;
  PartnerOpportunityIdentifier?: string;
  LastModifiedDate?: Date;
}
export type ResourceType = "Opportunity" | (string & {});
export type ResourceIdentifier = string;
export type ResourceTemplateName = string;
export interface CreateResourceSnapshotRequest {
  Catalog: string;
  EngagementIdentifier: string;
  ResourceType: ResourceType;
  ResourceIdentifier: string;
  ResourceSnapshotTemplateIdentifier: string;
  ClientToken: string;
}
export type ResourceArn = string;
export type ResourceSnapshotRevision = number;
export interface CreateResourceSnapshotResponse {
  Arn?: string;
  Revision?: number;
}
export interface CreateResourceSnapshotJobRequest {
  Catalog: string;
  ClientToken: string;
  EngagementIdentifier: string;
  ResourceType: ResourceType;
  ResourceIdentifier: string;
  ResourceSnapshotTemplateIdentifier: string;
  Tags?: Tag[];
}
export type ResourceSnapshotJobIdentifier = string;
export type ResourceSnapshotJobArn = string;
export interface CreateResourceSnapshotJobResponse {
  Id?: string;
  Arn?: string;
}
export interface DeleteResourceSnapshotJobRequest {
  Catalog: string;
  ResourceSnapshotJobIdentifier: string;
}
export interface DeleteResourceSnapshotJobResponse {}
export interface DisassociateOpportunityRequest {
  Catalog: string;
  OpportunityIdentifier: string;
  RelatedEntityType: RelatedEntityType;
  RelatedEntityIdentifier: string;
}
export interface DisassociateOpportunityResponse {}
export interface GetAwsOpportunitySummaryRequest {
  Catalog: string;
  RelatedOpportunityIdentifier: string;
}
export type SalesInvolvementType = "For Visibility Only" | "Co-Sell" | (string & {});
export type Visibility = "Full" | "Limited" | (string & {});
export type AwsClosedLostReason =
  | "Administrative"
  | "Business Associate Agreement"
  | "Company Acquired/Dissolved"
  | "Competitive Offering"
  | "Customer Data Requirement"
  | "Customer Deficiency"
  | "Customer Experience"
  | "Delay / Cancellation of Project"
  | "Duplicate"
  | "Duplicate Opportunity"
  | "Executive Blocker"
  | "Failed Vetting"
  | "Feature Limitation"
  | "Financial/Commercial"
  | "Insufficient Amazon Value"
  | "Insufficient AWS Value"
  | "International Constraints"
  | "Legal / Tax / Regulatory"
  | "Legal Terms and Conditions"
  | "Lost to Competitor"
  | "Lost to Competitor - Google"
  | "Lost to Competitor - Microsoft"
  | "Lost to Competitor - Other"
  | "Lost to Competitor - Rackspace"
  | "Lost to Competitor - SoftLayer"
  | "Lost to Competitor - VMWare"
  | "No Customer Reference"
  | "No Integration Resources"
  | "No Opportunity"
  | "No Perceived Value of MP"
  | "No Response"
  | "Not Committed to AWS"
  | "No Update"
  | "On Premises Deployment"
  | "Other"
  | "Other (Details in Description)"
  | "Partner Gap"
  | "Past Due"
  | "People/Relationship/Governance"
  | "Platform Technology Limitation"
  | "Preference for Competitor"
  | "Price"
  | "Product/Technology"
  | "Product Not on AWS"
  | "Security / Compliance"
  | "Self-Service"
  | "Technical Limitations"
  | "Term Sheet Impasse"
  | (string & {});
export type AwsOpportunityStage =
  | "Not Started"
  | "In Progress"
  | "Prospect"
  | "Engaged"
  | "Identified"
  | "Qualify"
  | "Research"
  | "Seller Engaged"
  | "Evaluating"
  | "Seller Registered"
  | "Term Sheet Negotiation"
  | "Contract Negotiation"
  | "Onboarding"
  | "Building Integration"
  | "Qualified"
  | "On-hold"
  | "Technical Validation"
  | "Business Validation"
  | "Committed"
  | "Launched"
  | "Deferred to Partner"
  | "Closed Lost"
  | "Completed"
  | "Closed Incomplete"
  | (string & {});
export interface ProfileNextStepsHistory {
  Value: string;
  Time: Date;
}
export type ProfileNextStepsHistories = ProfileNextStepsHistory[];
export interface AwsOpportunityLifeCycle {
  TargetCloseDate?: string;
  ClosedLostReason?: AwsClosedLostReason;
  Stage?: AwsOpportunityStage;
  NextSteps?: string | redacted.Redacted<string>;
  NextStepsHistory?: ProfileNextStepsHistory[];
}
export type AwsMemberBusinessTitle =
  | "AWSSalesRep"
  | "AWSAccountOwner"
  | "WWPSPDM"
  | "PDM"
  | "PSM"
  | "ISVSM"
  | "Signatory"
  | (string & {});
export interface AwsTeamMember {
  Email?: string | redacted.Redacted<string>;
  FirstName?: string | redacted.Redacted<string>;
  LastName?: string | redacted.Redacted<string>;
  BusinessTitle?: AwsMemberBusinessTitle;
}
export type AwsOpportunityTeamMembersList = AwsTeamMember[];
export type EngagementScore = "High" | "Medium" | "Low" | (string & {});
export type MonetaryAmount = string | redacted.Redacted<string>;
export type AmountMap = { [key: string]: string | redacted.Redacted<string> | undefined };
export type StringList = string[];
export interface AwsProductOptimization {
  Description: string;
  SavingsAmount: string | redacted.Redacted<string>;
}
export type AwsProductOptimizationsList = AwsProductOptimization[];
export interface AwsProductDetails {
  ProductCode: string;
  ServiceCode?: string;
  Categories: string[];
  Amount?: string | redacted.Redacted<string>;
  OptimizedAmount?: string | redacted.Redacted<string>;
  PotentialSavingsAmount?: string | redacted.Redacted<string>;
  Optimizations: AwsProductOptimization[];
}
export type AwsProductsList = AwsProductDetails[];
export interface AwsProductInsights {
  CurrencyCode: CurrencyCode;
  Frequency: PaymentFrequency;
  TotalAmount?: string | redacted.Redacted<string>;
  TotalOptimizedAmount?: string | redacted.Redacted<string>;
  TotalPotentialSavingsAmount?: string | redacted.Redacted<string>;
  TotalAmountByCategory: { [key: string]: string | redacted.Redacted<string> | undefined };
  AwsProducts: AwsProductDetails[];
}
export interface AwsProductsSpendInsightsBySource {
  Partner?: AwsProductInsights;
  AWS?: AwsProductInsights;
}
export interface OpportunityQuality {
  Score?: number;
  Trend?: string;
}
export type RecommendationAttributeMap = { [key: string]: string | undefined };
export interface Recommendation {
  Type: string;
  Details: string;
  Attributes?: { [key: string]: string | undefined };
}
export type RecommendationList = Recommendation[];
export interface AwsOpportunityInsights {
  NextBestActions?: string;
  EngagementScore?: EngagementScore;
  AwsProductsSpendInsightsBySource?: AwsProductsSpendInsightsBySource;
  OpportunityQuality?: OpportunityQuality;
  Recommendations?: Recommendation[];
}
export type InvolvementTypeChangeReason =
  | "Expansion Opportunity"
  | "Change in Deal Information"
  | "Customer Requested"
  | "Technical Complexity"
  | "Risk Mitigation"
  | (string & {});
export type AwsProductIdentifier = string;
export type AwsProductIdentifiers = string[];
export type SolutionIdentifier = string;
export type SolutionIdentifiers = string[];
export type AwsMarketplaceSolutionIdentifier = string;
export type AwsMarketplaceSolutionIdentifiers = string[];
export type AwsMarketplaceProductArn = string;
export type AwsMarketplaceProductIdentifiers = string[];
export interface AwsOpportunityRelatedEntities {
  AwsProducts?: string[];
  Solutions?: string[];
  AwsMarketplaceSolutions?: string[];
  AwsMarketplaceProducts?: string[];
}
export interface AwsOpportunityCustomer {
  Contacts?: Contact[];
}
export interface AwsOpportunityProject {
  ExpectedCustomerSpend?: ExpectedCustomerSpend[];
  AwsPartition?: AwsPartition;
}
export interface AwsSoftwareRevenue {
  Value?: MonetaryValue;
  Discount?: string;
  EffectiveDate?: string;
  ExpirationDate?: string;
}
export interface GetAwsOpportunitySummaryResponse {
  RelatedOpportunityId?: string;
  Origin?: OpportunityOrigin;
  InvolvementType?: SalesInvolvementType;
  Visibility?: Visibility;
  LifeCycle?: AwsOpportunityLifeCycle;
  OpportunityTeam?: AwsTeamMember[];
  Insights?: AwsOpportunityInsights;
  InvolvementTypeChangeReason?: InvolvementTypeChangeReason;
  RelatedEntityIds?: AwsOpportunityRelatedEntities;
  Customer?: AwsOpportunityCustomer;
  Project?: AwsOpportunityProject;
  CosellMotion?: string;
  SoftwareRevenue?: AwsSoftwareRevenue;
  Catalog: string;
}
export interface GetEngagementRequest {
  Catalog: string;
  Identifier: string;
}
export interface GetEngagementResponse {
  Id?: string;
  Arn?: string;
  Title?: string;
  Description?: string;
  CreatedAt?: Date;
  CreatedBy?: string | redacted.Redacted<string>;
  MemberCount?: number;
  ModifiedAt?: Date;
  ModifiedBy?: string | redacted.Redacted<string>;
  Contexts?: EngagementContextDetails[];
}
export interface GetEngagementInvitationRequest {
  Catalog: string;
  Identifier: string;
}
export type EngagementInvitationPayloadType =
  | "OpportunityInvitation"
  | "LeadInvitation"
  | (string & {});
export type InvitationStatus = "ACCEPTED" | "PENDING" | "REJECTED" | "EXPIRED" | (string & {});
export type RejectionReasonString = string;
export type MemberCompanyName = string | redacted.Redacted<string>;
export interface EngagementMemberSummary {
  CompanyName?: string | redacted.Redacted<string>;
  WebsiteUrl?: string;
}
export type EngagementMemberSummaries = EngagementMemberSummary[];
export interface InvitationProspectingResultAws {
  Customer?: ProspectingResultCustomer;
  Insights?: ProspectingInsights;
}
export interface EnrichmentContext {
  ProspectingResultAws?: InvitationProspectingResultAws;
  LeadInsights?: LeadInsights;
}
export interface GetEngagementInvitationResponse {
  Arn?: string;
  PayloadType?: EngagementInvitationPayloadType;
  Id: string;
  EngagementId?: string;
  EngagementTitle?: string;
  Status?: InvitationStatus;
  InvitationDate?: Date;
  ExpirationDate?: Date;
  SenderAwsAccountId?: string | redacted.Redacted<string>;
  SenderCompanyName?: string;
  Receiver?: Receiver;
  Catalog: string;
  RejectionReason?: string;
  Payload?: Payload;
  InvitationMessage?: string | redacted.Redacted<string>;
  EngagementDescription?: string;
  ExistingMembers?: EngagementMemberSummary[];
  EnrichmentContext?: EnrichmentContext;
}
export interface GetOpportunityRequest {
  Catalog: string;
  Identifier: string;
}
export type OpportunityArn = string;
export type AwsMarketplaceOfferIdentifier = string;
export type AwsMarketplaceOfferIdentifiers = string[];
export type AwsMarketplaceOfferSetIdentifier = string;
export type AwsMarketplaceOfferSetIdentifiers = string[];
export interface RelatedEntityIdentifiers {
  AwsMarketplaceOffers?: string[];
  AwsMarketplaceOfferSets?: string[];
  Solutions?: string[];
  AwsProducts?: string[];
  AwsMarketplaceSolutions?: string[];
  AwsMarketplaceProducts?: string[];
}
export interface GetOpportunityResponse {
  Catalog: string;
  PrimaryNeedsFromAws?: PrimaryNeedFromAws[];
  NationalSecurity?: NationalSecurity;
  PartnerOpportunityIdentifier?: string;
  Customer?: Customer;
  Project?: Project;
  OpportunityType?: OpportunityType;
  Marketing?: Marketing;
  SoftwareRevenue?: SoftwareRevenue;
  Id: string;
  Arn?: string;
  LastModifiedDate: Date;
  CreatedDate: Date;
  RelatedEntityIdentifiers: RelatedEntityIdentifiers;
  LifeCycle?: LifeCycle;
  OpportunityTeam?: Contact[];
}
export interface GetProspectingFromEngagementTaskRequest {
  Catalog: string;
  TaskIdentifier: string;
}
export type ProspectingTaskArn = string;
export type ProspectingTaskStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED"
  | (string & {});
export interface EngagementProspectingResult {
  EngagementIdentifier: string;
  EngagementContextId?: string;
  Status: ProspectingTaskStatus;
  ReasonCode?: string;
  Message?: string;
}
export type EngagementProspectingResultList = EngagementProspectingResult[];
export interface GetProspectingFromEngagementTaskResponse {
  TaskId: string;
  TaskArn: string;
  TaskName: string;
  StartTime: Date;
  EndTime?: Date;
  Engagements: EngagementProspectingResult[];
}
export interface GetResourceSnapshotRequest {
  Catalog: string;
  EngagementIdentifier: string;
  ResourceType: ResourceType;
  ResourceIdentifier: string;
  ResourceSnapshotTemplateIdentifier: string;
  Revision?: number;
}
export interface LifeCycleForView {
  TargetCloseDate?: string;
  ReviewStatus?: ReviewStatus;
  Stage?: Stage;
  NextSteps?: string | redacted.Redacted<string>;
}
export interface ProjectView {
  DeliveryModels?: DeliveryModel[];
  ExpectedCustomerSpend?: ExpectedCustomerSpend[];
  ExpectedContractDuration?: ExpectedContractDuration;
  CustomerUseCase?: string;
  SalesActivities?: SalesActivity[];
  OtherSolutionDescription?: string | redacted.Redacted<string>;
}
export interface OpportunitySummaryView {
  OpportunityType?: OpportunityType;
  Lifecycle?: LifeCycleForView;
  OpportunityTeam?: Contact[];
  PrimaryNeedsFromAws?: PrimaryNeedFromAws[];
  Customer?: Customer;
  Project?: ProjectView;
  RelatedEntityIdentifiers?: RelatedEntityIdentifiers;
}
export interface AwsOpportunitySummaryFullView {
  RelatedOpportunityId?: string;
  Origin?: OpportunityOrigin;
  InvolvementType?: SalesInvolvementType;
  Visibility?: Visibility;
  LifeCycle?: AwsOpportunityLifeCycle;
  OpportunityTeam?: AwsTeamMember[];
  Insights?: AwsOpportunityInsights;
  InvolvementTypeChangeReason?: InvolvementTypeChangeReason;
  RelatedEntityIds?: AwsOpportunityRelatedEntities;
  Customer?: AwsOpportunityCustomer;
  Project?: AwsOpportunityProject;
  CosellMotion?: string;
  SoftwareRevenue?: AwsSoftwareRevenue;
}
export type ResourceSnapshotPayload =
  | { OpportunitySummary: OpportunitySummaryView; AwsOpportunitySummaryFullView?: never }
  | { OpportunitySummary?: never; AwsOpportunitySummaryFullView: AwsOpportunitySummaryFullView };
export type AwsAccountIdOrAliasList = (string | redacted.Redacted<string>)[];
export interface GetResourceSnapshotResponse {
  Catalog: string;
  Arn?: string;
  CreatedBy?: string | redacted.Redacted<string>;
  CreatedAt?: Date;
  EngagementId?: string;
  ResourceType?: ResourceType;
  ResourceId?: string;
  ResourceSnapshotTemplateName?: string;
  Revision?: number;
  Payload?: ResourceSnapshotPayload;
  TargetMemberAccounts?: (string | redacted.Redacted<string>)[];
}
export interface GetResourceSnapshotJobRequest {
  Catalog: string;
  ResourceSnapshotJobIdentifier: string;
}
export type ResourceSnapshotJobStatus = "Running" | "Stopped" | (string & {});
export interface GetResourceSnapshotJobResponse {
  Catalog: string;
  Id?: string;
  Arn?: string;
  EngagementId?: string;
  ResourceType?: ResourceType;
  ResourceId?: string;
  ResourceArn?: string;
  ResourceSnapshotTemplateName?: string;
  CreatedAt?: Date;
  Status?: ResourceSnapshotJobStatus;
  LastSuccessfulExecutionDate?: Date;
  LastFailure?: string;
}
export interface GetSellingSystemSettingsRequest {
  Catalog: string;
}
export type ResourceSnapshotJobRoleArn = string;
export interface GetSellingSystemSettingsResponse {
  Catalog: string;
  ResourceSnapshotJobRoleArn?: string;
}
export type SortOrder = "ASCENDING" | "DESCENDING" | (string & {});
export type ListTasksSortName = "StartTime" | (string & {});
export interface ListTasksSortBase {
  SortOrder: SortOrder;
  SortBy: ListTasksSortName;
}
export type TaskStatus = "IN_PROGRESS" | "COMPLETE" | "FAILED" | (string & {});
export type TaskStatuses = TaskStatus[];
export type OpportunityIdentifiers = string[];
export type EngagementInvitationIdentifiers = string[];
export type TaskArnOrIdentifier = string;
export type TaskIdentifiers = string[];
export interface ListEngagementByAcceptingInvitationTasksRequest {
  MaxResults?: number;
  NextToken?: string;
  Sort?: ListTasksSortBase;
  Catalog: string;
  TaskStatus?: TaskStatus[];
  OpportunityIdentifier?: string[];
  EngagementInvitationIdentifier?: string[];
  TaskIdentifier?: string[];
}
export type TaskIdentifier = string;
export type ReasonCode =
  | "InvitationAccessDenied"
  | "InvitationValidationFailed"
  | "EngagementAccessDenied"
  | "OpportunityAccessDenied"
  | "ResourceSnapshotJobAccessDenied"
  | "ResourceSnapshotJobValidationFailed"
  | "ResourceSnapshotJobConflict"
  | "EngagementValidationFailed"
  | "EngagementConflict"
  | "OpportunitySubmissionFailed"
  | "EngagementInvitationConflict"
  | "InternalError"
  | "OpportunityValidationFailed"
  | "OpportunityConflict"
  | "ResourceSnapshotAccessDenied"
  | "ResourceSnapshotValidationFailed"
  | "ResourceSnapshotConflict"
  | "ServiceQuotaExceeded"
  | "RequestThrottled"
  | "ContextNotFound"
  | "CustomerProjectContextNotPermitted"
  | "DisqualifiedLeadNotPermitted"
  | (string & {});
export interface ListEngagementByAcceptingInvitationTaskSummary {
  TaskId?: string;
  TaskArn?: string;
  StartTime?: Date;
  TaskStatus?: TaskStatus;
  Message?: string;
  ReasonCode?: ReasonCode;
  OpportunityId?: string;
  ResourceSnapshotJobId?: string;
  EngagementInvitationId?: string;
}
export type ListEngagementByAcceptingInvitationTaskSummaries =
  ListEngagementByAcceptingInvitationTaskSummary[];
export interface ListEngagementByAcceptingInvitationTasksResponse {
  TaskSummaries?: ListEngagementByAcceptingInvitationTaskSummary[];
  NextToken?: string;
}
export type EngagementIdentifiers = string[];
export interface ListEngagementFromOpportunityTasksRequest {
  MaxResults?: number;
  NextToken?: string;
  Sort?: ListTasksSortBase;
  Catalog: string;
  TaskStatus?: TaskStatus[];
  TaskIdentifier?: string[];
  OpportunityIdentifier?: string[];
  EngagementIdentifier?: string[];
}
export interface ListEngagementFromOpportunityTaskSummary {
  TaskId?: string;
  TaskArn?: string;
  StartTime?: Date;
  TaskStatus?: TaskStatus;
  Message?: string;
  ReasonCode?: ReasonCode;
  OpportunityId?: string;
  ResourceSnapshotJobId?: string;
  EngagementId?: string;
  EngagementInvitationId?: string;
}
export type ListEngagementFromOpportunityTaskSummaries = ListEngagementFromOpportunityTaskSummary[];
export interface ListEngagementFromOpportunityTasksResponse {
  TaskSummaries?: ListEngagementFromOpportunityTaskSummary[];
  NextToken?: string;
}
export type PageSize = number;
export type OpportunityEngagementInvitationSortName = "InvitationDate" | (string & {});
export interface OpportunityEngagementInvitationSort {
  SortOrder: SortOrder;
  SortBy: OpportunityEngagementInvitationSortName;
}
export type EngagementInvitationsPayloadType = EngagementInvitationPayloadType[];
export type ParticipantType = "SENDER" | "RECEIVER" | (string & {});
export type InvitationStatusList = InvitationStatus[];
export interface ListEngagementInvitationsRequest {
  Catalog: string;
  MaxResults?: number;
  NextToken?: string;
  Sort?: OpportunityEngagementInvitationSort;
  PayloadType?: EngagementInvitationPayloadType[];
  ParticipantType: ParticipantType;
  Status?: InvitationStatus[];
  EngagementIdentifier?: string[];
  SenderAwsAccountId?: (string | redacted.Redacted<string>)[];
}
export interface EngagementInvitationSummary {
  Arn?: string;
  PayloadType?: EngagementInvitationPayloadType;
  Id: string;
  EngagementId?: string;
  EngagementTitle?: string;
  Status?: InvitationStatus;
  InvitationDate?: Date;
  ExpirationDate?: Date;
  SenderAwsAccountId?: string | redacted.Redacted<string>;
  SenderCompanyName?: string;
  Receiver?: Receiver;
  Catalog: string;
  ParticipantType?: ParticipantType;
}
export type EngagementInvitationSummaries = EngagementInvitationSummary[];
export interface ListEngagementInvitationsResponse {
  EngagementInvitationSummaries?: EngagementInvitationSummary[];
  NextToken?: string;
}
export type MemberPageSize = number;
export interface ListEngagementMembersRequest {
  Catalog: string;
  Identifier: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface EngagementMember {
  CompanyName?: string | redacted.Redacted<string>;
  WebsiteUrl?: string;
  AccountId?: string | redacted.Redacted<string>;
}
export type EngagementMembers = EngagementMember[];
export interface ListEngagementMembersResponse {
  EngagementMemberList: EngagementMember[];
  NextToken?: string;
}
export interface ListEngagementResourceAssociationsRequest {
  Catalog: string;
  MaxResults?: number;
  NextToken?: string;
  EngagementIdentifier?: string;
  ResourceType?: ResourceType;
  ResourceIdentifier?: string;
  CreatedBy?: string | redacted.Redacted<string>;
}
export interface EngagementResourceAssociationSummary {
  Catalog: string;
  EngagementId?: string;
  ResourceType?: ResourceType;
  ResourceId?: string;
  CreatedBy?: string | redacted.Redacted<string>;
}
export type EngagementResourceAssociationSummaryList = EngagementResourceAssociationSummary[];
export interface ListEngagementResourceAssociationsResponse {
  EngagementResourceAssociationSummaries: EngagementResourceAssociationSummary[];
  NextToken?: string;
}
export type AwsAccountList = (string | redacted.Redacted<string>)[];
export type EngagementContextTypeList = EngagementContextType[];
export type EngagementSortName = "CreatedDate" | (string & {});
export interface EngagementSort {
  SortOrder: SortOrder;
  SortBy: EngagementSortName;
}
export type EngagementPageSize = number;
export interface ListEngagementsRequest {
  Catalog: string;
  CreatedBy?: (string | redacted.Redacted<string>)[];
  ExcludeCreatedBy?: (string | redacted.Redacted<string>)[];
  ContextTypes?: EngagementContextType[];
  ExcludeContextTypes?: EngagementContextType[];
  Sort?: EngagementSort;
  MaxResults?: number;
  NextToken?: string;
  EngagementIdentifier?: string[];
}
export interface EngagementSummary {
  Arn?: string;
  Id?: string;
  Title?: string;
  CreatedAt?: Date;
  CreatedBy?: string | redacted.Redacted<string>;
  MemberCount?: number;
  ModifiedAt?: Date;
  ModifiedBy?: string | redacted.Redacted<string>;
  ContextTypes?: EngagementContextType[];
}
export type EngagementSummaryList = EngagementSummary[];
export interface ListEngagementsResponse {
  EngagementSummaryList: EngagementSummary[];
  NextToken?: string;
}
export type OpportunitySortName =
  | "LastModifiedDate"
  | "Identifier"
  | "CustomerCompanyName"
  | "CreatedDate"
  | "TargetCloseDate"
  | (string & {});
export interface OpportunitySort {
  SortOrder: SortOrder;
  SortBy: OpportunitySortName;
}
export interface LastModifiedDate {
  AfterLastModifiedDate?: Date;
  BeforeLastModifiedDate?: Date;
}
export type FilterIdentifier = string[];
export type FilterLifeCycleStage = Stage[];
export type FilterLifeCycleReviewStatus = ReviewStatus[];
export interface CreatedDateFilter {
  AfterCreatedDate?: Date;
  BeforeCreatedDate?: Date;
}
export interface TargetCloseDateFilter {
  AfterTargetCloseDate?: string;
  BeforeTargetCloseDate?: string;
}
export interface ListOpportunitiesRequest {
  Catalog: string;
  MaxResults?: number;
  NextToken?: string;
  Sort?: OpportunitySort;
  LastModifiedDate?: LastModifiedDate;
  Identifier?: string[];
  LifeCycleStage?: Stage[];
  LifeCycleReviewStatus?: ReviewStatus[];
  CustomerCompanyName?: string[];
  CreatedDate?: CreatedDateFilter;
  TargetCloseDate?: TargetCloseDateFilter;
}
export interface LifeCycleSummary {
  Stage?: Stage;
  ClosedLostReason?: ClosedLostReason;
  NextSteps?: string | redacted.Redacted<string>;
  TargetCloseDate?: string;
  ReviewStatus?: ReviewStatus;
  ReviewComments?: string;
  ReviewStatusReason?: string;
}
export interface AddressSummary {
  City?: string | redacted.Redacted<string>;
  PostalCode?: string | redacted.Redacted<string>;
  StateOrRegion?: string | redacted.Redacted<string>;
  CountryCode?: CountryCode;
}
export interface AccountSummary {
  Industry?: Industry;
  OtherIndustry?: string;
  CompanyName: string | redacted.Redacted<string>;
  WebsiteUrl?: string | redacted.Redacted<string>;
  Address?: AddressSummary;
}
export interface CustomerSummary {
  Account?: AccountSummary;
}
export interface ProjectSummary {
  DeliveryModels?: DeliveryModel[];
  ExpectedCustomerSpend?: ExpectedCustomerSpend[];
  ExpectedContractDuration?: ExpectedContractDuration;
}
export interface OpportunitySummary {
  Catalog: string;
  Id?: string;
  Arn?: string;
  PartnerOpportunityIdentifier?: string;
  OpportunityType?: OpportunityType;
  LastModifiedDate?: Date;
  CreatedDate?: Date;
  LifeCycle?: LifeCycleSummary;
  Customer?: CustomerSummary;
  Project?: ProjectSummary;
}
export type OpportunitySummaries = OpportunitySummary[];
export interface ListOpportunitiesResponse {
  OpportunitySummaries: OpportunitySummary[];
  NextToken?: string;
}
export type ContextIdentifier = string;
export type ContextIdentifiers = string[];
export interface ListOpportunityFromEngagementTasksRequest {
  MaxResults?: number;
  NextToken?: string;
  Sort?: ListTasksSortBase;
  Catalog: string;
  TaskStatus?: TaskStatus[];
  TaskIdentifier?: string[];
  OpportunityIdentifier?: string[];
  EngagementIdentifier?: string[];
  ContextIdentifier?: string[];
}
export interface ListOpportunityFromEngagementTaskSummary {
  TaskId?: string;
  TaskArn?: string;
  StartTime?: Date;
  TaskStatus?: TaskStatus;
  Message?: string;
  ReasonCode?: ReasonCode;
  OpportunityId?: string;
  ResourceSnapshotJobId?: string;
  EngagementId?: string;
  ContextId?: string;
}
export type ListOpportunityFromEngagementTaskSummaries = ListOpportunityFromEngagementTaskSummary[];
export interface ListOpportunityFromEngagementTasksResponse {
  TaskSummaries?: ListOpportunityFromEngagementTaskSummary[];
  NextToken?: string;
}
export type TaskIdentifierList = string[];
export type TaskNameList = string[];
export type ProspectingFromEngagementTaskSortName =
  | "StartTime"
  | "TaskName"
  | "FailedEngagementCount"
  | (string & {});
export interface ProspectingFromEngagementTaskSort {
  SortOrder: SortOrder;
  SortBy: ProspectingFromEngagementTaskSortName;
}
export interface ListProspectingFromEngagementTasksRequest {
  Catalog: string;
  MaxResults?: number;
  NextToken?: string;
  TaskIdentifier?: string[];
  TaskName?: string[];
  StartAfter?: Date;
  StartBefore?: Date;
  Sort?: ProspectingFromEngagementTaskSort;
}
export interface ProspectingTaskSummary {
  TaskId: string;
  TaskArn: string;
  TaskName: string;
  StartTime: Date;
  EndTime?: Date;
  TotalEngagementCount: number;
  CompletedEngagementCount: number;
  FailedEngagementCount: number;
}
export type ProspectingTaskSummaryList = ProspectingTaskSummary[];
export interface ListProspectingFromEngagementTasksResponse {
  NextToken?: string;
  TaskSummaries: ProspectingTaskSummary[];
}
export type SortBy = "CreatedDate" | (string & {});
export interface SortObject {
  SortBy?: SortBy;
  SortOrder?: SortOrder;
}
export interface ListResourceSnapshotJobsRequest {
  Catalog: string;
  MaxResults?: number;
  NextToken?: string;
  EngagementIdentifier?: string;
  Status?: ResourceSnapshotJobStatus;
  Sort?: SortObject;
}
export interface ResourceSnapshotJobSummary {
  Id?: string;
  Arn?: string;
  EngagementId?: string;
  Status?: ResourceSnapshotJobStatus;
}
export type ResourceSnapshotJobSummaryList = ResourceSnapshotJobSummary[];
export interface ListResourceSnapshotJobsResponse {
  ResourceSnapshotJobSummaries: ResourceSnapshotJobSummary[];
  NextToken?: string;
}
export interface ListResourceSnapshotsRequest {
  Catalog: string;
  MaxResults?: number;
  NextToken?: string;
  EngagementIdentifier: string;
  ResourceType?: ResourceType;
  ResourceIdentifier?: string;
  ResourceSnapshotTemplateIdentifier?: string;
  CreatedBy?: string | redacted.Redacted<string>;
}
export type ResourceSnapshotArn = string;
export interface ResourceSnapshotSummary {
  Arn?: string;
  Revision?: number;
  ResourceType?: ResourceType;
  ResourceId?: string;
  ResourceSnapshotTemplateName?: string;
  CreatedBy?: string | redacted.Redacted<string>;
}
export type ResourceSnapshotSummaryList = ResourceSnapshotSummary[];
export interface ListResourceSnapshotsResponse {
  ResourceSnapshotSummaries: ResourceSnapshotSummary[];
  NextToken?: string;
}
export type SolutionSortName =
  | "Identifier"
  | "Name"
  | "Status"
  | "Category"
  | "CreatedDate"
  | (string & {});
export interface SolutionSort {
  SortOrder: SortOrder;
  SortBy: SolutionSortName;
}
export type SolutionStatus = "Active" | "Inactive" | "Draft" | (string & {});
export type FilterStatus = SolutionStatus[];
export type AwsMarketplaceSolutionArn = string;
export type AwsMarketplaceSolutionArnList = string[];
export interface ListSolutionsRequest {
  Catalog: string;
  MaxResults?: number;
  NextToken?: string;
  Sort?: SolutionSort;
  Status?: SolutionStatus[];
  Identifier?: string[];
  Category?: string[];
  AwsMarketplaceSolutionArn?: string[];
}
export type SolutionArn = string;
export interface SolutionBase {
  Catalog: string;
  Id: string;
  Arn?: string;
  Name: string;
  Status: SolutionStatus;
  Category: string;
  CreatedDate: Date;
  AwsMarketplaceSolutionArn?: string;
}
export type SolutionList = SolutionBase[];
export interface ListSolutionsResponse {
  SolutionSummaries: SolutionBase[];
  NextToken?: string;
}
export type TaggableResourceArn = string;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags: Tag[];
}
export type ResourceSnapshotJobRoleIdentifier = string;
export interface PutSellingSystemSettingsRequest {
  Catalog: string;
  ResourceSnapshotJobRoleIdentifier?: string;
}
export interface PutSellingSystemSettingsResponse {
  Catalog: string;
  ResourceSnapshotJobRoleArn?: string;
}
export interface RejectEngagementInvitationRequest {
  Catalog: string;
  Identifier: string;
  RejectionReason?: string;
}
export interface RejectEngagementInvitationResponse {}
export interface StartEngagementByAcceptingInvitationTaskRequest {
  Catalog: string;
  ClientToken: string;
  Identifier: string;
  Tags?: Tag[];
}
export interface StartEngagementByAcceptingInvitationTaskResponse {
  TaskId?: string;
  TaskArn?: string;
  StartTime?: Date;
  TaskStatus?: TaskStatus;
  Message?: string;
  ReasonCode?: ReasonCode;
  OpportunityId?: string;
  ResourceSnapshotJobId?: string;
  EngagementInvitationId?: string;
}
export interface AwsSubmission {
  InvolvementType: SalesInvolvementType;
  Visibility?: Visibility;
}
export interface StartEngagementFromOpportunityTaskRequest {
  Catalog: string;
  ClientToken: string;
  Identifier: string;
  AwsSubmission: AwsSubmission;
  Tags?: Tag[];
}
export interface StartEngagementFromOpportunityTaskResponse {
  TaskId?: string;
  TaskArn?: string;
  StartTime?: Date;
  TaskStatus?: TaskStatus;
  Message?: string;
  ReasonCode?: ReasonCode;
  OpportunityId?: string;
  ResourceSnapshotJobId?: string;
  EngagementId?: string;
  EngagementInvitationId?: string;
}
export interface StartOpportunityFromEngagementTaskRequest {
  Catalog: string;
  ClientToken: string;
  Identifier: string;
  ContextIdentifier: string;
  Tags?: Tag[];
}
export interface StartOpportunityFromEngagementTaskResponse {
  TaskId?: string;
  TaskArn?: string;
  StartTime?: Date;
  TaskStatus?: TaskStatus;
  Message?: string;
  ReasonCode?: ReasonCode;
  OpportunityId?: string;
  ResourceSnapshotJobId?: string;
  EngagementId?: string;
  ContextId?: string;
}
export type EngagementIdentifierList = string[];
export interface StartProspectingFromEngagementTaskRequest {
  Catalog: string;
  Identifiers: string[];
  TaskName: string;
  ClientToken: string;
}
export interface StartProspectingFromEngagementTaskResponse {
  Identifiers: string[];
  TaskName: string;
  Message?: string;
  ReasonCode?: string;
  StartTime: Date;
  TaskId?: string;
  TaskArn?: string;
  TaskStatus: ProspectingTaskStatus;
}
export interface StartResourceSnapshotJobRequest {
  Catalog: string;
  ResourceSnapshotJobIdentifier: string;
}
export interface StartResourceSnapshotJobResponse {}
export interface StopResourceSnapshotJobRequest {
  Catalog: string;
  ResourceSnapshotJobIdentifier: string;
}
export interface StopResourceSnapshotJobResponse {}
export interface SubmitOpportunityRequest {
  Catalog: string;
  Identifier: string;
  InvolvementType: SalesInvolvementType;
  Visibility?: Visibility;
}
export interface SubmitOpportunityResponse {}
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Tag[];
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateLeadContext {
  QualificationStatus?: string;
  Customer: LeadCustomer;
  Interaction?: LeadInteraction;
  Insights?: LeadInsights;
}
export type UpdateEngagementContextPayload =
  | { Lead: UpdateLeadContext; CustomerProject?: never; ProspectingResult?: never }
  | { Lead?: never; CustomerProject: CustomerProjectsContext; ProspectingResult?: never }
  | { Lead?: never; CustomerProject?: never; ProspectingResult: ProspectingResult };
export interface UpdateEngagementContextRequest {
  Catalog: string;
  EngagementIdentifier: string;
  ContextIdentifier: string;
  EngagementLastModifiedAt: Date;
  Type: EngagementContextType;
  Payload: UpdateEngagementContextPayload;
}
export interface UpdateEngagementContextResponse {
  EngagementId: string;
  EngagementArn: string;
  EngagementLastModifiedAt: Date;
  ContextId: string;
}
export interface UpdateOpportunityRequest {
  Catalog: string;
  PrimaryNeedsFromAws?: PrimaryNeedFromAws[];
  NationalSecurity?: NationalSecurity;
  PartnerOpportunityIdentifier?: string;
  Customer?: Customer;
  Project?: Project;
  OpportunityType?: OpportunityType;
  Marketing?: Marketing;
  SoftwareRevenue?: SoftwareRevenue;
  LastModifiedDate: Date;
  Identifier: string;
  LifeCycle?: LifeCycle;
}
export interface UpdateOpportunityResponse {
  Id: string;
  LastModifiedDate: Date;
}
export type AccessDeniedExceptionErrorCode =
  | "INCOMPATIBLE_BENEFIT_AWS_PARTNER_STATE"
  | (string & {});
export type ValidationExceptionReason =
  | "REQUEST_VALIDATION_FAILED"
  | "BUSINESS_VALIDATION_FAILED"
  | (string & {});
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
export interface ValidationExceptionError {
  FieldName?: string;
  Message: string;
  Code: ValidationExceptionErrorCode;
}
export type ValidationExceptionErrorList = ValidationExceptionError[];
export type AcceptEngagementInvitationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Use the `AcceptEngagementInvitation` action to accept an engagement invitation shared by AWS. Accepting the invitation indicates your willingness to participate in the engagement, granting you access to all engagement-related data.
 */
export const acceptEngagementInvitation: API.OperationMethod<
  AcceptEngagementInvitationRequest,
  AcceptEngagementInvitationResponse,
  AcceptEngagementInvitationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<AcceptEngagementInvitationRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<AcceptEngagementInvitationResponse>,
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
  operationName: "AcceptEngagementInvitation",
}));

export type AssignOpportunityError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables you to reassign an existing `Opportunity` to another user within your Partner Central account. The specified user receives the opportunity, and it appears on their Partner Central dashboard, allowing them to take necessary actions or proceed with the opportunity.
 *
 * This is useful for distributing opportunities to the appropriate team members or departments within your organization, ensuring that each opportunity is handled by the right person. By default, the opportunity owner is the one who creates it. Currently, there's no API to enumerate the list of available users.
 */
export const assignOpportunity: API.OperationMethod<
  AssignOpportunityRequest,
  AssignOpportunityResponse,
  AssignOpportunityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(3, __c0, 3) as any as S.Schema<AssignOpportunityRequest>,
  output: __S(4, __c0, 4) as any as S.Schema<AssignOpportunityResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssignOpportunity",
}));

export type AssociateOpportunityError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables you to create a formal association between an `Opportunity` and various related entities, enriching the context and details of the opportunity for better collaboration and decision making. You can associate an opportunity with the following entity types:
 *
 * - Partner Solution: A software product or consulting practice created and delivered by Partners. Partner Solutions help customers address business challenges using Amazon Web Services services.
 *
 * - Amazon Web Services Products: Amazon Web Services offers many products and services that provide scalable, reliable, and cost-effective infrastructure solutions. For the latest list of Amazon Web Services products, see Amazon Web Services products.
 *
 * - Amazon Web Services Marketplace private offer: Allows Amazon Web Services Marketplace sellers to extend custom pricing and terms to individual Amazon Web Services customers. Sellers can negotiate custom prices, payment schedules, and end user license terms through private offers, enabling Amazon Web Services customers to acquire software solutions tailored to their specific needs. For more information, see Private offers in Amazon Web Services Marketplace.
 *
 * To obtain identifiers for these entities, use the following methods:
 *
 * - Solution: Use the `ListSolutions` operation.
 *
 * - AWS Products: For the latest list of Amazon Web Services products, see Amazon Web Services products.
 *
 * - Amazon Web Services Marketplace private offer: Use the Using the Amazon Web Services Marketplace Catalog API to list entities. Specifically, use the `ListEntities` operation to retrieve a list of private offers. The request returns the details of available private offers. For more information, see ListEntities.
 */
export const associateOpportunity: API.OperationMethod<
  AssociateOpportunityRequest,
  AssociateOpportunityResponse,
  AssociateOpportunityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(5, __c0, 5) as any as S.Schema<AssociateOpportunityRequest>,
  output: __S(4, __c0, 4) as any as S.Schema<AssociateOpportunityResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateOpportunity",
}));

export type CreateEngagementError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The `CreateEngagement` action allows you to create an `Engagement`, which serves as a collaborative space between different parties such as AWS Partners and AWS Sellers. This action automatically adds the caller's AWS account as an active member of the newly created `Engagement`.
 */
export const createEngagement: API.OperationMethod<
  CreateEngagementRequest,
  CreateEngagementResponse,
  CreateEngagementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(24, __c3, 0) as any as S.Schema<CreateEngagementRequest>,
  output: __S(25, __c3, 1) as any as S.Schema<CreateEngagementResponse>,
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
  operationName: "CreateEngagement",
}));

export type CreateEngagementContextError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new context within an existing engagement. This action allows you to add contextual information such as customer projects or documents to an engagement, providing additional details that help facilitate collaboration between engagement members.
 */
export const createEngagementContext: API.OperationMethod<
  CreateEngagementContextRequest,
  CreateEngagementContextResponse,
  CreateEngagementContextError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(26, __c3, 2) as any as S.Schema<CreateEngagementContextRequest>,
  output: __S(27, __c3, 3) as any as S.Schema<CreateEngagementContextResponse>,
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
  operationName: "CreateEngagementContext",
}));

export type CreateEngagementInvitationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * This action creates an invitation from a sender to a single receiver to join an engagement.
 */
export const createEngagementInvitation: API.OperationMethod<
  CreateEngagementInvitationRequest,
  CreateEngagementInvitationResponse,
  CreateEngagementInvitationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(42, __c5, 2) as any as S.Schema<CreateEngagementInvitationRequest>,
  output: __S(43, __c5, 3) as any as S.Schema<CreateEngagementInvitationResponse>,
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
  operationName: "CreateEngagementInvitation",
}));

export type CreateOpportunityError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an `Opportunity` record in Partner Central. Use this operation to create a potential business opportunity for submission to Amazon Web Services. Creating an opportunity sets `Lifecycle.ReviewStatus` to `Pending Submission`.
 *
 * To submit an opportunity, follow these steps:
 *
 * - To create the opportunity, use `CreateOpportunity`.
 *
 * - To associate a solution with the opportunity, use `AssociateOpportunity`.
 *
 * - To start the engagement with AWS, use `StartEngagementFromOpportunity`.
 *
 * After submission, you can't edit the opportunity until the review is complete. But opportunities in the `Pending Submission` state must have complete details. You can update the opportunity while it's in the `Pending Submission` state.
 *
 * There's a set of mandatory fields to create opportunities, but consider providing optional fields to enrich the opportunity record.
 */
export const createOpportunity: API.OperationMethod<
  CreateOpportunityRequest,
  CreateOpportunityResponse,
  CreateOpportunityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(59, __c7, 3) as any as S.Schema<CreateOpportunityRequest>,
  output: __S(60, __c7, 4) as any as S.Schema<CreateOpportunityResponse>,
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
  operationName: "CreateOpportunity",
}));

export type CreateResourceSnapshotError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * This action allows you to create an immutable snapshot of a specific resource, such as an opportunity, within the context of an engagement. The snapshot captures a subset of the resource's data based on the schema defined by the provided template.
 */
export const createResourceSnapshot: API.OperationMethod<
  CreateResourceSnapshotRequest,
  CreateResourceSnapshotResponse,
  CreateResourceSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(61, __c7, 5) as any as S.Schema<CreateResourceSnapshotRequest>,
  output: __S(62, __c7, 6) as any as S.Schema<CreateResourceSnapshotResponse>,
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
  operationName: "CreateResourceSnapshot",
}));

export type CreateResourceSnapshotJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Use this action to create a job to generate a snapshot of the specified resource within an engagement. It initiates an asynchronous process to create a resource snapshot. The job creates a new snapshot only if the resource state has changed, adhering to the same access control and immutability rules as direct snapshot creation.
 */
export const createResourceSnapshotJob: API.OperationMethod<
  CreateResourceSnapshotJobRequest,
  CreateResourceSnapshotJobResponse,
  CreateResourceSnapshotJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(63, __c7, 7) as any as S.Schema<CreateResourceSnapshotJobRequest>,
  output: __S(64, __c8, 0) as any as S.Schema<CreateResourceSnapshotJobResponse>,
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
  operationName: "CreateResourceSnapshotJob",
}));

export type DeleteResourceSnapshotJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Use this action to deletes a previously created resource snapshot job. The job must be in a stopped state before it can be deleted.
 */
export const deleteResourceSnapshotJob: API.OperationMethod<
  DeleteResourceSnapshotJobRequest,
  DeleteResourceSnapshotJobResponse,
  DeleteResourceSnapshotJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(65, __c8, 1) as any as S.Schema<DeleteResourceSnapshotJobRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DeleteResourceSnapshotJobResponse>,
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
  operationName: "DeleteResourceSnapshotJob",
}));

export type DisassociateOpportunityError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Allows you to remove an existing association between an `Opportunity` and related entities, such as a Partner Solution, Amazon Web Services product, or an Amazon Web Services Marketplace offer. This operation is the counterpart to `AssociateOpportunity`, and it provides flexibility to manage associations as business needs change.
 *
 * Use this operation to update the associations of an `Opportunity` due to changes in the related entities, or if an association was made in error. Ensuring accurate associations helps maintain clarity and accuracy to track and manage business opportunities. When you replace an entity, first attach the new entity and then disassociate the one to be removed, especially if it's the last remaining entity that's required.
 */
export const disassociateOpportunity: API.OperationMethod<
  DisassociateOpportunityRequest,
  DisassociateOpportunityResponse,
  DisassociateOpportunityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(66, __c8, 2) as any as S.Schema<DisassociateOpportunityRequest>,
  output: __S(67, __c8, 3) as any as S.Schema<DisassociateOpportunityResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateOpportunity",
}));

export type GetAwsOpportunitySummaryError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a summary of an AWS Opportunity. This summary includes high-level details about the opportunity sourced from AWS, such as lifecycle information, customer details, and involvement type. It is useful for tracking updates on the AWS opportunity corresponding to an opportunity in the partner's account.
 */
export const getAwsOpportunitySummary: API.OperationMethod<
  GetAwsOpportunitySummaryRequest,
  GetAwsOpportunitySummaryResponse,
  GetAwsOpportunitySummaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(68, __c8, 4) as any as S.Schema<GetAwsOpportunitySummaryRequest>,
  output: __S(88, __c11, 0) as any as S.Schema<GetAwsOpportunitySummaryResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAwsOpportunitySummary",
}));

export type GetEngagementError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Use this action to retrieve the engagement record for a given `EngagementIdentifier`.
 */
export const getEngagement: API.OperationMethod<
  GetEngagementRequest,
  GetEngagementResponse,
  GetEngagementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(89, __c11, 1) as any as S.Schema<GetEngagementRequest>,
  output: __S(90, __c11, 2) as any as S.Schema<GetEngagementResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEngagement",
}));

export type GetEngagementInvitationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the details of an engagement invitation shared by AWS with a partner. The information includes aspects such as customer, project details, and lifecycle information. To connect an engagement invitation with an opportunity, match the invitation's `Payload.Project.Title` with opportunity `Project.Title`.
 */
export const getEngagementInvitation: API.OperationMethod<
  GetEngagementInvitationRequest,
  GetEngagementInvitationResponse,
  GetEngagementInvitationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(91, __c11, 3) as any as S.Schema<GetEngagementInvitationRequest>,
  output: __S(96, __c12, 0) as any as S.Schema<GetEngagementInvitationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEngagementInvitation",
}));

export type GetOpportunityError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Fetches the `Opportunity` record from Partner Central by a given `Identifier`.
 *
 * Use the `ListOpportunities` action or the event notification (from Amazon EventBridge) to obtain this identifier.
 */
export const getOpportunity: API.OperationMethod<
  GetOpportunityRequest,
  GetOpportunityResponse,
  GetOpportunityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(97, __c12, 1) as any as S.Schema<GetOpportunityRequest>,
  output: __S(99, __c12, 3) as any as S.Schema<GetOpportunityResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetOpportunity",
}));

export type GetProspectingFromEngagementTaskError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the details and current status of a prospecting task previously started with `StartProspectingFromEngagementTask` to enable polling for completion and access to per-engagement processing results.
 */
export const getProspectingFromEngagementTask: API.OperationMethod<
  GetProspectingFromEngagementTaskRequest,
  GetProspectingFromEngagementTaskResponse,
  GetProspectingFromEngagementTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(100, __c12, 4) as any as S.Schema<GetProspectingFromEngagementTaskRequest>,
  output: __S(103, __c12, 7) as any as S.Schema<GetProspectingFromEngagementTaskResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetProspectingFromEngagementTask",
}));

export type GetResourceSnapshotError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Use this action to retrieve a specific snapshot record.
 */
export const getResourceSnapshot: API.OperationMethod<
  GetResourceSnapshotRequest,
  GetResourceSnapshotResponse,
  GetResourceSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(104, __c13, 0) as any as S.Schema<GetResourceSnapshotRequest>,
  output: __S(111, __c13, 7) as any as S.Schema<GetResourceSnapshotResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourceSnapshot",
}));

export type GetResourceSnapshotJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Use this action to retrieves information about a specific resource snapshot job.
 */
export const getResourceSnapshotJob: API.OperationMethod<
  GetResourceSnapshotJobRequest,
  GetResourceSnapshotJobResponse,
  GetResourceSnapshotJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(112, __c14, 0) as any as S.Schema<GetResourceSnapshotJobRequest>,
  output: __S(113, __c14, 1) as any as S.Schema<GetResourceSnapshotJobResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourceSnapshotJob",
}));

export type GetSellingSystemSettingsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the currently set system settings, which include the IAM Role used for resource snapshot jobs.
 */
export const getSellingSystemSettings: API.OperationMethod<
  GetSellingSystemSettingsRequest,
  GetSellingSystemSettingsResponse,
  GetSellingSystemSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(114, __c14, 2) as any as S.Schema<GetSellingSystemSettingsRequest>,
  output: __S(115, __c14, 3) as any as S.Schema<GetSellingSystemSettingsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSellingSystemSettings",
}));

export type ListEngagementByAcceptingInvitationTasksError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all in-progress, completed, or failed StartEngagementByAcceptingInvitationTask tasks that were initiated by the caller's account.
 */
export const listEngagementByAcceptingInvitationTasks: API.PaginatedOperationMethod<
  ListEngagementByAcceptingInvitationTasksRequest,
  ListEngagementByAcceptingInvitationTasksResponse,
  ListEngagementByAcceptingInvitationTasksError,
  Credentials | HttpClient.HttpClient,
  ListEngagementByAcceptingInvitationTaskSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(117, __c14, 5) as any as S.Schema<ListEngagementByAcceptingInvitationTasksRequest>,
  output: __S(120, __c15, 0) as any as S.Schema<ListEngagementByAcceptingInvitationTasksResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEngagementByAcceptingInvitationTasks",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "TaskSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListEngagementFromOpportunityTasksError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all in-progress, completed, or failed `EngagementFromOpportunity` tasks that were initiated by the caller's account.
 */
export const listEngagementFromOpportunityTasks: API.PaginatedOperationMethod<
  ListEngagementFromOpportunityTasksRequest,
  ListEngagementFromOpportunityTasksResponse,
  ListEngagementFromOpportunityTasksError,
  Credentials | HttpClient.HttpClient,
  ListEngagementFromOpportunityTaskSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(121, __c15, 1) as any as S.Schema<ListEngagementFromOpportunityTasksRequest>,
  output: __S(124, __c15, 4) as any as S.Schema<ListEngagementFromOpportunityTasksResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEngagementFromOpportunityTasks",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "TaskSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListEngagementInvitationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of engagement invitations sent to the partner. This allows partners to view all pending or past engagement invitations, helping them track opportunities shared by AWS.
 */
export const listEngagementInvitations: API.PaginatedOperationMethod<
  ListEngagementInvitationsRequest,
  ListEngagementInvitationsResponse,
  ListEngagementInvitationsError,
  Credentials | HttpClient.HttpClient,
  EngagementInvitationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(127, __c15, 7) as any as S.Schema<ListEngagementInvitationsRequest>,
  output: __S(130, __c16, 2) as any as S.Schema<ListEngagementInvitationsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEngagementInvitations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "EngagementInvitationSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListEngagementMembersError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the details of member partners in an Engagement. This operation can only be invoked by members of the Engagement. The `ListEngagementMembers` operation allows you to fetch information about the members of a specific Engagement. This action is restricted to members of the Engagement being queried.
 */
export const listEngagementMembers: API.PaginatedOperationMethod<
  ListEngagementMembersRequest,
  ListEngagementMembersResponse,
  ListEngagementMembersError,
  Credentials | HttpClient.HttpClient,
  EngagementMember
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(131, __c16, 3) as any as S.Schema<ListEngagementMembersRequest>,
  output: __S(134, __c16, 6) as any as S.Schema<ListEngagementMembersResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEngagementMembers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "EngagementMemberList",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListEngagementResourceAssociationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the associations between resources and engagements where the caller is a member and has at least one snapshot in the engagement.
 */
export const listEngagementResourceAssociations: API.PaginatedOperationMethod<
  ListEngagementResourceAssociationsRequest,
  ListEngagementResourceAssociationsResponse,
  ListEngagementResourceAssociationsError,
  Credentials | HttpClient.HttpClient,
  EngagementResourceAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(135, __c16, 7) as any as S.Schema<ListEngagementResourceAssociationsRequest>,
  output: __S(138, __c17, 2) as any as S.Schema<ListEngagementResourceAssociationsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEngagementResourceAssociations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "EngagementResourceAssociationSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListEngagementsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * This action allows users to retrieve a list of Engagement records from Partner Central. This action can be used to manage and track various engagements across different stages of the partner selling process.
 */
export const listEngagements: API.PaginatedOperationMethod<
  ListEngagementsRequest,
  ListEngagementsResponse,
  ListEngagementsError,
  Credentials | HttpClient.HttpClient,
  EngagementSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(139, __c17, 3) as any as S.Schema<ListEngagementsRequest>,
  output: __S(142, __c17, 6) as any as S.Schema<ListEngagementsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEngagements",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "EngagementSummaryList",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListOpportunitiesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * This request accepts a list of filters that retrieve opportunity subsets as well as sort options. This feature is available to partners from Partner Central using the `ListOpportunities` API action.
 *
 * To synchronize your system with Amazon Web Services, list only the opportunities that were newly created or updated. We recommend you rely on events emitted by the service into your Amazon Web Services account's Amazon EventBridge default event bus. You can also use the `ListOpportunities` action.
 *
 * We recommend the following approach:
 *
 * - Find the latest `LastModifiedDate` that you stored, and only use the values that came from Amazon Web Services. Don't use values generated by your system.
 *
 * - When you send a `ListOpportunities` request, submit the date in ISO 8601 format in the `AfterLastModifiedDate` filter.
 *
 * - Amazon Web Services only returns opportunities created or updated on or after that date and time. Use `NextToken` to iterate over all pages.
 */
export const listOpportunities: API.PaginatedOperationMethod<
  ListOpportunitiesRequest,
  ListOpportunitiesResponse,
  ListOpportunitiesError,
  Credentials | HttpClient.HttpClient,
  OpportunitySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(146, __c18, 2) as any as S.Schema<ListOpportunitiesRequest>,
  output: __S(154, __c19, 2) as any as S.Schema<ListOpportunitiesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOpportunities",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "OpportunitySummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListOpportunityFromEngagementTasksError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all in-progress, completed, or failed opportunity creation tasks from engagements that were initiated by the caller's account.
 */
export const listOpportunityFromEngagementTasks: API.PaginatedOperationMethod<
  ListOpportunityFromEngagementTasksRequest,
  ListOpportunityFromEngagementTasksResponse,
  ListOpportunityFromEngagementTasksError,
  Credentials | HttpClient.HttpClient,
  ListOpportunityFromEngagementTaskSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(155, __c19, 3) as any as S.Schema<ListOpportunityFromEngagementTasksRequest>,
  output: __S(158, __c19, 6) as any as S.Schema<ListOpportunityFromEngagementTasksResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOpportunityFromEngagementTasks",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "TaskSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListProspectingFromEngagementTasksError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all prospecting tasks initiated by the caller's account. Supports optional filters by task identifier, task name, or start time range. Results can be sorted using configurable options. The response is paginated. Use the `NextToken` value from each response to retrieve subsequent pages.
 */
export const listProspectingFromEngagementTasks: API.PaginatedOperationMethod<
  ListProspectingFromEngagementTasksRequest,
  ListProspectingFromEngagementTasksResponse,
  ListProspectingFromEngagementTasksError,
  Credentials | HttpClient.HttpClient,
  ProspectingTaskSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(159, __c19, 7) as any as S.Schema<ListProspectingFromEngagementTasksRequest>,
  output: __S(162, __c20, 2) as any as S.Schema<ListProspectingFromEngagementTasksResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProspectingFromEngagementTasks",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "TaskSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListResourceSnapshotJobsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists resource snapshot jobs owned by the customer. This operation supports various filtering scenarios, including listing all jobs owned by the caller, jobs for a specific engagement, jobs with a specific status, or any combination of these filters.
 */
export const listResourceSnapshotJobs: API.PaginatedOperationMethod<
  ListResourceSnapshotJobsRequest,
  ListResourceSnapshotJobsResponse,
  ListResourceSnapshotJobsError,
  Credentials | HttpClient.HttpClient,
  ResourceSnapshotJobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(164, __c20, 4) as any as S.Schema<ListResourceSnapshotJobsRequest>,
  output: __S(167, __c20, 7) as any as S.Schema<ListResourceSnapshotJobsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResourceSnapshotJobs",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ResourceSnapshotJobSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListResourceSnapshotsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of resource view snapshots based on specified criteria. This operation supports various use cases, including:
 *
 * - Fetching all snapshots associated with an engagement.
 *
 * - Retrieving snapshots of a specific resource type within an engagement.
 *
 * - Obtaining snapshots for a particular resource using a specified template.
 *
 * - Accessing the latest snapshot of a resource within an engagement.
 *
 * - Filtering snapshots by resource owner.
 */
export const listResourceSnapshots: API.PaginatedOperationMethod<
  ListResourceSnapshotsRequest,
  ListResourceSnapshotsResponse,
  ListResourceSnapshotsError,
  Credentials | HttpClient.HttpClient,
  ResourceSnapshotSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(168, __c21, 0) as any as S.Schema<ListResourceSnapshotsRequest>,
  output: __S(171, __c21, 3) as any as S.Schema<ListResourceSnapshotsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResourceSnapshots",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ResourceSnapshotSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListSolutionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of Partner Solutions that the partner registered on Partner Central. This API is used to generate a list of solutions that an end user selects from for association with an opportunity.
 */
export const listSolutions: API.PaginatedOperationMethod<
  ListSolutionsRequest,
  ListSolutionsResponse,
  ListSolutionsError,
  Credentials | HttpClient.HttpClient,
  SolutionBase
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(172, __c21, 4) as any as S.Schema<ListSolutionsRequest>,
  output: __S(175, __c21, 7) as any as S.Schema<ListSolutionsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSolutions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "SolutionSummaries",
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
 * Returns a list of tags for a resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(176, __c22, 0) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(177, __c22, 1) as any as S.Schema<ListTagsForResourceResponse>,
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

export type PutSellingSystemSettingsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the currently set system settings, which include the IAM Role used for resource snapshot jobs.
 */
export const putSellingSystemSettings: API.OperationMethod<
  PutSellingSystemSettingsRequest,
  PutSellingSystemSettingsResponse,
  PutSellingSystemSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(178, __c22, 2) as any as S.Schema<PutSellingSystemSettingsRequest>,
  output: __S(115, __c14, 3) as any as S.Schema<PutSellingSystemSettingsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutSellingSystemSettings",
}));

export type RejectEngagementInvitationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * This action rejects an `EngagementInvitation` that AWS shared. Rejecting an invitation indicates that the partner doesn't want to pursue the opportunity, and all related data will become inaccessible thereafter.
 */
export const rejectEngagementInvitation: API.OperationMethod<
  RejectEngagementInvitationRequest,
  RejectEngagementInvitationResponse,
  RejectEngagementInvitationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(179, __c22, 3) as any as S.Schema<RejectEngagementInvitationRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<RejectEngagementInvitationResponse>,
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
  operationName: "RejectEngagementInvitation",
}));

export type StartEngagementByAcceptingInvitationTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * This action starts the engagement by accepting an `EngagementInvitation`. The task is asynchronous and involves the following steps: accepting the invitation, creating an opportunity in the partner's account from the AWS opportunity, and copying details for tracking. When completed, an `Opportunity Created` event is generated, indicating that the opportunity has been successfully created in the partner's account.
 */
export const startEngagementByAcceptingInvitationTask: API.OperationMethod<
  StartEngagementByAcceptingInvitationTaskRequest,
  StartEngagementByAcceptingInvitationTaskResponse,
  StartEngagementByAcceptingInvitationTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(180, __c22, 4) as any as S.Schema<StartEngagementByAcceptingInvitationTaskRequest>,
  output: __S(118, __c14, 6) as any as S.Schema<StartEngagementByAcceptingInvitationTaskResponse>,
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
  operationName: "StartEngagementByAcceptingInvitationTask",
}));

export type StartEngagementFromOpportunityTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Similar to `StartEngagementByAcceptingInvitationTask`, this action is asynchronous and performs multiple steps before completion. This action orchestrates a comprehensive workflow that combines multiple API operations into a single task to create and initiate an engagement from an existing opportunity. It automatically executes a sequence of operations including `GetOpportunity`, `CreateEngagement` (if it doesn't exist), `CreateResourceSnapshot`, `CreateResourceSnapshotJob`, `CreateEngagementInvitation` (if not already invited/accepted), and `SubmitOpportunity`.
 */
export const startEngagementFromOpportunityTask: API.OperationMethod<
  StartEngagementFromOpportunityTaskRequest,
  StartEngagementFromOpportunityTaskResponse,
  StartEngagementFromOpportunityTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(182, __c22, 6) as any as S.Schema<StartEngagementFromOpportunityTaskRequest>,
  output: __S(122, __c15, 2) as any as S.Schema<StartEngagementFromOpportunityTaskResponse>,
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
  operationName: "StartEngagementFromOpportunityTask",
}));

export type StartOpportunityFromEngagementTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * This action creates an opportunity from an existing engagement context. The task is asynchronous and orchestrates the process of converting engagement contextual information into a structured opportunity record within the partner's account.
 */
export const startOpportunityFromEngagementTask: API.OperationMethod<
  StartOpportunityFromEngagementTaskRequest,
  StartOpportunityFromEngagementTaskResponse,
  StartOpportunityFromEngagementTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(183, __c22, 7) as any as S.Schema<StartOpportunityFromEngagementTaskRequest>,
  output: __S(156, __c19, 4) as any as S.Schema<StartOpportunityFromEngagementTaskResponse>,
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
  operationName: "StartOpportunityFromEngagementTask",
}));

export type StartProspectingFromEngagementTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a task to convert one or more engagement contexts into new prospecting leads. The task runs asynchronously. To poll for status, use `GetProspectingFromEngagementTask`, or use `ListProspectingFromEngagementTasks` to monitor multiple tasks.
 */
export const startProspectingFromEngagementTask: API.OperationMethod<
  StartProspectingFromEngagementTaskRequest,
  StartProspectingFromEngagementTaskResponse,
  StartProspectingFromEngagementTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(184, __c23, 0) as any as S.Schema<StartProspectingFromEngagementTaskRequest>,
  output: __S(185, __c23, 1) as any as S.Schema<StartProspectingFromEngagementTaskResponse>,
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
  operationName: "StartProspectingFromEngagementTask",
}));

export type StartResourceSnapshotJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a resource snapshot job that has been previously created.
 */
export const startResourceSnapshotJob: API.OperationMethod<
  StartResourceSnapshotJobRequest,
  StartResourceSnapshotJobResponse,
  StartResourceSnapshotJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(186, __c23, 2) as any as S.Schema<StartResourceSnapshotJobRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<StartResourceSnapshotJobResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartResourceSnapshotJob",
}));

export type StopResourceSnapshotJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Stops a resource snapshot job. The job must be started prior to being stopped.
 */
export const stopResourceSnapshotJob: API.OperationMethod<
  StopResourceSnapshotJobRequest,
  StopResourceSnapshotJobResponse,
  StopResourceSnapshotJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(187, __c23, 3) as any as S.Schema<StopResourceSnapshotJobRequest>,
  output: __S(67, __c8, 3) as any as S.Schema<StopResourceSnapshotJobResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopResourceSnapshotJob",
}));

export type SubmitOpportunityError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Use this action to submit an Opportunity that was previously created by partner for AWS review. After you perform this action, the Opportunity becomes non-editable until it is reviewed by AWS and has ` LifeCycle.ReviewStatus ` as either `Approved` or `Action Required`.
 */
export const submitOpportunity: API.OperationMethod<
  SubmitOpportunityRequest,
  SubmitOpportunityResponse,
  SubmitOpportunityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(188, __c23, 4) as any as S.Schema<SubmitOpportunityRequest>,
  output: __S(4, __c0, 4) as any as S.Schema<SubmitOpportunityResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SubmitOpportunity",
}));

export type TagResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Assigns one or more tags (key-value pairs) to the specified resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(189, __c23, 5) as any as S.Schema<TagResourceRequest>,
  output: __S(4, __c0, 4) as any as S.Schema<TagResourceResponse>,
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
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes a tag or tags from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(190, __c23, 6) as any as S.Schema<UntagResourceRequest>,
  output: __S(4, __c0, 4) as any as S.Schema<UntagResourceResponse>,
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
  operationName: "UntagResource",
}));

export type UpdateEngagementContextError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the context information for an existing engagement with new or modified data.
 */
export const updateEngagementContext: API.OperationMethod<
  UpdateEngagementContextRequest,
  UpdateEngagementContextResponse,
  UpdateEngagementContextError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(193, __c24, 1) as any as S.Schema<UpdateEngagementContextRequest>,
  output: __S(194, __c24, 2) as any as S.Schema<UpdateEngagementContextResponse>,
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
  operationName: "UpdateEngagementContext",
}));

export type UpdateOpportunityError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the `Opportunity` record identified by a given `Identifier`. This operation allows you to modify the details of an existing opportunity to reflect the latest information and progress. Use this action to keep the opportunity record up-to-date and accurate.
 *
 * When you perform updates, include the entire payload with each request. If any field is omitted, the API assumes that the field is set to `null`. The best practice is to always perform a `GetOpportunity` to retrieve the latest values, then send the complete payload with the updated values to be changed.
 */
export const updateOpportunity: API.OperationMethod<
  UpdateOpportunityRequest,
  UpdateOpportunityResponse,
  UpdateOpportunityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(195, __c24, 3) as any as S.Schema<UpdateOpportunityRequest>,
  output: __S(196, __c24, 4) as any as S.Schema<UpdateOpportunityResponse>,
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
  operationName: "UpdateOpportunity",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Catalog: S.String, Identifier: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/AcceptEngagementInvitation" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AcceptEngagementInvitationRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AcceptEngagementInvitationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Email: SensitiveString,
          FirstName: SensitiveString,
          LastName: SensitiveString,
          Phone: S.optional(SensitiveString),
          BusinessTitle: SensitiveString,
        }),
      ).annotate({ identifier: "AssigneeContact" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Catalog: S.String, Identifier: S.String, Assignee: __S(2, __c0, 2) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/AssignOpportunity" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AssignOpportunityRequest" });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AssignOpportunityResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          OpportunityIdentifier: S.String,
          RelatedEntityType: S.String,
          RelatedEntityIdentifier: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/AssociateOpportunity" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateOpportunityRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Industry: S.String,
          CompanyName: SensitiveString,
          WebsiteUrl: SensitiveString,
          CountryCode: S.String,
        }),
      ).annotate({ identifier: "EngagementCustomer" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Title: S.String,
          BusinessProblem: SensitiveString,
          TargetCompletionDate: S.String,
        }),
      ).annotate({
        identifier: "EngagementCustomerProjectDetails",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Customer: S.optional(__S(6, __c0, 6)),
          Project: S.optional(__S(7, __c0, 7)),
        }),
      ).annotate({ identifier: "CustomerProjectsContext" });
    case 1:
      return S.suspend(() => S.Struct({ LeadReadinessScore: S.optional(S.String) })).annotate({
        identifier: "LeadInsights",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          City: S.optional(S.String),
          PostalCode: S.optional(S.String),
          StateOrRegion: S.optional(S.String),
          CountryCode: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "LeadAddress" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Industry: S.optional(S.String),
          CompanyName: SensitiveString,
          WebsiteUrl: S.optional(SensitiveString),
          Address: S.optional(__S(10, __c1, 2)),
          AwsMaturity: S.optional(S.String),
          MarketSegment: S.optional(S.String),
        }),
      ).annotate({ identifier: "LeadCustomer" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          BusinessTitle: SensitiveString,
          Email: SensitiveString,
          FirstName: SensitiveString,
          LastName: SensitiveString,
          Phone: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "LeadContact" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SourceType: S.optional(S.String),
          SourceId: S.optional(S.String),
          SourceName: S.optional(S.String),
          Usecase: S.optional(S.String),
          InteractionDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          CustomerAction: S.optional(S.String),
          BusinessProblem: S.optional(SensitiveString),
          Contact: __S(12, __c1, 4),
        }),
      ).annotate({ identifier: "LeadInteraction" });
    case 6:
      return S.Array(__S(13, __c1, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Insights: S.optional(__S(9, __c1, 1)),
          QualificationStatus: S.optional(S.String),
          Customer: __S(11, __c1, 3),
          Interactions: __S(14, __c1, 6),
        }),
      ).annotate({ identifier: "LeadContext" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountName: S.optional(S.String),
          Geo: S.optional(S.String),
          Region: S.optional(S.String),
          SubRegion: S.optional(S.String),
          Country: S.optional(S.String),
          Industry: S.optional(S.String),
          SubIndustry: S.optional(S.String),
          Segment: S.optional(S.String),
          CompanySize: S.optional(S.String),
          EligiblePrograms: S.optional(__S(16, __c2, 0)),
          PublicProfileSummary: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ProspectingResultCustomer",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          MarketplaceEngagementScore: S.optional(S.String),
          SolutionScore: S.optional(S.String),
          SolutionCategory: S.optional(S.String),
          SolutionSubCategory: S.optional(S.String),
        }),
      ).annotate({ identifier: "ProspectingInsights" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Customer: S.optional(__S(17, __c2, 1)),
          Insights: S.optional(__S(18, __c2, 2)),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          TaskId: S.optional(S.String),
          TaskArn: S.optional(S.String),
          TaskName: S.optional(S.String),
        }),
      ).annotate({ identifier: "ProspectingResultAws" });
    case 4:
      return S.suspend(() => S.Struct({ Aws: S.optional(__S(19, __c2, 3)) })).annotate({
        identifier: "ProspectingResult",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ CustomerProject: __S(8, __c1, 0) }),
        /*@__PURE__*/ S.Struct({ Lead: __S(15, __c1, 7) }),
        /*@__PURE__*/ S.Struct({ ProspectingResult: __S(20, __c2, 4) }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Type: S.String,
          Payload: S.optional(__S(21, __c2, 5)),
        }),
      ).annotate({ identifier: "EngagementContextDetails" });
    case 7:
      return S.Array(__S(22, __c2, 6));
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          ClientToken: S.String.pipe(T.IdempotencyToken()),
          Title: S.optional(S.String),
          Description: S.optional(S.String),
          Contexts: S.optional(__S(23, __c2, 7)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/CreateEngagement" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateEngagementRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Arn: S.optional(S.String),
          ModifiedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "CreateEngagementResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          EngagementIdentifier: S.String,
          ClientToken: S.String.pipe(T.IdempotencyToken()),
          Type: S.String,
          Payload: __S(21, __c2, 5),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateEngagementContext" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateEngagementContextRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          EngagementId: S.optional(S.String),
          EngagementArn: S.optional(S.String),
          EngagementLastModifiedAt: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          ContextId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateEngagementContextResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Alias: S.optional(SensitiveString), AwsAccountId: SensitiveString }),
      ).annotate({ identifier: "AccountReceiver" });
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ Account: __S(28, __c3, 4) })]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          Email: SensitiveString,
          FirstName: S.optional(SensitiveString),
          LastName: S.optional(SensitiveString),
          BusinessTitle: S.optional(SensitiveString),
          Phone: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "SenderContact" });
    case 7:
      return S.Array(__S(30, __c3, 6));
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Amount: S.optional(SensitiveString),
          CurrencyCode: S.String,
          Frequency: S.String,
          TargetCompany: S.String,
          EstimationUrl: S.optional(S.String),
        }),
      ).annotate({ identifier: "ExpectedCustomerSpend" });
    case 2:
      return S.Array(__S(33, __c4, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          BusinessProblem: SensitiveString,
          Title: S.String,
          TargetCompletionDate: S.String,
          ExpectedCustomerSpend: __S(34, __c4, 2),
        }),
      ).annotate({ identifier: "ProjectDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SenderContacts: S.optional(__S(31, __c3, 7)),
          ReceiverResponsibilities: __S(32, __c4, 0),
          Customer: __S(6, __c0, 6),
          Project: __S(35, __c4, 3),
        }),
      ).annotate({
        identifier: "OpportunityInvitationPayload",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Industry: S.optional(S.String),
          CompanyName: SensitiveString,
          WebsiteUrl: S.optional(SensitiveString),
          CountryCode: S.optional(SensitiveString),
          AwsMaturity: S.optional(S.String),
          MarketSegment: S.optional(S.String),
        }),
      ).annotate({ identifier: "LeadInvitationCustomer" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SourceType: S.optional(S.String),
          SourceId: S.optional(S.String),
          SourceName: S.optional(S.String),
          Usecase: S.optional(S.String),
          ContactBusinessTitle: SensitiveString,
        }),
      ).annotate({
        identifier: "LeadInvitationInteraction",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Customer: __S(37, __c4, 5), Interaction: __S(38, __c4, 6) }),
      ).annotate({ identifier: "LeadInvitationPayload" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ OpportunityInvitation: __S(36, __c4, 4) }),
        /*@__PURE__*/ S.Struct({ LeadInvitation: __S(39, __c4, 7) }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Message: SensitiveString,
          Receiver: __S(29, __c3, 5),
          Payload: __S(40, __c5, 0),
        }),
      ).annotate({ identifier: "Invitation" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          ClientToken: S.String.pipe(T.IdempotencyToken()),
          EngagementIdentifier: S.String,
          Invitation: __S(41, __c5, 1),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateEngagementInvitation" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateEngagementInvitationRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ Id: S.String, Arn: S.String })).annotate({
        identifier: "CreateEngagementInvitationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          City: S.optional(SensitiveString),
          PostalCode: S.optional(SensitiveString),
          StateOrRegion: S.optional(SensitiveString),
          CountryCode: S.optional(S.String),
          StreetAddress: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "Address" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Industry: S.optional(S.String),
          OtherIndustry: S.optional(S.String),
          CompanyName: SensitiveString,
          WebsiteUrl: S.optional(SensitiveString),
          AwsAccountId: S.optional(SensitiveString),
          Address: S.optional(__S(44, __c5, 4)),
          Duns: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "Account" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Email: S.optional(SensitiveString),
          FirstName: S.optional(SensitiveString),
          LastName: S.optional(SensitiveString),
          BusinessTitle: S.optional(SensitiveString),
          Phone: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "Contact" });
    case 7:
      return S.Array(__S(46, __c5, 6));
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Account: S.optional(__S(45, __c5, 5)), Contacts: S.optional(__S(47, __c5, 7)) }),
      ).annotate({ identifier: "Customer" });
    case 1:
      return S.suspend(() => S.Struct({ Term: S.String, Value: S.String })).annotate({
        identifier: "ExpectedContractDuration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DeliveryModels: S.optional(__S(32, __c4, 0)),
          ExpectedCustomerSpend: S.optional(__S(34, __c4, 2)),
          ExpectedContractDuration: S.optional(__S(49, __c6, 1)),
          Title: S.optional(SensitiveString),
          ApnPrograms: S.optional(__S(16, __c2, 0)),
          CustomerBusinessProblem: S.optional(SensitiveString),
          CustomerUseCase: S.optional(S.String),
          RelatedOpportunityIdentifier: S.optional(S.String),
          SalesActivities: S.optional(__S(32, __c4, 0)),
          CompetitorName: S.optional(S.String),
          OtherCompetitorNames: S.optional(S.String),
          OtherSolutionDescription: S.optional(SensitiveString),
          AdditionalComments: S.optional(S.String),
          AwsPartition: S.optional(S.String),
        }),
      ).annotate({ identifier: "Project" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          CampaignName: S.optional(S.String),
          Source: S.optional(S.String),
          UseCases: S.optional(__S(16, __c2, 0)),
          Channels: S.optional(__S(32, __c4, 0)),
          AwsFundingUsed: S.optional(S.String),
        }),
      ).annotate({ identifier: "Marketing" });
    case 4:
      return S.suspend(() => S.Struct({ Amount: S.String, CurrencyCode: S.String })).annotate({
        identifier: "MonetaryValue",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DeliveryModel: S.optional(S.String),
          Value: S.optional(__S(52, __c6, 4)),
          EffectiveDate: S.optional(S.String),
          ExpirationDate: S.optional(S.String),
        }),
      ).annotate({ identifier: "SoftwareRevenue" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Value: S.String, Time: T.DateFromString.pipe(T.TimestampFormat("date-time")) }),
      ).annotate({ identifier: "NextStepsHistory" });
    case 7:
      return S.Array(__S(54, __c6, 6));
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Stage: S.optional(S.String),
          ClosedLostReason: S.optional(S.String),
          NextSteps: S.optional(SensitiveString),
          TargetCloseDate: S.optional(S.String),
          ReviewStatus: S.optional(S.String),
          ReviewComments: S.optional(S.String),
          ReviewStatusReason: S.optional(S.String),
          NextStepsHistory: S.optional(__S(55, __c6, 7)),
        }),
      ).annotate({ identifier: "LifeCycle" });
    case 1:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 2:
      return S.Array(__S(57, __c7, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          PrimaryNeedsFromAws: S.optional(__S(32, __c4, 0)),
          NationalSecurity: S.optional(S.String),
          PartnerOpportunityIdentifier: S.optional(S.String),
          Customer: S.optional(__S(48, __c6, 0)),
          Project: S.optional(__S(50, __c6, 2)),
          OpportunityType: S.optional(S.String),
          Marketing: S.optional(__S(51, __c6, 3)),
          SoftwareRevenue: S.optional(__S(53, __c6, 5)),
          ClientToken: S.String.pipe(T.IdempotencyToken()),
          LifeCycle: S.optional(__S(56, __c7, 0)),
          Origin: S.optional(S.String),
          OpportunityTeam: S.optional(__S(47, __c5, 7)),
          Tags: S.optional(__S(58, __c7, 2)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateOpportunity" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateOpportunityRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Id: S.String,
          PartnerOpportunityIdentifier: S.optional(S.String),
          LastModifiedDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "CreateOpportunityResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          EngagementIdentifier: S.String,
          ResourceType: S.String,
          ResourceIdentifier: S.String,
          ResourceSnapshotTemplateIdentifier: S.String,
          ClientToken: S.String.pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateResourceSnapshot" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateResourceSnapshotRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Arn: S.optional(S.String), Revision: S.optional(S.Number) }),
      ).annotate({
        identifier: "CreateResourceSnapshotResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          ClientToken: S.String.pipe(T.IdempotencyToken()),
          EngagementIdentifier: S.String,
          ResourceType: S.String,
          ResourceIdentifier: S.String,
          ResourceSnapshotTemplateIdentifier: S.String,
          Tags: S.optional(__S(58, __c7, 2)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateResourceSnapshotJob" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateResourceSnapshotJobRequest",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Id: S.optional(S.String), Arn: S.optional(S.String) }),
      ).annotate({
        identifier: "CreateResourceSnapshotJobResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Catalog: S.String, ResourceSnapshotJobIdentifier: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteResourceSnapshotJob" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteResourceSnapshotJobRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          OpportunityIdentifier: S.String,
          RelatedEntityType: S.String,
          RelatedEntityIdentifier: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DisassociateOpportunity" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateOpportunityRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DisassociateOpportunityResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Catalog: S.String, RelatedOpportunityIdentifier: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetAwsOpportunitySummary" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetAwsOpportunitySummaryRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          TargetCloseDate: S.optional(S.String),
          ClosedLostReason: S.optional(S.String),
          Stage: S.optional(S.String),
          NextSteps: S.optional(SensitiveString),
          NextStepsHistory: S.optional(__S(55, __c6, 7)),
        }),
      ).annotate({ identifier: "AwsOpportunityLifeCycle" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Email: S.optional(SensitiveString),
          FirstName: S.optional(SensitiveString),
          LastName: S.optional(SensitiveString),
          BusinessTitle: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsTeamMember" });
    case 7:
      return S.Array(__S(70, __c8, 6));
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ SensitiveString.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({ Description: S.String, SavingsAmount: SensitiveString }),
      ).annotate({ identifier: "AwsProductOptimization" });
    case 2:
      return S.Array(__S(73, __c9, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          ProductCode: S.String,
          ServiceCode: S.optional(S.String),
          Categories: __S(16, __c2, 0),
          Amount: S.optional(SensitiveString),
          OptimizedAmount: S.optional(SensitiveString),
          PotentialSavingsAmount: S.optional(SensitiveString),
          Optimizations: __S(74, __c9, 2),
        }),
      ).annotate({ identifier: "AwsProductDetails" });
    case 4:
      return S.Array(__S(75, __c9, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          CurrencyCode: S.String,
          Frequency: S.String,
          TotalAmount: S.optional(SensitiveString),
          TotalOptimizedAmount: S.optional(SensitiveString),
          TotalPotentialSavingsAmount: S.optional(SensitiveString),
          TotalAmountByCategory: __S(72, __c9, 0),
          AwsProducts: __S(76, __c9, 4),
        }),
      ).annotate({ identifier: "AwsProductInsights" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Partner: S.optional(__S(77, __c9, 5)), AWS: S.optional(__S(77, __c9, 5)) }),
      ).annotate({
        identifier: "AwsProductsSpendInsightsBySource",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Score: S.optional(S.Number), Trend: S.optional(S.String) }),
      ).annotate({ identifier: "OpportunityQuality" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Type: S.String,
          Details: S.String,
          Attributes: S.optional(__S(80, __c10, 0)),
        }),
      ).annotate({ identifier: "Recommendation" });
    case 2:
      return S.Array(__S(81, __c10, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          NextBestActions: S.optional(S.String),
          EngagementScore: S.optional(S.String),
          AwsProductsSpendInsightsBySource: S.optional(__S(78, __c9, 6)),
          OpportunityQuality: S.optional(__S(79, __c9, 7)),
          Recommendations: S.optional(__S(82, __c10, 2)),
        }),
      ).annotate({ identifier: "AwsOpportunityInsights" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AwsProducts: S.optional(__S(16, __c2, 0)),
          Solutions: S.optional(__S(16, __c2, 0)),
          AwsMarketplaceSolutions: S.optional(__S(16, __c2, 0)),
          AwsMarketplaceProducts: S.optional(__S(16, __c2, 0)),
        }),
      ).annotate({
        identifier: "AwsOpportunityRelatedEntities",
      });
    case 5:
      return S.suspend(() => S.Struct({ Contacts: S.optional(__S(47, __c5, 7)) })).annotate({
        identifier: "AwsOpportunityCustomer",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ExpectedCustomerSpend: S.optional(__S(34, __c4, 2)),
          AwsPartition: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsOpportunityProject" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Value: S.optional(__S(52, __c6, 4)),
          Discount: S.optional(S.String),
          EffectiveDate: S.optional(S.String),
          ExpirationDate: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsSoftwareRevenue" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RelatedOpportunityId: S.optional(S.String),
          Origin: S.optional(S.String),
          InvolvementType: S.optional(S.String),
          Visibility: S.optional(S.String),
          LifeCycle: S.optional(__S(69, __c8, 5)),
          OpportunityTeam: S.optional(__S(71, __c8, 7)),
          Insights: S.optional(__S(83, __c10, 3)),
          InvolvementTypeChangeReason: S.optional(S.String),
          RelatedEntityIds: S.optional(__S(84, __c10, 4)),
          Customer: S.optional(__S(85, __c10, 5)),
          Project: S.optional(__S(86, __c10, 6)),
          CosellMotion: S.optional(S.String),
          SoftwareRevenue: S.optional(__S(87, __c10, 7)),
          Catalog: S.String,
        }),
      ).annotate({
        identifier: "GetAwsOpportunitySummaryResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Catalog: S.String, Identifier: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetEngagement" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetEngagementRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Arn: S.optional(S.String),
          Title: S.optional(S.String),
          Description: S.optional(S.String),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          CreatedBy: S.optional(SensitiveString),
          MemberCount: S.optional(S.Number),
          ModifiedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ModifiedBy: S.optional(SensitiveString),
          Contexts: S.optional(__S(23, __c2, 7)),
        }),
      ).annotate({ identifier: "GetEngagementResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Catalog: S.String, Identifier: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetEngagementInvitation" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetEngagementInvitationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ CompanyName: S.optional(SensitiveString), WebsiteUrl: S.optional(S.String) }),
      ).annotate({ identifier: "EngagementMemberSummary" });
    case 5:
      return S.Array(__S(92, __c11, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Customer: S.optional(__S(17, __c2, 1)),
          Insights: S.optional(__S(18, __c2, 2)),
        }),
      ).annotate({
        identifier: "InvitationProspectingResultAws",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ProspectingResultAws: S.optional(__S(94, __c11, 6)),
          LeadInsights: S.optional(__S(9, __c1, 1)),
        }),
      ).annotate({ identifier: "EnrichmentContext" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          PayloadType: S.optional(S.String),
          Id: S.String,
          EngagementId: S.optional(S.String),
          EngagementTitle: S.optional(S.String),
          Status: S.optional(S.String),
          InvitationDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ExpirationDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          SenderAwsAccountId: S.optional(SensitiveString),
          SenderCompanyName: S.optional(S.String),
          Receiver: S.optional(__S(29, __c3, 5)),
          Catalog: S.String,
          RejectionReason: S.optional(S.String),
          Payload: S.optional(__S(40, __c5, 0)),
          InvitationMessage: S.optional(SensitiveString),
          EngagementDescription: S.optional(S.String),
          ExistingMembers: S.optional(__S(93, __c11, 5)),
          EnrichmentContext: S.optional(__S(95, __c11, 7)),
        }),
      ).annotate({
        identifier: "GetEngagementInvitationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Catalog: S.String, Identifier: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetOpportunity" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetOpportunityRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AwsMarketplaceOffers: S.optional(__S(16, __c2, 0)),
          AwsMarketplaceOfferSets: S.optional(__S(16, __c2, 0)),
          Solutions: S.optional(__S(16, __c2, 0)),
          AwsProducts: S.optional(__S(16, __c2, 0)),
          AwsMarketplaceSolutions: S.optional(__S(16, __c2, 0)),
          AwsMarketplaceProducts: S.optional(__S(16, __c2, 0)),
        }),
      ).annotate({ identifier: "RelatedEntityIdentifiers" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          PrimaryNeedsFromAws: S.optional(__S(32, __c4, 0)),
          NationalSecurity: S.optional(S.String),
          PartnerOpportunityIdentifier: S.optional(S.String),
          Customer: S.optional(__S(48, __c6, 0)),
          Project: S.optional(__S(50, __c6, 2)),
          OpportunityType: S.optional(S.String),
          Marketing: S.optional(__S(51, __c6, 3)),
          SoftwareRevenue: S.optional(__S(53, __c6, 5)),
          Id: S.String,
          Arn: S.optional(S.String),
          LastModifiedDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          CreatedDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          RelatedEntityIdentifiers: __S(98, __c12, 2),
          LifeCycle: S.optional(__S(56, __c7, 0)),
          OpportunityTeam: S.optional(__S(47, __c5, 7)),
        }),
      ).annotate({ identifier: "GetOpportunityResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Catalog: S.String, TaskIdentifier: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetProspectingFromEngagementTask" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetProspectingFromEngagementTaskRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          EngagementIdentifier: S.String,
          EngagementContextId: S.optional(S.String),
          Status: S.String,
          ReasonCode: S.optional(S.String),
          Message: S.optional(S.String),
        }),
      ).annotate({
        identifier: "EngagementProspectingResult",
      });
    case 6:
      return S.Array(__S(101, __c12, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          TaskId: S.String,
          TaskArn: S.String,
          TaskName: S.String,
          StartTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Engagements: __S(102, __c12, 6),
        }),
      ).annotate({
        identifier: "GetProspectingFromEngagementTaskResponse",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          EngagementIdentifier: S.String,
          ResourceType: S.String,
          ResourceIdentifier: S.String,
          ResourceSnapshotTemplateIdentifier: S.String,
          Revision: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetResourceSnapshot" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetResourceSnapshotRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          TargetCloseDate: S.optional(S.String),
          ReviewStatus: S.optional(S.String),
          Stage: S.optional(S.String),
          NextSteps: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "LifeCycleForView" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DeliveryModels: S.optional(__S(32, __c4, 0)),
          ExpectedCustomerSpend: S.optional(__S(34, __c4, 2)),
          ExpectedContractDuration: S.optional(__S(49, __c6, 1)),
          CustomerUseCase: S.optional(S.String),
          SalesActivities: S.optional(__S(32, __c4, 0)),
          OtherSolutionDescription: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "ProjectView" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          OpportunityType: S.optional(S.String),
          Lifecycle: S.optional(__S(105, __c13, 1)),
          OpportunityTeam: S.optional(__S(47, __c5, 7)),
          PrimaryNeedsFromAws: S.optional(__S(32, __c4, 0)),
          Customer: S.optional(__S(48, __c6, 0)),
          Project: S.optional(__S(106, __c13, 2)),
          RelatedEntityIdentifiers: S.optional(__S(98, __c12, 2)),
        }),
      ).annotate({ identifier: "OpportunitySummaryView" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          RelatedOpportunityId: S.optional(S.String),
          Origin: S.optional(S.String),
          InvolvementType: S.optional(S.String),
          Visibility: S.optional(S.String),
          LifeCycle: S.optional(__S(69, __c8, 5)),
          OpportunityTeam: S.optional(__S(71, __c8, 7)),
          Insights: S.optional(__S(83, __c10, 3)),
          InvolvementTypeChangeReason: S.optional(S.String),
          RelatedEntityIds: S.optional(__S(84, __c10, 4)),
          Customer: S.optional(__S(85, __c10, 5)),
          Project: S.optional(__S(86, __c10, 6)),
          CosellMotion: S.optional(S.String),
          SoftwareRevenue: S.optional(__S(87, __c10, 7)),
        }),
      ).annotate({
        identifier: "AwsOpportunitySummaryFullView",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ OpportunitySummary: __S(107, __c13, 3) }),
        /*@__PURE__*/ S.Struct({ AwsOpportunitySummaryFullView: __S(108, __c13, 4) }),
      ]);
    case 6:
      return S.Array(SensitiveString);
    case 7:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          Arn: S.optional(S.String),
          CreatedBy: S.optional(SensitiveString),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EngagementId: S.optional(S.String),
          ResourceType: S.optional(S.String),
          ResourceId: S.optional(S.String),
          ResourceSnapshotTemplateName: S.optional(S.String),
          Revision: S.optional(S.Number),
          Payload: S.optional(__S(109, __c13, 5)),
          TargetMemberAccounts: S.optional(__S(110, __c13, 6)),
        }),
      ).annotate({
        identifier: "GetResourceSnapshotResponse",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Catalog: S.String, ResourceSnapshotJobIdentifier: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetResourceSnapshotJob" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetResourceSnapshotJobRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          Id: S.optional(S.String),
          Arn: S.optional(S.String),
          EngagementId: S.optional(S.String),
          ResourceType: S.optional(S.String),
          ResourceId: S.optional(S.String),
          ResourceArn: S.optional(S.String),
          ResourceSnapshotTemplateName: S.optional(S.String),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Status: S.optional(S.String),
          LastSuccessfulExecutionDate: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          LastFailure: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetResourceSnapshotJobResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Catalog: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetSellingSystemSettings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSellingSystemSettingsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Catalog: S.String, ResourceSnapshotJobRoleArn: S.optional(S.String) }),
      ).annotate({
        identifier: "GetSellingSystemSettingsResponse",
      });
    case 4:
      return S.suspend(() => S.Struct({ SortOrder: S.String, SortBy: S.String })).annotate({
        identifier: "ListTasksSortBase",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          Sort: S.optional(__S(116, __c14, 4)),
          Catalog: S.String,
          TaskStatus: S.optional(__S(32, __c4, 0)),
          OpportunityIdentifier: S.optional(__S(16, __c2, 0)),
          EngagementInvitationIdentifier: S.optional(__S(16, __c2, 0)),
          TaskIdentifier: S.optional(__S(16, __c2, 0)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListEngagementByAcceptingInvitationTasks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListEngagementByAcceptingInvitationTasksRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TaskId: S.optional(S.String),
          TaskArn: S.optional(S.String),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          TaskStatus: S.optional(S.String),
          Message: S.optional(S.String),
          ReasonCode: S.optional(S.String),
          OpportunityId: S.optional(S.String),
          ResourceSnapshotJobId: S.optional(S.String),
          EngagementInvitationId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListEngagementByAcceptingInvitationTaskSummary",
      });
    case 7:
      return S.Array(__S(118, __c14, 6));
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TaskSummaries: S.optional(__S(119, __c14, 7)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListEngagementByAcceptingInvitationTasksResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          Sort: S.optional(__S(116, __c14, 4)),
          Catalog: S.String,
          TaskStatus: S.optional(__S(32, __c4, 0)),
          TaskIdentifier: S.optional(__S(16, __c2, 0)),
          OpportunityIdentifier: S.optional(__S(16, __c2, 0)),
          EngagementIdentifier: S.optional(__S(16, __c2, 0)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListEngagementFromOpportunityTasks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListEngagementFromOpportunityTasksRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TaskId: S.optional(S.String),
          TaskArn: S.optional(S.String),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          TaskStatus: S.optional(S.String),
          Message: S.optional(S.String),
          ReasonCode: S.optional(S.String),
          OpportunityId: S.optional(S.String),
          ResourceSnapshotJobId: S.optional(S.String),
          EngagementId: S.optional(S.String),
          EngagementInvitationId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListEngagementFromOpportunityTaskSummary",
      });
    case 3:
      return S.Array(__S(122, __c15, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          TaskSummaries: S.optional(__S(123, __c15, 3)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListEngagementFromOpportunityTasksResponse",
      });
    case 5:
      return S.suspend(() => S.Struct({ SortOrder: S.String, SortBy: S.String })).annotate({
        identifier: "OpportunityEngagementInvitationSort",
      });
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          Sort: S.optional(__S(125, __c15, 5)),
          PayloadType: S.optional(__S(126, __c15, 6)),
          ParticipantType: S.String,
          Status: S.optional(__S(32, __c4, 0)),
          EngagementIdentifier: S.optional(__S(16, __c2, 0)),
          SenderAwsAccountId: S.optional(__S(110, __c13, 6)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListEngagementInvitations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListEngagementInvitationsRequest",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          PayloadType: S.optional(S.String),
          Id: S.String,
          EngagementId: S.optional(S.String),
          EngagementTitle: S.optional(S.String),
          Status: S.optional(S.String),
          InvitationDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ExpirationDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          SenderAwsAccountId: S.optional(SensitiveString),
          SenderCompanyName: S.optional(S.String),
          Receiver: S.optional(__S(29, __c3, 5)),
          Catalog: S.String,
          ParticipantType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "EngagementInvitationSummary",
      });
    case 1:
      return S.Array(__S(128, __c16, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          EngagementInvitationSummaries: S.optional(__S(129, __c16, 1)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListEngagementInvitationsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          Identifier: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListEngagementMembers" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListEngagementMembersRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          CompanyName: S.optional(SensitiveString),
          WebsiteUrl: S.optional(S.String),
          AccountId: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "EngagementMember" });
    case 5:
      return S.Array(__S(132, __c16, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ EngagementMemberList: __S(133, __c16, 5), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListEngagementMembersResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          EngagementIdentifier: S.optional(S.String),
          ResourceType: S.optional(S.String),
          ResourceIdentifier: S.optional(S.String),
          CreatedBy: S.optional(SensitiveString),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListEngagementResourceAssociations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListEngagementResourceAssociationsRequest",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          EngagementId: S.optional(S.String),
          ResourceType: S.optional(S.String),
          ResourceId: S.optional(S.String),
          CreatedBy: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "EngagementResourceAssociationSummary",
      });
    case 1:
      return S.Array(__S(136, __c17, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          EngagementResourceAssociationSummaries: __S(137, __c17, 1),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListEngagementResourceAssociationsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          CreatedBy: S.optional(__S(110, __c13, 6)),
          ExcludeCreatedBy: S.optional(__S(110, __c13, 6)),
          ContextTypes: S.optional(__S(32, __c4, 0)),
          ExcludeContextTypes: S.optional(__S(32, __c4, 0)),
          Sort: S.optional(__S(116, __c14, 4)),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          EngagementIdentifier: S.optional(__S(16, __c2, 0)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListEngagements" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListEngagementsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Id: S.optional(S.String),
          Title: S.optional(S.String),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          CreatedBy: S.optional(SensitiveString),
          MemberCount: S.optional(S.Number),
          ModifiedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ModifiedBy: S.optional(SensitiveString),
          ContextTypes: S.optional(__S(32, __c4, 0)),
        }),
      ).annotate({ identifier: "EngagementSummary" });
    case 5:
      return S.Array(__S(140, __c17, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ EngagementSummaryList: __S(141, __c17, 5), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListEngagementsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AfterLastModifiedDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          BeforeLastModifiedDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "LastModifiedDate" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AfterCreatedDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          BeforeCreatedDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "CreatedDateFilter" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AfterTargetCloseDate: S.optional(S.String),
          BeforeTargetCloseDate: S.optional(S.String),
        }),
      ).annotate({ identifier: "TargetCloseDateFilter" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          Sort: S.optional(__S(116, __c14, 4)),
          LastModifiedDate: S.optional(__S(143, __c17, 7)),
          Identifier: S.optional(__S(16, __c2, 0)),
          LifeCycleStage: S.optional(__S(32, __c4, 0)),
          LifeCycleReviewStatus: S.optional(__S(32, __c4, 0)),
          CustomerCompanyName: S.optional(__S(16, __c2, 0)),
          CreatedDate: S.optional(__S(144, __c18, 0)),
          TargetCloseDate: S.optional(__S(145, __c18, 1)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListOpportunities" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListOpportunitiesRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Stage: S.optional(S.String),
          ClosedLostReason: S.optional(S.String),
          NextSteps: S.optional(SensitiveString),
          TargetCloseDate: S.optional(S.String),
          ReviewStatus: S.optional(S.String),
          ReviewComments: S.optional(S.String),
          ReviewStatusReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "LifeCycleSummary" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          City: S.optional(SensitiveString),
          PostalCode: S.optional(SensitiveString),
          StateOrRegion: S.optional(SensitiveString),
          CountryCode: S.optional(S.String),
        }),
      ).annotate({ identifier: "AddressSummary" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Industry: S.optional(S.String),
          OtherIndustry: S.optional(S.String),
          CompanyName: SensitiveString,
          WebsiteUrl: S.optional(SensitiveString),
          Address: S.optional(__S(148, __c18, 4)),
        }),
      ).annotate({ identifier: "AccountSummary" });
    case 6:
      return S.suspend(() => S.Struct({ Account: S.optional(__S(149, __c18, 5)) })).annotate({
        identifier: "CustomerSummary",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DeliveryModels: S.optional(__S(32, __c4, 0)),
          ExpectedCustomerSpend: S.optional(__S(34, __c4, 2)),
          ExpectedContractDuration: S.optional(__S(49, __c6, 1)),
        }),
      ).annotate({ identifier: "ProjectSummary" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          Id: S.optional(S.String),
          Arn: S.optional(S.String),
          PartnerOpportunityIdentifier: S.optional(S.String),
          OpportunityType: S.optional(S.String),
          LastModifiedDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          CreatedDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          LifeCycle: S.optional(__S(147, __c18, 3)),
          Customer: S.optional(__S(150, __c18, 6)),
          Project: S.optional(__S(151, __c18, 7)),
        }),
      ).annotate({ identifier: "OpportunitySummary" });
    case 1:
      return S.Array(__S(152, __c19, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ OpportunitySummaries: __S(153, __c19, 1), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListOpportunitiesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          Sort: S.optional(__S(116, __c14, 4)),
          Catalog: S.String,
          TaskStatus: S.optional(__S(32, __c4, 0)),
          TaskIdentifier: S.optional(__S(16, __c2, 0)),
          OpportunityIdentifier: S.optional(__S(16, __c2, 0)),
          EngagementIdentifier: S.optional(__S(16, __c2, 0)),
          ContextIdentifier: S.optional(__S(16, __c2, 0)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListOpportunityFromEngagementTasks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListOpportunityFromEngagementTasksRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TaskId: S.optional(S.String),
          TaskArn: S.optional(S.String),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          TaskStatus: S.optional(S.String),
          Message: S.optional(S.String),
          ReasonCode: S.optional(S.String),
          OpportunityId: S.optional(S.String),
          ResourceSnapshotJobId: S.optional(S.String),
          EngagementId: S.optional(S.String),
          ContextId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListOpportunityFromEngagementTaskSummary",
      });
    case 5:
      return S.Array(__S(156, __c19, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          TaskSummaries: S.optional(__S(157, __c19, 5)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListOpportunityFromEngagementTasksResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          TaskIdentifier: S.optional(__S(16, __c2, 0)),
          TaskName: S.optional(__S(16, __c2, 0)),
          StartAfter: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          StartBefore: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Sort: S.optional(__S(125, __c15, 5)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListProspectingFromEngagementTasks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListProspectingFromEngagementTasksRequest",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TaskId: S.String,
          TaskArn: S.String,
          TaskName: S.String,
          StartTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          TotalEngagementCount: S.Number,
          CompletedEngagementCount: S.Number,
          FailedEngagementCount: S.Number,
        }),
      ).annotate({ identifier: "ProspectingTaskSummary" });
    case 1:
      return S.Array(__S(160, __c20, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), TaskSummaries: __S(161, __c20, 1) }),
      ).annotate({
        identifier: "ListProspectingFromEngagementTasksResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ SortBy: S.optional(S.String), SortOrder: S.optional(S.String) }),
      ).annotate({ identifier: "SortObject" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          EngagementIdentifier: S.optional(S.String),
          Status: S.optional(S.String),
          Sort: S.optional(__S(163, __c20, 3)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListResourceSnapshotJobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListResourceSnapshotJobsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Arn: S.optional(S.String),
          EngagementId: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ResourceSnapshotJobSummary",
      });
    case 6:
      return S.Array(__S(165, __c20, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          ResourceSnapshotJobSummaries: __S(166, __c20, 6),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListResourceSnapshotJobsResponse",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          EngagementIdentifier: S.String,
          ResourceType: S.optional(S.String),
          ResourceIdentifier: S.optional(S.String),
          ResourceSnapshotTemplateIdentifier: S.optional(S.String),
          CreatedBy: S.optional(SensitiveString),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListResourceSnapshots" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListResourceSnapshotsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Revision: S.optional(S.Number),
          ResourceType: S.optional(S.String),
          ResourceId: S.optional(S.String),
          ResourceSnapshotTemplateName: S.optional(S.String),
          CreatedBy: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "ResourceSnapshotSummary" });
    case 2:
      return S.Array(__S(169, __c21, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          ResourceSnapshotSummaries: __S(170, __c21, 2),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListResourceSnapshotsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          Sort: S.optional(__S(116, __c14, 4)),
          Status: S.optional(__S(32, __c4, 0)),
          Identifier: S.optional(__S(16, __c2, 0)),
          Category: S.optional(__S(16, __c2, 0)),
          AwsMarketplaceSolutionArn: S.optional(__S(16, __c2, 0)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListSolutions" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListSolutionsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          Id: S.String,
          Arn: S.optional(S.String),
          Name: S.String,
          Status: S.String,
          Category: S.String,
          CreatedDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          AwsMarketplaceSolutionArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "SolutionBase" });
    case 6:
      return S.Array(__S(173, __c21, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ SolutionSummaries: __S(174, __c21, 6), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListSolutionsResponse" });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
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
    case 1:
      return S.suspend(() => S.Struct({ Tags: __S(58, __c7, 2) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          ResourceSnapshotJobRoleIdentifier: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/PutSellingSystemSettings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutSellingSystemSettingsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          Identifier: S.String,
          RejectionReason: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/RejectEngagementInvitation" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RejectEngagementInvitationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          ClientToken: S.String.pipe(T.IdempotencyToken()),
          Identifier: S.String,
          Tags: S.optional(__S(58, __c7, 2)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/StartEngagementByAcceptingInvitationTask" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartEngagementByAcceptingInvitationTaskRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ InvolvementType: S.String, Visibility: S.optional(S.String) }),
      ).annotate({ identifier: "AwsSubmission" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          ClientToken: S.String.pipe(T.IdempotencyToken()),
          Identifier: S.String,
          AwsSubmission: __S(181, __c22, 5),
          Tags: S.optional(__S(58, __c7, 2)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/StartEngagementFromOpportunityTask" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartEngagementFromOpportunityTaskRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          ClientToken: S.String.pipe(T.IdempotencyToken()),
          Identifier: S.String,
          ContextIdentifier: S.String,
          Tags: S.optional(__S(58, __c7, 2)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/StartOpportunityFromEngagementTask" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartOpportunityFromEngagementTaskRequest",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          Identifiers: __S(16, __c2, 0),
          TaskName: S.String,
          ClientToken: S.String.pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/StartProspectingFromEngagementTask" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartProspectingFromEngagementTaskRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Identifiers: __S(16, __c2, 0),
          TaskName: S.String,
          Message: S.optional(S.String),
          ReasonCode: S.optional(S.String),
          StartTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          TaskId: S.optional(S.String),
          TaskArn: S.optional(S.String),
          TaskStatus: S.String,
        }),
      ).annotate({
        identifier: "StartProspectingFromEngagementTaskResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Catalog: S.String, ResourceSnapshotJobIdentifier: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/StartResourceSnapshotJob" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartResourceSnapshotJobRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Catalog: S.String, ResourceSnapshotJobIdentifier: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/StopResourceSnapshotJob" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StopResourceSnapshotJobRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          Identifier: S.String,
          InvolvementType: S.String,
          Visibility: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/SubmitOpportunity" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SubmitOpportunityRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, Tags: __S(58, __c7, 2) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/TagResource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, TagKeys: __S(16, __c2, 0) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/UntagResource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          QualificationStatus: S.optional(S.String),
          Customer: __S(11, __c1, 3),
          Interaction: S.optional(__S(13, __c1, 5)),
          Insights: S.optional(__S(9, __c1, 1)),
        }),
      ).annotate({ identifier: "UpdateLeadContext" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ Lead: __S(191, __c23, 7) }),
        /*@__PURE__*/ S.Struct({ CustomerProject: __S(8, __c1, 0) }),
        /*@__PURE__*/ S.Struct({ ProspectingResult: __S(20, __c2, 4) }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          EngagementIdentifier: S.String,
          ContextIdentifier: S.String,
          EngagementLastModifiedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          Type: S.String,
          Payload: __S(192, __c24, 0),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateEngagementContext" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateEngagementContextRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          EngagementId: S.String,
          EngagementArn: S.String,
          EngagementLastModifiedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ContextId: S.String,
        }),
      ).annotate({
        identifier: "UpdateEngagementContextResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          PrimaryNeedsFromAws: S.optional(__S(32, __c4, 0)),
          NationalSecurity: S.optional(S.String),
          PartnerOpportunityIdentifier: S.optional(S.String),
          Customer: S.optional(__S(48, __c6, 0)),
          Project: S.optional(__S(50, __c6, 2)),
          OpportunityType: S.optional(S.String),
          Marketing: S.optional(__S(51, __c6, 3)),
          SoftwareRevenue: S.optional(__S(53, __c6, 5)),
          LastModifiedDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          Identifier: S.String,
          LifeCycle: S.optional(__S(56, __c7, 0)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateOpportunity" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateOpportunityRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Id: S.String,
          LastModifiedDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "UpdateOpportunityResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          FieldName: S.optional(S.String),
          Message: S.String,
          Code: S.String,
        }),
      ).annotate({ identifier: "ValidationExceptionError" });
    case 6:
      return S.Array(__S(197, __c24, 5));
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
