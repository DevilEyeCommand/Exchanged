/** @format */
import { createError } from "h3";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const province_id = 22;
	try {
		const imageUrl =
			"https://www.paiduaykan.com/wp-content/uploads/2024/08/DSC07839-1000x667.jpg";

		// get district
		const getDistricts = await prisma.districts.findMany({
			where: {
				province_id: province_id,
			},
		});

		// get sub district
		const listDistrictID = await getDistricts.map((item) => item.id);
		const getSubdistricts = await prisma.subdistricts.findMany({
			where: {
				district_id: {
					in: listDistrictID,
				},
			},
		});
		
		// result
		const result = await getDistricts.map((mp) => {
			mp.image = imageUrl;
			mp.sub_districts = getSubdistricts.filter((sub) => sub.district_id === mp.id);
			return mp;
		});

		return result;
	} catch (err) {
		return createError({
			statusCode: 400,
			message: err,
		});
	}
});
