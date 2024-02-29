import Lottie from 'react-lottie'
import construction from '../assets/animation/under-construction.json'
export function InConstructionState() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: construction,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
    return (
        <section id="under_construction"> 
            <div class="wrapper">
                <Lottie options={defaultOptions} />
            </div>
        </section>
    )
}