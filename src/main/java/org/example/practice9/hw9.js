const object = {
    a: 5,
    b: {
        g: 8,
        y: 9,
        t: {
            q: 48
        },
    },
    x: 47
}

function copyObject(obj, copyObj = {}) {
    if (!obj || typeof obj !== 'object') {
        return obj;
    }

    for (const [key, val] of Object.entries(obj)) {
        copyObj[key] = copyObject(val);
    }
    return copyObj;
}

const copy = copyObject(object);
console.log(copy);

object.b.g = 111111111111;
console.log(copy.b);
object.b.t.q = 111111111111;
console.log(copy.b.t);


//let copy = {};
//console.log(copy);

//copy={...object};
//copy.b={...object.b};
//copy.b.t={...object.b.t};

//copy = Object.assign({},object);
//copy.b = Object.assign({},object.b);
//copy.b.t = Object.assign({},object.b.t);

//copy = JSON.parse(JSON.stringify(object));
//copy.b = JSON.parse(JSON.stringify(object.b));
//copy.b.t = JSON.parse(JSON.stringify(object.b.t));
