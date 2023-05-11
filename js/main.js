// Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomInt (from,to) {
  let fromTemp = from;
  let toFrom = to;
  if (from < 0 || to < 0) {
    throw new RangeError('Числа должны быть положительными');
  }
  if (isNaN(from) || isNaN(to)) {
    throw new RangeError('Значения должны быть числами');
  }
  if (from === to) {
    return from;
  }
  if (from > to) {
    fromTemp = to;
    toFrom = from;
  }
  return Math.round(Math.random() * (toFrom - fromTemp) + fromTemp);
}

// Функция для проверки максимальной длины строки
const validateCommentLength = (str, maxLength) => {
  if (typeof str !== 'string') {
    throw new RangeError('Значение str должно быть строкой');
  }
  return str.length <= maxLength;
};

// Генерация данных
const PHOTOS_COUNT = 25;
const NAMES = ['Анастасия', 'Анна', 'Мария', 'Елена', 'Дарья', 'Алина', 'Полина', 'Виктория'];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
'Love me or hate me, but you will be never change me. – Люби меня или ненавидь, но ты никогда не сможешь изменить меня.',
'Do not be a slave in heaven. Be a king of hell. – Не будь рабом в раю, а будь королём ада.',
'Когда жизнь даёт вам лимоны, делайте из них апельсиновый сок и заставьте их задуматься, как вы это сделали.',
'Чтобы добиться успеха, вам нужны хорошие друзья, но чтобы добиться большего успеха, вам нужны сильные враги.',
'Do not give advice, unless you are asked to. – Не давай советов, если тебя об этом не поросят.',
'It is never too late to be what you might have been — Никогда не поздно стать тем, кем бы ты мог быть',
'Иногда я прикидываюсь нормальным. Но потом понимаю, что это скучно и снова становлюсь собой.',
'Я не бросаю дел, которые считаю не законченными.',
'I never lose. Either I win or I learn. – Я никогда не проигрываю. Либо побеждаю, либо учусь.',
'Either you run the day, or the day runs you — Либо ты управляешь днем, либо день управляет тобой.',
'Если у вас нет больших мечт, то в конечном итоге вы будете работать на тех, у кого они есть.',
'Do not let someone dim your light, simply because it is shining in their eyes. – Не позволяйте никому приглушить ваш свет просто потому, что он ослепляет их.',
'Sometimes you need to burn bridges to stop yourself from crossing them again. – Иногда нужно сжигать мосты, чтобы не перейти по ним снова.',
'Stay foolish to stay sane — Оставайся безрассудным, чтобы быть в здравом уме.',
'«Impossible» is for the unwilling — «Невозможно» — это для тех, кто не хочет.',
'All I want to do is make you love me — Все чтоя хочу сдедать это заставить тебя, любить меня.',
'I Grow through what i am going through — Я расту через то, что я прохожу.',
'Take the risk or lose the chance — Рискуй или упусти шанс.',
'Но, я всего лишь человек, в конце концов. Не вини меня.',
'You become what you belive — Ты станешь тем, во что веришь.',
'Kefteme - Что за тяги такие бархатные?'
'Dead inside mode,я бегу по головам.',
'Все мои guardы всегда рядом, мои блейды — ultimate',
'Достаю катану мои глаза – шаринганы',
'See you soon - я настолько уникален'
]
const COMMENTS_ID [];
const getRandomLikes = () => getRandomInt(15, 200);
const getRandomElement = (arr) => arr[getRandomInt(0, arr.length - 1)];

const getId = (() => {
  let id = 1;
  return () => id++;
})();

function getCommentId() {
  let id = getRandomInt(1, 300);
  while (COMMENTS_ID.includes(id)) {
    id = getRandomInt(1, 300);
  }
  return id;
}

function generateComment() {
  const messages = [];
  for (let i = 0; i < getRandomInt(1, 2); i++) {
    messages.push(getRandomElement(MESSAGES));
  }
  return {
    id: getCommentId(),
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: messages.join(' '),
    name: getRandomElement(NAMES)
  };
}

function generateDescription() {
  const comments = Array.from({length: getRandomInt(0, 10)}, generateComment);
  const id = getId();
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: DESCRIPTIONS[id - 1],
    likes: getRandomLikes(),
    comments: comments
  };
}
