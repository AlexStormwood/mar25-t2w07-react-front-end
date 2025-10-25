import { useContext, useEffect, useState } from "react";
import { defaultUserProfileData, UserProfileDataContext } from "./UserProfileDataContext";
import { UserJwtContext } from "./UserJwtContext";


export function UserProfileDataProvider({children}){

	let [userProfileData, setUserProfileData] = useState(defaultUserProfileData)

	// Reads the UserJwtProvider's context values, 
	// so this UserProfileDataProvider must be a child component of UserJwtProvider
	let [userJwt] = useContext(UserJwtContext);

	useEffect(() => {
		const getUserProfileData = async () => {
			// Reach out to the backend and get user data
			if (import.meta.env.DEV) {
				// if in dev, don't use the real API
				console.log("Getting user profile  data from hardcoded dev object!");
				setUserProfileData({
					username: "dev user",
					photoUrl: "example dev photo",
					id: "123456"
				})
			} else {
				// in product, use the real API!
				console.log("Getting user profile data from the deployed API!")
			}
		}

		// If the jwt exists (e.g. if it's created and/or updated), fetch user data
		if (userJwt){
			getUserProfileData();
		} else {
			// else, the user jwt is deleted, no user is signed in
			setUserProfileData({username:"", photoUrl:"", id: ""})
		}
		
	}, [userJwt]);


	return <UserProfileDataContext.Provider value={[userProfileData, setUserProfileData]} >
		{children}
	</UserProfileDataContext.Provider>
}