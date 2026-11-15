# Pengujian dan Integrasi Kode

## Deskripsi

Project latihan penerapan standar pengujian (AAA, FIRST) dan integrasi kode
(GitHub Actions CI) pada modul `User` dan `ShoppingCart`.

## Teknologi

- Node.js v20
- Jest (testing)
- ESLint (linting)
- Prettier (formatting)
- GitHub Actions (CI)

## Cara Menjalankan

```bash
npm install
npm test
npm run test:coverage
npm run lint
npm run format:check
```

## Struktur Project

```text
src/                 -> source code (User.js, ShoppingCart.js)
tests/               -> unit test
.github/workflows/   -> CI workflow (ci.yml)
ANALISIS.md          -> analisis kasus tim 15 developer
```

## Status dan Coverage

![CI](https://github.com/DaimatulMaghvira233/pengujian-integrasi-kode/actions/workflows/ci.yml/badge.svg)

- Total test: 25 (User: 9, ShoppingCart: 16)
- Coverage: 100% (statements, branches, functions, lines)

## Author

- Nama: Daimatul Maghvira
- NIM: E41250971

## Catatan

- Semua test mengikuti struktur AAA (Arrange, Act, Assert)
- Penamaan test: `should [behavior] when [condition]`
- Commit memakai conventional commits
