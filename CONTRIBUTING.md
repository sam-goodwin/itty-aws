## Generating SDKS

To generate an SDK just clone the distilled repo. run bun install then run the create-sdk-full command.

Every SDK has all of its sources as git submodules; you can either supply a git repo or an http url to an openapi (and a repo that updates nightly based on that http url will be generated). It's also reccommended you use --note to specify where the openapi spec is in the repo (agents will struggly to find it on their own). 

e.g. bun scripts/create-sdk-full.ts discord https://github.com/discord/discord-api-spec --note "use the spec is in /specs/openapi.json from the provided repo"

⚠️: this will use your local claude code with Opus 4.7. you must be signed in (highly reccomend max 20x plan since generating an SDK + test suite + nuke script is quite expensive). Please do not try and use other coding agents, or manually prompting you way to an SDK.

For larger SDKs its very likely you hit 5hr limits on claude, you can just run the command again when your limits are refershed and it will skip over what its already done on its own. (or if you want you can force skip over certain steps using cli flags see bun ./scripts/create-sdk-full --help)