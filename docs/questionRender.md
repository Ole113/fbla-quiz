findTypeID(id, type) {
    if(this.renderedIDs.contains(id)) {
    //id hasen't been rendered yet.
        if(type === res[id].type) {
            //question id is the right type
            return { res[id] ... }
        } else {
            //question id is the wrong type
            let i = 0;
            while(res[i].type !== type) {
                i++;
            }
            return { res[i] ... }
        }
    } else {
    //array doesn't contain the id(id has already been rendered)
        let i = 0;
        while(res[i].type !== type) {
            i++;
        }
        return { res[i] ... }
    }
}

//other function
if(type === "matching") {
    let IDs = [];
    for(let i = 0; i < 4; i++) {
        IDs.push(this.findTypeID(id, type));
    }
    return IDs;
} else return this.findTypeID(id, type);
