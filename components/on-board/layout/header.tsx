import Link from "next/link";

export default function OnboardHeader() {
    return (
        <div className="w-[100%] gap-2.5 [background:var(--Neutral-10,#FAFAFA)] shadow-[0px_1px_0px_0px_#F0F0F0] px-20 py-6">
            <Link href="/">
                <img className="float-start" src="/assets/icons/logo.svg" />
            </Link>

            <button className="float-end">
            العربية  <img className="float-end ms-[4px]" src="/assets/icons/globe.svg" />
            </button>

            <div className="clearfix"></div>
        </div>
    );
}