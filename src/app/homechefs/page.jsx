'use client'
import { useState, useEffect } from 'react'
import { Table } from 'antd'
import 'antd/dist/antd.css'

const { Column } = Table

function HomeChefTable() {
	const [isLoading, setIsLoading] = useState(true)
	const [homeChefs, setHomeChefs] = useState([])

	useEffect(() => {
		const fetchHomeChefs = async () => {
			setIsLoading(true)
			try {
				const res = await fetch(process.env.NEXT_PUBLIC_API_URL, {
					headers: {
						authToken: ` ${process.env.AUTH_KEY}`,
					},
				})
				const data = await res.json()
				setHomeChefs(data)
			} catch (error) {
				console.error('Failed to fetch home chefs:', error)
			} finally {
				setIsLoading(false)
			}
		}

		fetchHomeChefs()
	}, [])

	return (
		<Table dataSource={homeChefs} loading={isLoading}>
			<Column title="City" dataIndex="city" key="city" />
			<Column title="Latitude" dataIndex="latitude" key="latitude" />
			<Column title="Longitude" dataIndex="longitude" key="longitude" />
			<Column title="Pincode" dataIndex="pincode" key="pincode" />
			<Column title="State" dataIndex="state" key="state" />
			<Column title="Address" dataIndex="address" key="address" />
			<Column title="Name" dataIndex="name" key="name" />
			<Column title="Google Location" dataIndex="googleLocation" key="googleLocation" />
			<Column title="Description" dataIndex="description" key="description" />
			<Column title="Home Chef Image" dataIndex="homeChefImage" key="homeChefImage" />
			<Column title="Home Chef Status" dataIndex="homeChefStatus" key="homeChefStatus" />
			<Column title="Cuisine" dataIndex="cuisine" key="cuisine" />
			<Column title="Food Type" dataIndex="foodType" key="foodType" />
			<Column title="Max Price" dataIndex="maxPrice" key="maxPrice" />
			<Column title="Min Price" dataIndex="minPrice" key="minPrice" />
			<Column title="Opening Day" dataIndex="openingDay" key="openingDay" />
			<Column title="Max Time" dataIndex="maxTime" key="maxTime" />
			<Column title="Min Time" dataIndex="minTime" key="minTime" />
			<Column title="Opening Time" dataIndex="openingTime" key="openingTime" />
			<Column title="Closing Time" dataIndex="closingTime" key="closingTime" />
		</Table>
	)
}

export default HomeChefTable
