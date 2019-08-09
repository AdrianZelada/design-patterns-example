
var NativeImage = Image;

class FakeImage {
    constructor(w, h) {
        // magic!
        console.log('image')
        const nativeImage = new NativeImage(w, h);

        const handler = {
            set: function(obj, prop, value) {
                if (prop === 'src') {
                    console.log('gotcha ' + value);
                }
                return nativeImage[prop] = value;
            },
            get: function(target, prop) {
                console.log('img', target);
                let result = target[prop];
                if (typeof result === 'function') {
                    result = result.bind(target);
                }
                return result;
            }
        };
        const prox = new Proxy(nativeImage, handler);
        try {
            prox[Symbol.toStringTag] = 'HTMLImageElement';
        } catch(e){}
        console.log(prox);
        return prox;
    }
}

Object.defineProperty(FakeImage, 'name', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 'Image'
});

Object.defineProperty(FakeImage, 'toString', {
    enumerable: true,
    configurable: false,
    writable: true,
    value: function() {
        return NativeImage.toString();
    }
});

FakeImage.prototype[Symbol.toStringTag] = NativeImage.prototype.toString();


Image = FakeImage;
console.log(Image)

HTMLImageElement