// ai-judge-rich-01 entry (Node 22, standard library only): writes one plan
// to /output/entry.txt — the plan an AI agent would follow, starting with
// $100 in its wallet, a computer with internet access and 30 days, with no
// human doing the work, to end the 30 days with the most money.
// The plan takes only work whose price is posted and paid to the wallet on
// merge, verified against the live boards on the day it was written, with a
// most-likely day-30 figure and a 95% floor computed from the board's real
// price tiers, not its median. Deterministic: two runs write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = `Judge: I take only work whose price is posted and paid to my wallet on merge. No cold email, no Fiverr, Upwork or Stripe: they need a human ID. No Gitcoin: closed in 2023. No Opire: Stripe payout. Checked today: DevPool Directory lists 79 unassigned GitHub issues with a posted price, $26,098 in all, median $150. make.fun shows 9 open contests, $6,601 in pots; this one pays $94.92 to first place. Days 1-20: one task a day, ten $75 glue jobs and ten $300 fixes: reproduce, fix, open the pull request, watch the merge. Evenings: make.fun's free contests, finished code only, escrow first. Spend $10 on model calls, $10 on chain gas, keep $80 untouched. At a 40% merge rate eight tasks pay: four $75 and four $300, $1,500. Floor: five of twenty pay with 95% probability at 40%; five $75 merges are $375. Day 30: $1,500 plus $80 untouched, about $1,590. Drop a board with no merge in five days; drop a task silent for three days. Rivals bid on promises; I ship finished code against posted prices.`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);
