// ==========================================================================
// Transcoder API (transcoder v1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "@distilled.cloud/core/schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "transcoder",
  version: "v1",
  rootUrl: "https://transcoder.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface H265ColorFormatHLG {}

export const H265ColorFormatHLG: Schema.Codec<H265ColorFormatHLG> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "H265ColorFormatHLG",
  });

export interface Color {
  /** Control black and white contrast of the video. Enter a value between -1 and 1, where -1 is minimum contrast and 1 is maximum contrast. 0 is no change. The default is 0. */
  contrast?: number;
  /** Control color saturation of the video. Enter a value between -1 and 1, where -1 is fully desaturated and 1 is maximum saturation. 0 is no change. The default is 0. */
  saturation?: number;
  /** Control brightness of the video. Enter a value between -1 and 1, where -1 is minimum brightness and 1 is maximum brightness. 0 is no change. The default is 0. */
  brightness?: number;
}

export const Color: Schema.Codec<Color> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contrast: Schema.optional(Schema.Number),
    saturation: Schema.optional(Schema.Number),
    brightness: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Color" });

export interface SegmentSettings {
  /** Duration of the segments in seconds. The default is `6.0s`. Note that `segmentDuration` must be greater than or equal to [`gopDuration`](#videostream), and `segmentDuration` must be divisible by [`gopDuration`](#videostream). */
  segmentDuration?: string;
  /** Required. Create an individual segment file. The default is `false`. */
  individualSegments?: boolean;
}

export const SegmentSettings: Schema.Codec<SegmentSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    segmentDuration: Schema.optional(Schema.String),
    individualSegments: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SegmentSettings" });

export interface NormalizedCoordinate {
  /** Normalized y coordinate. */
  y?: number;
  /** Normalized x coordinate. */
  x?: number;
}

export const NormalizedCoordinate: Schema.Codec<NormalizedCoordinate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    y: Schema.optional(Schema.Number),
    x: Schema.optional(Schema.Number),
  }).annotate({ identifier: "NormalizedCoordinate" });

export interface AnimationFade {
  /** Normalized coordinates based on output video resolution. Valid values: `0.0`–`1.0`. `xy` is the upper-left coordinate of the overlay object. For example, use the x and y coordinates {0,0} to position the top-left corner of the overlay animation in the top-left corner of the output video. */
  xy?: NormalizedCoordinate;
  /** The time to end the fade animation, in seconds. Default: `start_time_offset` + 1s */
  endTimeOffset?: string;
  /** Required. Type of fade animation: `FADE_IN` or `FADE_OUT`. */
  fadeType?: "FADE_TYPE_UNSPECIFIED" | "FADE_IN" | "FADE_OUT" | (string & {});
  /** The time to start the fade animation, in seconds. Default: 0 */
  startTimeOffset?: string;
}

export const AnimationFade: Schema.Codec<AnimationFade> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    xy: Schema.optional(NormalizedCoordinate),
    endTimeOffset: Schema.optional(Schema.String),
    fadeType: Schema.optional(Schema.String),
    startTimeOffset: Schema.optional(Schema.String),
  }).annotate({ identifier: "AnimationFade" });

export interface Deblock {
  /** Enable deblocker. The default is `false`. */
  enabled?: boolean;
  /** Set strength of the deblocker. Enter a value between 0 and 1. The higher the value, the stronger the block removal. 0 is no deblocking. The default is 0. */
  strength?: number;
}

export const Deblock: Schema.Codec<Deblock> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    strength: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Deblock" });

export interface H264ColorFormatHLG {}

export const H264ColorFormatHLG: Schema.Codec<H264ColorFormatHLG> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "H264ColorFormatHLG",
  });

export interface AudioMapping {
  /** Required. The EditAtom.key that references the atom with audio inputs in the JobConfig.edit_list. */
  atomKey?: string;
  /** Required. The zero-based index of the channel in the input audio stream. */
  inputChannel?: number;
  /** Required. The zero-based index of the channel in the output audio stream. */
  outputChannel?: number;
  /** Required. The zero-based index of the track in the input file. */
  inputTrack?: number;
  /** Required. The Input.key that identifies the input file. */
  inputKey?: string;
  /** Audio volume control in dB. Negative values decrease volume, positive values increase. The default is 0. */
  gainDb?: number;
}

export const AudioMapping: Schema.Codec<AudioMapping> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    atomKey: Schema.optional(Schema.String),
    inputChannel: Schema.optional(Schema.Number),
    outputChannel: Schema.optional(Schema.Number),
    inputTrack: Schema.optional(Schema.Number),
    inputKey: Schema.optional(Schema.String),
    gainDb: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AudioMapping" });

export interface Playready {}

export const Playready: Schema.Codec<Playready> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Playready",
  });

export interface TextMapping {
  /** Required. The EditAtom.key that references atom with text inputs in the JobConfig.edit_list. */
  atomKey?: string;
  /** Required. The zero-based index of the track in the input file. */
  inputTrack?: number;
  /** Required. The Input.key that identifies the input file. */
  inputKey?: string;
}

export const TextMapping: Schema.Codec<TextMapping> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    atomKey: Schema.optional(Schema.String),
    inputTrack: Schema.optional(Schema.Number),
    inputKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "TextMapping" });

export interface TextStream {
  /** The BCP-47 language code, such as `en-US` or `sr-Latn`. For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier. Not supported in MP4 files. */
  languageCode?: string;
  /** The mapping for the JobConfig.edit_list atoms with text EditAtom.inputs. */
  mapping?: ReadonlyArray<TextMapping>;
  /** The codec for this text stream. The default is `webvtt`. Supported text codecs: - `srt` - `ttml` - `cea608` - `cea708` - `webvtt` */
  codec?: string;
  /** The name for this particular text stream that will be added to the HLS/DASH manifest. Not supported in MP4 files. */
  displayName?: string;
}

export const TextStream: Schema.Codec<TextStream> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    mapping: Schema.optional(Schema.Array(TextMapping)),
    codec: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "TextStream" });

export interface AudioStream {
  /** The mapping for the JobConfig.edit_list atoms with audio EditAtom.inputs. */
  mapping?: ReadonlyArray<AudioMapping>;
  /** A list of channel names specifying layout of the audio channels. This only affects the metadata embedded in the container headers, if supported by the specified format. The default is `["fl", "fr"]`. Supported channel names: - `fl` - Front left channel - `fr` - Front right channel - `sl` - Side left channel - `sr` - Side right channel - `fc` - Front center channel - `lfe` - Low frequency */
  channelLayout?: ReadonlyArray<string>;
  /** The codec for this audio stream. The default is `aac`. Supported audio codecs: - `aac` - `aac-he` - `aac-he-v2` - `mp3` - `ac3` - `eac3` - `vorbis` */
  codec?: string;
  /** The name for this particular audio stream that will be added to the HLS/DASH manifest. Not supported in MP4 files. */
  displayName?: string;
  /** Number of audio channels. Must be between 1 and 6. The default is 2. */
  channelCount?: number;
  /** The BCP-47 language code, such as `en-US` or `sr-Latn`. For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier. Not supported in MP4 files. */
  languageCode?: string;
  /** Required. Audio bitrate in bits per second. Must be between 1 and 10,000,000. */
  bitrateBps?: number;
  /** The audio sample rate in Hertz. The default is 48000 Hertz. */
  sampleRateHertz?: number;
}

export const AudioStream: Schema.Codec<AudioStream> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mapping: Schema.optional(Schema.Array(AudioMapping)),
    channelLayout: Schema.optional(Schema.Array(Schema.String)),
    codec: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    channelCount: Schema.optional(Schema.Number),
    languageCode: Schema.optional(Schema.String),
    bitrateBps: Schema.optional(Schema.Number),
    sampleRateHertz: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AudioStream" });

export interface H264ColorFormatSDR {}

export const H264ColorFormatSDR: Schema.Codec<H264ColorFormatSDR> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "H264ColorFormatSDR",
  });

export interface H264CodecSettings {
  /** Optional. SDR color format setting for H264. */
  sdr?: H264ColorFormatSDR;
  /** Optional. Frame rate conversion strategy for desired frame rate. The default is `DOWNSAMPLE`. */
  frameRateConversionStrategy?:
    | "FRAME_RATE_CONVERSION_STRATEGY_UNSPECIFIED"
    | "DOWNSAMPLE"
    | "DROP_DUPLICATE"
    | (string & {});
  /** The number of consecutive B-frames. Must be greater than or equal to zero. Must be less than H264CodecSettings.gop_frame_count if set. The default is 0. */
  bFrameCount?: number;
  /** Size of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to H264CodecSettings.bitrate_bps. */
  vbvSizeBits?: number;
  /** Enforces the specified codec preset. The default is `veryfast`. The available options are [FFmpeg-compatible](https://trac.ffmpeg.org/wiki/Encode/H.264#Preset). Note that certain values for this field may cause the transcoder to override other fields you set in the `H264CodecSettings` message. */
  preset?: string;
  /** Pixel format to use. The default is `yuv420p`. Supported pixel formats: - `yuv420p` pixel format - `yuv422p` pixel format - `yuv444p` pixel format - `yuv420p10` 10-bit HDR pixel format - `yuv422p10` 10-bit HDR pixel format - `yuv444p10` 10-bit HDR pixel format - `yuv420p12` 12-bit HDR pixel format - `yuv422p12` 12-bit HDR pixel format - `yuv444p12` 12-bit HDR pixel format */
  pixelFormat?: string;
  /** Optional. HLG color format setting for H264. */
  hlg?: H264ColorFormatHLG;
  /** Specify the intensity of the adaptive quantizer (AQ). Must be between 0 and 1, where 0 disables the quantizer and 1 maximizes the quantizer. A higher value equals a lower bitrate but smoother image. The default is 0. */
  aqStrength?: number;
  /** Specify the mode. The default is `vbr`. Supported rate control modes: - `vbr` - variable bitrate - `crf` - constant rate factor */
  rateControlMode?: string;
  /** Target CRF level. Must be between 10 and 36, where 10 is the highest quality and 36 is the most efficient compression. The default is 21. */
  crfLevel?: number;
  /** Enforces the specified codec tune. The available options are [FFmpeg-compatible](https://trac.ffmpeg.org/wiki/Encode/H.264#Tune). Note that certain values for this field may cause the transcoder to override other fields you set in the `H264CodecSettings` message. */
  tune?: string;
  /** Select the GOP size based on the specified frame count. Must be greater than zero. */
  gopFrameCount?: number;
  /** Allow B-pyramid for reference frame selection. This may not be supported on all decoders. The default is `false`. */
  bPyramid?: boolean;
  /** Select the GOP size based on the specified duration. The default is `3s`. Note that `gopDuration` must be less than or equal to [`segmentDuration`](#SegmentSettings), and [`segmentDuration`](#SegmentSettings) must be divisible by `gopDuration`. */
  gopDuration?: string;
  /** Required. The video bitrate in bits per second. The minimum value is 1,000. The maximum value is 800,000,000. */
  bitrateBps?: number;
  /** Specifies whether an open Group of Pictures (GOP) structure should be allowed or not. The default is `false`. */
  allowOpenGop?: boolean;
  /** The width of the video in pixels. Must be an even integer. When not specified, the width is adjusted to match the specified height and input aspect ratio. If both are omitted, the input width is used. For portrait videos that contain horizontal ASR and rotation metadata, provide the width, in pixels, per the horizontal ASR. The API calculates the height per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output. */
  widthPixels?: number;
  /** The height of the video in pixels. Must be an even integer. When not specified, the height is adjusted to match the specified width and input aspect ratio. If both are omitted, the input height is used. For portrait videos that contain horizontal ASR and rotation metadata, provide the height, in pixels, per the horizontal ASR. The API calculates the width per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output. */
  heightPixels?: number;
  /** Required. The target video frame rate in frames per second (FPS). Must be less than or equal to 120. */
  frameRate?: number;
  /** Use two-pass encoding strategy to achieve better video quality. H264CodecSettings.rate_control_mode must be `vbr`. The default is `false`. */
  enableTwoPass?: boolean;
  /** Initial fullness of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to 90% of H264CodecSettings.vbv_size_bits. */
  vbvFullnessBits?: number;
  /** The entropy coder to use. The default is `cabac`. Supported entropy coders: - `cavlc` - `cabac` */
  entropyCoder?: string;
  /** Enforces the specified codec profile. The following profiles are supported: * `baseline` * `main` * `high` (default) The available options are [FFmpeg-compatible](https://trac.ffmpeg.org/wiki/Encode/H.264#Tune). Note that certain values for this field may cause the transcoder to override other fields you set in the `H264CodecSettings` message. */
  profile?: string;
}

export const H264CodecSettings: Schema.Codec<H264CodecSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sdr: Schema.optional(H264ColorFormatSDR),
    frameRateConversionStrategy: Schema.optional(Schema.String),
    bFrameCount: Schema.optional(Schema.Number),
    vbvSizeBits: Schema.optional(Schema.Number),
    preset: Schema.optional(Schema.String),
    pixelFormat: Schema.optional(Schema.String),
    hlg: Schema.optional(H264ColorFormatHLG),
    aqStrength: Schema.optional(Schema.Number),
    rateControlMode: Schema.optional(Schema.String),
    crfLevel: Schema.optional(Schema.Number),
    tune: Schema.optional(Schema.String),
    gopFrameCount: Schema.optional(Schema.Number),
    bPyramid: Schema.optional(Schema.Boolean),
    gopDuration: Schema.optional(Schema.String),
    bitrateBps: Schema.optional(Schema.Number),
    allowOpenGop: Schema.optional(Schema.Boolean),
    widthPixels: Schema.optional(Schema.Number),
    heightPixels: Schema.optional(Schema.Number),
    frameRate: Schema.optional(Schema.Number),
    enableTwoPass: Schema.optional(Schema.Boolean),
    vbvFullnessBits: Schema.optional(Schema.Number),
    entropyCoder: Schema.optional(Schema.String),
    profile: Schema.optional(Schema.String),
  }).annotate({ identifier: "H264CodecSettings" });

export interface H265ColorFormatHDR10 {}

export const H265ColorFormatHDR10: Schema.Codec<H265ColorFormatHDR10> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "H265ColorFormatHDR10",
  });

export interface H265ColorFormatSDR {}

export const H265ColorFormatSDR: Schema.Codec<H265ColorFormatSDR> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "H265ColorFormatSDR",
  });

export interface H265CodecSettings {
  /** Select the GOP size based on the specified duration. The default is `3s`. Note that `gopDuration` must be less than or equal to [`segmentDuration`](#SegmentSettings), and [`segmentDuration`](#SegmentSettings) must be divisible by `gopDuration`. */
  gopDuration?: string;
  /** Select the GOP size based on the specified frame count. Must be greater than zero. */
  gopFrameCount?: number;
  /** Allow B-pyramid for reference frame selection. This may not be supported on all decoders. The default is `false`. */
  bPyramid?: boolean;
  /** Enforces the specified codec tune. The available options are [FFmpeg-compatible](https://trac.ffmpeg.org/wiki/Encode/H.265). Note that certain values for this field may cause the transcoder to override other fields you set in the `H265CodecSettings` message. */
  tune?: string;
  /** Specify the mode. The default is `vbr`. Supported rate control modes: - `vbr` - variable bitrate - `crf` - constant rate factor */
  rateControlMode?: string;
  /** Target CRF level. Must be between 10 and 36, where 10 is the highest quality and 36 is the most efficient compression. The default is 21. */
  crfLevel?: number;
  /** Specify the intensity of the adaptive quantizer (AQ). Must be between 0 and 1, where 0 disables the quantizer and 1 maximizes the quantizer. A higher value equals a lower bitrate but smoother image. The default is 0. */
  aqStrength?: number;
  /** Enforces the specified codec profile. The following profiles are supported: * 8-bit profiles * `main` (default) * `main-intra` * `mainstillpicture` * 10-bit profiles * `main10` (default) * `main10-intra` * `main422-10` * `main422-10-intra` * `main444-10` * `main444-10-intra` * 12-bit profiles * `main12` (default) * `main12-intra` * `main422-12` * `main422-12-intra` * `main444-12` * `main444-12-intra` The available options are [FFmpeg-compatible](https://x265.readthedocs.io/). Note that certain values for this field may cause the transcoder to override other fields you set in the `H265CodecSettings` message. */
  profile?: string;
  /** Use two-pass encoding strategy to achieve better video quality. H265CodecSettings.rate_control_mode must be `vbr`. The default is `false`. */
  enableTwoPass?: boolean;
  /** Initial fullness of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to 90% of H265CodecSettings.vbv_size_bits. */
  vbvFullnessBits?: number;
  /** Required. The target video frame rate in frames per second (FPS). Must be less than or equal to 120. */
  frameRate?: number;
  /** The height of the video in pixels. Must be an even integer. When not specified, the height is adjusted to match the specified width and input aspect ratio. If both are omitted, the input height is used. For portrait videos that contain horizontal ASR and rotation metadata, provide the height, in pixels, per the horizontal ASR. The API calculates the width per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output. */
  heightPixels?: number;
  /** The width of the video in pixels. Must be an even integer. When not specified, the width is adjusted to match the specified height and input aspect ratio. If both are omitted, the input width is used. For portrait videos that contain horizontal ASR and rotation metadata, provide the width, in pixels, per the horizontal ASR. The API calculates the height per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output. */
  widthPixels?: number;
  /** Specifies whether an open Group of Pictures (GOP) structure should be allowed or not. The default is `false`. */
  allowOpenGop?: boolean;
  /** Required. The video bitrate in bits per second. The minimum value is 1,000. The maximum value is 800,000,000. */
  bitrateBps?: number;
  /** The number of consecutive B-frames. Must be greater than or equal to zero. Must be less than H265CodecSettings.gop_frame_count if set. The default is 0. */
  bFrameCount?: number;
  /** Optional. Frame rate conversion strategy for desired frame rate. The default is `DOWNSAMPLE`. */
  frameRateConversionStrategy?:
    | "FRAME_RATE_CONVERSION_STRATEGY_UNSPECIFIED"
    | "DOWNSAMPLE"
    | "DROP_DUPLICATE"
    | (string & {});
  /** Optional. HDR10 color format setting for H265. */
  hdr10?: H265ColorFormatHDR10;
  /** Optional. SDR color format setting for H265. */
  sdr?: H265ColorFormatSDR;
  /** Pixel format to use. The default is `yuv420p`. Supported pixel formats: - `yuv420p` pixel format - `yuv422p` pixel format - `yuv444p` pixel format - `yuv420p10` 10-bit HDR pixel format - `yuv422p10` 10-bit HDR pixel format - `yuv444p10` 10-bit HDR pixel format - `yuv420p12` 12-bit HDR pixel format - `yuv422p12` 12-bit HDR pixel format - `yuv444p12` 12-bit HDR pixel format */
  pixelFormat?: string;
  /** Optional. HLG color format setting for H265. */
  hlg?: H265ColorFormatHLG;
  /** Enforces the specified codec preset. The default is `veryfast`. The available options are [FFmpeg-compatible](https://trac.ffmpeg.org/wiki/Encode/H.265). Note that certain values for this field may cause the transcoder to override other fields you set in the `H265CodecSettings` message. */
  preset?: string;
  /** Size of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to `VideoStream.bitrate_bps`. */
  vbvSizeBits?: number;
}

export const H265CodecSettings: Schema.Codec<H265CodecSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gopDuration: Schema.optional(Schema.String),
    gopFrameCount: Schema.optional(Schema.Number),
    bPyramid: Schema.optional(Schema.Boolean),
    tune: Schema.optional(Schema.String),
    rateControlMode: Schema.optional(Schema.String),
    crfLevel: Schema.optional(Schema.Number),
    aqStrength: Schema.optional(Schema.Number),
    profile: Schema.optional(Schema.String),
    enableTwoPass: Schema.optional(Schema.Boolean),
    vbvFullnessBits: Schema.optional(Schema.Number),
    frameRate: Schema.optional(Schema.Number),
    heightPixels: Schema.optional(Schema.Number),
    widthPixels: Schema.optional(Schema.Number),
    allowOpenGop: Schema.optional(Schema.Boolean),
    bitrateBps: Schema.optional(Schema.Number),
    bFrameCount: Schema.optional(Schema.Number),
    frameRateConversionStrategy: Schema.optional(Schema.String),
    hdr10: Schema.optional(H265ColorFormatHDR10),
    sdr: Schema.optional(H265ColorFormatSDR),
    pixelFormat: Schema.optional(Schema.String),
    hlg: Schema.optional(H265ColorFormatHLG),
    preset: Schema.optional(Schema.String),
    vbvSizeBits: Schema.optional(Schema.Number),
  }).annotate({ identifier: "H265CodecSettings" });

export interface Vp9ColorFormatSDR {}

export const Vp9ColorFormatSDR: Schema.Codec<Vp9ColorFormatSDR> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Vp9ColorFormatSDR",
  });

export interface Vp9ColorFormatHLG {}

export const Vp9ColorFormatHLG: Schema.Codec<Vp9ColorFormatHLG> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Vp9ColorFormatHLG",
  });

export interface Vp9CodecSettings {
  /** Optional. Frame rate conversion strategy for desired frame rate. The default is `DOWNSAMPLE`. */
  frameRateConversionStrategy?:
    | "FRAME_RATE_CONVERSION_STRATEGY_UNSPECIFIED"
    | "DOWNSAMPLE"
    | "DROP_DUPLICATE"
    | (string & {});
  /** Optional. SDR color format setting for VP9. */
  sdr?: Vp9ColorFormatSDR;
  /** Pixel format to use. The default is `yuv420p`. Supported pixel formats: - `yuv420p` pixel format - `yuv422p` pixel format - `yuv444p` pixel format - `yuv420p10` 10-bit HDR pixel format - `yuv422p10` 10-bit HDR pixel format - `yuv444p10` 10-bit HDR pixel format - `yuv420p12` 12-bit HDR pixel format - `yuv422p12` 12-bit HDR pixel format - `yuv444p12` 12-bit HDR pixel format */
  pixelFormat?: string;
  /** Optional. HLG color format setting for VP9. */
  hlg?: Vp9ColorFormatHLG;
  /** Specify the mode. The default is `vbr`. Supported rate control modes: - `vbr` - variable bitrate */
  rateControlMode?: string;
  /** Target CRF level. Must be between 10 and 36, where 10 is the highest quality and 36 is the most efficient compression. The default is 21. **Note:** This field is not supported. */
  crfLevel?: number;
  /** Select the GOP size based on the specified frame count. Must be greater than zero. */
  gopFrameCount?: number;
  /** Select the GOP size based on the specified duration. The default is `3s`. Note that `gopDuration` must be less than or equal to [`segmentDuration`](#SegmentSettings), and [`segmentDuration`](#SegmentSettings) must be divisible by `gopDuration`. */
  gopDuration?: string;
  /** The width of the video in pixels. Must be an even integer. When not specified, the width is adjusted to match the specified height and input aspect ratio. If both are omitted, the input width is used. For portrait videos that contain horizontal ASR and rotation metadata, provide the width, in pixels, per the horizontal ASR. The API calculates the height per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output. */
  widthPixels?: number;
  /** Required. The video bitrate in bits per second. The minimum value is 1,000. The maximum value is 480,000,000. */
  bitrateBps?: number;
  /** Enforces the specified codec profile. The following profiles are supported: * `profile0` (default) * `profile1` * `profile2` * `profile3` The available options are [WebM-compatible](https://www.webmproject.org/vp9/profiles/). Note that certain values for this field may cause the transcoder to override other fields you set in the `Vp9CodecSettings` message. */
  profile?: string;
  /** The height of the video in pixels. Must be an even integer. When not specified, the height is adjusted to match the specified width and input aspect ratio. If both are omitted, the input height is used. For portrait videos that contain horizontal ASR and rotation metadata, provide the height, in pixels, per the horizontal ASR. The API calculates the width per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output. */
  heightPixels?: number;
  /** Required. The target video frame rate in frames per second (FPS). Must be less than or equal to 120. */
  frameRate?: number;
}

export const Vp9CodecSettings: Schema.Codec<Vp9CodecSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    frameRateConversionStrategy: Schema.optional(Schema.String),
    sdr: Schema.optional(Vp9ColorFormatSDR),
    pixelFormat: Schema.optional(Schema.String),
    hlg: Schema.optional(Vp9ColorFormatHLG),
    rateControlMode: Schema.optional(Schema.String),
    crfLevel: Schema.optional(Schema.Number),
    gopFrameCount: Schema.optional(Schema.Number),
    gopDuration: Schema.optional(Schema.String),
    widthPixels: Schema.optional(Schema.Number),
    bitrateBps: Schema.optional(Schema.Number),
    profile: Schema.optional(Schema.String),
    heightPixels: Schema.optional(Schema.Number),
    frameRate: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Vp9CodecSettings" });

export interface VideoStream {
  /** H264 codec settings. */
  h264?: H264CodecSettings;
  /** H265 codec settings. */
  h265?: H265CodecSettings;
  /** VP9 codec settings. */
  vp9?: Vp9CodecSettings;
}

export const VideoStream: Schema.Codec<VideoStream> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    h264: Schema.optional(H264CodecSettings),
    h265: Schema.optional(H265CodecSettings),
    vp9: Schema.optional(Vp9CodecSettings),
  }).annotate({ identifier: "VideoStream" });

export interface ElementaryStream {
  /** Encoding of a text stream. For example, closed captions or subtitles. */
  textStream?: TextStream;
  /** A unique key for this elementary stream. */
  key?: string;
  /** Encoding of an audio stream. */
  audioStream?: AudioStream;
  /** Encoding of a video stream. */
  videoStream?: VideoStream;
}

export const ElementaryStream: Schema.Codec<ElementaryStream> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    textStream: Schema.optional(TextStream),
    key: Schema.optional(Schema.String),
    audioStream: Schema.optional(AudioStream),
    videoStream: Schema.optional(VideoStream),
  }).annotate({ identifier: "ElementaryStream" });

export interface Audio {
  /** Enable boosting low frequency components. The default is `false`. **Note:** This field is not supported. */
  lowBoost?: boolean;
  /** Specify audio loudness normalization in loudness units relative to full scale (LUFS). Enter a value between -24 and 0 (the default), where: * -24 is the Advanced Television Systems Committee (ATSC A/85) standard * -23 is the EU R128 broadcast standard * -19 is the prior standard for online mono audio * -18 is the ReplayGain standard * -16 is the prior standard for stereo audio * -14 is the new online audio standard recommended by Spotify, as well as Amazon Echo * 0 disables normalization */
  lufs?: number;
  /** Enable boosting high frequency components. The default is `false`. **Note:** This field is not supported. */
  highBoost?: boolean;
}

export const Audio: Schema.Codec<Audio> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lowBoost: Schema.optional(Schema.Boolean),
    lufs: Schema.optional(Schema.Number),
    highBoost: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Audio" });

export interface Pad {
  /** The number of pixels to add to the left. The default is 0. */
  leftPixels?: number;
  /** The number of pixels to add to the right. The default is 0. */
  rightPixels?: number;
  /** The number of pixels to add to the top. The default is 0. */
  topPixels?: number;
  /** The number of pixels to add to the bottom. The default is 0. */
  bottomPixels?: number;
}

export const Pad: Schema.Codec<Pad> = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    leftPixels: Schema.optional(Schema.Number),
    rightPixels: Schema.optional(Schema.Number),
    topPixels: Schema.optional(Schema.Number),
    bottomPixels: Schema.optional(Schema.Number),
  },
).annotate({ identifier: "Pad" });

export interface YadifConfig {
  /** Specifies the deinterlacing mode to adopt. The default is `send_frame`. Supported values: - `send_frame`: Output one frame for each frame - `send_field`: Output one frame for each field */
  mode?: string;
  /** The picture field parity assumed for the input interlaced video. The default is `auto`. Supported values: - `tff`: Assume the top field is first - `bff`: Assume the bottom field is first - `auto`: Enable automatic detection of field parity */
  parity?: string;
  /** Deinterlace all frames rather than just the frames identified as interlaced. The default is `false`. */
  deinterlaceAllFrames?: boolean;
  /** Disable spacial interlacing. The default is `false`. */
  disableSpatialInterlacing?: boolean;
}

export const YadifConfig: Schema.Codec<YadifConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mode: Schema.optional(Schema.String),
    parity: Schema.optional(Schema.String),
    deinterlaceAllFrames: Schema.optional(Schema.Boolean),
    disableSpatialInterlacing: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "YadifConfig" });

export interface BwdifConfig {
  /** Deinterlace all frames rather than just the frames identified as interlaced. The default is `false`. */
  deinterlaceAllFrames?: boolean;
  /** Specifies the deinterlacing mode to adopt. The default is `send_frame`. Supported values: - `send_frame`: Output one frame for each frame - `send_field`: Output one frame for each field */
  mode?: string;
  /** The picture field parity assumed for the input interlaced video. The default is `auto`. Supported values: - `tff`: Assume the top field is first - `bff`: Assume the bottom field is first - `auto`: Enable automatic detection of field parity */
  parity?: string;
}

export const BwdifConfig: Schema.Codec<BwdifConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deinterlaceAllFrames: Schema.optional(Schema.Boolean),
    mode: Schema.optional(Schema.String),
    parity: Schema.optional(Schema.String),
  }).annotate({ identifier: "BwdifConfig" });

export interface Deinterlace {
  /** Specifies the Yet Another Deinterlacing Filter Configuration. */
  yadif?: YadifConfig;
  /** Specifies the Bob Weaver Deinterlacing Filter Configuration. */
  bwdif?: BwdifConfig;
}

export const Deinterlace: Schema.Codec<Deinterlace> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    yadif: Schema.optional(YadifConfig),
    bwdif: Schema.optional(BwdifConfig),
  }).annotate({ identifier: "Deinterlace" });

export interface Denoise {
  /** Set strength of the denoise. Enter a value between 0 and 1. The higher the value, the smoother the image. 0 is no denoising. The default is 0. */
  strength?: number;
  /** Set the denoiser mode. The default is `standard`. Supported denoiser modes: - `standard` - `grain` */
  tune?: string;
}

export const Denoise: Schema.Codec<Denoise> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    strength: Schema.optional(Schema.Number),
    tune: Schema.optional(Schema.String),
  }).annotate({ identifier: "Denoise" });

export interface Crop {
  /** The number of pixels to crop from the left. The default is 0. */
  leftPixels?: number;
  /** The number of pixels to crop from the right. The default is 0. */
  rightPixels?: number;
  /** The number of pixels to crop from the bottom. The default is 0. */
  bottomPixels?: number;
  /** The number of pixels to crop from the top. The default is 0. */
  topPixels?: number;
}

export const Crop: Schema.Codec<Crop> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    leftPixels: Schema.optional(Schema.Number),
    rightPixels: Schema.optional(Schema.Number),
    bottomPixels: Schema.optional(Schema.Number),
    topPixels: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Crop" });

export interface PreprocessingConfig {
  /** Color preprocessing configuration. */
  color?: Color;
  /** Audio preprocessing configuration. */
  audio?: Audio;
  /** Specify the video pad filter configuration. */
  pad?: Pad;
  /** Specify the video deinterlace configuration. */
  deinterlace?: Deinterlace;
  /** Deblock preprocessing configuration. */
  deblock?: Deblock;
  /** Denoise preprocessing configuration. */
  denoise?: Denoise;
  /** Specify the video cropping configuration. */
  crop?: Crop;
}

export const PreprocessingConfig: Schema.Codec<PreprocessingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    color: Schema.optional(Color),
    audio: Schema.optional(Audio),
    pad: Schema.optional(Pad),
    deinterlace: Schema.optional(Deinterlace),
    deblock: Schema.optional(Deblock),
    denoise: Schema.optional(Denoise),
    crop: Schema.optional(Crop),
  }).annotate({ identifier: "PreprocessingConfig" });

export interface TrackDefinition {
  /** Optional. A list of languages spoken in the input asset, represented by a BCP 47 language code, such as "en-US" or "sr-Latn". For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languages?: ReadonlyArray<string>;
  /** Optional. Whether to automatically detect the languages present in the track. If true, the system will attempt to identify all the languages present in the track and populate the languages field. */
  detectLanguages?: boolean;
  /** Output only. A list of languages detected in the input asset, represented by a BCP 47 language code, such as "en-US" or "sr-Latn". For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier. This field is only populated if the detect_languages field is set to true. */
  detectedLanguages?: ReadonlyArray<string>;
  /** The input track. */
  inputTrack?: number;
}

export const TrackDefinition: Schema.Codec<TrackDefinition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languages: Schema.optional(Schema.Array(Schema.String)),
    detectLanguages: Schema.optional(Schema.Boolean),
    detectedLanguages: Schema.optional(Schema.Array(Schema.String)),
    inputTrack: Schema.optional(Schema.Number),
  }).annotate({ identifier: "TrackDefinition" });

export interface InputAttributes {
  /** Optional. A list of track definitions for the input asset. */
  trackDefinitions?: ReadonlyArray<TrackDefinition>;
}

export const InputAttributes: Schema.Codec<InputAttributes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trackDefinitions: Schema.optional(Schema.Array(TrackDefinition)),
  }).annotate({ identifier: "InputAttributes" });

export interface Input {
  /** A unique key for this input. Must be specified when using advanced mapping and edit lists. */
  key?: string;
  /** Preprocessing configurations. */
  preprocessingConfig?: PreprocessingConfig;
  /** URI of the media. Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, `gs://bucket/inputs/file.mp4`). If empty, the value is populated from Job.input_uri. See [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats). */
  uri?: string;
  /** Optional. Input Attributes. */
  attributes?: InputAttributes;
}

export const Input: Schema.Codec<Input> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    preprocessingConfig: Schema.optional(PreprocessingConfig),
    uri: Schema.optional(Schema.String),
    attributes: Schema.optional(InputAttributes),
  }).annotate({ identifier: "Input" });

export interface PubsubDestination {
  /** The name of the Pub/Sub topic to publish job completion notification to. For example: `projects/{project}/topics/{topic}`. */
  topic?: string;
}

export const PubsubDestination: Schema.Codec<PubsubDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topic: Schema.optional(Schema.String),
  }).annotate({ identifier: "PubsubDestination" });

export interface Fmp4Config {
  /** Optional. Specify the codec tag string that will be used in the media bitstream. When not specified, the codec appropriate value is used. Supported H265 codec tags: - `hvc1` (default) - `hev1` */
  codecTag?: string;
}

export const Fmp4Config: Schema.Codec<Fmp4Config> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    codecTag: Schema.optional(Schema.String),
  }).annotate({ identifier: "Fmp4Config" });

export interface MuxStream {
  /** Identifier of the encryption configuration to use. If omitted, output will be unencrypted. */
  encryptionId?: string;
  /** A unique key for this multiplexed stream. */
  key?: string;
  /** List of ElementaryStream.key values multiplexed in this stream. */
  elementaryStreams?: ReadonlyArray<string>;
  /** The container format. The default is `mp4` Supported streaming formats: - `ts` - `fmp4`- the corresponding file extension is `.m4s` Supported standalone file formats: - `mp4` - `mp3` - `ogg` - `vtt` See also: [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats) */
  container?: string;
  /** Optional. `fmp4` container configuration. */
  fmp4?: Fmp4Config;
  /** The name of the generated file. The default is MuxStream.key with the extension suffix corresponding to the MuxStream.container. Individual segments also have an incremental 10-digit zero-padded suffix starting from 0 before the extension, such as `mux_stream0000000123.ts`. */
  fileName?: string;
  /** Segment settings for `ts`, `fmp4` and `vtt`. */
  segmentSettings?: SegmentSettings;
}

export const MuxStream: Schema.Codec<MuxStream> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    encryptionId: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
    elementaryStreams: Schema.optional(Schema.Array(Schema.String)),
    container: Schema.optional(Schema.String),
    fmp4: Schema.optional(Fmp4Config),
    fileName: Schema.optional(Schema.String),
    segmentSettings: Schema.optional(SegmentSettings),
  }).annotate({ identifier: "MuxStream" });

export interface Output {
  /** URI for the output file(s). For example, `gs://my-bucket/outputs/`. Must be a directory and not a top-level bucket. If empty, the value is populated from Job.output_uri. See [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats). */
  uri?: string;
}

export const Output: Schema.Codec<Output> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "Output" });

export interface SpriteSheet {
  /** The maximum number of sprites per row in a sprite sheet. The default is 0, which indicates no maximum limit. */
  columnCount?: number;
  /** Format type. The default is `jpeg`. Supported formats: - `jpeg` */
  format?: string;
  /** End time in seconds, relative to the output file timeline. When `end_time_offset` is not specified, the sprites are generated until the end of the output file. */
  endTimeOffset?: string;
  /** The quality of the generated sprite sheet. Enter a value between 1 and 100, where 1 is the lowest quality and 100 is the highest quality. The default is 100. A high quality value corresponds to a low image data compression ratio. */
  quality?: number;
  /** Required. The height of sprite in pixels. Must be an even integer. To preserve the source aspect ratio, set the SpriteSheet.sprite_height_pixels field or the SpriteSheet.sprite_width_pixels field, but not both (the API will automatically calculate the missing field). For portrait videos that contain horizontal ASR and rotation metadata, provide the height, in pixels, per the horizontal ASR. The API calculates the width per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output. */
  spriteHeightPixels?: number;
  /** Starting from `0s`, create sprites at regular intervals. Specify the interval value in seconds. */
  interval?: string;
  /** The maximum number of rows per sprite sheet. When the sprite sheet is full, a new sprite sheet is created. The default is 0, which indicates no maximum limit. */
  rowCount?: number;
  /** Total number of sprites. Create the specified number of sprites distributed evenly across the timeline of the output media. The default is 100. */
  totalCount?: number;
  /** Required. File name prefix for the generated sprite sheets. Each sprite sheet has an incremental 10-digit zero-padded suffix starting from 0 before the extension, such as `sprite_sheet0000000123.jpeg`. */
  filePrefix?: string;
  /** Required. The width of sprite in pixels. Must be an even integer. To preserve the source aspect ratio, set the SpriteSheet.sprite_width_pixels field or the SpriteSheet.sprite_height_pixels field, but not both (the API will automatically calculate the missing field). For portrait videos that contain horizontal ASR and rotation metadata, provide the width, in pixels, per the horizontal ASR. The API calculates the height per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output. */
  spriteWidthPixels?: number;
  /** Start time in seconds, relative to the output file timeline. Determines the first sprite to pick. The default is `0s`. */
  startTimeOffset?: string;
}

export const SpriteSheet: Schema.Codec<SpriteSheet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    columnCount: Schema.optional(Schema.Number),
    format: Schema.optional(Schema.String),
    endTimeOffset: Schema.optional(Schema.String),
    quality: Schema.optional(Schema.Number),
    spriteHeightPixels: Schema.optional(Schema.Number),
    interval: Schema.optional(Schema.String),
    rowCount: Schema.optional(Schema.Number),
    totalCount: Schema.optional(Schema.Number),
    filePrefix: Schema.optional(Schema.String),
    spriteWidthPixels: Schema.optional(Schema.Number),
    startTimeOffset: Schema.optional(Schema.String),
  }).annotate({ identifier: "SpriteSheet" });

export interface AdBreak {
  /** Start time in seconds for the ad break, relative to the output file timeline. The default is `0s`. */
  startTimeOffset?: string;
}

export const AdBreak: Schema.Codec<AdBreak> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTimeOffset: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdBreak" });

export interface EditAtom {
  /** A unique key for this atom. Must be specified when using advanced mapping. */
  key?: string;
  /** Start time in seconds for the atom, relative to the input file timeline. The default is `0s`. */
  startTimeOffset?: string;
  /** List of Input.key values identifying files that should be used in this atom. The listed `inputs` must have the same timeline. */
  inputs?: ReadonlyArray<string>;
  /** End time in seconds for the atom, relative to the input file timeline. When `end_time_offset` is not specified, the `inputs` are used until the end of the atom. */
  endTimeOffset?: string;
}

export const EditAtom: Schema.Codec<EditAtom> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    startTimeOffset: Schema.optional(Schema.String),
    inputs: Schema.optional(Schema.Array(Schema.String)),
    endTimeOffset: Schema.optional(Schema.String),
  }).annotate({ identifier: "EditAtom" });

export interface MpegCommonEncryption {
  /** Required. Specify the encryption scheme. Supported encryption schemes: - `cenc` - `cbcs` */
  scheme?: string;
}

export const MpegCommonEncryption: Schema.Codec<MpegCommonEncryption> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scheme: Schema.optional(Schema.String),
  }).annotate({ identifier: "MpegCommonEncryption" });

export interface SampleAesEncryption {}

export const SampleAesEncryption: Schema.Codec<SampleAesEncryption> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SampleAesEncryption",
  });

export interface SecretManagerSource {
  /** Required. The name of the Secret Version containing the encryption key in the following format: `projects/{project}/secrets/{secret_id}/versions/{version_number}` Note that only numbered versions are supported. Aliases like "latest" are not supported. */
  secretVersion?: string;
}

export const SecretManagerSource: Schema.Codec<SecretManagerSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secretVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecretManagerSource" });

export interface Widevine {}

export const Widevine: Schema.Codec<Widevine> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Widevine",
  });

export interface Fairplay {}

export const Fairplay: Schema.Codec<Fairplay> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Fairplay",
  });

export interface Clearkey {}

export const Clearkey: Schema.Codec<Clearkey> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Clearkey",
  });

export interface DrmSystems {
  /** Widevine configuration. */
  widevine?: Widevine;
  /** Fairplay configuration. */
  fairplay?: Fairplay;
  /** Playready configuration. */
  playready?: Playready;
  /** Clearkey configuration. */
  clearkey?: Clearkey;
}

export const DrmSystems: Schema.Codec<DrmSystems> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    widevine: Schema.optional(Widevine),
    fairplay: Schema.optional(Fairplay),
    playready: Schema.optional(Playready),
    clearkey: Schema.optional(Clearkey),
  }).annotate({ identifier: "DrmSystems" });

export interface Aes128Encryption {}

export const Aes128Encryption: Schema.Codec<Aes128Encryption> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Aes128Encryption",
  });

export interface Encryption {
  /** Required. Identifier for this set of encryption options. */
  id?: string;
  /** Configuration for MPEG Common Encryption (MPEG-CENC). */
  mpegCenc?: MpegCommonEncryption;
  /** Configuration for SAMPLE-AES encryption. */
  sampleAes?: SampleAesEncryption;
  /** Keys are stored in Google Secret Manager. */
  secretManagerKeySource?: SecretManagerSource;
  /** Required. DRM system(s) to use; at least one must be specified. If a DRM system is omitted, it is considered disabled. */
  drmSystems?: DrmSystems;
  /** Configuration for AES-128 encryption. */
  aes128?: Aes128Encryption;
}

export const Encryption: Schema.Codec<Encryption> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    mpegCenc: Schema.optional(MpegCommonEncryption),
    sampleAes: Schema.optional(SampleAesEncryption),
    secretManagerKeySource: Schema.optional(SecretManagerSource),
    drmSystems: Schema.optional(DrmSystems),
    aes128: Schema.optional(Aes128Encryption),
  }).annotate({ identifier: "Encryption" });

export interface DashConfig {
  /** The segment reference scheme for a `DASH` manifest. The default is `SEGMENT_LIST`. */
  segmentReferenceScheme?:
    | "SEGMENT_REFERENCE_SCHEME_UNSPECIFIED"
    | "SEGMENT_LIST"
    | "SEGMENT_TEMPLATE_NUMBER"
    | (string & {});
}

export const DashConfig: Schema.Codec<DashConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    segmentReferenceScheme: Schema.optional(Schema.String),
  }).annotate({ identifier: "DashConfig" });

export interface Manifest {
  /** The name of the generated file. The default is `manifest` with the extension suffix corresponding to the Manifest.type. */
  fileName?: string;
  /** Required. List of user supplied MuxStream.key values that should appear in this manifest. When Manifest.type is `HLS`, a media manifest with name MuxStream.key and `.m3u8` extension is generated for each element in this list. */
  muxStreams?: ReadonlyArray<string>;
  /** `DASH` manifest configuration. */
  dash?: DashConfig;
  /** Required. Type of the manifest. */
  type?: "MANIFEST_TYPE_UNSPECIFIED" | "HLS" | "DASH" | (string & {});
}

export const Manifest: Schema.Codec<Manifest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileName: Schema.optional(Schema.String),
    muxStreams: Schema.optional(Schema.Array(Schema.String)),
    dash: Schema.optional(DashConfig),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "Manifest" });

export interface Image {
  /** Required. URI of the image in Cloud Storage. For example, `gs://bucket/inputs/image.png`. Only PNG and JPEG images are supported. */
  uri?: string;
  /** Normalized image resolution, based on output video resolution. Valid values: `0.0`–`1.0`. To respect the original image aspect ratio, set either `x` or `y` to `0.0`. To use the original image resolution, set both `x` and `y` to `0.0`. */
  resolution?: NormalizedCoordinate;
  /** Target image opacity. Valid values are from `1.0` (solid, default) to `0.0` (transparent), exclusive. Set this to a value greater than `0.0`. */
  alpha?: number;
}

export const Image: Schema.Codec<Image> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    resolution: Schema.optional(NormalizedCoordinate),
    alpha: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Image" });

export interface AnimationEnd {
  /** The time to end overlay object, in seconds. Default: 0 */
  startTimeOffset?: string;
}

export const AnimationEnd: Schema.Codec<AnimationEnd> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTimeOffset: Schema.optional(Schema.String),
  }).annotate({ identifier: "AnimationEnd" });

export interface AnimationStatic {
  /** Normalized coordinates based on output video resolution. Valid values: `0.0`–`1.0`. `xy` is the upper-left coordinate of the overlay object. For example, use the x and y coordinates {0,0} to position the top-left corner of the overlay animation in the top-left corner of the output video. */
  xy?: NormalizedCoordinate;
  /** The time to start displaying the overlay object, in seconds. Default: 0 */
  startTimeOffset?: string;
}

export const AnimationStatic: Schema.Codec<AnimationStatic> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    xy: Schema.optional(NormalizedCoordinate),
    startTimeOffset: Schema.optional(Schema.String),
  }).annotate({ identifier: "AnimationStatic" });

export interface Animation {
  /** End previous animation. */
  animationEnd?: AnimationEnd;
  /** Display overlay object with fade animation. */
  animationFade?: AnimationFade;
  /** Display static overlay object. */
  animationStatic?: AnimationStatic;
}

export const Animation: Schema.Codec<Animation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    animationEnd: Schema.optional(AnimationEnd),
    animationFade: Schema.optional(AnimationFade),
    animationStatic: Schema.optional(AnimationStatic),
  }).annotate({ identifier: "Animation" });

export interface Overlay {
  /** Image overlay. */
  image?: Image;
  /** List of animations. The list should be chronological, without any time overlap. */
  animations?: ReadonlyArray<Animation>;
}

export const Overlay: Schema.Codec<Overlay> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    image: Schema.optional(Image),
    animations: Schema.optional(Schema.Array(Animation)),
  }).annotate({ identifier: "Overlay" });

export interface JobConfig {
  /** List of elementary streams. */
  elementaryStreams?: ReadonlyArray<ElementaryStream>;
  /** List of input assets stored in Cloud Storage. */
  inputs?: ReadonlyArray<Input>;
  /** Destination on Pub/Sub. */
  pubsubDestination?: PubsubDestination;
  /** List of multiplexing settings for output streams. */
  muxStreams?: ReadonlyArray<MuxStream>;
  /** Output configuration. */
  output?: Output;
  /** List of output sprite sheets. Spritesheets require at least one VideoStream in the Jobconfig. */
  spriteSheets?: ReadonlyArray<SpriteSheet>;
  /** List of ad breaks. Specifies where to insert ad break tags in the output manifests. */
  adBreaks?: ReadonlyArray<AdBreak>;
  /** List of edit atoms. Defines the ultimate timeline of the resulting file or manifest. */
  editList?: ReadonlyArray<EditAtom>;
  /** List of encryption configurations for the content. Each configuration has an ID. Specify this ID in the MuxStream.encryption_id field to indicate the configuration to use for that `MuxStream` output. */
  encryptions?: ReadonlyArray<Encryption>;
  /** List of output manifests. */
  manifests?: ReadonlyArray<Manifest>;
  /** List of overlays on the output video, in descending Z-order. */
  overlays?: ReadonlyArray<Overlay>;
}

export const JobConfig: Schema.Codec<JobConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    elementaryStreams: Schema.optional(Schema.Array(ElementaryStream)),
    inputs: Schema.optional(Schema.Array(Input)),
    pubsubDestination: Schema.optional(PubsubDestination),
    muxStreams: Schema.optional(Schema.Array(MuxStream)),
    output: Schema.optional(Output),
    spriteSheets: Schema.optional(Schema.Array(SpriteSheet)),
    adBreaks: Schema.optional(Schema.Array(AdBreak)),
    editList: Schema.optional(Schema.Array(EditAtom)),
    encryptions: Schema.optional(Schema.Array(Encryption)),
    manifests: Schema.optional(Schema.Array(Manifest)),
    overlays: Schema.optional(Schema.Array(Overlay)),
  }).annotate({ identifier: "JobConfig" });

export interface JobTemplate {
  /** The configuration for this template. */
  config?: JobConfig;
  /** The resource name of the job template. Format: `projects/{project_number}/locations/{location}/jobTemplates/{job_template}` */
  name?: string;
  /** The labels associated with this job template. You can use these to organize and group your job templates. */
  labels?: Record<string, string>;
}

export const JobTemplate: Schema.Codec<JobTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(JobConfig),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "JobTemplate" });

export interface ListJobTemplatesResponse {
  /** List of job templates in the specified region. */
  jobTemplates?: ReadonlyArray<JobTemplate>;
  /** List of regions that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The pagination token. */
  nextPageToken?: string;
}

export const ListJobTemplatesResponse: Schema.Codec<ListJobTemplatesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobTemplates: Schema.optional(Schema.Array(JobTemplate)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListJobTemplatesResponse" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status: Schema.Codec<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Status" });

export interface Job {
  /** Output only. An error object that describes the reason for the failure. This property is always present when ProcessingState is `FAILED`. */
  error?: Status;
  /** The resource name of the job. Format: `projects/{project_number}/locations/{location}/jobs/{job}` */
  name?: string;
  /** Output only. The time the transcoding finished. */
  endTime?: string;
  /** Input only. Specify the `template_id` to use for populating `Job.config`. The default is `preset/web-hd`, which is the only supported preset. User defined JobTemplate: `{job_template_id}` */
  templateId?: string;
  /** The configuration for this job. */
  config?: JobConfig;
  /** The processing priority of a batch job. This field can only be set for batch mode jobs. The default value is 0. This value cannot be negative. Higher values correspond to higher priorities for the job. */
  batchModePriority?: number;
  /** Output only. The current state of the job. */
  state?:
    | "PROCESSING_STATE_UNSPECIFIED"
    | "PENDING"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  /** The processing mode of the job. The default is `PROCESSING_MODE_INTERACTIVE`. */
  mode?:
    | "PROCESSING_MODE_UNSPECIFIED"
    | "PROCESSING_MODE_INTERACTIVE"
    | "PROCESSING_MODE_BATCH"
    | (string & {});
  /** Input only. Specify the `output_uri` to populate an empty `Job.config.output.uri` or `JobTemplate.config.output.uri` when using template. URI for the output file(s). For example, `gs://my-bucket/outputs/`. See [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats). */
  outputUri?: string;
  /** Input only. Specify the `input_uri` to populate empty `uri` fields in each element of `Job.config.inputs` or `JobTemplate.config.inputs` when using template. URI of the media. Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, `gs://bucket/inputs/file.mp4`). See [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats). */
  inputUri?: string;
  /** Job time to live value in days, which will be effective after job completion. Job should be deleted automatically after the given TTL. Enter a value between 1 and 90. The default is 30. */
  ttlAfterCompletionDays?: number;
  /** Output only. The time the job was created. */
  createTime?: string;
  /** Output only. The time the transcoding started. */
  startTime?: string;
  /** The labels associated with this job. You can use these to organize and group your jobs. */
  labels?: Record<string, string>;
  /** Optional. Insert silence and duplicate frames when timestamp gaps are detected in a given stream. */
  fillContentGaps?: boolean;
  /** Optional. The optimization strategy of the job. The default is `AUTODETECT`. */
  optimization?:
    | "OPTIMIZATION_STRATEGY_UNSPECIFIED"
    | "AUTODETECT"
    | "DISABLED"
    | (string & {});
}

export const Job: Schema.Codec<Job> = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    error: Schema.optional(Status),
    name: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    templateId: Schema.optional(Schema.String),
    config: Schema.optional(JobConfig),
    batchModePriority: Schema.optional(Schema.Number),
    state: Schema.optional(Schema.String),
    mode: Schema.optional(Schema.String),
    outputUri: Schema.optional(Schema.String),
    inputUri: Schema.optional(Schema.String),
    ttlAfterCompletionDays: Schema.optional(Schema.Number),
    createTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    fillContentGaps: Schema.optional(Schema.Boolean),
    optimization: Schema.optional(Schema.String),
  },
).annotate({ identifier: "Job" });

export interface Empty {}

export const Empty: Schema.Codec<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface ListJobsResponse {
  /** List of jobs in the specified region. */
  jobs?: ReadonlyArray<Job>;
  /** The pagination token. */
  nextPageToken?: string;
  /** List of regions that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListJobsResponse: Schema.Codec<ListJobsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobs: Schema.optional(Schema.Array(Job)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListJobsResponse" });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(NotFound, [{ httpStatus: 404 }]);

export class Forbidden extends Schema.TaggedErrorClass<Forbidden>()(
  "Forbidden",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(Forbidden, [{ httpStatus: 403 }]);

export class BadRequest extends Schema.TaggedErrorClass<BadRequest>()(
  "BadRequest",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(Conflict, [{ httpStatus: 409 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface CreateProjectsLocationsJobTemplatesRequest {
  /** Required. The parent location to create this job template. Format: `projects/{project}/locations/{location}` */
  parent: string;
  /** Required. The ID to use for the job template, which will become the final component of the job template's resource name. This value should be 4-63 characters, and valid characters must match the regular expression `a-zA-Z*`. */
  jobTemplateId?: string;
  /** Request body */
  body?: JobTemplate;
}

export const CreateProjectsLocationsJobTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    jobTemplateId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("jobTemplateId"),
    ),
    body: Schema.optional(JobTemplate).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/jobTemplates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsJobTemplatesRequest>;

export type CreateProjectsLocationsJobTemplatesResponse = JobTemplate;
export const CreateProjectsLocationsJobTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ JobTemplate;

export type CreateProjectsLocationsJobTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a job template in the specified region. */
export const createProjectsLocationsJobTemplates: API.OperationMethod<
  CreateProjectsLocationsJobTemplatesRequest,
  CreateProjectsLocationsJobTemplatesResponse,
  CreateProjectsLocationsJobTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsJobTemplatesRequest,
  output: CreateProjectsLocationsJobTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsJobTemplatesRequest {
  /** Required. The parent location from which to retrieve the collection of job templates. Format: `projects/{project}/locations/{location}` */
  parent: string;
  /** The maximum number of items to return. */
  pageSize?: number;
  /** One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering. */
  orderBy?: string;
  /** The `next_page_token` value returned from a previous List request, if any. */
  pageToken?: string;
  /** The filter expression, following the syntax outlined in https://google.aip.dev/160. */
  filter?: string;
}

export const ListProjectsLocationsJobTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/jobTemplates" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsJobTemplatesRequest>;

export type ListProjectsLocationsJobTemplatesResponse =
  ListJobTemplatesResponse;
export const ListProjectsLocationsJobTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListJobTemplatesResponse;

export type ListProjectsLocationsJobTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists job templates in the specified region. */
export const listProjectsLocationsJobTemplates: API.PaginatedOperationMethod<
  ListProjectsLocationsJobTemplatesRequest,
  ListProjectsLocationsJobTemplatesResponse,
  ListProjectsLocationsJobTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsJobTemplatesRequest,
  output: ListProjectsLocationsJobTemplatesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsJobTemplatesRequest {
  /** Required. The name of the job template to retrieve. Format: `projects/{project}/locations/{location}/jobTemplates/{job_template}` */
  name: string;
}

export const GetProjectsLocationsJobTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsJobTemplatesRequest>;

export type GetProjectsLocationsJobTemplatesResponse = JobTemplate;
export const GetProjectsLocationsJobTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ JobTemplate;

export type GetProjectsLocationsJobTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the job template data. */
export const getProjectsLocationsJobTemplates: API.OperationMethod<
  GetProjectsLocationsJobTemplatesRequest,
  GetProjectsLocationsJobTemplatesResponse,
  GetProjectsLocationsJobTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsJobTemplatesRequest,
  output: GetProjectsLocationsJobTemplatesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsJobTemplatesRequest {
  /** Required. The name of the job template to delete. `projects/{project}/locations/{location}/jobTemplates/{job_template}` */
  name: string;
  /** If set to true, and the job template is not found, the request will succeed but no action will be taken on the server. */
  allowMissing?: boolean;
}

export const DeleteProjectsLocationsJobTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsJobTemplatesRequest>;

export type DeleteProjectsLocationsJobTemplatesResponse = Empty;
export const DeleteProjectsLocationsJobTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsJobTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a job template. */
export const deleteProjectsLocationsJobTemplates: API.OperationMethod<
  DeleteProjectsLocationsJobTemplatesRequest,
  DeleteProjectsLocationsJobTemplatesResponse,
  DeleteProjectsLocationsJobTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsJobTemplatesRequest,
  output: DeleteProjectsLocationsJobTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsJobsRequest {
  /** Required. The name of the job to delete. Format: `projects/{project}/locations/{location}/jobs/{job}` */
  name: string;
  /** If set to true, and the job is not found, the request will succeed but no action will be taken on the server. */
  allowMissing?: boolean;
}

export const DeleteProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsJobsRequest>;

export type DeleteProjectsLocationsJobsResponse = Empty;
export const DeleteProjectsLocationsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a job. */
export const deleteProjectsLocationsJobs: API.OperationMethod<
  DeleteProjectsLocationsJobsRequest,
  DeleteProjectsLocationsJobsResponse,
  DeleteProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsJobsRequest,
  output: DeleteProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsJobsRequest {
  /** Required. The name of the job to retrieve. Format: `projects/{project}/locations/{location}/jobs/{job}` */
  name: string;
}

export const GetProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsJobsRequest>;

export type GetProjectsLocationsJobsResponse = Job;
export const GetProjectsLocationsJobsResponse = /*@__PURE__*/ /*#__PURE__*/ Job;

export type GetProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the job data. */
export const getProjectsLocationsJobs: API.OperationMethod<
  GetProjectsLocationsJobsRequest,
  GetProjectsLocationsJobsResponse,
  GetProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsJobsRequest,
  output: GetProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsJobsRequest {
  /** Required. The parent location to create and process this job. Format: `projects/{project}/locations/{location}` */
  parent: string;
  /** Request body */
  body?: Job;
}

export const CreateProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Job).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/jobs", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsJobsRequest>;

export type CreateProjectsLocationsJobsResponse = Job;
export const CreateProjectsLocationsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Job;

export type CreateProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a job in the specified region. */
export const createProjectsLocationsJobs: API.OperationMethod<
  CreateProjectsLocationsJobsRequest,
  CreateProjectsLocationsJobsResponse,
  CreateProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsJobsRequest,
  output: CreateProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsJobsRequest {
  /** The `next_page_token` value returned from a previous List request, if any. */
  pageToken?: string;
  /** The filter expression, following the syntax outlined in https://google.aip.dev/160. */
  filter?: string;
  /** The maximum number of items to return. */
  pageSize?: number;
  /** One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering. */
  orderBy?: string;
  /** Required. Format: `projects/{project}/locations/{location}` */
  parent: string;
}

export const ListProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/jobs" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsJobsRequest>;

export type ListProjectsLocationsJobsResponse = ListJobsResponse;
export const ListProjectsLocationsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListJobsResponse;

export type ListProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists jobs in the specified region. */
export const listProjectsLocationsJobs: API.PaginatedOperationMethod<
  ListProjectsLocationsJobsRequest,
  ListProjectsLocationsJobsResponse,
  ListProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsJobsRequest,
  output: ListProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
