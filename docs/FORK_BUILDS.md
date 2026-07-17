# Fork workflow — GitHub Actions builds

Use this guide to build **ThatGPT** desktop artifacts on GitHub Actions from your own fork — without setting up cross-compilers locally.

---

## 1. Fork the repository

1. Open the upstream repo on GitHub.
2. Click **Fork** → create a fork under your account.
3. Clone your fork:

```bash
git clone https://github.com/YOUR_USERNAME/that-gpt.git
cd that-gpt
```

---

## 2. Enable GitHub Actions

1. Go to your fork on GitHub → **Settings** → **Actions** → **General**.
2. Set **Actions permissions** to **Allow all actions and reusable workflows** (or allow selected actions including `tauri-apps/tauri-action`).
3. Save.

Forks do not run workflows until Actions is enabled.

---

## 3. Build desktop release

Desktop Win/macOS/Linux builds automatically when you push a version tag:

```bash
git tag v2.6.3
git push origin v2.6.3
```

That triggers **Release (Desktop)** (`release.yml`):

| Runner | Produces |
|--------|----------|
| `windows-latest` | Windows installer (+ portable if configured) |
| `macos-latest` | macOS Apple Silicon DMG |
| `ubuntu-22.04` | Linux AppImage |
| checksums job | `SHA256.txt` attached to the Release |

You can also run it manually: **Actions → Release (Desktop) → Run workflow** and enter the tag.

---

## 4. Download artifacts

When the workflow finishes:

1. Open **Releases** on your fork.
2. Download binaries from **Assets**.

Expected files:

```
ThatGPT_2.6.3_x64-setup.exe          # Windows installer
ThatGPT_2.6.3_x64-portable.exe       # Windows portable (if present)
ThatGPT_2.6.3_aarch64.dmg            # macOS Apple Silicon
ThatGPT_2.6.3_amd64.AppImage         # Linux
SHA256.txt                           # Checksums for all assets
```

---

## 5. CI without a release (PR / push)

| Workflow | Trigger | Output |
|----------|---------|--------|
| `ci.yml` | push / PR to `main` | Rust tests + client build |
| `release.yml` | tag `v*.*.*` or **manual** | Desktop Win/macOS/Linux + `SHA256.txt` |

---

## 6. VirusTotal (optional)

After downloading release assets, upload each binary to [VirusTotal](https://www.virustotal.com/) and paste public links into [RELEASE_v2.6.3.md](RELEASE_v2.6.3.md).

| Artifact | Placeholder |
|----------|-------------|
| Windows installer | _[VT link — Windows installer]_ |
| Windows portable | _[VT link — Windows portable]_ |
| macOS DMG | _[VT link — macOS DMG]_ |
| Linux AppImage | _[VT link — Linux AppImage]_ |

---

## 7. Troubleshooting

### Actions disabled on fork

**Settings → Actions → General** → allow workflows, then re-push the tag or re-run the workflow.

### Release empty

Ensure `permissions: contents: write` is set and the tag exists on the repo before (or when) the workflow runs.

### Checksums missing

The `checksums` job runs after all platform builds. Wait for the full workflow; `SHA256.txt` is uploaded last.

---

## 8. One-page checklist

- [ ] Fork repo
- [ ] Enable Actions on fork
- [ ] Push tag (e.g. `v2.6.3`)
- [ ] Wait for **Release (Desktop)** (Win + macOS + Linux + checksums)
- [ ] Download assets from GitHub Release
- [ ] (Optional) Upload to VirusTotal and update release notes

Desktop signing uses Tauri’s default CI flow via `tauri-action`.
