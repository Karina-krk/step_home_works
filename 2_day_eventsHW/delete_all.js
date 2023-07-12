const EventEmitter = require("events");

let emitter = new EventEmitter();
let eventName = "delete_all";

let db = {
    students: {
        1: { name: "Inzhu", age: 16 },
        2: { name: "Kamilya", age: 16 },
    },
};

emitter.on(eventName, (data) => {
    console.log(db);

    data.forEach((index) => {
        if (index >= 0 && index in db.students) {
        delete db.students[index];
        }
    });

    console.log(db);
});

emitter.emit(eventName, [1, 2]);
