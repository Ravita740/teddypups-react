// Puppy catalogue. Image values are paths under /media on the original site.
// Origin is "local" (Dubai showroom) or "imported" (order upon request).

const avail = (slug, name, breed, gender, age, origin, breeds, image, extra = {}) => ({
  slug,
  name,
  breed,
  gender,
  age,
  origin,
  breeds,
  status: 'available',
  images: [image],
  ...extra,
});

export const AVAILABLE = [
  avail('maltipoo-max-male', 'Max', 'Maltipoo', 'boy', '3 months', 'imported', ['maltipoo'],
    'Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp',
    { video: true, images: [
      'Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp',
      'RH7J577OfQ7f/e776d07dbd/b942a5_a1fa75c7bf2f4d688ec0ce0344baef67f000.jpg',
    ] }),
  avail('korean-teacup-maltipoo-female', '', 'Korean Teacup Maltipoo', 'girl', '2 months', 'imported', ['maltipoo'],
    'gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg', { video: true }),
  avail('korean-teacup-poodle-female', '', 'Korean Teacup Poodle', 'girl', '2 months', 'imported', ['poodle'],
    'xeMJCapr5vcU/e618c653b2/b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg'),
  avail('maltipoo-cavapoo-male', '', 'Maltipoo & Cavapoo', 'boy', '3 months Maltipoo & 2 months Cavapoo', 'local', ['maltipoo', 'cavapoo'],
    'YQhey4j7uWvZ/3ea10db6c1/b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg', { video: true }),
  avail('toy-poodle-male-female', '', 'Toy Poodle', 'boy & girl', '2 months', 'local', ['poodle'],
    'vMu0BPvkAZ-j/c65e53967d/b942a5_0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg'),
  avail('maltipoo-female-2', '', 'Maltipoo', 'girl', '3 months', 'local', ['maltipoo'],
    '3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg', { video: true }),
  avail('pomeranian-female', '', 'Pomeranian', 'girl', '3 months', 'local', ['pomeranian'],
    '3yOfnmoyPooH/81e0c7e00c/b942a5_556841b9a73942e5a9d782a683f3bc68-mv2.jpg'),
  avail('copper-male', 'Copper', 'Cavapoo', 'boy', '2 months', 'local', ['cavapoo'],
    'O-6w4FYqE10j/be76f399cc/b942a5_bb73ebbb952047988f944f3a8e3052bd-mv2.jpg'),
  avail('shitzu-female', '', 'Shih Tzu', 'girl', '2 months', 'local', ['shih-tzu'],
    'qNrTCSrsYyzY/168fa8c4ff/b942a5_eb14616c76c24da89afe7fa3b7d7ae6a-mv2.jpeg'),
  avail('shitzu-male', '', 'Shih Tzu', 'boy', '2 months', 'local', ['shih-tzu'],
    'crgs9ih6as_M/e37bafb1bf/b942a5_344e49c6c34940d2b09a3ddd5c2e3234-mv2.jpg'),
  avail('maltipoo-female-1', '', 'Maltipoo', 'girl', '2.5 months', 'local', ['maltipoo'],
    'wNm2_VIBEQvK/4b68f59e75/b942a5_7dd33c9b78c04f78a6a1c7386fb55620-mv2.jpg'),
  avail('maltipoo-female', '', 'Maltipoo', 'girl', '2 months', 'local', ['maltipoo'],
    'lMhASnmIIVQ4/ad2353ad31/b942a5_6a5617708d75408b8f73725080ed0149-mv2.jpg'),
  avail('korean-teacup-pomeranian-1', '', 'Korean Teacup Pomeranian', 'girl', '2 months', 'imported', ['pomeranian'],
    'EsAq2LSRvVCJ/4d553ed044/b942a5_a8d264c1aa754d80bc7c98917dfd1fda-mv2.jpg'),
  avail('korean-teacup-pomeranian', '', 'Korean Teacup Pomeranian', 'girl', '2 months', 'imported', ['pomeranian'],
    'vzf7P8SPCZ-Q/a8db4ee114/b942a5_967bb346583b4146acb56607f5da5f21-mv2.jpg'),
  avail('korean-teacup-pomeranian-male', '', 'Korean Teacup Pomeranian', 'boy', '2 months', 'imported', ['pomeranian'],
    'nZTGFv46hrZI/fb9eeefc9c/b942a5_dcb8eb174915463ea0c40c58b7b0e406-mv2.jpg'),
];

// [slug, name, breed, gender, where, image]
const GONE_ROWS = [
  ['pomeranian-ace-boy', 'Ace', 'Pomeranian', 'boy', 'TeddyPups', 'mihUKGFCatU3/0461cca56e/27b888_bac41adfadc44dce846a1c3fd0cdb0de-mv2.avif'],
  ['poodle-leo-male', 'Leo', 'Poodle', 'boy', 'TeddyPups', 'QgFG5s09n-ss/81af626d2d/27b888_5f9a7189bb21477d832047aae2040921-mv2.avif'],
  ['maltipoo-mia-girl', 'Mia', 'Maltipoo', 'girl', 'Dubai showroom', '4vu6_PGfL64H/537c367d85/27b888_747a4667fec640c69aad9bc045d61ac6-mv2.avif'],
  ['maltipoo-sadie-girl', 'Sadie', 'Maltipoo', 'girl', 'TeddyPups', '159oT4F46uhk/b66c2be87f/27b888_ea6e7e0fcd43447d854657b6de98d4cb-mv2.avif'],
  ['blue-marle-pomeranian', '', 'Pomeranian', 'boy', 'TeddyPups', 'bMSEHnYcBTFF/970fdc1ee6/27b888_5e612a215bf343328c08d99e0e9c5a37-mv2.avif'],
  ['pomsky-ollie-boy', 'Ollie', 'Pomsky', 'boy', 'TeddyPups', 'Qs2IHRk7OQIm/c16bea255c/27b888_ef3324a358d64858b4873a146574c3b9-mv2.avif'],
  ['maltipoo-bruno-boy', 'Bruno', 'Maltipoo', 'boy', 'Dubai showroom', 'w-F8mJLs2gtj/f06147a6d3/27b888_301f58cbae624a1da36a79d46571043a-mv2.avif'],
  ['maltese-buddy-male', 'Buddy', 'Maltese', 'boy', 'Dubai showroom', '5ygCaO2TQb3v/f23ade89fa/27b888_6053b478acb641d1865de22aef938977-mv2.avif'],
  ['maltese-charlie-male', 'Charlie', 'Maltese', 'boy', 'TeddyPups', '0c1rFiKXQLLk/75c6a20e15/27b888_b22287e7c1594de7ab2fba46eabea376-mv2.avif'],
  ['pomeranian-daisy-girl', 'Daisy', 'Pomeranian', 'girl', 'Dubai showroom', 'd_ji2d9LVy0R/b19b4cf1c2/27b888_c6cbb607448f469a96d73f3bc42a992d-mv2.avif'],
  ['pomeranian-bella-female', 'Bella', 'Pomeranian', 'girl', 'TeddyPups', '9jwfs8kSZW7K/9b8ae31d11/27b888_ab014eabe44c4f6ebaacb9ef1869823f-mv2.avif'],
  ['poodle-teddy-male', 'Teddy', 'Poodle', 'boy', 'TeddyPups', '9XFYXsuvjIcz/8d1efc8baa/27b888_430ebbf87dc84b93bcd0b61709a2eaa7-mv2.avif'],
  ['poodle-molly-female', 'Molly', 'Poodle', 'girl', 'Dubai showroom', 'WZKcpiogRBW7/9ebcb8d165/27b888_2b9e32b056624a45b62f7d7b4ec7d105-mv2.avif'],
  ['pomski-coco-girl', 'Coco', 'Pomsky', 'girl', 'TeddyPups', 'CXIzj6hYrmuI/eff60812df/27b888_ce94335cf4714a99a78c799f666f9323-mv2.avif'],
  ['pomsky-rosie-girl', 'Rosie', 'Pomsky', 'girl', 'Dubai showroom', 'FhrW7pE84bji/f7c57baf49/27b888_08271c7de284451fb9c848757f4838fb-mv2.avif'],
  ['pomeranian-leo-boy', 'Leo', 'Pomeranian', 'boy', 'Dubai showroom', '5iCniMJshKud/8bfe42003c/27b888_84815fae2bd34283a7c79985cfc8b568-mv2.avif'],
  ['poodle-molly-girl', 'Molly', 'Poodle', 'girl', 'TeddyPups', 'lsaKvJhLwHB4/4cf2a02ed1/27b888_5aa959cec570411a8bb9372abe23f5e9-mv2.avif'],
  ['poodle-rocky-boy', 'Rocky', 'Poodle', 'boy', 'TeddyPups', '51aMfxO7oeVe/6b70c96b1e/27b888_77a51d530b694ba58bc207f2a23e8620-mv2.avif'],
  ['maltipoo-sophie-girl', 'Sophie', 'Maltipoo', 'girl', 'Dubai showroom', 'PYYTxpqgo76_/ae53ae6d3c/27b888_0d89c05fa55c43d4b6d55d573be83e73-mv2.avif'],
  ['maltipoo-lola-girl', 'Lola', 'Maltipoo', 'girl', 'Dubai showroom', 'HPs4cYizPzy9/22b104e2c5/27b888_f24865b2456b46feb6ea6694fe90660f-mv2.avif'],
  ['pomeranian-rex-boy', 'Rex', 'Pomeranian', 'boy', 'TeddyPups', 'QIIvMqQTe9jr/d997ae172e/27b888_14fd6ec24bd94522bd54a5ae345240b8-mv2.avif'],
  ['pomsky-finn-male', 'Finn', 'Pomsky', 'boy', 'TeddyPups', 'tEAwWspMD8iG/1f55440daf/27b888_c68794a6e9ee442abb522a1d88a1e8cd-mv2.avif'],
  ['maltipoo-zoe-girl', 'Zoe', 'Maltipoo', 'girl', 'TeddyPups', 'fxj_9aZOSxQM/90c10b9c91/27b888_89e442e0035442308fc87fe3d2837f1d-mv2.avif'],
  ['pomeranian-mimi-girl', 'Mimi', 'Pomeranian', 'girl', 'Dubai showroom', 'BLOZLPixUcjE/ea8ee97fd9/27b888_870c748ca6ee45cf8e0a311232dfe289-mv2.avif'],
  ['bichon-bailey-boy', 'Bailey', 'Bichon', 'boy', 'Dubai showroom', 'fI-hlHuSwrRw/e5ae9b6384/27b888_8d87239e23854214a8718ef8f02c2d50-mv2.avif'],
  ['puppy', '', 'Maltipoo', 'girl', 'TeddyPups', 'Cl0B4v8U3Y-d/3dea5a9fec/27b888_1ae70e063fd7451a87d4dfe79794d58f-mv2.avif'],
  ['maltipo', '', 'Poodle', 'girl', 'Dubai showroom', 'sFgPBojUhFBo/5ac1429cf4/27b888_aa0ce426ca3848abbc7d695f8c818568-mv2.avif'],
];

export const GONE = GONE_ROWS.map(([slug, name, breed, gender, where, image]) => ({
  slug,
  name,
  breed,
  gender,
  where,
  status: 'gone',
  images: [image],
}));

export const ALL = [...AVAILABLE, ...GONE];
export const bySlug = (slug) => ALL.find((p) => p.slug === slug);

export const BREED_FILTERS = [
  { slug: 'maltipoo', label: 'Maltipoo' },
  { slug: 'pomeranian', label: 'Pomeranian' },
  { slug: 'poodle', label: 'Poodle' },
  { slug: 'cavapoo', label: 'Cavapoo' },
  { slug: 'shih-tzu', label: 'Shih Tzu' },
];

export const displayName = (p) => p.name || p.breed;
export const metaLine = (p) =>
  [p.name ? p.breed : null, p.gender, p.age].filter(Boolean).join(' · ');
