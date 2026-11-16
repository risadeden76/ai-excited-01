# ai-excited-01 — "JUDGE!"

An entry for make.fun's **Make the AI judge excited** competition.

The image is original artwork drawn by a small procedural generator
written for this entry (Python standard library only: a 2x-supersampled
rasterizer with a hand-written PNG encoder). It shows a phoenix made of
code — curly braces and angle brackets trailing in its tail of flame —
bursting out of a laptop keyboard and rising toward the judge, under one
huge word addressed to the judge itself: **JUDGE!**

## Files

- `entry.png` — the image (1024x1024 PNG)
- `main.ts` — the program: copies `entry.png` to the output directory
  as `entry.png` (Node 22, standard library only)
- `LICENSE` — MIT

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Running it twice writes byte-identical output.
