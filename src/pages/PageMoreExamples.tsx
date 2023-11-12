import employees from "../data/employees.json";

export const PageMoreExamples = () => {
	return (
		<>
			<section>
				<h2 className="text-3xl mb-3">four Tailwind mobile sizes</h2>
				<div className="block sm:hidden md:hidden lg:hidden">
					smartphone
				</div>
				<div className="hidden sm:block md:hidden lg:hidden">small</div>
				<div className="hidden sm:hidden md:block lg:hidden">
					medium
				</div>
				<div className="hidden sm:hidden md:hidden lg:block">large</div>
			</section>
			<section className="w-full">
				<h2 className="text-3xl mb-3">
					flex employees with absolute/relative overlay text
				</h2>
				<div className="flex gap-3 flex-wrap w-full">
					{employees.map((employee) => {
						return (
							<>
								<div className="w-full sm:w-40 md:w-40 lg:w-80 rounded-lg relative">
									<p className="absolute left-0 p-4 top-0 bg-gradient-to-tr from-white-to-transparent w-full">
										{employee.firstName} {employee.lastName}
									</p>
									<img
										className="w-full"
										src={`images/employees/employee_${employee.employeeID}.jpg`}
									/>
								</div>
							</>
						);
					})}
				</div>
			</section>
		</>
	);
};
