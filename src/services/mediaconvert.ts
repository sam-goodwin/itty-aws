import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface MediaConvert {
  associateCertificate(
    input: AssociateCertificateRequest,
  ): Effect.Effect<
    AssociateCertificateResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  cancelJob(
    input: CancelJobRequest,
  ): Effect.Effect<
    CancelJobResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createJob(
    input: CreateJobRequest,
  ): Effect.Effect<
    CreateJobResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createJobTemplate(
    input: CreateJobTemplateRequest,
  ): Effect.Effect<
    CreateJobTemplateResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createPreset(
    input: CreatePresetRequest,
  ): Effect.Effect<
    CreatePresetResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createQueue(
    input: CreateQueueRequest,
  ): Effect.Effect<
    CreateQueueResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteJobTemplate(
    input: DeleteJobTemplateRequest,
  ): Effect.Effect<
    DeleteJobTemplateResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deletePolicy(
    input: DeletePolicyRequest,
  ): Effect.Effect<
    DeletePolicyResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deletePreset(
    input: DeletePresetRequest,
  ): Effect.Effect<
    DeletePresetResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteQueue(
    input: DeleteQueueRequest,
  ): Effect.Effect<
    DeleteQueueResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  describeEndpoints(
    input: DescribeEndpointsRequest,
  ): Effect.Effect<
    DescribeEndpointsResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  disassociateCertificate(
    input: DisassociateCertificateRequest,
  ): Effect.Effect<
    DisassociateCertificateResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getJob(
    input: GetJobRequest,
  ): Effect.Effect<
    GetJobResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getJobTemplate(
    input: GetJobTemplateRequest,
  ): Effect.Effect<
    GetJobTemplateResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getPolicy(
    input: GetPolicyRequest,
  ): Effect.Effect<
    GetPolicyResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getPreset(
    input: GetPresetRequest,
  ): Effect.Effect<
    GetPresetResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getQueue(
    input: GetQueueRequest,
  ): Effect.Effect<
    GetQueueResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listJobs(
    input: ListJobsRequest,
  ): Effect.Effect<
    ListJobsResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listJobTemplates(
    input: ListJobTemplatesRequest,
  ): Effect.Effect<
    ListJobTemplatesResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listPresets(
    input: ListPresetsRequest,
  ): Effect.Effect<
    ListPresetsResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listQueues(
    input: ListQueuesRequest,
  ): Effect.Effect<
    ListQueuesResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listVersions(
    input: ListVersionsRequest,
  ): Effect.Effect<
    ListVersionsResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  probe(
    input: ProbeRequest,
  ): Effect.Effect<
    ProbeResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putPolicy(
    input: PutPolicyRequest,
  ): Effect.Effect<
    PutPolicyResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  searchJobs(
    input: SearchJobsRequest,
  ): Effect.Effect<
    SearchJobsResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateJobTemplate(
    input: UpdateJobTemplateRequest,
  ): Effect.Effect<
    UpdateJobTemplateResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updatePreset(
    input: UpdatePresetRequest,
  ): Effect.Effect<
    UpdatePresetResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateQueue(
    input: UpdateQueueRequest,
  ): Effect.Effect<
    UpdateQueueResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
}

export type Mediaconvert = MediaConvert;

export type __double = number;

export type __doubleMin0 = number;

export type __doubleMin0Max1 = number;

export type __doubleMin0Max2147483647 = number;

export type __doubleMin1Max10 = number;

export type __doubleMinNegative59Max0 = number;

export type __doubleMinNegative60Max3 = number;

export type __doubleMinNegative60Max6 = number;

export type __doubleMinNegative60MaxNegative1 = number;

export type __doubleMinNegative6Max3 = number;

export type __doubleMinNegative8Max0 = number;

export type __integer = number;

export type __integerMin0Max0 = number;

export type __integerMin0Max1 = number;

export type __integerMin0Max10 = number;

export type __integerMin0Max100 = number;

export type __integerMin0Max1000 = number;

export type __integerMin0Max10000 = number;

export type __integerMin0Max1152000000 = number;

export type __integerMin0Max128 = number;

export type __integerMin0Max1466400000 = number;

export type __integerMin0Max15 = number;

export type __integerMin0Max16 = number;

export type __integerMin0Max2147483647 = number;

export type __integerMin0Max255 = number;

export type __integerMin0Max3 = number;

export type __integerMin0Max30 = number;

export type __integerMin0Max30000 = number;

export type __integerMin0Max3600 = number;

export type __integerMin0Max4 = number;

export type __integerMin0Max4000 = number;

export type __integerMin0Max4194303 = number;

export type __integerMin0Max47185920 = number;

export type __integerMin0Max5 = number;

export type __integerMin0Max500 = number;

export type __integerMin0Max50000 = number;

export type __integerMin0Max65534 = number;

export type __integerMin0Max65535 = number;

export type __integerMin0Max7 = number;

export type __integerMin0Max8 = number;

export type __integerMin0Max9 = number;

export type __integerMin0Max96 = number;

export type __integerMin0Max99 = number;

export type __integerMin100000Max100000000 = number;

export type __integerMin1000Max1152000000 = number;

export type __integerMin1000Max1466400000 = number;

export type __integerMin1000Max288000000 = number;

export type __integerMin1000Max30000 = number;

export type __integerMin1000Max300000000 = number;

export type __integerMin1000Max480000000 = number;

export type __integerMin100Max1000 = number;

export type __integerMin10Max48 = number;

export type __integerMin16000Max320000 = number;

export type __integerMin16000Max48000 = number;

export type __integerMin16Max24 = number;

export type __integerMin1Max1 = number;

export type __integerMin1Max10 = number;

export type __integerMin1Max100 = number;

export type __integerMin1Max10000000 = number;

export type __integerMin1Max1001 = number;

export type __integerMin1Max150 = number;

export type __integerMin1Max17895697 = number;

export type __integerMin1Max2 = number;

export type __integerMin1Max20 = number;

export type __integerMin1Max2048 = number;

export type __integerMin1Max2147483640 = number;

export type __integerMin1Max2147483647 = number;

export type __integerMin1Max31 = number;

export type __integerMin1Max32 = number;

export type __integerMin1Max4 = number;

export type __integerMin1Max4096 = number;

export type __integerMin1Max512 = number;

export type __integerMin1Max6 = number;

export type __integerMin1Max60000 = number;

export type __integerMin1Max64 = number;

export type __integerMin1Max8 = number;

export type __integerMin22050Max48000 = number;

export type __integerMin24Max60000 = number;

export type __integerMin25Max10000 = number;

export type __integerMin25Max2000 = number;

export type __integerMin2Max2147483647 = number;

export type __integerMin2Max4096 = number;

export type __integerMin32000Max192000 = number;

export type __integerMin32000Max3024000 = number;

export type __integerMin32000Max384000 = number;

export type __integerMin32000Max48000 = number;

export type __integerMin32Max8182 = number;

export type __integerMin32Max8192 = number;

export type __integerMin384000Max1024000 = number;

export type __integerMin3Max15 = number;

export type __integerMin48000Max48000 = number;

export type __integerMin4Max12 = number;

export type __integerMin50Max86400000 = number;

export type __integerMin6000Max1024000 = number;

export type __integerMin64000Max640000 = number;

export type __integerMin8000Max192000 = number;

export type __integerMin8000Max96000 = number;

export type __integerMin8Max12 = number;

export type __integerMin8Max4096 = number;

export type __integerMin90Max105 = number;

export type __integerMin920Max1023 = number;

export type __integerMin96Max600 = number;

export type __integerMinNegative10000Max10000 = number;

export type __integerMinNegative1000Max1000 = number;

export type __integerMinNegative180Max180 = number;

export type __integerMinNegative1Max10 = number;

export type __integerMinNegative1Max2147483647 = number;

export type __integerMinNegative1Max3 = number;

export type __integerMinNegative2147483648Max2147483647 = number;

export type __integerMinNegative2Max3 = number;

export type __integerMinNegative50Max50 = number;

export type __integerMinNegative5Max10 = number;

export type __integerMinNegative60Max6 = number;

export type __integerMinNegative70Max0 = number;

export type __listOf__doubleMinNegative60Max6 = Array<number>;
export type __listOf__integer = Array<number>;
export type __listOf__integerMin1Max2147483647 = Array<number>;
export type __listOf__integerMin32Max8182 = Array<number>;
export type __listOf__integerMinNegative60Max6 = Array<number>;
export type __listOf__string = Array<string>;
export type __listOf__stringMin1 = Array<string>;
export type __listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12 =
  Array<string>;
export type __listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12 =
  Array<string>;
export type __listOf__stringPatternS3ASSETMAPXml = Array<string>;
export type __listOfAllowedRenditionSize = Array<AllowedRenditionSize>;
export type __listOfAudioChannelTag = Array<AudioChannelTag>;
export type __listOfAudioDescription = Array<AudioDescription>;
export type __listOfAutomatedAbrRule = Array<AutomatedAbrRule>;
export type __listOfCaptionDescription = Array<CaptionDescription>;
export type __listOfCaptionDescriptionPreset = Array<CaptionDescriptionPreset>;
export type __listOfCmafAdditionalManifest = Array<CmafAdditionalManifest>;
export type __listOfColorConversion3DLUTSetting =
  Array<ColorConversion3DLUTSetting>;
export type __listOfDashAdditionalManifest = Array<DashAdditionalManifest>;
export type __listOfEndpoint = Array<Endpoint>;
export type __listOfForceIncludeRenditionSize =
  Array<ForceIncludeRenditionSize>;
export type __listOfFrameMetricType = Array<FrameMetricType>;
export type __listOfHlsAdditionalManifest = Array<HlsAdditionalManifest>;
export type __listOfHlsAdMarkers = Array<HlsAdMarkers>;
export type __listOfHlsCaptionLanguageMapping =
  Array<HlsCaptionLanguageMapping>;
export type __listOfHopDestination = Array<HopDestination>;
export type __listOfId3Insertion = Array<Id3Insertion>;
export type __listOfInput = Array<Input>;
export type __listOfInputClipping = Array<InputClipping>;
export type __listOfInputTemplate = Array<InputTemplate>;
export type __listOfInsertableImage = Array<InsertableImage>;
export type __listOfJob = Array<Job>;
export type __listOfJobEngineVersion = Array<JobEngineVersion>;
export type __listOfJobTemplate = Array<JobTemplate>;
export type __listOfMsSmoothAdditionalManifest =
  Array<MsSmoothAdditionalManifest>;
export type __listOfOutput = Array<Output>;
export type __listOfOutputChannelMapping = Array<OutputChannelMapping>;
export type __listOfOutputDetail = Array<OutputDetail>;
export type __listOfOutputGroup = Array<OutputGroup>;
export type __listOfOutputGroupDetail = Array<OutputGroupDetail>;
export type __listOfPreset = Array<Preset>;
export type __listOfProbeInputFile = Array<ProbeInputFile>;
export type __listOfProbeResult = Array<ProbeResult>;
export type __listOfQueue = Array<Queue>;
export type __listOfQueueTransition = Array<QueueTransition>;
export type __listOfServiceOverride = Array<ServiceOverride>;
export type __listOfTeletextPageType = Array<TeletextPageType>;
export type __listOfTrack = Array<Track>;
export type __listOfTrackMapping = Array<TrackMapping>;
export type __listOfVideoOverlay = Array<VideoOverlay>;
export type __listOfVideoOverlayInputClipping =
  Array<VideoOverlayInputClipping>;
export type __listOfVideoOverlayTransition = Array<VideoOverlayTransition>;
export type __listOfWarningGroup = Array<WarningGroup>;
export type __long = number;

export type __mapOf__string = Record<string, string>;
export type __mapOfAudioSelector = Record<string, AudioSelector>;
export type __mapOfAudioSelectorGroup = Record<string, AudioSelectorGroup>;
export type __mapOfCaptionSelector = Record<string, CaptionSelector>;
export type __mapOfDynamicAudioSelector = Record<string, DynamicAudioSelector>;
export type __string = string;

export type __stringMax1000 = string;

export type __stringMax2048 = string;

export type __stringMax2048PatternS3Https = string;

export type __stringMax256 = string;

export type __stringMin0 = string;

export type __stringMin1 = string;

export type __stringMin11Max11Pattern01D20305D205D = string;

export type __stringMin14PatternS3BmpBMPPngPNGHttpsBmpBMPPngPNG = string;

export type __stringMin14PatternS3BmpBMPPngPNGTgaTGAHttpsBmpBMPPngPNGTgaTGA =
  string;

export type __stringMin14PatternS3CubeCUBEHttpsCubeCUBE = string;

export type __stringMin14PatternS3Mov09PngHttpsMov09Png = string;

export type __stringMin14PatternS3SccSCCTtmlTTMLDfxpDFXPStlSTLSrtSRTXmlXMLSmiSMIVttVTTWebvttWEBVTTHttpsSccSCCTtmlTTMLDfxpDFXPStlSTLSrtSRTXmlXMLSmiSMIVttVTTWebvttWEBVTT =
  string;

export type __stringMin14PatternS3XmlXMLHttpsXmlXML = string;

export type __stringMin16Max24PatternAZaZ0922AZaZ0916 = string;

export type __stringMin1Max100000 = string;

export type __stringMin1Max20 = string;

export type __stringMin1Max2048PatternArnAZSecretsmanagerWD12SecretAZAZ09 =
  string;

export type __stringMin1Max256 = string;

export type __stringMin1Max50 = string;

export type __stringMin1Max50PatternAZAZ09 = string;

export type __stringMin1PatternArnAwsUsGovCnKmsAZ26EastWestCentralNorthSouthEastWest1912D12KeyAFAF098AFAF094AFAF094AFAF094AFAF0912MrkAFAF0932 =
  string;

export type __stringMin24Max512PatternAZaZ0902 = string;

export type __stringMin32Max32Pattern09aFAF32 = string;

export type __stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12 =
  string;

export type __stringMin3Max3Pattern1809aFAF09aEAE = string;

export type __stringMin3Max3PatternAZaZ3 = string;

export type __stringMin6Max8Pattern09aFAF609aFAF2 = string;

export type __stringMin9Max19PatternAZ26EastWestCentralNorthSouthEastWest1912 =
  string;

export type __stringPattern = string;

export type __stringPattern010920405090509092 = string;

export type __stringPattern010920405090509092090909 = string;

export type __stringPattern01D20305D205D = string;

export type __stringPattern0940191020191209301 = string;

export type __stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = string;

export type __stringPattern0xAFaF0908190908 = string;

export type __stringPatternArnAwsUsGovAcm = string;

export type __stringPatternArnAwsUsGovCnKmsAZ26EastWestCentralNorthSouthEastWest1912D12KeyAFAF098AFAF094AFAF094AFAF094AFAF0912MrkAFAF0932 =
  string;

export type __stringPatternAZaZ0902 = string;

export type __stringPatternAZaZ0932 = string;

export type __stringPatternAZaZ23AZaZ = string;

export type __stringPatternAZaZ23AZaZ09 = string;

export type __stringPatternDD = string;

export type __stringPatternHttps = string;

export type __stringPatternHttpsD = string;

export type __stringPatternHttpsKantarmedia = string;

export type __stringPatternIdentityAZaZ26AZaZ09163 = string;

export type __stringPatternS3 = string;

export type __stringPatternS3ASSETMAPXml = string;

export type __stringPatternS3Https = string;

export type __stringPatternS3TtfHttpsTtf = string;

export type __stringPatternSNManifestConfirmConditionNotificationNS = string;

export type __stringPatternSNSignalProcessingNotificationNS = string;

export type __stringPatternW = string;

export type __stringPatternWS = string;

export type __timestampUnix = Date | string;

export type AacAudioDescriptionBroadcasterMix =
  | "BROADCASTER_MIXED_AD"
  | "NORMAL";
export type AacCodecProfile = "LC" | "HEV1" | "HEV2";
export type AacCodingMode =
  | "AD_RECEIVER_MIX"
  | "CODING_MODE_1_0"
  | "CODING_MODE_1_1"
  | "CODING_MODE_2_0"
  | "CODING_MODE_5_1";
export type AacRateControlMode = "CBR" | "VBR";
export type AacRawFormat = "LATM_LOAS" | "NONE";
export interface AacSettings {
  AudioDescriptionBroadcasterMix?: AacAudioDescriptionBroadcasterMix;
  Bitrate?: number;
  CodecProfile?: AacCodecProfile;
  CodingMode?: AacCodingMode;
  RateControlMode?: AacRateControlMode;
  RawFormat?: AacRawFormat;
  SampleRate?: number;
  Specification?: AacSpecification;
  VbrQuality?: AacVbrQuality;
}
export type AacSpecification = "MPEG2" | "MPEG4";
export type AacVbrQuality = "LOW" | "MEDIUM_LOW" | "MEDIUM_HIGH" | "HIGH";
export type Ac3BitstreamMode =
  | "COMPLETE_MAIN"
  | "COMMENTARY"
  | "DIALOGUE"
  | "EMERGENCY"
  | "HEARING_IMPAIRED"
  | "MUSIC_AND_EFFECTS"
  | "VISUALLY_IMPAIRED"
  | "VOICE_OVER";
export type Ac3CodingMode =
  | "CODING_MODE_1_0"
  | "CODING_MODE_1_1"
  | "CODING_MODE_2_0"
  | "CODING_MODE_3_2_LFE";
export type Ac3DynamicRangeCompressionLine =
  | "FILM_STANDARD"
  | "FILM_LIGHT"
  | "MUSIC_STANDARD"
  | "MUSIC_LIGHT"
  | "SPEECH"
  | "NONE";
export type Ac3DynamicRangeCompressionProfile = "FILM_STANDARD" | "NONE";
export type Ac3DynamicRangeCompressionRf =
  | "FILM_STANDARD"
  | "FILM_LIGHT"
  | "MUSIC_STANDARD"
  | "MUSIC_LIGHT"
  | "SPEECH"
  | "NONE";
export type Ac3LfeFilter = "ENABLED" | "DISABLED";
export type Ac3MetadataControl = "FOLLOW_INPUT" | "USE_CONFIGURED";
export interface Ac3Settings {
  Bitrate?: number;
  BitstreamMode?: Ac3BitstreamMode;
  CodingMode?: Ac3CodingMode;
  Dialnorm?: number;
  DynamicRangeCompressionLine?: Ac3DynamicRangeCompressionLine;
  DynamicRangeCompressionProfile?: Ac3DynamicRangeCompressionProfile;
  DynamicRangeCompressionRf?: Ac3DynamicRangeCompressionRf;
  LfeFilter?: Ac3LfeFilter;
  MetadataControl?: Ac3MetadataControl;
  SampleRate?: number;
}
export type AccelerationMode = "DISABLED" | "ENABLED" | "PREFERRED";
export interface AccelerationSettings {
  Mode: AccelerationMode;
}
export type AccelerationStatus =
  | "NOT_APPLICABLE"
  | "IN_PROGRESS"
  | "ACCELERATED"
  | "NOT_ACCELERATED";
export type AdvancedInputFilter = "ENABLED" | "DISABLED";
export type AdvancedInputFilterAddTexture = "ENABLED" | "DISABLED";
export interface AdvancedInputFilterSettings {
  AddTexture?: AdvancedInputFilterAddTexture;
  Sharpening?: AdvancedInputFilterSharpen;
}
export type AdvancedInputFilterSharpen = "OFF" | "LOW" | "HIGH";
export type AfdSignaling = "NONE" | "AUTO" | "FIXED";
export interface AiffSettings {
  BitDepth?: number;
  Channels?: number;
  SampleRate?: number;
}
export interface AllowedRenditionSize {
  Height?: number;
  Required?: RequiredFlag;
  Width?: number;
}
export type AlphaBehavior = "DISCARD" | "REMAP_TO_LUMA";
export type AncillaryConvert608To708 = "UPCONVERT" | "DISABLED";
export interface AncillarySourceSettings {
  Convert608To708?: AncillaryConvert608To708;
  SourceAncillaryChannelNumber?: number;
  TerminateCaptions?: AncillaryTerminateCaptions;
}
export type AncillaryTerminateCaptions = "END_OF_INPUT" | "DISABLED";
export type AntiAlias = "DISABLED" | "ENABLED";
export interface AssociateCertificateRequest {
  Arn: string;
}
export interface AssociateCertificateResponse {}
export type AudioChannelTag =
  | "L"
  | "R"
  | "C"
  | "LFE"
  | "LS"
  | "RS"
  | "LC"
  | "RC"
  | "CS"
  | "LSD"
  | "RSD"
  | "TCS"
  | "VHL"
  | "VHC"
  | "VHR"
  | "TBL"
  | "TBC"
  | "TBR"
  | "RSL"
  | "RSR"
  | "LW"
  | "RW"
  | "LFE2"
  | "LT"
  | "RT"
  | "HI"
  | "NAR"
  | "M";
export interface AudioChannelTaggingSettings {
  ChannelTag?: AudioChannelTag;
  ChannelTags?: Array<AudioChannelTag>;
}
export type AudioCodec =
  | "AAC"
  | "MP2"
  | "MP3"
  | "WAV"
  | "AIFF"
  | "AC3"
  | "EAC3"
  | "EAC3_ATMOS"
  | "VORBIS"
  | "OPUS"
  | "PASSTHROUGH"
  | "FLAC";
export interface AudioCodecSettings {
  AacSettings?: AacSettings;
  Ac3Settings?: Ac3Settings;
  AiffSettings?: AiffSettings;
  Codec?: AudioCodec;
  Eac3AtmosSettings?: Eac3AtmosSettings;
  Eac3Settings?: Eac3Settings;
  FlacSettings?: FlacSettings;
  Mp2Settings?: Mp2Settings;
  Mp3Settings?: Mp3Settings;
  OpusSettings?: OpusSettings;
  VorbisSettings?: VorbisSettings;
  WavSettings?: WavSettings;
}
export type AudioDefaultSelection = "DEFAULT" | "NOT_DEFAULT";
export interface AudioDescription {
  AudioChannelTaggingSettings?: AudioChannelTaggingSettings;
  AudioNormalizationSettings?: AudioNormalizationSettings;
  AudioSourceName?: string;
  AudioType?: number;
  AudioTypeControl?: AudioTypeControl;
  CodecSettings?: AudioCodecSettings;
  CustomLanguageCode?: string;
  LanguageCode?: LanguageCode;
  LanguageCodeControl?: AudioLanguageCodeControl;
  RemixSettings?: RemixSettings;
  StreamName?: string;
}
export type AudioDurationCorrection =
  | "DISABLED"
  | "AUTO"
  | "TRACK"
  | "FRAME"
  | "FORCE";
export type AudioLanguageCodeControl = "FOLLOW_INPUT" | "USE_CONFIGURED";
export type AudioNormalizationAlgorithm =
  | "ITU_BS_1770_1"
  | "ITU_BS_1770_2"
  | "ITU_BS_1770_3"
  | "ITU_BS_1770_4";
export type AudioNormalizationAlgorithmControl =
  | "CORRECT_AUDIO"
  | "MEASURE_ONLY";
export type AudioNormalizationLoudnessLogging = "LOG" | "DONT_LOG";
export type AudioNormalizationPeakCalculation = "TRUE_PEAK" | "NONE";
export interface AudioNormalizationSettings {
  Algorithm?: AudioNormalizationAlgorithm;
  AlgorithmControl?: AudioNormalizationAlgorithmControl;
  CorrectionGateLevel?: number;
  LoudnessLogging?: AudioNormalizationLoudnessLogging;
  PeakCalculation?: AudioNormalizationPeakCalculation;
  TargetLkfs?: number;
  TruePeakLimiterThreshold?: number;
}
export interface AudioProperties {
  BitDepth?: number;
  BitRate?: number;
  Channels?: number;
  FrameRate?: FrameRate;
  LanguageCode?: string;
  SampleRate?: number;
}
export interface AudioSelector {
  AudioDurationCorrection?: AudioDurationCorrection;
  CustomLanguageCode?: string;
  DefaultSelection?: AudioDefaultSelection;
  ExternalAudioFileInput?: string;
  HlsRenditionGroupSettings?: HlsRenditionGroupSettings;
  LanguageCode?: LanguageCode;
  Offset?: number;
  Pids?: Array<number>;
  ProgramSelection?: number;
  RemixSettings?: RemixSettings;
  SelectorType?: AudioSelectorType;
  Tracks?: Array<number>;
}
export interface AudioSelectorGroup {
  AudioSelectorNames?: Array<string>;
}
export type AudioSelectorType =
  | "PID"
  | "TRACK"
  | "LANGUAGE_CODE"
  | "HLS_RENDITION_GROUP"
  | "ALL_PCM";
export type AudioTypeControl = "FOLLOW_INPUT" | "USE_CONFIGURED";
export interface AutomatedAbrRule {
  AllowedRenditions?: Array<AllowedRenditionSize>;
  ForceIncludeRenditions?: Array<ForceIncludeRenditionSize>;
  MinBottomRenditionSize?: MinBottomRenditionSize;
  MinTopRenditionSize?: MinTopRenditionSize;
  Type?: RuleType;
}
export interface AutomatedAbrSettings {
  MaxAbrBitrate?: number;
  MaxQualityLevel?: number;
  MaxRenditions?: number;
  MinAbrBitrate?: number;
  Rules?: Array<AutomatedAbrRule>;
}
export interface AutomatedEncodingSettings {
  AbrSettings?: AutomatedAbrSettings;
}
export type Av1AdaptiveQuantization =
  | "OFF"
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "HIGHER"
  | "MAX";
export type Av1BitDepth = "BIT_8" | "BIT_10";
export type Av1FilmGrainSynthesis = "DISABLED" | "ENABLED";
export type Av1FramerateControl = "INITIALIZE_FROM_SOURCE" | "SPECIFIED";
export type Av1FramerateConversionAlgorithm =
  | "DUPLICATE_DROP"
  | "INTERPOLATE"
  | "FRAMEFORMER"
  | "MAINTAIN_FRAME_COUNT";
export interface Av1QvbrSettings {
  QvbrQualityLevel?: number;
  QvbrQualityLevelFineTune?: number;
}
export type Av1RateControlMode = "QVBR";
export interface Av1Settings {
  AdaptiveQuantization?: Av1AdaptiveQuantization;
  BitDepth?: Av1BitDepth;
  FilmGrainSynthesis?: Av1FilmGrainSynthesis;
  FramerateControl?: Av1FramerateControl;
  FramerateConversionAlgorithm?: Av1FramerateConversionAlgorithm;
  FramerateDenominator?: number;
  FramerateNumerator?: number;
  GopSize?: number;
  MaxBitrate?: number;
  NumberBFramesBetweenReferenceFrames?: number;
  PerFrameMetrics?: Array<FrameMetricType>;
  QvbrSettings?: Av1QvbrSettings;
  RateControlMode?: Av1RateControlMode;
  Slices?: number;
  SpatialAdaptiveQuantization?: Av1SpatialAdaptiveQuantization;
}
export type Av1SpatialAdaptiveQuantization = "DISABLED" | "ENABLED";
export interface AvailBlanking {
  AvailBlankingImage?: string;
}
export type AvcIntraClass =
  | "CLASS_50"
  | "CLASS_100"
  | "CLASS_200"
  | "CLASS_4K_2K";
export type AvcIntraFramerateControl = "INITIALIZE_FROM_SOURCE" | "SPECIFIED";
export type AvcIntraFramerateConversionAlgorithm =
  | "DUPLICATE_DROP"
  | "INTERPOLATE"
  | "FRAMEFORMER"
  | "MAINTAIN_FRAME_COUNT";
export type AvcIntraInterlaceMode =
  | "PROGRESSIVE"
  | "TOP_FIELD"
  | "BOTTOM_FIELD"
  | "FOLLOW_TOP_FIELD"
  | "FOLLOW_BOTTOM_FIELD";
export type AvcIntraScanTypeConversionMode =
  | "INTERLACED"
  | "INTERLACED_OPTIMIZE";
export interface AvcIntraSettings {
  AvcIntraClass?: AvcIntraClass;
  AvcIntraUhdSettings?: AvcIntraUhdSettings;
  FramerateControl?: AvcIntraFramerateControl;
  FramerateConversionAlgorithm?: AvcIntraFramerateConversionAlgorithm;
  FramerateDenominator?: number;
  FramerateNumerator?: number;
  InterlaceMode?: AvcIntraInterlaceMode;
  PerFrameMetrics?: Array<FrameMetricType>;
  ScanTypeConversionMode?: AvcIntraScanTypeConversionMode;
  SlowPal?: AvcIntraSlowPal;
  Telecine?: AvcIntraTelecine;
}
export type AvcIntraSlowPal = "DISABLED" | "ENABLED";
export type AvcIntraTelecine = "NONE" | "HARD";
export type AvcIntraUhdQualityTuningLevel = "SINGLE_PASS" | "MULTI_PASS";
export interface AvcIntraUhdSettings {
  QualityTuningLevel?: AvcIntraUhdQualityTuningLevel;
}
export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly Message?: string;
}> {}
export interface BandwidthReductionFilter {
  Sharpening?: BandwidthReductionFilterSharpening;
  Strength?: BandwidthReductionFilterStrength;
}
export type BandwidthReductionFilterSharpening =
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "OFF";
export type BandwidthReductionFilterStrength =
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "AUTO"
  | "OFF";
export type BillingTagsSource = "QUEUE" | "PRESET" | "JOB_TEMPLATE" | "JOB";
export interface BurninDestinationSettings {
  Alignment?: BurninSubtitleAlignment;
  ApplyFontColor?: BurninSubtitleApplyFontColor;
  BackgroundColor?: BurninSubtitleBackgroundColor;
  BackgroundOpacity?: number;
  FallbackFont?: BurninSubtitleFallbackFont;
  FontColor?: BurninSubtitleFontColor;
  FontFileBold?: string;
  FontFileBoldItalic?: string;
  FontFileItalic?: string;
  FontFileRegular?: string;
  FontOpacity?: number;
  FontResolution?: number;
  FontScript?: FontScript;
  FontSize?: number;
  HexFontColor?: string;
  OutlineColor?: BurninSubtitleOutlineColor;
  OutlineSize?: number;
  RemoveRubyReserveAttributes?: RemoveRubyReserveAttributes;
  ShadowColor?: BurninSubtitleShadowColor;
  ShadowOpacity?: number;
  ShadowXOffset?: number;
  ShadowYOffset?: number;
  StylePassthrough?: BurnInSubtitleStylePassthrough;
  TeletextSpacing?: BurninSubtitleTeletextSpacing;
  XPosition?: number;
  YPosition?: number;
}
export type BurninSubtitleAlignment = "CENTERED" | "LEFT" | "AUTO";
export type BurninSubtitleApplyFontColor = "WHITE_TEXT_ONLY" | "ALL_TEXT";
export type BurninSubtitleBackgroundColor = "NONE" | "BLACK" | "WHITE" | "AUTO";
export type BurninSubtitleFallbackFont =
  | "BEST_MATCH"
  | "MONOSPACED_SANSSERIF"
  | "MONOSPACED_SERIF"
  | "PROPORTIONAL_SANSSERIF"
  | "PROPORTIONAL_SERIF";
export type BurninSubtitleFontColor =
  | "WHITE"
  | "BLACK"
  | "YELLOW"
  | "RED"
  | "GREEN"
  | "BLUE"
  | "HEX"
  | "AUTO";
export type BurninSubtitleOutlineColor =
  | "BLACK"
  | "WHITE"
  | "YELLOW"
  | "RED"
  | "GREEN"
  | "BLUE"
  | "AUTO";
export type BurninSubtitleShadowColor = "NONE" | "BLACK" | "WHITE" | "AUTO";
export type BurnInSubtitleStylePassthrough = "ENABLED" | "DISABLED";
export type BurninSubtitleTeletextSpacing =
  | "FIXED_GRID"
  | "PROPORTIONAL"
  | "AUTO";
export interface CancelJobRequest {
  Id: string;
}
export interface CancelJobResponse {}
export interface CaptionDescription {
  CaptionSelectorName?: string;
  CustomLanguageCode?: string;
  DestinationSettings?: CaptionDestinationSettings;
  LanguageCode?: LanguageCode;
  LanguageDescription?: string;
}
export interface CaptionDescriptionPreset {
  CustomLanguageCode?: string;
  DestinationSettings?: CaptionDestinationSettings;
  LanguageCode?: LanguageCode;
  LanguageDescription?: string;
}
export interface CaptionDestinationSettings {
  BurninDestinationSettings?: BurninDestinationSettings;
  DestinationType?: CaptionDestinationType;
  DvbSubDestinationSettings?: DvbSubDestinationSettings;
  EmbeddedDestinationSettings?: EmbeddedDestinationSettings;
  ImscDestinationSettings?: ImscDestinationSettings;
  SccDestinationSettings?: SccDestinationSettings;
  SrtDestinationSettings?: SrtDestinationSettings;
  TeletextDestinationSettings?: TeletextDestinationSettings;
  TtmlDestinationSettings?: TtmlDestinationSettings;
  WebvttDestinationSettings?: WebvttDestinationSettings;
}
export type CaptionDestinationType =
  | "BURN_IN"
  | "DVB_SUB"
  | "EMBEDDED"
  | "EMBEDDED_PLUS_SCTE20"
  | "IMSC"
  | "SCTE20_PLUS_EMBEDDED"
  | "SCC"
  | "SRT"
  | "SMI"
  | "TELETEXT"
  | "TTML"
  | "WEBVTT";
export interface CaptionSelector {
  CustomLanguageCode?: string;
  LanguageCode?: LanguageCode;
  SourceSettings?: CaptionSourceSettings;
}
export type CaptionSourceByteRateLimit = "ENABLED" | "DISABLED";
export type CaptionSourceConvertPaintOnToPopOn = "ENABLED" | "DISABLED";
export interface CaptionSourceFramerate {
  FramerateDenominator?: number;
  FramerateNumerator?: number;
}
export interface CaptionSourceSettings {
  AncillarySourceSettings?: AncillarySourceSettings;
  DvbSubSourceSettings?: DvbSubSourceSettings;
  EmbeddedSourceSettings?: EmbeddedSourceSettings;
  FileSourceSettings?: FileSourceSettings;
  SourceType?: CaptionSourceType;
  TeletextSourceSettings?: TeletextSourceSettings;
  TrackSourceSettings?: TrackSourceSettings;
  WebvttHlsSourceSettings?: WebvttHlsSourceSettings;
}
export type CaptionSourceType =
  | "ANCILLARY"
  | "DVB_SUB"
  | "EMBEDDED"
  | "SCTE20"
  | "SCC"
  | "TTML"
  | "STL"
  | "SRT"
  | "SMI"
  | "SMPTE_TT"
  | "TELETEXT"
  | "NULL_SOURCE"
  | "IMSC"
  | "WEBVTT";
export type CaptionSourceUpconvertSTLToTeletext = "UPCONVERT" | "DISABLED";
export interface ChannelMapping {
  OutputChannels?: Array<OutputChannelMapping>;
}
export type ChromaPositionMode = "AUTO" | "FORCE_CENTER" | "FORCE_TOP_LEFT";
export interface ClipLimits {
  MaximumRGBTolerance?: number;
  MaximumYUV?: number;
  MinimumRGBTolerance?: number;
  MinimumYUV?: number;
}
export interface CmafAdditionalManifest {
  ManifestNameModifier?: string;
  SelectedOutputs?: Array<string>;
}
export type CmafClientCache = "DISABLED" | "ENABLED";
export type CmafCodecSpecification = "RFC_6381" | "RFC_4281";
export interface CmafEncryptionSettings {
  ConstantInitializationVector?: string;
  EncryptionMethod?: CmafEncryptionType;
  InitializationVectorInManifest?: CmafInitializationVectorInManifest;
  SpekeKeyProvider?: SpekeKeyProviderCmaf;
  StaticKeyProvider?: StaticKeyProvider;
  Type?: CmafKeyProviderType;
}
export type CmafEncryptionType = "SAMPLE_AES" | "AES_CTR";
export interface CmafGroupSettings {
  AdditionalManifests?: Array<CmafAdditionalManifest>;
  BaseUrl?: string;
  ClientCache?: CmafClientCache;
  CodecSpecification?: CmafCodecSpecification;
  DashIFrameTrickPlayNameModifier?: string;
  DashManifestStyle?: DashManifestStyle;
  Destination?: string;
  DestinationSettings?: DestinationSettings;
  Encryption?: CmafEncryptionSettings;
  FragmentLength?: number;
  ImageBasedTrickPlay?: CmafImageBasedTrickPlay;
  ImageBasedTrickPlaySettings?: CmafImageBasedTrickPlaySettings;
  ManifestCompression?: CmafManifestCompression;
  ManifestDurationFormat?: CmafManifestDurationFormat;
  MinBufferTime?: number;
  MinFinalSegmentLength?: number;
  MpdManifestBandwidthType?: CmafMpdManifestBandwidthType;
  MpdProfile?: CmafMpdProfile;
  PtsOffsetHandlingForBFrames?: CmafPtsOffsetHandlingForBFrames;
  SegmentControl?: CmafSegmentControl;
  SegmentLength?: number;
  SegmentLengthControl?: CmafSegmentLengthControl;
  StreamInfResolution?: CmafStreamInfResolution;
  TargetDurationCompatibilityMode?: CmafTargetDurationCompatibilityMode;
  VideoCompositionOffsets?: CmafVideoCompositionOffsets;
  WriteDashManifest?: CmafWriteDASHManifest;
  WriteHlsManifest?: CmafWriteHLSManifest;
  WriteSegmentTimelineInRepresentation?: CmafWriteSegmentTimelineInRepresentation;
}
export type CmafImageBasedTrickPlay =
  | "NONE"
  | "THUMBNAIL"
  | "THUMBNAIL_AND_FULLFRAME"
  | "ADVANCED";
export interface CmafImageBasedTrickPlaySettings {
  IntervalCadence?: CmafIntervalCadence;
  ThumbnailHeight?: number;
  ThumbnailInterval?: number;
  ThumbnailWidth?: number;
  TileHeight?: number;
  TileWidth?: number;
}
export type CmafInitializationVectorInManifest = "INCLUDE" | "EXCLUDE";
export type CmafIntervalCadence = "FOLLOW_IFRAME" | "FOLLOW_CUSTOM";
export type CmafKeyProviderType = "SPEKE" | "STATIC_KEY";
export type CmafManifestCompression = "GZIP" | "NONE";
export type CmafManifestDurationFormat = "FLOATING_POINT" | "INTEGER";
export type CmafMpdManifestBandwidthType = "AVERAGE" | "MAX";
export type CmafMpdProfile = "MAIN_PROFILE" | "ON_DEMAND_PROFILE";
export type CmafPtsOffsetHandlingForBFrames =
  | "ZERO_BASED"
  | "MATCH_INITIAL_PTS";
export type CmafSegmentControl = "SINGLE_FILE" | "SEGMENTED_FILES";
export type CmafSegmentLengthControl = "EXACT" | "GOP_MULTIPLE" | "MATCH";
export type CmafStreamInfResolution = "INCLUDE" | "EXCLUDE";
export type CmafTargetDurationCompatibilityMode = "LEGACY" | "SPEC_COMPLIANT";
export type CmafVideoCompositionOffsets = "SIGNED" | "UNSIGNED";
export type CmafWriteDASHManifest = "DISABLED" | "ENABLED";
export type CmafWriteHLSManifest = "DISABLED" | "ENABLED";
export type CmafWriteSegmentTimelineInRepresentation = "ENABLED" | "DISABLED";
export type CmfcAudioDuration =
  | "DEFAULT_CODEC_DURATION"
  | "MATCH_VIDEO_DURATION";
export type CmfcAudioTrackType =
  | "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT"
  | "ALTERNATE_AUDIO_AUTO_SELECT"
  | "ALTERNATE_AUDIO_NOT_AUTO_SELECT"
  | "AUDIO_ONLY_VARIANT_STREAM";
export type CmfcDescriptiveVideoServiceFlag = "DONT_FLAG" | "FLAG";
export type CmfcIFrameOnlyManifest = "INCLUDE" | "EXCLUDE";
export type CmfcKlvMetadata = "PASSTHROUGH" | "NONE";
export type CmfcManifestMetadataSignaling = "ENABLED" | "DISABLED";
export type CmfcScte35Esam = "INSERT" | "NONE";
export type CmfcScte35Source = "PASSTHROUGH" | "NONE";
export interface CmfcSettings {
  AudioDuration?: CmfcAudioDuration;
  AudioGroupId?: string;
  AudioRenditionSets?: string;
  AudioTrackType?: CmfcAudioTrackType;
  DescriptiveVideoServiceFlag?: CmfcDescriptiveVideoServiceFlag;
  IFrameOnlyManifest?: CmfcIFrameOnlyManifest;
  KlvMetadata?: CmfcKlvMetadata;
  ManifestMetadataSignaling?: CmfcManifestMetadataSignaling;
  Scte35Esam?: CmfcScte35Esam;
  Scte35Source?: CmfcScte35Source;
  TimedMetadata?: CmfcTimedMetadata;
  TimedMetadataBoxVersion?: CmfcTimedMetadataBoxVersion;
  TimedMetadataSchemeIdUri?: string;
  TimedMetadataValue?: string;
}
export type CmfcTimedMetadata = "PASSTHROUGH" | "NONE";
export type CmfcTimedMetadataBoxVersion = "VERSION_0" | "VERSION_1";
export type Codec =
  | "UNKNOWN"
  | "AAC"
  | "AC3"
  | "EAC3"
  | "FLAC"
  | "MP3"
  | "OPUS"
  | "PCM"
  | "VORBIS"
  | "AV1"
  | "AVC"
  | "HEVC"
  | "MJPEG"
  | "MP4V"
  | "MPEG2"
  | "PRORES"
  | "THEORA"
  | "VP8"
  | "VP9"
  | "C608"
  | "C708"
  | "WEBVTT";
export interface ColorConversion3DLUTSetting {
  FileInput?: string;
  InputColorSpace?: ColorSpace;
  InputMasteringLuminance?: number;
  OutputColorSpace?: ColorSpace;
  OutputMasteringLuminance?: number;
}
export interface ColorCorrector {
  Brightness?: number;
  ClipLimits?: ClipLimits;
  ColorSpaceConversion?: ColorSpaceConversion;
  Contrast?: number;
  Hdr10Metadata?: Hdr10Metadata;
  HdrToSdrToneMapper?: HDRToSDRToneMapper;
  Hue?: number;
  MaxLuminance?: number;
  SampleRangeConversion?: SampleRangeConversion;
  Saturation?: number;
  SdrReferenceWhiteLevel?: number;
}
export type ColorMetadata = "IGNORE" | "INSERT";
export type ColorPrimaries =
  | "ITU_709"
  | "UNSPECIFIED"
  | "RESERVED"
  | "ITU_470M"
  | "ITU_470BG"
  | "SMPTE_170M"
  | "SMPTE_240M"
  | "GENERIC_FILM"
  | "ITU_2020"
  | "SMPTE_428_1"
  | "SMPTE_431_2"
  | "SMPTE_EG_432_1"
  | "IPT"
  | "SMPTE_2067XYZ"
  | "EBU_3213_E"
  | "LAST";
export type ColorSpace =
  | "FOLLOW"
  | "REC_601"
  | "REC_709"
  | "HDR10"
  | "HLG_2020"
  | "P3DCI"
  | "P3D65_SDR"
  | "P3D65_HDR";
export type ColorSpaceConversion =
  | "NONE"
  | "FORCE_601"
  | "FORCE_709"
  | "FORCE_HDR10"
  | "FORCE_HLG_2020"
  | "FORCE_P3DCI"
  | "FORCE_P3D65_SDR"
  | "FORCE_P3D65_HDR";
export type ColorSpaceUsage = "FORCE" | "FALLBACK";
export type Commitment = "ONE_YEAR";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export interface Container {
  Duration?: number;
  Format?: Format;
  Tracks?: Array<Track>;
}
export interface ContainerSettings {
  CmfcSettings?: CmfcSettings;
  Container?: ContainerType;
  F4vSettings?: F4vSettings;
  M2tsSettings?: M2tsSettings;
  M3u8Settings?: M3u8Settings;
  MovSettings?: MovSettings;
  Mp4Settings?: Mp4Settings;
  MpdSettings?: MpdSettings;
  MxfSettings?: MxfSettings;
}
export type ContainerType =
  | "F4V"
  | "GIF"
  | "ISMV"
  | "M2TS"
  | "M3U8"
  | "CMFC"
  | "MOV"
  | "MP4"
  | "MPD"
  | "MXF"
  | "OGG"
  | "WEBM"
  | "RAW"
  | "Y4M";
export type CopyProtectionAction = "PASSTHROUGH" | "STRIP";
export interface CreateJobRequest {
  AccelerationSettings?: AccelerationSettings;
  BillingTagsSource?: BillingTagsSource;
  ClientRequestToken?: string;
  HopDestinations?: Array<HopDestination>;
  JobEngineVersion?: string;
  JobTemplate?: string;
  Priority?: number;
  Queue?: string;
  Role: string;
  Settings: JobSettings;
  SimulateReservedQueue?: SimulateReservedQueue;
  StatusUpdateInterval?: StatusUpdateInterval;
  Tags?: Record<string, string>;
  UserMetadata?: Record<string, string>;
}
export interface CreateJobResponse {
  Job?: Job;
}
export interface CreateJobTemplateRequest {
  AccelerationSettings?: AccelerationSettings;
  Category?: string;
  Description?: string;
  HopDestinations?: Array<HopDestination>;
  Name: string;
  Priority?: number;
  Queue?: string;
  Settings: JobTemplateSettings;
  StatusUpdateInterval?: StatusUpdateInterval;
  Tags?: Record<string, string>;
}
export interface CreateJobTemplateResponse {
  JobTemplate?: JobTemplate;
}
export interface CreatePresetRequest {
  Category?: string;
  Description?: string;
  Name: string;
  Settings: PresetSettings;
  Tags?: Record<string, string>;
}
export interface CreatePresetResponse {
  Preset?: Preset;
}
export interface CreateQueueRequest {
  ConcurrentJobs?: number;
  Description?: string;
  Name: string;
  PricingPlan?: PricingPlan;
  ReservationPlanSettings?: ReservationPlanSettings;
  Status?: QueueStatus;
  Tags?: Record<string, string>;
}
export interface CreateQueueResponse {
  Queue?: Queue;
}
export interface DashAdditionalManifest {
  ManifestNameModifier?: string;
  SelectedOutputs?: Array<string>;
}
export interface DashIsoEncryptionSettings {
  PlaybackDeviceCompatibility?: DashIsoPlaybackDeviceCompatibility;
  SpekeKeyProvider?: SpekeKeyProvider;
}
export type DashIsoGroupAudioChannelConfigSchemeIdUri =
  | "MPEG_CHANNEL_CONFIGURATION"
  | "DOLBY_CHANNEL_CONFIGURATION";
export interface DashIsoGroupSettings {
  AdditionalManifests?: Array<DashAdditionalManifest>;
  AudioChannelConfigSchemeIdUri?: DashIsoGroupAudioChannelConfigSchemeIdUri;
  BaseUrl?: string;
  DashIFrameTrickPlayNameModifier?: string;
  DashManifestStyle?: DashManifestStyle;
  Destination?: string;
  DestinationSettings?: DestinationSettings;
  Encryption?: DashIsoEncryptionSettings;
  FragmentLength?: number;
  HbbtvCompliance?: DashIsoHbbtvCompliance;
  ImageBasedTrickPlay?: DashIsoImageBasedTrickPlay;
  ImageBasedTrickPlaySettings?: DashIsoImageBasedTrickPlaySettings;
  MinBufferTime?: number;
  MinFinalSegmentLength?: number;
  MpdManifestBandwidthType?: DashIsoMpdManifestBandwidthType;
  MpdProfile?: DashIsoMpdProfile;
  PtsOffsetHandlingForBFrames?: DashIsoPtsOffsetHandlingForBFrames;
  SegmentControl?: DashIsoSegmentControl;
  SegmentLength?: number;
  SegmentLengthControl?: DashIsoSegmentLengthControl;
  VideoCompositionOffsets?: DashIsoVideoCompositionOffsets;
  WriteSegmentTimelineInRepresentation?: DashIsoWriteSegmentTimelineInRepresentation;
}
export type DashIsoHbbtvCompliance = "HBBTV_1_5" | "NONE";
export type DashIsoImageBasedTrickPlay =
  | "NONE"
  | "THUMBNAIL"
  | "THUMBNAIL_AND_FULLFRAME"
  | "ADVANCED";
export interface DashIsoImageBasedTrickPlaySettings {
  IntervalCadence?: DashIsoIntervalCadence;
  ThumbnailHeight?: number;
  ThumbnailInterval?: number;
  ThumbnailWidth?: number;
  TileHeight?: number;
  TileWidth?: number;
}
export type DashIsoIntervalCadence = "FOLLOW_IFRAME" | "FOLLOW_CUSTOM";
export type DashIsoMpdManifestBandwidthType = "AVERAGE" | "MAX";
export type DashIsoMpdProfile = "MAIN_PROFILE" | "ON_DEMAND_PROFILE";
export type DashIsoPlaybackDeviceCompatibility = "CENC_V1" | "UNENCRYPTED_SEI";
export type DashIsoPtsOffsetHandlingForBFrames =
  | "ZERO_BASED"
  | "MATCH_INITIAL_PTS";
export type DashIsoSegmentControl = "SINGLE_FILE" | "SEGMENTED_FILES";
export type DashIsoSegmentLengthControl = "EXACT" | "GOP_MULTIPLE" | "MATCH";
export type DashIsoVideoCompositionOffsets = "SIGNED" | "UNSIGNED";
export type DashIsoWriteSegmentTimelineInRepresentation =
  | "ENABLED"
  | "DISABLED";
export type DashManifestStyle = "BASIC" | "COMPACT" | "DISTINCT";
export interface DataProperties {
  LanguageCode?: string;
}
export type DecryptionMode = "AES_CTR" | "AES_CBC" | "AES_GCM";
export type DeinterlaceAlgorithm =
  | "INTERPOLATE"
  | "INTERPOLATE_TICKER"
  | "BLEND"
  | "BLEND_TICKER"
  | "LINEAR_INTERPOLATION";
export interface Deinterlacer {
  Algorithm?: DeinterlaceAlgorithm;
  Control?: DeinterlacerControl;
  Mode?: DeinterlacerMode;
}
export type DeinterlacerControl = "FORCE_ALL_FRAMES" | "NORMAL";
export type DeinterlacerMode = "DEINTERLACE" | "INVERSE_TELECINE" | "ADAPTIVE";
export interface DeleteJobTemplateRequest {
  Name: string;
}
export interface DeleteJobTemplateResponse {}
export interface DeletePolicyRequest {}
export interface DeletePolicyResponse {}
export interface DeletePresetRequest {
  Name: string;
}
export interface DeletePresetResponse {}
export interface DeleteQueueRequest {
  Name: string;
}
export interface DeleteQueueResponse {}
export type DescribeEndpointsMode = "DEFAULT" | "GET_ONLY";
export interface DescribeEndpointsRequest {
  MaxResults?: number;
  Mode?: DescribeEndpointsMode;
  NextToken?: string;
}
export interface DescribeEndpointsResponse {
  Endpoints?: Array<Endpoint>;
  NextToken?: string;
}
export interface DestinationSettings {
  S3Settings?: S3DestinationSettings;
}
export interface DisassociateCertificateRequest {
  Arn: string;
}
export interface DisassociateCertificateResponse {}
export interface DolbyVision {
  L6Metadata?: DolbyVisionLevel6Metadata;
  L6Mode?: DolbyVisionLevel6Mode;
  Mapping?: DolbyVisionMapping;
  Profile?: DolbyVisionProfile;
}
export interface DolbyVisionLevel6Metadata {
  MaxCll?: number;
  MaxFall?: number;
}
export type DolbyVisionLevel6Mode = "PASSTHROUGH" | "RECALCULATE" | "SPECIFY";
export type DolbyVisionMapping = "HDR10_NOMAP" | "HDR10_1000";
export type DolbyVisionProfile = "PROFILE_5" | "PROFILE_8_1";
export type DropFrameTimecode = "DISABLED" | "ENABLED";
export type DvbddsHandling =
  | "NONE"
  | "SPECIFIED"
  | "NO_DISPLAY_WINDOW"
  | "SPECIFIED_OPTIMAL";
export interface DvbNitSettings {
  NetworkId?: number;
  NetworkName?: string;
  NitInterval?: number;
}
export interface DvbSdtSettings {
  OutputSdt?: OutputSdt;
  SdtInterval?: number;
  ServiceName?: string;
  ServiceProviderName?: string;
}
export interface DvbSubDestinationSettings {
  Alignment?: DvbSubtitleAlignment;
  ApplyFontColor?: DvbSubtitleApplyFontColor;
  BackgroundColor?: DvbSubtitleBackgroundColor;
  BackgroundOpacity?: number;
  DdsHandling?: DvbddsHandling;
  DdsXCoordinate?: number;
  DdsYCoordinate?: number;
  FallbackFont?: DvbSubSubtitleFallbackFont;
  FontColor?: DvbSubtitleFontColor;
  FontFileBold?: string;
  FontFileBoldItalic?: string;
  FontFileItalic?: string;
  FontFileRegular?: string;
  FontOpacity?: number;
  FontResolution?: number;
  FontScript?: FontScript;
  FontSize?: number;
  Height?: number;
  HexFontColor?: string;
  OutlineColor?: DvbSubtitleOutlineColor;
  OutlineSize?: number;
  ShadowColor?: DvbSubtitleShadowColor;
  ShadowOpacity?: number;
  ShadowXOffset?: number;
  ShadowYOffset?: number;
  StylePassthrough?: DvbSubtitleStylePassthrough;
  SubtitlingType?: DvbSubtitlingType;
  TeletextSpacing?: DvbSubtitleTeletextSpacing;
  Width?: number;
  XPosition?: number;
  YPosition?: number;
}
export interface DvbSubSourceSettings {
  Pid?: number;
}
export type DvbSubSubtitleFallbackFont =
  | "BEST_MATCH"
  | "MONOSPACED_SANSSERIF"
  | "MONOSPACED_SERIF"
  | "PROPORTIONAL_SANSSERIF"
  | "PROPORTIONAL_SERIF";
export type DvbSubtitleAlignment = "CENTERED" | "LEFT" | "AUTO";
export type DvbSubtitleApplyFontColor = "WHITE_TEXT_ONLY" | "ALL_TEXT";
export type DvbSubtitleBackgroundColor = "NONE" | "BLACK" | "WHITE" | "AUTO";
export type DvbSubtitleFontColor =
  | "WHITE"
  | "BLACK"
  | "YELLOW"
  | "RED"
  | "GREEN"
  | "BLUE"
  | "HEX"
  | "AUTO";
export type DvbSubtitleOutlineColor =
  | "BLACK"
  | "WHITE"
  | "YELLOW"
  | "RED"
  | "GREEN"
  | "BLUE"
  | "AUTO";
export type DvbSubtitleShadowColor = "NONE" | "BLACK" | "WHITE" | "AUTO";
export type DvbSubtitleStylePassthrough = "ENABLED" | "DISABLED";
export type DvbSubtitleTeletextSpacing = "FIXED_GRID" | "PROPORTIONAL" | "AUTO";
export type DvbSubtitlingType = "HEARING_IMPAIRED" | "STANDARD";
export interface DvbTdtSettings {
  TdtInterval?: number;
}
export interface DynamicAudioSelector {
  AudioDurationCorrection?: AudioDurationCorrection;
  ExternalAudioFileInput?: string;
  LanguageCode?: LanguageCode;
  Offset?: number;
  SelectorType?: DynamicAudioSelectorType;
}
export type DynamicAudioSelectorType = "ALL_TRACKS" | "LANGUAGE_CODE";
export type Eac3AtmosBitstreamMode = "COMPLETE_MAIN";
export type Eac3AtmosCodingMode =
  | "CODING_MODE_AUTO"
  | "CODING_MODE_5_1_4"
  | "CODING_MODE_7_1_4"
  | "CODING_MODE_9_1_6";
export type Eac3AtmosDialogueIntelligence = "ENABLED" | "DISABLED";
export type Eac3AtmosDownmixControl = "SPECIFIED" | "INITIALIZE_FROM_SOURCE";
export type Eac3AtmosDynamicRangeCompressionLine =
  | "NONE"
  | "FILM_STANDARD"
  | "FILM_LIGHT"
  | "MUSIC_STANDARD"
  | "MUSIC_LIGHT"
  | "SPEECH";
export type Eac3AtmosDynamicRangeCompressionRf =
  | "NONE"
  | "FILM_STANDARD"
  | "FILM_LIGHT"
  | "MUSIC_STANDARD"
  | "MUSIC_LIGHT"
  | "SPEECH";
export type Eac3AtmosDynamicRangeControl =
  | "SPECIFIED"
  | "INITIALIZE_FROM_SOURCE";
export type Eac3AtmosMeteringMode =
  | "LEQ_A"
  | "ITU_BS_1770_1"
  | "ITU_BS_1770_2"
  | "ITU_BS_1770_3"
  | "ITU_BS_1770_4";
export interface Eac3AtmosSettings {
  Bitrate?: number;
  BitstreamMode?: Eac3AtmosBitstreamMode;
  CodingMode?: Eac3AtmosCodingMode;
  DialogueIntelligence?: Eac3AtmosDialogueIntelligence;
  DownmixControl?: Eac3AtmosDownmixControl;
  DynamicRangeCompressionLine?: Eac3AtmosDynamicRangeCompressionLine;
  DynamicRangeCompressionRf?: Eac3AtmosDynamicRangeCompressionRf;
  DynamicRangeControl?: Eac3AtmosDynamicRangeControl;
  LoRoCenterMixLevel?: number;
  LoRoSurroundMixLevel?: number;
  LtRtCenterMixLevel?: number;
  LtRtSurroundMixLevel?: number;
  MeteringMode?: Eac3AtmosMeteringMode;
  SampleRate?: number;
  SpeechThreshold?: number;
  StereoDownmix?: Eac3AtmosStereoDownmix;
  SurroundExMode?: Eac3AtmosSurroundExMode;
}
export type Eac3AtmosStereoDownmix =
  | "NOT_INDICATED"
  | "STEREO"
  | "SURROUND"
  | "DPL2";
export type Eac3AtmosSurroundExMode = "NOT_INDICATED" | "ENABLED" | "DISABLED";
export type Eac3AttenuationControl = "ATTENUATE_3_DB" | "NONE";
export type Eac3BitstreamMode =
  | "COMPLETE_MAIN"
  | "COMMENTARY"
  | "EMERGENCY"
  | "HEARING_IMPAIRED"
  | "VISUALLY_IMPAIRED";
export type Eac3CodingMode =
  | "CODING_MODE_1_0"
  | "CODING_MODE_2_0"
  | "CODING_MODE_3_2";
export type Eac3DcFilter = "ENABLED" | "DISABLED";
export type Eac3DynamicRangeCompressionLine =
  | "NONE"
  | "FILM_STANDARD"
  | "FILM_LIGHT"
  | "MUSIC_STANDARD"
  | "MUSIC_LIGHT"
  | "SPEECH";
export type Eac3DynamicRangeCompressionRf =
  | "NONE"
  | "FILM_STANDARD"
  | "FILM_LIGHT"
  | "MUSIC_STANDARD"
  | "MUSIC_LIGHT"
  | "SPEECH";
export type Eac3LfeControl = "LFE" | "NO_LFE";
export type Eac3LfeFilter = "ENABLED" | "DISABLED";
export type Eac3MetadataControl = "FOLLOW_INPUT" | "USE_CONFIGURED";
export type Eac3PassthroughControl = "WHEN_POSSIBLE" | "NO_PASSTHROUGH";
export type Eac3PhaseControl = "SHIFT_90_DEGREES" | "NO_SHIFT";
export interface Eac3Settings {
  AttenuationControl?: Eac3AttenuationControl;
  Bitrate?: number;
  BitstreamMode?: Eac3BitstreamMode;
  CodingMode?: Eac3CodingMode;
  DcFilter?: Eac3DcFilter;
  Dialnorm?: number;
  DynamicRangeCompressionLine?: Eac3DynamicRangeCompressionLine;
  DynamicRangeCompressionRf?: Eac3DynamicRangeCompressionRf;
  LfeControl?: Eac3LfeControl;
  LfeFilter?: Eac3LfeFilter;
  LoRoCenterMixLevel?: number;
  LoRoSurroundMixLevel?: number;
  LtRtCenterMixLevel?: number;
  LtRtSurroundMixLevel?: number;
  MetadataControl?: Eac3MetadataControl;
  PassthroughControl?: Eac3PassthroughControl;
  PhaseControl?: Eac3PhaseControl;
  SampleRate?: number;
  StereoDownmix?: Eac3StereoDownmix;
  SurroundExMode?: Eac3SurroundExMode;
  SurroundMode?: Eac3SurroundMode;
}
export type Eac3StereoDownmix = "NOT_INDICATED" | "LO_RO" | "LT_RT" | "DPL2";
export type Eac3SurroundExMode = "NOT_INDICATED" | "ENABLED" | "DISABLED";
export type Eac3SurroundMode = "NOT_INDICATED" | "ENABLED" | "DISABLED";
export type EmbeddedConvert608To708 = "UPCONVERT" | "DISABLED";
export interface EmbeddedDestinationSettings {
  Destination608ChannelNumber?: number;
  Destination708ServiceNumber?: number;
}
export interface EmbeddedSourceSettings {
  Convert608To708?: EmbeddedConvert608To708;
  Source608ChannelNumber?: number;
  Source608TrackNumber?: number;
  TerminateCaptions?: EmbeddedTerminateCaptions;
}
export type EmbeddedTerminateCaptions = "END_OF_INPUT" | "DISABLED";
export type EmbeddedTimecodeOverride = "NONE" | "USE_MDPM";
export interface EncryptionContractConfiguration {
  SpekeAudioPreset?: PresetSpeke20Audio;
  SpekeVideoPreset?: PresetSpeke20Video;
}
export interface Endpoint {
  Url?: string;
}
export interface EsamManifestConfirmConditionNotification {
  MccXml?: string;
}
export interface EsamSettings {
  ManifestConfirmConditionNotification?: EsamManifestConfirmConditionNotification;
  ResponseSignalPreroll?: number;
  SignalProcessingNotification?: EsamSignalProcessingNotification;
}
export interface EsamSignalProcessingNotification {
  SccXml?: string;
}
export interface ExtendedDataServices {
  CopyProtectionAction?: CopyProtectionAction;
  VchipAction?: VchipAction;
}
export type F4vMoovPlacement = "PROGRESSIVE_DOWNLOAD" | "NORMAL";
export interface F4vSettings {
  MoovPlacement?: F4vMoovPlacement;
}
export interface FileGroupSettings {
  Destination?: string;
  DestinationSettings?: DestinationSettings;
}
export type FileSourceConvert608To708 = "UPCONVERT" | "DISABLED";
export interface FileSourceSettings {
  ByteRateLimit?: CaptionSourceByteRateLimit;
  Convert608To708?: FileSourceConvert608To708;
  ConvertPaintToPop?: CaptionSourceConvertPaintOnToPopOn;
  Framerate?: CaptionSourceFramerate;
  SourceFile?: string;
  TimeDelta?: number;
  TimeDeltaUnits?: FileSourceTimeDeltaUnits;
  UpconvertSTLToTeletext?: CaptionSourceUpconvertSTLToTeletext;
}
export type FileSourceTimeDeltaUnits = "SECONDS" | "MILLISECONDS";
export interface FlacSettings {
  BitDepth?: number;
  Channels?: number;
  SampleRate?: number;
}
export type FontScript = "AUTOMATIC" | "HANS" | "HANT";
export declare class ForbiddenException extends EffectData.TaggedError(
  "ForbiddenException",
)<{
  readonly Message?: string;
}> {}
export interface ForceIncludeRenditionSize {
  Height?: number;
  Width?: number;
}
export type Format = "mp4" | "quicktime" | "matroska" | "webm";
export interface FrameCaptureSettings {
  FramerateDenominator?: number;
  FramerateNumerator?: number;
  MaxCaptures?: number;
  Quality?: number;
}
export type FrameMetricType =
  | "PSNR"
  | "SSIM"
  | "MS_SSIM"
  | "PSNR_HVS"
  | "VMAF"
  | "QVBR";
export interface FrameRate {
  Denominator?: number;
  Numerator?: number;
}
export interface GetJobRequest {
  Id: string;
}
export interface GetJobResponse {
  Job?: Job;
}
export interface GetJobTemplateRequest {
  Name: string;
}
export interface GetJobTemplateResponse {
  JobTemplate?: JobTemplate;
}
export interface GetPolicyRequest {}
export interface GetPolicyResponse {
  Policy?: Policy;
}
export interface GetPresetRequest {
  Name: string;
}
export interface GetPresetResponse {
  Preset?: Preset;
}
export interface GetQueueRequest {
  Name: string;
}
export interface GetQueueResponse {
  Queue?: Queue;
}
export type GifFramerateControl = "INITIALIZE_FROM_SOURCE" | "SPECIFIED";
export type GifFramerateConversionAlgorithm = "DUPLICATE_DROP" | "INTERPOLATE";
export interface GifSettings {
  FramerateControl?: GifFramerateControl;
  FramerateConversionAlgorithm?: GifFramerateConversionAlgorithm;
  FramerateDenominator?: number;
  FramerateNumerator?: number;
}
export type H264AdaptiveQuantization =
  | "OFF"
  | "AUTO"
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "HIGHER"
  | "MAX";
export type H264CodecLevel =
  | "AUTO"
  | "LEVEL_1"
  | "LEVEL_1_1"
  | "LEVEL_1_2"
  | "LEVEL_1_3"
  | "LEVEL_2"
  | "LEVEL_2_1"
  | "LEVEL_2_2"
  | "LEVEL_3"
  | "LEVEL_3_1"
  | "LEVEL_3_2"
  | "LEVEL_4"
  | "LEVEL_4_1"
  | "LEVEL_4_2"
  | "LEVEL_5"
  | "LEVEL_5_1"
  | "LEVEL_5_2";
export type H264CodecProfile =
  | "BASELINE"
  | "HIGH"
  | "HIGH_10BIT"
  | "HIGH_422"
  | "HIGH_422_10BIT"
  | "MAIN";
export type H264DynamicSubGop = "ADAPTIVE" | "STATIC";
export type H264EndOfStreamMarkers = "INCLUDE" | "SUPPRESS";
export type H264EntropyEncoding = "CABAC" | "CAVLC";
export type H264FieldEncoding = "PAFF" | "FORCE_FIELD" | "MBAFF";
export type H264FlickerAdaptiveQuantization = "DISABLED" | "ENABLED";
export type H264FramerateControl = "INITIALIZE_FROM_SOURCE" | "SPECIFIED";
export type H264FramerateConversionAlgorithm =
  | "DUPLICATE_DROP"
  | "INTERPOLATE"
  | "FRAMEFORMER"
  | "MAINTAIN_FRAME_COUNT";
export type H264GopBReference = "DISABLED" | "ENABLED";
export type H264GopSizeUnits = "FRAMES" | "SECONDS" | "AUTO";
export type H264InterlaceMode =
  | "PROGRESSIVE"
  | "TOP_FIELD"
  | "BOTTOM_FIELD"
  | "FOLLOW_TOP_FIELD"
  | "FOLLOW_BOTTOM_FIELD";
export type H264ParControl = "INITIALIZE_FROM_SOURCE" | "SPECIFIED";
export type H264QualityTuningLevel =
  | "SINGLE_PASS"
  | "SINGLE_PASS_HQ"
  | "MULTI_PASS_HQ";
export interface H264QvbrSettings {
  MaxAverageBitrate?: number;
  QvbrQualityLevel?: number;
  QvbrQualityLevelFineTune?: number;
}
export type H264RateControlMode = "VBR" | "CBR" | "QVBR";
export type H264RepeatPps = "DISABLED" | "ENABLED";
export type H264SaliencyAwareEncoding = "DISABLED" | "PREFERRED";
export type H264ScanTypeConversionMode = "INTERLACED" | "INTERLACED_OPTIMIZE";
export type H264SceneChangeDetect =
  | "DISABLED"
  | "ENABLED"
  | "TRANSITION_DETECTION";
export interface H264Settings {
  AdaptiveQuantization?: H264AdaptiveQuantization;
  BandwidthReductionFilter?: BandwidthReductionFilter;
  Bitrate?: number;
  CodecLevel?: H264CodecLevel;
  CodecProfile?: H264CodecProfile;
  DynamicSubGop?: H264DynamicSubGop;
  EndOfStreamMarkers?: H264EndOfStreamMarkers;
  EntropyEncoding?: H264EntropyEncoding;
  FieldEncoding?: H264FieldEncoding;
  FlickerAdaptiveQuantization?: H264FlickerAdaptiveQuantization;
  FramerateControl?: H264FramerateControl;
  FramerateConversionAlgorithm?: H264FramerateConversionAlgorithm;
  FramerateDenominator?: number;
  FramerateNumerator?: number;
  GopBReference?: H264GopBReference;
  GopClosedCadence?: number;
  GopSize?: number;
  GopSizeUnits?: H264GopSizeUnits;
  HrdBufferFinalFillPercentage?: number;
  HrdBufferInitialFillPercentage?: number;
  HrdBufferSize?: number;
  InterlaceMode?: H264InterlaceMode;
  MaxBitrate?: number;
  MinIInterval?: number;
  NumberBFramesBetweenReferenceFrames?: number;
  NumberReferenceFrames?: number;
  ParControl?: H264ParControl;
  ParDenominator?: number;
  ParNumerator?: number;
  PerFrameMetrics?: Array<FrameMetricType>;
  QualityTuningLevel?: H264QualityTuningLevel;
  QvbrSettings?: H264QvbrSettings;
  RateControlMode?: H264RateControlMode;
  RepeatPps?: H264RepeatPps;
  SaliencyAwareEncoding?: H264SaliencyAwareEncoding;
  ScanTypeConversionMode?: H264ScanTypeConversionMode;
  SceneChangeDetect?: H264SceneChangeDetect;
  Slices?: number;
  SlowPal?: H264SlowPal;
  Softness?: number;
  SpatialAdaptiveQuantization?: H264SpatialAdaptiveQuantization;
  Syntax?: H264Syntax;
  Telecine?: H264Telecine;
  TemporalAdaptiveQuantization?: H264TemporalAdaptiveQuantization;
  UnregisteredSeiTimecode?: H264UnregisteredSeiTimecode;
  WriteMp4PackagingType?: H264WriteMp4PackagingType;
}
export type H264SlowPal = "DISABLED" | "ENABLED";
export type H264SpatialAdaptiveQuantization = "DISABLED" | "ENABLED";
export type H264Syntax = "DEFAULT" | "RP2027";
export type H264Telecine = "NONE" | "SOFT" | "HARD";
export type H264TemporalAdaptiveQuantization = "DISABLED" | "ENABLED";
export type H264UnregisteredSeiTimecode = "DISABLED" | "ENABLED";
export type H264WriteMp4PackagingType = "AVC1" | "AVC3";
export type H265AdaptiveQuantization =
  | "OFF"
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "HIGHER"
  | "MAX"
  | "AUTO";
export type H265AlternateTransferFunctionSei = "DISABLED" | "ENABLED";
export type H265CodecLevel =
  | "AUTO"
  | "LEVEL_1"
  | "LEVEL_2"
  | "LEVEL_2_1"
  | "LEVEL_3"
  | "LEVEL_3_1"
  | "LEVEL_4"
  | "LEVEL_4_1"
  | "LEVEL_5"
  | "LEVEL_5_1"
  | "LEVEL_5_2"
  | "LEVEL_6"
  | "LEVEL_6_1"
  | "LEVEL_6_2";
export type H265CodecProfile =
  | "MAIN_MAIN"
  | "MAIN_HIGH"
  | "MAIN10_MAIN"
  | "MAIN10_HIGH"
  | "MAIN_422_8BIT_MAIN"
  | "MAIN_422_8BIT_HIGH"
  | "MAIN_422_10BIT_MAIN"
  | "MAIN_422_10BIT_HIGH";
export type H265Deblocking = "ENABLED" | "DISABLED";
export type H265DynamicSubGop = "ADAPTIVE" | "STATIC";
export type H265EndOfStreamMarkers = "INCLUDE" | "SUPPRESS";
export type H265FlickerAdaptiveQuantization = "DISABLED" | "ENABLED";
export type H265FramerateControl = "INITIALIZE_FROM_SOURCE" | "SPECIFIED";
export type H265FramerateConversionAlgorithm =
  | "DUPLICATE_DROP"
  | "INTERPOLATE"
  | "FRAMEFORMER"
  | "MAINTAIN_FRAME_COUNT";
export type H265GopBReference = "DISABLED" | "ENABLED";
export type H265GopSizeUnits = "FRAMES" | "SECONDS" | "AUTO";
export type H265InterlaceMode =
  | "PROGRESSIVE"
  | "TOP_FIELD"
  | "BOTTOM_FIELD"
  | "FOLLOW_TOP_FIELD"
  | "FOLLOW_BOTTOM_FIELD";
export type H265ParControl = "INITIALIZE_FROM_SOURCE" | "SPECIFIED";
export type H265QualityTuningLevel =
  | "SINGLE_PASS"
  | "SINGLE_PASS_HQ"
  | "MULTI_PASS_HQ";
export interface H265QvbrSettings {
  MaxAverageBitrate?: number;
  QvbrQualityLevel?: number;
  QvbrQualityLevelFineTune?: number;
}
export type H265RateControlMode = "VBR" | "CBR" | "QVBR";
export type H265SampleAdaptiveOffsetFilterMode = "DEFAULT" | "ADAPTIVE" | "OFF";
export type H265ScanTypeConversionMode = "INTERLACED" | "INTERLACED_OPTIMIZE";
export type H265SceneChangeDetect =
  | "DISABLED"
  | "ENABLED"
  | "TRANSITION_DETECTION";
export interface H265Settings {
  AdaptiveQuantization?: H265AdaptiveQuantization;
  AlternateTransferFunctionSei?: H265AlternateTransferFunctionSei;
  BandwidthReductionFilter?: BandwidthReductionFilter;
  Bitrate?: number;
  CodecLevel?: H265CodecLevel;
  CodecProfile?: H265CodecProfile;
  Deblocking?: H265Deblocking;
  DynamicSubGop?: H265DynamicSubGop;
  EndOfStreamMarkers?: H265EndOfStreamMarkers;
  FlickerAdaptiveQuantization?: H265FlickerAdaptiveQuantization;
  FramerateControl?: H265FramerateControl;
  FramerateConversionAlgorithm?: H265FramerateConversionAlgorithm;
  FramerateDenominator?: number;
  FramerateNumerator?: number;
  GopBReference?: H265GopBReference;
  GopClosedCadence?: number;
  GopSize?: number;
  GopSizeUnits?: H265GopSizeUnits;
  HrdBufferFinalFillPercentage?: number;
  HrdBufferInitialFillPercentage?: number;
  HrdBufferSize?: number;
  InterlaceMode?: H265InterlaceMode;
  MaxBitrate?: number;
  MinIInterval?: number;
  NumberBFramesBetweenReferenceFrames?: number;
  NumberReferenceFrames?: number;
  ParControl?: H265ParControl;
  ParDenominator?: number;
  ParNumerator?: number;
  PerFrameMetrics?: Array<FrameMetricType>;
  QualityTuningLevel?: H265QualityTuningLevel;
  QvbrSettings?: H265QvbrSettings;
  RateControlMode?: H265RateControlMode;
  SampleAdaptiveOffsetFilterMode?: H265SampleAdaptiveOffsetFilterMode;
  ScanTypeConversionMode?: H265ScanTypeConversionMode;
  SceneChangeDetect?: H265SceneChangeDetect;
  Slices?: number;
  SlowPal?: H265SlowPal;
  SpatialAdaptiveQuantization?: H265SpatialAdaptiveQuantization;
  Telecine?: H265Telecine;
  TemporalAdaptiveQuantization?: H265TemporalAdaptiveQuantization;
  TemporalIds?: H265TemporalIds;
  Tiles?: H265Tiles;
  UnregisteredSeiTimecode?: H265UnregisteredSeiTimecode;
  WriteMp4PackagingType?: H265WriteMp4PackagingType;
}
export type H265SlowPal = "DISABLED" | "ENABLED";
export type H265SpatialAdaptiveQuantization = "DISABLED" | "ENABLED";
export type H265Telecine = "NONE" | "SOFT" | "HARD";
export type H265TemporalAdaptiveQuantization = "DISABLED" | "ENABLED";
export type H265TemporalIds = "DISABLED" | "ENABLED";
export type H265Tiles = "DISABLED" | "ENABLED";
export type H265UnregisteredSeiTimecode = "DISABLED" | "ENABLED";
export type H265WriteMp4PackagingType = "HVC1" | "HEV1";
export interface Hdr10Metadata {
  BluePrimaryX?: number;
  BluePrimaryY?: number;
  GreenPrimaryX?: number;
  GreenPrimaryY?: number;
  MaxContentLightLevel?: number;
  MaxFrameAverageLightLevel?: number;
  MaxLuminance?: number;
  MinLuminance?: number;
  RedPrimaryX?: number;
  RedPrimaryY?: number;
  WhitePointX?: number;
  WhitePointY?: number;
}
export interface Hdr10Plus {
  MasteringMonitorNits?: number;
  TargetMonitorNits?: number;
}
export type HDRToSDRToneMapper = "PRESERVE_DETAILS" | "VIBRANT";
export interface HlsAdditionalManifest {
  ManifestNameModifier?: string;
  SelectedOutputs?: Array<string>;
}
export type HlsAdMarkers = "ELEMENTAL" | "ELEMENTAL_SCTE35";
export type HlsAudioOnlyContainer = "AUTOMATIC" | "M2TS";
export type HlsAudioOnlyHeader = "INCLUDE" | "EXCLUDE";
export type HlsAudioTrackType =
  | "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT"
  | "ALTERNATE_AUDIO_AUTO_SELECT"
  | "ALTERNATE_AUDIO_NOT_AUTO_SELECT"
  | "AUDIO_ONLY_VARIANT_STREAM";
export interface HlsCaptionLanguageMapping {
  CaptionChannel?: number;
  CustomLanguageCode?: string;
  LanguageCode?: LanguageCode;
  LanguageDescription?: string;
}
export type HlsCaptionLanguageSetting = "INSERT" | "OMIT" | "NONE";
export type HlsCaptionSegmentLengthControl = "LARGE_SEGMENTS" | "MATCH_VIDEO";
export type HlsClientCache = "DISABLED" | "ENABLED";
export type HlsCodecSpecification = "RFC_6381" | "RFC_4281";
export type HlsDescriptiveVideoServiceFlag = "DONT_FLAG" | "FLAG";
export type HlsDirectoryStructure =
  | "SINGLE_DIRECTORY"
  | "SUBDIRECTORY_PER_STREAM";
export interface HlsEncryptionSettings {
  ConstantInitializationVector?: string;
  EncryptionMethod?: HlsEncryptionType;
  InitializationVectorInManifest?: HlsInitializationVectorInManifest;
  OfflineEncrypted?: HlsOfflineEncrypted;
  SpekeKeyProvider?: SpekeKeyProvider;
  StaticKeyProvider?: StaticKeyProvider;
  Type?: HlsKeyProviderType;
}
export type HlsEncryptionType = "AES128" | "SAMPLE_AES";
export interface HlsGroupSettings {
  AdMarkers?: Array<HlsAdMarkers>;
  AdditionalManifests?: Array<HlsAdditionalManifest>;
  AudioOnlyHeader?: HlsAudioOnlyHeader;
  BaseUrl?: string;
  CaptionLanguageMappings?: Array<HlsCaptionLanguageMapping>;
  CaptionLanguageSetting?: HlsCaptionLanguageSetting;
  CaptionSegmentLengthControl?: HlsCaptionSegmentLengthControl;
  ClientCache?: HlsClientCache;
  CodecSpecification?: HlsCodecSpecification;
  Destination?: string;
  DestinationSettings?: DestinationSettings;
  DirectoryStructure?: HlsDirectoryStructure;
  Encryption?: HlsEncryptionSettings;
  ImageBasedTrickPlay?: HlsImageBasedTrickPlay;
  ImageBasedTrickPlaySettings?: HlsImageBasedTrickPlaySettings;
  ManifestCompression?: HlsManifestCompression;
  ManifestDurationFormat?: HlsManifestDurationFormat;
  MinFinalSegmentLength?: number;
  MinSegmentLength?: number;
  OutputSelection?: HlsOutputSelection;
  ProgramDateTime?: HlsProgramDateTime;
  ProgramDateTimePeriod?: number;
  ProgressiveWriteHlsManifest?: HlsProgressiveWriteHlsManifest;
  SegmentControl?: HlsSegmentControl;
  SegmentLength?: number;
  SegmentLengthControl?: HlsSegmentLengthControl;
  SegmentsPerSubdirectory?: number;
  StreamInfResolution?: HlsStreamInfResolution;
  TargetDurationCompatibilityMode?: HlsTargetDurationCompatibilityMode;
  TimedMetadataId3Frame?: HlsTimedMetadataId3Frame;
  TimedMetadataId3Period?: number;
  TimestampDeltaMilliseconds?: number;
}
export type HlsIFrameOnlyManifest = "INCLUDE" | "EXCLUDE";
export type HlsImageBasedTrickPlay =
  | "NONE"
  | "THUMBNAIL"
  | "THUMBNAIL_AND_FULLFRAME"
  | "ADVANCED";
export interface HlsImageBasedTrickPlaySettings {
  IntervalCadence?: HlsIntervalCadence;
  ThumbnailHeight?: number;
  ThumbnailInterval?: number;
  ThumbnailWidth?: number;
  TileHeight?: number;
  TileWidth?: number;
}
export type HlsInitializationVectorInManifest = "INCLUDE" | "EXCLUDE";
export type HlsIntervalCadence = "FOLLOW_IFRAME" | "FOLLOW_CUSTOM";
export type HlsKeyProviderType = "SPEKE" | "STATIC_KEY";
export type HlsManifestCompression = "GZIP" | "NONE";
export type HlsManifestDurationFormat = "FLOATING_POINT" | "INTEGER";
export type HlsOfflineEncrypted = "ENABLED" | "DISABLED";
export type HlsOutputSelection = "MANIFESTS_AND_SEGMENTS" | "SEGMENTS_ONLY";
export type HlsProgramDateTime = "INCLUDE" | "EXCLUDE";
export type HlsProgressiveWriteHlsManifest = "ENABLED" | "DISABLED";
export interface HlsRenditionGroupSettings {
  RenditionGroupId?: string;
  RenditionLanguageCode?: LanguageCode;
  RenditionName?: string;
}
export type HlsSegmentControl = "SINGLE_FILE" | "SEGMENTED_FILES";
export type HlsSegmentLengthControl = "EXACT" | "GOP_MULTIPLE" | "MATCH";
export interface HlsSettings {
  AudioGroupId?: string;
  AudioOnlyContainer?: HlsAudioOnlyContainer;
  AudioRenditionSets?: string;
  AudioTrackType?: HlsAudioTrackType;
  DescriptiveVideoServiceFlag?: HlsDescriptiveVideoServiceFlag;
  IFrameOnlyManifest?: HlsIFrameOnlyManifest;
  SegmentModifier?: string;
}
export type HlsStreamInfResolution = "INCLUDE" | "EXCLUDE";
export type HlsTargetDurationCompatibilityMode = "LEGACY" | "SPEC_COMPLIANT";
export type HlsTimedMetadataId3Frame = "NONE" | "PRIV" | "TDRL";
export interface HopDestination {
  Priority?: number;
  Queue?: string;
  WaitMinutes?: number;
}
export interface Id3Insertion {
  Id3?: string;
  Timecode?: string;
}
export interface ImageInserter {
  InsertableImages?: Array<InsertableImage>;
  SdrReferenceWhiteLevel?: number;
}
export type ImscAccessibilitySubs = "DISABLED" | "ENABLED";
export interface ImscDestinationSettings {
  Accessibility?: ImscAccessibilitySubs;
  StylePassthrough?: ImscStylePassthrough;
}
export type ImscStylePassthrough = "ENABLED" | "DISABLED";
export interface Input {
  AdvancedInputFilter?: AdvancedInputFilter;
  AdvancedInputFilterSettings?: AdvancedInputFilterSettings;
  AudioSelectorGroups?: Record<string, AudioSelectorGroup>;
  AudioSelectors?: Record<string, AudioSelector>;
  CaptionSelectors?: Record<string, CaptionSelector>;
  Crop?: Rectangle;
  DeblockFilter?: InputDeblockFilter;
  DecryptionSettings?: InputDecryptionSettings;
  DenoiseFilter?: InputDenoiseFilter;
  DolbyVisionMetadataXml?: string;
  DynamicAudioSelectors?: Record<string, DynamicAudioSelector>;
  FileInput?: string;
  FilterEnable?: InputFilterEnable;
  FilterStrength?: number;
  ImageInserter?: ImageInserter;
  InputClippings?: Array<InputClipping>;
  InputScanType?: InputScanType;
  Position?: Rectangle;
  ProgramNumber?: number;
  PsiControl?: InputPsiControl;
  SupplementalImps?: Array<string>;
  TimecodeSource?: InputTimecodeSource;
  TimecodeStart?: string;
  VideoGenerator?: InputVideoGenerator;
  VideoOverlays?: Array<VideoOverlay>;
  VideoSelector?: VideoSelector;
}
export interface InputClipping {
  EndTimecode?: string;
  StartTimecode?: string;
}
export type InputDeblockFilter = "ENABLED" | "DISABLED";
export interface InputDecryptionSettings {
  DecryptionMode?: DecryptionMode;
  EncryptedDecryptionKey?: string;
  InitializationVector?: string;
  KmsKeyRegion?: string;
}
export type InputDenoiseFilter = "ENABLED" | "DISABLED";
export type InputFilterEnable = "AUTO" | "DISABLE" | "FORCE";
export type InputPolicy = "ALLOWED" | "DISALLOWED";
export type InputPsiControl = "IGNORE_PSI" | "USE_PSI";
export type InputRotate =
  | "DEGREE_0"
  | "DEGREES_90"
  | "DEGREES_180"
  | "DEGREES_270"
  | "AUTO";
export type InputSampleRange = "FOLLOW" | "FULL_RANGE" | "LIMITED_RANGE";
export type InputScanType = "AUTO" | "PSF";
export interface InputTemplate {
  AdvancedInputFilter?: AdvancedInputFilter;
  AdvancedInputFilterSettings?: AdvancedInputFilterSettings;
  AudioSelectorGroups?: Record<string, AudioSelectorGroup>;
  AudioSelectors?: Record<string, AudioSelector>;
  CaptionSelectors?: Record<string, CaptionSelector>;
  Crop?: Rectangle;
  DeblockFilter?: InputDeblockFilter;
  DenoiseFilter?: InputDenoiseFilter;
  DolbyVisionMetadataXml?: string;
  DynamicAudioSelectors?: Record<string, DynamicAudioSelector>;
  FilterEnable?: InputFilterEnable;
  FilterStrength?: number;
  ImageInserter?: ImageInserter;
  InputClippings?: Array<InputClipping>;
  InputScanType?: InputScanType;
  Position?: Rectangle;
  ProgramNumber?: number;
  PsiControl?: InputPsiControl;
  TimecodeSource?: InputTimecodeSource;
  TimecodeStart?: string;
  VideoOverlays?: Array<VideoOverlay>;
  VideoSelector?: VideoSelector;
}
export type InputTimecodeSource = "EMBEDDED" | "ZEROBASED" | "SPECIFIEDSTART";
export interface InputVideoGenerator {
  Channels?: number;
  Duration?: number;
  FramerateDenominator?: number;
  FramerateNumerator?: number;
  SampleRate?: number;
}
export interface InsertableImage {
  Duration?: number;
  FadeIn?: number;
  FadeOut?: number;
  Height?: number;
  ImageInserterInput?: string;
  ImageX?: number;
  ImageY?: number;
  Layer?: number;
  Opacity?: number;
  StartTime?: string;
  Width?: number;
}
export declare class InternalServerErrorException extends EffectData.TaggedError(
  "InternalServerErrorException",
)<{
  readonly Message?: string;
}> {}
export interface Job {
  AccelerationSettings?: AccelerationSettings;
  AccelerationStatus?: AccelerationStatus;
  Arn?: string;
  BillingTagsSource?: BillingTagsSource;
  ClientRequestToken?: string;
  CreatedAt?: Date | string;
  CurrentPhase?: JobPhase;
  ErrorCode?: number;
  ErrorMessage?: string;
  HopDestinations?: Array<HopDestination>;
  Id?: string;
  JobEngineVersionRequested?: string;
  JobEngineVersionUsed?: string;
  JobPercentComplete?: number;
  JobTemplate?: string;
  Messages?: JobMessages;
  OutputGroupDetails?: Array<OutputGroupDetail>;
  Priority?: number;
  Queue?: string;
  QueueTransitions?: Array<QueueTransition>;
  RetryCount?: number;
  Role: string;
  Settings: JobSettings;
  SimulateReservedQueue?: SimulateReservedQueue;
  Status?: JobStatus;
  StatusUpdateInterval?: StatusUpdateInterval;
  Timing?: Timing;
  UserMetadata?: Record<string, string>;
  Warnings?: Array<WarningGroup>;
}
export interface JobEngineVersion {
  ExpirationDate?: Date | string;
  Version?: string;
}
export interface JobMessages {
  Info?: Array<string>;
  Warning?: Array<string>;
}
export type JobPhase = "PROBING" | "TRANSCODING" | "UPLOADING";
export interface JobSettings {
  AdAvailOffset?: number;
  AvailBlanking?: AvailBlanking;
  ColorConversion3DLUTSettings?: Array<ColorConversion3DLUTSetting>;
  Esam?: EsamSettings;
  ExtendedDataServices?: ExtendedDataServices;
  FollowSource?: number;
  Inputs?: Array<Input>;
  KantarWatermark?: KantarWatermarkSettings;
  MotionImageInserter?: MotionImageInserter;
  NielsenConfiguration?: NielsenConfiguration;
  NielsenNonLinearWatermark?: NielsenNonLinearWatermarkSettings;
  OutputGroups?: Array<OutputGroup>;
  TimecodeConfig?: TimecodeConfig;
  TimedMetadataInsertion?: TimedMetadataInsertion;
}
export type JobStatus =
  | "SUBMITTED"
  | "PROGRESSING"
  | "COMPLETE"
  | "CANCELED"
  | "ERROR";
export interface JobTemplate {
  AccelerationSettings?: AccelerationSettings;
  Arn?: string;
  Category?: string;
  CreatedAt?: Date | string;
  Description?: string;
  HopDestinations?: Array<HopDestination>;
  LastUpdated?: Date | string;
  Name: string;
  Priority?: number;
  Queue?: string;
  Settings: JobTemplateSettings;
  StatusUpdateInterval?: StatusUpdateInterval;
  Type?: Type;
}
export type JobTemplateListBy = "NAME" | "CREATION_DATE" | "SYSTEM";
export interface JobTemplateSettings {
  AdAvailOffset?: number;
  AvailBlanking?: AvailBlanking;
  ColorConversion3DLUTSettings?: Array<ColorConversion3DLUTSetting>;
  Esam?: EsamSettings;
  ExtendedDataServices?: ExtendedDataServices;
  FollowSource?: number;
  Inputs?: Array<InputTemplate>;
  KantarWatermark?: KantarWatermarkSettings;
  MotionImageInserter?: MotionImageInserter;
  NielsenConfiguration?: NielsenConfiguration;
  NielsenNonLinearWatermark?: NielsenNonLinearWatermarkSettings;
  OutputGroups?: Array<OutputGroup>;
  TimecodeConfig?: TimecodeConfig;
  TimedMetadataInsertion?: TimedMetadataInsertion;
}
export interface KantarWatermarkSettings {
  ChannelName?: string;
  ContentReference?: string;
  CredentialsSecretName?: string;
  FileOffset?: number;
  KantarLicenseId?: number;
  KantarServerUrl?: string;
  LogDestination?: string;
  Metadata3?: string;
  Metadata4?: string;
  Metadata5?: string;
  Metadata6?: string;
  Metadata7?: string;
  Metadata8?: string;
}
export type LanguageCode =
  | "ENG"
  | "SPA"
  | "FRA"
  | "DEU"
  | "GER"
  | "ZHO"
  | "ARA"
  | "HIN"
  | "JPN"
  | "RUS"
  | "POR"
  | "ITA"
  | "URD"
  | "VIE"
  | "KOR"
  | "PAN"
  | "ABK"
  | "AAR"
  | "AFR"
  | "AKA"
  | "SQI"
  | "AMH"
  | "ARG"
  | "HYE"
  | "ASM"
  | "AVA"
  | "AVE"
  | "AYM"
  | "AZE"
  | "BAM"
  | "BAK"
  | "EUS"
  | "BEL"
  | "BEN"
  | "BIH"
  | "BIS"
  | "BOS"
  | "BRE"
  | "BUL"
  | "MYA"
  | "CAT"
  | "KHM"
  | "CHA"
  | "CHE"
  | "NYA"
  | "CHU"
  | "CHV"
  | "COR"
  | "COS"
  | "CRE"
  | "HRV"
  | "CES"
  | "DAN"
  | "DIV"
  | "NLD"
  | "DZO"
  | "ENM"
  | "EPO"
  | "EST"
  | "EWE"
  | "FAO"
  | "FIJ"
  | "FIN"
  | "FRM"
  | "FUL"
  | "GLA"
  | "GLG"
  | "LUG"
  | "KAT"
  | "ELL"
  | "GRN"
  | "GUJ"
  | "HAT"
  | "HAU"
  | "HEB"
  | "HER"
  | "HMO"
  | "HUN"
  | "ISL"
  | "IDO"
  | "IBO"
  | "IND"
  | "INA"
  | "ILE"
  | "IKU"
  | "IPK"
  | "GLE"
  | "JAV"
  | "KAL"
  | "KAN"
  | "KAU"
  | "KAS"
  | "KAZ"
  | "KIK"
  | "KIN"
  | "KIR"
  | "KOM"
  | "KON"
  | "KUA"
  | "KUR"
  | "LAO"
  | "LAT"
  | "LAV"
  | "LIM"
  | "LIN"
  | "LIT"
  | "LUB"
  | "LTZ"
  | "MKD"
  | "MLG"
  | "MSA"
  | "MAL"
  | "MLT"
  | "GLV"
  | "MRI"
  | "MAR"
  | "MAH"
  | "MON"
  | "NAU"
  | "NAV"
  | "NDE"
  | "NBL"
  | "NDO"
  | "NEP"
  | "SME"
  | "NOR"
  | "NOB"
  | "NNO"
  | "OCI"
  | "OJI"
  | "ORI"
  | "ORM"
  | "OSS"
  | "PLI"
  | "FAS"
  | "POL"
  | "PUS"
  | "QUE"
  | "QAA"
  | "RON"
  | "ROH"
  | "RUN"
  | "SMO"
  | "SAG"
  | "SAN"
  | "SRD"
  | "SRB"
  | "SNA"
  | "III"
  | "SND"
  | "SIN"
  | "SLK"
  | "SLV"
  | "SOM"
  | "SOT"
  | "SUN"
  | "SWA"
  | "SSW"
  | "SWE"
  | "TGL"
  | "TAH"
  | "TGK"
  | "TAM"
  | "TAT"
  | "TEL"
  | "THA"
  | "BOD"
  | "TIR"
  | "TON"
  | "TSO"
  | "TSN"
  | "TUR"
  | "TUK"
  | "TWI"
  | "UIG"
  | "UKR"
  | "UZB"
  | "VEN"
  | "VOL"
  | "WLN"
  | "CYM"
  | "FRY"
  | "WOL"
  | "XHO"
  | "YID"
  | "YOR"
  | "ZHA"
  | "ZUL"
  | "ORJ"
  | "QPC"
  | "TNG"
  | "SRP";
export interface ListJobsRequest {
  MaxResults?: number;
  NextToken?: string;
  Order?: Order;
  Queue?: string;
  Status?: JobStatus;
}
export interface ListJobsResponse {
  Jobs?: Array<Job>;
  NextToken?: string;
}
export interface ListJobTemplatesRequest {
  Category?: string;
  ListBy?: JobTemplateListBy;
  MaxResults?: number;
  NextToken?: string;
  Order?: Order;
}
export interface ListJobTemplatesResponse {
  JobTemplates?: Array<JobTemplate>;
  NextToken?: string;
}
export interface ListPresetsRequest {
  Category?: string;
  ListBy?: PresetListBy;
  MaxResults?: number;
  NextToken?: string;
  Order?: Order;
}
export interface ListPresetsResponse {
  NextToken?: string;
  Presets?: Array<Preset>;
}
export interface ListQueuesRequest {
  ListBy?: QueueListBy;
  MaxResults?: number;
  NextToken?: string;
  Order?: Order;
}
export interface ListQueuesResponse {
  NextToken?: string;
  Queues?: Array<Queue>;
  TotalConcurrentJobs?: number;
  UnallocatedConcurrentJobs?: number;
}
export interface ListTagsForResourceRequest {
  Arn: string;
}
export interface ListTagsForResourceResponse {
  ResourceTags?: ResourceTags;
}
export interface ListVersionsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListVersionsResponse {
  NextToken?: string;
  Versions?: Array<JobEngineVersion>;
}
export type M2tsAudioBufferModel = "DVB" | "ATSC";
export type M2tsAudioDuration =
  | "DEFAULT_CODEC_DURATION"
  | "MATCH_VIDEO_DURATION";
export type M2tsBufferModel = "MULTIPLEX" | "NONE";
export type M2tsDataPtsControl = "AUTO" | "ALIGN_TO_VIDEO";
export type M2tsEbpAudioInterval =
  | "VIDEO_AND_FIXED_INTERVALS"
  | "VIDEO_INTERVAL";
export type M2tsEbpPlacement = "VIDEO_AND_AUDIO_PIDS" | "VIDEO_PID";
export type M2tsEsRateInPes = "INCLUDE" | "EXCLUDE";
export type M2tsForceTsVideoEbpOrder = "FORCE" | "DEFAULT";
export type M2tsKlvMetadata = "PASSTHROUGH" | "NONE";
export type M2tsNielsenId3 = "INSERT" | "NONE";
export type M2tsPcrControl = "PCR_EVERY_PES_PACKET" | "CONFIGURED_PCR_PERIOD";
export type M2tsPreventBufferUnderflow = "DISABLED" | "ENABLED";
export type M2tsRateMode = "VBR" | "CBR";
export interface M2tsScte35Esam {
  Scte35EsamPid?: number;
}
export type M2tsScte35Source = "PASSTHROUGH" | "NONE";
export type M2tsSegmentationMarkers =
  | "NONE"
  | "RAI_SEGSTART"
  | "RAI_ADAPT"
  | "PSI_SEGSTART"
  | "EBP"
  | "EBP_LEGACY";
export type M2tsSegmentationStyle = "MAINTAIN_CADENCE" | "RESET_CADENCE";
export interface M2tsSettings {
  AudioBufferModel?: M2tsAudioBufferModel;
  AudioDuration?: M2tsAudioDuration;
  AudioFramesPerPes?: number;
  AudioPids?: Array<number>;
  AudioPtsOffsetDelta?: number;
  Bitrate?: number;
  BufferModel?: M2tsBufferModel;
  DataPTSControl?: M2tsDataPtsControl;
  DvbNitSettings?: DvbNitSettings;
  DvbSdtSettings?: DvbSdtSettings;
  DvbSubPids?: Array<number>;
  DvbTdtSettings?: DvbTdtSettings;
  DvbTeletextPid?: number;
  EbpAudioInterval?: M2tsEbpAudioInterval;
  EbpPlacement?: M2tsEbpPlacement;
  EsRateInPes?: M2tsEsRateInPes;
  ForceTsVideoEbpOrder?: M2tsForceTsVideoEbpOrder;
  FragmentTime?: number;
  KlvMetadata?: M2tsKlvMetadata;
  MaxPcrInterval?: number;
  MinEbpInterval?: number;
  NielsenId3?: M2tsNielsenId3;
  NullPacketBitrate?: number;
  PatInterval?: number;
  PcrControl?: M2tsPcrControl;
  PcrPid?: number;
  PmtInterval?: number;
  PmtPid?: number;
  PreventBufferUnderflow?: M2tsPreventBufferUnderflow;
  PrivateMetadataPid?: number;
  ProgramNumber?: number;
  PtsOffset?: number;
  PtsOffsetMode?: TsPtsOffset;
  RateMode?: M2tsRateMode;
  Scte35Esam?: M2tsScte35Esam;
  Scte35Pid?: number;
  Scte35Source?: M2tsScte35Source;
  SegmentationMarkers?: M2tsSegmentationMarkers;
  SegmentationStyle?: M2tsSegmentationStyle;
  SegmentationTime?: number;
  TimedMetadataPid?: number;
  TransportStreamId?: number;
  VideoPid?: number;
}
export type M3u8AudioDuration =
  | "DEFAULT_CODEC_DURATION"
  | "MATCH_VIDEO_DURATION";
export type M3u8DataPtsControl = "AUTO" | "ALIGN_TO_VIDEO";
export type M3u8NielsenId3 = "INSERT" | "NONE";
export type M3u8PcrControl = "PCR_EVERY_PES_PACKET" | "CONFIGURED_PCR_PERIOD";
export type M3u8Scte35Source = "PASSTHROUGH" | "NONE";
export interface M3u8Settings {
  AudioDuration?: M3u8AudioDuration;
  AudioFramesPerPes?: number;
  AudioPids?: Array<number>;
  AudioPtsOffsetDelta?: number;
  DataPTSControl?: M3u8DataPtsControl;
  MaxPcrInterval?: number;
  NielsenId3?: M3u8NielsenId3;
  PatInterval?: number;
  PcrControl?: M3u8PcrControl;
  PcrPid?: number;
  PmtInterval?: number;
  PmtPid?: number;
  PrivateMetadataPid?: number;
  ProgramNumber?: number;
  PtsOffset?: number;
  PtsOffsetMode?: TsPtsOffset;
  Scte35Pid?: number;
  Scte35Source?: M3u8Scte35Source;
  TimedMetadata?: TimedMetadata;
  TimedMetadataPid?: number;
  TransportStreamId?: number;
  VideoPid?: number;
}
export type MatrixCoefficients =
  | "RGB"
  | "ITU_709"
  | "UNSPECIFIED"
  | "RESERVED"
  | "FCC"
  | "ITU_470BG"
  | "SMPTE_170M"
  | "SMPTE_240M"
  | "YCgCo"
  | "ITU_2020_NCL"
  | "ITU_2020_CL"
  | "SMPTE_2085"
  | "CD_NCL"
  | "CD_CL"
  | "ITU_2100ICtCp"
  | "IPT"
  | "EBU3213"
  | "LAST";
export interface Metadata {
  ETag?: string;
  FileSize?: number;
  LastModified?: Date | string;
  MimeType?: string;
}
export interface MinBottomRenditionSize {
  Height?: number;
  Width?: number;
}
export interface MinTopRenditionSize {
  Height?: number;
  Width?: number;
}
export interface MotionImageInserter {
  Framerate?: MotionImageInsertionFramerate;
  Input?: string;
  InsertionMode?: MotionImageInsertionMode;
  Offset?: MotionImageInsertionOffset;
  Playback?: MotionImagePlayback;
  StartTime?: string;
}
export interface MotionImageInsertionFramerate {
  FramerateDenominator?: number;
  FramerateNumerator?: number;
}
export type MotionImageInsertionMode = "MOV" | "PNG";
export interface MotionImageInsertionOffset {
  ImageX?: number;
  ImageY?: number;
}
export type MotionImagePlayback = "ONCE" | "REPEAT";
export type MovClapAtom = "INCLUDE" | "EXCLUDE";
export type MovCslgAtom = "INCLUDE" | "EXCLUDE";
export type MovMpeg2FourCCControl = "XDCAM" | "MPEG";
export type MovPaddingControl = "OMNEON" | "NONE";
export type MovReference = "SELF_CONTAINED" | "EXTERNAL";
export interface MovSettings {
  ClapAtom?: MovClapAtom;
  CslgAtom?: MovCslgAtom;
  Mpeg2FourCCControl?: MovMpeg2FourCCControl;
  PaddingControl?: MovPaddingControl;
  Reference?: MovReference;
}
export interface Mp2Settings {
  Bitrate?: number;
  Channels?: number;
  SampleRate?: number;
}
export type Mp3RateControlMode = "CBR" | "VBR";
export interface Mp3Settings {
  Bitrate?: number;
  Channels?: number;
  RateControlMode?: Mp3RateControlMode;
  SampleRate?: number;
  VbrQuality?: number;
}
export type Mp4C2paManifest = "INCLUDE" | "EXCLUDE";
export type Mp4CslgAtom = "INCLUDE" | "EXCLUDE";
export type Mp4FreeSpaceBox = "INCLUDE" | "EXCLUDE";
export type Mp4MoovPlacement = "PROGRESSIVE_DOWNLOAD" | "NORMAL";
export interface Mp4Settings {
  AudioDuration?: CmfcAudioDuration;
  C2paManifest?: Mp4C2paManifest;
  CertificateSecret?: string;
  CslgAtom?: Mp4CslgAtom;
  CttsVersion?: number;
  FreeSpaceBox?: Mp4FreeSpaceBox;
  MoovPlacement?: Mp4MoovPlacement;
  Mp4MajorBrand?: string;
  SigningKmsKey?: string;
}
export type MpdAccessibilityCaptionHints = "INCLUDE" | "EXCLUDE";
export type MpdAudioDuration =
  | "DEFAULT_CODEC_DURATION"
  | "MATCH_VIDEO_DURATION";
export type MpdCaptionContainerType = "RAW" | "FRAGMENTED_MP4";
export type MpdKlvMetadata = "NONE" | "PASSTHROUGH";
export type MpdManifestMetadataSignaling = "ENABLED" | "DISABLED";
export type MpdScte35Esam = "INSERT" | "NONE";
export type MpdScte35Source = "PASSTHROUGH" | "NONE";
export interface MpdSettings {
  AccessibilityCaptionHints?: MpdAccessibilityCaptionHints;
  AudioDuration?: MpdAudioDuration;
  CaptionContainerType?: MpdCaptionContainerType;
  KlvMetadata?: MpdKlvMetadata;
  ManifestMetadataSignaling?: MpdManifestMetadataSignaling;
  Scte35Esam?: MpdScte35Esam;
  Scte35Source?: MpdScte35Source;
  TimedMetadata?: MpdTimedMetadata;
  TimedMetadataBoxVersion?: MpdTimedMetadataBoxVersion;
  TimedMetadataSchemeIdUri?: string;
  TimedMetadataValue?: string;
}
export type MpdTimedMetadata = "PASSTHROUGH" | "NONE";
export type MpdTimedMetadataBoxVersion = "VERSION_0" | "VERSION_1";
export type Mpeg2AdaptiveQuantization = "OFF" | "LOW" | "MEDIUM" | "HIGH";
export type Mpeg2CodecLevel = "AUTO" | "LOW" | "MAIN" | "HIGH1440" | "HIGH";
export type Mpeg2CodecProfile = "MAIN" | "PROFILE_422";
export type Mpeg2DynamicSubGop = "ADAPTIVE" | "STATIC";
export type Mpeg2FramerateControl = "INITIALIZE_FROM_SOURCE" | "SPECIFIED";
export type Mpeg2FramerateConversionAlgorithm =
  | "DUPLICATE_DROP"
  | "INTERPOLATE"
  | "FRAMEFORMER"
  | "MAINTAIN_FRAME_COUNT";
export type Mpeg2GopSizeUnits = "FRAMES" | "SECONDS";
export type Mpeg2InterlaceMode =
  | "PROGRESSIVE"
  | "TOP_FIELD"
  | "BOTTOM_FIELD"
  | "FOLLOW_TOP_FIELD"
  | "FOLLOW_BOTTOM_FIELD";
export type Mpeg2IntraDcPrecision =
  | "AUTO"
  | "INTRA_DC_PRECISION_8"
  | "INTRA_DC_PRECISION_9"
  | "INTRA_DC_PRECISION_10"
  | "INTRA_DC_PRECISION_11";
export type Mpeg2ParControl = "INITIALIZE_FROM_SOURCE" | "SPECIFIED";
export type Mpeg2QualityTuningLevel = "SINGLE_PASS" | "MULTI_PASS";
export type Mpeg2RateControlMode = "VBR" | "CBR";
export type Mpeg2ScanTypeConversionMode = "INTERLACED" | "INTERLACED_OPTIMIZE";
export type Mpeg2SceneChangeDetect = "DISABLED" | "ENABLED";
export interface Mpeg2Settings {
  AdaptiveQuantization?: Mpeg2AdaptiveQuantization;
  Bitrate?: number;
  CodecLevel?: Mpeg2CodecLevel;
  CodecProfile?: Mpeg2CodecProfile;
  DynamicSubGop?: Mpeg2DynamicSubGop;
  FramerateControl?: Mpeg2FramerateControl;
  FramerateConversionAlgorithm?: Mpeg2FramerateConversionAlgorithm;
  FramerateDenominator?: number;
  FramerateNumerator?: number;
  GopClosedCadence?: number;
  GopSize?: number;
  GopSizeUnits?: Mpeg2GopSizeUnits;
  HrdBufferFinalFillPercentage?: number;
  HrdBufferInitialFillPercentage?: number;
  HrdBufferSize?: number;
  InterlaceMode?: Mpeg2InterlaceMode;
  IntraDcPrecision?: Mpeg2IntraDcPrecision;
  MaxBitrate?: number;
  MinIInterval?: number;
  NumberBFramesBetweenReferenceFrames?: number;
  ParControl?: Mpeg2ParControl;
  ParDenominator?: number;
  ParNumerator?: number;
  PerFrameMetrics?: Array<FrameMetricType>;
  QualityTuningLevel?: Mpeg2QualityTuningLevel;
  RateControlMode?: Mpeg2RateControlMode;
  ScanTypeConversionMode?: Mpeg2ScanTypeConversionMode;
  SceneChangeDetect?: Mpeg2SceneChangeDetect;
  SlowPal?: Mpeg2SlowPal;
  Softness?: number;
  SpatialAdaptiveQuantization?: Mpeg2SpatialAdaptiveQuantization;
  Syntax?: Mpeg2Syntax;
  Telecine?: Mpeg2Telecine;
  TemporalAdaptiveQuantization?: Mpeg2TemporalAdaptiveQuantization;
}
export type Mpeg2SlowPal = "DISABLED" | "ENABLED";
export type Mpeg2SpatialAdaptiveQuantization = "DISABLED" | "ENABLED";
export type Mpeg2Syntax = "DEFAULT" | "D_10";
export type Mpeg2Telecine = "NONE" | "SOFT" | "HARD";
export type Mpeg2TemporalAdaptiveQuantization = "DISABLED" | "ENABLED";
export interface MsSmoothAdditionalManifest {
  ManifestNameModifier?: string;
  SelectedOutputs?: Array<string>;
}
export type MsSmoothAudioDeduplication = "COMBINE_DUPLICATE_STREAMS" | "NONE";
export interface MsSmoothEncryptionSettings {
  SpekeKeyProvider?: SpekeKeyProvider;
}
export type MsSmoothFragmentLengthControl = "EXACT" | "GOP_MULTIPLE";
export interface MsSmoothGroupSettings {
  AdditionalManifests?: Array<MsSmoothAdditionalManifest>;
  AudioDeduplication?: MsSmoothAudioDeduplication;
  Destination?: string;
  DestinationSettings?: DestinationSettings;
  Encryption?: MsSmoothEncryptionSettings;
  FragmentLength?: number;
  FragmentLengthControl?: MsSmoothFragmentLengthControl;
  ManifestEncoding?: MsSmoothManifestEncoding;
}
export type MsSmoothManifestEncoding = "UTF8" | "UTF16";
export type MxfAfdSignaling = "NO_COPY" | "COPY_FROM_VIDEO";
export type MxfProfile = "D_10" | "XDCAM" | "OP1A" | "XAVC" | "XDCAM_RDD9";
export interface MxfSettings {
  AfdSignaling?: MxfAfdSignaling;
  Profile?: MxfProfile;
  XavcProfileSettings?: MxfXavcProfileSettings;
}
export type MxfXavcDurationMode =
  | "ALLOW_ANY_DURATION"
  | "DROP_FRAMES_FOR_COMPLIANCE";
export interface MxfXavcProfileSettings {
  DurationMode?: MxfXavcDurationMode;
  MaxAncDataSize?: number;
}
export interface NexGuardFileMarkerSettings {
  License?: string;
  Payload?: number;
  Preset?: string;
  Strength?: WatermarkingStrength;
}
export type NielsenActiveWatermarkProcessType =
  | "NAES2_AND_NW"
  | "CBET"
  | "NAES2_AND_NW_AND_CBET";
export interface NielsenConfiguration {
  BreakoutCode?: number;
  DistributorId?: string;
}
export interface NielsenNonLinearWatermarkSettings {
  ActiveWatermarkProcess?: NielsenActiveWatermarkProcessType;
  AdiFilename?: string;
  AssetId?: string;
  AssetName?: string;
  CbetSourceId?: string;
  EpisodeId?: string;
  MetadataDestination?: string;
  SourceId?: number;
  SourceWatermarkStatus?: NielsenSourceWatermarkStatusType;
  TicServerUrl?: string;
  UniqueTicPerAudioTrack?: NielsenUniqueTicPerAudioTrackType;
}
export type NielsenSourceWatermarkStatusType = "CLEAN" | "WATERMARKED";
export type NielsenUniqueTicPerAudioTrackType =
  | "RESERVE_UNIQUE_TICS_PER_TRACK"
  | "SAME_TICS_PER_TRACK";
export type NoiseFilterPostTemporalSharpening = "DISABLED" | "ENABLED" | "AUTO";
export type NoiseFilterPostTemporalSharpeningStrength =
  | "LOW"
  | "MEDIUM"
  | "HIGH";
export interface NoiseReducer {
  Filter?: NoiseReducerFilter;
  FilterSettings?: NoiseReducerFilterSettings;
  SpatialFilterSettings?: NoiseReducerSpatialFilterSettings;
  TemporalFilterSettings?: NoiseReducerTemporalFilterSettings;
}
export type NoiseReducerFilter =
  | "BILATERAL"
  | "MEAN"
  | "GAUSSIAN"
  | "LANCZOS"
  | "SHARPEN"
  | "CONSERVE"
  | "SPATIAL"
  | "TEMPORAL";
export interface NoiseReducerFilterSettings {
  Strength?: number;
}
export interface NoiseReducerSpatialFilterSettings {
  PostFilterSharpenStrength?: number;
  Speed?: number;
  Strength?: number;
}
export interface NoiseReducerTemporalFilterSettings {
  AggressiveMode?: number;
  PostTemporalSharpening?: NoiseFilterPostTemporalSharpening;
  PostTemporalSharpeningStrength?: NoiseFilterPostTemporalSharpeningStrength;
  Speed?: number;
  Strength?: number;
}
export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface OpusSettings {
  Bitrate?: number;
  Channels?: number;
  SampleRate?: number;
}
export type Order = "ASCENDING" | "DESCENDING";
export interface Output {
  AudioDescriptions?: Array<AudioDescription>;
  CaptionDescriptions?: Array<CaptionDescription>;
  ContainerSettings?: ContainerSettings;
  Extension?: string;
  NameModifier?: string;
  OutputSettings?: OutputSettings;
  Preset?: string;
  VideoDescription?: VideoDescription;
}
export interface OutputChannelMapping {
  InputChannels?: Array<number>;
  InputChannelsFineTune?: Array<number>;
}
export interface OutputDetail {
  DurationInMs?: number;
  VideoDetails?: VideoDetail;
}
export interface OutputGroup {
  AutomatedEncodingSettings?: AutomatedEncodingSettings;
  CustomName?: string;
  Name?: string;
  OutputGroupSettings?: OutputGroupSettings;
  Outputs?: Array<Output>;
}
export interface OutputGroupDetail {
  OutputDetails?: Array<OutputDetail>;
}
export interface OutputGroupSettings {
  CmafGroupSettings?: CmafGroupSettings;
  DashIsoGroupSettings?: DashIsoGroupSettings;
  FileGroupSettings?: FileGroupSettings;
  HlsGroupSettings?: HlsGroupSettings;
  MsSmoothGroupSettings?: MsSmoothGroupSettings;
  PerFrameMetrics?: Array<FrameMetricType>;
  Type?: OutputGroupType;
}
export type OutputGroupType =
  | "HLS_GROUP_SETTINGS"
  | "DASH_ISO_GROUP_SETTINGS"
  | "FILE_GROUP_SETTINGS"
  | "MS_SMOOTH_GROUP_SETTINGS"
  | "CMAF_GROUP_SETTINGS";
export type OutputSdt =
  | "SDT_FOLLOW"
  | "SDT_FOLLOW_IF_PRESENT"
  | "SDT_MANUAL"
  | "SDT_NONE";
export interface OutputSettings {
  HlsSettings?: HlsSettings;
}
export type PadVideo = "DISABLED" | "BLACK";
export interface PartnerWatermarking {
  NexguardFileMarkerSettings?: NexGuardFileMarkerSettings;
}
export interface Policy {
  HttpInputs?: InputPolicy;
  HttpsInputs?: InputPolicy;
  S3Inputs?: InputPolicy;
}
export interface Preset {
  Arn?: string;
  Category?: string;
  CreatedAt?: Date | string;
  Description?: string;
  LastUpdated?: Date | string;
  Name: string;
  Settings: PresetSettings;
  Type?: Type;
}
export type PresetListBy = "NAME" | "CREATION_DATE" | "SYSTEM";
export interface PresetSettings {
  AudioDescriptions?: Array<AudioDescription>;
  CaptionDescriptions?: Array<CaptionDescriptionPreset>;
  ContainerSettings?: ContainerSettings;
  VideoDescription?: VideoDescription;
}
export type PresetSpeke20Audio =
  | "PRESET_AUDIO_1"
  | "PRESET_AUDIO_2"
  | "PRESET_AUDIO_3"
  | "SHARED"
  | "UNENCRYPTED";
export type PresetSpeke20Video =
  | "PRESET_VIDEO_1"
  | "PRESET_VIDEO_2"
  | "PRESET_VIDEO_3"
  | "PRESET_VIDEO_4"
  | "PRESET_VIDEO_5"
  | "PRESET_VIDEO_6"
  | "PRESET_VIDEO_7"
  | "PRESET_VIDEO_8"
  | "SHARED"
  | "UNENCRYPTED";
export type PricingPlan = "ON_DEMAND" | "RESERVED";
export interface ProbeInputFile {
  FileUrl?: string;
}
export interface ProbeRequest {
  InputFiles?: Array<ProbeInputFile>;
}
export interface ProbeResponse {
  ProbeResults?: Array<ProbeResult>;
}
export interface ProbeResult {
  Container?: Container;
  Metadata?: Metadata;
  TrackMappings?: Array<TrackMapping>;
}
export type ProresChromaSampling = "PRESERVE_444_SAMPLING" | "SUBSAMPLE_TO_422";
export type ProresCodecProfile =
  | "APPLE_PRORES_422"
  | "APPLE_PRORES_422_HQ"
  | "APPLE_PRORES_422_LT"
  | "APPLE_PRORES_422_PROXY"
  | "APPLE_PRORES_4444"
  | "APPLE_PRORES_4444_XQ";
export type ProresFramerateControl = "INITIALIZE_FROM_SOURCE" | "SPECIFIED";
export type ProresFramerateConversionAlgorithm =
  | "DUPLICATE_DROP"
  | "INTERPOLATE"
  | "FRAMEFORMER"
  | "MAINTAIN_FRAME_COUNT";
export type ProresInterlaceMode =
  | "PROGRESSIVE"
  | "TOP_FIELD"
  | "BOTTOM_FIELD"
  | "FOLLOW_TOP_FIELD"
  | "FOLLOW_BOTTOM_FIELD";
export type ProresParControl = "INITIALIZE_FROM_SOURCE" | "SPECIFIED";
export type ProresScanTypeConversionMode = "INTERLACED" | "INTERLACED_OPTIMIZE";
export interface ProresSettings {
  ChromaSampling?: ProresChromaSampling;
  CodecProfile?: ProresCodecProfile;
  FramerateControl?: ProresFramerateControl;
  FramerateConversionAlgorithm?: ProresFramerateConversionAlgorithm;
  FramerateDenominator?: number;
  FramerateNumerator?: number;
  InterlaceMode?: ProresInterlaceMode;
  ParControl?: ProresParControl;
  ParDenominator?: number;
  ParNumerator?: number;
  PerFrameMetrics?: Array<FrameMetricType>;
  ScanTypeConversionMode?: ProresScanTypeConversionMode;
  SlowPal?: ProresSlowPal;
  Telecine?: ProresTelecine;
}
export type ProresSlowPal = "DISABLED" | "ENABLED";
export type ProresTelecine = "NONE" | "HARD";
export interface PutPolicyRequest {
  Policy: Policy;
}
export interface PutPolicyResponse {
  Policy?: Policy;
}
export interface Queue {
  Arn?: string;
  ConcurrentJobs?: number;
  CreatedAt?: Date | string;
  Description?: string;
  LastUpdated?: Date | string;
  Name: string;
  PricingPlan?: PricingPlan;
  ProgressingJobsCount?: number;
  ReservationPlan?: ReservationPlan;
  ServiceOverrides?: Array<ServiceOverride>;
  Status?: QueueStatus;
  SubmittedJobsCount?: number;
  Type?: Type;
}
export type QueueListBy = "NAME" | "CREATION_DATE";
export type QueueStatus = "ACTIVE" | "PAUSED";
export interface QueueTransition {
  DestinationQueue?: string;
  SourceQueue?: string;
  Timestamp?: Date | string;
}
export interface Rectangle {
  Height?: number;
  Width?: number;
  X?: number;
  Y?: number;
}
export interface RemixSettings {
  AudioDescriptionAudioChannel?: number;
  AudioDescriptionDataChannel?: number;
  ChannelMapping?: ChannelMapping;
  ChannelsIn?: number;
  ChannelsOut?: number;
}
export type RemoveRubyReserveAttributes = "DISABLED" | "ENABLED";
export type RenewalType = "AUTO_RENEW" | "EXPIRE";
export type RequiredFlag = "ENABLED" | "DISABLED";
export interface ReservationPlan {
  Commitment?: Commitment;
  ExpiresAt?: Date | string;
  PurchasedAt?: Date | string;
  RenewalType?: RenewalType;
  ReservedSlots?: number;
  Status?: ReservationPlanStatus;
}
export interface ReservationPlanSettings {
  Commitment: Commitment;
  RenewalType: RenewalType;
  ReservedSlots: number;
}
export type ReservationPlanStatus = "ACTIVE" | "EXPIRED";
export interface ResourceTags {
  Arn?: string;
  Tags?: Record<string, string>;
}
export type RespondToAfd = "NONE" | "RESPOND" | "PASSTHROUGH";
export type RuleType =
  | "MIN_TOP_RENDITION_SIZE"
  | "MIN_BOTTOM_RENDITION_SIZE"
  | "FORCE_INCLUDE_RENDITIONS"
  | "ALLOWED_RENDITIONS";
export interface S3DestinationAccessControl {
  CannedAcl?: S3ObjectCannedAcl;
}
export interface S3DestinationSettings {
  AccessControl?: S3DestinationAccessControl;
  Encryption?: S3EncryptionSettings;
  StorageClass?: S3StorageClass;
}
export interface S3EncryptionSettings {
  EncryptionType?: S3ServerSideEncryptionType;
  KmsEncryptionContext?: string;
  KmsKeyArn?: string;
}
export type S3ObjectCannedAcl =
  | "PUBLIC_READ"
  | "AUTHENTICATED_READ"
  | "BUCKET_OWNER_READ"
  | "BUCKET_OWNER_FULL_CONTROL";
export type S3ServerSideEncryptionType =
  | "SERVER_SIDE_ENCRYPTION_S3"
  | "SERVER_SIDE_ENCRYPTION_KMS";
export type S3StorageClass =
  | "STANDARD"
  | "REDUCED_REDUNDANCY"
  | "STANDARD_IA"
  | "ONEZONE_IA"
  | "INTELLIGENT_TIERING"
  | "GLACIER"
  | "DEEP_ARCHIVE";
export type SampleRangeConversion =
  | "LIMITED_RANGE_SQUEEZE"
  | "NONE"
  | "LIMITED_RANGE_CLIP";
export type ScalingBehavior =
  | "DEFAULT"
  | "STRETCH_TO_OUTPUT"
  | "FIT"
  | "FIT_NO_UPSCALE"
  | "FILL";
export type SccDestinationFramerate =
  | "FRAMERATE_23_97"
  | "FRAMERATE_24"
  | "FRAMERATE_25"
  | "FRAMERATE_29_97_DROPFRAME"
  | "FRAMERATE_29_97_NON_DROPFRAME";
export interface SccDestinationSettings {
  Framerate?: SccDestinationFramerate;
}
export interface SearchJobsRequest {
  InputFile?: string;
  MaxResults?: number;
  NextToken?: string;
  Order?: Order;
  Queue?: string;
  Status?: JobStatus;
}
export interface SearchJobsResponse {
  Jobs?: Array<Job>;
  NextToken?: string;
}
export interface ServiceOverride {
  Message?: string;
  Name?: string;
  OverrideValue?: string;
  Value?: string;
}
export type SimulateReservedQueue = "DISABLED" | "ENABLED";
export interface SpekeKeyProvider {
  CertificateArn?: string;
  EncryptionContractConfiguration?: EncryptionContractConfiguration;
  ResourceId?: string;
  SystemIds?: Array<string>;
  Url?: string;
}
export interface SpekeKeyProviderCmaf {
  CertificateArn?: string;
  DashSignaledSystemIds?: Array<string>;
  EncryptionContractConfiguration?: EncryptionContractConfiguration;
  HlsSignaledSystemIds?: Array<string>;
  ResourceId?: string;
  Url?: string;
}
export interface SrtDestinationSettings {
  StylePassthrough?: SrtStylePassthrough;
}
export type SrtStylePassthrough = "ENABLED" | "DISABLED";
export interface StaticKeyProvider {
  KeyFormat?: string;
  KeyFormatVersions?: string;
  StaticKeyValue?: string;
  Url?: string;
}
export type StatusUpdateInterval =
  | "SECONDS_10"
  | "SECONDS_12"
  | "SECONDS_15"
  | "SECONDS_20"
  | "SECONDS_30"
  | "SECONDS_60"
  | "SECONDS_120"
  | "SECONDS_180"
  | "SECONDS_240"
  | "SECONDS_300"
  | "SECONDS_360"
  | "SECONDS_420"
  | "SECONDS_480"
  | "SECONDS_540"
  | "SECONDS_600";
export interface TagResourceRequest {
  Arn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {}
export interface TeletextDestinationSettings {
  PageNumber?: string;
  PageTypes?: Array<TeletextPageType>;
}
export type TeletextPageType =
  | "PAGE_TYPE_INITIAL"
  | "PAGE_TYPE_SUBTITLE"
  | "PAGE_TYPE_ADDL_INFO"
  | "PAGE_TYPE_PROGRAM_SCHEDULE"
  | "PAGE_TYPE_HEARING_IMPAIRED_SUBTITLE";
export interface TeletextSourceSettings {
  PageNumber?: string;
}
export interface TimecodeBurnin {
  FontSize?: number;
  Position?: TimecodeBurninPosition;
  Prefix?: string;
}
export type TimecodeBurninPosition =
  | "TOP_CENTER"
  | "TOP_LEFT"
  | "TOP_RIGHT"
  | "MIDDLE_LEFT"
  | "MIDDLE_CENTER"
  | "MIDDLE_RIGHT"
  | "BOTTOM_LEFT"
  | "BOTTOM_CENTER"
  | "BOTTOM_RIGHT";
export interface TimecodeConfig {
  Anchor?: string;
  Source?: TimecodeSource;
  Start?: string;
  TimestampOffset?: string;
}
export type TimecodeSource = "EMBEDDED" | "ZEROBASED" | "SPECIFIEDSTART";
export type TimecodeTrack = "DISABLED" | "ENABLED";
export type TimedMetadata = "PASSTHROUGH" | "NONE";
export interface TimedMetadataInsertion {
  Id3Insertions?: Array<Id3Insertion>;
}
export interface Timing {
  FinishTime?: Date | string;
  StartTime?: Date | string;
  SubmitTime?: Date | string;
}
export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly Message?: string;
}> {}
export interface Track {
  AudioProperties?: AudioProperties;
  Codec?: Codec;
  DataProperties?: DataProperties;
  Duration?: number;
  Index?: number;
  TrackType?: TrackType;
  VideoProperties?: VideoProperties;
}
export interface TrackMapping {
  AudioTrackIndexes?: Array<number>;
  DataTrackIndexes?: Array<number>;
  VideoTrackIndexes?: Array<number>;
}
export interface TrackSourceSettings {
  TrackNumber?: number;
}
export type TrackType = "video" | "audio" | "data";
export type TransferCharacteristics =
  | "ITU_709"
  | "UNSPECIFIED"
  | "RESERVED"
  | "ITU_470M"
  | "ITU_470BG"
  | "SMPTE_170M"
  | "SMPTE_240M"
  | "LINEAR"
  | "LOG10_2"
  | "LOC10_2_5"
  | "IEC_61966_2_4"
  | "ITU_1361"
  | "IEC_61966_2_1"
  | "ITU_2020_10bit"
  | "ITU_2020_12bit"
  | "SMPTE_2084"
  | "SMPTE_428_1"
  | "ARIB_B67"
  | "LAST";
export type TsPtsOffset = "AUTO" | "SECONDS" | "MILLISECONDS";
export interface TtmlDestinationSettings {
  StylePassthrough?: TtmlStylePassthrough;
}
export type TtmlStylePassthrough = "ENABLED" | "DISABLED";
export type Type = "SYSTEM" | "CUSTOM";
export type UncompressedFourcc = "I420" | "I422" | "I444";
export type UncompressedFramerateControl =
  | "INITIALIZE_FROM_SOURCE"
  | "SPECIFIED";
export type UncompressedFramerateConversionAlgorithm =
  | "DUPLICATE_DROP"
  | "INTERPOLATE"
  | "FRAMEFORMER"
  | "MAINTAIN_FRAME_COUNT";
export type UncompressedInterlaceMode = "INTERLACED" | "PROGRESSIVE";
export type UncompressedScanTypeConversionMode =
  | "INTERLACED"
  | "INTERLACED_OPTIMIZE";
export interface UncompressedSettings {
  Fourcc?: UncompressedFourcc;
  FramerateControl?: UncompressedFramerateControl;
  FramerateConversionAlgorithm?: UncompressedFramerateConversionAlgorithm;
  FramerateDenominator?: number;
  FramerateNumerator?: number;
  InterlaceMode?: UncompressedInterlaceMode;
  ScanTypeConversionMode?: UncompressedScanTypeConversionMode;
  SlowPal?: UncompressedSlowPal;
  Telecine?: UncompressedTelecine;
}
export type UncompressedSlowPal = "DISABLED" | "ENABLED";
export type UncompressedTelecine = "NONE" | "HARD";
export interface UntagResourceRequest {
  Arn: string;
  TagKeys?: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateJobTemplateRequest {
  AccelerationSettings?: AccelerationSettings;
  Category?: string;
  Description?: string;
  HopDestinations?: Array<HopDestination>;
  Name: string;
  Priority?: number;
  Queue?: string;
  Settings?: JobTemplateSettings;
  StatusUpdateInterval?: StatusUpdateInterval;
}
export interface UpdateJobTemplateResponse {
  JobTemplate?: JobTemplate;
}
export interface UpdatePresetRequest {
  Category?: string;
  Description?: string;
  Name: string;
  Settings?: PresetSettings;
}
export interface UpdatePresetResponse {
  Preset?: Preset;
}
export interface UpdateQueueRequest {
  ConcurrentJobs?: number;
  Description?: string;
  Name: string;
  ReservationPlanSettings?: ReservationPlanSettings;
  Status?: QueueStatus;
}
export interface UpdateQueueResponse {
  Queue?: Queue;
}
export type Vc3Class = "CLASS_145_8BIT" | "CLASS_220_8BIT" | "CLASS_220_10BIT";
export type Vc3FramerateControl = "INITIALIZE_FROM_SOURCE" | "SPECIFIED";
export type Vc3FramerateConversionAlgorithm =
  | "DUPLICATE_DROP"
  | "INTERPOLATE"
  | "FRAMEFORMER"
  | "MAINTAIN_FRAME_COUNT";
export type Vc3InterlaceMode = "INTERLACED" | "PROGRESSIVE";
export type Vc3ScanTypeConversionMode = "INTERLACED" | "INTERLACED_OPTIMIZE";
export interface Vc3Settings {
  FramerateControl?: Vc3FramerateControl;
  FramerateConversionAlgorithm?: Vc3FramerateConversionAlgorithm;
  FramerateDenominator?: number;
  FramerateNumerator?: number;
  InterlaceMode?: Vc3InterlaceMode;
  ScanTypeConversionMode?: Vc3ScanTypeConversionMode;
  SlowPal?: Vc3SlowPal;
  Telecine?: Vc3Telecine;
  Vc3Class?: Vc3Class;
}
export type Vc3SlowPal = "DISABLED" | "ENABLED";
export type Vc3Telecine = "NONE" | "HARD";
export type VchipAction = "PASSTHROUGH" | "STRIP";
export type VideoCodec =
  | "AV1"
  | "AVC_INTRA"
  | "FRAME_CAPTURE"
  | "GIF"
  | "H_264"
  | "H_265"
  | "MPEG2"
  | "PASSTHROUGH"
  | "PRORES"
  | "UNCOMPRESSED"
  | "VC3"
  | "VP8"
  | "VP9"
  | "XAVC";
export interface VideoCodecSettings {
  Av1Settings?: Av1Settings;
  AvcIntraSettings?: AvcIntraSettings;
  Codec?: VideoCodec;
  FrameCaptureSettings?: FrameCaptureSettings;
  GifSettings?: GifSettings;
  H264Settings?: H264Settings;
  H265Settings?: H265Settings;
  Mpeg2Settings?: Mpeg2Settings;
  ProresSettings?: ProresSettings;
  UncompressedSettings?: UncompressedSettings;
  Vc3Settings?: Vc3Settings;
  Vp8Settings?: Vp8Settings;
  Vp9Settings?: Vp9Settings;
  XavcSettings?: XavcSettings;
}
export interface VideoDescription {
  AfdSignaling?: AfdSignaling;
  AntiAlias?: AntiAlias;
  ChromaPositionMode?: ChromaPositionMode;
  CodecSettings?: VideoCodecSettings;
  ColorMetadata?: ColorMetadata;
  Crop?: Rectangle;
  DropFrameTimecode?: DropFrameTimecode;
  FixedAfd?: number;
  Height?: number;
  Position?: Rectangle;
  RespondToAfd?: RespondToAfd;
  ScalingBehavior?: ScalingBehavior;
  Sharpness?: number;
  TimecodeInsertion?: VideoTimecodeInsertion;
  TimecodeTrack?: TimecodeTrack;
  VideoPreprocessors?: VideoPreprocessor;
  Width?: number;
}
export interface VideoDetail {
  HeightInPx?: number;
  WidthInPx?: number;
}
export interface VideoOverlay {
  Crop?: VideoOverlayCrop;
  EndTimecode?: string;
  InitialPosition?: VideoOverlayPosition;
  Input?: VideoOverlayInput;
  Playback?: VideoOverlayPlayBackMode;
  StartTimecode?: string;
  Transitions?: Array<VideoOverlayTransition>;
}
export interface VideoOverlayCrop {
  Height?: number;
  Unit?: VideoOverlayUnit;
  Width?: number;
  X?: number;
  Y?: number;
}
export interface VideoOverlayInput {
  FileInput?: string;
  InputClippings?: Array<VideoOverlayInputClipping>;
  TimecodeSource?: InputTimecodeSource;
  TimecodeStart?: string;
}
export interface VideoOverlayInputClipping {
  EndTimecode?: string;
  StartTimecode?: string;
}
export type VideoOverlayPlayBackMode = "ONCE" | "REPEAT";
export interface VideoOverlayPosition {
  Height?: number;
  Unit?: VideoOverlayUnit;
  Width?: number;
  XPosition?: number;
  YPosition?: number;
}
export interface VideoOverlayTransition {
  EndPosition?: VideoOverlayPosition;
  EndTimecode?: string;
  StartTimecode?: string;
}
export type VideoOverlayUnit = "PIXELS" | "PERCENTAGE";
export interface VideoPreprocessor {
  ColorCorrector?: ColorCorrector;
  Deinterlacer?: Deinterlacer;
  DolbyVision?: DolbyVision;
  Hdr10Plus?: Hdr10Plus;
  ImageInserter?: ImageInserter;
  NoiseReducer?: NoiseReducer;
  PartnerWatermarking?: PartnerWatermarking;
  TimecodeBurnin?: TimecodeBurnin;
}
export interface VideoProperties {
  BitDepth?: number;
  BitRate?: number;
  ColorPrimaries?: ColorPrimaries;
  FrameRate?: FrameRate;
  Height?: number;
  MatrixCoefficients?: MatrixCoefficients;
  TransferCharacteristics?: TransferCharacteristics;
  Width?: number;
}
export interface VideoSelector {
  AlphaBehavior?: AlphaBehavior;
  ColorSpace?: ColorSpace;
  ColorSpaceUsage?: ColorSpaceUsage;
  EmbeddedTimecodeOverride?: EmbeddedTimecodeOverride;
  Hdr10Metadata?: Hdr10Metadata;
  MaxLuminance?: number;
  PadVideo?: PadVideo;
  Pid?: number;
  ProgramNumber?: number;
  Rotate?: InputRotate;
  SampleRange?: InputSampleRange;
}
export type VideoTimecodeInsertion = "DISABLED" | "PIC_TIMING_SEI";
export interface VorbisSettings {
  Channels?: number;
  SampleRate?: number;
  VbrQuality?: number;
}
export type Vp8FramerateControl = "INITIALIZE_FROM_SOURCE" | "SPECIFIED";
export type Vp8FramerateConversionAlgorithm =
  | "DUPLICATE_DROP"
  | "INTERPOLATE"
  | "FRAMEFORMER"
  | "MAINTAIN_FRAME_COUNT";
export type Vp8ParControl = "INITIALIZE_FROM_SOURCE" | "SPECIFIED";
export type Vp8QualityTuningLevel = "MULTI_PASS" | "MULTI_PASS_HQ";
export type Vp8RateControlMode = "VBR";
export interface Vp8Settings {
  Bitrate?: number;
  FramerateControl?: Vp8FramerateControl;
  FramerateConversionAlgorithm?: Vp8FramerateConversionAlgorithm;
  FramerateDenominator?: number;
  FramerateNumerator?: number;
  GopSize?: number;
  HrdBufferSize?: number;
  MaxBitrate?: number;
  ParControl?: Vp8ParControl;
  ParDenominator?: number;
  ParNumerator?: number;
  QualityTuningLevel?: Vp8QualityTuningLevel;
  RateControlMode?: Vp8RateControlMode;
}
export type Vp9FramerateControl = "INITIALIZE_FROM_SOURCE" | "SPECIFIED";
export type Vp9FramerateConversionAlgorithm =
  | "DUPLICATE_DROP"
  | "INTERPOLATE"
  | "FRAMEFORMER"
  | "MAINTAIN_FRAME_COUNT";
export type Vp9ParControl = "INITIALIZE_FROM_SOURCE" | "SPECIFIED";
export type Vp9QualityTuningLevel = "MULTI_PASS" | "MULTI_PASS_HQ";
export type Vp9RateControlMode = "VBR";
export interface Vp9Settings {
  Bitrate?: number;
  FramerateControl?: Vp9FramerateControl;
  FramerateConversionAlgorithm?: Vp9FramerateConversionAlgorithm;
  FramerateDenominator?: number;
  FramerateNumerator?: number;
  GopSize?: number;
  HrdBufferSize?: number;
  MaxBitrate?: number;
  ParControl?: Vp9ParControl;
  ParDenominator?: number;
  ParNumerator?: number;
  QualityTuningLevel?: Vp9QualityTuningLevel;
  RateControlMode?: Vp9RateControlMode;
}
export interface WarningGroup {
  Code: number;
  Count: number;
}
export type WatermarkingStrength =
  | "LIGHTEST"
  | "LIGHTER"
  | "DEFAULT"
  | "STRONGER"
  | "STRONGEST";
export type WavFormat = "RIFF" | "RF64" | "EXTENSIBLE";
export interface WavSettings {
  BitDepth?: number;
  Channels?: number;
  Format?: WavFormat;
  SampleRate?: number;
}
export type WebvttAccessibilitySubs = "DISABLED" | "ENABLED";
export interface WebvttDestinationSettings {
  Accessibility?: WebvttAccessibilitySubs;
  StylePassthrough?: WebvttStylePassthrough;
}
export interface WebvttHlsSourceSettings {
  RenditionGroupId?: string;
  RenditionLanguageCode?: LanguageCode;
  RenditionName?: string;
}
export type WebvttStylePassthrough =
  | "ENABLED"
  | "DISABLED"
  | "STRICT"
  | "MERGE";
export type Xavc4kIntraCbgProfileClass =
  | "CLASS_100"
  | "CLASS_300"
  | "CLASS_480";
export interface Xavc4kIntraCbgProfileSettings {
  XavcClass?: Xavc4kIntraCbgProfileClass;
}
export type Xavc4kIntraVbrProfileClass =
  | "CLASS_100"
  | "CLASS_300"
  | "CLASS_480";
export interface Xavc4kIntraVbrProfileSettings {
  XavcClass?: Xavc4kIntraVbrProfileClass;
}
export type Xavc4kProfileBitrateClass =
  | "BITRATE_CLASS_100"
  | "BITRATE_CLASS_140"
  | "BITRATE_CLASS_200";
export type Xavc4kProfileCodecProfile = "HIGH" | "HIGH_422";
export type Xavc4kProfileQualityTuningLevel =
  | "SINGLE_PASS"
  | "SINGLE_PASS_HQ"
  | "MULTI_PASS_HQ";
export interface Xavc4kProfileSettings {
  BitrateClass?: Xavc4kProfileBitrateClass;
  CodecProfile?: Xavc4kProfileCodecProfile;
  FlickerAdaptiveQuantization?: XavcFlickerAdaptiveQuantization;
  GopBReference?: XavcGopBReference;
  GopClosedCadence?: number;
  HrdBufferSize?: number;
  QualityTuningLevel?: Xavc4kProfileQualityTuningLevel;
  Slices?: number;
}
export type XavcAdaptiveQuantization =
  | "OFF"
  | "AUTO"
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "HIGHER"
  | "MAX";
export type XavcEntropyEncoding = "AUTO" | "CABAC" | "CAVLC";
export type XavcFlickerAdaptiveQuantization = "DISABLED" | "ENABLED";
export type XavcFramerateControl = "INITIALIZE_FROM_SOURCE" | "SPECIFIED";
export type XavcFramerateConversionAlgorithm =
  | "DUPLICATE_DROP"
  | "INTERPOLATE"
  | "FRAMEFORMER"
  | "MAINTAIN_FRAME_COUNT";
export type XavcGopBReference = "DISABLED" | "ENABLED";
export type XavcHdIntraCbgProfileClass = "CLASS_50" | "CLASS_100" | "CLASS_200";
export interface XavcHdIntraCbgProfileSettings {
  XavcClass?: XavcHdIntraCbgProfileClass;
}
export type XavcHdProfileBitrateClass =
  | "BITRATE_CLASS_25"
  | "BITRATE_CLASS_35"
  | "BITRATE_CLASS_50";
export type XavcHdProfileQualityTuningLevel =
  | "SINGLE_PASS"
  | "SINGLE_PASS_HQ"
  | "MULTI_PASS_HQ";
export interface XavcHdProfileSettings {
  BitrateClass?: XavcHdProfileBitrateClass;
  FlickerAdaptiveQuantization?: XavcFlickerAdaptiveQuantization;
  GopBReference?: XavcGopBReference;
  GopClosedCadence?: number;
  HrdBufferSize?: number;
  InterlaceMode?: XavcInterlaceMode;
  QualityTuningLevel?: XavcHdProfileQualityTuningLevel;
  Slices?: number;
  Telecine?: XavcHdProfileTelecine;
}
export type XavcHdProfileTelecine = "NONE" | "HARD";
export type XavcInterlaceMode =
  | "PROGRESSIVE"
  | "TOP_FIELD"
  | "BOTTOM_FIELD"
  | "FOLLOW_TOP_FIELD"
  | "FOLLOW_BOTTOM_FIELD";
export type XavcProfile =
  | "XAVC_HD_INTRA_CBG"
  | "XAVC_4K_INTRA_CBG"
  | "XAVC_4K_INTRA_VBR"
  | "XAVC_HD"
  | "XAVC_4K";
export interface XavcSettings {
  AdaptiveQuantization?: XavcAdaptiveQuantization;
  EntropyEncoding?: XavcEntropyEncoding;
  FramerateControl?: XavcFramerateControl;
  FramerateConversionAlgorithm?: XavcFramerateConversionAlgorithm;
  FramerateDenominator?: number;
  FramerateNumerator?: number;
  PerFrameMetrics?: Array<FrameMetricType>;
  Profile?: XavcProfile;
  SlowPal?: XavcSlowPal;
  Softness?: number;
  SpatialAdaptiveQuantization?: XavcSpatialAdaptiveQuantization;
  TemporalAdaptiveQuantization?: XavcTemporalAdaptiveQuantization;
  Xavc4kIntraCbgProfileSettings?: Xavc4kIntraCbgProfileSettings;
  Xavc4kIntraVbrProfileSettings?: Xavc4kIntraVbrProfileSettings;
  Xavc4kProfileSettings?: Xavc4kProfileSettings;
  XavcHdIntraCbgProfileSettings?: XavcHdIntraCbgProfileSettings;
  XavcHdProfileSettings?: XavcHdProfileSettings;
}
export type XavcSlowPal = "DISABLED" | "ENABLED";
export type XavcSpatialAdaptiveQuantization = "DISABLED" | "ENABLED";
export type XavcTemporalAdaptiveQuantization = "DISABLED" | "ENABLED";
export declare namespace AssociateCertificate {
  export type Input = AssociateCertificateRequest;
  export type Output = AssociateCertificateResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CancelJob {
  export type Input = CancelJobRequest;
  export type Output = CancelJobResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateJob {
  export type Input = CreateJobRequest;
  export type Output = CreateJobResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateJobTemplate {
  export type Input = CreateJobTemplateRequest;
  export type Output = CreateJobTemplateResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreatePreset {
  export type Input = CreatePresetRequest;
  export type Output = CreatePresetResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateQueue {
  export type Input = CreateQueueRequest;
  export type Output = CreateQueueResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteJobTemplate {
  export type Input = DeleteJobTemplateRequest;
  export type Output = DeleteJobTemplateResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeletePolicy {
  export type Input = DeletePolicyRequest;
  export type Output = DeletePolicyResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeletePreset {
  export type Input = DeletePresetRequest;
  export type Output = DeletePresetResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteQueue {
  export type Input = DeleteQueueRequest;
  export type Output = DeleteQueueResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeEndpoints {
  export type Input = DescribeEndpointsRequest;
  export type Output = DescribeEndpointsResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DisassociateCertificate {
  export type Input = DisassociateCertificateRequest;
  export type Output = DisassociateCertificateResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetJob {
  export type Input = GetJobRequest;
  export type Output = GetJobResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetJobTemplate {
  export type Input = GetJobTemplateRequest;
  export type Output = GetJobTemplateResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetPolicy {
  export type Input = GetPolicyRequest;
  export type Output = GetPolicyResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetPreset {
  export type Input = GetPresetRequest;
  export type Output = GetPresetResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetQueue {
  export type Input = GetQueueRequest;
  export type Output = GetQueueResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListJobs {
  export type Input = ListJobsRequest;
  export type Output = ListJobsResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListJobTemplates {
  export type Input = ListJobTemplatesRequest;
  export type Output = ListJobTemplatesResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListPresets {
  export type Input = ListPresetsRequest;
  export type Output = ListPresetsResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListQueues {
  export type Input = ListQueuesRequest;
  export type Output = ListQueuesResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListVersions {
  export type Input = ListVersionsRequest;
  export type Output = ListVersionsResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace Probe {
  export type Input = ProbeRequest;
  export type Output = ProbeResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutPolicy {
  export type Input = PutPolicyRequest;
  export type Output = PutPolicyResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace SearchJobs {
  export type Input = SearchJobsRequest;
  export type Output = SearchJobsResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateJobTemplate {
  export type Input = UpdateJobTemplateRequest;
  export type Output = UpdateJobTemplateResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdatePreset {
  export type Input = UpdatePresetRequest;
  export type Output = UpdatePresetResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateQueue {
  export type Input = UpdateQueueRequest;
  export type Output = UpdateQueueResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}
