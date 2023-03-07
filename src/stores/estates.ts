import { writable } from 'svelte/store';
import axios from 'axios';
import type { EstateProps } from '@/types/datas';

export const getEstatesDatas = async (): Promise<EstateProps[]> => {
	const { data } = await axios.get('../datas/data.json');
	return data;
};

export const getEstateData = async (id: string): Promise<EstateProps> => {
	const { data } = await axios.get('../datas/data.json');
	return data.find((el: EstateProps) => el.id === id);
};

export const estates = writable<EstateProps[]>();
