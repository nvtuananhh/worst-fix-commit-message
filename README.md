# Worst Fix Commit Message

A one-line commit message for the Make Fun competition
"Worst Fix Ever: Funniest Commit Message" (slug
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
