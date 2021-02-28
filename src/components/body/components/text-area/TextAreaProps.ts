import { IStyleTextAreaProps } from "./styles";

export default interface TextAreaProps {
    label: string,
    displayName: string,
    value?: string,
    toolbar?: boolean,
    styles?: IStyleTextAreaProps
}