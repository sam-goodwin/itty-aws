# Changelog

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
