

const images = document.getElementsByTagName('img');
console.log(JSON.stringify(images));
Array.from(images).forEach((img) => {
// debugger
    img.onerror = function () {
        console.log('error')
    }
    console.log(img);
})
// images.forEach((img) => {
//     console.log(img);
// });
let image = new Proxy(document.getElementById('illi'),{
    get: function(obj, prop) {
        console.log('get');
        console.log(obj, prop)
        return obj[prop]
    },
    set: function (obj, prop, newVal) {
        console.log(obj, prop, newVal)
        console.dir(newVal)
        return true
    }
});

console.log(image)

// let ima1 = image.src = document.getElementById('illi')
// ima1.onload= function(e){
//     console.log(e);
// }
// console.log(ima1)
