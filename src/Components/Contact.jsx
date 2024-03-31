import React from 'react'

function Contact() {
  return (
    <div>
   
    <div className="mx-auto max-w-7xl px-4">
     
    </div>
    <div className="rounded-lg bg-gray-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="py-20">
          <div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="w-full text-4xl font-bold text-gray-900">
                Our Offices
              </p>
              <p className="w-full text-lg text-gray-600">
                Find us at these locations.
              </p>
            </div>
            <div className="space-y-4 divide-y-2">
              <div className="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full">
                <p className="w-full text-xl font-semibold  text-gray-900">
                  Bengaluru office
                </p>
                <p className="w-full text-base  text-gray-600">
                  Mon-Sat 9am to 5pm.
                </p>
                <p className="text-sm font-semibold text-gray-600">
                  100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN
                </p>
              </div>
              <div className="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full">
                <p className="w-full text-xl font-semibold  text-gray-900">
                  Head office
                </p>
                <p className="w-full text-base  text-gray-600">
                  Mon-Sat 9am to 5pm.
                </p>
                <p className="text-sm font-semibold text-gray-600">
                  12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN
                </p>
              </div>
              <div className="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full">
                <p className="w-full text-xl font-semibold  text-gray-900">
                  Karnataka office
                </p>
                <p className="w-full text-base  text-gray-600">
                  Mon-Sat 9am to 5pm.
                </p>
                <p className="text-sm font-semibold text-gray-600">
                  42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru,
                  Karnataka 560025 IN
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr className="mt-6" />
   
  </div>
  )  
}

export default Contact
