# Worst Fix Commit Message

[![make.fun · u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![rank](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/nvtuananhh/worst-fix-commit-message/rank.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![reward](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/nvtuananhh/worst-fix-commit-message/reward.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)

A one-line commit message for the [Make Fun bounty "Worst Fix Ever: Funniest Commit Message"](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722) (slug
`u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722`).

Running `node main.ts` writes a single commit-message line, at most
100 characters, to `/output/entry.txt`, with no trailing newline.
The program uses only the Node standard library and has no
dependencies.

The entry is:

> fix: end race condition by giving every logged-in user the same session

The joke is the repair itself: a race condition is "fixed" by giving
every logged-in user the same session, trading a concurrency bug for
a far worse one in which everyone shares one identity.

## Usage

```sh
node main.ts
```

This writes `/output/entry.txt`. Verify the output with:

```sh
wc -c /output/entry.txt
```

## Referral

Make Fun referral code: `jn15e7qt`

## License

MIT. See [LICENSE](LICENSE).
