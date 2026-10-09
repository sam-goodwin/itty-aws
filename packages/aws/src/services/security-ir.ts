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
  sdkId: "Security IR",
  serviceShapeName: "SecurityIncidentResponse",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "security-ir" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-05-10");
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
            `https://security-ir-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        return e(
          `https://security-ir.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
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
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: /*@__PURE__*/ S.suspend(() => ValidationExceptionReason).annotate({
        identifier: "ValidationExceptionReason",
      }),
      fieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ValidationExceptionFieldList).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type MembershipId = string;
export type AWSAccountId = string;
export type AWSAccountIds = string[];
const AWSAccountIds = /*@__PURE__*/ __L.at(__c0, 0);
export interface BatchGetMemberAccountDetailsRequest {
  membershipId: string;
  accountIds: string[];
}
const BatchGetMemberAccountDetailsRequest = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<BatchGetMemberAccountDetailsRequest>;
export type MembershipAccountRelationshipStatus =
  | "Associated"
  | "Disassociated"
  | "Unassociated"
  | (string & {});
const MembershipAccountRelationshipStatus = S.String;

export type MembershipAccountRelationshipType = "Organization" | "Unrelated" | (string & {});
const MembershipAccountRelationshipType = S.String;

export interface GetMembershipAccountDetailItem {
  accountId?: string;
  relationshipStatus?: MembershipAccountRelationshipStatus;
  relationshipType?: MembershipAccountRelationshipType;
}
const GetMembershipAccountDetailItem = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<GetMembershipAccountDetailItem>;
export type GetMembershipAccountDetailItems = GetMembershipAccountDetailItem[];
const GetMembershipAccountDetailItems = /*@__PURE__*/ __L.at(__c0, 3);
export interface GetMembershipAccountDetailError {
  accountId: string;
  error: string;
  message: string;
}
const GetMembershipAccountDetailError = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<GetMembershipAccountDetailError>;
export type GetMembershipAccountDetailErrors = GetMembershipAccountDetailError[];
const GetMembershipAccountDetailErrors = /*@__PURE__*/ __L.at(__c0, 5);
export interface BatchGetMemberAccountDetailsResponse {
  items?: GetMembershipAccountDetailItem[];
  errors?: GetMembershipAccountDetailError[];
}
const BatchGetMemberAccountDetailsResponse = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<BatchGetMemberAccountDetailsResponse>;
export interface CancelMembershipRequest {
  membershipId: string;
}
const CancelMembershipRequest = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<CancelMembershipRequest>;
export interface CancelMembershipResponse {
  membershipId: string;
}
const CancelMembershipResponse = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<CancelMembershipResponse>;
export type CaseId = string;
export interface CloseCaseRequest {
  caseId: string;
}
const CloseCaseRequest = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<CloseCaseRequest>;
export type CaseStatus =
  | "Submitted"
  | "Acknowledged"
  | "Detection and Analysis"
  | "Containment, Eradication and Recovery"
  | "Post-incident Activities"
  | "Ready to Close"
  | "Closed"
  | (string & {});
const CaseStatus = S.String;

export interface CloseCaseResponse {
  caseStatus?: CaseStatus;
  closedDate?: Date;
}
const CloseCaseResponse = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<CloseCaseResponse>;
export type ResolverType = "AWS" | "Self" | (string & {});
const ResolverType = S.String;

export type CaseTitle = string | redacted.Redacted<string>;
export type CaseDescription = string | redacted.Redacted<string>;
export type EngagementType = "Security Incident" | "Investigation" | (string & {});
const EngagementType = S.String;

export type ImpactedAccounts = string[];
const ImpactedAccounts = AWSAccountIds as any as S.Schema<ImpactedAccounts>;
export type EmailAddress = string | redacted.Redacted<string>;
export type PersonName = string | redacted.Redacted<string>;
export type JobTitle = string | redacted.Redacted<string>;
export interface Watcher {
  email: string | redacted.Redacted<string>;
  name?: string | redacted.Redacted<string>;
  jobTitle?: string | redacted.Redacted<string>;
}
const Watcher = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<Watcher>;
export type Watchers = Watcher[];
const Watchers = /*@__PURE__*/ __L.at(__c1, 4);
export type IPAddress = string | redacted.Redacted<string>;
export type UserAgent = string;
export interface ThreatActorIp {
  ipAddress: string | redacted.Redacted<string>;
  userAgent?: string;
}
const ThreatActorIp = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<ThreatActorIp>;
export type ThreatActorIpList = ThreatActorIp[];
const ThreatActorIpList = /*@__PURE__*/ __L.at(__c1, 6);
export type AwsService = string;
export type ImpactedServicesList = string[];
const ImpactedServicesList = AWSAccountIds as any as S.Schema<ImpactedServicesList>;
export type AwsRegion =
  | "af-south-1"
  | "ap-east-1"
  | "ap-east-2"
  | "ap-northeast-1"
  | "ap-northeast-2"
  | "ap-northeast-3"
  | "ap-south-1"
  | "ap-south-2"
  | "ap-southeast-1"
  | "ap-southeast-2"
  | "ap-southeast-3"
  | "ap-southeast-4"
  | "ap-southeast-5"
  | "ap-southeast-6"
  | "ap-southeast-7"
  | "ca-central-1"
  | "ca-west-1"
  | "cn-north-1"
  | "cn-northwest-1"
  | "eu-central-1"
  | "eu-central-2"
  | "eu-north-1"
  | "eu-south-1"
  | "eu-south-2"
  | "eu-west-1"
  | "eu-west-2"
  | "eu-west-3"
  | "il-central-1"
  | "me-central-1"
  | "me-south-1"
  | "mx-central-1"
  | "sa-east-1"
  | "us-east-1"
  | "us-east-2"
  | "us-west-1"
  | "us-west-2"
  | (string & {});
const AwsRegion = S.String;

export interface ImpactedAwsRegion {
  region: AwsRegion;
}
const ImpactedAwsRegion = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<ImpactedAwsRegion>;
export type ImpactedAwsRegionList = ImpactedAwsRegion[];
const ImpactedAwsRegionList = /*@__PURE__*/ __L.at(__c2, 0);
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = /*@__PURE__*/ __L.at(__c2, 1);
export interface CreateCaseRequest {
  clientToken?: string;
  resolverType: ResolverType;
  title: string | redacted.Redacted<string>;
  description: string | redacted.Redacted<string>;
  engagementType: EngagementType;
  reportedIncidentStartDate: Date;
  impactedAccounts: string[];
  watchers: Watcher[];
  threatActorIpAddresses?: ThreatActorIp[];
  impactedServices?: string[];
  impactedAwsRegions?: ImpactedAwsRegion[];
  tags?: { [key: string]: string | undefined };
}
const CreateCaseRequest = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<CreateCaseRequest>;
export interface CreateCaseResponse {
  caseId: string;
}
const CreateCaseResponse = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<CreateCaseResponse>;
export type CommentBody = string | redacted.Redacted<string>;
export interface CreateCaseCommentRequest {
  caseId: string;
  clientToken?: string;
  body: string | redacted.Redacted<string>;
}
const CreateCaseCommentRequest = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<CreateCaseCommentRequest>;
export type CommentId = string;
export interface CreateCaseCommentResponse {
  commentId: string;
}
const CreateCaseCommentResponse = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<CreateCaseCommentResponse>;
export type MembershipName = string | redacted.Redacted<string>;
export type IncidentResponderName = string | redacted.Redacted<string>;
export type CommunicationType =
  | "Case Created"
  | "Case Updated"
  | "Case Acknowledged"
  | "Case Closed"
  | "Case Updated To Service Managed"
  | "Case Status Updated"
  | "Case Pending Customer Action Reminder"
  | "Case Attachment Url Uploaded"
  | "Case Comment Added"
  | "Case Comment Updated"
  | "Membership Created"
  | "Membership Updated"
  | "Membership Cancelled"
  | "Register Delegated Administrator"
  | "Deregister Delegated Administrator"
  | "Disable AWS Service Access"
  | (string & {});
const CommunicationType = S.String;

export type CommunicationPreferences = CommunicationType[];
const CommunicationPreferences = /*@__PURE__*/ __L.at(__c2, 6);
export interface IncidentResponder {
  name: string | redacted.Redacted<string>;
  jobTitle: string | redacted.Redacted<string>;
  email: string | redacted.Redacted<string>;
  communicationPreferences?: CommunicationType[];
}
const IncidentResponder = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<IncidentResponder>;
export type IncidentResponseTeam = IncidentResponder[];
const IncidentResponseTeam = /*@__PURE__*/ __L.at(__c3, 0);
export type OptInFeatureName = "Triage" | (string & {});
const OptInFeatureName = S.String;

export interface OptInFeature {
  featureName: OptInFeatureName;
  isEnabled: boolean;
}
const OptInFeature = /*@__PURE__*/ __L.at(__c3, 1) as any as S.Schema<OptInFeature>;
export type OptInFeatures = OptInFeature[];
const OptInFeatures = /*@__PURE__*/ __L.at(__c3, 2);
export interface CreateMembershipRequest {
  clientToken?: string;
  membershipName: string | redacted.Redacted<string>;
  incidentResponseTeam: IncidentResponder[];
  optInFeatures?: OptInFeature[];
  tags?: { [key: string]: string | undefined };
  coverEntireOrganization?: boolean;
}
const CreateMembershipRequest = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<CreateMembershipRequest>;
export interface CreateMembershipResponse {
  membershipId: string;
}
const CreateMembershipResponse =
  CancelMembershipResponse as any as S.Schema<CreateMembershipResponse>;
export interface GetCaseRequest {
  caseId: string;
}
const GetCaseRequest = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<GetCaseRequest>;
export type CaseArn = string;
export type PendingAction = "Customer" | "None" | (string & {});
const PendingAction = S.String;

export type ClosureCode =
  | "Investigation Completed"
  | "Not Resolved"
  | "False Positive"
  | "Duplicate"
  | (string & {});
const ClosureCode = S.String;

export type AttachmentId = string;
export type FileName = string | redacted.Redacted<string>;
export type CaseAttachmentStatus = "Verified" | "Failed" | "Pending" | (string & {});
const CaseAttachmentStatus = S.String;

export type PrincipalId = string;
export interface CaseAttachmentAttributes {
  attachmentId: string;
  fileName: string | redacted.Redacted<string>;
  attachmentStatus: CaseAttachmentStatus;
  creator: string;
  createdDate: Date;
}
const CaseAttachmentAttributes = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<CaseAttachmentAttributes>;
export type CaseAttachmentsList = CaseAttachmentAttributes[];
const CaseAttachmentsList = /*@__PURE__*/ __L.at(__c3, 6);
export interface CaseMetadataEntry {
  key: string;
  value: string;
}
const CaseMetadataEntry = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<CaseMetadataEntry>;
export type CaseMetadata = CaseMetadataEntry[];
const CaseMetadata = /*@__PURE__*/ __L.at(__c4, 0);
export interface GetCaseResponse {
  title?: string | redacted.Redacted<string>;
  caseArn?: string;
  description?: string | redacted.Redacted<string>;
  caseStatus?: CaseStatus;
  engagementType?: EngagementType;
  reportedIncidentStartDate?: Date;
  actualIncidentStartDate?: Date;
  impactedAwsRegions?: ImpactedAwsRegion[];
  threatActorIpAddresses?: ThreatActorIp[];
  pendingAction?: PendingAction;
  impactedAccounts?: string[];
  watchers?: Watcher[];
  createdDate?: Date;
  lastUpdatedDate?: Date;
  closureCode?: ClosureCode;
  resolverType?: ResolverType;
  impactedServices?: string[];
  caseAttachments?: CaseAttachmentAttributes[];
  closedDate?: Date;
  caseMetadata?: CaseMetadataEntry[];
}
const GetCaseResponse = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<GetCaseResponse>;
export interface GetCaseAttachmentDownloadUrlRequest {
  caseId: string;
  attachmentId: string;
}
const GetCaseAttachmentDownloadUrlRequest = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<GetCaseAttachmentDownloadUrlRequest>;
export type Url = string | redacted.Redacted<string>;
export interface GetCaseAttachmentDownloadUrlResponse {
  attachmentPresignedUrl: string | redacted.Redacted<string>;
}
const GetCaseAttachmentDownloadUrlResponse = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<GetCaseAttachmentDownloadUrlResponse>;
export type ContentLength = number;
export interface GetCaseAttachmentUploadUrlRequest {
  caseId: string;
  fileName: string | redacted.Redacted<string>;
  contentLength: number;
  clientToken?: string;
}
const GetCaseAttachmentUploadUrlRequest = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<GetCaseAttachmentUploadUrlRequest>;
export interface GetCaseAttachmentUploadUrlResponse {
  attachmentPresignedUrl: string | redacted.Redacted<string>;
}
const GetCaseAttachmentUploadUrlResponse =
  GetCaseAttachmentDownloadUrlResponse as any as S.Schema<GetCaseAttachmentUploadUrlResponse>;
export interface GetMembershipRequest {
  membershipId: string;
}
const GetMembershipRequest = /*@__PURE__*/ __L.at(__c4, 5) as any as S.Schema<GetMembershipRequest>;
export type MembershipArn = string;
export type MembershipStatus = "Active" | "Cancelled" | "Terminated" | (string & {});
const MembershipStatus = S.String;

export type CustomerType = "Standalone" | "Organization" | (string & {});
const CustomerType = S.String;

export type OrganizationalUnitId = string;
export type OrganizationalUnits = string[];
const OrganizationalUnits = AWSAccountIds as any as S.Schema<OrganizationalUnits>;
export interface MembershipAccountsConfigurations {
  coverEntireOrganization?: boolean;
  organizationalUnits?: string[];
}
const MembershipAccountsConfigurations = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<MembershipAccountsConfigurations>;
export interface GetMembershipResponse {
  membershipId: string;
  accountId?: string;
  region?: AwsRegion;
  membershipName?: string | redacted.Redacted<string>;
  membershipArn?: string;
  membershipStatus?: MembershipStatus;
  membershipActivationTimestamp?: Date;
  membershipDeactivationTimestamp?: Date;
  customerType?: CustomerType;
  numberOfAccountsCovered?: number;
  incidentResponseTeam?: IncidentResponder[];
  optInFeatures?: OptInFeature[];
  membershipAccountsConfigurations?: MembershipAccountsConfigurations;
}
const GetMembershipResponse = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<GetMembershipResponse>;
export interface ListCaseEditsRequest {
  nextToken?: string;
  maxResults?: number;
  caseId: string;
}
const ListCaseEditsRequest = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<ListCaseEditsRequest>;
export type CaseEditAction = string;
export type CaseEditMessage = string;
export interface CaseEditItem {
  eventTimestamp?: Date;
  principal?: string;
  action?: string;
  message?: string;
}
const CaseEditItem = /*@__PURE__*/ __L.at(__c5, 1) as any as S.Schema<CaseEditItem>;
export type CaseEditItems = CaseEditItem[];
const CaseEditItems = /*@__PURE__*/ __L.at(__c5, 2);
export interface ListCaseEditsResponse {
  nextToken?: string;
  items?: CaseEditItem[];
  total?: number;
}
const ListCaseEditsResponse = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<ListCaseEditsResponse>;
export interface ListCasesRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListCasesRequest = /*@__PURE__*/ __L.at(__c5, 4) as any as S.Schema<ListCasesRequest>;
export interface ListCasesItem {
  caseId: string;
  lastUpdatedDate?: Date;
  title?: string | redacted.Redacted<string>;
  caseArn?: string;
  engagementType?: EngagementType;
  caseStatus?: CaseStatus;
  createdDate?: Date;
  closedDate?: Date;
  resolverType?: ResolverType;
  pendingAction?: PendingAction;
}
const ListCasesItem = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<ListCasesItem>;
export type ListCasesItems = ListCasesItem[];
const ListCasesItems = /*@__PURE__*/ __L.at(__c5, 6);
export interface ListCasesResponse {
  nextToken?: string;
  items?: ListCasesItem[];
  total?: number;
}
const ListCasesResponse = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<ListCasesResponse>;
export interface ListCommentsRequest {
  nextToken?: string;
  maxResults?: number;
  caseId: string;
}
const ListCommentsRequest = /*@__PURE__*/ __L.at(__c6, 0) as any as S.Schema<ListCommentsRequest>;
export interface ListCommentsItem {
  commentId: string;
  createdDate?: Date;
  lastUpdatedDate?: Date;
  creator?: string;
  lastUpdatedBy?: string;
  body?: string | redacted.Redacted<string>;
}
const ListCommentsItem = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<ListCommentsItem>;
export type ListCommentsItems = ListCommentsItem[];
const ListCommentsItems = /*@__PURE__*/ __L.at(__c6, 2);
export interface ListCommentsResponse {
  nextToken?: string;
  items?: ListCommentsItem[];
  total?: number;
}
const ListCommentsResponse = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<ListCommentsResponse>;
export interface ListInvestigationsRequest {
  nextToken?: string;
  maxResults?: number;
  caseId: string;
}
const ListInvestigationsRequest = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<ListInvestigationsRequest>;
export type InvestigationId = string;
export type ActionType = "Evidence" | "Investigation" | "Summarization" | (string & {});
const ActionType = S.String;

export type InvestigationTitle = string;
export type InvestigationContent = string;
export type ExecutionStatus =
  | "Pending"
  | "InProgress"
  | "Waiting"
  | "Completed"
  | "Failed"
  | "Cancelled"
  | (string & {});
const ExecutionStatus = S.String;

export type UsefulnessRating = "USEFUL" | "NOT_USEFUL" | (string & {});
const UsefulnessRating = S.String;

export type FeedbackComment = string;
export interface InvestigationFeedback {
  usefulness?: UsefulnessRating;
  comment?: string;
  submittedAt?: Date;
}
const InvestigationFeedback = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<InvestigationFeedback>;
export interface InvestigationAction {
  investigationId: string;
  actionType: ActionType;
  title: string;
  content: string;
  status: ExecutionStatus;
  lastUpdated: Date;
  feedback?: InvestigationFeedback;
}
const InvestigationAction = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<InvestigationAction>;
export type InvestigationActionList = InvestigationAction[];
const InvestigationActionList = /*@__PURE__*/ __L.at(__c6, 7);
export interface ListInvestigationsResponse {
  nextToken?: string;
  investigationActions: InvestigationAction[];
}
const ListInvestigationsResponse = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<ListInvestigationsResponse>;
export interface ListMembershipsRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListMembershipsRequest = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<ListMembershipsRequest>;
export interface ListMembershipItem {
  membershipId: string;
  accountId?: string;
  region?: AwsRegion;
  membershipArn?: string;
  membershipStatus?: MembershipStatus;
}
const ListMembershipItem = /*@__PURE__*/ __L.at(__c7, 2) as any as S.Schema<ListMembershipItem>;
export type ListMembershipItems = ListMembershipItem[];
const ListMembershipItems = /*@__PURE__*/ __L.at(__c7, 3);
export interface ListMembershipsResponse {
  nextToken?: string;
  items?: ListMembershipItem[];
}
const ListMembershipsResponse = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<ListMembershipsResponse>;
export type Arn = string;
export interface ListTagsForResourceInput {
  resourceArn: string;
}
const ListTagsForResourceInput = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<ListTagsForResourceInput>;
export interface ListTagsForResourceOutput {
  tags: { [key: string]: string | undefined };
}
const ListTagsForResourceOutput = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<ListTagsForResourceOutput>;
export type ResultId = string;
export interface SendFeedbackRequest {
  caseId: string;
  resultId: string;
  usefulness: UsefulnessRating;
  comment?: string;
}
const SendFeedbackRequest = /*@__PURE__*/ __L.at(__c7, 7) as any as S.Schema<SendFeedbackRequest>;
export interface SendFeedbackResponse {}
const SendFeedbackResponse = /*@__PURE__*/ __L.at(__c8, 0) as any as S.Schema<SendFeedbackResponse>;
export interface TagResourceInput {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceInput = /*@__PURE__*/ __L.at(__c8, 1) as any as S.Schema<TagResourceInput>;
export interface TagResourceOutput {}
const TagResourceOutput = SendFeedbackResponse as any as S.Schema<TagResourceOutput>;
export type TagKeys = string[];
const TagKeys = AWSAccountIds as any as S.Schema<TagKeys>;
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceInput = /*@__PURE__*/ __L.at(__c8, 2) as any as S.Schema<UntagResourceInput>;
export interface UntagResourceOutput {}
const UntagResourceOutput = SendFeedbackResponse as any as S.Schema<UntagResourceOutput>;
export interface UpdateCaseRequest {
  caseId: string;
  title?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  reportedIncidentStartDate?: Date;
  actualIncidentStartDate?: Date;
  engagementType?: EngagementType;
  watchersToAdd?: Watcher[];
  watchersToDelete?: Watcher[];
  threatActorIpAddressesToAdd?: ThreatActorIp[];
  threatActorIpAddressesToDelete?: ThreatActorIp[];
  impactedServicesToAdd?: string[];
  impactedServicesToDelete?: string[];
  impactedAwsRegionsToAdd?: ImpactedAwsRegion[];
  impactedAwsRegionsToDelete?: ImpactedAwsRegion[];
  impactedAccountsToAdd?: string[];
  impactedAccountsToDelete?: string[];
  caseMetadata?: CaseMetadataEntry[];
}
const UpdateCaseRequest = /*@__PURE__*/ __L.at(__c8, 3) as any as S.Schema<UpdateCaseRequest>;
export interface UpdateCaseResponse {}
const UpdateCaseResponse = SendFeedbackResponse as any as S.Schema<UpdateCaseResponse>;
export interface UpdateCaseCommentRequest {
  caseId: string;
  commentId: string;
  body: string | redacted.Redacted<string>;
}
const UpdateCaseCommentRequest = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<UpdateCaseCommentRequest>;
export interface UpdateCaseCommentResponse {
  commentId: string;
  body?: string | redacted.Redacted<string>;
}
const UpdateCaseCommentResponse = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<UpdateCaseCommentResponse>;
export type SelfManagedCaseStatus =
  | "Submitted"
  | "Detection and Analysis"
  | "Containment, Eradication and Recovery"
  | "Post-incident Activities"
  | (string & {});
const SelfManagedCaseStatus = S.String;

export interface UpdateCaseStatusRequest {
  caseId: string;
  caseStatus: SelfManagedCaseStatus;
}
const UpdateCaseStatusRequest = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<UpdateCaseStatusRequest>;
export interface UpdateCaseStatusResponse {
  caseStatus?: SelfManagedCaseStatus;
}
const UpdateCaseStatusResponse = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<UpdateCaseStatusResponse>;
export interface MembershipAccountsConfigurationsUpdate {
  coverEntireOrganization?: boolean;
  organizationalUnitsToAdd?: string[];
  organizationalUnitsToRemove?: string[];
}
const MembershipAccountsConfigurationsUpdate = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<MembershipAccountsConfigurationsUpdate>;
export interface UpdateMembershipRequest {
  membershipId: string;
  membershipName?: string | redacted.Redacted<string>;
  incidentResponseTeam?: IncidentResponder[];
  optInFeatures?: OptInFeature[];
  membershipAccountsConfigurationsUpdate?: MembershipAccountsConfigurationsUpdate;
  undoMembershipCancellation?: boolean;
}
const UpdateMembershipRequest = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<UpdateMembershipRequest>;
export interface UpdateMembershipResponse {}
const UpdateMembershipResponse = SendFeedbackResponse as any as S.Schema<UpdateMembershipResponse>;
export interface UpdateResolverTypeRequest {
  caseId: string;
  resolverType: ResolverType;
}
const UpdateResolverTypeRequest = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<UpdateResolverTypeRequest>;
export interface UpdateResolverTypeResponse {
  caseId: string;
  caseStatus?: CaseStatus;
  resolverType?: ResolverType;
}
const UpdateResolverTypeResponse = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<UpdateResolverTypeResponse>;
export type ValidationExceptionReason =
  | "UNKNOWN_OPERATION"
  | "CANNOT_PARSE"
  | "FIELD_VALIDATION_FAILED"
  | "OTHER"
  | (string & {});
const ValidationExceptionReason = S.String;

export interface ValidationExceptionField {
  name: string;
  message: string;
}
const ValidationExceptionField = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFieldList = ValidationExceptionField[];
const ValidationExceptionFieldList = /*@__PURE__*/ __L.at(__c9, 5);
export type BatchGetMemberAccountDetailsError = CommonErrors;
/**
 * Provides information on whether the supplied account IDs are associated with a membership.
 *
 * AWS account ID's may appear less than 12 characters and need to be zero-prepended. An example would be `123123123` which is nine digits, and with zero-prepend would be `000123123123`. Not zero-prepending to 12 digits could result in errors.
 */
export const batchGetMemberAccountDetails: API.OperationMethod<
  BatchGetMemberAccountDetailsRequest,
  BatchGetMemberAccountDetailsResponse,
  BatchGetMemberAccountDetailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetMemberAccountDetailsRequest,
  output: BatchGetMemberAccountDetailsResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetMemberAccountDetails",
}));

export type CancelMembershipError = CommonErrors;
/**
 * Cancels an existing membership.
 */
export const cancelMembership: API.OperationMethod<
  CancelMembershipRequest,
  CancelMembershipResponse,
  CancelMembershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelMembershipRequest,
  output: CancelMembershipResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelMembership",
}));

export type CloseCaseError = CommonErrors;
/**
 * Closes an existing case.
 */
export const closeCase: API.OperationMethod<
  CloseCaseRequest,
  CloseCaseResponse,
  CloseCaseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CloseCaseRequest,
  output: CloseCaseResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CloseCase",
}));

export type CreateCaseError = CommonErrors;
/**
 * Creates a new case.
 */
export const createCase: API.OperationMethod<
  CreateCaseRequest,
  CreateCaseResponse,
  CreateCaseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateCaseRequest,
  output: CreateCaseResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCase",
}));

export type CreateCaseCommentError = CommonErrors;
/**
 * Adds a comment to an existing case.
 */
export const createCaseComment: API.OperationMethod<
  CreateCaseCommentRequest,
  CreateCaseCommentResponse,
  CreateCaseCommentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateCaseCommentRequest,
  output: CreateCaseCommentResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCaseComment",
}));

export type CreateMembershipError = CommonErrors;
/**
 * Creates a new membership.
 */
export const createMembership: API.OperationMethod<
  CreateMembershipRequest,
  CreateMembershipResponse,
  CreateMembershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateMembershipRequest,
  output: CreateMembershipResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMembership",
}));

export type GetCaseError = CommonErrors;
/**
 * Returns the attributes of a case.
 */
export const getCase: API.OperationMethod<
  GetCaseRequest,
  GetCaseResponse,
  GetCaseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCaseRequest,
  output: GetCaseResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCase",
}));

export type GetCaseAttachmentDownloadUrlError = CommonErrors;
/**
 * Returns a Pre-Signed URL for uploading attachments into a case.
 */
export const getCaseAttachmentDownloadUrl: API.OperationMethod<
  GetCaseAttachmentDownloadUrlRequest,
  GetCaseAttachmentDownloadUrlResponse,
  GetCaseAttachmentDownloadUrlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCaseAttachmentDownloadUrlRequest,
  output: GetCaseAttachmentDownloadUrlResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCaseAttachmentDownloadUrl",
}));

export type GetCaseAttachmentUploadUrlError = CommonErrors;
/**
 * Uploads an attachment to a case.
 */
export const getCaseAttachmentUploadUrl: API.OperationMethod<
  GetCaseAttachmentUploadUrlRequest,
  GetCaseAttachmentUploadUrlResponse,
  GetCaseAttachmentUploadUrlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCaseAttachmentUploadUrlRequest,
  output: GetCaseAttachmentUploadUrlResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCaseAttachmentUploadUrl",
}));

export type GetMembershipError = CommonErrors;
/**
 * Returns the attributes of a membership.
 */
export const getMembership: API.OperationMethod<
  GetMembershipRequest,
  GetMembershipResponse,
  GetMembershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMembershipRequest,
  output: GetMembershipResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMembership",
}));

export type ListCaseEditsError = CommonErrors;
/**
 * Views the case history for edits made to a designated case.
 */
export const listCaseEdits: API.PaginatedOperationMethod<
  ListCaseEditsRequest,
  ListCaseEditsResponse,
  ListCaseEditsError,
  Credentials | HttpClient.HttpClient,
  CaseEditItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCaseEditsRequest,
  output: ListCaseEditsResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCaseEdits",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCasesError = CommonErrors;
/**
 * Lists all cases the requester has access to.
 */
export const listCases: API.PaginatedOperationMethod<
  ListCasesRequest,
  ListCasesResponse,
  ListCasesError,
  Credentials | HttpClient.HttpClient,
  ListCasesItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCasesRequest,
  output: ListCasesResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCases",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCommentsError = CommonErrors;
/**
 * Returns comments for a designated case.
 */
export const listComments: API.PaginatedOperationMethod<
  ListCommentsRequest,
  ListCommentsResponse,
  ListCommentsError,
  Credentials | HttpClient.HttpClient,
  ListCommentsItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCommentsRequest,
  output: ListCommentsResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListComments",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListInvestigationsError = CommonErrors;
/**
 * Investigation performed by an agent for a security incident...
 */
export const listInvestigations: API.PaginatedOperationMethod<
  ListInvestigationsRequest,
  ListInvestigationsResponse,
  ListInvestigationsError,
  Credentials | HttpClient.HttpClient,
  InvestigationAction
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListInvestigationsRequest,
  output: ListInvestigationsResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListInvestigations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "investigationActions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListMembershipsError = CommonErrors;
/**
 * Returns the memberships that the calling principal can access.
 */
export const listMemberships: API.PaginatedOperationMethod<
  ListMembershipsRequest,
  ListMembershipsResponse,
  ListMembershipsError,
  Credentials | HttpClient.HttpClient,
  ListMembershipItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMembershipsRequest,
  output: ListMembershipsResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMemberships",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns currently configured tags on a resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceInput,
  output: ListTagsForResourceOutput,
  errors: [AccessDeniedException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type SendFeedbackError = CommonErrors;
/**
 * Send feedback based on response investigation action
 */
export const sendFeedback: API.OperationMethod<
  SendFeedbackRequest,
  SendFeedbackResponse,
  SendFeedbackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SendFeedbackRequest,
  output: SendFeedbackResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendFeedback",
}));

export type TagResourceError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Adds a tag(s) to a designated resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceInput,
  TagResourceOutput,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceInput,
  output: TagResourceOutput,
  errors: [AccessDeniedException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes a tag(s) from a designate resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceInput,
  UntagResourceOutput,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceInput,
  output: UntagResourceOutput,
  errors: [AccessDeniedException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateCaseError = CommonErrors;
/**
 * Updates an existing case.
 */
export const updateCase: API.OperationMethod<
  UpdateCaseRequest,
  UpdateCaseResponse,
  UpdateCaseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateCaseRequest,
  output: UpdateCaseResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCase",
}));

export type UpdateCaseCommentError = CommonErrors;
/**
 * Updates an existing case comment.
 */
export const updateCaseComment: API.OperationMethod<
  UpdateCaseCommentRequest,
  UpdateCaseCommentResponse,
  UpdateCaseCommentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateCaseCommentRequest,
  output: UpdateCaseCommentResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCaseComment",
}));

export type UpdateCaseStatusError = CommonErrors;
/**
 * Updates the state transitions for a designated cases.
 *
 * **Self-managed**: the following states are available for self-managed cases.
 *
 * - Submitted -> Detection and Analysis
 *
 * - Detection and Analysis -> Containment, Eradication, and Recovery
 *
 * - Detection and Analysis -> Post-incident Activities
 *
 * - Containment, Eradication, and Recovery -> Detection and Analysis
 *
 * - Containment, Eradication, and Recovery -> Post-incident Activities
 *
 * - Post-incident Activities -> Containment, Eradication, and Recovery
 *
 * - Post-incident Activities -> Detection and Analysis
 *
 * - Any -> Closed
 *
 * **AWS supported**: You must use the `CloseCase` API to close.
 */
export const updateCaseStatus: API.OperationMethod<
  UpdateCaseStatusRequest,
  UpdateCaseStatusResponse,
  UpdateCaseStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateCaseStatusRequest,
  output: UpdateCaseStatusResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCaseStatus",
}));

export type UpdateMembershipError = CommonErrors;
/**
 * Updates membership configuration.
 */
export const updateMembership: API.OperationMethod<
  UpdateMembershipRequest,
  UpdateMembershipResponse,
  UpdateMembershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateMembershipRequest,
  output: UpdateMembershipResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateMembership",
}));

export type UpdateResolverTypeError = CommonErrors;
/**
 * Updates the resolver type for a case.
 *
 * This is a one-way action and cannot be reversed.
 */
export const updateResolverType: API.OperationMethod<
  UpdateResolverTypeRequest,
  UpdateResolverTypeResponse,
  UpdateResolverTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateResolverTypeRequest,
  output: UpdateResolverTypeResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateResolverType",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          membershipId: S.String.pipe(T.HttpLabel("membershipId")),
          accountIds: AWSAccountIds,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/membership/{membershipId}/batch-member-details" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetMemberAccountDetailsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          accountId: S.optional(S.String),
          relationshipStatus: S.optional(MembershipAccountRelationshipStatus),
          relationshipType: S.optional(MembershipAccountRelationshipType),
        }),
      ).annotate({
        identifier: "GetMembershipAccountDetailItem",
      });
    case 3:
      return S.Array(GetMembershipAccountDetailItem);
    case 4:
      return S.suspend(() =>
        S.Struct({ accountId: S.String, error: S.String, message: S.String }),
      ).annotate({
        identifier: "GetMembershipAccountDetailError",
      });
    case 5:
      return S.Array(GetMembershipAccountDetailError);
    case 6:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(GetMembershipAccountDetailItems),
          errors: S.optional(GetMembershipAccountDetailErrors),
        }),
      ).annotate({
        identifier: "BatchGetMemberAccountDetailsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ membershipId: S.String.pipe(T.HttpLabel("membershipId")) }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/membership/{membershipId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CancelMembershipRequest" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ membershipId: S.String })).annotate({
        identifier: "CancelMembershipResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ caseId: S.String.pipe(T.HttpLabel("caseId")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/cases/{caseId}/close-case" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CloseCaseRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          caseStatus: S.optional(CaseStatus),
          closedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "CloseCaseResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          email: SensitiveString,
          name: S.optional(SensitiveString),
          jobTitle: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "Watcher" });
    case 4:
      return S.Array(Watcher);
    case 5:
      return S.suspend(() =>
        S.Struct({ ipAddress: SensitiveString, userAgent: S.optional(S.String) }),
      ).annotate({ identifier: "ThreatActorIp" });
    case 6:
      return S.Array(ThreatActorIp);
    case 7:
      return S.suspend(() => S.Struct({ region: AwsRegion })).annotate({
        identifier: "ImpactedAwsRegion",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ImpactedAwsRegion);
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          resolverType: ResolverType,
          title: SensitiveString,
          description: SensitiveString,
          engagementType: EngagementType,
          reportedIncidentStartDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          impactedAccounts: ImpactedAccounts,
          watchers: Watchers,
          threatActorIpAddresses: S.optional(ThreatActorIpList),
          impactedServices: S.optional(ImpactedServicesList),
          impactedAwsRegions: S.optional(ImpactedAwsRegionList),
          tags: S.optional(TagMap),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/v1/create-case" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateCaseRequest" });
    case 3:
      return S.suspend(() => S.Struct({ caseId: S.String })).annotate({
        identifier: "CreateCaseResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          caseId: S.String.pipe(T.HttpLabel("caseId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          body: SensitiveString,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/cases/{caseId}/create-comment" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateCaseCommentRequest" });
    case 5:
      return S.suspend(() => S.Struct({ commentId: S.String })).annotate({
        identifier: "CreateCaseCommentResponse",
      });
    case 6:
      return S.Array(CommunicationType);
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: SensitiveString,
          jobTitle: SensitiveString,
          email: SensitiveString,
          communicationPreferences: S.optional(CommunicationPreferences),
        }),
      ).annotate({ identifier: "IncidentResponder" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(IncidentResponder);
    case 1:
      return S.suspend(() =>
        S.Struct({ featureName: OptInFeatureName, isEnabled: S.Boolean }),
      ).annotate({ identifier: "OptInFeature" });
    case 2:
      return S.Array(OptInFeature);
    case 3:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          membershipName: SensitiveString,
          incidentResponseTeam: IncidentResponseTeam,
          optInFeatures: S.optional(OptInFeatures),
          tags: S.optional(TagMap),
          coverEntireOrganization: S.optional(S.Boolean),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/v1/membership" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateMembershipRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ caseId: S.String.pipe(T.HttpLabel("caseId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/cases/{caseId}/get-case" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetCaseRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          attachmentId: S.String,
          fileName: SensitiveString,
          attachmentStatus: CaseAttachmentStatus,
          creator: S.String,
          createdDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "CaseAttachmentAttributes" });
    case 6:
      return S.Array(CaseAttachmentAttributes);
    case 7:
      return S.suspend(() => S.Struct({ key: S.String, value: S.String })).annotate({
        identifier: "CaseMetadataEntry",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(CaseMetadataEntry);
    case 1:
      return S.suspend(() =>
        S.Struct({
          title: S.optional(SensitiveString),
          caseArn: S.optional(S.String),
          description: S.optional(SensitiveString),
          caseStatus: S.optional(CaseStatus),
          engagementType: S.optional(EngagementType),
          reportedIncidentStartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          actualIncidentStartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          impactedAwsRegions: S.optional(ImpactedAwsRegionList),
          threatActorIpAddresses: S.optional(ThreatActorIpList),
          pendingAction: S.optional(PendingAction),
          impactedAccounts: S.optional(ImpactedAccounts),
          watchers: S.optional(Watchers),
          createdDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          closureCode: S.optional(ClosureCode),
          resolverType: S.optional(ResolverType),
          impactedServices: S.optional(ImpactedServicesList),
          caseAttachments: S.optional(CaseAttachmentsList),
          closedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          caseMetadata: S.optional(CaseMetadata),
        }),
      ).annotate({ identifier: "GetCaseResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          caseId: S.String.pipe(T.HttpLabel("caseId")),
          attachmentId: S.String.pipe(T.HttpLabel("attachmentId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/cases/{caseId}/get-presigned-url/{attachmentId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCaseAttachmentDownloadUrlRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ attachmentPresignedUrl: SensitiveString })).annotate({
        identifier: "GetCaseAttachmentDownloadUrlResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          caseId: S.String.pipe(T.HttpLabel("caseId")),
          fileName: SensitiveString,
          contentLength: S.Number,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/cases/{caseId}/get-presigned-url" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCaseAttachmentUploadUrlRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ membershipId: S.String.pipe(T.HttpLabel("membershipId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/membership/{membershipId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetMembershipRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          coverEntireOrganization: S.optional(S.Boolean),
          organizationalUnits: S.optional(OrganizationalUnits),
        }),
      ).annotate({
        identifier: "MembershipAccountsConfigurations",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          membershipId: S.String,
          accountId: S.optional(S.String),
          region: S.optional(AwsRegion),
          membershipName: S.optional(SensitiveString),
          membershipArn: S.optional(S.String),
          membershipStatus: S.optional(MembershipStatus),
          membershipActivationTimestamp: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
          membershipDeactivationTimestamp: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
          customerType: S.optional(CustomerType),
          numberOfAccountsCovered: S.optional(S.Number),
          incidentResponseTeam: S.optional(IncidentResponseTeam),
          optInFeatures: S.optional(OptInFeatures),
          membershipAccountsConfigurations: S.optional(MembershipAccountsConfigurations),
        }),
      ).annotate({ identifier: "GetMembershipResponse" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          caseId: S.String.pipe(T.HttpLabel("caseId")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/cases/{caseId}/list-case-edits" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListCaseEditsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          eventTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          principal: S.optional(S.String),
          action: S.optional(S.String),
          message: S.optional(S.String),
        }),
      ).annotate({ identifier: "CaseEditItem" });
    case 2:
      return S.Array(CaseEditItem);
    case 3:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          items: S.optional(CaseEditItems),
          total: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ListCaseEditsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), maxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/v1/list-cases" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListCasesRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          caseId: S.String,
          lastUpdatedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          title: S.optional(SensitiveString),
          caseArn: S.optional(S.String),
          engagementType: S.optional(EngagementType),
          caseStatus: S.optional(CaseStatus),
          createdDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          closedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          resolverType: S.optional(ResolverType),
          pendingAction: S.optional(PendingAction),
        }),
      ).annotate({ identifier: "ListCasesItem" });
    case 6:
      return S.Array(ListCasesItem);
    case 7:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          items: S.optional(ListCasesItems),
          total: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ListCasesResponse" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          caseId: S.String.pipe(T.HttpLabel("caseId")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/cases/{caseId}/list-comments" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListCommentsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          commentId: S.String,
          createdDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          creator: S.optional(S.String),
          lastUpdatedBy: S.optional(S.String),
          body: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "ListCommentsItem" });
    case 2:
      return S.Array(ListCommentsItem);
    case 3:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          items: S.optional(ListCommentsItems),
          total: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ListCommentsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          caseId: S.String.pipe(T.HttpLabel("caseId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/cases/{caseId}/list-investigations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListInvestigationsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          usefulness: S.optional(UsefulnessRating),
          comment: S.optional(S.String),
          submittedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "InvestigationFeedback" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          investigationId: S.String,
          actionType: ActionType,
          title: S.String,
          content: S.String,
          status: ExecutionStatus,
          lastUpdated: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          feedback: S.optional(InvestigationFeedback),
        }),
      ).annotate({ identifier: "InvestigationAction" });
    case 7:
      return S.Array(InvestigationAction);
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          investigationActions: InvestigationActionList,
        }),
      ).annotate({
        identifier: "ListInvestigationsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), maxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/v1/memberships" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListMembershipsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          membershipId: S.String,
          accountId: S.optional(S.String),
          region: S.optional(AwsRegion),
          membershipArn: S.optional(S.String),
          membershipStatus: S.optional(MembershipStatus),
        }),
      ).annotate({ identifier: "ListMembershipItem" });
    case 3:
      return S.Array(ListMembershipItem);
    case 4:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), items: S.optional(ListMembershipItems) }),
      ).annotate({ identifier: "ListMembershipsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListTagsForResourceInput" });
    case 6:
      return S.suspend(() => S.Struct({ tags: TagMap })).annotate({
        identifier: "ListTagsForResourceOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          caseId: S.String.pipe(T.HttpLabel("caseId")),
          resultId: S.String.pipe(T.HttpLabel("resultId")),
          usefulness: UsefulnessRating,
          comment: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/cases/{caseId}/feedback/{resultId}/send-feedback" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SendFeedbackRequest" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "SendFeedbackResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: TagMap }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: TagKeys.pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          caseId: S.String.pipe(T.HttpLabel("caseId")),
          title: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
          reportedIncidentStartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          actualIncidentStartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          engagementType: S.optional(EngagementType),
          watchersToAdd: S.optional(Watchers),
          watchersToDelete: S.optional(Watchers),
          threatActorIpAddressesToAdd: S.optional(ThreatActorIpList),
          threatActorIpAddressesToDelete: S.optional(ThreatActorIpList),
          impactedServicesToAdd: S.optional(ImpactedServicesList),
          impactedServicesToDelete: S.optional(ImpactedServicesList),
          impactedAwsRegionsToAdd: S.optional(ImpactedAwsRegionList),
          impactedAwsRegionsToDelete: S.optional(ImpactedAwsRegionList),
          impactedAccountsToAdd: S.optional(ImpactedAccounts),
          impactedAccountsToDelete: S.optional(ImpactedAccounts),
          caseMetadata: S.optional(CaseMetadata),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/cases/{caseId}/update-case" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateCaseRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          caseId: S.String.pipe(T.HttpLabel("caseId")),
          commentId: S.String.pipe(T.HttpLabel("commentId")),
          body: SensitiveString,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/cases/{caseId}/update-case-comment/{commentId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateCaseCommentRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ commentId: S.String, body: S.optional(SensitiveString) }),
      ).annotate({
        identifier: "UpdateCaseCommentResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          caseId: S.String.pipe(T.HttpLabel("caseId")),
          caseStatus: SelfManagedCaseStatus,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/cases/{caseId}/update-case-status" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateCaseStatusRequest" });
    case 7:
      return S.suspend(() => S.Struct({ caseStatus: S.optional(SelfManagedCaseStatus) })).annotate({
        identifier: "UpdateCaseStatusResponse",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          coverEntireOrganization: S.optional(S.Boolean),
          organizationalUnitsToAdd: S.optional(OrganizationalUnits),
          organizationalUnitsToRemove: S.optional(OrganizationalUnits),
        }),
      ).annotate({
        identifier: "MembershipAccountsConfigurationsUpdate",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          membershipId: S.String.pipe(T.HttpLabel("membershipId")),
          membershipName: S.optional(SensitiveString),
          incidentResponseTeam: S.optional(IncidentResponseTeam),
          optInFeatures: S.optional(OptInFeatures),
          membershipAccountsConfigurationsUpdate: S.optional(
            MembershipAccountsConfigurationsUpdate,
          ),
          undoMembershipCancellation: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/membership/{membershipId}/update-membership" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateMembershipRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ caseId: S.String.pipe(T.HttpLabel("caseId")), resolverType: ResolverType }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/cases/{caseId}/update-resolver-type" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateResolverTypeRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          caseId: S.String,
          caseStatus: S.optional(CaseStatus),
          resolverType: S.optional(ResolverType),
        }),
      ).annotate({
        identifier: "UpdateResolverTypeResponse",
      });
    case 4:
      return S.suspend(() => S.Struct({ name: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 5:
      return S.Array(ValidationExceptionField);
  }
}
