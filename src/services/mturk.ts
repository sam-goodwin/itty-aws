import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface MTurkRequesterServiceV20170117 {
  acceptQualificationRequest(
    input: AcceptQualificationRequestRequest,
  ): Effect.Effect<
    AcceptQualificationRequestResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  approveAssignment(
    input: ApproveAssignmentRequest,
  ): Effect.Effect<
    ApproveAssignmentResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  associateQualificationWithWorker(
    input: AssociateQualificationWithWorkerRequest,
  ): Effect.Effect<
    AssociateQualificationWithWorkerResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  createAdditionalAssignmentsForHIT(
    input: CreateAdditionalAssignmentsForHITRequest,
  ): Effect.Effect<
    CreateAdditionalAssignmentsForHITResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  createHIT(
    input: CreateHITRequest,
  ): Effect.Effect<
    CreateHITResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  createHITType(
    input: CreateHITTypeRequest,
  ): Effect.Effect<
    CreateHITTypeResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  createHITWithHITType(
    input: CreateHITWithHITTypeRequest,
  ): Effect.Effect<
    CreateHITWithHITTypeResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  createQualificationType(
    input: CreateQualificationTypeRequest,
  ): Effect.Effect<
    CreateQualificationTypeResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  createWorkerBlock(
    input: CreateWorkerBlockRequest,
  ): Effect.Effect<
    CreateWorkerBlockResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  deleteHIT(
    input: DeleteHITRequest,
  ): Effect.Effect<
    DeleteHITResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  deleteQualificationType(
    input: DeleteQualificationTypeRequest,
  ): Effect.Effect<
    DeleteQualificationTypeResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  deleteWorkerBlock(
    input: DeleteWorkerBlockRequest,
  ): Effect.Effect<
    DeleteWorkerBlockResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  disassociateQualificationFromWorker(
    input: DisassociateQualificationFromWorkerRequest,
  ): Effect.Effect<
    DisassociateQualificationFromWorkerResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  getAccountBalance(
    input: GetAccountBalanceRequest,
  ): Effect.Effect<
    GetAccountBalanceResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  getAssignment(
    input: GetAssignmentRequest,
  ): Effect.Effect<
    GetAssignmentResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  getFileUploadURL(
    input: GetFileUploadURLRequest,
  ): Effect.Effect<
    GetFileUploadURLResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  getHIT(
    input: GetHITRequest,
  ): Effect.Effect<
    GetHITResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  getQualificationScore(
    input: GetQualificationScoreRequest,
  ): Effect.Effect<
    GetQualificationScoreResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  getQualificationType(
    input: GetQualificationTypeRequest,
  ): Effect.Effect<
    GetQualificationTypeResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  listAssignmentsForHIT(
    input: ListAssignmentsForHITRequest,
  ): Effect.Effect<
    ListAssignmentsForHITResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  listBonusPayments(
    input: ListBonusPaymentsRequest,
  ): Effect.Effect<
    ListBonusPaymentsResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  listHITs(
    input: ListHITsRequest,
  ): Effect.Effect<
    ListHITsResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  listHITsForQualificationType(
    input: ListHITsForQualificationTypeRequest,
  ): Effect.Effect<
    ListHITsForQualificationTypeResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  listQualificationRequests(
    input: ListQualificationRequestsRequest,
  ): Effect.Effect<
    ListQualificationRequestsResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  listQualificationTypes(
    input: ListQualificationTypesRequest,
  ): Effect.Effect<
    ListQualificationTypesResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  listReviewableHITs(
    input: ListReviewableHITsRequest,
  ): Effect.Effect<
    ListReviewableHITsResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  listReviewPolicyResultsForHIT(
    input: ListReviewPolicyResultsForHITRequest,
  ): Effect.Effect<
    ListReviewPolicyResultsForHITResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  listWorkerBlocks(
    input: ListWorkerBlocksRequest,
  ): Effect.Effect<
    ListWorkerBlocksResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  listWorkersWithQualificationType(
    input: ListWorkersWithQualificationTypeRequest,
  ): Effect.Effect<
    ListWorkersWithQualificationTypeResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  notifyWorkers(
    input: NotifyWorkersRequest,
  ): Effect.Effect<
    NotifyWorkersResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  rejectAssignment(
    input: RejectAssignmentRequest,
  ): Effect.Effect<
    RejectAssignmentResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  rejectQualificationRequest(
    input: RejectQualificationRequestRequest,
  ): Effect.Effect<
    RejectQualificationRequestResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  sendBonus(
    input: SendBonusRequest,
  ): Effect.Effect<
    SendBonusResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  sendTestEventNotification(
    input: SendTestEventNotificationRequest,
  ): Effect.Effect<
    SendTestEventNotificationResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  updateExpirationForHIT(
    input: UpdateExpirationForHITRequest,
  ): Effect.Effect<
    UpdateExpirationForHITResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  updateHITReviewStatus(
    input: UpdateHITReviewStatusRequest,
  ): Effect.Effect<
    UpdateHITReviewStatusResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  updateHITTypeOfHIT(
    input: UpdateHITTypeOfHITRequest,
  ): Effect.Effect<
    UpdateHITTypeOfHITResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  updateNotificationSettings(
    input: UpdateNotificationSettingsRequest,
  ): Effect.Effect<
    UpdateNotificationSettingsResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
  updateQualificationType(
    input: UpdateQualificationTypeRequest,
  ): Effect.Effect<
    UpdateQualificationTypeResponse,
    RequestError | ServiceFault | CommonAwsError
  >;
}

export type Mturk = MTurkRequesterServiceV20170117;

export interface AcceptQualificationRequestRequest {
  QualificationRequestId: string;
  IntegerValue?: number;
}
export interface AcceptQualificationRequestResponse {}
export interface ApproveAssignmentRequest {
  AssignmentId: string;
  RequesterFeedback?: string;
  OverrideRejection?: boolean;
}
export interface ApproveAssignmentResponse {}
export interface Assignment {
  AssignmentId?: string;
  WorkerId?: string;
  HITId?: string;
  AssignmentStatus?: AssignmentStatus;
  AutoApprovalTime?: Date | string;
  AcceptTime?: Date | string;
  SubmitTime?: Date | string;
  ApprovalTime?: Date | string;
  RejectionTime?: Date | string;
  Deadline?: Date | string;
  Answer?: string;
  RequesterFeedback?: string;
}
export type AssignmentList = Array<Assignment>;
export type AssignmentStatus = "Submitted" | "Approved" | "Rejected";
export type AssignmentStatusList = Array<AssignmentStatus>;
export interface AssociateQualificationWithWorkerRequest {
  QualificationTypeId: string;
  WorkerId: string;
  IntegerValue?: number;
  SendNotification?: boolean;
}
export interface AssociateQualificationWithWorkerResponse {}
export interface BonusPayment {
  WorkerId?: string;
  BonusAmount?: string;
  AssignmentId?: string;
  Reason?: string;
  GrantTime?: Date | string;
}
export type BonusPaymentList = Array<BonusPayment>;
export type MturkBoolean = boolean;

export type Comparator =
  | "LessThan"
  | "LessThanOrEqualTo"
  | "GreaterThan"
  | "GreaterThanOrEqualTo"
  | "EqualTo"
  | "NotEqualTo"
  | "Exists"
  | "DoesNotExist"
  | "In"
  | "NotIn";
export type CountryParameters = string;

export interface CreateAdditionalAssignmentsForHITRequest {
  HITId: string;
  NumberOfAdditionalAssignments: number;
  UniqueRequestToken?: string;
}
export interface CreateAdditionalAssignmentsForHITResponse {}
export interface CreateHITRequest {
  MaxAssignments?: number;
  AutoApprovalDelayInSeconds?: number;
  LifetimeInSeconds: number;
  AssignmentDurationInSeconds: number;
  Reward: string;
  Title: string;
  Keywords?: string;
  Description: string;
  Question?: string;
  RequesterAnnotation?: string;
  QualificationRequirements?: Array<QualificationRequirement>;
  UniqueRequestToken?: string;
  AssignmentReviewPolicy?: ReviewPolicy;
  HITReviewPolicy?: ReviewPolicy;
  HITLayoutId?: string;
  HITLayoutParameters?: Array<HITLayoutParameter>;
}
export interface CreateHITResponse {
  HIT?: HIT;
}
export interface CreateHITTypeRequest {
  AutoApprovalDelayInSeconds?: number;
  AssignmentDurationInSeconds: number;
  Reward: string;
  Title: string;
  Keywords?: string;
  Description: string;
  QualificationRequirements?: Array<QualificationRequirement>;
}
export interface CreateHITTypeResponse {
  HITTypeId?: string;
}
export interface CreateHITWithHITTypeRequest {
  HITTypeId: string;
  MaxAssignments?: number;
  LifetimeInSeconds: number;
  Question?: string;
  RequesterAnnotation?: string;
  UniqueRequestToken?: string;
  AssignmentReviewPolicy?: ReviewPolicy;
  HITReviewPolicy?: ReviewPolicy;
  HITLayoutId?: string;
  HITLayoutParameters?: Array<HITLayoutParameter>;
}
export interface CreateHITWithHITTypeResponse {
  HIT?: HIT;
}
export interface CreateQualificationTypeRequest {
  Name: string;
  Keywords?: string;
  Description: string;
  QualificationTypeStatus: QualificationTypeStatus;
  RetryDelayInSeconds?: number;
  Test?: string;
  AnswerKey?: string;
  TestDurationInSeconds?: number;
  AutoGranted?: boolean;
  AutoGrantedValue?: number;
}
export interface CreateQualificationTypeResponse {
  QualificationType?: QualificationType;
}
export interface CreateWorkerBlockRequest {
  WorkerId: string;
  Reason: string;
}
export interface CreateWorkerBlockResponse {}
export type CurrencyAmount = string;

export type CustomerId = string;

export type CustomerIdList = Array<string>;
export interface DeleteHITRequest {
  HITId: string;
}
export interface DeleteHITResponse {}
export interface DeleteQualificationTypeRequest {
  QualificationTypeId: string;
}
export interface DeleteQualificationTypeResponse {}
export interface DeleteWorkerBlockRequest {
  WorkerId: string;
  Reason?: string;
}
export interface DeleteWorkerBlockResponse {}
export interface DisassociateQualificationFromWorkerRequest {
  WorkerId: string;
  QualificationTypeId: string;
  Reason?: string;
}
export interface DisassociateQualificationFromWorkerResponse {}
export type EntityId = string;

export type EventType =
  | "AssignmentAccepted"
  | "AssignmentAbandoned"
  | "AssignmentReturned"
  | "AssignmentSubmitted"
  | "AssignmentRejected"
  | "AssignmentApproved"
  | "HITCreated"
  | "HITExpired"
  | "HITReviewable"
  | "HITExtended"
  | "HITDisposed"
  | "Ping";
export type EventTypeList = Array<EventType>;
export type ExceptionMessage = string;

export interface GetAccountBalanceRequest {}
export interface GetAccountBalanceResponse {
  AvailableBalance?: string;
  OnHoldBalance?: string;
}
export interface GetAssignmentRequest {
  AssignmentId: string;
}
export interface GetAssignmentResponse {
  Assignment?: Assignment;
  HIT?: HIT;
}
export interface GetFileUploadURLRequest {
  AssignmentId: string;
  QuestionIdentifier: string;
}
export interface GetFileUploadURLResponse {
  FileUploadURL?: string;
}
export interface GetHITRequest {
  HITId: string;
}
export interface GetHITResponse {
  HIT?: HIT;
}
export interface GetQualificationScoreRequest {
  QualificationTypeId: string;
  WorkerId: string;
}
export interface GetQualificationScoreResponse {
  Qualification?: Qualification;
}
export interface GetQualificationTypeRequest {
  QualificationTypeId: string;
}
export interface GetQualificationTypeResponse {
  QualificationType?: QualificationType;
}
export interface HIT {
  HITId?: string;
  HITTypeId?: string;
  HITGroupId?: string;
  HITLayoutId?: string;
  CreationTime?: Date | string;
  Title?: string;
  Description?: string;
  Question?: string;
  Keywords?: string;
  HITStatus?: HITStatus;
  MaxAssignments?: number;
  Reward?: string;
  AutoApprovalDelayInSeconds?: number;
  Expiration?: Date | string;
  AssignmentDurationInSeconds?: number;
  RequesterAnnotation?: string;
  QualificationRequirements?: Array<QualificationRequirement>;
  HITReviewStatus?: HITReviewStatus;
  NumberOfAssignmentsPending?: number;
  NumberOfAssignmentsAvailable?: number;
  NumberOfAssignmentsCompleted?: number;
}
export type HITAccessActions =
  | "Accept"
  | "PreviewAndAccept"
  | "DiscoverPreviewAndAccept";
export interface HITLayoutParameter {
  Name: string;
  Value: string;
}
export type HITLayoutParameterList = Array<HITLayoutParameter>;
export type HITList = Array<HIT>;
export type HITReviewStatus =
  | "NotReviewed"
  | "MarkedForReview"
  | "ReviewedAppropriate"
  | "ReviewedInappropriate";
export type HITStatus =
  | "Assignable"
  | "Unassignable"
  | "Reviewable"
  | "Reviewing"
  | "Disposed";
export type IdempotencyToken = string;

export type Integer = number;

export type IntegerList = Array<number>;
export interface ListAssignmentsForHITRequest {
  HITId: string;
  NextToken?: string;
  MaxResults?: number;
  AssignmentStatuses?: Array<AssignmentStatus>;
}
export interface ListAssignmentsForHITResponse {
  NextToken?: string;
  NumResults?: number;
  Assignments?: Array<Assignment>;
}
export interface ListBonusPaymentsRequest {
  HITId?: string;
  AssignmentId?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListBonusPaymentsResponse {
  NumResults?: number;
  NextToken?: string;
  BonusPayments?: Array<BonusPayment>;
}
export interface ListHITsForQualificationTypeRequest {
  QualificationTypeId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListHITsForQualificationTypeResponse {
  NextToken?: string;
  NumResults?: number;
  HITs?: Array<HIT>;
}
export interface ListHITsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListHITsResponse {
  NextToken?: string;
  NumResults?: number;
  HITs?: Array<HIT>;
}
export interface ListQualificationRequestsRequest {
  QualificationTypeId?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListQualificationRequestsResponse {
  NumResults?: number;
  NextToken?: string;
  QualificationRequests?: Array<QualificationRequest>;
}
export interface ListQualificationTypesRequest {
  Query?: string;
  MustBeRequestable: boolean;
  MustBeOwnedByCaller?: boolean;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListQualificationTypesResponse {
  NumResults?: number;
  NextToken?: string;
  QualificationTypes?: Array<QualificationType>;
}
export interface ListReviewableHITsRequest {
  HITTypeId?: string;
  Status?: ReviewableHITStatus;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListReviewableHITsResponse {
  NextToken?: string;
  NumResults?: number;
  HITs?: Array<HIT>;
}
export interface ListReviewPolicyResultsForHITRequest {
  HITId: string;
  PolicyLevels?: Array<ReviewPolicyLevel>;
  RetrieveActions?: boolean;
  RetrieveResults?: boolean;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListReviewPolicyResultsForHITResponse {
  HITId?: string;
  AssignmentReviewPolicy?: ReviewPolicy;
  HITReviewPolicy?: ReviewPolicy;
  AssignmentReviewReport?: ReviewReport;
  HITReviewReport?: ReviewReport;
  NextToken?: string;
}
export interface ListWorkerBlocksRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListWorkerBlocksResponse {
  NextToken?: string;
  NumResults?: number;
  WorkerBlocks?: Array<WorkerBlock>;
}
export interface ListWorkersWithQualificationTypeRequest {
  QualificationTypeId: string;
  Status?: QualificationStatus;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListWorkersWithQualificationTypeResponse {
  NextToken?: string;
  NumResults?: number;
  Qualifications?: Array<Qualification>;
}
export interface Locale {
  Country: string;
  Subdivision?: string;
}
export type LocaleList = Array<Locale>;
export type Long = number;

export interface NotificationSpecification {
  Destination: string;
  Transport: NotificationTransport;
  Version: string;
  EventTypes: Array<EventType>;
}
export type NotificationTransport = "Email" | "SQS" | "SNS";
export type NotifyWorkersFailureCode = "SoftFailure" | "HardFailure";
export interface NotifyWorkersFailureStatus {
  NotifyWorkersFailureCode?: NotifyWorkersFailureCode;
  NotifyWorkersFailureMessage?: string;
  WorkerId?: string;
}
export type NotifyWorkersFailureStatusList = Array<NotifyWorkersFailureStatus>;
export interface NotifyWorkersRequest {
  Subject: string;
  MessageText: string;
  WorkerIds: Array<string>;
}
export interface NotifyWorkersResponse {
  NotifyWorkersFailureStatuses?: Array<NotifyWorkersFailureStatus>;
}
export type PaginationToken = string;

export interface ParameterMapEntry {
  Key?: string;
  Values?: Array<string>;
}
export type ParameterMapEntryList = Array<ParameterMapEntry>;
export interface PolicyParameter {
  Key?: string;
  Values?: Array<string>;
  MapEntries?: Array<ParameterMapEntry>;
}
export type PolicyParameterList = Array<PolicyParameter>;
export interface Qualification {
  QualificationTypeId?: string;
  WorkerId?: string;
  GrantTime?: Date | string;
  IntegerValue?: number;
  LocaleValue?: Locale;
  Status?: QualificationStatus;
}
export type QualificationList = Array<Qualification>;
export interface QualificationRequest {
  QualificationRequestId?: string;
  QualificationTypeId?: string;
  WorkerId?: string;
  Test?: string;
  Answer?: string;
  SubmitTime?: Date | string;
}
export type QualificationRequestList = Array<QualificationRequest>;
export interface QualificationRequirement {
  QualificationTypeId: string;
  Comparator: Comparator;
  IntegerValues?: Array<number>;
  LocaleValues?: Array<Locale>;
  RequiredToPreview?: boolean;
  ActionsGuarded?: HITAccessActions;
}
export type QualificationRequirementList = Array<QualificationRequirement>;
export type QualificationStatus = "Granted" | "Revoked";
export interface QualificationType {
  QualificationTypeId?: string;
  CreationTime?: Date | string;
  Name?: string;
  Description?: string;
  Keywords?: string;
  QualificationTypeStatus?: QualificationTypeStatus;
  Test?: string;
  TestDurationInSeconds?: number;
  AnswerKey?: string;
  RetryDelayInSeconds?: number;
  IsRequestable?: boolean;
  AutoGranted?: boolean;
  AutoGrantedValue?: number;
}
export type QualificationTypeList = Array<QualificationType>;
export type QualificationTypeStatus = "Active" | "Inactive";
export interface RejectAssignmentRequest {
  AssignmentId: string;
  RequesterFeedback: string;
}
export interface RejectAssignmentResponse {}
export interface RejectQualificationRequestRequest {
  QualificationRequestId: string;
  Reason?: string;
}
export interface RejectQualificationRequestResponse {}
export declare class RequestError extends EffectData.TaggedError(
  "RequestError",
)<{
  readonly Message?: string;
  readonly TurkErrorCode?: string;
}> {}
export type ResultSize = number;

export type ReviewableHITStatus = "Reviewable" | "Reviewing";
export interface ReviewActionDetail {
  ActionId?: string;
  ActionName?: string;
  TargetId?: string;
  TargetType?: string;
  Status?: ReviewActionStatus;
  CompleteTime?: Date | string;
  Result?: string;
  ErrorCode?: string;
}
export type ReviewActionDetailList = Array<ReviewActionDetail>;
export type ReviewActionStatus =
  | "Intended"
  | "Succeeded"
  | "Failed"
  | "Cancelled";
export interface ReviewPolicy {
  PolicyName: string;
  Parameters?: Array<PolicyParameter>;
}
export type ReviewPolicyLevel = "Assignment" | "HIT";
export type ReviewPolicyLevelList = Array<ReviewPolicyLevel>;
export interface ReviewReport {
  ReviewResults?: Array<ReviewResultDetail>;
  ReviewActions?: Array<ReviewActionDetail>;
}
export interface ReviewResultDetail {
  ActionId?: string;
  SubjectId?: string;
  SubjectType?: string;
  QuestionId?: string;
  Key?: string;
  Value?: string;
}
export type ReviewResultDetailList = Array<ReviewResultDetail>;
export interface SendBonusRequest {
  WorkerId: string;
  BonusAmount: string;
  AssignmentId: string;
  Reason: string;
  UniqueRequestToken?: string;
}
export interface SendBonusResponse {}
export interface SendTestEventNotificationRequest {
  Notification: NotificationSpecification;
  TestEventType: EventType;
}
export interface SendTestEventNotificationResponse {}
export declare class ServiceFault extends EffectData.TaggedError(
  "ServiceFault",
)<{
  readonly Message?: string;
  readonly TurkErrorCode?: string;
}> {}
export type MturkString = string;

export type StringList = Array<string>;
export type Timestamp = Date | string;

export type TurkErrorCode = string;

export interface UpdateExpirationForHITRequest {
  HITId: string;
  ExpireAt: Date | string;
}
export interface UpdateExpirationForHITResponse {}
export interface UpdateHITReviewStatusRequest {
  HITId: string;
  Revert?: boolean;
}
export interface UpdateHITReviewStatusResponse {}
export interface UpdateHITTypeOfHITRequest {
  HITId: string;
  HITTypeId: string;
}
export interface UpdateHITTypeOfHITResponse {}
export interface UpdateNotificationSettingsRequest {
  HITTypeId: string;
  Notification?: NotificationSpecification;
  Active?: boolean;
}
export interface UpdateNotificationSettingsResponse {}
export interface UpdateQualificationTypeRequest {
  QualificationTypeId: string;
  Description?: string;
  QualificationTypeStatus?: QualificationTypeStatus;
  Test?: string;
  AnswerKey?: string;
  TestDurationInSeconds?: number;
  RetryDelayInSeconds?: number;
  AutoGranted?: boolean;
  AutoGrantedValue?: number;
}
export interface UpdateQualificationTypeResponse {
  QualificationType?: QualificationType;
}
export interface WorkerBlock {
  WorkerId?: string;
  Reason?: string;
}
export type WorkerBlockList = Array<WorkerBlock>;
export declare namespace AcceptQualificationRequest {
  export type Input = AcceptQualificationRequestRequest;
  export type Output = AcceptQualificationRequestResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace ApproveAssignment {
  export type Input = ApproveAssignmentRequest;
  export type Output = ApproveAssignmentResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace AssociateQualificationWithWorker {
  export type Input = AssociateQualificationWithWorkerRequest;
  export type Output = AssociateQualificationWithWorkerResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace CreateAdditionalAssignmentsForHIT {
  export type Input = CreateAdditionalAssignmentsForHITRequest;
  export type Output = CreateAdditionalAssignmentsForHITResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace CreateHIT {
  export type Input = CreateHITRequest;
  export type Output = CreateHITResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace CreateHITType {
  export type Input = CreateHITTypeRequest;
  export type Output = CreateHITTypeResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace CreateHITWithHITType {
  export type Input = CreateHITWithHITTypeRequest;
  export type Output = CreateHITWithHITTypeResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace CreateQualificationType {
  export type Input = CreateQualificationTypeRequest;
  export type Output = CreateQualificationTypeResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace CreateWorkerBlock {
  export type Input = CreateWorkerBlockRequest;
  export type Output = CreateWorkerBlockResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace DeleteHIT {
  export type Input = DeleteHITRequest;
  export type Output = DeleteHITResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace DeleteQualificationType {
  export type Input = DeleteQualificationTypeRequest;
  export type Output = DeleteQualificationTypeResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace DeleteWorkerBlock {
  export type Input = DeleteWorkerBlockRequest;
  export type Output = DeleteWorkerBlockResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace DisassociateQualificationFromWorker {
  export type Input = DisassociateQualificationFromWorkerRequest;
  export type Output = DisassociateQualificationFromWorkerResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace GetAccountBalance {
  export type Input = GetAccountBalanceRequest;
  export type Output = GetAccountBalanceResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace GetAssignment {
  export type Input = GetAssignmentRequest;
  export type Output = GetAssignmentResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace GetFileUploadURL {
  export type Input = GetFileUploadURLRequest;
  export type Output = GetFileUploadURLResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace GetHIT {
  export type Input = GetHITRequest;
  export type Output = GetHITResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace GetQualificationScore {
  export type Input = GetQualificationScoreRequest;
  export type Output = GetQualificationScoreResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace GetQualificationType {
  export type Input = GetQualificationTypeRequest;
  export type Output = GetQualificationTypeResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace ListAssignmentsForHIT {
  export type Input = ListAssignmentsForHITRequest;
  export type Output = ListAssignmentsForHITResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace ListBonusPayments {
  export type Input = ListBonusPaymentsRequest;
  export type Output = ListBonusPaymentsResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace ListHITs {
  export type Input = ListHITsRequest;
  export type Output = ListHITsResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace ListHITsForQualificationType {
  export type Input = ListHITsForQualificationTypeRequest;
  export type Output = ListHITsForQualificationTypeResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace ListQualificationRequests {
  export type Input = ListQualificationRequestsRequest;
  export type Output = ListQualificationRequestsResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace ListQualificationTypes {
  export type Input = ListQualificationTypesRequest;
  export type Output = ListQualificationTypesResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace ListReviewableHITs {
  export type Input = ListReviewableHITsRequest;
  export type Output = ListReviewableHITsResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace ListReviewPolicyResultsForHIT {
  export type Input = ListReviewPolicyResultsForHITRequest;
  export type Output = ListReviewPolicyResultsForHITResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace ListWorkerBlocks {
  export type Input = ListWorkerBlocksRequest;
  export type Output = ListWorkerBlocksResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace ListWorkersWithQualificationType {
  export type Input = ListWorkersWithQualificationTypeRequest;
  export type Output = ListWorkersWithQualificationTypeResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace NotifyWorkers {
  export type Input = NotifyWorkersRequest;
  export type Output = NotifyWorkersResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace RejectAssignment {
  export type Input = RejectAssignmentRequest;
  export type Output = RejectAssignmentResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace RejectQualificationRequest {
  export type Input = RejectQualificationRequestRequest;
  export type Output = RejectQualificationRequestResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace SendBonus {
  export type Input = SendBonusRequest;
  export type Output = SendBonusResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace SendTestEventNotification {
  export type Input = SendTestEventNotificationRequest;
  export type Output = SendTestEventNotificationResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace UpdateExpirationForHIT {
  export type Input = UpdateExpirationForHITRequest;
  export type Output = UpdateExpirationForHITResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace UpdateHITReviewStatus {
  export type Input = UpdateHITReviewStatusRequest;
  export type Output = UpdateHITReviewStatusResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace UpdateHITTypeOfHIT {
  export type Input = UpdateHITTypeOfHITRequest;
  export type Output = UpdateHITTypeOfHITResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace UpdateNotificationSettings {
  export type Input = UpdateNotificationSettingsRequest;
  export type Output = UpdateNotificationSettingsResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}

export declare namespace UpdateQualificationType {
  export type Input = UpdateQualificationTypeRequest;
  export type Output = UpdateQualificationTypeResponse;
  export type Error = RequestError | ServiceFault | CommonAwsError;
}
