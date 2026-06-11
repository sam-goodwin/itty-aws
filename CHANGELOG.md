## v0.24.9

### &nbsp;&nbsp;&nbsp;🐞 Bug Fixes

- **core**: Serialize struct query params as deepObject dot-notation &nbsp;-&nbsp; by **sam** in https://github.com/alchemy-run/distilled/issues/334 [<samp>(e392f)</samp>](https://github.com/alchemy-run/distilled/commit/e392f446)

##### &nbsp;&nbsp;&nbsp;&nbsp;[View changes on GitHub](https://github.com/alchemy-run/distilled/compare/v0.24.8...HEAD)

---

## v0.24.8

### &nbsp;&nbsp;&nbsp;🐞 Bug Fixes

- **cloudflare**: Patch optional properties on getBillingTopupConfig &nbsp;-&nbsp; by **Sam Goodwin** [<samp>(e199c)</samp>](https://github.com/alchemy-run/distilled/commit/e199ca5a)

##### &nbsp;&nbsp;&nbsp;&nbsp;[View changes on GitHub](https://github.com/alchemy-run/distilled/compare/v0.24.7...HEAD)

---

## v0.24.7

### &nbsp;&nbsp;&nbsp;🐞 Bug Fixes

- **cloudflare**: Patch ai gateway creditBalanceBilling topupConfig &nbsp;-&nbsp; by **Sam Goodwin** [<samp>(1e84a)</samp>](https://github.com/alchemy-run/distilled/commit/1e84a9f3)

##### &nbsp;&nbsp;&nbsp;&nbsp;[View changes on GitHub](https://github.com/alchemy-run/distilled/compare/v0.24.6...HEAD)

---

## v0.24.6

### &nbsp;&nbsp;&nbsp;🐞 Bug Fixes

- **cloudflare**: Add NO_MANUAL_TOPUP error for createBillingSpendingLimit &nbsp;-&nbsp; by **Sam Goodwin** [<samp>(9be77)</samp>](https://github.com/alchemy-run/distilled/commit/9be77343)

##### &nbsp;&nbsp;&nbsp;&nbsp;[View changes on GitHub](https://github.com/alchemy-run/distilled/compare/v0.24.5...HEAD)

---

## v0.24.5

### &nbsp;&nbsp;&nbsp;🐞 Bug Fixes

- Cf rate limit &nbsp;-&nbsp; by **Michael K** in https://github.com/alchemy-run/distilled/issues/329 [<samp>(527ac)</samp>](https://github.com/alchemy-run/distilled/commit/527accc2)
- **cloudflare**: Add NoSuchBucket to r2.updateBucketDomainCustom &nbsp;-&nbsp; by **Sam Goodwin** [<samp>(815f6)</samp>](https://github.com/alchemy-run/distilled/commit/815f6d10)

##### &nbsp;&nbsp;&nbsp;&nbsp;[View changes on GitHub](https://github.com/alchemy-run/distilled/compare/v0.24.4...HEAD)

---

## v0.24.4

### &nbsp;&nbsp;&nbsp;🐞 Bug Fixes

- **aws**: Support Effect<undefined> for Endpoint &nbsp;-&nbsp; by **Sam Goodwin** [<samp>(d5262)</samp>](https://github.com/alchemy-run/distilled/commit/d5262140)

##### &nbsp;&nbsp;&nbsp;&nbsp;[View changes on GitHub](https://github.com/alchemy-run/distilled/compare/v0.24.3...HEAD)

---

## v0.24.3

### &nbsp;&nbsp;&nbsp;🐞 Bug Fixes

- **core**: Remove unnecessary debug log &nbsp;-&nbsp; by **Sam Goodwin** [<samp>(d9e02)</samp>](https://github.com/alchemy-run/distilled/commit/d9e02b8f)

##### &nbsp;&nbsp;&nbsp;&nbsp;[View changes on GitHub](https://github.com/alchemy-run/distilled/compare/v0.24.2...HEAD)

---

## v0.24.2

### &nbsp;&nbsp;&nbsp;🐞 Bug Fixes

- **aws**: Make Endpoint lazy &nbsp;-&nbsp; by **sam** in https://github.com/alchemy-run/distilled/issues/327 [<samp>(92885)</samp>](https://github.com/alchemy-run/distilled/commit/9288558b)

##### &nbsp;&nbsp;&nbsp;&nbsp;[View changes on GitHub](https://github.com/alchemy-run/distilled/compare/v0.24.1...HEAD)

---

## v0.24.1

### &nbsp;&nbsp;&nbsp;🐞 Bug Fixes

- **aws**: Make AWS Region lazy &nbsp;-&nbsp; by **sam** in https://github.com/alchemy-run/distilled/issues/326 [<samp>(37cf2)</samp>](https://github.com/alchemy-run/distilled/commit/37cf296d)

##### &nbsp;&nbsp;&nbsp;&nbsp;[View changes on GitHub](https://github.com/alchemy-run/distilled/compare/v0.24.0...HEAD)

---

## v0.24.0

### &nbsp;&nbsp;&nbsp;🐞 Bug Fixes

- **azure**: Make generated requests valid (api-version + $ref bodies) &nbsp;-&nbsp; by **Joël Kuijper** in https://github.com/alchemy-run/distilled/issues/324 [<samp>(3b321)</samp>](https://github.com/alchemy-run/distilled/commit/3b3219f5)
- **core**: Make all Credentials lazy &nbsp;-&nbsp; by **sam** in https://github.com/alchemy-run/distilled/issues/325 [<samp>(22a18)</samp>](https://github.com/alchemy-run/distilled/commit/22a18bfe)

##### &nbsp;&nbsp;&nbsp;&nbsp;[View changes on GitHub](https://github.com/alchemy-run/distilled/compare/v0.23.1...HEAD)

---

## v0.23.1

### &nbsp;&nbsp;&nbsp;🐞 Bug Fixes

- **cloudflare**: Mark queryObservabilityTelemetry run.query fields optional &nbsp;-&nbsp; by **Michael K** in https://github.com/alchemy-run/distilled/issues/319 [<samp>(da535)</samp>](https://github.com/alchemy-run/distilled/commit/da5355b9)

##### &nbsp;&nbsp;&nbsp;&nbsp;[View changes on GitHub](https://github.com/alchemy-run/distilled/compare/v0.23.0...HEAD)

---

## v0.23.0

### &nbsp;&nbsp;&nbsp;🚀 Features

- **planetscale**: Support OAuth Bearer credentials &nbsp;-&nbsp; by **Michael (Pear)** in https://github.com/alchemy-run/distilled/issues/311 [<samp>(6e904)</samp>](https://github.com/alchemy-run/distilled/commit/6e90437e)

### &nbsp;&nbsp;&nbsp;🐞 Bug Fixes

- **aws**: Strip "Message" suffix when deriving operation name &nbsp;-&nbsp; by **Zé Yuri** and **Claude Opus 4.7 (1M context)** in https://github.com/alchemy-run/distilled/issues/306 [<samp>(8efd0)</samp>](https://github.com/alchemy-run/distilled/commit/8efd0483)

##### &nbsp;&nbsp;&nbsp;&nbsp;[View changes on GitHub](https://github.com/alchemy-run/distilled/compare/v0.22.4...HEAD)

---

## v0.22.4

### &nbsp;&nbsp;&nbsp;🐞 Bug Fixes

- **cloudflare**: Merge union-typed request params instead of taking first variant &nbsp;-&nbsp; by **sam** in https://github.com/alchemy-run/distilled/issues/309 [<samp>(b321f)</samp>](https://github.com/alchemy-run/distilled/commit/b321fbe1)

##### &nbsp;&nbsp;&nbsp;&nbsp;[View changes on GitHub](https://github.com/alchemy-run/distilled/compare/v0.22.3...HEAD)

---

## v0.22.3

### &nbsp;&nbsp;&nbsp;🐞 Bug Fixes

- **cloudflare**:
  - Treat string enums as open in generated schemas &nbsp;-&nbsp; by **sam** in https://github.com/alchemy-run/distilled/issues/314 [<samp>(56667)</samp>](https://github.com/alchemy-run/distilled/commit/56667ca8)
  - **zones**: Add typed errors for zone CRUD &nbsp;-&nbsp; by **sam** in https://github.com/alchemy-run/distilled/issues/315 [<samp>(31b06)</samp>](https://github.com/alchemy-run/distilled/commit/31b0639c)

##### &nbsp;&nbsp;&nbsp;&nbsp;[View changes on GitHub](https://github.com/alchemy-run/distilled/compare/v0.22.2...HEAD)

---

## v0.22.2

### &nbsp;&nbsp;&nbsp;🐞 Bug Fixes

- **cloudflare**:
  - **vectorize**: Add 3005/gone error &nbsp;-&nbsp; by **John Royal** in https://github.com/alchemy-run/distilled/issues/313 [<samp>(e5833)</samp>](https://github.com/alchemy-run/distilled/commit/e58339d1)

##### &nbsp;&nbsp;&nbsp;&nbsp;[View changes on GitHub](https://github.com/alchemy-run/distilled/compare/v0.22.1...HEAD)

---

## v0.22.1

### &nbsp;&nbsp;&nbsp;🐞 Bug Fixes

- **cloudflare**:
  - **queues**: Patch script_name/script property to match wire &nbsp;-&nbsp; by **Sam Goodwin** [<samp>(3b6d5)</samp>](https://github.com/alchemy-run/distilled/commit/3b6d5e89)

##### &nbsp;&nbsp;&nbsp;&nbsp;[View changes on GitHub](https://github.com/alchemy-run/distilled/compare/v0.22.0...HEAD)

---

## v0.22.0

### &nbsp;&nbsp;&nbsp;🚀 Features

- **cloudflare**: Update cloudflare spec &nbsp;-&nbsp; by **Michael K** in https://github.com/alchemy-run/distilled/issues/312 [<samp>(f50ef)</samp>](https://github.com/alchemy-run/distilled/commit/f50ef4ed)

### &nbsp;&nbsp;&nbsp;🐞 Bug Fixes

- **cloudflare**: Collapse unions containing `unknown` to `unknown` in parser &nbsp;-&nbsp; by **sam** in https://github.com/alchemy-run/distilled/issues/310 [<samp>(cf15f)</samp>](https://github.com/alchemy-run/distilled/commit/cf15f0c0)

##### &nbsp;&nbsp;&nbsp;&nbsp;[View changes on GitHub](https://github.com/alchemy-run/distilled/compare/v0.21.6...HEAD)

---

## v0.21.6

### &nbsp;&nbsp;&nbsp;🚀 Features

- **cloudflare**: Add typed errors to vectorize operations &nbsp;-&nbsp; by **sam** and **Claude Opus 4.7** in https://github.com/alchemy-run/distilled/issues/308 [<samp>(2356f)</samp>](https://github.com/alchemy-run/distilled/commit/2356f645)

##### &nbsp;&nbsp;&nbsp;&nbsp;[View changes on GitHub](https://github.com/alchemy-run/distilled/compare/v0.21.5...HEAD)

---

## v0.21.5

### &nbsp;&nbsp;&nbsp;🐞 Bug Fixes

- **cloudflare**:
  - Require `className` in worker bindings &nbsp;-&nbsp; by **John Royal** in https://github.com/alchemy-run/distilled/issues/305 [<samp>(9e20b)</samp>](https://github.com/alchemy-run/distilled/commit/9e20b89f)
  - Add missing binding types to workers edge preview api &nbsp;-&nbsp; by **John Royal** in https://github.com/alchemy-run/distilled/issues/304 [<samp>(cf8d5)</samp>](https://github.com/alchemy-run/distilled/commit/cf8d5ff4)

##### &nbsp;&nbsp;&nbsp;&nbsp;[View changes on GitHub](https://github.com/alchemy-run/distilled/compare/v0.21.4...HEAD)

---

## v0.21.4

### &nbsp;&nbsp;&nbsp;🐞 Bug Fixes

- **cloudflare**:
  - **zaraz**: Send workflow updates as raw body &nbsp;-&nbsp; by **Alex** in https://github.com/alchemy-run/distilled/issues/301 [<samp>(8d5c1)</samp>](https://github.com/alchemy-run/distilled/commit/8d5c1799)

##### &nbsp;&nbsp;&nbsp;&nbsp;[View changes on GitHub](https://github.com/alchemy-run/distilled/compare/v0.21.3...HEAD)

---

# Changelog

## [v0.21.3](https://github.com/alchemy-run/distilled/releases/tag/v0.21.3) (2026-05-18)

### Features

- **core**: split Sensitive into input-friendly + output-strict variants - by Michael K in [#300](https://github.com/alchemy-run/distilled/pull/300) [(290c38f)](https://github.com/alchemy-run/distilled/commit/290c38f5252da8c329b255ec1ed55e7890ea9077)

## [v0.21.2](https://github.com/alchemy-run/distilled/releases/tag/v0.21.2) (2026-05-18)

### Bug Fixes

- **planetscale**: type plain_text as non-nullable for create/renew password - by Michael K in [#299](https://github.com/alchemy-run/distilled/pull/299) [(777eb07)](https://github.com/alchemy-run/distilled/commit/777eb077ef2cd4d80788a6852a969f9137d2d017)

## [v0.21.1](https://github.com/alchemy-run/distilled/releases/tag/v0.21.1) (2026-05-18)

### Bug Fixes

- **planetscale**: add branch cluster architecture and redact tokenId - by Lucas Thevenet in [#297](https://github.com/alchemy-run/distilled/pull/297) [(982594b)](https://github.com/alchemy-run/distilled/commit/982594b705e1503fe83e63313a60c00694394046)
- **cloudflare/workers**: remove stale code 10013 from WorkerNotFound - by sam in [#296](https://github.com/alchemy-run/distilled/pull/296) [(bbd0bb9)](https://github.com/alchemy-run/distilled/commit/bbd0bb963eaefea77c770bd2584cc286c6f7d105)

## [v0.21.0](https://github.com/alchemy-run/distilled/releases/tag/v0.21.0) (2026-05-15)

### Bug Fixes

- **aws**: expose browser exports from aws - by Michael K in [#295](https://github.com/alchemy-run/distilled/pull/295) [(dbb35dc)](https://github.com/alchemy-run/distilled/commit/dbb35dc7a38d1c671e9f4f263535581c4bd69d24)

## [v0.20.2](https://github.com/alchemy-run/distilled/releases/tag/v0.20.2) (2026-05-13)

### Bug Fixes

- **planetscale**: Add missing error return codes and nullable fields to branch, resize request, roles - by Lucas Thevenet in [#294](https://github.com/alchemy-run/distilled/pull/294) [(fd8e355)](https://github.com/alchemy-run/distilled/commit/fd8e35506d3ba9f26b958271145e009ff05a682c)

## [v0.20.1](https://github.com/alchemy-run/distilled/releases/tag/v0.20.1) (2026-05-13)

### Bug Fixes

- **core**: retry HttpClientError TransportError and 5xx in isTransientError - by sam in [#293](https://github.com/alchemy-run/distilled/pull/293) [(a9cb25a)](https://github.com/alchemy-run/distilled/commit/a9cb25afc367b87af52034e69add8bca01a651f9)

## [v0.20.0](https://github.com/alchemy-run/distilled/releases/tag/v0.20.0) (2026-05-12)

### Bug Fixes

- move to effect@4.0.0-beta.66 - by sam in [#292](https://github.com/alchemy-run/distilled/pull/292) [(01024e9)](https://github.com/alchemy-run/distilled/commit/01024e9fd3ece3b5cb2a12ed715fe421e13f7272)
- **cloudflare/workers**: type code 10002 'unknown error' on putScript - by sam in [#290](https://github.com/alchemy-run/distilled/pull/290) [(b235915)](https://github.com/alchemy-run/distilled/commit/b23591527f64805709ddeeedf1471474017d169f)

## [v0.19.2](https://github.com/alchemy-run/distilled/releases/tag/v0.19.2) (2026-05-12)

### Bug Fixes

- **cloudflare**: allow empty ruleset phase responses - by Alex in [#289](https://github.com/alchemy-run/distilled/pull/289) [(4700496)](https://github.com/alchemy-run/distilled/commit/47004960e965906a4f026a07a2a28ddfeec09f2d)

## [v0.19.1](https://github.com/alchemy-run/distilled/releases/tag/v0.19.1) (2026-05-11)

### Features

- **core/openapi**: emit makePaginated for cursor/page/token list ops - by sam in [#285](https://github.com/alchemy-run/distilled/pull/285) [(e3837e7)](https://github.com/alchemy-run/distilled/commit/e3837e70ea158fd61479886417c8b1d5a6eddf75)
- **cloudflare**: S3-style PutObject + GetObject (octet-stream + Stream<Uint8Array> downloads) - by sam in [#288](https://github.com/alchemy-run/distilled/pull/288) [(93415b0)](https://github.com/alchemy-run/distilled/commit/93415b08ca6c70d66e6d3bfb89268f528ccdfedf)
- **gcp**: add lustre v1, regenerate against latest specs, fix TS7056 - by Andy Jefferson in [#286](https://github.com/alchemy-run/distilled/pull/286) [(b26cd7a)](https://github.com/alchemy-run/distilled/commit/b26cd7af1ca20717508d6fce65bc983394f7eb1e)

### Bug Fixes

- **cloudflare**: split account-or-zone scoped operations into per-scope variants - by Michael K in [#282](https://github.com/alchemy-run/distilled/pull/282) [(74f2df2)](https://github.com/alchemy-run/distilled/commit/74f2df2d6125404300c8e7bbf3ed33bd954af8e2)

## [v0.19.0](https://github.com/alchemy-run/distilled/releases/tag/v0.19.0) (2026-05-07)

### Features

- **cloudflare**: add R2 listObjects and deleteObjects operations and update pagination wrappers - by Michael K in [#278](https://github.com/alchemy-run/distilled/pull/278) [(4a6cdde)](https://github.com/alchemy-run/distilled/commit/4a6cdde7197e65b4ca3e4cd26c6d297d85d93dc8)
- **neon**: bump spec submodule to 2026-05-07 - by sam in [#275](https://github.com/alchemy-run/distilled/pull/275) [(a9bc044)](https://github.com/alchemy-run/distilled/commit/a9bc0447990639257855fc0c59ed91e30f969425)

### Bug Fixes

- **aws**: surface SSO portal errors instead of TypeError - by sam in [#281](https://github.com/alchemy-run/distilled/pull/281) [(2108e6a)](https://github.com/alchemy-run/distilled/commit/2108e6a62f2da203b4a48d3690118f19f0cd3639)
- **cloudflare/workers**: widen json binding value to unknown - by Michael K in [#277](https://github.com/alchemy-run/distilled/pull/277) [(9fa4717)](https://github.com/alchemy-run/distilled/commit/9fa4717323876d65cbbfa6308c71952b514b9088)

## [v0.18.2](https://github.com/alchemy-run/distilled/releases/tag/v0.18.2) (2026-05-07)

### Bug Fixes

- **cloudflare**: classify code 1000 "Request timeout" as GatewayTimeout - by sam in [#274](https://github.com/alchemy-run/distilled/pull/274) [(5e778ae)](https://github.com/alchemy-run/distilled/commit/5e778ae0a1c57c761b3bfec2e59c0f5fdfa95fab)
- **core**: merge allOf body + re-export operations from root - by sam in [#272](https://github.com/alchemy-run/distilled/pull/272) [(e38266c)](https://github.com/alchemy-run/distilled/commit/e38266c86a9d70fe92c3f03e7e2c2364e3942dd9)
- **cloudflare**: tag QueueHandlerMissing (code 11001) as a typed error - by sam in [#273](https://github.com/alchemy-run/distilled/pull/273) [(613d0fb)](https://github.com/alchemy-run/distilled/commit/613d0fbbe6cb67d6ba6cc56fc49319fabc39d895)

## [v0.18.1](https://github.com/alchemy-run/distilled/releases/tag/v0.18.1) (2026-05-07)

### Bug Fixes

- **cloudflare**: remove any requirements from Credentials - by sam in [#271](https://github.com/alchemy-run/distilled/pull/271) [(555c5f4)](https://github.com/alchemy-run/distilled/commit/555c5f4fe69426ada2226320da5ed295942dd951)

## [v0.18.0](https://github.com/alchemy-run/distilled/releases/tag/v0.18.0) (2026-05-07)

### Features

- use Effect Config in SDK src; fix planetscale/posthog/workos tests - by Michael K in [#269](https://github.com/alchemy-run/distilled/pull/269) [(047ffb6)](https://github.com/alchemy-run/distilled/commit/047ffb61938cec15da801c5cc454b22a9373a5d0)
- Update SDK specs - by Michael K in [#268](https://github.com/alchemy-run/distilled/pull/268) [(2b8c4e3)](https://github.com/alchemy-run/distilled/commit/2b8c4e3099bdcf5a95a158ba7411f0af4fb2f751)
- **gcp**: surface gRPC status + details[] from the error envelope - by Andy Jefferson in [#267](https://github.com/alchemy-run/distilled/pull/267) [(71755ea)](https://github.com/alchemy-run/distilled/commit/71755ea4fa3d90ea89899d83c78fd2e148b31ad5)

### Bug Fixes

- **aws/s3**: classify SlowDown as ThrottlingError + RetryableError - by sam in [#270](https://github.com/alchemy-run/distilled/pull/270) [(4449ec5)](https://github.com/alchemy-run/distilled/commit/4449ec59d80dc2079b17b7e3524700828dd5c39a)

## [v0.17.0](https://github.com/alchemy-run/distilled/releases/tag/v0.17.0) (2026-05-06)

### Features

- **gcp**: split into stable and unstable - by Michael K in [#265](https://github.com/alchemy-run/distilled/pull/265) [(8ba3a99)](https://github.com/alchemy-run/distilled/commit/8ba3a990323ffee9cd9355823ccea99a86332003)
- **gcp**: method-keyed default 4xx errors in generator - by Andy Jefferson in [#264](https://github.com/alchemy-run/distilled/pull/264) [(b5e9f57)](https://github.com/alchemy-run/distilled/commit/b5e9f571aec46613d1e56ea8ebaa7a504f0c8d17)

### Bug Fixes

- **planetscale**: add missing nullable and optional fields to branch and role - by Lucas Thevenet in [#230](https://github.com/alchemy-run/distilled/pull/230) [(6b94fc8)](https://github.com/alchemy-run/distilled/commit/6b94fc8f44896296e5a09455a55a34cd969e641e)
- make effect a peer dependency - by Dan van der Merwe in [#266](https://github.com/alchemy-run/distilled/pull/266) [(af4df55)](https://github.com/alchemy-run/distilled/commit/af4df55634f3a7b58c7b8620934efc7f92054bd0)

## [v0.16.9](https://github.com/alchemy-run/distilled/releases/tag/v0.16.9) (2026-05-06)

### Bug Fixes

- **aws/ec2**: add missing operation errors for Route/NatGateway/EIP/RouteTableAssociation - by sam in [#255](https://github.com/alchemy-run/distilled/pull/255) [(6706ca6)](https://github.com/alchemy-run/distilled/commit/6706ca6589bfd2d4ea5f70508f4cb6bbc54a07e3)
- **aws/secrets-manager**: add error categorization - by sam in [#254](https://github.com/alchemy-run/distilled/pull/254) [(8b8b816)](https://github.com/alchemy-run/distilled/commit/8b8b816ca80d9b110a99c42336d8759730ed881d)
- **aws/ecs**: add error categories for retry & semantic handling - by sam in [#253](https://github.com/alchemy-run/distilled/pull/253) [(2eec35a)](https://github.com/alchemy-run/distilled/commit/2eec35a63324e269745aa507e8199163fdda2747)
- **aws/acm**: correct error categories for retry & semantic handling - by sam in [#252](https://github.com/alchemy-run/distilled/pull/252) [(4fddb22)](https://github.com/alchemy-run/distilled/commit/4fddb224a8480fea0377cd0ff173058bcf5e4736)
- **aws/eventbridge**: add error categories + missing operation errors - by sam in [#251](https://github.com/alchemy-run/distilled/pull/251) [(862c420)](https://github.com/alchemy-run/distilled/commit/862c420ba5a74061f787bafdb13a3274664189c0)
- **aws/route-53**: correct error categories for retry & semantic handling - by sam in [#250](https://github.com/alchemy-run/distilled/pull/250) [(1783816)](https://github.com/alchemy-run/distilled/commit/178381654c69694845386fecec3a1d086aefeb15)
- **aws/rds**: add error categories for retry & semantic handling - by sam in [#249](https://github.com/alchemy-run/distilled/pull/249) [(4890e81)](https://github.com/alchemy-run/distilled/commit/4890e81fa5a5cc1be297a4286ad4d5df1c6f5431)
- **aws/scheduler**: mark ConflictException as RetryableError - by sam in [#248](https://github.com/alchemy-run/distilled/pull/248) [(5f8c4d2)](https://github.com/alchemy-run/distilled/commit/5f8c4d202da23aff6dc0cadf6ac4bf50a57d4f4b)
- **aws/ecr**: correct error categories for retry & semantic handling - by sam in [#247](https://github.com/alchemy-run/distilled/pull/247) [(cd4bbac)](https://github.com/alchemy-run/distilled/commit/cd4bbac506bd08bd86182fac262acccdefdfcea5)
- **aws/cloudwatch-logs**: correct error categories for retry & semantic handling - by sam in [#245](https://github.com/alchemy-run/distilled/pull/245) [(aff975c)](https://github.com/alchemy-run/distilled/commit/aff975c660b0172412945bfdaa47daec4e2be3dc)
- **aws/iam**: correct error categories for retry & semantic handling - by sam in [#244](https://github.com/alchemy-run/distilled/pull/244) [(7327065)](https://github.com/alchemy-run/distilled/commit/732706536b00118e07671f186dbaf691d1115ec2)
- **aws/sns**: correct error categories for retry & semantic handling - by sam in [#243](https://github.com/alchemy-run/distilled/pull/243) [(b2b01c5)](https://github.com/alchemy-run/distilled/commit/b2b01c517f93d0b02b25bc36947544fcd49a278e)
- **aws/ec2**: tag IncorrectState as ConflictError - by sam in [#242](https://github.com/alchemy-run/distilled/pull/242) [(55d4c5d)](https://github.com/alchemy-run/distilled/commit/55d4c5deb80fca43150625d4718064ea303555ab)
- **aws/s3**: correct error categories for retry & semantic handling - by sam in [#241](https://github.com/alchemy-run/distilled/pull/241) [(2264ea4)](https://github.com/alchemy-run/distilled/commit/2264ea481f173f2c1a042e614ce7690dcede182b)
- **aws/kinesis**: add error categorization for retry layer - by sam in [#240](https://github.com/alchemy-run/distilled/pull/240) [(7a46f1e)](https://github.com/alchemy-run/distilled/commit/7a46f1e96f4288b50af82815c250cfc686a33e59)
- **aws/dynamodb**: correct error categories for retry & semantic handling - by sam in [#239](https://github.com/alchemy-run/distilled/pull/239) [(58358f9)](https://github.com/alchemy-run/distilled/commit/58358f9c9f349ac044b798648701d92f2b1b56a8)
- **cloudflare/workers**: support ratelimit upload bindings - by Alex in [#256](https://github.com/alchemy-run/distilled/pull/256) [(d5ddb5a)](https://github.com/alchemy-run/distilled/commit/d5ddb5ae2852ddb26b063ba7cc2620b5f173fc4d)
- **aws/sqs**: correct error categories for retry & semantic handling - by sam in [#238](https://github.com/alchemy-run/distilled/pull/238) [(5fd2c0b)](https://github.com/alchemy-run/distilled/commit/5fd2c0b65b0c0d52f26485249c1a09f63a99a96a)

## [v0.16.8](https://github.com/alchemy-run/distilled/releases/tag/v0.16.8) (2026-05-06)

### Bug Fixes

- **cloudflare**: support traces in workers observability - by Michael (Pear) [(99183ce)](https://github.com/alchemy-run/distilled/commit/99183cea57b974c3f8be1105826b51e021dd5a28)
- **gcp**: use path over flatPath so HttpPath substitution works - by Andy Jefferson in [#260](https://github.com/alchemy-run/distilled/pull/260) [(326d01e)](https://github.com/alchemy-run/distilled/commit/326d01ecf1a4c6ddd21bde62ad1581408468d43c)
- **gcp**: emit ReadonlyArray<T> in struct interfaces to match Schema.Array - by Andy Jefferson in [#259](https://github.com/alchemy-run/distilled/pull/259) [(b7ca55e)](https://github.com/alchemy-run/distilled/commit/b7ca55e1534cb02d6f12eb267f35958419329062)
- **gcp**: apply error matchers via AST + typed 4xx errors for cloudresourcemanager v3 - by Andy Jefferson in [#258](https://github.com/alchemy-run/distilled/pull/258) [(3348dbd)](https://github.com/alchemy-run/distilled/commit/3348dbd6d61f2b4f1d9610dff5ed3b76392c926b)

## [v0.16.7](https://github.com/alchemy-run/distilled/releases/tag/v0.16.7) (2026-05-04)

*No significant changes*

## [v0.16.6](https://github.com/alchemy-run/distilled/releases/tag/v0.16.6) (2026-05-04)

*No significant changes*

## [v0.16.5](https://github.com/alchemy-run/distilled/releases/tag/v0.16.5) (2026-05-04)

### Bug Fixes

- depend on effect >= 4.0.0-beta.60 - by Sam Goodwin [(e9385d5)](https://github.com/alchemy-run/distilled/commit/e9385d5d61d6bbe5322db7cf6e62713d7033e493)
- update effect to 4.0.0-beta.60 - by @john-royal in [#235](https://github.com/alchemy-run/distilled/pull/235) [(ff934f9)](https://github.com/alchemy-run/distilled/commit/ff934f981f0c43f357438f33d0d8bd9534fd0e1c)
- **cloudflare**: tag 10001 internal-error variant retryable - by sam in [#233](https://github.com/alchemy-run/distilled/pull/233) [(fce421b)](https://github.com/alchemy-run/distilled/commit/fce421b2c0000a72ac325da790eae11317d1db4e)
- **aws**: wrap SSO cache JSON.parse in Effect.try - by sam in [#234](https://github.com/alchemy-run/distilled/pull/234) [(b3b151b)](https://github.com/alchemy-run/distilled/commit/b3b151b2c5b1d7b98bcbd7bc394b7b5cfda7ae07)

## [v0.16.4](https://github.com/alchemy-run/distilled/releases/tag/v0.16.4) (2026-05-04)

### Bug Fixes

- **cloudflare**: sort Schema.Union variants by specificity - by sam in [#232](https://github.com/alchemy-run/distilled/pull/232) [(1e12c92)](https://github.com/alchemy-run/distilled/commit/1e12c9244f6696fa1dd1b3e65d034f7f551c5e22)

## [v0.16.3](https://github.com/alchemy-run/distilled/releases/tag/v0.16.3) (2026-05-04)

### Features

- **core**: parse Retry-After / Ratelimit headers and honor them in retry policy - by sam in [#228](https://github.com/alchemy-run/distilled/pull/228) [(895697f)](https://github.com/alchemy-run/distilled/commit/895697f9c51e7247d2fa9afa28d741ea7e7f3375)

### Bug Fixes

- **cloudflare**: paginated list ops loop forever on page 1 - by sam in [#231](https://github.com/alchemy-run/distilled/pull/231) [(feedb11)](https://github.com/alchemy-run/distilled/commit/feedb112ed20243d0a9b7cb3f71ffb86ba439288)

## [v0.16.2](https://github.com/alchemy-run/distilled/releases/tag/v0.16.2) (2026-05-04)

### Bug Fixes

- **cloudflare/connectivity**: make listDirectoryServices result_info optional - by sam in [#229](https://github.com/alchemy-run/distilled/pull/229) [(cfde7ce)](https://github.com/alchemy-run/distilled/commit/cfde7ceef9e21ac350d96b49ad3de6b15a9bdeb9)

## [v0.16.1](https://github.com/alchemy-run/distilled/releases/tag/v0.16.1) (2026-05-04)

### Bug Fixes

- **cloudflare**: make ingress hostname optional for cfd tunnel configuration - by sam in [#227](https://github.com/alchemy-run/distilled/pull/227) [(3e67ad4)](https://github.com/alchemy-run/distilled/commit/3e67ad486914ab514eb9fc91cb9f484f335dfc8f)
- **supabase**: tag FreeProjectLimitReached and recover in tests + CI nuke - by Michael K in [#221](https://github.com/alchemy-run/distilled/pull/221) [(4edd245)](https://github.com/alchemy-run/distilled/commit/4edd245c05005c0345bfb8243a3729dcd03846da)
- **ci**: trigger nuke on merge_group destroyed - by Michael K in [#224](https://github.com/alchemy-run/distilled/pull/224) [(c0ce99b)](https://github.com/alchemy-run/distilled/commit/c0ce99b2b9b63b25172b64542e81380a239364b5)

## [v0.16.0](https://github.com/alchemy-run/distilled/releases/tag/v0.16.0) (2026-05-02)

### Features

- **core**: debug logging and per-operation spans - by Michael K in [#223](https://github.com/alchemy-run/distilled/pull/223) [(1b6e0de)](https://github.com/alchemy-run/distilled/commit/1b6e0de931653005123661c00012fc3e95a3574b)
- **expo-eas**: expo-eas sdk - by Michael K in [#204](https://github.com/alchemy-run/distilled/pull/204) [(d8a2f11)](https://github.com/alchemy-run/distilled/commit/d8a2f1197b384145fa61deed8dfb4ff4fe4bbdb7)
- **ci**: pass with no tests across every package + scaffold - by Michael K in [#205](https://github.com/alchemy-run/distilled/pull/205) [(dd1a110)](https://github.com/alchemy-run/distilled/commit/dd1a110cdc50e17260d77f869f3e3fa17b2239d5)

### Bug Fixes

- **tests**: repair CI failures across aws, axiom, posthog, workos - by Michael K in [#219](https://github.com/alchemy-run/distilled/pull/219) [(276d324)](https://github.com/alchemy-run/distilled/commit/276d324cac49a11eef38a996991752e08b2a7121)
- **core**: preserve File/Blob/builtins in unwrapRedactedDeep - by Michael K in [#218](https://github.com/alchemy-run/distilled/pull/218) [(a19249e)](https://github.com/alchemy-run/distilled/commit/a19249ecad055745629b24f2440a4b1f70752561)
- **core**: add T.NoFollowRedirect for ops that return result via Location header - by Michael K in [#214](https://github.com/alchemy-run/distilled/pull/214) [(d274af2)](https://github.com/alchemy-run/distilled/commit/d274af27ac0c46303ab45dec6d9b6de0db32f388)
- **core**: unwrap Redacted values during request input encoding - by Michael K in [#213](https://github.com/alchemy-run/distilled/pull/213) [(20a112f)](https://github.com/alchemy-run/distilled/commit/20a112fe6763504d46cc02ad8e6f9c8cfa2746d1)
- **posthog**: drop 18 dashboard-only endpoints from the SDK surface - by Michael K in [#210](https://github.com/alchemy-run/distilled/pull/210) [(c123364)](https://github.com/alchemy-run/distilled/commit/c123364072182c899de3a520741164f7bd2142e5)
- **workos**: strip required arrays from all 124 response schemas - by Michael K in [#211](https://github.com/alchemy-run/distilled/pull/211) [(337cfe0)](https://github.com/alchemy-run/distilled/commit/337cfe0af7107fc67587bbeaf33cc1ed030abf75)
- **posthog**: drop `required` everywhere + nullable user-like fields - by Michael K in [#209](https://github.com/alchemy-run/distilled/pull/209) [(f7693da)](https://github.com/alchemy-run/distilled/commit/f7693da5637082b9d4d1d9bc71aa84198a1fb966)
- **core**: auto-retry HTTP 429 with capped exponential backoff - by Michael K in [#207](https://github.com/alchemy-run/distilled/pull/207) [(d748e91)](https://github.com/alchemy-run/distilled/commit/d748e91afd9ef979bb136d9283fbac6e53d9ad53)
- **core**: resolve single-element allOf with $ref through to inner type - by Michael K in [#208](https://github.com/alchemy-run/distilled/pull/208) [(9b1cdfd)](https://github.com/alchemy-run/distilled/commit/9b1cdfd184d08a94748dabf8adac53e766f285eb)
- **posthog**: declare @effect/platform-node + @effect/vitest devDeps - by Michael K in [#206](https://github.com/alchemy-run/distilled/pull/206) [(56b093e)](https://github.com/alchemy-run/distilled/commit/56b093e45e1c3e29a988f08c483b6a2b373ef561)

## [v0.15.2](https://github.com/alchemy-run/distilled/releases/tag/v0.15.2) (2026-05-01)

### Bug Fixes

- **cloudflare**: fix secrets store name property - by Sam Goodwin [(a64d16b)](https://github.com/alchemy-run/distilled/commit/a64d16b9eba3d4e09e93736e336a319f0ec7e8a1)

## [v0.15.1](https://github.com/alchemy-run/distilled/releases/tag/v0.15.1) (2026-04-30)

### Bug Fixes

- **cloudflare**: patch errors: TunnelNotFound, DuplicateTunnelName, TunnelTokenNotFound, TunnelConfigurationNotFound, VpcServiceNotFound, VpcServiceNameAlreadyExists, VpcTunnelNotFound - by Sam Goodwin [(bc41009)](https://github.com/alchemy-run/distilled/commit/bc4100940bd7e14893335c996b8b4072324ffbcc)
- **cloudflare**: patch InvalidWorkerScript, ScriptStartupError, ScriptModuleNotFound - by Sam Goodwin [(d0e60b4)](https://github.com/alchemy-run/distilled/commit/d0e60b44a794ab842ee43720d2551e3ac746dfbd)

## [v0.15.0](https://github.com/alchemy-run/distilled/releases/tag/v0.15.0) (2026-04-30)

### Features

- **workos**: create workos sdk - by Michael K in [#203](https://github.com/alchemy-run/distilled/pull/203) [(af98ed2)](https://github.com/alchemy-run/distilled/commit/af98ed2b31d6c1724b71683a44720f762e7be06f)

## [v0.14.0](https://github.com/alchemy-run/distilled/releases/tag/v0.14.0) (2026-04-29)

### Features

- **typesense**: typesense sdk - by Michael K in [#201](https://github.com/alchemy-run/distilled/pull/201) [(85fd8f0)](https://github.com/alchemy-run/distilled/commit/85fd8f0aa9cd8d406663da3ab874f910fdba29e7)

### Bug Fixes

- Add missing extensions on module imports - by Lucas Thevenet in [#199](https://github.com/alchemy-run/distilled/pull/199) [(d949a11)](https://github.com/alchemy-run/distilled/commit/d949a11b678934d89eddff50b0a005856276994e)

## [v0.13.1](https://github.com/alchemy-run/distilled/releases/tag/v0.13.1) (2026-04-28)

### Features

- **posthog**: experimental posthog sdk - by Michael K in [#198](https://github.com/alchemy-run/distilled/pull/198) [(f73df6b)](https://github.com/alchemy-run/distilled/commit/f73df6bf39f7c2fe7a93e6abb146d3f9e96bad32)

### Bug Fixes

- add credential type to all OperationMethod requirements - by Sam Goodwin [(0ef7e30)](https://github.com/alchemy-run/distilled/commit/0ef7e30346bfc991f2503720dd96ea1f281bf3e9)

## [v0.13.0](https://github.com/alchemy-run/distilled/releases/tag/v0.13.0) (2026-04-28)

### Features

- **axiom**: move around exports for better dx - by Michael (Pear) [(7425e30)](https://github.com/alchemy-run/distilled/commit/7425e302c789b9f273e2e483e206a9a5adf83c51)

## [v0.12.7](https://github.com/alchemy-run/distilled/releases/tag/v0.12.7) (2026-04-28)

*No significant changes*

## [v0.12.6](https://github.com/alchemy-run/distilled/releases/tag/v0.12.6) (2026-04-28)

### Bug Fixes

- **cloudflare**: throw Unauthorized and Forbidden errors instead of UnknownCloudflareError - by Sam Goodwin [(5850202)](https://github.com/alchemy-run/distilled/commit/5850202680bcdbb078bae466f4a2d72e444bc7c7)

## [v0.12.5](https://github.com/alchemy-run/distilled/releases/tag/v0.12.5) (2026-04-27)

### Features

- **cloudflare**: ArtifactsStore Worker binding - by Sam Goodwin [(a68704f)](https://github.com/alchemy-run/distilled/commit/a68704f0e9ea0f990731a766ee1cea8df7ee69b0)
- **axiom**: create axiom sdk - by Michael K in [#196](https://github.com/alchemy-run/distilled/pull/196) [(56fa84e)](https://github.com/alchemy-run/distilled/commit/56fa84ed2f991b5f88f7e9aaac5c560647c413f6)
- **scripts**: add --note flag for free-form pipeline nudges - by Michael (Pear) [(22c0777)](https://github.com/alchemy-run/distilled/commit/22c07773026f3d3a3972da2b17983d307451012b)
- **cloudflare**: add R2 object operations (get, put, delete) - by Michael K in [#190](https://github.com/alchemy-run/distilled/pull/190) [(214506f)](https://github.com/alchemy-run/distilled/commit/214506f809dc9d0c96db99591e7eb0ecc62b709c)
- update specs - by Michael K in [#187](https://github.com/alchemy-run/distilled/pull/187) [(188dad8)](https://github.com/alchemy-run/distilled/commit/188dad84229ab56545767a82b2401cbf178fd329)

### Bug Fixes

- **cloudflare**: Pipeline, Sinks and User API Token errors - by Sam Goodwin [(f8b824a)](https://github.com/alchemy-run/distilled/commit/f8b824a13180f02e1aaae571b5d887cbe2bf95ca)
- **cloudflare**: DatabaseAlreadyExists, SubdomainAlreadyExists, InstanceAlreadyExists - by Sam Goodwin [(9d7d757)](https://github.com/alchemy-run/distilled/commit/9d7d757fee5f0714937c831e374a143cb1dc9e3c)
- **cloudflare**: EventNotificationConfigNotFound for BucketEventNotifications - by Sam Goodwin [(337d3cc)](https://github.com/alchemy-run/distilled/commit/337d3cce5a630a9301953f744d3485be24261535)
- **cloudflare**: ConsumerNotFound, ConsumerAlreadyExists, WorkerNotFound, QueueNotFound for Queues - by Sam Goodwin [(527a66e)](https://github.com/alchemy-run/distilled/commit/527a66e7532f35bc1041edab29ca296256eeabd1)
- **cloudflare**: TokenNotFound and PermissionGroupNotFound - by Sam Goodwin [(addfb33)](https://github.com/alchemy-run/distilled/commit/addfb33931e784dcacb8116916ab8f2d6aef039a)
- **cloudflare**: more error tags - by Michael (Pear) [(a66a5a0)](https://github.com/alchemy-run/distilled/commit/a66a5a0ecba38e0e2eb5c361e9d233ffcb8a8d69)
- **scripts**: detect nested + services-layout generated operations - by Michael (Pear) [(aae6808)](https://github.com/alchemy-run/distilled/commit/aae68081ee0982d846218d680d59822e9d0dedf6)
- **scripts**: spawn child scripts via process.execPath on Windows - by Michael (Pear) [(7125d02)](https://github.com/alchemy-run/distilled/commit/7125d02752463c9eb2d7b2ffe927c8fbca374e46)
- **aws**: patch VpcEndpoint.State to be lowercase - by Michael (Pear) [(8b7280f)](https://github.com/alchemy-run/distilled/commit/8b7280fa892fd874c1846b67511451957449db95)
- **cloudflare**: queue push message fails with InvalidMessageBody - by @john-royal in [#195](https://github.com/alchemy-run/distilled/pull/195) [(4277001)](https://github.com/alchemy-run/distilled/commit/4277001a3ffb083b352a9ad8d3d93e336478ed9b)
- **cloudflare**: add missing InvalidCredential error code for r2 data catalog - by @john-royal in [#194](https://github.com/alchemy-run/distilled/pull/194) [(a80a026)](https://github.com/alchemy-run/distilled/commit/a80a026a09924bc348ebff6c4bbb8808b9119f3c)
- **cloudflare**: add DuplicateMigrationTarget error for PutScript - by Michael K in [#189](https://github.com/alchemy-run/distilled/pull/189) [(dc9246c)](https://github.com/alchemy-run/distilled/commit/dc9246ccc4161c18f377b18cd3b9a7a2b95b41c8)

## [v0.12.4](https://github.com/alchemy-run/distilled/releases/tag/v0.12.4) (2026-04-26)

### Bug Fixes

- **cloudflare**: Pipeline, Sinks and User API Token errors - by Sam Goodwin [(998905c)](https://github.com/alchemy-run/distilled/commit/998905c7c190cedf6f181b9a11238b7932ba2f6c)
- **cloudflare**: DatabaseAlreadyExists, SubdomainAlreadyExists, InstanceAlreadyExists - by Sam Goodwin [(e72aeec)](https://github.com/alchemy-run/distilled/commit/e72aeecf564b68696d6b7e5ce849722009384c85)

## [v0.12.3](https://github.com/alchemy-run/distilled/releases/tag/v0.12.3) (2026-04-26)

### Bug Fixes

- **cloudflare**: EventNotificationConfigNotFound for BucketEventNotifications - by Sam Goodwin [(a27917e)](https://github.com/alchemy-run/distilled/commit/a27917edc9881985af6a2d2b728e7a26ad9a3381)
- **cloudflare**: ConsumerNotFound, ConsumerAlreadyExists, WorkerNotFound, QueueNotFound for Queues - by Sam Goodwin [(f58e332)](https://github.com/alchemy-run/distilled/commit/f58e33296bc548129fed2d711f641b10f7cd2cba)

## [v0.12.2](https://github.com/alchemy-run/distilled/releases/tag/v0.12.2) (2026-04-26)

### Bug Fixes

- **cloudflare**: TokenNotFound and PermissionGroupNotFound - by Sam Goodwin [(1cbbc12)](https://github.com/alchemy-run/distilled/commit/1cbbc12f63f15352e692a75a7865138ea7f23ac4)

## [v0.12.1](https://github.com/alchemy-run/distilled/releases/tag/v0.12.1) (2026-04-26)

*No significant changes*

## [v0.12.0](https://github.com/alchemy-run/distilled/releases/tag/v0.12.0) (2026-04-26)

### Bug Fixes

- **cloudflare**: more error tags - by Michael (Pear) [(2379bd3)](https://github.com/alchemy-run/distilled/commit/2379bd3a83539c8000f94e67386b35c2aee02002)

## [v0.11.0](https://github.com/alchemy-run/distilled/releases/tag/v0.11.0) (2026-04-24)

### Features

- **axiom**: create axiom sdk - by Michael K in [#196](https://github.com/alchemy-run/distilled/pull/196) [(d4dd820)](https://github.com/alchemy-run/distilled/commit/d4dd8200c7cbffe95faa00182e2f354bbcbb7c67)
- **scripts**: add --note flag for free-form pipeline nudges - by Michael (Pear) [(0e7db26)](https://github.com/alchemy-run/distilled/commit/0e7db264227a55f35b83ce0b1a188495ec858e75)

### Bug Fixes

- **scripts**: detect nested + services-layout generated operations - by Michael (Pear) [(347aed8)](https://github.com/alchemy-run/distilled/commit/347aed87119942662f79f01fbadcb578ed2c9e49)
- **scripts**: spawn child scripts via process.execPath on Windows - by Michael (Pear) [(e6ecd52)](https://github.com/alchemy-run/distilled/commit/e6ecd5225b1f525058f1f3b10b9792cdaf55b1e4)

## [v0.10.2](https://github.com/alchemy-run/distilled/releases/tag/v0.10.2) (2026-04-16)

### Bug Fixes

- **aws**: patch VpcEndpoint.State to be lowercase - by Michael (Pear) [(e103480)](https://github.com/alchemy-run/distilled/commit/e103480a69e0e05ed383c461011993a818e76864)
- **cloudflare**: queue push message fails with InvalidMessageBody - by @john-royal in [#195](https://github.com/alchemy-run/distilled/pull/195) [(a1d38e6)](https://github.com/alchemy-run/distilled/commit/a1d38e61c06f54056721a446e1f3155c403a969c)
- **cloudflare**: add missing InvalidCredential error code for r2 data catalog - by @john-royal in [#194](https://github.com/alchemy-run/distilled/pull/194) [(7f7dc71)](https://github.com/alchemy-run/distilled/commit/7f7dc714fb3ae186891c3433a79568a16831bbbc)

## [v0.10.1](https://github.com/alchemy-run/distilled/releases/tag/v0.10.1) (2026-04-13)

### Features

- **cloudflare**: add R2 object operations (get, put, delete) - by Michael K in [#190](https://github.com/alchemy-run/distilled/pull/190) [(00e97c6)](https://github.com/alchemy-run/distilled/commit/00e97c61aeb56226d05e27498aab69f2917ef2b2)

### Bug Fixes

- **cloudflare**: add DuplicateMigrationTarget error for PutScript - by Michael K in [#189](https://github.com/alchemy-run/distilled/pull/189) [(14adf68)](https://github.com/alchemy-run/distilled/commit/14adf68c4f050852149ef9f6af34f205b1052949)

## [v0.10.0](https://github.com/alchemy-run/distilled/releases/tag/v0.10.0) (2026-04-13)

### Features

- update specs - by Michael K in [#187](https://github.com/alchemy-run/distilled/pull/187) [(be858fc)](https://github.com/alchemy-run/distilled/commit/be858fc498da9362093a7798bf8f1ea8223c0d70)

## [v0.9.0](https://github.com/alchemy-run/distilled/releases/tag/v0.9.0) (2026-04-13)

*No significant changes*

## [v0.8.0](https://github.com/alchemy-run/distilled/releases/tag/v0.8.0) (2026-04-13)

*No significant changes*

## [v0.7.12](https://github.com/alchemy-run/distilled/releases/tag/v0.7.12) (2026-04-11)

### Features

- **cloudflare**: add workers edge preview routes - by @john-royal [(42b7663)](https://github.com/alchemy-run/distilled/commit/42b7663b60c2db3800a990a639534cf243eddab2)

### Bug Fixes

- **cloudflare**: add InvalidRoute error for edge preview route and handle "wrangler-session-config" property - by @john-royal [(6e32d66)](https://github.com/alchemy-run/distilled/commit/6e32d66b130575fad9147bc3a3717d6ac10b94ca)

## [v0.7.11](https://github.com/alchemy-run/distilled/releases/tag/v0.7.11) (2026-04-08)

### Bug Fixes

- **cloudflare**: patch ServiceBindingConflict in Workers.putScript - by sam in [#184](https://github.com/alchemy-run/distilled/pull/184) [(5d7b3f4)](https://github.com/alchemy-run/distilled/commit/5d7b3f4f7ab80d354d01d60e6d7295bb7b88571e)
- **cloudflare**: patch QueueConsumerConflict error for Workers.putScript - by sam in [#183](https://github.com/alchemy-run/distilled/pull/183) [(b3e4b7d)](https://github.com/alchemy-run/distilled/commit/b3e4b7d77b75477aa7a2b98f7f70db8940d00414)

## [v0.7.10](https://github.com/alchemy-run/distilled/releases/tag/v0.7.10) (2026-04-07)

*No significant changes*

## [v0.7.9](https://github.com/alchemy-run/distilled/releases/tag/v0.7.9) (2026-04-03)

*No significant changes*

## [v0.7.8](https://github.com/alchemy-run/distilled/releases/tag/v0.7.8) (2026-04-03)

### Bug Fixes

- **cloudflare**: patch worker_loader binding in other Worker APIs - by sam in [#181](https://github.com/alchemy-run/distilled/pull/181) [(c48a640)](https://github.com/alchemy-run/distilled/commit/c48a640327e8a6edd1dbdd9140c1d7602dfd17ef)

## [v0.7.7](https://github.com/alchemy-run/distilled/releases/tag/v0.7.7) (2026-04-03)

### Bug Fixes

- **cloudflare**: support worker_loader binding in putScript - by sam in [#180](https://github.com/alchemy-run/distilled/pull/180) [(9c1243f)](https://github.com/alchemy-run/distilled/commit/9c1243f995781ccee07af0a49afad544a2e2ee0b)
- **cloudflare**: add InvalidWorkerScript error tag for Workers.putScript - by sam in [#178](https://github.com/alchemy-run/distilled/pull/178) [(34a176b)](https://github.com/alchemy-run/distilled/commit/34a176b7081bed3f1cdcfebe5b8694c73b6eac7c)

## [v0.7.6](https://github.com/alchemy-run/distilled/releases/tag/v0.7.6) (2026-04-01)

### Features

- **cloudflare**: DurableObjectNotContainerEnabled and DurableObjectMustBeSqlite errors - by sam in [#177](https://github.com/alchemy-run/distilled/pull/177) [(3e211ce)](https://github.com/alchemy-run/distilled/commit/3e211ce7de3a342c5abfe77c814045b42ac7d3d5)

## [v0.7.5](https://github.com/alchemy-run/distilled/releases/tag/v0.7.5) (2026-03-31)

*No significant changes*

## [v0.7.4](https://github.com/alchemy-run/distilled/releases/tag/v0.7.4) (2026-03-31)

### Features

- add CHANGELOG.md and auto-update it on bump - by Michael K in [#171](https://github.com/alchemy-run/distilled/pull/171) [(74dfeaa)](https://github.com/alchemy-run/distilled/commit/74dfeaa3d69a59fe8e8ff6eed28fb739c2ffae1f)

### Bug Fixes

- **cloudflare**: add containers property to Workers.putScript - by sam in [#174](https://github.com/alchemy-run/distilled/pull/174) [(614eb83)](https://github.com/alchemy-run/distilled/commit/614eb83f119753c1f60398a0739880d4f5e46837)

## [v0.7.3](https://github.com/alchemy-run/distilled/releases/tag/v0.7.3) (2026-03-25)

### Bug Fixes

- **cloudflare**: Include error message in CloudflareHttpError - by @sam-goodwin in [#169](https://github.com/alchemy-run/distilled/pull/169) [(8db73)](https://github.com/alchemy-run/distilled/commit/8db73185)
- **cloudflare**: Patch listContainerApplications.constraints to be optional - by @sam-goodwin in [#172](https://github.com/alchemy-run/distilled/pull/172) [(e732d)](https://github.com/alchemy-run/distilled/commit/e732df33)

## [v0.7.2](https://github.com/alchemy-run/distilled/releases/tag/v0.7.2) (2026-03-24)

*No significant changes*

## [v0.7.1](https://github.com/alchemy-run/distilled/releases/tag/v0.7.1) (2026-03-24)

*No significant changes*

## [v0.7.0](https://github.com/alchemy-run/distilled/releases/tag/v0.7.0) (2026-03-20)

### Bug Fixes

- **cloudflare**: Fix incorrect unknown types - by @sam-goodwin and @Mkassabov in [#167](https://github.com/alchemy-run/distilled/pull/167) [(01eda)](https://github.com/alchemy-run/distilled/commit/01eda42c)

## [v0.6.1](https://github.com/alchemy-run/distilled/releases/tag/v0.6.1) (2026-03-18)

*No significant changes*

## [v0.6.0](https://github.com/alchemy-run/distilled/releases/tag/v0.6.0) (2026-03-18)

### Features

- **cloudflare**: Container spec + OpenAPI generation for Cloudflare - by @sam-goodwin and @Mkassabov in [#163](https://github.com/alchemy-run/distilled/pull/163) [(c3e2b)](https://github.com/alchemy-run/distilled/commit/c3e2b1f4)

## [v0.5.5](https://github.com/alchemy-run/distilled/releases/tag/v0.5.5) (2026-03-17)

### Bug Fixes

- **aws**: Patch SendMessageBatchResult.Failed to be optional - by @sam-goodwin in [#162](https://github.com/alchemy-run/distilled/pull/162) [(98b42)](https://github.com/alchemy-run/distilled/commit/98b42c2b)

## [v0.5.4](https://github.com/alchemy-run/distilled/releases/tag/v0.5.4) (2026-03-16)

### Bug Fixes

- **aws**: Patch runInstances with InvalidParameterValue exception - by @sam-goodwin in [#161](https://github.com/alchemy-run/distilled/pull/161) [(d9b4e)](https://github.com/alchemy-run/distilled/commit/d9b4ef01)

## [v0.5.3](https://github.com/alchemy-run/distilled/releases/tag/v0.5.3) (2026-03-15)

### Bug Fixes

- **aws**: Use smithy toBase64 to avoid stackoverflow - by @sam-goodwin in [#157](https://github.com/alchemy-run/distilled/pull/157) [(7a3dc)](https://github.com/alchemy-run/distilled/commit/7a3dc4d2)

## [v0.5.2](https://github.com/alchemy-run/distilled/releases/tag/v0.5.2) (2026-03-15)

### Bug Fixes

- **aws**: Patch Cloudfront KeyValueStore.Comment to be optional - by @sam-goodwin in [#156](https://github.com/alchemy-run/distilled/pull/156) [(30b55)](https://github.com/alchemy-run/distilled/commit/30b55481)
- **website**: Sort SDK cards alphabetically - by @Mkassabov [(661a0)](https://github.com/alchemy-run/distilled/commit/661a054c)

## [v0.5.1](https://github.com/alchemy-run/distilled/releases/tag/v0.5.1) (2026-03-13)

### Features

- **azure**: Create azure sdk - by @Mkassabov in [#154](https://github.com/alchemy-run/distilled/pull/154) [(6e964)](https://github.com/alchemy-run/distilled/commit/6e964620)

### Bug Fixes

- **ci**: Auto-determine git tag/release based on version format - by @Mkassabov in [#151](https://github.com/alchemy-run/distilled/pull/151) [(79f15)](https://github.com/alchemy-run/distilled/commit/79f15f53)

## [v0.5.0](https://github.com/alchemy-run/distilled/releases/tag/v0.5.0) (2026-03-13)

### Features

- Update specs - by @Mkassabov in [#150](https://github.com/alchemy-run/distilled/pull/150) [(deb36)](https://github.com/alchemy-run/distilled/commit/deb36394)
- **k8s**: Create k8s sdk - by @Mkassabov in [#149](https://github.com/alchemy-run/distilled/pull/149) [(f4729)](https://github.com/alchemy-run/distilled/commit/f47294a0)

## [v0.4.0](https://github.com/alchemy-run/distilled/releases/tag/v0.4.0) (2026-03-12)

### Features

- Website - by @Mkassabov in [#126](https://github.com/alchemy-run/distilled/pull/126) [(3be59)](https://github.com/alchemy-run/distilled/commit/3be598b1)
- **cloudflare**: Support API Key and OAuth, add paginated APIs and restore envelope - by @sam-goodwin in [#128](https://github.com/alchemy-run/distilled/pull/128) [(a1c26)](https://github.com/alchemy-run/distilled/commit/a1c260d7)
- **cloudflare**: Add jwtToken property to createAssetUpload - by @sam-goodwin in [#132](https://github.com/alchemy-run/distilled/pull/132) [(240a2)](https://github.com/alchemy-run/distilled/commit/240a269d)

### Bug Fixes

- Use Redacted\<string\> for all sensitive credential fields - by @Mkassabov in [#136](https://github.com/alchemy-run/distilled/pull/136) [(47dcb)](https://github.com/alchemy-run/distilled/commit/47dcb130)
- **ci**: Include core changes in all SDK preview publish filters - by @Mkassabov in [#135](https://github.com/alchemy-run/distilled/pull/135) [(f6fef)](https://github.com/alchemy-run/distilled/commit/f6fef966)
- **ci**: Make pkg-pr preview publishes sequential - by @Mkassabov in [#138](https://github.com/alchemy-run/distilled/pull/138) [(136a2)](https://github.com/alchemy-run/distilled/commit/136a2eb9)

## [v0.2.6](https://github.com/alchemy-run/distilled/releases/tag/v0.2.6) (2026-03-11)

### Features

- **coinbase**: Add coinbase sdk + more reliably create-sdk script - by @Mkassabov in [#122](https://github.com/alchemy-run/distilled/pull/122) [(70d68)](https://github.com/alchemy-run/distilled/commit/70d68b96)

## [v0.2.4](https://github.com/alchemy-run/distilled/releases/tag/v0.2.4) (2026-03-11)

### Bug Fixes

- **cloudflare**: Export Credentials - by @sam-goodwin in [#119](https://github.com/alchemy-run/distilled/pull/119) [(36fd0)](https://github.com/alchemy-run/distilled/commit/36fd0d2f)
- **cloudflare**: Consistently use .ts suffix for relative imports - by @sam-goodwin in [#120](https://github.com/alchemy-run/distilled/pull/120) [(e0399)](https://github.com/alchemy-run/distilled/commit/e0399945)

## [v0.2.3](https://github.com/alchemy-run/distilled/releases/tag/v0.2.3) (2026-03-11)

### Features

- **aws**: Lazy AWS credentials and Auth Service - by @sam-goodwin in [#116](https://github.com/alchemy-run/distilled/pull/116) [(71915)](https://github.com/alchemy-run/distilled/commit/71915d87)

## [v0.2.2](https://github.com/alchemy-run/distilled/releases/tag/v0.2.2) (2026-03-11)

*No significant changes*

## [v0.2.1](https://github.com/alchemy-run/distilled/releases/tag/v0.2.1) (2026-03-11)

*No significant changes*
