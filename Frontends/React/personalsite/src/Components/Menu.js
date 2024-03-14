
import { Links } from "./Links";

export function Menu({HomeRef, AboutRef,ContactRef, setTab, isTabOpoen, nextPath, setNextPath, isLoading, setIsLoading}) {
    return(
        <section id="Menu">
            <Links HomeRef={HomeRef} AboutRef={AboutRef} ContactRef={ContactRef} setTab={setTab} isTabOpen={isTabOpoen} nextPath={nextPath} setNextPath={setNextPath}  isLoading={isLoading} setIsLoading={setIsLoading} />
        </section>
    )
}