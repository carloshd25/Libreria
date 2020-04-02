exports.exceptions =  (Path, Method) => {

    var exceptions =[];

    var exception={
        path: "/libro/:libroId",
        method: "GET"
    };

    exceptions.push(exception);

    const val=exceptions.filter(it => it.path === Path && it.method===Method);

    if (!val[0]) {
        return { exc: false };
    }
    else {
        return { exc: true };
    }

};