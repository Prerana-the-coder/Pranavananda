import type { Metadata } from "next";
import { FaWhatsapp, FaYoutube, FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";


export const metadata: Metadata = {
  title: "Contact Us | Pranavananda International School",
};

export default function ContactUsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-end gap-4">
  <a
    href="https://www.pisgurugram.com/Content.aspx?Id=MandatoryPubDis"
    target="_blank"
    className="bg-orange-500 text-white px-4 py-1 rounded-full hover:bg-orange-600 transition"
  >
    Mandatory Public Disclosure
  </a>

  <a
    href="https://app.campuspro.in/"
    target="_blank"
    className="bg-orange-500 text-white px-4 py-1 rounded-full hover:bg-orange-600 transition"
  >
    Fee Payment
  </a>
</div>

      <h1 className="text-3xl font-semibold tracking-tight text-[var(--fg)] sm:text-4xl">
        Contact Us
      </h1>
      <p className="max-w-3xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
        Wazirpur, Sector – 92, Gurugram, Haryana - 122505
      </p>
      <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base">
        Phone: 8448293021, 8448293023, 8448293024
        <br />
        Email: bsspisggn@gmail.com
      </p>
          <div className="flex gap-4 mt-6 text-2xl text-orange-500">
            <a href="https://www.youtube.com/results?search_query=pranavananda+international+school" target="_blank">
              <FaWhatsapp />
            </a>

            <a href="https://www.youtube.com/results?search_query=pranavananda+international+school" target="_blank">
              <FaYoutube />
            </a>

            <a href="https://www.instagram.com/pisgurugram/" target="_blank">
              <FaInstagram />
            </a>

            <a href="https://pisgurugram.com/Content.aspx?Id=Media#" target="_blank">
              <FaLinkedin />
            </a>

            <a href="https://pisgurugram.com/Content.aspx?Id=Media#" target="_blank">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com/PISGURUGRAM" target="-blank">
              <FaFacebook />
              </a>
            
          </div>

        </div>
  );
}

