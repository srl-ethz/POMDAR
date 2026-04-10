# POMDAR

**A Benchmark of Dexterity for Anthropomorphic Robotic Hands**

Project website and resources for the POMDAR benchmark.

## Live site (GitHub Pages)

**https://srl-ethz.github.io/POMDAR/**

Repo: **https://github.com/srl-ethz/POMDAR**

### Why assets sometimes “don’t show” (Git LFS vs Pages)

GitHub’s **default** Pages mode (**deploy from a branch**) publishes files **exactly as stored in Git**. For **Git LFS**, what’s stored in Git is a **small pointer file**, not the real binary. **GitHub Pages does not resolve LFS** in that mode — the browser receives pointers, so meshes/videos break. This is the same limitation discussed in the community thread: [“Can’t see LFS files on github website”](https://github.com/orgs/community/discussions/149620).

You have two workable approaches:

| Approach | What to do |
|----------|------------|
| **A. GitHub Actions deploy (this repo)** | **Settings → Pages → Source: GitHub Actions** (not “Deploy from a branch”). The workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) runs `actions/checkout` with **`lfs: true`**, then uploads the **`docs/`** folder **with real LFS files expanded** — so `.mov` / `.stl` / etc. still in LFS in the repo, but the **published site** gets the actual bytes. |
| **B. Don’t use LFS for static web assets** | Keep small files (e.g. **`.obj` meshes**) as **normal Git blobs** so **any** Pages mode serves them. This repo stores **`.obj` in plain Git** for that reason. Very large media can be hosted on a **CDN / Releases** and linked by URL instead. |

**Do not** rely on branch-only deploy if the site must load LFS-tracked files, unless you use **A** or move those assets out of LFS (**B**).

---

## Publish / update the site

1. Push to **`main`**.
2. **Settings → Pages → Build and deployment → Source:** **GitHub Actions**.
3. Wait for the **Deploy GitHub Pages** workflow (green check on the **Actions** tab).
4. Open **https://srl-ethz.github.io/POMDAR/**

If you still use **“Deploy from a branch”** → **`/docs`**, LFS-backed assets (e.g. **`.mov`**, **`.stl`**) will **not** work in the browser until you switch to **GitHub Actions** or stop using LFS for those paths.

---

## Git LFS (what stays in LFS)

See [`.gitattributes`](.gitattributes). Typical patterns:

- **In LFS:** `.mov`, `.stl`, `.ply`, `.dae`, `.mjb` (large binaries).
- **Plain Git (not LFS):** **`.obj`** MuJoCo meshes — small enough for normal Git and **required** for static serving if you ever use branch deploy without resolving LFS.

Install locally before push/clone:

```bash
brew install git-lfs   # macOS
git lfs install
git lfs pull            # after clone, fetch LFS objects
```

**GitHub limits:** normal Git rejects files **> 100 MB** per file. Large clips may need LFS or re-encoding. See [About Git LFS](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-git-large-file-storage).

---

## Updating the site

Edit **`docs/`** (the deployed tree). Sync from your dev folder into `docs/` before committing.

## License

Add your license as needed.
