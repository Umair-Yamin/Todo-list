
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    // Handle form submission here
  };

  return (
    <>
      <section className="rounded-md bg-black/80 p-2">
        <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-2xl font-bold leading-tight text-black">
              Sign up to create account
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?{' '}
              <Link to="#" className="font-medium text-black transition-all duration-200 hover:underline">
                Sign In
              </Link>
            </p>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      id="nameInput" // Unique ID
                      placeholder="Enter Your Name"
                      required
                      autoFocus
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-base font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="emailInput" // Unique ID
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="text-base font-medium text-gray-900">
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="passwordInput" // Unique ID
                      placeholder="Enter Your Password"
                      required
                      minLength={8}
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Create Account
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2"
                    >
                      <line x1={5} y1={12} x2={19} y2={12} />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;



















 



// <div className="items-center justify-cente rounded-md p-10 min-h-[80vh] md:w-[35%]">
//         <form  onSubmit={handleSubmit}>
//           <h4 className="font-bold text-center"> FORM:</h4>

//           <label
//             className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//             htmlFor="nameInput"
//           >
//             Name
//           </label>
//           <input
//             className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             id="nameInput"
//             placeholder="Enter Your Name"
//             required
//             autoFocus
//           />

//           <label
//             className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//             htmlFor="emailInput"
//           >
//             Email
//           </label>
//           <input
//             className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             id="emailInput"
//             placeholder="Enter Your Email"
//             required
//           />

//           <div>
//             <label
//               className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//               htmlFor="passwordInput"
//             >
//               Password
//             </label>
//             <input
//               className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               id="passwordInput"
//               placeholder="Enter Your Password"
//               required
//             />
//           </div>
//           {/* Add other input fields here */}

//           <button type="submit">Submit</button>
//         </form>
//       </div>