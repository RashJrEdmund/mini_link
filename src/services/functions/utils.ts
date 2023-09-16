type InvertBoolean = (bool: boolean) => boolean;

export const invertBooleanValue: InvertBoolean = (bool) => {
    return !bool;
}