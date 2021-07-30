import emoji from 'react-easy-emoji';

export const greeting = {
	username: '권범규',
	title: 'DEV KBK',
	subTitle: emoji("프론트 엔드 개발자"),
	// role: "Your role",
	resumeLink: "https://Kwon-Bum-Kyu.github.io/KBKPortFolio/KBK_career_statement.pdf",
	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	// 테스트 1223123123123123
	view: true
};

export const socialMediaLinks = {
	// IMPORTANT
	// if you don't have, change value to blank or false!! DO NOT DELETE!
	github: 'https://github.com/Kwon-Bum-Kyu',
	linkedin: 'https://www.linkedin.com/in/%EB%B2%94%EA%B7%9C-%EA%B6%8C-ba5639209/',
	email: 'missing107@naver.com',
	facebook: 'https://www.facebook.com/profile.php?id=100007533872928',
	// twitter: "Your twitter link",
	instagram: "https://www.instagram.com/bumkyu_kwon/",
	// medium: 'Your medium link',
	// stackoverflow: 'Your stackoverflow link'
};

export const skills = {
	title: emoji("개발 스킬"),
	subTitle: "직무 역량",
	describeSkills: [
		emoji("TEAM WITH, 워치마일을 진행하면서 Html, Javascript, PHP, React, React-native 등 다양한 언어의 경험을 쌓았습니다."),
		emoji("워치마일을 제작하면서 실내 측위를 활용하기 위한 비콘을 워치마일에 연동을 하며 무거운 기능을 최적화를 하기 위해서 직장 동료분들에게 코드 리뷰를 하며 직접 유지 보수를 진행하였습니다."),
		emoji("워치마일이 연동된 주차장들을 하나로 묶는 워치마일 알파는 직접 기획에 참여하며 백엔드 개발자, 디자이너와의 협업을 위해서 커뮤니케이션을 매주 1회 이상 진행을 하며 실무에서 필요한 협업 경험을 쌓았습니다."),
		emoji("가설로 시작한 크고 작은 기능과 개선들을 모두 실험(A/B Test)으로 빠르게 진행하고, 이를 현장에서 검증하며 결과를 확인하고 공유하여 유저에 대한 이해를 높힐 수 있었고, 실험 데이터를 직접 확인하여 데이터로 커뮤니케이션하는 능력을 키웠습니다."),
		emoji("Analytics를 통해 유저의 문제를 찾거나 내부 회의를 통한 아이디어로 가설을 발굴하여, 직접 기획하고 개발하여 품에 기여하는 경험을 수차례 진행하며, 개발뿐만아니라 제품관점의 시야를 넓혔고, 프로덕트 개발 오너십에 대한 증명을 했습니다."),
		emoji("워치마일의 성능 향상을 위하여 실내 측위 알고리즘을 재설계를 진행을 하였고 해당 재설계된 알고리즘을 적용하여 오차율 0.5m 이내, 기존 대비 목적지 추천 평균 소요 시간 30%이상 상승을 이뤄냈습니다."),
	],
	// IMPORTANT
	// You need to find className for font-awesome icon
	// Go to https://fontawesome.com/ and search icon
	lists: [
		{fontAwesome: "fab fa-html5", text: "HTML5", proficiency: 0},
		{fontAwesome: "fab fa-css3-alt", text: "CSS3", proficiency: 0},
		{fontAwesome: "fab fa-js", text: "JS", proficiency: 0},
		// {fontAwesome: "fab fa-sass", text: "Sass", proficiency: 30},
		{fontAwesome: "fab fa-react", text: "React", proficiency: 0},
		{fontAwesome: "fab fa-android", text: "Android", proficiency: 0},
		{fontAwesome: "fab fa-java", text: "java", proficiency: 0},
		{fontAwesome: "fab fa-php", text: "PHP", proficiency: 0},
		{fontAwesome: "fab fa-git", text: "git", proficiency: 0},
		{fontAwesome: "fab fa-gitlab", text: "gitlab", proficiency: 0},
		{fontAwesome: "fab fa-github", text: "github", proficiency: 0},
		// {fontAwesome: "fab fa-figma", text: "figma", proficiency: 0},

	],
	view: true
};

export const experience = {
	title: "경력",
	lists: [
		{
			date: "2016.09 ~ 2016.12",
			company: "카젠",
			role: "카젠 연구소 수습",
		},
		{
			date: "2017.04 ~ 2018.02",
			company: "큐랩",
			role: "큐랩 웹 개발자",
		},
		{
			date: "2020.09 ~",
			company: "베스텔라랩",
			role: "프론트 엔드 개발자 (앱)",
		},
	
	],
	view: true
}

export const openSourceProjects = {
	title: emoji("Open Source Projects 💻"),
	view: false
}

export const projects = {
	title: emoji("프로젝트"),
	subTitle: "",
	lists: [
		{
			title: "워치마일",
			desc: "실내 주차장 내비게이션 앱으로 프론트 엔드 디자인을 담당하였습니다.",
			url: "https://play.google.com/store/apps/details?id=com.vestellalab.watchmilepublic"
		},
		{
			title: "워치마일 벤츠",
			desc: "벤츠와의 협업으로 진행한 프로젝트로 프론트 엔드 디자인, CAN 통신 등을 담당하였습니다.",
			url: "https://Kwon-Bum-Kyu.github.io/KBKPortFolio/WatchMile_Benz_Image.png"
		},
		{
			title: "트레블 씨투비",
			desc: "자유여행 계획 서비스로 항공사, 셔틀 버스 예약과 관련된 서비스가 있으며 Android 개발을 담당하였습니다.",
			url: "https://play.google.com/store/apps/details?id=com.pushapp.travelc2b"
		},
		{
			title: "롤링 러너",
			desc: "템플런과 같은 런닝 게임으로 어드민 페이지를 제작, 서버 관리를 담당하였습니다.",
			url: "https://youtu.be/gN9hYygCbWY"
		},
		
	],
	view: true
}

export const achievements = {
	title: emoji("Achievements And Certifications 🏆"),
	subTitle: "subtitle for achievement",
	lists: [
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Achievement...😥",
			desc: "I'll try harder!"
		},
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Certification...😥",
			desc: "I'll try harder!"
		},
	],
	view: false
};

export const blogs = {
	title: emoji("기술서, 기타 게시물 📰"),
	subTitle: "",
	lists: [
		{
			title: "경력 기술서",
			desc: "경력 기술서 입니다.",
			url: "https://kaput-throat-bee.notion.site/7da23061d4c847709a118724f4e9f1ff"
		},
		{
			title: "벤츠 스타트업 아우토반",
			desc: "벤츠에서 진행한 스타트업 아우토반 프로젝트 기사입니다.",
			url: "https://biz.heraldcorp.com/view.php?ud=20201102001087"
		},
	],
	view: true
}

export const contactInfo = {
	title: "연락처 📞",
	subTitle: "문의를 위한 연락처",
	introduce: emoji("SNS, 메일 등 ↓↓"),
	view: true
}