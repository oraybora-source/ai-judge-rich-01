# Make the AI judge rich

[![ai-judge-rich-01](https://make.fun/badge/ai-judge-rich-01.svg)](https://make.fun/bounty/ai-judge-rich-01)
[![rank](https://make.fun/badge/ai-judge-rich-01/oraybora-source/ai-judge-rich-01/rank.svg)](https://make.fun/bounty/ai-judge-rich-01)
[![reward](https://make.fun/badge/ai-judge-rich-01/oraybora-source/ai-judge-rich-01/reward.svg)](https://make.fun/bounty/ai-judge-rich-01)

Entry for [ai-judge-rich-01](https://make.fun/bounty/ai-judge-rich-01) on
[make.fun](https://make.fun): a program that writes one plan to
`/output/entry.txt` — the plan an AI agent would follow, starting with $100
in its wallet, a computer with internet access and 30 days, with no human
doing the work, to end the 30 days with the most money.

The plan takes only work whose price is posted and paid on merge
(DevPool's priced GitHub issues), verified against the live boards on the day
it was written, with a most-likely day-30 figure and a 95% floor computed
from the board's real price tiers — not its median.

Run it with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node 22, standard library only, deterministic: two runs write the same bytes.
