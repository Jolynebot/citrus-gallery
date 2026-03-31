export const site = {
  name: 'Citrus Gallery',
  description: {
    en: 'A cinematic photography gallery by Yuzu.',
    zh: 'Yuzu 的摄影作品站，偏深色、偏电影感。',
  },
  nav: {
    en: [
      { label: 'Home', href: '' },
      { label: 'Gallery', href: 'gallery/' },
      { label: 'About', href: 'about/' },
      { label: '中文', href: 'zh/' },
    ],
    zh: [
      { label: '首页', href: 'zh/' },
      { label: '作品', href: 'zh/gallery/' },
      { label: '关于', href: 'zh/about/' },
      { label: 'EN', href: '' },
    ],
  },
};

export const series = [
  {
    slug: 'mountains',
    title: { en: 'Mountains', zh: '群山' },
    summary: {
      en: 'Quiet ridgelines, distance, and air.',
      zh: '安静的山脊、距离感和空气。',
    },
    intro: {
      en: 'A place for quiet ridgelines, distance, and the kind of silence that only mountains can hold.',
      zh: '这里放群山、距离感，以及只有山能留住的那种安静。',
    },
    cover: '/gallery/mountains/cover.jpg',
    images: [
      {
        src: '/gallery/mountains/cover.jpg',
        caption: {
          en: 'A snowy mountain I saw while passing through Anchorage.',
          zh: '路过安克雷奇时看到的一座雪山。',
        },
      },
    ],
  },
  {
    slug: 'under-the-stars',
    title: { en: 'Under the Stars', zh: '星空之下' },
    summary: {
      en: 'Night sky, silence, and small lights.',
      zh: '夜空、寂静与微弱的光。',
    },
    intro: {
      en: 'Night makes everything smaller and clearer at the same time. This series keeps that feeling.',
      zh: '夜让一切同时变得更渺小，也更清楚。这组想留下那种感觉。',
    },
    cover: '/gallery/under-the-stars/cover.jpg',
    images: [
      {
        src: '/gallery/under-the-stars/cover.jpg',
        type: 'image',
        caption: {
          en: 'The first Milky Way I waited on all night for — slowly coming into focus from a blur.',
          zh: '第一次蹲了一夜的银河，从模糊慢慢变清晰。',
        },
      },
      {
        src: '/gallery/under-the-stars/e8c9f83760136934ae006375dae8fe8f.jpg',
        type: 'image',
        caption: { en: '', zh: '' },
      },
      {
        src: '/gallery/under-the-stars/My%20Movie%207.mov',
        type: 'video',
        poster: '/gallery/under-the-stars/My-Movie-7-poster.png',
        caption: {
          en: 'On my last night in Fairbanks, after days of bad weather and no luck with the aurora, it suddenly showed up.',
          zh: '在 Fairbanks 的最后一晚，前几天因为天气不好一直没看到极光，结果那天突然很惊喜地看见了。',
        },
      },
    ],
  },
  {
    slug: 'sunset',
    title: { en: 'Waters at Dusk', zh: '暮色中的水' },
    summary: {
      en: 'Water, evening light, and the quiet mood between motion and reflection.',
      zh: '水、傍晚的光，以及流动与倒影之间安静的情绪。',
    },
    intro: {
      en: 'Water changes with the light faster than memory does. These frames stay somewhere between movement and reflection.',
      zh: '水面跟着光变化得比记忆还快。这些画面停在流动和倒影之间。',
    },
    cover: '/gallery/sunset/cover.jpg',
    images: [
      {
        src: '/gallery/sunset/cover.jpg',
        caption: {
          en: 'Caught the last light quickly from my friend’s car, before it slipped away.',
          zh: '坐在朋友的车上，迅速抓住了快要溜走的夕阳。',
        },
      },
      {
        src: '/gallery/sunset/B0000332HEIC1769911391.jpg',
        caption: {
          en: 'Quietly waiting by the sea for the lights. (Then my friend’s camera suddenly fell into the water.',
          zh: '在海边安静地等着一盏一盏灯亮起来。（然后朋友的相机突然掉海里了。',
        },
      },
      {
        src: '/gallery/sunset/B0000333HEIC1769911511.jpg',
        caption: {
          en: '',
          zh: '',
        },
      },
      {
        src: '/gallery/sunset/DSCF4519.jpg',
        caption: {
          en: 'First time trying to capture the movement of water.',
          zh: '第一次尝试捕捉水的时间。',
        },
      },
      {
        src: '/gallery/sunset/DSCF4590.jpg',
        caption: {
          en: 'The night looks like a painting.',
          zh: '像画一样的夜色。',
        },
      },
    ],
  },
  {
    slug: 'golden-hour-joy',
    title: { en: 'Golden Hour Joy', zh: '金色时刻的快乐' },
    summary: {
      en: 'Soft light on people who look happy without trying.',
      zh: '记录阳光下幸福的人们。',
    },
    intro: {
      en: 'Some happiness only shows up when the light softens. This series is about those unguarded moments.',
      zh: '有些快乐只会在光线变软的时候出现。这组想留下那种不设防的瞬间。',
    },
    cover: '/gallery/golden-hour-joy/cover.jpg',
    images: [
      { src: '/gallery/golden-hour-joy/cover.jpg', caption: { en: '', zh: '' } },
      { src: '/gallery/golden-hour-joy/DSCF2034.jpg', caption: { en: '', zh: '' } },
      { src: '/gallery/golden-hour-joy/DSCF4174.jpg', caption: { en: '', zh: '' } },
      { src: '/gallery/golden-hour-joy/IMG_6929.jpg', caption: { en: '', zh: '' } },
      { src: '/gallery/sunset/efd62a3a-b953-4fc1-90fa-c65cbc8c0a02.jpg', caption: { en: '', zh: '' } },
    ],
  },
  {
    slug: 'human-stories',
    title: { en: 'Human Stories', zh: '人间故事' },
    summary: {
      en: 'Human moments, gestures, and passing scenes.',
      zh: '人物、动作和一闪而过的场景。',
    },
    intro: {
      en: 'A passing gesture, a pause, a face turned toward the light — these are the small stories I want to keep.',
      zh: '一个动作、一次停顿、一张转向光线的脸，都是我想留下的小故事。',
    },
    cover: '/gallery/human-stories/cover.jpg',
    images: [
      {
        src: '/gallery/human-stories/cover.jpg',
        caption: {
          en: 'We were looking for a restroom by the beach in San Francisco when some friendly guys invited us to have a beer with them.',
          zh: '在三番海边找 restroom，遇到很友好的哥们，邀请我们一起喝啤酒。',
        },
      },
      { src: '/gallery/human-stories/DSCF8706.jpg', caption: { en: '', zh: '' } },
    ],
  },
  {
    slug: 'on-film',
    title: { en: 'On Film', zh: '胶片' },
    summary: {
      en: 'Small moments kept on film.',
      zh: '用胶片留下来的小瞬间。',
    },
    intro: {
      en: 'Film photos, slower and softer, kept as they were.',
      zh: '一些更慢、更软一点的瞬间，被胶片留下来。',
    },
    cover: '/gallery/on-film/aa9a1389-2988-4258-b723-d7e660b79bcb.jpg',
    images: [
      { src: '/gallery/on-film/cover.svg', caption: { en: '', zh: '' } },
      {
        src: '/gallery/on-film/aa9a1389-2988-4258-b723-d7e660b79bcb.jpg',
        caption: {
          en: 'The light caught her while she was taking a photo. Photo by Dixi.',
          zh: '拍照的人，也被光线拍了一下。摄影：Dixi。',
        },
      },
    ],
  },
];
