<script lang="ts">
    import SpanTag from "../../components/atoms/SpanTag.svelte";
    import P_Tag from "../../components/atoms/P_Tag.svelte";
    import { THEME } from "../../store/store";

    let theme_mode = $THEME;

    const changeTheme = (theme: "light" | "dark") => {
        $THEME = theme;
    };
</script>

<main>
    <ul>
        <li>
            <P_Tag box_transparent sx="flex flex-col gap-1">
                toggle theme
                <span>
                    <label>
                        <input
                            type="radio"
                            name="theme"
                            checked={theme_mode === "light"}
                            on:click={() => changeTheme("light")}
                        />
                        Light
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="theme"
                            checked={theme_mode === "dark"}
                            on:click={() => changeTheme("dark")}
                        />
                        Dark
                    </label>
                </span>
            </P_Tag>
        </li>
    </ul>
</main>
