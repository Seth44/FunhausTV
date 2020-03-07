function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

export function getRandomDate() {
    const todaysYear = new Date().getFullYear() + 1;
    const randomYear = getRandomInt(2015, todaysYear);
    const randomDay = getRandomInt(1, 29);
    const randomMonth = getRandomInt(1, 12);

    return `${randomYear}-${randomMonth}-${randomDay}`;
}

// export function getRandomVideoId(items) {
//     const randomNum = getRandomInt(0, 50);
//     return items[randomNum].id.videoId;
// }

export function getRandomVideo(obj) {
    const keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};
