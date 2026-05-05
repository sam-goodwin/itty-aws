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

export interface Health_Date {
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
}

export const Health_Date = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  year: Schema.optional(Schema.Number),
  month: Schema.optional(Schema.Number),
  day: Schema.optional(Schema.Number),
}).annotate({ identifier: "Health_Date" });

export interface TimeOfDay {
  /** Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds. */
  seconds?: number;
  /** Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
  hours?: number;
  /** Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. */
  minutes?: number;
  /** Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. */
  nanos?: number;
}

export const TimeOfDay = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  seconds: Schema.optional(Schema.Number),
  hours: Schema.optional(Schema.Number),
  minutes: Schema.optional(Schema.Number),
  nanos: Schema.optional(Schema.Number),
}).annotate({ identifier: "TimeOfDay" });

export interface CivilDateTime {
  /** Required. Calendar date. */
  date?: Health_Date;
  /** Optional. Time of day. Defaults to the start of the day, at midnight if omitted. */
  time?: TimeOfDay;
}

export const CivilDateTime = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  date: Schema.optional(Health_Date),
  time: Schema.optional(TimeOfDay),
}).annotate({ identifier: "CivilDateTime" });

export interface SessionTimeInterval {
  /** Required. The offset of the user's local time at the end of the session relative to the Coordinated Universal Time (UTC). */
  endUtcOffset?: string;
  /** Output only. Session start time in civil time in the timezone the subject is in at the start of the session. */
  civilStartTime?: CivilDateTime;
  /** Required. The offset of the user's local time at the start of the session relative to the Coordinated Universal Time (UTC). */
  startUtcOffset?: string;
  /** Output only. Session end time in civil time in the timezone the subject is in at the end of the session. */
  civilEndTime?: CivilDateTime;
  /** Required. The end time of the observed session. */
  endTime?: string;
  /** Required. The start time of the observed session. */
  startTime?: string;
}

export const SessionTimeInterval = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  endUtcOffset: Schema.optional(Schema.String),
  civilStartTime: Schema.optional(CivilDateTime),
  startUtcOffset: Schema.optional(Schema.String),
  civilEndTime: Schema.optional(CivilDateTime),
  endTime: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
}).annotate({ identifier: "SessionTimeInterval" });

export interface VolumeQuantity {
  /** Required. Value representing the volume in milliliters. */
  milliliters?: number;
  /** Optional. Value representing the user provided unit. */
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

export const VolumeQuantity = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  milliliters: Schema.optional(Schema.Number),
  userProvidedUnit: Schema.optional(Schema.String),
}).annotate({ identifier: "VolumeQuantity" });

export interface HydrationLog {
  /** Required. Observed interval. */
  interval?: SessionTimeInterval;
  /** Required. Amount of liquid (ex. water) consumed. */
  amountConsumed?: VolumeQuantity;
}

export const HydrationLog = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  interval: Schema.optional(SessionTimeInterval),
  amountConsumed: Schema.optional(VolumeQuantity),
}).annotate({ identifier: "HydrationLog" });

export interface RespiratoryRateSleepSummaryStatistics {
  /** Optional. How trustworthy the data is for the computation. */
  signalToNoise?: number;
  /** Required. Average breaths per minute. */
  breathsPerMinute?: number;
  /** Optional. Standard deviation of the respiratory rate during sleep. */
  standardDeviation?: number;
}

export const RespiratoryRateSleepSummaryStatistics =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signalToNoise: Schema.optional(Schema.Number),
    breathsPerMinute: Schema.optional(Schema.Number),
    standardDeviation: Schema.optional(Schema.Number),
  }).annotate({ identifier: "RespiratoryRateSleepSummaryStatistics" });

export interface ObservationSampleTime {
  /** Required. The offset of the user's local time during the observation relative to the Coordinated Universal Time (UTC). */
  utcOffset?: string;
  /** Required. The time of the observation. */
  physicalTime?: string;
  /** Output only. The civil time in the timezone the subject is in at the time of the observation. */
  civilTime?: CivilDateTime;
}

export const ObservationSampleTime = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  utcOffset: Schema.optional(Schema.String),
  physicalTime: Schema.optional(Schema.String),
  civilTime: Schema.optional(CivilDateTime),
}).annotate({ identifier: "ObservationSampleTime" });

export interface RespiratoryRateSleepSummary {
  /** Optional. Respiratory rate statistics for light sleep. */
  lightSleepStats?: RespiratoryRateSleepSummaryStatistics;
  /** Optional. Respiratory rate statistics for REM sleep. */
  remSleepStats?: RespiratoryRateSleepSummaryStatistics;
  /** Required. Full respiratory rate statistics. */
  fullSleepStats?: RespiratoryRateSleepSummaryStatistics;
  /** Optional. Respiratory rate statistics for deep sleep. */
  deepSleepStats?: RespiratoryRateSleepSummaryStatistics;
  /** Required. The time at which respiratory rate was measured. */
  sampleTime?: ObservationSampleTime;
}

export const RespiratoryRateSleepSummary =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lightSleepStats: Schema.optional(RespiratoryRateSleepSummaryStatistics),
    remSleepStats: Schema.optional(RespiratoryRateSleepSummaryStatistics),
    fullSleepStats: Schema.optional(RespiratoryRateSleepSummaryStatistics),
    deepSleepStats: Schema.optional(RespiratoryRateSleepSummaryStatistics),
    sampleTime: Schema.optional(ObservationSampleTime),
  }).annotate({ identifier: "RespiratoryRateSleepSummary" });

export interface TimeInHeartRateZones {
  /** Optional. Time spent in light heart rate zone. */
  lightTime?: string;
  /** Optional. Time spent in peak heart rate zone. */
  peakTime?: string;
  /** Optional. Time spent in moderate heart rate zone. */
  moderateTime?: string;
  /** Optional. Time spent in vigorous heart rate zone. */
  vigorousTime?: string;
}

export const TimeInHeartRateZones = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  lightTime: Schema.optional(Schema.String),
  peakTime: Schema.optional(Schema.String),
  moderateTime: Schema.optional(Schema.String),
  vigorousTime: Schema.optional(Schema.String),
}).annotate({ identifier: "TimeInHeartRateZones" });

export interface ObservationTimeInterval {
  /** Required. Observed interval start time. */
  startTime?: string;
  /** Output only. Observed interval start time in civil time in the timezone the subject is in at the start of the observed interval */
  civilStartTime?: CivilDateTime;
  /** Required. The offset of the user's local time at the end of the observation relative to the Coordinated Universal Time (UTC). */
  endUtcOffset?: string;
  /** Required. Observed interval end time. */
  endTime?: string;
  /** Required. The offset of the user's local time at the start of the observation relative to the Coordinated Universal Time (UTC). */
  startUtcOffset?: string;
  /** Output only. Observed interval end time in civil time in the timezone the subject is in at the end of the observed interval */
  civilEndTime?: CivilDateTime;
}

export const ObservationTimeInterval =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    civilStartTime: Schema.optional(CivilDateTime),
    endUtcOffset: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    startUtcOffset: Schema.optional(Schema.String),
    civilEndTime: Schema.optional(CivilDateTime),
  }).annotate({ identifier: "ObservationTimeInterval" });

export interface SedentaryPeriod {
  /** Required. Observed interval. */
  interval?: ObservationTimeInterval;
}

export const SedentaryPeriod = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  interval: Schema.optional(ObservationTimeInterval),
}).annotate({ identifier: "SedentaryPeriod" });

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

export const ActiveMinutesByActivityLevel =
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

export const ActiveMinutes = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  interval: Schema.optional(ObservationTimeInterval),
  activeMinutesByActivityLevel: Schema.optional(
    Schema.Array(ActiveMinutesByActivityLevel),
  ),
}).annotate({ identifier: "ActiveMinutes" });

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

export const TimeInHeartRateZoneValue =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    heartRateZone: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimeInHeartRateZoneValue" });

export interface FloorsRollupValue {
  /** Sum of the floors count. */
  countSum?: string;
}

export const FloorsRollupValue = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  countSum: Schema.optional(Schema.String),
}).annotate({ identifier: "FloorsRollupValue" });

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

export const VolumeQuantityRollup = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  millilitersSum: Schema.optional(Schema.Number),
  userProvidedUnitLast: Schema.optional(Schema.String),
}).annotate({ identifier: "VolumeQuantityRollup" });

export interface HydrationLogRollupValue {
  /** Rollup for amount consumed. */
  amountConsumed?: VolumeQuantityRollup;
}

export const HydrationLogRollupValue =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amountConsumed: Schema.optional(VolumeQuantityRollup),
  }).annotate({ identifier: "HydrationLogRollupValue" });

export interface ExerciseMetadata {
  /** Optional. Pool length in millimeters. Only present in the swimming exercises. */
  poolLengthMillimeters?: string;
  /** Optional. Whether the exercise had GPS tracking. */
  hasGps?: boolean;
}

export const ExerciseMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  poolLengthMillimeters: Schema.optional(Schema.String),
  hasGps: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "ExerciseMetadata" });

export interface Profile {
  /** Output only. The date the user created their account. Updates to this field are currently not supported. */
  membershipStartDate?: Health_Date;
  /** Optional. The user's user configured walking stride length, in millimeters. The user must consent to one of the following access scopes to access this field: - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness.readonly` - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness` */
  userConfiguredWalkingStrideLengthMm?: number;
  /** Output only. The automatically calculated walking stride length, in millimeters. The user must consent to one of the following access scopes to access this field: - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness.readonly` - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness` */
  autoWalkingStrideLengthMm?: number;
  /** Output only. The automatically calculated running stride length, in millimeters. The user must consent to one of the following access scopes to access this field: - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness.readonly` - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness` */
  autoRunningStrideLengthMm?: number;
  /** Identifier. The resource name of this Profile resource. Format: `users/{user}/profile` Example: `users/1234567890/profile` or `users/me/profile` The {user} ID is a system-generated Google Health API user ID, a string of 1-63 characters consisting of lowercase and uppercase letters, numbers, and hyphens. The literal `me` can also be used to refer to the authenticated user. */
  name?: string;
  /** Optional. The user's user configured running stride length, in millimeters. The user must consent to one of the following access scopes to access this field: - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness.readonly` - `https://www.googleapis.com/auth/googlehealth.activity_and_fitness` */
  userConfiguredRunningStrideLengthMm?: number;
  /** Optional. The age in years based on the user's birth date. Updates to this field are currently not supported. */
  age?: number;
}

export const Profile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  membershipStartDate: Schema.optional(Health_Date),
  userConfiguredWalkingStrideLengthMm: Schema.optional(Schema.Number),
  autoWalkingStrideLengthMm: Schema.optional(Schema.Number),
  autoRunningStrideLengthMm: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  userConfiguredRunningStrideLengthMm: Schema.optional(Schema.Number),
  age: Schema.optional(Schema.Number),
}).annotate({ identifier: "Profile" });

export interface ExerciseEvent {
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
  /** Required. Exercise event time offset from UTC */
  eventUtcOffset?: string;
}

export const ExerciseEvent = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  exerciseEventType: Schema.optional(Schema.String),
  eventTime: Schema.optional(Schema.String),
  eventUtcOffset: Schema.optional(Schema.String),
}).annotate({ identifier: "ExerciseEvent" });

export interface HeartRateVariability {
  /** Optional. The standard deviation of the heart rate variability measurement. */
  standardDeviationMilliseconds?: number;
  /** Optional. The root mean square of successive differences between normal heartbeats. This is a measure of heart rate variability used by Fitbit. */
  rootMeanSquareOfSuccessiveDifferencesMilliseconds?: number;
  /** Required. The time of the heart rate variability measurement. */
  sampleTime?: ObservationSampleTime;
}

export const HeartRateVariability = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  standardDeviationMilliseconds: Schema.optional(Schema.Number),
  rootMeanSquareOfSuccessiveDifferencesMilliseconds: Schema.optional(
    Schema.Number,
  ),
  sampleTime: Schema.optional(ObservationSampleTime),
}).annotate({ identifier: "HeartRateVariability" });

export interface Floors {
  /** Required. Observed interval */
  interval?: ObservationTimeInterval;
  /** Required. Number of floors in the recorded interval */
  count?: string;
}

export const Floors = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  interval: Schema.optional(ObservationTimeInterval),
  count: Schema.optional(Schema.String),
}).annotate({ identifier: "Floors" });

export interface DailyRestingHeartRateMetadata {
  /** Required. The method used to calculate the resting heart rate. */
  calculationMethod?:
    | "CALCULATION_METHOD_UNSPECIFIED"
    | "WITH_SLEEP"
    | "ONLY_WITH_AWAKE_DATA"
    | (string & {});
}

export const DailyRestingHeartRateMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    calculationMethod: Schema.optional(Schema.String),
  }).annotate({ identifier: "DailyRestingHeartRateMetadata" });

export interface DailyRestingHeartRate {
  /** Required. The resting heart rate value in beats per minute. */
  beatsPerMinute?: string;
  /** Optional. Metadata for the daily resting heart rate. */
  dailyRestingHeartRateMetadata?: DailyRestingHeartRateMetadata;
  /** Required. Date (in the user's timezone) of the resting heart rate measurement. */
  date?: Health_Date;
}

export const DailyRestingHeartRate = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  beatsPerMinute: Schema.optional(Schema.String),
  dailyRestingHeartRateMetadata: Schema.optional(DailyRestingHeartRateMetadata),
  date: Schema.optional(Health_Date),
}).annotate({ identifier: "DailyRestingHeartRate" });

export interface Distance {
  /** Required. Observed interval. */
  interval?: ObservationTimeInterval;
  /** Required. Distance in millimeters over the observed interval. */
  millimeters?: string;
}

export const Distance = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  interval: Schema.optional(ObservationTimeInterval),
  millimeters: Schema.optional(Schema.String),
}).annotate({ identifier: "Distance" });

export interface Steps {
  /** Required. Observed interval. */
  interval?: ObservationTimeInterval;
  /** Required. Number of steps in the recorded interval. */
  count?: string;
}

export const Steps = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  interval: Schema.optional(ObservationTimeInterval),
  count: Schema.optional(Schema.String),
}).annotate({ identifier: "Steps" });

export interface DailyVO2Max {
  /** Required. The date for which the Daily VO2 max was measured. */
  date?: Health_Date;
  /** Required. Daily VO2 max value measured as in ml consumed oxygen / kg of body weight / min. */
  vo2Max?: number;
  /** Optional. An estimated field is added to indicate when the confidence has decreased sufficiently to consider the value an estimation. */
  estimated?: boolean;
  /** Optional. The covariance of the VO2 max value. */
  vo2MaxCovariance?: number;
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

export const DailyVO2Max = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  date: Schema.optional(Health_Date),
  vo2Max: Schema.optional(Schema.Number),
  estimated: Schema.optional(Schema.Boolean),
  vo2MaxCovariance: Schema.optional(Schema.Number),
  cardioFitnessLevel: Schema.optional(Schema.String),
}).annotate({ identifier: "DailyVO2Max" });

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

export const HeartRateMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const HeartRate = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  metadata: Schema.optional(HeartRateMetadata),
  sampleTime: Schema.optional(ObservationSampleTime),
  beatsPerMinute: Schema.optional(Schema.String),
}).annotate({ identifier: "HeartRate" });

export interface BodyFat {
  /** Required. The time at which body fat was measured. */
  sampleTime?: ObservationSampleTime;
  /** Required. Body fat percentage, in range [0, 100]. */
  percentage?: number;
}

export const BodyFat = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sampleTime: Schema.optional(ObservationSampleTime),
  percentage: Schema.optional(Schema.Number),
}).annotate({ identifier: "BodyFat" });

export interface DailyRespiratoryRate {
  /** Required. The date on which the respiratory rate was measured. */
  date?: Health_Date;
  /** Required. The average number of breaths taken per minute. */
  breathsPerMinute?: number;
}

export const DailyRespiratoryRate = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  date: Schema.optional(Health_Date),
  breathsPerMinute: Schema.optional(Schema.Number),
}).annotate({ identifier: "DailyRespiratoryRate" });

export interface Altitude {
  /** Required. Observed interval. */
  interval?: ObservationTimeInterval;
  /** Required. Altitude gain in millimeters over the observed interval. */
  gainMillimeters?: string;
}

export const Altitude = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  interval: Schema.optional(ObservationTimeInterval),
  gainMillimeters: Schema.optional(Schema.String),
}).annotate({ identifier: "Altitude" });

export interface DailyOxygenSaturation {
  /** Required. Date (in user's timezone) of the daily oxygen saturation record. */
  date?: Health_Date;
  /** Required. The average value of the oxygen saturation samples during the sleep. */
  averagePercentage?: number;
  /** Required. The lower bound of the confidence interval of oxygen saturation samples during sleep. */
  lowerBoundPercentage?: number;
  /** Optional. Standard deviation of the daily oxygen saturation averages from the past 7-30 days. */
  standardDeviationPercentage?: number;
  /** Required. The upper bound of the confidence interval of oxygen saturation samples during sleep. */
  upperBoundPercentage?: number;
}

export const DailyOxygenSaturation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  date: Schema.optional(Health_Date),
  averagePercentage: Schema.optional(Schema.Number),
  lowerBoundPercentage: Schema.optional(Schema.Number),
  standardDeviationPercentage: Schema.optional(Schema.Number),
  upperBoundPercentage: Schema.optional(Schema.Number),
}).annotate({ identifier: "DailyOxygenSaturation" });

export interface OxygenSaturation {
  /** Required. The time at which oxygen saturation was measured. */
  sampleTime?: ObservationSampleTime;
  /** Required. The oxygen saturation percentage. Valid values are from 0 to 100. */
  percentage?: number;
}

export const OxygenSaturation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sampleTime: Schema.optional(ObservationSampleTime),
  percentage: Schema.optional(Schema.Number),
}).annotate({ identifier: "OxygenSaturation" });

export interface Weight {
  /** Required. The time at which the weight was measured */
  sampleTime?: ObservationSampleTime;
  /** Required. Weight of a user in grams. */
  weightGrams?: number;
  /** Optional. Standard free-form notes captured at manual logging. */
  notes?: string;
}

export const Weight = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sampleTime: Schema.optional(ObservationSampleTime),
  weightGrams: Schema.optional(Schema.Number),
  notes: Schema.optional(Schema.String),
}).annotate({ identifier: "Weight" });

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

export const VO2Max = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sampleTime: Schema.optional(ObservationSampleTime),
  vo2Max: Schema.optional(Schema.Number),
  measurementMethod: Schema.optional(Schema.String),
}).annotate({ identifier: "VO2Max" });

export interface OutOfBedSegment {
  /** Required. Segment tart time. */
  startTime?: string;
  /** Required. The offset of the user's local time at the end of the segment relative to the Coordinated Universal Time (UTC). */
  endUtcOffset?: string;
  /** Required. The offset of the user's local time at the start of the segment relative to the Coordinated Universal Time (UTC). */
  startUtcOffset?: string;
  /** Required. Segment end time. */
  endTime?: string;
}

export const OutOfBedSegment = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startTime: Schema.optional(Schema.String),
  endUtcOffset: Schema.optional(Schema.String),
  startUtcOffset: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
}).annotate({ identifier: "OutOfBedSegment" });

export interface SleepStage {
  /** Output only. Last update time of this sleep stages segment. */
  updateTime?: string;
  /** Required. The offset of the user's local time at the end of the sleep stage relative to the Coordinated Universal Time (UTC). */
  endUtcOffset?: string;
  /** Required. Sleep stage end time. */
  endTime?: string;
  /** Required. The offset of the user's local time at the start of the sleep stage relative to the Coordinated Universal Time (UTC). */
  startUtcOffset?: string;
  /** Output only. Creation time of this sleep stages segment. */
  createTime?: string;
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
  /** Required. Sleep stage start time. */
  startTime?: string;
}

export const SleepStage = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  updateTime: Schema.optional(Schema.String),
  endUtcOffset: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  startUtcOffset: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
}).annotate({ identifier: "SleepStage" });

export interface StageSummary {
  /** Output only. Total duration in minutes of a sleep stage. */
  minutes?: string;
  /** Output only. Number of sleep stages segments. */
  count?: string;
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
}

export const StageSummary = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  minutes: Schema.optional(Schema.String),
  count: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "StageSummary" });

export interface SleepSummary {
  /** Output only. Delta between wake time and bedtime. It is the sum of all stages. */
  minutesInSleepPeriod?: string;
  /** Output only. Total number of minutes awake. It is a sum of all AWAKE stages. */
  minutesAwake?: string;
  /** Output only. List of summaries (total duration and segment count) per each sleep stage type. */
  stagesSummary?: ReadonlyArray<StageSummary>;
  /** Output only. Minutes after wake up calculated by restlessness algorithm. */
  minutesAfterWakeUp?: string;
  /** Output only. Minutes to fall asleep calculated by restlessness algorithm. */
  minutesToFallAsleep?: string;
  /** Output only. Total number of minutes asleep. For classic sleep it is the sum of ASLEEP stages (excluding AWAKE and RESTLESS). For "stages" sleep it is the sum of LIGHT, REM and DEEP stages (excluding AWAKE). */
  minutesAsleep?: string;
}

export const SleepSummary = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  minutesInSleepPeriod: Schema.optional(Schema.String),
  minutesAwake: Schema.optional(Schema.String),
  stagesSummary: Schema.optional(Schema.Array(StageSummary)),
  minutesAfterWakeUp: Schema.optional(Schema.String),
  minutesToFallAsleep: Schema.optional(Schema.String),
  minutesAsleep: Schema.optional(Schema.String),
}).annotate({ identifier: "SleepSummary" });

export interface SleepMetadata {
  /** Output only. Sleep and sleep stages algorithms finished processing. */
  processed?: boolean;
  /** Optional. Sleep identifier relevant in the context of the data source. */
  externalId?: string;
  /** Output only. Naps are sleeps without stages and relatively short durations. */
  nap?: boolean;
  /** Output only. Some sleeps autodetected by algorithms can be manually edited by users. */
  manuallyEdited?: boolean;
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
}

export const SleepMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  processed: Schema.optional(Schema.Boolean),
  externalId: Schema.optional(Schema.String),
  nap: Schema.optional(Schema.Boolean),
  manuallyEdited: Schema.optional(Schema.Boolean),
  stagesStatus: Schema.optional(Schema.String),
}).annotate({ identifier: "SleepMetadata" });

export interface Sleep {
  /** Optional. SleepType: classic or stages. */
  type?: "SLEEP_TYPE_UNSPECIFIED" | "CLASSIC" | "STAGES" | (string & {});
  /** Optional. “Out of bed” segments that can overlap with sleep stages. */
  outOfBedSegments?: ReadonlyArray<OutOfBedSegment>;
  /** Optional. List of non-overlapping contiguous sleep stage segments that cover the sleep period. */
  stages?: ReadonlyArray<SleepStage>;
  /** Output only. Sleep summary: metrics and stages summary. */
  summary?: SleepSummary;
  /** Output only. Last update time of this sleep observation. */
  updateTime?: string;
  /** Required. Observed sleep interval. */
  interval?: SessionTimeInterval;
  /** Optional. Sleep metadata: processing, main, manually edited, stages status. */
  metadata?: SleepMetadata;
  /** Output only. Creation time of this sleep observation. */
  createTime?: string;
}

export const Sleep = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  outOfBedSegments: Schema.optional(Schema.Array(OutOfBedSegment)),
  stages: Schema.optional(Schema.Array(SleepStage)),
  summary: Schema.optional(SleepSummary),
  updateTime: Schema.optional(Schema.String),
  interval: Schema.optional(SessionTimeInterval),
  metadata: Schema.optional(SleepMetadata),
  createTime: Schema.optional(Schema.String),
}).annotate({ identifier: "Sleep" });

export interface DailyHeartRateVariability {
  /** Optional. Non-REM heart rate */
  nonRemHeartRateBeatsPerMinute?: string;
  /** Optional. The root mean square of successive differences (RMSSD) value during deep sleep. */
  deepSleepRootMeanSquareOfSuccessiveDifferencesMilliseconds?: number;
  /** Required. Date (in the user's timezone) of heart rate variability measurement. */
  date?: Health_Date;
  /** Optional. The Shanon entropy of heartbeat intervals. Entropy quantifies randomness or disorder in a system. High entropy indicates high HRV. Entropy is measured from the histogram of time interval between successive heart beats values measured during sleep. */
  entropy?: number;
  /** Optional. A user's average heart rate variability calculated using the root mean square of successive differences (RMSSD) in times between heartbeats. */
  averageHeartRateVariabilityMilliseconds?: number;
}

export const DailyHeartRateVariability =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nonRemHeartRateBeatsPerMinute: Schema.optional(Schema.String),
    deepSleepRootMeanSquareOfSuccessiveDifferencesMilliseconds: Schema.optional(
      Schema.Number,
    ),
    date: Schema.optional(Health_Date),
    entropy: Schema.optional(Schema.Number),
    averageHeartRateVariabilityMilliseconds: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DailyHeartRateVariability" });

export interface Application {
  /** Output only. A unique identifier for the mobile application that was the source of the data. This is typically the application's package name on Android (e.g., `com.google.fitbit`) or the bundle ID on iOS. This field is informational and helps trace data origin. This field is system-populated when the data is uploaded from the Fitbit mobile application, Health Connect or Health Kit. */
  packageName?: string;
  /** Output only. The client ID of the application that recorded the data. This ID is a legacy Fitbit API client ID, which is different from a Google OAuth client ID. Example format: `ABC123`. This field is system-populated and used for tracing data from legacy Fitbit API integrations. This field is system-populated when the data is uploaded from a legacy Fitbit API integration. */
  webClientId?: string;
  /** Output only. The Google OAuth 2.0 client ID of the web application or service that recorded the data. This is the client ID used during the Google OAuth flow to obtain user credentials. This field is system-populated when the data is uploaded from Google Web API. */
  googleWebClientId?: string;
}

export const Application = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  packageName: Schema.optional(Schema.String),
  webClientId: Schema.optional(Schema.String),
  googleWebClientId: Schema.optional(Schema.String),
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
  /** Optional. An optional name for the device. */
  displayName?: string;
  /** Optional. An optional manufacturer of the device. */
  manufacturer?: string;
}

export const Device = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  formFactor: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  manufacturer: Schema.optional(Schema.String),
}).annotate({ identifier: "Device" });

export interface DataSource {
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
  /** Output only. Captures metadata for the application that provided this data. */
  application?: Application;
  /** Optional. Captures how the data was recorded. */
  recordingMethod?:
    | "RECORDING_METHOD_UNSPECIFIED"
    | "MANUAL"
    | "PASSIVELY_MEASURED"
    | "DERIVED"
    | "ACTIVELY_MEASURED"
    | "UNKNOWN"
    | (string & {});
  /** Optional. Captures metadata for raw data points originating from devices. We expect this data source to be used for data points written on device sync. */
  device?: Device;
}

export const DataSource = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  platform: Schema.optional(Schema.String),
  application: Schema.optional(Application),
  recordingMethod: Schema.optional(Schema.String),
  device: Schema.optional(Device),
}).annotate({ identifier: "DataSource" });

export interface MobilityMetrics {
  /** Optional. Vertical oscillation/stride length between [5.0, 11.0]. */
  avgVerticalRatio?: number;
  /** Optional. Cadence is a measure of the frequency of your foot strikes. Steps / min in real time during workout. */
  avgCadenceStepsPerMinute?: number;
  /** Optional. Distance off the ground your center of mass moves with each stride while running */
  avgVerticalOscillationMillimeters?: string;
  /** Optional. The ground contact time for a particular stride is the amount of time for which the foot was in contact with the ground on that stride */
  avgGroundContactTimeDuration?: string;
  /** Optional. Stride length is a measure of the distance covered by a single stride */
  avgStrideLengthMillimeters?: string;
}

export const MobilityMetrics = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  avgVerticalRatio: Schema.optional(Schema.Number),
  avgCadenceStepsPerMinute: Schema.optional(Schema.Number),
  avgVerticalOscillationMillimeters: Schema.optional(Schema.String),
  avgGroundContactTimeDuration: Schema.optional(Schema.String),
  avgStrideLengthMillimeters: Schema.optional(Schema.String),
}).annotate({ identifier: "MobilityMetrics" });

export interface MetricsSummary {
  /** Optional. Average heart rate during the exercise. */
  averageHeartRateBeatsPerMinute?: string;
  /** Optional. Total steps taken during the exercise. */
  steps?: string;
  /** Optional. Run VO2 max value for the exercise. Only present in the running exercises at the top level as in the summary of the whole exercise. */
  runVo2Max?: number;
  /** Optional. Total calories burned by the user during the exercise. */
  caloriesKcal?: number;
  /** Optional. Total distance covered by the user during the exercise. */
  distanceMillimeters?: number;
  /** Optional. Time spent in each heart rate zone. */
  heartRateZoneDurations?: TimeInHeartRateZones;
  /** Optional. Average pace in seconds per meter. */
  averagePaceSecondsPerMeter?: number;
  /** Optional. Total active zone minutes for the exercise. */
  activeZoneMinutes?: string;
  /** Optional. Total elevation gain during the exercise. */
  elevationGainMillimeters?: number;
  /** Optional. Average speed in millimeters per second. */
  averageSpeedMillimetersPerSecond?: number;
  /** Optional. Mobility workouts specific metrics. Only present in the advanced running exercises. */
  mobilityMetrics?: MobilityMetrics;
  /** Optional. Number of full pool lengths completed during the exercise. Only present in the swimming exercises at the top level as in the summary of the whole exercise. */
  totalSwimLengths?: number;
}

export const MetricsSummary = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  averageHeartRateBeatsPerMinute: Schema.optional(Schema.String),
  steps: Schema.optional(Schema.String),
  runVo2Max: Schema.optional(Schema.Number),
  caloriesKcal: Schema.optional(Schema.Number),
  distanceMillimeters: Schema.optional(Schema.Number),
  heartRateZoneDurations: Schema.optional(TimeInHeartRateZones),
  averagePaceSecondsPerMeter: Schema.optional(Schema.Number),
  activeZoneMinutes: Schema.optional(Schema.String),
  elevationGainMillimeters: Schema.optional(Schema.Number),
  averageSpeedMillimetersPerSecond: Schema.optional(Schema.Number),
  mobilityMetrics: Schema.optional(MobilityMetrics),
  totalSwimLengths: Schema.optional(Schema.Number),
}).annotate({ identifier: "MetricsSummary" });

export interface SplitSummary {
  /** Required. Lap end time offset from UTC */
  endUtcOffset?: string;
  /** Required. Method used to split the exercise laps. Users may manually mark the lap as complete even if the tracking is automatic. */
  splitType?:
    | "SPLIT_TYPE_UNSPECIFIED"
    | "MANUAL"
    | "DURATION"
    | "DISTANCE"
    | "CALORIES"
    | (string & {});
  /** Required. Lap start time offset from UTC */
  startUtcOffset?: string;
  /** Required. Lap end time */
  endTime?: string;
  /** Output only. Lap time excluding the pauses. */
  activeDuration?: string;
  /** Required. Lap start time */
  startTime?: string;
  /** Required. Summary metrics for this split. */
  metricsSummary?: MetricsSummary;
}

export const SplitSummary = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  endUtcOffset: Schema.optional(Schema.String),
  splitType: Schema.optional(Schema.String),
  startUtcOffset: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  activeDuration: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
  metricsSummary: Schema.optional(MetricsSummary),
}).annotate({ identifier: "SplitSummary" });

export interface Exercise {
  /** Optional. Additional exercise metadata. */
  exerciseMetadata?: ExerciseMetadata;
  /** Output only. Represents the timestamp of the creation of the exercise. */
  createTime?: string;
  /** Required. Observed exercise interval */
  interval?: SessionTimeInterval;
  /** Optional. The default split is 1 km or 1 mile. - if the movement distance is less than the default, then there are no splits - if the movement distance is greater than or equal to the default, then we have splits */
  splits?: ReadonlyArray<SplitSummary>;
  /** Optional. Laps or splits recorded within an exercise. Laps could be split based on distance or other criteria (duration, etc.) Laps should not be overlapping with each other. */
  splitSummaries?: ReadonlyArray<SplitSummary>;
  /** Output only. This is the timestamp of the last update to the exercise. */
  updateTime?: string;
  /** Required. The type of activity performed during an exercise. */
  exerciseType?:
    | "EXERCISE_TYPE_UNSPECIFIED"
    | "RUNNING"
    | "WALKING"
    | "BIKING"
    | "SWIMMING"
    | "HIKING"
    | "YOGA"
    | "PILATES"
    | "WORKOUT"
    | "HIIT"
    | "WEIGHTLIFTING"
    | "STRENGTH_TRAINING"
    | "OTHER"
    | (string & {});
  /** Optional. Duration excluding pauses. */
  activeDuration?: string;
  /** Required. Exercise display name. */
  displayName?: string;
  /** Optional. Exercise events that happen during an exercise, such as pause & restarts. */
  exerciseEvents?: ReadonlyArray<ExerciseEvent>;
  /** Required. Summary metrics for this exercise ( ) */
  metricsSummary?: MetricsSummary;
  /** Optional. Standard free-form notes captured at manual logging. */
  notes?: string;
}

export const Exercise = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  exerciseMetadata: Schema.optional(ExerciseMetadata),
  createTime: Schema.optional(Schema.String),
  interval: Schema.optional(SessionTimeInterval),
  splits: Schema.optional(Schema.Array(SplitSummary)),
  splitSummaries: Schema.optional(Schema.Array(SplitSummary)),
  updateTime: Schema.optional(Schema.String),
  exerciseType: Schema.optional(Schema.String),
  activeDuration: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  exerciseEvents: Schema.optional(Schema.Array(ExerciseEvent)),
  metricsSummary: Schema.optional(MetricsSummary),
  notes: Schema.optional(Schema.String),
}).annotate({ identifier: "Exercise" });

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

export const ActivityLevel = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  interval: Schema.optional(ObservationTimeInterval),
  activityLevelType: Schema.optional(Schema.String),
}).annotate({ identifier: "ActivityLevel" });

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

export const HeartRateZone = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  heartRateZoneType: Schema.optional(Schema.String),
  minBeatsPerMinute: Schema.optional(Schema.String),
  maxBeatsPerMinute: Schema.optional(Schema.String),
}).annotate({ identifier: "HeartRateZone" });

export interface DailyHeartRateZones {
  /** Required. Date (in user's timezone) of the heart rate zones record. */
  date?: Health_Date;
  /** Required. The heart rate zones. */
  heartRateZones?: ReadonlyArray<HeartRateZone>;
}

export const DailyHeartRateZones = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  date: Schema.optional(Health_Date),
  heartRateZones: Schema.optional(Schema.Array(HeartRateZone)),
}).annotate({ identifier: "DailyHeartRateZones" });

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

export const DailySleepTemperatureDerivations =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    date: Schema.optional(Health_Date),
    nightlyTemperatureCelsius: Schema.optional(Schema.Number),
    relativeNightlyStddev30dCelsius: Schema.optional(Schema.Number),
    baselineTemperatureCelsius: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DailySleepTemperatureDerivations" });

export interface RunVO2Max {
  /** Required. The time at which the metric was measured. */
  sampleTime?: ObservationSampleTime;
  /** Required. Run VO2 max value in ml/kg/min. */
  runVo2Max?: number;
}

export const RunVO2Max = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sampleTime: Schema.optional(ObservationSampleTime),
  runVo2Max: Schema.optional(Schema.Number),
}).annotate({ identifier: "RunVO2Max" });

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

export const TimeInHeartRateZone = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const ActiveZoneMinutes = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  interval: Schema.optional(ObservationTimeInterval),
  heartRateZone: Schema.optional(Schema.String),
  activeZoneMinutes: Schema.optional(Schema.String),
}).annotate({ identifier: "ActiveZoneMinutes" });

export interface DataPoint {
  /** Optional. Data for points in the `heart-rate-variability` sample data type collection. */
  heartRateVariability?: HeartRateVariability;
  /** Identifier. Data point name, only supported for the subset of identifiable data types. For the majority of the data types, individual data points do not need to be identified and this field would be empty. Format: `users/{user}/dataTypes/{data_type}/dataPoints/{data_point}` Example: `users/abcd1234/dataTypes/sleep/dataPoints/a1b2c3d4-e5f6-7890-1234-567890abcdef` The `{user}` ID is a system-generated identifier, as described in Identity.health_user_id. The `{data_type}` ID corresponds to the kebab-case version of the field names in the DataPoint data union field, e.g. `total-calories` for the `total_calories` field. The `{data_point}` ID can be client-provided or system-generated. If client-provided, it must be a string of 4-63 characters, containing only lowercase letters, numbers, and hyphens. */
  name?: string;
  /** Optional. Data for points in the `floors` interval data type collection. */
  floors?: Floors;
  /** Optional. Data for points in the `daily-resting-heart-rate` daily data type collection. */
  dailyRestingHeartRate?: DailyRestingHeartRate;
  /** Optional. Data for points in the `distance` interval data type collection. */
  distance?: Distance;
  /** Optional. Data for points in the `steps` interval data type collection. */
  steps?: Steps;
  /** Optional. Data for points in the `daily-vo2-max` daily data type collection. */
  dailyVo2Max?: DailyVO2Max;
  /** Optional. Data for points in the `respiratory-rate-sleep-summary` sample data type collection. */
  respiratoryRateSleepSummary?: RespiratoryRateSleepSummary;
  /** Optional. Data for points in the `active-minutes` interval data type collection. */
  activeMinutes?: ActiveMinutes;
  /** Optional. Data for points in the `heart-rate` sample data type collection. */
  heartRate?: HeartRate;
  /** Optional. Data for points in the `body-fat` sample data type collection. */
  bodyFat?: BodyFat;
  /** Optional. Data for points in the `daily-respiratory-rate` daily data type collection. */
  dailyRespiratoryRate?: DailyRespiratoryRate;
  /** Optional. Data for points in the `altitude` interval data type collection. */
  altitude?: Altitude;
  /** Optional. Data for points in the `daily-oxygen-saturation` daily data type collection. */
  dailyOxygenSaturation?: DailyOxygenSaturation;
  /** Optional. Data for points in the `oxygen-saturation` sample data type collection. */
  oxygenSaturation?: OxygenSaturation;
  /** Optional. Data for points in the `weight` sample data type collection. */
  weight?: Weight;
  /** Optional. Data for points in the `vo2-max` sample data type collection. */
  vo2Max?: VO2Max;
  /** Optional. Data for points in the `sleep` session data type collection. */
  sleep?: Sleep;
  /** Optional. Data for points in the `hydration-log` session data type collection. */
  hydrationLog?: HydrationLog;
  /** Optional. Data for points in the `daily-heart-rate-variability` daily data type collection. */
  dailyHeartRateVariability?: DailyHeartRateVariability;
  /** Optional. Data source information for the metric */
  dataSource?: DataSource;
  /** Optional. Data for points in the `exercise` session data type collection. */
  exercise?: Exercise;
  /** Optional. Data for points in the `activity-level` daily data type collection. */
  activityLevel?: ActivityLevel;
  /** Optional. Data for points in the `daily-heart-rate-zones` daily data type collection. */
  dailyHeartRateZones?: DailyHeartRateZones;
  /** Optional. Data for points in the `daily-sleep-temperature-derivations` daily data type collection. */
  dailySleepTemperatureDerivations?: DailySleepTemperatureDerivations;
  /** Optional. Data for points in the `run-vo2-max` sample data type collection. */
  runVo2Max?: RunVO2Max;
  /** Optional. Data for points in the `time-in-heart-rate-zone` interval data type collection. */
  timeInHeartRateZone?: TimeInHeartRateZone;
  /** Optional. Data for points in the `active-zone-minutes` interval data type collection, measured in minutes. */
  activeZoneMinutes?: ActiveZoneMinutes;
  /** Optional. Data for points in the `sedentary-period` interval data type collection. */
  sedentaryPeriod?: SedentaryPeriod;
}

export const DataPoint = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  heartRateVariability: Schema.optional(HeartRateVariability),
  name: Schema.optional(Schema.String),
  floors: Schema.optional(Floors),
  dailyRestingHeartRate: Schema.optional(DailyRestingHeartRate),
  distance: Schema.optional(Distance),
  steps: Schema.optional(Steps),
  dailyVo2Max: Schema.optional(DailyVO2Max),
  respiratoryRateSleepSummary: Schema.optional(RespiratoryRateSleepSummary),
  activeMinutes: Schema.optional(ActiveMinutes),
  heartRate: Schema.optional(HeartRate),
  bodyFat: Schema.optional(BodyFat),
  dailyRespiratoryRate: Schema.optional(DailyRespiratoryRate),
  altitude: Schema.optional(Altitude),
  dailyOxygenSaturation: Schema.optional(DailyOxygenSaturation),
  oxygenSaturation: Schema.optional(OxygenSaturation),
  weight: Schema.optional(Weight),
  vo2Max: Schema.optional(VO2Max),
  sleep: Schema.optional(Sleep),
  hydrationLog: Schema.optional(HydrationLog),
  dailyHeartRateVariability: Schema.optional(DailyHeartRateVariability),
  dataSource: Schema.optional(DataSource),
  exercise: Schema.optional(Exercise),
  activityLevel: Schema.optional(ActivityLevel),
  dailyHeartRateZones: Schema.optional(DailyHeartRateZones),
  dailySleepTemperatureDerivations: Schema.optional(
    DailySleepTemperatureDerivations,
  ),
  runVo2Max: Schema.optional(RunVO2Max),
  timeInHeartRateZone: Schema.optional(TimeInHeartRateZone),
  activeZoneMinutes: Schema.optional(ActiveZoneMinutes),
  sedentaryPeriod: Schema.optional(SedentaryPeriod),
}).annotate({ identifier: "DataPoint" });

export interface ListDataPointsResponse {
  /** Data points matching the query */
  dataPoints?: ReadonlyArray<DataPoint>;
  /** Next page token, empty if the response is complete */
  nextPageToken?: string;
}

export const ListDataPointsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    dataPoints: Schema.optional(Schema.Array(DataPoint)),
    nextPageToken: Schema.optional(Schema.String),
  },
).annotate({ identifier: "ListDataPointsResponse" });

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

export const ActivityLevelRollupByActivityLevelType =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    activityLevelType: Schema.optional(Schema.String),
    totalDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActivityLevelRollupByActivityLevelType" });

export interface ReconciledDataPoint {
  /** Data for points in the `steps` interval data type collection. */
  steps?: Steps;
  /** Data for points in the `daily-vo2-max` daily data type collection. */
  dailyVo2Max?: DailyVO2Max;
  /** Data for points in the `respiratory-rate-sleep-summary` sample data type collection. */
  respiratoryRateSleepSummary?: RespiratoryRateSleepSummary;
  /** Data for points in the `heart-rate-variability` sample data type collection. */
  heartRateVariability?: HeartRateVariability;
  /** Data for points in the `floors` interval data type collection. */
  floors?: Floors;
  /** Data for points in the `daily-resting-heart-rate` daily data type collection. */
  dailyRestingHeartRate?: DailyRestingHeartRate;
  /** Data for points in the `distance` interval data type collection. */
  distance?: Distance;
  /** Data for points in the `altitude` interval data type collection. */
  altitude?: Altitude;
  /** Data for points in the `active-minutes` interval data type collection. */
  activeMinutes?: ActiveMinutes;
  /** Data for points in the `heart-rate` sample data type collection. */
  heartRate?: HeartRate;
  /** Data for points in the `body-fat` sample data type collection. */
  bodyFat?: BodyFat;
  /** Data for points in the `daily-respiratory-rate` daily data type collection. */
  dailyRespiratoryRate?: DailyRespiratoryRate;
  /** Data for points in the `sleep` session data type collection. */
  sleep?: Sleep;
  /** Data for points in the `hydration-log` session data type collection. */
  hydrationLog?: HydrationLog;
  /** Data for points in the `daily-heart-rate-variability` daily data type collection. */
  dailyHeartRateVariability?: DailyHeartRateVariability;
  /** Identifier. Data point name, only supported for the subset of identifiable data types. For the majority of the data types, individual data points do not need to be identified and this field would be empty. Format: `users/{user}/dataTypes/{data_type}/dataPoints/{data_point}` Example: `users/abcd1234/dataTypes/sleep/dataPoints/a1b2c3d4-e5f6-7890-1234-567890abcdef` The `{user}` ID is a system-generated identifier, as described in Identity.health_user_id. The `{data_type}` ID corresponds to the kebab-case version of the field names in the DataPoint data union field, e.g. `total-calories` for the `total_calories` field. The `{data_point}` ID can be client-provided or system-generated. If client-provided, it must be a string of 4-63 characters, containing only lowercase letters, numbers, and hyphens. */
  dataPointName?: string;
  /** Data for points in the `daily-oxygen-saturation` daily data type collection. */
  dailyOxygenSaturation?: DailyOxygenSaturation;
  /** Data for points in the `oxygen-saturation` sample data type collection. */
  oxygenSaturation?: OxygenSaturation;
  /** Data for points in the `weight` sample data type collection. */
  weight?: Weight;
  /** Data for points in the `vo2-max` sample data type collection. */
  vo2Max?: VO2Max;
  /** Data for points in the `daily-heart-rate-zones` daily data type collection. */
  dailyHeartRateZones?: DailyHeartRateZones;
  /** Data for points in the `daily-sleep-temperature-derivations` daily data type collection. */
  dailySleepTemperatureDerivations?: DailySleepTemperatureDerivations;
  /** Data for points in the `run-vo2-max` sample data type collection. */
  runVo2Max?: RunVO2Max;
  /** Data for points in the `time-in-heart-rate-zone` interval data type collection. */
  timeInHeartRateZone?: TimeInHeartRateZone;
  /** Data for points in the `active-zone-minutes` interval data type collection, measured in minutes. */
  activeZoneMinutes?: ActiveZoneMinutes;
  /** Data for points in the `sedentary-period` interval data type collection. */
  sedentaryPeriod?: SedentaryPeriod;
  /** Data for points in the `exercise` session data type collection. */
  exercise?: Exercise;
  /** Data for points in the `activity-level` daily data type collection. */
  activityLevel?: ActivityLevel;
}

export const ReconciledDataPoint = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  steps: Schema.optional(Steps),
  dailyVo2Max: Schema.optional(DailyVO2Max),
  respiratoryRateSleepSummary: Schema.optional(RespiratoryRateSleepSummary),
  heartRateVariability: Schema.optional(HeartRateVariability),
  floors: Schema.optional(Floors),
  dailyRestingHeartRate: Schema.optional(DailyRestingHeartRate),
  distance: Schema.optional(Distance),
  altitude: Schema.optional(Altitude),
  activeMinutes: Schema.optional(ActiveMinutes),
  heartRate: Schema.optional(HeartRate),
  bodyFat: Schema.optional(BodyFat),
  dailyRespiratoryRate: Schema.optional(DailyRespiratoryRate),
  sleep: Schema.optional(Sleep),
  hydrationLog: Schema.optional(HydrationLog),
  dailyHeartRateVariability: Schema.optional(DailyHeartRateVariability),
  dataPointName: Schema.optional(Schema.String),
  dailyOxygenSaturation: Schema.optional(DailyOxygenSaturation),
  oxygenSaturation: Schema.optional(OxygenSaturation),
  weight: Schema.optional(Weight),
  vo2Max: Schema.optional(VO2Max),
  dailyHeartRateZones: Schema.optional(DailyHeartRateZones),
  dailySleepTemperatureDerivations: Schema.optional(
    DailySleepTemperatureDerivations,
  ),
  runVo2Max: Schema.optional(RunVO2Max),
  timeInHeartRateZone: Schema.optional(TimeInHeartRateZone),
  activeZoneMinutes: Schema.optional(ActiveZoneMinutes),
  sedentaryPeriod: Schema.optional(SedentaryPeriod),
  exercise: Schema.optional(Exercise),
  activityLevel: Schema.optional(ActivityLevel),
}).annotate({ identifier: "ReconciledDataPoint" });

export interface Interval {
  /** Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. */
  endTime?: string;
  /** Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. */
  startTime?: string;
}

export const Interval = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  endTime: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
}).annotate({ identifier: "Interval" });

export interface RollUpDataPointsRequest {
  /** Required. Closed-open range of data points that will be rolled up. The maximum range for `calories-in-heart-rate-zone`, `heart-rate`, `active-minutes` and `total-calories` is 14 days. The maximum range for all other data types is 90 days. */
  range?: Interval;
  /** Optional. The next_page_token from a previous request, if any. All other request fields need to be the same as in the initial request when the page token is specified. */
  pageToken?: string;
  /** Optional. The maximum number of data points to return. If unspecified, at most 1440 data points will be returned. The maximum page size is 10000; values above that will be truncated accordingly. */
  pageSize?: number;
  /** Required. The size of the time window to group data points into before applying the aggregation functions. */
  windowSize?: string;
  /** Optional. The data source family name to roll up. If empty, data points from all available data sources will be rolled up. Format: `users/me/dataSourceFamilies/{data_source_family}` The supported values are: - `users/me/dataSourceFamilies/all-sources` - default value - `users/me/dataSourceFamilies/google-wearables` - tracker devices - `users/me/dataSourceFamilies/google-sources` - Google first party sources */
  dataSourceFamily?: string;
}

export const RollUpDataPointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    range: Schema.optional(Interval),
    pageToken: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    windowSize: Schema.optional(Schema.String),
    dataSourceFamily: Schema.optional(Schema.String),
  }).annotate({ identifier: "RollUpDataPointsRequest" });

export interface HeartRateRollupValue {
  /** The average heart rate value in the interval. */
  beatsPerMinuteAvg?: number;
  /** The maximum heart rate value in the interval. */
  beatsPerMinuteMax?: number;
  /** The minimum heart rate value in the interval. */
  beatsPerMinuteMin?: number;
}

export const HeartRateRollupValue = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  beatsPerMinuteAvg: Schema.optional(Schema.Number),
  beatsPerMinuteMax: Schema.optional(Schema.Number),
  beatsPerMinuteMin: Schema.optional(Schema.Number),
}).annotate({ identifier: "HeartRateRollupValue" });

export interface ActiveZoneMinutesRollupValue {
  /** Active zone minutes in `HeartRateZone.CARDIO`. */
  sumInCardioHeartZone?: string;
  /** Active zone minutes in `HeartRateZone.FAT_BURN`. */
  sumInFatBurnHeartZone?: string;
  /** Active zone minutes in `HeartRateZone.PEAK`. */
  sumInPeakHeartZone?: string;
}

export const ActiveZoneMinutesRollupValue =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sumInCardioHeartZone: Schema.optional(Schema.String),
    sumInFatBurnHeartZone: Schema.optional(Schema.String),
    sumInPeakHeartZone: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActiveZoneMinutesRollupValue" });

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

export const ActiveMinutesRollupByActivityLevel =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    activityLevel: Schema.optional(Schema.String),
    activeMinutesSum: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActiveMinutesRollupByActivityLevel" });

export interface ActiveMinutesRollupValue {
  /** Active minutes by activity level. At most one record per activity level is allowed. */
  activeMinutesRollupByActivityLevel?: ReadonlyArray<ActiveMinutesRollupByActivityLevel>;
}

export const ActiveMinutesRollupValue =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    activeMinutesRollupByActivityLevel: Schema.optional(
      Schema.Array(ActiveMinutesRollupByActivityLevel),
    ),
  }).annotate({ identifier: "ActiveMinutesRollupValue" });

export interface CaloriesInHeartRateZoneValue {
  /** The amount of kilocalories burned in the specified heart rate zone. */
  kcal?: number;
  /** The heart rate zone. */
  heartRateZone?:
    | "HEART_RATE_ZONE_TYPE_UNSPECIFIED"
    | "LIGHT"
    | "MODERATE"
    | "VIGOROUS"
    | "PEAK"
    | (string & {});
}

export const CaloriesInHeartRateZoneValue =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kcal: Schema.optional(Schema.Number),
    heartRateZone: Schema.optional(Schema.String),
  }).annotate({ identifier: "CaloriesInHeartRateZoneValue" });

export interface CaloriesInHeartRateZoneRollupValue {
  /** List of calories burned in each heart rate zone. */
  caloriesInHeartRateZones?: ReadonlyArray<CaloriesInHeartRateZoneValue>;
}

export const CaloriesInHeartRateZoneRollupValue =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    caloriesInHeartRateZones: Schema.optional(
      Schema.Array(CaloriesInHeartRateZoneValue),
    ),
  }).annotate({ identifier: "CaloriesInHeartRateZoneRollupValue" });

export interface ExportExerciseTcxResponse {
  /** Contains the exported TCX data. */
  tcxData?: string;
}

export const ExportExerciseTcxResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tcxData: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExportExerciseTcxResponse" });

export interface RunVO2MaxRollupValue {
  /** Minimum value of run VO2 max in the interval.. */
  rateMin?: number;
  /** Average value of run VO2 max in the interval. */
  rateAvg?: number;
  /** Maximum value of run VO2 max in the interval. */
  rateMax?: number;
}

export const RunVO2MaxRollupValue = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rateMin: Schema.optional(Schema.Number),
  rateAvg: Schema.optional(Schema.Number),
  rateMax: Schema.optional(Schema.Number),
}).annotate({ identifier: "RunVO2MaxRollupValue" });

export interface Identity {
  /** Output only. The legacy Fitbit User identifier. This is the Fitbit ID used in the legacy Fitbit APIs (v1-v3). It can be referenced by clients migrating from the legacy Fitbit APIs to map their existing identifiers to the new Google user ID. It **must not** be used for any other purpose. It is not of any use for new clients using only the Google Health APIs. Valid values are strings of 1-63 characters, and valid characters are lowercase and uppercase letters, numbers, and hyphens. */
  legacyUserId?: string;
  /** Output only. The Google User Identifier in the Google Health APIs. It matches the `{user}` resource ID segment in the resource name paths, e.g. `users/{user}/dataTypes/steps`. Valid values are strings of 1-63 characters, and valid characters are lowercase and uppercase letters, numbers, and hyphens. */
  healthUserId?: string;
  /** Identifier. The resource name of this Identity resource. Format: `users/me/identity` */
  name?: string;
}

export const Identity = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  legacyUserId: Schema.optional(Schema.String),
  healthUserId: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "Identity" });

export interface TotalCaloriesRollupValue {
  /** Sum of the total calories in kilocalories. */
  kcalSum?: number;
}

export const TotalCaloriesRollupValue =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kcalSum: Schema.optional(Schema.Number),
  }).annotate({ identifier: "TotalCaloriesRollupValue" });

export interface BodyFatRollupValue {
  /** Average body fat percentage. */
  bodyFatPercentageAvg?: number;
}

export const BodyFatRollupValue = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bodyFatPercentageAvg: Schema.optional(Schema.Number),
}).annotate({ identifier: "BodyFatRollupValue" });

export interface Status {
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  details: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  code: Schema.optional(Schema.Number),
  message: Schema.optional(Schema.String),
}).annotate({ identifier: "Status" });

export interface ReconcileDataPointsResponse {
  /** Data points matching the query */
  dataPoints?: ReadonlyArray<ReconciledDataPoint>;
  /** Next page token, empty if the response is complete */
  nextPageToken?: string;
}

export const ReconcileDataPointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataPoints: Schema.optional(Schema.Array(ReconciledDataPoint)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReconcileDataPointsResponse" });

export interface StepsRollupValue {
  /** Total number of steps in the interval. */
  countSum?: string;
}

export const StepsRollupValue = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  countSum: Schema.optional(Schema.String),
}).annotate({ identifier: "StepsRollupValue" });

export interface AltitudeRollupValue {
  /** Sum of the altitude gain in millimeters. */
  gainMillimetersSum?: string;
}

export const AltitudeRollupValue = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  gainMillimetersSum: Schema.optional(Schema.String),
}).annotate({ identifier: "AltitudeRollupValue" });

export interface ActivityLevelRollupValue {
  /** List of total durations in each activity level type. */
  activityLevelRollupsByActivityLevelType?: ReadonlyArray<ActivityLevelRollupByActivityLevelType>;
}

export const ActivityLevelRollupValue =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    activityLevelRollupsByActivityLevelType: Schema.optional(
      Schema.Array(ActivityLevelRollupByActivityLevelType),
    ),
  }).annotate({ identifier: "ActivityLevelRollupValue" });

export interface TimeZone {
  /** IANA Time Zone Database time zone. For example "America/New_York". */
  id?: string;
  /** Optional. IANA Time Zone Database version number. For example "2019a". */
  version?: string;
}

export const TimeZone = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
}).annotate({ identifier: "TimeZone" });

export interface DateTime {
  /** Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0. */
  nanos?: number;
  /** Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month. */
  month?: number;
  /** Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds. */
  seconds?: number;
  /** UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }. */
  utcOffset?: string;
  /** Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year. */
  year?: number;
  /** Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0. */
  minutes?: number;
  /** Time zone. */
  timeZone?: TimeZone;
  /** Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
  hours?: number;
  /** Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day. */
  day?: number;
}

export const DateTime = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nanos: Schema.optional(Schema.Number),
  month: Schema.optional(Schema.Number),
  seconds: Schema.optional(Schema.Number),
  utcOffset: Schema.optional(Schema.String),
  year: Schema.optional(Schema.Number),
  minutes: Schema.optional(Schema.Number),
  timeZone: Schema.optional(TimeZone),
  hours: Schema.optional(Schema.Number),
  day: Schema.optional(Schema.Number),
}).annotate({ identifier: "DateTime" });

export interface Settings {
  /** Optional. The measurement unit defined in the user's account settings. */
  heightUnit?:
    | "HEIGHT_UNIT_UNSPECIFIED"
    | "HEIGHT_UNIT_INCHES"
    | "HEIGHT_UNIT_CENTIMETERS"
    | (string & {});
  /** Optional. The stride length type defined in the user's account settings for walking. Updates to this field are currently not supported. */
  strideLengthWalkingType?:
    | "STRIDE_LENGTH_TYPE_UNSPECIFIED"
    | "STRIDE_LENGTH_TYPE_DEFAULT"
    | "STRIDE_LENGTH_TYPE_MANUAL"
    | "STRIDE_LENGTH_TYPE_AUTO"
    | (string & {});
  /** Optional. The timezone defined in the user's account settings. This follows the IANA [Time Zone Database](https://www.iana.org/time-zones). Updates to this field are currently not supported. */
  timeZone?: string;
  /** Optional. The user's timezone offset relative to UTC. Updates to this field are currently not supported. */
  utcOffset?: string;
  /** Identifier. The resource name of this Settings resource. Format: `users/{user}/settings` Example: `users/1234567890/settings` or `users/me/settings` The {user} ID is a system-generated Google Health API user ID, a string of 1-63 characters consisting of lowercase and uppercase letters, numbers, and hyphens. The literal `me` can also be used to refer to the authenticated user. */
  name?: string;
  /** Optional. The measurement unit defined in the user's account settings. */
  swimUnit?:
    | "SWIM_UNIT_UNSPECIFIED"
    | "SWIM_UNIT_METERS"
    | "SWIM_UNIT_YARDS"
    | (string & {});
  /** Optional. The measurement unit defined in the user's account settings. */
  glucoseUnit?:
    | "GLUCOSE_UNIT_UNSPECIFIED"
    | "GLUCOSE_UNIT_MG_DL"
    | "GLUCOSE_UNIT_MMOL_L"
    | (string & {});
  /** Optional. The stride length type defined in the user's account settings for running. Updates to this field are currently not supported. */
  strideLengthRunningType?:
    | "STRIDE_LENGTH_TYPE_UNSPECIFIED"
    | "STRIDE_LENGTH_TYPE_DEFAULT"
    | "STRIDE_LENGTH_TYPE_MANUAL"
    | "STRIDE_LENGTH_TYPE_AUTO"
    | (string & {});
  /** Optional. The locale defined in the user's account settings. Updates to this field are currently not supported. */
  languageLocale?: string;
  /** Optional. The measurement unit defined in the user's account settings. */
  weightUnit?:
    | "WEIGHT_UNIT_UNSPECIFIED"
    | "WEIGHT_UNIT_POUNDS"
    | "WEIGHT_UNIT_STONE"
    | "WEIGHT_UNIT_KILOGRAMS"
    | (string & {});
  /** Optional. The measurement unit defined in the user's account settings. */
  waterUnit?:
    | "WATER_UNIT_UNSPECIFIED"
    | "WATER_UNIT_ML"
    | "WATER_UNIT_FL_OZ"
    | "WATER_UNIT_CUP"
    | (string & {});
  /** Optional. The measurement unit defined in the user's account settings. Updates to this field are currently not supported. */
  distanceUnit?:
    | "DISTANCE_UNIT_UNSPECIFIED"
    | "DISTANCE_UNIT_MILES"
    | "DISTANCE_UNIT_KILOMETERS"
    | (string & {});
  /** Optional. True if the user's stride length is determined automatically. Updates to this field are currently not supported. */
  autoStrideEnabled?: boolean;
  /** Optional. The measurement unit defined in the user's account settings. */
  temperatureUnit?:
    | "TEMPERATURE_UNIT_UNSPECIFIED"
    | "TEMPERATURE_UNIT_CELSIUS"
    | "TEMPERATURE_UNIT_FAHRENHEIT"
    | (string & {});
}

export const Settings = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  heightUnit: Schema.optional(Schema.String),
  strideLengthWalkingType: Schema.optional(Schema.String),
  timeZone: Schema.optional(Schema.String),
  utcOffset: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  swimUnit: Schema.optional(Schema.String),
  glucoseUnit: Schema.optional(Schema.String),
  strideLengthRunningType: Schema.optional(Schema.String),
  languageLocale: Schema.optional(Schema.String),
  weightUnit: Schema.optional(Schema.String),
  waterUnit: Schema.optional(Schema.String),
  distanceUnit: Schema.optional(Schema.String),
  autoStrideEnabled: Schema.optional(Schema.Boolean),
  temperatureUnit: Schema.optional(Schema.String),
}).annotate({ identifier: "Settings" });

export interface DistanceRollupValue {
  /** Sum of the distance in millimeters. */
  millimetersSum?: string;
}

export const DistanceRollupValue = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  millimetersSum: Schema.optional(Schema.String),
}).annotate({ identifier: "DistanceRollupValue" });

export interface WeightRollupValue {
  /** Average weight in grams. */
  weightGramsAvg?: number;
}

export const WeightRollupValue = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  weightGramsAvg: Schema.optional(Schema.Number),
}).annotate({ identifier: "WeightRollupValue" });

export interface TimeInHeartRateZoneRollupValue {
  /** List of time spent in each heart rate zone. */
  timeInHeartRateZones?: ReadonlyArray<TimeInHeartRateZoneValue>;
}

export const TimeInHeartRateZoneRollupValue =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timeInHeartRateZones: Schema.optional(
      Schema.Array(TimeInHeartRateZoneValue),
    ),
  }).annotate({ identifier: "TimeInHeartRateZoneRollupValue" });

export interface SedentaryPeriodRollupValue {
  /** The total time user spent sedentary during the interval. */
  durationSum?: string;
}

export const SedentaryPeriodRollupValue =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    durationSum: Schema.optional(Schema.String),
  }).annotate({ identifier: "SedentaryPeriodRollupValue" });

export interface RollupDataPoint {
  /** Returned by default when rolling up data points from the `floors` data type, or when requested explicitly using the `floors` rollup type identifier. */
  floors?: FloorsRollupValue;
  /** Returned by default when rolling up data points from the `distance` data type, or when requested explicitly using the `distance` rollup type identifier. */
  distance?: DistanceRollupValue;
  /** Returned by default when rolling up data points from the `weight` data type, or when requested explicitly using the `weight` rollup type identifier. */
  weight?: WeightRollupValue;
  /** Returned by default when rolling up data points from the `calories-in-heart-rate-zone` data type, or when requested explicitly using the `calories-in-heart-rate-zone` rollup type identifier. */
  caloriesInHeartRateZone?: CaloriesInHeartRateZoneRollupValue;
  /** Returned by default when rolling up data points from the `steps` data type, or when requested explicitly using the `steps` rollup type identifier. */
  steps?: StepsRollupValue;
  /** Returned by default when rolling up data points from the `hydration-log` data type, or when requested explicitly using the `hydration-log` rollup type identifier. */
  hydrationLog?: HydrationLogRollupValue;
  /** Returned by default when rolling up data points from the `total-calories` data type, or when requested explicitly using the `total-calories` rollup type identifier. */
  totalCalories?: TotalCaloriesRollupValue;
  /** End time of the window this value aggregates over */
  endTime?: string;
  /** Start time of the window this value aggregates over */
  startTime?: string;
  /** Returned by default when rolling up data points from the `activity-level` data type, or when requested explicitly using the `activity-level` rollup type identifier. */
  activityLevel?: ActivityLevelRollupValue;
  /** Returned by default when rolling up data points from the `heart-rate` data type, or when requested explicitly using the `heart-rate` rollup type identifier. */
  heartRate?: HeartRateRollupValue;
  /** Returned by default when rolling up data points from the `body-fat` data type, or when requested explicitly using the `body-fat` rollup type identifier. */
  bodyFat?: BodyFatRollupValue;
  /** Returned by default when rolling up data points from the `active-minutes` data type, or when requested explicitly using the `active-minutes` rollup type identifier. */
  activeMinutes?: ActiveMinutesRollupValue;
  /** Returned by default when rolling up data points from the `run-vo2-max` data type, or when requested explicitly using the `run-vo2-max` rollup type identifier. */
  runVo2Max?: RunVO2MaxRollupValue;
  /** Returned by default when rolling up data points from the `time-in-heart-rate-zone` data type, or when requested explicitly using the `time-in-heart-rate-zone` rollup type identifier. */
  timeInHeartRateZone?: TimeInHeartRateZoneRollupValue;
  /** Returned by default when rolling up data points from the `altitude` data type, or when requested explicitly using the `altitude` rollup type identifier. */
  altitude?: AltitudeRollupValue;
  /** Returned by default when rolling up data points from the `active-zone-minutes` data type, or when requested explicitly using the `active-zone-minutes` rollup type identifier. */
  activeZoneMinutes?: ActiveZoneMinutesRollupValue;
  /** Returned by default when rolling up data points from the `sedentary-period` data type, or when requested explicitly using the `sedentary-period` rollup type identifier. */
  sedentaryPeriod?: SedentaryPeriodRollupValue;
}

export const RollupDataPoint = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  floors: Schema.optional(FloorsRollupValue),
  distance: Schema.optional(DistanceRollupValue),
  weight: Schema.optional(WeightRollupValue),
  caloriesInHeartRateZone: Schema.optional(CaloriesInHeartRateZoneRollupValue),
  steps: Schema.optional(StepsRollupValue),
  hydrationLog: Schema.optional(HydrationLogRollupValue),
  totalCalories: Schema.optional(TotalCaloriesRollupValue),
  endTime: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
  activityLevel: Schema.optional(ActivityLevelRollupValue),
  heartRate: Schema.optional(HeartRateRollupValue),
  bodyFat: Schema.optional(BodyFatRollupValue),
  activeMinutes: Schema.optional(ActiveMinutesRollupValue),
  runVo2Max: Schema.optional(RunVO2MaxRollupValue),
  timeInHeartRateZone: Schema.optional(TimeInHeartRateZoneRollupValue),
  altitude: Schema.optional(AltitudeRollupValue),
  activeZoneMinutes: Schema.optional(ActiveZoneMinutesRollupValue),
  sedentaryPeriod: Schema.optional(SedentaryPeriodRollupValue),
}).annotate({ identifier: "RollupDataPoint" });

export interface RestingHeartRatePersonalRangeRollupValue {
  /** The lower bound of the user's daily resting heart rate personal range. */
  beatsPerMinuteMin?: number;
  /** The upper bound of the user's daily resting heart rate personal range. */
  beatsPerMinuteMax?: number;
}

export const RestingHeartRatePersonalRangeRollupValue =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    beatsPerMinuteMin: Schema.optional(Schema.Number),
    beatsPerMinuteMax: Schema.optional(Schema.Number),
  }).annotate({ identifier: "RestingHeartRatePersonalRangeRollupValue" });

export interface Operation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
}

export const Operation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  done: Schema.optional(Schema.Boolean),
  error: Schema.optional(Status),
}).annotate({ identifier: "Operation" });

export interface GoogleDevicesandservicesHealthV4DataType {
  /** Identifier. The resource name of the data type. Format: `users/{user}/dataTypes/{data_type}` See DataPoint.name for examples and possible values. */
  name?: string;
}

export const GoogleDevicesandservicesHealthV4DataType =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevicesandservicesHealthV4DataType" });

export interface HeartRateVariabilityPersonalRangeRollupValue {
  /** The upper bound of the user's average heart rate variability personal range. */
  averageHeartRateVariabilityMillisecondsMax?: number;
  /** The lower bound of the user's average heart rate variability personal range. */
  averageHeartRateVariabilityMillisecondsMin?: number;
}

export const HeartRateVariabilityPersonalRangeRollupValue =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    averageHeartRateVariabilityMillisecondsMax: Schema.optional(Schema.Number),
    averageHeartRateVariabilityMillisecondsMin: Schema.optional(Schema.Number),
  }).annotate({ identifier: "HeartRateVariabilityPersonalRangeRollupValue" });

export interface DailyRollupDataPoint {
  /** Returned by default when rolling up data points from the `run-vo2-max` data type, or when requested explicitly using the `run-vo2-max` rollup type identifier. */
  runVo2Max?: RunVO2MaxRollupValue;
  /** Start time of the window this value aggregates over */
  civilStartTime?: CivilDateTime;
  /** Returned by default when rolling up data points from the `active-zone-minutes` data type, or when requested explicitly using the `active-zone-minutes` rollup type identifier. */
  activeZoneMinutes?: ActiveZoneMinutesRollupValue;
  /** Returned by default when rolling up data points from the `sedentary-period` data type, or when requested explicitly using the `sedentary-period` rollup type identifier. */
  sedentaryPeriod?: SedentaryPeriodRollupValue;
  /** Returned by default when rolling up data points from the `daily-resting-heart-rate` data type, or when requested explicitly using the `resting-heart-rate-personal-range` rollup type identifier. */
  restingHeartRatePersonalRange?: RestingHeartRatePersonalRangeRollupValue;
  /** Returned by default when rolling up data points from the `time-in-heart-rate-zone` data type, or when requested explicitly using the `time-in-heart-rate-zone` rollup type identifier. */
  timeInHeartRateZone?: TimeInHeartRateZoneRollupValue;
  /** Returned by default when rolling up data points from the `altitude` data type, or when requested explicitly using the `altitude` rollup type identifier. */
  altitude?: AltitudeRollupValue;
  /** Returned by default when rolling up data points from the `activity-level` data type, or when requested explicitly using the `activity-level` rollup type identifier. */
  activityLevel?: ActivityLevelRollupValue;
  /** Returned by default when rolling up data points from the `heart-rate` data type, or when requested explicitly using the `heart-rate` rollup type identifier. */
  heartRate?: HeartRateRollupValue;
  /** Returned by default when rolling up data points from the `body-fat` data type, or when requested explicitly using the `body-fat` rollup type identifier. */
  bodyFat?: BodyFatRollupValue;
  /** Returned by default when rolling up data points from the `active-minutes` data type, or when requested explicitly using the `active-minutes` rollup type identifier. */
  activeMinutes?: ActiveMinutesRollupValue;
  /** Returned by default when rolling up data points from the `steps` data type, or when requested explicitly using the `steps` rollup type identifier. */
  steps?: StepsRollupValue;
  /** Returned by default when rolling up data points from the `hydration-log` data type, or when requested explicitly using the `hydration-log` rollup type identifier. */
  hydrationLog?: HydrationLogRollupValue;
  /** End time of the window this value aggregates over */
  civilEndTime?: CivilDateTime;
  /** Returned by default when rolling up data points from the `total-calories` data type, or when requested explicitly using the `total-calories` rollup type identifier. */
  totalCalories?: TotalCaloriesRollupValue;
  /** Returned by default when rolling up data points from the `calories-in-heart-rate-zone` data type, or when requested explicitly using the `calories-in-heart-rate-zone` rollup type identifier. */
  caloriesInHeartRateZone?: CaloriesInHeartRateZoneRollupValue;
  /** Returned by default when rolling up data points from the `floors` data type, or when requested explicitly using the `floors` rollup type identifier. */
  floors?: FloorsRollupValue;
  /** Returned by default when rolling up data points from the `distance` data type, or when requested explicitly using the `distance` rollup type identifier. */
  distance?: DistanceRollupValue;
  /** Returned by default when rolling up data points from the `weight` data type, or when requested explicitly using the `weight` rollup type identifier. */
  weight?: WeightRollupValue;
  /** Returned by default when rolling up data points from the `daily-heart-rate-variability` data type, or when requested explicitly using the `heart-rate-variability-personal-range` rollup type identifier. */
  heartRateVariabilityPersonalRange?: HeartRateVariabilityPersonalRangeRollupValue;
}

export const DailyRollupDataPoint = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  runVo2Max: Schema.optional(RunVO2MaxRollupValue),
  civilStartTime: Schema.optional(CivilDateTime),
  activeZoneMinutes: Schema.optional(ActiveZoneMinutesRollupValue),
  sedentaryPeriod: Schema.optional(SedentaryPeriodRollupValue),
  restingHeartRatePersonalRange: Schema.optional(
    RestingHeartRatePersonalRangeRollupValue,
  ),
  timeInHeartRateZone: Schema.optional(TimeInHeartRateZoneRollupValue),
  altitude: Schema.optional(AltitudeRollupValue),
  activityLevel: Schema.optional(ActivityLevelRollupValue),
  heartRate: Schema.optional(HeartRateRollupValue),
  bodyFat: Schema.optional(BodyFatRollupValue),
  activeMinutes: Schema.optional(ActiveMinutesRollupValue),
  steps: Schema.optional(StepsRollupValue),
  hydrationLog: Schema.optional(HydrationLogRollupValue),
  civilEndTime: Schema.optional(CivilDateTime),
  totalCalories: Schema.optional(TotalCaloriesRollupValue),
  caloriesInHeartRateZone: Schema.optional(CaloriesInHeartRateZoneRollupValue),
  floors: Schema.optional(FloorsRollupValue),
  distance: Schema.optional(DistanceRollupValue),
  weight: Schema.optional(WeightRollupValue),
  heartRateVariabilityPersonalRange: Schema.optional(
    HeartRateVariabilityPersonalRangeRollupValue,
  ),
}).annotate({ identifier: "DailyRollupDataPoint" });

export interface DailyRollUpDataPointsResponse {
  /** Values for each aggregation time window. */
  rollupDataPoints?: ReadonlyArray<DailyRollupDataPoint>;
}

export const DailyRollUpDataPointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rollupDataPoints: Schema.optional(Schema.Array(DailyRollupDataPoint)),
  }).annotate({ identifier: "DailyRollUpDataPointsResponse" });

export interface CivilTimeInterval {
  /** Required. The exclusive end of the range. */
  end?: CivilDateTime;
  /** Required. The inclusive start of the range. */
  start?: CivilDateTime;
}

export const CivilTimeInterval = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  end: Schema.optional(CivilDateTime),
  start: Schema.optional(CivilDateTime),
}).annotate({ identifier: "CivilTimeInterval" });

export interface RollUpDataPointsResponse {
  /** Values for each aggregation time window. */
  rollupDataPoints?: ReadonlyArray<RollupDataPoint>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const RollUpDataPointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rollupDataPoints: Schema.optional(Schema.Array(RollupDataPoint)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "RollUpDataPointsResponse" });

export interface BatchDeleteDataPointsRequest {
  /** Required. The names of the DataPoints to delete. A maximum of 10000 data points can be deleted in a single request. */
  names?: ReadonlyArray<string>;
}

export const BatchDeleteDataPointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BatchDeleteDataPointsRequest" });

export interface DailyRollUpDataPointsRequest {
  /** Optional. The data source family name to roll up. If empty, data points from all available data sources will be rolled up. Format: `users/me/dataSourceFamilies/{data_source_family}` The supported values are: - `users/me/dataSourceFamilies/all-sources` - default value - `users/me/dataSourceFamilies/google-wearables` - tracker devices - `users/me/dataSourceFamilies/google-sources` - Google first party sources */
  dataSourceFamily?: string;
  /** Optional. Aggregation window size, in number of days. Defaults to 1 if not specified. */
  windowSizeDays?: number;
  /** Required. Closed-open range of data points that will be rolled up. The start time must be aligned with the aggregation window. The maximum range for `calories-in-heart-rate-zone`, `heart-rate`, `active-minutes` and `total-calories` is 14 days. The maximum range for all other data types is 90 days. */
  range?: CivilTimeInterval;
  /** Optional. The `next_page_token` from a previous request, if any. All other request fields need to be the same as in the initial request when the page token is specified. */
  pageToken?: string;
  /** Optional. The maximum number of data points to return. If unspecified, at most 1440 data points will be returned. The maximum page size is 10000; values above that will be truncated accordingly. */
  pageSize?: number;
}

export const DailyRollUpDataPointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataSourceFamily: Schema.optional(Schema.String),
    windowSizeDays: Schema.optional(Schema.Number),
    range: Schema.optional(CivilTimeInterval),
    pageToken: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DailyRollUpDataPointsRequest" });

// ==========================================================================
// Operations
// ==========================================================================

export interface GetSettingsUsersRequest {
  /** Required. The name of the Settings. Format: `users/me/settings`. */
  name: string;
}

export const GetSettingsUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v4/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetSettingsUsersRequest>;

export type GetSettingsUsersResponse = Settings;
export const GetSettingsUsersResponse = /*@__PURE__*/ /*#__PURE__*/ Settings;

export type GetSettingsUsersError = DefaultErrors;

/** Returns user settings details. */
export const getSettingsUsers: API.OperationMethod<
  GetSettingsUsersRequest,
  GetSettingsUsersResponse,
  GetSettingsUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSettingsUsersRequest,
  output: GetSettingsUsersResponse,
  errors: [],
}));

export interface GetIdentityUsersRequest {
  /** Required. The resource name of the Identity. Format: `users/me/identity` */
  name: string;
}

export const GetIdentityUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v4/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetIdentityUsersRequest>;

export type GetIdentityUsersResponse = Identity;
export const GetIdentityUsersResponse = /*@__PURE__*/ /*#__PURE__*/ Identity;

export type GetIdentityUsersError = DefaultErrors;

/** Gets the user's identity. It includes the legacy Fitbit user ID and the Google user ID and it can be used by migrating clients to map identifiers between the two systems. */
export const getIdentityUsers: API.OperationMethod<
  GetIdentityUsersRequest,
  GetIdentityUsersResponse,
  GetIdentityUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIdentityUsersRequest,
  output: GetIdentityUsersResponse,
  errors: [],
}));

export interface UpdateSettingsUsersRequest {
  /** Optional. The list of fields to be updated. */
  updateMask?: string;
  /** Identifier. The resource name of this Settings resource. Format: `users/{user}/settings` Example: `users/1234567890/settings` or `users/me/settings` The {user} ID is a system-generated Google Health API user ID, a string of 1-63 characters consisting of lowercase and uppercase letters, numbers, and hyphens. The literal `me` can also be used to refer to the authenticated user. */
  name: string;
  /** Request body */
  body?: Settings;
}

export const UpdateSettingsUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Settings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v4/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateSettingsUsersRequest>;

export type UpdateSettingsUsersResponse = Settings;
export const UpdateSettingsUsersResponse = /*@__PURE__*/ /*#__PURE__*/ Settings;

export type UpdateSettingsUsersError = DefaultErrors;

/** Updates the user's settings details. */
export const updateSettingsUsers: API.OperationMethod<
  UpdateSettingsUsersRequest,
  UpdateSettingsUsersResponse,
  UpdateSettingsUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSettingsUsersRequest,
  output: UpdateSettingsUsersResponse,
  errors: [],
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
  T.Http({ method: "GET", path: "v4/{name}" }),
  svc,
) as unknown as Schema.Schema<GetProfileUsersRequest>;

export type GetProfileUsersResponse = Profile;
export const GetProfileUsersResponse = /*@__PURE__*/ /*#__PURE__*/ Profile;

export type GetProfileUsersError = DefaultErrors;

/** Returns user Profile details. */
export const getProfileUsers: API.OperationMethod<
  GetProfileUsersRequest,
  GetProfileUsersResponse,
  GetProfileUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProfileUsersRequest,
  output: GetProfileUsersResponse,
  errors: [],
}));

export interface UpdateProfileUsersRequest {
  /** Optional. The list of fields to be updated. */
  updateMask?: string;
  /** Identifier. The resource name of this Profile resource. Format: `users/{user}/profile` Example: `users/1234567890/profile` or `users/me/profile` The {user} ID is a system-generated Google Health API user ID, a string of 1-63 characters consisting of lowercase and uppercase letters, numbers, and hyphens. The literal `me` can also be used to refer to the authenticated user. */
  name: string;
  /** Request body */
  body?: Profile;
}

export const UpdateProfileUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Profile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v4/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateProfileUsersRequest>;

export type UpdateProfileUsersResponse = Profile;
export const UpdateProfileUsersResponse = /*@__PURE__*/ /*#__PURE__*/ Profile;

export type UpdateProfileUsersError = DefaultErrors;

/** Updates the user's profile details. */
export const updateProfileUsers: API.OperationMethod<
  UpdateProfileUsersRequest,
  UpdateProfileUsersResponse,
  UpdateProfileUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateProfileUsersRequest,
  output: UpdateProfileUsersResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v4/{parent}/dataPoints", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateUsersDataTypesDataPointsRequest>;

export type CreateUsersDataTypesDataPointsResponse = Operation;
export const CreateUsersDataTypesDataPointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateUsersDataTypesDataPointsError = DefaultErrors;

/** Creates a single identifiable data point. */
export const createUsersDataTypesDataPoints: API.OperationMethod<
  CreateUsersDataTypesDataPointsRequest,
  CreateUsersDataTypesDataPointsResponse,
  CreateUsersDataTypesDataPointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateUsersDataTypesDataPointsRequest,
  output: CreateUsersDataTypesDataPointsResponse,
  errors: [],
}));

export interface ListUsersDataTypesDataPointsRequest {
  /** Optional. Filter expression following https://google.aip.dev/160. A time range (either physical or civil) can be specified. The supported filter fields are: - Interval start time: - Pattern: `{interval_data_type}.interval.start_time` - Supported comparison operators: `>=`, `<` - Timestamp literal expected in RFC-3339 format - Supported logical operators: `AND` - Example: - `steps.interval.start_time >= "2023-11-24T00:00:00Z" AND steps.interval.start_time < "2023-11-25T00:00:00Z"` - `distance.interval.start_time >= "2024-08-14T12:34:56Z"` - Interval civil start time: - Pattern: `{interval_data_type}.interval.civil_start_time` - Supported comparison operators: `>=`, `<` - Date with optional time literal expected in ISO 8601 `YYYY-MM-DD[THH:mm:ss]` format - Supported logical operators: `AND` - Example: - `steps.interval.civil_start_time >= "2023-11-24" AND steps.interval.civil_start_time < "2023-11-25"` - `distance.interval.civil_start_time >= "2024-08-14T12:34:56"` - Sample observation physical time: - Pattern: `{sample_data_type}.sample_time.physical_time` - Supported comparison operators: `>=`, `<` - Timestamp literal expected in RFC-3339 format - Supported logical operators: `AND` - Example: - `weight.sample_time.physical_time >= "2023-11-24T00:00:00Z" AND weight.sample_time.physical_time < "2023-11-25T00:00:00Z"` - `weight.sample_time.physical_time >= "2024-08-14T12:34:56Z"` - Sample observation civil time: - Pattern: `{sample_data_type}.sample_time.civil_time` - Supported comparison operators: `>=`, `<` - Date with optional time literal expected in ISO 8601 `YYYY-MM-DD[THH:mm:ss]` format - Supported logical operators: `AND` - Example: - `weight.sample_time.civil_time >= "2023-11-24" AND weight.sample_time.civil_time < "2023-11-25"` - `weight.sample_time.civil_time >= "2024-08-14T12:34:56"` - Daily summary date: - Pattern: `{daily_summary_data_type}.date` - Supported comparison operators: `>=`, `<` - Date literal expected in ISO 8601 `YYYY-MM-DD` format - Supported logical operators: `AND` - Example: - `daily_resting_heart_rate.date >= "2024-08-14"` - `daily_heart_rate_variability.date < "2024-08-15"` - Session civil start time (**Excluding Sleep**): - Pattern: `{session_data_type}.interval.civil_start_time` - Supported comparison operators: `>=`, `<` - Date with optional time literal expected in ISO 8601 `YYYY-MM-DD[THH:mm:ss]` format - Supported logical operators: `AND` - Example: - `exercise.interval.civil_start_time >= "2023-11-24" AND exercise.interval.civil_start_time < "2023-11-25"` - `exercise.interval.civil_start_time >= "2024-08-14T12:34:56"` - Session end time (**Sleep specific**): - Pattern: `sleep.interval.end_time` - Supported comparison operators: `>=`, `<` - Timestamp literal expected in RFC-3339 format - Supported logical operators: `AND`, `OR` - Example: - `sleep.interval.end_time >= "2023-11-24T00:00:00Z" AND sleep.interval.end_time < "2023-11-25T00:00:00Z"` - Session civil end time (**Sleep specific**): - Pattern: `sleep.interval.civil_end_time` - Supported comparison operators: `>=`, `<` - Date with optional time literal expected in ISO 8601 `YYYY-MM-DD[THH:mm:ss]` format - Supported logical operators: `AND`, `OR` - Example: - `sleep.interval.civil_end_time >= "2023-11-24" AND sleep.interval.civil_end_time < "2023-11-25"` Data points in the response will be ordered by the interval start time in descending order. */
  filter?: string;
  /** Required. Parent data type of the Data Point collection. Format: `users/me/dataTypes/{data_type}`, e.g.: - `users/me/dataTypes/steps` - `users/me/dataTypes/weight` For a list of the supported data types see the DataPoint data union field. */
  parent: string;
  /** Optional. The maximum number of data points to return. If unspecified, at most 1440 data points will be returned. The maximum page size is 10000; values above that will be truncated accordingly. For `exercise` and `sleep` the default page size is 25. The maximum page size for `exercise` and `sleep` is 25. */
  pageSize?: number;
  /** Optional. The `next_page_token` from a previous request, if any. */
  pageToken?: string;
}

export const ListUsersDataTypesDataPointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v4/{parent}/dataPoints" }),
    svc,
  ) as unknown as Schema.Schema<ListUsersDataTypesDataPointsRequest>;

export type ListUsersDataTypesDataPointsResponse = ListDataPointsResponse;
export const ListUsersDataTypesDataPointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDataPointsResponse;

export type ListUsersDataTypesDataPointsError = DefaultErrors;

/** Query user health and fitness data points. */
export const listUsersDataTypesDataPoints: API.PaginatedOperationMethod<
  ListUsersDataTypesDataPointsRequest,
  ListUsersDataTypesDataPointsResponse,
  ListUsersDataTypesDataPointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListUsersDataTypesDataPointsRequest,
  output: ListUsersDataTypesDataPointsResponse,
  errors: [],
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
      path: "v4/{parent}/dataPoints:dailyRollUp",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DailyRollUpUsersDataTypesDataPointsRequest>;

export type DailyRollUpUsersDataTypesDataPointsResponse =
  DailyRollUpDataPointsResponse;
export const DailyRollUpUsersDataTypesDataPointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DailyRollUpDataPointsResponse;

export type DailyRollUpUsersDataTypesDataPointsError = DefaultErrors;

/** Roll up data points over civil time intervals for supported data types. */
export const dailyRollUpUsersDataTypesDataPoints: API.OperationMethod<
  DailyRollUpUsersDataTypesDataPointsRequest,
  DailyRollUpUsersDataTypesDataPointsResponse,
  DailyRollUpUsersDataTypesDataPointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DailyRollUpUsersDataTypesDataPointsRequest,
  output: DailyRollUpUsersDataTypesDataPointsResponse,
  errors: [],
}));

export interface ExportExerciseTcxUsersDataTypesDataPointsRequest {
  /** Optional. Indicates whether to include the TCX data points when the GPS data is not available. If not specified, defaults to `false` and partial data will not be included. */
  partialData?: boolean;
  /** Required. The resource name of the exercise data point to export. Format: `users/{user}/dataTypes/exercise/dataPoints/{data_point}` Example: `users/me/dataTypes/exercise/dataPoints/2026443605080188808` The `{user}` is the alias `"me"` currently. Future versions may support user IDs. The `{data_point}` ID maps to the exercise ID, which is a long integer. */
  name: string;
}

export const ExportExerciseTcxUsersDataTypesDataPointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partialData: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("partialData"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v4/{name}:exportExerciseTcx" }),
    svc,
  ) as unknown as Schema.Schema<ExportExerciseTcxUsersDataTypesDataPointsRequest>;

export type ExportExerciseTcxUsersDataTypesDataPointsResponse =
  ExportExerciseTcxResponse;
export const ExportExerciseTcxUsersDataTypesDataPointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ExportExerciseTcxResponse;

export type ExportExerciseTcxUsersDataTypesDataPointsError = DefaultErrors;

/** Exports exercise data in TCX format. Note: While the Authorization section below states that any one of the listed scopes is accepted, this specific method requires the user to provide both one of the `activity_and_fitness` scopes (`normal` or `readonly`) AND one of the `location` scopes (`normal` or `readonly`) in their access token to succeed. */
export const exportExerciseTcxUsersDataTypesDataPoints: API.OperationMethod<
  ExportExerciseTcxUsersDataTypesDataPointsRequest,
  ExportExerciseTcxUsersDataTypesDataPointsResponse,
  ExportExerciseTcxUsersDataTypesDataPointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportExerciseTcxUsersDataTypesDataPointsRequest,
  output: ExportExerciseTcxUsersDataTypesDataPointsResponse,
  errors: [],
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
      path: "v4/{parent}/dataPoints:rollUp",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RollUpUsersDataTypesDataPointsRequest>;

export type RollUpUsersDataTypesDataPointsResponse = RollUpDataPointsResponse;
export const RollUpUsersDataTypesDataPointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RollUpDataPointsResponse;

export type RollUpUsersDataTypesDataPointsError = DefaultErrors;

/** Roll up data points over physical time intervals for supported data types. */
export const rollUpUsersDataTypesDataPoints: API.OperationMethod<
  RollUpUsersDataTypesDataPointsRequest,
  RollUpUsersDataTypesDataPointsResponse,
  RollUpUsersDataTypesDataPointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RollUpUsersDataTypesDataPointsRequest,
  output: RollUpUsersDataTypesDataPointsResponse,
  errors: [],
}));

export interface PatchUsersDataTypesDataPointsRequest {
  /** Identifier. Data point name, only supported for the subset of identifiable data types. For the majority of the data types, individual data points do not need to be identified and this field would be empty. Format: `users/{user}/dataTypes/{data_type}/dataPoints/{data_point}` Example: `users/abcd1234/dataTypes/sleep/dataPoints/a1b2c3d4-e5f6-7890-1234-567890abcdef` The `{user}` ID is a system-generated identifier, as described in Identity.health_user_id. The `{data_type}` ID corresponds to the kebab-case version of the field names in the DataPoint data union field, e.g. `total-calories` for the `total_calories` field. The `{data_point}` ID can be client-provided or system-generated. If client-provided, it must be a string of 4-63 characters, containing only lowercase letters, numbers, and hyphens. */
  name: string;
  /** Request body */
  body?: DataPoint;
}

export const PatchUsersDataTypesDataPointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(DataPoint).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v4/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchUsersDataTypesDataPointsRequest>;

export type PatchUsersDataTypesDataPointsResponse = Operation;
export const PatchUsersDataTypesDataPointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchUsersDataTypesDataPointsError = DefaultErrors;

/** Updates a single identifiable data point. If a data point with the specified `name` is not found, the request will fail. */
export const patchUsersDataTypesDataPoints: API.OperationMethod<
  PatchUsersDataTypesDataPointsRequest,
  PatchUsersDataTypesDataPointsResponse,
  PatchUsersDataTypesDataPointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchUsersDataTypesDataPointsRequest,
  output: PatchUsersDataTypesDataPointsResponse,
  errors: [],
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
      path: "v4/{parent}/dataPoints:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchDeleteUsersDataTypesDataPointsRequest>;

export type BatchDeleteUsersDataTypesDataPointsResponse = Operation;
export const BatchDeleteUsersDataTypesDataPointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type BatchDeleteUsersDataTypesDataPointsError = DefaultErrors;

/** Delete a batch of identifyable data points. */
export const batchDeleteUsersDataTypesDataPoints: API.OperationMethod<
  BatchDeleteUsersDataTypesDataPointsRequest,
  BatchDeleteUsersDataTypesDataPointsResponse,
  BatchDeleteUsersDataTypesDataPointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchDeleteUsersDataTypesDataPointsRequest,
  output: BatchDeleteUsersDataTypesDataPointsResponse,
  errors: [],
}));

export interface ReconcileUsersDataTypesDataPointsRequest {
  /** Optional. The maximum number of data points to return. If unspecified, at most 1440 data points will be returned. The maximum page size is 10000; values above that will be truncated accordingly. For `exercise` and `sleep` the default page size is 25. The maximum page size for `exercise` and `sleep` is 25. */
  pageSize?: number;
  /** Optional. The `next_page_token` from a previous request, if any. */
  pageToken?: string;
  /** Optional. Filter expression based on https://aip.dev/160. A time range, either physical or civil, can be specified. See the ListDataPointsRequest.filter for the supported fields and syntax. */
  filter?: string;
  /** Optional. The data source family name to reconcile. If empty, data points from all data sources will be reconciled. Format: `users/me/dataSourceFamilies/{data_source_family}` The supported values are: - `users/me/dataSourceFamilies/all-sources` - default value - `users/me/dataSourceFamilies/google-wearables` - tracker devices - `users/me/dataSourceFamilies/google-sources` - Google first party sources */
  dataSourceFamily?: string;
  /** Required. Parent data type of the Data Point collection. Format: `users/me/dataTypes/{data_type}`, e.g.: - `users/me/dataTypes/steps` - `users/me/dataTypes/heart-rate` For a list of the supported data types see the DataPoint data union field. */
  parent: string;
}

export const ReconcileUsersDataTypesDataPointsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    dataSourceFamily: Schema.optional(Schema.String).pipe(
      T.HttpQuery("dataSourceFamily"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v4/{parent}/dataPoints:reconcile" }),
    svc,
  ) as unknown as Schema.Schema<ReconcileUsersDataTypesDataPointsRequest>;

export type ReconcileUsersDataTypesDataPointsResponse =
  ReconcileDataPointsResponse;
export const ReconcileUsersDataTypesDataPointsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ReconcileDataPointsResponse;

export type ReconcileUsersDataTypesDataPointsError = DefaultErrors;

/** Reconcile data points from multiple data sources into a single data stream. */
export const reconcileUsersDataTypesDataPoints: API.PaginatedOperationMethod<
  ReconcileUsersDataTypesDataPointsRequest,
  ReconcileUsersDataTypesDataPointsResponse,
  ReconcileUsersDataTypesDataPointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ReconcileUsersDataTypesDataPointsRequest,
  output: ReconcileUsersDataTypesDataPointsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
