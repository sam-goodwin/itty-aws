import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface Parrot_v1 {
  deleteLexicon(
    input: DeleteLexiconInput,
  ): Effect.Effect<
    DeleteLexiconOutput,
    LexiconNotFoundException | ServiceFailureException | CommonAwsError
  >;
  describeVoices(
    input: DescribeVoicesInput,
  ): Effect.Effect<
    DescribeVoicesOutput,
    InvalidNextTokenException | ServiceFailureException | CommonAwsError
  >;
  getLexicon(
    input: GetLexiconInput,
  ): Effect.Effect<
    GetLexiconOutput,
    LexiconNotFoundException | ServiceFailureException | CommonAwsError
  >;
  getSpeechSynthesisTask(
    input: GetSpeechSynthesisTaskInput,
  ): Effect.Effect<
    GetSpeechSynthesisTaskOutput,
    | InvalidTaskIdException
    | ServiceFailureException
    | SynthesisTaskNotFoundException
    | CommonAwsError
  >;
  listLexicons(
    input: ListLexiconsInput,
  ): Effect.Effect<
    ListLexiconsOutput,
    InvalidNextTokenException | ServiceFailureException | CommonAwsError
  >;
  listSpeechSynthesisTasks(
    input: ListSpeechSynthesisTasksInput,
  ): Effect.Effect<
    ListSpeechSynthesisTasksOutput,
    InvalidNextTokenException | ServiceFailureException | CommonAwsError
  >;
  putLexicon(
    input: PutLexiconInput,
  ): Effect.Effect<
    PutLexiconOutput,
    | InvalidLexiconException
    | LexiconSizeExceededException
    | MaxLexemeLengthExceededException
    | MaxLexiconsNumberExceededException
    | ServiceFailureException
    | UnsupportedPlsAlphabetException
    | UnsupportedPlsLanguageException
    | CommonAwsError
  >;
  startSpeechSynthesisTask(
    input: StartSpeechSynthesisTaskInput,
  ): Effect.Effect<
    StartSpeechSynthesisTaskOutput,
    | EngineNotSupportedException
    | InvalidS3BucketException
    | InvalidS3KeyException
    | InvalidSampleRateException
    | InvalidSnsTopicArnException
    | InvalidSsmlException
    | LanguageNotSupportedException
    | LexiconNotFoundException
    | MarksNotSupportedForFormatException
    | ServiceFailureException
    | SsmlMarksNotSupportedForTextTypeException
    | TextLengthExceededException
    | CommonAwsError
  >;
  synthesizeSpeech(
    input: SynthesizeSpeechInput,
  ): Effect.Effect<
    SynthesizeSpeechOutput,
    | EngineNotSupportedException
    | InvalidSampleRateException
    | InvalidSsmlException
    | LanguageNotSupportedException
    | LexiconNotFoundException
    | MarksNotSupportedForFormatException
    | ServiceFailureException
    | SsmlMarksNotSupportedForTextTypeException
    | TextLengthExceededException
    | CommonAwsError
  >;
}

export type Polly = Parrot_v1;

export type Alphabet = string;

export type AudioStream = Uint8Array | string;

export type ContentType = string;

export type DateTime = Date | string;

export interface DeleteLexiconInput {
  Name: string;
}
export interface DeleteLexiconOutput {}
export interface DescribeVoicesInput {
  Engine?: Engine;
  LanguageCode?: LanguageCode;
  IncludeAdditionalLanguageCodes?: boolean;
  NextToken?: string;
}
export interface DescribeVoicesOutput {
  Voices?: Array<Voice>;
  NextToken?: string;
}
export type Engine = "STANDARD" | "NEURAL" | "LONG_FORM" | "GENERATIVE";
export type EngineList = Array<Engine>;
export declare class EngineNotSupportedException extends EffectData.TaggedError(
  "EngineNotSupportedException",
)<{
  readonly message?: string;
}> {}
export type ErrorMessage = string;

export type Gender = "Female" | "Male";
export interface GetLexiconInput {
  Name: string;
}
export interface GetLexiconOutput {
  Lexicon?: Lexicon;
  LexiconAttributes?: LexiconAttributes;
}
export interface GetSpeechSynthesisTaskInput {
  TaskId: string;
}
export interface GetSpeechSynthesisTaskOutput {
  SynthesisTask?: SynthesisTask;
}
export type IncludeAdditionalLanguageCodes = boolean;

export declare class InvalidLexiconException extends EffectData.TaggedError(
  "InvalidLexiconException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidNextTokenException extends EffectData.TaggedError(
  "InvalidNextTokenException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidS3BucketException extends EffectData.TaggedError(
  "InvalidS3BucketException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidS3KeyException extends EffectData.TaggedError(
  "InvalidS3KeyException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidSampleRateException extends EffectData.TaggedError(
  "InvalidSampleRateException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidSnsTopicArnException extends EffectData.TaggedError(
  "InvalidSnsTopicArnException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidSsmlException extends EffectData.TaggedError(
  "InvalidSsmlException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTaskIdException extends EffectData.TaggedError(
  "InvalidTaskIdException",
)<{
  readonly message?: string;
}> {}
export type LanguageCode =
  | "arb"
  | "cmn_CN"
  | "cy_GB"
  | "da_DK"
  | "de_DE"
  | "en_AU"
  | "en_GB"
  | "en_GB_WLS"
  | "en_IN"
  | "en_US"
  | "es_ES"
  | "es_MX"
  | "es_US"
  | "fr_CA"
  | "fr_FR"
  | "is_IS"
  | "it_IT"
  | "ja_JP"
  | "hi_IN"
  | "ko_KR"
  | "nb_NO"
  | "nl_NL"
  | "pl_PL"
  | "pt_BR"
  | "pt_PT"
  | "ro_RO"
  | "ru_RU"
  | "sv_SE"
  | "tr_TR"
  | "en_NZ"
  | "en_ZA"
  | "ca_ES"
  | "de_AT"
  | "yue_CN"
  | "ar_AE"
  | "fi_FI"
  | "en_IE"
  | "nl_BE"
  | "fr_BE"
  | "cs_CZ"
  | "de_CH"
  | "en_SG";
export type LanguageCodeList = Array<LanguageCode>;
export type LanguageName = string;

export declare class LanguageNotSupportedException extends EffectData.TaggedError(
  "LanguageNotSupportedException",
)<{
  readonly message?: string;
}> {}
export type LastModified = Date | string;

export type LexemesCount = number;

export interface Lexicon {
  Content?: string;
  Name?: string;
}
export type LexiconArn = string;

export interface LexiconAttributes {
  Alphabet?: string;
  LanguageCode?: LanguageCode;
  LastModified?: Date | string;
  LexiconArn?: string;
  LexemesCount?: number;
  Size?: number;
}
export type LexiconContent = string;

export interface LexiconDescription {
  Name?: string;
  Attributes?: LexiconAttributes;
}
export type LexiconDescriptionList = Array<LexiconDescription>;
export type LexiconName = string;

export type LexiconNameList = Array<string>;
export declare class LexiconNotFoundException extends EffectData.TaggedError(
  "LexiconNotFoundException",
)<{
  readonly message?: string;
}> {}
export declare class LexiconSizeExceededException extends EffectData.TaggedError(
  "LexiconSizeExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListLexiconsInput {
  NextToken?: string;
}
export interface ListLexiconsOutput {
  Lexicons?: Array<LexiconDescription>;
  NextToken?: string;
}
export interface ListSpeechSynthesisTasksInput {
  MaxResults?: number;
  NextToken?: string;
  Status?: TaskStatus;
}
export interface ListSpeechSynthesisTasksOutput {
  NextToken?: string;
  SynthesisTasks?: Array<SynthesisTask>;
}
export declare class MarksNotSupportedForFormatException extends EffectData.TaggedError(
  "MarksNotSupportedForFormatException",
)<{
  readonly message?: string;
}> {}
export declare class MaxLexemeLengthExceededException extends EffectData.TaggedError(
  "MaxLexemeLengthExceededException",
)<{
  readonly message?: string;
}> {}
export declare class MaxLexiconsNumberExceededException extends EffectData.TaggedError(
  "MaxLexiconsNumberExceededException",
)<{
  readonly message?: string;
}> {}
export type MaxResults = number;

export type NextToken = string;

export type OutputFormat = "JSON" | "MP3" | "OGG_VORBIS" | "PCM";
export type OutputS3BucketName = string;

export type OutputS3KeyPrefix = string;

export type OutputUri = string;

export interface PutLexiconInput {
  Name: string;
  Content: string;
}
export interface PutLexiconOutput {}
export type RequestCharacters = number;

export type SampleRate = string;

export declare class ServiceFailureException extends EffectData.TaggedError(
  "ServiceFailureException",
)<{
  readonly message?: string;
}> {}
export type Size = number;

export type SnsTopicArn = string;

export type SpeechMarkType = "SENTENCE" | "SSML" | "VISEME" | "WORD";
export type SpeechMarkTypeList = Array<SpeechMarkType>;
export declare class SsmlMarksNotSupportedForTextTypeException extends EffectData.TaggedError(
  "SsmlMarksNotSupportedForTextTypeException",
)<{
  readonly message?: string;
}> {}
export interface StartSpeechSynthesisTaskInput {
  Engine?: Engine;
  LanguageCode?: LanguageCode;
  LexiconNames?: Array<string>;
  OutputFormat: OutputFormat;
  OutputS3BucketName: string;
  OutputS3KeyPrefix?: string;
  SampleRate?: string;
  SnsTopicArn?: string;
  SpeechMarkTypes?: Array<SpeechMarkType>;
  Text: string;
  TextType?: TextType;
  VoiceId: VoiceId;
}
export interface StartSpeechSynthesisTaskOutput {
  SynthesisTask?: SynthesisTask;
}
export interface SynthesisTask {
  Engine?: Engine;
  TaskId?: string;
  TaskStatus?: TaskStatus;
  TaskStatusReason?: string;
  OutputUri?: string;
  CreationTime?: Date | string;
  RequestCharacters?: number;
  SnsTopicArn?: string;
  LexiconNames?: Array<string>;
  OutputFormat?: OutputFormat;
  SampleRate?: string;
  SpeechMarkTypes?: Array<SpeechMarkType>;
  TextType?: TextType;
  VoiceId?: VoiceId;
  LanguageCode?: LanguageCode;
}
export declare class SynthesisTaskNotFoundException extends EffectData.TaggedError(
  "SynthesisTaskNotFoundException",
)<{
  readonly message?: string;
}> {}
export type SynthesisTasks = Array<SynthesisTask>;
export interface SynthesizeSpeechInput {
  Engine?: Engine;
  LanguageCode?: LanguageCode;
  LexiconNames?: Array<string>;
  OutputFormat: OutputFormat;
  SampleRate?: string;
  SpeechMarkTypes?: Array<SpeechMarkType>;
  Text: string;
  TextType?: TextType;
  VoiceId: VoiceId;
}
export interface SynthesizeSpeechOutput {
  AudioStream?: Uint8Array | string;
  ContentType?: string;
  RequestCharacters?: number;
}
export type TaskId = string;

export type TaskStatus = "SCHEDULED" | "IN_PROGRESS" | "COMPLETED" | "FAILED";
export type TaskStatusReason = string;

export type Text = string;

export declare class TextLengthExceededException extends EffectData.TaggedError(
  "TextLengthExceededException",
)<{
  readonly message?: string;
}> {}
export type TextType = "SSML" | "TEXT";
export declare class UnsupportedPlsAlphabetException extends EffectData.TaggedError(
  "UnsupportedPlsAlphabetException",
)<{
  readonly message?: string;
}> {}
export declare class UnsupportedPlsLanguageException extends EffectData.TaggedError(
  "UnsupportedPlsLanguageException",
)<{
  readonly message?: string;
}> {}
export interface Voice {
  Gender?: Gender;
  Id?: VoiceId;
  LanguageCode?: LanguageCode;
  LanguageName?: string;
  Name?: string;
  AdditionalLanguageCodes?: Array<LanguageCode>;
  SupportedEngines?: Array<Engine>;
}
export type VoiceId =
  | "Aditi"
  | "Amy"
  | "Astrid"
  | "Bianca"
  | "Brian"
  | "Camila"
  | "Carla"
  | "Carmen"
  | "Celine"
  | "Chantal"
  | "Conchita"
  | "Cristiano"
  | "Dora"
  | "Emma"
  | "Enrique"
  | "Ewa"
  | "Filiz"
  | "Gabrielle"
  | "Geraint"
  | "Giorgio"
  | "Gwyneth"
  | "Hans"
  | "Ines"
  | "Ivy"
  | "Jacek"
  | "Jan"
  | "Joanna"
  | "Joey"
  | "Justin"
  | "Karl"
  | "Kendra"
  | "Kevin"
  | "Kimberly"
  | "Lea"
  | "Liv"
  | "Lotte"
  | "Lucia"
  | "Lupe"
  | "Mads"
  | "Maja"
  | "Marlene"
  | "Mathieu"
  | "Matthew"
  | "Maxim"
  | "Mia"
  | "Miguel"
  | "Mizuki"
  | "Naja"
  | "Nicole"
  | "Olivia"
  | "Penelope"
  | "Raveena"
  | "Ricardo"
  | "Ruben"
  | "Russell"
  | "Salli"
  | "Seoyeon"
  | "Takumi"
  | "Tatyana"
  | "Vicki"
  | "Vitoria"
  | "Zeina"
  | "Zhiyu"
  | "Aria"
  | "Ayanda"
  | "Arlet"
  | "Hannah"
  | "Arthur"
  | "Daniel"
  | "Liam"
  | "Pedro"
  | "Kajal"
  | "Hiujin"
  | "Laura"
  | "Elin"
  | "Ida"
  | "Suvi"
  | "Ola"
  | "Hala"
  | "Andres"
  | "Sergio"
  | "Remi"
  | "Adriano"
  | "Thiago"
  | "Ruth"
  | "Stephen"
  | "Kazuha"
  | "Tomoko"
  | "Niamh"
  | "Sofie"
  | "Lisa"
  | "Isabelle"
  | "Zayd"
  | "Danielle"
  | "Gregory"
  | "Burcu"
  | "Jitka"
  | "Sabrina"
  | "Jasmine"
  | "Jihye";
export type VoiceList = Array<Voice>;
export type VoiceName = string;

export declare namespace DeleteLexicon {
  export type Input = DeleteLexiconInput;
  export type Output = DeleteLexiconOutput;
  export type Error =
    | LexiconNotFoundException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace DescribeVoices {
  export type Input = DescribeVoicesInput;
  export type Output = DescribeVoicesOutput;
  export type Error =
    | InvalidNextTokenException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace GetLexicon {
  export type Input = GetLexiconInput;
  export type Output = GetLexiconOutput;
  export type Error =
    | LexiconNotFoundException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace GetSpeechSynthesisTask {
  export type Input = GetSpeechSynthesisTaskInput;
  export type Output = GetSpeechSynthesisTaskOutput;
  export type Error =
    | InvalidTaskIdException
    | ServiceFailureException
    | SynthesisTaskNotFoundException
    | CommonAwsError;
}

export declare namespace ListLexicons {
  export type Input = ListLexiconsInput;
  export type Output = ListLexiconsOutput;
  export type Error =
    | InvalidNextTokenException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace ListSpeechSynthesisTasks {
  export type Input = ListSpeechSynthesisTasksInput;
  export type Output = ListSpeechSynthesisTasksOutput;
  export type Error =
    | InvalidNextTokenException
    | ServiceFailureException
    | CommonAwsError;
}

export declare namespace PutLexicon {
  export type Input = PutLexiconInput;
  export type Output = PutLexiconOutput;
  export type Error =
    | InvalidLexiconException
    | LexiconSizeExceededException
    | MaxLexemeLengthExceededException
    | MaxLexiconsNumberExceededException
    | ServiceFailureException
    | UnsupportedPlsAlphabetException
    | UnsupportedPlsLanguageException
    | CommonAwsError;
}

export declare namespace StartSpeechSynthesisTask {
  export type Input = StartSpeechSynthesisTaskInput;
  export type Output = StartSpeechSynthesisTaskOutput;
  export type Error =
    | EngineNotSupportedException
    | InvalidS3BucketException
    | InvalidS3KeyException
    | InvalidSampleRateException
    | InvalidSnsTopicArnException
    | InvalidSsmlException
    | LanguageNotSupportedException
    | LexiconNotFoundException
    | MarksNotSupportedForFormatException
    | ServiceFailureException
    | SsmlMarksNotSupportedForTextTypeException
    | TextLengthExceededException
    | CommonAwsError;
}

export declare namespace SynthesizeSpeech {
  export type Input = SynthesizeSpeechInput;
  export type Output = SynthesizeSpeechOutput;
  export type Error =
    | EngineNotSupportedException
    | InvalidSampleRateException
    | InvalidSsmlException
    | LanguageNotSupportedException
    | LexiconNotFoundException
    | MarksNotSupportedForFormatException
    | ServiceFailureException
    | SsmlMarksNotSupportedForTextTypeException
    | TextLengthExceededException
    | CommonAwsError;
}
