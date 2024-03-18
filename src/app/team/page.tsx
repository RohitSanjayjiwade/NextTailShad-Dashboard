'use client';

import { Button } from "@/components/ui/button";
import { Command, CommandInput } from "@/components/ui/command";
import { Search } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";


const UserItem = dynamic(() => import("useritem"), { ssr: false });


type Member = {
	email: string;
	full_name: string;
	backgroundColor: string;
	role: string;
	status?: string;
}


export default function TeamSettings() {

	const [members, setMembers] = useState<Member[]>([
		{
			email: "codewithrohit@gmail.com",
			full_name: "Rohit Jiwade",
			backgroundColor: "rgba(125,24,66,1)",
			role: "Admin",
		},
		{
			email: "tushar@gmail.com",
			full_name: "Tushar Taware",
			backgroundColor: "rgba(125,24,66,1)",
			role: "Viewer",
			status: "Pending"
		}
	]);

	return <div className="grid gap-4">
		<header>
			<h2 className="text-[36px] font-[700]">Team Settings</h2>
		</header>
		<div className="grid gap-4">
			<div>
				<div className="flex items-center justify-between gap-2">
					<div className="flex items-center border w-full rounded-md px-3 py-2">
						<Search className="mr-2 h-5 w-4 text-gray-500" />
						<input
							type="search"
							placeholder="Type an email to invite..."
							className="w-full text-sm outline-none placeholder-gray-500"
						/>
					</div>
					<Button variant="secondary">Add a new member</Button>
				</div>
			</div>
			<div className="border rounded">
				{members.map((member: Member, key: number) => <div 
					className="grid grid-cols-6 border-b last:border-b-0 items-center justify-between pr-2" key={key}>
					<div className="col-span-2">
						<UserItem
							backgroundColor={member.backgroundColor}
							title={member.full_name}
							description={member.email}
							shadow={false}
							border={false}
						/>
					</div>
					<div className="col-span-3 flex gap-2">
						<div>{member.role}</div>
						<div>{member.status}</div>
					</div>
					<div className="col-span-1 flex justify-end">
						<Button variant="ghost">Remove</Button>
					</div>
				</div>)}
			</div>
		</div>
	</div>;
}