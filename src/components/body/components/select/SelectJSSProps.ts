import React from 'react';
import Item from '../../../../Shared/Entities/item';

export default interface SelectJSSProps {
    value: string,
    options: Array<Item>,
    onChange: (event: React.ChangeEvent<{ name?: string | undefined, value: unknown }>) => void;
}