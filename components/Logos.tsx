import UnderlineWord from "@/components/ui/Underline";
import Image from "next/image";
import {ImageAspectRatioSharp} from "@mui/icons-material";

export default function Example() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                    <UnderlineWord>Dokaza Web. Agency</UnderlineWord> is behind the world fastest growing companies
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <Image
                        alt="Logo"
                        src="/pikaso_texttoimage_35mm-film-photography-Minimalist-home-service-logo-removebg-preview.png"
                        width={158}
                        height={48}
                        className="col-span-2 max-h-24 w-full object-contain lg:col-span-1 filter grayscale"
                    />
                    <Image
                        alt="Logo"
                        src="/pikaso_texttoimage_construction-or-home-service-logo-without-text__1_-removebg-preview.png"
                        width={158}
                        height={48}
                        className="col-span-2 max-h-24 w-full object-contain lg:col-span-1 filter grayscale"
                    />
                    <Image
                        alt="Logo"
                        src="/pikaso_texttoimage_construction-or-home-service-logo-without-text__2_-removebg-preview.png"
                        width={158}
                        height={48}
                        className="col-span-2 max-h-24 w-full object-contain lg:col-span-1 filter grayscale"
                    />
                    <Image
                        alt="Logo"
                        src="/pikaso_texttoimage_Minimalist-logo-mark-using-bold-heavy-lines-and-ba-removebg-preview.png"
                        width={158}
                        height={48}
                        className="col-span-2 max-h-24 w-full object-contain sm:col-start-2 lg:col-span-1 filter grayscale"
                    />
                    <Image
                        alt="Logo"
                        src="/pikaso_texttoimage_modern-flat-Illustrative-logo-icon-featuring-an-ab-removebg-preview.png"
                        width={158}
                        height={48}
                        className="col-span-2 col-start-2 max-h-24 w-full object-contain sm:col-start-auto lg:col-span-1 filter grayscale"
                    />
                </div>
            </div>
        </div>
    )
}
