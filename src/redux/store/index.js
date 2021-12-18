import reducers from "../reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk];

const persistConfig = {
	key: "root",
	storage: AsyncStorage,
	blacklist: ["donors", "error"],
};

// if (__DEV__) {
//   const createDebugger = require('redux-flipper').default;
//   middlewares.push(createDebugger());
// }

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
	let store = createStore(
		persistedReducer,
		composeWithDevTools(applyMiddleware(...middlewares)),
	);
	let persistor = persistStore(store);
	return { store, persistor };
};
