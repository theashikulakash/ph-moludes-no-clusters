const xyz = 'hello i am learning web dev';

const words = xyz.split(' ');
const revs = [];

for (let j = 0; j < words.length; j++){
    revs.unshift(words[j]);
}

const news = revs.join(' ');
console.log(news);

const abc = 'hello i am learning web dev';
const words2 = abc.split(' ');

const rev2 = [];

for (let i = 0; i < revs.length; i++){
    rev2.unshift(words2[i]);
}
const rev_news = rev2.join(' ');
console.log(rev_news);