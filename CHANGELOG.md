# Changelog

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
