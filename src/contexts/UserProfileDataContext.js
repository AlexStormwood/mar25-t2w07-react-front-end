import { createContext } from "react"


export const defaultUserProfileData = {
	username: "Default User",
	photoUrl: "example url here",
	id: "12345"
}

export const UserProfileDataContext = createContext(defaultUserProfileData);