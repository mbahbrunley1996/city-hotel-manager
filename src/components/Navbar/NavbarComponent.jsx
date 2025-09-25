
"use client";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle/ModeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const NavbarComponent = () => {
  return (
    <nav className="bg-gradient-to-r border from-blue-700 via-blue-600 to-blue-700 shadow-lg px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="font-extrabold text-2xl tracking-wide text-white drop-shadow-md">
        CityHotelManager
      </h1>

      {/* Links */}
      <div className="flex gap-8 shadow px-6 py-2 font-medium w-[60%] justify-center">
        <Link href="/" className="text-white hover:text-yellow-300 transition">
          Home
        </Link>
        <Link href="/about" className="text-white hover:text-yellow-300 transition">
          About Us
        </Link>
        <Link href="/career" className="text-white hover:text-yellow-300 transition">
          Careers
        </Link>
        <Link href="/contact" className="text-white hover:text-yellow-300 transition">
          Contact
        </Link>
      </div>

      {/* Right-side controls */}
      <div className="flex items-center gap-4">
        {/* Dropdown Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Menu color="#fff" className="cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mt-2">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Billing
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuItem disabled>API</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Clerk auth buttons */}
        <SignedOut>
          <SignInButton>
            <button className="bg-white text-blue-700 px-3 py-1 rounded-md">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>

        {/* Mode toggle */}
        <div className="border rounded-md border-gray-300 shadow">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;










// "use client";
// import Link from "next/link";
// import { ModeToggle } from "@/components/ModeToggle/ModeToggle";
// import {
//     DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuPortal,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuSub,
//   DropdownMenuSubContent,
//   DropdownMenuSubTrigger,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// // import {
// //   DropdownMenuGroup,
// //   DropdownMenuPortal,
// //   DropdownMenuSub,
// //   DropdownMenuSubContent,
// //   DropdownMenuSubTrigger,
// // } from "@/components/ui/dropdown-menu";
// import { Menu } from "lucide-react";
// // import { SignedOut, SignInButton } from "@clerk/nextjs";
// import { UserButton } from "@clerk/nextjs";

// const NavbarComponent = () => {
//   return (
//     <nav className="bg-gradient-to-r border from-blue-700 via-blue-600 to-blue-700 shadow-lg px-8 py-4 flex justify-between items-center">
//       {/* Logo / Brand */}
//       <h1 className="font-extrabold text-2xl tracking-wide text-white drop-shadow-md">
//         CityHotelManager
//       </h1>

//       {/* Links */}
//       <div className="flex gap-8 shadow px-6 py-2 font-medium w-[80%] justify-center">
//         <Link 
//           href="/" 
//           className="text-white hover:text-yellow-300 transition duration-300 font-medium"
//         >
//           Home
//         </Link>
//         <Link 
//           href="/about" 
//           className="text-white hover:text-yellow-300 transition duration-300 font-medium"
//         >
//           About Us
//         </Link>
//         <Link 
//           href="/career" 
//           className="text-white hover:text-yellow-300 transition duration-300 font-medium"
//         >
//           Careers
//         </Link>
//         <Link 
//           href="/contact" 
//           className="text-white hover:text-yellow-300 transition duration-300 font-medium"
//         >
//           Contact
//         </Link>
//       </div>   
//         <div className="border rounded-md border-gray-300 shadow px-4 py-2 font-medium"> 
//           <DropdownMenu>
//       <DropdownMenuTrigger className="text-black" asChild>
//         <Menu color="#ccc" />
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="w-56 flex flex-col mt-2" align="start">
//         <DropdownMenuLabel>My Account</DropdownMenuLabel>
//         <DropdownMenuGroup>
//           <DropdownMenuItem>
//             Profile
//             <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
//           </DropdownMenuItem>
//           <DropdownMenuItem>
//             Billing
//             <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
//           </DropdownMenuItem>
//           <DropdownMenuItem>
//             Settings
//             <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
//           </DropdownMenuItem>
//           <DropdownMenuItem>
//             Keyboard shortcuts
//             <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
//           </DropdownMenuItem>
//         </DropdownMenuGroup>
//         <DropdownMenuSeparator />
//         <DropdownMenuGroup>
//           <DropdownMenuItem>Team</DropdownMenuItem>
//           <DropdownMenuSub>
//             <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
//             <DropdownMenuPortal>
//               <DropdownMenuSubContent>
//                 <DropdownMenuItem>Email</DropdownMenuItem>
//                 <DropdownMenuItem>Message</DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>More...</DropdownMenuItem>
//               </DropdownMenuSubContent>
//             </DropdownMenuPortal>
//           </DropdownMenuSub>
//           <DropdownMenuItem>
//             New Team
//             <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
//           </DropdownMenuItem>
//              {/* {SignIn Button} */}
//           {/* <SignedOut> <SignInButton  /> </SignedOut> */}
//         </DropdownMenuGroup>
//         <DropdownMenuSeparator />
//         <DropdownMenuItem>GitHub</DropdownMenuItem>
//         <DropdownMenuItem>Support</DropdownMenuItem>
//         <DropdownMenuItem disabled>API</DropdownMenuItem>
//         <DropdownMenuSeparator />
//         <DropdownMenuItem>
//           Log out
//           <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//         </div>

//       <div className="text-primary border rounded-md border-gray-300 shadow">
//         <ModeToggle />
//       </div>
//       <div>
//          <UserButton afterSignOutUrl="/" />
//       </div>
//     </nav>
//   );
// }

// export default NavbarComponent;