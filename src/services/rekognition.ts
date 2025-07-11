import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface RekognitionService {
  associateFaces(
    input: AssociateFacesRequest,
  ): Effect.Effect<
    AssociateFacesResponse,
    | AccessDeniedException
    | ConflictException
    | IdempotentParameterMismatchException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  compareFaces(
    input: CompareFacesRequest,
  ): Effect.Effect<
    CompareFacesResponse,
    | AccessDeniedException
    | ImageTooLargeException
    | InternalServerError
    | InvalidImageFormatException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  copyProjectVersion(
    input: CopyProjectVersionRequest,
  ): Effect.Effect<
    CopyProjectVersionResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  createCollection(
    input: CreateCollectionRequest,
  ): Effect.Effect<
    CreateCollectionResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceAlreadyExistsException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  createDataset(
    input: CreateDatasetRequest,
  ): Effect.Effect<
    CreateDatasetResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | InvalidS3ObjectException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createFaceLivenessSession(
    input: CreateFaceLivenessSessionRequest,
  ): Effect.Effect<
    CreateFaceLivenessSessionResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  createProject(
    input: CreateProjectRequest,
  ): Effect.Effect<
    CreateProjectResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ThrottlingException
    | CommonAwsError
  >;
  createProjectVersion(
    input: CreateProjectVersionRequest,
  ): Effect.Effect<
    CreateProjectVersionResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  createStreamProcessor(
    input: CreateStreamProcessorRequest,
  ): Effect.Effect<
    CreateStreamProcessorResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  createUser(
    input: CreateUserRequest,
  ): Effect.Effect<
    CreateUserResponse,
    | AccessDeniedException
    | ConflictException
    | IdempotentParameterMismatchException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteCollection(
    input: DeleteCollectionRequest,
  ): Effect.Effect<
    DeleteCollectionResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteDataset(
    input: DeleteDatasetRequest,
  ): Effect.Effect<
    DeleteDatasetResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteFaces(
    input: DeleteFacesRequest,
  ): Effect.Effect<
    DeleteFacesResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteProject(
    input: DeleteProjectRequest,
  ): Effect.Effect<
    DeleteProjectResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteProjectPolicy(
    input: DeleteProjectPolicyRequest,
  ): Effect.Effect<
    DeleteProjectPolicyResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | InvalidPolicyRevisionIdException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteProjectVersion(
    input: DeleteProjectVersionRequest,
  ): Effect.Effect<
    DeleteProjectVersionResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteStreamProcessor(
    input: DeleteStreamProcessorRequest,
  ): Effect.Effect<
    DeleteStreamProcessorResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteUser(
    input: DeleteUserRequest,
  ): Effect.Effect<
    DeleteUserResponse,
    | AccessDeniedException
    | ConflictException
    | IdempotentParameterMismatchException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeCollection(
    input: DescribeCollectionRequest,
  ): Effect.Effect<
    DescribeCollectionResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeDataset(
    input: DescribeDatasetRequest,
  ): Effect.Effect<
    DescribeDatasetResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeProjects(
    input: DescribeProjectsRequest,
  ): Effect.Effect<
    DescribeProjectsResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  describeProjectVersions(
    input: DescribeProjectVersionsRequest,
  ): Effect.Effect<
    DescribeProjectVersionsResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeStreamProcessor(
    input: DescribeStreamProcessorRequest,
  ): Effect.Effect<
    DescribeStreamProcessorResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  detectCustomLabels(
    input: DetectCustomLabelsRequest,
  ): Effect.Effect<
    DetectCustomLabelsResponse,
    | AccessDeniedException
    | ImageTooLargeException
    | InternalServerError
    | InvalidImageFormatException
    | InvalidParameterException
    | InvalidS3ObjectException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ResourceNotReadyException
    | ThrottlingException
    | CommonAwsError
  >;
  detectFaces(
    input: DetectFacesRequest,
  ): Effect.Effect<
    DetectFacesResponse,
    | AccessDeniedException
    | ImageTooLargeException
    | InternalServerError
    | InvalidImageFormatException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  detectLabels(
    input: DetectLabelsRequest,
  ): Effect.Effect<
    DetectLabelsResponse,
    | AccessDeniedException
    | ImageTooLargeException
    | InternalServerError
    | InvalidImageFormatException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  detectModerationLabels(
    input: DetectModerationLabelsRequest,
  ): Effect.Effect<
    DetectModerationLabelsResponse,
    | AccessDeniedException
    | HumanLoopQuotaExceededException
    | ImageTooLargeException
    | InternalServerError
    | InvalidImageFormatException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ResourceNotReadyException
    | ThrottlingException
    | CommonAwsError
  >;
  detectProtectiveEquipment(
    input: DetectProtectiveEquipmentRequest,
  ): Effect.Effect<
    DetectProtectiveEquipmentResponse,
    | AccessDeniedException
    | ImageTooLargeException
    | InternalServerError
    | InvalidImageFormatException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  detectText(
    input: DetectTextRequest,
  ): Effect.Effect<
    DetectTextResponse,
    | AccessDeniedException
    | ImageTooLargeException
    | InternalServerError
    | InvalidImageFormatException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  disassociateFaces(
    input: DisassociateFacesRequest,
  ): Effect.Effect<
    DisassociateFacesResponse,
    | AccessDeniedException
    | ConflictException
    | IdempotentParameterMismatchException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  distributeDatasetEntries(
    input: DistributeDatasetEntriesRequest,
  ): Effect.Effect<
    DistributeDatasetEntriesResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ResourceNotReadyException
    | ThrottlingException
    | CommonAwsError
  >;
  getCelebrityInfo(
    input: GetCelebrityInfoRequest,
  ): Effect.Effect<
    GetCelebrityInfoResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getCelebrityRecognition(
    input: GetCelebrityRecognitionRequest,
  ): Effect.Effect<
    GetCelebrityRecognitionResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getContentModeration(
    input: GetContentModerationRequest,
  ): Effect.Effect<
    GetContentModerationResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getFaceDetection(
    input: GetFaceDetectionRequest,
  ): Effect.Effect<
    GetFaceDetectionResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getFaceLivenessSessionResults(
    input: GetFaceLivenessSessionResultsRequest,
  ): Effect.Effect<
    GetFaceLivenessSessionResultsResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | SessionNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getFaceSearch(
    input: GetFaceSearchRequest,
  ): Effect.Effect<
    GetFaceSearchResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getLabelDetection(
    input: GetLabelDetectionRequest,
  ): Effect.Effect<
    GetLabelDetectionResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getMediaAnalysisJob(
    input: GetMediaAnalysisJobRequest,
  ): Effect.Effect<
    GetMediaAnalysisJobResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getPersonTracking(
    input: GetPersonTrackingRequest,
  ): Effect.Effect<
    GetPersonTrackingResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getSegmentDetection(
    input: GetSegmentDetectionRequest,
  ): Effect.Effect<
    GetSegmentDetectionResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getTextDetection(
    input: GetTextDetectionRequest,
  ): Effect.Effect<
    GetTextDetectionResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  indexFaces(
    input: IndexFacesRequest,
  ): Effect.Effect<
    IndexFacesResponse,
    | AccessDeniedException
    | ImageTooLargeException
    | InternalServerError
    | InvalidImageFormatException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  listCollections(
    input: ListCollectionsRequest,
  ): Effect.Effect<
    ListCollectionsResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listDatasetEntries(
    input: ListDatasetEntriesRequest,
  ): Effect.Effect<
    ListDatasetEntriesResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ResourceNotReadyException
    | ThrottlingException
    | CommonAwsError
  >;
  listDatasetLabels(
    input: ListDatasetLabelsRequest,
  ): Effect.Effect<
    ListDatasetLabelsResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ResourceNotReadyException
    | ThrottlingException
    | CommonAwsError
  >;
  listFaces(
    input: ListFacesRequest,
  ): Effect.Effect<
    ListFacesResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listMediaAnalysisJobs(
    input: ListMediaAnalysisJobsRequest,
  ): Effect.Effect<
    ListMediaAnalysisJobsResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  listProjectPolicies(
    input: ListProjectPoliciesRequest,
  ): Effect.Effect<
    ListProjectPoliciesResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listStreamProcessors(
    input: ListStreamProcessorsRequest,
  ): Effect.Effect<
    ListStreamProcessorsResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listUsers(
    input: ListUsersRequest,
  ): Effect.Effect<
    ListUsersResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  putProjectPolicy(
    input: PutProjectPolicyRequest,
  ): Effect.Effect<
    PutProjectPolicyResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | InvalidPolicyRevisionIdException
    | LimitExceededException
    | MalformedPolicyDocumentException
    | ProvisionedThroughputExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  recognizeCelebrities(
    input: RecognizeCelebritiesRequest,
  ): Effect.Effect<
    RecognizeCelebritiesResponse,
    | AccessDeniedException
    | ImageTooLargeException
    | InternalServerError
    | InvalidImageFormatException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  searchFaces(
    input: SearchFacesRequest,
  ): Effect.Effect<
    SearchFacesResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  searchFacesByImage(
    input: SearchFacesByImageRequest,
  ): Effect.Effect<
    SearchFacesByImageResponse,
    | AccessDeniedException
    | ImageTooLargeException
    | InternalServerError
    | InvalidImageFormatException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  searchUsers(
    input: SearchUsersRequest,
  ): Effect.Effect<
    SearchUsersResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  searchUsersByImage(
    input: SearchUsersByImageRequest,
  ): Effect.Effect<
    SearchUsersByImageResponse,
    | AccessDeniedException
    | ImageTooLargeException
    | InternalServerError
    | InvalidImageFormatException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  startCelebrityRecognition(
    input: StartCelebrityRecognitionRequest,
  ): Effect.Effect<
    StartCelebrityRecognitionResponse,
    | AccessDeniedException
    | IdempotentParameterMismatchException
    | InternalServerError
    | InvalidParameterException
    | InvalidS3ObjectException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | VideoTooLargeException
    | CommonAwsError
  >;
  startContentModeration(
    input: StartContentModerationRequest,
  ): Effect.Effect<
    StartContentModerationResponse,
    | AccessDeniedException
    | IdempotentParameterMismatchException
    | InternalServerError
    | InvalidParameterException
    | InvalidS3ObjectException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | VideoTooLargeException
    | CommonAwsError
  >;
  startFaceDetection(
    input: StartFaceDetectionRequest,
  ): Effect.Effect<
    StartFaceDetectionResponse,
    | AccessDeniedException
    | IdempotentParameterMismatchException
    | InternalServerError
    | InvalidParameterException
    | InvalidS3ObjectException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | VideoTooLargeException
    | CommonAwsError
  >;
  startFaceSearch(
    input: StartFaceSearchRequest,
  ): Effect.Effect<
    StartFaceSearchResponse,
    | AccessDeniedException
    | IdempotentParameterMismatchException
    | InternalServerError
    | InvalidParameterException
    | InvalidS3ObjectException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | VideoTooLargeException
    | CommonAwsError
  >;
  startLabelDetection(
    input: StartLabelDetectionRequest,
  ): Effect.Effect<
    StartLabelDetectionResponse,
    | AccessDeniedException
    | IdempotentParameterMismatchException
    | InternalServerError
    | InvalidParameterException
    | InvalidS3ObjectException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | VideoTooLargeException
    | CommonAwsError
  >;
  startMediaAnalysisJob(
    input: StartMediaAnalysisJobRequest,
  ): Effect.Effect<
    StartMediaAnalysisJobResponse,
    | AccessDeniedException
    | IdempotentParameterMismatchException
    | InternalServerError
    | InvalidManifestException
    | InvalidParameterException
    | InvalidS3ObjectException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ResourceNotReadyException
    | ThrottlingException
    | CommonAwsError
  >;
  startPersonTracking(
    input: StartPersonTrackingRequest,
  ): Effect.Effect<
    StartPersonTrackingResponse,
    | AccessDeniedException
    | IdempotentParameterMismatchException
    | InternalServerError
    | InvalidParameterException
    | InvalidS3ObjectException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | VideoTooLargeException
    | CommonAwsError
  >;
  startProjectVersion(
    input: StartProjectVersionRequest,
  ): Effect.Effect<
    StartProjectVersionResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  startSegmentDetection(
    input: StartSegmentDetectionRequest,
  ): Effect.Effect<
    StartSegmentDetectionResponse,
    | AccessDeniedException
    | IdempotentParameterMismatchException
    | InternalServerError
    | InvalidParameterException
    | InvalidS3ObjectException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | VideoTooLargeException
    | CommonAwsError
  >;
  startStreamProcessor(
    input: StartStreamProcessorRequest,
  ): Effect.Effect<
    StartStreamProcessorResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  startTextDetection(
    input: StartTextDetectionRequest,
  ): Effect.Effect<
    StartTextDetectionResponse,
    | AccessDeniedException
    | IdempotentParameterMismatchException
    | InternalServerError
    | InvalidParameterException
    | InvalidS3ObjectException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | VideoTooLargeException
    | CommonAwsError
  >;
  stopProjectVersion(
    input: StopProjectVersionRequest,
  ): Effect.Effect<
    StopProjectVersionResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  stopStreamProcessor(
    input: StopStreamProcessorRequest,
  ): Effect.Effect<
    StopStreamProcessorResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateDatasetEntries(
    input: UpdateDatasetEntriesRequest,
  ): Effect.Effect<
    UpdateDatasetEntriesResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateStreamProcessor(
    input: UpdateStreamProcessorRequest,
  ): Effect.Effect<
    UpdateStreamProcessorResponse,
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
}

export type Rekognition = RekognitionService;

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
  readonly Code?: string;
  readonly Logref?: string;
}> {}
export interface AgeRange {
  Low?: number;
  High?: number;
}
export interface Asset {
  GroundTruthManifest?: GroundTruthManifest;
}
export type Assets = Array<Asset>;
export interface AssociatedFace {
  FaceId?: string;
}
export type AssociatedFacesList = Array<AssociatedFace>;
export interface AssociateFacesRequest {
  CollectionId: string;
  UserId: string;
  FaceIds: Array<string>;
  UserMatchThreshold?: number;
  ClientRequestToken?: string;
}
export interface AssociateFacesResponse {
  AssociatedFaces?: Array<AssociatedFace>;
  UnsuccessfulFaceAssociations?: Array<UnsuccessfulFaceAssociation>;
  UserStatus?: UserStatus;
}
export type Attribute =
  | "DEFAULT"
  | "ALL"
  | "AGE_RANGE"
  | "BEARD"
  | "EMOTIONS"
  | "EYE_DIRECTION"
  | "EYEGLASSES"
  | "EYES_OPEN"
  | "GENDER"
  | "MOUTH_OPEN"
  | "MUSTACHE"
  | "FACE_OCCLUDED"
  | "SMILE"
  | "SUNGLASSES";
export type Attributes = Array<Attribute>;
export interface AudioMetadata {
  Codec?: string;
  DurationMillis?: number;
  SampleRate?: number;
  NumberOfChannels?: number;
}
export type AudioMetadataList = Array<AudioMetadata>;
export interface AuditImage {
  Bytes?: Uint8Array | string;
  S3Object?: S3Object;
  BoundingBox?: BoundingBox;
}
export type AuditImages = Array<AuditImage>;
export type AuditImagesLimit = number;

export interface Beard {
  Value?: boolean;
  Confidence?: number;
}
export interface BlackFrame {
  MaxPixelThreshold?: number;
  MinCoveragePercentage?: number;
}
export type BodyPart = "FACE" | "HEAD" | "LEFT_HAND" | "RIGHT_HAND";
export type BodyParts = Array<ProtectiveEquipmentBodyPart>;
export interface BoundingBox {
  Width?: number;
  Height?: number;
  Left?: number;
  Top?: number;
}
export type BoundingBoxHeight = number;

export type BoundingBoxWidth = number;

export interface Celebrity {
  Urls?: Array<string>;
  Name?: string;
  Id?: string;
  Face?: ComparedFace;
  MatchConfidence?: number;
  KnownGender?: KnownGender;
}
export interface CelebrityDetail {
  Urls?: Array<string>;
  Name?: string;
  Id?: string;
  Confidence?: number;
  BoundingBox?: BoundingBox;
  Face?: FaceDetail;
  KnownGender?: KnownGender;
}
export type CelebrityList = Array<Celebrity>;
export interface CelebrityRecognition {
  Timestamp?: number;
  Celebrity?: CelebrityDetail;
}
export type CelebrityRecognitions = Array<CelebrityRecognition>;
export type CelebrityRecognitionSortBy = "ID" | "TIMESTAMP";
export interface Challenge {
  Type: ChallengeType;
  Version: string;
}
export interface ChallengePreference {
  Type: ChallengeType;
  Versions?: Versions;
}
export type ChallengePreferences = Array<ChallengePreference>;
export type ChallengeType =
  | "FACE_MOVEMENT_AND_LIGHT_CHALLENGE"
  | "FACE_MOVEMENT_CHALLENGE";
export type ClientRequestToken = string;

export type CollectionId = string;

export type CollectionIdList = Array<string>;
export interface ComparedFace {
  BoundingBox?: BoundingBox;
  Confidence?: number;
  Landmarks?: Array<Landmark>;
  Pose?: Pose;
  Quality?: ImageQuality;
  Emotions?: Array<Emotion>;
  Smile?: Smile;
}
export type ComparedFaceList = Array<ComparedFace>;
export interface ComparedSourceImageFace {
  BoundingBox?: BoundingBox;
  Confidence?: number;
}
export interface CompareFacesMatch {
  Similarity?: number;
  Face?: ComparedFace;
}
export type CompareFacesMatchList = Array<CompareFacesMatch>;
export interface CompareFacesRequest {
  SourceImage: Image;
  TargetImage: Image;
  SimilarityThreshold?: number;
  QualityFilter?: QualityFilter;
}
export interface CompareFacesResponse {
  SourceImageFace?: ComparedSourceImageFace;
  FaceMatches?: Array<CompareFacesMatch>;
  UnmatchedFaces?: Array<ComparedFace>;
  SourceImageOrientationCorrection?: OrientationCorrection;
  TargetImageOrientationCorrection?: OrientationCorrection;
}
export type CompareFacesUnmatchList = Array<ComparedFace>;
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
  readonly Code?: string;
  readonly Logref?: string;
}> {}
export type ConnectedHomeLabel = string;

export type ConnectedHomeLabels = Array<string>;
export interface ConnectedHomeSettings {
  Labels: Array<string>;
  MinConfidence?: number;
}
export interface ConnectedHomeSettingsForUpdate {
  Labels?: Array<string>;
  MinConfidence?: number;
}
export type ContentClassifier =
  | "FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION"
  | "FREE_OF_ADULT_CONTENT";
export type ContentClassifiers = Array<ContentClassifier>;
export type ContentModerationAggregateBy = "TIMESTAMPS" | "SEGMENTS";
export interface ContentModerationDetection {
  Timestamp?: number;
  ModerationLabel?: ModerationLabel;
  StartTimestampMillis?: number;
  EndTimestampMillis?: number;
  DurationMillis?: number;
  ContentTypes?: Array<ContentType>;
}
export type ContentModerationDetections = Array<ContentModerationDetection>;
export type ContentModerationSortBy = "NAME" | "TIMESTAMP";
export interface ContentType {
  Confidence?: number;
  Name?: string;
}
export type ContentTypes = Array<ContentType>;
export interface CopyProjectVersionRequest {
  SourceProjectArn: string;
  SourceProjectVersionArn: string;
  DestinationProjectArn: string;
  VersionName: string;
  OutputConfig: OutputConfig;
  Tags?: Record<string, string>;
  KmsKeyId?: string;
}
export interface CopyProjectVersionResponse {
  ProjectVersionArn?: string;
}
export interface CoversBodyPart {
  Confidence?: number;
  Value?: boolean;
}
export interface CreateCollectionRequest {
  CollectionId: string;
  Tags?: Record<string, string>;
}
export interface CreateCollectionResponse {
  StatusCode?: number;
  CollectionArn?: string;
  FaceModelVersion?: string;
}
export interface CreateDatasetRequest {
  DatasetSource?: DatasetSource;
  DatasetType: DatasetType;
  ProjectArn: string;
  Tags?: Record<string, string>;
}
export interface CreateDatasetResponse {
  DatasetArn?: string;
}
export interface CreateFaceLivenessSessionRequest {
  KmsKeyId?: string;
  Settings?: CreateFaceLivenessSessionRequestSettings;
  ClientRequestToken?: string;
}
export interface CreateFaceLivenessSessionRequestSettings {
  OutputConfig?: LivenessOutputConfig;
  AuditImagesLimit?: number;
  ChallengePreferences?: Array<ChallengePreference>;
}
export interface CreateFaceLivenessSessionResponse {
  SessionId: string;
}
export interface CreateProjectRequest {
  ProjectName: string;
  Feature?: CustomizationFeature;
  AutoUpdate?: ProjectAutoUpdate;
  Tags?: Record<string, string>;
}
export interface CreateProjectResponse {
  ProjectArn?: string;
}
export interface CreateProjectVersionRequest {
  ProjectArn: string;
  VersionName: string;
  OutputConfig: OutputConfig;
  TrainingData?: TrainingData;
  TestingData?: TestingData;
  Tags?: Record<string, string>;
  KmsKeyId?: string;
  VersionDescription?: string;
  FeatureConfig?: CustomizationFeatureConfig;
}
export interface CreateProjectVersionResponse {
  ProjectVersionArn?: string;
}
export interface CreateStreamProcessorRequest {
  Input: StreamProcessorInput;
  Output: StreamProcessorOutput;
  Name: string;
  Settings: StreamProcessorSettings;
  RoleArn: string;
  Tags?: Record<string, string>;
  NotificationChannel?: StreamProcessorNotificationChannel;
  KmsKeyId?: string;
  RegionsOfInterest?: Array<RegionOfInterest>;
  DataSharingPreference?: StreamProcessorDataSharingPreference;
}
export interface CreateStreamProcessorResponse {
  StreamProcessorArn?: string;
}
export interface CreateUserRequest {
  CollectionId: string;
  UserId: string;
  ClientRequestToken?: string;
}
export interface CreateUserResponse {}
export type CustomizationFeature = "CONTENT_MODERATION" | "CUSTOM_LABELS";
export interface CustomizationFeatureConfig {
  ContentModeration?: CustomizationFeatureContentModerationConfig;
}
export interface CustomizationFeatureContentModerationConfig {
  ConfidenceThreshold?: number;
}
export type CustomizationFeatures = Array<CustomizationFeature>;
export interface CustomLabel {
  Name?: string;
  Confidence?: number;
  Geometry?: Geometry;
}
export type CustomLabels = Array<CustomLabel>;
export type DatasetArn = string;

export interface DatasetChanges {
  GroundTruth: Uint8Array | string;
}
export interface DatasetDescription {
  CreationTimestamp?: Date | string;
  LastUpdatedTimestamp?: Date | string;
  Status?: DatasetStatus;
  StatusMessage?: string;
  StatusMessageCode?: DatasetStatusMessageCode;
  DatasetStats?: DatasetStats;
}
export type DatasetEntries = Array<string>;
export type DatasetEntry = string;

export type DatasetLabel = string;

export interface DatasetLabelDescription {
  LabelName?: string;
  LabelStats?: DatasetLabelStats;
}
export type DatasetLabelDescriptions = Array<DatasetLabelDescription>;
export type DatasetLabels = Array<string>;
export interface DatasetLabelStats {
  EntryCount?: number;
  BoundingBoxCount?: number;
}
export interface DatasetMetadata {
  CreationTimestamp?: Date | string;
  DatasetType?: DatasetType;
  DatasetArn?: string;
  Status?: DatasetStatus;
  StatusMessage?: string;
  StatusMessageCode?: DatasetStatusMessageCode;
}
export type DatasetMetadataList = Array<DatasetMetadata>;
export interface DatasetSource {
  GroundTruthManifest?: GroundTruthManifest;
  DatasetArn?: string;
}
export interface DatasetStats {
  LabeledEntries?: number;
  TotalEntries?: number;
  TotalLabels?: number;
  ErrorEntries?: number;
}
export type DatasetStatus =
  | "CREATE_IN_PROGRESS"
  | "CREATE_COMPLETE"
  | "CREATE_FAILED"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_COMPLETE"
  | "UPDATE_FAILED"
  | "DELETE_IN_PROGRESS";
export type DatasetStatusMessageCode =
  | "SUCCESS"
  | "SERVICE_ERROR"
  | "CLIENT_ERROR";
export type DatasetType = "TRAIN" | "TEST";
export type DateTime = Date | string;

export type Degree = number;

export interface DeleteCollectionRequest {
  CollectionId: string;
}
export interface DeleteCollectionResponse {
  StatusCode?: number;
}
export interface DeleteDatasetRequest {
  DatasetArn: string;
}
export interface DeleteDatasetResponse {}
export interface DeleteFacesRequest {
  CollectionId: string;
  FaceIds: Array<string>;
}
export interface DeleteFacesResponse {
  DeletedFaces?: Array<string>;
  UnsuccessfulFaceDeletions?: Array<UnsuccessfulFaceDeletion>;
}
export interface DeleteProjectPolicyRequest {
  ProjectArn: string;
  PolicyName: string;
  PolicyRevisionId?: string;
}
export interface DeleteProjectPolicyResponse {}
export interface DeleteProjectRequest {
  ProjectArn: string;
}
export interface DeleteProjectResponse {
  Status?: ProjectStatus;
}
export interface DeleteProjectVersionRequest {
  ProjectVersionArn: string;
}
export interface DeleteProjectVersionResponse {
  Status?: ProjectVersionStatus;
}
export interface DeleteStreamProcessorRequest {
  Name: string;
}
export interface DeleteStreamProcessorResponse {}
export interface DeleteUserRequest {
  CollectionId: string;
  UserId: string;
  ClientRequestToken?: string;
}
export interface DeleteUserResponse {}
export interface DescribeCollectionRequest {
  CollectionId: string;
}
export interface DescribeCollectionResponse {
  FaceCount?: number;
  FaceModelVersion?: string;
  CollectionARN?: string;
  CreationTimestamp?: Date | string;
  UserCount?: number;
}
export interface DescribeDatasetRequest {
  DatasetArn: string;
}
export interface DescribeDatasetResponse {
  DatasetDescription?: DatasetDescription;
}
export interface DescribeProjectsRequest {
  NextToken?: string;
  MaxResults?: number;
  ProjectNames?: Array<string>;
  Features?: Array<CustomizationFeature>;
}
export interface DescribeProjectsResponse {
  ProjectDescriptions?: Array<ProjectDescription>;
  NextToken?: string;
}
export interface DescribeProjectVersionsRequest {
  ProjectArn: string;
  VersionNames?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeProjectVersionsResponse {
  ProjectVersionDescriptions?: Array<ProjectVersionDescription>;
  NextToken?: string;
}
export interface DescribeStreamProcessorRequest {
  Name: string;
}
export interface DescribeStreamProcessorResponse {
  Name?: string;
  StreamProcessorArn?: string;
  Status?: StreamProcessorStatus;
  StatusMessage?: string;
  CreationTimestamp?: Date | string;
  LastUpdateTimestamp?: Date | string;
  Input?: StreamProcessorInput;
  Output?: StreamProcessorOutput;
  RoleArn?: string;
  Settings?: StreamProcessorSettings;
  NotificationChannel?: StreamProcessorNotificationChannel;
  KmsKeyId?: string;
  RegionsOfInterest?: Array<RegionOfInterest>;
  DataSharingPreference?: StreamProcessorDataSharingPreference;
}
export interface DetectCustomLabelsRequest {
  ProjectVersionArn: string;
  Image: Image;
  MaxResults?: number;
  MinConfidence?: number;
}
export interface DetectCustomLabelsResponse {
  CustomLabels?: Array<CustomLabel>;
}
export interface DetectFacesRequest {
  Image: Image;
  Attributes?: Array<Attribute>;
}
export interface DetectFacesResponse {
  FaceDetails?: Array<FaceDetail>;
  OrientationCorrection?: OrientationCorrection;
}
export interface DetectionFilter {
  MinConfidence?: number;
  MinBoundingBoxHeight?: number;
  MinBoundingBoxWidth?: number;
}
export type DetectLabelsFeatureList = Array<DetectLabelsFeatureName>;
export type DetectLabelsFeatureName = "GENERAL_LABELS" | "IMAGE_PROPERTIES";
export interface DetectLabelsImageBackground {
  Quality?: DetectLabelsImageQuality;
  DominantColors?: Array<DominantColor>;
}
export interface DetectLabelsImageForeground {
  Quality?: DetectLabelsImageQuality;
  DominantColors?: Array<DominantColor>;
}
export interface DetectLabelsImageProperties {
  Quality?: DetectLabelsImageQuality;
  DominantColors?: Array<DominantColor>;
  Foreground?: DetectLabelsImageForeground;
  Background?: DetectLabelsImageBackground;
}
export interface DetectLabelsImagePropertiesSettings {
  MaxDominantColors?: number;
}
export interface DetectLabelsImageQuality {
  Brightness?: number;
  Sharpness?: number;
  Contrast?: number;
}
export type DetectLabelsMaxDominantColors = number;

export interface DetectLabelsRequest {
  Image: Image;
  MaxLabels?: number;
  MinConfidence?: number;
  Features?: Array<DetectLabelsFeatureName>;
  Settings?: DetectLabelsSettings;
}
export interface DetectLabelsResponse {
  Labels?: Array<Label>;
  OrientationCorrection?: OrientationCorrection;
  LabelModelVersion?: string;
  ImageProperties?: DetectLabelsImageProperties;
}
export interface DetectLabelsSettings {
  GeneralLabels?: GeneralLabelsSettings;
  ImageProperties?: DetectLabelsImagePropertiesSettings;
}
export interface DetectModerationLabelsRequest {
  Image: Image;
  MinConfidence?: number;
  HumanLoopConfig?: HumanLoopConfig;
  ProjectVersion?: string;
}
export interface DetectModerationLabelsResponse {
  ModerationLabels?: Array<ModerationLabel>;
  ModerationModelVersion?: string;
  HumanLoopActivationOutput?: HumanLoopActivationOutput;
  ProjectVersion?: string;
  ContentTypes?: Array<ContentType>;
}
export interface DetectProtectiveEquipmentRequest {
  Image: Image;
  SummarizationAttributes?: ProtectiveEquipmentSummarizationAttributes;
}
export interface DetectProtectiveEquipmentResponse {
  ProtectiveEquipmentModelVersion?: string;
  Persons?: Array<ProtectiveEquipmentPerson>;
  Summary?: ProtectiveEquipmentSummary;
}
export interface DetectTextFilters {
  WordFilter?: DetectionFilter;
  RegionsOfInterest?: Array<RegionOfInterest>;
}
export interface DetectTextRequest {
  Image: Image;
  Filters?: DetectTextFilters;
}
export interface DetectTextResponse {
  TextDetections?: Array<TextDetection>;
  TextModelVersion?: string;
}
export interface DisassociatedFace {
  FaceId?: string;
}
export type DisassociatedFacesList = Array<DisassociatedFace>;
export interface DisassociateFacesRequest {
  CollectionId: string;
  UserId: string;
  ClientRequestToken?: string;
  FaceIds: Array<string>;
}
export interface DisassociateFacesResponse {
  DisassociatedFaces?: Array<DisassociatedFace>;
  UnsuccessfulFaceDisassociations?: Array<UnsuccessfulFaceDisassociation>;
  UserStatus?: UserStatus;
}
export interface DistributeDataset {
  Arn: string;
}
export interface DistributeDatasetEntriesRequest {
  Datasets: Array<DistributeDataset>;
}
export interface DistributeDatasetEntriesResponse {}
export type DistributeDatasetMetadataList = Array<DistributeDataset>;
export interface DominantColor {
  Red?: number;
  Blue?: number;
  Green?: number;
  HexCode?: string;
  CSSColor?: string;
  SimplifiedColor?: string;
  PixelPercent?: number;
}
export type DominantColors = Array<DominantColor>;
export interface Emotion {
  Type?: EmotionName;
  Confidence?: number;
}
export type EmotionName =
  | "HAPPY"
  | "SAD"
  | "ANGRY"
  | "CONFUSED"
  | "DISGUSTED"
  | "SURPRISED"
  | "CALM"
  | "UNKNOWN"
  | "FEAR";
export type Emotions = Array<Emotion>;
export interface EquipmentDetection {
  BoundingBox?: BoundingBox;
  Confidence?: number;
  Type?: ProtectiveEquipmentType;
  CoversBodyPart?: CoversBodyPart;
}
export type EquipmentDetections = Array<EquipmentDetection>;
export interface EvaluationResult {
  F1Score?: number;
  Summary?: Summary;
}
export type ExtendedPaginationToken = string;

export type ExternalImageId = string;

export interface EyeDirection {
  Yaw?: number;
  Pitch?: number;
  Confidence?: number;
}
export interface Eyeglasses {
  Value?: boolean;
  Confidence?: number;
}
export interface EyeOpen {
  Value?: boolean;
  Confidence?: number;
}
export interface Face {
  FaceId?: string;
  BoundingBox?: BoundingBox;
  ImageId?: string;
  ExternalImageId?: string;
  Confidence?: number;
  IndexFacesModelVersion?: string;
  UserId?: string;
}
export type FaceAttributes = "DEFAULT" | "ALL";
export interface FaceDetail {
  BoundingBox?: BoundingBox;
  AgeRange?: AgeRange;
  Smile?: Smile;
  Eyeglasses?: Eyeglasses;
  Sunglasses?: Sunglasses;
  Gender?: Gender;
  Beard?: Beard;
  Mustache?: Mustache;
  EyesOpen?: EyeOpen;
  MouthOpen?: MouthOpen;
  Emotions?: Array<Emotion>;
  Landmarks?: Array<Landmark>;
  Pose?: Pose;
  Quality?: ImageQuality;
  Confidence?: number;
  FaceOccluded?: FaceOccluded;
  EyeDirection?: EyeDirection;
}
export type FaceDetailList = Array<FaceDetail>;
export interface FaceDetection {
  Timestamp?: number;
  Face?: FaceDetail;
}
export type FaceDetections = Array<FaceDetection>;
export type FaceId = string;

export type FaceIdList = Array<string>;
export type FaceList = Array<Face>;
export interface FaceMatch {
  Similarity?: number;
  Face?: Face;
}
export type FaceMatchList = Array<FaceMatch>;
export type FaceModelVersionList = Array<string>;
export interface FaceOccluded {
  Value?: boolean;
  Confidence?: number;
}
export interface FaceRecord {
  Face?: Face;
  FaceDetail?: FaceDetail;
}
export type FaceRecordList = Array<FaceRecord>;
export interface FaceSearchSettings {
  CollectionId?: string;
  FaceMatchThreshold?: number;
}
export type FaceSearchSortBy = "INDEX" | "TIMESTAMP";
export type Float = number;

export type FlowDefinitionArn = string;

export interface Gender {
  Value?: GenderType;
  Confidence?: number;
}
export type GenderType = "Male" | "Female";
export type GeneralLabelsFilterList = Array<string>;
export type GeneralLabelsFilterValue = string;

export interface GeneralLabelsSettings {
  LabelInclusionFilters?: Array<string>;
  LabelExclusionFilters?: Array<string>;
  LabelCategoryInclusionFilters?: Array<string>;
  LabelCategoryExclusionFilters?: Array<string>;
}
export interface Geometry {
  BoundingBox?: BoundingBox;
  Polygon?: Array<Point>;
}
export interface GetCelebrityInfoRequest {
  Id: string;
}
export interface GetCelebrityInfoResponse {
  Urls?: Array<string>;
  Name?: string;
  KnownGender?: KnownGender;
}
export interface GetCelebrityRecognitionRequest {
  JobId: string;
  MaxResults?: number;
  NextToken?: string;
  SortBy?: CelebrityRecognitionSortBy;
}
export interface GetCelebrityRecognitionResponse {
  JobStatus?: VideoJobStatus;
  StatusMessage?: string;
  VideoMetadata?: VideoMetadata;
  NextToken?: string;
  Celebrities?: Array<CelebrityRecognition>;
  JobId?: string;
  Video?: Video;
  JobTag?: string;
}
export interface GetContentModerationRequest {
  JobId: string;
  MaxResults?: number;
  NextToken?: string;
  SortBy?: ContentModerationSortBy;
  AggregateBy?: ContentModerationAggregateBy;
}
export interface GetContentModerationRequestMetadata {
  SortBy?: ContentModerationSortBy;
  AggregateBy?: ContentModerationAggregateBy;
}
export interface GetContentModerationResponse {
  JobStatus?: VideoJobStatus;
  StatusMessage?: string;
  VideoMetadata?: VideoMetadata;
  ModerationLabels?: Array<ContentModerationDetection>;
  NextToken?: string;
  ModerationModelVersion?: string;
  JobId?: string;
  Video?: Video;
  JobTag?: string;
  GetRequestMetadata?: GetContentModerationRequestMetadata;
}
export interface GetFaceDetectionRequest {
  JobId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetFaceDetectionResponse {
  JobStatus?: VideoJobStatus;
  StatusMessage?: string;
  VideoMetadata?: VideoMetadata;
  NextToken?: string;
  Faces?: Array<FaceDetection>;
  JobId?: string;
  Video?: Video;
  JobTag?: string;
}
export interface GetFaceLivenessSessionResultsRequest {
  SessionId: string;
}
export interface GetFaceLivenessSessionResultsResponse {
  SessionId: string;
  Status: LivenessSessionStatus;
  Confidence?: number;
  ReferenceImage?: AuditImage;
  AuditImages?: Array<AuditImage>;
  Challenge?: Challenge;
}
export interface GetFaceSearchRequest {
  JobId: string;
  MaxResults?: number;
  NextToken?: string;
  SortBy?: FaceSearchSortBy;
}
export interface GetFaceSearchResponse {
  JobStatus?: VideoJobStatus;
  StatusMessage?: string;
  NextToken?: string;
  VideoMetadata?: VideoMetadata;
  Persons?: Array<PersonMatch>;
  JobId?: string;
  Video?: Video;
  JobTag?: string;
}
export interface GetLabelDetectionRequest {
  JobId: string;
  MaxResults?: number;
  NextToken?: string;
  SortBy?: LabelDetectionSortBy;
  AggregateBy?: LabelDetectionAggregateBy;
}
export interface GetLabelDetectionRequestMetadata {
  SortBy?: LabelDetectionSortBy;
  AggregateBy?: LabelDetectionAggregateBy;
}
export interface GetLabelDetectionResponse {
  JobStatus?: VideoJobStatus;
  StatusMessage?: string;
  VideoMetadata?: VideoMetadata;
  NextToken?: string;
  Labels?: Array<LabelDetection>;
  LabelModelVersion?: string;
  JobId?: string;
  Video?: Video;
  JobTag?: string;
  GetRequestMetadata?: GetLabelDetectionRequestMetadata;
}
export interface GetMediaAnalysisJobRequest {
  JobId: string;
}
export interface GetMediaAnalysisJobResponse {
  JobId: string;
  JobName?: string;
  OperationsConfig: MediaAnalysisOperationsConfig;
  Status: MediaAnalysisJobStatus;
  FailureDetails?: MediaAnalysisJobFailureDetails;
  CreationTimestamp: Date | string;
  CompletionTimestamp?: Date | string;
  Input: MediaAnalysisInput;
  OutputConfig: MediaAnalysisOutputConfig;
  KmsKeyId?: string;
  Results?: MediaAnalysisResults;
  ManifestSummary?: MediaAnalysisManifestSummary;
}
export interface GetPersonTrackingRequest {
  JobId: string;
  MaxResults?: number;
  NextToken?: string;
  SortBy?: PersonTrackingSortBy;
}
export interface GetPersonTrackingResponse {
  JobStatus?: VideoJobStatus;
  StatusMessage?: string;
  VideoMetadata?: VideoMetadata;
  NextToken?: string;
  Persons?: Array<PersonDetection>;
  JobId?: string;
  Video?: Video;
  JobTag?: string;
}
export interface GetSegmentDetectionRequest {
  JobId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetSegmentDetectionResponse {
  JobStatus?: VideoJobStatus;
  StatusMessage?: string;
  VideoMetadata?: Array<VideoMetadata>;
  AudioMetadata?: Array<AudioMetadata>;
  NextToken?: string;
  Segments?: Array<SegmentDetection>;
  SelectedSegmentTypes?: Array<SegmentTypeInfo>;
  JobId?: string;
  Video?: Video;
  JobTag?: string;
}
export interface GetTextDetectionRequest {
  JobId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetTextDetectionResponse {
  JobStatus?: VideoJobStatus;
  StatusMessage?: string;
  VideoMetadata?: VideoMetadata;
  TextDetections?: Array<TextDetectionResult>;
  NextToken?: string;
  TextModelVersion?: string;
  JobId?: string;
  Video?: Video;
  JobTag?: string;
}
export type GroundTruthBlob = Uint8Array | string;

export interface GroundTruthManifest {
  S3Object?: S3Object;
}
export type HasErrors = boolean;

export interface HumanLoopActivationOutput {
  HumanLoopArn?: string;
  HumanLoopActivationReasons?: Array<string>;
  HumanLoopActivationConditionsEvaluationResults?: string;
}
export type HumanLoopActivationReason = string;

export type HumanLoopActivationReasons = Array<string>;
export type HumanLoopArn = string;

export interface HumanLoopConfig {
  HumanLoopName: string;
  FlowDefinitionArn: string;
  DataAttributes?: HumanLoopDataAttributes;
}
export interface HumanLoopDataAttributes {
  ContentClassifiers?: Array<ContentClassifier>;
}
export type HumanLoopName = string;

export declare class HumanLoopQuotaExceededException extends Data.TaggedError(
  "HumanLoopQuotaExceededException",
)<{
  readonly ResourceType?: string;
  readonly QuotaCode?: string;
  readonly ServiceCode?: string;
  readonly Message?: string;
  readonly Code?: string;
  readonly Logref?: string;
}> {}
export declare class IdempotentParameterMismatchException extends Data.TaggedError(
  "IdempotentParameterMismatchException",
)<{
  readonly Message?: string;
  readonly Code?: string;
  readonly Logref?: string;
}> {}
export interface Image {
  Bytes?: Uint8Array | string;
  S3Object?: S3Object;
}
export type ImageBlob = Uint8Array | string;

export type ImageId = string;

export interface ImageQuality {
  Brightness?: number;
  Sharpness?: number;
}
export declare class ImageTooLargeException extends Data.TaggedError(
  "ImageTooLargeException",
)<{
  readonly Message?: string;
  readonly Code?: string;
  readonly Logref?: string;
}> {}
export type IndexFacesModelVersion = string;

export interface IndexFacesRequest {
  CollectionId: string;
  Image: Image;
  ExternalImageId?: string;
  DetectionAttributes?: Array<Attribute>;
  MaxFaces?: number;
  QualityFilter?: QualityFilter;
}
export interface IndexFacesResponse {
  FaceRecords?: Array<FaceRecord>;
  OrientationCorrection?: OrientationCorrection;
  FaceModelVersion?: string;
  UnindexedFaces?: Array<UnindexedFace>;
}
export type InferenceUnits = number;

export interface Instance {
  BoundingBox?: BoundingBox;
  Confidence?: number;
  DominantColors?: Array<DominantColor>;
}
export type Instances = Array<Instance>;
export declare class InternalServerError extends Data.TaggedError(
  "InternalServerError",
)<{
  readonly Message?: string;
  readonly Code?: string;
  readonly Logref?: string;
}> {}
export declare class InvalidImageFormatException extends Data.TaggedError(
  "InvalidImageFormatException",
)<{
  readonly Message?: string;
  readonly Code?: string;
  readonly Logref?: string;
}> {}
export declare class InvalidManifestException extends Data.TaggedError(
  "InvalidManifestException",
)<{
  readonly Message?: string;
  readonly Code?: string;
  readonly Logref?: string;
}> {}
export declare class InvalidPaginationTokenException extends Data.TaggedError(
  "InvalidPaginationTokenException",
)<{
  readonly Message?: string;
  readonly Code?: string;
  readonly Logref?: string;
}> {}
export declare class InvalidParameterException extends Data.TaggedError(
  "InvalidParameterException",
)<{
  readonly Message?: string;
  readonly Code?: string;
  readonly Logref?: string;
}> {}
export declare class InvalidPolicyRevisionIdException extends Data.TaggedError(
  "InvalidPolicyRevisionIdException",
)<{
  readonly Message?: string;
  readonly Code?: string;
  readonly Logref?: string;
}> {}
export declare class InvalidS3ObjectException extends Data.TaggedError(
  "InvalidS3ObjectException",
)<{
  readonly Message?: string;
  readonly Code?: string;
  readonly Logref?: string;
}> {}
export type IsLabeled = boolean;

export type JobId = string;

export type JobTag = string;

export type KinesisDataArn = string;

export interface KinesisDataStream {
  Arn?: string;
}
export type KinesisVideoArn = string;

export interface KinesisVideoStream {
  Arn?: string;
}
export type KinesisVideoStreamFragmentNumber = string;

export interface KinesisVideoStreamStartSelector {
  ProducerTimestamp?: number;
  FragmentNumber?: string;
}
export type KmsKeyId = string;

export interface KnownGender {
  Type?: KnownGenderType;
}
export type KnownGenderType = "Male" | "Female" | "Nonbinary" | "Unlisted";
export interface Label {
  Name?: string;
  Confidence?: number;
  Instances?: Array<Instance>;
  Parents?: Array<Parent>;
  Aliases?: Array<LabelAlias>;
  Categories?: Array<LabelCategory>;
}
export interface LabelAlias {
  Name?: string;
}
export type LabelAliases = Array<LabelAlias>;
export type LabelCategories = Array<LabelCategory>;
export interface LabelCategory {
  Name?: string;
}
export interface LabelDetection {
  Timestamp?: number;
  Label?: Label;
  StartTimestampMillis?: number;
  EndTimestampMillis?: number;
  DurationMillis?: number;
}
export type LabelDetectionAggregateBy = "TIMESTAMPS" | "SEGMENTS";
export type LabelDetectionFeatureList = Array<LabelDetectionFeatureName>;
export type LabelDetectionFeatureName = "GENERAL_LABELS";
export type LabelDetections = Array<LabelDetection>;
export interface LabelDetectionSettings {
  GeneralLabels?: GeneralLabelsSettings;
}
export type LabelDetectionSortBy = "NAME" | "TIMESTAMP";
export type Labels = Array<Label>;
export interface Landmark {
  Type?: LandmarkType;
  X?: number;
  Y?: number;
}
export type Landmarks = Array<Landmark>;
export type LandmarkType =
  | "eyeLeft"
  | "eyeRight"
  | "nose"
  | "mouthLeft"
  | "mouthRight"
  | "leftEyeBrowLeft"
  | "leftEyeBrowRight"
  | "leftEyeBrowUp"
  | "rightEyeBrowLeft"
  | "rightEyeBrowRight"
  | "rightEyeBrowUp"
  | "leftEyeLeft"
  | "leftEyeRight"
  | "leftEyeUp"
  | "leftEyeDown"
  | "rightEyeLeft"
  | "rightEyeRight"
  | "rightEyeUp"
  | "rightEyeDown"
  | "noseLeft"
  | "noseRight"
  | "mouthUp"
  | "mouthDown"
  | "leftPupil"
  | "rightPupil"
  | "upperJawlineLeft"
  | "midJawlineLeft"
  | "chinBottom"
  | "midJawlineRight"
  | "upperJawlineRight";
export declare class LimitExceededException extends Data.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
  readonly Code?: string;
  readonly Logref?: string;
}> {}
export interface ListCollectionsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListCollectionsResponse {
  CollectionIds?: Array<string>;
  NextToken?: string;
  FaceModelVersions?: Array<string>;
}
export type ListDatasetEntriesPageSize = number;

export interface ListDatasetEntriesRequest {
  DatasetArn: string;
  ContainsLabels?: Array<string>;
  Labeled?: boolean;
  SourceRefContains?: string;
  HasErrors?: boolean;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDatasetEntriesResponse {
  DatasetEntries?: Array<string>;
  NextToken?: string;
}
export type ListDatasetLabelsPageSize = number;

export interface ListDatasetLabelsRequest {
  DatasetArn: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDatasetLabelsResponse {
  DatasetLabelDescriptions?: Array<DatasetLabelDescription>;
  NextToken?: string;
}
export interface ListFacesRequest {
  CollectionId: string;
  NextToken?: string;
  MaxResults?: number;
  UserId?: string;
  FaceIds?: Array<string>;
}
export interface ListFacesResponse {
  Faces?: Array<Face>;
  NextToken?: string;
  FaceModelVersion?: string;
}
export type ListMediaAnalysisJobsPageSize = number;

export interface ListMediaAnalysisJobsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListMediaAnalysisJobsResponse {
  NextToken?: string;
  MediaAnalysisJobs: Array<MediaAnalysisJobDescription>;
}
export type ListProjectPoliciesPageSize = number;

export interface ListProjectPoliciesRequest {
  ProjectArn: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListProjectPoliciesResponse {
  ProjectPolicies?: Array<ProjectPolicy>;
  NextToken?: string;
}
export interface ListStreamProcessorsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListStreamProcessorsResponse {
  NextToken?: string;
  StreamProcessors?: Array<StreamProcessor>;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export interface ListUsersRequest {
  CollectionId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListUsersResponse {
  Users?: Array<User>;
  NextToken?: string;
}
export type LivenessImageBlob = Uint8Array | string;

export interface LivenessOutputConfig {
  S3Bucket: string;
  S3KeyPrefix?: string;
}
export type LivenessS3KeyPrefix = string;

export type LivenessSessionId = string;

export type LivenessSessionStatus =
  | "CREATED"
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "FAILED"
  | "EXPIRED";
export declare class MalformedPolicyDocumentException extends Data.TaggedError(
  "MalformedPolicyDocumentException",
)<{
  readonly Message?: string;
  readonly Code?: string;
  readonly Logref?: string;
}> {}
export interface MatchedUser {
  UserId?: string;
  UserStatus?: UserStatus;
}
export type MaxDurationInSecondsULong = number;

export type MaxFaces = number;

export type MaxFacesToIndex = number;

export type MaxPixelThreshold = number;

export type MaxResults = number;

export type MaxUserResults = number;

export interface MediaAnalysisDetectModerationLabelsConfig {
  MinConfidence?: number;
  ProjectVersion?: string;
}
export interface MediaAnalysisInput {
  S3Object: S3Object;
}
export interface MediaAnalysisJobDescription {
  JobId: string;
  JobName?: string;
  OperationsConfig: MediaAnalysisOperationsConfig;
  Status: MediaAnalysisJobStatus;
  FailureDetails?: MediaAnalysisJobFailureDetails;
  CreationTimestamp: Date | string;
  CompletionTimestamp?: Date | string;
  Input: MediaAnalysisInput;
  OutputConfig: MediaAnalysisOutputConfig;
  KmsKeyId?: string;
  Results?: MediaAnalysisResults;
  ManifestSummary?: MediaAnalysisManifestSummary;
}
export type MediaAnalysisJobDescriptions = Array<MediaAnalysisJobDescription>;
export type MediaAnalysisJobFailureCode =
  | "INTERNAL_ERROR"
  | "INVALID_S3_OBJECT"
  | "INVALID_MANIFEST"
  | "INVALID_OUTPUT_CONFIG"
  | "INVALID_KMS_KEY"
  | "ACCESS_DENIED"
  | "RESOURCE_NOT_FOUND"
  | "RESOURCE_NOT_READY"
  | "THROTTLED";
export interface MediaAnalysisJobFailureDetails {
  Code?: MediaAnalysisJobFailureCode;
  Message?: string;
}
export type MediaAnalysisJobId = string;

export type MediaAnalysisJobName = string;

export type MediaAnalysisJobStatus =
  | "CREATED"
  | "QUEUED"
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "FAILED";
export interface MediaAnalysisManifestSummary {
  S3Object?: S3Object;
}
export interface MediaAnalysisModelVersions {
  Moderation?: string;
}
export interface MediaAnalysisOperationsConfig {
  DetectModerationLabels?: MediaAnalysisDetectModerationLabelsConfig;
}
export interface MediaAnalysisOutputConfig {
  S3Bucket: string;
  S3KeyPrefix?: string;
}
export interface MediaAnalysisResults {
  S3Object?: S3Object;
  ModelVersions?: MediaAnalysisModelVersions;
}
export type MediaAnalysisS3KeyPrefix = string;

export type MinCoveragePercentage = number;

export interface ModerationLabel {
  Confidence?: number;
  Name?: string;
  ParentName?: string;
  TaxonomyLevel?: number;
}
export type ModerationLabels = Array<ModerationLabel>;
export interface MouthOpen {
  Value?: boolean;
  Confidence?: number;
}
export interface Mustache {
  Value?: boolean;
  Confidence?: number;
}
export interface NotificationChannel {
  SNSTopicArn: string;
  RoleArn: string;
}
export type OrientationCorrection =
  | "ROTATE_0"
  | "ROTATE_90"
  | "ROTATE_180"
  | "ROTATE_270";
export interface OutputConfig {
  S3Bucket?: string;
  S3KeyPrefix?: string;
}
export type PageSize = number;

export type PaginationToken = string;

export interface Parent {
  Name?: string;
}
export type Parents = Array<Parent>;
export type Percent = number;

export interface PersonDetail {
  Index?: number;
  BoundingBox?: BoundingBox;
  Face?: FaceDetail;
}
export interface PersonDetection {
  Timestamp?: number;
  Person?: PersonDetail;
}
export type PersonDetections = Array<PersonDetection>;
export type PersonIndex = number;

export interface PersonMatch {
  Timestamp?: number;
  Person?: PersonDetail;
  FaceMatches?: Array<FaceMatch>;
}
export type PersonMatches = Array<PersonMatch>;
export type PersonTrackingSortBy = "INDEX" | "TIMESTAMP";
export interface Point {
  X?: number;
  Y?: number;
}
export type Polygon = Array<Point>;
export interface Pose {
  Roll?: number;
  Yaw?: number;
  Pitch?: number;
}
export type ProjectArn = string;

export type ProjectAutoUpdate = "ENABLED" | "DISABLED";
export interface ProjectDescription {
  ProjectArn?: string;
  CreationTimestamp?: Date | string;
  Status?: ProjectStatus;
  Datasets?: Array<DatasetMetadata>;
  Feature?: CustomizationFeature;
  AutoUpdate?: ProjectAutoUpdate;
}
export type ProjectDescriptions = Array<ProjectDescription>;
export type ProjectName = string;

export type ProjectNames = Array<string>;
export type ProjectPolicies = Array<ProjectPolicy>;
export interface ProjectPolicy {
  ProjectArn?: string;
  PolicyName?: string;
  PolicyRevisionId?: string;
  PolicyDocument?: string;
  CreationTimestamp?: Date | string;
  LastUpdatedTimestamp?: Date | string;
}
export type ProjectPolicyDocument = string;

export type ProjectPolicyName = string;

export type ProjectPolicyRevisionId = string;

export type ProjectsPageSize = number;

export type ProjectStatus = "CREATING" | "CREATED" | "DELETING";
export type ProjectVersionArn = string;

export interface ProjectVersionDescription {
  ProjectVersionArn?: string;
  CreationTimestamp?: Date | string;
  MinInferenceUnits?: number;
  Status?: ProjectVersionStatus;
  StatusMessage?: string;
  BillableTrainingTimeInSeconds?: number;
  TrainingEndTimestamp?: Date | string;
  OutputConfig?: OutputConfig;
  TrainingDataResult?: TrainingDataResult;
  TestingDataResult?: TestingDataResult;
  EvaluationResult?: EvaluationResult;
  ManifestSummary?: GroundTruthManifest;
  KmsKeyId?: string;
  MaxInferenceUnits?: number;
  SourceProjectVersionArn?: string;
  VersionDescription?: string;
  Feature?: CustomizationFeature;
  BaseModelVersion?: string;
  FeatureConfig?: CustomizationFeatureConfig;
}
export type ProjectVersionDescriptions = Array<ProjectVersionDescription>;
export type ProjectVersionId = string;

export type ProjectVersionsPageSize = number;

export type ProjectVersionStatus =
  | "TRAINING_IN_PROGRESS"
  | "TRAINING_COMPLETED"
  | "TRAINING_FAILED"
  | "STARTING"
  | "RUNNING"
  | "FAILED"
  | "STOPPING"
  | "STOPPED"
  | "DELETING"
  | "COPYING_IN_PROGRESS"
  | "COPYING_COMPLETED"
  | "COPYING_FAILED"
  | "DEPRECATED"
  | "EXPIRED";
export interface ProtectiveEquipmentBodyPart {
  Name?: BodyPart;
  Confidence?: number;
  EquipmentDetections?: Array<EquipmentDetection>;
}
export interface ProtectiveEquipmentPerson {
  BodyParts?: Array<ProtectiveEquipmentBodyPart>;
  BoundingBox?: BoundingBox;
  Confidence?: number;
  Id?: number;
}
export type ProtectiveEquipmentPersonIds = Array<number>;
export type ProtectiveEquipmentPersons = Array<ProtectiveEquipmentPerson>;
export interface ProtectiveEquipmentSummarizationAttributes {
  MinConfidence: number;
  RequiredEquipmentTypes: Array<ProtectiveEquipmentType>;
}
export interface ProtectiveEquipmentSummary {
  PersonsWithRequiredEquipment?: Array<number>;
  PersonsWithoutRequiredEquipment?: Array<number>;
  PersonsIndeterminate?: Array<number>;
}
export type ProtectiveEquipmentType =
  | "FACE_COVER"
  | "HAND_COVER"
  | "HEAD_COVER";
export type ProtectiveEquipmentTypes = Array<ProtectiveEquipmentType>;
export declare class ProvisionedThroughputExceededException extends Data.TaggedError(
  "ProvisionedThroughputExceededException",
)<{
  readonly Message?: string;
  readonly Code?: string;
  readonly Logref?: string;
}> {}
export interface PutProjectPolicyRequest {
  ProjectArn: string;
  PolicyName: string;
  PolicyRevisionId?: string;
  PolicyDocument: string;
}
export interface PutProjectPolicyResponse {
  PolicyRevisionId?: string;
}
export type QualityFilter = "NONE" | "AUTO" | "LOW" | "MEDIUM" | "HIGH";
export type QueryString = string;

export type Reason =
  | "EXCEEDS_MAX_FACES"
  | "EXTREME_POSE"
  | "LOW_BRIGHTNESS"
  | "LOW_SHARPNESS"
  | "LOW_CONFIDENCE"
  | "SMALL_BOUNDING_BOX"
  | "LOW_FACE_QUALITY";
export type Reasons = Array<Reason>;
export interface RecognizeCelebritiesRequest {
  Image: Image;
}
export interface RecognizeCelebritiesResponse {
  CelebrityFaces?: Array<Celebrity>;
  UnrecognizedFaces?: Array<ComparedFace>;
  OrientationCorrection?: OrientationCorrection;
}
export interface RegionOfInterest {
  BoundingBox?: BoundingBox;
  Polygon?: Array<Point>;
}
export type RegionsOfInterest = Array<RegionOfInterest>;
export type RekognitionUniqueId = string;

export declare class ResourceAlreadyExistsException extends Data.TaggedError(
  "ResourceAlreadyExistsException",
)<{
  readonly Message?: string;
  readonly Code?: string;
  readonly Logref?: string;
}> {}
export type ResourceArn = string;

export declare class ResourceInUseException extends Data.TaggedError(
  "ResourceInUseException",
)<{
  readonly Message?: string;
  readonly Code?: string;
  readonly Logref?: string;
}> {}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
  readonly Code?: string;
  readonly Logref?: string;
}> {}
export declare class ResourceNotReadyException extends Data.TaggedError(
  "ResourceNotReadyException",
)<{
  readonly Message?: string;
  readonly Code?: string;
  readonly Logref?: string;
}> {}
export type RoleArn = string;

export type S3Bucket = string;

export interface S3Destination {
  Bucket?: string;
  KeyPrefix?: string;
}
export type S3KeyPrefix = string;

export interface S3Object {
  Bucket?: string;
  Name?: string;
  Version?: string;
}
export type S3ObjectName = string;

export type S3ObjectVersion = string;

export interface SearchedFace {
  FaceId?: string;
}
export interface SearchedFaceDetails {
  FaceDetail?: FaceDetail;
}
export interface SearchedUser {
  UserId?: string;
}
export interface SearchFacesByImageRequest {
  CollectionId: string;
  Image: Image;
  MaxFaces?: number;
  FaceMatchThreshold?: number;
  QualityFilter?: QualityFilter;
}
export interface SearchFacesByImageResponse {
  SearchedFaceBoundingBox?: BoundingBox;
  SearchedFaceConfidence?: number;
  FaceMatches?: Array<FaceMatch>;
  FaceModelVersion?: string;
}
export interface SearchFacesRequest {
  CollectionId: string;
  FaceId: string;
  MaxFaces?: number;
  FaceMatchThreshold?: number;
}
export interface SearchFacesResponse {
  SearchedFaceId?: string;
  FaceMatches?: Array<FaceMatch>;
  FaceModelVersion?: string;
}
export interface SearchUsersByImageRequest {
  CollectionId: string;
  Image: Image;
  UserMatchThreshold?: number;
  MaxUsers?: number;
  QualityFilter?: QualityFilter;
}
export interface SearchUsersByImageResponse {
  UserMatches?: Array<UserMatch>;
  FaceModelVersion?: string;
  SearchedFace?: SearchedFaceDetails;
  UnsearchedFaces?: Array<UnsearchedFace>;
}
export interface SearchUsersRequest {
  CollectionId: string;
  UserId?: string;
  FaceId?: string;
  UserMatchThreshold?: number;
  MaxUsers?: number;
}
export interface SearchUsersResponse {
  UserMatches?: Array<UserMatch>;
  FaceModelVersion?: string;
  SearchedFace?: SearchedFace;
  SearchedUser?: SearchedUser;
}
export type SegmentConfidence = number;

export interface SegmentDetection {
  Type?: SegmentType;
  StartTimestampMillis?: number;
  EndTimestampMillis?: number;
  DurationMillis?: number;
  StartTimecodeSMPTE?: string;
  EndTimecodeSMPTE?: string;
  DurationSMPTE?: string;
  TechnicalCueSegment?: TechnicalCueSegment;
  ShotSegment?: ShotSegment;
  StartFrameNumber?: number;
  EndFrameNumber?: number;
  DurationFrames?: number;
}
export type SegmentDetections = Array<SegmentDetection>;
export type SegmentType = "TECHNICAL_CUE" | "SHOT";
export interface SegmentTypeInfo {
  Type?: SegmentType;
  ModelVersion?: string;
}
export type SegmentTypes = Array<SegmentType>;
export type SegmentTypesInfo = Array<SegmentTypeInfo>;
export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
  readonly Code?: string;
  readonly Logref?: string;
}> {}
export declare class SessionNotFoundException extends Data.TaggedError(
  "SessionNotFoundException",
)<{
  readonly Message?: string;
  readonly Code?: string;
  readonly Logref?: string;
}> {}
export interface ShotSegment {
  Index?: number;
  Confidence?: number;
}
export interface Smile {
  Value?: boolean;
  Confidence?: number;
}
export type SNSTopicArn = string;

export interface StartCelebrityRecognitionRequest {
  Video: Video;
  ClientRequestToken?: string;
  NotificationChannel?: NotificationChannel;
  JobTag?: string;
}
export interface StartCelebrityRecognitionResponse {
  JobId?: string;
}
export interface StartContentModerationRequest {
  Video: Video;
  MinConfidence?: number;
  ClientRequestToken?: string;
  NotificationChannel?: NotificationChannel;
  JobTag?: string;
}
export interface StartContentModerationResponse {
  JobId?: string;
}
export interface StartFaceDetectionRequest {
  Video: Video;
  ClientRequestToken?: string;
  NotificationChannel?: NotificationChannel;
  FaceAttributes?: FaceAttributes;
  JobTag?: string;
}
export interface StartFaceDetectionResponse {
  JobId?: string;
}
export interface StartFaceSearchRequest {
  Video: Video;
  ClientRequestToken?: string;
  FaceMatchThreshold?: number;
  CollectionId: string;
  NotificationChannel?: NotificationChannel;
  JobTag?: string;
}
export interface StartFaceSearchResponse {
  JobId?: string;
}
export interface StartLabelDetectionRequest {
  Video: Video;
  ClientRequestToken?: string;
  MinConfidence?: number;
  NotificationChannel?: NotificationChannel;
  JobTag?: string;
  Features?: Array<LabelDetectionFeatureName>;
  Settings?: LabelDetectionSettings;
}
export interface StartLabelDetectionResponse {
  JobId?: string;
}
export interface StartMediaAnalysisJobRequest {
  ClientRequestToken?: string;
  JobName?: string;
  OperationsConfig: MediaAnalysisOperationsConfig;
  Input: MediaAnalysisInput;
  OutputConfig: MediaAnalysisOutputConfig;
  KmsKeyId?: string;
}
export interface StartMediaAnalysisJobResponse {
  JobId: string;
}
export interface StartPersonTrackingRequest {
  Video: Video;
  ClientRequestToken?: string;
  NotificationChannel?: NotificationChannel;
  JobTag?: string;
}
export interface StartPersonTrackingResponse {
  JobId?: string;
}
export interface StartProjectVersionRequest {
  ProjectVersionArn: string;
  MinInferenceUnits: number;
  MaxInferenceUnits?: number;
}
export interface StartProjectVersionResponse {
  Status?: ProjectVersionStatus;
}
export interface StartSegmentDetectionFilters {
  TechnicalCueFilter?: StartTechnicalCueDetectionFilter;
  ShotFilter?: StartShotDetectionFilter;
}
export interface StartSegmentDetectionRequest {
  Video: Video;
  ClientRequestToken?: string;
  NotificationChannel?: NotificationChannel;
  JobTag?: string;
  Filters?: StartSegmentDetectionFilters;
  SegmentTypes: Array<SegmentType>;
}
export interface StartSegmentDetectionResponse {
  JobId?: string;
}
export interface StartShotDetectionFilter {
  MinSegmentConfidence?: number;
}
export interface StartStreamProcessorRequest {
  Name: string;
  StartSelector?: StreamProcessingStartSelector;
  StopSelector?: StreamProcessingStopSelector;
}
export interface StartStreamProcessorResponse {
  SessionId?: string;
}
export type StartStreamProcessorSessionId = string;

export interface StartTechnicalCueDetectionFilter {
  MinSegmentConfidence?: number;
  BlackFrame?: BlackFrame;
}
export interface StartTextDetectionFilters {
  WordFilter?: DetectionFilter;
  RegionsOfInterest?: Array<RegionOfInterest>;
}
export interface StartTextDetectionRequest {
  Video: Video;
  ClientRequestToken?: string;
  NotificationChannel?: NotificationChannel;
  JobTag?: string;
  Filters?: StartTextDetectionFilters;
}
export interface StartTextDetectionResponse {
  JobId?: string;
}
export type StatusMessage = string;

export interface StopProjectVersionRequest {
  ProjectVersionArn: string;
}
export interface StopProjectVersionResponse {
  Status?: ProjectVersionStatus;
}
export interface StopStreamProcessorRequest {
  Name: string;
}
export interface StopStreamProcessorResponse {}
export interface StreamProcessingStartSelector {
  KVSStreamStartSelector?: KinesisVideoStreamStartSelector;
}
export interface StreamProcessingStopSelector {
  MaxDurationInSeconds?: number;
}
export interface StreamProcessor {
  Name?: string;
  Status?: StreamProcessorStatus;
}
export type StreamProcessorArn = string;

export interface StreamProcessorDataSharingPreference {
  OptIn: boolean;
}
export interface StreamProcessorInput {
  KinesisVideoStream?: KinesisVideoStream;
}
export type StreamProcessorList = Array<StreamProcessor>;
export type StreamProcessorName = string;

export interface StreamProcessorNotificationChannel {
  SNSTopicArn: string;
}
export interface StreamProcessorOutput {
  KinesisDataStream?: KinesisDataStream;
  S3Destination?: S3Destination;
}
export type StreamProcessorParametersToDelete =
  Array<StreamProcessorParameterToDelete>;
export type StreamProcessorParameterToDelete =
  | "ConnectedHomeMinConfidence"
  | "RegionsOfInterest";
export interface StreamProcessorSettings {
  FaceSearch?: FaceSearchSettings;
  ConnectedHome?: ConnectedHomeSettings;
}
export interface StreamProcessorSettingsForUpdate {
  ConnectedHomeForUpdate?: ConnectedHomeSettingsForUpdate;
}
export type StreamProcessorStatus =
  | "STOPPED"
  | "STARTING"
  | "RUNNING"
  | "FAILED"
  | "STOPPING"
  | "UPDATING";
export interface Summary {
  S3Object?: S3Object;
}
export interface Sunglasses {
  Value?: boolean;
  Confidence?: number;
}
export type SynthesizedJsonHumanLoopActivationConditionsEvaluationResults =
  string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export interface TechnicalCueSegment {
  Type?: TechnicalCueType;
  Confidence?: number;
}
export type TechnicalCueType =
  | "COLOR_BARS"
  | "END_CREDITS"
  | "BLACK_FRAMES"
  | "OPENING_CREDITS"
  | "STUDIO_LOGO"
  | "SLATE"
  | "CONTENT";
export interface TestingData {
  Assets?: Array<Asset>;
  AutoCreate?: boolean;
}
export interface TestingDataResult {
  Input?: TestingData;
  Output?: TestingData;
  Validation?: ValidationData;
}
export interface TextDetection {
  DetectedText?: string;
  Type?: TextTypes;
  Id?: number;
  ParentId?: number;
  Confidence?: number;
  Geometry?: Geometry;
}
export type TextDetectionList = Array<TextDetection>;
export interface TextDetectionResult {
  Timestamp?: number;
  TextDetection?: TextDetection;
}
export type TextDetectionResults = Array<TextDetectionResult>;
export type TextTypes = "LINE" | "WORD";
export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
  readonly Code?: string;
  readonly Logref?: string;
}> {}
export type Timecode = string;

export type Timestamp = number;

export interface TrainingData {
  Assets?: Array<Asset>;
}
export interface TrainingDataResult {
  Input?: TrainingData;
  Output?: TrainingData;
  Validation?: ValidationData;
}
export type UInteger = number;

export type ULong = number;

export interface UnindexedFace {
  Reasons?: Array<Reason>;
  FaceDetail?: FaceDetail;
}
export type UnindexedFaces = Array<UnindexedFace>;
export interface UnsearchedFace {
  FaceDetails?: FaceDetail;
  Reasons?: Array<UnsearchedFaceReason>;
}
export type UnsearchedFaceReason =
  | "FACE_NOT_LARGEST"
  | "EXCEEDS_MAX_FACES"
  | "EXTREME_POSE"
  | "LOW_BRIGHTNESS"
  | "LOW_SHARPNESS"
  | "LOW_CONFIDENCE"
  | "SMALL_BOUNDING_BOX"
  | "LOW_FACE_QUALITY";
export type UnsearchedFaceReasons = Array<UnsearchedFaceReason>;
export type UnsearchedFacesList = Array<UnsearchedFace>;
export interface UnsuccessfulFaceAssociation {
  FaceId?: string;
  UserId?: string;
  Confidence?: number;
  Reasons?: Array<UnsuccessfulFaceAssociationReason>;
}
export type UnsuccessfulFaceAssociationList =
  Array<UnsuccessfulFaceAssociation>;
export type UnsuccessfulFaceAssociationReason =
  | "FACE_NOT_FOUND"
  | "ASSOCIATED_TO_A_DIFFERENT_USER"
  | "LOW_MATCH_CONFIDENCE";
export type UnsuccessfulFaceAssociationReasons =
  Array<UnsuccessfulFaceAssociationReason>;
export interface UnsuccessfulFaceDeletion {
  FaceId?: string;
  UserId?: string;
  Reasons?: Array<UnsuccessfulFaceDeletionReason>;
}
export type UnsuccessfulFaceDeletionReason =
  | "ASSOCIATED_TO_AN_EXISTING_USER"
  | "FACE_NOT_FOUND";
export type UnsuccessfulFaceDeletionReasons =
  Array<UnsuccessfulFaceDeletionReason>;
export type UnsuccessfulFaceDeletionsList = Array<UnsuccessfulFaceDeletion>;
export interface UnsuccessfulFaceDisassociation {
  FaceId?: string;
  UserId?: string;
  Reasons?: Array<UnsuccessfulFaceDisassociationReason>;
}
export type UnsuccessfulFaceDisassociationList =
  Array<UnsuccessfulFaceDisassociation>;
export type UnsuccessfulFaceDisassociationReason =
  | "FACE_NOT_FOUND"
  | "ASSOCIATED_TO_A_DIFFERENT_USER";
export type UnsuccessfulFaceDisassociationReasons =
  Array<UnsuccessfulFaceDisassociationReason>;
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateDatasetEntriesRequest {
  DatasetArn: string;
  Changes: DatasetChanges;
}
export interface UpdateDatasetEntriesResponse {}
export interface UpdateStreamProcessorRequest {
  Name: string;
  SettingsForUpdate?: StreamProcessorSettingsForUpdate;
  RegionsOfInterestForUpdate?: Array<RegionOfInterest>;
  DataSharingPreferenceForUpdate?: StreamProcessorDataSharingPreference;
  ParametersToDelete?: Array<StreamProcessorParameterToDelete>;
}
export interface UpdateStreamProcessorResponse {}
export type Url = string;

export type Urls = Array<string>;
export interface User {
  UserId?: string;
  UserStatus?: UserStatus;
}
export type UserFaceIdList = Array<string>;
export type UserId = string;

export type UserList = Array<User>;
export interface UserMatch {
  Similarity?: number;
  User?: MatchedUser;
}
export type UserMatchList = Array<UserMatch>;
export type UserStatus = "ACTIVE" | "UPDATING" | "CREATING" | "CREATED";
export interface ValidationData {
  Assets?: Array<Asset>;
}
export type Version = string;

export type VersionDescription = string;

export type VersionName = string;

export type VersionNames = Array<string>;
export interface Versions {
  Minimum?: string;
  Maximum?: string;
}
export interface Video {
  S3Object?: S3Object;
}
export type VideoColorRange = "FULL" | "LIMITED";
export type VideoJobStatus = "IN_PROGRESS" | "SUCCEEDED" | "FAILED";
export interface VideoMetadata {
  Codec?: string;
  DurationMillis?: number;
  Format?: string;
  FrameRate?: number;
  FrameHeight?: number;
  FrameWidth?: number;
  ColorRange?: VideoColorRange;
}
export type VideoMetadataList = Array<VideoMetadata>;
export declare class VideoTooLargeException extends Data.TaggedError(
  "VideoTooLargeException",
)<{
  readonly Message?: string;
  readonly Code?: string;
  readonly Logref?: string;
}> {}
export declare namespace AssociateFaces {
  export type Input = AssociateFacesRequest;
  export type Output = AssociateFacesResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | IdempotentParameterMismatchException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CompareFaces {
  export type Input = CompareFacesRequest;
  export type Output = CompareFacesResponse;
  export type Error =
    | AccessDeniedException
    | ImageTooLargeException
    | InternalServerError
    | InvalidImageFormatException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CopyProjectVersion {
  export type Input = CopyProjectVersionRequest;
  export type Output = CopyProjectVersionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateCollection {
  export type Input = CreateCollectionRequest;
  export type Output = CreateCollectionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceAlreadyExistsException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateDataset {
  export type Input = CreateDatasetRequest;
  export type Output = CreateDatasetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | InvalidS3ObjectException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateFaceLivenessSession {
  export type Input = CreateFaceLivenessSessionRequest;
  export type Output = CreateFaceLivenessSessionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateProject {
  export type Input = CreateProjectRequest;
  export type Output = CreateProjectResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateProjectVersion {
  export type Input = CreateProjectVersionRequest;
  export type Output = CreateProjectVersionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateStreamProcessor {
  export type Input = CreateStreamProcessorRequest;
  export type Output = CreateStreamProcessorResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateUser {
  export type Input = CreateUserRequest;
  export type Output = CreateUserResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | IdempotentParameterMismatchException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteCollection {
  export type Input = DeleteCollectionRequest;
  export type Output = DeleteCollectionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteDataset {
  export type Input = DeleteDatasetRequest;
  export type Output = DeleteDatasetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteFaces {
  export type Input = DeleteFacesRequest;
  export type Output = DeleteFacesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteProject {
  export type Input = DeleteProjectRequest;
  export type Output = DeleteProjectResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteProjectPolicy {
  export type Input = DeleteProjectPolicyRequest;
  export type Output = DeleteProjectPolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | InvalidPolicyRevisionIdException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteProjectVersion {
  export type Input = DeleteProjectVersionRequest;
  export type Output = DeleteProjectVersionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteStreamProcessor {
  export type Input = DeleteStreamProcessorRequest;
  export type Output = DeleteStreamProcessorResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteUser {
  export type Input = DeleteUserRequest;
  export type Output = DeleteUserResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | IdempotentParameterMismatchException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeCollection {
  export type Input = DescribeCollectionRequest;
  export type Output = DescribeCollectionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeDataset {
  export type Input = DescribeDatasetRequest;
  export type Output = DescribeDatasetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeProjects {
  export type Input = DescribeProjectsRequest;
  export type Output = DescribeProjectsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeProjectVersions {
  export type Input = DescribeProjectVersionsRequest;
  export type Output = DescribeProjectVersionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeStreamProcessor {
  export type Input = DescribeStreamProcessorRequest;
  export type Output = DescribeStreamProcessorResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DetectCustomLabels {
  export type Input = DetectCustomLabelsRequest;
  export type Output = DetectCustomLabelsResponse;
  export type Error =
    | AccessDeniedException
    | ImageTooLargeException
    | InternalServerError
    | InvalidImageFormatException
    | InvalidParameterException
    | InvalidS3ObjectException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ResourceNotReadyException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DetectFaces {
  export type Input = DetectFacesRequest;
  export type Output = DetectFacesResponse;
  export type Error =
    | AccessDeniedException
    | ImageTooLargeException
    | InternalServerError
    | InvalidImageFormatException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DetectLabels {
  export type Input = DetectLabelsRequest;
  export type Output = DetectLabelsResponse;
  export type Error =
    | AccessDeniedException
    | ImageTooLargeException
    | InternalServerError
    | InvalidImageFormatException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DetectModerationLabels {
  export type Input = DetectModerationLabelsRequest;
  export type Output = DetectModerationLabelsResponse;
  export type Error =
    | AccessDeniedException
    | HumanLoopQuotaExceededException
    | ImageTooLargeException
    | InternalServerError
    | InvalidImageFormatException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ResourceNotReadyException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DetectProtectiveEquipment {
  export type Input = DetectProtectiveEquipmentRequest;
  export type Output = DetectProtectiveEquipmentResponse;
  export type Error =
    | AccessDeniedException
    | ImageTooLargeException
    | InternalServerError
    | InvalidImageFormatException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DetectText {
  export type Input = DetectTextRequest;
  export type Output = DetectTextResponse;
  export type Error =
    | AccessDeniedException
    | ImageTooLargeException
    | InternalServerError
    | InvalidImageFormatException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DisassociateFaces {
  export type Input = DisassociateFacesRequest;
  export type Output = DisassociateFacesResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | IdempotentParameterMismatchException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DistributeDatasetEntries {
  export type Input = DistributeDatasetEntriesRequest;
  export type Output = DistributeDatasetEntriesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ResourceNotReadyException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetCelebrityInfo {
  export type Input = GetCelebrityInfoRequest;
  export type Output = GetCelebrityInfoResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetCelebrityRecognition {
  export type Input = GetCelebrityRecognitionRequest;
  export type Output = GetCelebrityRecognitionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetContentModeration {
  export type Input = GetContentModerationRequest;
  export type Output = GetContentModerationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetFaceDetection {
  export type Input = GetFaceDetectionRequest;
  export type Output = GetFaceDetectionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetFaceLivenessSessionResults {
  export type Input = GetFaceLivenessSessionResultsRequest;
  export type Output = GetFaceLivenessSessionResultsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | SessionNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetFaceSearch {
  export type Input = GetFaceSearchRequest;
  export type Output = GetFaceSearchResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetLabelDetection {
  export type Input = GetLabelDetectionRequest;
  export type Output = GetLabelDetectionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetMediaAnalysisJob {
  export type Input = GetMediaAnalysisJobRequest;
  export type Output = GetMediaAnalysisJobResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetPersonTracking {
  export type Input = GetPersonTrackingRequest;
  export type Output = GetPersonTrackingResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetSegmentDetection {
  export type Input = GetSegmentDetectionRequest;
  export type Output = GetSegmentDetectionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetTextDetection {
  export type Input = GetTextDetectionRequest;
  export type Output = GetTextDetectionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace IndexFaces {
  export type Input = IndexFacesRequest;
  export type Output = IndexFacesResponse;
  export type Error =
    | AccessDeniedException
    | ImageTooLargeException
    | InternalServerError
    | InvalidImageFormatException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListCollections {
  export type Input = ListCollectionsRequest;
  export type Output = ListCollectionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDatasetEntries {
  export type Input = ListDatasetEntriesRequest;
  export type Output = ListDatasetEntriesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ResourceNotReadyException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDatasetLabels {
  export type Input = ListDatasetLabelsRequest;
  export type Output = ListDatasetLabelsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ResourceNotReadyException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListFaces {
  export type Input = ListFacesRequest;
  export type Output = ListFacesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListMediaAnalysisJobs {
  export type Input = ListMediaAnalysisJobsRequest;
  export type Output = ListMediaAnalysisJobsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListProjectPolicies {
  export type Input = ListProjectPoliciesRequest;
  export type Output = ListProjectPoliciesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListStreamProcessors {
  export type Input = ListStreamProcessorsRequest;
  export type Output = ListStreamProcessorsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListUsers {
  export type Input = ListUsersRequest;
  export type Output = ListUsersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidPaginationTokenException
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace PutProjectPolicy {
  export type Input = PutProjectPolicyRequest;
  export type Output = PutProjectPolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | InvalidPolicyRevisionIdException
    | LimitExceededException
    | MalformedPolicyDocumentException
    | ProvisionedThroughputExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace RecognizeCelebrities {
  export type Input = RecognizeCelebritiesRequest;
  export type Output = RecognizeCelebritiesResponse;
  export type Error =
    | AccessDeniedException
    | ImageTooLargeException
    | InternalServerError
    | InvalidImageFormatException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchFaces {
  export type Input = SearchFacesRequest;
  export type Output = SearchFacesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchFacesByImage {
  export type Input = SearchFacesByImageRequest;
  export type Output = SearchFacesByImageResponse;
  export type Error =
    | AccessDeniedException
    | ImageTooLargeException
    | InternalServerError
    | InvalidImageFormatException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchUsers {
  export type Input = SearchUsersRequest;
  export type Output = SearchUsersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchUsersByImage {
  export type Input = SearchUsersByImageRequest;
  export type Output = SearchUsersByImageResponse;
  export type Error =
    | AccessDeniedException
    | ImageTooLargeException
    | InternalServerError
    | InvalidImageFormatException
    | InvalidParameterException
    | InvalidS3ObjectException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartCelebrityRecognition {
  export type Input = StartCelebrityRecognitionRequest;
  export type Output = StartCelebrityRecognitionResponse;
  export type Error =
    | AccessDeniedException
    | IdempotentParameterMismatchException
    | InternalServerError
    | InvalidParameterException
    | InvalidS3ObjectException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | VideoTooLargeException
    | CommonAwsError;
}

export declare namespace StartContentModeration {
  export type Input = StartContentModerationRequest;
  export type Output = StartContentModerationResponse;
  export type Error =
    | AccessDeniedException
    | IdempotentParameterMismatchException
    | InternalServerError
    | InvalidParameterException
    | InvalidS3ObjectException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | VideoTooLargeException
    | CommonAwsError;
}

export declare namespace StartFaceDetection {
  export type Input = StartFaceDetectionRequest;
  export type Output = StartFaceDetectionResponse;
  export type Error =
    | AccessDeniedException
    | IdempotentParameterMismatchException
    | InternalServerError
    | InvalidParameterException
    | InvalidS3ObjectException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | VideoTooLargeException
    | CommonAwsError;
}

export declare namespace StartFaceSearch {
  export type Input = StartFaceSearchRequest;
  export type Output = StartFaceSearchResponse;
  export type Error =
    | AccessDeniedException
    | IdempotentParameterMismatchException
    | InternalServerError
    | InvalidParameterException
    | InvalidS3ObjectException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | VideoTooLargeException
    | CommonAwsError;
}

export declare namespace StartLabelDetection {
  export type Input = StartLabelDetectionRequest;
  export type Output = StartLabelDetectionResponse;
  export type Error =
    | AccessDeniedException
    | IdempotentParameterMismatchException
    | InternalServerError
    | InvalidParameterException
    | InvalidS3ObjectException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | VideoTooLargeException
    | CommonAwsError;
}

export declare namespace StartMediaAnalysisJob {
  export type Input = StartMediaAnalysisJobRequest;
  export type Output = StartMediaAnalysisJobResponse;
  export type Error =
    | AccessDeniedException
    | IdempotentParameterMismatchException
    | InternalServerError
    | InvalidManifestException
    | InvalidParameterException
    | InvalidS3ObjectException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ResourceNotReadyException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartPersonTracking {
  export type Input = StartPersonTrackingRequest;
  export type Output = StartPersonTrackingResponse;
  export type Error =
    | AccessDeniedException
    | IdempotentParameterMismatchException
    | InternalServerError
    | InvalidParameterException
    | InvalidS3ObjectException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | VideoTooLargeException
    | CommonAwsError;
}

export declare namespace StartProjectVersion {
  export type Input = StartProjectVersionRequest;
  export type Output = StartProjectVersionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartSegmentDetection {
  export type Input = StartSegmentDetectionRequest;
  export type Output = StartSegmentDetectionResponse;
  export type Error =
    | AccessDeniedException
    | IdempotentParameterMismatchException
    | InternalServerError
    | InvalidParameterException
    | InvalidS3ObjectException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | VideoTooLargeException
    | CommonAwsError;
}

export declare namespace StartStreamProcessor {
  export type Input = StartStreamProcessorRequest;
  export type Output = StartStreamProcessorResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartTextDetection {
  export type Input = StartTextDetectionRequest;
  export type Output = StartTextDetectionResponse;
  export type Error =
    | AccessDeniedException
    | IdempotentParameterMismatchException
    | InternalServerError
    | InvalidParameterException
    | InvalidS3ObjectException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ThrottlingException
    | VideoTooLargeException
    | CommonAwsError;
}

export declare namespace StopProjectVersion {
  export type Input = StopProjectVersionRequest;
  export type Output = StopProjectVersionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StopStreamProcessor {
  export type Input = StopStreamProcessorRequest;
  export type Output = StopStreamProcessorResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateDatasetEntries {
  export type Input = UpdateDatasetEntriesRequest;
  export type Output = UpdateDatasetEntriesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | LimitExceededException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateStreamProcessor {
  export type Input = UpdateStreamProcessorRequest;
  export type Output = UpdateStreamProcessorResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | InvalidParameterException
    | ProvisionedThroughputExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}
