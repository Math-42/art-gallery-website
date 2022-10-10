import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { languageSelector } from 'styles/Footer.module.css';

export default function LanguageSelector() {
	const currPage = useRouter().asPath;
	return (
		<>
			<div className={languageSelector}>
				<Link href={currPage} locale="pt">
					Português
				</Link>
				<div className="vl" />
				<Link href={currPage} locale="en">
					English
				</Link>

				<div className='vl' />
				<Link href={currPage} locale="es">
					Español
				</Link>
			</div>
		</>
	);
}
