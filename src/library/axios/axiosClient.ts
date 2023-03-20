import axios from 'axios';
import HttpConfig from './http-config';
import { errorInterceptor } from './http-error.interceptor';

const axiosClient = axios.create({
	baseURL: HttpConfig.BASE_URL,
	...HttpConfig.DEFAULT_CONFIG
});

axiosClient.interceptors.request.use(request => {
	return request;
});

//response interceptor handler
axiosClient.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		return errorInterceptor(error);
	}
);

export default axiosClient;
