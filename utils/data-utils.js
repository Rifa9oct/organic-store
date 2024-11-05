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

export const replaceCartObjectId = (array) => {
    const mappedArray = array.map(item => {
        const { _id, userId, productId, __v, $__, _$isNew, ...rest } = item._doc;
        return {
            id: _id.toString(),
            userId: userId.toString(),
            productId: productId.toString(),
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

export const replaceCheckoutObject = (array) => {
    const mappedArray = array.map(item => {
        const { _id, userId, date, __v, $__, _$isNew, ...rest } = item._doc;

        const formattedDate = new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(date));

        return {
            id: _id.toString(),
            userId: userId.toString(),
            date: formattedDate,
            ...rest
        };
    });

    return mappedArray;
};