# Analisis Kasus: Tim dengan 15 Developer

## 1. Identifikasi Masalah

Skenario: 15 developer, semua commit langsung ke `main`, tidak ada CI/CD,
test coverage 25%, dan bug production terjadi setiap minggu.

| #   | Masalah                   | Dampak                                  |
| --- | ------------------------- | --------------------------------------- |
| 1   | Tidak ada branch strategy | Konflik merge, `main` sering rusak      |
| 2   | Tidak ada code review     | Kode berkualitas rendah masuk           |
| 3   | Tidak ada CI/CD           | Bug tidak terdeteksi sebelum production |
| 4   | Coverage hanya 25%        | Regresi tidak terdeteksi                |
| 5   | Tidak ada quality gate    | Tidak ada standar minimum kualitas      |

**Akar masalah:** kurangnya standarisasi proses integrasi kode. Semua developer
bekerja tanpa kontrak yang jelas tentang bagaimana kode diintegrasikan.

## 2. Standar yang Diterapkan Pertama (Prioritas)

1. **Minggu 1-2: Branch protection + code review.** Menghentikan "pendarahan":
   tanpa ini `main` tetap bisa rusak. Aksi: aktifkan branch protection, wajib 1 reviewer.
2. **Minggu 3-4: CI sederhana.** Deteksi dini build/test yang rusak.
   Aksi: GitHub Actions minimal lint + test.
3. **Minggu 5-8: Naikkan coverage bertahap.** Lompatan 25% ke 80% terlalu besar.
   Aksi: target +10% per 2 minggu.
4. **Minggu 9-12: Quality gate + CD.** Setelah budaya terbentuk, otomasi gate penuh.
   Aksi: coverage threshold di CI, auto-deploy ke staging.

## 3. Roadmap 3 Bulan

**Bulan 1 - Fondasi**

- [ ] Aktifkan branch protection di `main`
- [ ] Terapkan conventional commits
- [ ] Wajib PR + 1 reviewer
- [ ] Setup CI dasar (lint + test)
- [ ] Sosialisasi standar ke tim

**Bulan 2 - Peningkatan**

- [ ] Coverage naik ke 50%
- [ ] Wajib unit test untuk fitur baru
- [ ] Setup coverage reporting (Codecov)
- [ ] Mulai code review checklist
- [ ] Refactor 5 modul paling kritis dengan test

**Bulan 3 - Otomasi Penuh**

- [ ] Coverage naik ke 70%
- [ ] Quality gate aktif (CI gagal jika coverage turun)
- [ ] CD ke staging otomatis
- [ ] Dokumentasi standar lengkap
- [ ] Retrospective dan ukur bug production

## 4. Metrik Keberhasilan

| Metrik                | Baseline | Target 3 Bulan |
| --------------------- | -------- | -------------- |
| Test coverage         | 25%      | ≥70%           |
| Bug production/minggu | ~5       | ≤1             |
| Waktu merge PR        | ?        | <1 hari        |
| Broken `main`/bulan   | ?        | 0              |
| Waktu code review     | ?        | <4 jam         |
