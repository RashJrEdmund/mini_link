/* ========== CONTROLLED_NAVIGATION ========== */

type nav_type = (path: string, target?: string) => undefined;

export const navigate: nav_type = (path, target) => {
    window.open(path, target)
};
