export default function Test() {
	return (
		<main className="min-h-screen text-[#fff]">
			<nav className="bg-gray-800 p-4">
				<div className="container mx-auto flex items-center justify-between">
					<div className="text-white text-2xl font-medium weight-500 text-center">
						Serendale
					</div>
					<div className="hidden md:flex space-x-4">
						<a href="#" className="text-gray-300 hover:text-white">
							主页
						</a>
						<a href="#" className="text-gray-300 hover:text-white">
							关于
						</a>
						<a href="#" className="text-gray-300 hover:text-white">
							服务
						</a>
						<a href="#" className="text-gray-300 hover:text-white">
							联系
						</a>
					</div>
					<div className="hidden md:flex items-center space-x-4">
						<span className="text-gray-300">1</span>
					</div>
					<div className="md:hidden">
						<button className="text-gray-300">1231</button>
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
		</main>
	)
}
