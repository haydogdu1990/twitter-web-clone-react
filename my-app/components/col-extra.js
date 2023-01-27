import React from "react";
import cn from "classnames";

//import styles from "./col-extra.module.css";
// geçici
import styles from "./col-extra.css";
// geçici

function Extra({ children }) {
  //return <div className={cn(styles.extra)}>{children}
	
  // geçici
	return <div>
  			<aside class="right-side">
			<div class="search-bar">
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<g>
						<path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
						</path>
					</g>
				</svg>
				<input class="search" placeholder="Twitter'da Ara">
			</div>
			<div class="trends">
				<header class="trends-header">
					<h2>
						<span>İlgini çekebilecek gündemler</span>
						
						</h2>
					
				</header>
				<div class="trends-items">
					<!-- Trends Item Start -->
					<div class="trends-item">
							<div>
								<span>Teknoloji · Gündemdekiler</span>
								<div>
									<svg viewBox="0 0 24 24" aria-hidden="true">
										<g>
											<circle cx="5" cy="12" r="2"></circle>
											<circle cx="12" cy="12" r="2"></circle>
											<circle cx="19" cy="12" r="2"></circle>
										</g>
									</svg>
								</div>
							</div>
						<strong class="hashtag">#FrontendDeveloper</strong>
						<span>42,2 B Tweet</span>
					</div>
				<!-- Trends Item End -->
				<!-- Trends Item Start -->
					<div class="trends-item">
							<div>
								<span>Ankara konumunda gündemde</span>
								<div>
									<svg viewBox="0 0 24 24" aria-hidden="true">
										<g>
											<circle cx="5" cy="12" r="2"></circle>
											<circle cx="12" cy="12" r="2"></circle>
											<circle cx="19" cy="12" r="2"></circle>
										</g>
									</svg>
								</div>
							</div>
						<strong class="hashtag">#GezilecekYerler</strong>
						<span>39 B Tweet</span>
					</div>
				<!-- Trends Item End -->
				<!-- Trends Item Start -->
					<div class="trends-item">
							<div>
								<span>Müzik · Gündemdekiler</span>
								<div>
									<svg viewBox="0 0 24 24" aria-hidden="true">
										<g>
											<circle cx="5" cy="12" r="2"></circle>
											<circle cx="12" cy="12" r="2"></circle>
											<circle cx="19" cy="12" r="2"></circle>
										</g>
									</svg>
								</div>
							</div>
						<strong class="hashtag">#CemAdrian</strong>
						<span>2.215 Tweet</span>
					</div>
				<!-- Trends Item End -->
				<!-- Trends Item Start -->
					<div class="trends-item">
							<div>
								<span>Dünya konumunda gündemde</span>
								<div>
									<svg viewBox="0 0 24 24" aria-hidden="true">
										<g>
											<circle cx="5" cy="12" r="2"></circle>
											<circle cx="12" cy="12" r="2"></circle>
											<circle cx="19" cy="12" r="2"></circle>
										</g>
									</svg>
								</div>
							</div>
						<strong class="hashtag">#Twitter</strong>
						<span>22,8 B Tweet</span>
					</div>
				<!-- Trends Item End -->
				<!-- Trends Item Start -->
					<div class="trends-item">
							<div>
								<span>Gündemdekiler</span>
								<div>
									<svg viewBox="0 0 24 24" aria-hidden="true">
										<g>
											<circle cx="5" cy="12" r="2"></circle>
											<circle cx="12" cy="12" r="2"></circle>
											<circle cx="19" cy="12" r="2"></circle>
										</g>
									</svg>
								</div>
							</div>
						<strong class="hashtag">#SevgililerGünü</strong>
						<span>2.717 Tweet</span>
					</div>
				<!-- Trends Item End -->
				<div class="more-btn">
					<span>Daha Fazla Göster</span>
				</div>
				</div>
			</div>
			<div class="who-to-follow">
			<header class="who-to-follow-header">
			<h2>Kimi takip etmeli</h2>
			</header>
			<div class="users">
			<!-- User Item Start -->
				<div class="user">
					<img class="profile-image" src="">
					<div>
					<div>
						<strong class="user-name">Jack London</strong>
						<span class="tag">@JackL</span>
					</div>
					<button class="follow-btn">Takip Et</button>
				</div>
				</div>
			<!-- User Item End -->
			<!-- User Item Start -->
				<div class="user">
					<img class="profile-image" src="">
					<div>
					<div>
						<strong class="user-name">Martin Eden</strong>
						<span class="tag">@martinE</span>
					</div>
					<button class="follow-btn">Takip Et</button>
				</div>
				</div>
			<!-- User Item End -->
			<!-- User Item Start -->
				<div class="user">
					<img class="profile-image" src="">
					<div>
					<div>
						<strong class="user-name">Alex de Souza</strong>
						<span class="tag">@alex</span>
					</div>
					<button class="follow-btn">Takip Et</button>
				</div>
				</div>
			<!-- User Item End -->
				<div class="more-btn">
					<span>Daha Fazla Göster</span>
				</div>
			</div>
			</div>
			<hr class="line">
			<footer>
			<nav>
			<span>Hizmet Şartları</span>
			<span>Gizlilik Politikası</span>
			<span>Çerez Politikası</span>
			<span>İletişim Bilgileri</span>
			<span>Reklam Bilgisi</span>
			<span>Daha Fazla <svg viewBox="0 0 24 24" aria-hidden="true"><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg></span>
			<span>© 2023 Twitter, Inc.</span>
			</nav>
			</footer>
		</aside>
  
  // geçici
  </div>;
}

export default Extra;
