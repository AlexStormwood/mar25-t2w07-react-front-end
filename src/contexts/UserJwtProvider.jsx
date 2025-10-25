import { useEffect, useState } from "react";
import { UserJwtContext } from "./UserJwtContext";
import useLocalStorage from "react-use/lib/useLocalStorage";
// import {useLocalStorage} from "react-use";


export function UserJwtProvider({children}){

	const [lsJwt, setLsJwt] = useLocalStorage("userJwt", "");

	const [userJwt, setUserJwt] = useState("");

	useEffect(() => {
		// When the UserJwtProvider first loads, check the localstorage for a JWT
		if (lsJwt){
			setUserJwt(lsJwt);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

	useEffect(() => {
		// If the React state version of the JWT changes, mirror that back into localstorage
		setLsJwt(userJwt);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userJwt]);


	return <UserJwtContext.Provider value={[userJwt, setUserJwt]}>
		{children}
	</UserJwtContext.Provider>
}