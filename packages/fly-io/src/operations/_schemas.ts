import * as Schema from "effect/Schema";

export const AppSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  internal_numeric_id: Schema.optional(Schema.Number),
  machine_count: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  network: Schema.optional(Schema.String),
  organization: Schema.optional(
    Schema.suspend(() => AppOrganizationInfoSchema),
  ),
  status: Schema.optional(Schema.String),
  volume_count: Schema.optional(Schema.Number),
});
export const AppOrganizationInfoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    internal_numeric_id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    slug: Schema.optional(Schema.String),
  });
export const CertificateSummarySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acme_alpn_configured: Schema.optional(Schema.Boolean),
    acme_dns_configured: Schema.optional(Schema.Boolean),
    acme_http_configured: Schema.optional(Schema.Boolean),
    acme_requested: Schema.optional(Schema.Boolean),
    configured: Schema.optional(Schema.Boolean),
    created_at: Schema.optional(Schema.String),
    dns_provider: Schema.optional(Schema.String),
    has_custom_certificate: Schema.optional(Schema.Boolean),
    has_fly_certificate: Schema.optional(Schema.Boolean),
    hostname: Schema.optional(Schema.String),
    ownership_txt_configured: Schema.optional(Schema.Boolean),
    status: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export const CertificateEntrySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    created_at: Schema.optional(Schema.String),
    expires_at: Schema.optional(Schema.String),
    issued: Schema.optional(
      Schema.Array(Schema.suspend(() => IssuedCertificateSchema)),
    ),
    issuer: Schema.optional(Schema.String),
    source: Schema.optional(Schema.Literals(["custom", "fly"])),
    status: Schema.optional(
      Schema.Literals(["active", "pending_ownership", "pending_validation"]),
    ),
  },
);
export const IssuedCertificateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificate_authority: Schema.optional(Schema.String),
    expires_at: Schema.optional(Schema.String),
    type: Schema.optional(Schema.Literals(["rsa", "ecdsa"])),
  });
export const DNSRequirementsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  a: Schema.optional(Schema.Array(Schema.String)),
  aaaa: Schema.optional(Schema.Array(Schema.String)),
  acme_challenge: Schema.optional(Schema.suspend(() => AcmeChallengeSchema)),
  cname: Schema.optional(Schema.String),
  ownership: Schema.optional(Schema.suspend(() => OwnershipVerificationSchema)),
});
export const AcmeChallengeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  target: Schema.optional(Schema.String),
});
export const OwnershipVerificationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app_value: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    org_value: Schema.optional(Schema.String),
  });
export const CertificateValidationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alpn_configured: Schema.optional(Schema.Boolean),
    dns_configured: Schema.optional(Schema.Boolean),
    http_configured: Schema.optional(Schema.Boolean),
    ownership_txt_configured: Schema.optional(Schema.Boolean),
  });
export const CertificateValidationErrorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    remediation: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
  });
export const DNSRecordsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  a: Schema.optional(Schema.Array(Schema.String)),
  aaaa: Schema.optional(Schema.Array(Schema.String)),
  acme_challenge_cname: Schema.optional(Schema.String),
  cname: Schema.optional(Schema.Array(Schema.String)),
  ownership_txt: Schema.optional(Schema.String),
  resolved_addresses: Schema.optional(Schema.Array(Schema.String)),
  soa: Schema.optional(Schema.String),
});
export const IPAssignmentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  created_at: Schema.optional(Schema.String),
  ip: Schema.optional(Schema.String),
  region: Schema.optional(Schema.String),
  service_name: Schema.optional(Schema.String),
  shared: Schema.optional(Schema.Boolean),
});
export const MachineSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  checks: Schema.optional(
    Schema.Array(Schema.suspend(() => CheckStatusSchema)),
  ),
  config: Schema.optional(Schema.suspend(() => fly_MachineConfigSchema)),
  created_at: Schema.optional(Schema.String),
  events: Schema.optional(
    Schema.Array(Schema.suspend(() => MachineEventSchema)),
  ),
  host_status: Schema.optional(
    Schema.Literals(["ok", "unknown", "unreachable"]),
  ),
  id: Schema.optional(Schema.String),
  image_ref: Schema.optional(Schema.suspend(() => ImageRefSchema)),
  incomplete_config: Schema.optional(
    Schema.suspend(() => fly_MachineConfigSchema),
  ),
  instance_id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  nonce: Schema.optional(Schema.String),
  private_ip: Schema.optional(Schema.String),
  region: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
});
export const CheckStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  output: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
});
export const fly_MachineConfigSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    auto_destroy: Schema.optional(Schema.Boolean),
    cache_drive: Schema.optional(
      Schema.suspend(() => fly_MachineCacheDriveSchema),
    ),
    checks: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => fly_MachineCheckSchema),
      ),
    ),
    containers: Schema.optional(
      Schema.Array(Schema.suspend(() => fly_ContainerConfigSchema)),
    ),
    disable_machine_autostart: Schema.optional(Schema.Boolean),
    dns: Schema.optional(Schema.suspend(() => fly_DNSConfigSchema)),
    env: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    files: Schema.optional(Schema.Array(Schema.suspend(() => fly_FileSchema))),
    guest: Schema.optional(Schema.suspend(() => fly_MachineGuestSchema)),
    image: Schema.optional(Schema.String),
    init: Schema.optional(Schema.suspend(() => fly_MachineInitSchema)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    metrics: Schema.optional(Schema.suspend(() => fly_MachineMetricsSchema)),
    mounts: Schema.optional(
      Schema.Array(Schema.suspend(() => fly_MachineMountSchema)),
    ),
    processes: Schema.optional(
      Schema.Array(Schema.suspend(() => fly_MachineProcessSchema)),
    ),
    restart: Schema.optional(Schema.suspend(() => fly_MachineRestartSchema)),
    rootfs: Schema.optional(Schema.suspend(() => fly_MachineRootfsSchema)),
    schedule: Schema.optional(Schema.String),
    services: Schema.optional(
      Schema.Array(Schema.suspend(() => fly_MachineServiceSchema)),
    ),
    size: Schema.optional(Schema.String),
    standbys: Schema.optional(Schema.Array(Schema.String)),
    statics: Schema.optional(
      Schema.Array(Schema.suspend(() => fly_StaticSchema)),
    ),
    stop_config: Schema.optional(Schema.suspend(() => fly_StopConfigSchema)),
  });
export const fly_MachineCacheDriveSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    size_mb: Schema.optional(Schema.Number),
  });
export const fly_MachineCheckSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    grace_period: Schema.optional(Schema.String),
    headers: Schema.optional(
      Schema.Array(Schema.suspend(() => fly_MachineHTTPHeaderSchema)),
    ),
    interval: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.Literals(["informational", "readiness"])),
    method: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
    protocol: Schema.optional(Schema.String),
    timeout: Schema.optional(Schema.String),
    tls_server_name: Schema.optional(Schema.String),
    tls_skip_verify: Schema.optional(Schema.Boolean),
    type: Schema.optional(Schema.String),
  },
);
export const fly_MachineHTTPHeaderSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    values: Schema.optional(Schema.Array(Schema.String)),
  });
export const fly_ContainerConfigSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cmd: Schema.optional(Schema.Array(Schema.String)),
    depends_on: Schema.optional(
      Schema.Array(Schema.suspend(() => fly_ContainerDependencySchema)),
    ),
    entrypoint: Schema.optional(Schema.Array(Schema.String)),
    env: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    env_from: Schema.optional(
      Schema.Array(Schema.suspend(() => fly_EnvFromSchema)),
    ),
    exec: Schema.optional(Schema.Array(Schema.String)),
    files: Schema.optional(Schema.Array(Schema.suspend(() => fly_FileSchema))),
    healthchecks: Schema.optional(
      Schema.Array(Schema.suspend(() => fly_ContainerHealthcheckSchema)),
    ),
    image: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    restart: Schema.optional(
      Schema.Struct({
        gpu_bid_price: Schema.optional(Schema.Number),
        max_retries: Schema.optional(Schema.Number),
        policy: Schema.optional(
          Schema.Literals(["no", "always", "on-failure", "spot-price"]),
        ),
      }),
    ),
    secrets: Schema.optional(
      Schema.Array(Schema.suspend(() => fly_MachineSecretSchema)),
    ),
    stop: Schema.optional(
      Schema.Struct({
        signal: Schema.optional(
          Schema.Literals([
            "SIGHUP",
            "SIGINT",
            "SIGQUIT",
            "SIGKILL",
            "SIGUSR1",
            "SIGUSR2",
            "SIGTERM",
          ]),
        ),
        timeout: Schema.optional(Schema.String),
      }),
    ),
    user: Schema.optional(Schema.String),
  });
export const fly_ContainerDependencySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    condition: Schema.optional(
      Schema.Literals(["exited_successfully", "healthy", "started"]),
    ),
    name: Schema.optional(Schema.String),
  });
export const fly_EnvFromSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  env_var: Schema.optional(Schema.String),
  field_ref: Schema.optional(
    Schema.Literals([
      "id",
      "version",
      "app_name",
      "private_ip",
      "region",
      "image",
    ]),
  ),
});
export const fly_FileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  guest_path: Schema.optional(Schema.String),
  image_config: Schema.optional(Schema.String),
  mode: Schema.optional(Schema.Number),
  raw_value: Schema.optional(Schema.String),
  secret_name: Schema.optional(Schema.String),
});
export const fly_ContainerHealthcheckSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exec: Schema.optional(Schema.suspend(() => fly_ExecHealthcheckSchema)),
    failure_threshold: Schema.optional(Schema.Number),
    grace_period: Schema.optional(Schema.Number),
    http: Schema.optional(Schema.suspend(() => fly_HTTPHealthcheckSchema)),
    interval: Schema.optional(Schema.Number),
    kind: Schema.optional(Schema.Literals(["readiness", "liveness"])),
    name: Schema.optional(Schema.String),
    success_threshold: Schema.optional(Schema.Number),
    tcp: Schema.optional(Schema.suspend(() => fly_TCPHealthcheckSchema)),
    timeout: Schema.optional(Schema.Number),
    unhealthy: Schema.optional(Schema.Literals(["stop"])),
  });
export const fly_ExecHealthcheckSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    command: Schema.optional(Schema.Array(Schema.String)),
  });
export const fly_HTTPHealthcheckSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    headers: Schema.optional(
      Schema.Array(Schema.suspend(() => fly_MachineHTTPHeaderSchema)),
    ),
    method: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
    scheme: Schema.optional(Schema.Literals(["http", "https"])),
    tls_server_name: Schema.optional(Schema.String),
    tls_skip_verify: Schema.optional(Schema.Boolean),
  });
export const fly_TCPHealthcheckSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    port: Schema.optional(Schema.Number),
  });
export const fly_MachineSecretSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    env_var: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  });
export const fly_DNSConfigSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dns_forward_rules: Schema.optional(
    Schema.Array(Schema.suspend(() => fly_dnsForwardRuleSchema)),
  ),
  hostname: Schema.optional(Schema.String),
  hostname_fqdn: Schema.optional(Schema.String),
  nameservers: Schema.optional(Schema.Array(Schema.String)),
  options: Schema.optional(
    Schema.Array(Schema.suspend(() => fly_dnsOptionSchema)),
  ),
  searches: Schema.optional(Schema.Array(Schema.String)),
  skip_registration: Schema.optional(Schema.Boolean),
});
export const fly_dnsForwardRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addr: Schema.optional(Schema.String),
    basename: Schema.optional(Schema.String),
  });
export const fly_dnsOptionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
});
export const fly_MachineGuestSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    cpu_kind: Schema.optional(Schema.String),
    cpus: Schema.optional(Schema.Number),
    gpu_kind: Schema.optional(Schema.String),
    gpus: Schema.optional(Schema.Number),
    host_dedication_id: Schema.optional(Schema.String),
    kernel_args: Schema.optional(Schema.Array(Schema.String)),
    max_memory_mb: Schema.optional(Schema.Number),
    memory_mb: Schema.optional(Schema.Number),
    persist_rootfs: Schema.optional(
      Schema.Literals(["never", "always", "restart"]),
    ),
  },
);
export const fly_MachineInitSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cmd: Schema.optional(Schema.Array(Schema.String)),
  entrypoint: Schema.optional(Schema.Array(Schema.String)),
  exec: Schema.optional(Schema.Array(Schema.String)),
  kernel_args: Schema.optional(Schema.Array(Schema.String)),
  swap_size_mb: Schema.optional(Schema.Number),
  tty: Schema.optional(Schema.Boolean),
});
export const fly_MachineMetricsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    https: Schema.optional(Schema.Boolean),
    path: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
  });
export const fly_MachineMountSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    add_size_gb: Schema.optional(Schema.Number),
    encrypted: Schema.optional(Schema.Boolean),
    extend_threshold_percent: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    size_gb: Schema.optional(Schema.Number),
    size_gb_limit: Schema.optional(Schema.Number),
    volume: Schema.optional(Schema.String),
  },
);
export const fly_MachineProcessSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cmd: Schema.optional(Schema.Array(Schema.String)),
    entrypoint: Schema.optional(Schema.Array(Schema.String)),
    env: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    env_from: Schema.optional(
      Schema.Array(Schema.suspend(() => fly_EnvFromSchema)),
    ),
    exec: Schema.optional(Schema.Array(Schema.String)),
    ignore_app_secrets: Schema.optional(Schema.Boolean),
    secrets: Schema.optional(
      Schema.Array(Schema.suspend(() => fly_MachineSecretSchema)),
    ),
    user: Schema.optional(Schema.String),
  });
export const fly_MachineRestartSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gpu_bid_price: Schema.optional(Schema.Number),
    max_retries: Schema.optional(Schema.Number),
    policy: Schema.optional(
      Schema.Literals(["no", "always", "on-failure", "spot-price"]),
    ),
  });
export const fly_MachineRootfsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    persist: Schema.optional(Schema.Literals(["never", "always", "restart"])),
    size_gb: Schema.optional(Schema.Number),
  });
export const fly_MachineServiceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autostart: Schema.optional(Schema.Boolean),
    autostop: Schema.optional(Schema.Literals(["off", "stop", "suspend"])),
    checks: Schema.optional(
      Schema.Array(Schema.suspend(() => fly_MachineServiceCheckSchema)),
    ),
    concurrency: Schema.optional(
      Schema.suspend(() => fly_MachineServiceConcurrencySchema),
    ),
    force_instance_description: Schema.optional(Schema.String),
    force_instance_key: Schema.optional(Schema.String),
    internal_port: Schema.optional(Schema.Number),
    min_machines_running: Schema.optional(Schema.Number),
    ports: Schema.optional(
      Schema.Array(Schema.suspend(() => fly_MachinePortSchema)),
    ),
    protocol: Schema.optional(Schema.String),
  });
export const fly_MachineServiceCheckSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    grace_period: Schema.optional(Schema.String),
    headers: Schema.optional(
      Schema.Array(Schema.suspend(() => fly_MachineHTTPHeaderSchema)),
    ),
    interval: Schema.optional(Schema.String),
    method: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
    protocol: Schema.optional(Schema.String),
    timeout: Schema.optional(Schema.String),
    tls_server_name: Schema.optional(Schema.String),
    tls_skip_verify: Schema.optional(Schema.Boolean),
    type: Schema.optional(Schema.String),
  });
export const fly_MachineServiceConcurrencySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hard_limit: Schema.optional(Schema.Number),
    soft_limit: Schema.optional(Schema.Number),
    type: Schema.optional(Schema.String),
  });
export const fly_MachinePortSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  end_port: Schema.optional(Schema.Number),
  force_https: Schema.optional(Schema.Boolean),
  handlers: Schema.optional(Schema.Array(Schema.String)),
  http_options: Schema.optional(Schema.suspend(() => fly_HTTPOptionsSchema)),
  port: Schema.optional(Schema.Number),
  proxy_proto_options: Schema.optional(
    Schema.suspend(() => fly_ProxyProtoOptionsSchema),
  ),
  start_port: Schema.optional(Schema.Number),
  tls_options: Schema.optional(Schema.suspend(() => fly_TLSOptionsSchema)),
});
export const fly_HTTPOptionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  compress: Schema.optional(Schema.Boolean),
  h2_backend: Schema.optional(Schema.Boolean),
  headers_read_timeout: Schema.optional(Schema.Number),
  idle_timeout: Schema.optional(Schema.Number),
  replay_cache: Schema.optional(
    Schema.Array(Schema.suspend(() => fly_ReplayCacheSchema)),
  ),
  response: Schema.optional(
    Schema.suspend(() => fly_HTTPResponseOptionsSchema),
  ),
});
export const fly_ReplayCacheSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  allow_bypass: Schema.optional(Schema.Boolean),
  name: Schema.optional(Schema.String),
  path_prefix: Schema.optional(Schema.String),
  ttl_seconds: Schema.optional(Schema.Number),
  type: Schema.optional(Schema.Literals(["cookie", "header"])),
});
export const fly_HTTPResponseOptionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    headers: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    pristine: Schema.optional(Schema.Boolean),
  });
export const fly_ProxyProtoOptionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
  });
export const fly_TLSOptionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  alpn: Schema.optional(Schema.Array(Schema.String)),
  default_self_signed: Schema.optional(Schema.Boolean),
  versions: Schema.optional(Schema.Array(Schema.String)),
});
export const fly_StaticSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  guest_path: Schema.String,
  index_document: Schema.optional(Schema.String),
  tigris_bucket: Schema.optional(Schema.String),
  url_prefix: Schema.String,
});
export const fly_StopConfigSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  signal: Schema.optional(
    Schema.Literals([
      "SIGHUP",
      "SIGINT",
      "SIGQUIT",
      "SIGKILL",
      "SIGUSR1",
      "SIGUSR2",
      "SIGTERM",
    ]),
  ),
  timeout: Schema.optional(Schema.String),
});
export const MachineEventSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  request: Schema.optional(Schema.Unknown),
  source: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  timestamp: Schema.optional(Schema.Number),
  type: Schema.optional(Schema.String),
});
export const ImageRefSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  digest: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  registry: Schema.optional(Schema.String),
  repository: Schema.optional(Schema.String),
  tag: Schema.optional(Schema.String),
});
export const ProcessStatSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  command: Schema.optional(Schema.String),
  cpu: Schema.optional(Schema.Number),
  directory: Schema.optional(Schema.String),
  listen_sockets: Schema.optional(
    Schema.Array(Schema.suspend(() => ListenSocketSchema)),
  ),
  pid: Schema.optional(Schema.Number),
  rss: Schema.optional(Schema.Number),
  rtime: Schema.optional(Schema.Number),
  stime: Schema.optional(Schema.Number),
});
export const ListenSocketSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  address: Schema.optional(Schema.String),
  proto: Schema.optional(Schema.String),
});
export const MachineVersionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  user_config: Schema.optional(Schema.suspend(() => fly_MachineConfigSchema)),
  version: Schema.optional(Schema.String),
});
export const SecretKeySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  created_at: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  public_key: Schema.optional(Schema.Array(Schema.Number)),
  type: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
});
export const AppSecretSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  created_at: Schema.optional(Schema.String),
  digest: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
});
export const VolumeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  attached_alloc_id: Schema.optional(Schema.String),
  attached_machine_id: Schema.optional(Schema.String),
  auto_backup_enabled: Schema.optional(Schema.Boolean),
  block_size: Schema.optional(Schema.Number),
  blocks: Schema.optional(Schema.Number),
  blocks_avail: Schema.optional(Schema.Number),
  blocks_free: Schema.optional(Schema.Number),
  bytes_total: Schema.optional(Schema.Number),
  bytes_used: Schema.optional(Schema.Number),
  created_at: Schema.optional(Schema.String),
  encrypted: Schema.optional(Schema.Boolean),
  fstype: Schema.optional(Schema.String),
  host_status: Schema.optional(
    Schema.Literals(["ok", "unknown", "unreachable"]),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  region: Schema.optional(Schema.String),
  size_gb: Schema.optional(Schema.Number),
  snapshot_retention: Schema.optional(Schema.Number),
  state: Schema.optional(Schema.String),
  type: Schema.optional(Schema.Literals(["local", "cache"])),
  zone: Schema.optional(Schema.String),
});
export const VolumeSnapshotSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  created_at: Schema.optional(Schema.String),
  digest: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  retention_days: Schema.optional(Schema.Number),
  size: Schema.optional(Schema.Number),
  status: Schema.optional(Schema.String),
  volume_size: Schema.optional(Schema.Number),
});
export const OrgMachineSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  app_name: Schema.optional(Schema.String),
  config: Schema.optional(Schema.suspend(() => MachineOverviewConfigSchema)),
  created_at: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  instance_id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  private_ip: Schema.optional(Schema.String),
  region: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
});
export const MachineOverviewConfigSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guest: Schema.optional(Schema.suspend(() => fly_MachineGuestSchema)),
    image: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export const OrgVolumeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  app_name: Schema.optional(Schema.String),
  attached_alloc_id: Schema.optional(Schema.String),
  attached_machine_id: Schema.optional(Schema.String),
  auto_backup_enabled: Schema.optional(Schema.Boolean),
  block_size: Schema.optional(Schema.Number),
  blocks: Schema.optional(Schema.Number),
  blocks_avail: Schema.optional(Schema.Number),
  blocks_free: Schema.optional(Schema.Number),
  bytes_total: Schema.optional(Schema.Number),
  bytes_used: Schema.optional(Schema.Number),
  created_at: Schema.optional(Schema.String),
  encrypted: Schema.optional(Schema.Boolean),
  fstype: Schema.optional(Schema.String),
  host_status: Schema.optional(
    Schema.Literals(["ok", "unknown", "unreachable"]),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  region: Schema.optional(Schema.String),
  size_gb: Schema.optional(Schema.Number),
  snapshot_retention: Schema.optional(Schema.Number),
  state: Schema.optional(Schema.String),
  type: Schema.optional(Schema.Literals(["local", "cache"])),
  updated_at: Schema.optional(Schema.String),
  zone: Schema.optional(Schema.String),
});
export const placement_RegionPlacementSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    concurrency: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Number),
    region: Schema.optional(Schema.String),
  });
export const main_regionRowSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.String),
  deprecated: Schema.optional(Schema.Boolean),
  gateway_available: Schema.optional(Schema.Boolean),
  geo_region: Schema.optional(Schema.String),
  latitude: Schema.optional(Schema.Number),
  longitude: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  requires_paid_plan: Schema.optional(Schema.Boolean),
});
export const main_tokenInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  apps: Schema.optional(Schema.Array(Schema.String)),
  org_slug: Schema.optional(Schema.String),
  organization: Schema.optional(Schema.String),
  restricted_to_machine: Schema.optional(Schema.String),
  source_machine_id: Schema.optional(Schema.String),
  token_id: Schema.optional(Schema.String),
  user: Schema.optional(Schema.String),
});
