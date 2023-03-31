
export default class HttpConfig {
	public static BASE_URL = process.env.REACT_APP_API_URL ?? '/';
	public static BEARER_TOKEN = 'ACCESS_TOKEN';
	public static DEFAULT_CONFIG = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${this.BEARER_TOKEN}`
		}
	};
}
