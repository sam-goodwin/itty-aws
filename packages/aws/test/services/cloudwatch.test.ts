import { expect } from "@effect/vitest";
import * as Effect from "effect/Effect";
import * as Schedule from "effect/Schedule";
import {
  deleteAlarmMuteRule,
  deleteAlarms,
  deleteDashboards,
  deleteInsightRules,
  describeAlarmHistory,
  describeAlarms,
  describeInsightRules,
  disableAlarmActions,
  disableInsightRules,
  enableAlarmActions,
  getDashboard,
  getMetricData,
  getMetricStatistics,
  getMetricWidgetImage,
  listAlarmMuteRules,
  listDashboards,
  listMetrics,
  listTagsForResource,
  putAlarmMuteRule,
  putCompositeAlarm,
  putDashboard,
  putInsightRule,
  putMetricAlarm,
  putMetricData,
  setAlarmState,
} from "../../src/services/cloudwatch.ts";
import {
  createLogGroup,
  deleteLogGroup,
} from "../../src/services/cloudwatch-logs.ts";
import { test } from "../test.ts";

const isLocalStack = process.env.LOCAL === "true" || process.env.LOCAL === "1";

const deterministicId = (process.env.USER ??
  process.env.LOGNAME ??
  process.env.CI_JOB_ID ??
  process.env.GITHUB_ACTOR ??
  "local")
  .toLowerCase()
  .replace(/[^a-z0-9-]/g, "-")
  .replace(/-+/g, "-")
  .replace(/^-|-$/g, "")
  .slice(0, 24);

const metricNamespace = `distilled-cloudwatch-${deterministicId}`;
const metricName = "FixtureMetric";
const metricDimensionName = "Fixture";
const metricDimensionValue = "CloudWatch";

const dashboardName = `distilled-cw-dashboard-${deterministicId}`;
const metricAlarmName = `distilled-cw-alarm-${deterministicId}`;
const compositeAlarmName = `distilled-cw-composite-${deterministicId}`;
const logGroupName = `distilled-cw-logs-${deterministicId}`;
const insightRuleName = `distilled-cw-insight-${deterministicId}`;
const muteRuleName = `distilled-cw-mute-${deterministicId}`;

const retryEventually = <A, E, R>(
  effect: Effect.Effect<A, E, R>,
  ready: (value: A) => boolean,
) =>
  effect.pipe(
    Effect.filterOrFail(ready, () => new Error("CloudWatch fixture not ready")),
    Effect.retry({
      schedule: Schedule.fixed("10 seconds").pipe(
        Schedule.both(Schedule.recurs(6)),
      ),
    }),
  );

const cleanupDashboards = deleteDashboards({
  DashboardNames: [dashboardName],
}).pipe(Effect.ignore);

const cleanupAlarms = deleteAlarms({
  AlarmNames: [metricAlarmName, compositeAlarmName],
}).pipe(Effect.ignore);

const cleanupInsightRule = deleteInsightRules({
  RuleNames: [insightRuleName],
}).pipe(Effect.ignore);

const cleanupMuteRule = deleteAlarmMuteRule({
  AlarmMuteRuleName: muteRuleName,
}).pipe(
  Effect.catch(() => Effect.void),
  Effect.ignore,
);

const cleanupLogGroup = deleteLogGroup({
  logGroupName: logGroupName,
}).pipe(Effect.ignore);

const createDashboardFixture = putDashboard({
  DashboardName: dashboardName,
  DashboardBody: JSON.stringify({
    widgets: [
      {
        type: "metric",
        width: 12,
        height: 6,
        properties: {
          metrics: [
            [
              metricNamespace,
              metricName,
              metricDimensionName,
              metricDimensionValue,
            ],
          ],
          period: 60,
          stat: "Sum",
          region: "us-east-1",
          title: "Fixture Metric",
        },
      },
    ],
  }),
});

const createMetricAlarmFixture = putMetricAlarm({
  AlarmName: metricAlarmName,
  AlarmDescription: "distilled cloudwatch fixture alarm",
  Namespace: metricNamespace,
  MetricName: metricName,
  Dimensions: [
    {
      Name: metricDimensionName,
      Value: metricDimensionValue,
    },
  ],
  Statistic: "Sum",
  Period: 60,
  EvaluationPeriods: 1,
  Threshold: 1,
  ComparisonOperator: "GreaterThanOrEqualToThreshold",
  TreatMissingData: "notBreaching",
  Tags: [
    { Key: "fixture", Value: "cloudwatch-test" },
    { Key: "suite", Value: deterministicId },
  ],
});

const createCompositeAlarmFixture = putCompositeAlarm({
  AlarmName: compositeAlarmName,
  AlarmDescription: "distilled cloudwatch fixture composite alarm",
  AlarmRule: `ALARM("${metricAlarmName}")`,
  Tags: [
    { Key: "fixture", Value: "cloudwatch-test" },
    { Key: "suite", Value: deterministicId },
  ],
});

const createInsightRuleFixture = Effect.gen(function* () {
  yield* createLogGroup({
    logGroupName: logGroupName,
    tags: {
      fixture: "cloudwatch-test",
      suite: deterministicId,
    },
  }).pipe(
    Effect.catchTag("ResourceAlreadyExistsException", () => Effect.void),
  );

  yield* putInsightRule({
    RuleName: insightRuleName,
    RuleState: "ENABLED",
    RuleDefinition: JSON.stringify({
      Schema: {
        Name: "CloudWatchLogRule",
        Version: 1,
      },
      LogGroupNames: [logGroupName],
      LogFormat: "JSON",
      Contribution: {
        Keys: ["$.fixture"],
        Filters: [],
      },
      AggregateOn: "Count",
    }),
    Tags: [
      { Key: "fixture", Value: "cloudwatch-test" },
      { Key: "suite", Value: deterministicId },
    ],
  });
});

const createMuteRuleFixture = putAlarmMuteRule({
  Name: muteRuleName,
  Description: "distilled cloudwatch fixture mute rule",
  Rule: {
    Schedule: {
      Expression: "at(2099-01-01T00:00)",
      Duration: "PT1H",
    },
  },
  MuteTargets: {
    AlarmNames: [metricAlarmName],
  },
  Tags: [
    { Key: "fixture", Value: "cloudwatch-test" },
    { Key: "suite", Value: deterministicId },
  ],
});

test(
  "cloudwatch metrics APIs decode custom metric flows",
  { timeout: 180_000 },
  Effect.gen(function* () {
    if (isLocalStack) {
      yield* Effect.logInfo(
        "Skipping CloudWatch metrics test: LocalStack coverage is incomplete",
      );
      return;
    }

    const datapointTime = new Date(Date.now() - 2 * 60 * 1000);
    datapointTime.setSeconds(0, 0);

    yield* putMetricData({
      Namespace: metricNamespace,
      MetricData: [
        {
          MetricName: metricName,
          Dimensions: [
            {
              Name: metricDimensionName,
              Value: metricDimensionValue,
            },
          ],
          Timestamp: datapointTime,
          Value: 2,
          Unit: "Count",
        },
      ],
    });

    const startTime = new Date(datapointTime.getTime() - 2 * 60 * 1000);
    const endTime = new Date(datapointTime.getTime() + 2 * 60 * 1000);

    const stats = yield* retryEventually(
      getMetricStatistics({
        Namespace: metricNamespace,
        MetricName: metricName,
        Dimensions: [
          {
            Name: metricDimensionName,
            Value: metricDimensionValue,
          },
        ],
        StartTime: startTime,
        EndTime: endTime,
        Period: 60,
        Statistics: ["Sum"],
      }),
      (result) => (result.Datapoints ?? []).length > 0,
    );

    expect(stats.Datapoints?.length).toBeGreaterThan(0);

    const metricData = yield* retryEventually(
      getMetricData({
        StartTime: startTime,
        EndTime: endTime,
        MetricDataQueries: [
          {
            Id: "fixture",
            MetricStat: {
              Metric: {
                Namespace: metricNamespace,
                MetricName: metricName,
                Dimensions: [
                  {
                    Name: metricDimensionName,
                    Value: metricDimensionValue,
                  },
                ],
              },
              Period: 60,
              Stat: "Sum",
            },
          },
        ],
      }),
      (result) =>
        (((result.MetricDataResults ?? [])[0]?.Values ?? []).length ?? 0) > 0,
    );

    expect(
      (((metricData.MetricDataResults ?? [])[0]?.Values ?? []).length ?? 0) > 0,
    ).toBe(true);

    const metrics = yield* retryEventually(
      listMetrics({
        Namespace: metricNamespace,
        MetricName: metricName,
      }),
      (result) => (result.Metrics ?? []).length > 0,
    );

    expect(metrics.Metrics?.length).toBeGreaterThan(0);

    const widget = yield* getMetricWidgetImage({
      MetricWidget: JSON.stringify({
        metrics: [
          [
            metricNamespace,
            metricName,
            metricDimensionName,
            metricDimensionValue,
          ],
        ],
        period: 60,
        stat: "Sum",
        region: "us-east-1",
      }),
      OutputFormat: "png",
    });

    expect(widget.MetricWidgetImage).toBeDefined();
    expect(widget.MetricWidgetImage?.length).toBeGreaterThan(0);
  }),
);

test(
  "cloudwatch dashboard and alarm APIs decode created resources",
  { timeout: 180_000 },
  Effect.gen(function* () {
    if (isLocalStack) {
      yield* Effect.logInfo(
        "Skipping CloudWatch dashboard/alarm test: LocalStack coverage is incomplete",
      );
      return;
    }

    yield* createDashboardFixture;
    yield* createMetricAlarmFixture;
    yield* createCompositeAlarmFixture;

    const dashboard = yield* getDashboard({
      DashboardName: dashboardName,
    });

    expect(dashboard.DashboardBody).toContain("Fixture Metric");

    const dashboards = yield* listDashboards({
      DashboardNamePrefix: dashboardName,
    });

    expect(
      dashboards.DashboardEntries?.some(
        (entry) => entry.DashboardName === dashboardName,
      ),
    ).toBe(true);

    const alarms = yield* retryEventually(
      describeAlarms({
        AlarmNames: [metricAlarmName, compositeAlarmName],
        AlarmTypes: ["MetricAlarm", "CompositeAlarm"],
      }),
      (result) =>
        (result.MetricAlarms ?? []).length > 0 &&
        (result.CompositeAlarms ?? []).length > 0,
    );

    const metricAlarm = alarms.MetricAlarms?.find(
      (alarm) => alarm.AlarmName === metricAlarmName,
    );
    const compositeAlarm = alarms.CompositeAlarms?.find(
      (alarm) => alarm.AlarmName === compositeAlarmName,
    );

    expect(metricAlarm).toBeDefined();
    expect(compositeAlarm).toBeDefined();
    expect(metricAlarm?.AlarmArn).toBeDefined();

    yield* disableAlarmActions({
      AlarmNames: [metricAlarmName],
    });

    yield* enableAlarmActions({
      AlarmNames: [metricAlarmName],
    });

    yield* setAlarmState({
      AlarmName: metricAlarmName,
      StateValue: "ALARM",
      StateReason: "distilled cloudwatch test",
    });

    const history = yield* retryEventually(
      describeAlarmHistory({
        AlarmName: metricAlarmName,
      }),
      (result) => (result.AlarmHistoryItems ?? []).length > 0,
    );

    expect(history.AlarmHistoryItems).toBeDefined();

    const tags = yield* listTagsForResource({
      ResourceARN: metricAlarm?.AlarmArn,
    });

    expect(tags.Tags?.some((tag) => tag.Key === "fixture")).toBe(true);
    expect(tags.Tags?.some((tag) => tag.Key === "suite")).toBe(true);
  }).pipe(Effect.ensuring(cleanupDashboards), Effect.ensuring(cleanupAlarms)),
);

test(
  "cloudwatch insight rule and mute rule APIs decode created resources",
  { timeout: 180_000 },
  Effect.gen(function* () {
    if (isLocalStack) {
      yield* Effect.logInfo(
        "Skipping CloudWatch insight/mute test: LocalStack coverage is incomplete",
      );
      return;
    }

    yield* createMetricAlarmFixture;
    yield* createInsightRuleFixture;
    yield* createMuteRuleFixture;

    const insightRules = yield* retryEventually(
      describeInsightRules({}),
      (result) =>
        (result.InsightRules ?? []).some((rule) => rule.Name === insightRuleName),
    );

    expect(
      insightRules.InsightRules?.some((rule) => rule.Name === insightRuleName),
    ).toBe(true);

    const muteRules = yield* retryEventually(
      listAlarmMuteRules({
        AlarmName: metricAlarmName,
      }),
      (result) => (result.AlarmMuteRuleSummaries ?? []).length > 0,
    );

    expect(
      muteRules.AlarmMuteRuleSummaries?.some((rule) =>
        rule.AlarmMuteRuleArn?.endsWith(`:${muteRuleName}`),
      ),
    ).toBe(true);

    const disableResult = yield* disableInsightRules({
      RuleNames: [insightRuleName],
    });

    expect(disableResult.Failures ?? []).toHaveLength(0);
  }).pipe(
    Effect.ensuring(cleanupInsightRule),
    Effect.ensuring(cleanupMuteRule),
    Effect.ensuring(cleanupLogGroup),
    Effect.ensuring(cleanupAlarms),
  ),
);
