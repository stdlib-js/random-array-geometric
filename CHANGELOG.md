# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2026-01-31)

<section class="commits">

### Commits

<details>

-   [`3f48135`](https://github.com/stdlib-js/stdlib/commit/3f48135698dc83762b7b304b748a783eb5813fed) - **docs:** clean-up code in TSDoc examples _(by Philipp Burckhardt)_
-   [`0d7c7b1`](https://github.com/stdlib-js/stdlib/commit/0d7c7b148724969c79eef40805f7df7c5a61b32c) - **docs:** pass in proper argument in TSDoc example code for `random/array` packages _(by Philipp Burckhardt)_
-   [`54da286`](https://github.com/stdlib-js/stdlib/commit/54da28610f5ee6b2aa181addb1775d32f79043ee) - **test:** use .strictEqual() instead of .equal() and fix lint errors _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-25)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-15)

<section class="features">

### Features

-   [`e25b23b`](https://github.com/stdlib-js/stdlib/commit/e25b23b917ee6e387722db7192d22e4a70222da0) - rename type definitions for array and ndarray data types

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`3baf817`](https://github.com/stdlib-js/stdlib/commit/3baf8170f59557bb8db9100713e5659d1dbb5757) - update keywords

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`e25b23b`](https://github.com/stdlib-js/stdlib/commit/e25b23b917ee6e387722db7192d22e4a70222da0): rename type definitions for array and ndarray data types

    -   In order to migrate, users should update their implementations to
        use the latest naming conventions. The affected type definitions
        are aliases for individual data type strings, so their should be
        no behavioral changes.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`42b1c7e`](https://github.com/stdlib-js/stdlib/commit/42b1c7e18fadf89854f359a3a01cf37c66dd66cc) - **docs:** update related packages sections [(#1290)](https://github.com/stdlib-js/stdlib/pull/1290) _(by stdlib-bot)_
-   [`e99e4bc`](https://github.com/stdlib-js/stdlib/commit/e99e4bc77b1f24bf17daa3c4e38240e3ecf4f2ae) - **docs:** update related packages _(by Athan Reines)_
-   [`09fe11b`](https://github.com/stdlib-js/stdlib/commit/09fe11bbcb5b44d1de82917ffa931f8142ac6418) - **bench:** update require path _(by Athan Reines)_
-   [`59c2959`](https://github.com/stdlib-js/stdlib/commit/59c295931945b701d60d4b7952678f0a0d0e4add) - **docs:** fix JSDoc parameter type regression _(by Athan Reines)_
-   [`afc5695`](https://github.com/stdlib-js/stdlib/commit/afc5695025226656e50d31850ea83c2fbc410f66) - **test:** update tests and documentation _(by Athan Reines)_
-   [`c4b704e`](https://github.com/stdlib-js/stdlib/commit/c4b704e6281c8ea54c2bcf1d2c28d9ced97a9106) - **bench:** rename variable _(by Athan Reines)_
-   [`9137a72`](https://github.com/stdlib-js/stdlib/commit/9137a72ea1b7f55b4b6b7a5ba615caec8f2e92d5) - **test:** update test values _(by Athan Reines)_
-   [`3baf817`](https://github.com/stdlib-js/stdlib/commit/3baf8170f59557bb8db9100713e5659d1dbb5757) - **fix:** update keywords _(by Athan Reines)_
-   [`07ec11c`](https://github.com/stdlib-js/stdlib/commit/07ec11c0cf0bad95717bc16d3623aefa283b7444) - **chore:** update keywords _(by Athan Reines)_
-   [`63ed59b`](https://github.com/stdlib-js/stdlib/commit/63ed59b0cea172c937cead5a8503c2c3d94adeee) - **docs:** fix example and reorder require statements _(by Athan Reines)_
-   [`1ac1ffc`](https://github.com/stdlib-js/stdlib/commit/1ac1ffcb8fe64bf6ecdcc6672f66f849fe9fb1c4) - **docs:** add `assign` documentation _(by Athan Reines)_
-   [`194348a`](https://github.com/stdlib-js/stdlib/commit/194348ab6f3893132079ea588aed08534abd1357) - **test:** add `assign` tests _(by Athan Reines)_
-   [`891c1c3`](https://github.com/stdlib-js/stdlib/commit/891c1c38ee6e4e6fc9eb34caf3eb153b2f4f9294) - **docs:** update descriptions _(by Athan Reines)_
-   [`f034ad0`](https://github.com/stdlib-js/stdlib/commit/f034ad09238d06d60a42ee3c8468f6015a84e849) - **docs:** add `assign` documentation _(by Athan Reines)_
-   [`89e2b9b`](https://github.com/stdlib-js/stdlib/commit/89e2b9bc09d811b9da1e47eee3f20c51521b84a2) - **docs:** add `assign` documentation and update descriptions _(by Athan Reines)_
-   [`1130142`](https://github.com/stdlib-js/stdlib/commit/1130142748596c4b8b59d833f68c3df7e562d182) - **bench:** add `assign` benchmarks _(by Athan Reines)_
-   [`0c7e759`](https://github.com/stdlib-js/stdlib/commit/0c7e75937a85cee97134446936d6ccabf94f1291) - **test:** fix syntax errors _(by Athan Reines)_
-   [`67df9bf`](https://github.com/stdlib-js/stdlib/commit/67df9bfd49fdc1bdcb99d0f39dfc410c3bde1a49) - **refactor:** update implementation to use array tooling and fix documentation _(by Athan Reines)_
-   [`e25b23b`](https://github.com/stdlib-js/stdlib/commit/e25b23b917ee6e387722db7192d22e4a70222da0) - **feat:** rename type definitions for array and ndarray data types _(by Athan Reines)_
-   [`3653808`](https://github.com/stdlib-js/stdlib/commit/3653808823106dcfc1b033a8bd054f4250b12e11) - **build:** remove tslint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="features">

### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2023-07-31)

<section class="features">

### Features

-   [`0b1ec25`](https://github.com/stdlib-js/stdlib/commit/0b1ec25a7543f9954826ae870f5e8979258360e7) - add package for creating an array of geometric pseudorandom numbers [(#971)](https://github.com/stdlib-js/stdlib/pull/971)

</section>

<!-- /.features -->

<section class="issues">

### Closed Issues

This release closes the following issue:

[#879](https://github.com/stdlib-js/stdlib/issues/879)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`2e197bc`](https://github.com/stdlib-js/stdlib/commit/2e197bc4bab1c252c283ff512d82610648368598) - **test:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`55e5756`](https://github.com/stdlib-js/stdlib/commit/55e57561273881a0e5bb1b35489a4801f0d059b6) - **chore:** fix package meta data indentation [(#1033)](https://github.com/stdlib-js/stdlib/pull/1033) _(by stdlib-bot, Athan Reines)_
-   [`0b1ec25`](https://github.com/stdlib-js/stdlib/commit/0b1ec25a7543f9954826ae870f5e8979258360e7) - **feat:** add package for creating an array of geometric pseudorandom numbers [(#971)](https://github.com/stdlib-js/stdlib/pull/971) _(by Yernar Yergaziyev, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt
-   Yernar Yergaziyev

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

