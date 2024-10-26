# Дипломная работа по теме: Разработка современного SPA для ресторана с использованием фреймворка Vue, библиотеки Pinia и Vue Router.

# Diploma_thesis_restaurant_website

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Headed Component Tests with [Cypress Component Testing](https://on.cypress.io/component)

```sh
npm run test:unit:dev # or `npm run test:unit` for headless testing
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

```
Diploma_thesis_restaurant_website
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 01
│  │  │  └─ 03c2e43ed1488522237ac29ba89102cd549c5e
│  │  ├─ 02
│  │  │  └─ e4254378e9785f013be7cc8d94a8229dcbcbb7
│  │  ├─ 04
│  │  │  └─ de745a52c47e3d86a1e70fc7e8f5002901c8f9
│  │  ├─ 08
│  │  │  └─ 70b0c9a84af18bd222123f2fd225083e483fc6
│  │  ├─ 09
│  │  │  └─ 9d3b5ae4efa014f567cc2cae7040846e0abeec
│  │  ├─ 0a
│  │  │  └─ fa69d2837d1ec655ae7139001e6df5a4bfc040
│  │  ├─ 0c
│  │  │  └─ 065b924bb5fa4111890dc78b76d68cc1d6d403
│  │  ├─ 0d
│  │  │  └─ 69936fd8aa0e0e08a2a6e952585a962354ce44
│  │  ├─ 0e
│  │  │  ├─ 652d120205b2ac6dd2fa3b9f32f5369ae613a3
│  │  │  └─ 8a955f10069bbf2eec15a0bdb1c68a9db7ef0b
│  │  ├─ 11
│  │  │  └─ 9ab03f7cda1f826e896639924a8612d075d3fc
│  │  ├─ 15
│  │  │  └─ 9afc1633e636f56655b5a8f2c3be25234dd73e
│  │  ├─ 19
│  │  │  ├─ 104f95fdf4c0db9ff69350e2655ff789c2cf65
│  │  │  ├─ 31acfef9913dd69c9b3c224e86510a620a39fa
│  │  │  └─ ba77659e38aae4f8aa2a3ee0ede061a734cc57
│  │  ├─ 1d
│  │  │  └─ 41e552eaa4b0fc5fa257eaceb7921d1ff4cce4
│  │  ├─ 22
│  │  │  └─ ac485545a7a58daccc54379f3446eaa6f1c8a2
│  │  ├─ 24
│  │  │  └─ 197754f6ac21c1521ee7a451368294f586a734
│  │  ├─ 25
│  │  │  └─ d463c17987ecf45d2b10f5d83b2eb193706025
│  │  ├─ 28
│  │  │  └─ d7dc00f45eb1df01307ea51cd6f434aa7c6153
│  │  ├─ 2a
│  │  │  └─ 1d89bfee1effc305de9909d93b9d401409bcb5
│  │  ├─ 2d
│  │  │  └─ c8b055253af30fb797037e2fe260505f0cf711
│  │  ├─ 2e
│  │  │  └─ 7af2b7f1a6f391da1631d93968a9d487ba977d
│  │  ├─ 2f
│  │  │  └─ 2bdc892a9d31d18de010b988f92a6e4c3d3b88
│  │  ├─ 31
│  │  │  └─ fe62dcb07ce4ce32a1c851288721ef90881dc9
│  │  ├─ 32
│  │  │  └─ d1da5dbda0c3ebe40c85e6f6cb05479e5d02ff
│  │  ├─ 33
│  │  │  ├─ 641e9fd5a0fa16910628be51ab43879123d234
│  │  │  └─ cf2193cce53f1e29e16a5e17110e6ce271394b
│  │  ├─ 36
│  │  │  ├─ aa3e54e17e3f13f1f066aaec49b122325e0cac
│  │  │  └─ fb845b5232b8594b0d0f0e61a8cff0b73a4128
│  │  ├─ 37
│  │  │  ├─ dc79fc36c337b170506917a3dec07bd5cb5ad6
│  │  │  └─ fd95e8784a58601ef29895d301c27f8ef349f2
│  │  ├─ 38
│  │  │  ├─ 373688942629894431c682027a3981dcbc0d1c
│  │  │  └─ 78d5e0cbbd7d937127a5b6a8f88af4764e38cd
│  │  ├─ 3e
│  │  │  ├─ c4555e5e2ea5bd690d531fb6ab828bc2d345c4
│  │  │  └─ f5d279cf26da97e4a63810fbace90959c4541c
│  │  ├─ 3f
│  │  │  └─ 03caf7e50fb21ff964274f821d765cf9f435b1
│  │  ├─ 42
│  │  │  └─ 69aef0814e4d291af17753bf67ff2cb88f92d4
│  │  ├─ 45
│  │  │  └─ d9af963990c18fa3bab78454228f81b16b2f75
│  │  ├─ 47
│  │  │  └─ 6dff63bee8dfdf57651096c9c4691dc9b09bb9
│  │  ├─ 4e
│  │  │  ├─ 982597d17a810e807aa6dc7134f7d734dd5347
│  │  │  └─ a2cf66859a966428c75edc20af4be122be5a6c
│  │  ├─ 4f
│  │  │  ├─ 091104f21631bd01fcafd5011ceb6a5e133e1f
│  │  │  └─ 87355fa92c98cb7c78d67a8f9a4696cb65cdb8
│  │  ├─ 51
│  │  │  ├─ a1b6c49d0c5f412f5ada2cab0553164764626c
│  │  │  └─ b3dbafa4c70f1a98ac48f2bb2dca60d7ba0928
│  │  ├─ 52
│  │  │  ├─ 476279b71cb701d8e5e0a16619967e2b82ddd5
│  │  │  ├─ c2dafea216396d16d2d19354fbc15f82d754d3
│  │  │  └─ cc63dbc1725051cdefbc2155b44414f41c42ba
│  │  ├─ 53
│  │  │  ├─ 30a4827c7e12739b7a7c7f08d4cfeb496d870d
│  │  │  └─ 5a0e51c319d1d74d60d2f97f0ef951844fdcab
│  │  ├─ 55
│  │  │  └─ 6e2afc33c66310c43d2968ecbf65b944db7f5f
│  │  ├─ 57
│  │  │  └─ 253436593f47e8bcca61a23de8e5702e6f6b5a
│  │  ├─ 59
│  │  │  └─ 677240e17b4cecd3a5cf6f0acbb13f395cc195
│  │  ├─ 5a
│  │  │  └─ 1f2d222a302a174e710614c6d76531b7bda926
│  │  ├─ 5c
│  │  │  └─ 45e1d9b4e65e3a35bb0435436935a3090b5591
│  │  ├─ 5d
│  │  │  ├─ cad83c30800a564e96bad81c93d6be2ffaceaa
│  │  │  └─ eb0cf7fbd86111a6d9e9788d631a5c51cc7e4e
│  │  ├─ 5e
│  │  │  └─ 872dc3397badec385591dc38d02cb5a9850334
│  │  ├─ 5f
│  │  │  ├─ 9622ae29453535a9939e12f0efe0a84b165874
│  │  │  ├─ b372c9c9e8ad63c632a14fb0323627dbdf6bb1
│  │  │  └─ ea4837434c8d916e2003c5edf67851ecee15f5
│  │  ├─ 61
│  │  │  └─ 5d5ef9ad7ae31f88489a225bc7e0e3712c33c0
│  │  ├─ 65
│  │  │  └─ c1369f1d5b486ac43c5caf6fb339275a1be52e
│  │  ├─ 66
│  │  │  ├─ 0598d7c76644ffe126a1a1feb1606650bfb937
│  │  │  └─ 1686e53ea52c5fb286c99c1612be3061424448
│  │  ├─ 6a
│  │  │  └─ 13d77f2221dfa0c8eb695b92721377860e33e2
│  │  ├─ 6b
│  │  │  ├─ 0a07e14c9fdb62a8f77a7779c1e17d345c5850
│  │  │  ├─ 975c6e599a21b8681127ef51b9656db64692c2
│  │  │  └─ b706f08b841ad18ad98fa022e34b1095749521
│  │  ├─ 6d
│  │  │  └─ 4791cfbcf2782b3e5ffbabd042d4c47b2fbbed
│  │  ├─ 6e
│  │  │  └─ 6da34a54c099e6111ff55c99a6f1dd0f83e9c2
│  │  ├─ 71
│  │  │  └─ 9f56c8c762f648952d0f1646c29e0a26b21e35
│  │  ├─ 72
│  │  │  ├─ 06a4b36a37fced2d99d58e1fe1dfdea9f41af8
│  │  │  └─ 83cad6de351c3afb7304f9750eff81d99f8098
│  │  ├─ 74
│  │  │  ├─ 52834d3ef961ce24c3a072ddba2620b6158bae
│  │  │  ├─ eeb8e91e7c7dced6ce48e4f687d63faa684bd1
│  │  │  └─ fd6ccc3cee11e2102407e65c5513500d7bbfce
│  │  ├─ 75
│  │  │  ├─ 54c35d8d0ff1412457a5ae7f8649a9871cc21b
│  │  │  ├─ 65660356e5b3723c9c33d508b830c9cfbea29f
│  │  │  └─ 6ad2a17909837834858538422308120cf09dab
│  │  ├─ 78
│  │  │  └─ 5ded6dc88c7e1c4ef8a109e290a13c950c2eed
│  │  ├─ 79
│  │  │  ├─ 9867b504c9521977deb52ca02bc8eed16f83f8
│  │  │  └─ b024d476b705203a90d7d80501796150b62924
│  │  ├─ 7a
│  │  │  └─ 1264c54edbe76066d4928773dbcb495874f2ef
│  │  ├─ 7c
│  │  │  └─ 6d096575fab0dd215a5a7813267e1aa5d7b955
│  │  ├─ 7f
│  │  │  └─ 2b31ae35c24ef2e09650884cbc27faddb86dfa
│  │  ├─ 83
│  │  │  └─ 9b6d78709089dbaecbcc2c3eabae35bb7e5aa3
│  │  ├─ 84
│  │  │  ├─ 8801439526dfcd814a0f9060f49a36fb1e7a72
│  │  │  └─ ae43a59e072e2b39155d0e68559be019a96705
│  │  ├─ 85
│  │  │  ├─ 091345b978a44242ef94d6b60a15748194433a
│  │  │  └─ e42c891fee11f22a906bd108251b558df08963
│  │  ├─ 87
│  │  │  └─ da7d2ceed8e42de0f48bdd0956831da0cdee6a
│  │  ├─ 88
│  │  │  └─ 16868a41b651f318dee87c6784ebcd6e29eca1
│  │  ├─ 8c
│  │  │  └─ 91b67ba8ac7856eb06250ac075c4da10adc02c
│  │  ├─ 8d
│  │  │  └─ 58a9a18fd0798fef8f6ee0e4b3ca73aa945adc
│  │  ├─ 8e
│  │  │  └─ e54e8d343e466a213c8c30aa04be77126b170d
│  │  ├─ 8f
│  │  │  └─ 4850b21729fc3b8aec7783f840fcecf5999318
│  │  ├─ 92
│  │  │  ├─ 672b8d475c77f6fee0f5063b8beef14c4ef362
│  │  │  └─ ecc3ee7c500bb4a2a35bf05dc323264d4ecb65
│  │  ├─ 93
│  │  │  └─ 4407186868f06dfc885de4fb62eaec0983fae2
│  │  ├─ 95
│  │  │  └─ 15c364736273828364eb165e837e0e0d3432df
│  │  ├─ 99
│  │  │  ├─ 2e1f26136cc98aee06b3a9ad5ced4e6117d4e4
│  │  │  ├─ c7955d55dc18c06d3dac85fe52db1199a330b9
│  │  │  ├─ ca5e39aa4a81e5b77600b4469154eb6cba7ff2
│  │  │  └─ f583aa2b835f6885f2c233a0e1f6d395fa42af
│  │  ├─ 9a
│  │  │  ├─ 56b0639be628accea69fd81bee226083c46cbf
│  │  │  └─ dac8e4e6a3885ea19e5ad64b3ad1eb9f041d02
│  │  ├─ 9c
│  │  │  ├─ 2e4de6e28ee58bc5a7b5e16a750b9f2e7f2cad
│  │  │  └─ cebb65103e989bf0f08ce4eabe8d4702fb75ac
│  │  ├─ 9f
│  │  │  └─ fc1558b04339da37735f567a29d1b63c0c6c97
│  │  ├─ a0
│  │  │  └─ 6fe4388bbf4078737457442cf10184e95395f4
│  │  ├─ a1
│  │  │  └─ 9a58c59b7a111eb25d81ace619d0e9e378ecdf
│  │  ├─ a2
│  │  │  └─ 021024d09fa3b5ce7e182f1eb41e5798222e76
│  │  ├─ a4
│  │  │  ├─ 33af0455fa6f5c59f8804a993621f8c3e9610d
│  │  │  └─ 9ae507f39bdb792025d7c4bd1573b876e8cc96
│  │  ├─ a5
│  │  │  └─ b03f7988a8344dbbf48c0d309497a8f3b51544
│  │  ├─ a7
│  │  │  ├─ 6d515a0acb92e3a83f684dab6abf8a202af7af
│  │  │  └─ cea0b0678120a1b590d1b6592c7318039b9179
│  │  ├─ a8
│  │  │  └─ 152dc4c921d77c48343d1c085b7288d9e70a9c
│  │  ├─ ab
│  │  │  └─ cac6393f59273a3daaeef95cf519b80b899370
│  │  ├─ ac
│  │  │  ├─ 366d0740bfa462d7e9f290137601a3f3139ecc
│  │  │  └─ ea156a6ff9741ee76dc11b1cc22fc72bd5513f
│  │  ├─ ad
│  │  │  └─ 06028c414781e42ee6dfbbb221e01d015659fe
│  │  ├─ b0
│  │  │  └─ 9c56def5d729cfb6fc6b2ceb5cb5fa9f138e7d
│  │  ├─ b3
│  │  │  └─ 5299f97b39015fd181a595ae2c7bdd3f239ff5
│  │  ├─ b6
│  │  │  ├─ 18100026c83e10206e7ee4da7e0e834465ad77
│  │  │  ├─ 757ba5723c5b89b35d011b9558d025bbcde402
│  │  │  └─ eca298c74b0cdb0d0bf101cd8c4a9bd9df89eb
│  │  ├─ b8
│  │  │  └─ 2d670d54186d7268abbb23793004428180809d
│  │  ├─ b9
│  │  │  └─ 3f05fdf22767606d642c6d5bfe1cfb8d4ffbad
│  │  ├─ bb
│  │  │  └─ 139d25e5948c5882a74a0a341153a50974f99d
│  │  ├─ bf
│  │  │  ├─ 1f8accd55e84a9bbd4459c7126f09cf8e8e96e
│  │  │  ├─ 61891fb17842cc80d7ae4e1d293fd70a0a6f1d
│  │  │  └─ a30e454a512619929310a8c62b17dd2bcc9f11
│  │  ├─ c1
│  │  │  ├─ 89a4a514957d8c61d06c2d8d9a591ffedb574b
│  │  │  ├─ 8cd6ef7f08cd51864fcd22e6db01b8e3e5c99c
│  │  │  └─ bc4e2a9e1391c4b69b78dcc6da5508141500a6
│  │  ├─ c2
│  │  │  ├─ 116f9e5c16ebcfd14ff030529d251335bc70aa
│  │  │  └─ ab92742939d54636f0b90087cc687e8e2c1519
│  │  ├─ c3
│  │  │  └─ a4f078c0bd340a33c61ea9ecd8a755d03571ed
│  │  ├─ c5
│  │  │  ├─ 724ca66fecf1d3e61cc852c684e4a087082bee
│  │  │  └─ b812a661cab8c8603d7d7daf5d40b7064358b3
│  │  ├─ c6
│  │  │  └─ f944bc28477a5bdc4533af658e02383d0af38c
│  │  ├─ c7
│  │  │  ├─ 151be4982baf0fdcd4a50db647754493bddbf4
│  │  │  ├─ 90a70d6eda522396f4e19c62f9500e190b243c
│  │  │  └─ db53c14de9351b72763c9da8743f24a16314d1
│  │  ├─ c8
│  │  │  ├─ 827a5563eec7b5a02384a29bc3c2b436452021
│  │  │  └─ fac12982caf06e0ec8a5834d9075ce19910586
│  │  ├─ cc
│  │  │  └─ 2b43dd093f217493b43981ed66d2229eb224c7
│  │  ├─ cf
│  │  │  ├─ 56a2206bae001a456c33568cabb87e82b25b11
│  │  │  └─ e12a9ce1753ef1487e49a438fefea2349ca86b
│  │  ├─ d1
│  │  │  ├─ 2bfc0213af3af3f39def231726b73c138c3247
│  │  │  └─ 7638104a5ff9397ea48405986750a7a003c02a
│  │  ├─ d5
│  │  │  └─ 05997db73c2e030e7988f6ed75ccf1f9206ebf
│  │  ├─ d6
│  │  │  └─ 8db96df2697e0835f5c490db0c2cc81673f407
│  │  ├─ da
│  │  │  └─ b95367d4cb1dfe39b9c898fcd087ee3eda35b6
│  │  ├─ db
│  │  │  ├─ 44f6ce98967d812dc0f61bedbf20b169513eaf
│  │  │  └─ 91cab98389acf24cb3920a9bd7e89ff35c5b60
│  │  ├─ dd
│  │  │  └─ 4033c8cb5586cb397574835aeb59648bb1ec65
│  │  ├─ de
│  │  │  └─ 2fc97df1381a15c81fcf7738155b5c228c3e0d
│  │  ├─ df
│  │  │  └─ fdea41d2d88cfbcfb329d2ec11ae0f2aa2a296
│  │  ├─ e4
│  │  │  └─ 4b337224464b448aca698947c86d4e6fcaf28c
│  │  ├─ e6
│  │  │  ├─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  │  └─ a07b2ad931be6285d8d844026a2e66c72d18d0
│  │  ├─ e8
│  │  │  └─ 64195002371619c22d0454351235745b2a4f3f
│  │  ├─ ea
│  │  │  ├─ 5fdf3f2764dc825e3f39d766358866d70b41b5
│  │  │  └─ a320acf8e11fd3b0e7bd67813bbd4c48a8a85a
│  │  ├─ ec
│  │  │  └─ 3b20341c99b613f1fa3af9e8c79f36a1661db8
│  │  ├─ ee
│  │  │  └─ 8307ee9a242cd2e91ed70b4e4a4538e14f37b3
│  │  ├─ ef
│  │  │  └─ ca2889abba3f2e5a1540a33dc972012b9f0b0c
│  │  ├─ f1
│  │  │  └─ 3fb039a60f5ce8d77ac50239d72d70ad1477db
│  │  ├─ f2
│  │  │  └─ 4d3db919a599d2870817b978f46ea2869459e1
│  │  ├─ f3
│  │  │  └─ c09e5bbadb0567484c0f7e2ab116da9ba01a2d
│  │  ├─ f4
│  │  │  └─ a47150c2b08f61d26222de892b4e69f604b9f5
│  │  ├─ f5
│  │  │  └─ 10016c149867bc0ecb0a53aea23cf01c666861
│  │  ├─ f7
│  │  │  └─ 6cdc27bc4c6bf5ced6227159aa7d9e0253ec9f
│  │  ├─ f9
│  │  │  ├─ 7a7d886cbd363afe02812995c3aa356dc22bd3
│  │  │  └─ f5025d475fb90d33e87e378aa67892b153c494
│  │  ├─ fa
│  │  │  └─ 9873ef8a2340a83b0b2edbe2c7f566f9246546
│  │  ├─ fb
│  │  │  ├─ 31ea5daa6cd22b060eb2891c415dbb906fdaa1
│  │  │  └─ 80a1a4789bcccfce0ea5cb59b0e19ad9fd797c
│  │  ├─ fd
│  │  │  └─ d8bd570257ef5aefe4387126d7300f0a23dd7b
│  │  ├─ fe
│  │  │  └─ d35e03d09873df574b3a2431ea984e936c93cc
│  │  ├─ ff
│  │  │  └─ 3643a61569e3671ee8cf0da9d87cab1717e8d4
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ cypress
│  ├─ e2e
│  │  ├─ example.cy.js
│  │  └─ jsconfig.json
│  ├─ fixtures
│  │  └─ example.json
│  └─ support
│     ├─ commands.js
│     ├─ component-index.html
│     ├─ component.js
│     └─ e2e.js
├─ cypress.config.js
├─ index.html
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  └─ favicon.ico
├─ README.md
├─ Server
│  ├─ bookings.json
│  ├─ data
│  │  ├─ data-articles.json
│  │  └─ data-menu.json
│  ├─ emails.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ server copy 2.js
│  ├─ server copy 3.js
│  ├─ server copy.js
│  └─ server.js
├─ src
│  ├─ App.vue
│  ├─ assets
│  │  ├─ bookingForm
│  │  │  └─ background-booking-form.svg
│  │  ├─ comingSoon
│  │  │  └─ Image.jpeg
│  │  ├─ headerHome
│  │  │  ├─ Image.jpeg
│  │  │  ├─ ImageBox1.jpeg
│  │  │  ├─ ImageBox2.jpeg
│  │  │  ├─ spices1.png
│  │  │  ├─ spices2.png
│  │  │  └─ spices3.png
│  │  ├─ home
│  │  │  ├─ backgroundChef.jpeg
│  │  │  ├─ backgroundChef.svg
│  │  │  ├─ Image.png
│  │  │  ├─ imageChef.png
│  │  │  └─ imageMenu.png
│  │  ├─ icons
│  │  │  ├─ circleIcon-fresh-fruit.svg
│  │  │  ├─ circleIcon-premium-quality.svg
│  │  │  ├─ circleIcon-seasonal-vegetables.svg
│  │  │  └─ Icon_angle-down.svg
│  │  ├─ Logo.svg
│  │  ├─ main.css
│  │  ├─ menu
│  │  │  └─ NavigationFullscreenCover.jpg
│  │  └─ menuView
│  │     ├─ background-image-drinks.svg
│  │     ├─ background-image-starters.svg
│  │     ├─ Image.jpg
│  │     ├─ mains-big-image.jpg
│  │     ├─ pastries-&-drinks-big-image.jpg
│  │     └─ starters-big-image.jpg
│  ├─ components
│  │  ├─ blocks
│  │  │  ├─ FooterBlock.vue
│  │  │  ├─ HeaderHomeBlock.vue
│  │  │  ├─ HeaderMenuBlock.vue
│  │  │  ├─ MenuHomeBlock.vue
│  │  │  └─ NavigationBlock.vue
│  │  ├─ BookingForm.vue
│  │  ├─ buttons
│  │  │  ├─ ButtonNavClose.vue
│  │  │  └─ ButtonNavOpen.vue
│  │  ├─ ContactsWidget.vue
│  │  ├─ icons
│  │  │  ├─ IconCommunity.vue
│  │  │  ├─ IconDocumentation.vue
│  │  │  ├─ IconEcosystem.vue
│  │  │  ├─ IconFacebook.vue
│  │  │  ├─ IconInstagram.vue
│  │  │  ├─ IconSupport.vue
│  │  │  ├─ IconTooling.vue
│  │  │  ├─ IconTwitter.vue
│  │  │  └─ IconYoutube.vue
│  │  ├─ ScrollSmall.vue
│  │  ├─ SpicesBlock.vue
│  │  ├─ SubscribeForm.vue
│  ├─ main.js
│  ├─ router
│  │  └─ index.js
│  ├─ stores
│  │  ├─ booking.js
│  │  ├─ menuStore copy.js
│  │  ├─ menuStore.js
│  │  └─ subscription.js
│  └─ views
│     ├─ AboutView.vue
│     ├─ ContactView.vue
│     ├─ HomeView.vue
│     ├─ MenuView copy.vue
│     ├─ MenuView.vue
│     └─ PortfolioView.vue
├─ tailwind.config.js
└─ vite.config.js

```