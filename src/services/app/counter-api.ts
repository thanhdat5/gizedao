import { GET_DATA } from "constants/endpoints";
import { ICounter, ICounterRequest } from "types/counter";
import axiosClient from "library/axios/axiosClient";
import { ResponseListGenerator } from "types/api/common-response.model";

export const getAllCounter = (params: ICounterRequest) => {
	return axiosClient
		.get<ResponseListGenerator<ICounter>>(GET_DATA)
		.then(res => {
			return res.data;
		}) as ReturnType<typeof axiosClient.get<ResponseListGenerator<ICounter>>>;
};