// ==========================================================================
// Google Health API (health v4)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "health",
  version: "v4",
  rootUrl: "https://health.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface FoodServing {
  /** Output only. Legacy measurement unit for serving size in singular form (e.g. "piece", "gram"). */
  foodMeasurementUnitDisplayName?: string;
  /** Optional. Value representing the multiplier used to compute the energy when using this serving instead of the default serving. */
  multiplier?: number;
  /** Optional. Amount of food consumed, fractional values are supported. */
  amount?: number;
  /** Output only. Legacy measurement unit for serving size in plural form (e.g. "pieces", "grams"). */
  foodMeasurementUnitDisplayNamePlural?: string;
  /** Required. Food measurement unit */
  foodMeasurementUnit?: string;
}

export const FoodServing: Schema.Schema<FoodServing> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    foodMeasurementUnitDisplayName: Schema.optional(Schema.String),
    multiplier: Schema.optional(Schema.Number),
    amount: Schema.optional(Schema.Number),
    foodMeasurementUnitDisplayNamePlural: Schema.optional(Schema.String),
    foodMeasurementUnit: Schema.optional(Schema.String),
  }).annotate({ identifier: "FoodServing" });

export interface TotalCaloriesRollupValue {
  /** Sum of the total calories in kilocalories. */
  kcalSum?: number;
}

export const TotalCaloriesRollupValue: Schema.Schema<TotalCaloriesRollupValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kcalSum: Schema.optional(Schema.Number),
  }).annotate({ identifier: "TotalCaloriesRollupValue" });

export interface Health_Date {
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
}

export const Health_Date: Schema.Schema<Health_Date> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    year: Schema.optional(Schema.Number),
    month: Schema.optional(Schema.Number),
    day: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Health_Date" });

export interface DailyHeartRateVariability {
  /** Optional. The root mean square of successive differences (RMSSD) value during deep sleep. */
  deepSleepRootMeanSquareOfSuccessiveDifferencesMilliseconds?: number;
  /** Required. Date (in the user's timezone) of heart rate variability measurement. */
  date?: Health_Date;
  /** Optional. The Shanon entropy of heartbeat intervals. Entropy quantifies randomness or disorder in a system. High entropy indicates high HRV. Entropy is measured from the histogram of time interval between successive heart beats values measured during sleep. */
  entropy?: number;
  /** Optional. A user's average heart rate variability calculated using the root mean square of successive differences (RMSSD) in times between heartbeats. */
  averageHeartRateVariabilityMilliseconds?: number;
  /** Optional. Non-REM heart rate */
  nonRemHeartRateBeatsPerMinute?: string;
}

export const DailyHeartRateVariability: Schema.Schema<DailyHeartRateVariability> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deepSleepRootMeanSquareOfSuccessiveDifferencesMilliseconds: Schema.optional(
      Schema.Number,
    ),
    date: Schema.optional(Health_Date),
    entropy: Schema.optional(Schema.Number),
    averageHeartRateVariabilityMilliseconds: Schema.optional(Schema.Number),
    nonRemHeartRateBeatsPerMinute: Schema.optional(Schema.String),
  }).annotate({ identifier: "DailyHeartRateVariability" });

export interface BatchDeleteDataPointsRequest {
  /** Required. The names of the DataPoints to delete. A maximum of 10000 data points can be deleted in a single request. */
  names?: ReadonlyArray<string>;
}

export const BatchDeleteDataPointsRequest: Schema.Schema<BatchDeleteDataPointsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BatchDeleteDataPointsRequest" });

export interface HeartRateZone {
  /** Required. The heart rate zone type. */
  heartRateZoneType?:
    | "HEART_RATE_ZONE_TYPE_UNSPECIFIED"
    | "LIGHT"
    | "MODERATE"
    | "VIGOROUS"
    | "PEAK"
    | (string & {});
  /** Required. Minimum heart rate for this zone in beats per minute. */
  minBeatsPerMinute?: string;
  /** Required. Maximum heart rate for this zone in beats per minute. */
  maxBeatsPerMinute?: string;
}

export const HeartRateZone: Schema.Schema<HeartRateZone> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    heartRateZoneType: Schema.optional(Schema.String),
    minBeatsPerMinute: Schema.optional(Schema.String),
    maxBeatsPerMinute: Schema.optional(Schema.String),
  }).annotate({ identifier: "HeartRateZone" });

export interface DailyHeartRateZones {
  /** Required. The heart rate zones. */
  heartRateZones?: ReadonlyArray<HeartRateZone>;
  /** Required. Date (in user's timezone) of the heart rate zones record. */
  date?: Health_Date;
}

export const DailyHeartRateZones: Schema.Schema<DailyHeartRateZones> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    heartRateZones: Schema.optional(Schema.Array(HeartRateZone)),
    date: Schema.optional(Health_Date),
  }).annotate({ identifier: "DailyHeartRateZones" });

export interface TimeOfDay {
  /** Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. */
  nanos?: number;
  /** Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds. */
  seconds?: number;
  /** Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
  hours?: number;
  /** Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. */
  minutes?: number;
}

export const TimeOfDay: Schema.Schema<TimeOfDay> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nanos: Schema.optional(Schema.Number),
    seconds: Schema.optional(Schema.Number),
    hours: Schema.optional(Schema.Number),
    minutes: Schema.optional(Schema.Number),
  }).annotate({ identifier: "TimeOfDay" });

export interface CivilDateTime {
  /** Required. Calendar date. */
  date?: Health_Date;
  /** Optional. Time of day. Defaults to the start of the day, at midnight if omitted. */
  time?: TimeOfDay;
}

export const CivilDateTime: Schema.Schema<CivilDateTime> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    date: Schema.optional(Health_Date),
    time: Schema.optional(TimeOfDay),
  }).annotate({ identifier: "CivilDateTime" });

export interface ObservationSampleTime {
  /** Required. The time of the observation. */
  physicalTime?: string;
  /** Required. The offset of the user's local time during the observation relative to the Coordinated Universal Time (UTC). */
  utcOffset?: string;
  /** Output only. The civil time in the timezone the subject is in at the time of the observation. */
  civilTime?: CivilDateTime;
}

export const ObservationSampleTime: Schema.Schema<ObservationSampleTime> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    physicalTime: Schema.optional(Schema.String),
    utcOffset: Schema.optional(Schema.String),
    civilTime: Schema.optional(CivilDateTime),
  }).annotate({ identifier: "ObservationSampleTime" });

export interface BodyFat {
  /** Required. The time at which body fat was measured. */
  sampleTime?: ObservationSampleTime;
  /** Required. Body fat percentage, in range [0, 100]. */
  percentage?: number;
}

export const BodyFat: Schema.Schema<BodyFat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sampleTime: Schema.optional(ObservationSampleTime),
    percentage: Schema.optional(Schema.Number),
  }).annotate({ identifier: "BodyFat" });

export interface HeartRateVariability {
  /** Required. The time of the heart rate variability measurement. */
  sampleTime?: ObservationSampleTime;
  /** Optional. The root mean square of successive differences between normal heartbeats. This is a measure of heart rate variability used by Google Health. */
  rootMeanSquareOfSuccessiveDifferencesMilliseconds?: number;
  /** Optional. The standard deviation of the heart rate variability measurement. */
  standardDeviationMilliseconds?: number;
}

export const HeartRateVariability: Schema.Schema<HeartRateVariability> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sampleTime: Schema.optional(ObservationSampleTime),
    rootMeanSquareOfSuccessiveDifferencesMilliseconds: Schema.optional(
      Schema.Number,
    ),
    standardDeviationMilliseconds: Schema.optional(Schema.Number),
  }).annotate({ identifier: "HeartRateVariability" });

export interface DailyRestingHeartRateMetadata {
  /** Required. The method used to calculate the resting heart rate. */
  calculationMethod?:
    | "CALCULATION_METHOD_UNSPECIFIED"
    | "WITH_SLEEP"
    | "ONLY_WITH_AWAKE_DATA"
    | (string & {});
}

export const DailyRestingHeartRateMetadata: Schema.Schema<DailyRestingHeartRateMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    calculationMethod: Schema.optional(Schema.String),
  }).annotate({ identifier: "DailyRestingHeartRateMetadata" });

export interface DailyRestingHeartRate {
  /** Optional. Metadata for the daily resting heart rate. */
  dailyRestingHeartRateMetadata?: DailyRestingHeartRateMetadata;
  /** Required. The resting heart rate value in beats per minute. */
  beatsPerMinute?: string;
  /** Required. Date (in the user's timezone) of the resting heart rate measurement. */
  date?: Health_Date;
}

export const DailyRestingHeartRate: Schema.Schema<DailyRestingHeartRate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dailyRestingHeartRateMetadata: Schema.optional(
      DailyRestingHeartRateMetadata,
    ),
    beatsPerMinute: Schema.optional(Schema.String),
    date: Schema.optional(Health_Date),
  }).annotate({ identifier: "DailyRestingHeartRate" });

export interface DailyVO2Max {
  /** Optional. The covariance of the VO2 max value. */
  vo2MaxCovariance?: number;
  /** Required. The date for which the Daily VO2 max was measured. */
  date?: Health_Date;
  /** Required. Daily VO2 max value measured as in ml consumed oxygen / kg of body weight / min. */
  vo2Max?: number;
  /** Optional. An estimated field is added to indicate when the confidence has decreased sufficiently to consider the value an estimation. */
  estimated?: boolean;
  /** Optional. Represents the user's cardio fitness level based on their VO2 max. */
  cardioFitnessLevel?:
    | "CARDIO_FITNESS_LEVEL_UNSPECIFIED"
    | "POOR"
    | "FAIR"
    | "AVERAGE"
    | "GOOD"
    | "VERY_GOOD"
    | "EXCELLENT"
    | (string & {});
}

export const DailyVO2Max: Schema.Schema<DailyVO2Max> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vo2MaxCovariance: Schema.optional(Schema.Number),
    date: Schema.optional(Health_Date),
    vo2Max: Schema.optional(Schema.Number),
    estimated: Schema.optional(Schema.Boolean),
    cardioFitnessLevel: Schema.optional(Schema.String),
  }).annotate({ identifier: "DailyVO2Max" });

export interface OxygenSaturation {
  /** Required. The time at which oxygen saturation was measured. */
  sampleTime?: ObservationSampleTime;
  /** Required. The oxygen saturation percentage. Valid values are from 0 to 100. */
  percentage?: number;
}

export const OxygenSaturation: Schema.Schema<OxygenSaturation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sampleTime: Schema.optional(ObservationSampleTime),
    percentage: Schema.optional(Schema.Number),
  }).annotate({ identifier: "OxygenSaturation" });

export interface RespiratoryRateSleepSummaryStatistics {
  /** Required. Average breaths per minute. */
  breathsPerMinute?: number;
  /** Optional. How trustworthy the data is for the computation. */
  signalToNoise?: number;
  /** Optional. Standard deviation of the respiratory rate during sleep. */
  standardDeviation?: number;
}

export const RespiratoryRateSleepSummaryStatistics: Schema.Schema<RespiratoryRateSleepSummaryStatistics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    breathsPerMinute: Schema.optional(Schema.Number),
    signalToNoise: Schema.optional(Schema.Number),
    standardDeviation: Schema.optional(Schema.Number),
  }).annotate({ identifier: "RespiratoryRateSleepSummaryStatistics" });

export interface RespiratoryRateSleepSummary {
  /** Optional. Respiratory rate statistics for deep sleep. */
  deepSleepStats?: RespiratoryRateSleepSummaryStatistics;
  /** Optional. Respiratory rate statistics for light sleep. */
  lightSleepStats?: RespiratoryRateSleepSummaryStatistics;
  /** Optional. Respiratory rate statistics for REM sleep. */
  remSleepStats?: RespiratoryRateSleepSummaryStatistics;
  /** Required. Full respiratory rate statistics. */
  fullSleepStats?: RespiratoryRateSleepSummaryStatistics;
  /** Required. The time at which respiratory rate was measured. */
  sampleTime?: ObservationSampleTime;
}

export const RespiratoryRateSleepSummary: Schema.Schema<RespiratoryRateSleepSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deepSleepStats: Schema.optional(RespiratoryRateSleepSummaryStatistics),
    lightSleepStats: Schema.optional(RespiratoryRateSleepSummaryStatistics),
    remSleepStats: Schema.optional(RespiratoryRateSleepSummaryStatistics),
    fullSleepStats: Schema.optional(RespiratoryRateSleepSummaryStatistics),
    sampleTime: Schema.optional(ObservationSampleTime),
  }).annotate({ identifier: "RespiratoryRateSleepSummary" });

export interface SessionTimeInterval {
  /** Required. The offset of the user's local time at the end of the session relative to the Coordinated Universal Time (UTC). */
  endUtcOffset?: string;
  /** Output only. Session end time in civil time in the timezone the subject is in at the end of the session. */
  civilEndTime?: CivilDateTime;
  /** Output only. Session start time in civil time in the timezone the subject is in at the start of the session. */
  civilStartTime?: CivilDateTime;
  /** Required. The end time of the observed session. */
  endTime?: string;
  /** Required. The offset of the user's local time at the start of the session relative to the Coordinated Universal Time (UTC). */
  startUtcOffset?: string;
  /** Required. The start time of the observed session. */
  startTime?: string;
}

export const SessionTimeInterval: Schema.Schema<SessionTimeInterval> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endUtcOffset: Schema.optional(Schema.String),
    civilEndTime: Schema.optional(CivilDateTime),
    civilStartTime: Schema.optional(CivilDateTime),
    endTime: Schema.optional(Schema.String),
    startUtcOffset: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "SessionTimeInterval" });

export interface StageSummary {
  /** Output only. Sleep stage type: AWAKE, DEEP, REM, LIGHT etc. */
  type?:
    | "SLEEP_STAGE_TYPE_UNSPECIFIED"
    | "AWAKE"
    | "LIGHT"
    | "DEEP"
    | "REM"
    | "ASLEEP"
    | "RESTLESS"
    | (string & {});
  /** Output only. Total duration in minutes of a sleep stage. */
  minutes?: string;
  /** Output only. Number of sleep stages segments. */
  count?: string;
}

export const StageSummary: Schema.Schema<StageSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    minutes: Schema.optional(Schema.String),
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "StageSummary" });

export interface SleepSummary {
  /** Output only. Total number of minutes asleep. For classic sleep it is the sum of ASLEEP stages (excluding AWAKE and RESTLESS). For "stages" sleep it is the sum of LIGHT, REM and DEEP stages (excluding AWAKE). */
  minutesAsleep?: string;
  /** Output only. Total number of minutes awake. It is a sum of all AWAKE stages. */
  minutesAwake?: string;
  /** Output only. Minutes to fall asleep calculated by restlessness algorithm. */
  minutesToFallAsleep?: string;
  /** Output only. Minutes after wake up calculated by restlessness algorithm. */
  minutesAfterWakeUp?: string;
  /** Output only. Delta between wake time and bedtime. It is the sum of all stages. */
  minutesInSleepPeriod?: string;
  /** Output only. List of summaries (total duration and segment count) per each sleep stage type. */
  stagesSummary?: ReadonlyArray<StageSummary>;
}

export const SleepSummary: Schema.Schema<SleepSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minutesAsleep: Schema.optional(Schema.String),
    minutesAwake: Schema.optional(Schema.String),
    minutesToFallAsleep: Schema.optional(Schema.String),
    minutesAfterWakeUp: Schema.optional(Schema.String),
    minutesInSleepPeriod: Schema.optional(Schema.String),
    stagesSummary: Schema.optional(Schema.Array(StageSummary)),
  }).annotate({ identifier: "SleepSummary" });

export interface OutOfBedSegment {
  /** Required. Segment end time. */
  endTime?: string;
  /** Required. Segment tart time. */
  startTime?: string;
  /** Required. The offset of the user's local time at the start of the segment relative to the Coordinated Universal Time (UTC). */
  startUtcOffset?: string;
  /** Required. The offset of the user's local time at the end of the segment relative to the Coordinated Universal Time (UTC). */
  endUtcOffset?: string;
}

export const OutOfBedSegment: Schema.Schema<OutOfBedSegment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    startUtcOffset: Schema.optional(Schema.String),
    endUtcOffset: Schema.optional(Schema.String),
  }).annotate({ identifier: "OutOfBedSegment" });

export interface SleepStage {
  /** Required. Sleep stage end time. */
  endTime?: string;
  /** Required. Sleep stage start time. */
  startTime?: string;
  /** Output only. Last update time of this sleep stages segment. */
  updateTime?: string;
  /** Required. The offset of the user's local time at the start of the sleep stage relative to the Coordinated Universal Time (UTC). */
  startUtcOffset?: string;
  /** Required. Sleep stage type: AWAKE, DEEP, REM, LIGHT etc. */
  type?:
    | "SLEEP_STAGE_TYPE_UNSPECIFIED"
    | "AWAKE"
    | "LIGHT"
    | "DEEP"
    | "REM"
    | "ASLEEP"
    | "RESTLESS"
    | (string & {});
  /** Output only. Creation time of this sleep stages segment. */
  createTime?: string;
  /** Required. The offset of the user's local time at the end of the sleep stage relative to the Coordinated Universal Time (UTC). */
  endUtcOffset?: string;
}

export const SleepStage: Schema.Schema<SleepStage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    startUtcOffset: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    endUtcOffset: Schema.optional(Schema.String),
  }).annotate({ identifier: "SleepStage" });

export interface SleepMetadata {
  /** Output only. Naps are sleeps without stages and relatively short durations. */
  nap?: boolean;
  /** Optional. Sleep identifier relevant in the context of the data source. */
  externalId?: string;
  /** Output only. Sleep stages algorithm processing status. */
  stagesStatus?:
    | "STAGES_STATE_UNSPECIFIED"
    | "REJECTED_COVERAGE"
    | "REJECTED_MAX_GAP"
    | "REJECTED_START_GAP"
    | "REJECTED_END_GAP"
    | "REJECTED_NAP"
    | "REJECTED_SERVER"
    | "TIMEOUT"
    | "SUCCEEDED"
    | "PROCESSING_INTERNAL_ERROR"
    | (string & {});
  /** Output only. Sleep and sleep stages algorithms finished processing. A `true` value indicates whether all data processing for the session is complete. A `false` value means sleep period is detected but sleep stages is still processing. */
  processed?: boolean;
  /** Output only. Some sleeps autodetected by algorithms can be manually edited by users. */
  manuallyEdited?: boolean;
}

export const SleepMetadata: Schema.Schema<SleepMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nap: Schema.optional(Schema.Boolean),
    externalId: Schema.optional(Schema.String),
    stagesStatus: Schema.optional(Schema.String),
    processed: Schema.optional(Schema.Boolean),
    manuallyEdited: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SleepMetadata" });

export interface Sleep {
  /** Required. Observed sleep interval. */
  interval?: SessionTimeInterval;
  /** Optional. SleepType: classic or stages. */
  type?: "SLEEP_TYPE_UNSPECIFIED" | "CLASSIC" | "STAGES" | (string & {});
  /** Output only. Sleep summary: metrics and stages summary. */
  summary?: SleepSummary;
  /** Optional. “Out of bed” segments that can overlap with sleep stages. */
  outOfBedSegments?: ReadonlyArray<OutOfBedSegment>;
  /** Output only. Creation time of this sleep observation. */
  createTime?: string;
  /** Optional. List of non-overlapping contiguous sleep stage segments that cover the sleep period. */
  stages?: ReadonlyArray<SleepStage>;
  /** Optional. Sleep metadata: processing, main, manually edited, stages status. */
  metadata?: SleepMetadata;
  /** Output only. Last update time of this sleep observation. */
  updateTime?: string;
}

export const Sleep: Schema.Schema<Sleep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interval: Schema.optional(SessionTimeInterval),
    type: Schema.optional(Schema.String),
    summary: Schema.optional(SleepSummary),
    outOfBedSegments: Schema.optional(Schema.Array(OutOfBedSegment)),
    createTime: Schema.optional(Schema.String),
    stages: Schema.optional(Schema.Array(SleepStage)),
    metadata: Schema.optional(SleepMetadata),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Sleep" });

export interface RunVO2Max {
  /** Required. The time at which the metric was measured. */
  sampleTime?: ObservationSampleTime;
  /** Required. Run VO2 max value in ml/kg/min. */
  runVo2Max?: number;
}

export const RunVO2Max: Schema.Schema<RunVO2Max> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sampleTime: Schema.optional(ObservationSampleTime),
    runVo2Max: Schema.optional(Schema.Number),
  }).annotate({ identifier: "RunVO2Max" });

export interface TimeInHeartRateZones {
  /** Optional. Time spent in vigorous heart rate zone. */
  vigorousTime?: string;
  /** Optional. Time spent in peak heart rate zone. */
  peakTime?: string;
  /** Optional. Time spent in light heart rate zone. */
  lightTime?: string;
  /** Optional. Time spent in moderate heart rate zone. */
  moderateTime?: string;
}

export const TimeInHeartRateZones: Schema.Schema<TimeInHeartRateZones> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vigorousTime: Schema.optional(Schema.String),
    peakTime: Schema.optional(Schema.String),
    lightTime: Schema.optional(Schema.String),
    moderateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimeInHeartRateZones" });

export interface MobilityMetrics {
  /** Optional. Cadence is a measure of the frequency of your foot strikes. Steps / min in real time during workout. */
  avgCadenceStepsPerMinute?: number;
  /** Optional. Stride length is a measure of the distance covered by a single stride */
  avgStrideLengthMillimeters?: string;
  /** Optional. Distance off the ground your center of mass moves with each stride while running */
  avgVerticalOscillationMillimeters?: string;
  /** Optional. The ground contact time for a particular stride is the amount of time for which the foot was in contact with the ground on that stride */
  avgGroundContactTimeDuration?: string;
  /** Optional. Vertical oscillation/stride length between [5.0, 11.0]. */
  avgVerticalRatio?: number;
}

export const MobilityMetrics: Schema.Schema<MobilityMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    avgCadenceStepsPerMinute: Schema.optional(Schema.Number),
    avgStrideLengthMillimeters: Schema.optional(Schema.String),
    avgVerticalOscillationMillimeters: Schema.optional(Schema.String),
    avgGroundContactTimeDuration: Schema.optional(Schema.String),
    avgVerticalRatio: Schema.optional(Schema.Number),
  }).annotate({ identifier: "MobilityMetrics" });

export interface MetricsSummary {
  /** Optional. Average pace in seconds per meter. */
  averagePaceSecondsPerMeter?: number;
  /** Optional. Total elevation gain during the exercise. */
  elevationGainMillimeters?: number;
  /** Optional. Average heart rate during the exercise. */
  averageHeartRateBeatsPerMinute?: string;
  /** Optional. Run VO2 max value for the exercise. Only present in the running exercises at the top level as in the summary of the whole exercise. */
  runVo2Max?: number;
  /** Optional. Time spent in each heart rate zone. */
  heartRateZoneDurations?: TimeInHeartRateZones;
  /** Optional. Total calories burned by the user during the exercise. */
  caloriesKcal?: number;
  /** Optional. Number of full pool lengths completed during the exercise. Only present in the swimming exercises at the top level as in the summary of the whole exercise. */
  totalSwimLengths?: number;
  /** Optional. Total distance covered by the user during the exercise. */
  distanceMillimeters?: number;
  /** Optional. Total steps taken during the exercise. */
  steps?: string;
  /** Optional. Mobility workouts specific metrics. Only present in the advanced running exercises. */
  mobilityMetrics?: MobilityMetrics;
  /** Optional. Average speed in millimeters per second. */
  averageSpeedMillimetersPerSecond?: number;
  /** Optional. Total active zone minutes for the exercise. */
  activeZoneMinutes?: string;
}

export const MetricsSummary: Schema.Schema<MetricsSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    averagePaceSecondsPerMeter: Schema.optional(Schema.Number),
    elevationGainMillimeters: Schema.optional(Schema.Number),
    averageHeartRateBeatsPerMinute: Schema.optional(Schema.String),
    runVo2Max: Schema.optional(Schema.Number),
    heartRateZoneDurations: Schema.optional(TimeInHeartRateZones),
    caloriesKcal: Schema.optional(Schema.Number),
    totalSwimLengths: Schema.optional(Schema.Number),
    distanceMillimeters: Schema.optional(Schema.Number),
    steps: Schema.optional(Schema.String),
    mobilityMetrics: Schema.optional(MobilityMetrics),
    averageSpeedMillimetersPerSecond: Schema.optional(Schema.Number),
    activeZoneMinutes: Schema.optional(Schema.String),
  }).annotate({ identifier: "MetricsSummary" });

export interface SplitSummary {
  /** Required. Lap end time */
  endTime?: string;
  /** Required. Lap start time */
  startTime?: string;
  /** Output only. Lap time excluding the pauses. */
  activeDuration?: string;
  /** Required. Lap start time offset from UTC */
  startUtcOffset?: string;
  /** Required. Summary metrics for this split. */
  metricsSummary?: MetricsSummary;
  /** Required. Method used to split the exercise laps. Users may manually mark the lap as complete even if the tracking is automatic. */
  splitType?:
    | "SPLIT_TYPE_UNSPECIFIED"
    | "MANUAL"
    | "DURATION"
    | "DISTANCE"
    | "CALORIES"
    | (string & {});
  /** Required. Lap end time offset from UTC */
  endUtcOffset?: string;
}

export const SplitSummary: Schema.Schema<SplitSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    activeDuration: Schema.optional(Schema.String),
    startUtcOffset: Schema.optional(Schema.String),
    metricsSummary: Schema.optional(MetricsSummary),
    splitType: Schema.optional(Schema.String),
    endUtcOffset: Schema.optional(Schema.String),
  }).annotate({ identifier: "SplitSummary" });

export interface ExerciseMetadata {
  /** Optional. Pool length in millimeters. Only present in the swimming exercises. */
  poolLengthMillimeters?: string;
  /** Optional. Whether the exercise had GPS tracking. */
  hasGps?: boolean;
}

export const ExerciseMetadata: Schema.Schema<ExerciseMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    poolLengthMillimeters: Schema.optional(Schema.String),
    hasGps: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ExerciseMetadata" });

export interface ExerciseEvent {
  /** Required. Exercise event time offset from UTC */
  eventUtcOffset?: string;
  /** Required. The type of the event, such as start, stop, pause, resume. */
  exerciseEventType?:
    | "EXERCISE_EVENT_TYPE_UNSPECIFIED"
    | "START"
    | "STOP"
    | "PAUSE"
    | "RESUME"
    | "AUTO_PAUSE"
    | "AUTO_RESUME"
    | (string & {});
  /** Required. Exercise event time */
  eventTime?: string;
}

export const ExerciseEvent: Schema.Schema<ExerciseEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventUtcOffset: Schema.optional(Schema.String),
    exerciseEventType: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExerciseEvent" });

export interface Exercise {
  /** Optional. Duration excluding pauses. */
  activeDuration?: string;
  /** Required. Observed exercise interval */
  interval?: SessionTimeInterval;
  /** Optional. The default split is 1 km or 1 mile. - if the movement distance is less than the default, then there are no splits - if the movement distance is greater than or equal to the default, then we have splits */
  splits?: ReadonlyArray<SplitSummary>;
  /** Required. Exercise display name. */
  displayName?: string;
  /** Optional. Additional exercise metadata. */
  exerciseMetadata?: ExerciseMetadata;
  /** Optional. Standard free-form notes captured at manual logging. */
  notes?: string;
  /** Output only. This is the timestamp of the last update to the exercise. */
  updateTime?: string;
  /** Optional. Laps or splits recorded within an exercise. Laps could be split based on distance or other criteria (duration, etc.) Laps should not be overlapping with each other. */
  splitSummaries?: ReadonlyArray<SplitSummary>;
  /** Required. The type of activity performed during an exercise. */
  exerciseType?:
    | "EXERCISE_TYPE_UNSPECIFIED"
    | "AEROBIC_WORKOUT"
    | "ARCHERY"
    | "ASSAULT_BIKE"
    | "BACKPACKING"
    | "BADMINTON"
    | "BALLET"
    | "BALLROOM_DANCE"
    | "BARRE_CLASS"
    | "BASEBALL"
    | "BASKETBALL"
    | "BIKING"
    | "BILLIARDS"
    | "BODY_WEIGHT"
    | "BOOTCAMP"
    | "BOWLING"
    | "BOXING"
    | "BREAKDANCING"
    | "CALISTHENICS"
    | "CANOEING"
    | "CARDIO_SCULPT"
    | "CARDIO_WORKOUT"
    | "CARPENTRY"
    | "CHEERLEADING"
    | "CIRCUIT_TRAINING"
    | "CLEANING"
    | "CLIMBING"
    | "CORE_TRAINING"
    | "CRICKET"
    | "CROQUET"
    | "CROSS_COUNTRY_SKI"
    | "CROSS_TRAINING"
    | "CROSSFIT"
    | "CURLING"
    | "DANCING"
    | "DIVING"
    | "ELECTRIC_BIKE"
    | "ELECTRIC_SCOOTER"
    | "ELLIPTICAL"
    | "EQUESTRIAN_SPORTS"
    | "EXERCISE_CLASS"
    | "FENCING"
    | "FIELD_HOCKEY"
    | "FISHING"
    | "FITNESS_GAMING"
    | "FOILING"
    | "FOOTBALL_AMERICAN"
    | "FOOTBALL_AUSTRALIAN"
    | "FREE_WEIGHTS"
    | "FRISBEE_PLAYING_GENERAL"
    | "FUNCTIONAL_STRENGTH_TRAINING"
    | "GARDENING"
    | "GOLF"
    | "GYMNASTICS"
    | "HANDBALL"
    | "HAND_CYCLING"
    | "HIIT"
    | "HIKING"
    | "HIP_HOP"
    | "HOCKEY"
    | "HOEING"
    | "HOUSEHOLD_CHORES"
    | "HUNTING"
    | "ICE_SKATING"
    | "INCLINE_RUN"
    | "INCLINE_WALK"
    | "INDOOR_CLIMBING"
    | "INTERVAL_WORKOUT"
    | "JAZZ_DANCE"
    | "JIU_JITSU"
    | "JUMPING_ROPE"
    | "KARATE"
    | "KAYAKING"
    | "KICKBOXING"
    | "KITESURFING"
    | "LACROSSE"
    | "MARTIAL_ARTS"
    | "MEDITATE"
    | "MODERN_DANCE"
    | "MOTOCROSS"
    | "MOTORCYCLE"
    | "MOUNTAIN_BIKE"
    | "MOWING_LAWN"
    | "MUAY_THAI"
    | "MULTISPORT"
    | "MUSICAL_PERFORMANCE"
    | "NORDIC_WALKING"
    | "ORIENTEERING"
    | "OTHER"
    | "OUTDOOR_BIKE"
    | "OUTDOOR_WORKOUT"
    | "PADDLEBOARDING"
    | "PADEL"
    | "PAINTING"
    | "PARAGLIDING"
    | "PARKOUR"
    | "PICKELBALL"
    | "PILATES"
    | "POLO"
    | "POWERLIFTING"
    | "POWER_WALKING"
    | "RACKET_SPORTS"
    | "RACQUETBALL"
    | "RESISTANCE_BANDS"
    | "ROCK_CLIMBING"
    | "ROLLERBLADING"
    | "ROLLER_SKATING"
    | "ROWING"
    | "ROWING_MACHINE"
    | "RUCKING"
    | "RUGBY"
    | "RUNNING"
    | "SAILING"
    | "SCOOTERING"
    | "SCUBA_DIVING"
    | "SHOOTING"
    | "SHOVELING"
    | "SKATEBOARDING"
    | "SKATING"
    | "SKIING"
    | "SKYDIVING"
    | "SNORKELING"
    | "SNOWBOARDING"
    | "SNOWMOBILING"
    | "SNOWSHOEING"
    | "SNOW_SPORT"
    | "SOCCER"
    | "SOFTBALL"
    | "SPEED_SKATING"
    | "SPINNING"
    | "SPORT"
    | "SQUASH"
    | "STAIRCLIMBER"
    | "STATIONARY_BIKE"
    | "STEP_TRAINING"
    | "STRENGTH_TRAINING"
    | "STRETCHING"
    | "STROLLER_WALK"
    | "SURFING"
    | "SWIMMING"
    | "SWIMMING_OPEN_WATER"
    | "SWIMMING_POOL"
    | "SYNCHRONIZED_SWIMMING"
    | "TABATA_WORKOUT"
    | "TABLE_TENNIS"
    | "TAEKWONDO"
    | "TAI_CHI"
    | "TANGO"
    | "TENNIS"
    | "TRACK_AND_FIELD"
    | "TRAIL_RUN"
    | "TRAMPOLINE"
    | "TREADMILL"
    | "TREADMILL_WALK"
    | "TRX"
    | "ULTIMATE_FRISBEE"
    | "UNICYCLING"
    | "VOLLEYBALL"
    | "VOLLEYBALL_BEACH"
    | "WAKEBOARDING"
    | "WALKING"
    | "WALK_WITH_WEIGHTS"
    | "WATER_AEROBICS"
    | "WATER_JOGGING"
    | "WATER_POLO"
    | "WATER_SKIING"
    | "WATER_SPORT"
    | "WATER_VOLLEYBALL"
    | "WEEDING"
    | "WEIGHTLIFTING"
    | "WEIGHT_MACHINES"
    | "WEIGHTS"
    | "WHEELCHAIR"
    | "WINDSURFING"
    | "WORKOUT"
    | "WRESTLING"
    | "YOGA"
    | "YOGA_BIKRAM"
    | "YOGA_HATHA"
    | "YOGA_POWER"
    | "YOGA_VINYASA"
    | "ZUMBA"
    | (string & {});
  /** Optional. Exercise events that happen during an exercise, such as pause & restarts. */
  exerciseEvents?: ReadonlyArray<ExerciseEvent>;
  /** Required. Summary metrics for this exercise ( ) */
  metricsSummary?: MetricsSummary;
  /** Output only. Represents the timestamp of the creation of the exercise. */
  createTime?: string;
}

export const Exercise: Schema.Schema<Exercise> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    activeDuration: Schema.optional(Schema.String),
    interval: Schema.optional(SessionTimeInterval),
    splits: Schema.optional(Schema.Array(SplitSummary)),
    displayName: Schema.optional(Schema.String),
    exerciseMetadata: Schema.optional(ExerciseMetadata),
    notes: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    splitSummaries: Schema.optional(Schema.Array(SplitSummary)),
    exerciseType: Schema.optional(Schema.String),
    exerciseEvents: Schema.optional(Schema.Array(ExerciseEvent)),
    metricsSummary: Schema.optional(MetricsSummary),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Exercise" });

export interface WeightQuantity {
  /** Optional. Value representing the user provided unit. */
  userProvidedUnit?:
    | "WEIGHT_UNIT_UNSPECIFIED"
    | "GRAM"
    | "KILOGRAM"
    | "OUNCE"
    | "POUND"
    | "STONE"
    | "MILLIGRAM"
    | "MICROGRAM"
    | "NANOGRAM"
    | (string & {});
  /** Required. Value representing the weight in grams. */
  grams?: number;
}

export const WeightQuantity: Schema.Schema<WeightQuantity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userProvidedUnit: Schema.optional(Schema.String),
    grams: Schema.optional(Schema.Number),
  }).annotate({ identifier: "WeightQuantity" });

export interface NutrientQuantity {
  /** Required. Value representing the quantity of the nutrient. */
  quantity?: WeightQuantity;
  /** Required. Value representing the nutrient. */
  nutrient?:
    | "NUTRIENT_UNSPECIFIED"
    | "BIOTIN"
    | "CAFFEINE"
    | "CALCIUM"
    | "CHLORIDE"
    | "CARBOHYDRATES"
    | "CHOLESTEROL"
    | "CHROMIUM"
    | "COPPER"
    | "DIETARY_FIBER"
    | "FOLIC_ACID"
    | "IODINE"
    | "IRON"
    | "MAGNESIUM"
    | "MANGANESE"
    | "MOLYBDENUM"
    | "MONOUNSATURATED_FAT"
    | "NIACIN"
    | "PANTOTHENIC_ACID"
    | "PHOSPHORUS"
    | "POLYUNSATURATED_FAT"
    | "POTASSIUM"
    | "PROTEIN"
    | "RIBOFLAVIN"
    | "SATURATED_FAT"
    | "SELENIUM"
    | "SODIUM"
    | "SUGAR"
    | "THIAMIN"
    | "TRANS_FAT"
    | "UNSATURATED_FAT"
    | "VITAMIN_A"
    | "VITAMIN_B12"
    | "VITAMIN_B6"
    | "VITAMIN_C"
    | "VITAMIN_D"
    | "VITAMIN_E"
    | "VITAMIN_K"
    | "ZINC"
    | "FOLATE"
    | (string & {});
}

export const NutrientQuantity: Schema.Schema<NutrientQuantity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quantity: Schema.optional(WeightQuantity),
    nutrient: Schema.optional(Schema.String),
  }).annotate({ identifier: "NutrientQuantity" });

export interface EnergyQuantity {
  /** Required. Value representing the energy in kilocalories. */
  kcal?: number;
  /** Optional. Value representing the user provided unit. */
  userProvidedUnit?:
    | "ENERGY_UNIT_UNSPECIFIED"
    | "JOULE"
    | "KILOJOULE"
    | "KILOCALORIE"
    | "SMALL_CALORIE"
    | "CALORIE"
    | (string & {});
}

export const EnergyQuantity: Schema.Schema<EnergyQuantity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kcal: Schema.optional(Schema.Number),
    userProvidedUnit: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnergyQuantity" });

export interface Serving {
  /** Required. Food measurement unit */
  foodMeasurementUnit?: string;
  /** Optional. Amount of food consumed, fractional values are supported. */
  amount?: number;
  /** Output only. Legacy measurement unit for serving size in singular form (e.g. "piece", "gram"). */
  foodMeasurementUnitDisplayName?: string;
}

export const Serving: Schema.Schema<Serving> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    foodMeasurementUnit: Schema.optional(Schema.String),
    amount: Schema.optional(Schema.Number),
    foodMeasurementUnitDisplayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Serving" });

export interface NutritionLog {
  /** Optional. Value representing the total fat of the nutrition log. For nutrition logs created from an identified food, this field will be populated based on the referenced food. For anonymous food, this field will be populated manually. */
  totalFat?: WeightQuantity;
  /** Value representing the display name of the food. For nutrition logs created from an identified food, this field will be populated based on the referenced food. For anonymous food, this field will be populated manually. */
  foodDisplayName?: string;
  /** Optional. Value representing the nutrients of the nutrition log. */
  nutrients?: ReadonlyArray<NutrientQuantity>;
  /** Optional. Value representing the energy from fat of the nutrition log. For nutrition logs created from an identified food, this field will be populated based on the referenced food. For anonymous food, this field will be populated manually. */
  energyFromFat?: EnergyQuantity;
  /** Optional. Value representing the meal type of the nutrition log. */
  mealType?:
    | "MEAL_TYPE_UNSPECIFIED"
    | "BEFORE_BREAKFAST"
    | "BREAKFAST"
    | "BEFORE_LUNCH"
    | "LUNCH"
    | "BEFORE_DINNER"
    | "DINNER"
    | "AFTER_DINNER"
    | "SNACK"
    | "ANYTIME"
    | (string & {});
  /** Optional. Value representing the total carbohydrate of the nutrition log. For nutrition logs created from an identified food, this field will be populated based on the referenced food. For anonymous food, this field will be populated manually. */
  totalCarbohydrate?: WeightQuantity;
  /** Optional. Value representing the nutrition log serving. */
  serving?: Serving;
  /** Required. Observed interval. */
  interval?: SessionTimeInterval;
  /** Optional. Value representing the energy of the nutrition log. For nutrition logs created from an identified food, this field will be populated based on the referenced food. For anonymous food, this field will be populated manually. */
  energy?: EnergyQuantity;
  /** Required. Represents the food ID. */
  food?: string;
}

export const NutritionLog: Schema.Schema<NutritionLog> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalFat: Schema.optional(WeightQuantity),
    foodDisplayName: Schema.optional(Schema.String),
    nutrients: Schema.optional(Schema.Array(NutrientQuantity)),
    energyFromFat: Schema.optional(EnergyQuantity),
    mealType: Schema.optional(Schema.String),
    totalCarbohydrate: Schema.optional(WeightQuantity),
    serving: Schema.optional(Serving),
    interval: Schema.optional(SessionTimeInterval),
    energy: Schema.optional(EnergyQuantity),
    food: Schema.optional(Schema.String),
  }).annotate({ identifier: "NutritionLog" });

export interface ObservationTimeInterval {
  /** Required. The offset of the user's local time at the end of the observation relative to the Coordinated Universal Time (UTC). */
  endUtcOffset?: string;
  /** Output only. Observed interval end time in civil time in the timezone the subject is in at the end of the observed interval */
  civilEndTime?: CivilDateTime;
  /** Output only. Observed interval start time in civil time in the timezone the subject is in at the start of the observed interval */
  civilStartTime?: CivilDateTime;
  /** Required. The offset of the user's local time at the start of the observation relative to the Coordinated Universal Time (UTC). */
  startUtcOffset?: string;
  /** Required. Observed interval start time. */
  startTime?: string;
  /** Required. Observed interval end time. */
  endTime?: string;
}

export const ObservationTimeInterval: Schema.Schema<ObservationTimeInterval> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endUtcOffset: Schema.optional(Schema.String),
    civilEndTime: Schema.optional(CivilDateTime),
    civilStartTime: Schema.optional(CivilDateTime),
    startUtcOffset: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ObservationTimeInterval" });

export interface ActiveMinutesByActivityLevel {
  /** Required. The level of activity. */
  activityLevel?:
    | "ACTIVITY_LEVEL_UNSPECIFIED"
    | "LIGHT"
    | "MODERATE"
    | "VIGOROUS"
    | (string & {});
  /** Required. Number of whole minutes spent in activity. */
  activeMinutes?: string;
}

export const ActiveMinutesByActivityLevel: Schema.Schema<ActiveMinutesByActivityLevel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    activityLevel: Schema.optional(Schema.String),
    activeMinutes: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActiveMinutesByActivityLevel" });

export interface ActiveMinutes {
  /** Required. Observed interval. */
  interval?: ObservationTimeInterval;
  /** Required. Active minutes by activity level. At most one record per activity level is allowed. */
  activeMinutesByActivityLevel?: ReadonlyArray<ActiveMinutesByActivityLevel>;
}

export const ActiveMinutes: Schema.Schema<ActiveMinutes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interval: Schema.optional(ObservationTimeInterval),
    activeMinutesByActivityLevel: Schema.optional(
      Schema.Array(ActiveMinutesByActivityLevel),
    ),
  }).annotate({ identifier: "ActiveMinutes" });

export interface BasalEnergyBurned {
  /** Required. Number of calories burned due to basal metabolic rate in kilocalories over the observed interval. */
  kcal?: number;
  /** Required. Observed interval. */
  interval?: ObservationTimeInterval;
}

export const BasalEnergyBurned: Schema.Schema<BasalEnergyBurned> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kcal: Schema.optional(Schema.Number),
    interval: Schema.optional(ObservationTimeInterval),
  }).annotate({ identifier: "BasalEnergyBurned" });

export interface ActivityLevel {
  /** Required. Observed interval. */
  interval?: ObservationTimeInterval;
  /** Required. Activity level type in the given time interval. */
  activityLevelType?:
    | "ACTIVITY_LEVEL_TYPE_UNSPECIFIED"
    | "SEDENTARY"
    | "LIGHTLY_ACTIVE"
    | "MODERATELY_ACTIVE"
    | "VERY_ACTIVE"
    | (string & {});
}

export const ActivityLevel: Schema.Schema<ActivityLevel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interval: Schema.optional(ObservationTimeInterval),
    activityLevelType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActivityLevel" });

export interface Floors {
  /** Required. Observed interval */
  interval?: ObservationTimeInterval;
  /** Required. Number of floors in the recorded interval */
  count?: string;
}

export const Floors: Schema.Schema<Floors> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interval: Schema.optional(ObservationTimeInterval),
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "Floors" });

export interface SedentaryPeriod {
  /** Required. Observed interval. */
  interval?: ObservationTimeInterval;
}

export const SedentaryPeriod: Schema.Schema<SedentaryPeriod> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interval: Schema.optional(ObservationTimeInterval),
  }).annotate({ identifier: "SedentaryPeriod" });

export interface BloodGlucose {
  /** Optional. Source of the measurement. */
  measurementSource?:
    | "MEASUREMENT_SOURCE_UNSPECIFIED"
    | "SELF_MONITORING_BLOOD_GLUCOSE"
    | "CONTINUOUS_GLUCOSE_MONITORING"
    | "LAB_TEST"
    | (string & {});
  /** Optional. Meal type of the measurement. */
  mealType?:
    | "MEAL_TYPE_UNSPECIFIED"
    | "BREAKFAST"
    | "LUNCH"
    | "DINNER"
    | "SNACK"
    | (string & {});
  /** Optional. Timing of the measurement. */
  measurementTiming?:
    | "MEASUREMENT_TIMING_UNSPECIFIED"
    | "AFTER_MEAL"
    | "BEFORE_MEAL"
    | "FASTING"
    | "GENERAL"
    | "BEFORE_BED"
    | "OVER_NIGHT"
    | (string & {});
  /** Optional. Type of body fluid used to measure the blood glucose. */
  specimen?:
    | "SPECIMEN_UNSPECIFIED"
    | "CAPILLARY_BLOOD"
    | "INTERSTITIAL_FLUID"
    | "PLASMA"
    | "SERUM"
    | "TEARS"
    | "WHOLE_BLOOD"
    | (string & {});
  /** Optional. Standard free-form notes captured at manual logging. */
  notes?: string;
  /** Required. The time at which blood glucose was measured. */
  sampleTime?: ObservationSampleTime;
  /** Required. Blood glucose level concentration in mg/dL. */
  bloodGlucoseMilligramsPerDeciliter?: number;
}

export const BloodGlucose: Schema.Schema<BloodGlucose> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    measurementSource: Schema.optional(Schema.String),
    mealType: Schema.optional(Schema.String),
    measurementTiming: Schema.optional(Schema.String),
    specimen: Schema.optional(Schema.String),
    notes: Schema.optional(Schema.String),
    sampleTime: Schema.optional(ObservationSampleTime),
    bloodGlucoseMilligramsPerDeciliter: Schema.optional(Schema.Number),
  }).annotate({ identifier: "BloodGlucose" });

export interface Altitude {
  /** Required. Observed interval. */
  interval?: ObservationTimeInterval;
  /** Required. Altitude gain in millimeters over the observed interval. */
  gainMillimeters?: string;
}

export const Altitude: Schema.Schema<Altitude> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interval: Schema.optional(ObservationTimeInterval),
    gainMillimeters: Schema.optional(Schema.String),
  }).annotate({ identifier: "Altitude" });

export interface Height {
  /** Required. The time at which the height was recorded. */
  sampleTime?: ObservationSampleTime;
  /** Required. Height of the user in millimeters. */
  heightMillimeters?: string;
}

export const Height: Schema.Schema<Height> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sampleTime: Schema.optional(ObservationSampleTime),
    heightMillimeters: Schema.optional(Schema.String),
  }).annotate({ identifier: "Height" });

export interface Distance {
  /** Required. Observed interval. */
  interval?: ObservationTimeInterval;
  /** Required. Distance in millimeters over the observed interval. */
  millimeters?: string;
}

export const Distance: Schema.Schema<Distance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interval: Schema.optional(ObservationTimeInterval),
    millimeters: Schema.optional(Schema.String),
  }).annotate({ identifier: "Distance" });

export interface TimeInHeartRateZone {
  /** Required. Observed interval. */
  interval?: ObservationTimeInterval;
  /** Required. Heart rate zone type. */
  heartRateZoneType?:
    | "HEART_RATE_ZONE_TYPE_UNSPECIFIED"
    | "LIGHT"
    | "MODERATE"
    | "VIGOROUS"
    | "PEAK"
    | (string & {});
}

export const TimeInHeartRateZone: Schema.Schema<TimeInHeartRateZone> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interval: Schema.optional(ObservationTimeInterval),
    heartRateZoneType: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimeInHeartRateZone" });

export interface ActiveZoneMinutes {
  /** Required. Observed interval. */
  interval?: ObservationTimeInterval;
  /** Required. Heart rate zone in which the active zone minutes have been earned, in the given time interval. */
  heartRateZone?:
    | "HEART_RATE_ZONE_UNSPECIFIED"
    | "FAT_BURN"
    | "CARDIO"
    | "PEAK"
    | (string & {});
  /** Required. Number of Active Zone Minutes earned in the given time interval. Note: active_zone_minutes equals to 1 for low intensity (fat burn) zones or 2 for high intensity zones (cardio, peak). */
  activeZoneMinutes?: string;
}

export const ActiveZoneMinutes: Schema.Schema<ActiveZoneMinutes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interval: Schema.optional(ObservationTimeInterval),
    heartRateZone: Schema.optional(Schema.String),
    activeZoneMinutes: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActiveZoneMinutes" });

export interface SwimLengthsData {
  /** Required. Number of strokes in the lap. */
  strokeCount?: string;
  /** Required. Observed interval. */
  interval?: ObservationTimeInterval;
  /** Required. Swim stroke type. */
  swimStrokeType?:
    | "SWIM_STROKE_TYPE_UNSPECIFIED"
    | "FREESTYLE"
    | "BACKSTROKE"
    | "BREASTSTROKE"
    | "BUTTERFLY"
    | (string & {});
}

export const SwimLengthsData: Schema.Schema<SwimLengthsData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    strokeCount: Schema.optional(Schema.String),
    interval: Schema.optional(ObservationTimeInterval),
    swimStrokeType: Schema.optional(Schema.String),
  }).annotate({ identifier: "SwimLengthsData" });

export interface Weight {
  /** Required. The time at which the weight was measured */
  sampleTime?: ObservationSampleTime;
  /** Required. Weight of a user in grams. */
  weightGrams?: number;
  /** Optional. Standard free-form notes captured at manual logging. */
  notes?: string;
}

export const Weight: Schema.Schema<Weight> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sampleTime: Schema.optional(ObservationSampleTime),
    weightGrams: Schema.optional(Schema.Number),
    notes: Schema.optional(Schema.String),
  }).annotate({ identifier: "Weight" });

export interface VolumeQuantity {
  /** Required. Value representing the volume in milliliters. */
  milliliters?: number;
  /** Optional. Value representing the user provided unit, used only for user-facing input and display purposes. In the API format, all volume quantities are converted to milliliters. */
  userProvidedUnit?:
    | "VOLUME_UNIT_UNSPECIFIED"
    | "CUP_IMPERIAL"
    | "CUP_US"
    | "FLUID_OUNCE_IMPERIAL"
    | "FLUID_OUNCE_US"
    | "LITER"
    | "MILLILITER"
    | "PINT_IMPERIAL"
    | "PINT_US"
    | (string & {});
}

export const VolumeQuantity: Schema.Schema<VolumeQuantity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    milliliters: Schema.optional(Schema.Number),
    userProvidedUnit: Schema.optional(Schema.String),
  }).annotate({ identifier: "VolumeQuantity" });

export interface HydrationLog {
  /** Required. Amount of liquid (ex. water) consumed. */
  amountConsumed?: VolumeQuantity;
  /** Required. Observed interval. */
  interval?: SessionTimeInterval;
}

export const HydrationLog: Schema.Schema<HydrationLog> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amountConsumed: Schema.optional(VolumeQuantity),
    interval: Schema.optional(SessionTimeInterval),
  }).annotate({ identifier: "HydrationLog" });

export interface DailyOxygenSaturation {
  /** Required. The lower bound of the confidence interval of oxygen saturation samples during sleep. */
  lowerBoundPercentage?: number;
  /** Required. The upper bound of the confidence interval of oxygen saturation samples during sleep. */
  upperBoundPercentage?: number;
  /** Required. Date (in user's timezone) of the daily oxygen saturation record. */
  date?: Health_Date;
  /** Optional. Standard deviation of the daily oxygen saturation averages from the past 7-30 days. */
  standardDeviationPercentage?: number;
  /** Required. The average value of the oxygen saturation samples during the sleep. */
  averagePercentage?: number;
}

export const DailyOxygenSaturation: Schema.Schema<DailyOxygenSaturation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lowerBoundPercentage: Schema.optional(Schema.Number),
    upperBoundPercentage: Schema.optional(Schema.Number),
    date: Schema.optional(Health_Date),
    standardDeviationPercentage: Schema.optional(Schema.Number),
    averagePercentage: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DailyOxygenSaturation" });

export interface DailyRespiratoryRate {
  /** Required. The date on which the respiratory rate was measured. */
  date?: Health_Date;
  /** Required. The average number of breaths taken per minute. */
  breathsPerMinute?: number;
}

export const DailyRespiratoryRate: Schema.Schema<DailyRespiratoryRate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    date: Schema.optional(Health_Date),
    breathsPerMinute: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DailyRespiratoryRate" });

export interface DailySleepTemperatureDerivations {
  /** Required. Date for which the sleep temperature derivations are calculated. */
  date?: Health_Date;
  /** Required. The user's nightly skin temperature. It is the mean of skin temperature samples taken from the user’s sleep. */
  nightlyTemperatureCelsius?: number;
  /** Optional. The standard deviation of the user’s relative nightly skin temperature (temperature - baseline) over the past 30 days. */
  relativeNightlyStddev30dCelsius?: number;
  /** Optional. The user's baseline skin temperature. It is the median of the user's nightly skin temperature over the past 30 days. */
  baselineTemperatureCelsius?: number;
}

export const DailySleepTemperatureDerivations: Schema.Schema<DailySleepTemperatureDerivations> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    date: Schema.optional(Health_Date),
    nightlyTemperatureCelsius: Schema.optional(Schema.Number),
    relativeNightlyStddev30dCelsius: Schema.optional(Schema.Number),
    baselineTemperatureCelsius: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DailySleepTemperatureDerivations" });

export interface ActiveEnergyBurned {
  /** Required. Energy burned during an activity, measured in kilocalories. */
  kcal?: number;
  /** Required. Observed interval */
  interval?: ObservationTimeInterval;
}

export const ActiveEnergyBurned: Schema.Schema<ActiveEnergyBurned> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kcal: Schema.optional(Schema.Number),
    interval: Schema.optional(ObservationTimeInterval),
  }).annotate({ identifier: "ActiveEnergyBurned" });

export interface VO2Max {
  /** Required. The time at which VO2 max was measured. */
  sampleTime?: ObservationSampleTime;
  /** Required. VO2 max value measured as in ml consumed oxygen / kg of body weight / min. */
  vo2Max?: number;
  /** Optional. The method used to measure the VO2 max value. */
  measurementMethod?:
    | "MEASUREMENT_METHOD_UNSPECIFIED"
    | "FITBIT_RUN"
    | "GOOGLE_DEMOGRAPHIC"
    | "COOPER_TEST"
    | "HEART_RATE_RATIO"
    | "METABOLIC_CART"
    | "MULTISTAGE_FITNESS_TEST"
    | "ROCKPORT_FITNESS_TEST"
    | "MAX_EXERCISE"
    | "PREDICTION_SUB_MAX_EXERCISE"
    | "PREDICTION_NON_EXERCISE"
    | "OTHER"
    | (string & {});
}

export const VO2Max: Schema.Schema<VO2Max> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sampleTime: Schema.optional(ObservationSampleTime),
    vo2Max: Schema.optional(Schema.Number),
    measurementMethod: Schema.optional(Schema.String),
  }).annotate({ identifier: "VO2Max" });

export interface HeartRateMetadata {
  /** Optional. Indicates the user’s level of activity when the heart rate sample was measured */
  motionContext?:
    | "MOTION_CONTEXT_UNSPECIFIED"
    | "ACTIVE"
    | "SEDENTARY"
    | (string & {});
  /** Optional. Indicates the location of the sensor that measured the heart rate. */
  sensorLocation?:
    | "SENSOR_LOCATION_UNSPECIFIED"
    | "CHEST"
    | "WRIST"
    | "FINGER"
    | "HAND"
    | "EAR_LOBE"
    | "FOOT"
    | (string & {});
}

export const HeartRateMetadata: Schema.Schema<HeartRateMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    motionContext: Schema.optional(Schema.String),
    sensorLocation: Schema.optional(Schema.String),
  }).annotate({ identifier: "HeartRateMetadata" });

export interface HeartRate {
  /** Optional. Metadata about the heart rate sample. */
  metadata?: HeartRateMetadata;
  /** Required. Observation time */
  sampleTime?: ObservationSampleTime;
  /** Required. The heart rate value in beats per minute. */
  beatsPerMinute?: string;
}

export const HeartRate: Schema.Schema<HeartRate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(HeartRateMetadata),
    sampleTime: Schema.optional(ObservationSampleTime),
    beatsPerMinute: Schema.optional(Schema.String),
  }).annotate({ identifier: "HeartRate" });

export interface CoreBodyTemperature {
  /** Required. The time at which core body temperature was measured. */
  sampleTime?: ObservationSampleTime;
  /** Optional. The location of the core body temperature measurement. */
  measurementLocation?:
    | "MEASUREMENT_LOCATION_UNSPECIFIED"
    | "OTHER"
    | "ARMPIT"
    | "BODY"
    | "EAR"
    | "FINGER"
    | "GASTRO_INTESTINAL"
    | "MOUTH"
    | "RECTUM"
    | "TOE"
    | "EAR_DRUM"
    | "TEMPORAL_ARTERY"
    | "FOREHEAD"
    | "URINARY_BLADDER"
    | "NASAL"
    | "NASOPHARYNGEAL"
    | "WRIST"
    | "VAGINA"
    | (string & {});
  /** Optional. The unique identifier of the core body temperature measurement. */
  id?: string;
  /** Required. The core body temperature in Celsius. */
  temperatureCelsius?: number;
}

export const CoreBodyTemperature: Schema.Schema<CoreBodyTemperature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sampleTime: Schema.optional(ObservationSampleTime),
    measurementLocation: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    temperatureCelsius: Schema.optional(Schema.Number),
  }).annotate({ identifier: "CoreBodyTemperature" });

export interface Steps {
  /** Required. Observed interval. */
  interval?: ObservationTimeInterval;
  /** Required. Number of steps in the recorded interval. */
  count?: string;
}

export const Steps: Schema.Schema<Steps> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interval: Schema.optional(ObservationTimeInterval),
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "Steps" });

export interface ReconciledDataPoint {
  /** Data for points in the `daily-heart-rate-variability` daily data type collection. */
  dailyHeartRateVariability?: DailyHeartRateVariability;
  /** Data for points in the `daily-heart-rate-zones` daily data type collection. */
  dailyHeartRateZones?: DailyHeartRateZones;
  /** Data for points in the `body-fat` sample data type collection. */
  bodyFat?: BodyFat;
  /** Data for points in the `heart-rate-variability` sample data type collection. */
  heartRateVariability?: HeartRateVariability;
  /** Data for points in the `daily-resting-heart-rate` daily data type collection. */
  dailyRestingHeartRate?: DailyRestingHeartRate;
  /** Data for points in the `daily-vo2-max` daily data type collection. */
  dailyVo2Max?: DailyVO2Max;
  /** Identifier. Data point name, only supported for the subset of identifiable data types. For the majority of the data types, individual data points do not need to be identified and this field would be empty. Format: `users/{user}/dataTypes/{data_type}/dataPoints/{data_point}` Example: `users/abcd1234/dataTypes/sleep/dataPoints/a1b2c3d4-e5f6-7890-1234-567890abcdef` The `{user}` ID is a system-generated identifier, as described in Identity.health_user_id. The `{data_type}` ID corresponds to the kebab-case version of the field names in the DataPoint data union field, e.g. `heart-rate` for the `heart_rate` field. The `{data_point}` ID can be client-provided or system-generated. If client-provided, it must be a string of 4-63 characters, containing only lowercase letters, numbers, and hyphens. */
  dataPointName?: string;
  /** Data for points in the `oxygen-saturation` sample data type collection. */
  oxygenSaturation?: OxygenSaturation;
  /** Data for points in the `respiratory-rate-sleep-summary` sample data type collection. */
  respiratoryRateSleepSummary?: RespiratoryRateSleepSummary;
  /** Data for points in the `sleep` session data type collection. */
  sleep?: Sleep;
  /** Data for points in the `run-vo2-max` sample data type collection. */
  runVo2Max?: RunVO2Max;
  /** Data for points in the `exercise` session data type collection. */
  exercise?: Exercise;
  /** Data for points in the `nutrition-log` session data type collection. */
  nutritionLog?: NutritionLog;
  /** Data for points in the `active-minutes` interval data type collection. */
  activeMinutes?: ActiveMinutes;
  /** Data for points in the `basal-energy-burned` interval data type collection. */
  basalEnergyBurned?: BasalEnergyBurned;
  /** Data for points in the `activity-level` daily data type collection. */
  activityLevel?: ActivityLevel;
  /** Data for points in the `floors` interval data type collection. */
  floors?: Floors;
  /** Data for points in the `sedentary-period` interval data type collection. */
  sedentaryPeriod?: SedentaryPeriod;
  /** Data for points in the `blood-glucose` sample data type collection. */
  bloodGlucose?: BloodGlucose;
  /** Data for points in the `altitude` interval data type collection. */
  altitude?: Altitude;
  /** Data for points in the `height` sample data type collection. */
  height?: Height;
  /** Data for points in the `distance` interval data type collection. */
  distance?: Distance;
  /** Data for points in the `time-in-heart-rate-zone` interval data type collection. */
  timeInHeartRateZone?: TimeInHeartRateZone;
  /** Data for points in the `active-zone-minutes` interval data type collection, measured in minutes. */
  activeZoneMinutes?: ActiveZoneMinutes;
  /** Data for points in the `swim-lengths-data` interval data type collection. */
  swimLengthsData?: SwimLengthsData;
  /** Data for points in the `weight` sample data type collection. */
  weight?: Weight;
  /** Data for points in the `hydration-log` session data type collection. */
  hydrationLog?: HydrationLog;
  /** Data for points in the `daily-oxygen-saturation` daily data type collection. */
  dailyOxygenSaturation?: DailyOxygenSaturation;
  /** Data for points in the `daily-respiratory-rate` daily data type collection. */
  dailyRespiratoryRate?: DailyRespiratoryRate;
  /** Data for points in the `daily-sleep-temperature-derivations` daily data type collection. */
  dailySleepTemperatureDerivations?: DailySleepTemperatureDerivations;
  /** Data for points in the `active-energy-burned` interval data type collection. */
  activeEnergyBurned?: ActiveEnergyBurned;
  /** Data for points in the `vo2-max` sample data type collection. */
  vo2Max?: VO2Max;
  /** Data for points in the `heart-rate` sample data type collection. */
  heartRate?: HeartRate;
  /** Data for points in the `core-body-temperature` sample data type collection. */
  coreBodyTemperature?: CoreBodyTemperature;
  /** Data for points in the `steps` interval data type collection. */
  steps?: Steps;
}

export const ReconciledDataPoint: Schema.Schema<ReconciledDataPoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dailyHeartRateVariability: Schema.optional(DailyHeartRateVariability),
    dailyHeartRateZones: Schema.optional(DailyHeartRateZones),
    bodyFat: Schema.optional(BodyFat),
    heartRateVariability: Schema.optional(HeartRateVariability),
    dailyRestingHeartRate: Schema.optional(DailyRestingHeartRate),
    dailyVo2Max: Schema.optional(DailyVO2Max),
    dataPointName: Schema.optional(Schema.String),
    oxygenSaturation: Schema.optional(OxygenSaturation),
    respiratoryRateSleepSummary: Schema.optional(RespiratoryRateSleepSummary),
    sleep: Schema.optional(Sleep),
    runVo2Max: Schema.optional(RunVO2Max),
    exercise: Schema.optional(Exercise),
    nutritionLog: Schema.optional(NutritionLog),
    activeMinutes: Schema.optional(ActiveMinutes),
    basalEnergyBurned: Schema.optional(BasalEnergyBurned),
    activityLevel: Schema.optional(ActivityLevel),
    floors: Schema.optional(Floors),
    sedentaryPeriod: Schema.optional(SedentaryPeriod),
    bloodGlucose: Schema.optional(BloodGlucose),
    altitude: Schema.optional(Altitude),
    height: Schema.optional(Height),
    distance: Schema.optional(Distance),
    timeInHeartRateZone: Schema.optional(TimeInHeartRateZone),
    activeZoneMinutes: Schema.optional(ActiveZoneMinutes),
    swimLengthsData: Schema.optional(SwimLengthsData),
    weight: Schema.optional(Weight),
    hydrationLog: Schema.optional(HydrationLog),
    dailyOxygenSaturation: Schema.optional(DailyOxygenSaturation),
    dailyRespiratoryRate: Schema.optional(DailyRespiratoryRate),
    dailySleepTemperatureDerivations: Schema.optional(
      DailySleepTemperatureDerivations,
    ),
    activeEnergyBurned: Schema.optional(ActiveEnergyBurned),
    vo2Max: Schema.optional(VO2Max),
    heartRate: Schema.optional(HeartRate),
    coreBodyTemperature: Schema.optional(CoreBodyTemperature),
    steps: Schema.optional(Steps),
  }).annotate({ identifier: "ReconciledDataPoint" });

export interface HeartBeat {
  /** Required. The beats-per-minute value extrapolated from the time before the following heart beat. This is calculated as 60000 / rr, where rr is the gap between heart beats in milliseconds (IBI - Interbeat Interval). */
  beatsPerMinute?: number;
  /** Required. The time of the heart beat measurement. */
  physicalTime?: string;
  /** Required. The UTC offset of the user's timezone when the heart beat measurement occurred. */
  utcOffset?: string;
  /** Output only. The civil time in the timezone the subject is in at the time of the observation. */
  civilTime?: CivilDateTime;
}

export const HeartBeat: Schema.Schema<HeartBeat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    beatsPerMinute: Schema.optional(Schema.Number),
    physicalTime: Schema.optional(Schema.String),
    utcOffset: Schema.optional(Schema.String),
    civilTime: Schema.optional(CivilDateTime),
  }).annotate({ identifier: "HeartBeat" });

export interface WeightRollupValue {
  /** Average weight in grams. */
  weightGramsAvg?: number;
}

export const WeightRollupValue: Schema.Schema<WeightRollupValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    weightGramsAvg: Schema.optional(Schema.Number),
  }).annotate({ identifier: "WeightRollupValue" });

export interface SwimLengthsDataRollupValue {
  /** Total number of swim strokes in the interval. */
  strokeCountSum?: string;
}

export const SwimLengthsDataRollupValue: Schema.Schema<SwimLengthsDataRollupValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    strokeCountSum: Schema.optional(Schema.String),
  }).annotate({ identifier: "SwimLengthsDataRollupValue" });

export interface ActiveZoneMinutesRollupValue {
  /** Active zone minutes in `HeartRateZone.PEAK`. */
  sumInPeakHeartZone?: string;
  /** Active zone minutes in `HeartRateZone.CARDIO`. */
  sumInCardioHeartZone?: string;
  /** Active zone minutes in `HeartRateZone.FAT_BURN`. */
  sumInFatBurnHeartZone?: string;
}

export const ActiveZoneMinutesRollupValue: Schema.Schema<ActiveZoneMinutesRollupValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sumInPeakHeartZone: Schema.optional(Schema.String),
    sumInCardioHeartZone: Schema.optional(Schema.String),
    sumInFatBurnHeartZone: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActiveZoneMinutesRollupValue" });

export interface DistanceRollupValue {
  /** Sum of the distance in millimeters. */
  millimetersSum?: string;
}

export const DistanceRollupValue: Schema.Schema<DistanceRollupValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    millimetersSum: Schema.optional(Schema.String),
  }).annotate({ identifier: "DistanceRollupValue" });

export interface TimeInHeartRateZoneValue {
  /** The heart rate zone. */
  heartRateZone?:
    | "HEART_RATE_ZONE_TYPE_UNSPECIFIED"
    | "LIGHT"
    | "MODERATE"
    | "VIGOROUS"
    | "PEAK"
    | (string & {});
  /** The total time spent in the specified heart rate zone. */
  duration?: string;
}

export const TimeInHeartRateZoneValue: Schema.Schema<TimeInHeartRateZoneValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    heartRateZone: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimeInHeartRateZoneValue" });

export interface TimeInHeartRateZoneRollupValue {
  /** List of time spent in each heart rate zone. */
  timeInHeartRateZones?: ReadonlyArray<TimeInHeartRateZoneValue>;
}

export const TimeInHeartRateZoneRollupValue: Schema.Schema<TimeInHeartRateZoneRollupValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timeInHeartRateZones: Schema.optional(
      Schema.Array(TimeInHeartRateZoneValue),
    ),
  }).annotate({ identifier: "TimeInHeartRateZoneRollupValue" });

export interface RestingHeartRatePersonalRangeRollupValue {
  /** The lower bound of the user's daily resting heart rate personal range. */
  beatsPerMinuteMin?: number;
  /** The upper bound of the user's daily resting heart rate personal range. */
  beatsPerMinuteMax?: number;
}

export const RestingHeartRatePersonalRangeRollupValue: Schema.Schema<RestingHeartRatePersonalRangeRollupValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    beatsPerMinuteMin: Schema.optional(Schema.Number),
    beatsPerMinuteMax: Schema.optional(Schema.Number),
  }).annotate({ identifier: "RestingHeartRatePersonalRangeRollupValue" });

export interface AltitudeRollupValue {
  /** Sum of the altitude gain in millimeters. */
  gainMillimetersSum?: string;
}

export const AltitudeRollupValue: Schema.Schema<AltitudeRollupValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gainMillimetersSum: Schema.optional(Schema.String),
  }).annotate({ identifier: "AltitudeRollupValue" });

export interface FloorsRollupValue {
  /** Sum of the floors count. */
  countSum?: string;
}

export const FloorsRollupValue: Schema.Schema<FloorsRollupValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    countSum: Schema.optional(Schema.String),
  }).annotate({ identifier: "FloorsRollupValue" });

export interface HeartRateVariabilityPersonalRangeRollupValue {
  /** The upper bound of the user's average heart rate variability personal range. */
  averageHeartRateVariabilityMillisecondsMax?: number;
  /** The lower bound of the user's average heart rate variability personal range. */
  averageHeartRateVariabilityMillisecondsMin?: number;
}

export const HeartRateVariabilityPersonalRangeRollupValue: Schema.Schema<HeartRateVariabilityPersonalRangeRollupValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    averageHeartRateVariabilityMillisecondsMax: Schema.optional(Schema.Number),
    averageHeartRateVariabilityMillisecondsMin: Schema.optional(Schema.Number),
  }).annotate({ identifier: "HeartRateVariabilityPersonalRangeRollupValue" });

export interface SedentaryPeriodRollupValue {
  /** The total time user spent sedentary during the interval. */
  durationSum?: string;
}

export const SedentaryPeriodRollupValue: Schema.Schema<SedentaryPeriodRollupValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    durationSum: Schema.optional(Schema.String),
  }).annotate({ identifier: "SedentaryPeriodRollupValue" });

export interface BloodGlucoseRollupValue {
  /** Average blood glucose level in mg/dL. */
  bloodGlucoseMilligramsPerDeciliterAvg?: number;
}

export const BloodGlucoseRollupValue: Schema.Schema<BloodGlucoseRollupValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bloodGlucoseMilligramsPerDeciliterAvg: Schema.optional(Schema.Number),
  }).annotate({ identifier: "BloodGlucoseRollupValue" });

export interface CoreBodyTemperatureRollupValue {
  /** Average core body temperature in Celsius. */
  temperatureCelsiusAvg?: number;
  /** Minimum core body temperature in Celsius. */
  temperatureCelsiusMin?: number;
  /** Maximum core body temperature in Celsius. */
  temperatureCelsiusMax?: number;
}

export const CoreBodyTemperatureRollupValue: Schema.Schema<CoreBodyTemperatureRollupValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    temperatureCelsiusAvg: Schema.optional(Schema.Number),
    temperatureCelsiusMin: Schema.optional(Schema.Number),
    temperatureCelsiusMax: Schema.optional(Schema.Number),
  }).annotate({ identifier: "CoreBodyTemperatureRollupValue" });

export interface StepsRollupValue {
  /** Total number of steps in the interval. */
  countSum?: string;
}

export const StepsRollupValue: Schema.Schema<StepsRollupValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    countSum: Schema.optional(Schema.String),
  }).annotate({ identifier: "StepsRollupValue" });

export interface HeartRateRollupValue {
  /** The average heart rate value in the interval. */
  beatsPerMinuteAvg?: number;
  /** The maximum heart rate value in the interval. */
  beatsPerMinuteMax?: number;
  /** The minimum heart rate value in the interval. */
  beatsPerMinuteMin?: number;
}

export const HeartRateRollupValue: Schema.Schema<HeartRateRollupValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    beatsPerMinuteAvg: Schema.optional(Schema.Number),
    beatsPerMinuteMax: Schema.optional(Schema.Number),
    beatsPerMinuteMin: Schema.optional(Schema.Number),
  }).annotate({ identifier: "HeartRateRollupValue" });

export interface ActiveEnergyBurnedRollupValue {
  /** Output only. Sum of the active energy burned in kilocalories. */
  kcalSum?: number;
}

export const ActiveEnergyBurnedRollupValue: Schema.Schema<ActiveEnergyBurnedRollupValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kcalSum: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ActiveEnergyBurnedRollupValue" });

export interface VolumeQuantityRollup {
  /** Required. The sum of volume in milliliters. */
  millilitersSum?: number;
  /** Optional. The user provided unit on the last element. */
  userProvidedUnitLast?:
    | "VOLUME_UNIT_UNSPECIFIED"
    | "CUP_IMPERIAL"
    | "CUP_US"
    | "FLUID_OUNCE_IMPERIAL"
    | "FLUID_OUNCE_US"
    | "LITER"
    | "MILLILITER"
    | "PINT_IMPERIAL"
    | "PINT_US"
    | (string & {});
}

export const VolumeQuantityRollup: Schema.Schema<VolumeQuantityRollup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    millilitersSum: Schema.optional(Schema.Number),
    userProvidedUnitLast: Schema.optional(Schema.String),
  }).annotate({ identifier: "VolumeQuantityRollup" });

export interface HydrationLogRollupValue {
  /** Rollup for amount consumed. */
  amountConsumed?: VolumeQuantityRollup;
}

export const HydrationLogRollupValue: Schema.Schema<HydrationLogRollupValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amountConsumed: Schema.optional(VolumeQuantityRollup),
  }).annotate({ identifier: "HydrationLogRollupValue" });

export interface CaloriesInHeartRateZoneValue {
  /** The heart rate zone. */
  heartRateZone?:
    | "HEART_RATE_ZONE_TYPE_UNSPECIFIED"
    | "LIGHT"
    | "MODERATE"
    | "VIGOROUS"
    | "PEAK"
    | (string & {});
  /** The amount of kilocalories burned in the specified heart rate zone. */
  kcal?: number;
}

export const CaloriesInHeartRateZoneValue: Schema.Schema<CaloriesInHeartRateZoneValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    heartRateZone: Schema.optional(Schema.String),
    kcal: Schema.optional(Schema.Number),
  }).annotate({ identifier: "CaloriesInHeartRateZoneValue" });

export interface CaloriesInHeartRateZoneRollupValue {
  /** List of calories burned in each heart rate zone. */
  caloriesInHeartRateZones?: ReadonlyArray<CaloriesInHeartRateZoneValue>;
}

export const CaloriesInHeartRateZoneRollupValue: Schema.Schema<CaloriesInHeartRateZoneRollupValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    caloriesInHeartRateZones: Schema.optional(
      Schema.Array(CaloriesInHeartRateZoneValue),
    ),
  }).annotate({ identifier: "CaloriesInHeartRateZoneRollupValue" });

export interface BodyFatRollupValue {
  /** Average body fat percentage. */
  bodyFatPercentageAvg?: number;
}

export const BodyFatRollupValue: Schema.Schema<BodyFatRollupValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bodyFatPercentageAvg: Schema.optional(Schema.Number),
  }).annotate({ identifier: "BodyFatRollupValue" });

export interface ActivityLevelRollupByActivityLevelType {
  /** Activity level type. */
  activityLevelType?:
    | "ACTIVITY_LEVEL_TYPE_UNSPECIFIED"
    | "SEDENTARY"
    | "LIGHTLY_ACTIVE"
    | "MODERATELY_ACTIVE"
    | "VERY_ACTIVE"
    | (string & {});
  /** Total duration in the activity level type. */
  totalDuration?: string;
}

export const ActivityLevelRollupByActivityLevelType: Schema.Schema<ActivityLevelRollupByActivityLevelType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    activityLevelType: Schema.optional(Schema.String),
    totalDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActivityLevelRollupByActivityLevelType" });

export interface ActivityLevelRollupValue {
  /** List of total durations in each activity level type. */
  activityLevelRollupsByActivityLevelType?: ReadonlyArray<ActivityLevelRollupByActivityLevelType>;
}

export const ActivityLevelRollupValue: Schema.Schema<ActivityLevelRollupValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    activityLevelRollupsByActivityLevelType: Schema.optional(
      Schema.Array(ActivityLevelRollupByActivityLevelType),
    ),
  }).annotate({ identifier: "ActivityLevelRollupValue" });

export interface WeightQuantityRollup {
  /** Required. The sum of the weight in grams. */
  gramsSum?: number;
  /** Optional. The user provided unit on the last element. */
  userProvidedUnitLast?:
    | "WEIGHT_UNIT_UNSPECIFIED"
    | "GRAM"
    | "KILOGRAM"
    | "OUNCE"
    | "POUND"
    | "STONE"
    | "MILLIGRAM"
    | "MICROGRAM"
    | "NANOGRAM"
    | (string & {});
}

export const WeightQuantityRollup: Schema.Schema<WeightQuantityRollup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gramsSum: Schema.optional(Schema.Number),
    userProvidedUnitLast: Schema.optional(Schema.String),
  }).annotate({ identifier: "WeightQuantityRollup" });

export interface EnergyQuantityRollup {
  /** Optional. The user provided unit on the last element. */
  userProvidedUnitLast?:
    | "ENERGY_UNIT_UNSPECIFIED"
    | "JOULE"
    | "KILOJOULE"
    | "KILOCALORIE"
    | "SMALL_CALORIE"
    | "CALORIE"
    | (string & {});
  /** Required. The sum of the energy in kilocalories. */
  kcalSum?: number;
}

export const EnergyQuantityRollup: Schema.Schema<EnergyQuantityRollup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userProvidedUnitLast: Schema.optional(Schema.String),
    kcalSum: Schema.optional(Schema.Number),
  }).annotate({ identifier: "EnergyQuantityRollup" });

export interface NutrientQuantityRollup {
  /** Required. Aggregated nutrient. */
  nutrient?:
    | "NUTRIENT_UNSPECIFIED"
    | "BIOTIN"
    | "CAFFEINE"
    | "CALCIUM"
    | "CHLORIDE"
    | "CARBOHYDRATES"
    | "CHOLESTEROL"
    | "CHROMIUM"
    | "COPPER"
    | "DIETARY_FIBER"
    | "FOLIC_ACID"
    | "IODINE"
    | "IRON"
    | "MAGNESIUM"
    | "MANGANESE"
    | "MOLYBDENUM"
    | "MONOUNSATURATED_FAT"
    | "NIACIN"
    | "PANTOTHENIC_ACID"
    | "PHOSPHORUS"
    | "POLYUNSATURATED_FAT"
    | "POTASSIUM"
    | "PROTEIN"
    | "RIBOFLAVIN"
    | "SATURATED_FAT"
    | "SELENIUM"
    | "SODIUM"
    | "SUGAR"
    | "THIAMIN"
    | "TRANS_FAT"
    | "UNSATURATED_FAT"
    | "VITAMIN_A"
    | "VITAMIN_B12"
    | "VITAMIN_B6"
    | "VITAMIN_C"
    | "VITAMIN_D"
    | "VITAMIN_E"
    | "VITAMIN_K"
    | "ZINC"
    | "FOLATE"
    | (string & {});
  /** Required. Aggregated nutrient weight. */
  quantity?: WeightQuantityRollup;
}

export const NutrientQuantityRollup: Schema.Schema<NutrientQuantityRollup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nutrient: Schema.optional(Schema.String),
    quantity: Schema.optional(WeightQuantityRollup),
  }).annotate({ identifier: "NutrientQuantityRollup" });

export interface NutritionLogRollupValue {
  /** Total carbohydrate rollup. */
  totalCarbohydrate?: WeightQuantityRollup;
  /** Total fat rollup. */
  totalFat?: WeightQuantityRollup;
  /** Energy rollup. */
  energy?: EnergyQuantityRollup;
  /** List of the nutrient roll-ups by the nutrient type. */
  nutrients?: ReadonlyArray<NutrientQuantityRollup>;
  /** Value Energy from fat rollup. */
  energyFromFat?: EnergyQuantityRollup;
}

export const NutritionLogRollupValue: Schema.Schema<NutritionLogRollupValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalCarbohydrate: Schema.optional(WeightQuantityRollup),
    totalFat: Schema.optional(WeightQuantityRollup),
    energy: Schema.optional(EnergyQuantityRollup),
    nutrients: Schema.optional(Schema.Array(NutrientQuantityRollup)),
    energyFromFat: Schema.optional(EnergyQuantityRollup),
  }).annotate({ identifier: "NutritionLogRollupValue" });

export interface ActiveMinutesRollupByActivityLevel {
  /** The level of activity. */
  activityLevel?:
    | "ACTIVITY_LEVEL_UNSPECIFIED"
    | "LIGHT"
    | "MODERATE"
    | "VIGOROUS"
    | (string & {});
  /** Number of whole minutes spent in activity. */
  activeMinutesSum?: string;
}

export const ActiveMinutesRollupByActivityLevel: Schema.Schema<ActiveMinutesRollupByActivityLevel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    activityLevel: Schema.optional(Schema.String),
    activeMinutesSum: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActiveMinutesRollupByActivityLevel" });

export interface ActiveMinutesRollupValue {
  /** Active minutes by activity level. At most one record per activity level is allowed. */
  activeMinutesRollupByActivityLevel?: ReadonlyArray<ActiveMinutesRollupByActivityLevel>;
}

export const ActiveMinutesRollupValue: Schema.Schema<ActiveMinutesRollupValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    activeMinutesRollupByActivityLevel: Schema.optional(
      Schema.Array(ActiveMinutesRollupByActivityLevel),
    ),
  }).annotate({ identifier: "ActiveMinutesRollupValue" });

export interface RunVO2MaxRollupValue {
  /** Minimum value of run VO2 max in the interval.. */
  rateMin?: number;
  /** Average value of run VO2 max in the interval. */
  rateAvg?: number;
  /** Maximum value of run VO2 max in the interval. */
  rateMax?: number;
}

export const RunVO2MaxRollupValue: Schema.Schema<RunVO2MaxRollupValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rateMin: Schema.optional(Schema.Number),
    rateAvg: Schema.optional(Schema.Number),
    rateMax: Schema.optional(Schema.Number),
  }).annotate({ identifier: "RunVO2MaxRollupValue" });

export interface DailyRollupDataPoint {
  /** Returned by default when rolling up data points from the `weight` data type, or when requested explicitly using the `weight` rollup type identifier. */
  weight?: WeightRollupValue;
  /** Returned by default when rolling up data points from the `swim-lengths-data` data type, or when requested explicitly using the `swim-lengths-data` rollup type identifier. */
  swimLengthsData?: SwimLengthsDataRollupValue;
  /** Returned by default when rolling up data points from the `active-zone-minutes` data type, or when requested explicitly using the `active-zone-minutes` rollup type identifier. */
  activeZoneMinutes?: ActiveZoneMinutesRollupValue;
  /** Returned by default when rolling up data points from the `distance` data type, or when requested explicitly using the `distance` rollup type identifier. */
  distance?: DistanceRollupValue;
  /** Returned by default when rolling up data points from the `time-in-heart-rate-zone` data type, or when requested explicitly using the `time-in-heart-rate-zone` rollup type identifier. */
  timeInHeartRateZone?: TimeInHeartRateZoneRollupValue;
  /** Returned by default when rolling up data points from the `daily-resting-heart-rate` data type, or when requested explicitly using the `resting-heart-rate-personal-range` rollup type identifier. */
  restingHeartRatePersonalRange?: RestingHeartRatePersonalRangeRollupValue;
  /** Returned by default when rolling up data points from the `altitude` data type, or when requested explicitly using the `altitude` rollup type identifier. */
  altitude?: AltitudeRollupValue;
  /** Returned by default when rolling up data points from the `floors` data type, or when requested explicitly using the `floors` rollup type identifier. */
  floors?: FloorsRollupValue;
  /** Returned by default when rolling up data points from the `daily-heart-rate-variability` data type, or when requested explicitly using the `heart-rate-variability-personal-range` rollup type identifier. */
  heartRateVariabilityPersonalRange?: HeartRateVariabilityPersonalRangeRollupValue;
  /** Returned by default when rolling up data points from the `sedentary-period` data type, or when requested explicitly using the `sedentary-period` rollup type identifier. */
  sedentaryPeriod?: SedentaryPeriodRollupValue;
  /** Returned by default when rolling up data points from the `blood-glucose` data type. */
  bloodGlucose?: BloodGlucoseRollupValue;
  /** Returned by default when rolling up data points from the `core-body-temperature` data type, or when requested explicitly using the `core-body-temperature` rollup type identifier. */
  coreBodyTemperature?: CoreBodyTemperatureRollupValue;
  /** Returned by default when rolling up data points from the `steps` data type, or when requested explicitly using the `steps` rollup type identifier. */
  steps?: StepsRollupValue;
  /** Returned by default when rolling up data points from the `heart-rate` data type, or when requested explicitly using the `heart-rate` rollup type identifier. */
  heartRate?: HeartRateRollupValue;
  /** Returned by default when rolling up data points from the `active-energy-burned` data type. */
  activeEnergyBurned?: ActiveEnergyBurnedRollupValue;
  /** Returned by default when rolling up data points from the `hydration-log` data type, or when requested explicitly using the `hydration-log` rollup type identifier. */
  hydrationLog?: HydrationLogRollupValue;
  /** Start time of the window this value aggregates over */
  civilStartTime?: CivilDateTime;
  /** Returned by default when rolling up data points from the `calories-in-heart-rate-zone` data type, or when requested explicitly using the `calories-in-heart-rate-zone` rollup type identifier. */
  caloriesInHeartRateZone?: CaloriesInHeartRateZoneRollupValue;
  /** End time of the window this value aggregates over */
  civilEndTime?: CivilDateTime;
  /** Returned by default when rolling up data points from the `body-fat` data type, or when requested explicitly using the `body-fat` rollup type identifier. */
  bodyFat?: BodyFatRollupValue;
  /** Returned by default when rolling up data points from the `total-calories` data type, or when requested explicitly using the `total-calories` rollup type identifier. */
  totalCalories?: TotalCaloriesRollupValue;
  /** Returned by default when rolling up data points from the `activity-level` data type, or when requested explicitly using the `activity-level` rollup type identifier. */
  activityLevel?: ActivityLevelRollupValue;
  /** Returned by default when rolling up data points from the `nutrition-log` data type, or when requested explicitly using the `nutrition-log` rollup type identifier. */
  nutritionLog?: NutritionLogRollupValue;
  /** Returned by default when rolling up data points from the `active-minutes` data type, or when requested explicitly using the `active-minutes` rollup type identifier. */
  activeMinutes?: ActiveMinutesRollupValue;
  /** Returned by default when rolling up data points from the `run-vo2-max` data type, or when requested explicitly using the `run-vo2-max` rollup type identifier. */
  runVo2Max?: RunVO2MaxRollupValue;
}

export const DailyRollupDataPoint: Schema.Schema<DailyRollupDataPoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    weight: Schema.optional(WeightRollupValue),
    swimLengthsData: Schema.optional(SwimLengthsDataRollupValue),
    activeZoneMinutes: Schema.optional(ActiveZoneMinutesRollupValue),
    distance: Schema.optional(DistanceRollupValue),
    timeInHeartRateZone: Schema.optional(TimeInHeartRateZoneRollupValue),
    restingHeartRatePersonalRange: Schema.optional(
      RestingHeartRatePersonalRangeRollupValue,
    ),
    altitude: Schema.optional(AltitudeRollupValue),
    floors: Schema.optional(FloorsRollupValue),
    heartRateVariabilityPersonalRange: Schema.optional(
      HeartRateVariabilityPersonalRangeRollupValue,
    ),
    sedentaryPeriod: Schema.optional(SedentaryPeriodRollupValue),
    bloodGlucose: Schema.optional(BloodGlucoseRollupValue),
    coreBodyTemperature: Schema.optional(CoreBodyTemperatureRollupValue),
    steps: Schema.optional(StepsRollupValue),
    heartRate: Schema.optional(HeartRateRollupValue),
    activeEnergyBurned: Schema.optional(ActiveEnergyBurnedRollupValue),
    hydrationLog: Schema.optional(HydrationLogRollupValue),
    civilStartTime: Schema.optional(CivilDateTime),
    caloriesInHeartRateZone: Schema.optional(
      CaloriesInHeartRateZoneRollupValue,
    ),
    civilEndTime: Schema.optional(CivilDateTime),
    bodyFat: Schema.optional(BodyFatRollupValue),
    totalCalories: Schema.optional(TotalCaloriesRollupValue),
    activityLevel: Schema.optional(ActivityLevelRollupValue),
    nutritionLog: Schema.optional(NutritionLogRollupValue),
    activeMinutes: Schema.optional(ActiveMinutesRollupValue),
    runVo2Max: Schema.optional(RunVO2MaxRollupValue),
  }).annotate({ identifier: "DailyRollupDataPoint" });

export interface DailyRollUpDataPointsResponse {
  /** Values for each aggregation time window. */
  rollupDataPoints?: ReadonlyArray<DailyRollupDataPoint>;
}

export const DailyRollUpDataPointsResponse: Schema.Schema<DailyRollUpDataPointsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rollupDataPoints: Schema.optional(Schema.Array(DailyRollupDataPoint)),
  }).annotate({ identifier: "DailyRollUpDataPointsResponse" });

export interface TimeZone {
  /** IANA Time Zone Database time zone. For example "America/New_York". */
  id?: string;
  /** Optional. IANA Time Zone Database version number. For example "2019a". */
  version?: string;
}

export const TimeZone: Schema.Schema<TimeZone> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimeZone" });

export interface DateTime {
  /** Time zone. */
  timeZone?: TimeZone;
  /** UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }. */
  utcOffset?: string;
  /** Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
  hours?: number;
  /** Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0. */
  nanos?: number;
  /** Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month. */
  month?: number;
  /** Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day. */
  day?: number;
  /** Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds. */
  seconds?: number;
  /** Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0. */
  minutes?: number;
  /** Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year. */
  year?: number;
}

export const DateTime: Schema.Schema<DateTime> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timeZone: Schema.optional(TimeZone),
    utcOffset: Schema.optional(Schema.String),
    hours: Schema.optional(Schema.Number),
    nanos: Schema.optional(Schema.Number),
    month: Schema.optional(Schema.Number),
    day: Schema.optional(Schema.Number),
    seconds: Schema.optional(Schema.Number),
    minutes: Schema.optional(Schema.Number),
    year: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DateTime" });

export interface CivilTimeInterval {
  /** Required. The exclusive end of the range. */
  end?: CivilDateTime;
  /** Required. The inclusive start of the range. */
  start?: CivilDateTime;
}

export const CivilTimeInterval: Schema.Schema<CivilTimeInterval> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    end: Schema.optional(CivilDateTime),
    start: Schema.optional(CivilDateTime),
  }).annotate({ identifier: "CivilTimeInterval" });

export interface MedicalDeviceInfo {
  /** Output only. The algorithm version used by the feature. */
  algorithmVersion?: string;
  /** Output only. The firmware version running on the compatible device used to collect the data. */
  firmwareVersion?: string;
  /** Output only. The version of the feature/app running on the device. */
  featureVersion?: string;
  /** Output only. The service version used by the feature. */
  serviceVersion?: string;
  /** Output only. The model name or device type of the compatible device used to collect the data. */
  deviceModel?: string;
}

export const MedicalDeviceInfo: Schema.Schema<MedicalDeviceInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    algorithmVersion: Schema.optional(Schema.String),
    firmwareVersion: Schema.optional(Schema.String),
    featureVersion: Schema.optional(Schema.String),
    serviceVersion: Schema.optional(Schema.String),
    deviceModel: Schema.optional(Schema.String),
  }).annotate({ identifier: "MedicalDeviceInfo" });

export interface Electrocardiogram {
  /** Optional. The factor by which to divide waveform samples to get voltage in millivolts: millivolts = waveform_sample / millivolts_scaling_factor. */
  millivoltsScalingFactor?: number;
  /** Output only. The meta information for the compatible device used to conduct the measurement. ECG measurements typically populate `firmware_version`, `feature_version`, and `device_model`. */
  medicalDeviceInfo?: MedicalDeviceInfo;
  /** Optional. Average heart rate recorded during ECG reading in beats per minute. */
  beatsPerMinuteAvg?: string;
  /** Optional. The result classification of the ECG reading. */
  resultClassification?:
    | "RESULT_CLASSIFICATION_UNSPECIFIED"
    | "NORMAL_SINUS_RHYTHM"
    | "ATRIAL_FIBRILLATION"
    | "INCONCLUSIVE"
    | "INCONCLUSIVE_HIGH_HEART_RATE"
    | "INCONCLUSIVE_LOW_HEART_RATE"
    | "UNREADABLE"
    | "NOT_ANALYZED"
    | (string & {});
  /** Optional. An array of voltage values representing lead I ECG values. Each sample represents voltage difference in ECG graph. The first value in array corresponds to the start of the reading. */
  waveformSamples?: ReadonlyArray<number>;
  /** Optional. The number of leads used for ECG reading. */
  leadNumber?: number;
  /** Optional. The sampling frequency of waveform samples in hertz. */
  samplingFrequencyHertz?: number;
  /** Required. Observed interval. NOTE: Historical ECG data lacks timezone offsets, so `start_utc_offset` and `end_utc_offset` will be missing or default to zero. As a result, the civil time fields within this interval will default to UTC. It is recommended to use physical time fields instead for accurate time referencing. NOTE: The `start_time` and `end_time` of the interval are equal, representing the reading time. */
  interval?: SessionTimeInterval;
}

export const Electrocardiogram: Schema.Schema<Electrocardiogram> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    millivoltsScalingFactor: Schema.optional(Schema.Number),
    medicalDeviceInfo: Schema.optional(MedicalDeviceInfo),
    beatsPerMinuteAvg: Schema.optional(Schema.String),
    resultClassification: Schema.optional(Schema.String),
    waveformSamples: Schema.optional(Schema.Array(Schema.Number)),
    leadNumber: Schema.optional(Schema.Number),
    samplingFrequencyHertz: Schema.optional(Schema.Number),
    interval: Schema.optional(SessionTimeInterval),
  }).annotate({ identifier: "Electrocardiogram" });

export interface SubscriberConfig {
  /** Required. Policy for subscription creation. */
  subscriptionCreatePolicy?:
    | "SUBSCRIPTION_CREATE_POLICY_UNSPECIFIED"
    | "AUTOMATIC"
    | "MANUAL"
    | (string & {});
  /** Required. See [Google Health API data types](https://developers.google.com/health/data-types) for the list of supported data types. Values should be in kebab-case. */
  dataTypes?: ReadonlyArray<string>;
}

export const SubscriberConfig: Schema.Schema<SubscriberConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionCreatePolicy: Schema.optional(Schema.String),
    dataTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "SubscriberConfig" });

export interface Settings {
  /** Optional. The measurement unit defined in the user's account settings. */
  heightUnit?:
    | "HEIGHT_UNIT_UNSPECIFIED"
    | "HEIGHT_UNIT_INCHES"
    | "HEIGHT_UNIT_CENTIMETERS"
    | (string & {});
  /** Optional. The timezone defined in the user's account settings. This follows the IANA [Time Zone Database](https://www.iana.org/time-zones). Updates to this field are currently not supported. */
  timeZone?: string;
  /** Optional. The measurement unit defined in the user's account settings. Updates to this field are currently not supported. */
  distanceUnit?:
    | "DISTANCE_UNIT_UNSPECIFIED"
    | "DISTANCE_UNIT_MILES"
    | "DISTANCE_UNIT_KILOMETERS"
    | (string & {});
  /** Optional. The user's timezone offset relative to UTC. Updates to this field are currently not supported. */
  utcOffset?: string;
  /** Output only. The food language code derived from the user's food database. Possible values: `'en-US'`, `'en-GB'`, `'de-DE'`, `'es-ES'`, `'fr-FR'`, `'zh-CN'`, `'zh-TW'`, `'ja-JP'`, `'en-AU'`, `'en-CA'`, `'it-IT'`, `'ko-KR'`, `'es-MX'`, `'en-IN'`, `'en-SG'`, `'en-PH'`, `'en-IE'`, `'fr-CA'`. Updates to this field are currently not supported. */
  foodLanguageCode?: string;
  /** Optional. The measurement unit defined in the user's account settings. */
  swimUnit?:
    | "SWIM_UNIT_UNSPECIFIED"
    | "SWIM_UNIT_METERS"
    | "SWIM_UNIT_YARDS"
    | (string & {});
  /** Optional. The measurement unit defined in the user's account settings. */
  waterUnit?:
    | "WATER_UNIT_UNSPECIFIED"
    | "WATER_UNIT_ML"
    | "WATER_UNIT_FL_OZ"
    | "WATER_UNIT_CUP"
    | (string & {});
  /** Optional. The measurement unit defined in the user's account settings. */
  glucoseUnit?:
    | "GLUCOSE_UNIT_UNSPECIFIED"
    | "GLUCOSE_UNIT_MG_DL"
    | "GLUCOSE_UNIT_MMOL_L"
    | (string & {});
  /** Optional. The measurement unit defined in the user's account settings. */
  temperatureUnit?:
    | "TEMPERATURE_UNIT_UNSPECIFIED"
    | "TEMPERATURE_UNIT_CELSIUS"
    | "TEMPERATURE_UNIT_FAHRENHEIT"
    | (string & {});
  /** Optional. The locale defined in the user's account settings. Updates to this field are currently not supported. */
  languageLocale?: string;
  /** Identifier. The resource name of this Settings resource. Format: `users/{user}/settings` Example: `users/1234567890/settings` or `users/me/settings` The {user} ID is a system-generated Google Health API user ID, a string of 1-63 characters consisting of lowercase and uppercase letters, numbers, and hyphens. The literal `me` can also be used to refer to the authenticated user. */
  name?: string;
  /** Optional. The stride length type defined in the user's account settings for walking. Updates to this field are currently not supported. */
  strideLengthWalkingType?:
    | "STRIDE_LENGTH_TYPE_UNSPECIFIED"
    | "STRIDE_LENGTH_TYPE_DEFAULT"
    | "STRIDE_LENGTH_TYPE_MANUAL"
    | "STRIDE_LENGTH_TYPE_AUTO"
    | (string & {});
  /** Optional. The measurement unit defined in the user's account settings. */
  weightUnit?:
    | "WEIGHT_UNIT_UNSPECIFIED"
    | "WEIGHT_UNIT_POUNDS"
    | "WEIGHT_UNIT_STONE"
    | "WEIGHT_UNIT_KILOGRAMS"
    | (string & {});
  /** Optional. True if the user's stride length is determined automatically. Updates to this field are currently not supported. */
  autoStrideEnabled?: boolean;
  /** Optional. The stride length type defined in the user's account settings for running. Updates to this field are currently not supported. */
  strideLengthRunningType?:
    | "STRIDE_LENGTH_TYPE_UNSPECIFIED"
    | "STRIDE_LENGTH_TYPE_DEFAULT"
    | "STRIDE_LENGTH_TYPE_MANUAL"
    | "STRIDE_LENGTH_TYPE_AUTO"
    | (string & {});
}

export const Settings: Schema.Schema<Settings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    heightUnit: Schema.optional(Schema.String),
    timeZone: Schema.optional(Schema.String),
    distanceUnit: Schema.optional(Schema.String),
    utcOffset: Schema.optional(Schema.String),
    foodLanguageCode: Schema.optional(Schema.String),
    swimUnit: Schema.optional(Schema.String),
    waterUnit: Schema.optional(Schema.String),
    glucoseUnit: Schema.optional(Schema.String),
    temperatureUnit: Schema.optional(Schema.String),
    languageLocale: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    strideLengthWalkingType: Schema.optional(Schema.String),
    weightUnit: Schema.optional(Schema.String),
    autoStrideEnabled: Schema.optional(Schema.Boolean),
    strideLengthRunningType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Settings" });

export interface EndpointAuthorization {
  /** Required. Input only. Provides a client-provided secret that will be sent with each notification to the subscriber endpoint using the "Authorization" header. The value must include the authorization scheme, e.g., "Bearer " or "Basic ", as it will be used as the full Authorization header value. This secret is used by the API to test the endpoint during `CreateSubscriber` and `UpdateSubscriber` calls, and will be sent in the `Authorization` header for all subsequent webhook notifications to this endpoint. */
  secret?: string;
  /** Output only. Whether the secret is set. */
  secretSet?: boolean;
}

export const EndpointAuthorization: Schema.Schema<EndpointAuthorization> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secret: Schema.optional(Schema.String),
    secretSet: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "EndpointAuthorization" });

export interface Subscriber {
  /** Identifier. The resource name of the Subscriber. Format: projects/{project}/subscribers/{subscriber} The {project} ID is a Google Cloud Project ID or Project Number. The {subscriber} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34}[a-z0-9])/) if provided during creation, or system-generated otherwise (e.g., a UUID). Example (User-settable subscriber ID): projects/my-project/subscribers/my-sub-123 Example (System-generated subscriber ID): projects/my-project/subscribers/a1b2c3d4-e5f6-7890-1234-567890abcdef */
  name?: string;
  /** Output only. The time at which the subscriber was created. */
  createTime?: string;
  /** Optional. Configuration for the subscriber. */
  subscriberConfigs?: ReadonlyArray<SubscriberConfig>;
  /** Required. The full HTTPS URI where update notifications will be sent. The URI must be a valid URL and use HTTPS as the scheme. This endpoint will be verified during CreateSubscriber and UpdateSubscriber calls. See RPC documentation for verification details. */
  endpointUri?: string;
  /** Required. Authorization mechanism for a subscriber endpoint. This is required to ensure the endpoint can be verified. */
  endpointAuthorization?: EndpointAuthorization;
  /** Output only. The time at which the subscriber was last updated. */
  updateTime?: string;
  /** Output only. The state of the subscriber. */
  state?:
    | "STATE_UNSPECIFIED"
    | "UNVERIFIED"
    | "ACTIVE"
    | "INACTIVE"
    | (string & {});
}

export const Subscriber: Schema.Schema<Subscriber> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    subscriberConfigs: Schema.optional(Schema.Array(SubscriberConfig)),
    endpointUri: Schema.optional(Schema.String),
    endpointAuthorization: Schema.optional(EndpointAuthorization),
    updateTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "Subscriber" });

export interface ListSubscribersResponse {
  /** Subscribers from the specified project. */
  subscribers?: ReadonlyArray<Subscriber>;
  /** The total number of subscribers matching the request. */
  totalSize?: number;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListSubscribersResponse: Schema.Schema<ListSubscribersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscribers: Schema.optional(Schema.Array(Subscriber)),
    totalSize: Schema.optional(Schema.Number),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListSubscribersResponse" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface Profile {
  /** Output only. The automatically calculated running stride length, in millimeters. The user must consent to one of the following access scopes to access this field: - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness.readonly` - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness` */
  autoRunningStrideLengthMm?: number;
  /** Optional. The user's user configured walking stride length, in millimeters. The user must consent to one of the following access scopes to access this field: - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness.readonly` - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness` */
  userConfiguredWalkingStrideLengthMm?: number;
  /** Optional. The user's user configured running stride length, in millimeters. The user must consent to one of the following access scopes to access this field: - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness.readonly` - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness` */
  userConfiguredRunningStrideLengthMm?: number;
  /** Optional. The age in years based on the user's birth date. Updates to this field are currently not supported. */
  age?: number;
  /** Output only. The automatically calculated walking stride length, in millimeters. The user must consent to one of the following access scopes to access this field: - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness.readonly` - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness` */
  autoWalkingStrideLengthMm?: number;
  /** Identifier. The resource name of this Profile resource. Format: `users/{user}/profile` Example: `users/1234567890/profile` or `users/me/profile` The {user} ID is a system-generated Google Health API user ID, a string of 1-63 characters consisting of lowercase and uppercase letters, numbers, and hyphens. The literal `me` can also be used to refer to the authenticated user. */
  name?: string;
  /** Output only. The date the user created their account. Updates to this field are currently not supported. */
  membershipStartDate?: Health_Date;
}

export const Profile: Schema.Schema<Profile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autoRunningStrideLengthMm: Schema.optional(Schema.Number),
    userConfiguredWalkingStrideLengthMm: Schema.optional(Schema.Number),
    userConfiguredRunningStrideLengthMm: Schema.optional(Schema.Number),
    age: Schema.optional(Schema.Number),
    autoWalkingStrideLengthMm: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    membershipStartDate: Schema.optional(Health_Date),
  }).annotate({ identifier: "Profile" });

export interface HttpHeader {
  /** The HTTP header value. */
  value?: string;
  /** The HTTP header key. It is case insensitive. */
  key?: string;
}

export const HttpHeader: Schema.Schema<HttpHeader> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
  }).annotate({ identifier: "HttpHeader" });

export interface PairedDevice {
  /** Output only. Lists of unique features supported by the device. Comprehensive list of supported features: **Fitness Tracking** - `ACTIVE_MINUTES`: Legacy active minutes. - `AUTOSTRIDE`: Automatic stride length calculation. - `BIKE_ONBOARDING`: Cycling UI support. - `CALORIES`: Daily burned calories. - `DISTANCE`: Daily distance tracking. - `ELEVATION`: Floors climbed. - `INACTIVITY_ALERTS`: Reminders to move. - `SEDENTARY_TIME`: Tracks inactive time. - `STEPS`: Daily steps. - `SWIM`: Swim tracking (laps/strokes). - `AUTORUN`: Automatic run detection. - `ACTIVE_ZONE_MINUTES`: Active Zone Minutes (AZM). **Heart Rate & Health** - `HEART_RATE`: Continuous heart rate (PPG). - `BAT_SIGNAL`: High/Low Heart Rate Alerts. **Advanced Sensors** - `SPO2`: Blood oxygen saturation. - `NIGHTTIME_OXYGEN_SATURATION`: Sleep SpO2. - `ESTIMATED_OXYGEN_VARIATION`: Estimated Oxygen Variation. - `EDA`: Electrodermal Activity (stress). - `SKIN_TEMPERATURE`: Skin temperature variation. - `INTERNAL_DEVICE_TEMPERATURE`: Internal device temperature. **Sleep & Wellness** - `SLEEP`: Basic sleep tracking. - `SMART_SLEEP`: Advanced sleep tracking (stages/score). - `BEDTIME_REMINDER`: Bedtime reminders. - `SOUNDSCAPE`: Snore and noise detection. **Advanced Workouts** - `WB`: Custom Workout Builder. - `AUTOCUES`: Auto Cues / Auto Lap. - `DWR_RUN`: Daily Run Recommendations. - `ADVANCED_RUNNING`: Advanced Running Dynamics (e.g., GCT, VO). **GPS & Location** - `GPS`: Built-in GPS. - `CONNECTED_GPS`: Connected GPS (uses phone). - `LOCATION_HINT`: Location helper. **Payments & NFC** - `PAYMENTS`: NFC payments (Fitbit Pay/Google Wallet). - `FELICA`: FeliCa support (Japan payments/transit). **Activity Detection** - `GROK`: SmartTrack automatic activity detection. - `RETRO_AR`: Retroactive Activity Recognition prompts. **Smart Features & UI** - `ALARMS`: Silent alarms. - `BLE_MUSIC_CONTROL`: BLE music control. - `MUSIC`: Direct music storage/control. - `YOUTUBE_MUSIC_SUPPORTED`: YouTube Music support. - `GALLERY`: App Gallery. - `TUTORIAL_SUPPORTED`: On-screen tutorials. - `SMILEY_EMOTE`: Legacy Zip face. - `MOBILE_TO_DEVICE_DEEPLINK`: Mobile to device settings deep link. - `HIDE_GALLERY`: Option to hide Gallery. - `HIDE_GOAL_SELECTION`: Option to hide goal selection. - `DIGITAL_WARRANTY_SUPPORTED`: Digital warranty display. - `DIRECT_DEVICE_SETTINGS_SUPPORTED`: Direct device settings management. **Gym HR Broadcasting** - `ASPEN_SUPPORTED`: Broadcast HR to gym equipment. - `ASPEN_REMOTE_UI_SUPPORTED`: Remote UI for HR sharing. **Privacy & Security** - `FINITE_IMPROBABILITY`: BLE Resolvable Private Address (RPA) privacy. - `DOMAIN_KEY_SYNC`: Domain key synchronization. **BLE Protocol** - `BONDING`: Secure BLE bonding. - `ADVERTISES_SERIAL`: Advertises serial number. - `STATUS_CHARACTERISTIC`: BLE Status Characteristic. - `TRACKER_CHANNEL_CHARACTERISTIC`: BLE Tracker Channel Characteristic. - `PING_CHARACTERISTIC`: BLE Ping Characteristic. **Cellular & Wi-Fi** - `MOBILE_DATA`: LTE cellular support. - `SINGLE_AP_WIFI`: Single AP Wi-Fi. - `MULTI_AP_WIFI`: Multi AP Wi-Fi. - `WIFI_FWUP`: Firmware updates over Wi-Fi. **Data Sync & Transfer** - `APP_SYNC`: Background app sync. - `LIVE_DATA`: Real-time data streaming. - `EVENT_BASED_SYNC_SUPPORTED`: Event-based sync. - `TIME_SERVICE`: Time synchronization service. - `REMOTE_FILE_PROVIDER`: Remote file transfer. - `DIRECT_COMMS_ALARMS`: Direct communication for alarms. - `DIRECT_COMMS_EXERCISE`: Direct communication for exercise. - `DIRECT_COMMS_BATTERY_ALERTS`: Direct communication for battery alerts. **Google Integrations** - `PARROT_TREE_SUPPORTED`: Find My Device support. */
  features?: ReadonlyArray<string>;
  /** Output only. The time of last sync with the Fitbit mobile application. */
  lastSyncTime?: string;
  /** Identifier. The resource name of this Device resource. Format: `users/{user}/pairedDevices/{paired_device}` Example: `users/1234567890/pairedDevices/123` or `users/me/pairedDevices/123` */
  name?: string;
  /** Output only. The device type. Supported: TRACKER | SCALE */
  deviceType?: "DEVICE_TYPE_UNSPECIFIED" | "TRACKER" | "SCALE" | (string & {});
  /** Output only. The battery level of the device. */
  batteryLevel?: number;
  /** Output only. Mac ID number of the device. */
  macAddress?: string;
  /** Output only. The product name of the device */
  deviceVersion?: string;
  /** Output only. The battery status of the device. Supported: High | Medium | Low | Empty */
  batteryStatus?: string;
}

export const PairedDevice: Schema.Schema<PairedDevice> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    features: Schema.optional(Schema.Array(Schema.String)),
    lastSyncTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    deviceType: Schema.optional(Schema.String),
    batteryLevel: Schema.optional(Schema.Number),
    macAddress: Schema.optional(Schema.String),
    deviceVersion: Schema.optional(Schema.String),
    batteryStatus: Schema.optional(Schema.String),
  }).annotate({ identifier: "PairedDevice" });

export interface CreateSubscriptionPayload {
  /** Optional. Data types subscribed to. */
  dataTypes?: ReadonlyArray<string>;
  /** Required. Immutable. The resource name of the user for whom this subscription is active. Format: `users/{user}` where `{user}` is the public `healthUserId` as returned by the `GetIdentity` action in the profile PAPI (see `google.devicesandservices.health.v4main.HealthProfileService.GetIdentity`). */
  user?: string;
}

export const CreateSubscriptionPayload: Schema.Schema<CreateSubscriptionPayload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataTypes: Schema.optional(Schema.Array(Schema.String)),
    user: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreateSubscriptionPayload" });

export interface AlertWindow {
  /** Optional. All heart beats in the interval contained in this analysis window. */
  heartBeats?: ReadonlyArray<HeartBeat>;
  /** Output only. Observed interval start time in civil time in the timezone the subject is in at the start of the observed interval */
  civilStartTime?: CivilDateTime;
  /** Required. The UTC offset of the user's timezone when the analysis window ended. */
  endUtcOffset?: string;
  /** Output only. Observed interval end time in civil time in the timezone the subject is in at the end of the observed interval */
  civilEndTime?: CivilDateTime;
  /** Required. The end time of the analysis window. */
  endTime?: string;
  /** Optional. Flag indicating whether the window was positive for AFib or not. A `true` value indicates that AFib was detected in this window. A `false` value means AFib was not detected, but does not guarantee the absence of AFib. */
  positive?: boolean;
  /** Required. Observed interval. The start time of the analysis window. */
  startTime?: string;
  /** Required. The UTC offset of the user's timezone when the analysis window started. */
  startUtcOffset?: string;
}

export const AlertWindow: Schema.Schema<AlertWindow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    heartBeats: Schema.optional(Schema.Array(HeartBeat)),
    civilStartTime: Schema.optional(CivilDateTime),
    endUtcOffset: Schema.optional(Schema.String),
    civilEndTime: Schema.optional(CivilDateTime),
    endTime: Schema.optional(Schema.String),
    positive: Schema.optional(Schema.Boolean),
    startTime: Schema.optional(Schema.String),
    startUtcOffset: Schema.optional(Schema.String),
  }).annotate({ identifier: "AlertWindow" });

export interface GoogleDevicesandservicesHealthV4DataType {
  /** Identifier. The resource name of the data type. Format: `users/{user}/dataTypes/{data_type}` See DataPoint.name for examples and possible values. */
  name?: string;
}

export const GoogleDevicesandservicesHealthV4DataType: Schema.Schema<GoogleDevicesandservicesHealthV4DataType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevicesandservicesHealthV4DataType" });

export interface ReconcileDataPointsResponse {
  /** Next page token, empty if the response is complete */
  nextPageToken?: string;
  /** Data points matching the query */
  dataPoints?: ReadonlyArray<ReconciledDataPoint>;
}

export const ReconcileDataPointsResponse: Schema.Schema<ReconcileDataPointsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    dataPoints: Schema.optional(Schema.Array(ReconciledDataPoint)),
  }).annotate({ identifier: "ReconcileDataPointsResponse" });

export interface FoodMeasurementUnit {
  /** Required. The display name of the food measurement unit (e.g., "gram", "piece"). */
  displayName?: string;
  /** Optional. The plural display name of the food measurement unit (e.g., "grams", "pieces"). */
  pluralDisplayName?: string;
}

export const FoodMeasurementUnit: Schema.Schema<FoodMeasurementUnit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    pluralDisplayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "FoodMeasurementUnit" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Status" });

export interface IrnProfile {
  /** Output only. The timestamp of the last piece of analyzable data synced by the user. */
  updateTime?: string;
  /** Required. Whether or not the user is currently enrolled in having their data processed for IRN alerts. */
  enrollmentStatus?: boolean;
  /** Identifier. The resource name of this IrnProfile resource. Format: `users/{user}/irnProfile` Example: `users/1234567890/irnProfile` or `users/me/irnProfile` The {user} ID is a system-generated Google Health API user ID, a string of 1-63 characters consisting of lowercase and uppercase letters, numbers, and hyphens. The literal `me` can also be used to refer to the authenticated user. */
  name?: string;
  /** Required. Whether or not the user has onboarded onto the IRN feature. */
  onboardingStatus?: boolean;
}

export const IrnProfile: Schema.Schema<IrnProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    enrollmentStatus: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    onboardingStatus: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "IrnProfile" });

export interface Subscription {
  /** Optional. Data types subscribed to. A subscriber will only receive notifications for data types that are declared here. A subscription can only subscribe to the data types of the subscriber. The values should be in the format "users/{health_user_id}/dataTypes/{data_type}" where `{data_type}` is one of "altitude", "distance", "floors", "sleep", "steps", "weight". */
  dataTypes?: ReadonlyArray<string>;
  /** Identifier. The resource name of the Subscription. Format: `projects/{project}/subscribers/{subscriber}/subscriptions/{subscription}` Example: `projects/my-project/subscribers/my-subscriber-123/subscriptions/my-subscription-456` The {project} ID is mandatory (6-30 characters, matching /a-z{6,30}/) The {subscriber} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34}[a-z0-9])/) if provided during creation, or system-generated otherwise. The {subscription} ID is user-settable (4-36 chars, matching /[a-z]([a-z0-9-]{2,34}[a-z0-9])/) or system-generated otherwise. */
  name?: string;
  /** Immutable. The resource name of the user for whom this subscription is active. Format: `users/{user}` where `{user}` is the public `healthUserId` as returned by the `GetIdentity` action in the profile PAPI (see `google.devicesandservices.health.v4main.HealthProfileService.GetIdentity`). */
  user?: string;
}

export const Subscription: Schema.Schema<Subscription> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataTypes: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    user: Schema.optional(Schema.String),
  }).annotate({ identifier: "Subscription" });

export interface ListSubscriptionsResponse {
  /** The subscriptions from the specified subscriber. */
  subscriptions?: ReadonlyArray<Subscription>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListSubscriptionsResponse: Schema.Schema<ListSubscriptionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptions: Schema.optional(Schema.Array(Subscription)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListSubscriptionsResponse" });

export interface ListPairedDevicesResponse {
  /** The paired devices of the user. */
  pairedDevices?: ReadonlyArray<PairedDevice>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListPairedDevicesResponse: Schema.Schema<ListPairedDevicesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pairedDevices: Schema.optional(Schema.Array(PairedDevice)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListPairedDevicesResponse" });

export interface Application {
  /** Output only. The client ID of the application that recorded the data. This ID is a legacy Fitbit API client ID, which is different from a Google OAuth client ID. Example format: `ABC123`. This field is system-populated and used for tracing data from legacy Fitbit API integrations. This field is system-populated when the data is uploaded from a legacy Fitbit API integration. */
  webClientId?: string;
  /** Output only. The Google OAuth 2.0 client ID of the web application or service that recorded the data. This is the client ID used during the Google OAuth flow to obtain user credentials. This field is system-populated when the data is uploaded from Google Web API. */
  googleWebClientId?: string;
  /** Output only. A unique identifier for the mobile application that was the source of the data. This is typically the application's package name on Android (e.g., `com.google.fitbit`) or the bundle ID on iOS. This field is informational and helps trace data origin. This field is system-populated when the data is uploaded from the Fitbit mobile application, Health Connect or Health Kit. */
  packageName?: string;
}

export const Application: Schema.Schema<Application> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webClientId: Schema.optional(Schema.String),
    googleWebClientId: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Application" });

export interface Device {
  /** Optional. Captures the form factor of the device. */
  formFactor?:
    | "FORM_FACTOR_UNSPECIFIED"
    | "FITNESS_BAND"
    | "WATCH"
    | "PHONE"
    | "RING"
    | "CHEST_STRAP"
    | "SCALE"
    | "TABLET"
    | "HEAD_MOUNTED"
    | "SMART_DISPLAY"
    | (string & {});
  /** Optional. An optional manufacturer of the device. */
  manufacturer?: string;
  /** Optional. An optional name for the device. */
  displayName?: string;
}

export const Device: Schema.Schema<Device> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    formFactor: Schema.optional(Schema.String),
    manufacturer: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Device" });

export interface DataSource {
  /** Optional. Captures how the data was recorded. */
  recordingMethod?:
    | "RECORDING_METHOD_UNSPECIFIED"
    | "MANUAL"
    | "PASSIVELY_MEASURED"
    | "DERIVED"
    | "ACTIVELY_MEASURED"
    | "UNKNOWN"
    | (string & {});
  /** Output only. Captures metadata for the application that provided this data. */
  application?: Application;
  /** Optional. Captures metadata for raw data points originating from devices. We expect this data source to be used for data points written on device sync. */
  device?: Device;
  /** Output only. Captures the platform that uploaded the data. */
  platform?:
    | "PLATFORM_UNSPECIFIED"
    | "FITBIT"
    | "HEALTH_CONNECT"
    | "HEALTH_KIT"
    | "FIT"
    | "FITBIT_WEB_API"
    | "NEST"
    | "GOOGLE_WEB_API"
    | "GOOGLE_PARTNER_INTEGRATION"
    | (string & {});
}

export const DataSource: Schema.Schema<DataSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recordingMethod: Schema.optional(Schema.String),
    application: Schema.optional(Application),
    device: Schema.optional(Device),
    platform: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataSource" });

export interface DailyRollUpDataPointsRequest {
  /** Optional. The `next_page_token` from a previous request, if any. All other request fields need to be the same as in the initial request when the page token is specified. */
  pageToken?: string;
  /** Required. Closed-open range of data points that will be rolled up. The start time must be aligned with the aggregation window. The maximum range for `calories-in-heart-rate-zone`, `heart-rate`, `active-minutes` and `total-calories` is 14 days. The maximum range for all other data types is 90 days. */
  range?: CivilTimeInterval;
  /** Optional. Aggregation window size, in number of days. Defaults to 1 if not specified. */
  windowSizeDays?: number;
  /** Optional. The data source family name to roll up. If empty, data points from all available data sources will be rolled up. Format: `users/me/dataSourceFamilies/{data_source_family}` The supported values are: - `users/me/dataSourceFamilies/all-sources` - default value - `users/me/dataSourceFamilies/google-wearables` - tracker devices - `users/me/dataSourceFamilies/google-sources` - Google first party sources */
  dataSourceFamily?: string;
  /** Optional. The maximum number of data points to return. If unspecified, at most 1440 data points will be returned. The maximum page size is 10000; values above that will be truncated accordingly. */
  pageSize?: number;
}

export const DailyRollUpDataPointsRequest: Schema.Schema<DailyRollUpDataPointsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String),
    range: Schema.optional(CivilTimeInterval),
    windowSizeDays: Schema.optional(Schema.Number),
    dataSourceFamily: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DailyRollUpDataPointsRequest" });

export interface Food {
  /** Optional. Value representing the nutrients of the food for the default serving. */
  nutrients?: ReadonlyArray<NutrientQuantity>;
  /** Optional. Value representing the total fat of the food for the default serving. */
  totalFat?: WeightQuantity;
  /** Optional. Value representing the maximum energy of the food for the default serving. */
  energyMax?: EnergyQuantity;
  /** Optional. Value representing the total carbohydrate of the food for the default serving. */
  totalCarbohydrate?: WeightQuantity;
  /** Required. The access level of the food. */
  accessLevel?:
    | "FOOD_ACCESS_LEVEL_UNSPECIFIED"
    | "FOOD_ACCESS_LEVEL_PUBLIC"
    | "FOOD_ACCESS_LEVEL_PRIVATE"
    | (string & {});
  /** Required. The display name of the food. */
  displayName?: string;
  /** Optional. The language code where the food is available in format xx-XX. Supported values are defined in Settings.food_language_code. */
  languageCode?: string;
  /** Optional. Value representing the minimum energy of the food for the default serving. */
  energyMin?: EnergyQuantity;
  /** Optional. Value representing the energy from fat of the food for the default serving. */
  energyFromFat?: EnergyQuantity;
  /** Optional. The description of the food. */
  description?: string;
  /** Optional. The serving of the food. */
  servings?: ReadonlyArray<FoodServing>;
  /** Required. Value representing the default serving of the food. */
  defaultServing?: FoodServing;
  /** Optional. Value representing the average energy of the food for the default serving. */
  energyAvg?: EnergyQuantity;
  /** Optional. The brand of the food. */
  brand?: string;
  /** Optional. The meal type associated with this food. */
  mealType?:
    | "MEAL_TYPE_UNSPECIFIED"
    | "BEFORE_BREAKFAST"
    | "BREAKFAST"
    | "BEFORE_LUNCH"
    | "LUNCH"
    | "BEFORE_DINNER"
    | "DINNER"
    | "AFTER_DINNER"
    | "SNACK"
    | "ANYTIME"
    | (string & {});
}

export const Food: Schema.Schema<Food> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nutrients: Schema.optional(Schema.Array(NutrientQuantity)),
    totalFat: Schema.optional(WeightQuantity),
    energyMax: Schema.optional(EnergyQuantity),
    totalCarbohydrate: Schema.optional(WeightQuantity),
    accessLevel: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    energyMin: Schema.optional(EnergyQuantity),
    energyFromFat: Schema.optional(EnergyQuantity),
    description: Schema.optional(Schema.String),
    servings: Schema.optional(Schema.Array(FoodServing)),
    defaultServing: Schema.optional(FoodServing),
    energyAvg: Schema.optional(EnergyQuantity),
    brand: Schema.optional(Schema.String),
    mealType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Food" });

export interface HttpResponse {
  /** The HTTP status code, such as 200 or 404. */
  status?: number;
  /** The HTTP response body. If the body is not expected, it should be empty. */
  body?: string;
  /** The HTTP reason phrase, such as "OK" or "Not Found". */
  reason?: string;
  /** The HTTP response headers. The ordering of the headers is significant. Multiple headers with the same key may present for the response. */
  headers?: ReadonlyArray<HttpHeader>;
}

export const HttpResponse: Schema.Schema<HttpResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.Number),
    body: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    headers: Schema.optional(Schema.Array(HttpHeader)),
  }).annotate({ identifier: "HttpResponse" });

export interface GoogleDevicesandservicesHealthV4WebhookNotificationCloudLog {
  /** Required. Represents the HTTP response. This message includes the status code, reason phrase, headers, and body. */
  httpResponse?: HttpResponse;
}

export const GoogleDevicesandservicesHealthV4WebhookNotificationCloudLog: Schema.Schema<GoogleDevicesandservicesHealthV4WebhookNotificationCloudLog> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    httpResponse: Schema.optional(HttpResponse),
  }).annotate({
    identifier: "GoogleDevicesandservicesHealthV4WebhookNotificationCloudLog",
  });

export interface Interval {
  /** Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. */
  startTime?: string;
  /** Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. */
  endTime?: string;
}

export const Interval: Schema.Schema<Interval> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Interval" });

export interface RollupDataPoint {
  /** Returned by default when rolling up data points from the `altitude` data type, or when requested explicitly using the `altitude` rollup type identifier. */
  altitude?: AltitudeRollupValue;
  /** Returned by default when rolling up data points from the `distance` data type, or when requested explicitly using the `distance` rollup type identifier. */
  distance?: DistanceRollupValue;
  /** Returned by default when rolling up data points from the `time-in-heart-rate-zone` data type, or when requested explicitly using the `time-in-heart-rate-zone` rollup type identifier. */
  timeInHeartRateZone?: TimeInHeartRateZoneRollupValue;
  /** Returned by default when rolling up data points from the `floors` data type, or when requested explicitly using the `floors` rollup type identifier. */
  floors?: FloorsRollupValue;
  /** Returned by default when rolling up data points from the `total-calories` data type, or when requested explicitly using the `total-calories` rollup type identifier. */
  totalCalories?: TotalCaloriesRollupValue;
  /** Returned by default when rolling up data points from the `sedentary-period` data type, or when requested explicitly using the `sedentary-period` rollup type identifier. */
  sedentaryPeriod?: SedentaryPeriodRollupValue;
  /** Returned by default when rolling up data points from the `blood-glucose` data type. */
  bloodGlucose?: BloodGlucoseRollupValue;
  /** Returned by default when rolling up data points from the `body-fat` data type, or when requested explicitly using the `body-fat` rollup type identifier. */
  bodyFat?: BodyFatRollupValue;
  /** Returned by default when rolling up data points from the `weight` data type, or when requested explicitly using the `weight` rollup type identifier. */
  weight?: WeightRollupValue;
  /** Returned by default when rolling up data points from the `active-zone-minutes` data type, or when requested explicitly using the `active-zone-minutes` rollup type identifier. */
  activeZoneMinutes?: ActiveZoneMinutesRollupValue;
  /** Returned by default when rolling up data points from the `swim-lengths-data` data type, or when requested explicitly using the `swim-lengths-data` rollup type identifier. */
  swimLengthsData?: SwimLengthsDataRollupValue;
  /** Returned by default when rolling up data points from the `hydration-log` data type, or when requested explicitly using the `hydration-log` rollup type identifier. */
  hydrationLog?: HydrationLogRollupValue;
  /** Start time of the window this value aggregates over */
  startTime?: string;
  /** Returned by default when rolling up data points from the `calories-in-heart-rate-zone` data type, or when requested explicitly using the `calories-in-heart-rate-zone` rollup type identifier. */
  caloriesInHeartRateZone?: CaloriesInHeartRateZoneRollupValue;
  /** Returned by default when rolling up data points from the `run-vo2-max` data type, or when requested explicitly using the `run-vo2-max` rollup type identifier. */
  runVo2Max?: RunVO2MaxRollupValue;
  /** Returned by default when rolling up data points from the `heart-rate` data type, or when requested explicitly using the `heart-rate` rollup type identifier. */
  heartRate?: HeartRateRollupValue;
  /** Returned by default when rolling up data points from the `steps` data type, or when requested explicitly using the `steps` rollup type identifier. */
  steps?: StepsRollupValue;
  /** Returned by default when rolling up data points from the `activity-level` data type, or when requested explicitly using the `activity-level` rollup type identifier. */
  activityLevel?: ActivityLevelRollupValue;
  /** Returned by default when rolling up data points from the `core-body-temperature` data type, or when requested explicitly using the `core-body-temperature` rollup type identifier. */
  coreBodyTemperature?: CoreBodyTemperatureRollupValue;
  /** End time of the window this value aggregates over */
  endTime?: string;
  /** Returned by default when rolling up data points from the `active-energy-burned` data type. */
  activeEnergyBurned?: ActiveEnergyBurnedRollupValue;
  /** Returned by default when rolling up data points from the `nutrition-log` data type, or when requested explicitly using the `nutrition-log` rollup type identifier. */
  nutritionLog?: NutritionLogRollupValue;
  /** Returned by default when rolling up data points from the `active-minutes` data type, or when requested explicitly using the `active-minutes` rollup type identifier. */
  activeMinutes?: ActiveMinutesRollupValue;
}

export const RollupDataPoint: Schema.Schema<RollupDataPoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    altitude: Schema.optional(AltitudeRollupValue),
    distance: Schema.optional(DistanceRollupValue),
    timeInHeartRateZone: Schema.optional(TimeInHeartRateZoneRollupValue),
    floors: Schema.optional(FloorsRollupValue),
    totalCalories: Schema.optional(TotalCaloriesRollupValue),
    sedentaryPeriod: Schema.optional(SedentaryPeriodRollupValue),
    bloodGlucose: Schema.optional(BloodGlucoseRollupValue),
    bodyFat: Schema.optional(BodyFatRollupValue),
    weight: Schema.optional(WeightRollupValue),
    activeZoneMinutes: Schema.optional(ActiveZoneMinutesRollupValue),
    swimLengthsData: Schema.optional(SwimLengthsDataRollupValue),
    hydrationLog: Schema.optional(HydrationLogRollupValue),
    startTime: Schema.optional(Schema.String),
    caloriesInHeartRateZone: Schema.optional(
      CaloriesInHeartRateZoneRollupValue,
    ),
    runVo2Max: Schema.optional(RunVO2MaxRollupValue),
    heartRate: Schema.optional(HeartRateRollupValue),
    steps: Schema.optional(StepsRollupValue),
    activityLevel: Schema.optional(ActivityLevelRollupValue),
    coreBodyTemperature: Schema.optional(CoreBodyTemperatureRollupValue),
    endTime: Schema.optional(Schema.String),
    activeEnergyBurned: Schema.optional(ActiveEnergyBurnedRollupValue),
    nutritionLog: Schema.optional(NutritionLogRollupValue),
    activeMinutes: Schema.optional(ActiveMinutesRollupValue),
  }).annotate({ identifier: "RollupDataPoint" });

export interface RollUpDataPointsResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Values for each aggregation time window. */
  rollupDataPoints?: ReadonlyArray<RollupDataPoint>;
}

export const RollUpDataPointsResponse: Schema.Schema<RollUpDataPointsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    rollupDataPoints: Schema.optional(Schema.Array(RollupDataPoint)),
  }).annotate({ identifier: "RollUpDataPointsResponse" });

export interface Identity {
  /** Output only. The Google User Identifier in the Google Health APIs. It matches the `{user}` resource ID segment in the resource name paths, e.g. `users/{user}/dataTypes/steps`. Valid values are strings of 1-63 characters, and valid characters are lowercase and uppercase letters, numbers, and hyphens. */
  healthUserId?: string;
  /** Identifier. The resource name of this Identity resource. Format: `users/me/identity` */
  name?: string;
  /** Output only. The legacy Fitbit User identifier. This is the Fitbit ID used in the legacy Fitbit APIs (v1-v3). It can be referenced by clients migrating from the legacy Fitbit APIs to map their existing identifiers to the new Google user ID. It **must not** be used for any other purpose. It is not of any use for new clients using only the Google Health APIs. Valid values are strings of 1-63 characters, and valid characters are lowercase and uppercase letters, numbers, and hyphens. */
  legacyUserId?: string;
}

export const Identity: Schema.Schema<Identity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    healthUserId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    legacyUserId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Identity" });

export interface IrregularRhythmNotification {
  /** Optional. The overlapping analysis windows that were used to evaluate rhythm for potential AFib, containing specific information about the user's heart rhythm. */
  alertWindows?: ReadonlyArray<AlertWindow>;
  /** Required. Observed interval. */
  interval?: SessionTimeInterval;
  /** Output only. The meta information for the compatible device used to conduct the measurement. Irregular Rhythm Notification measurements typically populate `algorithm_version`, `service_version`, and `device_model`. */
  medicalDeviceInfo?: MedicalDeviceInfo;
}

export const IrregularRhythmNotification: Schema.Schema<IrregularRhythmNotification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alertWindows: Schema.optional(Schema.Array(AlertWindow)),
    interval: Schema.optional(SessionTimeInterval),
    medicalDeviceInfo: Schema.optional(MedicalDeviceInfo),
  }).annotate({ identifier: "IrregularRhythmNotification" });

export interface DataPoint {
  /** Optional. Data for points in the `heart-rate` sample data type collection. */
  heartRate?: HeartRate;
  /** Optional. Data for points in the `vo2-max` sample data type collection. */
  vo2Max?: VO2Max;
  /** Optional. Data for points in the `steps` interval data type collection. */
  steps?: Steps;
  /** Optional. Data for points in the `core-body-temperature` sample data type collection. */
  coreBodyTemperature?: CoreBodyTemperature;
  /** Optional. Data for points in the `daily-sleep-temperature-derivations` daily data type collection. */
  dailySleepTemperatureDerivations?: DailySleepTemperatureDerivations;
  /** Optional. Data for points in the `daily-respiratory-rate` daily data type collection. */
  dailyRespiratoryRate?: DailyRespiratoryRate;
  /** Optional. Data for points in the `active-energy-burned` interval data type collection. */
  activeEnergyBurned?: ActiveEnergyBurned;
  /** Optional. Data for points in the `irregular-rhythm-notification` session data type collection. */
  irregularRhythmNotification?: IrregularRhythmNotification;
  /** Optional. Data source information for the metric */
  dataSource?: DataSource;
  /** Optional. Data for points in the `hydration-log` session data type collection. */
  hydrationLog?: HydrationLog;
  /** Optional. Data for points in the `daily-oxygen-saturation` daily data type collection. */
  dailyOxygenSaturation?: DailyOxygenSaturation;
  /** Optional. The food measurement unit details. */
  foodMeasurementUnit?: FoodMeasurementUnit;
  /** Optional. Data for points in the `weight` sample data type collection. */
  weight?: Weight;
  /** Optional. Data for points in the `active-zone-minutes` interval data type collection, measured in minutes. */
  activeZoneMinutes?: ActiveZoneMinutes;
  /** Optional. Data for points in the `swim-lengths-data` interval data type collection. */
  swimLengthsData?: SwimLengthsData;
  /** Optional. Data for points in the `electrocardiogram` session data type collection. */
  electrocardiogram?: Electrocardiogram;
  /** Optional. Data for points in the `height` sample data type collection. */
  height?: Height;
  /** Optional. Data for points in the `altitude` interval data type collection. */
  altitude?: Altitude;
  /** Optional. Data for points in the `distance` interval data type collection. */
  distance?: Distance;
  /** Optional. Data for points in the `time-in-heart-rate-zone` interval data type collection. */
  timeInHeartRateZone?: TimeInHeartRateZone;
  /** Optional. Data for points in the `floors` interval data type collection. */
  floors?: Floors;
  /** Optional. Data for points in the `sedentary-period` interval data type collection. */
  sedentaryPeriod?: SedentaryPeriod;
  /** Optional. Data for points in the `blood-glucose` sample data type collection. */
  bloodGlucose?: BloodGlucose;
  /** Optional. Data for points in the `activity-level` daily data type collection. */
  activityLevel?: ActivityLevel;
  /** Optional. Data for points in the `basal-energy-burned` interval data type collection. */
  basalEnergyBurned?: BasalEnergyBurned;
  /** Optional. Data for points in the `nutrition-log` session data type collection. */
  nutritionLog?: NutritionLog;
  /** Optional. Data for points in the `active-minutes` interval data type collection. */
  activeMinutes?: ActiveMinutes;
  /** Optional. Data for points in the `sleep` session data type collection. */
  sleep?: Sleep;
  /** Optional. Data for points in the `run-vo2-max` sample data type collection. */
  runVo2Max?: RunVO2Max;
  /** Optional. Data for points in the `exercise` session data type collection. */
  exercise?: Exercise;
  /** Optional. Data for points in the `oxygen-saturation` sample data type collection. */
  oxygenSaturation?: OxygenSaturation;
  /** Optional. The food details. */
  food?: Food;
  /** Optional. Data for points in the `respiratory-rate-sleep-summary` sample data type collection. */
  respiratoryRateSleepSummary?: RespiratoryRateSleepSummary;
  /** Identifier. Data point name, only supported for the subset of identifiable data types. For the majority of the data types, individual data points do not need to be identified and this field would be empty. Format: `users/{user}/dataTypes/{data_type}/dataPoints/{data_point}` Example: `users/abcd1234/dataTypes/sleep/dataPoints/a1b2c3d4-e5f6-7890-1234-567890abcdef` The `{user}` ID is a system-generated identifier, as described in Identity.health_user_id. The `{data_type}` ID corresponds to the kebab-case version of the field names in the DataPoint data union field, e.g. `heart-rate` for the `heart_rate` field. The `{data_point}` ID can be client-provided or system-generated. If client-provided, it must be a string of 4-63 characters, containing only lowercase letters, numbers, and hyphens. */
  name?: string;
  /** Optional. Data for points in the `daily-resting-heart-rate` daily data type collection. */
  dailyRestingHeartRate?: DailyRestingHeartRate;
  /** Optional. Data for points in the `daily-vo2-max` daily data type collection. */
  dailyVo2Max?: DailyVO2Max;
  /** Optional. Data for points in the `daily-heart-rate-variability` daily data type collection. */
  dailyHeartRateVariability?: DailyHeartRateVariability;
  /** Optional. Data for points in the `daily-heart-rate-zones` daily data type collection. */
  dailyHeartRateZones?: DailyHeartRateZones;
  /** Optional. Data for points in the `body-fat` sample data type collection. */
  bodyFat?: BodyFat;
  /** Optional. Data for points in the `heart-rate-variability` sample data type collection. */
  heartRateVariability?: HeartRateVariability;
}

export const DataPoint: Schema.Schema<DataPoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    heartRate: Schema.optional(HeartRate),
    vo2Max: Schema.optional(VO2Max),
    steps: Schema.optional(Steps),
    coreBodyTemperature: Schema.optional(CoreBodyTemperature),
    dailySleepTemperatureDerivations: Schema.optional(
      DailySleepTemperatureDerivations,
    ),
    dailyRespiratoryRate: Schema.optional(DailyRespiratoryRate),
    activeEnergyBurned: Schema.optional(ActiveEnergyBurned),
    irregularRhythmNotification: Schema.optional(IrregularRhythmNotification),
    dataSource: Schema.optional(DataSource),
    hydrationLog: Schema.optional(HydrationLog),
    dailyOxygenSaturation: Schema.optional(DailyOxygenSaturation),
    foodMeasurementUnit: Schema.optional(FoodMeasurementUnit),
    weight: Schema.optional(Weight),
    activeZoneMinutes: Schema.optional(ActiveZoneMinutes),
    swimLengthsData: Schema.optional(SwimLengthsData),
    electrocardiogram: Schema.optional(Electrocardiogram),
    height: Schema.optional(Height),
    altitude: Schema.optional(Altitude),
    distance: Schema.optional(Distance),
    timeInHeartRateZone: Schema.optional(TimeInHeartRateZone),
    floors: Schema.optional(Floors),
    sedentaryPeriod: Schema.optional(SedentaryPeriod),
    bloodGlucose: Schema.optional(BloodGlucose),
    activityLevel: Schema.optional(ActivityLevel),
    basalEnergyBurned: Schema.optional(BasalEnergyBurned),
    nutritionLog: Schema.optional(NutritionLog),
    activeMinutes: Schema.optional(ActiveMinutes),
    sleep: Schema.optional(Sleep),
    runVo2Max: Schema.optional(RunVO2Max),
    exercise: Schema.optional(Exercise),
    oxygenSaturation: Schema.optional(OxygenSaturation),
    food: Schema.optional(Food),
    respiratoryRateSleepSummary: Schema.optional(RespiratoryRateSleepSummary),
    name: Schema.optional(Schema.String),
    dailyRestingHeartRate: Schema.optional(DailyRestingHeartRate),
    dailyVo2Max: Schema.optional(DailyVO2Max),
    dailyHeartRateVariability: Schema.optional(DailyHeartRateVariability),
    dailyHeartRateZones: Schema.optional(DailyHeartRateZones),
    bodyFat: Schema.optional(BodyFat),
    heartRateVariability: Schema.optional(HeartRateVariability),
  }).annotate({ identifier: "DataPoint" });

export interface Operation {
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(Status),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Operation" });

export interface GoogleDevicesandservicesHealthV4User {
  /** Identifier. The resource name of the user. The `{user}` ID is a system-generated identifier, as described in Identity.health_user_id. Format: `users/{user}` */
  name?: string;
}

export const GoogleDevicesandservicesHealthV4User: Schema.Schema<GoogleDevicesandservicesHealthV4User> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevicesandservicesHealthV4User" });

export interface CreateSubscriberPayload {
  /** Required. The full HTTPS URI where update notifications will be sent. The URI must be a valid URL and use HTTPS as the scheme. This endpoint will be verified during the `CreateSubscriber` call. See CreateSubscriber RPC documentation for verification details. */
  endpointUri?: string;
  /** Required. Authorization mechanism for the subscriber endpoint. The `secret` within this message is crucial for endpoint verification and for securing webhook notifications. */
  endpointAuthorization?: EndpointAuthorization;
  /** Optional. Configuration for the subscriber. */
  subscriberConfigs?: ReadonlyArray<SubscriberConfig>;
}

export const CreateSubscriberPayload: Schema.Schema<CreateSubscriberPayload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpointUri: Schema.optional(Schema.String),
    endpointAuthorization: Schema.optional(EndpointAuthorization),
    subscriberConfigs: Schema.optional(Schema.Array(SubscriberConfig)),
  }).annotate({ identifier: "CreateSubscriberPayload" });

export interface RollUpDataPointsRequest {
  /** Required. The size of the time window to group data points into before applying the aggregation functions. Must be at least 1 second. */
  windowSize?: string;
  /** Optional. The data source family name to roll up. If empty, data points from all available data sources will be rolled up. Format: `users/me/dataSourceFamilies/{data_source_family}` The supported values are: - `users/me/dataSourceFamilies/all-sources` - default value - `users/me/dataSourceFamilies/google-wearables` - tracker devices - `users/me/dataSourceFamilies/google-sources` - Google first party sources */
  dataSourceFamily?: string;
  /** Optional. The maximum number of data points to return. If unspecified, at most 1440 data points will be returned. The maximum page size is 10000; values above that will be truncated accordingly. */
  pageSize?: number;
  /** Optional. The next_page_token from a previous request, if any. All other request fields need to be the same as in the initial request when the page token is specified. */
  pageToken?: string;
  /** Required. Closed-open range of data points that will be rolled up. The maximum range for `calories-in-heart-rate-zone`, `heart-rate`, `active-minutes` and `total-calories` is 14 days. The maximum range for all other data types is 90 days. */
  range?: Interval;
}

export const RollUpDataPointsRequest: Schema.Schema<RollUpDataPointsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    windowSize: Schema.optional(Schema.String),
    dataSourceFamily: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    pageToken: Schema.optional(Schema.String),
    range: Schema.optional(Interval),
  }).annotate({ identifier: "RollUpDataPointsRequest" });

export interface ExportExerciseTcxResponse {
  /** Contains the exported TCX data. This field is intended for gRPC clients, as media download integration is not supported for gRPC. HTTP clients should instead use the `alt=media` query parameter to download the raw binary TCX file. */
  tcxData?: string;
}

export const ExportExerciseTcxResponse: Schema.Schema<ExportExerciseTcxResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tcxData: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExportExerciseTcxResponse" });

export interface ListDataPointsResponse {
  /** Next page token, empty if the response is complete */
  nextPageToken?: string;
  /** Data points matching the query */
  dataPoints?: ReadonlyArray<DataPoint>;
}

export const ListDataPointsResponse: Schema.Schema<ListDataPointsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    dataPoints: Schema.optional(Schema.Array(DataPoint)),
  }).annotate({ identifier: "ListDataPointsResponse" });

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

export interface CreateProjectsSubscribersRequest {
  /** Required. The parent resource where this subscriber will be created. Format: projects/{project_number} Example: projects/1234567890 */
  parent: string;
  /** Optional. The ID to use for the subscriber, which will become the final component of the subscriber's resource name. This value should be 4-36 characters, and valid characters are /[a-z]([a-z0-9-]{2,34}[a-z0-9])/. */
  subscriberId?: string;
  /** Request body */
  body?: CreateSubscriberPayload;
}

export const CreateProjectsSubscribersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    subscriberId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("subscriberId"),
    ),
    body: Schema.optional(CreateSubscriberPayload).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v4/{+parent}/subscribers", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsSubscribersRequest>;

export type CreateProjectsSubscribersResponse = Operation;
export const CreateProjectsSubscribersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsSubscribersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Registers a new subscriber endpoint to receive notifications. A subscriber represents an application or service that wishes to receive data change notifications for users who have granted consent. **Endpoint Verification:** For a subscriber to be successfully created, the provided `endpoint_uri` must be a valid HTTPS endpoint and must pass an automated verification check. The backend will send two HTTP POST requests to the `endpoint_uri`: 1. **Verification with Authorization:** * **Headers:** Includes `Content-Type: application/json` and `Authorization` (with the exact value from `CreateSubscriberPayload.endpoint_authorization.secret`). * **Body:** `{"type": "verification"}` * **Expected Response:** HTTP `201 Created`. 2. **Verification without Authorization:** * **Headers:** Includes `Content-Type: application/json`. The `Authorization` header is OMITTED. * **Body:** `{"type": "verification"}` * **Expected Response:** HTTP `401 Unauthorized` or `403 Forbidden`. Both tests must pass for the subscriber creation to succeed. If verification fails, the operation will not be completed and an error will be returned. This process ensures the endpoint is reachable and correctly validates the `Authorization` header. */
export const createProjectsSubscribers: API.OperationMethod<
  CreateProjectsSubscribersRequest,
  CreateProjectsSubscribersResponse,
  CreateProjectsSubscribersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsSubscribersRequest,
  output: CreateProjectsSubscribersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsSubscribersRequest {
  /** Required. The parent, which owns this collection of subscribers. Format: projects/{project} */
  parent: string;
  /** Optional. A page token, received from a previous `ListSubscribers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscribers` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of subscribers to return. The service may return fewer than this value. If unspecified, at most 50 subscribers will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsSubscribersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v4/{+parent}/subscribers" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsSubscribersRequest>;

export type ListProjectsSubscribersResponse = ListSubscribersResponse;
export const ListProjectsSubscribersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSubscribersResponse;

export type ListProjectsSubscribersError = DefaultErrors | NotFound | Forbidden;

/** Lists all subscribers registered within the owned Google Cloud Project. */
export const listProjectsSubscribers: API.PaginatedOperationMethod<
  ListProjectsSubscribersRequest,
  ListProjectsSubscribersResponse,
  ListProjectsSubscribersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsSubscribersRequest,
  output: ListProjectsSubscribersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsSubscribersRequest {
  /** Identifier. The resource name of the Subscriber. Format: projects/{project}/subscribers/{subscriber} The {project} ID is a Google Cloud Project ID or Project Number. The {subscriber} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34}[a-z0-9])/) if provided during creation, or system-generated otherwise (e.g., a UUID). Example (User-settable subscriber ID): projects/my-project/subscribers/my-sub-123 Example (System-generated subscriber ID): projects/my-project/subscribers/a1b2c3d4-e5f6-7890-1234-567890abcdef */
  name: string;
  /** Optional. A field mask that specifies which fields of the Subscriber message are to be updated. This allows for partial updates. Supported fields: - endpoint_uri - subscriber_configs - endpoint_authorization */
  updateMask?: string;
  /** Request body */
  body?: Subscriber;
}

export const PatchProjectsSubscribersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Subscriber).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v4/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsSubscribersRequest>;

export type PatchProjectsSubscribersResponse = Operation;
export const PatchProjectsSubscribersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsSubscribersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the configuration of an existing subscriber, such as the endpoint URI or the data types it's interested in. **Endpoint Verification:** If the `endpoint_uri` or `endpoint_authorization` field is included in the `update_mask`, the backend will re-verify the endpoint. The verification process is the same as described in `CreateSubscriber`: 1. **Verification with Authorization:** POST to the new or existing `endpoint_uri` with the new or existing `Authorization` secret. Expects HTTP `201 Created`. 2. **Verification without Authorization:** POST to the `endpoint_uri` without the `Authorization` header. Expects HTTP `401 Unauthorized` or `403 Forbidden`. Both tests must pass using the potentially updated values for the subscriber update to succeed. If verification fails, the update will not be applied, and an error will be returned. */
export const patchProjectsSubscribers: API.OperationMethod<
  PatchProjectsSubscribersRequest,
  PatchProjectsSubscribersResponse,
  PatchProjectsSubscribersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsSubscribersRequest,
  output: PatchProjectsSubscribersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsSubscribersRequest {
  /** Required. The name of the subscriber to delete. Format: projects/{project}/subscribers/{subscriber} Example: projects/my-project/subscribers/my-subscriber-123 The {subscriber} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34}[a-z0-9])/) or system-generated if not provided during creation. */
  name: string;
  /** Optional. If set to true, any child resources (e.g., subscriptions) will also be deleted. If false (default) and child resources exist, the request will fail. */
  force?: boolean;
}

export const DeleteProjectsSubscribersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v4/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsSubscribersRequest>;

export type DeleteProjectsSubscribersResponse = Operation;
export const DeleteProjectsSubscribersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsSubscribersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a subscriber registration. This will stop all notifications to the subscriber's endpoint. */
export const deleteProjectsSubscribers: API.OperationMethod<
  DeleteProjectsSubscribersRequest,
  DeleteProjectsSubscribersResponse,
  DeleteProjectsSubscribersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsSubscribersRequest,
  output: DeleteProjectsSubscribersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsSubscribersSubscriptionsRequest {
  /** Required. The parent subscriber. Format: projects/{project}/subscribers/{subscriber} The {subscriber} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34}[a-z0-9])/) if provided during creation, or system-generated otherwise. */
  parent: string;
  /** Optional. The {subscription_id} is user-settable (4-36 chars, matching /[a-z]([a-z0-9-]{2,34}[a-z0-9])/) or system-generated otherwise. If provided, the ID must be unique within the parent subscriber. */
  subscriptionId?: string;
  /** Request body */
  body?: CreateSubscriptionPayload;
}

export const CreateProjectsSubscribersSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    subscriptionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("subscriptionId"),
    ),
    body: Schema.optional(CreateSubscriptionPayload).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v4/{+parent}/subscriptions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsSubscribersSubscriptionsRequest>;

export type CreateProjectsSubscribersSubscriptionsResponse = Subscription;
export const CreateProjectsSubscribersSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Subscription;

export type CreateProjectsSubscribersSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a subscription for a specific user to a specific subscriber. This method requires the subscriber to have a `SubscriptionCreatePolicy` set to `MANUAL` for the given data types. */
export const createProjectsSubscribersSubscriptions: API.OperationMethod<
  CreateProjectsSubscribersSubscriptionsRequest,
  CreateProjectsSubscribersSubscriptionsResponse,
  CreateProjectsSubscribersSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsSubscribersSubscriptionsRequest,
  output: CreateProjectsSubscribersSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsSubscribersSubscriptionsRequest {
  /** Required. The parent subscriber. Format: projects/{project}/subscribers/{subscriber} The {subscriber} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34}[a-z0-9])/) if provided during creation, or system-generated otherwise. */
  parent: string;
  /** Optional. A page token, received from a previous `ListSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptions` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. A filter to apply to the list of subscriptions. The filter syntax is described in https://google.aip.dev/160. The filter can be applied to the following fields: - `user` - `data_type` The `user` identifier (e.g., `user1` in `users/user1`) refers to the public `health_user_id` Example: user = "users/user1" Example: user = "users/user1" OR user = "users/user2" Example: user = "users/user1" AND (data_type = "sleep" OR data_type = "weight") */
  filter?: string;
  /** Optional. The maximum number of subscriptions to return. The service may return fewer than this value. If unspecified, at most 50 subscriptions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsSubscribersSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v4/{+parent}/subscriptions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsSubscribersSubscriptionsRequest>;

export type ListProjectsSubscribersSubscriptionsResponse =
  ListSubscriptionsResponse;
export const ListProjectsSubscribersSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSubscriptionsResponse;

export type ListProjectsSubscribersSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all active subscriptions for a given subscriber. This can be filtered, for example, by user or data type. */
export const listProjectsSubscribersSubscriptions: API.PaginatedOperationMethod<
  ListProjectsSubscribersSubscriptionsRequest,
  ListProjectsSubscribersSubscriptionsResponse,
  ListProjectsSubscribersSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsSubscribersSubscriptionsRequest,
  output: ListProjectsSubscribersSubscriptionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsSubscribersSubscriptionsRequest {
  /** Optional. The list of fields to update. */
  updateMask?: string;
  /** Identifier. The resource name of the Subscription. Format: `projects/{project}/subscribers/{subscriber}/subscriptions/{subscription}` Example: `projects/my-project/subscribers/my-subscriber-123/subscriptions/my-subscription-456` The {project} ID is mandatory (6-30 characters, matching /a-z{6,30}/) The {subscriber} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34}[a-z0-9])/) if provided during creation, or system-generated otherwise. The {subscription} ID is user-settable (4-36 chars, matching /[a-z]([a-z0-9-]{2,34}[a-z0-9])/) or system-generated otherwise. */
  name: string;
  /** Request body */
  body?: Subscription;
}

export const PatchProjectsSubscribersSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Subscription).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v4/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsSubscribersSubscriptionsRequest>;

export type PatchProjectsSubscribersSubscriptionsResponse = Subscription;
export const PatchProjectsSubscribersSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Subscription;

export type PatchProjectsSubscribersSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the data types for an existing user subscription. */
export const patchProjectsSubscribersSubscriptions: API.OperationMethod<
  PatchProjectsSubscribersSubscriptionsRequest,
  PatchProjectsSubscribersSubscriptionsResponse,
  PatchProjectsSubscribersSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsSubscribersSubscriptionsRequest,
  output: PatchProjectsSubscribersSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsSubscribersSubscriptionsRequest {
  /** Required. The resource name of the subscription to delete. Format: `projects/{project}/subscribers/{subscriber}/subscriptions/{subscription}` Example: `projects/my-project/subscribers/my-subscriber-123/subscriptions/my-subscription-456` The {subscriber} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34}[a-z0-9])/) if provided during creation, or system-generated otherwise. The {subscription} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34}[a-z0-9])/) or system-generated if not provided during creation. */
  name: string;
}

export const DeleteProjectsSubscribersSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v4/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsSubscribersSubscriptionsRequest>;

export type DeleteProjectsSubscribersSubscriptionsResponse = Empty;
export const DeleteProjectsSubscribersSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsSubscribersSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a specific user subscription, stopping notifications for this user to this subscriber. */
export const deleteProjectsSubscribersSubscriptions: API.OperationMethod<
  DeleteProjectsSubscribersSubscriptionsRequest,
  DeleteProjectsSubscribersSubscriptionsResponse,
  DeleteProjectsSubscribersSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsSubscribersSubscriptionsRequest,
  output: DeleteProjectsSubscribersSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSettingsUsersRequest {
  /** Required. The name of the Settings. Format: `users/me/settings`. */
  name: string;
}

export const GetSettingsUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v4/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetSettingsUsersRequest>;

export type GetSettingsUsersResponse = Settings;
export const GetSettingsUsersResponse = /*@__PURE__*/ /*#__PURE__*/ Settings;

export type GetSettingsUsersError = DefaultErrors | NotFound | Forbidden;

/** Returns user settings details. */
export const getSettingsUsers: API.OperationMethod<
  GetSettingsUsersRequest,
  GetSettingsUsersResponse,
  GetSettingsUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSettingsUsersRequest,
  output: GetSettingsUsersResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateSettingsUsersRequest {
  /** Identifier. The resource name of this Settings resource. Format: `users/{user}/settings` Example: `users/1234567890/settings` or `users/me/settings` The {user} ID is a system-generated Google Health API user ID, a string of 1-63 characters consisting of lowercase and uppercase letters, numbers, and hyphens. The literal `me` can also be used to refer to the authenticated user. */
  name: string;
  /** Optional. The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: Settings;
}

export const UpdateSettingsUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Settings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v4/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateSettingsUsersRequest>;

export type UpdateSettingsUsersResponse = Settings;
export const UpdateSettingsUsersResponse = /*@__PURE__*/ /*#__PURE__*/ Settings;

export type UpdateSettingsUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the user's settings details. */
export const updateSettingsUsers: API.OperationMethod<
  UpdateSettingsUsersRequest,
  UpdateSettingsUsersResponse,
  UpdateSettingsUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSettingsUsersRequest,
  output: UpdateSettingsUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProfileUsersRequest {
  /** Required. The name of the Profile. Format: `users/me/profile`. */
  name: string;
}

export const GetProfileUsersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    name: Schema.String.pipe(T.HttpPath("name")),
  },
).pipe(
  T.Http({ method: "GET", path: "v4/{+name}" }),
  svc,
) as unknown as Schema.Schema<GetProfileUsersRequest>;

export type GetProfileUsersResponse = Profile;
export const GetProfileUsersResponse = /*@__PURE__*/ /*#__PURE__*/ Profile;

export type GetProfileUsersError = DefaultErrors | NotFound | Forbidden;

/** Returns user Profile details. */
export const getProfileUsers: API.OperationMethod<
  GetProfileUsersRequest,
  GetProfileUsersResponse,
  GetProfileUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProfileUsersRequest,
  output: GetProfileUsersResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateProfileUsersRequest {
  /** Identifier. The resource name of this Profile resource. Format: `users/{user}/profile` Example: `users/1234567890/profile` or `users/me/profile` The {user} ID is a system-generated Google Health API user ID, a string of 1-63 characters consisting of lowercase and uppercase letters, numbers, and hyphens. The literal `me` can also be used to refer to the authenticated user. */
  name: string;
  /** Optional. The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: Profile;
}

export const UpdateProfileUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Profile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v4/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateProfileUsersRequest>;

export type UpdateProfileUsersResponse = Profile;
export const UpdateProfileUsersResponse = /*@__PURE__*/ /*#__PURE__*/ Profile;

export type UpdateProfileUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the user's profile details. */
export const updateProfileUsers: API.OperationMethod<
  UpdateProfileUsersRequest,
  UpdateProfileUsersResponse,
  UpdateProfileUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateProfileUsersRequest,
  output: UpdateProfileUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIrnProfileUsersRequest {
  /** Required. The resource name of the IRN Profile. Format: `users/{user}/irnProfile` Example: `users/1234567890/irnProfile` or `users/me/irnProfile` The {user} ID is a system-generated Google Health API user ID, a string of 1-63 characters consisting of lowercase and uppercase letters, numbers, and hyphens. The literal `me` can also be used to refer to the authenticated user. */
  name: string;
}

export const GetIrnProfileUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v4/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetIrnProfileUsersRequest>;

export type GetIrnProfileUsersResponse = IrnProfile;
export const GetIrnProfileUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ IrnProfile;

export type GetIrnProfileUsersError = DefaultErrors | NotFound | Forbidden;

/** Returns user's IRN Profile details. */
export const getIrnProfileUsers: API.OperationMethod<
  GetIrnProfileUsersRequest,
  GetIrnProfileUsersResponse,
  GetIrnProfileUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIrnProfileUsersRequest,
  output: GetIrnProfileUsersResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetIdentityUsersRequest {
  /** Required. The resource name of the Identity. Format: `users/me/identity` */
  name: string;
}

export const GetIdentityUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v4/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetIdentityUsersRequest>;

export type GetIdentityUsersResponse = Identity;
export const GetIdentityUsersResponse = /*@__PURE__*/ /*#__PURE__*/ Identity;

export type GetIdentityUsersError = DefaultErrors | NotFound | Forbidden;

/** Gets the user's identity. It includes the legacy Fitbit user ID and the Google user ID and it can be used by migrating clients to map identifiers between the two systems. */
export const getIdentityUsers: API.OperationMethod<
  GetIdentityUsersRequest,
  GetIdentityUsersResponse,
  GetIdentityUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIdentityUsersRequest,
  output: GetIdentityUsersResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetUsersPairedDevicesRequest {
  /** Required. The name of the device to retrieve. Format: users/{user}/devices/{device} */
  name: string;
}

export const GetUsersPairedDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v4/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetUsersPairedDevicesRequest>;

export type GetUsersPairedDevicesResponse = PairedDevice;
export const GetUsersPairedDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PairedDevice;

export type GetUsersPairedDevicesError = DefaultErrors | NotFound | Forbidden;

/** Returns user's Device. */
export const getUsersPairedDevices: API.OperationMethod<
  GetUsersPairedDevicesRequest,
  GetUsersPairedDevicesResponse,
  GetUsersPairedDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetUsersPairedDevicesRequest,
  output: GetUsersPairedDevicesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListUsersPairedDevicesRequest {
  /** Optional. The maximum number of devices to return. The service may return fewer than this value. If unspecified, at most 5 devices will be returned. The maximum value is 100. values above 100 will be coerced to 100. */
  pageSize?: number;
  /** Required. The parent, which owns this collection of devices. Format: users/{user} */
  parent: string;
  /** Optional. A page token, received from a previous `ListPairedDevices` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPairedDevices` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListUsersPairedDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v4/{+parent}/pairedDevices" }),
    svc,
  ) as unknown as Schema.Schema<ListUsersPairedDevicesRequest>;

export type ListUsersPairedDevicesResponse = ListPairedDevicesResponse;
export const ListUsersPairedDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListPairedDevicesResponse;

export type ListUsersPairedDevicesError = DefaultErrors | NotFound | Forbidden;

/** Returns the user's list of paired 1P trackers and smartwatches. */
export const listUsersPairedDevices: API.PaginatedOperationMethod<
  ListUsersPairedDevicesRequest,
  ListUsersPairedDevicesResponse,
  ListUsersPairedDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListUsersPairedDevicesRequest,
  output: ListUsersPairedDevicesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ReconcileUsersDataTypesDataPointsRequest {
  /** Optional. The `next_page_token` from a previous request, if any. */
  pageToken?: string;
  /** Optional. Filter expression based on https://aip.dev/160. A time range, either physical or civil, can be specified. See the ListDataPointsRequest.filter for the supported fields and syntax. */
  filter?: string;
  /** Required. Parent data type of the Data Point collection. Format: `users/me/dataTypes/{data_type}`, e.g.: - `users/me/dataTypes/steps` - `users/me/dataTypes/heart-rate` For a list of the supported data types see the DataPoint data union field. */
  parent: string;
  /** Optional. The data source family name to reconcile. If empty, data points from all data sources will be reconciled. Format: `users/me/dataSourceFamilies/{data_source_family}` The supported values are: - `users/me/dataSourceFamilies/all-sources` - default value - `users/me/dataSourceFamilies/google-wearables` - tracker devices - `users/me/dataSourceFamilies/google-sources` - Google first party sources */
  dataSourceFamily?: string;
  /** Optional. The maximum number of data points to return. If unspecified, at most 1440 data points will be returned. The maximum page size is 10000; values above that will be truncated accordingly. For `exercise` and `sleep` the default page size is 25. The maximum page size for `exercise` and `sleep` is 25. */
  pageSize?: number;
}

export const ReconcileUsersDataTypesDataPointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    dataSourceFamily: Schema.optional(Schema.String).pipe(
      T.HttpQuery("dataSourceFamily"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v4/{+parent}/dataPoints:reconcile" }),
    svc,
  ) as unknown as Schema.Schema<ReconcileUsersDataTypesDataPointsRequest>;

export type ReconcileUsersDataTypesDataPointsResponse =
  ReconcileDataPointsResponse;
export const ReconcileUsersDataTypesDataPointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ReconcileDataPointsResponse;

export type ReconcileUsersDataTypesDataPointsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Reconcile data points from multiple data sources into a single data stream. */
export const reconcileUsersDataTypesDataPoints: API.PaginatedOperationMethod<
  ReconcileUsersDataTypesDataPointsRequest,
  ReconcileUsersDataTypesDataPointsResponse,
  ReconcileUsersDataTypesDataPointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ReconcileUsersDataTypesDataPointsRequest,
  output: ReconcileUsersDataTypesDataPointsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchUsersDataTypesDataPointsRequest {
  /** Identifier. Data point name, only supported for the subset of identifiable data types. For the majority of the data types, individual data points do not need to be identified and this field would be empty. Format: `users/{user}/dataTypes/{data_type}/dataPoints/{data_point}` Example: `users/abcd1234/dataTypes/sleep/dataPoints/a1b2c3d4-e5f6-7890-1234-567890abcdef` The `{user}` ID is a system-generated identifier, as described in Identity.health_user_id. The `{data_type}` ID corresponds to the kebab-case version of the field names in the DataPoint data union field, e.g. `heart-rate` for the `heart_rate` field. The `{data_point}` ID can be client-provided or system-generated. If client-provided, it must be a string of 4-63 characters, containing only lowercase letters, numbers, and hyphens. */
  name: string;
  /** Request body */
  body?: DataPoint;
}

export const PatchUsersDataTypesDataPointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(DataPoint).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v4/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchUsersDataTypesDataPointsRequest>;

export type PatchUsersDataTypesDataPointsResponse = Operation;
export const PatchUsersDataTypesDataPointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchUsersDataTypesDataPointsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a single identifiable data point. If a data point with the specified `name` is not found, the request will fail. */
export const patchUsersDataTypesDataPoints: API.OperationMethod<
  PatchUsersDataTypesDataPointsRequest,
  PatchUsersDataTypesDataPointsResponse,
  PatchUsersDataTypesDataPointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchUsersDataTypesDataPointsRequest,
  output: PatchUsersDataTypesDataPointsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchDeleteUsersDataTypesDataPointsRequest {
  /** Optional. Parent (data type) for the Data Point collection Format: `users/me/dataTypes/{data_type}`, e.g.: - `users/me/dataTypes/steps` - `users/me/dataTypes/-` For a list of the supported data types see the DataPoint data union field. Deleting data points across multiple data type collections is supported following https://aip.dev/159. If this is set, the parent of all of the data points specified in `names` must match this field. */
  parent: string;
  /** Request body */
  body?: BatchDeleteDataPointsRequest;
}

export const BatchDeleteUsersDataTypesDataPointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchDeleteDataPointsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v4/{+parent}/dataPoints:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchDeleteUsersDataTypesDataPointsRequest>;

export type BatchDeleteUsersDataTypesDataPointsResponse = Operation;
export const BatchDeleteUsersDataTypesDataPointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type BatchDeleteUsersDataTypesDataPointsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a batch of identifyable data points. */
export const batchDeleteUsersDataTypesDataPoints: API.OperationMethod<
  BatchDeleteUsersDataTypesDataPointsRequest,
  BatchDeleteUsersDataTypesDataPointsResponse,
  BatchDeleteUsersDataTypesDataPointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchDeleteUsersDataTypesDataPointsRequest,
  output: BatchDeleteUsersDataTypesDataPointsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListUsersDataTypesDataPointsRequest {
  /** Required. Parent data type of the Data Point collection. Format: `users/me/dataTypes/{data_type}`, e.g.: - `users/me/dataTypes/steps` - `users/me/dataTypes/weight` For a list of the supported data types see the DataPoint data union field. */
  parent: string;
  /** Optional. The `next_page_token` from a previous request, if any. */
  pageToken?: string;
  /** Optional. Filter expression following https://google.aip.dev/160. A time range (either physical or civil) can be specified. The supported filter fields are: - Interval start time: - Pattern: `{interval_data_type}.interval.start_time` - Supported comparison operators: `>=`, `<` - Timestamp literal expected in RFC-3339 format - Supported logical operators: `AND` - Example: - `steps.interval.start_time >= "2023-11-24T00:00:00Z" AND steps.interval.start_time < "2023-11-25T00:00:00Z"` - `distance.interval.start_time >= "2024-08-14T12:34:56Z"` - Interval civil start time: - Pattern: `{interval_data_type}.interval.civil_start_time` - Supported comparison operators: `>=`, `<` - Date with optional time literal expected in ISO 8601 `YYYY-MM-DD[THH:mm:ss]` format - Supported logical operators: `AND` - Example: - `steps.interval.civil_start_time >= "2023-11-24" AND steps.interval.civil_start_time < "2023-11-25"` - `distance.interval.civil_start_time >= "2024-08-14T12:34:56"` - Sample observation physical time: - Pattern: `{sample_data_type}.sample_time.physical_time` - Supported comparison operators: `>=`, `<` - Timestamp literal expected in RFC-3339 format - Supported logical operators: `AND` - Example: - `weight.sample_time.physical_time >= "2023-11-24T00:00:00Z" AND weight.sample_time.physical_time < "2023-11-25T00:00:00Z"` - `weight.sample_time.physical_time >= "2024-08-14T12:34:56Z"` - Sample observation civil time: - Pattern: `{sample_data_type}.sample_time.civil_time` - Supported comparison operators: `>=`, `<` - Date with optional time literal expected in ISO 8601 `YYYY-MM-DD[THH:mm:ss]` format - Supported logical operators: `AND` - Example: - `weight.sample_time.civil_time >= "2023-11-24" AND weight.sample_time.civil_time < "2023-11-25"` - `weight.sample_time.civil_time >= "2024-08-14T12:34:56"` - Daily summary date: - Pattern: `{daily_summary_data_type}.date` - Supported comparison operators: `>=`, `<` - Date literal expected in ISO 8601 `YYYY-MM-DD` format - Supported logical operators: `AND` - Example: - `daily_heart_rate_variability.date < "2024-08-15"` - Session civil start time (**Excluding Sleep and ECG**): - Pattern: `{session_data_type}.interval.civil_start_time` - Supported comparison operators: `>=`, `<` - Date with optional time literal expected in ISO 8601 `YYYY-MM-DD[THH:mm:ss]` format - Supported logical operators: `AND` - Example: - `exercise.interval.civil_start_time >= "2023-11-24" AND exercise.interval.civil_start_time < "2023-11-25"` - `exercise.interval.civil_start_time >= "2024-08-14T12:34:56"` - Session start time (**ECG specific**): - Pattern: `electrocardiogram.interval.start_time` - Supported comparison operators: `>=` - Timestamp literal expected in RFC-3339 format - Example: - `electrocardiogram.interval.start_time >= "2024-08-14T12:34:56Z"` - Note: Only filtering by start time is supported for ECG. Filtering by end time (e.g., `electrocardiogram.interval.end_time`) is not supported. - Session end time (**Sleep specific**): - Pattern: `sleep.interval.end_time` - Supported comparison operators: `>=`, `<` - Timestamp literal expected in RFC-3339 format - Supported logical operators: `AND`, `OR` - Example: - `sleep.interval.end_time >= "2023-11-24T00:00:00Z" AND sleep.interval.end_time < "2023-11-25T00:00:00Z"` - Session civil end time (**Sleep specific**): - Pattern: `sleep.interval.civil_end_time` - Supported comparison operators: `>=`, `<` - Date with optional time literal expected in ISO 8601 `YYYY-MM-DD[THH:mm:ss]` format - Supported logical operators: `AND`, `OR` - Example: - `sleep.interval.civil_end_time >= "2023-11-24" AND sleep.interval.civil_end_time < "2023-11-25"` Data points in the response will be ordered by the interval start time in descending order. */
  filter?: string;
  /** Optional. The maximum number of data points to return. If unspecified, at most 1440 data points will be returned. The maximum page size is 10000; values above that will be truncated accordingly. For `exercise` and `sleep` the default page size is 25. The maximum page size for `exercise` and `sleep` is 25. */
  pageSize?: number;
}

export const ListUsersDataTypesDataPointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v4/{+parent}/dataPoints" }),
    svc,
  ) as unknown as Schema.Schema<ListUsersDataTypesDataPointsRequest>;

export type ListUsersDataTypesDataPointsResponse = ListDataPointsResponse;
export const ListUsersDataTypesDataPointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDataPointsResponse;

export type ListUsersDataTypesDataPointsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Query user health and fitness data points. */
export const listUsersDataTypesDataPoints: API.PaginatedOperationMethod<
  ListUsersDataTypesDataPointsRequest,
  ListUsersDataTypesDataPointsResponse,
  ListUsersDataTypesDataPointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListUsersDataTypesDataPointsRequest,
  output: ListUsersDataTypesDataPointsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DailyRollUpUsersDataTypesDataPointsRequest {
  /** Required. Parent data type of the Data Point collection. Format: `users/{user}/dataTypes/{data_type}`, e.g.: - `users/me/dataTypes/steps` - `users/me/dataTypes/distance` For a list of the supported data types see the DailyRollupDataPoint value union field. */
  parent: string;
  /** Request body */
  body?: DailyRollUpDataPointsRequest;
}

export const DailyRollUpUsersDataTypesDataPointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(DailyRollUpDataPointsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v4/{+parent}/dataPoints:dailyRollUp",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DailyRollUpUsersDataTypesDataPointsRequest>;

export type DailyRollUpUsersDataTypesDataPointsResponse =
  DailyRollUpDataPointsResponse;
export const DailyRollUpUsersDataTypesDataPointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DailyRollUpDataPointsResponse;

export type DailyRollUpUsersDataTypesDataPointsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Roll up data points over civil time intervals for supported data types. */
export const dailyRollUpUsersDataTypesDataPoints: API.OperationMethod<
  DailyRollUpUsersDataTypesDataPointsRequest,
  DailyRollUpUsersDataTypesDataPointsResponse,
  DailyRollUpUsersDataTypesDataPointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DailyRollUpUsersDataTypesDataPointsRequest,
  output: DailyRollUpUsersDataTypesDataPointsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RollUpUsersDataTypesDataPointsRequest {
  /** Required. Parent data type of the Data Point collection. Format: `users/{user}/dataTypes/{data_type}`, e.g.: - `users/me/dataTypes/steps` - `users/me/dataTypes/distance` For a list of the supported data types see the RollupDataPoint value union field. */
  parent: string;
  /** Request body */
  body?: RollUpDataPointsRequest;
}

export const RollUpUsersDataTypesDataPointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(RollUpDataPointsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v4/{+parent}/dataPoints:rollUp",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RollUpUsersDataTypesDataPointsRequest>;

export type RollUpUsersDataTypesDataPointsResponse = RollUpDataPointsResponse;
export const RollUpUsersDataTypesDataPointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RollUpDataPointsResponse;

export type RollUpUsersDataTypesDataPointsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Roll up data points over physical time intervals for supported data types. */
export const rollUpUsersDataTypesDataPoints: API.OperationMethod<
  RollUpUsersDataTypesDataPointsRequest,
  RollUpUsersDataTypesDataPointsResponse,
  RollUpUsersDataTypesDataPointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RollUpUsersDataTypesDataPointsRequest,
  output: RollUpUsersDataTypesDataPointsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExportExerciseTcxUsersDataTypesDataPointsRequest {
  /** Required. The resource name of the exercise data point to export. Format: `users/{user}/dataTypes/exercise/dataPoints/{data_point}` Example: `users/me/dataTypes/exercise/dataPoints/2026443605080188808` The `{user}` is the alias `"me"` currently. Future versions may support user IDs. The `{data_point}` ID maps to the exercise ID, which is a long integer. */
  name: string;
  /** Optional. Indicates whether to include the TCX data points when the GPS data is not available. If not specified, defaults to `false` and partial data will not be included. */
  partialData?: boolean;
}

export const ExportExerciseTcxUsersDataTypesDataPointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    partialData: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("partialData"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v4/{+name}:exportExerciseTcx" }),
    svc,
  ) as unknown as Schema.Schema<ExportExerciseTcxUsersDataTypesDataPointsRequest>;

export type ExportExerciseTcxUsersDataTypesDataPointsResponse =
  ExportExerciseTcxResponse;
export const ExportExerciseTcxUsersDataTypesDataPointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ExportExerciseTcxResponse;

export type ExportExerciseTcxUsersDataTypesDataPointsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Exports exercise data in TCX format. **IMPORTANT:** HTTP clients must append `?alt=media` to the request URL to download the raw TCX file. Example: `https://health.googleapis.com/v4/users/me/dataTypes/exercise/dataPoints/EXERCISE_ID:exportExerciseTcx?alt=media` Without `alt=media`, the server returns a JSON response (`ExportExerciseTcxResponse`) which is intended primarily for gRPC clients. **Note:** While the Authorization section below states that any one of the listed scopes is accepted, this specific method requires the user to provide both one of the `activity_and_fitness` scopes (`normal` or `readonly`) AND one of the `location` scopes (`normal` or `readonly`) in their access token to succeed. */
export const exportExerciseTcxUsersDataTypesDataPoints: API.OperationMethod<
  ExportExerciseTcxUsersDataTypesDataPointsRequest,
  ExportExerciseTcxUsersDataTypesDataPointsResponse,
  ExportExerciseTcxUsersDataTypesDataPointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportExerciseTcxUsersDataTypesDataPointsRequest,
  output: ExportExerciseTcxUsersDataTypesDataPointsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetUsersDataTypesDataPointsRequest {
  /** Required. The name of the data point to retrieve. Format: `users/{user}/dataTypes/{data_type}/dataPoints/{data_point}` See DataPoint.name for examples and possible values. */
  name: string;
}

export const GetUsersDataTypesDataPointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v4/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetUsersDataTypesDataPointsRequest>;

export type GetUsersDataTypesDataPointsResponse = DataPoint;
export const GetUsersDataTypesDataPointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DataPoint;

export type GetUsersDataTypesDataPointsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a single identifyable data point. */
export const getUsersDataTypesDataPoints: API.OperationMethod<
  GetUsersDataTypesDataPointsRequest,
  GetUsersDataTypesDataPointsResponse,
  GetUsersDataTypesDataPointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetUsersDataTypesDataPointsRequest,
  output: GetUsersDataTypesDataPointsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateUsersDataTypesDataPointsRequest {
  /** Required. The parent resource name where the data point will be created. Format: `users/{user}/dataTypes/{data_type}` */
  parent: string;
  /** Request body */
  body?: DataPoint;
}

export const CreateUsersDataTypesDataPointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(DataPoint).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v4/{+parent}/dataPoints", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateUsersDataTypesDataPointsRequest>;

export type CreateUsersDataTypesDataPointsResponse = Operation;
export const CreateUsersDataTypesDataPointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateUsersDataTypesDataPointsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a single identifiable data point. */
export const createUsersDataTypesDataPoints: API.OperationMethod<
  CreateUsersDataTypesDataPointsRequest,
  CreateUsersDataTypesDataPointsResponse,
  CreateUsersDataTypesDataPointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateUsersDataTypesDataPointsRequest,
  output: CreateUsersDataTypesDataPointsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
