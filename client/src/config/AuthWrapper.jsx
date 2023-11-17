// import React, { useEffect, useState } from "react";
// import { ToasterProvider} from "../providers/index";
// import { LoginModal, SignupModal } from "../components/modals/index";
// import PropTypes from "prop-types";

// const AuthWrapper = ({ children }) => {
//   const [session, setSession] = useState(null);

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session);
//     });

//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session);
//     });

//     return () => subscription.unsubscribe();
//   }, []);

//   const [users, setUsers] = useState([]);
//   const [destinations, setDestinations] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const response = await fetch(
        "https://lab-5-on-the-fly-api.vercel.app/api/users",
      );
//       const data = await response.json();
//
//       setUsers(data);
//     };

//     fetchUsers();
//   }, []);

//   if (!session) {
//     return (
//       <>
//         <ToasterProvider />
//         <LoginModal />
//         <SignupModal />
//       </>
//     );
//   } else {
//     return children;
//   }
// };

// AuthWrapper.protoTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default AuthWrapper;
