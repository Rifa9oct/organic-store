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