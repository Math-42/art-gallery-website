import React from 'react';
import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaLinkedin
} from 'react-icons/fa';

import styles from 'styles/Footer.module.css';
import LanguageSelector from 'components/footer/LanguageSelector';
import Logo from 'components/logo/Logo';

export default function Footer() {
	return (
		<div className={styles.footer}>
			<div>
				<div className={styles.footerLeftSide}>

					<Logo />

					<div className={styles.footerData}>
						<span id={styles.zenithCopyright}>{"© - 2022 - IHC "}</span>
					</div>
				</div>
				<LanguageSelector />
			</div>
			<div className={styles.footerRightSide}>
				<div className={styles.socialIconContainer}>
					<a
						className={styles.socialIcon}
						aria-label="Facebook"
					>
						<FaFacebook />
					</a>
					<a
						className={styles.socialIcon}
						aria-label="Instagram"
					>
						<FaInstagram />
					</a>
					<a
						className={styles.socialIcon}
						aria-label="LinkedIn"
					>
						<FaLinkedin />
					</a>
					<a
						className={styles.socialIcon}
						aria-label="YouTube"
					>
						<FaYoutube />
					</a>
				</div>
			</div>
		</div>
	);
}