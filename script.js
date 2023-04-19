
const buttons = [
    {
        nameB: 'CE',
        idB: 'clear',
        classB: 'operators',
    },

    {
        nameB: 'DEL',
        classB: 'operators',
    },

    {
        nameB: 'C',
        classB: 'operators',
    },

    {
        nameB: '*',
        classB: 'operators',
    },

    {
        nameB: '7',
        classB: 'number',
    },

    {
        nameB: '8',
        classB: 'number',
    },

    {
        nameB: '9',
        classB: 'number',
    },

    {
        nameB: '+',
        classB: 'operators',
    },

    {
        nameB: '4',
        classB: 'number',
    },

    {
        nameB: '5',
        classB: 'number',
    },

    {
        nameB: '6',
        classB: 'number',
    },

    {
        nameB: '-',
        classB: 'operators',
    },

    {
        nameB: '1',
        classB: 'number',
    },

    {
        nameB: '2',
        classB: 'number',
    },

    {
        nameB: '3',
        classB: 'number',
    },

    {
        nameB: '/',
        classB: 'operators',
    },

    {
        nameB: ',',
        classB: 'operators',
    },
    
    {
        nameB: '0',
        classB: 'number',
    },

    {
        nameB: '=',
        idB: 'result',
        classB: 'operators',
    },
]

buttons.forEach(button=>{
    divButtons.innerHTML += `
    <button class="${button.classB}" id="${button.idB}">${button.nameB}</button>`
})


