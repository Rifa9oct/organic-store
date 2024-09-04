export const replaceMongoIdInArray = (array) => {
    const mappedArray = array.map(item => {
        const { _id, __v, $__, _$isNew, ...rest } = item._doc;
        return {
            id: _id.toString(),
            ...rest
        };
    });

    return mappedArray;
};

export const replaceMongoIdInObject = (obj) => {
    if (obj) {
        const { _id, __v, $__, $isNew, ...updatedObj } = obj?._doc;
        return { ...updatedObj, id: _id.toString() };
    }
};