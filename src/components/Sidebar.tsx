import UserItem from "./UserItem";




export default function Sidebar(){
	return <div className="flex flex-col w-[300px] gap-4 min-w-[300px] border-r min-h-screen p-4">
		<div>
			<UserItem />
		</div>
		<div className="grow bg-red-500">Menu</div>
		<div>Settings / Notifications</div>
	</div>;
}