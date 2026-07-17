# Release v2.6.3

**Cross-platform desktop** — Windows, macOS (Apple Silicon), and Linux.

Pushing tag `v2.6.3` triggers [`.github/workflows/release.yml`](../.github/workflows/release.yml), which builds all three platforms and attaches `SHA256.txt`.

See also: [Fork builds from GitHub Actions](FORK_BUILDS.md) · [CHANGELOG](../CHANGELOG.md)

---

## Highlights

- **API key persistence** — real OS keyring backends; credentials survive restart
- **Provider Save = Active** — chat uses the same key you just tested
- **Desktop only** — mobile/Android/iOS removed
- **Release checksums** — `SHA256.txt` uploaded after Win / macOS / Linux builds finish

---

## Download

| Platform | File | VirusTotal |
|----------|------|------------|
| Windows x64 (installer) | `ThatGPT_*_x64-setup.exe` | _[VT link — Windows installer]_ |
| Windows x64 (portable) | `ThatGPT_*_x64-portable.exe` | _[VT link — Windows portable]_ |
| macOS Apple Silicon | `ThatGPT_*_aarch64.dmg` | _[VT link — macOS DMG]_ |
| Linux x64 | `ThatGPT_*_amd64.AppImage` | _[VT link — Linux AppImage]_ |

Checksums: `SHA256.txt`

---

## Tag release

```bash
git tag v2.6.3
git push origin v2.6.3
```

Or run **Actions → Release (Desktop) → Run workflow** with tag `v2.6.3`.
