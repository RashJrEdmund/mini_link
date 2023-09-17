type InvertBoolean = (bool: boolean) => boolean;
// 37.223056, 38.922500 coordinates to fireship
type LoggerTYPe = (identifier: string, val: any, clear_prev?: boolean) => void;

export const invertBooleanValue: InvertBoolean = (bool) => {
    return !bool;
}

export const custom_logger: LoggerTYPe = (identifier, val, clear_prev = false) => {
    if (clear_prev) console.clear();

    console.log(`
    \n \n ========== START ${identifier} ========== \n \n`,
     val , 
    `\n \n ========== END ${identifier} ==========
    `);
}