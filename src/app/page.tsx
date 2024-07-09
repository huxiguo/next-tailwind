"use client"
import Image from "next/image"
import { Row, Col, Nav } from "@douyinfe/semi-ui"
import {
	IconGithubLogo,
	IconXiguaLogo,
	IconFaceuLogo,
	IconTwitter,
	IconMenu,
} from "@douyinfe/semi-icons"

export default function Index() {
	const navLinks = [
		{
			itemKey: "user",
			text: "Smart Contracts",
		},
		{
			itemKey: "union",
			text: "Services",
		},
		{
			itemKey: "Solutions",
			text: "Solutions",
		},
		{
			itemKey: "Roadmap",
			text: "Roadmap",
		},
		{
			itemKey: "Whitepaper",
			text: "Whitepaper",
		},
	]
	return (
		<main className="container min-h-screen text-[#fff] ">
			<nav className="pt-14 px-4">
				<div className="container mx-auto flex items-center justify-between">
					<div className="text-white text-2xl font-medium weight-500 text-center">
						Serendale
					</div>
					<div className=" hidden md:flex space-x-4">
						{navLinks.map((item) => {
							return (
								<>
									<div className="cursor-pointer text-lg text-gray-300 hover:text-white">
										{item.text}
									</div>
								</>
							)
						})}
					</div>
					<div className="hidden md:flex items-center space-x-4">
						<IconGithubLogo size="large" className="cursor-pointer" />
						<IconXiguaLogo size="large" className="cursor-pointer" />
						<IconFaceuLogo size="large" className="cursor-pointer" />
						<IconTwitter size="large" className="cursor-pointer" />
					</div>
					<div className="md:hidden">
						<button className="text-gray-300">
							<IconMenu />
						</button>
					</div>
				</div>
				<div className="hidden md:hidden mt-4 space-y-2">
					<a href="#" className="block text-gray-300 hover:text-white">
						主页
					</a>
					<a href="#" className="block text-gray-300 hover:text-white">
						关于
					</a>
					<a href="#" className="block text-gray-300 hover:text-white">
						服务
					</a>
					<a href="#" className="block text-gray-300 hover:text-white">
						联系
					</a>
				</div>
			</nav>
			<div className="container flex flex-col items-center mt-24 mx-auto">
				<h1 className="font-medium text-4xl md:text-5xl lg:text-6xl text-center leading-tight md:leading-snug lg:leading-relaxed tracking-tighter md:tracking-tight lg:tracking-normal text-transparent bg-gradient-text bg-clip-text">
					A Fast Blockchain.
				</h1>
				<h2 className="font-medium text-4xl md:text-5xl lg:text-6xl text-center leading-tight md:leading-snug lg:leading-relaxed tracking-tighter md:tracking-tight lg:tracking-normal">
					Scalable AI.
				</h2>
				<p className="w-full md:w-2/3 text-base md:text-lg lg:text-xl font-normal text-center mt-4">
					Our technology performing fast blockchain (120K TPS) and it has
					guaranteed AI-based data security. Proof of Stake, its consensus
					algorithm enables unlimited speeds.
				</p>
				<div className="flex flex-col md:flex-row mt-4">
					<button className="border rounded-full px-8 py-3 md:mr-4 mb-2 md:mb-0 w-full md:w-auto">
						Get started
					</button>
					<button className="border ml-0 md:ml-4 rounded-full px-8 py-3 w-full md:w-auto">
						Ecosystems
					</button>
				</div>
			</div>

			<Image
				src="/bottom.svg"
				alt="Vercel Logo"
				className="px-16 fixed bottom-0 flex justify-center h-1/2 lg:h-auto w-full "
				width={0}
				height={0}
				priority
			/>
		</main>
	)
}
