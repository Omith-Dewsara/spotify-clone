export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	// token: "BQDKRgO6sbTtfjHxpS_Z_jw1mOU5Lk91ZLGo9318ckAxon2YT2u-Evdttx01t8nYisaXgigbeiEjsvs-NPSbl_mPBl9d0hZaAvlX7jTHUZOosZaSyN6Ig6RZmzbVh3gqZ6UsMYW4moI08j6RHvTEBHqI-ieIeSrYoTQRCUmM8ZVgi0fX",
	discover_weekly: null
}

const reducer = (state, action) => {
	console.log(action);

	switch(action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user
			}
		case 'SET_TOKEN':
			return {
				...state,
				token: action.token
			}
		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.playlists
			}
		case 'SET_DISCOVER_WEEKLY':
			return {
				...state,
				discover_weekly: action.discover_weekly
			}
		default:
			return state;
	}
}

export default reducer;