import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-4xl font-bold hover:text-yellow-500">Rule Engine</h1>
        <div>
          <Link to="/" className="text-white mx-4 hover:text-gray-300 hover:underline">Home</Link>
          <Link to="/create" className="text-white mx-4 hover:underline hover:text-gray-300">Create Rule</Link>
          <Link to="/combine" className="text-white mx-4 hover:underline hover:text-gray-300">Combine Rule</Link>
          <Link to="/evaluate" className="text-white mx-4 hover:underline hover:text-gray-300">Evaluate Rule</Link>
          <Link to="/manage" className="text-white mx-4 hover:underline hover:text-gray-300">Manage Rule</Link>
          <Link to="/update" className="text-white mx-4 hover:underline hover:text-gray-300">Update Rule</Link>
          <Link to="/about" className="text-white mx-4 hover:underline hover:text-gray-300">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





// import React from 'react'

// import { Link } from 'react-router-dom';

// const Nav = () => {
//   return (
//     <nav className="bg-gray-800 shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <h1 className="text-white font-bold text-xl">Rule Engine AST</h1>
//           </div>
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <NavLink to="/">Home</NavLink>
//               <NavLink to="/about">About</NavLink>
//               <NavLink to="/create">Create Rule</NavLink>
//               <NavLink to="/combine">Combine Rules</NavLink>
//               <NavLink to="/evaluate">Evaluate Rule</NavLink>
//               <NavLink to="/manage">Manage Rules</NavLink>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// const NavLink = ({ to, children }) => (
//   <Link
//     to={to}
//     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
//   >
//     {children}
//   </Link>
// );

// export default Nav;




// // const Nav = () => {
// //   return (
// //     <div>Nav</div>
// //   )
// // }

// // export default Nav