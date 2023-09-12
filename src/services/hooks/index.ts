/* ========== CONTROLLED_NAVIGATION ========== */

/* 
                                          ===== SEE THIS ARTIVLE FOR MORE ABOUT window.open() =====
  https://linuxhint.com/window-open-javascript/#:~:text=open()%20in%20JavaScript,-10%20months%20ago&text=In%20HTML%2C%20the%20anchor%20tag,remains%20engaged%20with%20your%20content.
*/

type TargetType =
    "_blank" | //This is the default option in which the URL is loaded in a new tab or window.
    "_parent" | // URL will be opened in the current working window.
    "_self" | // This will replace the current page with the specified URL.
    "_top"  // This will open the URL in any loaded window

type nav_type = (path: string, options?: {
    target?: TargetType,
    newTab?: boolean,
    toolBar?: boolean,
    width?: number,
    height?: number
}) => undefined;

export const customNavigate: () => nav_type = () => {
    return (path, options) => {
        if (options?.target === "_blank") {
            const tlB = options?.newTab ? "yes" : "no";
            window.open(path, "_blank", `toolbar=${tlB}, resizable=0, width=${options.width ?? 600}, height=${options.height ?? 600}`);
            return;
        }

        window.open(path, "_self");
    }
}
