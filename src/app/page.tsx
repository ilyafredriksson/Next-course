"use client";
import Image from "next/image";
import { useState } from "react";

const cuisines = [
	{ name: "Asian", img: "/asian-food.jpg", icon: "🇨🇳" },
	{ name: "European", img: "/european-food.jpg", icon: "🇫🇷" },
	{ name: "African", img: "/african-food.jpg", icon: "🇳🇬" },
	{ name: "Latin American", img: "/latin-food.jpg", icon: "🇲🇽" },
];

const dishes = [
	{ name: "Pho", img: "/asian-food.jpg", desc: "Vietnamese noodle soup." },
	{ name: "Paella", img: "/european-food.jpg", desc: "Spanish rice with seafood." },
	{ name: "Jollof Rice", img: "/african-food.jpg", desc: "West African classic." },
	{ name: "Tacos", img: "/latin-food.jpg", desc: "Mexican street food." },
];

const values = [
	{ icon: "🌍", title: "Global Flavors", desc: "Authentic dishes from every continent." },
	{ icon: "👨‍🍳", title: "Expert Chefs", desc: "World-class chefs with passion for food." },
	{ icon: "🍽️", title: "Elegant Dining", desc: "Enjoy a premium experience in our restaurant." },
	{ icon: "⭐", title: "Top Rated", desc: "Loved by thousands of foodies worldwide." },
];

const reviews = [
	{ name: "Anna S.", text: "Fantastisk mat och vacker design!", stars: 5, img: "/customer1.jpg" },
	{ name: "Liam K.", text: "Bästa internationella menyerna online.", stars: 5, img: "/customer2.jpg" },
	{ name: "Sara M.", text: "Underbar atmosfär och supergoda rätter!", stars: 4, img: "/customer3.jpg" },
];

export default function Home() {
	const [dark, setDark] = useState(false);
	return (
		<main className={
			`font-sans min-h-screen flex flex-col transition-colors duration-500 ${dark ? "dark" : ""}`
		}>
			{/* Dark mode toggle */}
			<button
				className="fixed top-4 right-4 z-50 p-2 rounded-full shadow bg-white/80 dark:bg-[#232b2b]/80 hover:scale-110 transition"
				aria-label="Toggle dark mode"
				onClick={() => setDark(d => !d)}
			>
				{dark ? "🌙" : "☀️"}
			</button>

			{/* Header */}
			<header className="sticky top-0 z-40 bg-gradient-to-b from-[#1a2a23] via-[#1a2a23]/90 to-transparent dark:from-[#10181a] dark:via-[#10181a]/90 shadow flex items-center justify-between px-8 py-5 transition-colors duration-500">
				<div className="flex items-center gap-3">
					<Image src="/logo_food.png" alt="International Food" width={44} height={44} className="rounded-full border-2 border-gold-400 shadow" />
					<span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-[#1a2a23] dark:text-[#f5f5f5]">International Food</span>
				</div>
				<nav className="hidden md:flex gap-10 items-center">
					<a href="#" className="font-semibold text-lg text-[#1a2a23] dark:text-[#f5f5f5] hover:text-gold-500 dark:hover:text-gold-400 transition-colors">Home</a>
					<a href="#cuisines" className="font-semibold text-lg text-[#1a2a23] dark:text-[#f5f5f5] hover:text-gold-500 dark:hover:text-gold-400 transition-colors">Cuisines</a>
					<a href="#dishes" className="font-semibold text-lg text-[#1a2a23] dark:text-[#f5f5f5] hover:text-gold-500 dark:hover:text-gold-400 transition-colors">Popular Dishes</a>
					<a href="#why" className="font-semibold text-lg text-[#1a2a23] dark:text-[#f5f5f5] hover:text-gold-500 dark:hover:text-gold-400 transition-colors">Why Choose Us</a>
					<a href="#reviews" className="font-semibold text-lg text-[#1a2a23] dark:text-[#f5f5f5] hover:text-gold-500 dark:hover:text-gold-400 transition-colors">Reviews</a>
				</nav>
			</header>

			{/* Hero */}
			<section className="relative flex flex-col items-center justify-center min-h-[80vh] w-full bg-gradient-to-br from-[#e9e6df] to-[#f8f5f2] dark:from-[#18181b] dark:to-[#232b2b] overflow-hidden">
				<Image src="/hero-food.jpg" alt="World Food" fill className="object-cover z-0" />
				<div className="absolute inset-0 bg-gradient-to-b from-[#1a2a23]/80 via-transparent to-[#e9e6df]/80 dark:from-[#10181a]/90 dark:to-[#232b2b]/80 z-10" />
				<div className="relative z-20 flex flex-col items-center justify-center py-24 px-4 max-w-2xl mx-auto">
					<h1 className="font-serif text-5xl md:text-7xl font-bold text-center text-[#1a2a23] dark:text-[#f5f5f5] mb-6 leading-tight drop-shadow-lg">Taste the World.<br /><span className="text-gold-500 dark:text-gold-400">One Bite at a Time.</span></h1>
					<p className="text-xl md:text-2xl text-[#232b2b] dark:text-[#e9e6df] font-light text-center mb-10 max-w-xl">Experience authentic international cuisine in our elegant restaurant.</p>
					<div className="flex gap-6">
						<a href="#cuisines" className="px-8 py-3 rounded-full bg-gradient-to-r from-gold-400 to-orange-400 text-white font-bold shadow-lg hover:scale-105 hover:from-orange-400 hover:to-gold-400 transition">View Menu</a>
					</div>
				</div>
			</section>

			{/* International Cuisines */}
			<section id="cuisines" className="py-20 px-4 max-w-[1320px] mx-auto w-full">
				<h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-[#1a2a23] dark:text-[#f5f5f5]">International Cuisines</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
					{cuisines.map(c => (
						<div key={c.name} className="bg-white/90 dark:bg-[#232b2b]/90 rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition group">
							<span className="text-4xl mb-4">{c.icon}</span>
							<Image src={c.img} alt={c.name} width={180} height={120} className="rounded-xl mb-4 shadow group-hover:brightness-110 transition" />
							<h3 className="font-serif text-2xl font-bold mb-2 text-[#1a2a23] dark:text-[#f5f5f5]">{c.name}</h3>
						</div>
					))}
				</div>
			</section>

			{/* Popular Dishes */}
			<section id="dishes" className="py-20 px-4 max-w-[1320px] mx-auto w-full">
				<h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-[#1a2a23] dark:text-[#f5f5f5]">Popular Dishes</h2>
				<div className="flex gap-8 overflow-x-auto pb-4">
					{dishes.map(dish => (
						<div key={dish.name} className="min-w-[300px] bg-white/90 dark:bg-[#232b2b]/90 rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition group mr-4 last:mr-0">
							<Image src={dish.img} alt={dish.name} width={180} height={120} className="rounded-xl mb-4 shadow group-hover:brightness-110 transition" />
							<h3 className="font-serif text-xl font-bold mb-2 text-[#1a2a23] dark:text-[#f5f5f5]">{dish.name}</h3>
							<p className="text-[#232b2b] dark:text-[#e9e6df] mb-2">{dish.desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* Why Choose Us */}
			<section id="why" className="py-20 px-4 max-w-[1200px] mx-auto w-full">
				<h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-[#1a2a23] dark:text-[#f5f5f5]">Why Choose Us</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
					{values.map(v => (
						<div key={v.title} className="bg-white/90 dark:bg-[#232b2b]/90 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition group">
							<span className="text-4xl mb-4">{v.icon}</span>
							<h3 className="font-serif text-xl font-bold mb-2 text-[#1a2a23] dark:text-[#f5f5f5]">{v.title}</h3>
							<p className="text-[#232b2b] dark:text-[#e9e6df] text-center">{v.desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* Customer Reviews */}
			<section id="reviews" className="py-20 px-4 max-w-[1000px] mx-auto w-full">
				<h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-[#1a2a23] dark:text-[#f5f5f5]">Customer Reviews</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
					{reviews.map(r => (
						<div key={r.name} className="bg-white/90 dark:bg-[#232b2b]/90 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition group">
							<Image src={r.img} alt={r.name} width={64} height={64} className="w-16 h-16 rounded-full object-cover border-2 border-gold-400 dark:border-gold-500 mb-4 group-hover:scale-110 transition" />
							<div className="flex mb-2">
								{Array.from({ length: r.stars }).map((_, i) => (
									<span key={i} className="text-gold-500 dark:text-gold-400 text-xl">★</span>
								))}
							</div>
							<p className="italic text-center mb-2 text-[#232b2b] dark:text-[#e9e6df]">“{r.text}”</p>
							<span className="text-gold-500 dark:text-gold-400 font-semibold">{r.name}</span>
						</div>
					))}
				</div>
			</section>

			{/* Footer */}
			<footer className="w-full py-10 bg-gradient-to-t from-[#1a2a23] via-[#232b2b] to-transparent dark:from-[#10181a] dark:via-[#232b2b] text-gray-200 text-center mt-auto">
				<div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto gap-4">
					<div>
						<span className="font-serif font-bold text-lg">International Food</span> &copy; {new Date().getFullYear()}
					</div>
					<div className="flex gap-4">
						<a href="#" className="hover:text-gold-400">Facebook</a>
						<a href="#" className="hover:text-gold-400">Instagram</a>
						<a href="#" className="hover:text-gold-400">TikTok</a>
					</div>
					<div>
						<span>Contact: info@internationalfood.com</span>
					</div>
				</div>
			</footer>
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
