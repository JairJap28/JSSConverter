import React from 'react';
import Item from '../../../Shared/Entities/item';

export default interface SelectJSSProps {
    tag: string,
    disabled?: boolean,
    value: string,
    options: Array<Item>,
    onChange: (event: React.ChangeEvent<{ name?: string | undefined, value: unknown }>) => void;
    onClear?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}