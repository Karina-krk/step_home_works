const EventEmitter = require("events");

let emitter = new EventEmitter();
let eventName = "create_all";

let db = {
    students: [
        { name: "Inzhu", age: 16 },
        { name: "Kamilya", age: 16 },
    ],
};

emitter.on(eventName, (data) => {
    console.log(db);

    data.forEach((student) => {
        if (student.age >= 18) {
        db.students.push(student);
        }
    });

    console.log(db);
});


emitter.emit(eventName,  [{ name: "Karina", age: 16 }, { name: "Alfiya", age: 18 }]);
