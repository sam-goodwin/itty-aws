/**
 * Cloudflare ALERTING API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service alerting
 */

import * as Schema from "@distilled.cloud/core/schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors, InternalServerError } from "../errors.ts";

// =============================================================================
// Errors
// =============================================================================

export class FiltersRequired extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<FiltersRequired>()("FiltersRequired", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 17103 }],
) {}

T.applyErrorMatchers(InternalServerError, [{ code: 15000 }]);

export class InvalidAlertType extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidAlertType>()("InvalidAlertType", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 17004 }],
) {}

export class InvalidRoute extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidRoute>()("InvalidRoute", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7003 }],
) {}

export class InvalidSilence extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidSilence>()("InvalidSilence", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 0, message: { includes: "invalid silence" } }],
) {}

export class InvalidWebhookId extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidWebhookId>()("InvalidWebhookId", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 0, message: { includes: "invalid Webhook ID" } }],
) {}

export class MechanismRequired extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<MechanismRequired>()("MechanismRequired", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 17102 }],
) {}

export class PolicyNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<PolicyNotFound>()("PolicyNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 0, message: { includes: "Policy not found" } }],
) {}

export class SilenceAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SilenceAlreadyExists>()("SilenceAlreadyExists", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 15000 }],
) {}

export class SilenceNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SilenceNotFound>()("SilenceNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 0, message: { includes: "silence not found" } }],
) {}

export class WebhookNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<WebhookNotFound>()("WebhookNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 0, message: { includes: "Webhook not found" } }],
) {}

export class WebhookTestFailed extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<WebhookTestFailed>()("WebhookTestFailed", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 0, message: { includes: "Webhook test failed" } }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface GetDestinationPagerdutyResponseResult {
  /** UUID */
  id?: string | null;
  /** The name of the pagerduty service. */
  name?: string | null;
}
const GetDestinationPagerdutyResponseResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<GetDestinationPagerdutyResponseResult>;

interface Error2 {
  message: string;
  code?: number | null;
}
const Error2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    message: Schema.String,
    code: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<Error2>;

interface ListDestinationWebhooksResponseResult {
  /** The unique identifier of a webhook */
  id?: string | null;
  /** Timestamp of when the webhook destination was created. */
  createdAt?: string | null;
  /** Timestamp of the last time an attempt to dispatch a notification to this webhook failed. */
  lastFailure?: string | null;
  /** Timestamp of the last time Cloudflare was able to successfully dispatch a notification using this webhook. */
  lastSuccess?: string | null;
  /** The name of the webhook destination. This will be included in the request body when you receive a webhook notification. */
  name?: string | null;
  /** Type of webhook endpoint. */
  type?:
    | "datadog"
    | "discord"
    | "feishu"
    | "gchat"
    | "generic"
    | "opsgenie"
    | "slack"
    | "splunk"
    | (string & {})
    | null;
  /** The POST endpoint to call when dispatching a notification. */
  url?: string | null;
}
const ListDestinationWebhooksResponseResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      lastFailure: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      lastSuccess: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      type: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "datadog",
              "discord",
              "feishu",
              "gchat",
              "generic",
              "opsgenie",
              "slack",
              "splunk",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      url: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        createdAt: "created_at",
        lastFailure: "last_failure",
        lastSuccess: "last_success",
        name: "name",
        type: "type",
        url: "url",
      }),
    ),
  ) as unknown as Schema.Codec<ListDestinationWebhooksResponseResult>;

interface ListHistoriesResponseResult {
  /** UUID */
  id?: string | null;
  /** Message body included in the notification sent. */
  alertBody?: string | null;
  /** Type of notification that has been dispatched. */
  alertType?: string | null;
  /** Description of the notification policy (if present). */
  description?: string | null;
  /** The mechanism to which the notification has been dispatched. */
  mechanism?: string | null;
  /** The type of mechanism to which the notification has been dispatched. This can be email/pagerduty/webhook based on the mechanism configured. */
  mechanismType?: "email" | "pagerduty" | "webhook" | (string & {}) | null;
  /** Name of the policy. */
  name?: string | null;
  /** The unique identifier of a notification policy */
  policyId?: string | null;
  /** Timestamp of when the notification was dispatched in ISO 8601 format. */
  sent?: string | null;
}
const ListHistoriesResponseResult = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      alertBody: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      alertType: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      mechanism: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      mechanismType: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["email", "pagerduty", "webhook"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      policyId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      sent: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        alertBody: "alert_body",
        alertType: "alert_type",
        description: "description",
        mechanism: "mechanism",
        mechanismType: "mechanism_type",
        name: "name",
        policyId: "policy_id",
        sent: "sent",
      }),
    ),
) as unknown as Schema.Codec<ListHistoriesResponseResult>;

interface ListHistoriesResponseResultInfo {
  count?: number | null;
  page?: number | null;
  perPage?: number | null;
  totalCount?: number | null;
}
const ListHistoriesResponseResultInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      perPage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      totalCount: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        count: "count",
        page: "page",
        perPage: "per_page",
        totalCount: "total_count",
      }),
    ),
  ) as unknown as Schema.Codec<ListHistoriesResponseResultInfo>;

interface PolicyFilter {
  /** Usage depends on specific alert type */
  actions?: string[] | null;
  /** Used for configuring radar_notification */
  affectedAsns?: string[] | null;
  /** Used for configuring incident_alert */
  affectedComponents?: string[] | null;
  /** Used for configuring radar_notification */
  affectedLocations?: string[] | null;
  /** Used for configuring maintenance_event_notification */
  airportCode?: string[] | null;
  /** Usage depends on specific alert type */
  alertTriggerPreferences?: string[] | null;
  /** Usage depends on specific alert type */
  alertTriggerPreferencesValue?: string[] | null;
  /** Used for configuring load_balancing_pool_enablement_alert */
  enabled?: string[] | null;
  /** Used for configuring pages_event_alert */
  environment?: string[] | null;
  /** Used for configuring pages_event_alert */
  event?: string[] | null;
  /** Used for configuring load_balancing_health_alert */
  eventSource?: string[] | null;
  /** Usage depends on specific alert type */
  eventType?: string[] | null;
  /** Usage depends on specific alert type */
  groupBy?: string[] | null;
  /** Used for configuring health_check_status_notification */
  healthCheckId?: string[] | null;
  /** Used for configuring incident_alert */
  incidentImpact?:
    | (
        | "INCIDENT_IMPACT_NONE"
        | "INCIDENT_IMPACT_MINOR"
        | "INCIDENT_IMPACT_MAJOR"
        | "INCIDENT_IMPACT_CRITICAL"
        | (string & {})
      )[]
    | null;
  /** Used for configuring stream_live_notifications */
  inputId?: string[] | null;
  /** Used for configuring security_insights_alert */
  insightClass?: string[] | null;
  /** Used for configuring billing_usage_alert */
  limit?: string[] | null;
  /** Used for configuring logo_match_alert */
  logoTag?: string[] | null;
  /** Used for configuring advanced_ddos_attack_l4_alert */
  megabitsPerSecond?: string[] | null;
  /** Used for configuring load_balancing_health_alert */
  newHealth?: string[] | null;
  /** Used for configuring tunnel_health_event */
  newStatus?: string[] | null;
  /** Used for configuring advanced_ddos_attack_l4_alert */
  packetsPerSecond?: string[] | null;
  /** Usage depends on specific alert type */
  poolId?: string[] | null;
  /** Usage depends on specific alert type */
  popNames?: string[] | null;
  /** Used for configuring billing_usage_alert */
  product?: string[] | null;
  /** Used for configuring pages_event_alert */
  projectId?: string[] | null;
  /** Used for configuring advanced_ddos_attack_l4_alert */
  protocol?: string[] | null;
  /** Usage depends on specific alert type */
  queryTag?: string[] | null;
  /** Used for configuring advanced_ddos_attack_l7_alert */
  requestsPerSecond?: string[] | null;
  /** Usage depends on specific alert type */
  selectors?: string[] | null;
  /** Used for configuring clickhouse_alert_fw_ent_anomaly */
  services?: string[] | null;
  /** Usage depends on specific alert type */
  slo?: string[] | null;
  /** Used for configuring health_check_status_notification */
  status?: string[] | null;
  /** Used for configuring advanced_ddos_attack_l7_alert */
  targetHostname?: string[] | null;
  /** Used for configuring advanced_ddos_attack_l4_alert */
  targetIp?: string[] | null;
  /** Used for configuring advanced_ddos_attack_l7_alert */
  targetZoneName?: string[] | null;
  /** Used for configuring traffic_anomalies_alert */
  trafficExclusions?: "security_events"[] | null;
  /** Used for configuring tunnel_health_event */
  tunnelId?: string[] | null;
  /** Usage depends on specific alert type */
  tunnelName?: string[] | null;
  /** Usage depends on specific alert type */
  type?: string[] | null;
  /** Usage depends on specific alert type */
  where?: string[] | null;
  /** Usage depends on specific alert type */
  zones?: string[] | null;
}
const PolicyFilter = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    actions: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    affectedAsns: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    affectedComponents: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    affectedLocations: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    airportCode: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    alertTriggerPreferences: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    alertTriggerPreferencesValue: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    enabled: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    environment: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    event: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    eventSource: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    eventType: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    groupBy: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    healthCheckId: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    incidentImpact: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Union([
            Schema.Literals([
              "INCIDENT_IMPACT_NONE",
              "INCIDENT_IMPACT_MINOR",
              "INCIDENT_IMPACT_MAJOR",
              "INCIDENT_IMPACT_CRITICAL",
            ]),
            Schema.String,
          ]),
        ),
        Schema.Null,
      ]),
    ),
    inputId: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    insightClass: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    limit: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    logoTag: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    megabitsPerSecond: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    newHealth: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    newStatus: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    packetsPerSecond: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    poolId: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    popNames: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    product: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    projectId: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    protocol: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    queryTag: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    requestsPerSecond: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    selectors: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    services: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    slo: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    status: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    targetHostname: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    targetIp: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    targetZoneName: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    trafficExclusions: Schema.optional(
      Schema.Union([
        Schema.Array(Schema.Literal("security_events")),
        Schema.Null,
      ]),
    ),
    tunnelId: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    tunnelName: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    type: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    where: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    zones: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      actions: "actions",
      affectedAsns: "affected_asns",
      affectedComponents: "affected_components",
      affectedLocations: "affected_locations",
      airportCode: "airport_code",
      alertTriggerPreferences: "alert_trigger_preferences",
      alertTriggerPreferencesValue: "alert_trigger_preferences_value",
      enabled: "enabled",
      environment: "environment",
      event: "event",
      eventSource: "event_source",
      eventType: "event_type",
      groupBy: "group_by",
      healthCheckId: "health_check_id",
      incidentImpact: "incident_impact",
      inputId: "input_id",
      insightClass: "insight_class",
      limit: "limit",
      logoTag: "logo_tag",
      megabitsPerSecond: "megabits_per_second",
      newHealth: "new_health",
      newStatus: "new_status",
      packetsPerSecond: "packets_per_second",
      poolId: "pool_id",
      popNames: "pop_names",
      product: "product",
      projectId: "project_id",
      protocol: "protocol",
      queryTag: "query_tag",
      requestsPerSecond: "requests_per_second",
      selectors: "selectors",
      services: "services",
      slo: "slo",
      status: "status",
      targetHostname: "target_hostname",
      targetIp: "target_ip",
      targetZoneName: "target_zone_name",
      trafficExclusions: "traffic_exclusions",
      tunnelId: "tunnel_id",
      tunnelName: "tunnel_name",
      type: "type",
      where: "where",
      zones: "zones",
    }),
  ),
) as unknown as Schema.Codec<PolicyFilter>;

interface Email {
  /** The email address */
  id?: string | null;
}
const Email = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Email>;

interface Mechanism {
  email?: { id?: string | null }[] | null;
  pagerduty?: { id?: string | null }[] | null;
  webhooks?: { id?: string | null }[] | null;
}
const Mechanism = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    email: Schema.optional(Schema.Union([Schema.Array(Email), Schema.Null])),
    pagerduty: Schema.optional(
      Schema.Union([Schema.Array(Email), Schema.Null]),
    ),
    webhooks: Schema.optional(Schema.Union([Schema.Array(Email), Schema.Null])),
  }),
) as unknown as Schema.Codec<Mechanism>;

interface ListPoliciesResponseResult {
  /** The unique identifier of a notification policy */
  id?: string | null;
  /** Optional specification of how often to re-alert from the same incident, not support on all alert types. */
  alertInterval?: string | null;
  /** Refers to which event will trigger a Notification dispatch. You can use the endpoint to get available alert types which then will give you a list of possible values. */
  alertType?:
    | "abuse_report_alert"
    | "access_custom_certificate_expiration_type"
    | "advanced_ddos_attack_l4_alert"
    | "advanced_ddos_attack_l7_alert"
    | "advanced_http_alert_error"
    | "bgp_hijack_notification"
    | "billing_usage_alert"
    | "block_notification_block_removed"
    | "block_notification_new_block"
    | "block_notification_review_rejected"
    | "bot_traffic_basic_alert"
    | "brand_protection_alert"
    | "brand_protection_digest"
    | "clickhouse_alert_fw_anomaly"
    | "clickhouse_alert_fw_ent_anomaly"
    | "cloudforce_one_request_notification"
    | "cni_maintenance_notification"
    | "custom_analytics"
    | "custom_bot_detection_alert"
    | "custom_ssl_certificate_event_type"
    | "dedicated_ssl_certificate_event_type"
    | "device_connectivity_anomaly_alert"
    | "dos_attack_l4"
    | "dos_attack_l7"
    | "expiring_service_token_alert"
    | "failing_logpush_job_disabled_alert"
    | "fbm_auto_advertisement"
    | "fbm_dosd_attack"
    | "fbm_volumetric_attack"
    | "health_check_status_notification"
    | "hostname_aop_custom_certificate_expiration_type"
    | "http_alert_edge_error"
    | "http_alert_origin_error"
    | "image_notification"
    | "image_resizing_notification"
    | "incident_alert"
    | "load_balancing_health_alert"
    | "load_balancing_pool_enablement_alert"
    | "logo_match_alert"
    | "magic_tunnel_health_check_event"
    | "magic_wan_tunnel_health"
    | "maintenance_event_notification"
    | "mtls_certificate_store_certificate_expiration_type"
    | "pages_event_alert"
    | "radar_notification"
    | "real_origin_monitoring"
    | "scriptmonitor_alert_new_code_change_detections"
    | "scriptmonitor_alert_new_hosts"
    | "scriptmonitor_alert_new_malicious_hosts"
    | "scriptmonitor_alert_new_malicious_scripts"
    | "scriptmonitor_alert_new_malicious_url"
    | "scriptmonitor_alert_new_max_length_resource_url"
    | "scriptmonitor_alert_new_resources"
    | "secondary_dns_all_primaries_failing"
    | "secondary_dns_primaries_failing"
    | "secondary_dns_warning"
    | "secondary_dns_zone_successfully_updated"
    | "secondary_dns_zone_validation_warning"
    | "security_insights_alert"
    | "sentinel_alert"
    | "stream_live_notifications"
    | "synthetic_test_latency_alert"
    | "synthetic_test_low_availability_alert"
    | "traffic_anomalies_alert"
    | "tunnel_health_event"
    | "tunnel_update_event"
    | "universal_ssl_event_type"
    | "web_analytics_metrics_update"
    | "zone_aop_custom_certificate_expiration_type"
    | (string & {})
    | null;
  created?: string | null;
  /** Optional description for the Notification policy. */
  description?: string | null;
  /** Whether or not the Notification policy is enabled. */
  enabled?: boolean | null;
  /** Optional filters that allow you to be alerted only on a subset of events for that alert type based on some criteria. This is only available for select alert types. See alert type documentation for mor */
  filters?: {
    actions?: string[] | null;
    affectedAsns?: string[] | null;
    affectedComponents?: string[] | null;
    affectedLocations?: string[] | null;
    airportCode?: string[] | null;
    alertTriggerPreferences?: string[] | null;
    alertTriggerPreferencesValue?: string[] | null;
    enabled?: string[] | null;
    environment?: string[] | null;
    event?: string[] | null;
    eventSource?: string[] | null;
    eventType?: string[] | null;
    groupBy?: string[] | null;
    healthCheckId?: string[] | null;
    incidentImpact?:
      | (
          | "INCIDENT_IMPACT_NONE"
          | "INCIDENT_IMPACT_MINOR"
          | "INCIDENT_IMPACT_MAJOR"
          | "INCIDENT_IMPACT_CRITICAL"
          | (string & {})
        )[]
      | null;
    inputId?: string[] | null;
    insightClass?: string[] | null;
    limit?: string[] | null;
    logoTag?: string[] | null;
    megabitsPerSecond?: string[] | null;
    newHealth?: string[] | null;
    newStatus?: string[] | null;
    packetsPerSecond?: string[] | null;
    poolId?: string[] | null;
    popNames?: string[] | null;
    product?: string[] | null;
    projectId?: string[] | null;
    protocol?: string[] | null;
    queryTag?: string[] | null;
    requestsPerSecond?: string[] | null;
    selectors?: string[] | null;
    services?: string[] | null;
    slo?: string[] | null;
    status?: string[] | null;
    targetHostname?: string[] | null;
    targetIp?: string[] | null;
    targetZoneName?: string[] | null;
    trafficExclusions?: "security_events"[] | null;
    tunnelId?: string[] | null;
    tunnelName?: string[] | null;
    type?: string[] | null;
    where?: string[] | null;
    zones?: string[] | null;
  } | null;
  /** List of IDs that will be used when dispatching a notification. IDs for email type will be the email address. */
  mechanisms?: {
    email?: { id?: string | null }[] | null;
    pagerduty?: { id?: string | null }[] | null;
    webhooks?: { id?: string | null }[] | null;
  } | null;
  modified?: string | null;
  /** Name of the policy. */
  name?: string | null;
}
const ListPoliciesResponseResult = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      alertInterval: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      alertType: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "abuse_report_alert",
              "access_custom_certificate_expiration_type",
              "advanced_ddos_attack_l4_alert",
              "advanced_ddos_attack_l7_alert",
              "advanced_http_alert_error",
              "bgp_hijack_notification",
              "billing_usage_alert",
              "block_notification_block_removed",
              "block_notification_new_block",
              "block_notification_review_rejected",
              "bot_traffic_basic_alert",
              "brand_protection_alert",
              "brand_protection_digest",
              "clickhouse_alert_fw_anomaly",
              "clickhouse_alert_fw_ent_anomaly",
              "cloudforce_one_request_notification",
              "cni_maintenance_notification",
              "custom_analytics",
              "custom_bot_detection_alert",
              "custom_ssl_certificate_event_type",
              "dedicated_ssl_certificate_event_type",
              "device_connectivity_anomaly_alert",
              "dos_attack_l4",
              "dos_attack_l7",
              "expiring_service_token_alert",
              "failing_logpush_job_disabled_alert",
              "fbm_auto_advertisement",
              "fbm_dosd_attack",
              "fbm_volumetric_attack",
              "health_check_status_notification",
              "hostname_aop_custom_certificate_expiration_type",
              "http_alert_edge_error",
              "http_alert_origin_error",
              "image_notification",
              "image_resizing_notification",
              "incident_alert",
              "load_balancing_health_alert",
              "load_balancing_pool_enablement_alert",
              "logo_match_alert",
              "magic_tunnel_health_check_event",
              "magic_wan_tunnel_health",
              "maintenance_event_notification",
              "mtls_certificate_store_certificate_expiration_type",
              "pages_event_alert",
              "radar_notification",
              "real_origin_monitoring",
              "scriptmonitor_alert_new_code_change_detections",
              "scriptmonitor_alert_new_hosts",
              "scriptmonitor_alert_new_malicious_hosts",
              "scriptmonitor_alert_new_malicious_scripts",
              "scriptmonitor_alert_new_malicious_url",
              "scriptmonitor_alert_new_max_length_resource_url",
              "scriptmonitor_alert_new_resources",
              "secondary_dns_all_primaries_failing",
              "secondary_dns_primaries_failing",
              "secondary_dns_warning",
              "secondary_dns_zone_successfully_updated",
              "secondary_dns_zone_validation_warning",
              "security_insights_alert",
              "sentinel_alert",
              "stream_live_notifications",
              "synthetic_test_latency_alert",
              "synthetic_test_low_availability_alert",
              "traffic_anomalies_alert",
              "tunnel_health_event",
              "tunnel_update_event",
              "universal_ssl_event_type",
              "web_analytics_metrics_update",
              "zone_aop_custom_certificate_expiration_type",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      created: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      filters: Schema.optional(Schema.Union([PolicyFilter, Schema.Null])),
      mechanisms: Schema.optional(Schema.Union([Mechanism, Schema.Null])),
      modified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        alertInterval: "alert_interval",
        alertType: "alert_type",
        created: "created",
        description: "description",
        enabled: "enabled",
        filters: "filters",
        mechanisms: "mechanisms",
        modified: "modified",
        name: "name",
      }),
    ),
) as unknown as Schema.Codec<ListPoliciesResponseResult>;

interface ListSilencesResponseResult {
  /** Silence ID */
  id?: string | null;
  /** When the silence was created. */
  createdAt?: string | null;
  /** When the silence ends. */
  endTime?: string | null;
  /** The unique identifier of a notification policy */
  policyId?: string | null;
  /** When the silence starts. */
  startTime?: string | null;
  /** When the silence was modified. */
  updatedAt?: string | null;
}
const ListSilencesResponseResult = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      endTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      policyId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      startTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      updatedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        createdAt: "created_at",
        endTime: "end_time",
        policyId: "policy_id",
        startTime: "start_time",
        updatedAt: "updated_at",
      }),
    ),
) as unknown as Schema.Codec<ListSilencesResponseResult>;

interface Body {
  /** When the silence ends. */
  endTime?: string | null;
  /** The unique identifier of a notification policy */
  policyId?: string | null;
  /** When the silence starts. */
  startTime?: string | null;
}
const Body = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    endTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    policyId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    startTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      endTime: "end_time",
      policyId: "policy_id",
      startTime: "start_time",
    }),
  ),
) as unknown as Schema.Codec<Body>;

interface Body2 {
  /** Silence ID */
  id?: string | null;
  /** When the silence ends. */
  endTime?: string | null;
  /** When the silence starts. */
  startTime?: string | null;
}
const Body2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    endTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    startTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      endTime: "end_time",
      startTime: "start_time",
    }),
  ),
) as unknown as Schema.Codec<Body2>;

// =============================================================================
// AvailableAlert
// =============================================================================

export interface ListAvailableAlertsRequest {
  /** The account id */
  accountId: string;
}

export const ListAvailableAlertsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/alerting/v3/available_alerts",
      }),
    ),
  ) as unknown as Schema.Codec<ListAvailableAlertsRequest>;

export type ListAvailableAlertsResponse = Record<string, unknown>;

export const ListAvailableAlertsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Record(Schema.String, Schema.Unknown).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<ListAvailableAlertsResponse>;

export type ListAvailableAlertsError = DefaultErrors | InvalidRoute;

export const listAvailableAlerts: API.OperationMethod<
  ListAvailableAlertsRequest,
  ListAvailableAlertsResponse,
  ListAvailableAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListAvailableAlertsRequest,
  output: ListAvailableAlertsResponse,
  errors: [InvalidRoute],
}));

// =============================================================================
// DestinationEligible
// =============================================================================

export interface GetDestinationEligibleRequest {
  /** The account id */
  accountId: string;
}

export const GetDestinationEligibleRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/alerting/v3/destinations/eligible",
      }),
    ),
  ) as unknown as Schema.Codec<GetDestinationEligibleRequest>;

export type GetDestinationEligibleResponse = Record<string, unknown>;

export const GetDestinationEligibleResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Record(Schema.String, Schema.Unknown).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetDestinationEligibleResponse>;

export type GetDestinationEligibleError = DefaultErrors | InvalidRoute;

export const getDestinationEligible: API.OperationMethod<
  GetDestinationEligibleRequest,
  GetDestinationEligibleResponse,
  GetDestinationEligibleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDestinationEligibleRequest,
  output: GetDestinationEligibleResponse,
  errors: [InvalidRoute],
}));

// =============================================================================
// DestinationPagerduty
// =============================================================================

export interface GetDestinationPagerdutyRequest {
  /** The account id */
  accountId: string;
}

export const GetDestinationPagerdutyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/alerting/v3/destinations/pagerduty",
      }),
    ),
  ) as unknown as Schema.Codec<GetDestinationPagerdutyRequest>;

export interface GetDestinationPagerdutyResponse {
  result: { id?: string | null; name?: string | null }[];
}

export const GetDestinationPagerdutyResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(GetDestinationPagerdutyResponseResult),
    }),
  ) as unknown as Schema.Codec<GetDestinationPagerdutyResponse>;

export type GetDestinationPagerdutyError = DefaultErrors;

export const getDestinationPagerduty: API.PaginatedOperationMethod<
  GetDestinationPagerdutyRequest,
  GetDestinationPagerdutyResponse,
  GetDestinationPagerdutyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: GetDestinationPagerdutyRequest,
  output: GetDestinationPagerdutyResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateDestinationPagerdutyRequest {
  /** The account id */
  accountId: string;
}

export const CreateDestinationPagerdutyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/alerting/v3/destinations/pagerduty/connect",
      }),
    ),
  ) as unknown as Schema.Codec<CreateDestinationPagerdutyRequest>;

export interface CreateDestinationPagerdutyResponse {
  /** token in form of UUID */
  id?: string | null;
}

export const CreateDestinationPagerdutyResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateDestinationPagerdutyResponse>;

export type CreateDestinationPagerdutyError = DefaultErrors | InvalidRoute;

export const createDestinationPagerduty: API.OperationMethod<
  CreateDestinationPagerdutyRequest,
  CreateDestinationPagerdutyResponse,
  CreateDestinationPagerdutyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateDestinationPagerdutyRequest,
  output: CreateDestinationPagerdutyResponse,
  errors: [InvalidRoute],
}));

export interface DeleteDestinationPagerdutyRequest {
  /** The account id */
  accountId: string;
}

export const DeleteDestinationPagerdutyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/alerting/v3/destinations/pagerduty",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteDestinationPagerdutyRequest>;

export interface DeleteDestinationPagerdutyResponse {
  errors: { message: string; code?: number | null }[];
  messages: { message: string; code?: number | null }[];
  /** Whether the API call was successful */
  success: true;
}

export const DeleteDestinationPagerdutyResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      errors: Schema.Array(Error2),
      messages: Schema.Array(Error2),
      success: Schema.Literal(true),
    }),
  ) as unknown as Schema.Codec<DeleteDestinationPagerdutyResponse>;

export type DeleteDestinationPagerdutyError = DefaultErrors | InvalidRoute;

export const deleteDestinationPagerduty: API.OperationMethod<
  DeleteDestinationPagerdutyRequest,
  DeleteDestinationPagerdutyResponse,
  DeleteDestinationPagerdutyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteDestinationPagerdutyRequest,
  output: DeleteDestinationPagerdutyResponse,
  errors: [InvalidRoute],
}));

export interface LinkDestinationPagerdutyRequest {
  tokenId: string;
  /** The account id */
  accountId: string;
}

export const LinkDestinationPagerdutyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      tokenId: Schema.String.pipe(T.HttpPath("tokenId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/alerting/v3/destinations/pagerduty/connect/{tokenId}",
      }),
    ),
  ) as unknown as Schema.Codec<LinkDestinationPagerdutyRequest>;

export interface LinkDestinationPagerdutyResponse {
  /** UUID */
  id?: string | null;
}

export const LinkDestinationPagerdutyResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<LinkDestinationPagerdutyResponse>;

export type LinkDestinationPagerdutyError = DefaultErrors | InvalidRoute;

export const linkDestinationPagerduty: API.OperationMethod<
  LinkDestinationPagerdutyRequest,
  LinkDestinationPagerdutyResponse,
  LinkDestinationPagerdutyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LinkDestinationPagerdutyRequest,
  output: LinkDestinationPagerdutyResponse,
  errors: [InvalidRoute],
}));

// =============================================================================
// DestinationWebhook
// =============================================================================

export interface GetDestinationWebhookRequest {
  webhookId: string;
  /** The account id */
  accountId: string;
}

export const GetDestinationWebhookRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      webhookId: Schema.String.pipe(T.HttpPath("webhookId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/alerting/v3/destinations/webhooks/{webhookId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetDestinationWebhookRequest>;

export interface GetDestinationWebhookResponse {
  /** The unique identifier of a webhook */
  id?: string | null;
  /** Timestamp of when the webhook destination was created. */
  createdAt?: string | null;
  /** Timestamp of the last time an attempt to dispatch a notification to this webhook failed. */
  lastFailure?: string | null;
  /** Timestamp of the last time Cloudflare was able to successfully dispatch a notification using this webhook. */
  lastSuccess?: string | null;
  /** The name of the webhook destination. This will be included in the request body when you receive a webhook notification. */
  name?: string | null;
  /** Type of webhook endpoint. */
  type?:
    | "datadog"
    | "discord"
    | "feishu"
    | "gchat"
    | "generic"
    | "opsgenie"
    | "slack"
    | "splunk"
    | (string & {})
    | null;
  /** The POST endpoint to call when dispatching a notification. */
  url?: string | null;
}

export const GetDestinationWebhookResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      lastFailure: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      lastSuccess: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      type: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "datadog",
              "discord",
              "feishu",
              "gchat",
              "generic",
              "opsgenie",
              "slack",
              "splunk",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      url: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          lastFailure: "last_failure",
          lastSuccess: "last_success",
          name: "name",
          type: "type",
          url: "url",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetDestinationWebhookResponse>;

export type GetDestinationWebhookError =
  | DefaultErrors
  | InvalidRoute
  | WebhookNotFound;

export const getDestinationWebhook: API.OperationMethod<
  GetDestinationWebhookRequest,
  GetDestinationWebhookResponse,
  GetDestinationWebhookError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDestinationWebhookRequest,
  output: GetDestinationWebhookResponse,
  errors: [InvalidRoute, WebhookNotFound],
}));

export interface ListDestinationWebhooksRequest {
  /** The account id */
  accountId: string;
}

export const ListDestinationWebhooksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/alerting/v3/destinations/webhooks",
      }),
    ),
  ) as unknown as Schema.Codec<ListDestinationWebhooksRequest>;

export interface ListDestinationWebhooksResponse {
  result: {
    id?: string | null;
    createdAt?: string | null;
    lastFailure?: string | null;
    lastSuccess?: string | null;
    name?: string | null;
    type?:
      | "datadog"
      | "discord"
      | "feishu"
      | "gchat"
      | "generic"
      | "opsgenie"
      | "slack"
      | "splunk"
      | (string & {})
      | null;
    url?: string | null;
  }[];
}

export const ListDestinationWebhooksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListDestinationWebhooksResponseResult),
    }),
  ) as unknown as Schema.Codec<ListDestinationWebhooksResponse>;

export type ListDestinationWebhooksError = DefaultErrors;

export const listDestinationWebhooks: API.PaginatedOperationMethod<
  ListDestinationWebhooksRequest,
  ListDestinationWebhooksResponse,
  ListDestinationWebhooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListDestinationWebhooksRequest,
  output: ListDestinationWebhooksResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateDestinationWebhookRequest {
  /** Path param: The account id */
  accountId: string;
  /** Body param: The name of the webhook destination. This will be included in the request body when you receive a webhook notification. */
  name: string;
  /** Body param: The POST endpoint to call when dispatching a notification. */
  url: string;
  /** Body param: Optional secret that will be passed in the `cf-webhook-auth` header when dispatching generic webhook notifications or formatted for supported destinations. Secrets are not returned in any  */
  secret?: string;
}

export const CreateDestinationWebhookRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.String,
      url: Schema.String,
      secret: Schema.optional(Schema.String),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/alerting/v3/destinations/webhooks",
      }),
    ),
  ) as unknown as Schema.Codec<CreateDestinationWebhookRequest>;

export interface CreateDestinationWebhookResponse {
  /** UUID */
  id?: string | null;
}

export const CreateDestinationWebhookResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateDestinationWebhookResponse>;

export type CreateDestinationWebhookError =
  | DefaultErrors
  | InvalidRoute
  | WebhookTestFailed;

export const createDestinationWebhook: API.OperationMethod<
  CreateDestinationWebhookRequest,
  CreateDestinationWebhookResponse,
  CreateDestinationWebhookError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateDestinationWebhookRequest,
  output: CreateDestinationWebhookResponse,
  errors: [InvalidRoute, WebhookTestFailed],
}));

export interface UpdateDestinationWebhookRequest {
  webhookId: string;
  /** Path param: The account id */
  accountId: string;
  /** Body param: The name of the webhook destination. This will be included in the request body when you receive a webhook notification. */
  name: string;
  /** Body param: The POST endpoint to call when dispatching a notification. */
  url: string;
  /** Body param: Optional secret that will be passed in the `cf-webhook-auth` header when dispatching generic webhook notifications or formatted for supported destinations. Secrets are not returned in any  */
  secret?: string;
}

export const UpdateDestinationWebhookRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      webhookId: Schema.String.pipe(T.HttpPath("webhookId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.String,
      url: Schema.String,
      secret: Schema.optional(Schema.String),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/alerting/v3/destinations/webhooks/{webhookId}",
      }),
    ),
  ) as unknown as Schema.Codec<UpdateDestinationWebhookRequest>;

export interface UpdateDestinationWebhookResponse {
  /** UUID */
  id?: string | null;
}

export const UpdateDestinationWebhookResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdateDestinationWebhookResponse>;

export type UpdateDestinationWebhookError =
  | DefaultErrors
  | InvalidRoute
  | InvalidWebhookId;

export const updateDestinationWebhook: API.OperationMethod<
  UpdateDestinationWebhookRequest,
  UpdateDestinationWebhookResponse,
  UpdateDestinationWebhookError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateDestinationWebhookRequest,
  output: UpdateDestinationWebhookResponse,
  errors: [InvalidRoute, InvalidWebhookId],
}));

export interface DeleteDestinationWebhookRequest {
  webhookId: string;
  /** The account id */
  accountId: string;
}

export const DeleteDestinationWebhookRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      webhookId: Schema.String.pipe(T.HttpPath("webhookId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/alerting/v3/destinations/webhooks/{webhookId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteDestinationWebhookRequest>;

export interface DeleteDestinationWebhookResponse {
  errors: { message: string; code?: number | null }[];
  messages: { message: string; code?: number | null }[];
  /** Whether the API call was successful */
  success: true;
}

export const DeleteDestinationWebhookResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      errors: Schema.Array(Error2),
      messages: Schema.Array(Error2),
      success: Schema.Literal(true),
    }),
  ) as unknown as Schema.Codec<DeleteDestinationWebhookResponse>;

export type DeleteDestinationWebhookError =
  | DefaultErrors
  | InvalidRoute
  | InternalServerError;

export const deleteDestinationWebhook: API.OperationMethod<
  DeleteDestinationWebhookRequest,
  DeleteDestinationWebhookResponse,
  DeleteDestinationWebhookError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteDestinationWebhookRequest,
  output: DeleteDestinationWebhookResponse,
  errors: [InvalidRoute, InternalServerError],
}));

// =============================================================================
// History
// =============================================================================

export interface ListHistoriesRequest {
  /** Path param: The account id */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Limit the returned results to history records older than the specified date. This must be a timestamp that conforms to RFC3339. */
  before?: string;
  /** Query param: Limit the returned results to history records newer than the specified date. This must be a timestamp that conforms to RFC3339. */
  since?: string;
}

export const ListHistoriesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      before: Schema.optional(Schema.String).pipe(T.HttpQuery("before")),
      since: Schema.optional(Schema.String).pipe(T.HttpQuery("since")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/alerting/v3/history",
      }),
    ),
) as unknown as Schema.Codec<ListHistoriesRequest>;

export interface ListHistoriesResponse {
  result: {
    id?: string | null;
    alertBody?: string | null;
    alertType?: string | null;
    description?: string | null;
    mechanism?: string | null;
    mechanismType?: "email" | "pagerduty" | "webhook" | (string & {}) | null;
    name?: string | null;
    policyId?: string | null;
    sent?: string | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListHistoriesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(ListHistoriesResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListHistoriesResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListHistoriesResponse>;

export type ListHistoriesError = DefaultErrors;

export const listHistories: API.PaginatedOperationMethod<
  ListHistoriesRequest,
  ListHistoriesResponse,
  ListHistoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListHistoriesRequest,
  output: ListHistoriesResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

// =============================================================================
// Policy
// =============================================================================

export interface GetPolicyRequest {
  policyId: string;
  /** The account id */
  accountId: string;
}

export const GetPolicyRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    policyId: Schema.String.pipe(T.HttpPath("policyId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/alerting/v3/policies/{policyId}",
    }),
  ),
) as unknown as Schema.Codec<GetPolicyRequest>;

export interface GetPolicyResponse {
  /** The unique identifier of a notification policy */
  id?: string | null;
  /** Optional specification of how often to re-alert from the same incident, not support on all alert types. */
  alertInterval?: string | null;
  /** Refers to which event will trigger a Notification dispatch. You can use the endpoint to get available alert types which then will give you a list of possible values. */
  alertType?:
    | "abuse_report_alert"
    | "access_custom_certificate_expiration_type"
    | "advanced_ddos_attack_l4_alert"
    | "advanced_ddos_attack_l7_alert"
    | "advanced_http_alert_error"
    | "bgp_hijack_notification"
    | "billing_usage_alert"
    | "block_notification_block_removed"
    | "block_notification_new_block"
    | "block_notification_review_rejected"
    | "bot_traffic_basic_alert"
    | "brand_protection_alert"
    | "brand_protection_digest"
    | "clickhouse_alert_fw_anomaly"
    | "clickhouse_alert_fw_ent_anomaly"
    | "cloudforce_one_request_notification"
    | "cni_maintenance_notification"
    | "custom_analytics"
    | "custom_bot_detection_alert"
    | "custom_ssl_certificate_event_type"
    | "dedicated_ssl_certificate_event_type"
    | "device_connectivity_anomaly_alert"
    | "dos_attack_l4"
    | "dos_attack_l7"
    | "expiring_service_token_alert"
    | "failing_logpush_job_disabled_alert"
    | "fbm_auto_advertisement"
    | "fbm_dosd_attack"
    | "fbm_volumetric_attack"
    | "health_check_status_notification"
    | "hostname_aop_custom_certificate_expiration_type"
    | "http_alert_edge_error"
    | "http_alert_origin_error"
    | "image_notification"
    | "image_resizing_notification"
    | "incident_alert"
    | "load_balancing_health_alert"
    | "load_balancing_pool_enablement_alert"
    | "logo_match_alert"
    | "magic_tunnel_health_check_event"
    | "magic_wan_tunnel_health"
    | "maintenance_event_notification"
    | "mtls_certificate_store_certificate_expiration_type"
    | "pages_event_alert"
    | "radar_notification"
    | "real_origin_monitoring"
    | "scriptmonitor_alert_new_code_change_detections"
    | "scriptmonitor_alert_new_hosts"
    | "scriptmonitor_alert_new_malicious_hosts"
    | "scriptmonitor_alert_new_malicious_scripts"
    | "scriptmonitor_alert_new_malicious_url"
    | "scriptmonitor_alert_new_max_length_resource_url"
    | "scriptmonitor_alert_new_resources"
    | "secondary_dns_all_primaries_failing"
    | "secondary_dns_primaries_failing"
    | "secondary_dns_warning"
    | "secondary_dns_zone_successfully_updated"
    | "secondary_dns_zone_validation_warning"
    | "security_insights_alert"
    | "sentinel_alert"
    | "stream_live_notifications"
    | "synthetic_test_latency_alert"
    | "synthetic_test_low_availability_alert"
    | "traffic_anomalies_alert"
    | "tunnel_health_event"
    | "tunnel_update_event"
    | "universal_ssl_event_type"
    | "web_analytics_metrics_update"
    | "zone_aop_custom_certificate_expiration_type"
    | (string & {})
    | null;
  created?: string | null;
  /** Optional description for the Notification policy. */
  description?: string | null;
  /** Whether or not the Notification policy is enabled. */
  enabled?: boolean | null;
  /** Optional filters that allow you to be alerted only on a subset of events for that alert type based on some criteria. This is only available for select alert types. See alert type documentation for mor */
  filters?: {
    actions?: string[] | null;
    affectedAsns?: string[] | null;
    affectedComponents?: string[] | null;
    affectedLocations?: string[] | null;
    airportCode?: string[] | null;
    alertTriggerPreferences?: string[] | null;
    alertTriggerPreferencesValue?: string[] | null;
    enabled?: string[] | null;
    environment?: string[] | null;
    event?: string[] | null;
    eventSource?: string[] | null;
    eventType?: string[] | null;
    groupBy?: string[] | null;
    healthCheckId?: string[] | null;
    incidentImpact?:
      | (
          | "INCIDENT_IMPACT_NONE"
          | "INCIDENT_IMPACT_MINOR"
          | "INCIDENT_IMPACT_MAJOR"
          | "INCIDENT_IMPACT_CRITICAL"
          | (string & {})
        )[]
      | null;
    inputId?: string[] | null;
    insightClass?: string[] | null;
    limit?: string[] | null;
    logoTag?: string[] | null;
    megabitsPerSecond?: string[] | null;
    newHealth?: string[] | null;
    newStatus?: string[] | null;
    packetsPerSecond?: string[] | null;
    poolId?: string[] | null;
    popNames?: string[] | null;
    product?: string[] | null;
    projectId?: string[] | null;
    protocol?: string[] | null;
    queryTag?: string[] | null;
    requestsPerSecond?: string[] | null;
    selectors?: string[] | null;
    services?: string[] | null;
    slo?: string[] | null;
    status?: string[] | null;
    targetHostname?: string[] | null;
    targetIp?: string[] | null;
    targetZoneName?: string[] | null;
    trafficExclusions?: "security_events"[] | null;
    tunnelId?: string[] | null;
    tunnelName?: string[] | null;
    type?: string[] | null;
    where?: string[] | null;
    zones?: string[] | null;
  } | null;
  /** List of IDs that will be used when dispatching a notification. IDs for email type will be the email address. */
  mechanisms?: {
    email?: { id?: string | null }[] | null;
    pagerduty?: { id?: string | null }[] | null;
    webhooks?: { id?: string | null }[] | null;
  } | null;
  modified?: string | null;
  /** Name of the policy. */
  name?: string | null;
}

export const GetPolicyResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      alertInterval: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      alertType: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "abuse_report_alert",
              "access_custom_certificate_expiration_type",
              "advanced_ddos_attack_l4_alert",
              "advanced_ddos_attack_l7_alert",
              "advanced_http_alert_error",
              "bgp_hijack_notification",
              "billing_usage_alert",
              "block_notification_block_removed",
              "block_notification_new_block",
              "block_notification_review_rejected",
              "bot_traffic_basic_alert",
              "brand_protection_alert",
              "brand_protection_digest",
              "clickhouse_alert_fw_anomaly",
              "clickhouse_alert_fw_ent_anomaly",
              "cloudforce_one_request_notification",
              "cni_maintenance_notification",
              "custom_analytics",
              "custom_bot_detection_alert",
              "custom_ssl_certificate_event_type",
              "dedicated_ssl_certificate_event_type",
              "device_connectivity_anomaly_alert",
              "dos_attack_l4",
              "dos_attack_l7",
              "expiring_service_token_alert",
              "failing_logpush_job_disabled_alert",
              "fbm_auto_advertisement",
              "fbm_dosd_attack",
              "fbm_volumetric_attack",
              "health_check_status_notification",
              "hostname_aop_custom_certificate_expiration_type",
              "http_alert_edge_error",
              "http_alert_origin_error",
              "image_notification",
              "image_resizing_notification",
              "incident_alert",
              "load_balancing_health_alert",
              "load_balancing_pool_enablement_alert",
              "logo_match_alert",
              "magic_tunnel_health_check_event",
              "magic_wan_tunnel_health",
              "maintenance_event_notification",
              "mtls_certificate_store_certificate_expiration_type",
              "pages_event_alert",
              "radar_notification",
              "real_origin_monitoring",
              "scriptmonitor_alert_new_code_change_detections",
              "scriptmonitor_alert_new_hosts",
              "scriptmonitor_alert_new_malicious_hosts",
              "scriptmonitor_alert_new_malicious_scripts",
              "scriptmonitor_alert_new_malicious_url",
              "scriptmonitor_alert_new_max_length_resource_url",
              "scriptmonitor_alert_new_resources",
              "secondary_dns_all_primaries_failing",
              "secondary_dns_primaries_failing",
              "secondary_dns_warning",
              "secondary_dns_zone_successfully_updated",
              "secondary_dns_zone_validation_warning",
              "security_insights_alert",
              "sentinel_alert",
              "stream_live_notifications",
              "synthetic_test_latency_alert",
              "synthetic_test_low_availability_alert",
              "traffic_anomalies_alert",
              "tunnel_health_event",
              "tunnel_update_event",
              "universal_ssl_event_type",
              "web_analytics_metrics_update",
              "zone_aop_custom_certificate_expiration_type",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      created: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      filters: Schema.optional(Schema.Union([PolicyFilter, Schema.Null])),
      mechanisms: Schema.optional(Schema.Union([Mechanism, Schema.Null])),
      modified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          alertInterval: "alert_interval",
          alertType: "alert_type",
          created: "created",
          description: "description",
          enabled: "enabled",
          filters: "filters",
          mechanisms: "mechanisms",
          modified: "modified",
          name: "name",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetPolicyResponse>;

export type GetPolicyError = DefaultErrors | InvalidRoute | PolicyNotFound;

export const getPolicy: API.OperationMethod<
  GetPolicyRequest,
  GetPolicyResponse,
  GetPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPolicyRequest,
  output: GetPolicyResponse,
  errors: [InvalidRoute, PolicyNotFound],
}));

export interface ListPoliciesRequest {
  /** The account id */
  accountId: string;
}

export const ListPoliciesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/alerting/v3/policies",
      }),
    ),
) as unknown as Schema.Codec<ListPoliciesRequest>;

export interface ListPoliciesResponse {
  result: {
    id?: string | null;
    alertInterval?: string | null;
    alertType?:
      | "abuse_report_alert"
      | "access_custom_certificate_expiration_type"
      | "advanced_ddos_attack_l4_alert"
      | "advanced_ddos_attack_l7_alert"
      | "advanced_http_alert_error"
      | "bgp_hijack_notification"
      | "billing_usage_alert"
      | "block_notification_block_removed"
      | "block_notification_new_block"
      | "block_notification_review_rejected"
      | "bot_traffic_basic_alert"
      | "brand_protection_alert"
      | "brand_protection_digest"
      | "clickhouse_alert_fw_anomaly"
      | "clickhouse_alert_fw_ent_anomaly"
      | "cloudforce_one_request_notification"
      | "cni_maintenance_notification"
      | "custom_analytics"
      | "custom_bot_detection_alert"
      | "custom_ssl_certificate_event_type"
      | "dedicated_ssl_certificate_event_type"
      | "device_connectivity_anomaly_alert"
      | "dos_attack_l4"
      | "dos_attack_l7"
      | "expiring_service_token_alert"
      | "failing_logpush_job_disabled_alert"
      | "fbm_auto_advertisement"
      | "fbm_dosd_attack"
      | "fbm_volumetric_attack"
      | "health_check_status_notification"
      | "hostname_aop_custom_certificate_expiration_type"
      | "http_alert_edge_error"
      | "http_alert_origin_error"
      | "image_notification"
      | "image_resizing_notification"
      | "incident_alert"
      | "load_balancing_health_alert"
      | "load_balancing_pool_enablement_alert"
      | "logo_match_alert"
      | "magic_tunnel_health_check_event"
      | "magic_wan_tunnel_health"
      | "maintenance_event_notification"
      | "mtls_certificate_store_certificate_expiration_type"
      | "pages_event_alert"
      | "radar_notification"
      | "real_origin_monitoring"
      | "scriptmonitor_alert_new_code_change_detections"
      | "scriptmonitor_alert_new_hosts"
      | "scriptmonitor_alert_new_malicious_hosts"
      | "scriptmonitor_alert_new_malicious_scripts"
      | "scriptmonitor_alert_new_malicious_url"
      | "scriptmonitor_alert_new_max_length_resource_url"
      | "scriptmonitor_alert_new_resources"
      | "secondary_dns_all_primaries_failing"
      | "secondary_dns_primaries_failing"
      | "secondary_dns_warning"
      | "secondary_dns_zone_successfully_updated"
      | "secondary_dns_zone_validation_warning"
      | "security_insights_alert"
      | "sentinel_alert"
      | "stream_live_notifications"
      | "synthetic_test_latency_alert"
      | "synthetic_test_low_availability_alert"
      | "traffic_anomalies_alert"
      | "tunnel_health_event"
      | "tunnel_update_event"
      | "universal_ssl_event_type"
      | "web_analytics_metrics_update"
      | "zone_aop_custom_certificate_expiration_type"
      | (string & {})
      | null;
    created?: string | null;
    description?: string | null;
    enabled?: boolean | null;
    filters?: {
      actions?: string[] | null;
      affectedAsns?: string[] | null;
      affectedComponents?: string[] | null;
      affectedLocations?: string[] | null;
      airportCode?: string[] | null;
      alertTriggerPreferences?: string[] | null;
      alertTriggerPreferencesValue?: string[] | null;
      enabled?: string[] | null;
      environment?: string[] | null;
      event?: string[] | null;
      eventSource?: string[] | null;
      eventType?: string[] | null;
      groupBy?: string[] | null;
      healthCheckId?: string[] | null;
      incidentImpact?:
        | (
            | "INCIDENT_IMPACT_NONE"
            | "INCIDENT_IMPACT_MINOR"
            | "INCIDENT_IMPACT_MAJOR"
            | "INCIDENT_IMPACT_CRITICAL"
            | (string & {})
          )[]
        | null;
      inputId?: string[] | null;
      insightClass?: string[] | null;
      limit?: string[] | null;
      logoTag?: string[] | null;
      megabitsPerSecond?: string[] | null;
      newHealth?: string[] | null;
      newStatus?: string[] | null;
      packetsPerSecond?: string[] | null;
      poolId?: string[] | null;
      popNames?: string[] | null;
      product?: string[] | null;
      projectId?: string[] | null;
      protocol?: string[] | null;
      queryTag?: string[] | null;
      requestsPerSecond?: string[] | null;
      selectors?: string[] | null;
      services?: string[] | null;
      slo?: string[] | null;
      status?: string[] | null;
      targetHostname?: string[] | null;
      targetIp?: string[] | null;
      targetZoneName?: string[] | null;
      trafficExclusions?: "security_events"[] | null;
      tunnelId?: string[] | null;
      tunnelName?: string[] | null;
      type?: string[] | null;
      where?: string[] | null;
      zones?: string[] | null;
    } | null;
    mechanisms?: {
      email?: { id?: string | null }[] | null;
      pagerduty?: { id?: string | null }[] | null;
      webhooks?: { id?: string | null }[] | null;
    } | null;
    modified?: string | null;
    name?: string | null;
  }[];
}

export const ListPoliciesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(ListPoliciesResponseResult),
    }),
) as unknown as Schema.Codec<ListPoliciesResponse>;

export type ListPoliciesError = DefaultErrors;

export const listPolicies: API.PaginatedOperationMethod<
  ListPoliciesRequest,
  ListPoliciesResponse,
  ListPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPoliciesRequest,
  output: ListPoliciesResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreatePolicyRequest {
  /** Path param: The account id */
  accountId: string;
  /** Body param: Refers to which event will trigger a Notification dispatch. You can use the endpoint to get available alert types which then will give you a list of possible values. */
  alertType:
    | "abuse_report_alert"
    | "access_custom_certificate_expiration_type"
    | "advanced_ddos_attack_l4_alert"
    | "advanced_ddos_attack_l7_alert"
    | "advanced_http_alert_error"
    | "bgp_hijack_notification"
    | "billing_usage_alert"
    | "block_notification_block_removed"
    | "block_notification_new_block"
    | "block_notification_review_rejected"
    | "bot_traffic_basic_alert"
    | "brand_protection_alert"
    | "brand_protection_digest"
    | "clickhouse_alert_fw_anomaly"
    | "clickhouse_alert_fw_ent_anomaly"
    | "cloudforce_one_request_notification"
    | "cni_maintenance_notification"
    | "custom_analytics"
    | "custom_bot_detection_alert"
    | "custom_ssl_certificate_event_type"
    | "dedicated_ssl_certificate_event_type"
    | "device_connectivity_anomaly_alert"
    | "dos_attack_l4"
    | "dos_attack_l7"
    | "expiring_service_token_alert"
    | "failing_logpush_job_disabled_alert"
    | "fbm_auto_advertisement"
    | "fbm_dosd_attack"
    | "fbm_volumetric_attack"
    | "health_check_status_notification"
    | "hostname_aop_custom_certificate_expiration_type"
    | "http_alert_edge_error"
    | "http_alert_origin_error"
    | "image_notification"
    | "image_resizing_notification"
    | "incident_alert"
    | "load_balancing_health_alert"
    | "load_balancing_pool_enablement_alert"
    | "logo_match_alert"
    | "magic_tunnel_health_check_event"
    | "magic_wan_tunnel_health"
    | "maintenance_event_notification"
    | "mtls_certificate_store_certificate_expiration_type"
    | "pages_event_alert"
    | "radar_notification"
    | "real_origin_monitoring"
    | "scriptmonitor_alert_new_code_change_detections"
    | "scriptmonitor_alert_new_hosts"
    | "scriptmonitor_alert_new_malicious_hosts"
    | "scriptmonitor_alert_new_malicious_scripts"
    | "scriptmonitor_alert_new_malicious_url"
    | "scriptmonitor_alert_new_max_length_resource_url"
    | "scriptmonitor_alert_new_resources"
    | "secondary_dns_all_primaries_failing"
    | "secondary_dns_primaries_failing"
    | "secondary_dns_warning"
    | "secondary_dns_zone_successfully_updated"
    | "secondary_dns_zone_validation_warning"
    | "security_insights_alert"
    | "sentinel_alert"
    | "stream_live_notifications"
    | "synthetic_test_latency_alert"
    | "synthetic_test_low_availability_alert"
    | "traffic_anomalies_alert"
    | "tunnel_health_event"
    | "tunnel_update_event"
    | "universal_ssl_event_type"
    | "web_analytics_metrics_update"
    | "zone_aop_custom_certificate_expiration_type"
    | (string & {});
  /** Body param: Whether or not the Notification policy is enabled. */
  enabled: boolean;
  /** Body param: List of IDs that will be used when dispatching a notification. IDs for email type will be the email address. */
  mechanisms: {
    email?: { id?: string }[];
    pagerduty?: { id?: string }[];
    webhooks?: { id?: string }[];
  };
  /** Body param: Name of the policy. */
  name: string;
  /** Body param: Optional specification of how often to re-alert from the same incident, not support on all alert types. */
  alertInterval?: string;
  /** Body param: Optional description for the Notification policy. */
  description?: string;
  /** Body param: Optional filters that allow you to be alerted only on a subset of events for that alert type based on some criteria. This is only available for select alert types. See alert type documenta */
  filters?: {
    actions?: string[];
    affectedAsns?: string[];
    affectedComponents?: string[];
    affectedLocations?: string[];
    airportCode?: string[];
    alertTriggerPreferences?: string[];
    alertTriggerPreferencesValue?: string[];
    enabled?: string[];
    environment?: string[];
    event?: string[];
    eventSource?: string[];
    eventType?: string[];
    groupBy?: string[];
    healthCheckId?: string[];
    incidentImpact?: (
      | "INCIDENT_IMPACT_NONE"
      | "INCIDENT_IMPACT_MINOR"
      | "INCIDENT_IMPACT_MAJOR"
      | "INCIDENT_IMPACT_CRITICAL"
      | (string & {})
    )[];
    inputId?: string[];
    insightClass?: string[];
    limit?: string[];
    logoTag?: string[];
    megabitsPerSecond?: string[];
    newHealth?: string[];
    newStatus?: string[];
    packetsPerSecond?: string[];
    poolId?: string[];
    popNames?: string[];
    product?: string[];
    projectId?: string[];
    protocol?: string[];
    queryTag?: string[];
    requestsPerSecond?: string[];
    selectors?: string[];
    services?: string[];
    slo?: string[];
    status?: string[];
    targetHostname?: string[];
    targetIp?: string[];
    targetZoneName?: string[];
    trafficExclusions?: "security_events"[];
    tunnelId?: string[];
    tunnelName?: string[];
    type?: string[];
    where?: string[];
    zones?: string[];
  };
}

export const CreatePolicyRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      alertType: Schema.Union([
        Schema.Literals([
          "abuse_report_alert",
          "access_custom_certificate_expiration_type",
          "advanced_ddos_attack_l4_alert",
          "advanced_ddos_attack_l7_alert",
          "advanced_http_alert_error",
          "bgp_hijack_notification",
          "billing_usage_alert",
          "block_notification_block_removed",
          "block_notification_new_block",
          "block_notification_review_rejected",
          "bot_traffic_basic_alert",
          "brand_protection_alert",
          "brand_protection_digest",
          "clickhouse_alert_fw_anomaly",
          "clickhouse_alert_fw_ent_anomaly",
          "cloudforce_one_request_notification",
          "cni_maintenance_notification",
          "custom_analytics",
          "custom_bot_detection_alert",
          "custom_ssl_certificate_event_type",
          "dedicated_ssl_certificate_event_type",
          "device_connectivity_anomaly_alert",
          "dos_attack_l4",
          "dos_attack_l7",
          "expiring_service_token_alert",
          "failing_logpush_job_disabled_alert",
          "fbm_auto_advertisement",
          "fbm_dosd_attack",
          "fbm_volumetric_attack",
          "health_check_status_notification",
          "hostname_aop_custom_certificate_expiration_type",
          "http_alert_edge_error",
          "http_alert_origin_error",
          "image_notification",
          "image_resizing_notification",
          "incident_alert",
          "load_balancing_health_alert",
          "load_balancing_pool_enablement_alert",
          "logo_match_alert",
          "magic_tunnel_health_check_event",
          "magic_wan_tunnel_health",
          "maintenance_event_notification",
          "mtls_certificate_store_certificate_expiration_type",
          "pages_event_alert",
          "radar_notification",
          "real_origin_monitoring",
          "scriptmonitor_alert_new_code_change_detections",
          "scriptmonitor_alert_new_hosts",
          "scriptmonitor_alert_new_malicious_hosts",
          "scriptmonitor_alert_new_malicious_scripts",
          "scriptmonitor_alert_new_malicious_url",
          "scriptmonitor_alert_new_max_length_resource_url",
          "scriptmonitor_alert_new_resources",
          "secondary_dns_all_primaries_failing",
          "secondary_dns_primaries_failing",
          "secondary_dns_warning",
          "secondary_dns_zone_successfully_updated",
          "secondary_dns_zone_validation_warning",
          "security_insights_alert",
          "sentinel_alert",
          "stream_live_notifications",
          "synthetic_test_latency_alert",
          "synthetic_test_low_availability_alert",
          "traffic_anomalies_alert",
          "tunnel_health_event",
          "tunnel_update_event",
          "universal_ssl_event_type",
          "web_analytics_metrics_update",
          "zone_aop_custom_certificate_expiration_type",
        ]),
        Schema.String,
      ]),
      enabled: Schema.Boolean,
      mechanisms: Mechanism,
      name: Schema.String,
      alertInterval: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      filters: Schema.optional(PolicyFilter),
    }).pipe(
      Schema.encodeKeys({
        alertType: "alert_type",
        enabled: "enabled",
        mechanisms: "mechanisms",
        name: "name",
        alertInterval: "alert_interval",
        description: "description",
        filters: "filters",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/alerting/v3/policies",
      }),
    ),
) as unknown as Schema.Codec<CreatePolicyRequest>;

export interface CreatePolicyResponse {
  /** UUID */
  id?: string | null;
}

export const CreatePolicyResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreatePolicyResponse>;

export type CreatePolicyError =
  | DefaultErrors
  | InvalidRoute
  | FiltersRequired
  | MechanismRequired;

export const createPolicy: API.OperationMethod<
  CreatePolicyRequest,
  CreatePolicyResponse,
  CreatePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreatePolicyRequest,
  output: CreatePolicyResponse,
  errors: [InvalidRoute, FiltersRequired, MechanismRequired],
}));

export interface UpdatePolicyRequest {
  policyId: string;
  /** Path param: The account id */
  accountId: string;
  /** Body param: Optional specification of how often to re-alert from the same incident, not support on all alert types. */
  alertInterval?: string;
  /** Body param: Refers to which event will trigger a Notification dispatch. You can use the endpoint to get available alert types which then will give you a list of possible values. */
  alertType?:
    | "abuse_report_alert"
    | "access_custom_certificate_expiration_type"
    | "advanced_ddos_attack_l4_alert"
    | "advanced_ddos_attack_l7_alert"
    | "advanced_http_alert_error"
    | "bgp_hijack_notification"
    | "billing_usage_alert"
    | "block_notification_block_removed"
    | "block_notification_new_block"
    | "block_notification_review_rejected"
    | "bot_traffic_basic_alert"
    | "brand_protection_alert"
    | "brand_protection_digest"
    | "clickhouse_alert_fw_anomaly"
    | "clickhouse_alert_fw_ent_anomaly"
    | "cloudforce_one_request_notification"
    | "cni_maintenance_notification"
    | "custom_analytics"
    | "custom_bot_detection_alert"
    | "custom_ssl_certificate_event_type"
    | "dedicated_ssl_certificate_event_type"
    | "device_connectivity_anomaly_alert"
    | "dos_attack_l4"
    | "dos_attack_l7"
    | "expiring_service_token_alert"
    | "failing_logpush_job_disabled_alert"
    | "fbm_auto_advertisement"
    | "fbm_dosd_attack"
    | "fbm_volumetric_attack"
    | "health_check_status_notification"
    | "hostname_aop_custom_certificate_expiration_type"
    | "http_alert_edge_error"
    | "http_alert_origin_error"
    | "image_notification"
    | "image_resizing_notification"
    | "incident_alert"
    | "load_balancing_health_alert"
    | "load_balancing_pool_enablement_alert"
    | "logo_match_alert"
    | "magic_tunnel_health_check_event"
    | "magic_wan_tunnel_health"
    | "maintenance_event_notification"
    | "mtls_certificate_store_certificate_expiration_type"
    | "pages_event_alert"
    | "radar_notification"
    | "real_origin_monitoring"
    | "scriptmonitor_alert_new_code_change_detections"
    | "scriptmonitor_alert_new_hosts"
    | "scriptmonitor_alert_new_malicious_hosts"
    | "scriptmonitor_alert_new_malicious_scripts"
    | "scriptmonitor_alert_new_malicious_url"
    | "scriptmonitor_alert_new_max_length_resource_url"
    | "scriptmonitor_alert_new_resources"
    | "secondary_dns_all_primaries_failing"
    | "secondary_dns_primaries_failing"
    | "secondary_dns_warning"
    | "secondary_dns_zone_successfully_updated"
    | "secondary_dns_zone_validation_warning"
    | "security_insights_alert"
    | "sentinel_alert"
    | "stream_live_notifications"
    | "synthetic_test_latency_alert"
    | "synthetic_test_low_availability_alert"
    | "traffic_anomalies_alert"
    | "tunnel_health_event"
    | "tunnel_update_event"
    | "universal_ssl_event_type"
    | "web_analytics_metrics_update"
    | "zone_aop_custom_certificate_expiration_type"
    | (string & {});
  /** Body param: Optional description for the Notification policy. */
  description?: string;
  /** Body param: Whether or not the Notification policy is enabled. */
  enabled?: boolean;
  /** Body param: Optional filters that allow you to be alerted only on a subset of events for that alert type based on some criteria. This is only available for select alert types. See alert type documenta */
  filters?: {
    actions?: string[];
    affectedAsns?: string[];
    affectedComponents?: string[];
    affectedLocations?: string[];
    airportCode?: string[];
    alertTriggerPreferences?: string[];
    alertTriggerPreferencesValue?: string[];
    enabled?: string[];
    environment?: string[];
    event?: string[];
    eventSource?: string[];
    eventType?: string[];
    groupBy?: string[];
    healthCheckId?: string[];
    incidentImpact?: (
      | "INCIDENT_IMPACT_NONE"
      | "INCIDENT_IMPACT_MINOR"
      | "INCIDENT_IMPACT_MAJOR"
      | "INCIDENT_IMPACT_CRITICAL"
      | (string & {})
    )[];
    inputId?: string[];
    insightClass?: string[];
    limit?: string[];
    logoTag?: string[];
    megabitsPerSecond?: string[];
    newHealth?: string[];
    newStatus?: string[];
    packetsPerSecond?: string[];
    poolId?: string[];
    popNames?: string[];
    product?: string[];
    projectId?: string[];
    protocol?: string[];
    queryTag?: string[];
    requestsPerSecond?: string[];
    selectors?: string[];
    services?: string[];
    slo?: string[];
    status?: string[];
    targetHostname?: string[];
    targetIp?: string[];
    targetZoneName?: string[];
    trafficExclusions?: "security_events"[];
    tunnelId?: string[];
    tunnelName?: string[];
    type?: string[];
    where?: string[];
    zones?: string[];
  };
  /** Body param: List of IDs that will be used when dispatching a notification. IDs for email type will be the email address. */
  mechanisms?: {
    email?: { id?: string }[];
    pagerduty?: { id?: string }[];
    webhooks?: { id?: string }[];
  };
  /** Body param: Name of the policy. */
  name?: string;
}

export const UpdatePolicyRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      policyId: Schema.String.pipe(T.HttpPath("policyId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      alertInterval: Schema.optional(Schema.String),
      alertType: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "abuse_report_alert",
            "access_custom_certificate_expiration_type",
            "advanced_ddos_attack_l4_alert",
            "advanced_ddos_attack_l7_alert",
            "advanced_http_alert_error",
            "bgp_hijack_notification",
            "billing_usage_alert",
            "block_notification_block_removed",
            "block_notification_new_block",
            "block_notification_review_rejected",
            "bot_traffic_basic_alert",
            "brand_protection_alert",
            "brand_protection_digest",
            "clickhouse_alert_fw_anomaly",
            "clickhouse_alert_fw_ent_anomaly",
            "cloudforce_one_request_notification",
            "cni_maintenance_notification",
            "custom_analytics",
            "custom_bot_detection_alert",
            "custom_ssl_certificate_event_type",
            "dedicated_ssl_certificate_event_type",
            "device_connectivity_anomaly_alert",
            "dos_attack_l4",
            "dos_attack_l7",
            "expiring_service_token_alert",
            "failing_logpush_job_disabled_alert",
            "fbm_auto_advertisement",
            "fbm_dosd_attack",
            "fbm_volumetric_attack",
            "health_check_status_notification",
            "hostname_aop_custom_certificate_expiration_type",
            "http_alert_edge_error",
            "http_alert_origin_error",
            "image_notification",
            "image_resizing_notification",
            "incident_alert",
            "load_balancing_health_alert",
            "load_balancing_pool_enablement_alert",
            "logo_match_alert",
            "magic_tunnel_health_check_event",
            "magic_wan_tunnel_health",
            "maintenance_event_notification",
            "mtls_certificate_store_certificate_expiration_type",
            "pages_event_alert",
            "radar_notification",
            "real_origin_monitoring",
            "scriptmonitor_alert_new_code_change_detections",
            "scriptmonitor_alert_new_hosts",
            "scriptmonitor_alert_new_malicious_hosts",
            "scriptmonitor_alert_new_malicious_scripts",
            "scriptmonitor_alert_new_malicious_url",
            "scriptmonitor_alert_new_max_length_resource_url",
            "scriptmonitor_alert_new_resources",
            "secondary_dns_all_primaries_failing",
            "secondary_dns_primaries_failing",
            "secondary_dns_warning",
            "secondary_dns_zone_successfully_updated",
            "secondary_dns_zone_validation_warning",
            "security_insights_alert",
            "sentinel_alert",
            "stream_live_notifications",
            "synthetic_test_latency_alert",
            "synthetic_test_low_availability_alert",
            "traffic_anomalies_alert",
            "tunnel_health_event",
            "tunnel_update_event",
            "universal_ssl_event_type",
            "web_analytics_metrics_update",
            "zone_aop_custom_certificate_expiration_type",
          ]),
          Schema.String,
        ]),
      ),
      description: Schema.optional(Schema.String),
      enabled: Schema.optional(Schema.Boolean),
      filters: Schema.optional(PolicyFilter),
      mechanisms: Schema.optional(Mechanism),
      name: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        alertInterval: "alert_interval",
        alertType: "alert_type",
        description: "description",
        enabled: "enabled",
        filters: "filters",
        mechanisms: "mechanisms",
        name: "name",
      }),
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/alerting/v3/policies/{policyId}",
      }),
    ),
) as unknown as Schema.Codec<UpdatePolicyRequest>;

export interface UpdatePolicyResponse {
  /** UUID */
  id?: string | null;
}

export const UpdatePolicyResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<UpdatePolicyResponse>;

export type UpdatePolicyError =
  | DefaultErrors
  | InvalidRoute
  | PolicyNotFound
  | InvalidAlertType
  | MechanismRequired;

export const updatePolicy: API.OperationMethod<
  UpdatePolicyRequest,
  UpdatePolicyResponse,
  UpdatePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdatePolicyRequest,
  output: UpdatePolicyResponse,
  errors: [InvalidRoute, PolicyNotFound, InvalidAlertType, MechanismRequired],
}));

export interface DeletePolicyRequest {
  policyId: string;
  /** The account id */
  accountId: string;
}

export const DeletePolicyRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      policyId: Schema.String.pipe(T.HttpPath("policyId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/alerting/v3/policies/{policyId}",
      }),
    ),
) as unknown as Schema.Codec<DeletePolicyRequest>;

export interface DeletePolicyResponse {
  errors?: { message: string; code?: number | null }[] | null;
  messages?: { message: string; code?: number | null }[] | null;
  /** Whether the API call was successful */
  success?: true | null;
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const DeletePolicyResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      errors: Schema.optional(
        Schema.Union([Schema.Array(Error2), Schema.Null]),
      ),
      messages: Schema.optional(
        Schema.Union([Schema.Array(Error2), Schema.Null]),
      ),
      success: Schema.optional(
        Schema.Union([Schema.Literal(true), Schema.Null]),
      ),
      resultInfo: Schema.optional(
        Schema.Union([ListHistoriesResponseResultInfo, Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        errors: "errors",
        messages: "messages",
        success: "success",
        resultInfo: "result_info",
      }),
    ),
) as unknown as Schema.Codec<DeletePolicyResponse>;

export type DeletePolicyError = DefaultErrors | InvalidRoute | PolicyNotFound;

export const deletePolicy: API.OperationMethod<
  DeletePolicyRequest,
  DeletePolicyResponse,
  DeletePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePolicyRequest,
  output: DeletePolicyResponse,
  errors: [InvalidRoute, PolicyNotFound],
}));

// =============================================================================
// Silence
// =============================================================================

export interface GetSilenceRequest {
  silenceId: string;
  /** The account id */
  accountId: string;
}

export const GetSilenceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      silenceId: Schema.String.pipe(T.HttpPath("silenceId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/alerting/v3/silences/{silenceId}",
      }),
    ),
) as unknown as Schema.Codec<GetSilenceRequest>;

export interface GetSilenceResponse {
  /** Silence ID */
  id?: string | null;
  /** When the silence was created. */
  createdAt?: string | null;
  /** When the silence ends. */
  endTime?: string | null;
  /** The unique identifier of a notification policy */
  policyId?: string | null;
  /** When the silence starts. */
  startTime?: string | null;
  /** When the silence was modified. */
  updatedAt?: string | null;
}

export const GetSilenceResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      endTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      policyId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      startTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      updatedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          endTime: "end_time",
          policyId: "policy_id",
          startTime: "start_time",
          updatedAt: "updated_at",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetSilenceResponse>;

export type GetSilenceError =
  | DefaultErrors
  | InvalidRoute
  | InternalServerError
  | SilenceNotFound;

export const getSilence: API.OperationMethod<
  GetSilenceRequest,
  GetSilenceResponse,
  GetSilenceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSilenceRequest,
  output: GetSilenceResponse,
  errors: [InvalidRoute, InternalServerError, SilenceNotFound],
}));

export interface ListSilencesRequest {
  /** The account id */
  accountId: string;
}

export const ListSilencesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/alerting/v3/silences",
      }),
    ),
) as unknown as Schema.Codec<ListSilencesRequest>;

export interface ListSilencesResponse {
  result: {
    id?: string | null;
    createdAt?: string | null;
    endTime?: string | null;
    policyId?: string | null;
    startTime?: string | null;
    updatedAt?: string | null;
  }[];
}

export const ListSilencesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(ListSilencesResponseResult),
    }),
) as unknown as Schema.Codec<ListSilencesResponse>;

export type ListSilencesError = DefaultErrors;

export const listSilences: API.PaginatedOperationMethod<
  ListSilencesRequest,
  ListSilencesResponse,
  ListSilencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSilencesRequest,
  output: ListSilencesResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateSilenceRequest {
  /** Path param: The account id */
  accountId: string;
  /** Body param */
  body: { endTime?: string; policyId?: string; startTime?: string }[];
}

export const CreateSilenceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      body: Schema.Array(Body).pipe(T.HttpBody()),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/alerting/v3/silences",
      }),
    ),
) as unknown as Schema.Codec<CreateSilenceRequest>;

export interface CreateSilenceResponse {
  errors: { message: string; code?: number | null }[];
  messages: { message: string; code?: number | null }[];
  /** Whether the API call was successful */
  success: true;
}

export const CreateSilenceResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      errors: Schema.Array(Error2),
      messages: Schema.Array(Error2),
      success: Schema.Literal(true),
    }),
) as unknown as Schema.Codec<CreateSilenceResponse>;

export type CreateSilenceError =
  | DefaultErrors
  | InvalidRoute
  | InvalidSilence
  | SilenceAlreadyExists;

export const createSilence: API.OperationMethod<
  CreateSilenceRequest,
  CreateSilenceResponse,
  CreateSilenceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateSilenceRequest,
  output: CreateSilenceResponse,
  errors: [InvalidRoute, InvalidSilence, SilenceAlreadyExists],
}));

export interface UpdateSilenceRequest {
  /** Path param: The account id */
  accountId: string;
  /** Body param */
  body: { id?: string; endTime?: string; startTime?: string }[];
}

export const UpdateSilenceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      body: Schema.Array(Body2).pipe(T.HttpBody()),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/alerting/v3/silences",
      }),
    ),
) as unknown as Schema.Codec<UpdateSilenceRequest>;

export interface UpdateSilenceResponse {
  result:
    | {
        id?: string | null;
        createdAt?: string | null;
        endTime?: string | null;
        policyId?: string | null;
        startTime?: string | null;
        updatedAt?: string | null;
      }[]
    | null;
}

export const UpdateSilenceResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Union([
        Schema.Array(ListSilencesResponseResult),
        Schema.Null,
      ]),
    }),
) as unknown as Schema.Codec<UpdateSilenceResponse>;

export type UpdateSilenceError =
  | DefaultErrors
  | SilenceNotFound
  | InvalidSilence;

export const updateSilence: API.PaginatedOperationMethod<
  UpdateSilenceRequest,
  UpdateSilenceResponse,
  UpdateSilenceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: UpdateSilenceRequest,
  output: UpdateSilenceResponse,
  errors: [SilenceNotFound, InvalidSilence],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface DeleteSilenceRequest {
  silenceId: string;
  /** The account id */
  accountId: string;
}

export const DeleteSilenceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      silenceId: Schema.String.pipe(T.HttpPath("silenceId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/alerting/v3/silences/{silenceId}",
      }),
    ),
) as unknown as Schema.Codec<DeleteSilenceRequest>;

export interface DeleteSilenceResponse {
  errors: { message: string; code?: number | null }[];
  messages: { message: string; code?: number | null }[];
  /** Whether the API call was successful */
  success: true;
}

export const DeleteSilenceResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      errors: Schema.Array(Error2),
      messages: Schema.Array(Error2),
      success: Schema.Literal(true),
    }),
) as unknown as Schema.Codec<DeleteSilenceResponse>;

export type DeleteSilenceError = DefaultErrors | InvalidRoute | SilenceNotFound;

export const deleteSilence: API.OperationMethod<
  DeleteSilenceRequest,
  DeleteSilenceResponse,
  DeleteSilenceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteSilenceRequest,
  output: DeleteSilenceResponse,
  errors: [InvalidRoute, SilenceNotFound],
}));
