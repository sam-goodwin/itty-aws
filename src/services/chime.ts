import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class Chime extends AWSServiceClient {
  associatePhoneNumberWithUser(
    input: AssociatePhoneNumberWithUserRequest,
  ): Effect.Effect<
    AssociatePhoneNumberWithUserResponse,
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  associateSigninDelegateGroupsWithAccount(
    input: AssociateSigninDelegateGroupsWithAccountRequest,
  ): Effect.Effect<
    AssociateSigninDelegateGroupsWithAccountResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  batchCreateRoomMembership(
    input: BatchCreateRoomMembershipRequest,
  ): Effect.Effect<
    BatchCreateRoomMembershipResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  batchDeletePhoneNumber(
    input: BatchDeletePhoneNumberRequest,
  ): Effect.Effect<
    BatchDeletePhoneNumberResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  batchSuspendUser(
    input: BatchSuspendUserRequest,
  ): Effect.Effect<
    BatchSuspendUserResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  batchUnsuspendUser(
    input: BatchUnsuspendUserRequest,
  ): Effect.Effect<
    BatchUnsuspendUserResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  batchUpdatePhoneNumber(
    input: BatchUpdatePhoneNumberRequest,
  ): Effect.Effect<
    BatchUpdatePhoneNumberResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  batchUpdateUser(
    input: BatchUpdateUserRequest,
  ): Effect.Effect<
    BatchUpdateUserResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createAccount(
    input: CreateAccountRequest,
  ): Effect.Effect<
    CreateAccountResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createBot(
    input: CreateBotRequest,
  ): Effect.Effect<
    CreateBotResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createMeetingDialOut(
    input: CreateMeetingDialOutRequest,
  ): Effect.Effect<
    CreateMeetingDialOutResponse,
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createPhoneNumberOrder(
    input: CreatePhoneNumberOrderRequest,
  ): Effect.Effect<
    CreatePhoneNumberOrderResponse,
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createRoom(
    input: CreateRoomRequest,
  ): Effect.Effect<
    CreateRoomResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createRoomMembership(
    input: CreateRoomMembershipRequest,
  ): Effect.Effect<
    CreateRoomMembershipResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createUser(
    input: CreateUserRequest,
  ): Effect.Effect<
    CreateUserResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteAccount(
    input: DeleteAccountRequest,
  ): Effect.Effect<
    DeleteAccountResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | UnprocessableEntityException
    | CommonAwsError
  >;
  deleteEventsConfiguration(
    input: DeleteEventsConfigurationRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deletePhoneNumber(
    input: DeletePhoneNumberRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteRoom(
    input: DeleteRoomRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteRoomMembership(
    input: DeleteRoomMembershipRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  disassociatePhoneNumberFromUser(
    input: DisassociatePhoneNumberFromUserRequest,
  ): Effect.Effect<
    DisassociatePhoneNumberFromUserResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  disassociateSigninDelegateGroupsFromAccount(
    input: DisassociateSigninDelegateGroupsFromAccountRequest,
  ): Effect.Effect<
    DisassociateSigninDelegateGroupsFromAccountResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getAccount(
    input: GetAccountRequest,
  ): Effect.Effect<
    GetAccountResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getAccountSettings(
    input: GetAccountSettingsRequest,
  ): Effect.Effect<
    GetAccountSettingsResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getBot(
    input: GetBotRequest,
  ): Effect.Effect<
    GetBotResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getEventsConfiguration(
    input: GetEventsConfigurationRequest,
  ): Effect.Effect<
    GetEventsConfigurationResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getGlobalSettings(input: {}): Effect.Effect<
    GetGlobalSettingsResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getPhoneNumber(
    input: GetPhoneNumberRequest,
  ): Effect.Effect<
    GetPhoneNumberResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getPhoneNumberOrder(
    input: GetPhoneNumberOrderRequest,
  ): Effect.Effect<
    GetPhoneNumberOrderResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getPhoneNumberSettings(input: {}): Effect.Effect<
    GetPhoneNumberSettingsResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getRetentionSettings(
    input: GetRetentionSettingsRequest,
  ): Effect.Effect<
    GetRetentionSettingsResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getRoom(
    input: GetRoomRequest,
  ): Effect.Effect<
    GetRoomResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getUser(
    input: GetUserRequest,
  ): Effect.Effect<
    GetUserResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getUserSettings(
    input: GetUserSettingsRequest,
  ): Effect.Effect<
    GetUserSettingsResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  inviteUsers(
    input: InviteUsersRequest,
  ): Effect.Effect<
    InviteUsersResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listAccounts(
    input: ListAccountsRequest,
  ): Effect.Effect<
    ListAccountsResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listBots(
    input: ListBotsRequest,
  ): Effect.Effect<
    ListBotsResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listPhoneNumberOrders(
    input: ListPhoneNumberOrdersRequest,
  ): Effect.Effect<
    ListPhoneNumberOrdersResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listPhoneNumbers(
    input: ListPhoneNumbersRequest,
  ): Effect.Effect<
    ListPhoneNumbersResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listRoomMemberships(
    input: ListRoomMembershipsRequest,
  ): Effect.Effect<
    ListRoomMembershipsResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listRooms(
    input: ListRoomsRequest,
  ): Effect.Effect<
    ListRoomsResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listSupportedPhoneNumberCountries(
    input: ListSupportedPhoneNumberCountriesRequest,
  ): Effect.Effect<
    ListSupportedPhoneNumberCountriesResponse,
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listUsers(
    input: ListUsersRequest,
  ): Effect.Effect<
    ListUsersResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  logoutUser(
    input: LogoutUserRequest,
  ): Effect.Effect<
    LogoutUserResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  putEventsConfiguration(
    input: PutEventsConfigurationRequest,
  ): Effect.Effect<
    PutEventsConfigurationResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  putRetentionSettings(
    input: PutRetentionSettingsRequest,
  ): Effect.Effect<
    PutRetentionSettingsResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  redactConversationMessage(
    input: RedactConversationMessageRequest,
  ): Effect.Effect<
    RedactConversationMessageResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  redactRoomMessage(
    input: RedactRoomMessageRequest,
  ): Effect.Effect<
    RedactRoomMessageResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  regenerateSecurityToken(
    input: RegenerateSecurityTokenRequest,
  ): Effect.Effect<
    RegenerateSecurityTokenResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  resetPersonalPIN(
    input: ResetPersonalPINRequest,
  ): Effect.Effect<
    ResetPersonalPINResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  restorePhoneNumber(
    input: RestorePhoneNumberRequest,
  ): Effect.Effect<
    RestorePhoneNumberResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  searchAvailablePhoneNumbers(
    input: SearchAvailablePhoneNumbersRequest,
  ): Effect.Effect<
    SearchAvailablePhoneNumbersResponse,
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updateAccount(
    input: UpdateAccountRequest,
  ): Effect.Effect<
    UpdateAccountResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updateAccountSettings(
    input: UpdateAccountSettingsRequest,
  ): Effect.Effect<
    UpdateAccountSettingsResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updateBot(
    input: UpdateBotRequest,
  ): Effect.Effect<
    UpdateBotResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updateGlobalSettings(
    input: UpdateGlobalSettingsRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updatePhoneNumber(
    input: UpdatePhoneNumberRequest,
  ): Effect.Effect<
    UpdatePhoneNumberResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updatePhoneNumberSettings(
    input: UpdatePhoneNumberSettingsRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updateRoom(
    input: UpdateRoomRequest,
  ): Effect.Effect<
    UpdateRoomResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updateRoomMembership(
    input: UpdateRoomMembershipRequest,
  ): Effect.Effect<
    UpdateRoomMembershipResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updateUser(
    input: UpdateUserRequest,
  ): Effect.Effect<
    UpdateUserResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updateUserSettings(
    input: UpdateUserSettingsRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export interface Account {
  AwsAccountId: string;
  AccountId: string;
  Name: string;
  AccountType?: AccountType;
  CreatedTimestamp?: Date | string;
  DefaultLicense?: License;
  SupportedLicenses?: Array<License>;
  AccountStatus?: AccountStatus;
  SigninDelegateGroups?: Array<SigninDelegateGroup>;
}
export type AccountList = Array<Account>;
export type AccountName = string;

export interface AccountSettings {
  DisableRemoteControl?: boolean;
  EnableDialOut?: boolean;
}
export type AccountStatus = "Suspended" | "Active";
export type AccountType =
  | "Team"
  | "EnterpriseDirectory"
  | "EnterpriseLWA"
  | "EnterpriseOIDC";
export interface AlexaForBusinessMetadata {
  IsAlexaForBusinessEnabled?: boolean;
  AlexaForBusinessRoomArn?: string;
}
export type Alpha2CountryCode = string;

export interface AssociatePhoneNumberWithUserRequest {
  AccountId: string;
  UserId: string;
  E164PhoneNumber: string;
}
export interface AssociatePhoneNumberWithUserResponse {}
export interface AssociateSigninDelegateGroupsWithAccountRequest {
  AccountId: string;
  SigninDelegateGroups: Array<SigninDelegateGroup>;
}
export interface AssociateSigninDelegateGroupsWithAccountResponse {}
export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export interface BatchCreateRoomMembershipRequest {
  AccountId: string;
  RoomId: string;
  MembershipItemList: Array<MembershipItem>;
}
export interface BatchCreateRoomMembershipResponse {
  Errors?: Array<MemberError>;
}
export interface BatchDeletePhoneNumberRequest {
  PhoneNumberIds: Array<string>;
}
export interface BatchDeletePhoneNumberResponse {
  PhoneNumberErrors?: Array<PhoneNumberError>;
}
export interface BatchSuspendUserRequest {
  AccountId: string;
  UserIdList: Array<string>;
}
export interface BatchSuspendUserResponse {
  UserErrors?: Array<UserError>;
}
export interface BatchUnsuspendUserRequest {
  AccountId: string;
  UserIdList: Array<string>;
}
export interface BatchUnsuspendUserResponse {
  UserErrors?: Array<UserError>;
}
export interface BatchUpdatePhoneNumberRequest {
  UpdatePhoneNumberRequestItems: Array<UpdatePhoneNumberRequestItem>;
}
export interface BatchUpdatePhoneNumberResponse {
  PhoneNumberErrors?: Array<PhoneNumberError>;
}
export interface BatchUpdateUserRequest {
  AccountId: string;
  UpdateUserRequestItems: Array<UpdateUserRequestItem>;
}
export interface BatchUpdateUserResponse {
  UserErrors?: Array<UserError>;
}
export type ChimeBoolean = boolean;

export interface Bot {
  BotId?: string;
  UserId?: string;
  DisplayName?: string;
  BotType?: BotType;
  Disabled?: boolean;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
  BotEmail?: string;
  SecurityToken?: string;
}
export type BotList = Array<Bot>;
export type BotType = "ChatBot";
export interface BusinessCallingSettings {
  CdrBucket?: string;
}
export type CallingName = string;

export type CallingNameStatus =
  | "Unassigned"
  | "UpdateInProgress"
  | "UpdateSucceeded"
  | "UpdateFailed";
export type ClientRequestToken = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export interface ConversationRetentionSettings {
  RetentionDays?: number;
}
export interface CreateAccountRequest {
  Name: string;
}
export interface CreateAccountResponse {
  Account?: Account;
}
export interface CreateBotRequest {
  AccountId: string;
  DisplayName: string;
  Domain?: string;
}
export interface CreateBotResponse {
  Bot?: Bot;
}
export interface CreateMeetingDialOutRequest {
  MeetingId: string;
  FromPhoneNumber: string;
  ToPhoneNumber: string;
  JoinToken: string;
}
export interface CreateMeetingDialOutResponse {
  TransactionId?: string;
}
export interface CreatePhoneNumberOrderRequest {
  ProductType: PhoneNumberProductType;
  E164PhoneNumbers: Array<string>;
}
export interface CreatePhoneNumberOrderResponse {
  PhoneNumberOrder?: PhoneNumberOrder;
}
export interface CreateRoomMembershipRequest {
  AccountId: string;
  RoomId: string;
  MemberId: string;
  Role?: RoomMembershipRole;
}
export interface CreateRoomMembershipResponse {
  RoomMembership?: RoomMembership;
}
export interface CreateRoomRequest {
  AccountId: string;
  Name: string;
  ClientRequestToken?: string;
}
export interface CreateRoomResponse {
  Room?: Room;
}
export interface CreateUserRequest {
  AccountId: string;
  Username?: string;
  Email?: string;
  UserType?: UserType;
}
export interface CreateUserResponse {
  User?: User;
}
export interface DeleteAccountRequest {
  AccountId: string;
}
export interface DeleteAccountResponse {}
export interface DeleteEventsConfigurationRequest {
  AccountId: string;
  BotId: string;
}
export interface DeletePhoneNumberRequest {
  PhoneNumberId: string;
}
export interface DeleteRoomMembershipRequest {
  AccountId: string;
  RoomId: string;
  MemberId: string;
}
export interface DeleteRoomRequest {
  AccountId: string;
  RoomId: string;
}
export interface DisassociatePhoneNumberFromUserRequest {
  AccountId: string;
  UserId: string;
}
export interface DisassociatePhoneNumberFromUserResponse {}
export interface DisassociateSigninDelegateGroupsFromAccountRequest {
  AccountId: string;
  GroupNames: Array<string>;
}
export interface DisassociateSigninDelegateGroupsFromAccountResponse {}
export type E164PhoneNumber = string;

export type E164PhoneNumberList = Array<string>;
export type EmailAddress = string;

export type EmailStatus = "NotSent" | "Sent" | "Failed";
export type ErrorCode =
  | "BadRequest"
  | "Conflict"
  | "Forbidden"
  | "NotFound"
  | "PreconditionFailed"
  | "ResourceLimitExceeded"
  | "ServiceFailure"
  | "AccessDenied"
  | "ServiceUnavailable"
  | "Throttled"
  | "Throttling"
  | "Unauthorized"
  | "Unprocessable"
  | "VoiceConnectorGroupAssociationsExist"
  | "PhoneNumberAssociationsExist";
export interface EventsConfiguration {
  BotId?: string;
  OutboundEventsHTTPSEndpoint?: string;
  LambdaFunctionArn?: string;
}
export declare class ForbiddenException extends EffectData.TaggedError(
  "ForbiddenException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export interface GetAccountRequest {
  AccountId: string;
}
export interface GetAccountResponse {
  Account?: Account;
}
export interface GetAccountSettingsRequest {
  AccountId: string;
}
export interface GetAccountSettingsResponse {
  AccountSettings?: AccountSettings;
}
export interface GetBotRequest {
  AccountId: string;
  BotId: string;
}
export interface GetBotResponse {
  Bot?: Bot;
}
export interface GetEventsConfigurationRequest {
  AccountId: string;
  BotId: string;
}
export interface GetEventsConfigurationResponse {
  EventsConfiguration?: EventsConfiguration;
}
export interface GetGlobalSettingsResponse {
  BusinessCalling?: BusinessCallingSettings;
  VoiceConnector?: VoiceConnectorSettings;
}
export interface GetPhoneNumberOrderRequest {
  PhoneNumberOrderId: string;
}
export interface GetPhoneNumberOrderResponse {
  PhoneNumberOrder?: PhoneNumberOrder;
}
export interface GetPhoneNumberRequest {
  PhoneNumberId: string;
}
export interface GetPhoneNumberResponse {
  PhoneNumber?: PhoneNumber;
}
export interface GetPhoneNumberSettingsResponse {
  CallingName?: string;
  CallingNameUpdatedTimestamp?: Date | string;
}
export interface GetRetentionSettingsRequest {
  AccountId: string;
}
export interface GetRetentionSettingsResponse {
  RetentionSettings?: RetentionSettings;
  InitiateDeletionTimestamp?: Date | string;
}
export interface GetRoomRequest {
  AccountId: string;
  RoomId: string;
}
export interface GetRoomResponse {
  Room?: Room;
}
export interface GetUserRequest {
  AccountId: string;
  UserId: string;
}
export interface GetUserResponse {
  User?: User;
}
export interface GetUserSettingsRequest {
  AccountId: string;
  UserId: string;
}
export interface GetUserSettingsResponse {
  UserSettings?: UserSettings;
}
export type GuidString = string;

export interface Invite {
  InviteId?: string;
  Status?: InviteStatus;
  EmailAddress?: string;
  EmailStatus?: EmailStatus;
}
export type InviteList = Array<Invite>;
export type InviteStatus = "Pending" | "Accepted" | "Failed";
export interface InviteUsersRequest {
  AccountId: string;
  UserEmailList: Array<string>;
  UserType?: UserType;
}
export interface InviteUsersResponse {
  Invites?: Array<Invite>;
}
export type Iso8601Timestamp = Date | string;

export type JoinTokenString = string;

export type License = "Basic" | "Plus" | "Pro" | "ProTrial";
export type LicenseList = Array<License>;
export interface ListAccountsRequest {
  Name?: string;
  UserEmail?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAccountsResponse {
  Accounts?: Array<Account>;
  NextToken?: string;
}
export interface ListBotsRequest {
  AccountId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListBotsResponse {
  Bots?: Array<Bot>;
  NextToken?: string;
}
export interface ListPhoneNumberOrdersRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListPhoneNumberOrdersResponse {
  PhoneNumberOrders?: Array<PhoneNumberOrder>;
  NextToken?: string;
}
export interface ListPhoneNumbersRequest {
  Status?: PhoneNumberStatus;
  ProductType?: PhoneNumberProductType;
  FilterName?: PhoneNumberAssociationName;
  FilterValue?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListPhoneNumbersResponse {
  PhoneNumbers?: Array<PhoneNumber>;
  NextToken?: string;
}
export interface ListRoomMembershipsRequest {
  AccountId: string;
  RoomId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListRoomMembershipsResponse {
  RoomMemberships?: Array<RoomMembership>;
  NextToken?: string;
}
export interface ListRoomsRequest {
  AccountId: string;
  MemberId?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListRoomsResponse {
  Rooms?: Array<Room>;
  NextToken?: string;
}
export interface ListSupportedPhoneNumberCountriesRequest {
  ProductType: PhoneNumberProductType;
}
export interface ListSupportedPhoneNumberCountriesResponse {
  PhoneNumberCountries?: Array<PhoneNumberCountry>;
}
export interface ListUsersRequest {
  AccountId: string;
  UserEmail?: string;
  UserType?: UserType;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListUsersResponse {
  Users?: Array<User>;
  NextToken?: string;
}
export interface LogoutUserRequest {
  AccountId: string;
  UserId: string;
}
export interface LogoutUserResponse {}
export interface Member {
  MemberId?: string;
  MemberType?: MemberType;
  Email?: string;
  FullName?: string;
  AccountId?: string;
}
export interface MemberError {
  MemberId?: string;
  ErrorCode?: ErrorCode;
  ErrorMessage?: string;
}
export type MemberErrorList = Array<MemberError>;
export interface MembershipItem {
  MemberId?: string;
  Role?: RoomMembershipRole;
}
export type MembershipItemList = Array<MembershipItem>;
export type MemberType = "User" | "Bot" | "Webhook";
export type NonEmptyString = string;

export type NonEmptyStringList = Array<string>;
export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export type NullableBoolean = boolean;

export interface OrderedPhoneNumber {
  E164PhoneNumber?: string;
  Status?: OrderedPhoneNumberStatus;
}
export type OrderedPhoneNumberList = Array<OrderedPhoneNumber>;
export type OrderedPhoneNumberStatus = "Processing" | "Acquired" | "Failed";
export interface PhoneNumber {
  PhoneNumberId?: string;
  E164PhoneNumber?: string;
  Country?: string;
  Type?: PhoneNumberType;
  ProductType?: PhoneNumberProductType;
  Status?: PhoneNumberStatus;
  Capabilities?: PhoneNumberCapabilities;
  Associations?: Array<PhoneNumberAssociation>;
  CallingName?: string;
  CallingNameStatus?: CallingNameStatus;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
  DeletionTimestamp?: Date | string;
}
export interface PhoneNumberAssociation {
  Value?: string;
  Name?: PhoneNumberAssociationName;
  AssociatedTimestamp?: Date | string;
}
export type PhoneNumberAssociationList = Array<PhoneNumberAssociation>;
export type PhoneNumberAssociationName =
  | "AccountId"
  | "UserId"
  | "VoiceConnectorId"
  | "VoiceConnectorGroupId"
  | "SipRuleId";
export interface PhoneNumberCapabilities {
  InboundCall?: boolean;
  OutboundCall?: boolean;
  InboundSMS?: boolean;
  OutboundSMS?: boolean;
  InboundMMS?: boolean;
  OutboundMMS?: boolean;
}
export type PhoneNumberCountriesList = Array<PhoneNumberCountry>;
export interface PhoneNumberCountry {
  CountryCode?: string;
  SupportedPhoneNumberTypes?: Array<PhoneNumberType>;
}
export interface PhoneNumberError {
  PhoneNumberId?: string;
  ErrorCode?: ErrorCode;
  ErrorMessage?: string;
}
export type PhoneNumberErrorList = Array<PhoneNumberError>;
export type PhoneNumberList = Array<PhoneNumber>;
export type PhoneNumberMaxResults = number;

export interface PhoneNumberOrder {
  PhoneNumberOrderId?: string;
  ProductType?: PhoneNumberProductType;
  Status?: PhoneNumberOrderStatus;
  OrderedPhoneNumbers?: Array<OrderedPhoneNumber>;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
}
export type PhoneNumberOrderList = Array<PhoneNumberOrder>;
export type PhoneNumberOrderStatus =
  | "Processing"
  | "Successful"
  | "Failed"
  | "Partial";
export type PhoneNumberProductType =
  | "BusinessCalling"
  | "VoiceConnector"
  | "SipMediaApplicationDialIn";
export type PhoneNumberStatus =
  | "AcquireInProgress"
  | "AcquireFailed"
  | "Unassigned"
  | "Assigned"
  | "ReleaseInProgress"
  | "DeleteInProgress"
  | "ReleaseFailed"
  | "DeleteFailed";
export type PhoneNumberType = "Local" | "TollFree";
export type PhoneNumberTypeList = Array<PhoneNumberType>;
export type ProfileServiceMaxResults = number;

export interface PutEventsConfigurationRequest {
  AccountId: string;
  BotId: string;
  OutboundEventsHTTPSEndpoint?: string;
  LambdaFunctionArn?: string;
}
export interface PutEventsConfigurationResponse {
  EventsConfiguration?: EventsConfiguration;
}
export interface PutRetentionSettingsRequest {
  AccountId: string;
  RetentionSettings: RetentionSettings;
}
export interface PutRetentionSettingsResponse {
  RetentionSettings?: RetentionSettings;
  InitiateDeletionTimestamp?: Date | string;
}
export interface RedactConversationMessageRequest {
  AccountId: string;
  ConversationId: string;
  MessageId: string;
}
export interface RedactConversationMessageResponse {}
export interface RedactRoomMessageRequest {
  AccountId: string;
  RoomId: string;
  MessageId: string;
}
export interface RedactRoomMessageResponse {}
export interface RegenerateSecurityTokenRequest {
  AccountId: string;
  BotId: string;
}
export interface RegenerateSecurityTokenResponse {
  Bot?: Bot;
}
export type RegistrationStatus = "Unregistered" | "Registered" | "Suspended";
export interface ResetPersonalPINRequest {
  AccountId: string;
  UserId: string;
}
export interface ResetPersonalPINResponse {
  User?: User;
}
export declare class ResourceLimitExceededException extends EffectData.TaggedError(
  "ResourceLimitExceededException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export interface RestorePhoneNumberRequest {
  PhoneNumberId: string;
}
export interface RestorePhoneNumberResponse {
  PhoneNumber?: PhoneNumber;
}
export type ResultMax = number;

export type RetentionDays = number;

export interface RetentionSettings {
  RoomRetentionSettings?: RoomRetentionSettings;
  ConversationRetentionSettings?: ConversationRetentionSettings;
}
export interface Room {
  RoomId?: string;
  Name?: string;
  AccountId?: string;
  CreatedBy?: string;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
}
export type RoomList = Array<Room>;
export interface RoomMembership {
  RoomId?: string;
  Member?: Member;
  Role?: RoomMembershipRole;
  InvitedBy?: string;
  UpdatedTimestamp?: Date | string;
}
export type RoomMembershipList = Array<RoomMembership>;
export type RoomMembershipRole = "Administrator" | "Member";
export interface RoomRetentionSettings {
  RetentionDays?: number;
}
export interface SearchAvailablePhoneNumbersRequest {
  AreaCode?: string;
  City?: string;
  Country?: string;
  State?: string;
  TollFreePrefix?: string;
  PhoneNumberType?: PhoneNumberType;
  MaxResults?: number;
  NextToken?: string;
}
export interface SearchAvailablePhoneNumbersResponse {
  E164PhoneNumbers?: Array<string>;
  NextToken?: string;
}
export type SensitiveString = string;

export declare class ServiceFailureException extends EffectData.TaggedError(
  "ServiceFailureException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export interface SigninDelegateGroup {
  GroupName?: string;
}
export type SigninDelegateGroupList = Array<SigninDelegateGroup>;
export type ChimeString = string;

export interface TelephonySettings {
  InboundCalling: boolean;
  OutboundCalling: boolean;
  SMS: boolean;
}
export declare class ThrottledClientException extends EffectData.TaggedError(
  "ThrottledClientException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export type TollFreePrefix = string;

export declare class UnauthorizedClientException extends EffectData.TaggedError(
  "UnauthorizedClientException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export declare class UnprocessableEntityException extends EffectData.TaggedError(
  "UnprocessableEntityException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export interface UpdateAccountRequest {
  AccountId: string;
  Name?: string;
  DefaultLicense?: License;
}
export interface UpdateAccountResponse {
  Account?: Account;
}
export interface UpdateAccountSettingsRequest {
  AccountId: string;
  AccountSettings: AccountSettings;
}
export interface UpdateAccountSettingsResponse {}
export interface UpdateBotRequest {
  AccountId: string;
  BotId: string;
  Disabled?: boolean;
}
export interface UpdateBotResponse {
  Bot?: Bot;
}
export interface UpdateGlobalSettingsRequest {
  BusinessCalling?: BusinessCallingSettings;
  VoiceConnector?: VoiceConnectorSettings;
}
export interface UpdatePhoneNumberRequest {
  PhoneNumberId: string;
  ProductType?: PhoneNumberProductType;
  CallingName?: string;
}
export interface UpdatePhoneNumberRequestItem {
  PhoneNumberId: string;
  ProductType?: PhoneNumberProductType;
  CallingName?: string;
}
export type UpdatePhoneNumberRequestItemList =
  Array<UpdatePhoneNumberRequestItem>;
export interface UpdatePhoneNumberResponse {
  PhoneNumber?: PhoneNumber;
}
export interface UpdatePhoneNumberSettingsRequest {
  CallingName: string;
}
export interface UpdateRoomMembershipRequest {
  AccountId: string;
  RoomId: string;
  MemberId: string;
  Role?: RoomMembershipRole;
}
export interface UpdateRoomMembershipResponse {
  RoomMembership?: RoomMembership;
}
export interface UpdateRoomRequest {
  AccountId: string;
  RoomId: string;
  Name?: string;
}
export interface UpdateRoomResponse {
  Room?: Room;
}
export interface UpdateUserRequest {
  AccountId: string;
  UserId: string;
  LicenseType?: License;
  UserType?: UserType;
  AlexaForBusinessMetadata?: AlexaForBusinessMetadata;
}
export interface UpdateUserRequestItem {
  UserId: string;
  LicenseType?: License;
  UserType?: UserType;
  AlexaForBusinessMetadata?: AlexaForBusinessMetadata;
}
export type UpdateUserRequestItemList = Array<UpdateUserRequestItem>;
export interface UpdateUserResponse {
  User?: User;
}
export interface UpdateUserSettingsRequest {
  AccountId: string;
  UserId: string;
  UserSettings: UserSettings;
}
export interface User {
  UserId: string;
  AccountId?: string;
  PrimaryEmail?: string;
  PrimaryProvisionedNumber?: string;
  DisplayName?: string;
  LicenseType?: License;
  UserType?: UserType;
  UserRegistrationStatus?: RegistrationStatus;
  UserInvitationStatus?: InviteStatus;
  RegisteredOn?: Date | string;
  InvitedOn?: Date | string;
  AlexaForBusinessMetadata?: AlexaForBusinessMetadata;
  PersonalPIN?: string;
}
export type UserEmailList = Array<string>;
export interface UserError {
  UserId?: string;
  ErrorCode?: ErrorCode;
  ErrorMessage?: string;
}
export type UserErrorList = Array<UserError>;
export type UserIdList = Array<string>;
export type UserList = Array<User>;
export interface UserSettings {
  Telephony: TelephonySettings;
}
export type UserType = "PrivateUser" | "SharedDevice";
export interface VoiceConnectorSettings {
  CdrBucket?: string;
}
export declare namespace AssociatePhoneNumberWithUser {
  export type Input = AssociatePhoneNumberWithUserRequest;
  export type Output = AssociatePhoneNumberWithUserResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace AssociateSigninDelegateGroupsWithAccount {
  export type Input = AssociateSigninDelegateGroupsWithAccountRequest;
  export type Output = AssociateSigninDelegateGroupsWithAccountResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace BatchCreateRoomMembership {
  export type Input = BatchCreateRoomMembershipRequest;
  export type Output = BatchCreateRoomMembershipResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace BatchDeletePhoneNumber {
  export type Input = BatchDeletePhoneNumberRequest;
  export type Output = BatchDeletePhoneNumberResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace BatchSuspendUser {
  export type Input = BatchSuspendUserRequest;
  export type Output = BatchSuspendUserResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace BatchUnsuspendUser {
  export type Input = BatchUnsuspendUserRequest;
  export type Output = BatchUnsuspendUserResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace BatchUpdatePhoneNumber {
  export type Input = BatchUpdatePhoneNumberRequest;
  export type Output = BatchUpdatePhoneNumberResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace BatchUpdateUser {
  export type Input = BatchUpdateUserRequest;
  export type Output = BatchUpdateUserResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreateAccount {
  export type Input = CreateAccountRequest;
  export type Output = CreateAccountResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreateBot {
  export type Input = CreateBotRequest;
  export type Output = CreateBotResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreateMeetingDialOut {
  export type Input = CreateMeetingDialOutRequest;
  export type Output = CreateMeetingDialOutResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreatePhoneNumberOrder {
  export type Input = CreatePhoneNumberOrderRequest;
  export type Output = CreatePhoneNumberOrderResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreateRoom {
  export type Input = CreateRoomRequest;
  export type Output = CreateRoomResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreateRoomMembership {
  export type Input = CreateRoomMembershipRequest;
  export type Output = CreateRoomMembershipResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreateUser {
  export type Input = CreateUserRequest;
  export type Output = CreateUserResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteAccount {
  export type Input = DeleteAccountRequest;
  export type Output = DeleteAccountResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace DeleteEventsConfiguration {
  export type Input = DeleteEventsConfigurationRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeletePhoneNumber {
  export type Input = DeletePhoneNumberRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteRoom {
  export type Input = DeleteRoomRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteRoomMembership {
  export type Input = DeleteRoomMembershipRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DisassociatePhoneNumberFromUser {
  export type Input = DisassociatePhoneNumberFromUserRequest;
  export type Output = DisassociatePhoneNumberFromUserResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DisassociateSigninDelegateGroupsFromAccount {
  export type Input = DisassociateSigninDelegateGroupsFromAccountRequest;
  export type Output = DisassociateSigninDelegateGroupsFromAccountResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetAccount {
  export type Input = GetAccountRequest;
  export type Output = GetAccountResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetAccountSettings {
  export type Input = GetAccountSettingsRequest;
  export type Output = GetAccountSettingsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetBot {
  export type Input = GetBotRequest;
  export type Output = GetBotResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetEventsConfiguration {
  export type Input = GetEventsConfigurationRequest;
  export type Output = GetEventsConfigurationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetGlobalSettings {
  export type Input = {};
  export type Output = GetGlobalSettingsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetPhoneNumber {
  export type Input = GetPhoneNumberRequest;
  export type Output = GetPhoneNumberResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetPhoneNumberOrder {
  export type Input = GetPhoneNumberOrderRequest;
  export type Output = GetPhoneNumberOrderResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetPhoneNumberSettings {
  export type Input = {};
  export type Output = GetPhoneNumberSettingsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetRetentionSettings {
  export type Input = GetRetentionSettingsRequest;
  export type Output = GetRetentionSettingsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetRoom {
  export type Input = GetRoomRequest;
  export type Output = GetRoomResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetUser {
  export type Input = GetUserRequest;
  export type Output = GetUserResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetUserSettings {
  export type Input = GetUserSettingsRequest;
  export type Output = GetUserSettingsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace InviteUsers {
  export type Input = InviteUsersRequest;
  export type Output = InviteUsersResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListAccounts {
  export type Input = ListAccountsRequest;
  export type Output = ListAccountsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListBots {
  export type Input = ListBotsRequest;
  export type Output = ListBotsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListPhoneNumberOrders {
  export type Input = ListPhoneNumberOrdersRequest;
  export type Output = ListPhoneNumberOrdersResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListPhoneNumbers {
  export type Input = ListPhoneNumbersRequest;
  export type Output = ListPhoneNumbersResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListRoomMemberships {
  export type Input = ListRoomMembershipsRequest;
  export type Output = ListRoomMembershipsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListRooms {
  export type Input = ListRoomsRequest;
  export type Output = ListRoomsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListSupportedPhoneNumberCountries {
  export type Input = ListSupportedPhoneNumberCountriesRequest;
  export type Output = ListSupportedPhoneNumberCountriesResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListUsers {
  export type Input = ListUsersRequest;
  export type Output = ListUsersResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace LogoutUser {
  export type Input = LogoutUserRequest;
  export type Output = LogoutUserResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace PutEventsConfiguration {
  export type Input = PutEventsConfigurationRequest;
  export type Output = PutEventsConfigurationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace PutRetentionSettings {
  export type Input = PutRetentionSettingsRequest;
  export type Output = PutRetentionSettingsResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace RedactConversationMessage {
  export type Input = RedactConversationMessageRequest;
  export type Output = RedactConversationMessageResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace RedactRoomMessage {
  export type Input = RedactRoomMessageRequest;
  export type Output = RedactRoomMessageResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace RegenerateSecurityToken {
  export type Input = RegenerateSecurityTokenRequest;
  export type Output = RegenerateSecurityTokenResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ResetPersonalPIN {
  export type Input = ResetPersonalPINRequest;
  export type Output = ResetPersonalPINResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace RestorePhoneNumber {
  export type Input = RestorePhoneNumberRequest;
  export type Output = RestorePhoneNumberResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace SearchAvailablePhoneNumbers {
  export type Input = SearchAvailablePhoneNumbersRequest;
  export type Output = SearchAvailablePhoneNumbersResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdateAccount {
  export type Input = UpdateAccountRequest;
  export type Output = UpdateAccountResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdateAccountSettings {
  export type Input = UpdateAccountSettingsRequest;
  export type Output = UpdateAccountSettingsResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdateBot {
  export type Input = UpdateBotRequest;
  export type Output = UpdateBotResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdateGlobalSettings {
  export type Input = UpdateGlobalSettingsRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdatePhoneNumber {
  export type Input = UpdatePhoneNumberRequest;
  export type Output = UpdatePhoneNumberResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdatePhoneNumberSettings {
  export type Input = UpdatePhoneNumberSettingsRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdateRoom {
  export type Input = UpdateRoomRequest;
  export type Output = UpdateRoomResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdateRoomMembership {
  export type Input = UpdateRoomMembershipRequest;
  export type Output = UpdateRoomMembershipResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdateUser {
  export type Input = UpdateUserRequest;
  export type Output = UpdateUserResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdateUserSettings {
  export type Input = UpdateUserSettingsRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}
