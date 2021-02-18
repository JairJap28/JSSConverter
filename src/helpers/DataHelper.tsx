import Item from '../Shared/Entities/item';

const GetOptionsToSelect = (): Item[] => {
    return [
        { key: '1', value: 'SQL' },
        { key: '2', value: 'StringBuilder' },
        { key: '3', value: 'Entity' },
        { key: '4', value: 'Json' },
    ];
}

const GetAllowedOptions = (option: string): Item[] => {
    const options: Item[] = GetOptionsToSelect();
    return options.filter(opt => opt.key === option);
}

export {
    GetOptionsToSelect,
    GetAllowedOptions
}