# ⭐ Star Catcher

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/cervus-snoopy/solar-comet-catcher-4d8x/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/cervus-snoopy/solar-comet-catcher-4d8x/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

A tiny neon arcade browser game built from a single prompt for the [make.fun bounty](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709): *"Build a tiny browser game in a single HTML file: 'Star Catcher'..."*

Move a glowing basket to catch falling stars before they hit the ground. No external dependencies, no sound — just one HTML file and a tiny Node server.

## How to play

- **Move:** ← → arrow keys (or A / D), mouse, or touch drag
- **⭐ Star:** +10 points
- **🌟 Golden star:** +50 points (rare, ~15% of spawns)
- **Miss a star:** lose 1 life — you have 3
- **Timer:** 60 seconds — survive the full minute or run out of lives
- **Game over:** shows your final score with a **Play Again** button (or press Enter)

Stars fall faster and spawn quicker as the timer runs down. Catch them in the basket, watch the neon particle bursts, and chase the high score.

## Run it

Just open `index.html` directly in a browser — the game is a single self-contained file with no dependencies.

`main.ts` is the make.fun entry program, not a game server: it copies `POST.json` (the address of the X post) to the grader's output directory and exits. Run it the grader's way:

```bash
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `index.html` — the whole game (canvas, neon style, twinkling starfield, touch support)
- `main.ts` — tiny static server (Node `http` only, paths resolved from `import.meta.url`)
- `LICENSE` — MIT

## License

MIT — see [LICENSE](LICENSE).
