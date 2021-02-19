import Item from '../Shared/Entities/item';

const GetOptionsToSelect = (): Item[] => {
    return [
        { key: '1', value: 'SQL', allowed: ["2"] },
        { key: '2', value: 'StringBuilder', allowed: ["1"] },
        { key: '3', value: 'Entity', allowed: ["4"] },
        { key: '4', value: 'Json', allowed: ["3"] },
    ];
}

const GetAllowedOptions = (option: string): string => {
    const options: Item[] = GetOptionsToSelect();
    return options.filter(opt => opt.allowed?.find(al => al === option))[0].key;
}

export {
    GetOptionsToSelect,
    GetAllowedOptions
}