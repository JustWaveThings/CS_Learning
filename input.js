const raw = `1 - tobyPlaysTheUke [4311 points]
2 - Carlos [3511 points]
3 - timato [3009 points]
4 - KM [1846 points]
5 - josh [1677 points]
6 - Marvin [1581 points]
7 - mdfr4nk [1553 points]
8 - nevz [1531 points]
9 - Mr. ARL | Foundations NaN% [1465 points]
10 - Cake [1430 points]
11 - rlmoser [1378 points]
12 - takinabradley (GrenadePit) [1333 points]
13 - Manon || NaN [1254 points]
14 - Eduardo06sp [1253 points]
15 - Scheals [1225 points]
16 - Mao | Don't rush learning! [1147 points]
17 - Miggels [1061 points]
18 - JMyers -> !!hasNewborn [1046 points]
19 - Arun [1046 points]
20 - BriggsE (Hibernating) [1013 points]
21 - Bender [966 points]
22 - 105Ron [857 points]
23 - Zach [830 points]
24 - var(--cody) [818 points]
25 - zer0[789 points]
26 - haru => {haru:} [771 points]
27 - type lofty = { 🪔: true } [738 points]
28 - BlizZard [729 points]
29 - crespire [659 points]
30 - snaitseb [642 points]
31 - Rohan [640 points]
32 - Sully [624 points]
33 - Zach [624 points]
34 - aria-label="thatblindgeye" [618 points]
35 - Cat += Queen; (QA) [574 points]
36 - Chook [570 points]
37 - Roli [565 points]
38 - Fred || Blog API [515 points]
39 - xari [501 points]
40 - ✨peaches✨ [492 points]
41 - Fensus [489 points]
42 - jmooree30 [485 points]
43 - void* knight = (Not*) &green [483 points]
44 - mihail [465 points]
45 - Damon [461 points]
46 - isaiahaiasi [453 points]
47 - Ryan McEntire | Clowdy [444 points]
48 - rayray (Ben) [430 points]
49 - Mike [429 points]
50 - hardcode[422 points]
51 - achoito [420 points]
52 - Mclilzee [415 points]
53 - north korean supermarket [414 points]
54 - ris [406 points]
55 - cauri [405 points]
56 - Leila [390 points]
57 - Scotty [389 points]
58 - 𝚊𝚗𝚝𝚎𝚛𝚘 || cart of TOP? [375 points]
59 - James [357 points]
60 - Javi M [350 points]
61 - Mira [347 points]
62 - Cyborg [346 points]
63 - Aureate [346 points]
64 - Daegudude is Node'ing [327 points]
65 - Dr. Juice [327 points]
66 - Slim Shady [312 points]
67 - Foole [297 points]
68 - KB [290 points]
69 - Pandawg [289 points]
70 - Sokolan [289 points]
71 - rztl [289 points]
72 - lordofth [279 points]
73 - mireles [270 points]
74 - print("Please reboot Asarta.py") [262 points]
75 - BiFF [260 points] `;

const topPoints = raw.split('\n').map(line => {
  const name = line.match(/- (.*)\[/)?.[1];
  const points = line.match(/\[(\d+) points\]/)?.[1];
  return { name, points };
});

export const top75 = [
  { name: 'tobyPlaysTheUke ', points: '4311' },
  { name: 'Carlos ', points: '3511' },
  { name: 'timato ', points: '3009' },
  { name: 'KM ', points: '1846' },
  { name: 'josh ', points: '1677' },
  { name: 'Marvin ', points: '1581' },
  { name: 'mdfr4nk ', points: '1553' },
  { name: 'nevz ', points: '1531' },
  { name: 'Mr. ARL | Foundations NaN% ', points: '1465' },
  { name: 'Cake ', points: '1430' },
  { name: 'rlmoser ', points: '1378' },
  { name: 'takinabradley (GrenadePit) ', points: '1333' },
  { name: 'Manon || NaN ', points: '1254' },
  { name: 'Eduardo06sp ', points: '1253' },
  { name: 'Scheals ', points: '1225' },
  { name: "Mao | Don't rush learning! ", points: '1147' },
  { name: 'Miggels ', points: '1061' },
  { name: 'JMyers -> !!hasNewborn ', points: '1046' },
  { name: 'Arun ', points: '1046' },
  { name: 'BriggsE (Hibernating) ', points: '1013' },
  { name: 'Bender ', points: '966' },
  { name: '105Ron ', points: '857' },
  { name: 'Zach ', points: '830' },
  { name: 'var(--cody) ', points: '818' },
  { name: 'zer0', points: '789' },
  /* { name: 'haru => {haru:} ', points: '771' },
  { name: 'type lofty = { 🪔: true } ', points: '738' },
  { name: 'BlizZard ', points: '729' },
  { name: 'crespire ', points: '659' },
  { name: 'snaitseb ', points: '642' },
  { name: 'Rohan ', points: '640' },
  { name: 'Sully ', points: '624' },
  { name: 'Zach ', points: '624' },
  { name: 'aria-label="thatblindgeye" ', points: '618' },
  { name: 'Cat += Queen; (QA) ', points: '574' },
  { name: 'Chook ', points: '570' },
  { name: 'Roli ', points: '565' },
  { name: 'Fred || Blog API ', points: '515' },
  { name: 'xari ', points: '501' },
  { name: '✨peaches✨ ', points: '492' },
  { name: 'Fensus ', points: '489' },
  { name: 'jmooree30 ', points: '485' },
  { name: 'void* knight = (Not*) &green ', points: '483' },
  { name: 'mihail ', points: '465' },
  { name: 'Damon ', points: '461' },
  { name: 'isaiahaiasi ', points: '453' },
  { name: 'Ryan McEntire | Clowdy ', points: '444' },
  { name: 'rayray (Ben) ', points: '430' },
  { name: 'Mike ', points: '429' },
  { name: 'hardcode', points: '422' },
  { name: 'achoito ', points: '420' },
  { name: 'Mclilzee ', points: '415' },
  { name: 'north korean supermarket ', points: '414' },
  { name: 'ris ', points: '406' },
  { name: 'cauri ', points: '405' },
  { name: 'Leila ', points: '390' },
  { name: 'Scotty ', points: '389' },
  { name: '𝚊𝚗𝚝𝚎𝚛𝚘 || cart of TOP? ', points: '375' },
  { name: 'James ', points: '357' },
  { name: 'Javi M ', points: '350' },
  { name: 'Mira ', points: '347' },
  { name: 'Cyborg ', points: '346' },
  { name: 'Aureate ', points: '346' },
  { name: "Daegudude is Node'ing ", points: '327' },
  { name: 'Dr. Juice ', points: '327' },
  { name: 'Slim Shady ', points: '312' },
  { name: 'Foole ', points: '297' },
  { name: 'KB ', points: '290' },
  { name: 'Pandawg ', points: '289' },
  { name: 'Sokolan ', points: '289' },
  { name: 'rztl ', points: '289' },
  { name: 'lordofth ', points: '279' },
  { name: 'mireles ', points: '270' },
  { name: 'print("Please reboot Asarta.py") ', points: '262' },
  { name: 'BiFF ', points: '260' }, */
];
