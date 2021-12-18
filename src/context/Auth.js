import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	return (
		<AuthContext.Provider
			value={{
				user,
				setUser,
				// login: async () => {
				//   await promptAsync();
				//   if (response?.type === 'success') {
				//     // console.log(response);
				//     const { authentication } = response;
				//     // console.log(authentication);
				//     setUser(authentication);
				//     console.log(user);
				//   }
				// }
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
