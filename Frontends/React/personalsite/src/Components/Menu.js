
import { Links } from "./Links";

export function Menu({HomeRef, AboutRef,ContactRef, isTabOpoen}) {
    return(
        <section id="Menu">
            <Links HomeRef={HomeRef} AboutRef={AboutRef} ContactRef={ContactRef}  />
        </section>
    )
}