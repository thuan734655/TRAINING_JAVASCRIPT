let fucn = (value, test, update, handle) => {
    let data = value;
    while(test(data)) {
        handle(data);
       data =  update(data);
    }
}

fucn(
    3,
    n => n > 0,
    n => n - 1,
    console.log
);
