import Item from '../Shared/Entities/item';

const GetOptionsToSelect = (): Item[] => {
    return [
        { key: '1', value: 'SQL - StringBuilder'},
        { key: '2', value: 'StringBuilder - SQL'},
        { key: '3', value: 'Entity - Json'},
        { key: '4', value: 'Json - Entity' }
    ];
}
export {
    GetOptionsToSelect
}