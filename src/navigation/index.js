import React from "react";
import Routes from "./Routes";
import { AuthProvider } from "../context/Auth";

export default function index() {
	return (
		<AuthProvider>
			<Routes />
		</AuthProvider>
	);
}
