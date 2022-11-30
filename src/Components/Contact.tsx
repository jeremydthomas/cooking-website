import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
} from "next-share";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
              To Order
            </h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                Please contact Jennifer at the following places:
              </p>
            </div>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <PhoneIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>+1 (701) 500-0124</p>
                  <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0"></div>
                <Link href="https://www.facebook.com/j3nnif3r8">
                  <FacebookIcon size={32} round />
                </Link>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <EnvelopeIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>jenny26bear@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
