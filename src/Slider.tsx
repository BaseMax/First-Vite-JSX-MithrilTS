import m from "mithril"
import classes from "./Slider.module.css"

export const Slider = () => {
    return {
        view: () => {
        return (
            // var splide = new Splide( '.splide', {
            //     type   : 'loop',
            //     padding: '5rem',
            //   } );
            //   splide.mount();
            <div dir="ltr" className="splide" data-splide='{"type":"loop","perPage":3}'>
                <div class="splide__track">
                     <ul class="splide__list">
                        <li><img src="https://discovery.static.cafebazaar.ir/palette/banner/legacy-promo/7E719AFB-31B2-42DF-AC48-FC8B3E4AE5C8_fa_XL.png" /></li>
                        <li><img src="https://discovery.static.cafebazaar.ir/palette/banner/legacy-promo/93CAAFBC-F1F2-4334-9A49-440194CB4A64_fa_XL.png" /></li>
                        <li><img src="https://discovery.static.cafebazaar.ir/palette/banner/legacy-promo/CB3F50B4-DE8B-4E50-92A4-7D0347293B00_fa_XL.png" /></li>
                        <li><img src="https://discovery.static.cafebazaar.ir/palette/banner/legacy-promo/65D7F103-0F53-45E9-BA84-7386B60A3E05_fa_XL.png" /></li>
                        <li><img src="https://discovery.static.cafebazaar.ir/palette/banner/legacy-promo/6AA46643-E2C8-40D6-8BFF-B85F6B0F6A7A_fa_XL.png" /></li>
                        <li><img src="https://discovery.static.cafebazaar.ir/palette/banner/legacy-promo/F36A08D9-5C5B-4E23-819E-9FC99F5AF567_fa_XL.png" /></li>
                        <li><img src="https://discovery.static.cafebazaar.ir/palette/banner/legacy-promo/8505249D-5810-4C07-8736-4CA85EF72D6E_fa_XL.png" /></li>
                        <li><img src="https://discovery.static.cafebazaar.ir/palette/banner/legacy-promo/6E421CEE-D329-4BB6-B083-D15D60F201E8_fa_XL.png" /></li>
                        <li><img src="https://discovery.static.cafebazaar.ir/palette/banner/legacy-promo/00D517AF-6AB5-4CC0-BB8D-F066D8D5C59F_fa_XL.png" /></li>
                        <li><img src="https://discovery.static.cafebazaar.ir/palette/banner/legacy-promo/ACAABFD5-3663-474C-9928-46F4D254D5D2_fa_XL.png" /></li>
                    </ul>
                </div>
            </div>
        )
        },
    }
}
