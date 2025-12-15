"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site.config";

const categories = [
	"All",
	"Asian",
	"European",
	"Vegetarian",
	"Dessert",
];

const recipes = [
	{
		name: "Sushi",
		desc: "Classic Japanese dish with rice, fish, and seaweed.",
		img: "/logo_food.png",
		cat: "Asian",
	},
	{
		name: "Tacos",
		desc: "Mexican street food with tortillas, meat, and veggies.",
		img: "/logo_food.png",
		cat: "European",
	},
	{
		name: "Pasta",
		desc: "Italian favorite with fresh pasta and rich sauces.",
		img: "/logo_food.png",
		cat: "European",
	},
	{
		name: "Veggie Bowl",
		desc: "Healthy vegetarian bowl with grains and greens.",
		img: "/logo_food.png",
		cat: "Vegetarian",
	},
	{
		name: "Chocolate Cake",
		desc: "Rich and moist chocolate dessert.",
		img: "/logo_food.png",
		cat: "Dessert",
	},
];

const testimonials = [
	{
		name: "Anna S.",
		text: "The recipes are so easy to follow and delicious! My family loves them.",
	},
	{
		name: "Liam K.",
		text: "A fantastic resource for global cuisine. Highly recommended!",
	},
	{
		name: "Sara M.",
		text: "I discovered so many new dishes. The design is beautiful!",
	},
];

export default function Home() {
	const [selectedCat, setSelectedCat] = useState("All");
	const [showTop, setShowTop] = useState(false);

	// Scroll to top button logic
	if (typeof window !== "undefined") {
		window.onscroll = () => {
			setShowTop(window.scrollY > 300);
		};
	}

	const filtered =
		selectedCat === "All"
			? recipes
			: recipes.filter((r) => r.cat === selectedCat);

	return (
		<main className="min-h-screen flex flex-col bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800">
			{/* Parallax Hero Section */}
			<section
				className="relative flex flex-col items-center justify-center min-h-[60vh] w-full overflow-hidden"
				style={{
					backgroundImage: "url(/hero.jpg)",
					backgroundAttachment: "fixed",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 z-0 animate-pulse-slow" />
				<div className="relative z-10 flex flex-col items-center justify-center w-full h-full py-16">
					<h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-yellow-300 to-green-400 drop-shadow-lg mb-4 text-center animate-fade-in">
						{siteConfig.title}
					</h1>
					<p className="text-xl md:text-2xl text-gray-200 font-light text-center max-w-2xl mb-8 animate-fade-in delay-200">
						{siteConfig.description}
					</p>
					<div className="flex gap-4 animate-fade-in delay-300">
						<a
							href="#recipes"
							className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold shadow-lg hover:scale-110 hover:shadow-2xl transition-transform duration-200"
						>
							Explore Recipes
						</a>
						<a
							href="#about"
							className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-teal-400 text-white font-semibold shadow-lg hover:scale-110 hover:shadow-2xl transition-transform duration-200"
						>
							About Us
						</a>
					</div>
				</div>
			</section>

			{/* Category Filter */}
			<div className="flex flex-wrap justify-center gap-3 py-6 animate-fade-in-up">
				{categories.map((cat) => (
					<button
						key={cat}
						className={`px-4 py-2 rounded-full font-medium border border-white/20 text-white transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white ${
							selectedCat === cat
								? "bg-gradient-to-r from-blue-500 to-purple-600 text-white scale-105 shadow-lg"
								: "bg-black/40"
						}`}
						onClick={() => setSelectedCat(cat)}
					>
						{cat}
					</button>
				))}
			</div>

			{/* Recipes Section */}
			<section id="recipes" className="py-12 px-4 max-w-6xl mx-auto w-full">
				<h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center animate-fade-in">
					Popular Recipes
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{filtered.map((r, i) => (
						<div
							key={r.name}
							className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center hover:bg-white/20 transition group animate-fade-in-up"
						>
							<img
								src={r.img}
								alt={r.name}
								className="w-20 h-20 mb-4 rounded-full shadow group-hover:scale-110 transition-transform duration-200"
							/>
							<h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-200">
								{r.name}
							</h3>
							<p className="text-gray-200 text-center mb-4">{r.desc}</p>
							<button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow hover:scale-110 hover:shadow-2xl transition-transform duration-200">
								View Recipe
							</button>
						</div>
					))}
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-16 px-4 max-w-4xl mx-auto w-full animate-fade-in">
				<h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
					What Our Users Say
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((t, i) => (
						<div
							key={i}
							className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center hover:bg-white/20 transition animate-fade-in-up"
						>
							<div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-yellow-300 flex items-center justify-center text-2xl font-bold text-white mb-4">
								{t.name[0]}
							</div>
							<p className="text-gray-200 text-center mb-2 italic">
								“{t.text}”
							</p>
							<span className="text-yellow-300 font-semibold">{t.name}</span>
						</div>
					))}
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="py-16 px-4 max-w-3xl mx-auto w-full animate-fade-in">
				<h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
					About International Food
				</h2>
				<p className="text-gray-200 text-lg text-center mb-4">
					Welcome to International Food! Discover recipes from all over the
					world, learn about ingredients, and get inspired to cook something new
					every day. Our mission is to bring global flavors to your kitchen with
					easy-to-follow recipes and beautiful food stories.
				</p>
			</section>

			{/* Footer */}
			<footer className="w-full py-6 bg-black/80 text-gray-400 text-center mt-auto border-t border-white/10 animate-fade-in">
				<span className="text-sm">
					&copy; {new Date().getFullYear()} International Food. All rights
					reserved.
				</span>
			</footer>

			{/* Scroll to Top Button */}
			{showTop && (
				<button
					className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white shadow-lg hover:scale-110 transition-transform animate-fade-in"
					onClick={() =>
						window.scrollTo({ top: 0, behavior: "smooth" })
					}
					aria-label="Scroll to top"
				>
					↑
				</button>
			)}
		</main>
	);
}

// Animations (add to globals.css):
// .animate-fade-in { animation: fadeIn 1s both; }
// .animate-fade-in-up { animation: fadeInUp 1s both; }
// .animate-pulse-slow { animation: pulse 4s infinite; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: none; } }
// @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.95; } }
