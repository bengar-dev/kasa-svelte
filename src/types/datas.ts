export type EstateProps = {
	id: string;
	cover: string;
	description: string;
	equipments: string[];
	host: HostProps;
	location: string;
	pictures: string[];
	rating: string;
	tags: string[];
	title: string;
};

export type HostProps = {
	name: string;
	picture: string;
};
