"use client";
import Link from "next/link";
import { useState, useEffect } from "react";


export default function dashboardLayout({
	children
}: {
	children: React.ReactNode;
}) {
	const [userRole, setUserRole] = useState<string | null>(null);
	const [firstName, setFirstName] = useState<string | null>(null);
	const [lastName, setLastName] = useState<string | null>(null);

	useEffect(() => {
		const role = localStorage.getItem('userRole');
		const firstName = localStorage.getItem('firstName');
		const lastName = localStorage.getItem('lastName');
		setUserRole(role);
		setFirstName(firstName);
		setLastName(lastName);
	}, []);

	return (
		<>
			<aside
				id="default-sidebar"
				className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
				aria-label="Sidebar"
			>
				<div className="h-full px-3 py-4 overflow-y-auto colorbg dark:bg-gray-800">
					<ul className="space-y-2 font-medium">
						<ul>
							{userRole === '1' && (
								<li key="admin">
									{/* Aquí puedes poner el código para mostrar el elemento del menú para el rol de admin */}
									<Link href="/dashboard"
										className="flex items-center p-2 colortext rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group">
										<svg className="w-5 h-5 colortext transition duration-75 dark:text-gray-400 group-hover:text-gray-100 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
											<path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
										</svg>
										<span className="flex-1 ms-3 whitespace-nowrap">Inicio</span>
									</Link>
									<Link href="/dashboard/secretarias"
										className="flex items-center p-2 colortext rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group">
										<svg className="w-5 h-5 colortext transition duration-75 dark:text-gray-400 group-hover:text-gray-100 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
											<path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
										</svg>
										<span className="flex-1 ms-3 whitespace-nowrap">Secretarios/as</span>
									</Link>

									<Link href="/dashboard/carreras"
										className="flex items-center p-2 colortext rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group">
										<svg className="w-5 h-5 colortext transition duration-75 dark:text-gray-400 group-hover:text-gray-100 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
											<path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
										</svg>
										<span className="flex-1 ms-3 whitespace-nowrap">Carreras</span>
									</Link>
									<Link href="/dashboard/#"
										className="flex items-center p-2 colortext rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group">
										<svg className="w-5 h-5 colortext transition duration-75 dark:text-gray-400 group-hover:text-gray-100 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
											<path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
										</svg>
										<span className="flex-1 ms-3 whitespace-nowrap">Categorías</span>
									</Link>
								</li>

							)}
							{userRole === '2' && (

								<li key="secretario">

									<Link href="/dashboard"
										className="flex items-center p-2 colortext rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group">
										<svg className="w-5 h-5 colortext transition duration-75 dark:text-gray-400 group-hover:text-gray-100 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
											<path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
										</svg>
										<span className="flex-1 ms-3 whitespace-nowrap">Inicio</span>
									</Link>
									<Link href="/dashboard/estudiantes"
										className="flex items-center p-2 colortext rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group">
										<svg className="w-5 h-5 colortext transition duration-75 dark:text-gray-400 group-hover:text-gray-100 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
											<path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
										</svg>
										<span className="flex-1 ms-3 whitespace-nowrap">Estudiantes</span>
									</Link>
								</li>


							)}
							{userRole === '3' && (
								<li key="superadmin">

									<Link href="/dashboard"
										className="flex items-center p-2 colortext rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group">
										<svg className="w-5 h-5 colortext transition duration-75 dark:text-gray-400 group-hover:text-gray-100 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
											<path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
										</svg>
										<span className="flex-1 ms-3 whitespace-nowrap">Inicio</span>
									</Link>
									<Link href="/dashboard/administradores"
										className="flex items-center p-2 colortext rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group">
										<svg className="w-5 h-5 colortext transition duration-75 dark:text-gray-400 group-hover:text-gray-100 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
											<path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
										</svg>
										<span className="flex-1 ms-3 whitespace-nowrap">Administradores</span>
									</Link>
									<Link href="/dashboard/facultades"
										className="flex items-center p-2 colortext rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group">
										<svg className="w-5 h-5 colortext transition duration-75 dark:text-gray-400 group-hover:text-gray-100 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
											<path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
										</svg>
										<span className="flex-1 ms-3 whitespace-nowrap">Facultades</span>
									</Link>
								</li>
							)}
							<li key="salir">
								<Link href="/" className="{isRouteActive('/') ? 'active' : ''}
									flex items-center p-2 colortext rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group">
									<svg className="w-5 h-5 colortext transition duration-75 dark:text-gray-400 group-hover:text-gray-100 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
									</svg>
									<span className="flex-1 ms-3 whitespace-nowrap">Salir</span>
								</Link>
							</li>
						</ul>
						{/* {children}  */}
					</ul>
				</div>
			</aside >
			<div className="p-4 sm:ml-64">{children}</div>

		</>
	);
}