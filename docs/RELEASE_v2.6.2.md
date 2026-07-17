# Release v2.6.2

**Cross-platform desktop** — Windows, macOS (Apple Silicon), and Linux.

Desktop builds are **manual**: Actions → **Release (Desktop)** → Run workflow (enter tag `v2.6.2`).

See also: [Fork builds from GitHub Actions](FORK_BUILDS.md)

---

## Highlights

- Voice input, OS keychain for API keys, semver update check
- GitHub Actions CI + multi-platform release
- UX fixes: purple user bubbles, message menus, notifications

---

## Download

Run **Release (Desktop)** on tag `v2.6.2`. Artifacts land on the GitHub **Releases** page.

| Platform | File | VirusTotal |
|----------|------|------------|
| Windows x64 (installer) | `ThatGPT_*_x64-setup.exe` | _[VT link — Windows installer]_ |
| Windows x64 (portable) | `ThatGPT_*_x64-portable.exe` | _[VT link — Windows portable]_ |
| macOS Apple Silicon | `ThatGPT_*_aarch64.dmg` | _[VT link — macOS DMG]_ |
| Linux x64 | `ThatGPT_*_amd64.AppImage` | _[VT link — Linux AppImage]_ |

Checksums: `SHA256.txt`

---

## VirusTotal workflow

1. Tag and run desktop release:
   ```bash
   git tag v2.6.2
   git push origin v2.6.2
   ```
   Then Actions → **Release (Desktop)** → Run workflow with tag `v2.6.2`.
2. Download from **GitHub → Releases → v2.6.2 → Assets**.
3. Upload each file to [virustotal.com](https://www.virustotal.com/) → paste links into the table above / Release description.

---

## Install

Download the artifact for your OS from the [GitHub Release](https://github.com/YOUR_ORG/that-gpt/releases/tag/v2.6.2) page.

---

## Build locally (optional)

```bash
npm ci
npm run build
npm run test:rust
```

---

## Upgrade notes

- API keys migrate from `.env` / `providers.json` into OS credential store on first launch (v2.6.1+).
