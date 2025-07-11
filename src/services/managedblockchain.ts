import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface TaigaWebService {
  createAccessor(
    input: CreateAccessorInput,
  ): Effect.Effect<
    CreateAccessorOutput,
    AccessDeniedException | InternalServiceErrorException | InvalidRequestException | ResourceAlreadyExistsException | ResourceLimitExceededException | ThrottlingException | TooManyTagsException | CommonAwsError
  >;
  createMember(
    input: CreateMemberInput,
  ): Effect.Effect<
    CreateMemberOutput,
    AccessDeniedException | InternalServiceErrorException | InvalidRequestException | ResourceAlreadyExistsException | ResourceLimitExceededException | ResourceNotFoundException | ResourceNotReadyException | ThrottlingException | TooManyTagsException | CommonAwsError
  >;
  createNetwork(
    input: CreateNetworkInput,
  ): Effect.Effect<
    CreateNetworkOutput,
    AccessDeniedException | InternalServiceErrorException | InvalidRequestException | ResourceAlreadyExistsException | ResourceLimitExceededException | ThrottlingException | TooManyTagsException | CommonAwsError
  >;
  createNode(
    input: CreateNodeInput,
  ): Effect.Effect<
    CreateNodeOutput,
    AccessDeniedException | InternalServiceErrorException | InvalidRequestException | ResourceAlreadyExistsException | ResourceLimitExceededException | ResourceNotFoundException | ResourceNotReadyException | ThrottlingException | TooManyTagsException | CommonAwsError
  >;
  createProposal(
    input: CreateProposalInput,
  ): Effect.Effect<
    CreateProposalOutput,
    AccessDeniedException | InternalServiceErrorException | InvalidRequestException | ResourceNotFoundException | ResourceNotReadyException | ThrottlingException | TooManyTagsException | CommonAwsError
  >;
  deleteAccessor(
    input: DeleteAccessorInput,
  ): Effect.Effect<
    DeleteAccessorOutput,
    AccessDeniedException | InternalServiceErrorException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteMember(
    input: DeleteMemberInput,
  ): Effect.Effect<
    DeleteMemberOutput,
    AccessDeniedException | InternalServiceErrorException | InvalidRequestException | ResourceNotFoundException | ResourceNotReadyException | ThrottlingException | CommonAwsError
  >;
  deleteNode(
    input: DeleteNodeInput,
  ): Effect.Effect<
    DeleteNodeOutput,
    AccessDeniedException | InternalServiceErrorException | InvalidRequestException | ResourceNotFoundException | ResourceNotReadyException | ThrottlingException | CommonAwsError
  >;
  getAccessor(
    input: GetAccessorInput,
  ): Effect.Effect<
    GetAccessorOutput,
    AccessDeniedException | InternalServiceErrorException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getMember(
    input: GetMemberInput,
  ): Effect.Effect<
    GetMemberOutput,
    AccessDeniedException | InternalServiceErrorException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getNetwork(
    input: GetNetworkInput,
  ): Effect.Effect<
    GetNetworkOutput,
    AccessDeniedException | InternalServiceErrorException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getNode(
    input: GetNodeInput,
  ): Effect.Effect<
    GetNodeOutput,
    AccessDeniedException | InternalServiceErrorException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getProposal(
    input: GetProposalInput,
  ): Effect.Effect<
    GetProposalOutput,
    AccessDeniedException | InternalServiceErrorException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listAccessors(
    input: ListAccessorsInput,
  ): Effect.Effect<
    ListAccessorsOutput,
    AccessDeniedException | InternalServiceErrorException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  listInvitations(
    input: ListInvitationsInput,
  ): Effect.Effect<
    ListInvitationsOutput,
    AccessDeniedException | InternalServiceErrorException | InvalidRequestException | ResourceLimitExceededException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listMembers(
    input: ListMembersInput,
  ): Effect.Effect<
    ListMembersOutput,
    AccessDeniedException | InternalServiceErrorException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  listNetworks(
    input: ListNetworksInput,
  ): Effect.Effect<
    ListNetworksOutput,
    AccessDeniedException | InternalServiceErrorException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  listNodes(
    input: ListNodesInput,
  ): Effect.Effect<
    ListNodesOutput,
    AccessDeniedException | InternalServiceErrorException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  listProposalVotes(
    input: ListProposalVotesInput,
  ): Effect.Effect<
    ListProposalVotesOutput,
    AccessDeniedException | InternalServiceErrorException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  listProposals(
    input: ListProposalsInput,
  ): Effect.Effect<
    ListProposalsOutput,
    AccessDeniedException | InternalServiceErrorException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    InternalServiceErrorException | InvalidRequestException | ResourceNotFoundException | ResourceNotReadyException | CommonAwsError
  >;
  rejectInvitation(
    input: RejectInvitationInput,
  ): Effect.Effect<
    RejectInvitationOutput,
    AccessDeniedException | IllegalActionException | InternalServiceErrorException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    InternalServiceErrorException | InvalidRequestException | ResourceNotFoundException | ResourceNotReadyException | TooManyTagsException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    InternalServiceErrorException | InvalidRequestException | ResourceNotFoundException | ResourceNotReadyException | CommonAwsError
  >;
  updateMember(
    input: UpdateMemberInput,
  ): Effect.Effect<
    UpdateMemberOutput,
    AccessDeniedException | InternalServiceErrorException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateNode(
    input: UpdateNodeInput,
  ): Effect.Effect<
    UpdateNodeOutput,
    AccessDeniedException | InternalServiceErrorException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  voteOnProposal(
    input: VoteOnProposalInput,
  ): Effect.Effect<
    VoteOnProposalOutput,
    AccessDeniedException | IllegalActionException | InternalServiceErrorException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
}

export type Managedblockchain = TaigaWebService;

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export interface Accessor {
  Id?: string;
  Type?: AccessorType;
  BillingToken?: string;
  Status?: AccessorStatus;
  CreationDate?: Date | string;
  Arn?: string;
  Tags?: Record<string, string>;
  NetworkType?: AccessorNetworkType;
}
export type AccessorBillingTokenString = string;

export type AccessorListMaxResults = number;

export type AccessorNetworkType = "ETHEREUM_GOERLI" | "ETHEREUM_MAINNET" | "ETHEREUM_MAINNET_AND_GOERLI" | "POLYGON_MAINNET" | "POLYGON_MUMBAI";
export type AccessorStatus = "AVAILABLE" | "PENDING_DELETION" | "DELETED";
export interface AccessorSummary {
  Id?: string;
  Type?: AccessorType;
  Status?: AccessorStatus;
  CreationDate?: Date | string;
  Arn?: string;
  NetworkType?: AccessorNetworkType;
}
export type AccessorSummaryList = Array<AccessorSummary>;
export type AccessorType = "BILLING_TOKEN";
export interface ApprovalThresholdPolicy {
  ThresholdPercentage?: number;
  ProposalDurationInHours?: number;
  ThresholdComparator?: ThresholdComparator;
}
export type ArnString = string;

export type AvailabilityZoneString = string;

export type ClientRequestTokenString = string;

export interface CreateAccessorInput {
  ClientRequestToken: string;
  AccessorType: AccessorType;
  Tags?: Record<string, string>;
  NetworkType?: AccessorNetworkType;
}
export interface CreateAccessorOutput {
  AccessorId?: string;
  BillingToken?: string;
  NetworkType?: AccessorNetworkType;
}
export interface CreateMemberInput {
  ClientRequestToken: string;
  InvitationId: string;
  NetworkId: string;
  MemberConfiguration: MemberConfiguration;
}
export interface CreateMemberOutput {
  MemberId?: string;
}
export interface CreateNetworkInput {
  ClientRequestToken: string;
  Name: string;
  Description?: string;
  Framework: Framework;
  FrameworkVersion: string;
  FrameworkConfiguration?: NetworkFrameworkConfiguration;
  VotingPolicy: VotingPolicy;
  MemberConfiguration: MemberConfiguration;
  Tags?: Record<string, string>;
}
export interface CreateNetworkOutput {
  NetworkId?: string;
  MemberId?: string;
}
export interface CreateNodeInput {
  ClientRequestToken: string;
  NetworkId: string;
  MemberId?: string;
  NodeConfiguration: NodeConfiguration;
  Tags?: Record<string, string>;
}
export interface CreateNodeOutput {
  NodeId?: string;
}
export interface CreateProposalInput {
  ClientRequestToken: string;
  NetworkId: string;
  MemberId: string;
  Actions: ProposalActions;
  Description?: string;
  Tags?: Record<string, string>;
}
export interface CreateProposalOutput {
  ProposalId?: string;
}
export interface DeleteAccessorInput {
  AccessorId: string;
}
export interface DeleteAccessorOutput {
}
export interface DeleteMemberInput {
  NetworkId: string;
  MemberId: string;
}
export interface DeleteMemberOutput {
}
export interface DeleteNodeInput {
  NetworkId: string;
  MemberId?: string;
  NodeId: string;
}
export interface DeleteNodeOutput {
}
export type DescriptionString = string;

export type Edition = "STARTER" | "STANDARD";
export type Enabled = boolean;

export type ExceptionMessage = string;

export type Framework = "HYPERLEDGER_FABRIC" | "ETHEREUM";
export type FrameworkVersionString = string;

export interface GetAccessorInput {
  AccessorId: string;
}
export interface GetAccessorOutput {
  Accessor?: Accessor;
}
export interface GetMemberInput {
  NetworkId: string;
  MemberId: string;
}
export interface GetMemberOutput {
  Member?: Member;
}
export interface GetNetworkInput {
  NetworkId: string;
}
export interface GetNetworkOutput {
  Network?: Network;
}
export interface GetNodeInput {
  NetworkId: string;
  MemberId?: string;
  NodeId: string;
}
export interface GetNodeOutput {
  Node?: Node;
}
export interface GetProposalInput {
  NetworkId: string;
  ProposalId: string;
}
export interface GetProposalOutput {
  Proposal?: Proposal;
}
export declare class IllegalActionException extends Data.TaggedError(
  "IllegalActionException",
)<{
  readonly Message?: string;
}> {}
export type InputTagMap = Record<string, string>;
export type InstanceTypeString = string;

export declare class InternalServiceErrorException extends Data.TaggedError(
  "InternalServiceErrorException",
)<{
}> {}
export declare class InvalidRequestException extends Data.TaggedError(
  "InvalidRequestException",
)<{
  readonly Message?: string;
}> {}
export interface Invitation {
  InvitationId?: string;
  CreationDate?: Date | string;
  ExpirationDate?: Date | string;
  Status?: InvitationStatus;
  NetworkSummary?: NetworkSummary;
  Arn?: string;
}
export type InvitationList = Array<Invitation>;
export type InvitationStatus = "PENDING" | "ACCEPTED" | "ACCEPTING" | "REJECTED" | "EXPIRED";
export interface InviteAction {
  Principal: string;
}
export type InviteActionList = Array<InviteAction>;
export type IsOwned = boolean;

export interface ListAccessorsInput {
  MaxResults?: number;
  NextToken?: string;
  NetworkType?: AccessorNetworkType;
}
export interface ListAccessorsOutput {
  Accessors?: Array<AccessorSummary>;
  NextToken?: string;
}
export interface ListInvitationsInput {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListInvitationsOutput {
  Invitations?: Array<Invitation>;
  NextToken?: string;
}
export interface ListMembersInput {
  NetworkId: string;
  Name?: string;
  Status?: MemberStatus;
  IsOwned?: boolean;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListMembersOutput {
  Members?: Array<MemberSummary>;
  NextToken?: string;
}
export interface ListNetworksInput {
  Name?: string;
  Framework?: Framework;
  Status?: NetworkStatus;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListNetworksOutput {
  Networks?: Array<NetworkSummary>;
  NextToken?: string;
}
export interface ListNodesInput {
  NetworkId: string;
  MemberId?: string;
  Status?: NodeStatus;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListNodesOutput {
  Nodes?: Array<NodeSummary>;
  NextToken?: string;
}
export interface ListProposalsInput {
  NetworkId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListProposalsOutput {
  Proposals?: Array<ProposalSummary>;
  NextToken?: string;
}
export interface ListProposalVotesInput {
  NetworkId: string;
  ProposalId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListProposalVotesOutput {
  ProposalVotes?: Array<VoteSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export interface LogConfiguration {
  Enabled?: boolean;
}
export interface LogConfigurations {
  Cloudwatch?: LogConfiguration;
}
export interface Member {
  NetworkId?: string;
  Id?: string;
  Name?: string;
  Description?: string;
  FrameworkAttributes?: MemberFrameworkAttributes;
  LogPublishingConfiguration?: MemberLogPublishingConfiguration;
  Status?: MemberStatus;
  CreationDate?: Date | string;
  Tags?: Record<string, string>;
  Arn?: string;
  KmsKeyArn?: string;
}
export interface MemberConfiguration {
  Name: string;
  Description?: string;
  FrameworkConfiguration: MemberFrameworkConfiguration;
  LogPublishingConfiguration?: MemberLogPublishingConfiguration;
  Tags?: Record<string, string>;
  KmsKeyArn?: string;
}
export interface MemberFabricAttributes {
  AdminUsername?: string;
  CaEndpoint?: string;
}
export interface MemberFabricConfiguration {
  AdminUsername: string;
  AdminPassword: string;
}
export interface MemberFabricLogPublishingConfiguration {
  CaLogs?: LogConfigurations;
}
export interface MemberFrameworkAttributes {
  Fabric?: MemberFabricAttributes;
}
export interface MemberFrameworkConfiguration {
  Fabric?: MemberFabricConfiguration;
}
export type MemberListMaxResults = number;

export interface MemberLogPublishingConfiguration {
  Fabric?: MemberFabricLogPublishingConfiguration;
}
export type MemberStatus = "CREATING" | "AVAILABLE" | "CREATE_FAILED" | "UPDATING" | "DELETING" | "DELETED" | "INACCESSIBLE_ENCRYPTION_KEY";
export interface MemberSummary {
  Id?: string;
  Name?: string;
  Description?: string;
  Status?: MemberStatus;
  CreationDate?: Date | string;
  IsOwned?: boolean;
  Arn?: string;
}
export type MemberSummaryList = Array<MemberSummary>;
export type NameString = string;

export interface Network {
  Id?: string;
  Name?: string;
  Description?: string;
  Framework?: Framework;
  FrameworkVersion?: string;
  FrameworkAttributes?: NetworkFrameworkAttributes;
  VpcEndpointServiceName?: string;
  VotingPolicy?: VotingPolicy;
  Status?: NetworkStatus;
  CreationDate?: Date | string;
  Tags?: Record<string, string>;
  Arn?: string;
}
export interface NetworkEthereumAttributes {
  ChainId?: string;
}
export interface NetworkFabricAttributes {
  OrderingServiceEndpoint?: string;
  Edition?: Edition;
}
export interface NetworkFabricConfiguration {
  Edition: Edition;
}
export interface NetworkFrameworkAttributes {
  Fabric?: NetworkFabricAttributes;
  Ethereum?: NetworkEthereumAttributes;
}
export interface NetworkFrameworkConfiguration {
  Fabric?: NetworkFabricConfiguration;
}
export type NetworkListMaxResults = number;

export type NetworkMemberNameString = string;

export type NetworkStatus = "CREATING" | "AVAILABLE" | "CREATE_FAILED" | "DELETING" | "DELETED";
export interface NetworkSummary {
  Id?: string;
  Name?: string;
  Description?: string;
  Framework?: Framework;
  FrameworkVersion?: string;
  Status?: NetworkStatus;
  CreationDate?: Date | string;
  Arn?: string;
}
export type NetworkSummaryList = Array<NetworkSummary>;
export interface Node {
  NetworkId?: string;
  MemberId?: string;
  Id?: string;
  InstanceType?: string;
  AvailabilityZone?: string;
  FrameworkAttributes?: NodeFrameworkAttributes;
  LogPublishingConfiguration?: NodeLogPublishingConfiguration;
  StateDB?: StateDBType;
  Status?: NodeStatus;
  CreationDate?: Date | string;
  Tags?: Record<string, string>;
  Arn?: string;
  KmsKeyArn?: string;
}
export interface NodeConfiguration {
  InstanceType: string;
  AvailabilityZone?: string;
  LogPublishingConfiguration?: NodeLogPublishingConfiguration;
  StateDB?: StateDBType;
}
export interface NodeEthereumAttributes {
  HttpEndpoint?: string;
  WebSocketEndpoint?: string;
}
export interface NodeFabricAttributes {
  PeerEndpoint?: string;
  PeerEventEndpoint?: string;
}
export interface NodeFabricLogPublishingConfiguration {
  ChaincodeLogs?: LogConfigurations;
  PeerLogs?: LogConfigurations;
}
export interface NodeFrameworkAttributes {
  Fabric?: NodeFabricAttributes;
  Ethereum?: NodeEthereumAttributes;
}
export type NodeListMaxResults = number;

export interface NodeLogPublishingConfiguration {
  Fabric?: NodeFabricLogPublishingConfiguration;
}
export type NodeStatus = "CREATING" | "AVAILABLE" | "UNHEALTHY" | "CREATE_FAILED" | "UPDATING" | "DELETING" | "DELETED" | "FAILED" | "INACCESSIBLE_ENCRYPTION_KEY";
export interface NodeSummary {
  Id?: string;
  Status?: NodeStatus;
  CreationDate?: Date | string;
  AvailabilityZone?: string;
  InstanceType?: string;
  Arn?: string;
}
export type NodeSummaryList = Array<NodeSummary>;
export type OutputTagMap = Record<string, string>;
export type PaginationToken = string;

export type PasswordString = string;

export type PrincipalString = string;

export interface Proposal {
  ProposalId?: string;
  NetworkId?: string;
  Description?: string;
  Actions?: ProposalActions;
  ProposedByMemberId?: string;
  ProposedByMemberName?: string;
  Status?: ProposalStatus;
  CreationDate?: Date | string;
  ExpirationDate?: Date | string;
  YesVoteCount?: number;
  NoVoteCount?: number;
  OutstandingVoteCount?: number;
  Tags?: Record<string, string>;
  Arn?: string;
}
export interface ProposalActions {
  Invitations?: Array<InviteAction>;
  Removals?: Array<RemoveAction>;
}
export type ProposalDurationInt = number;

export type ProposalListMaxResults = number;

export type ProposalStatus = "IN_PROGRESS" | "APPROVED" | "REJECTED" | "EXPIRED" | "ACTION_FAILED";
export interface ProposalSummary {
  ProposalId?: string;
  Description?: string;
  ProposedByMemberId?: string;
  ProposedByMemberName?: string;
  Status?: ProposalStatus;
  CreationDate?: Date | string;
  ExpirationDate?: Date | string;
  Arn?: string;
}
export type ProposalSummaryList = Array<ProposalSummary>;
export type ProposalVoteList = Array<VoteSummary>;
export interface RejectInvitationInput {
  InvitationId: string;
}
export interface RejectInvitationOutput {
}
export interface RemoveAction {
  MemberId: string;
}
export type RemoveActionList = Array<RemoveAction>;
export declare class ResourceAlreadyExistsException extends Data.TaggedError(
  "ResourceAlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export type ResourceIdString = string;

export declare class ResourceLimitExceededException extends Data.TaggedError(
  "ResourceLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
  readonly ResourceName?: string;
}> {}
export declare class ResourceNotReadyException extends Data.TaggedError(
  "ResourceNotReadyException",
)<{
  readonly Message?: string;
}> {}
export type StateDBType = "LevelDB" | "CouchDB";
export type TagKey = string;

export type TagKeyList = Array<string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {
}
export type TagValue = string;

export type ThresholdComparator = "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO";
export type ThresholdPercentageInt = number;

export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
}> {}
export type Timestamp = Date | string;

export declare class TooManyTagsException extends Data.TaggedError(
  "TooManyTagsException",
)<{
  readonly Message?: string;
  readonly ResourceName?: string;
}> {}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateMemberInput {
  NetworkId: string;
  MemberId: string;
  LogPublishingConfiguration?: MemberLogPublishingConfiguration;
}
export interface UpdateMemberOutput {
}
export interface UpdateNodeInput {
  NetworkId: string;
  MemberId?: string;
  NodeId: string;
  LogPublishingConfiguration?: NodeLogPublishingConfiguration;
}
export interface UpdateNodeOutput {
}
export type UsernameString = string;

export type VoteCount = number;

export interface VoteOnProposalInput {
  NetworkId: string;
  ProposalId: string;
  VoterMemberId: string;
  Vote: VoteValue;
}
export interface VoteOnProposalOutput {
}
export interface VoteSummary {
  Vote?: VoteValue;
  MemberName?: string;
  MemberId?: string;
}
export type VoteValue = "YES" | "NO";
export interface VotingPolicy {
  ApprovalThresholdPolicy?: ApprovalThresholdPolicy;
}
export declare namespace CreateAccessor {
  export type Input = CreateAccessorInput;
  export type Output = CreateAccessorOutput;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ResourceLimitExceededException
    | ThrottlingException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreateMember {
  export type Input = CreateMemberInput;
  export type Output = CreateMemberOutput;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | ResourceNotReadyException
    | ThrottlingException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreateNetwork {
  export type Input = CreateNetworkInput;
  export type Output = CreateNetworkOutput;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ResourceLimitExceededException
    | ThrottlingException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreateNode {
  export type Input = CreateNodeInput;
  export type Output = CreateNodeOutput;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | ResourceNotReadyException
    | ThrottlingException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreateProposal {
  export type Input = CreateProposalInput;
  export type Output = CreateProposalOutput;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | ResourceNotReadyException
    | ThrottlingException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace DeleteAccessor {
  export type Input = DeleteAccessorInput;
  export type Output = DeleteAccessorOutput;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteMember {
  export type Input = DeleteMemberInput;
  export type Output = DeleteMemberOutput;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | ResourceNotReadyException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteNode {
  export type Input = DeleteNodeInput;
  export type Output = DeleteNodeOutput;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | ResourceNotReadyException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetAccessor {
  export type Input = GetAccessorInput;
  export type Output = GetAccessorOutput;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetMember {
  export type Input = GetMemberInput;
  export type Output = GetMemberOutput;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetNetwork {
  export type Input = GetNetworkInput;
  export type Output = GetNetworkOutput;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetNode {
  export type Input = GetNodeInput;
  export type Output = GetNodeOutput;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetProposal {
  export type Input = GetProposalInput;
  export type Output = GetProposalOutput;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAccessors {
  export type Input = ListAccessorsInput;
  export type Output = ListAccessorsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListInvitations {
  export type Input = ListInvitationsInput;
  export type Output = ListInvitationsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListMembers {
  export type Input = ListMembersInput;
  export type Output = ListMembersOutput;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListNetworks {
  export type Input = ListNetworksInput;
  export type Output = ListNetworksOutput;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListNodes {
  export type Input = ListNodesInput;
  export type Output = ListNodesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListProposalVotes {
  export type Input = ListProposalVotesInput;
  export type Output = ListProposalVotesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListProposals {
  export type Input = ListProposalsInput;
  export type Output = ListProposalsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | ResourceNotReadyException
    | CommonAwsError;
}

export declare namespace RejectInvitation {
  export type Input = RejectInvitationInput;
  export type Output = RejectInvitationOutput;
  export type Error =
    | AccessDeniedException
    | IllegalActionException
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | ResourceNotReadyException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | ResourceNotReadyException
    | CommonAwsError;
}

export declare namespace UpdateMember {
  export type Input = UpdateMemberInput;
  export type Output = UpdateMemberOutput;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateNode {
  export type Input = UpdateNodeInput;
  export type Output = UpdateNodeOutput;
  export type Error =
    | AccessDeniedException
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace VoteOnProposal {
  export type Input = VoteOnProposalInput;
  export type Output = VoteOnProposalOutput;
  export type Error =
    | AccessDeniedException
    | IllegalActionException
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

