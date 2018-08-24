let initialState = {};

if (window.DATA) {
    initialState = window.DATA;
} else {
    initialState = {
        items: [{
            id: 'item-1',
            title: 'Item 1',
            selected: false,
            type: 'default'
        },
        {
            id: 'item-3',
            title: 'Item 3',
            selected: false,
            type: 'default'
        },
        {
            id: 'item-6',
            title: 'Item 6 - Async',
            selected: false,
            type: 'async'
        }]
    };
}

export default initialState;
