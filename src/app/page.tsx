import Image from "next/image";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="font-bold text-2xl">Fucora</h1>
			<br/>
			<h1 className="font-bold text-2xl">Unofficial UNSW Projects</h1>
			<br/>
			<p className="text-md">Made by UNSW's students to help others</p>
		</div>
	);
}
