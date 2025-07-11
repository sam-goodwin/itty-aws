import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class CodeCommit extends AWSServiceClient {
  associateApprovalRuleTemplateWithRepository(
    input: AssociateApprovalRuleTemplateWithRepositoryInput,
  ): Effect.Effect<
    {},
    | ApprovalRuleTemplateDoesNotExistException
    | ApprovalRuleTemplateNameRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidApprovalRuleTemplateNameException
    | InvalidRepositoryNameException
    | MaximumRuleTemplatesAssociatedWithRepositoryException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError
  >;
  batchAssociateApprovalRuleTemplateWithRepositories(
    input: BatchAssociateApprovalRuleTemplateWithRepositoriesInput,
  ): Effect.Effect<
    BatchAssociateApprovalRuleTemplateWithRepositoriesOutput,
    | ApprovalRuleTemplateDoesNotExistException
    | ApprovalRuleTemplateNameRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidApprovalRuleTemplateNameException
    | MaximumRepositoryNamesExceededException
    | RepositoryNamesRequiredException
    | CommonAwsError
  >;
  batchDescribeMergeConflicts(
    input: BatchDescribeMergeConflictsInput,
  ): Effect.Effect<
    BatchDescribeMergeConflictsOutput,
    | CommitDoesNotExistException
    | CommitRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidCommitException
    | InvalidConflictDetailLevelException
    | InvalidConflictResolutionStrategyException
    | InvalidContinuationTokenException
    | InvalidMaxConflictFilesException
    | InvalidMaxMergeHunksException
    | InvalidMergeOptionException
    | InvalidRepositoryNameException
    | MaximumFileContentToLoadExceededException
    | MaximumItemsToCompareExceededException
    | MergeOptionRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | TipsDivergenceExceededException
    | CommonAwsError
  >;
  batchDisassociateApprovalRuleTemplateFromRepositories(
    input: BatchDisassociateApprovalRuleTemplateFromRepositoriesInput,
  ): Effect.Effect<
    BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput,
    | ApprovalRuleTemplateDoesNotExistException
    | ApprovalRuleTemplateNameRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidApprovalRuleTemplateNameException
    | MaximumRepositoryNamesExceededException
    | RepositoryNamesRequiredException
    | CommonAwsError
  >;
  batchGetCommits(
    input: BatchGetCommitsInput,
  ): Effect.Effect<
    BatchGetCommitsOutput,
    | CommitIdsLimitExceededException
    | CommitIdsListRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError
  >;
  batchGetRepositories(
    input: BatchGetRepositoriesInput,
  ): Effect.Effect<
    BatchGetRepositoriesOutput,
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidRepositoryNameException
    | MaximumRepositoryNamesExceededException
    | RepositoryNamesRequiredException
    | CommonAwsError
  >;
  createApprovalRuleTemplate(
    input: CreateApprovalRuleTemplateInput,
  ): Effect.Effect<
    CreateApprovalRuleTemplateOutput,
    | ApprovalRuleTemplateContentRequiredException
    | ApprovalRuleTemplateNameAlreadyExistsException
    | ApprovalRuleTemplateNameRequiredException
    | InvalidApprovalRuleTemplateContentException
    | InvalidApprovalRuleTemplateDescriptionException
    | InvalidApprovalRuleTemplateNameException
    | NumberOfRuleTemplatesExceededException
    | CommonAwsError
  >;
  createBranch(
    input: CreateBranchInput,
  ): Effect.Effect<
    {},
    | BranchNameExistsException
    | BranchNameRequiredException
    | CommitDoesNotExistException
    | CommitIdRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidBranchNameException
    | InvalidCommitIdException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError
  >;
  createCommit(
    input: CreateCommitInput,
  ): Effect.Effect<
    CreateCommitOutput,
    | BranchDoesNotExistException
    | BranchNameIsTagNameException
    | BranchNameRequiredException
    | CommitMessageLengthExceededException
    | DirectoryNameConflictsWithFileNameException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | FileContentAndSourceFileSpecifiedException
    | FileContentSizeLimitExceededException
    | FileDoesNotExistException
    | FileEntryRequiredException
    | FileModeRequiredException
    | FileNameConflictsWithDirectoryNameException
    | FilePathConflictsWithSubmodulePathException
    | FolderContentSizeLimitExceededException
    | InvalidBranchNameException
    | InvalidDeletionParameterException
    | InvalidEmailException
    | InvalidFileModeException
    | InvalidParentCommitIdException
    | InvalidPathException
    | InvalidRepositoryNameException
    | MaximumFileEntriesExceededException
    | NameLengthExceededException
    | NoChangeException
    | ParentCommitDoesNotExistException
    | ParentCommitIdOutdatedException
    | ParentCommitIdRequiredException
    | PathRequiredException
    | PutFileEntryConflictException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | RestrictedSourceFileException
    | SamePathRequestException
    | SourceFileOrContentRequiredException
    | CommonAwsError
  >;
  createPullRequest(
    input: CreatePullRequestInput,
  ): Effect.Effect<
    CreatePullRequestOutput,
    | ClientRequestTokenRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | IdempotencyParameterMismatchException
    | InvalidClientRequestTokenException
    | InvalidDescriptionException
    | InvalidReferenceNameException
    | InvalidRepositoryNameException
    | InvalidTargetException
    | InvalidTargetsException
    | InvalidTitleException
    | MaximumOpenPullRequestsExceededException
    | MultipleRepositoriesInPullRequestException
    | ReferenceDoesNotExistException
    | ReferenceNameRequiredException
    | ReferenceTypeNotSupportedException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | SourceAndDestinationAreSameException
    | TargetRequiredException
    | TargetsRequiredException
    | TitleRequiredException
    | CommonAwsError
  >;
  createPullRequestApprovalRule(
    input: CreatePullRequestApprovalRuleInput,
  ): Effect.Effect<
    CreatePullRequestApprovalRuleOutput,
    | ApprovalRuleContentRequiredException
    | ApprovalRuleNameAlreadyExistsException
    | ApprovalRuleNameRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidApprovalRuleContentException
    | InvalidApprovalRuleNameException
    | InvalidPullRequestIdException
    | NumberOfRulesExceededException
    | PullRequestAlreadyClosedException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | CommonAwsError
  >;
  createRepository(
    input: CreateRepositoryInput,
  ): Effect.Effect<
    CreateRepositoryOutput,
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyInvalidIdException
    | EncryptionKeyInvalidUsageException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidRepositoryDescriptionException
    | InvalidRepositoryNameException
    | InvalidSystemTagUsageException
    | InvalidTagsMapException
    | OperationNotAllowedException
    | RepositoryLimitExceededException
    | RepositoryNameExistsException
    | RepositoryNameRequiredException
    | TagPolicyException
    | TooManyTagsException
    | CommonAwsError
  >;
  createUnreferencedMergeCommit(
    input: CreateUnreferencedMergeCommitInput,
  ): Effect.Effect<
    CreateUnreferencedMergeCommitOutput,
    | CommitDoesNotExistException
    | CommitMessageLengthExceededException
    | CommitRequiredException
    | ConcurrentReferenceUpdateException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | FileContentSizeLimitExceededException
    | FileModeRequiredException
    | FolderContentSizeLimitExceededException
    | InvalidCommitException
    | InvalidConflictDetailLevelException
    | InvalidConflictResolutionException
    | InvalidConflictResolutionStrategyException
    | InvalidEmailException
    | InvalidFileModeException
    | InvalidMergeOptionException
    | InvalidPathException
    | InvalidReplacementContentException
    | InvalidReplacementTypeException
    | InvalidRepositoryNameException
    | ManualMergeRequiredException
    | MaximumConflictResolutionEntriesExceededException
    | MaximumFileContentToLoadExceededException
    | MaximumItemsToCompareExceededException
    | MergeOptionRequiredException
    | MultipleConflictResolutionEntriesException
    | NameLengthExceededException
    | PathRequiredException
    | ReplacementContentRequiredException
    | ReplacementTypeRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | TipsDivergenceExceededException
    | CommonAwsError
  >;
  deleteApprovalRuleTemplate(
    input: DeleteApprovalRuleTemplateInput,
  ): Effect.Effect<
    DeleteApprovalRuleTemplateOutput,
    | ApprovalRuleTemplateInUseException
    | ApprovalRuleTemplateNameRequiredException
    | InvalidApprovalRuleTemplateNameException
    | CommonAwsError
  >;
  deleteBranch(
    input: DeleteBranchInput,
  ): Effect.Effect<
    DeleteBranchOutput,
    | BranchNameRequiredException
    | DefaultBranchCannotBeDeletedException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidBranchNameException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError
  >;
  deleteCommentContent(
    input: DeleteCommentContentInput,
  ): Effect.Effect<
    DeleteCommentContentOutput,
    | CommentDeletedException
    | CommentDoesNotExistException
    | CommentIdRequiredException
    | InvalidCommentIdException
    | CommonAwsError
  >;
  deleteFile(
    input: DeleteFileInput,
  ): Effect.Effect<
    DeleteFileOutput,
    | BranchDoesNotExistException
    | BranchNameIsTagNameException
    | BranchNameRequiredException
    | CommitMessageLengthExceededException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | FileDoesNotExistException
    | InvalidBranchNameException
    | InvalidEmailException
    | InvalidParentCommitIdException
    | InvalidPathException
    | InvalidRepositoryNameException
    | NameLengthExceededException
    | ParentCommitDoesNotExistException
    | ParentCommitIdOutdatedException
    | ParentCommitIdRequiredException
    | PathRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError
  >;
  deletePullRequestApprovalRule(
    input: DeletePullRequestApprovalRuleInput,
  ): Effect.Effect<
    DeletePullRequestApprovalRuleOutput,
    | ApprovalRuleNameRequiredException
    | CannotDeleteApprovalRuleFromTemplateException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidApprovalRuleNameException
    | InvalidPullRequestIdException
    | PullRequestAlreadyClosedException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | CommonAwsError
  >;
  deleteRepository(
    input: DeleteRepositoryInput,
  ): Effect.Effect<
    DeleteRepositoryOutput,
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidRepositoryNameException
    | RepositoryNameRequiredException
    | CommonAwsError
  >;
  describeMergeConflicts(
    input: DescribeMergeConflictsInput,
  ): Effect.Effect<
    DescribeMergeConflictsOutput,
    | CommitDoesNotExistException
    | CommitRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | FileDoesNotExistException
    | InvalidCommitException
    | InvalidConflictDetailLevelException
    | InvalidConflictResolutionStrategyException
    | InvalidContinuationTokenException
    | InvalidMaxMergeHunksException
    | InvalidMergeOptionException
    | InvalidPathException
    | InvalidRepositoryNameException
    | MaximumFileContentToLoadExceededException
    | MaximumItemsToCompareExceededException
    | MergeOptionRequiredException
    | PathRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | TipsDivergenceExceededException
    | CommonAwsError
  >;
  describePullRequestEvents(
    input: DescribePullRequestEventsInput,
  ): Effect.Effect<
    DescribePullRequestEventsOutput,
    | ActorDoesNotExistException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidActorArnException
    | InvalidContinuationTokenException
    | InvalidMaxResultsException
    | InvalidPullRequestEventTypeException
    | InvalidPullRequestIdException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | CommonAwsError
  >;
  disassociateApprovalRuleTemplateFromRepository(
    input: DisassociateApprovalRuleTemplateFromRepositoryInput,
  ): Effect.Effect<
    {},
    | ApprovalRuleTemplateDoesNotExistException
    | ApprovalRuleTemplateNameRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidApprovalRuleTemplateNameException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError
  >;
  evaluatePullRequestApprovalRules(
    input: EvaluatePullRequestApprovalRulesInput,
  ): Effect.Effect<
    EvaluatePullRequestApprovalRulesOutput,
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidPullRequestIdException
    | InvalidRevisionIdException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | RevisionIdRequiredException
    | RevisionNotCurrentException
    | CommonAwsError
  >;
  getApprovalRuleTemplate(
    input: GetApprovalRuleTemplateInput,
  ): Effect.Effect<
    GetApprovalRuleTemplateOutput,
    | ApprovalRuleTemplateDoesNotExistException
    | ApprovalRuleTemplateNameRequiredException
    | InvalidApprovalRuleTemplateNameException
    | CommonAwsError
  >;
  getBlob(
    input: GetBlobInput,
  ): Effect.Effect<
    GetBlobOutput,
    | BlobIdDoesNotExistException
    | BlobIdRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | FileTooLargeException
    | InvalidBlobIdException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError
  >;
  getBranch(
    input: GetBranchInput,
  ): Effect.Effect<
    GetBranchOutput,
    | BranchDoesNotExistException
    | BranchNameRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidBranchNameException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError
  >;
  getComment(
    input: GetCommentInput,
  ): Effect.Effect<
    GetCommentOutput,
    | CommentDeletedException
    | CommentDoesNotExistException
    | CommentIdRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidCommentIdException
    | CommonAwsError
  >;
  getCommentReactions(
    input: GetCommentReactionsInput,
  ): Effect.Effect<
    GetCommentReactionsOutput,
    | CommentDeletedException
    | CommentDoesNotExistException
    | CommentIdRequiredException
    | InvalidCommentIdException
    | InvalidContinuationTokenException
    | InvalidMaxResultsException
    | InvalidReactionUserArnException
    | CommonAwsError
  >;
  getCommentsForComparedCommit(
    input: GetCommentsForComparedCommitInput,
  ): Effect.Effect<
    GetCommentsForComparedCommitOutput,
    | CommitDoesNotExistException
    | CommitIdRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidCommitIdException
    | InvalidContinuationTokenException
    | InvalidMaxResultsException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError
  >;
  getCommentsForPullRequest(
    input: GetCommentsForPullRequestInput,
  ): Effect.Effect<
    GetCommentsForPullRequestOutput,
    | CommitDoesNotExistException
    | CommitIdRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidCommitIdException
    | InvalidContinuationTokenException
    | InvalidMaxResultsException
    | InvalidPullRequestIdException
    | InvalidRepositoryNameException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | RepositoryNotAssociatedWithPullRequestException
    | CommonAwsError
  >;
  getCommit(
    input: GetCommitInput,
  ): Effect.Effect<
    GetCommitOutput,
    | CommitIdDoesNotExistException
    | CommitIdRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidCommitIdException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError
  >;
  getDifferences(
    input: GetDifferencesInput,
  ): Effect.Effect<
    GetDifferencesOutput,
    | CommitDoesNotExistException
    | CommitRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidCommitException
    | InvalidCommitIdException
    | InvalidContinuationTokenException
    | InvalidMaxResultsException
    | InvalidPathException
    | InvalidRepositoryNameException
    | PathDoesNotExistException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError
  >;
  getFile(
    input: GetFileInput,
  ): Effect.Effect<
    GetFileOutput,
    | CommitDoesNotExistException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | FileDoesNotExistException
    | FileTooLargeException
    | InvalidCommitException
    | InvalidPathException
    | InvalidRepositoryNameException
    | PathRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError
  >;
  getFolder(
    input: GetFolderInput,
  ): Effect.Effect<
    GetFolderOutput,
    | CommitDoesNotExistException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | FolderDoesNotExistException
    | InvalidCommitException
    | InvalidPathException
    | InvalidRepositoryNameException
    | PathRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError
  >;
  getMergeCommit(
    input: GetMergeCommitInput,
  ): Effect.Effect<
    GetMergeCommitOutput,
    | CommitDoesNotExistException
    | CommitRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidCommitException
    | InvalidConflictDetailLevelException
    | InvalidConflictResolutionStrategyException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError
  >;
  getMergeConflicts(
    input: GetMergeConflictsInput,
  ): Effect.Effect<
    GetMergeConflictsOutput,
    | CommitDoesNotExistException
    | CommitRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidCommitException
    | InvalidConflictDetailLevelException
    | InvalidConflictResolutionStrategyException
    | InvalidContinuationTokenException
    | InvalidDestinationCommitSpecifierException
    | InvalidMaxConflictFilesException
    | InvalidMergeOptionException
    | InvalidRepositoryNameException
    | InvalidSourceCommitSpecifierException
    | MaximumFileContentToLoadExceededException
    | MaximumItemsToCompareExceededException
    | MergeOptionRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | TipsDivergenceExceededException
    | CommonAwsError
  >;
  getMergeOptions(
    input: GetMergeOptionsInput,
  ): Effect.Effect<
    GetMergeOptionsOutput,
    | CommitDoesNotExistException
    | CommitRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidCommitException
    | InvalidConflictDetailLevelException
    | InvalidConflictResolutionStrategyException
    | InvalidRepositoryNameException
    | MaximumFileContentToLoadExceededException
    | MaximumItemsToCompareExceededException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | TipsDivergenceExceededException
    | CommonAwsError
  >;
  getPullRequest(
    input: GetPullRequestInput,
  ): Effect.Effect<
    GetPullRequestOutput,
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidPullRequestIdException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | CommonAwsError
  >;
  getPullRequestApprovalStates(
    input: GetPullRequestApprovalStatesInput,
  ): Effect.Effect<
    GetPullRequestApprovalStatesOutput,
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidPullRequestIdException
    | InvalidRevisionIdException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | RevisionIdRequiredException
    | CommonAwsError
  >;
  getPullRequestOverrideState(
    input: GetPullRequestOverrideStateInput,
  ): Effect.Effect<
    GetPullRequestOverrideStateOutput,
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidPullRequestIdException
    | InvalidRevisionIdException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | RevisionIdRequiredException
    | CommonAwsError
  >;
  getRepository(
    input: GetRepositoryInput,
  ): Effect.Effect<
    GetRepositoryOutput,
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError
  >;
  getRepositoryTriggers(
    input: GetRepositoryTriggersInput,
  ): Effect.Effect<
    GetRepositoryTriggersOutput,
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError
  >;
  listApprovalRuleTemplates(
    input: ListApprovalRuleTemplatesInput,
  ): Effect.Effect<
    ListApprovalRuleTemplatesOutput,
    | InvalidContinuationTokenException
    | InvalidMaxResultsException
    | CommonAwsError
  >;
  listAssociatedApprovalRuleTemplatesForRepository(
    input: ListAssociatedApprovalRuleTemplatesForRepositoryInput,
  ): Effect.Effect<
    ListAssociatedApprovalRuleTemplatesForRepositoryOutput,
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidContinuationTokenException
    | InvalidMaxResultsException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError
  >;
  listBranches(
    input: ListBranchesInput,
  ): Effect.Effect<
    ListBranchesOutput,
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidContinuationTokenException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError
  >;
  listFileCommitHistory(
    input: ListFileCommitHistoryRequest,
  ): Effect.Effect<
    ListFileCommitHistoryResponse,
    | CommitDoesNotExistException
    | CommitRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidCommitException
    | InvalidContinuationTokenException
    | InvalidMaxResultsException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | TipsDivergenceExceededException
    | CommonAwsError
  >;
  listPullRequests(
    input: ListPullRequestsInput,
  ): Effect.Effect<
    ListPullRequestsOutput,
    | AuthorDoesNotExistException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidAuthorArnException
    | InvalidContinuationTokenException
    | InvalidMaxResultsException
    | InvalidPullRequestStatusException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError
  >;
  listRepositories(
    input: ListRepositoriesInput,
  ): Effect.Effect<
    ListRepositoriesOutput,
    | InvalidContinuationTokenException
    | InvalidOrderException
    | InvalidSortByException
    | CommonAwsError
  >;
  listRepositoriesForApprovalRuleTemplate(
    input: ListRepositoriesForApprovalRuleTemplateInput,
  ): Effect.Effect<
    ListRepositoriesForApprovalRuleTemplateOutput,
    | ApprovalRuleTemplateDoesNotExistException
    | ApprovalRuleTemplateNameRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidApprovalRuleTemplateNameException
    | InvalidContinuationTokenException
    | InvalidMaxResultsException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    | InvalidRepositoryNameException
    | InvalidResourceArnException
    | RepositoryDoesNotExistException
    | ResourceArnRequiredException
    | CommonAwsError
  >;
  mergeBranchesByFastForward(
    input: MergeBranchesByFastForwardInput,
  ): Effect.Effect<
    MergeBranchesByFastForwardOutput,
    | BranchDoesNotExistException
    | BranchNameIsTagNameException
    | BranchNameRequiredException
    | CommitDoesNotExistException
    | CommitRequiredException
    | ConcurrentReferenceUpdateException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidBranchNameException
    | InvalidCommitException
    | InvalidRepositoryNameException
    | InvalidTargetBranchException
    | ManualMergeRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | TipsDivergenceExceededException
    | CommonAwsError
  >;
  mergeBranchesBySquash(
    input: MergeBranchesBySquashInput,
  ): Effect.Effect<
    MergeBranchesBySquashOutput,
    | BranchDoesNotExistException
    | BranchNameIsTagNameException
    | BranchNameRequiredException
    | CommitDoesNotExistException
    | CommitMessageLengthExceededException
    | CommitRequiredException
    | ConcurrentReferenceUpdateException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | FileContentSizeLimitExceededException
    | FileModeRequiredException
    | FolderContentSizeLimitExceededException
    | InvalidBranchNameException
    | InvalidCommitException
    | InvalidConflictDetailLevelException
    | InvalidConflictResolutionException
    | InvalidConflictResolutionStrategyException
    | InvalidEmailException
    | InvalidFileModeException
    | InvalidPathException
    | InvalidReplacementContentException
    | InvalidReplacementTypeException
    | InvalidRepositoryNameException
    | InvalidTargetBranchException
    | ManualMergeRequiredException
    | MaximumConflictResolutionEntriesExceededException
    | MaximumFileContentToLoadExceededException
    | MaximumItemsToCompareExceededException
    | MultipleConflictResolutionEntriesException
    | NameLengthExceededException
    | PathRequiredException
    | ReplacementContentRequiredException
    | ReplacementTypeRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | TipsDivergenceExceededException
    | CommonAwsError
  >;
  mergeBranchesByThreeWay(
    input: MergeBranchesByThreeWayInput,
  ): Effect.Effect<
    MergeBranchesByThreeWayOutput,
    | BranchDoesNotExistException
    | BranchNameIsTagNameException
    | BranchNameRequiredException
    | CommitDoesNotExistException
    | CommitMessageLengthExceededException
    | CommitRequiredException
    | ConcurrentReferenceUpdateException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | FileContentSizeLimitExceededException
    | FileModeRequiredException
    | FolderContentSizeLimitExceededException
    | InvalidBranchNameException
    | InvalidCommitException
    | InvalidConflictDetailLevelException
    | InvalidConflictResolutionException
    | InvalidConflictResolutionStrategyException
    | InvalidEmailException
    | InvalidFileModeException
    | InvalidPathException
    | InvalidReplacementContentException
    | InvalidReplacementTypeException
    | InvalidRepositoryNameException
    | InvalidTargetBranchException
    | ManualMergeRequiredException
    | MaximumConflictResolutionEntriesExceededException
    | MaximumFileContentToLoadExceededException
    | MaximumItemsToCompareExceededException
    | MultipleConflictResolutionEntriesException
    | NameLengthExceededException
    | PathRequiredException
    | ReplacementContentRequiredException
    | ReplacementTypeRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | TipsDivergenceExceededException
    | CommonAwsError
  >;
  mergePullRequestByFastForward(
    input: MergePullRequestByFastForwardInput,
  ): Effect.Effect<
    MergePullRequestByFastForwardOutput,
    | ConcurrentReferenceUpdateException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidCommitIdException
    | InvalidPullRequestIdException
    | InvalidRepositoryNameException
    | ManualMergeRequiredException
    | PullRequestAlreadyClosedException
    | PullRequestApprovalRulesNotSatisfiedException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | ReferenceDoesNotExistException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | RepositoryNotAssociatedWithPullRequestException
    | TipOfSourceReferenceIsDifferentException
    | CommonAwsError
  >;
  mergePullRequestBySquash(
    input: MergePullRequestBySquashInput,
  ): Effect.Effect<
    MergePullRequestBySquashOutput,
    | CommitMessageLengthExceededException
    | ConcurrentReferenceUpdateException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | FileContentSizeLimitExceededException
    | FolderContentSizeLimitExceededException
    | InvalidCommitIdException
    | InvalidConflictDetailLevelException
    | InvalidConflictResolutionException
    | InvalidConflictResolutionStrategyException
    | InvalidEmailException
    | InvalidFileModeException
    | InvalidPathException
    | InvalidPullRequestIdException
    | InvalidReplacementContentException
    | InvalidReplacementTypeException
    | InvalidRepositoryNameException
    | ManualMergeRequiredException
    | MaximumConflictResolutionEntriesExceededException
    | MaximumFileContentToLoadExceededException
    | MaximumItemsToCompareExceededException
    | MultipleConflictResolutionEntriesException
    | NameLengthExceededException
    | PathRequiredException
    | PullRequestAlreadyClosedException
    | PullRequestApprovalRulesNotSatisfiedException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | ReplacementContentRequiredException
    | ReplacementTypeRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | RepositoryNotAssociatedWithPullRequestException
    | TipOfSourceReferenceIsDifferentException
    | TipsDivergenceExceededException
    | CommonAwsError
  >;
  mergePullRequestByThreeWay(
    input: MergePullRequestByThreeWayInput,
  ): Effect.Effect<
    MergePullRequestByThreeWayOutput,
    | CommitMessageLengthExceededException
    | ConcurrentReferenceUpdateException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | FileContentSizeLimitExceededException
    | FolderContentSizeLimitExceededException
    | InvalidCommitIdException
    | InvalidConflictDetailLevelException
    | InvalidConflictResolutionException
    | InvalidConflictResolutionStrategyException
    | InvalidEmailException
    | InvalidFileModeException
    | InvalidPathException
    | InvalidPullRequestIdException
    | InvalidReplacementContentException
    | InvalidReplacementTypeException
    | InvalidRepositoryNameException
    | ManualMergeRequiredException
    | MaximumConflictResolutionEntriesExceededException
    | MaximumFileContentToLoadExceededException
    | MaximumItemsToCompareExceededException
    | MultipleConflictResolutionEntriesException
    | NameLengthExceededException
    | PathRequiredException
    | PullRequestAlreadyClosedException
    | PullRequestApprovalRulesNotSatisfiedException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | ReplacementContentRequiredException
    | ReplacementTypeRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | RepositoryNotAssociatedWithPullRequestException
    | TipOfSourceReferenceIsDifferentException
    | TipsDivergenceExceededException
    | CommonAwsError
  >;
  overridePullRequestApprovalRules(
    input: OverridePullRequestApprovalRulesInput,
  ): Effect.Effect<
    {},
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidOverrideStatusException
    | InvalidPullRequestIdException
    | InvalidRevisionIdException
    | OverrideAlreadySetException
    | OverrideStatusRequiredException
    | PullRequestAlreadyClosedException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | RevisionIdRequiredException
    | RevisionNotCurrentException
    | CommonAwsError
  >;
  postCommentForComparedCommit(
    input: PostCommentForComparedCommitInput,
  ): Effect.Effect<
    PostCommentForComparedCommitOutput,
    | BeforeCommitIdAndAfterCommitIdAreSameException
    | ClientRequestTokenRequiredException
    | CommentContentRequiredException
    | CommentContentSizeLimitExceededException
    | CommitDoesNotExistException
    | CommitIdRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | IdempotencyParameterMismatchException
    | InvalidClientRequestTokenException
    | InvalidCommitIdException
    | InvalidFileLocationException
    | InvalidFilePositionException
    | InvalidPathException
    | InvalidRelativeFileVersionEnumException
    | InvalidRepositoryNameException
    | PathDoesNotExistException
    | PathRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError
  >;
  postCommentForPullRequest(
    input: PostCommentForPullRequestInput,
  ): Effect.Effect<
    PostCommentForPullRequestOutput,
    | BeforeCommitIdAndAfterCommitIdAreSameException
    | ClientRequestTokenRequiredException
    | CommentContentRequiredException
    | CommentContentSizeLimitExceededException
    | CommitDoesNotExistException
    | CommitIdRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | IdempotencyParameterMismatchException
    | InvalidClientRequestTokenException
    | InvalidCommitIdException
    | InvalidFileLocationException
    | InvalidFilePositionException
    | InvalidPathException
    | InvalidPullRequestIdException
    | InvalidRelativeFileVersionEnumException
    | InvalidRepositoryNameException
    | PathDoesNotExistException
    | PathRequiredException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | RepositoryNotAssociatedWithPullRequestException
    | CommonAwsError
  >;
  postCommentReply(
    input: PostCommentReplyInput,
  ): Effect.Effect<
    PostCommentReplyOutput,
    | ClientRequestTokenRequiredException
    | CommentContentRequiredException
    | CommentContentSizeLimitExceededException
    | CommentDoesNotExistException
    | CommentIdRequiredException
    | IdempotencyParameterMismatchException
    | InvalidClientRequestTokenException
    | InvalidCommentIdException
    | CommonAwsError
  >;
  putCommentReaction(
    input: PutCommentReactionInput,
  ): Effect.Effect<
    {},
    | CommentDeletedException
    | CommentDoesNotExistException
    | CommentIdRequiredException
    | InvalidCommentIdException
    | InvalidReactionValueException
    | ReactionLimitExceededException
    | ReactionValueRequiredException
    | CommonAwsError
  >;
  putFile(
    input: PutFileInput,
  ): Effect.Effect<
    PutFileOutput,
    | BranchDoesNotExistException
    | BranchNameIsTagNameException
    | BranchNameRequiredException
    | CommitMessageLengthExceededException
    | DirectoryNameConflictsWithFileNameException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | FileContentRequiredException
    | FileContentSizeLimitExceededException
    | FileNameConflictsWithDirectoryNameException
    | FilePathConflictsWithSubmodulePathException
    | FolderContentSizeLimitExceededException
    | InvalidBranchNameException
    | InvalidDeletionParameterException
    | InvalidEmailException
    | InvalidFileModeException
    | InvalidParentCommitIdException
    | InvalidPathException
    | InvalidRepositoryNameException
    | NameLengthExceededException
    | ParentCommitDoesNotExistException
    | ParentCommitIdOutdatedException
    | ParentCommitIdRequiredException
    | PathRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | SameFileContentException
    | CommonAwsError
  >;
  putRepositoryTriggers(
    input: PutRepositoryTriggersInput,
  ): Effect.Effect<
    PutRepositoryTriggersOutput,
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidRepositoryNameException
    | InvalidRepositoryTriggerBranchNameException
    | InvalidRepositoryTriggerCustomDataException
    | InvalidRepositoryTriggerDestinationArnException
    | InvalidRepositoryTriggerEventsException
    | InvalidRepositoryTriggerNameException
    | InvalidRepositoryTriggerRegionException
    | MaximumBranchesExceededException
    | MaximumRepositoryTriggersExceededException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | RepositoryTriggerBranchNameListRequiredException
    | RepositoryTriggerDestinationArnRequiredException
    | RepositoryTriggerEventsListRequiredException
    | RepositoryTriggerNameRequiredException
    | RepositoryTriggersListRequiredException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    {},
    | InvalidRepositoryNameException
    | InvalidResourceArnException
    | InvalidSystemTagUsageException
    | InvalidTagsMapException
    | RepositoryDoesNotExistException
    | ResourceArnRequiredException
    | TagPolicyException
    | TagsMapRequiredException
    | TooManyTagsException
    | CommonAwsError
  >;
  testRepositoryTriggers(
    input: TestRepositoryTriggersInput,
  ): Effect.Effect<
    TestRepositoryTriggersOutput,
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidRepositoryNameException
    | InvalidRepositoryTriggerBranchNameException
    | InvalidRepositoryTriggerCustomDataException
    | InvalidRepositoryTriggerDestinationArnException
    | InvalidRepositoryTriggerEventsException
    | InvalidRepositoryTriggerNameException
    | InvalidRepositoryTriggerRegionException
    | MaximumBranchesExceededException
    | MaximumRepositoryTriggersExceededException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | RepositoryTriggerBranchNameListRequiredException
    | RepositoryTriggerDestinationArnRequiredException
    | RepositoryTriggerEventsListRequiredException
    | RepositoryTriggerNameRequiredException
    | RepositoryTriggersListRequiredException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    {},
    | InvalidRepositoryNameException
    | InvalidResourceArnException
    | InvalidSystemTagUsageException
    | InvalidTagKeysListException
    | RepositoryDoesNotExistException
    | ResourceArnRequiredException
    | TagKeysListRequiredException
    | TagPolicyException
    | TooManyTagsException
    | CommonAwsError
  >;
  updateApprovalRuleTemplateContent(
    input: UpdateApprovalRuleTemplateContentInput,
  ): Effect.Effect<
    UpdateApprovalRuleTemplateContentOutput,
    | ApprovalRuleTemplateContentRequiredException
    | ApprovalRuleTemplateDoesNotExistException
    | ApprovalRuleTemplateNameRequiredException
    | InvalidApprovalRuleTemplateContentException
    | InvalidApprovalRuleTemplateNameException
    | InvalidRuleContentSha256Exception
    | CommonAwsError
  >;
  updateApprovalRuleTemplateDescription(
    input: UpdateApprovalRuleTemplateDescriptionInput,
  ): Effect.Effect<
    UpdateApprovalRuleTemplateDescriptionOutput,
    | ApprovalRuleTemplateDoesNotExistException
    | ApprovalRuleTemplateNameRequiredException
    | InvalidApprovalRuleTemplateDescriptionException
    | InvalidApprovalRuleTemplateNameException
    | CommonAwsError
  >;
  updateApprovalRuleTemplateName(
    input: UpdateApprovalRuleTemplateNameInput,
  ): Effect.Effect<
    UpdateApprovalRuleTemplateNameOutput,
    | ApprovalRuleTemplateDoesNotExistException
    | ApprovalRuleTemplateNameAlreadyExistsException
    | ApprovalRuleTemplateNameRequiredException
    | InvalidApprovalRuleTemplateNameException
    | CommonAwsError
  >;
  updateComment(
    input: UpdateCommentInput,
  ): Effect.Effect<
    UpdateCommentOutput,
    | CommentContentRequiredException
    | CommentContentSizeLimitExceededException
    | CommentDeletedException
    | CommentDoesNotExistException
    | CommentIdRequiredException
    | CommentNotCreatedByCallerException
    | InvalidCommentIdException
    | CommonAwsError
  >;
  updateDefaultBranch(
    input: UpdateDefaultBranchInput,
  ): Effect.Effect<
    {},
    | BranchDoesNotExistException
    | BranchNameRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidBranchNameException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError
  >;
  updatePullRequestApprovalRuleContent(
    input: UpdatePullRequestApprovalRuleContentInput,
  ): Effect.Effect<
    UpdatePullRequestApprovalRuleContentOutput,
    | ApprovalRuleContentRequiredException
    | ApprovalRuleDoesNotExistException
    | ApprovalRuleNameRequiredException
    | CannotModifyApprovalRuleFromTemplateException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidApprovalRuleContentException
    | InvalidApprovalRuleNameException
    | InvalidPullRequestIdException
    | InvalidRuleContentSha256Exception
    | PullRequestAlreadyClosedException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | CommonAwsError
  >;
  updatePullRequestApprovalState(
    input: UpdatePullRequestApprovalStateInput,
  ): Effect.Effect<
    {},
    | ApprovalStateRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidApprovalStateException
    | InvalidPullRequestIdException
    | InvalidRevisionIdException
    | MaximumNumberOfApprovalsExceededException
    | PullRequestAlreadyClosedException
    | PullRequestCannotBeApprovedByAuthorException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | RevisionIdRequiredException
    | RevisionNotCurrentException
    | CommonAwsError
  >;
  updatePullRequestDescription(
    input: UpdatePullRequestDescriptionInput,
  ): Effect.Effect<
    UpdatePullRequestDescriptionOutput,
    | InvalidDescriptionException
    | InvalidPullRequestIdException
    | PullRequestAlreadyClosedException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | CommonAwsError
  >;
  updatePullRequestStatus(
    input: UpdatePullRequestStatusInput,
  ): Effect.Effect<
    UpdatePullRequestStatusOutput,
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidPullRequestIdException
    | InvalidPullRequestStatusException
    | InvalidPullRequestStatusUpdateException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | PullRequestStatusRequiredException
    | CommonAwsError
  >;
  updatePullRequestTitle(
    input: UpdatePullRequestTitleInput,
  ): Effect.Effect<
    UpdatePullRequestTitleOutput,
    | InvalidPullRequestIdException
    | InvalidTitleException
    | PullRequestAlreadyClosedException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | TitleRequiredException
    | CommonAwsError
  >;
  updateRepositoryDescription(
    input: UpdateRepositoryDescriptionInput,
  ): Effect.Effect<
    {},
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidRepositoryDescriptionException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError
  >;
  updateRepositoryEncryptionKey(
    input: UpdateRepositoryEncryptionKeyInput,
  ): Effect.Effect<
    UpdateRepositoryEncryptionKeyOutput,
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyInvalidIdException
    | EncryptionKeyInvalidUsageException
    | EncryptionKeyNotFoundException
    | EncryptionKeyRequiredException
    | EncryptionKeyUnavailableException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError
  >;
  updateRepositoryName(
    input: UpdateRepositoryNameInput,
  ): Effect.Effect<
    {},
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameExistsException
    | RepositoryNameRequiredException
    | CommonAwsError
  >;
}

export declare class Codecommit extends CodeCommit {}

export type AccountId = string;

export declare class ActorDoesNotExistException extends EffectData.TaggedError(
  "ActorDoesNotExistException",
)<{
  readonly message?: string;
}> {}
export type AdditionalData = string;

export interface Approval {
  userArn?: string;
  approvalState?: ApprovalState;
}
export type ApprovalList = Array<Approval>;
export interface ApprovalRule {
  approvalRuleId?: string;
  approvalRuleName?: string;
  approvalRuleContent?: string;
  ruleContentSha256?: string;
  lastModifiedDate?: Date | string;
  creationDate?: Date | string;
  lastModifiedUser?: string;
  originApprovalRuleTemplate?: OriginApprovalRuleTemplate;
}
export type ApprovalRuleContent = string;

export declare class ApprovalRuleContentRequiredException extends EffectData.TaggedError(
  "ApprovalRuleContentRequiredException",
)<{
  readonly message?: string;
}> {}
export declare class ApprovalRuleDoesNotExistException extends EffectData.TaggedError(
  "ApprovalRuleDoesNotExistException",
)<{
  readonly message?: string;
}> {}
export interface ApprovalRuleEventMetadata {
  approvalRuleName?: string;
  approvalRuleId?: string;
  approvalRuleContent?: string;
}
export type ApprovalRuleId = string;

export type ApprovalRuleName = string;

export declare class ApprovalRuleNameAlreadyExistsException extends EffectData.TaggedError(
  "ApprovalRuleNameAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export declare class ApprovalRuleNameRequiredException extends EffectData.TaggedError(
  "ApprovalRuleNameRequiredException",
)<{
  readonly message?: string;
}> {}
export interface ApprovalRuleOverriddenEventMetadata {
  revisionId?: string;
  overrideStatus?: OverrideStatus;
}
export type ApprovalRulesList = Array<ApprovalRule>;
export type ApprovalRulesNotSatisfiedList = Array<string>;
export type ApprovalRulesSatisfiedList = Array<string>;
export interface ApprovalRuleTemplate {
  approvalRuleTemplateId?: string;
  approvalRuleTemplateName?: string;
  approvalRuleTemplateDescription?: string;
  approvalRuleTemplateContent?: string;
  ruleContentSha256?: string;
  lastModifiedDate?: Date | string;
  creationDate?: Date | string;
  lastModifiedUser?: string;
}
export type ApprovalRuleTemplateContent = string;

export declare class ApprovalRuleTemplateContentRequiredException extends EffectData.TaggedError(
  "ApprovalRuleTemplateContentRequiredException",
)<{
  readonly message?: string;
}> {}
export type ApprovalRuleTemplateDescription = string;

export declare class ApprovalRuleTemplateDoesNotExistException extends EffectData.TaggedError(
  "ApprovalRuleTemplateDoesNotExistException",
)<{
  readonly message?: string;
}> {}
export type ApprovalRuleTemplateId = string;

export declare class ApprovalRuleTemplateInUseException extends EffectData.TaggedError(
  "ApprovalRuleTemplateInUseException",
)<{
  readonly message?: string;
}> {}
export type ApprovalRuleTemplateName = string;

export declare class ApprovalRuleTemplateNameAlreadyExistsException extends EffectData.TaggedError(
  "ApprovalRuleTemplateNameAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export type ApprovalRuleTemplateNameList = Array<string>;
export declare class ApprovalRuleTemplateNameRequiredException extends EffectData.TaggedError(
  "ApprovalRuleTemplateNameRequiredException",
)<{
  readonly message?: string;
}> {}
export type ApprovalState = "APPROVE" | "REVOKE";
export interface ApprovalStateChangedEventMetadata {
  revisionId?: string;
  approvalStatus?: ApprovalState;
}
export declare class ApprovalStateRequiredException extends EffectData.TaggedError(
  "ApprovalStateRequiredException",
)<{
  readonly message?: string;
}> {}
export type Approved = boolean;

export type Arn = string;

export interface AssociateApprovalRuleTemplateWithRepositoryInput {
  approvalRuleTemplateName: string;
  repositoryName: string;
}
export declare class AuthorDoesNotExistException extends EffectData.TaggedError(
  "AuthorDoesNotExistException",
)<{
  readonly message?: string;
}> {}
export interface BatchAssociateApprovalRuleTemplateWithRepositoriesError {
  repositoryName?: string;
  errorCode?: string;
  errorMessage?: string;
}
export type BatchAssociateApprovalRuleTemplateWithRepositoriesErrorsList =
  Array<BatchAssociateApprovalRuleTemplateWithRepositoriesError>;
export interface BatchAssociateApprovalRuleTemplateWithRepositoriesInput {
  approvalRuleTemplateName: string;
  repositoryNames: Array<string>;
}
export interface BatchAssociateApprovalRuleTemplateWithRepositoriesOutput {
  associatedRepositoryNames: Array<string>;
  errors: Array<BatchAssociateApprovalRuleTemplateWithRepositoriesError>;
}
export interface BatchDescribeMergeConflictsError {
  filePath: string;
  exceptionName: string;
  message: string;
}
export type BatchDescribeMergeConflictsErrors =
  Array<BatchDescribeMergeConflictsError>;
export interface BatchDescribeMergeConflictsInput {
  repositoryName: string;
  destinationCommitSpecifier: string;
  sourceCommitSpecifier: string;
  mergeOption: MergeOptionTypeEnum;
  maxMergeHunks?: number;
  maxConflictFiles?: number;
  filePaths?: Array<string>;
  conflictDetailLevel?: ConflictDetailLevelTypeEnum;
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum;
  nextToken?: string;
}
export interface BatchDescribeMergeConflictsOutput {
  conflicts: Array<Conflict>;
  nextToken?: string;
  errors?: Array<BatchDescribeMergeConflictsError>;
  destinationCommitId: string;
  sourceCommitId: string;
  baseCommitId?: string;
}
export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesError {
  repositoryName?: string;
  errorCode?: string;
  errorMessage?: string;
}
export type BatchDisassociateApprovalRuleTemplateFromRepositoriesErrorsList =
  Array<BatchDisassociateApprovalRuleTemplateFromRepositoriesError>;
export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesInput {
  approvalRuleTemplateName: string;
  repositoryNames: Array<string>;
}
export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput {
  disassociatedRepositoryNames: Array<string>;
  errors: Array<BatchDisassociateApprovalRuleTemplateFromRepositoriesError>;
}
export interface BatchGetCommitsError {
  commitId?: string;
  errorCode?: string;
  errorMessage?: string;
}
export type BatchGetCommitsErrorsList = Array<BatchGetCommitsError>;
export interface BatchGetCommitsInput {
  commitIds: Array<string>;
  repositoryName: string;
}
export interface BatchGetCommitsOutput {
  commits?: Array<Commit>;
  errors?: Array<BatchGetCommitsError>;
}
export interface BatchGetRepositoriesError {
  repositoryId?: string;
  repositoryName?: string;
  errorCode?: BatchGetRepositoriesErrorCodeEnum;
  errorMessage?: string;
}
export type BatchGetRepositoriesErrorCodeEnum =
  | "ENCRYPTION_INTEGRITY_CHECKS_FAILED_EXCEPTION"
  | "ENCRYPTION_KEY_ACCESS_DENIED_EXCEPTION"
  | "ENCRYPTION_KEY_DISABLED_EXCEPTION"
  | "ENCRYPTION_KEY_NOT_FOUND_EXCEPTION"
  | "ENCRYPTION_KEY_UNAVAILABLE_EXCEPTION"
  | "REPOSITORY_DOES_NOT_EXIST_EXCEPTION";
export type BatchGetRepositoriesErrorsList = Array<BatchGetRepositoriesError>;
export interface BatchGetRepositoriesInput {
  repositoryNames: Array<string>;
}
export interface BatchGetRepositoriesOutput {
  repositories?: Array<RepositoryMetadata>;
  repositoriesNotFound?: Array<string>;
  errors?: Array<BatchGetRepositoriesError>;
}
export declare class BeforeCommitIdAndAfterCommitIdAreSameException extends EffectData.TaggedError(
  "BeforeCommitIdAndAfterCommitIdAreSameException",
)<{
  readonly message?: string;
}> {}
export type blob = Uint8Array | string;

export declare class BlobIdDoesNotExistException extends EffectData.TaggedError(
  "BlobIdDoesNotExistException",
)<{
  readonly message?: string;
}> {}
export declare class BlobIdRequiredException extends EffectData.TaggedError(
  "BlobIdRequiredException",
)<{
  readonly message?: string;
}> {}
export interface BlobMetadata {
  blobId?: string;
  path?: string;
  mode?: string;
}
export declare class BranchDoesNotExistException extends EffectData.TaggedError(
  "BranchDoesNotExistException",
)<{
  readonly message?: string;
}> {}
export interface BranchInfo {
  branchName?: string;
  commitId?: string;
}
export type BranchName = string;

export declare class BranchNameExistsException extends EffectData.TaggedError(
  "BranchNameExistsException",
)<{
  readonly message?: string;
}> {}
export declare class BranchNameIsTagNameException extends EffectData.TaggedError(
  "BranchNameIsTagNameException",
)<{
  readonly message?: string;
}> {}
export type BranchNameList = Array<string>;
export declare class BranchNameRequiredException extends EffectData.TaggedError(
  "BranchNameRequiredException",
)<{
  readonly message?: string;
}> {}
export type CallerReactions = Array<string>;
export declare class CannotDeleteApprovalRuleFromTemplateException extends EffectData.TaggedError(
  "CannotDeleteApprovalRuleFromTemplateException",
)<{
  readonly message?: string;
}> {}
export declare class CannotModifyApprovalRuleFromTemplateException extends EffectData.TaggedError(
  "CannotModifyApprovalRuleFromTemplateException",
)<{
  readonly message?: string;
}> {}
export type CapitalBoolean = boolean;

export type ChangeTypeEnum = "ADDED" | "MODIFIED" | "DELETED";
export type ClientRequestToken = string;

export declare class ClientRequestTokenRequiredException extends EffectData.TaggedError(
  "ClientRequestTokenRequiredException",
)<{
  readonly message?: string;
}> {}
export type CloneUrlHttp = string;

export type CloneUrlSsh = string;

export interface Comment {
  commentId?: string;
  content?: string;
  inReplyTo?: string;
  creationDate?: Date | string;
  lastModifiedDate?: Date | string;
  authorArn?: string;
  deleted?: boolean;
  clientRequestToken?: string;
  callerReactions?: Array<string>;
  reactionCounts?: Record<string, number>;
}
export declare class CommentContentRequiredException extends EffectData.TaggedError(
  "CommentContentRequiredException",
)<{
  readonly message?: string;
}> {}
export declare class CommentContentSizeLimitExceededException extends EffectData.TaggedError(
  "CommentContentSizeLimitExceededException",
)<{
  readonly message?: string;
}> {}
export declare class CommentDeletedException extends EffectData.TaggedError(
  "CommentDeletedException",
)<{
  readonly message?: string;
}> {}
export declare class CommentDoesNotExistException extends EffectData.TaggedError(
  "CommentDoesNotExistException",
)<{
  readonly message?: string;
}> {}
export type CommentId = string;

export declare class CommentIdRequiredException extends EffectData.TaggedError(
  "CommentIdRequiredException",
)<{
  readonly message?: string;
}> {}
export declare class CommentNotCreatedByCallerException extends EffectData.TaggedError(
  "CommentNotCreatedByCallerException",
)<{
  readonly message?: string;
}> {}
export type Comments = Array<Comment>;
export interface CommentsForComparedCommit {
  repositoryName?: string;
  beforeCommitId?: string;
  afterCommitId?: string;
  beforeBlobId?: string;
  afterBlobId?: string;
  location?: Location;
  comments?: Array<Comment>;
}
export type CommentsForComparedCommitData = Array<CommentsForComparedCommit>;
export interface CommentsForPullRequest {
  pullRequestId?: string;
  repositoryName?: string;
  beforeCommitId?: string;
  afterCommitId?: string;
  beforeBlobId?: string;
  afterBlobId?: string;
  location?: Location;
  comments?: Array<Comment>;
}
export type CommentsForPullRequestData = Array<CommentsForPullRequest>;
export interface Commit {
  commitId?: string;
  treeId?: string;
  parents?: Array<string>;
  message?: string;
  author?: UserInfo;
  committer?: UserInfo;
  additionalData?: string;
}
export declare class CommitDoesNotExistException extends EffectData.TaggedError(
  "CommitDoesNotExistException",
)<{
  readonly message?: string;
}> {}
export type CommitId = string;

export declare class CommitIdDoesNotExistException extends EffectData.TaggedError(
  "CommitIdDoesNotExistException",
)<{
  readonly message?: string;
}> {}
export declare class CommitIdRequiredException extends EffectData.TaggedError(
  "CommitIdRequiredException",
)<{
  readonly message?: string;
}> {}
export type CommitIdsInputList = Array<string>;
export declare class CommitIdsLimitExceededException extends EffectData.TaggedError(
  "CommitIdsLimitExceededException",
)<{
  readonly message?: string;
}> {}
export declare class CommitIdsListRequiredException extends EffectData.TaggedError(
  "CommitIdsListRequiredException",
)<{
  readonly message?: string;
}> {}
export declare class CommitMessageLengthExceededException extends EffectData.TaggedError(
  "CommitMessageLengthExceededException",
)<{
  readonly message?: string;
}> {}
export type CommitName = string;

export type CommitObjectsList = Array<Commit>;
export declare class CommitRequiredException extends EffectData.TaggedError(
  "CommitRequiredException",
)<{
  readonly message?: string;
}> {}
export declare class ConcurrentReferenceUpdateException extends EffectData.TaggedError(
  "ConcurrentReferenceUpdateException",
)<{
  readonly message?: string;
}> {}
export interface Conflict {
  conflictMetadata?: ConflictMetadata;
  mergeHunks?: Array<MergeHunk>;
}
export type ConflictDetailLevelTypeEnum = "FILE_LEVEL" | "LINE_LEVEL";
export interface ConflictMetadata {
  filePath?: string;
  fileSizes?: FileSizes;
  fileModes?: FileModes;
  objectTypes?: ObjectTypes;
  numberOfConflicts?: number;
  isBinaryFile?: IsBinaryFile;
  contentConflict?: boolean;
  fileModeConflict?: boolean;
  objectTypeConflict?: boolean;
  mergeOperations?: MergeOperations;
}
export type ConflictMetadataList = Array<ConflictMetadata>;
export interface ConflictResolution {
  replaceContents?: Array<ReplaceContentEntry>;
  deleteFiles?: Array<DeleteFileEntry>;
  setFileModes?: Array<SetFileModeEntry>;
}
export type ConflictResolutionStrategyTypeEnum =
  | "NONE"
  | "ACCEPT_SOURCE"
  | "ACCEPT_DESTINATION"
  | "AUTOMERGE";
export type Conflicts = Array<Conflict>;
export type Content = string;

export type Count = number;

export interface CreateApprovalRuleTemplateInput {
  approvalRuleTemplateName: string;
  approvalRuleTemplateContent: string;
  approvalRuleTemplateDescription?: string;
}
export interface CreateApprovalRuleTemplateOutput {
  approvalRuleTemplate: ApprovalRuleTemplate;
}
export interface CreateBranchInput {
  repositoryName: string;
  branchName: string;
  commitId: string;
}
export interface CreateCommitInput {
  repositoryName: string;
  branchName: string;
  parentCommitId?: string;
  authorName?: string;
  email?: string;
  commitMessage?: string;
  keepEmptyFolders?: boolean;
  putFiles?: Array<PutFileEntry>;
  deleteFiles?: Array<DeleteFileEntry>;
  setFileModes?: Array<SetFileModeEntry>;
}
export interface CreateCommitOutput {
  commitId?: string;
  treeId?: string;
  filesAdded?: Array<FileMetadata>;
  filesUpdated?: Array<FileMetadata>;
  filesDeleted?: Array<FileMetadata>;
}
export interface CreatePullRequestApprovalRuleInput {
  pullRequestId: string;
  approvalRuleName: string;
  approvalRuleContent: string;
}
export interface CreatePullRequestApprovalRuleOutput {
  approvalRule: ApprovalRule;
}
export interface CreatePullRequestInput {
  title: string;
  description?: string;
  targets: Array<Target>;
  clientRequestToken?: string;
}
export interface CreatePullRequestOutput {
  pullRequest: PullRequest;
}
export interface CreateRepositoryInput {
  repositoryName: string;
  repositoryDescription?: string;
  tags?: Record<string, string>;
  kmsKeyId?: string;
}
export interface CreateRepositoryOutput {
  repositoryMetadata?: RepositoryMetadata;
}
export interface CreateUnreferencedMergeCommitInput {
  repositoryName: string;
  sourceCommitSpecifier: string;
  destinationCommitSpecifier: string;
  mergeOption: MergeOptionTypeEnum;
  conflictDetailLevel?: ConflictDetailLevelTypeEnum;
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum;
  authorName?: string;
  email?: string;
  commitMessage?: string;
  keepEmptyFolders?: boolean;
  conflictResolution?: ConflictResolution;
}
export interface CreateUnreferencedMergeCommitOutput {
  commitId?: string;
  treeId?: string;
}
export type CreationDate = Date | string;

export type CodecommitDate = string;

export declare class DefaultBranchCannotBeDeletedException extends EffectData.TaggedError(
  "DefaultBranchCannotBeDeletedException",
)<{
  readonly message?: string;
}> {}
export interface DeleteApprovalRuleTemplateInput {
  approvalRuleTemplateName: string;
}
export interface DeleteApprovalRuleTemplateOutput {
  approvalRuleTemplateId: string;
}
export interface DeleteBranchInput {
  repositoryName: string;
  branchName: string;
}
export interface DeleteBranchOutput {
  deletedBranch?: BranchInfo;
}
export interface DeleteCommentContentInput {
  commentId: string;
}
export interface DeleteCommentContentOutput {
  comment?: Comment;
}
export type DeleteFileEntries = Array<DeleteFileEntry>;
export interface DeleteFileEntry {
  filePath: string;
}
export interface DeleteFileInput {
  repositoryName: string;
  branchName: string;
  filePath: string;
  parentCommitId: string;
  keepEmptyFolders?: boolean;
  commitMessage?: string;
  name?: string;
  email?: string;
}
export interface DeleteFileOutput {
  commitId: string;
  blobId: string;
  treeId: string;
  filePath: string;
}
export interface DeletePullRequestApprovalRuleInput {
  pullRequestId: string;
  approvalRuleName: string;
}
export interface DeletePullRequestApprovalRuleOutput {
  approvalRuleId: string;
}
export interface DeleteRepositoryInput {
  repositoryName: string;
}
export interface DeleteRepositoryOutput {
  repositoryId?: string;
}
export interface DescribeMergeConflictsInput {
  repositoryName: string;
  destinationCommitSpecifier: string;
  sourceCommitSpecifier: string;
  mergeOption: MergeOptionTypeEnum;
  maxMergeHunks?: number;
  filePath: string;
  conflictDetailLevel?: ConflictDetailLevelTypeEnum;
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum;
  nextToken?: string;
}
export interface DescribeMergeConflictsOutput {
  conflictMetadata: ConflictMetadata;
  mergeHunks: Array<MergeHunk>;
  nextToken?: string;
  destinationCommitId: string;
  sourceCommitId: string;
  baseCommitId?: string;
}
export interface DescribePullRequestEventsInput {
  pullRequestId: string;
  pullRequestEventType?: PullRequestEventType;
  actorArn?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface DescribePullRequestEventsOutput {
  pullRequestEvents: Array<PullRequestEvent>;
  nextToken?: string;
}
export type Description = string;

export interface Difference {
  beforeBlob?: BlobMetadata;
  afterBlob?: BlobMetadata;
  changeType?: ChangeTypeEnum;
}
export type DifferenceList = Array<Difference>;
export declare class DirectoryNameConflictsWithFileNameException extends EffectData.TaggedError(
  "DirectoryNameConflictsWithFileNameException",
)<{
  readonly message?: string;
}> {}
export interface DisassociateApprovalRuleTemplateFromRepositoryInput {
  approvalRuleTemplateName: string;
  repositoryName: string;
}
export type Email = string;

export declare class EncryptionIntegrityChecksFailedException extends EffectData.TaggedError(
  "EncryptionIntegrityChecksFailedException",
)<{
  readonly message?: string;
}> {}
export declare class EncryptionKeyAccessDeniedException extends EffectData.TaggedError(
  "EncryptionKeyAccessDeniedException",
)<{
  readonly message?: string;
}> {}
export declare class EncryptionKeyDisabledException extends EffectData.TaggedError(
  "EncryptionKeyDisabledException",
)<{
  readonly message?: string;
}> {}
export declare class EncryptionKeyInvalidIdException extends EffectData.TaggedError(
  "EncryptionKeyInvalidIdException",
)<{
  readonly message?: string;
}> {}
export declare class EncryptionKeyInvalidUsageException extends EffectData.TaggedError(
  "EncryptionKeyInvalidUsageException",
)<{
  readonly message?: string;
}> {}
export declare class EncryptionKeyNotFoundException extends EffectData.TaggedError(
  "EncryptionKeyNotFoundException",
)<{
  readonly message?: string;
}> {}
export declare class EncryptionKeyRequiredException extends EffectData.TaggedError(
  "EncryptionKeyRequiredException",
)<{
  readonly message?: string;
}> {}
export declare class EncryptionKeyUnavailableException extends EffectData.TaggedError(
  "EncryptionKeyUnavailableException",
)<{
  readonly message?: string;
}> {}
export type ErrorCode = string;

export type ErrorMessage = string;

export interface EvaluatePullRequestApprovalRulesInput {
  pullRequestId: string;
  revisionId: string;
}
export interface EvaluatePullRequestApprovalRulesOutput {
  evaluation: Evaluation;
}
export interface Evaluation {
  approved?: boolean;
  overridden?: boolean;
  approvalRulesSatisfied?: Array<string>;
  approvalRulesNotSatisfied?: Array<string>;
}
export type EventDate = Date | string;

export type ExceptionName = string;

export interface File {
  blobId?: string;
  absolutePath?: string;
  relativePath?: string;
  fileMode?: FileModeTypeEnum;
}
export type FileContent = Uint8Array | string;

export declare class FileContentAndSourceFileSpecifiedException extends EffectData.TaggedError(
  "FileContentAndSourceFileSpecifiedException",
)<{
  readonly message?: string;
}> {}
export declare class FileContentRequiredException extends EffectData.TaggedError(
  "FileContentRequiredException",
)<{
  readonly message?: string;
}> {}
export declare class FileContentSizeLimitExceededException extends EffectData.TaggedError(
  "FileContentSizeLimitExceededException",
)<{
  readonly message?: string;
}> {}
export declare class FileDoesNotExistException extends EffectData.TaggedError(
  "FileDoesNotExistException",
)<{
  readonly message?: string;
}> {}
export declare class FileEntryRequiredException extends EffectData.TaggedError(
  "FileEntryRequiredException",
)<{
  readonly message?: string;
}> {}
export type FileList = Array<File>;
export interface FileMetadata {
  absolutePath?: string;
  blobId?: string;
  fileMode?: FileModeTypeEnum;
}
export declare class FileModeRequiredException extends EffectData.TaggedError(
  "FileModeRequiredException",
)<{
  readonly message?: string;
}> {}
export interface FileModes {
  source?: FileModeTypeEnum;
  destination?: FileModeTypeEnum;
  base?: FileModeTypeEnum;
}
export type FileModeTypeEnum = "EXECUTABLE" | "NORMAL" | "SYMLINK";
export declare class FileNameConflictsWithDirectoryNameException extends EffectData.TaggedError(
  "FileNameConflictsWithDirectoryNameException",
)<{
  readonly message?: string;
}> {}
export declare class FilePathConflictsWithSubmodulePathException extends EffectData.TaggedError(
  "FilePathConflictsWithSubmodulePathException",
)<{
  readonly message?: string;
}> {}
export type FilePaths = Array<string>;
export type FileSize = number;

export interface FileSizes {
  source?: number;
  destination?: number;
  base?: number;
}
export type FilesMetadata = Array<FileMetadata>;
export declare class FileTooLargeException extends EffectData.TaggedError(
  "FileTooLargeException",
)<{
  readonly message?: string;
}> {}
export interface FileVersion {
  commit?: Commit;
  blobId?: string;
  path?: string;
  revisionChildren?: Array<string>;
}
export interface Folder {
  treeId?: string;
  absolutePath?: string;
  relativePath?: string;
}
export declare class FolderContentSizeLimitExceededException extends EffectData.TaggedError(
  "FolderContentSizeLimitExceededException",
)<{
  readonly message?: string;
}> {}
export declare class FolderDoesNotExistException extends EffectData.TaggedError(
  "FolderDoesNotExistException",
)<{
  readonly message?: string;
}> {}
export type FolderList = Array<Folder>;
export interface GetApprovalRuleTemplateInput {
  approvalRuleTemplateName: string;
}
export interface GetApprovalRuleTemplateOutput {
  approvalRuleTemplate: ApprovalRuleTemplate;
}
export interface GetBlobInput {
  repositoryName: string;
  blobId: string;
}
export interface GetBlobOutput {
  content: Uint8Array | string;
}
export interface GetBranchInput {
  repositoryName?: string;
  branchName?: string;
}
export interface GetBranchOutput {
  branch?: BranchInfo;
}
export interface GetCommentInput {
  commentId: string;
}
export interface GetCommentOutput {
  comment?: Comment;
}
export interface GetCommentReactionsInput {
  commentId: string;
  reactionUserArn?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetCommentReactionsOutput {
  reactionsForComment: Array<ReactionForComment>;
  nextToken?: string;
}
export interface GetCommentsForComparedCommitInput {
  repositoryName: string;
  beforeCommitId?: string;
  afterCommitId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetCommentsForComparedCommitOutput {
  commentsForComparedCommitData?: Array<CommentsForComparedCommit>;
  nextToken?: string;
}
export interface GetCommentsForPullRequestInput {
  pullRequestId: string;
  repositoryName?: string;
  beforeCommitId?: string;
  afterCommitId?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface GetCommentsForPullRequestOutput {
  commentsForPullRequestData?: Array<CommentsForPullRequest>;
  nextToken?: string;
}
export interface GetCommitInput {
  repositoryName: string;
  commitId: string;
}
export interface GetCommitOutput {
  commit: Commit;
}
export interface GetDifferencesInput {
  repositoryName: string;
  beforeCommitSpecifier?: string;
  afterCommitSpecifier: string;
  beforePath?: string;
  afterPath?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetDifferencesOutput {
  differences?: Array<Difference>;
  NextToken?: string;
}
export interface GetFileInput {
  repositoryName: string;
  commitSpecifier?: string;
  filePath: string;
}
export interface GetFileOutput {
  commitId: string;
  blobId: string;
  filePath: string;
  fileMode: FileModeTypeEnum;
  fileSize: number;
  fileContent: Uint8Array | string;
}
export interface GetFolderInput {
  repositoryName: string;
  commitSpecifier?: string;
  folderPath: string;
}
export interface GetFolderOutput {
  commitId: string;
  folderPath: string;
  treeId?: string;
  subFolders?: Array<Folder>;
  files?: Array<File>;
  symbolicLinks?: Array<SymbolicLink>;
  subModules?: Array<SubModule>;
}
export interface GetMergeCommitInput {
  repositoryName: string;
  sourceCommitSpecifier: string;
  destinationCommitSpecifier: string;
  conflictDetailLevel?: ConflictDetailLevelTypeEnum;
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum;
}
export interface GetMergeCommitOutput {
  sourceCommitId?: string;
  destinationCommitId?: string;
  baseCommitId?: string;
  mergedCommitId?: string;
}
export interface GetMergeConflictsInput {
  repositoryName: string;
  destinationCommitSpecifier: string;
  sourceCommitSpecifier: string;
  mergeOption: MergeOptionTypeEnum;
  conflictDetailLevel?: ConflictDetailLevelTypeEnum;
  maxConflictFiles?: number;
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum;
  nextToken?: string;
}
export interface GetMergeConflictsOutput {
  mergeable: boolean;
  destinationCommitId: string;
  sourceCommitId: string;
  baseCommitId?: string;
  conflictMetadataList: Array<ConflictMetadata>;
  nextToken?: string;
}
export interface GetMergeOptionsInput {
  repositoryName: string;
  sourceCommitSpecifier: string;
  destinationCommitSpecifier: string;
  conflictDetailLevel?: ConflictDetailLevelTypeEnum;
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum;
}
export interface GetMergeOptionsOutput {
  mergeOptions: Array<MergeOptionTypeEnum>;
  sourceCommitId: string;
  destinationCommitId: string;
  baseCommitId: string;
}
export interface GetPullRequestApprovalStatesInput {
  pullRequestId: string;
  revisionId: string;
}
export interface GetPullRequestApprovalStatesOutput {
  approvals?: Array<Approval>;
}
export interface GetPullRequestInput {
  pullRequestId: string;
}
export interface GetPullRequestOutput {
  pullRequest: PullRequest;
}
export interface GetPullRequestOverrideStateInput {
  pullRequestId: string;
  revisionId: string;
}
export interface GetPullRequestOverrideStateOutput {
  overridden?: boolean;
  overrider?: string;
}
export interface GetRepositoryInput {
  repositoryName: string;
}
export interface GetRepositoryOutput {
  repositoryMetadata?: RepositoryMetadata;
}
export interface GetRepositoryTriggersInput {
  repositoryName: string;
}
export interface GetRepositoryTriggersOutput {
  configurationId?: string;
  triggers?: Array<RepositoryTrigger>;
}
export type HunkContent = string;

export declare class IdempotencyParameterMismatchException extends EffectData.TaggedError(
  "IdempotencyParameterMismatchException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidActorArnException extends EffectData.TaggedError(
  "InvalidActorArnException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidApprovalRuleContentException extends EffectData.TaggedError(
  "InvalidApprovalRuleContentException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidApprovalRuleNameException extends EffectData.TaggedError(
  "InvalidApprovalRuleNameException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidApprovalRuleTemplateContentException extends EffectData.TaggedError(
  "InvalidApprovalRuleTemplateContentException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidApprovalRuleTemplateDescriptionException extends EffectData.TaggedError(
  "InvalidApprovalRuleTemplateDescriptionException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidApprovalRuleTemplateNameException extends EffectData.TaggedError(
  "InvalidApprovalRuleTemplateNameException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidApprovalStateException extends EffectData.TaggedError(
  "InvalidApprovalStateException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidAuthorArnException extends EffectData.TaggedError(
  "InvalidAuthorArnException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidBlobIdException extends EffectData.TaggedError(
  "InvalidBlobIdException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidBranchNameException extends EffectData.TaggedError(
  "InvalidBranchNameException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidClientRequestTokenException extends EffectData.TaggedError(
  "InvalidClientRequestTokenException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidCommentIdException extends EffectData.TaggedError(
  "InvalidCommentIdException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidCommitException extends EffectData.TaggedError(
  "InvalidCommitException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidCommitIdException extends EffectData.TaggedError(
  "InvalidCommitIdException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidConflictDetailLevelException extends EffectData.TaggedError(
  "InvalidConflictDetailLevelException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidConflictResolutionException extends EffectData.TaggedError(
  "InvalidConflictResolutionException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidConflictResolutionStrategyException extends EffectData.TaggedError(
  "InvalidConflictResolutionStrategyException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidContinuationTokenException extends EffectData.TaggedError(
  "InvalidContinuationTokenException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDeletionParameterException extends EffectData.TaggedError(
  "InvalidDeletionParameterException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDescriptionException extends EffectData.TaggedError(
  "InvalidDescriptionException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidDestinationCommitSpecifierException extends EffectData.TaggedError(
  "InvalidDestinationCommitSpecifierException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidEmailException extends EffectData.TaggedError(
  "InvalidEmailException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidFileLocationException extends EffectData.TaggedError(
  "InvalidFileLocationException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidFileModeException extends EffectData.TaggedError(
  "InvalidFileModeException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidFilePositionException extends EffectData.TaggedError(
  "InvalidFilePositionException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidMaxConflictFilesException extends EffectData.TaggedError(
  "InvalidMaxConflictFilesException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidMaxMergeHunksException extends EffectData.TaggedError(
  "InvalidMaxMergeHunksException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidMaxResultsException extends EffectData.TaggedError(
  "InvalidMaxResultsException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidMergeOptionException extends EffectData.TaggedError(
  "InvalidMergeOptionException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidOrderException extends EffectData.TaggedError(
  "InvalidOrderException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidOverrideStatusException extends EffectData.TaggedError(
  "InvalidOverrideStatusException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParentCommitIdException extends EffectData.TaggedError(
  "InvalidParentCommitIdException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidPathException extends EffectData.TaggedError(
  "InvalidPathException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidPullRequestEventTypeException extends EffectData.TaggedError(
  "InvalidPullRequestEventTypeException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidPullRequestIdException extends EffectData.TaggedError(
  "InvalidPullRequestIdException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidPullRequestStatusException extends EffectData.TaggedError(
  "InvalidPullRequestStatusException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidPullRequestStatusUpdateException extends EffectData.TaggedError(
  "InvalidPullRequestStatusUpdateException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidReactionUserArnException extends EffectData.TaggedError(
  "InvalidReactionUserArnException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidReactionValueException extends EffectData.TaggedError(
  "InvalidReactionValueException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidReferenceNameException extends EffectData.TaggedError(
  "InvalidReferenceNameException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRelativeFileVersionEnumException extends EffectData.TaggedError(
  "InvalidRelativeFileVersionEnumException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidReplacementContentException extends EffectData.TaggedError(
  "InvalidReplacementContentException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidReplacementTypeException extends EffectData.TaggedError(
  "InvalidReplacementTypeException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRepositoryDescriptionException extends EffectData.TaggedError(
  "InvalidRepositoryDescriptionException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRepositoryNameException extends EffectData.TaggedError(
  "InvalidRepositoryNameException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRepositoryTriggerBranchNameException extends EffectData.TaggedError(
  "InvalidRepositoryTriggerBranchNameException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRepositoryTriggerCustomDataException extends EffectData.TaggedError(
  "InvalidRepositoryTriggerCustomDataException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRepositoryTriggerDestinationArnException extends EffectData.TaggedError(
  "InvalidRepositoryTriggerDestinationArnException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRepositoryTriggerEventsException extends EffectData.TaggedError(
  "InvalidRepositoryTriggerEventsException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRepositoryTriggerNameException extends EffectData.TaggedError(
  "InvalidRepositoryTriggerNameException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRepositoryTriggerRegionException extends EffectData.TaggedError(
  "InvalidRepositoryTriggerRegionException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidResourceArnException extends EffectData.TaggedError(
  "InvalidResourceArnException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRevisionIdException extends EffectData.TaggedError(
  "InvalidRevisionIdException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRuleContentSha256Exception extends EffectData.TaggedError(
  "InvalidRuleContentSha256Exception",
)<{
  readonly message?: string;
}> {}
export declare class InvalidSortByException extends EffectData.TaggedError(
  "InvalidSortByException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidSourceCommitSpecifierException extends EffectData.TaggedError(
  "InvalidSourceCommitSpecifierException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidSystemTagUsageException extends EffectData.TaggedError(
  "InvalidSystemTagUsageException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTagKeysListException extends EffectData.TaggedError(
  "InvalidTagKeysListException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTagsMapException extends EffectData.TaggedError(
  "InvalidTagsMapException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTargetBranchException extends EffectData.TaggedError(
  "InvalidTargetBranchException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTargetException extends EffectData.TaggedError(
  "InvalidTargetException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTargetsException extends EffectData.TaggedError(
  "InvalidTargetsException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTitleException extends EffectData.TaggedError(
  "InvalidTitleException",
)<{
  readonly message?: string;
}> {}
export interface IsBinaryFile {
  source?: boolean;
  destination?: boolean;
  base?: boolean;
}
export type IsCommentDeleted = boolean;

export type IsContentConflict = boolean;

export type IsFileModeConflict = boolean;

export type IsHunkConflict = boolean;

export type IsMergeable = boolean;

export type IsMerged = boolean;

export type IsMove = boolean;

export type IsObjectTypeConflict = boolean;

export type KeepEmptyFolders = boolean;

export type KmsKeyId = string;

export type LastModifiedDate = Date | string;

export type Limit = number;

export type LineNumber = number;

export interface ListApprovalRuleTemplatesInput {
  nextToken?: string;
  maxResults?: number;
}
export interface ListApprovalRuleTemplatesOutput {
  approvalRuleTemplateNames?: Array<string>;
  nextToken?: string;
}
export interface ListAssociatedApprovalRuleTemplatesForRepositoryInput {
  repositoryName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAssociatedApprovalRuleTemplatesForRepositoryOutput {
  approvalRuleTemplateNames?: Array<string>;
  nextToken?: string;
}
export interface ListBranchesInput {
  repositoryName: string;
  nextToken?: string;
}
export interface ListBranchesOutput {
  branches?: Array<string>;
  nextToken?: string;
}
export interface ListFileCommitHistoryRequest {
  repositoryName: string;
  commitSpecifier?: string;
  filePath: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListFileCommitHistoryResponse {
  revisionDag: Array<FileVersion>;
  nextToken?: string;
}
export interface ListPullRequestsInput {
  repositoryName: string;
  authorArn?: string;
  pullRequestStatus?: PullRequestStatusEnum;
  nextToken?: string;
  maxResults?: number;
}
export interface ListPullRequestsOutput {
  pullRequestIds: Array<string>;
  nextToken?: string;
}
export interface ListRepositoriesForApprovalRuleTemplateInput {
  approvalRuleTemplateName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListRepositoriesForApprovalRuleTemplateOutput {
  repositoryNames?: Array<string>;
  nextToken?: string;
}
export interface ListRepositoriesInput {
  nextToken?: string;
  sortBy?: SortByEnum;
  order?: OrderEnum;
}
export interface ListRepositoriesOutput {
  repositories?: Array<RepositoryNameIdPair>;
  nextToken?: string;
}
export interface ListTagsForResourceInput {
  resourceArn: string;
  nextToken?: string;
}
export interface ListTagsForResourceOutput {
  tags?: Record<string, string>;
  nextToken?: string;
}
export interface Location {
  filePath?: string;
  filePosition?: number;
  relativeFileVersion?: RelativeFileVersionEnum;
}
export declare class ManualMergeRequiredException extends EffectData.TaggedError(
  "ManualMergeRequiredException",
)<{
  readonly message?: string;
}> {}
export declare class MaximumBranchesExceededException extends EffectData.TaggedError(
  "MaximumBranchesExceededException",
)<{
  readonly message?: string;
}> {}
export declare class MaximumConflictResolutionEntriesExceededException extends EffectData.TaggedError(
  "MaximumConflictResolutionEntriesExceededException",
)<{
  readonly message?: string;
}> {}
export declare class MaximumFileContentToLoadExceededException extends EffectData.TaggedError(
  "MaximumFileContentToLoadExceededException",
)<{
  readonly message?: string;
}> {}
export declare class MaximumFileEntriesExceededException extends EffectData.TaggedError(
  "MaximumFileEntriesExceededException",
)<{
  readonly message?: string;
}> {}
export declare class MaximumItemsToCompareExceededException extends EffectData.TaggedError(
  "MaximumItemsToCompareExceededException",
)<{
  readonly message?: string;
}> {}
export declare class MaximumNumberOfApprovalsExceededException extends EffectData.TaggedError(
  "MaximumNumberOfApprovalsExceededException",
)<{
  readonly message?: string;
}> {}
export declare class MaximumOpenPullRequestsExceededException extends EffectData.TaggedError(
  "MaximumOpenPullRequestsExceededException",
)<{
  readonly message?: string;
}> {}
export declare class MaximumRepositoryNamesExceededException extends EffectData.TaggedError(
  "MaximumRepositoryNamesExceededException",
)<{
  readonly message?: string;
}> {}
export declare class MaximumRepositoryTriggersExceededException extends EffectData.TaggedError(
  "MaximumRepositoryTriggersExceededException",
)<{
  readonly message?: string;
}> {}
export declare class MaximumRuleTemplatesAssociatedWithRepositoryException extends EffectData.TaggedError(
  "MaximumRuleTemplatesAssociatedWithRepositoryException",
)<{
  readonly message?: string;
}> {}
export type MaxResults = number;

export interface MergeBranchesByFastForwardInput {
  repositoryName: string;
  sourceCommitSpecifier: string;
  destinationCommitSpecifier: string;
  targetBranch?: string;
}
export interface MergeBranchesByFastForwardOutput {
  commitId?: string;
  treeId?: string;
}
export interface MergeBranchesBySquashInput {
  repositoryName: string;
  sourceCommitSpecifier: string;
  destinationCommitSpecifier: string;
  targetBranch?: string;
  conflictDetailLevel?: ConflictDetailLevelTypeEnum;
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum;
  authorName?: string;
  email?: string;
  commitMessage?: string;
  keepEmptyFolders?: boolean;
  conflictResolution?: ConflictResolution;
}
export interface MergeBranchesBySquashOutput {
  commitId?: string;
  treeId?: string;
}
export interface MergeBranchesByThreeWayInput {
  repositoryName: string;
  sourceCommitSpecifier: string;
  destinationCommitSpecifier: string;
  targetBranch?: string;
  conflictDetailLevel?: ConflictDetailLevelTypeEnum;
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum;
  authorName?: string;
  email?: string;
  commitMessage?: string;
  keepEmptyFolders?: boolean;
  conflictResolution?: ConflictResolution;
}
export interface MergeBranchesByThreeWayOutput {
  commitId?: string;
  treeId?: string;
}
export interface MergeHunk {
  isConflict?: boolean;
  source?: MergeHunkDetail;
  destination?: MergeHunkDetail;
  base?: MergeHunkDetail;
}
export interface MergeHunkDetail {
  startLine?: number;
  endLine?: number;
  hunkContent?: string;
}
export type MergeHunks = Array<MergeHunk>;
export interface MergeMetadata {
  isMerged?: boolean;
  mergedBy?: string;
  mergeCommitId?: string;
  mergeOption?: MergeOptionTypeEnum;
}
export interface MergeOperations {
  source?: ChangeTypeEnum;
  destination?: ChangeTypeEnum;
}
export declare class MergeOptionRequiredException extends EffectData.TaggedError(
  "MergeOptionRequiredException",
)<{
  readonly message?: string;
}> {}
export type MergeOptions = Array<MergeOptionTypeEnum>;
export type MergeOptionTypeEnum =
  | "FAST_FORWARD_MERGE"
  | "SQUASH_MERGE"
  | "THREE_WAY_MERGE";
export interface MergePullRequestByFastForwardInput {
  pullRequestId: string;
  repositoryName: string;
  sourceCommitId?: string;
}
export interface MergePullRequestByFastForwardOutput {
  pullRequest?: PullRequest;
}
export interface MergePullRequestBySquashInput {
  pullRequestId: string;
  repositoryName: string;
  sourceCommitId?: string;
  conflictDetailLevel?: ConflictDetailLevelTypeEnum;
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum;
  commitMessage?: string;
  authorName?: string;
  email?: string;
  keepEmptyFolders?: boolean;
  conflictResolution?: ConflictResolution;
}
export interface MergePullRequestBySquashOutput {
  pullRequest?: PullRequest;
}
export interface MergePullRequestByThreeWayInput {
  pullRequestId: string;
  repositoryName: string;
  sourceCommitId?: string;
  conflictDetailLevel?: ConflictDetailLevelTypeEnum;
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum;
  commitMessage?: string;
  authorName?: string;
  email?: string;
  keepEmptyFolders?: boolean;
  conflictResolution?: ConflictResolution;
}
export interface MergePullRequestByThreeWayOutput {
  pullRequest?: PullRequest;
}
export type Message = string;

export type Mode = string;

export declare class MultipleConflictResolutionEntriesException extends EffectData.TaggedError(
  "MultipleConflictResolutionEntriesException",
)<{
  readonly message?: string;
}> {}
export declare class MultipleRepositoriesInPullRequestException extends EffectData.TaggedError(
  "MultipleRepositoriesInPullRequestException",
)<{
  readonly message?: string;
}> {}
export type Name = string;

export declare class NameLengthExceededException extends EffectData.TaggedError(
  "NameLengthExceededException",
)<{
  readonly message?: string;
}> {}
export type NextToken = string;

export declare class NoChangeException extends EffectData.TaggedError(
  "NoChangeException",
)<{
  readonly message?: string;
}> {}
export type NumberOfConflicts = number;

export declare class NumberOfRulesExceededException extends EffectData.TaggedError(
  "NumberOfRulesExceededException",
)<{
  readonly message?: string;
}> {}
export declare class NumberOfRuleTemplatesExceededException extends EffectData.TaggedError(
  "NumberOfRuleTemplatesExceededException",
)<{
  readonly message?: string;
}> {}
export type ObjectId = string;

export type ObjectSize = number;

export type ObjectTypeEnum =
  | "FILE"
  | "DIRECTORY"
  | "GIT_LINK"
  | "SYMBOLIC_LINK";
export interface ObjectTypes {
  source?: ObjectTypeEnum;
  destination?: ObjectTypeEnum;
  base?: ObjectTypeEnum;
}
export declare class OperationNotAllowedException extends EffectData.TaggedError(
  "OperationNotAllowedException",
)<{
  readonly message?: string;
}> {}
export type OrderEnum = "ASCENDING" | "DESCENDING";
export interface OriginApprovalRuleTemplate {
  approvalRuleTemplateId?: string;
  approvalRuleTemplateName?: string;
}
export type Overridden = boolean;

export declare class OverrideAlreadySetException extends EffectData.TaggedError(
  "OverrideAlreadySetException",
)<{
  readonly message?: string;
}> {}
export interface OverridePullRequestApprovalRulesInput {
  pullRequestId: string;
  revisionId: string;
  overrideStatus: OverrideStatus;
}
export type OverrideStatus = "OVERRIDE" | "REVOKE";
export declare class OverrideStatusRequiredException extends EffectData.TaggedError(
  "OverrideStatusRequiredException",
)<{
  readonly message?: string;
}> {}
export declare class ParentCommitDoesNotExistException extends EffectData.TaggedError(
  "ParentCommitDoesNotExistException",
)<{
  readonly message?: string;
}> {}
export declare class ParentCommitIdOutdatedException extends EffectData.TaggedError(
  "ParentCommitIdOutdatedException",
)<{
  readonly message?: string;
}> {}
export declare class ParentCommitIdRequiredException extends EffectData.TaggedError(
  "ParentCommitIdRequiredException",
)<{
  readonly message?: string;
}> {}
export type ParentList = Array<string>;
export type Path = string;

export declare class PathDoesNotExistException extends EffectData.TaggedError(
  "PathDoesNotExistException",
)<{
  readonly message?: string;
}> {}
export declare class PathRequiredException extends EffectData.TaggedError(
  "PathRequiredException",
)<{
  readonly message?: string;
}> {}
export type Position = number;

export interface PostCommentForComparedCommitInput {
  repositoryName: string;
  beforeCommitId?: string;
  afterCommitId: string;
  location?: Location;
  content: string;
  clientRequestToken?: string;
}
export interface PostCommentForComparedCommitOutput {
  repositoryName?: string;
  beforeCommitId?: string;
  afterCommitId?: string;
  beforeBlobId?: string;
  afterBlobId?: string;
  location?: Location;
  comment?: Comment;
}
export interface PostCommentForPullRequestInput {
  pullRequestId: string;
  repositoryName: string;
  beforeCommitId: string;
  afterCommitId: string;
  location?: Location;
  content: string;
  clientRequestToken?: string;
}
export interface PostCommentForPullRequestOutput {
  repositoryName?: string;
  pullRequestId?: string;
  beforeCommitId?: string;
  afterCommitId?: string;
  beforeBlobId?: string;
  afterBlobId?: string;
  location?: Location;
  comment?: Comment;
}
export interface PostCommentReplyInput {
  inReplyTo: string;
  clientRequestToken?: string;
  content: string;
}
export interface PostCommentReplyOutput {
  comment?: Comment;
}
export interface PullRequest {
  pullRequestId?: string;
  title?: string;
  description?: string;
  lastActivityDate?: Date | string;
  creationDate?: Date | string;
  pullRequestStatus?: PullRequestStatusEnum;
  authorArn?: string;
  pullRequestTargets?: Array<PullRequestTarget>;
  clientRequestToken?: string;
  revisionId?: string;
  approvalRules?: Array<ApprovalRule>;
}
export declare class PullRequestAlreadyClosedException extends EffectData.TaggedError(
  "PullRequestAlreadyClosedException",
)<{
  readonly message?: string;
}> {}
export declare class PullRequestApprovalRulesNotSatisfiedException extends EffectData.TaggedError(
  "PullRequestApprovalRulesNotSatisfiedException",
)<{
  readonly message?: string;
}> {}
export declare class PullRequestCannotBeApprovedByAuthorException extends EffectData.TaggedError(
  "PullRequestCannotBeApprovedByAuthorException",
)<{
  readonly message?: string;
}> {}
export interface PullRequestCreatedEventMetadata {
  repositoryName?: string;
  sourceCommitId?: string;
  destinationCommitId?: string;
  mergeBase?: string;
}
export declare class PullRequestDoesNotExistException extends EffectData.TaggedError(
  "PullRequestDoesNotExistException",
)<{
  readonly message?: string;
}> {}
export interface PullRequestEvent {
  pullRequestId?: string;
  eventDate?: Date | string;
  pullRequestEventType?: PullRequestEventType;
  actorArn?: string;
  pullRequestCreatedEventMetadata?: PullRequestCreatedEventMetadata;
  pullRequestStatusChangedEventMetadata?: PullRequestStatusChangedEventMetadata;
  pullRequestSourceReferenceUpdatedEventMetadata?: PullRequestSourceReferenceUpdatedEventMetadata;
  pullRequestMergedStateChangedEventMetadata?: PullRequestMergedStateChangedEventMetadata;
  approvalRuleEventMetadata?: ApprovalRuleEventMetadata;
  approvalStateChangedEventMetadata?: ApprovalStateChangedEventMetadata;
  approvalRuleOverriddenEventMetadata?: ApprovalRuleOverriddenEventMetadata;
}
export type PullRequestEventList = Array<PullRequestEvent>;
export type PullRequestEventType =
  | "PULL_REQUEST_CREATED"
  | "PULL_REQUEST_STATUS_CHANGED"
  | "PULL_REQUEST_SOURCE_REFERENCE_UPDATED"
  | "PULL_REQUEST_MERGE_STATE_CHANGED"
  | "PULL_REQUEST_APPROVAL_RULE_CREATED"
  | "PULL_REQUEST_APPROVAL_RULE_UPDATED"
  | "PULL_REQUEST_APPROVAL_RULE_DELETED"
  | "PULL_REQUEST_APPROVAL_RULE_OVERRIDDEN"
  | "PULL_REQUEST_APPROVAL_STATE_CHANGED";
export type PullRequestId = string;

export type PullRequestIdList = Array<string>;
export declare class PullRequestIdRequiredException extends EffectData.TaggedError(
  "PullRequestIdRequiredException",
)<{
  readonly message?: string;
}> {}
export interface PullRequestMergedStateChangedEventMetadata {
  repositoryName?: string;
  destinationReference?: string;
  mergeMetadata?: MergeMetadata;
}
export interface PullRequestSourceReferenceUpdatedEventMetadata {
  repositoryName?: string;
  beforeCommitId?: string;
  afterCommitId?: string;
  mergeBase?: string;
}
export interface PullRequestStatusChangedEventMetadata {
  pullRequestStatus?: PullRequestStatusEnum;
}
export type PullRequestStatusEnum = "OPEN" | "CLOSED";
export declare class PullRequestStatusRequiredException extends EffectData.TaggedError(
  "PullRequestStatusRequiredException",
)<{
  readonly message?: string;
}> {}
export interface PullRequestTarget {
  repositoryName?: string;
  sourceReference?: string;
  destinationReference?: string;
  destinationCommit?: string;
  sourceCommit?: string;
  mergeBase?: string;
  mergeMetadata?: MergeMetadata;
}
export type PullRequestTargetList = Array<PullRequestTarget>;
export interface PutCommentReactionInput {
  commentId: string;
  reactionValue: string;
}
export type PutFileEntries = Array<PutFileEntry>;
export interface PutFileEntry {
  filePath: string;
  fileMode?: FileModeTypeEnum;
  fileContent?: Uint8Array | string;
  sourceFile?: SourceFileSpecifier;
}
export declare class PutFileEntryConflictException extends EffectData.TaggedError(
  "PutFileEntryConflictException",
)<{
  readonly message?: string;
}> {}
export interface PutFileInput {
  repositoryName: string;
  branchName: string;
  fileContent: Uint8Array | string;
  filePath: string;
  fileMode?: FileModeTypeEnum;
  parentCommitId?: string;
  commitMessage?: string;
  name?: string;
  email?: string;
}
export interface PutFileOutput {
  commitId: string;
  blobId: string;
  treeId: string;
}
export interface PutRepositoryTriggersInput {
  repositoryName: string;
  triggers: Array<RepositoryTrigger>;
}
export interface PutRepositoryTriggersOutput {
  configurationId?: string;
}
export type ReactionCountsMap = Record<string, number>;
export type ReactionEmoji = string;

export interface ReactionForComment {
  reaction?: ReactionValueFormats;
  reactionUsers?: Array<string>;
  reactionsFromDeletedUsersCount?: number;
}
export declare class ReactionLimitExceededException extends EffectData.TaggedError(
  "ReactionLimitExceededException",
)<{
  readonly message?: string;
}> {}
export type ReactionsForCommentList = Array<ReactionForComment>;
export type ReactionShortCode = string;

export type ReactionUnicode = string;

export type ReactionUsersList = Array<string>;
export type ReactionValue = string;

export interface ReactionValueFormats {
  emoji?: string;
  shortCode?: string;
  unicode?: string;
}
export declare class ReactionValueRequiredException extends EffectData.TaggedError(
  "ReactionValueRequiredException",
)<{
  readonly message?: string;
}> {}
export declare class ReferenceDoesNotExistException extends EffectData.TaggedError(
  "ReferenceDoesNotExistException",
)<{
  readonly message?: string;
}> {}
export type ReferenceName = string;

export declare class ReferenceNameRequiredException extends EffectData.TaggedError(
  "ReferenceNameRequiredException",
)<{
  readonly message?: string;
}> {}
export declare class ReferenceTypeNotSupportedException extends EffectData.TaggedError(
  "ReferenceTypeNotSupportedException",
)<{
  readonly message?: string;
}> {}
export type RelativeFileVersionEnum = "BEFORE" | "AFTER";
export type ReplaceContentEntries = Array<ReplaceContentEntry>;
export interface ReplaceContentEntry {
  filePath: string;
  replacementType: ReplacementTypeEnum;
  content?: Uint8Array | string;
  fileMode?: FileModeTypeEnum;
}
export declare class ReplacementContentRequiredException extends EffectData.TaggedError(
  "ReplacementContentRequiredException",
)<{
  readonly message?: string;
}> {}
export type ReplacementTypeEnum =
  | "KEEP_BASE"
  | "KEEP_SOURCE"
  | "KEEP_DESTINATION"
  | "USE_NEW_CONTENT";
export declare class ReplacementTypeRequiredException extends EffectData.TaggedError(
  "ReplacementTypeRequiredException",
)<{
  readonly message?: string;
}> {}
export type RepositoryDescription = string;

export declare class RepositoryDoesNotExistException extends EffectData.TaggedError(
  "RepositoryDoesNotExistException",
)<{
  readonly message?: string;
}> {}
export type RepositoryId = string;

export declare class RepositoryLimitExceededException extends EffectData.TaggedError(
  "RepositoryLimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface RepositoryMetadata {
  accountId?: string;
  repositoryId?: string;
  repositoryName?: string;
  repositoryDescription?: string;
  defaultBranch?: string;
  lastModifiedDate?: Date | string;
  creationDate?: Date | string;
  cloneUrlHttp?: string;
  cloneUrlSsh?: string;
  Arn?: string;
  kmsKeyId?: string;
}
export type RepositoryMetadataList = Array<RepositoryMetadata>;
export type RepositoryName = string;

export declare class RepositoryNameExistsException extends EffectData.TaggedError(
  "RepositoryNameExistsException",
)<{
  readonly message?: string;
}> {}
export interface RepositoryNameIdPair {
  repositoryName?: string;
  repositoryId?: string;
}
export type RepositoryNameIdPairList = Array<RepositoryNameIdPair>;
export type RepositoryNameList = Array<string>;
export declare class RepositoryNameRequiredException extends EffectData.TaggedError(
  "RepositoryNameRequiredException",
)<{
  readonly message?: string;
}> {}
export declare class RepositoryNamesRequiredException extends EffectData.TaggedError(
  "RepositoryNamesRequiredException",
)<{
  readonly message?: string;
}> {}
export declare class RepositoryNotAssociatedWithPullRequestException extends EffectData.TaggedError(
  "RepositoryNotAssociatedWithPullRequestException",
)<{
  readonly message?: string;
}> {}
export type RepositoryNotFoundList = Array<string>;
export interface RepositoryTrigger {
  name: string;
  destinationArn: string;
  customData?: string;
  branches?: Array<string>;
  events: Array<RepositoryTriggerEventEnum>;
}
export declare class RepositoryTriggerBranchNameListRequiredException extends EffectData.TaggedError(
  "RepositoryTriggerBranchNameListRequiredException",
)<{
  readonly message?: string;
}> {}
export type RepositoryTriggerCustomData = string;

export declare class RepositoryTriggerDestinationArnRequiredException extends EffectData.TaggedError(
  "RepositoryTriggerDestinationArnRequiredException",
)<{
  readonly message?: string;
}> {}
export type RepositoryTriggerEventEnum =
  | "ALL"
  | "UPDATE_REFERENCE"
  | "CREATE_REFERENCE"
  | "DELETE_REFERENCE";
export type RepositoryTriggerEventList = Array<RepositoryTriggerEventEnum>;
export declare class RepositoryTriggerEventsListRequiredException extends EffectData.TaggedError(
  "RepositoryTriggerEventsListRequiredException",
)<{
  readonly message?: string;
}> {}
export interface RepositoryTriggerExecutionFailure {
  trigger?: string;
  failureMessage?: string;
}
export type RepositoryTriggerExecutionFailureList =
  Array<RepositoryTriggerExecutionFailure>;
export type RepositoryTriggerExecutionFailureMessage = string;

export type RepositoryTriggerName = string;

export type RepositoryTriggerNameList = Array<string>;
export declare class RepositoryTriggerNameRequiredException extends EffectData.TaggedError(
  "RepositoryTriggerNameRequiredException",
)<{
  readonly message?: string;
}> {}
export type RepositoryTriggersConfigurationId = string;

export type RepositoryTriggersList = Array<RepositoryTrigger>;
export declare class RepositoryTriggersListRequiredException extends EffectData.TaggedError(
  "RepositoryTriggersListRequiredException",
)<{
  readonly message?: string;
}> {}
export type ResourceArn = string;

export declare class ResourceArnRequiredException extends EffectData.TaggedError(
  "ResourceArnRequiredException",
)<{
  readonly message?: string;
}> {}
export declare class RestrictedSourceFileException extends EffectData.TaggedError(
  "RestrictedSourceFileException",
)<{
  readonly message?: string;
}> {}
export type RevisionChildren = Array<string>;
export type RevisionDag = Array<FileVersion>;
export type RevisionId = string;

export declare class RevisionIdRequiredException extends EffectData.TaggedError(
  "RevisionIdRequiredException",
)<{
  readonly message?: string;
}> {}
export declare class RevisionNotCurrentException extends EffectData.TaggedError(
  "RevisionNotCurrentException",
)<{
  readonly message?: string;
}> {}
export type RuleContentSha256 = string;

export declare class SameFileContentException extends EffectData.TaggedError(
  "SameFileContentException",
)<{
  readonly message?: string;
}> {}
export declare class SamePathRequestException extends EffectData.TaggedError(
  "SamePathRequestException",
)<{
  readonly message?: string;
}> {}
export type SetFileModeEntries = Array<SetFileModeEntry>;
export interface SetFileModeEntry {
  filePath: string;
  fileMode: FileModeTypeEnum;
}
export type SortByEnum = "REPOSITORY_NAME" | "MODIFIED_DATE";
export declare class SourceAndDestinationAreSameException extends EffectData.TaggedError(
  "SourceAndDestinationAreSameException",
)<{
  readonly message?: string;
}> {}
export declare class SourceFileOrContentRequiredException extends EffectData.TaggedError(
  "SourceFileOrContentRequiredException",
)<{
  readonly message?: string;
}> {}
export interface SourceFileSpecifier {
  filePath: string;
  isMove?: boolean;
}
export interface SubModule {
  commitId?: string;
  absolutePath?: string;
  relativePath?: string;
}
export type SubModuleList = Array<SubModule>;
export interface SymbolicLink {
  blobId?: string;
  absolutePath?: string;
  relativePath?: string;
  fileMode?: FileModeTypeEnum;
}
export type SymbolicLinkList = Array<SymbolicLink>;
export type TagKey = string;

export type TagKeysList = Array<string>;
export declare class TagKeysListRequiredException extends EffectData.TaggedError(
  "TagKeysListRequiredException",
)<{
  readonly message?: string;
}> {}
export declare class TagPolicyException extends EffectData.TaggedError(
  "TagPolicyException",
)<{
  readonly message?: string;
}> {}
export interface TagResourceInput {
  resourceArn: string;
  tags: Record<string, string>;
}
export type TagsMap = Record<string, string>;
export declare class TagsMapRequiredException extends EffectData.TaggedError(
  "TagsMapRequiredException",
)<{
  readonly message?: string;
}> {}
export type TagValue = string;

export interface Target {
  repositoryName: string;
  sourceReference: string;
  destinationReference?: string;
}
export type TargetList = Array<Target>;
export declare class TargetRequiredException extends EffectData.TaggedError(
  "TargetRequiredException",
)<{
  readonly message?: string;
}> {}
export declare class TargetsRequiredException extends EffectData.TaggedError(
  "TargetsRequiredException",
)<{
  readonly message?: string;
}> {}
export interface TestRepositoryTriggersInput {
  repositoryName: string;
  triggers: Array<RepositoryTrigger>;
}
export interface TestRepositoryTriggersOutput {
  successfulExecutions?: Array<string>;
  failedExecutions?: Array<RepositoryTriggerExecutionFailure>;
}
export declare class TipOfSourceReferenceIsDifferentException extends EffectData.TaggedError(
  "TipOfSourceReferenceIsDifferentException",
)<{
  readonly message?: string;
}> {}
export declare class TipsDivergenceExceededException extends EffectData.TaggedError(
  "TipsDivergenceExceededException",
)<{
  readonly message?: string;
}> {}
export type Title = string;

export declare class TitleRequiredException extends EffectData.TaggedError(
  "TitleRequiredException",
)<{
  readonly message?: string;
}> {}
export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UpdateApprovalRuleTemplateContentInput {
  approvalRuleTemplateName: string;
  newRuleContent: string;
  existingRuleContentSha256?: string;
}
export interface UpdateApprovalRuleTemplateContentOutput {
  approvalRuleTemplate: ApprovalRuleTemplate;
}
export interface UpdateApprovalRuleTemplateDescriptionInput {
  approvalRuleTemplateName: string;
  approvalRuleTemplateDescription: string;
}
export interface UpdateApprovalRuleTemplateDescriptionOutput {
  approvalRuleTemplate: ApprovalRuleTemplate;
}
export interface UpdateApprovalRuleTemplateNameInput {
  oldApprovalRuleTemplateName: string;
  newApprovalRuleTemplateName: string;
}
export interface UpdateApprovalRuleTemplateNameOutput {
  approvalRuleTemplate: ApprovalRuleTemplate;
}
export interface UpdateCommentInput {
  commentId: string;
  content: string;
}
export interface UpdateCommentOutput {
  comment?: Comment;
}
export interface UpdateDefaultBranchInput {
  repositoryName: string;
  defaultBranchName: string;
}
export interface UpdatePullRequestApprovalRuleContentInput {
  pullRequestId: string;
  approvalRuleName: string;
  existingRuleContentSha256?: string;
  newRuleContent: string;
}
export interface UpdatePullRequestApprovalRuleContentOutput {
  approvalRule: ApprovalRule;
}
export interface UpdatePullRequestApprovalStateInput {
  pullRequestId: string;
  revisionId: string;
  approvalState: ApprovalState;
}
export interface UpdatePullRequestDescriptionInput {
  pullRequestId: string;
  description: string;
}
export interface UpdatePullRequestDescriptionOutput {
  pullRequest: PullRequest;
}
export interface UpdatePullRequestStatusInput {
  pullRequestId: string;
  pullRequestStatus: PullRequestStatusEnum;
}
export interface UpdatePullRequestStatusOutput {
  pullRequest: PullRequest;
}
export interface UpdatePullRequestTitleInput {
  pullRequestId: string;
  title: string;
}
export interface UpdatePullRequestTitleOutput {
  pullRequest: PullRequest;
}
export interface UpdateRepositoryDescriptionInput {
  repositoryName: string;
  repositoryDescription?: string;
}
export interface UpdateRepositoryEncryptionKeyInput {
  repositoryName: string;
  kmsKeyId: string;
}
export interface UpdateRepositoryEncryptionKeyOutput {
  repositoryId?: string;
  kmsKeyId?: string;
  originalKmsKeyId?: string;
}
export interface UpdateRepositoryNameInput {
  oldName: string;
  newName: string;
}
export interface UserInfo {
  name?: string;
  email?: string;
  date?: string;
}
export declare namespace AssociateApprovalRuleTemplateWithRepository {
  export type Input = AssociateApprovalRuleTemplateWithRepositoryInput;
  export type Output = {};
  export type Error =
    | ApprovalRuleTemplateDoesNotExistException
    | ApprovalRuleTemplateNameRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidApprovalRuleTemplateNameException
    | InvalidRepositoryNameException
    | MaximumRuleTemplatesAssociatedWithRepositoryException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError;
}

export declare namespace BatchAssociateApprovalRuleTemplateWithRepositories {
  export type Input = BatchAssociateApprovalRuleTemplateWithRepositoriesInput;
  export type Output = BatchAssociateApprovalRuleTemplateWithRepositoriesOutput;
  export type Error =
    | ApprovalRuleTemplateDoesNotExistException
    | ApprovalRuleTemplateNameRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidApprovalRuleTemplateNameException
    | MaximumRepositoryNamesExceededException
    | RepositoryNamesRequiredException
    | CommonAwsError;
}

export declare namespace BatchDescribeMergeConflicts {
  export type Input = BatchDescribeMergeConflictsInput;
  export type Output = BatchDescribeMergeConflictsOutput;
  export type Error =
    | CommitDoesNotExistException
    | CommitRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidCommitException
    | InvalidConflictDetailLevelException
    | InvalidConflictResolutionStrategyException
    | InvalidContinuationTokenException
    | InvalidMaxConflictFilesException
    | InvalidMaxMergeHunksException
    | InvalidMergeOptionException
    | InvalidRepositoryNameException
    | MaximumFileContentToLoadExceededException
    | MaximumItemsToCompareExceededException
    | MergeOptionRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | TipsDivergenceExceededException
    | CommonAwsError;
}

export declare namespace BatchDisassociateApprovalRuleTemplateFromRepositories {
  export type Input =
    BatchDisassociateApprovalRuleTemplateFromRepositoriesInput;
  export type Output =
    BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput;
  export type Error =
    | ApprovalRuleTemplateDoesNotExistException
    | ApprovalRuleTemplateNameRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidApprovalRuleTemplateNameException
    | MaximumRepositoryNamesExceededException
    | RepositoryNamesRequiredException
    | CommonAwsError;
}

export declare namespace BatchGetCommits {
  export type Input = BatchGetCommitsInput;
  export type Output = BatchGetCommitsOutput;
  export type Error =
    | CommitIdsLimitExceededException
    | CommitIdsListRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError;
}

export declare namespace BatchGetRepositories {
  export type Input = BatchGetRepositoriesInput;
  export type Output = BatchGetRepositoriesOutput;
  export type Error =
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidRepositoryNameException
    | MaximumRepositoryNamesExceededException
    | RepositoryNamesRequiredException
    | CommonAwsError;
}

export declare namespace CreateApprovalRuleTemplate {
  export type Input = CreateApprovalRuleTemplateInput;
  export type Output = CreateApprovalRuleTemplateOutput;
  export type Error =
    | ApprovalRuleTemplateContentRequiredException
    | ApprovalRuleTemplateNameAlreadyExistsException
    | ApprovalRuleTemplateNameRequiredException
    | InvalidApprovalRuleTemplateContentException
    | InvalidApprovalRuleTemplateDescriptionException
    | InvalidApprovalRuleTemplateNameException
    | NumberOfRuleTemplatesExceededException
    | CommonAwsError;
}

export declare namespace CreateBranch {
  export type Input = CreateBranchInput;
  export type Output = {};
  export type Error =
    | BranchNameExistsException
    | BranchNameRequiredException
    | CommitDoesNotExistException
    | CommitIdRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidBranchNameException
    | InvalidCommitIdException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError;
}

export declare namespace CreateCommit {
  export type Input = CreateCommitInput;
  export type Output = CreateCommitOutput;
  export type Error =
    | BranchDoesNotExistException
    | BranchNameIsTagNameException
    | BranchNameRequiredException
    | CommitMessageLengthExceededException
    | DirectoryNameConflictsWithFileNameException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | FileContentAndSourceFileSpecifiedException
    | FileContentSizeLimitExceededException
    | FileDoesNotExistException
    | FileEntryRequiredException
    | FileModeRequiredException
    | FileNameConflictsWithDirectoryNameException
    | FilePathConflictsWithSubmodulePathException
    | FolderContentSizeLimitExceededException
    | InvalidBranchNameException
    | InvalidDeletionParameterException
    | InvalidEmailException
    | InvalidFileModeException
    | InvalidParentCommitIdException
    | InvalidPathException
    | InvalidRepositoryNameException
    | MaximumFileEntriesExceededException
    | NameLengthExceededException
    | NoChangeException
    | ParentCommitDoesNotExistException
    | ParentCommitIdOutdatedException
    | ParentCommitIdRequiredException
    | PathRequiredException
    | PutFileEntryConflictException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | RestrictedSourceFileException
    | SamePathRequestException
    | SourceFileOrContentRequiredException
    | CommonAwsError;
}

export declare namespace CreatePullRequest {
  export type Input = CreatePullRequestInput;
  export type Output = CreatePullRequestOutput;
  export type Error =
    | ClientRequestTokenRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | IdempotencyParameterMismatchException
    | InvalidClientRequestTokenException
    | InvalidDescriptionException
    | InvalidReferenceNameException
    | InvalidRepositoryNameException
    | InvalidTargetException
    | InvalidTargetsException
    | InvalidTitleException
    | MaximumOpenPullRequestsExceededException
    | MultipleRepositoriesInPullRequestException
    | ReferenceDoesNotExistException
    | ReferenceNameRequiredException
    | ReferenceTypeNotSupportedException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | SourceAndDestinationAreSameException
    | TargetRequiredException
    | TargetsRequiredException
    | TitleRequiredException
    | CommonAwsError;
}

export declare namespace CreatePullRequestApprovalRule {
  export type Input = CreatePullRequestApprovalRuleInput;
  export type Output = CreatePullRequestApprovalRuleOutput;
  export type Error =
    | ApprovalRuleContentRequiredException
    | ApprovalRuleNameAlreadyExistsException
    | ApprovalRuleNameRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidApprovalRuleContentException
    | InvalidApprovalRuleNameException
    | InvalidPullRequestIdException
    | NumberOfRulesExceededException
    | PullRequestAlreadyClosedException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | CommonAwsError;
}

export declare namespace CreateRepository {
  export type Input = CreateRepositoryInput;
  export type Output = CreateRepositoryOutput;
  export type Error =
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyInvalidIdException
    | EncryptionKeyInvalidUsageException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidRepositoryDescriptionException
    | InvalidRepositoryNameException
    | InvalidSystemTagUsageException
    | InvalidTagsMapException
    | OperationNotAllowedException
    | RepositoryLimitExceededException
    | RepositoryNameExistsException
    | RepositoryNameRequiredException
    | TagPolicyException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreateUnreferencedMergeCommit {
  export type Input = CreateUnreferencedMergeCommitInput;
  export type Output = CreateUnreferencedMergeCommitOutput;
  export type Error =
    | CommitDoesNotExistException
    | CommitMessageLengthExceededException
    | CommitRequiredException
    | ConcurrentReferenceUpdateException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | FileContentSizeLimitExceededException
    | FileModeRequiredException
    | FolderContentSizeLimitExceededException
    | InvalidCommitException
    | InvalidConflictDetailLevelException
    | InvalidConflictResolutionException
    | InvalidConflictResolutionStrategyException
    | InvalidEmailException
    | InvalidFileModeException
    | InvalidMergeOptionException
    | InvalidPathException
    | InvalidReplacementContentException
    | InvalidReplacementTypeException
    | InvalidRepositoryNameException
    | ManualMergeRequiredException
    | MaximumConflictResolutionEntriesExceededException
    | MaximumFileContentToLoadExceededException
    | MaximumItemsToCompareExceededException
    | MergeOptionRequiredException
    | MultipleConflictResolutionEntriesException
    | NameLengthExceededException
    | PathRequiredException
    | ReplacementContentRequiredException
    | ReplacementTypeRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | TipsDivergenceExceededException
    | CommonAwsError;
}

export declare namespace DeleteApprovalRuleTemplate {
  export type Input = DeleteApprovalRuleTemplateInput;
  export type Output = DeleteApprovalRuleTemplateOutput;
  export type Error =
    | ApprovalRuleTemplateInUseException
    | ApprovalRuleTemplateNameRequiredException
    | InvalidApprovalRuleTemplateNameException
    | CommonAwsError;
}

export declare namespace DeleteBranch {
  export type Input = DeleteBranchInput;
  export type Output = DeleteBranchOutput;
  export type Error =
    | BranchNameRequiredException
    | DefaultBranchCannotBeDeletedException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidBranchNameException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError;
}

export declare namespace DeleteCommentContent {
  export type Input = DeleteCommentContentInput;
  export type Output = DeleteCommentContentOutput;
  export type Error =
    | CommentDeletedException
    | CommentDoesNotExistException
    | CommentIdRequiredException
    | InvalidCommentIdException
    | CommonAwsError;
}

export declare namespace DeleteFile {
  export type Input = DeleteFileInput;
  export type Output = DeleteFileOutput;
  export type Error =
    | BranchDoesNotExistException
    | BranchNameIsTagNameException
    | BranchNameRequiredException
    | CommitMessageLengthExceededException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | FileDoesNotExistException
    | InvalidBranchNameException
    | InvalidEmailException
    | InvalidParentCommitIdException
    | InvalidPathException
    | InvalidRepositoryNameException
    | NameLengthExceededException
    | ParentCommitDoesNotExistException
    | ParentCommitIdOutdatedException
    | ParentCommitIdRequiredException
    | PathRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError;
}

export declare namespace DeletePullRequestApprovalRule {
  export type Input = DeletePullRequestApprovalRuleInput;
  export type Output = DeletePullRequestApprovalRuleOutput;
  export type Error =
    | ApprovalRuleNameRequiredException
    | CannotDeleteApprovalRuleFromTemplateException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidApprovalRuleNameException
    | InvalidPullRequestIdException
    | PullRequestAlreadyClosedException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | CommonAwsError;
}

export declare namespace DeleteRepository {
  export type Input = DeleteRepositoryInput;
  export type Output = DeleteRepositoryOutput;
  export type Error =
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidRepositoryNameException
    | RepositoryNameRequiredException
    | CommonAwsError;
}

export declare namespace DescribeMergeConflicts {
  export type Input = DescribeMergeConflictsInput;
  export type Output = DescribeMergeConflictsOutput;
  export type Error =
    | CommitDoesNotExistException
    | CommitRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | FileDoesNotExistException
    | InvalidCommitException
    | InvalidConflictDetailLevelException
    | InvalidConflictResolutionStrategyException
    | InvalidContinuationTokenException
    | InvalidMaxMergeHunksException
    | InvalidMergeOptionException
    | InvalidPathException
    | InvalidRepositoryNameException
    | MaximumFileContentToLoadExceededException
    | MaximumItemsToCompareExceededException
    | MergeOptionRequiredException
    | PathRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | TipsDivergenceExceededException
    | CommonAwsError;
}

export declare namespace DescribePullRequestEvents {
  export type Input = DescribePullRequestEventsInput;
  export type Output = DescribePullRequestEventsOutput;
  export type Error =
    | ActorDoesNotExistException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidActorArnException
    | InvalidContinuationTokenException
    | InvalidMaxResultsException
    | InvalidPullRequestEventTypeException
    | InvalidPullRequestIdException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | CommonAwsError;
}

export declare namespace DisassociateApprovalRuleTemplateFromRepository {
  export type Input = DisassociateApprovalRuleTemplateFromRepositoryInput;
  export type Output = {};
  export type Error =
    | ApprovalRuleTemplateDoesNotExistException
    | ApprovalRuleTemplateNameRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidApprovalRuleTemplateNameException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError;
}

export declare namespace EvaluatePullRequestApprovalRules {
  export type Input = EvaluatePullRequestApprovalRulesInput;
  export type Output = EvaluatePullRequestApprovalRulesOutput;
  export type Error =
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidPullRequestIdException
    | InvalidRevisionIdException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | RevisionIdRequiredException
    | RevisionNotCurrentException
    | CommonAwsError;
}

export declare namespace GetApprovalRuleTemplate {
  export type Input = GetApprovalRuleTemplateInput;
  export type Output = GetApprovalRuleTemplateOutput;
  export type Error =
    | ApprovalRuleTemplateDoesNotExistException
    | ApprovalRuleTemplateNameRequiredException
    | InvalidApprovalRuleTemplateNameException
    | CommonAwsError;
}

export declare namespace GetBlob {
  export type Input = GetBlobInput;
  export type Output = GetBlobOutput;
  export type Error =
    | BlobIdDoesNotExistException
    | BlobIdRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | FileTooLargeException
    | InvalidBlobIdException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError;
}

export declare namespace GetBranch {
  export type Input = GetBranchInput;
  export type Output = GetBranchOutput;
  export type Error =
    | BranchDoesNotExistException
    | BranchNameRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidBranchNameException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError;
}

export declare namespace GetComment {
  export type Input = GetCommentInput;
  export type Output = GetCommentOutput;
  export type Error =
    | CommentDeletedException
    | CommentDoesNotExistException
    | CommentIdRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidCommentIdException
    | CommonAwsError;
}

export declare namespace GetCommentReactions {
  export type Input = GetCommentReactionsInput;
  export type Output = GetCommentReactionsOutput;
  export type Error =
    | CommentDeletedException
    | CommentDoesNotExistException
    | CommentIdRequiredException
    | InvalidCommentIdException
    | InvalidContinuationTokenException
    | InvalidMaxResultsException
    | InvalidReactionUserArnException
    | CommonAwsError;
}

export declare namespace GetCommentsForComparedCommit {
  export type Input = GetCommentsForComparedCommitInput;
  export type Output = GetCommentsForComparedCommitOutput;
  export type Error =
    | CommitDoesNotExistException
    | CommitIdRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidCommitIdException
    | InvalidContinuationTokenException
    | InvalidMaxResultsException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError;
}

export declare namespace GetCommentsForPullRequest {
  export type Input = GetCommentsForPullRequestInput;
  export type Output = GetCommentsForPullRequestOutput;
  export type Error =
    | CommitDoesNotExistException
    | CommitIdRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidCommitIdException
    | InvalidContinuationTokenException
    | InvalidMaxResultsException
    | InvalidPullRequestIdException
    | InvalidRepositoryNameException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | RepositoryNotAssociatedWithPullRequestException
    | CommonAwsError;
}

export declare namespace GetCommit {
  export type Input = GetCommitInput;
  export type Output = GetCommitOutput;
  export type Error =
    | CommitIdDoesNotExistException
    | CommitIdRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidCommitIdException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError;
}

export declare namespace GetDifferences {
  export type Input = GetDifferencesInput;
  export type Output = GetDifferencesOutput;
  export type Error =
    | CommitDoesNotExistException
    | CommitRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidCommitException
    | InvalidCommitIdException
    | InvalidContinuationTokenException
    | InvalidMaxResultsException
    | InvalidPathException
    | InvalidRepositoryNameException
    | PathDoesNotExistException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError;
}

export declare namespace GetFile {
  export type Input = GetFileInput;
  export type Output = GetFileOutput;
  export type Error =
    | CommitDoesNotExistException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | FileDoesNotExistException
    | FileTooLargeException
    | InvalidCommitException
    | InvalidPathException
    | InvalidRepositoryNameException
    | PathRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError;
}

export declare namespace GetFolder {
  export type Input = GetFolderInput;
  export type Output = GetFolderOutput;
  export type Error =
    | CommitDoesNotExistException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | FolderDoesNotExistException
    | InvalidCommitException
    | InvalidPathException
    | InvalidRepositoryNameException
    | PathRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError;
}

export declare namespace GetMergeCommit {
  export type Input = GetMergeCommitInput;
  export type Output = GetMergeCommitOutput;
  export type Error =
    | CommitDoesNotExistException
    | CommitRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidCommitException
    | InvalidConflictDetailLevelException
    | InvalidConflictResolutionStrategyException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError;
}

export declare namespace GetMergeConflicts {
  export type Input = GetMergeConflictsInput;
  export type Output = GetMergeConflictsOutput;
  export type Error =
    | CommitDoesNotExistException
    | CommitRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidCommitException
    | InvalidConflictDetailLevelException
    | InvalidConflictResolutionStrategyException
    | InvalidContinuationTokenException
    | InvalidDestinationCommitSpecifierException
    | InvalidMaxConflictFilesException
    | InvalidMergeOptionException
    | InvalidRepositoryNameException
    | InvalidSourceCommitSpecifierException
    | MaximumFileContentToLoadExceededException
    | MaximumItemsToCompareExceededException
    | MergeOptionRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | TipsDivergenceExceededException
    | CommonAwsError;
}

export declare namespace GetMergeOptions {
  export type Input = GetMergeOptionsInput;
  export type Output = GetMergeOptionsOutput;
  export type Error =
    | CommitDoesNotExistException
    | CommitRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidCommitException
    | InvalidConflictDetailLevelException
    | InvalidConflictResolutionStrategyException
    | InvalidRepositoryNameException
    | MaximumFileContentToLoadExceededException
    | MaximumItemsToCompareExceededException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | TipsDivergenceExceededException
    | CommonAwsError;
}

export declare namespace GetPullRequest {
  export type Input = GetPullRequestInput;
  export type Output = GetPullRequestOutput;
  export type Error =
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidPullRequestIdException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | CommonAwsError;
}

export declare namespace GetPullRequestApprovalStates {
  export type Input = GetPullRequestApprovalStatesInput;
  export type Output = GetPullRequestApprovalStatesOutput;
  export type Error =
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidPullRequestIdException
    | InvalidRevisionIdException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | RevisionIdRequiredException
    | CommonAwsError;
}

export declare namespace GetPullRequestOverrideState {
  export type Input = GetPullRequestOverrideStateInput;
  export type Output = GetPullRequestOverrideStateOutput;
  export type Error =
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidPullRequestIdException
    | InvalidRevisionIdException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | RevisionIdRequiredException
    | CommonAwsError;
}

export declare namespace GetRepository {
  export type Input = GetRepositoryInput;
  export type Output = GetRepositoryOutput;
  export type Error =
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError;
}

export declare namespace GetRepositoryTriggers {
  export type Input = GetRepositoryTriggersInput;
  export type Output = GetRepositoryTriggersOutput;
  export type Error =
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError;
}

export declare namespace ListApprovalRuleTemplates {
  export type Input = ListApprovalRuleTemplatesInput;
  export type Output = ListApprovalRuleTemplatesOutput;
  export type Error =
    | InvalidContinuationTokenException
    | InvalidMaxResultsException
    | CommonAwsError;
}

export declare namespace ListAssociatedApprovalRuleTemplatesForRepository {
  export type Input = ListAssociatedApprovalRuleTemplatesForRepositoryInput;
  export type Output = ListAssociatedApprovalRuleTemplatesForRepositoryOutput;
  export type Error =
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidContinuationTokenException
    | InvalidMaxResultsException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError;
}

export declare namespace ListBranches {
  export type Input = ListBranchesInput;
  export type Output = ListBranchesOutput;
  export type Error =
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidContinuationTokenException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError;
}

export declare namespace ListFileCommitHistory {
  export type Input = ListFileCommitHistoryRequest;
  export type Output = ListFileCommitHistoryResponse;
  export type Error =
    | CommitDoesNotExistException
    | CommitRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidCommitException
    | InvalidContinuationTokenException
    | InvalidMaxResultsException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | TipsDivergenceExceededException
    | CommonAwsError;
}

export declare namespace ListPullRequests {
  export type Input = ListPullRequestsInput;
  export type Output = ListPullRequestsOutput;
  export type Error =
    | AuthorDoesNotExistException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidAuthorArnException
    | InvalidContinuationTokenException
    | InvalidMaxResultsException
    | InvalidPullRequestStatusException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError;
}

export declare namespace ListRepositories {
  export type Input = ListRepositoriesInput;
  export type Output = ListRepositoriesOutput;
  export type Error =
    | InvalidContinuationTokenException
    | InvalidOrderException
    | InvalidSortByException
    | CommonAwsError;
}

export declare namespace ListRepositoriesForApprovalRuleTemplate {
  export type Input = ListRepositoriesForApprovalRuleTemplateInput;
  export type Output = ListRepositoriesForApprovalRuleTemplateOutput;
  export type Error =
    | ApprovalRuleTemplateDoesNotExistException
    | ApprovalRuleTemplateNameRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidApprovalRuleTemplateNameException
    | InvalidContinuationTokenException
    | InvalidMaxResultsException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | InvalidRepositoryNameException
    | InvalidResourceArnException
    | RepositoryDoesNotExistException
    | ResourceArnRequiredException
    | CommonAwsError;
}

export declare namespace MergeBranchesByFastForward {
  export type Input = MergeBranchesByFastForwardInput;
  export type Output = MergeBranchesByFastForwardOutput;
  export type Error =
    | BranchDoesNotExistException
    | BranchNameIsTagNameException
    | BranchNameRequiredException
    | CommitDoesNotExistException
    | CommitRequiredException
    | ConcurrentReferenceUpdateException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidBranchNameException
    | InvalidCommitException
    | InvalidRepositoryNameException
    | InvalidTargetBranchException
    | ManualMergeRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | TipsDivergenceExceededException
    | CommonAwsError;
}

export declare namespace MergeBranchesBySquash {
  export type Input = MergeBranchesBySquashInput;
  export type Output = MergeBranchesBySquashOutput;
  export type Error =
    | BranchDoesNotExistException
    | BranchNameIsTagNameException
    | BranchNameRequiredException
    | CommitDoesNotExistException
    | CommitMessageLengthExceededException
    | CommitRequiredException
    | ConcurrentReferenceUpdateException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | FileContentSizeLimitExceededException
    | FileModeRequiredException
    | FolderContentSizeLimitExceededException
    | InvalidBranchNameException
    | InvalidCommitException
    | InvalidConflictDetailLevelException
    | InvalidConflictResolutionException
    | InvalidConflictResolutionStrategyException
    | InvalidEmailException
    | InvalidFileModeException
    | InvalidPathException
    | InvalidReplacementContentException
    | InvalidReplacementTypeException
    | InvalidRepositoryNameException
    | InvalidTargetBranchException
    | ManualMergeRequiredException
    | MaximumConflictResolutionEntriesExceededException
    | MaximumFileContentToLoadExceededException
    | MaximumItemsToCompareExceededException
    | MultipleConflictResolutionEntriesException
    | NameLengthExceededException
    | PathRequiredException
    | ReplacementContentRequiredException
    | ReplacementTypeRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | TipsDivergenceExceededException
    | CommonAwsError;
}

export declare namespace MergeBranchesByThreeWay {
  export type Input = MergeBranchesByThreeWayInput;
  export type Output = MergeBranchesByThreeWayOutput;
  export type Error =
    | BranchDoesNotExistException
    | BranchNameIsTagNameException
    | BranchNameRequiredException
    | CommitDoesNotExistException
    | CommitMessageLengthExceededException
    | CommitRequiredException
    | ConcurrentReferenceUpdateException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | FileContentSizeLimitExceededException
    | FileModeRequiredException
    | FolderContentSizeLimitExceededException
    | InvalidBranchNameException
    | InvalidCommitException
    | InvalidConflictDetailLevelException
    | InvalidConflictResolutionException
    | InvalidConflictResolutionStrategyException
    | InvalidEmailException
    | InvalidFileModeException
    | InvalidPathException
    | InvalidReplacementContentException
    | InvalidReplacementTypeException
    | InvalidRepositoryNameException
    | InvalidTargetBranchException
    | ManualMergeRequiredException
    | MaximumConflictResolutionEntriesExceededException
    | MaximumFileContentToLoadExceededException
    | MaximumItemsToCompareExceededException
    | MultipleConflictResolutionEntriesException
    | NameLengthExceededException
    | PathRequiredException
    | ReplacementContentRequiredException
    | ReplacementTypeRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | TipsDivergenceExceededException
    | CommonAwsError;
}

export declare namespace MergePullRequestByFastForward {
  export type Input = MergePullRequestByFastForwardInput;
  export type Output = MergePullRequestByFastForwardOutput;
  export type Error =
    | ConcurrentReferenceUpdateException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidCommitIdException
    | InvalidPullRequestIdException
    | InvalidRepositoryNameException
    | ManualMergeRequiredException
    | PullRequestAlreadyClosedException
    | PullRequestApprovalRulesNotSatisfiedException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | ReferenceDoesNotExistException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | RepositoryNotAssociatedWithPullRequestException
    | TipOfSourceReferenceIsDifferentException
    | CommonAwsError;
}

export declare namespace MergePullRequestBySquash {
  export type Input = MergePullRequestBySquashInput;
  export type Output = MergePullRequestBySquashOutput;
  export type Error =
    | CommitMessageLengthExceededException
    | ConcurrentReferenceUpdateException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | FileContentSizeLimitExceededException
    | FolderContentSizeLimitExceededException
    | InvalidCommitIdException
    | InvalidConflictDetailLevelException
    | InvalidConflictResolutionException
    | InvalidConflictResolutionStrategyException
    | InvalidEmailException
    | InvalidFileModeException
    | InvalidPathException
    | InvalidPullRequestIdException
    | InvalidReplacementContentException
    | InvalidReplacementTypeException
    | InvalidRepositoryNameException
    | ManualMergeRequiredException
    | MaximumConflictResolutionEntriesExceededException
    | MaximumFileContentToLoadExceededException
    | MaximumItemsToCompareExceededException
    | MultipleConflictResolutionEntriesException
    | NameLengthExceededException
    | PathRequiredException
    | PullRequestAlreadyClosedException
    | PullRequestApprovalRulesNotSatisfiedException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | ReplacementContentRequiredException
    | ReplacementTypeRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | RepositoryNotAssociatedWithPullRequestException
    | TipOfSourceReferenceIsDifferentException
    | TipsDivergenceExceededException
    | CommonAwsError;
}

export declare namespace MergePullRequestByThreeWay {
  export type Input = MergePullRequestByThreeWayInput;
  export type Output = MergePullRequestByThreeWayOutput;
  export type Error =
    | CommitMessageLengthExceededException
    | ConcurrentReferenceUpdateException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | FileContentSizeLimitExceededException
    | FolderContentSizeLimitExceededException
    | InvalidCommitIdException
    | InvalidConflictDetailLevelException
    | InvalidConflictResolutionException
    | InvalidConflictResolutionStrategyException
    | InvalidEmailException
    | InvalidFileModeException
    | InvalidPathException
    | InvalidPullRequestIdException
    | InvalidReplacementContentException
    | InvalidReplacementTypeException
    | InvalidRepositoryNameException
    | ManualMergeRequiredException
    | MaximumConflictResolutionEntriesExceededException
    | MaximumFileContentToLoadExceededException
    | MaximumItemsToCompareExceededException
    | MultipleConflictResolutionEntriesException
    | NameLengthExceededException
    | PathRequiredException
    | PullRequestAlreadyClosedException
    | PullRequestApprovalRulesNotSatisfiedException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | ReplacementContentRequiredException
    | ReplacementTypeRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | RepositoryNotAssociatedWithPullRequestException
    | TipOfSourceReferenceIsDifferentException
    | TipsDivergenceExceededException
    | CommonAwsError;
}

export declare namespace OverridePullRequestApprovalRules {
  export type Input = OverridePullRequestApprovalRulesInput;
  export type Output = {};
  export type Error =
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidOverrideStatusException
    | InvalidPullRequestIdException
    | InvalidRevisionIdException
    | OverrideAlreadySetException
    | OverrideStatusRequiredException
    | PullRequestAlreadyClosedException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | RevisionIdRequiredException
    | RevisionNotCurrentException
    | CommonAwsError;
}

export declare namespace PostCommentForComparedCommit {
  export type Input = PostCommentForComparedCommitInput;
  export type Output = PostCommentForComparedCommitOutput;
  export type Error =
    | BeforeCommitIdAndAfterCommitIdAreSameException
    | ClientRequestTokenRequiredException
    | CommentContentRequiredException
    | CommentContentSizeLimitExceededException
    | CommitDoesNotExistException
    | CommitIdRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | IdempotencyParameterMismatchException
    | InvalidClientRequestTokenException
    | InvalidCommitIdException
    | InvalidFileLocationException
    | InvalidFilePositionException
    | InvalidPathException
    | InvalidRelativeFileVersionEnumException
    | InvalidRepositoryNameException
    | PathDoesNotExistException
    | PathRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError;
}

export declare namespace PostCommentForPullRequest {
  export type Input = PostCommentForPullRequestInput;
  export type Output = PostCommentForPullRequestOutput;
  export type Error =
    | BeforeCommitIdAndAfterCommitIdAreSameException
    | ClientRequestTokenRequiredException
    | CommentContentRequiredException
    | CommentContentSizeLimitExceededException
    | CommitDoesNotExistException
    | CommitIdRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | IdempotencyParameterMismatchException
    | InvalidClientRequestTokenException
    | InvalidCommitIdException
    | InvalidFileLocationException
    | InvalidFilePositionException
    | InvalidPathException
    | InvalidPullRequestIdException
    | InvalidRelativeFileVersionEnumException
    | InvalidRepositoryNameException
    | PathDoesNotExistException
    | PathRequiredException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | RepositoryNotAssociatedWithPullRequestException
    | CommonAwsError;
}

export declare namespace PostCommentReply {
  export type Input = PostCommentReplyInput;
  export type Output = PostCommentReplyOutput;
  export type Error =
    | ClientRequestTokenRequiredException
    | CommentContentRequiredException
    | CommentContentSizeLimitExceededException
    | CommentDoesNotExistException
    | CommentIdRequiredException
    | IdempotencyParameterMismatchException
    | InvalidClientRequestTokenException
    | InvalidCommentIdException
    | CommonAwsError;
}

export declare namespace PutCommentReaction {
  export type Input = PutCommentReactionInput;
  export type Output = {};
  export type Error =
    | CommentDeletedException
    | CommentDoesNotExistException
    | CommentIdRequiredException
    | InvalidCommentIdException
    | InvalidReactionValueException
    | ReactionLimitExceededException
    | ReactionValueRequiredException
    | CommonAwsError;
}

export declare namespace PutFile {
  export type Input = PutFileInput;
  export type Output = PutFileOutput;
  export type Error =
    | BranchDoesNotExistException
    | BranchNameIsTagNameException
    | BranchNameRequiredException
    | CommitMessageLengthExceededException
    | DirectoryNameConflictsWithFileNameException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | FileContentRequiredException
    | FileContentSizeLimitExceededException
    | FileNameConflictsWithDirectoryNameException
    | FilePathConflictsWithSubmodulePathException
    | FolderContentSizeLimitExceededException
    | InvalidBranchNameException
    | InvalidDeletionParameterException
    | InvalidEmailException
    | InvalidFileModeException
    | InvalidParentCommitIdException
    | InvalidPathException
    | InvalidRepositoryNameException
    | NameLengthExceededException
    | ParentCommitDoesNotExistException
    | ParentCommitIdOutdatedException
    | ParentCommitIdRequiredException
    | PathRequiredException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | SameFileContentException
    | CommonAwsError;
}

export declare namespace PutRepositoryTriggers {
  export type Input = PutRepositoryTriggersInput;
  export type Output = PutRepositoryTriggersOutput;
  export type Error =
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidRepositoryNameException
    | InvalidRepositoryTriggerBranchNameException
    | InvalidRepositoryTriggerCustomDataException
    | InvalidRepositoryTriggerDestinationArnException
    | InvalidRepositoryTriggerEventsException
    | InvalidRepositoryTriggerNameException
    | InvalidRepositoryTriggerRegionException
    | MaximumBranchesExceededException
    | MaximumRepositoryTriggersExceededException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | RepositoryTriggerBranchNameListRequiredException
    | RepositoryTriggerDestinationArnRequiredException
    | RepositoryTriggerEventsListRequiredException
    | RepositoryTriggerNameRequiredException
    | RepositoryTriggersListRequiredException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = {};
  export type Error =
    | InvalidRepositoryNameException
    | InvalidResourceArnException
    | InvalidSystemTagUsageException
    | InvalidTagsMapException
    | RepositoryDoesNotExistException
    | ResourceArnRequiredException
    | TagPolicyException
    | TagsMapRequiredException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace TestRepositoryTriggers {
  export type Input = TestRepositoryTriggersInput;
  export type Output = TestRepositoryTriggersOutput;
  export type Error =
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidRepositoryNameException
    | InvalidRepositoryTriggerBranchNameException
    | InvalidRepositoryTriggerCustomDataException
    | InvalidRepositoryTriggerDestinationArnException
    | InvalidRepositoryTriggerEventsException
    | InvalidRepositoryTriggerNameException
    | InvalidRepositoryTriggerRegionException
    | MaximumBranchesExceededException
    | MaximumRepositoryTriggersExceededException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | RepositoryTriggerBranchNameListRequiredException
    | RepositoryTriggerDestinationArnRequiredException
    | RepositoryTriggerEventsListRequiredException
    | RepositoryTriggerNameRequiredException
    | RepositoryTriggersListRequiredException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = {};
  export type Error =
    | InvalidRepositoryNameException
    | InvalidResourceArnException
    | InvalidSystemTagUsageException
    | InvalidTagKeysListException
    | RepositoryDoesNotExistException
    | ResourceArnRequiredException
    | TagKeysListRequiredException
    | TagPolicyException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace UpdateApprovalRuleTemplateContent {
  export type Input = UpdateApprovalRuleTemplateContentInput;
  export type Output = UpdateApprovalRuleTemplateContentOutput;
  export type Error =
    | ApprovalRuleTemplateContentRequiredException
    | ApprovalRuleTemplateDoesNotExistException
    | ApprovalRuleTemplateNameRequiredException
    | InvalidApprovalRuleTemplateContentException
    | InvalidApprovalRuleTemplateNameException
    | InvalidRuleContentSha256Exception
    | CommonAwsError;
}

export declare namespace UpdateApprovalRuleTemplateDescription {
  export type Input = UpdateApprovalRuleTemplateDescriptionInput;
  export type Output = UpdateApprovalRuleTemplateDescriptionOutput;
  export type Error =
    | ApprovalRuleTemplateDoesNotExistException
    | ApprovalRuleTemplateNameRequiredException
    | InvalidApprovalRuleTemplateDescriptionException
    | InvalidApprovalRuleTemplateNameException
    | CommonAwsError;
}

export declare namespace UpdateApprovalRuleTemplateName {
  export type Input = UpdateApprovalRuleTemplateNameInput;
  export type Output = UpdateApprovalRuleTemplateNameOutput;
  export type Error =
    | ApprovalRuleTemplateDoesNotExistException
    | ApprovalRuleTemplateNameAlreadyExistsException
    | ApprovalRuleTemplateNameRequiredException
    | InvalidApprovalRuleTemplateNameException
    | CommonAwsError;
}

export declare namespace UpdateComment {
  export type Input = UpdateCommentInput;
  export type Output = UpdateCommentOutput;
  export type Error =
    | CommentContentRequiredException
    | CommentContentSizeLimitExceededException
    | CommentDeletedException
    | CommentDoesNotExistException
    | CommentIdRequiredException
    | CommentNotCreatedByCallerException
    | InvalidCommentIdException
    | CommonAwsError;
}

export declare namespace UpdateDefaultBranch {
  export type Input = UpdateDefaultBranchInput;
  export type Output = {};
  export type Error =
    | BranchDoesNotExistException
    | BranchNameRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidBranchNameException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError;
}

export declare namespace UpdatePullRequestApprovalRuleContent {
  export type Input = UpdatePullRequestApprovalRuleContentInput;
  export type Output = UpdatePullRequestApprovalRuleContentOutput;
  export type Error =
    | ApprovalRuleContentRequiredException
    | ApprovalRuleDoesNotExistException
    | ApprovalRuleNameRequiredException
    | CannotModifyApprovalRuleFromTemplateException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidApprovalRuleContentException
    | InvalidApprovalRuleNameException
    | InvalidPullRequestIdException
    | InvalidRuleContentSha256Exception
    | PullRequestAlreadyClosedException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | CommonAwsError;
}

export declare namespace UpdatePullRequestApprovalState {
  export type Input = UpdatePullRequestApprovalStateInput;
  export type Output = {};
  export type Error =
    | ApprovalStateRequiredException
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidApprovalStateException
    | InvalidPullRequestIdException
    | InvalidRevisionIdException
    | MaximumNumberOfApprovalsExceededException
    | PullRequestAlreadyClosedException
    | PullRequestCannotBeApprovedByAuthorException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | RevisionIdRequiredException
    | RevisionNotCurrentException
    | CommonAwsError;
}

export declare namespace UpdatePullRequestDescription {
  export type Input = UpdatePullRequestDescriptionInput;
  export type Output = UpdatePullRequestDescriptionOutput;
  export type Error =
    | InvalidDescriptionException
    | InvalidPullRequestIdException
    | PullRequestAlreadyClosedException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | CommonAwsError;
}

export declare namespace UpdatePullRequestStatus {
  export type Input = UpdatePullRequestStatusInput;
  export type Output = UpdatePullRequestStatusOutput;
  export type Error =
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidPullRequestIdException
    | InvalidPullRequestStatusException
    | InvalidPullRequestStatusUpdateException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | PullRequestStatusRequiredException
    | CommonAwsError;
}

export declare namespace UpdatePullRequestTitle {
  export type Input = UpdatePullRequestTitleInput;
  export type Output = UpdatePullRequestTitleOutput;
  export type Error =
    | InvalidPullRequestIdException
    | InvalidTitleException
    | PullRequestAlreadyClosedException
    | PullRequestDoesNotExistException
    | PullRequestIdRequiredException
    | TitleRequiredException
    | CommonAwsError;
}

export declare namespace UpdateRepositoryDescription {
  export type Input = UpdateRepositoryDescriptionInput;
  export type Output = {};
  export type Error =
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyNotFoundException
    | EncryptionKeyUnavailableException
    | InvalidRepositoryDescriptionException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError;
}

export declare namespace UpdateRepositoryEncryptionKey {
  export type Input = UpdateRepositoryEncryptionKeyInput;
  export type Output = UpdateRepositoryEncryptionKeyOutput;
  export type Error =
    | EncryptionIntegrityChecksFailedException
    | EncryptionKeyAccessDeniedException
    | EncryptionKeyDisabledException
    | EncryptionKeyInvalidIdException
    | EncryptionKeyInvalidUsageException
    | EncryptionKeyNotFoundException
    | EncryptionKeyRequiredException
    | EncryptionKeyUnavailableException
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameRequiredException
    | CommonAwsError;
}

export declare namespace UpdateRepositoryName {
  export type Input = UpdateRepositoryNameInput;
  export type Output = {};
  export type Error =
    | InvalidRepositoryNameException
    | RepositoryDoesNotExistException
    | RepositoryNameExistsException
    | RepositoryNameRequiredException
    | CommonAwsError;
}
