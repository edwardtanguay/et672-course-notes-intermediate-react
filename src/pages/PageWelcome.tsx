const frameworks = [
	"React",
	"Angular",
	"Vue",
	"Node.js",
	"Express.js",
	"Meteor",
	"Svelte",
	"Ember.js",
	"Backbone.js",
	"Next.js",
	"NestJS",
];
export const PageWelcome = () => {
	return (
		<>
			<h2 className="text-3xl mb-3">Grid example</h2>
			<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
				{frameworks.map((framework) => {
					return (
						<div className="bg-slate-800 text-slate-300 p-4 rounded-md">
							{framework}
						</div>
					);
				})}
			</div>
		</>
	);
};
